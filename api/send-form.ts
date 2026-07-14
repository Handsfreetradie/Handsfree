// Vercel serverless function — receives form submissions from the site
// and emails them to Handsfree via Resend. The Resend API key lives in
// the RESEND_API_KEY environment variable (Vercel project settings),
// never in frontend code.

const TO_EMAIL = "hello@handsfreetradie.com.au";
const MAX_FIELD_LENGTH = 2000;

function clean(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, MAX_FIELD_LENGTH);
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return res.status(500).json({ error: "Email service not configured" });
  }

  const body = req.body || {};
  const formType = body.formType === "signup" ? "signup" : "contact";
  const email = clean(body.email);
  const name = clean(body.name) || `${clean(body.firstName)} ${clean(body.lastName)}`.trim();

  if (!email || !name) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  let subject: string;
  let text: string;

  if (formType === "signup") {
    subject = `New Handsfree signup: ${name}${body.company ? ` — ${clean(body.company)}` : ""}`;
    text = [
      "New signup from the Handsfree website",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${clean(body.phone)}`,
      `Company: ${clean(body.company)}`,
      `Job title: ${clean(body.jobTitle)}`,
      `Business type: ${clean(body.businessType)}`,
      `Call volume: ${clean(body.callVolume)}`,
      "",
      `Submitted: ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Perth" })} (Perth time)`,
    ].join("\n");
  } else {
    subject = `Website enquiry from ${name}`;
    text = [
      "New enquiry from the Handsfree website contact form",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${clean(body.phone)}`,
      `Company: ${clean(body.company)}`,
      "",
      "Message:",
      clean(body.message),
      "",
      `Submitted: ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Perth" })} (Perth time)`,
    ].join("\n");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM || "Handsfree Website <noreply@standaid.ai>",
      to: [TO_EMAIL],
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Resend error:", response.status, detail);
    return res.status(502).json({ error: "Failed to send" });
  }

  return res.status(200).json({ ok: true });
}
