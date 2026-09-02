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

  {
    slug: "virtual-receptionist-for-electricians",
    title: "Virtual Receptionist for Electricians: What Actually Works",
    description:
      "A practical guide to using a virtual receptionist for electricians in Australia — what it costs, what it should handle, and how to set one up without losing jobs.",
    publishedDate: "2026-09-02",
    excerpt:
      "Every call you miss on the tools is a job someone else is quoting. Here's how a virtual receptionist works for electricians, what it should handle, and what it costs.",
    body: [
      {
        type: "paragraph",
        text: "You're up a ladder in a roof cavity with your phone in the ute. Someone's switchboard has just tripped and they're ringing three electricians in a row. Whoever answers gets the job. That's the whole game.",
      },
      {
        type: "paragraph",
        text: "A virtual receptionist for electricians is meant to fix that — someone (or something) picks up every call so you're not losing work while your hands are full. But there's a big difference between the options on the market, and most of it comes down to who's actually doing the answering.",
      },
      { type: "heading", text: "The three options electricians usually consider" },
      {
        type: "paragraph",
        text: "Broadly, you've got three ways to stop calls going to voicemail:",
      },
      {
        type: "list",
        items: [
          "Hire someone part-time. Real person, real wages, works business hours only. Costs the most and doesn't cover the 6pm switchboard emergency.",
          "Human call centre. Answers in your name, charges per call or per minute. Quality swings depending on who's on shift, and the operator usually knows nothing about electrical work.",
          "AI digital receptionist. Answers 24/7 in your business name, takes the details, books the job, texts you a summary. Fixed monthly cost.",
        ],
      },
      {
        type: "paragraph",
        text: "For most sole traders and small crews, the third option is the one that actually stacks up on price and coverage. But not all AI tools are the same, which we'll get to.",
      },
      { type: "heading", text: "What a good virtual receptionist should handle for a sparky" },
      {
        type: "paragraph",
        text: "Answering the phone is the bare minimum. What you actually need is the front half of your admin done before you get off site.",
      },
      {
        type: "list",
        items: [
          "Answer in your business name, not \"the answering service\"",
          "Sort urgent from routine — no power at all versus a quote for downlights",
          "Capture the address, the fault, and whether it's residential or commercial",
          "Book straight into your calendar for quotes and non-urgent work",
          "Text you a clean summary so you can decide who to ring back first",
          "Handle after-hours calls, which is when a lot of electrical emergencies land",
        ],
      },
      {
        type: "paragraph",
        text: "That last one matters more for electricians than for most trades. Power faults don't wait for business hours. If your phone goes to voicemail at 7pm, the customer rings the next name on the list.",
      },
      { type: "heading", text: "Built for you, not handed to you" },
      {
        type: "paragraph",
        text: "Here's where a lot of tradies get burned. Plenty of AI answering tools are DIY — you sign up, and now you're the one writing scripts, testing what happens when someone mumbles an address, and tweaking prompts at 10pm. That's a second job you didn't ask for.",
      },
      {
        type: "paragraph",
        text: "Handsfree is set up and monitored for you. We built it because we ran a trade business and lived the missed-call problem ourselves. You tell us how your business runs — service area, urgent versus routine, what you don't do — and we build the receptionist around that, then keep improving it as we hear real calls come through.",
      },
      { type: "heading", text: "What it costs" },
      {
        type: "paragraph",
        text: "No games, no \"contact us for pricing\". Here's the lot:",
      },
      {
        type: "list",
        items: [
          "Essentials — $129/month. SMS-only missed-call text-back, no live answering, 100 SMS a month included.",
          "Receptionist — $249/month. Live AI answering in your business name, 150 minutes of call answering plus 150 SMS, 24/7 after-hours coverage, calendar booking included.",
          "Pro — $449/month. Everything in Receptionist with 400 minutes and 400 SMS, plus priority support.",
          "Custom — by quote, for high-volume operations.",
        ],
      },
      {
        type: "paragraph",
        text: "No lock-in contracts on any tier. For a lot of electricians, one recovered switchboard job or a decent rewire covers the month.",
      },
      { type: "heading", text: "Which tier suits an electrician?" },
      {
        type: "paragraph",
        text: "If you're a solo sparky doing mostly repeat residential work and you just want people to know you'll ring back, Essentials does the job. A text goes out the second you miss a call, so the customer doesn't immediately dial the next number.",
      },
      {
        type: "paragraph",
        text: "If you're taking new enquiries off Google, doing after-hours callouts, or juggling a couple of vans, Receptionist is the sensible starting point. Live answering in your name, calls triaged, quotes booked in the diary. Pro is for busier outfits where the call volume is genuinely heavy.",
      },
      { type: "cta", text: "See the full pricing breakdown and pick the tier that fits your workload.", to: "/pricing" },
      { type: "heading", text: "Getting started" },
      {
        type: "paragraph",
        text: "Setup isn't a weekend project. You give us the basics about how your business runs, we build the receptionist, and calls start getting answered. From then on it's monitored and improved on our side, not yours.",
      },
      {
        type: "paragraph",
        text: "Never miss a call. Ever again. That's the whole point.",
      },
    ],
  },

  {
    slug: "answering-service-for-plumbers",
    title: "Answering Service for Plumbers: What Actually Works in 2026",
    description:
      "A plain-English guide to answering services for plumbers in Australia: what they cost, what AI does better than a call centre, and how to pick the right setup.",
    publishedDate: "2026-09-02",
    excerpt:
      "Burst pipes don't wait for you to climb out from under a sink. Here's how answering services for plumbers actually work, what they cost, and which type suits a working plumber.",
    body: [
      {
        type: "paragraph",
        text: "You're under a sink with a torch in your teeth when the phone goes. You can't answer. By the time you call back forty minutes later, the job's gone to the next plumber on the list — the one who picked up.",
      },
      {
        type: "paragraph",
        text: "That's the whole reason answering services exist for plumbers. But not all of them are worth the money, and some create more admin than they save. Here's the honest rundown.",
      },
      { type: "heading", text: "Why plumbing is the worst trade for missed calls" },
      {
        type: "paragraph",
        text: "Plumbing runs on urgency. A hot water system fails, a toilet overflows, a pipe bursts in a ceiling — those callers aren't shopping around for the best price. They're ringing down a list until someone answers.",
      },
      {
        type: "paragraph",
        text: "That means two things. One: an answered call converts at a far higher rate than a callback. Two: your hands are literally full most of the day. You're in a roof cavity, under a house, or holding a fitting in place. Plumbers miss more calls than almost anyone, and each one is worth more.",
      },
      {
        type: "paragraph",
        text: "Add after-hours to that. Emergency plumbing calls come at 9pm on a Sunday. If your phone rings out, that emergency callout fee goes to whoever answered.",
      },
      { type: "heading", text: "The three types of answering service" },
      {
        type: "paragraph",
        text: "There are really only three options, and they're very different.",
      },
      {
        type: "list",
        items: [
          "Traditional call centre — a human in a call centre answers using a script. Usually per-call or per-minute pricing, often with a minimum. They take a message and pass it on. They don't know your service area, your pricing, or whether you do gas fitting.",
          "Missed-call text-back — when you can't answer, an automatic SMS goes out saying you'll call back. Cheap and better than nothing, but it's a holding pattern, not a booking.",
          "AI receptionist — answers live in your business name, asks the questions you'd ask, and books straight into your calendar. Available 24/7, doesn't get sick, doesn't put callers on hold.",
        ],
      },
      {
        type: "paragraph",
        text: "For most plumbers, the choice comes down to the last two — and it depends on whether you want the call handled or just acknowledged.",
      },
      { type: "heading", text: "What a good answering service should ask your callers" },
      {
        type: "paragraph",
        text: "A generic script is worse than useless. If someone rings about a burst pipe and the service just takes a name and number, you've learned nothing and still have to ring back.",
      },
      {
        type: "paragraph",
        text: "What you actually want captured:",
      },
      {
        type: "list",
        items: [
          "What the problem is, in the caller's own words",
          "Whether it's an emergency or can wait",
          "The suburb — so you know if it's in your patch",
          "Whether it's a home, rental or commercial site (agents and landlords change the job entirely)",
          "Whether there's water actively coming out right now",
          "Best contact number and a preferred time",
        ],
      },
      {
        type: "paragraph",
        text: "Get those six things and you can triage from the ute in thirty seconds. That's the difference between an answering service that saves you time and one that just moves the admin around.",
      },
      { type: "heading", text: "What it costs" },
      {
        type: "paragraph",
        text: "Handsfree pricing is straightforward, no quote games:",
      },
      {
        type: "list",
        items: [
          "Essentials — $129/month. SMS-only missed-call text-back, no live answering, 100 SMS included.",
          "Receptionist — $249/month. Live AI answering in your business name, 150 minutes of call answering and 150 SMS, 24/7 after-hours cover, calendar booking included.",
          "Pro — $449/month. Everything in Receptionist plus 400 minutes and 400 SMS, and priority support.",
          "Custom — by quote, for high-volume operations.",
        ],
      },
      {
        type: "paragraph",
        text: "No lock-in contracts on any tier. For most sole-trader and small-team plumbers, Receptionist is the sweet spot — one recovered hot water swap usually covers the month.",
      },
      { type: "heading", text: "Why built-for-you beats DIY" },
      {
        type: "paragraph",
        text: "Plenty of AI answering tools hand you a dashboard and wish you luck. You end up writing prompts at 10pm instead of doing your invoicing.",
      },
      {
        type: "paragraph",
        text: "Handsfree is set up for you. We built it because we ran a trade business and lived this exact problem — the phone going while you're mid-job, the callbacks that never convert. We configure it around how your business actually runs, monitor how it's handling calls, and keep improving it. You get a receptionist, not homework.",
      },
      { type: "cta", text: "See which plan fits your plumbing business", to: "/pricing" },
      { type: "heading", text: "The simple test" },
      {
        type: "paragraph",
        text: "Count the missed calls on your phone from last week. Multiply by your average job value. Then take a rough guess at how many of those went to another plumber.",
      },
      {
        type: "paragraph",
        text: "If that number is bigger than $249, you already know what to do.",
      },
    ],
  },

  {
    slug: "24-7-call-answering-service-for-tradies",
    title: "24/7 Call Answering Service for Tradies: What to Know",
    description:
      "How a 24/7 call answering service works for Australian tradies, what it costs, and how to pick one that actually books jobs instead of taking messages.",
    publishedDate: "2026-09-02",
    excerpt:
      "Most trade enquiries come in when you're on the tools or off the clock. Here's how a 24/7 call answering service works for tradies, what it costs, and what to look for.",
    body: [
      {
        type: "paragraph",
        text: "Your phone doesn't care that you're up a ladder, under a house, or asleep. Customers ring when their hot water dies at 9pm, when a switchboard trips on a Sunday, or at 7:15am before they head to work. If nobody answers, they ring the next name on the list.",
      },
      {
        type: "paragraph",
        text: "That's the whole case for a 24/7 call answering service. Not fancy tech. Just making sure the phone gets picked up when the work is there.",
      },
      { type: "heading", text: "Why after-hours calls matter more for trades than most businesses" },
      {
        type: "paragraph",
        text: "A retail shop can get away with business hours. Trades can't, for two reasons.",
      },
      {
        type: "paragraph",
        text: "First, urgency. Blocked drains, no power, a leak through the ceiling — these are problems people want solved now, not Monday. Whoever answers first usually gets the job.",
      },
      {
        type: "paragraph",
        text: "Second, timing. Homeowners often ring about non-urgent work in the evening, after dinner, once the kids are down. That's exactly when most trade businesses go to voicemail. Meanwhile you're doing quotes at the kitchen table and can't take the call anyway.",
      },
      {
        type: "paragraph",
        text: "So the calls you miss aren't just emergencies. They're renovations, switchboard upgrades, bathroom jobs — the big-ticket stuff.",
      },
      { type: "heading", text: "What a 24/7 answering service actually does" },
      {
        type: "paragraph",
        text: "The old model was a call centre with humans reading off a script. It worked, sort of, but it was expensive, and the person on the phone had no idea what a meter box was.",
      },
      {
        type: "paragraph",
        text: "An AI digital receptionist does the same job differently. It answers in your business name, sounds normal, and handles the call end to end:",
      },
      {
        type: "list",
        items: [
          "Picks up every call, 24 hours a day, including weekends and public holidays",
          "Asks who's calling, what the job is, and where it is",
          "Works out whether it's urgent or can wait",
          "Books straight into your calendar where that's set up",
          "Texts you the details so you can act on it when you're free",
          "Sends the customer a confirmation so they know they've been heard",
        ],
      },
      {
        type: "paragraph",
        text: "The key thing: the customer gets a real conversation, not a beep and a request to leave a message. That's the difference between a booked job and a lost one.",
      },
      { type: "heading", text: "24/7 answering vs just diverting to voicemail or a mate" },
      {
        type: "paragraph",
        text: "Plenty of tradies have a workaround. Voicemail with a promise to call back. Divert to the missus. Divert to an apprentice who has no idea what to say. A shared phone that rings out anyway.",
      },
      {
        type: "paragraph",
        text: "Those all leak. Voicemail is the worst of them — most people hang up rather than leave a message, especially if they've already got another number to try.",
      },
      {
        type: "paragraph",
        text: "Missed-call text-back is a step up. If you can't answer, the caller gets an instant SMS instead of silence. It keeps the lead warm and costs a lot less than live answering. It just doesn't have a conversation or book anything in.",
      },
      { type: "cta", text: "Not sure which one suits your setup? Read our breakdown of AI receptionist vs missed-call text-back.", to: "/blog/ai-receptionist-vs-missed-call-text-back" },
      { type: "heading", text: "What it costs" },
      {
        type: "paragraph",
        text: "Here's our pricing, straight up. No \"contact us for a quote\" runaround.",
      },
      {
        type: "list",
        items: [
          "Essentials — $129/month: SMS-only missed-call text-back, no live answering, 100 SMS/month included.",
          "Receptionist — $249/month: live AI answering in your business name, 150 mins call answering + 150 SMS/month, 24/7 after-hours coverage, calendar booking included.",
          "Pro — $449/month: everything in Receptionist, 400 mins + 400 SMS/month, priority support.",
          "Custom — by quote, for high-volume operations.",
        ],
      },
      {
        type: "paragraph",
        text: "No lock-in contracts on any tier. If it's not earning its keep, you stop.",
      },
      {
        type: "paragraph",
        text: "For most sole traders and small crews, the Receptionist tier at $249/month is the one that covers nights and weekends properly. Do the maths against one job you'd otherwise miss.",
      },
      { type: "heading", text: "What to look for when you're choosing one" },
      {
        type: "paragraph",
        text: "A few things separate a service that works from one you'll cancel in a month:",
      },
      {
        type: "list",
        items: [
          "Real 24/7 coverage, not \"extended hours\" with a cut-off",
          "Answers in your business name, not a generic greeting",
          "Someone sets it up for you instead of handing you a dashboard and wishing you luck",
          "Ongoing monitoring so the answers improve over time",
          "Transparent pricing you can see before you talk to a salesperson",
          "No lock-in contract",
        ],
      },
      {
        type: "paragraph",
        text: "That last point about setup matters more than people expect. A lot of AI answering tools are DIY — you write the script, you test it, you fix it when it says something daft. If you had time for that, you'd have time to answer the phone.",
      },
      {
        type: "paragraph",
        text: "We built Handsfree because we ran a trade business and lived this exact problem. It's set up, monitored, and improved for you. You get on with the work.",
      },
      { type: "cta", text: "See what's included on each plan and get set up.", to: "/pricing" },
    ],
  },

  {
    slug: "how-to-stop-missing-calls-as-a-tradie",
    title: "How to Stop Missing Calls as a Tradie (7 Real Fixes)",
    description:
      "Practical ways Aussie tradies can stop missing calls while on the tools — from voicemail fixes and diverts to AI answering that books jobs 24/7.",
    publishedDate: "2026-09-02",
    excerpt:
      "You can't answer the phone with your hands in a switchboard. Here are the fixes that actually work for tradies — ranked from free to fully handled.",
    body: [
      {
        type: "paragraph",
        text: "You're up a ladder, under a house, or halfway through a board change. The phone rings. You either ignore it or you lose ten minutes and your train of thought. Either way, someone's paying for it — usually you.",
      },
      {
        type: "paragraph",
        text: "Missing calls isn't a discipline problem. It's a physics problem. You've got two hands and they're both busy. So the fix isn't \"try harder to answer\" — it's building a system that catches the call whether you're free or not. Here's how, from cheapest to most complete.",
      },
      { type: "heading", text: "1. Fix your voicemail greeting first (free, 5 minutes)" },
      {
        type: "paragraph",
        text: "Most tradie voicemails are still the default carrier message, or worse, a mailbox that's full. If someone rings and gets a robot voice reading out your number, they hang up and ring the next bloke.",
      },
      {
        type: "paragraph",
        text: "Record a greeting that says your business name, that you're on the tools, and exactly what to do next. Something like: \"You've called Dave at Southside Electrical. I'm on a job — text this number with your suburb and what you need and I'll get back to you today.\"",
      },
      {
        type: "paragraph",
        text: "It won't stop the missed call, but it stops some of the hang-ups. It's the bare minimum, not the solution.",
      },
      { type: "heading", text: "2. Stop letting calls ring out for 25 seconds" },
      {
        type: "paragraph",
        text: "Default ring time on most mobiles is long enough that a caller gives up before voicemail even kicks in. Shorten it. Most Australian carriers let you set no-answer divert timing with a short code — check with yours.",
      },
      {
        type: "paragraph",
        text: "Same goes for diverts. If you've got a mate, partner or apprentice who can pick up, set a conditional divert so unanswered calls roll to them instead of dying in a mailbox.",
      },
      { type: "heading", text: "3. Send a text back the moment you miss a call" },
      {
        type: "paragraph",
        text: "This is the single highest-value habit change. A missed call plus a text within a minute or two often saves the job, because the customer hasn't got around to ringing anyone else yet.",
      },
      {
        type: "paragraph",
        text: "Doing it manually works until you're busy — which is exactly when you miss the most calls. That's why automated missed-call text-back exists. It fires instantly, every time, without you touching the phone. Our Essentials plan does exactly this at $129/month with 100 SMS included.",
      },
      { type: "heading", text: "4. Batch your callbacks instead of chasing them" },
      {
        type: "paragraph",
        text: "Pick two or three windows a day — smoko, lunch, end of day — and return everything then. Trying to call people back between jobs means half-conversations in noisy places and no notes written down.",
      },
      {
        type: "paragraph",
        text: "Keep a running list in your phone. Name, suburb, job type, urgency. Anything not in a list gets forgotten by Thursday.",
      },
      { type: "heading", text: "5. Know which calls you genuinely can't afford to miss" },
      {
        type: "paragraph",
        text: "Not every missed call is equal. The ones that hurt most:",
      },
      {
        type: "list",
        items: [
          "Emergency and after-hours calls — hot water, no power, burst pipe. These callers ring three trades in five minutes.",
          "First-time callers who found you on Google. No relationship, no loyalty, no second attempt.",
          "Real estate and strata calls. Miss two and you're off the list.",
          "Anyone calling on a Saturday morning, when nobody else answers either.",
        ],
      },
      {
        type: "paragraph",
        text: "If your system only catches business-hours calls, you're leaving the most valuable ones on the table.",
      },
      { type: "heading", text: "6. Get someone — or something — to actually answer" },
      {
        type: "paragraph",
        text: "A text back is better than silence. A live answer is better than a text. A human receptionist works, but it's a wage, and they knock off at five.",
      },
      {
        type: "paragraph",
        text: "An AI receptionist answers in your business name, asks the questions you'd ask, sorts urgent from routine, and books straight into your calendar. It doesn't sleep, doesn't take annual leave, and doesn't care if three calls land at once.",
      },
      {
        type: "paragraph",
        text: "With Handsfree, the Receptionist plan is $249/month and includes live AI answering, 150 minutes of calls, 150 SMS, 24/7 after-hours coverage and calendar booking. Busier operations run on Pro at $449/month for 400 minutes, 400 SMS and priority support. No lock-in contracts on any tier.",
      },
      { type: "heading", text: "7. Don't build it yourself" },
      {
        type: "paragraph",
        text: "There are plenty of DIY AI phone tools now. The catch is you become the person configuring prompts, testing scripts and fixing it when it mishears a suburb name. That's another job you don't have time for.",
      },
      {
        type: "paragraph",
        text: "We built Handsfree because we ran a trade business and lived this exact problem. We set it up, we monitor it, and we keep improving it — you just get the bookings. Onboarding takes a conversation, not a weekend.",
      },
      { type: "cta", text: "See which plan fits your call volume and what's included at each tier.", to: "/pricing" },
      { type: "heading", text: "The short version" },
      {
        type: "paragraph",
        text: "Fix your voicemail today. Turn on a missed-call text this week. Then decide whether you want calls answered properly, or just acknowledged. One of those books jobs while you're on the tools. The other just buys you time to ring back.",
      },
    ],
  },

  {
    slug: "ai-phone-answering-for-trade-businesses",
    title: "AI Phone Answering for Trade Businesses: How It Works",
    description:
      "How AI phone answering works for Australian trade businesses, what it costs, and how it compares to voicemail, call diverts and a human receptionist.",
    publishedDate: "2026-09-02",
    excerpt:
      "AI phone answering picks up every call while you're on the tools, gets the job details and books the work. Here's how it actually works for a trade business.",
    body: [
      {
        type: "paragraph",
        text: "You're up a ladder, hands full, drill running. The phone goes. By the time you're down and calling back, that customer has already rung the next bloke on the list. That's the whole problem AI phone answering solves for trade businesses — someone always picks up, even when you physically can't.",
      },
      { type: "heading", text: "What AI phone answering actually does" },
      {
        type: "paragraph",
        text: "An AI phone answering service answers your business line in your business name, has a normal conversation with the caller, and captures the details you need to quote or book the job. It's not a robotic phone menu asking people to press 1. The caller talks, the AI listens and responds.",
      },
      {
        type: "paragraph",
        text: "For a typical trade call, that means:",
      },
      {
        type: "list",
        items: [
          "Answering on the first few rings, 24/7 — including after hours and weekends",
          "Getting the caller's name, number, suburb and what's gone wrong",
          "Working out whether it's an emergency or something that can wait",
          "Booking a time straight into your calendar if the job's straightforward",
          "Sending you a text or email summary within seconds of the call ending",
        ],
      },
      {
        type: "paragraph",
        text: "You get to the end of the day with a list of real jobs instead of six missed call notifications and no idea who rang.",
      },
      { type: "heading", text: "Why voicemail and call diverts don't cut it" },
      {
        type: "paragraph",
        text: "Most tradies have already tried the cheap options. Voicemail is the big one — and most people simply don't leave a message. If they've got a burst pipe or no power, they're not waiting around to hear a beep. They hang up and dial someone else.",
      },
      {
        type: "paragraph",
        text: "Diverting to your partner or the office works until they're busy too, or until the calls start coming in at 9pm. Missed-call text-back is a step up — the customer at least gets a message — but a text can't answer a question, triage an emergency or lock in a booking time. It just buys you a little time before they move on.",
      },
      {
        type: "paragraph",
        text: "An AI receptionist is the only option in that list that actually finishes the conversation.",
      },
      { type: "heading", text: "Where AI beats a human receptionist for trades" },
      {
        type: "paragraph",
        text: "A good human receptionist is great. The trouble is a part-time receptionist costs more per month than most sole traders and small crews want to commit to, and they still knock off at 5pm and take annual leave.",
      },
      {
        type: "paragraph",
        text: "AI phone answering runs every hour of every day at a flat monthly rate. It never gets flustered when three calls land at once, and it never forgets to ask for the suburb. For a two-ute operation, it means you get switchboard coverage that used to be reserved for big commercial outfits.",
      },
      {
        type: "paragraph",
        text: "The other honest bit: AI isn't right for everything. If your work needs deep technical scoping over the phone, the AI's job is to capture the details and get you talking to the customer — not to pretend it's the licensed tradesperson.",
      },
      { type: "heading", text: "What it costs" },
      {
        type: "paragraph",
        text: "Handsfree pricing is straightforward, no lock-in contracts on any tier:",
      },
      {
        type: "list",
        items: [
          "Essentials — $129/month: SMS-only missed-call text-back, no live answering, 100 SMS/month included",
          "Receptionist — $249/month: live AI answering in your business name, 150 mins call answering + 150 SMS/month, 24/7 after-hours coverage, calendar booking included",
          "Pro — $449/month: everything in Receptionist, 400 mins + 400 SMS/month, priority support",
          "Custom — by quote, for high-volume operations",
        ],
      },
      {
        type: "paragraph",
        text: "Do the maths on your own average job value. One recovered job a month covers most tiers comfortably.",
      },
      { type: "heading", text: "Built for you, not configured by you" },
      {
        type: "paragraph",
        text: "Plenty of AI answering tools hand you a dashboard and wish you luck. You end up writing scripts at 10pm, testing prompts, tweaking settings — unpaid admin on top of a full day on the tools.",
      },
      {
        type: "paragraph",
        text: "We built Handsfree because we ran a trade business and lived this exact problem. So we set it up for you: your greeting, your services, your suburbs, your booking rules, your after-hours policy. Then we monitor real calls and keep improving how it handles them. If it says something you don't like, you tell us and we fix it.",
      },
      {
        type: "paragraph",
        text: "Setup takes a short onboarding call and a call divert. Your number stays the same. Nothing on your phone changes except that it stops ringing out.",
      },
      { type: "cta", text: "See which plan fits your business and what's included at each tier.", to: "/pricing" },
      {
        type: "paragraph",
        text: "Never miss a call. Ever again. That's the whole point.",
      },
    ],
  },

  {
    slug: "virtual-receptionist-vs-answering-machine",
    title: "Virtual Receptionist vs Answering Machine: What Tradies Need",
    description:
      "Answering machines send callers to voicemail. A virtual receptionist answers, qualifies and books. Here's how the two compare for Australian trade businesses.",
    publishedDate: "2026-09-02",
    excerpt:
      "An answering machine tells your caller you're busy. A virtual receptionist actually handles the call. Here's the real difference — and what it costs you when you pick wrong.",
    body: [
      {
        type: "paragraph",
        text: "An answering machine and a virtual receptionist both promise to handle the calls you can't get to. Only one of them actually does. The other just records your voicemail greeting from 2019 and calls it a day.",
      },
      {
        type: "paragraph",
        text: "A virtual receptionist is a different animal entirely. It picks up, talks to the person, finds out what they need, and gets their details down. Same missed call, completely different outcome. Here's how the two actually compare.",
      },
      { type: "heading", text: "What an answering machine does" },
      {
        type: "paragraph",
        text: "An answering machine (or voicemail, or your phone's default message) does one thing: it records audio if the caller bothers to leave any. That's it. No questions asked, no details captured, no follow-up.",
      },
      {
        type: "paragraph",
        text: "The problem is what happens on the other end. Most people ringing a tradie are ringing three or four tradies. If they hit voicemail, they hang up and dial the next number. They're not sitting there composing a thoughtful message about their hot water system. They've moved on.",
      },
      {
        type: "paragraph",
        text: "And when someone does leave a message, you get it hours later — half-mumbled, no address, no clear idea of the job. You ring back, they've already booked someone else. Voicemail doesn't lose you the job outright; it just delays you long enough that someone faster wins.",
      },
      { type: "heading", text: "What a virtual receptionist does" },
      {
        type: "paragraph",
        text: "A virtual receptionist answers the phone in your business name and has an actual conversation. Depending on how it's set up, it can:",
      },
      {
        type: "list",
        items: [
          "Answer on the first or second ring, 24/7, including nights and weekends",
          "Ask what the job is and where it is",
          "Get the caller's name, number and address",
          "Work out whether it's urgent or can wait",
          "Book straight into your calendar",
          "Send you a clean summary by text so you know what you're walking into",
          "Tell price shoppers and time-wasters your service area and terms before they waste your day",
        ],
      },
      {
        type: "paragraph",
        text: "The caller doesn't get bounced to a machine. They get dealt with. That's the whole difference — and it's why the same 20 missed calls a month produce wildly different revenue depending on which option is sitting behind your phone.",
      },
      { type: "heading", text: "The honest comparison" },
      {
        type: "paragraph",
        text: "Answering machine: free, already on your phone, requires nothing from you. Captures roughly nothing. Fine if your phone rarely rings or you're happy turning work away.",
      },
      {
        type: "paragraph",
        text: "Virtual receptionist: costs money every month, needs to be set up properly, and answers calls whether you're on the tools, on a break, or asleep. It only makes sense if the work it captures is worth more than the monthly fee. For most trades, one recovered job a month covers it several times over — a single hot water replacement or switchboard upgrade is usually more than a year of software.",
      },
      {
        type: "paragraph",
        text: "There's also a middle option worth knowing about: missed-call text-back. When you don't answer, the caller automatically gets a text. It's better than voicemail because it opens a conversation instead of closing one, but it doesn't answer the phone or book anything. Good for tight budgets, not a replacement for live answering.",
      },
      { type: "heading", text: "What it costs with Handsfree" },
      {
        type: "paragraph",
        text: "We built Handsfree because we ran a trade business and lived this exact problem. Here's the pricing, no games:",
      },
      {
        type: "list",
        items: [
          "Essentials — $129/month: SMS-only missed-call text-back, no live answering, 100 SMS included",
          "Receptionist — $249/month: live AI answering in your business name, 150 mins call answering + 150 SMS, 24/7 after-hours coverage, calendar booking included",
          "Pro — $449/month: everything in Receptionist with 400 mins + 400 SMS and priority support",
          "Custom — by quote, for high-volume operations",
        ],
      },
      {
        type: "paragraph",
        text: "No lock-in contracts on any tier. And unlike the DIY bot builders, we set it up, monitor it and keep improving it for you. You're a tradie, not a prompt engineer.",
      },
      { type: "heading", text: "Which one should you pick?" },
      {
        type: "paragraph",
        text: "If your phone rings a handful of times a week and you always get to it, voicemail is fine. If you're regularly finding four missed calls when you come out of a roof space, an answering machine is quietly costing you thousands and you'll never see the invoice.",
      },
      {
        type: "paragraph",
        text: "Work out roughly how many calls you miss in a week and what an average job is worth. That number tells you the answer faster than any article will.",
      },
      { type: "cta", text: "See exactly what each plan includes and what it costs.", to: "/pricing" },
      {
        type: "paragraph",
        text: "Setup takes a short onboarding call — we build it, you get back on the tools.",
      },
    ],
  },

  {
    slug: "best-call-answering-service-small-trade-business-australia",
    title: "Best Call Answering Service for a Small Trade Business",
    description:
      "Comparing call answering options for small Australian trade businesses: answering services, virtual receptionists, and AI. What each costs and what actually works.",
    publishedDate: "2026-09-02",
    excerpt:
      "There are four or five different things sold as \"call answering\" for a small trade business, and they don't all do the same job. Here's an honest comparison of what each costs and actually does.",
    body: [
      {
        type: "paragraph",
        text: "Search \"call answering service\" and you'll get voicemail apps, human answering services, missed-call text-back tools, and AI receptionists — all pitched as the fix for the same problem. They're not interchangeable, and picking the wrong one either wastes money or keeps costing you jobs.",
      },
      {
        type: "paragraph",
        text: "Every small trade business in Australia hits this wall eventually. Here's the honest breakdown of what's actually on the market.",
      },
      { type: "heading", text: "The four options, plainly" },
      {
        type: "paragraph",
        text: "When tradies go looking for call answering, this is what's actually on the market:",
      },
      {
        type: "list",
        items: [
          "Voicemail. Free. Also useless — most callers hang up rather than leave a message, and the ones who do leave one are already ringing someone else.",
          "Missed-call text-back. When you miss a call, an automatic SMS goes out. Cheap, simple, and better than nothing. But it doesn't answer questions or book anything.",
          "A human answering service or virtual receptionist. Real people take messages in your business name. Good quality, but usually per-call or per-minute pricing that climbs fast, and most operate business hours only.",
          "An AI receptionist. Answers every call in your business name, 24/7, handles the questions callers actually ask, and books jobs into your calendar.",
        ],
      },
      {
        type: "paragraph",
        text: "A family member or partner taking calls is the fifth option. It works until it doesn't — holidays, sick days, a second job, or the simple fact that they didn't sign up to be your switchboard.",
      },
      { type: "heading", text: "What a small trade business actually needs" },
      {
        type: "paragraph",
        text: "Forget the feature lists for a second. For a one-to-five-van operation, a call answering service needs to do four things:",
      },
      {
        type: "list",
        items: [
          "Answer on the first ring, every time, including nights and weekends — because that's when burst pipes and dead power points happen.",
          "Sound like your business, not a call centre. Callers should hear your trading name, not \"answering service, please hold\".",
          "Get the details you need: name, number, suburb, what's wrong, and whether it's urgent.",
          "Get the job in the diary, or at least get you a message you can act on in one glance.",
        ],
      },
      {
        type: "paragraph",
        text: "Anything that doesn't do those four things is a message-taking service, not a booking service. Message-taking still leaves you making the callbacks at 8pm.",
      },
      { type: "heading", text: "Cost is where most services fall over" },
      {
        type: "paragraph",
        text: "Human answering services typically charge per call or per minute. That's fine in a quiet month. In a busy month — storm season, heatwave, end of financial year — the bill scales with your call volume, and you have no idea what it'll be until it arrives.",
      },
      {
        type: "paragraph",
        text: "That unpredictability is what pushes most small trade businesses back to voicemail. Flat monthly pricing solves it. You know the number, you budget for it, you move on.",
      },
      {
        type: "paragraph",
        text: "Handsfree pricing is flat and public. Essentials is $129/month for SMS-only missed-call text-back with 100 SMS included — no live answering, but nobody gets ignored. Receptionist is $249/month for live AI answering in your business name, 150 minutes of call answering plus 150 SMS, 24/7 after-hours coverage, and calendar booking included. Pro is $449/month with everything in Receptionist plus 400 minutes and 400 SMS and priority support. High-volume operations get a custom quote. No lock-in contracts on any tier.",
      },
      { type: "heading", text: "Why \"built for you\" beats \"build it yourself\"" },
      {
        type: "paragraph",
        text: "There's a growing pile of DIY AI phone tools where you sign up, get a dashboard, and spend your Sunday writing scripts and testing prompts. If you enjoy that, go for it.",
      },
      {
        type: "paragraph",
        text: "Most tradies don't. Handsfree is set up for you, monitored, and improved over time — we listen to how your calls actually go and tighten it up. You didn't get your licence to become a prompt engineer.",
      },
      {
        type: "paragraph",
        text: "We built this because we ran a trade business and lived the missed-call problem. The whole point is that it works without you touching it.",
      },
      { type: "heading", text: "How to choose in five minutes" },
      {
        type: "list",
        items: [
          "Mostly repeat customers who'll always call back? Missed-call text-back may be enough — start at Essentials.",
          "Getting new leads from Google, Facebook, or word of mouth? You need live answering. Those callers don't wait.",
          "Getting after-hours emergency work? You need 24/7, which rules out most human services.",
          "Not sure how much a missed call is costing you? Count your missed calls for one week and multiply by your average job value. The maths usually decides for you.",
        ],
      },
      { type: "cta", text: "See the plans and what's included in each.", to: "/pricing" },
      {
        type: "paragraph",
        text: "Whatever you choose, choose something. A phone that rings out is the most expensive thing in a trade business.",
      },
    ],
  },

  {
    slug: "virtual-receptionist-cost-australia",
    title: "Virtual Receptionist Cost in Australia: Real Prices (2026)",
    description:
      "What a virtual receptionist actually costs in Australia — per-call, per-minute and flat monthly pricing explained, plus how AI answering compares for tradies.",
    publishedDate: "2026-09-02",
    excerpt:
      "Virtual receptionist pricing in Australia is a mess of per-call fees, per-minute rates and setup charges. Here's what you'll actually pay — and what an AI receptionist costs instead.",
    body: [
      {
        type: "paragraph",
        text: "You've missed three calls today. You know one of them was probably a job. So you start googling \"virtual receptionist\" and land on a page that says \"plans from $39\" — then discover that $39 buys you about six calls a month. Here's what a virtual receptionist actually costs in Australia, in plain numbers, with the fees the pricing pages tend to bury.",
      },
      { type: "heading", text: "The three ways virtual receptionists charge you" },
      {
        type: "paragraph",
        text: "Nearly every provider in Australia uses one of three models. Knowing which one you're looking at tells you more than the headline price does.",
      },
      {
        type: "list",
        items: [
          "Per-call pricing — you pay a set amount for every call answered, usually somewhere between $2 and $5 a call. Cheap entry price, unpredictable bill.",
          "Per-minute pricing — you buy a block of minutes and pay an overage rate when you blow through it. Common for human answering services, because a human costs money every second they're on the line.",
          "Flat monthly pricing — one predictable number covering a set volume of calls or minutes. Easier to budget, which matters when your cash flow already swings with the seasons.",
        ],
      },
      {
        type: "paragraph",
        text: "With human-staffed services, the low-end plans are almost always a teaser. A plan advertised at $39 to $60 a month typically includes a small handful of calls. Once you're a genuinely busy sole trader or a small crew fielding 100+ calls a month, human virtual receptionist services in Australia commonly land in the $300 to $800 a month range — and higher if you want after-hours or weekend coverage.",
      },
      { type: "heading", text: "The costs that don't appear on the pricing page" },
      {
        type: "paragraph",
        text: "Before you compare anything, check for these. They're the difference between the quoted price and the invoice.",
      },
      {
        type: "list",
        items: [
          "Setup or onboarding fees — sometimes a few hundred dollars up front.",
          "Overage rates — what you pay per extra call or minute once your included volume is used up. This is where bills blow out during a busy month.",
          "After-hours loading — many human services charge extra, or simply don't answer outside business hours.",
          "Message-taking only vs actual bookings — cheaper plans just take a name and number. Putting the job in your calendar often costs more.",
          "Lock-in contracts — 12-month terms are still common. Ask directly.",
          "Minimum call charges — some services bill a full minute (or three) even for a 20-second call.",
        ],
      },
      { type: "heading", text: "What an AI receptionist costs instead" },
      {
        type: "paragraph",
        text: "AI answering changed the maths, because the cost of answering a call no longer depends on a person sitting in a chair. That means round-the-clock coverage without after-hours loading, and flat pricing that doesn't punish you for having a good week.",
      },
      {
        type: "paragraph",
        text: "Here's exactly what Handsfree costs. No \"contact us for a quote\" games.",
      },
      {
        type: "list",
        items: [
          "Essentials — $129/month. SMS-only missed-call text-back with 100 SMS included. No live answering. Good if you just want every missed call to get an instant text so the lead doesn't ring the next bloke.",
          "Receptionist — $249/month. Live AI answering in your business's name, 150 minutes of call answering plus 150 SMS a month, 24/7 after-hours coverage, and calendar booking included.",
          "Pro — $449/month. Everything in Receptionist with 400 minutes and 400 SMS a month, plus priority support.",
          "Custom — by quote, for high-volume operations.",
        ],
      },
      {
        type: "paragraph",
        text: "No lock-in contracts on any tier. If it doesn't earn its keep, you leave.",
      },
      { type: "heading", text: "Working out whether it pays for itself" },
      {
        type: "paragraph",
        text: "Forget the monthly figure for a second and work out your average job value. For a lot of electricians and plumbers, a single call-out sits somewhere north of $250. If that's you, the Receptionist plan at $249/month needs to save roughly one job a month to break even. Everything after that is profit you were previously letting ring out.",
      },
      {
        type: "paragraph",
        text: "Then count how many calls you actually miss. Check your phone's call log for last week — the ones you didn't answer while you were up a ladder, under a house, or driving. Most tradies are shocked by the number. That figure is what you're really comparing the price against, not the price of doing nothing.",
      },
      { type: "heading", text: "Cheap isn't the same as good value" },
      {
        type: "paragraph",
        text: "The cheapest option is always the one that answers the fewest calls. A $39 plan that covers six calls, or a DIY AI bot you have to configure, test and babysit yourself, isn't cheaper — it just moves the cost onto your evenings.",
      },
      {
        type: "paragraph",
        text: "Handsfree is built, monitored and improved for you. We ran a trade business ourselves, so we know you don't have time to be a part-time prompt engineer. You give us the details of how your business works once, we set it up, and we keep tuning it.",
      },
      { type: "cta", text: "See exactly what each plan includes on our pricing page.", to: "/pricing" },
      {
        type: "paragraph",
        text: "One last thing worth asking any provider: what happens on your busiest day? A human service can put callers on hold. AI answers all of them at once. When you've got a heatwave and every aircon in the suburb has died, that difference is the whole ballgame.",
      },
    ],
  },
];
