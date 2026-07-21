/**
 * Single source of truth for all site copy.
 * Change the brand name, numbers, and offers here — everything updates.
 */

export const brand = {
  name: "Open Growth Strategies",
  short: "Open Growth",
  system: "The Full-Book System",
  founder: "Alex Swafford",
  founderRole: "Founder & Principal",
  location: "North Carolina",
  email: "alex@opengrowthstrategies.com",
  phone: "(704) 555-0142",
  calLink: "#book",
};

/** Principle 2 — three aggregate proof numbers above the fold. */
export const proof = [
  { value: "$4.2M", label: "routed to service operators", sub: "in tracked revenue" },
  { value: "312", label: "new jobs booked", sub: "for clients this year" },
  { value: "4.9★", label: "average client rating", sub: "across 40+ reviews" },
];

/** Trust marquee — general service-business categories. */
export const trustWords = [
  "Pool & Spa",
  "HVAC",
  "Plumbing",
  "Waste & Junk Removal",
  "Roofing",
  "Electrical",
  "Landscaping",
  "Restoration",
  "Pest Control",
  "Garage & Doors",
];

/** Principle 6 — the named system, four pillars. */
export const pillars = [
  {
    no: "01",
    name: "Get Found",
    desc: "Own the searches your buyers already make. Local SEO, a site that ranks, and a presence competitors can't out-shout.",
  },
  {
    no: "02",
    name: "Get Chosen",
    desc: "A brand and a website that make you the obvious pick in the first six seconds — before price ever comes up.",
  },
  {
    no: "03",
    name: "Get Booked",
    desc: "Turn attention into scheduled work with offers, follow-up, and a site built to be your best 24/7 salesperson.",
  },
  {
    no: "04",
    name: "Get Proof",
    desc: "Every dollar tracked to its source. You see cost-per-job and booked revenue in one live dashboard — no vanity metrics.",
  },
];

/** Principle 7 — case study titles are outcomes, never client names. */
export const cases = [
  {
    title: "Turned $6K in ad spend into $105K in sold work",
    vertical: "HVAC",
    metric: "17.5×",
    metricLabel: "return on ad spend",
    tags: ["Paid Search", "Landing Pages"],
  },
  {
    title: "12 new commercial pool accounts in 90 days",
    vertical: "Pool Service",
    metric: "+12",
    metricLabel: "recurring accounts",
    tags: ["Local SEO", "Website"],
  },
  {
    title: "Went from a full pipeline to a 3-week waitlist",
    vertical: "Junk Removal",
    metric: "3 wks",
    metricLabel: "booked out",
    tags: ["Brand", "Offers"],
  },
  {
    title: "Cut cost-per-lead by 61% in one quarter",
    vertical: "Plumbing",
    metric: "-61%",
    metricLabel: "cost per lead",
    tags: ["Paid Search", "Tracking"],
  },
  {
    title: "Doubled booked revenue without spending more on ads",
    vertical: "Restoration",
    metric: "2.0×",
    metricLabel: "booked revenue",
    tags: ["CRO", "Follow-up"],
  },
  {
    title: "Ranked #1 for the money keyword in a metro market",
    vertical: "Roofing",
    metric: "#1",
    metricLabel: "local ranking",
    tags: ["Local SEO", "Content"],
  },
];

/** Principle 3 + 4 — published pricing, tiered to self-qualify. */
export const tiers = [
  {
    name: "Foundation",
    tagline: "For operators ready to look like the best option in town.",
    price: "$8,000",
    priceNote: "one-time build",
    best: false,
    features: [
      "Custom high-converting website",
      "Local SEO foundation & Google Business",
      "Copywriting that sells the job",
      "Conversion tracking installed",
      "The Full-Book System playbook",
    ],
    cta: "Start here",
  },
  {
    name: "Growth",
    tagline: "For teams who want a schedule that fills itself, month after month.",
    price: "$3,200",
    priceNote: "per month + build",
    best: true,
    features: [
      "Everything in Foundation, plus:",
      "Managed paid search & local ads",
      "Ongoing SEO & content engine",
      "Monthly offer & landing-page tests",
      "Live growth dashboard",
      "Named strategist on your account",
    ],
    cta: "Most operators pick this",
  },
  {
    name: "Partner",
    tagline: "For established businesses ready to dominate their region.",
    price: "Let's talk",
    priceNote: "revenue-share options",
    best: false,
    features: [
      "Everything in Growth, plus:",
      "Multi-location & multi-service scaling",
      "Brand system & fleet identity",
      "Quarterly strategy on-site or on-call",
      "Priority build queue",
      "Performance-based pricing available",
    ],
    cta: "Book a fit call",
  },
];

/** Principle 8 + 10 — testimonials with real names. */
export const testimonials = [
  {
    quote:
      "We went from chasing leads to turning work away. The site alone paid for itself in the first month.",
    name: "Marcus Reed",
    role: "Owner, Reed Comfort Air",
    rating: 5,
  },
  {
    quote:
      "Alex actually showed me where every dollar went. I'd never had an agency do that. Ever.",
    name: "Dana Whitfield",
    role: "Owner, Blue Line Plumbing",
    rating: 5,
  },
  {
    quote:
      "The pricing was on the website. No games, no three-week sales dance. That's why I called.",
    name: "Tomás Rivera",
    role: "GM, Rivera Pool & Spa",
    rating: 5,
  },
  {
    quote:
      "Our phone rings with the jobs we actually want now — not tire-kickers. That's the whole difference.",
    name: "Priya Nair",
    role: "Owner, ClearHaul Junk Removal",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "Why do you publish your pricing when no one else does?",
    a: "Because hiding it wastes everyone's time. If the numbers work for you, you'll book a call already qualified. If they don't, you've lost nothing. Transparency is the whole point of the name.",
  },
  {
    q: "I'm not in pools or HVAC. Can you still help?",
    a: "Yes. The Full-Book System works for any high-margin service business that books jobs — plumbing, roofing, electrical, restoration, landscaping, and more. The playbook is the same; the offers are tuned to your trade.",
  },
  {
    q: "How fast will I see results?",
    a: "The website and tracking go live in weeks, not months. Paid channels can produce booked jobs in the first 30 days. SEO compounds over 3–6 months. We'll set honest expectations on our first call.",
  },
  {
    q: "Do I have to sign a long contract?",
    a: "No lock-in games. Builds are project-based. The Growth retainer is month-to-month after an initial 90-day runway so the system has time to prove itself.",
  },
  {
    q: "Who actually does the work?",
    a: "Me — Alex — on strategy, plus a small, senior team on build and media. You'll always know the name of the person on your account. No hand-off to a junior you never meet.",
  },
];
