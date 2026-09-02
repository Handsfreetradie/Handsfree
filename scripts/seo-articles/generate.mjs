#!/usr/bin/env node
// SEO article generator for the Handsfree blog. Run:
//   npm run seo-articles                  (generate every keyword in keywords.json)
//   npm run seo-articles -- --limit=3     (only the first 3 keywords, for a quick test)
//
// Reads scripts/seo-articles/keywords.json, calls the Claude API once per keyword,
// and writes a draft article (matching the BlogPost shape in src/content/blogPosts.ts)
// to scripts/seo-articles/output/<slug>.json for you to review.
//
// Nothing here touches blogPosts.ts or publishes anything — these are drafts only.
// Requires ANTHROPIC_API_KEY in the environment — run via `npm run seo-articles`,
// which loads .env.

import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Anthropic from "@anthropic-ai/sdk";
import { z } from "zod";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const KEYWORDS_PATH = path.join(__dirname, "keywords.json");
const OUTPUT_DIR = path.join(__dirname, "output");
const BLOG_POSTS_PATH = path.join(__dirname, "../../src/content/blogPosts.ts");
const MODEL = "claude-opus-5";

async function readExistingSlugs() {
  const source = await readFile(BLOG_POSTS_PATH, "utf-8");
  const slugs = [...source.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
  return new Set(slugs);
}

const EXISTING_SLUGS = await readExistingSlugs();

const SYSTEM_PROMPT = `You are writing SEO blog articles for the Handsfree blog (handsfreetradie.com.au).

Handsfree is an AI digital receptionist built for Australian tradespeople (electricians, plumbers, builders, etc). The founders ran a trade business themselves and built Handsfree because they lived the problem of missed calls firsthand. Core hook: "Never miss a call. Ever again." The differentiator versus generic AI answering tools is that Handsfree is built, monitored, and improved for the customer — not a DIY bot you configure yourself.

Pricing (quote these exactly, never invent numbers):
- Essentials — $129/month: SMS-only missed-call text-back, no live answering, 100 SMS/month included.
- Receptionist — $249/month: live AI answering in the business's name, 150 mins call answering + 150 SMS/month, 24/7 after-hours coverage, calendar booking included.
- Pro — $449/month: everything in Receptionist, 400 mins + 400 SMS/month, priority support.
- Custom — by quote, for high-volume operations.
No lock-in contracts on any tier.

Voice: direct, honest, no corporate fluff, no vague "contact us for pricing" games. Write for a tradie reading on their phone between jobs — short paragraphs, concrete, respects their time. Australian English and spelling (e.g. "organise", "colour"). Never invent statistics, case studies, or customer quotes.

Existing site pages available for internal links: /pricing, /onboarding, /blog.
Existing blog post slugs (do not duplicate, but do suggest linking to these where relevant): ${[...EXISTING_SLUGS].join(", ") || "(none yet)"}.

For the body, use only these block types, matching this TypeScript shape exactly:
- { type: "heading", text }
- { type: "paragraph", text }
- { type: "list", items: string[] }
- { type: "cta", text, to }  — "to" must be one of /pricing, /onboarding, or /blog/<existing-slug>

Structure a typical article as: opening paragraph, 2-4 headings each with 1-3 paragraphs or a list, and one cta block near the end. Aim for 500-800 words of body text. The meta description must be 140-160 characters. The slug must be lowercase, hyphenated, and not already in the existing slugs list above.`;

const ArticleSchema = z.object({
  slug: z.string().describe("lowercase-hyphenated, must not already exist"),
  title: z.string().describe("SEO title, under 65 characters"),
  description: z.string().describe("meta description, 140-160 characters"),
  excerpt: z.string().describe("1-2 sentence excerpt shown on the blog index"),
  body: z.array(
    z.object({
      type: z.enum(["heading", "paragraph", "list", "cta"]),
      text: z.string().optional(),
      items: z.array(z.string()).optional(),
      to: z.string().optional(),
    }),
  ),
  internalLinkSuggestions: z
    .array(z.string())
    .min(3)
    .max(5)
    .describe("3-5 suggested internal link targets (paths) for a human editor to consider, beyond the one used in the cta block"),
});

function parseArgs(argv) {
  const kv = {};
  for (const arg of argv) {
    if (arg.startsWith("--")) {
      const [key, ...rest] = arg.slice(2).split("=");
      kv[key] = rest.join("=");
    }
  }
  return { limit: kv.limit ? parseInt(kv.limit, 10) : undefined };
}

async function generateArticle(client, keyword, notes) {
  const userPrompt = notes
    ? `Write an SEO article targeting the keyword: "${keyword}"\n\nAdditional angle/notes: ${notes}`
    : `Write an SEO article targeting the keyword: "${keyword}"`;

  const response = await client.messages.parse({
    model: MODEL,
    max_tokens: 8000,
    output_config: { effort: "medium", format: zodOutputFormat(ArticleSchema) },
    system: [{ type: "text", text: SYSTEM_PROMPT, cache_control: { type: "ephemeral" } }],
    messages: [{ role: "user", content: userPrompt }],
  });

  if (!response.parsed_output) {
    throw new Error("Model response did not parse against the article schema");
  }
  return response.parsed_output;
}

async function main() {
  const { limit } = parseArgs(process.argv.slice(2));

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("ANTHROPIC_API_KEY is not set. Add it to .env, then run via `npm run seo-articles`.");
    process.exit(1);
  }

  const keywords = JSON.parse(await readFile(KEYWORDS_PATH, "utf-8"));
  const batch = limit ? keywords.slice(0, limit) : keywords;

  await mkdir(OUTPUT_DIR, { recursive: true });

  const client = new Anthropic(
    process.env.ANTHROPIC_WORKSPACE_ID
      ? { defaultHeaders: { "anthropic-workspace-id": process.env.ANTHROPIC_WORKSPACE_ID } }
      : {},
  );
  const results = [];

  for (const { keyword, notes } of batch) {
    process.stdout.write(`Generating: ${keyword} ... `);
    try {
      const article = await generateArticle(client, keyword, notes);
      const outPath = path.join(OUTPUT_DIR, `${article.slug}.json`);
      const draft = {
        slug: article.slug,
        title: article.title,
        description: article.description,
        publishedDate: new Date().toISOString().slice(0, 10),
        excerpt: article.excerpt,
        body: article.body,
        internalLinkSuggestions: article.internalLinkSuggestions,
      };
      await writeFile(outPath, JSON.stringify(draft, null, 2) + "\n", "utf-8");
      console.log(`done -> ${path.relative(process.cwd(), outPath)}`);
      results.push({ keyword, slug: article.slug, ok: true });
    } catch (err) {
      console.log("FAILED");
      console.error(`  ${err.message}`);
      results.push({ keyword, ok: false, error: err.message });
    }
  }

  console.log("\nSummary:");
  for (const r of results) {
    console.log(`  ${r.ok ? "✓" : "✗"} ${r.keyword}${r.ok ? ` -> ${r.slug}` : ` (${r.error})`}`);
  }
  console.log(`\nReview drafts in scripts/seo-articles/output/, then tell me which ones to merge into src/content/blogPosts.ts.`);
}

main();
