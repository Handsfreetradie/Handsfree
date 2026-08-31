export interface BlogContentBlock {
  type: "heading" | "paragraph" | "list" | "cta";
  text?: string;
  items?: string[];
  to?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedDate: string;
  excerpt: string;
  body: BlogContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-does-an-ai-receptionist-cost-in-australia",
    title: "How Much Does an AI Receptionist Cost in Australia? (2026 Guide)",
    description:
      "A straight answer on AI receptionist pricing in Australia — what affects the cost, and exactly what Handsfree charges per tier with no hidden extras.",
    publishedDate: "2026-08-31",
    excerpt:
      "Prices for AI receptionists in Australia vary a lot depending on what you actually need. Here's what affects the cost, and exactly what we charge.",
    body: [
      {
        type: "paragraph",
        text: "If you're comparing AI receptionist options for your trade business, the honest answer is: it depends on what you actually need answered. A basic missed-call text-back tool costs a lot less than a full receptionist that answers every call live, books jobs into your calendar, and handles after-hours enquiries. Here's what actually drives the price, and exactly what Handsfree charges — no vague \"contact us for pricing\" games.",
      },
      { type: "heading", text: "What Actually Affects the Price" },
      {
        type: "list",
        items: [
          "Whether it just texts back missed calls, or actually answers and talks to the customer",
          "How many minutes of calls or SMS you need covered each month",
          "Whether it's a generic bot you configure yourself, or built and tuned around your specific business",
          "After-hours and weekend coverage",
          "Calendar/booking integration",
        ],
      },
      {
        type: "paragraph",
        text: "A lot of that first category — simple automated text-back — sits at the cheaper end of the market. Full live-answering AI receptionists with proper call handling cost more, because there's more actually happening on the call.",
      },
      { type: "heading", text: "Handsfree's Pricing" },
      {
        type: "list",
        items: [
          "Essentials — $129/month: SMS-only, no live answering. Your phone rings exactly like it does now, and every missed call gets an automatic text back. 100 SMS/month included.",
          "Receptionist — $249/month: A digital receptionist answers calls in your business name, 150 mins of call answering + 150 SMS/month, 24/7 after-hours coverage, calendar booking included.",
          "Pro — $449/month: Everything in Receptionist, 400 mins + 400 SMS/month, priority support.",
          "Custom — by quote: For high-volume operations that need more than the Pro tier covers.",
        ],
      },
      {
        type: "paragraph",
        text: "No lock-in contracts on any tier.",
      },
      { type: "heading", text: "Which One Do You Actually Need?" },
      {
        type: "paragraph",
        text: "If you're not sure whether you need a full receptionist or just want missed calls to get an instant text back, start with Essentials — it's the lower-commitment option, and you can upgrade any time your call volume grows.",
      },
      { type: "cta", text: "See the full pricing breakdown", to: "/pricing" },
    ],
  },
  {
    slug: "ai-receptionist-vs-missed-call-text-back",
    title: "AI Receptionist vs. Missed-Call Text-Back: Which Does Your Trade Need?",
    description:
      "Not every tradie needs a full AI receptionist. Here's how to tell whether a live-answering receptionist or a simple missed-call text-back fits your business better.",
    publishedDate: "2026-08-31",
    excerpt:
      "A full AI receptionist and a simple missed-call text-back solve different problems. Here's how to work out which one actually fits your business.",
    body: [
      {
        type: "paragraph",
        text: "Not every trade business needs the same thing. Some tradies get flooded with calls all day and need someone (or something) actually answering and handling the conversation. Others just need to stop losing customers who hang up before leaving a voicemail. These are genuinely different problems, and it's worth being clear on which one you actually have before you pay for either.",
      },
      { type: "heading", text: "Missed-Call Text-Back (Essentials)" },
      {
        type: "paragraph",
        text: "Your phone rings exactly like it always has. If you don't pick up, the caller gets an automatic text within seconds — so instead of hanging up and calling the next business on Google, they get a message back and know you'll follow up. No one talks to the caller; it's a safety net, not a receptionist.",
      },
      {
        type: "paragraph",
        text: "This suits tradies who: mostly can answer their own phone, want a low-cost way to stop losing leads on the calls they genuinely can't get to, and aren't ready to hand over the actual phone conversation to anything else.",
      },
      { type: "heading", text: "A Full Digital Receptionist (Receptionist / Pro)" },
      {
        type: "paragraph",
        text: "This actually answers the call in your business name, has a real conversation, captures the job details, and can book it straight into your calendar — including after-hours and weekends when you're not going to pick up anyway.",
      },
      {
        type: "paragraph",
        text: "This suits tradies who: get enough call volume that missing calls is a regular, ongoing cost, want after-hours calls handled properly instead of going to voicemail, or are tired of playing phone tag between jobs.",
      },
      { type: "heading", text: "Our Honest Take" },
      {
        type: "paragraph",
        text: "If you're unsure, start with Essentials. It's the lower-cost, lower-commitment option, and every plan can be upgraded later without starting over.",
      },
      { type: "cta", text: "Compare all plans", to: "/pricing" },
    ],
  },
  {
    slug: "how-many-jobs-are-you-losing-to-missed-calls",
    title: "How Many Jobs Are You Losing to Missed Calls?",
    description:
      "Every missed call from a tradie mid-job is a customer who might just ring the next business instead. Here's what's actually happening on the other end of that call.",
    publishedDate: "2026-08-31",
    excerpt:
      "You're up a ladder, under a house, or elbow-deep in a job — and your phone rings. What happens next decides whether that job is yours or someone else's.",
    body: [
      {
        type: "paragraph",
        text: "You're up a ladder, under a house, or driving between jobs — and your phone rings. You can't get to it in time. What happens next is simple: most people don't leave a voicemail. They hang up and call the next business that shows up in their search.",
      },
      {
        type: "paragraph",
        text: "That's the real cost of a missed call. It's not just one lost job — it's a customer who now has no idea you exist, and a competitor who just picked up an easy win because they happened to answer.",
      },
      { type: "heading", text: "Why This Is Hard to Fix Yourself" },
      {
        type: "paragraph",
        text: "You can't always answer — that's not a discipline problem, it's just the job. Trade work means your hands and attention are somewhere else most of the day. Hiring someone to sit by the phone full-time is a real wage, real super, and real management overhead most small operators can't justify for a part-time problem.",
      },
      { type: "heading", text: "What Actually Changes It" },
      {
        type: "list",
        items: [
          "Every call gets picked up — either by a digital receptionist or an instant text-back, so the customer isn't left hanging",
          "After-hours and weekend calls don't just go to voicemail",
          "Job details get captured properly the first time, so you're not calling back to ask questions you should already have the answer to",
        ],
      },
      {
        type: "paragraph",
        text: "We built Handsfree because we lived this exact problem running a trade business ourselves. If missed calls are costing you jobs, it's worth setting up a plan built around how you actually work.",
      },
      { type: "cta", text: "Get started", to: "/onboarding" },
    ],
  },
];
