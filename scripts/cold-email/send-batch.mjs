#!/usr/bin/env node
// Cold outreach email tool. Run:
//   npm run cold-email -- contacts.csv           (dry run — local preview only, no Resend calls)
//   npm run cold-email -- contacts.csv --send     (actually sends)
//   npm run cold-email -- contacts.csv --limit=50 (override the default 150/run cap)
//
// CSV needs an "email" column. Optional: "name" (or "first_name"), "business" (or "company").
// Requires RESEND_API_KEY in the environment — run via `npm run cold-email`, which loads .env.
//
// Every email address this tool has ever sent to is recorded in data/sent-log.json (gitignored)
// and is never contacted again by a later run, regardless of which CSV it came from.
//
// Resend's plan caps total segments at 3 (see resend.com/pricing). This tool creates one
// temporary segment per --send run and deletes it immediately after (success or failure) —
// the ledger above is the permanent dedup record, so the segment doesn't need to persist.
// Dry runs never touch Resend's API at all, so reviewing never costs quota.

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "csv-parse/sync";
import { Resend } from "resend";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, "data");
const LEDGER_PATH = path.join(DATA_DIR, "sent-log.json");
const TEMPLATE_PATH = path.join(__dirname, "email-template.html");

const FROM = "Kyle from Handsfree <hello@notifications.handsfreetradie.com.au>";
const REPLY_TO = "hello@handsfreetradie.com.au";
const SUBJECT = "Missing calls while you're on the tools?";
const DEFAULT_LIMIT = 150;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function parseArgs(argv) {
  const positional = [];
  const flags = new Set();
  const kv = {};
  for (const arg of argv) {
    if (arg.startsWith("--")) {
      const [key, ...rest] = arg.slice(2).split("=");
      if (rest.length) kv[key] = rest.join("=");
      else flags.add(key);
    } else {
      positional.push(arg);
    }
  }
  return { csvPath: positional[0], send: flags.has("send"), limit: kv.limit ? parseInt(kv.limit, 10) : DEFAULT_LIMIT };
}

async function ensureBusinessProperty(resend) {
  const { data: props, error: listError } = await resend.contactProperties.list();
  if (listError) {
    console.error("Failed to list contact properties:", listError);
    process.exit(1);
  }
  const list = Array.isArray(props) ? props : props?.data || [];
  if (list.some((p) => p.key === "business")) return;
  const { error: createError } = await resend.contactProperties.create({
    key: "business",
    type: "string",
    fallbackValue: "your mob",
  });
  if (createError) {
    console.error("Failed to create the 'business' contact property:", createError);
    process.exit(1);
  }
  console.log("Registered the 'business' contact property (first run only).");
}

async function loadLedger() {
  if (!existsSync(LEDGER_PATH)) return [];
  return JSON.parse(await readFile(LEDGER_PATH, "utf8"));
}

async function saveLedger(entries) {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(LEDGER_PATH, JSON.stringify(entries, null, 2));
}

function readCsv(csvPath) {
  const raw = readFileSync(csvPath, "utf8");
  const records = parse(raw, {
    columns: (header) => header.map((h) => h.trim().toLowerCase().replace(/\s+/g, "_")),
    skip_empty_lines: true,
    trim: true,
  });
  return records.map((r) => ({
    email: (r.email || "").trim(),
    name: (r.name || r.first_name || r.firstname || "").trim(),
    business: (r.business || r.company || "").trim(),
  }));
}

const TERMINAL_STATUSES = new Set(["sent", "failed", "cancelled", "canceled"]);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Sending is async — .send() only enqueues it. Poll until Resend reports a terminal
// status before doing anything else (like deleting the segment the send depends on).
async function waitForTerminalStatus(resend, broadcastId, { timeoutMs = 120000, intervalMs = 3000 } = {}) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const { data, error } = await resend.broadcasts.get(broadcastId);
    if (error) return { status: "unknown", error };
    if (TERMINAL_STATUSES.has(data.status)) return { status: data.status };
    await sleep(intervalMs);
  }
  return { status: "timeout" };
}

function renderPreview(template, row) {
  const values = { FIRST_NAME: row.name, business: row.business, RESEND_UNSUBSCRIBE_URL: "(unsubscribe link — generated per-recipient when actually sent)" };
  return template.replace(/\{\{\{(\w+)(?:\|([^}]*))?\}\}\}/g, (_, key, fallback) => values[key] || fallback || "");
}

async function main() {
  const { csvPath, send, limit } = parseArgs(process.argv.slice(2));

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set. Run this via `npm run cold-email -- ...` with a .env file present (see scripts/cold-email/README below).");
    process.exit(1);
  }
  if (!csvPath) {
    console.error("Usage: npm run cold-email -- <contacts.csv> [--send] [--limit=150]");
    process.exit(1);
  }

  const rows = readCsv(csvPath);
  const valid = rows.filter((r) => EMAIL_RE.test(r.email));
  const invalidCount = rows.length - valid.length;

  const ledger = await loadLedger();
  const alreadySent = new Set(ledger.map((e) => e.email.toLowerCase()));
  const seenThisRun = new Set();
  const newRows = [];
  let dupeCount = 0;
  for (const row of valid) {
    const key = row.email.toLowerCase();
    if (alreadySent.has(key) || seenThisRun.has(key)) {
      dupeCount++;
      continue;
    }
    seenThisRun.add(key);
    newRows.push(row);
  }

  console.log(`Parsed ${rows.length} rows: ${invalidCount} invalid, ${dupeCount} already contacted, ${newRows.length} new.`);

  if (newRows.length === 0) {
    console.log("Nothing new to send. Exiting without touching Resend.");
    return;
  }
  if (newRows.length > limit) {
    console.error(`${newRows.length} new contacts exceeds the --limit of ${limit}. Split the CSV into smaller batches or pass --limit=N to override.`);
    process.exit(1);
  }

  const html = await readFile(TEMPLATE_PATH, "utf8");

  if (!send) {
    console.log(`\nDRY RUN — no Resend API calls made, nothing was sent.`);
    console.log(`Subject: ${SUBJECT}`);
    console.log(`From: ${FROM}\n`);
    console.log(`--- Preview using row 1 (${newRows[0].email}) ---`);
    console.log(renderPreview(html, newRows[0]));
    console.log(`--- end preview ---\n`);
    console.log(`Re-run with --send to actually create contacts in Resend and send.`);
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  await ensureBusinessProperty(resend);
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const segmentName = `cold-outreach-${stamp}`;

  const { data: segment, error: segmentError } = await resend.segments.create({ name: segmentName });
  if (segmentError) {
    console.error("Failed to create segment:", segmentError);
    process.exit(1);
  }
  console.log(`Created segment ${segment.id} (${segmentName}).`);

  let keepSegment = false;
  try {
    const addedRows = [];
    for (const row of newRows) {
      const { error: contactError } = await resend.contacts.create({
        email: row.email,
        firstName: row.name || undefined,
        unsubscribed: false,
        properties: row.business ? { business: row.business } : undefined,
        segments: [{ id: segment.id }],
      });
      if (contactError) {
        console.error(`Skipping ${row.email} — failed to add as contact:`, contactError);
        continue;
      }
      addedRows.push(row);
    }
    console.log(`Added ${addedRows.length}/${newRows.length} contacts to the segment.`);

    if (addedRows.length === 0) {
      console.log("No contacts were successfully added — not creating a broadcast.");
      return;
    }

    const { data: broadcast, error: broadcastError } = await resend.broadcasts.create({
      name: segmentName,
      from: FROM,
      subject: SUBJECT,
      html,
      segmentId: segment.id,
      replyTo: REPLY_TO,
    });
    if (broadcastError) {
      console.error("Failed to create broadcast:", broadcastError);
      process.exit(1);
    }

    const { error: sendError } = await resend.broadcasts.send(broadcast.id);
    if (sendError) {
      console.error("Failed to send broadcast:", sendError);
      process.exit(1);
    }

    console.log(`Broadcast ${broadcast.id} queued — waiting for it to finish sending before cleaning up...`);
    const result = await waitForTerminalStatus(resend, broadcast.id);

    if (result.status === "sent") {
      const now = new Date().toISOString();
      const newLedgerEntries = addedRows.map((r) => ({ email: r.email, name: r.name, business: r.business, broadcastId: broadcast.id, sentAt: now }));
      await saveLedger([...ledger, ...newLedgerEntries]);
      console.log(`\nSENT — broadcast ${broadcast.id} to ${addedRows.length} contacts. Ledger updated (${ledger.length + newLedgerEntries.length} total contacted all-time).`);
    } else if (result.status === "timeout") {
      keepSegment = true;
      console.error(`\nBroadcast ${broadcast.id} didn't reach a final status within the wait window — check the Resend dashboard. NOT recorded in the ledger (safe to retry once you confirm what happened), and the segment is left in place (not deleted) so the send can still complete. Delete it manually once you've confirmed the outcome — plan caps at 3 segments total.`);
    } else {
      console.error(`\nBroadcast ${broadcast.id} ended with status "${result.status}" — it did NOT send. Check the Resend dashboard for details. NOT recorded in the ledger, so it's safe to fix and retry.`);
    }
  } finally {
    if (keepSegment) {
      console.log(`Segment ${segment.id} left in place — see message above.`);
    } else {
      const { error: removeError } = await resend.segments.remove(segment.id);
      if (removeError) {
        console.error(`Warning: failed to clean up segment ${segment.id} — delete it manually in the Resend dashboard (plan caps at 3 total):`, removeError);
      } else {
        console.log(`Cleaned up segment ${segment.id} (freed back up — the ledger keeps the permanent dedup record).`);
      }
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
