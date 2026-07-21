# SEO Updates — Applied Changes Log

Site: Open Growth Strategies homepage (`designs/two`)
Date applied: 2026-07-21
Method: claude-seo plugin methodology (github.com/AgriciDaniel/claude-seo)
Companion doc: `SEO-STRATEGY.md` (keyword research + SERP evidence + roadmap)

---

## 1. Title tag — `index.html`

**Before:**
```
Open Growth Strategies — Your schedule fills, or you don't pay.
```

**After:**
```
Home Services Marketing Agency NC — Pay Per Booked Job | Open Growth
```

**Why:** The old title carried zero search keywords. The new one leads with the
Tier-1 primary keyword ("home services marketing agency" + NC geo modifier) and
follows with the differentiator hook ("pay per booked job") that drives SERP
click-through and pre-qualifies the clicker.

---

## 2. Meta description — `index.html`

**Before:**
```
Open Growth Strategies — performance-priced growth systems for home-service
operators. Your schedule fills, or you don't pay. Pricing is public.
```

**After:**
```
Open Growth Strategies is a home services marketing agency in North Carolina.
Local SEO, ranking websites & booked-job tracking for HVAC, plumbing, pool &
junk removal companies. $0 upfront — pay $195 per booked job.
```

**Why:** Now contains the primary keyword phrase verbatim, names all four trades
(each a keyword vector), and puts the two pricing numbers in the snippet — the
public-pricing transparency is the conversion hook competitors can't copy.

---

## 3. Technical meta tags — `index.html` (all new)

| Tag | Value | Purpose |
|---|---|---|
| `rel="canonical"` | `https://opengrowthstrategies.com/` | Prevents duplicate-URL indexing |
| `meta robots` | `index, follow, max-image-preview:large` | Explicit crawl directive |
| `geo.region` | `US-NC` | Local relevance signal |
| `geo.placename` | `North Carolina` | Local relevance signal |

---

## 4. Open Graph + Twitter Card — `index.html` (all new)

- `og:type`, `og:site_name`, `og:url`, `og:title`, `og:description`, `og:locale`
- `twitter:card` (summary), `twitter:title`, `twitter:description`
- OG title blends keyword + the promise: "Home Services Marketing Agency in NC —
  Your Schedule Fills, or You Don't Pay"
- **Intentionally omitted:** `og:image` — no 1200×630 asset exists yet;
  referencing a missing file would 404. Listed as a follow-up in SEO-STRATEGY.md.

---

## 5. Structured data (JSON-LD) — `index.html` (new)

Added a `ProfessionalService` schema block (agency + local-service template
pattern from the claude-seo repo):

- **Identity:** name, alternateName, url, telephone, email, NC address
- **`areaServed`:** Charlotte, Raleigh, Durham, Greensboro, Wilmington (cities,
  not the whole state — matches June 2025 Google SAB guideline)
- **`founder`:** Person → Alex Swafford, Founder & Principal (E-E-A-T signal)
- **`knowsAbout`:** local SEO for contractors, HVAC/plumbing/pool/junk-removal
  marketing, Google Business Profile optimization, pay-per-lead alternative
- **`hasOfferCatalog`:** both public pricing tiers — Performance Build
  ($0 + $195/booked job) and Flat Build ($8,000 one-time)
- **`priceRange`:** "$0 build + $195 per booked job"

**Deliberately NOT added:** `FAQPage` schema — Google retired FAQ rich results
in May 2026 (per claude-seo guidance); adding it now is dead weight.

---

## 6. Copy changes — `src/content.ts`

### Hero subheadline (`hero.sub`)

**Before:** "Open Growth builds performance-priced marketing systems for pool,
HVAC, plumbing and waste operators across North Carolina…"

**After:** "Open Growth is a performance-priced **home services marketing
agency** for HVAC, plumbing, pool and **junk removal** operators across North
Carolina…"

**Why:** Puts the exact primary keyword phrase in the first paragraph of body
content, directly under the H1. Swapped "waste" → "junk removal" (the term
people actually search). The H1 itself stays the conversion promise ("Your
schedule fills, or you don't pay.") — attention/conversion in the headline,
keyword in the supporting line. No hidden text, no keyword-stuffed H1.

### New FAQ item (`faq.items`)

> **Q: Which trades and areas do you serve?**
> A: HVAC, plumbing, pool service, junk removal and waste operators across
> North Carolina — Charlotte, Raleigh, Durham, Greensboro, Wilmington and the
> surrounding metros. One operator per trade per market, so your leads are
> never shared.

**Why:** Adds every trade + city keyword combination to crawlable body content
in one natural answer, and the "one operator per trade per market" line doubles
as an exclusivity conversion argument.

---

## 7. Crawl files — `public/` (new directory)

| File | Contents |
|---|---|
| `public/robots.txt` | Allow all, points to sitemap |
| `public/sitemap.xml` | Single-URL sitemap for the homepage, lastmod 2026-07-21 |

Vite copies `public/*` to the `dist/` root on build — verified present in
`dist/` after a clean build.

---

## 8. Verification

- `npx vite build` passes; `dist/index.html` carries all new meta + schema.
- `robots.txt` and `sitemap.xml` confirmed in `dist/`.
- No visual/layout changes — H1, design, and all conversion copy untouched
  except the two content.ts edits above.

---

## Not done in this pass (see SEO-STRATEGY.md for the roadmap)

1. Per-city/per-trade service-area pages (`/hvac-marketing-charlotte`, …) — the
   single biggest ranking lever found in SERP research.
2. OG image asset (1200×630).
3. Prerender/SSG pass (site is a client-rendered SPA; Google renders JS, but
   prerendering removes the risk).
4. Cost/pricing guide content ("How much does HVAC marketing cost in NC").
5. Google Business Profile setup with city-level service areas and review flow.
