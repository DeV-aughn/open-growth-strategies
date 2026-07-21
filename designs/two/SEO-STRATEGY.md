# SEO Keyword Strategy — Open Growth Strategies (homepage)

Method: claude-seo plugin methodology (seed expansion → intent classification →
SERP-consensus / page-type alignment → on-page implementation). SERP data sampled
live July 2026 via web search.

## Positioning read

The homepage is a **transactional local agency landing page**. SERP research shows
that is exactly the page type Google rewards for geo-modified agency queries — so
the page is structurally aligned (no SXO mismatch). The play is: win the
geo-modified and differentiator keywords now, build authority toward the national
head terms later.

## Keyword map

### Tier 1 — Primary (rank targets for this page)

| Keyword | Intent | SERP finding |
|---|---|---|
| home services marketing agency north carolina | Transactional | Fragmented SERP, small local agencies rank with dedicated pages. Winnable. |
| contractor marketing agency north carolina | Transactional | Same — John Potter Media, Bellrae, Fannit, FatCat rank with local landing pages. |
| hvac marketing agency charlotte / raleigh (+ per-city variants) | Transactional | Indie agencies rank with geo pages (RS Gonzales pattern). Per-city service-area pages recommended (Phase 2). |

### Tier 2 — Differentiator (attention + conversion; low competition)

| Keyword | Intent | Why |
|---|---|---|
| pay per booked job marketing / pay per lead marketing for contractors | Commercial | Thin SERP (guides + a few service pages). The $0-upfront / $195-per-job model is the exact answer to this query. Highest conversion intent of the map. |
| performance based marketing agency home services | Commercial | Emerging category ("leads don't pay the bills — revenue does" is the press angle new entrants win with). |
| pay per lead alternative for hvac / plumbing | Commercial | Captures operators burned by Angi/HomeAdvisor shared leads. Exclusivity ("one operator per trade per market") is the hook. |

### Tier 3 — Head terms (semantic foundation, long-term)

home services marketing agency · hvac marketing agency · plumbing marketing
company · junk removal marketing. Dominated nationally by Scorpion, RYNO/Blue
Corona, Thrive, WebFX + listicles. Keep in title/copy for topical relevance;
don't expect page-one soon.

### Supporting semantic terms (woven into copy)

local SEO for contractors · Google Business Profile · service-area pages ·
tracked calls · cost per job · booked jobs

## Implemented on-page (this pass)

- **Title (68c):** `Home Services Marketing Agency NC — Pay Per Booked Job | Open Growth` — keyword + CTR hook.
- **Meta description:** keyword + trades + $0 upfront / $195 per booked job (the SERP-snippet conversion hook).
- Canonical, robots, geo meta, Open Graph, Twitter card.
- **JSON-LD ProfessionalService** with areaServed cities, founder Person, OfferCatalog (both public pricing tiers), knowsAbout. No FAQPage schema — FAQ rich results retired May 2026 (claude-seo guidance).
- H1 stays the conversion promise ("Your schedule fills, or you don't pay.") — the keyword lives in the title tag and the first paragraph under the H1 ("performance-priced home services marketing agency … across North Carolina").
- New FAQ item listing trades + NC cities (long-tail local coverage + exclusivity proof).
- `public/robots.txt` + `public/sitemap.xml`.

## Recommended next phases

1. **Per-city + per-trade service-area pages** (`/hvac-marketing-charlotte`, etc.) —
   this is how every indie agency in the SERP wins; mirrors the product you sell.
   Keep unique content ≥40–60% per claude-seo quality gates.
2. **Pricing/cost content** — "How much does HVAC marketing cost in NC" style guides;
   the cost SERP is all guides and you're one of the few agencies with public pricing.
3. **OG image** (1200×630) — og:image intentionally omitted until an asset exists.
4. **Prerender/SSG** — the site is a client-rendered SPA; Google renders JS but a
   prerender pass (e.g. vite-plugin-prerender / SSG) removes the risk entirely.
5. **Google Business Profile** — list cities (not "North Carolina"; SABs may no
   longer use whole states per June 2025 guidelines), keep hours accurate
   (top-5 local ranking factor), build named-operator reviews.
