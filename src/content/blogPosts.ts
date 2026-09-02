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
    publishedDate: "2026-07-13",
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
    publishedDate: "2026-07-16",
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
    publishedDate: "2026-07-19",
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
    publishedDate: "2026-07-22",
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
    publishedDate: "2026-07-25",
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
    publishedDate: "2026-07-28",
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
    publishedDate: "2026-07-31",
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
    publishedDate: "2026-08-03",
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

  {
    slug: "virtual-receptionist-for-builders",
    title: "Virtual Receptionist for Builders: Stop Losing Leads",
    description:
      "Builders miss calls on site every day. Here's how a virtual receptionist answers every enquiry, filters tyre-kickers and books real jobs into your calendar.",
    publishedDate: "2026-08-06",
    excerpt:
      "You can't answer the phone with a nail gun in your hand. Here's how a virtual receptionist keeps every enquiry answered while you're on the tools or on site.",
    body: [
      {
        type: "paragraph",
        text: "Builders cop it from every direction. Clients, subbies, suppliers, certifiers, the bloke who wants a quote on a deck. All of them ring, and most of them ring while you're on a roof, in a slab pour, or standing next to a demo saw where you couldn't hear a phone if it was strapped to your ear.",
      },
      {
        type: "paragraph",
        text: "So calls go to voicemail. And a good chunk of those callers just move on to the next builder in the search results. A virtual receptionist fixes that — every call gets answered, in your business name, whether you pick up or not.",
      },
      { type: "heading", text: "What a virtual receptionist actually does for a building business" },
      {
        type: "paragraph",
        text: "It's not an answering machine and it's not a call centre in another timezone reading off a card. A modern AI virtual receptionist picks up the phone, speaks in your business name, works out what the caller needs, and does something useful with it.",
      },
      {
        type: "list",
        items: [
          "Answers every call, first ring, including nights and weekends",
          "Takes the caller's name, number, site address and what the job is",
          "Sorts a genuine new build or reno enquiry from a supplier chasing an invoice",
          "Books quote appointments straight into your calendar",
          "Texts you the details so you can read it between tasks instead of listening to voicemail",
          "Sends the caller a confirmation SMS so they know they've been heard",
        ],
      },
      {
        type: "paragraph",
        text: "The point isn't to replace you talking to clients. It's to make sure the conversation starts, so you can call back on your terms — smoko, lunch, or after pack-up.",
      },
      { type: "heading", text: "Why builders lose more per missed call than most trades" },
      {
        type: "paragraph",
        text: "A sparkie missing a callout loses a few hundred dollars. A builder missing an extension enquiry can lose a job worth tens or hundreds of thousands. The maths on answering the phone is different when your average job runs for months.",
      },
      {
        type: "paragraph",
        text: "And building clients shop around. Someone planning a renovation is usually ringing three or four builders in one sitting. The one who answers gets the site visit. The two who don't get a polite \"we've gone with someone else\" email six weeks later — if they get anything at all.",
      },
      {
        type: "paragraph",
        text: "There's a second problem too. Because your phone rings constantly with subbie and supplier traffic, you get trained to ignore it. Unknown number? Probably a sales call. Except sometimes it's a $400k build.",
      },
      { type: "heading", text: "Filtering is the part builders underrate" },
      {
        type: "paragraph",
        text: "Answering every call sounds like it'd create more noise, not less. It's actually the opposite when the receptionist qualifies properly.",
      },
      {
        type: "paragraph",
        text: "A good setup can ask the questions you'd ask anyway: what's the scope, is there a site, do they have plans or approvals, what's the rough timeframe. By the time it lands in your phone as a text, you already know whether it's worth a callback today, next week, or never.",
      },
      {
        type: "paragraph",
        text: "That means fewer wasted drives to quote jobs that were never going ahead, and faster responses to the ones that were.",
      },
      { type: "heading", text: "What it costs" },
      {
        type: "paragraph",
        text: "Handsfree keeps it simple and public. No \"contact us for a quote\" runaround.",
      },
      {
        type: "list",
        items: [
          "Essentials — $129/month: SMS-only missed-call text-back, no live answering, 100 SMS included",
          "Receptionist — $249/month: live AI answering in your business name, 150 mins call answering + 150 SMS, 24/7 after-hours cover, calendar booking included",
          "Pro — $449/month: everything in Receptionist with 400 mins + 400 SMS and priority support",
          "Custom — by quote, for high-volume operations",
        ],
      },
      {
        type: "paragraph",
        text: "No lock-in contracts on any tier. For most builders, one saved reno enquiry pays for a year of it.",
      },
      { type: "heading", text: "Built for you, not handed to you" },
      {
        type: "paragraph",
        text: "Plenty of AI phone tools are DIY — you sign up, you write the scripts, you tune the responses, you debug it when it tells a client something daft. Builders don't have time for that. We came out of a trade business ourselves, so Handsfree is set up, monitored and improved for you. You tell us how you run your jobs, we build the receptionist around it.",
      },
      {
        type: "paragraph",
        text: "If your site handover goes pear-shaped or your process changes, you send a message and we adjust it. You don't open a dashboard.",
      },
      { type: "cta", text: "See what setup looks like and get answering by the end of the week.", to: "/onboarding" },
      {
        type: "paragraph",
        text: "Your phone is your pipeline. If it's ringing out while you're on site, that pipeline has a hole in it — and it's costing you more than a subscription ever will.",
      },
    ],
  },

  {
    slug: "answering-service-for-hvac-air-conditioning-technicians",
    title: "Answering Service for HVAC & Air Con Technicians",
    description:
      "How an answering service for HVAC and air conditioning technicians stops lost jobs during heatwaves, breakdowns and after-hours calls. Real pricing inside.",
    publishedDate: "2026-08-09",
    excerpt:
      "Air con work comes in waves — and every heatwave brings more calls than you can answer with your hands in a ceiling. Here's how an answering service keeps those jobs from going to the next bloke.",
    body: [
      {
        type: "paragraph",
        text: "Air conditioning work is feast or famine. A mild fortnight, then a 38-degree Thursday where your phone doesn't stop. The problem is that the busiest days are also the days you're up in a roof space, on a rooftop unit, or halfway through a brazing job with gloves on. The calls keep coming. You just can't get to them.",
      },
      {
        type: "paragraph",
        text: "And here's the thing about air con customers: they're hot, they're uncomfortable, and they're ringing three companies in a row. Whoever picks up gets the job. That's it. That's the whole competition.",
      },
      { type: "heading", text: "Why HVAC calls are worse to miss than most trades" },
      {
        type: "paragraph",
        text: "A leaking tap can wait a day. A dead split system in January cannot. Air con calls are urgency-driven, which means the caller has zero patience for voicemail and won't wait for a callback.",
      },
      {
        type: "paragraph",
        text: "On top of that, HVAC has a wider spread of call types than most trades:",
      },
      {
        type: "list",
        items: [
          "Residential breakdowns — hot, annoyed homeowners wanting someone today",
          "New install and quote enquiries — bigger dollar jobs worth chasing properly",
          "Commercial maintenance calls — building managers with a unit down and tenants complaining",
          "Warranty and service reminders — low urgency, but easy money if you capture them",
          "Tyre-kickers asking \"how much for a 7kW split?\" — worth filtering before they eat your day",
        ],
      },
      {
        type: "paragraph",
        text: "Each of those needs a different response. Voicemail treats them all the same: badly.",
      },
      { type: "heading", text: "What an answering service actually does for an air con business" },
      {
        type: "paragraph",
        text: "An answering service picks up when you can't. A good one — like an AI digital receptionist — answers in your business name, asks the questions you'd ask, and sends you the details in a text before you're back down the ladder.",
      },
      {
        type: "paragraph",
        text: "For HVAC specifically, that means capturing the stuff that determines whether a job is worth driving to:",
      },
      {
        type: "list",
        items: [
          "Is it a breakdown, a service, or a new install quote?",
          "Ducted, split, multi-head or cassette?",
          "Residential or commercial, and how many units?",
          "Suburb and access — rooftop, roof space, second storey?",
          "Brand and rough age of the unit",
          "Best contact number and when they're home",
        ],
      },
      {
        type: "paragraph",
        text: "That's a qualified lead, not a missed call. You get to decide who's worth a same-day visit and who can be booked for next Tuesday — instead of playing phone tag at 7pm and losing both.",
      },
      { type: "heading", text: "Heatwaves are when this pays for itself" },
      {
        type: "paragraph",
        text: "Most HVAC businesses lose the most money on their busiest days. When 30 people ring you in a morning and you answer eight, the other 22 don't wait around. They ring the next company on Google.",
      },
      {
        type: "paragraph",
        text: "An answering service doesn't get overwhelmed. It takes call one and call thirty with the same patience, and every one lands in your inbox as a job you can triage. Even the ones you can't fit in this week are worth having — a booked service in three weeks is still revenue you would have never seen.",
      },
      {
        type: "paragraph",
        text: "The same goes for after-hours. Air con dies at night. Someone ringing at 9pm on a Saturday because the nursery is 32 degrees is a customer who will pay a premium and remember you for the next ten years.",
      },
      { type: "heading", text: "What it costs" },
      {
        type: "paragraph",
        text: "No games, no \"contact us for pricing\". Here's what Handsfree costs:",
      },
      {
        type: "list",
        items: [
          "Essentials — $129/month: SMS-only missed-call text-back, no live answering, 100 SMS included.",
          "Receptionist — $249/month: live AI answering in your business name, 150 mins call answering + 150 SMS, 24/7 after-hours coverage, calendar booking included.",
          "Pro — $449/month: everything in Receptionist with 400 mins + 400 SMS and priority support.",
          "Custom — by quote, for high-volume operations.",
        ],
      },
      {
        type: "paragraph",
        text: "No lock-in contracts on any tier. For most air con businesses, Receptionist is the sweet spot — you get live answering through the summer peak and after-hours cover for the breakdowns. If your call volume spikes hard in December through February, Pro gives you the headroom.",
      },
      {
        type: "paragraph",
        text: "One recovered install job usually covers a year of it. That's the maths.",
      },
      { type: "heading", text: "Why Handsfree instead of a DIY bot" },
      {
        type: "paragraph",
        text: "Plenty of tools let you build your own AI phone answering setup. Then you're the one writing scripts, testing call flows, and fixing it when it mishears \"ducted\" as \"dusted\" — usually at 10pm after a full day on the tools.",
      },
      {
        type: "paragraph",
        text: "Handsfree is built, monitored and improved for you. We were tradies before this. We set it up around how your business actually runs, listen to how the calls go, and tighten it up over time. You don't configure anything.",
      },
      { type: "cta", text: "See what setup looks like and get your line answered this week.", to: "/onboarding" },
      {
        type: "paragraph",
        text: "Air con is a trade where the phone is the business. Every heatwave is a test of whether you can pick up. Sort that out once and you stop leaving money on the roof.",
      },
    ],
  },

  {
    slug: "ai-receptionist-for-landscapers-and-gardeners",
    title: "AI Receptionist for Landscapers & Gardeners in Australia",
    description:
      "Mowers running, phone ringing, jobs lost. Here's how an AI receptionist answers every call for landscapers and gardeners, with real Aussie pricing.",
    publishedDate: "2026-08-12",
    excerpt:
      "You can't hear the phone over a brushcutter, and quoting season doesn't wait. Here's how an AI receptionist keeps every landscaping and gardening enquiry from going to voicemail.",
    body: [
      {
        type: "paragraph",
        text: "Landscaping and gardening might be the worst trades in the country for phone calls. You've got a mower, a brushcutter, a blower or a bobcat running most of the day. Your hands are dirty, your phone's in the ute, and the one time you do hear it ring you're halfway up a ladder with a chainsaw.",
      },
      {
        type: "paragraph",
        text: "Meanwhile the person calling wants a quote on a new deck, a full garden makeover, or a monthly maintenance contract. They ring you, get voicemail, and ring the next name on Google. That's the whole story.",
      },
      { type: "heading", text: "Why landscaping calls are especially easy to lose" },
      {
        type: "paragraph",
        text: "Most trades get emergency calls — a burst pipe, no power, a broken hot water system. Those callers will chase you because they have to. Landscaping and garden work is different. It's usually discretionary, it's often comparison-shopped, and the customer has no urgency to wait for you to call back.",
      },
      {
        type: "list",
        items: [
          "Callers are price shopping and will ring three or four businesses in a row",
          "Noise on site means you genuinely can't hear or take the call",
          "Work is seasonal — spring and pre-Christmas enquiries all land in the same few weeks",
          "A lot of enquiries come in after work hours when people are home looking at their yard",
          "Maintenance clients are recurring revenue, so one missed call can cost you years of work",
        ],
      },
      {
        type: "paragraph",
        text: "That last point is the killer. A weekly or fortnightly mowing round isn't a $300 job. It's $300 a month, every month, potentially for a decade. Missing that call isn't missing one job.",
      },
      { type: "heading", text: "What an AI receptionist actually does for a landscaping business" },
      {
        type: "paragraph",
        text: "An AI receptionist picks up the phone in your business name, on the first or second ring, every time. It talks to the caller like a person would, gets the details you need, and sends them straight to your phone as a text and a summary.",
      },
      {
        type: "paragraph",
        text: "For a landscaper or gardener, that usually means capturing:",
      },
      {
        type: "list",
        items: [
          "Name and best contact number",
          "Property address and suburb — so you know if it's in your run",
          "What they want: mowing, hedging, turf, retaining wall, irrigation, full design",
          "Whether it's a one-off or ongoing maintenance",
          "Rough size of the yard or scope of the job",
          "When they want it done",
        ],
      },
      {
        type: "paragraph",
        text: "By the time you sit down in the ute at smoko, you've got a list of qualified enquiries with enough detail to decide who to ring back first — and who isn't worth the drive.",
      },
      { type: "heading", text: "Booking on-site quotes without stopping work" },
      {
        type: "paragraph",
        text: "Most landscaping jobs need a site visit before you can price them. That's a phone call, a back-and-forth on times, and often a no-show. A receptionist tier that's connected to your calendar can book the quote appointment while the caller is still on the phone, when they're keenest.",
      },
      {
        type: "paragraph",
        text: "You wake up to a diary with three quote visits already slotted in, grouped by suburb if you've set it up that way. No chasing, no phone tag.",
      },
      { type: "heading", text: "Handling the seasonal spike" },
      {
        type: "paragraph",
        text: "Every landscaper knows the pattern. Dead through the middle of winter, then the first warm weekend hits and the phone doesn't stop. That's exactly when you're flat out on site and least able to answer it.",
      },
      {
        type: "paragraph",
        text: "An AI receptionist doesn't care how many calls come in at once. It answers all of them, in parallel, at 7pm on a Sunday if that's when people are looking at their overgrown backyard. You're not hiring a casual to answer phones for eight weeks a year, and you're not paying someone to sit idle in July.",
      },
      { type: "heading", text: "What it costs" },
      {
        type: "paragraph",
        text: "No games, no \"contact us for a quote\" runaround. Here's the pricing:",
      },
      {
        type: "list",
        items: [
          "Essentials — $129/month: SMS-only missed-call text-back, no live answering, 100 SMS included",
          "Receptionist — $249/month: live AI answering in your business name, 150 mins call answering + 150 SMS, 24/7 after-hours cover, calendar booking included",
          "Pro — $449/month: everything in Receptionist, 400 mins + 400 SMS, priority support",
          "Custom — by quote, for high-volume operations",
        ],
      },
      {
        type: "paragraph",
        text: "No lock-in contracts on any tier. For most solo landscapers and small crews, one recovered maintenance client covers the monthly cost several times over.",
      },
      { type: "heading", text: "Built for you, not handed to you" },
      {
        type: "paragraph",
        text: "Plenty of AI phone tools expect you to sit down and configure prompts, scripts and integrations yourself. That's a Saturday you're not getting back. Handsfree is set up, monitored and improved for you — we built it because we ran a trade business and lived the missed-call problem ourselves.",
      },
      {
        type: "paragraph",
        text: "You tell us your services, your service area, what jobs you don't take, and how you want quotes booked. We handle the rest and keep tuning it as your business changes.",
      },
      { type: "cta", text: "See what setup looks like and get your phone answered this week.", to: "/onboarding" },
      {
        type: "paragraph",
        text: "You can't hear the phone over a mower. You don't have to. Let something else pick it up.",
      },
    ],
  },

  {
    slug: "phone-answering-service-for-locksmiths",
    title: "Phone Answering Service for Locksmiths (AU Pricing Guide)",
    description:
      "Locksmith calls are urgent and often after hours. Here's how a phone answering service works for locksmiths in Australia, what it costs, and what to look for.",
    publishedDate: "2026-08-15",
    excerpt:
      "Locksmith work is the definition of urgent — if you don't answer, the next locksmith does. Here's how a phone answering service works for locksmiths, and what it actually costs.",
    body: [
      {
        type: "paragraph",
        text: "No trade gets punished harder for a missed call than locksmithing. Someone locked out of their house at 9pm isn't leaving a voicemail and waiting for a callback. They're already dialling the next locksmith on Google.",
      },
      {
        type: "paragraph",
        text: "You know this. That's why your phone is on you at the dinner table, in the shower, and on the drill at 2pm with a deadlatch half-installed. A phone answering service takes that weight off — if you pick the right kind.",
      },
      { type: "heading", text: "Why locksmiths lose more work to missed calls than most trades" },
      {
        type: "paragraph",
        text: "Most trade jobs can wait a day. A dripping tap, a dodgy powerpoint, a quote on a reno — those callers will ring back. Lockouts won't.",
      },
      {
        type: "list",
        items: [
          "Lockouts are emergencies. The caller has zero patience and a dozen alternatives.",
          "A big chunk of your calls land after hours, on weekends, and on public holidays.",
          "You're often mid-job with your hands full — picking a lock, cutting a key, fitting hardware.",
          "Callers rarely leave voicemail for emergency work. They just move on.",
          "Google Maps puts three competitors right under your listing.",
        ],
      },
      {
        type: "paragraph",
        text: "So every unanswered ring isn't a delayed job. It's a job that went to someone else.",
      },
      { type: "heading", text: "What a phone answering service actually does for a locksmith" },
      {
        type: "paragraph",
        text: "A good answering setup does three things: picks up in your business's name, works out what the caller needs, and gets the details to you fast enough to act on.",
      },
      {
        type: "paragraph",
        text: "For locksmith work, that last bit matters most. A message that lands in your inbox tomorrow morning is worthless. You need the address, the situation, and a callback number in your hand within seconds so you can decide: drop tools and go, or book it in for the morning.",
      },
      {
        type: "paragraph",
        text: "The other big win is filtering. Locksmiths cop a lot of tyre-kickers and \"how much to cut a key\" calls. If those get answered properly and the genuine emergencies get flagged to you straight away, your day gets a lot calmer.",
      },
      { type: "heading", text: "Human call centre vs AI receptionist" },
      {
        type: "paragraph",
        text: "Traditional answering services use human operators in a call centre. They work, but they're usually priced per call or per minute, they can be expensive once after-hours loading kicks in, and the operator often doesn't know the difference between a rekey and a restricted key system.",
      },
      {
        type: "paragraph",
        text: "An AI receptionist answers every call instantly, 24/7, at a flat monthly price. No hold queue, no after-hours surcharge, no ten calls at once problem. The catch with most AI tools is that you're expected to build and maintain the thing yourself — scripts, prompts, call flows, the lot.",
      },
      {
        type: "paragraph",
        text: "That's the bit Handsfree does differently. We set it up for you, we monitor how it handles real calls, and we keep improving it. You're a locksmith, not a prompt engineer.",
      },
      { type: "heading", text: "What it costs" },
      {
        type: "paragraph",
        text: "Handsfree pricing is flat and public — no \"contact us for a quote\" runaround:",
      },
      {
        type: "list",
        items: [
          "Essentials — $129/month: SMS-only missed-call text-back, no live answering, 100 SMS included.",
          "Receptionist — $249/month: live AI answering in your business's name, 150 mins call answering + 150 SMS, 24/7 after-hours coverage, calendar booking included.",
          "Pro — $449/month: everything in Receptionist with 400 mins + 400 SMS, plus priority support.",
          "Custom — by quote, for high-volume operations.",
        ],
      },
      {
        type: "paragraph",
        text: "No lock-in contracts on any tier. For most solo and small locksmith outfits, Receptionist at $249/month is the sweet spot — the after-hours coverage alone is where the emergency callouts live. If you're running multiple vans and taking heavy call volume, Pro gives you the headroom.",
      },
      {
        type: "paragraph",
        text: "Do the maths against one lockout callout. If a single after-hours job you'd otherwise have missed covers most of the month, the decision makes itself.",
      },
      { type: "heading", text: "Getting set up" },
      {
        type: "paragraph",
        text: "You don't need a new number or a new phone system. Calls forward to Handsfree when you can't pick up — or all the time, if you'd rather not be interrupted mid-job at all. We handle the setup with you, including what to say about service areas, callout fees, and what counts as an emergency worth waking you for.",
      },
      { type: "cta", text: "See the full pricing breakdown and pick the tier that fits your call volume.", to: "/pricing" },
      {
        type: "paragraph",
        text: "Locksmithing is a race to answer. Win the race and the rest of the job is easy.",
      },
    ],
  },

  {
    slug: "virtual-receptionist-for-roofing-companies",
    title: "Virtual Receptionist for Roofing Companies (Australia)",
    description:
      "How a virtual receptionist helps Australian roofing companies stop missing calls, book more inspections and quote storm work faster. Real pricing, no lock-in.",
    publishedDate: "2026-08-18",
    excerpt:
      "Roofing calls come in bursts — after storms, during leaks, when a tile lets go. Here's how a virtual receptionist keeps every one of those calls answered while you're up on a roof.",
    body: [
      {
        type: "paragraph",
        text: "Roofing is one of the worst trades in Australia for missed calls. You're on a pitched roof with a nail gun in your hand, the wind's up, and your phone is in the ute. Meanwhile a homeowner with water coming through the ceiling is ringing three roofers and going with whoever picks up.",
      },
      {
        type: "paragraph",
        text: "A virtual receptionist fixes that gap. Not by adding admin to your day — by answering the phone in your business name while you keep working.",
      },
      { type: "heading", text: "Why roofing calls are different" },
      {
        type: "paragraph",
        text: "Most trades get a steady trickle of calls. Roofing gets floods. A hailstorm rolls through on a Tuesday afternoon and your phone rings 40 times before dinner. Then it's quiet for a fortnight.",
      },
      {
        type: "paragraph",
        text: "That pattern is brutal for a small roofing outfit:",
      },
      {
        type: "list",
        items: [
          "Storm work is urgent — the first roofer to answer usually gets the job",
          "Insurance jobs need details captured properly (address, damage type, insurer, claim number)",
          "Half your callers are price-shopping and will hang up if it goes to voicemail",
          "You physically can't answer while you're on a roof, in a harness, or running a crew",
          "Emergency leaks come in at 9pm, on weekends, and during public holidays",
        ],
      },
      {
        type: "paragraph",
        text: "Voicemail doesn't cut it. Most people won't leave a message when their roof is leaking — they'll just ring the next name on Google.",
      },
      { type: "heading", text: "What a virtual receptionist actually does for a roofer" },
      {
        type: "paragraph",
        text: "A modern AI virtual receptionist answers every call, 24/7, in your company's name. It sounds like a person, it doesn't get flustered when 12 calls hit at once, and it never takes a smoko break.",
      },
      {
        type: "paragraph",
        text: "For a roofing company, that means:",
      },
      {
        type: "list",
        items: [
          "Every storm-surge call gets answered instead of ringing out",
          "Caller details, address and job type get captured and sent straight to you by SMS",
          "Urgent leaks get flagged so you can ring back first",
          "Inspections and quotes can be booked straight into your calendar",
          "After-hours callers get a real conversation, not a beep",
          "Repeat callers and tyre-kickers get handled without eating your afternoon",
        ],
      },
      {
        type: "paragraph",
        text: "You get the summary on your phone when you're back on the ground. You decide who to call back and in what order.",
      },
      { type: "heading", text: "The maths on one missed roofing job" },
      {
        type: "paragraph",
        text: "Roofing jobs aren't $180 callouts. A re-roof, a full gutter replacement, an insurance repair — these run into the thousands. Missing one call a month is not a small leak in the business, it's a hole.",
      },
      {
        type: "paragraph",
        text: "Compare that to what answering costs. Handsfree pricing is public:",
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
        text: "No lock-in contracts on any tier. For most roofing companies with a crew or two, Receptionist is the right starting point. If you're running multiple crews through storm season, Pro handles the volume.",
      },
      { type: "heading", text: "Why not just use an app or a DIY bot" },
      {
        type: "paragraph",
        text: "There are plenty of DIY AI phone tools where you write the scripts, wire up the logic and hope it holds together. That's a second job you don't want during a storm week.",
      },
      {
        type: "paragraph",
        text: "Handsfree is built, monitored and improved for you. We set it up around how your roofing business actually runs — your service area, your job types, what counts as urgent, what you want asked about insurance claims. Then we keep watching it and tuning it. You don't configure anything.",
      },
      {
        type: "paragraph",
        text: "We built it because we ran a trade business and lived the missed-call problem ourselves. It's not a generic tool with a tradie landing page bolted on.",
      },
      { type: "heading", text: "Getting set up" },
      {
        type: "paragraph",
        text: "Onboarding is quick. We learn your business, set up the answering, forward your calls, and you're live. Storm season doesn't wait, and neither should the setup.",
      },
      { type: "cta", text: "See plans and pricing for your roofing business", to: "/pricing" },
      {
        type: "paragraph",
        text: "Never miss a call. Ever again — even when you're 8 metres up with both hands full.",
      },
    ],
  },

  {
    slug: "receptionist-vs-ai-receptionist-cost-comparison",
    title: "Receptionist vs AI Receptionist: Real Cost Comparison",
    description:
      "Weighing up hiring a receptionist against an AI receptionist? Here's an honest cost comparison for Australian trade businesses, including hidden on-costs.",
    publishedDate: "2026-08-21",
    excerpt:
      "Hiring someone to answer the phone sounds simple until you add up wages, super, leave and training. Here's how a human receptionist stacks up against an AI one for a trade business.",
    body: [
      {
        type: "paragraph",
        text: "You're missing calls. You know it's costing you jobs. So the question becomes: do you hire someone to answer the phone, or do you get an AI receptionist to do it?",
      },
      {
        type: "paragraph",
        text: "Both work. They just cost very different amounts, and the real gap is bigger than most tradies expect — because a wage is never just a wage.",
      },
      { type: "heading", text: "What a human receptionist actually costs" },
      {
        type: "paragraph",
        text: "The hourly rate is the number people focus on. It's the smallest part of the picture. Before you commit, go to the Fair Work website and look up the current Clerks — Private Sector Award rate for the level and hours you need. That's your starting point, not your total.",
      },
      {
        type: "paragraph",
        text: "On top of the base rate you're paying:",
      },
      {
        type: "list",
        items: [
          "Superannuation on every hour worked",
          "Annual leave and personal/carer's leave",
          "Public holidays",
          "Workers compensation insurance",
          "Payroll tax, if you're over the threshold in your state",
          "A desk, a computer, a phone and a mobile plan",
          "Your time recruiting, onboarding and training them",
        ],
      },
      {
        type: "paragraph",
        text: "Do the maths with your own numbers. Take the award rate, add roughly a fifth again for super and leave loading, multiply by the hours you need, and you'll land on a monthly figure that's usually well north of what people first guess for a part-timer.",
      },
      {
        type: "paragraph",
        text: "Then there's the coverage problem. A part-time receptionist covers part of the day. Calls that land at 7am, during their lunch break, at 5:30pm, or on Saturday morning still go to voicemail. If you want genuine business-hours-plus coverage from humans, you're looking at more than one person.",
      },
      { type: "heading", text: "What an AI receptionist costs" },
      {
        type: "paragraph",
        text: "Flat monthly fee. No super, no leave, no recruitment, no laptop. With Handsfree:",
      },
      {
        type: "list",
        items: [
          "Essentials — $129/month: SMS-only missed-call text-back, no live answering, 100 SMS included",
          "Receptionist — $249/month: live AI answering in your business name, 150 mins call answering + 150 SMS, 24/7 after-hours coverage, calendar booking included",
          "Pro — $449/month: everything in Receptionist, 400 mins + 400 SMS, priority support",
          "Custom — by quote, for high-volume operations",
        ],
      },
      {
        type: "paragraph",
        text: "No lock-in contracts on any tier. If it doesn't work for you, you stop paying.",
      },
      {
        type: "paragraph",
        text: "The number that matters most in that list is 24/7. An AI receptionist doesn't clock off. It answers the 6:40pm burst pipe call and the Sunday morning no-hot-water call the same way it answers the Tuesday 10am enquiry.",
      },
      { type: "heading", text: "Where a human still wins" },
      {
        type: "paragraph",
        text: "We're not going to pretend otherwise. A good receptionist who knows your business can chase suppliers, handle a difficult customer with real judgement, do your invoicing, follow up quotes and manage your diary properly. They become part of the business in a way software doesn't.",
      },
      {
        type: "paragraph",
        text: "If you've got the volume and the admin load to justify a full-time person, hire them. Plenty of trade businesses reach that point.",
      },
      {
        type: "paragraph",
        text: "But if the only real problem is \"the phone rings while I'm on the tools and I lose the job,\" hiring a person is an expensive way to solve a narrow problem. And most tradies aren't at the point where they can afford a full-time admin person anyway.",
      },
      { type: "heading", text: "The combination most trade businesses land on" },
      {
        type: "paragraph",
        text: "A lot of businesses end up doing both, in stages. AI answers the phone 24/7 and books jobs into the calendar. When admin volume grows enough, they bring on a part-timer for the quoting, invoicing and supplier work — and the AI keeps handling calls outside that person's hours.",
      },
      {
        type: "paragraph",
        text: "That's the honest answer. AI receptionists aren't a replacement for a great office manager. They're a replacement for voicemail, and voicemail is what's actually costing you jobs right now.",
      },
      { type: "heading", text: "How to decide this week" },
      {
        type: "paragraph",
        text: "Work out roughly how many calls you miss in a month and what an average job is worth to you. If recovering even one or two of those jobs covers the monthly fee, the decision makes itself — and you haven't taken on a single employment obligation to find out.",
      },
      {
        type: "paragraph",
        text: "One more thing worth checking: whether you're buying a DIY bot you have to configure and babysit, or a service that someone else builds and improves for you. Handsfree is the second kind. We set it up, monitor it, and tune it — because we ran a trade business and know you don't have evenings free to fiddle with call scripts.",
      },
      { type: "cta", text: "See what each tier includes and what it costs — no quote form, no games.", to: "/pricing" },
      {
        type: "paragraph",
        text: "Still weighing it up? Have a read of how much an AI receptionist costs in Australia, or work out how many jobs you're actually losing to missed calls first.",
      },
    ],
  },

  {
    slug: "phone-answering-for-solo-tradies",
    title: "Phone Answering for Solo Tradies: What Actually Works",
    description:
      "Running a trade business on your own? Here's how phone answering for solo tradies works, what it costs, and how to stop losing jobs while you're on the tools.",
    publishedDate: "2026-08-24",
    excerpt:
      "When you're a one-man band, every missed call is a job someone else gets. Here's how phone answering works for solo tradies — and what it actually costs.",
    body: [
      {
        type: "paragraph",
        text: "When you're on your own, the phone is your biggest problem. You can't answer it up a ladder. You can't answer it under a house. You can't answer it with a customer standing next to you asking about their switchboard. So it rings out, and by the time you're back in the ute there are four missed calls and two of them have already rung someone else.",
      },
      {
        type: "paragraph",
        text: "Solo tradies don't have an office. You don't have a receptionist and you're not about to hire one. But that doesn't mean you have to keep losing work. Here's what your options actually are.",
      },
      { type: "heading", text: "Why voicemail doesn't cut it anymore" },
      {
        type: "paragraph",
        text: "Most people under 50 don't leave voicemails. They hang up and dial the next name on Google. That's not a theory, it's just how people behave now — if they've got a burst pipe or no power, they're not waiting around for you to check your messages at 6pm.",
      },
      {
        type: "paragraph",
        text: "Voicemail also puts the work back on you. Now you've got six messages to listen to, transcribe in your head, and call back — usually while you're eating dinner. It turns a missed call into a second job.",
      },
      { type: "heading", text: "The three real options for a one-man band" },
      {
        type: "paragraph",
        text: "Broadly, solo tradies land on one of three approaches:",
      },
      {
        type: "list",
        items: [
          "Missed-call text-back. When you can't pick up, the caller gets an automatic SMS saying you'll ring back shortly. Cheap, simple, and better than silence — but it doesn't answer questions or book anything.",
          "A human answering service. A call centre picks up in your business name and takes a message. Works, but you're usually paying per call or per minute, and the person answering doesn't know a meter box from a mixer tap.",
          "An AI receptionist. A voice answers in your business name, 24/7, handles the basics — what the job is, where it is, when they need someone — and sends you the details. No hold music, no ringing out.",
        ],
      },
      {
        type: "paragraph",
        text: "For a solo operator, the deciding factor is usually cost versus how much of the conversation you want handled. If you just want a nudge so callers know you exist, text-back is enough. If you want calls actually answered and jobs actually booked, you need something that talks.",
      },
      { type: "heading", text: "What phone answering costs a solo tradie" },
      {
        type: "paragraph",
        text: "No games here. Our pricing:",
      },
      {
        type: "list",
        items: [
          "Essentials — $129/month. SMS-only missed-call text-back, no live answering, 100 SMS included.",
          "Receptionist — $249/month. Live AI answering in your business name, 150 minutes of call answering plus 150 SMS, 24/7 after-hours coverage, calendar booking included.",
          "Pro — $449/month. Everything in Receptionist with 400 minutes and 400 SMS, plus priority support.",
          "Custom — by quote, for high-volume operations.",
        ],
      },
      {
        type: "paragraph",
        text: "No lock-in contracts on any tier. For most solo tradies, one recovered job a month covers the whole bill. If you're doing $400 service calls, the maths isn't complicated.",
      },
      { type: "heading", text: "What to look for if you're going it alone" },
      {
        type: "paragraph",
        text: "If you're a single operator, you don't have time to sit in a dashboard tweaking scripts and testing what your bot says. That's the difference between a DIY AI tool and something built for you. Handsfree gets set up, monitored and improved on your behalf — you tell us how your business runs, we make the phone behave.",
      },
      {
        type: "paragraph",
        text: "A few things worth checking with any provider:",
      },
      {
        type: "list",
        items: [
          "Does it answer in your business name, not a generic greeting?",
          "Does it cover after-hours and weekends, when a lot of emergency work comes in?",
          "Does it send you the job details in a form you can act on from the ute?",
          "Can it book straight into your calendar, or does it just take a message?",
          "Are you locked into a contract?",
        ],
      },
      { type: "heading", text: "The honest bit" },
      {
        type: "paragraph",
        text: "Answering the phone yourself will always be the gold standard — nobody sells your work better than you. But you can't be on the tools and on the phone at once, and pretending otherwise just costs you jobs quietly, week after week.",
      },
      {
        type: "paragraph",
        text: "Getting your calls answered isn't about looking bigger than you are. It's about not handing work to the bloke down the road because you were mid-job with your hands full.",
      },
      { type: "cta", text: "See exactly what each plan includes and pick the one that fits how you work.", to: "/pricing" },
      {
        type: "paragraph",
        text: "Setup is quick, there's no contract, and you can start with text-back and move up if you want live answering later.",
      },
    ],
  },

  {
    slug: "why-customers-dont-leave-voicemails",
    title: "Why Customers Don't Leave Voicemails (And What To Do)",
    description:
      "Most people who ring a tradie won't leave a voicemail — they just call the next name on the list. Here's why it happens and how to stop losing those jobs.",
    publishedDate: "2026-08-27",
    excerpt:
      "Your voicemail isn't broken — nobody's using it. Here's why customers hang up instead of leaving a message, and what actually captures those calls.",
    body: [
      {
        type: "paragraph",
        text: "You check your phone at the end of the day. Six missed calls. Zero voicemails. It feels like the phone's playing up. It isn't. Those six people just rang someone else.",
      },
      {
        type: "paragraph",
        text: "Voicemail stopped working as a business tool years ago. If you're still relying on it to catch calls while you're up a ladder or under a house, you're losing work every week and you'll never know how much.",
      },
      { type: "heading", text: "Four reasons nobody leaves you a message" },
      {
        type: "paragraph",
        text: "It's not laziness. There are real reasons people hang up the second they hear a beep.",
      },
      {
        type: "list",
        items: [
          "They've got other numbers to ring. Most people searching for a plumber or sparkie open three or four listings at once. The first human voice wins. Leaving a message means waiting — and they don't want to wait.",
          "They don't trust it. A voicemail is a shout into the dark. No confirmation you got it, no idea when you'll call back. Ringing the next business feels far more certain.",
          "Their problem is urgent. Blocked drain, no power, water coming through the ceiling. Nobody describes an emergency to a machine.",
          "They hate leaving messages. A lot of people genuinely dread it — fumbling their words, repeating a phone number, sounding awkward. Hanging up is easier.",
        ],
      },
      { type: "heading", text: "The calls you lose are the good ones" },
      {
        type: "paragraph",
        text: "Here's the part that stings. The customers most likely to leave a voicemail are the ones with no urgency — the price shoppers, the \"just wondering roughly what it'd cost\" callers, the ones still six months off doing anything.",
      },
      {
        type: "paragraph",
        text: "The urgent jobs, the ones ready to book today, the ones happy to pay a callout fee — they never reach your voicemail. They need it fixed now, and now doesn't include waiting for a callback.",
      },
      {
        type: "paragraph",
        text: "So your inbox fills up with tyre kickers while the paying work quietly goes to the bloke down the road who answers.",
      },
      { type: "heading", text: "Why calling back later doesn't fix it" },
      {
        type: "paragraph",
        text: "Even when someone does leave a message, the window closes fast. You ring back at 6pm and half the time they've already booked someone. The other half don't pick up, because now they're at work, at dinner, or putting the kids to bed. You leave a message. They don't call back. Round and round it goes.",
      },
      {
        type: "paragraph",
        text: "By the time you actually connect, the job's gone or it's turned into a three-day game of phone tag you didn't need.",
      },
      { type: "heading", text: "What actually works instead" },
      {
        type: "paragraph",
        text: "You need something that responds while the caller is still holding their phone. Two options do that properly.",
      },
      {
        type: "list",
        items: [
          "Missed-call text-back. The moment you miss a call, they get an SMS from your business. It closes the loop instantly and it's dead simple — good for tradies who mainly need to stop the silence.",
          "A live AI receptionist. The call gets answered in your business name, the caller talks to a real-sounding voice, the job details get taken and you get the lead in writing. Nobody hears a beep.",
        ],
      },
      {
        type: "paragraph",
        text: "That's the whole idea behind Handsfree. We built it because we ran a trade business and lived this exact problem — the missed calls, the empty voicemail box, the sinking feeling that jobs were slipping past. It's not a DIY bot you have to sit down and configure. We set it up, we monitor it, and we keep improving it for you.",
      },
      { type: "heading", text: "What it costs" },
      {
        type: "paragraph",
        text: "Straight numbers, no games. Essentials is $129/month for SMS-only missed-call text-back with 100 SMS included. Receptionist is $249/month for live AI answering in your business name — 150 minutes of call answering plus 150 SMS, 24/7 after-hours cover and calendar booking. Pro is $449/month with 400 minutes, 400 SMS and priority support. High volume operations get a custom quote.",
      },
      {
        type: "paragraph",
        text: "No lock-in contracts on any tier. If it doesn't pay for itself in recovered jobs, you stop.",
      },
      { type: "cta", text: "See which plan fits your call volume", to: "/pricing" },
      {
        type: "paragraph",
        text: "Your voicemail isn't a safety net. It's a hole in the bottom of the bucket. Plug it and you'll be surprised how much work was already coming your way.",
      },
    ],
  },

  {
    slug: "how-to-handle-after-hours-emergency-calls-as-a-tradie",
    title: "How to Handle After-Hours Emergency Calls as a Tradie",
    description:
      "A practical guide for Aussie tradies on handling after-hours emergency calls: setting rules, screening urgency, pricing callouts and never missing the good ones.",
    publishedDate: "2026-08-30",
    excerpt:
      "Emergency calls don't wait for business hours. Here's how to set up a system that catches the urgent jobs, filters the time-wasters, and still lets you eat dinner in peace.",
    body: [
      {
        type: "paragraph",
        text: "Burst pipe at 9pm. Dead switchboard on a Sunday. Hot water gone on the coldest night of the year. After-hours emergencies are some of the best-paying work a tradie gets — and some of the most annoying to manage.",
      },
      {
        type: "paragraph",
        text: "The problem isn't that emergencies happen. It's that most tradies have no system for them. The phone rings at 10:47pm, you're half asleep, and you either answer everything (and burn out) or answer nothing (and lose the job to the bloke down the road).",
      },
      {
        type: "paragraph",
        text: "Here's how to sort it properly.",
      },
      { type: "heading", text: "Decide what actually counts as an emergency" },
      {
        type: "paragraph",
        text: "Before you can handle after-hours calls well, you need to know which ones you'll actually get out of bed for. Write it down. Be specific. Vague rules mean you make the call emotionally at 11pm, which is when you make bad decisions.",
      },
      {
        type: "paragraph",
        text: "A typical emergency list for a plumber might look like:",
      },
      {
        type: "list",
        items: [
          "Active leak or burst pipe causing property damage",
          "Blocked sewer or overflowing toilet — no other working toilet on site",
          "No water to the property",
          "Gas smell (send them to the gas emergency line first, then attend)",
          "Hot water failure with vulnerable occupants — elderly, newborn, medical need",
        ],
      },
      {
        type: "paragraph",
        text: "And for a sparky:",
      },
      {
        type: "list",
        items: [
          "Total power loss to the property",
          "Burning smell, sparking, or smoke from an outlet or board",
          "Exposed live wiring",
          "Safety switch tripping repeatedly and won't reset",
          "Power loss affecting medical equipment",
        ],
      },
      {
        type: "paragraph",
        text: "Everything else is a next-business-day job. A dripping tap isn't an emergency. One dead downlight isn't an emergency. But the customer doesn't know that — so somebody has to ask the right questions.",
      },
      { type: "heading", text: "Set your after-hours pricing and say it upfront" },
      {
        type: "paragraph",
        text: "The fastest way to kill after-hours resentment is to charge properly for it. Set an after-hours callout fee and an after-hours hourly rate, and make sure the customer hears the number before you get in the ute.",
      },
      {
        type: "paragraph",
        text: "This does two things. It pays you fairly for working at 11pm. And it self-filters the non-emergencies — plenty of people decide the dripping tap can wait until Monday once they hear the Saturday-night rate.",
      },
      {
        type: "paragraph",
        text: "Say it plainly on the call: \"After-hours callout is $X, then $Y per hour. Happy to head out now if that works for you.\" No surprises, no arguments on the invoice.",
      },
      { type: "heading", text: "Stop answering the phone yourself" },
      {
        type: "paragraph",
        text: "This is the bit most tradies resist, and it's the bit that changes everything. You do not need to personally answer every after-hours call to capture every after-hours job.",
      },
      {
        type: "paragraph",
        text: "What you need is something that answers on the first ring, works out whether it's genuinely urgent, and only wakes you when it matters. Your options:",
      },
      {
        type: "list",
        items: [
          "Voicemail — free, and roughly useless. Most callers with an emergency hang up and ring the next number.",
          "A rostered on-call mate — works if you've got a couple of licensed tradies willing to share the load. Falls apart when someone's away.",
          "A human answering service — decent, but you pay per call, hold times vary, and the operator has no idea what a switchboard is.",
          "An AI receptionist — answers instantly in your business name, asks your triage questions, texts you the urgent ones and books the rest for the morning.",
        ],
      },
      {
        type: "paragraph",
        text: "The point is the same either way: the customer gets a real answer at 10pm, and you get to decide whether to move — instead of missing the call entirely.",
      },
      { type: "heading", text: "Write your triage script once" },
      {
        type: "paragraph",
        text: "Whatever answers your phone after hours needs a script. Four or five questions is plenty:",
      },
      {
        type: "list",
        items: [
          "What's happening right now? (Water running? Power out? Smoke?)",
          "Is anyone at risk, or is property being damaged?",
          "What's the address and is someone there now?",
          "Have you turned off the water main / flicked the safety switch?",
          "Best mobile number to call back on?",
        ],
      },
      {
        type: "paragraph",
        text: "That's enough to sort a genuine emergency from a Monday job. If it's urgent, you get a text with the details and you're driving in five minutes. If it's not, it lands in tomorrow's schedule and nobody's night gets ruined.",
      },
      { type: "heading", text: "Protect your off-time on purpose" },
      {
        type: "paragraph",
        text: "Emergency work is only profitable if it doesn't wreck you. Pick your boundaries — maybe you take emergencies until 10pm weeknights and all day Saturday, but Sunday's off unless it's life or property. Maybe you rotate weekends with another tradie in your network and refer to each other.",
      },
      {
        type: "paragraph",
        text: "Whatever you choose, make it a rule, not a mood. And make sure the phone still gets answered on the nights you're off, so the caller books in for Monday instead of ringing your competitor.",
      },
      {
        type: "paragraph",
        text: "Handsfree answers every after-hours call in your business name, 24/7, asks your triage questions, and only texts you when it's a real emergency. The Receptionist tier is $249/month with 150 minutes of call answering, 150 SMS and calendar booking included. No lock-in contract.",
      },
      { type: "cta", text: "See what after-hours coverage costs", to: "/pricing" },
      {
        type: "paragraph",
        text: "Set your emergency list, set your rates, and put something in front of your phone that never sleeps. That's the whole system.",
      },
    ],
  },

  {
    slug: "book-jobs-automatically-after-hours",
    title: "How to Book Jobs Automatically After Hours (Tradie Guide)",
    description:
      "Learn how Australian tradies can book jobs automatically after hours using AI call answering and calendar booking, without staying up to answer the phone.",
    publishedDate: "2026-09-02",
    excerpt:
      "Most trade enquiries come in after knock-off, and most tradies are too knackered to chase them. Here's how to get jobs booked into your calendar automatically, overnight, without lifting a finger.",
    body: [
      {
        type: "paragraph",
        text: "You knock off at 4:30. Your phone keeps ringing until about 8. Then it starts again at 6 the next morning. Somewhere in that window, a good chunk of your next week's work is going to whoever picks up first.",
      },
      {
        type: "paragraph",
        text: "Booking jobs automatically after hours isn't some futuristic idea. It's a setup problem you can solve in an afternoon. Here's how it actually works.",
      },
      { type: "heading", text: "Why after-hours calls are the ones worth catching" },
      {
        type: "paragraph",
        text: "Think about who rings a tradie at 7pm. Someone who just got home and found water under the sink. Someone whose power just tripped and won't reset. Someone who's finally sat down and started ringing the three sparkies they found on Google.",
      },
      {
        type: "paragraph",
        text: "These people are ready to book. They're not price shopping for fun — they've got a problem now. But they're also going to keep dialling until someone answers. If you ring back at 7am the next day, the job's already gone.",
      },
      { type: "heading", text: "The three ways tradies handle after-hours calls (and why two of them fail)" },
      {
        type: "paragraph",
        text: "Option one: voicemail. The caller hears a beep and hangs up. Most people won't leave a message for a business they've never used. You get nothing.",
      },
      {
        type: "paragraph",
        text: "Option two: you answer it yourself. You're at the dinner table with the kids, trying to write an address on the back of a receipt. You'll do it for a while, then you'll stop, because it's not sustainable.",
      },
      {
        type: "paragraph",
        text: "Option three: something answers for you, takes the details, and puts the job in your calendar. That's the only one that scales without eating your evenings.",
      },
      { type: "heading", text: "How automatic after-hours booking actually works" },
      {
        type: "paragraph",
        text: "The mechanics are simpler than most tradies expect. Here's the chain of events:",
      },
      {
        type: "list",
        items: [
          "Your mobile or business number diverts to an AI receptionist outside your set hours.",
          "The AI answers in your business name — not \"you've reached an answering service\".",
          "It asks the caller what the job is, where they are, and how urgent it is.",
          "It checks your live calendar for open slots and offers the caller real times.",
          "The caller picks one. The job goes straight into your calendar with the details attached.",
          "You get a summary by SMS or email, so you wake up knowing exactly what's booked.",
        ],
      },
      {
        type: "paragraph",
        text: "For genuine emergencies, you set the rule differently — burst pipe or dead switchboard gets escalated to your mobile straight away, while a quote for a new outdoor powerpoint just gets booked for Tuesday.",
      },
      { type: "heading", text: "What you need to sort before it works properly" },
      {
        type: "paragraph",
        text: "Automatic booking only works if the information behind it is right. Before you switch it on, get clear on:",
      },
      {
        type: "list",
        items: [
          "Your actual service area — so you're not booked 90 minutes away for a $180 job.",
          "Your job types and rough duration, so slots are the right length.",
          "Your after-hours hours. Does the AI take over at 4pm or 6pm? Weekends?",
          "What counts as an emergency worth waking you for.",
          "Your call-out fee and whether you quote over the phone.",
        ],
      },
      {
        type: "paragraph",
        text: "Get those five things right and the calendar starts filling itself. Get them wrong and you'll be ringing people back to reschedule, which defeats the purpose.",
      },
      { type: "heading", text: "DIY bot vs done-for-you" },
      {
        type: "paragraph",
        text: "There are plenty of tools that let you build an AI phone agent yourself. If you enjoy tinkering with prompts and call flows at 10pm, go for it. Most tradies don't.",
      },
      {
        type: "paragraph",
        text: "Handsfree is built and set up for you. We take your job types, your service area, your calendar and your rules, and we configure it. Then we monitor how the calls actually go and improve it. You don't touch a settings page.",
      },
      { type: "heading", text: "What it costs" },
      {
        type: "paragraph",
        text: "Live after-hours answering with calendar booking starts on the Receptionist plan at $249/month, which includes 150 minutes of call answering and 150 SMS a month, 24/7 coverage and calendar booking. Pro is $449/month with 400 minutes and 400 SMS plus priority support.",
      },
      {
        type: "paragraph",
        text: "If you only want a missed-call text-back — no live answering — Essentials is $129/month with 100 SMS included. That'll keep the lead warm, but it won't book the job for you while you sleep.",
      },
      {
        type: "paragraph",
        text: "No lock-in contracts on any tier. If it doesn't earn its keep, you stop.",
      },
      { type: "cta", text: "See what after-hours booking costs on each plan.", to: "/pricing" },
      { type: "heading", text: "Start with one week" },
      {
        type: "paragraph",
        text: "Divert your after-hours calls for a week and count what comes in. Most tradies are surprised by the volume — and by how many of those callers were happy to book a time on the spot rather than wait for a call back.",
      },
      {
        type: "paragraph",
        text: "That's the whole argument. Answer the phone at 7pm without being there, and next week's diary sorts itself out.",
      },
    ],
  },
];
