/**
 * Single source of truth for all site copy.
 *
 * Structure follows bestprinciples.md (the 12-principle brief) with the
 * offer construction and numbered-section skeleton of growthwebsites.tech:
 * performance promise in the hero, numbered sections 01–06, named operators
 * with real numbers, two public pricing paths, founder-operator story,
 * quarterly-cohort scarcity.
 */

export const brand = {
  name: "Open Growth Strategies",
  short: "Open Growth",
  system: "The Full-Book Engine",
  founder: "Alex Swafford",
  founderRole: "Founder & Principal",
  location: "North Carolina",
  email: "alex@opengrowthstrategies.com",
  phone: "(704) 555-0142",
  calLink: "#book",
  scarcity: "Now onboarding 4 NC operators for Q4",
};

export const nav = [
  { label: "The Engine", href: "#engine" },
  { label: "Proof", href: "#proof" },
  { label: "Pricing", href: "#pricing" },
  { label: "Founder", href: "#founder" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  headline: ["Your schedule fills,", "or you don't pay."],
  line2Lead: "or ",
  line2Accent: "you don't pay.",
  sub: "Open Growth builds performance-priced marketing systems for pool, HVAC, plumbing and waste operators across North Carolina. $0 upfront. Pricing on the page. Every job tracked to the dollar.",
  ctaPrimary: "Apply for a performance build",
  ctaSecondary: "See the engine",
};

/** Principle 2 — three aggregate proof numbers above the fold. */
export const proof = [
  { value: "$4.2M", label: "routed to service operators" },
  { value: "312", label: "jobs booked for clients this year" },
  { value: "4.9★", label: "average rating across 40+ reviews" },
];

/** Section 01 — the promise. */
export const promise = {
  no: "01",
  eyebrow: "The promise",
  heading: "A system that pays for itself — or costs you nothing.",
  items: [
    {
      metric: "$0",
      title: "build cost",
      desc: "No deposit, no setup fee, no monthly minimum. We build the site and the system first, on our own dime.",
    },
    {
      metric: "$195",
      title: "per booked job",
      desc: "You pay only when a homeowner books real work through the system. Flat fee, capped, published right here — no percentage games.",
    },
    {
      metric: "21 days",
      title: "to launch",
      desc: "From kickoff call to a live site ranking for the service-area searches your buyers already make.",
    },
  ],
};

/** Section 02 — the named system (principle 6), four steps. */
export const engine = {
  no: "02",
  eyebrow: "The Full-Book Engine",
  heading: "Four steps between a quiet phone and a full calendar.",
  sub: "Not a bundle of marketing services. One engine, in a fixed order, tuned per trade. Every client runs the same four steps because the same four steps work.",
  steps: [
    {
      no: "01",
      name: "Get Found",
      desc: "Own the searches your buyers already make. One ranking page per town you serve, a Google Business profile that works, and local SEO competitors can't out-shout.",
    },
    {
      no: "02",
      name: "Get Chosen",
      desc: "A brand and a website that make you the obvious pick in six seconds — before price ever enters the conversation.",
    },
    {
      no: "03",
      name: "Get Booked",
      desc: "Every call routes through a tracked number. Every visitor sees a calendar, not a contact form. Attention becomes scheduled work.",
    },
    {
      no: "04",
      name: "Get Proof",
      desc: "Cost-per-job and booked revenue in one live dashboard. You see exactly what every dollar did — that's how a per-job fee stays honest.",
    },
  ],
};

/** Dashboard mock — the signature recurring visual asset (principle 12). */
export const dashboard = {
  title: "Growth dashboard — Reed Comfort Air",
  period: "Last 30 days",
  stats: [
    { label: "Tracked calls", value: "148", delta: "+22%" },
    { label: "Booked jobs", value: "41", delta: "+9" },
    { label: "Cost per job", value: "$195", delta: "flat" },
    { label: "Booked revenue", value: "$71,400", delta: "+31%" },
  ],
  rows: [
    { source: "Google — \"hvac repair charlotte\"", calls: 64, jobs: 19 },
    { source: "Google Business Profile", calls: 47, jobs: 13 },
    { source: "Service-area pages (12 towns)", calls: 28, jobs: 7 },
    { source: "Referral / direct", calls: 9, jobs: 2 },
  ],
};

/** Section 03 — named operators, real numbers (principles 7, 8, 10). */
export const proofSection = {
  no: "03",
  eyebrow: "Proof",
  heading: "Named operators. Real numbers. No “10,000+ businesses served.”",
  operators: [
    {
      initials: "MR",
      name: "Marcus Reed",
      company: "Reed Comfort Air",
      trade: "HVAC · Charlotte",
      metric: "+112 jobs",
      metricLabel: "booked in 9 months",
      quote:
        "We went from chasing leads to turning work away. The site paid for itself in the first month — and I can see every dollar in the dashboard.",
    },
    {
      initials: "TR",
      name: "Tomás Rivera",
      company: "Rivera Pool & Spa",
      trade: "Pool service · Raleigh",
      metric: "12 accounts",
      metricLabel: "commercial, in 90 days",
      quote:
        "The pricing was on the website. No games, no three-week sales dance. That's why I called, and it's why I stayed.",
    },
    {
      initials: "PN",
      name: "Priya Nair",
      company: "ClearHaul Junk Removal",
      trade: "Junk removal · Durham",
      metric: "3 weeks",
      metricLabel: "booked out, standing",
      quote:
        "Our phone rings with the jobs we actually want now — not tire-kickers. That's the whole difference.",
    },
  ],
  buildsLabel: "Recent builds",
  builds: [
    { name: "Reed Comfort Air", meta: "HVAC · Charlotte" },
    { name: "Rivera Pool & Spa", meta: "Pool · Raleigh" },
    { name: "ClearHaul", meta: "Junk removal · Durham" },
    { name: "Blue Line Plumbing", meta: "Plumbing · Greensboro" },
    { name: "Carolina Coastal Waste", meta: "Waste · Wilmington" },
  ],
};

/** Section 04 — two public pricing paths (principles 3, 4). */
export const pricing = {
  no: "04",
  eyebrow: "Pricing",
  heading: "Two ways to work with us. Both are public.",
  sub: "Most agencies in this category hide their numbers behind a discovery call. We think that wastes your Tuesday. Here they are.",
  tiers: [
    {
      name: "Performance Build",
      featured: true,
      price: "$0",
      priceNote: "build cost",
      plus: "$195 per verified booked job",
      features: [
        "Custom site in your brand, built to rank",
        "One service-area page per town you serve",
        "Tracked number + calendar booking",
        "Live growth dashboard",
        "Hosting, security, updates — included",
        "Month-to-month. Cancel anytime, no clawback.",
      ],
      cta: "Apply for a performance build",
    },
    {
      name: "Flat Build",
      featured: false,
      price: "$8,000",
      priceNote: "one-time",
      plus: "$0 per job, ever",
      features: [
        "Everything in Performance Build",
        "You own the site and the code outright",
        "90-day book-or-refund guarantee",
        "Optional growth retainer from $3,200/mo",
        "Named strategist on your account",
      ],
      cta: "Book a fit call",
    },
  ],
  note: "Not sure which fits? The 20-minute fit call ends with a recommendation either way — including “neither, and here's who to call instead.”",
};

/** Section 05 — founder module (principles 10, 11). */
export const founder = {
  no: "05",
  eyebrow: "Founder",
  name: "Alex Swafford",
  role: "Founder & Principal · Open Growth Strategies",
  bio: [
    "I grew up around a North Carolina service business, and I watched it pay three different agencies for reports nobody could explain. Nobody could say what a missed call cost, or what a booked job was worth. That's the problem this company exists to end.",
    "Open Growth is deliberately small — me on strategy, a senior three-person squad on build and media. We take four operators a quarter, we publish our pricing, and we bill in a way that only works if your phone rings.",
  ],
  credentials: ["NC born & based", "Builds in public", "Author, The Full-Book Playbook"],
  pledge:
    "If the engine isn't producing, I'll tell you before you have to ask — and we'll fix it or wind it down. You'll never be a line item nobody looks at.",
  signature: "— Alex",
};

/** Section 06 — FAQ. */
export const faq = {
  no: "06",
  eyebrow: "FAQ",
  heading: "The questions operators actually ask.",
  items: [
    {
      q: "What counts as a “verified booked job”?",
      a: "A homeowner who books work through the site's calendar, or calls the tracked number and the call lasts 60+ seconds with a job scheduled. Tire-kickers, wrong numbers and spam don't count — you can audit every one in the dashboard.",
    },
    {
      q: "What's the catch on the $0 build?",
      a: "There isn't one — the model is the catch, in your favor. We only make money when you book work, so we only take on operators we're confident the engine fits. That's also why we say no more than we say yes.",
    },
    {
      q: "Why only four operators per quarter?",
      a: "Because the engine works locally. We can't run it for six HVAC companies in the same metro without cannibalizing their leads. Four per quarter, one per trade per market.",
    },
    {
      q: "Why do you publish pricing when nobody else does?",
      a: "Because hiding it wastes everyone's time. If the numbers work, you arrive at the call already qualified. If they don't, you've lost nothing. Transparency is the whole point of the name.",
    },
    {
      q: "Are there contracts?",
      a: "Performance Build is month-to-month — cancel anytime, no clawback on jobs already booked. Flat Build carries a 90-day book-or-refund guarantee, in writing.",
    },
    {
      q: "Who actually does the work?",
      a: "Alex on strategy, plus a three-person senior squad on build and media. Nothing is outsourced, and you'll always know the name of the person on your account.",
    },
  ],
};

export const finalCta = {
  heading: "Get the phone ringing before the season does.",
  sub: "A 20-minute fit call. No pitch deck, no ghosting, no “let me loop in my manager.” If we're a fit, we start building this month.",
  cta: "Book the 20-minute fit call",
  meta: ["No setup fees", "Month-to-month", "Pricing on the page", "Reply in < 4 hours"],
};

export const footer = {
  tagline: "Your schedule fills, or you don't pay.",
  columns: [
    {
      title: "Site",
      links: nav.map((n) => ({ label: n.label, href: n.href })),
    },
    {
      title: "Contact",
      links: [
        { label: brand.email, href: `mailto:${brand.email}` },
        { label: brand.phone, href: "tel:+17045550142" },
        { label: "North Carolina, USA", href: "#" },
      ],
    },
  ],
};
