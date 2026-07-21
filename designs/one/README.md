# Open Growth Strategies — website

A bold-editorial marketing site built to the 12 principles in `bestprinciples.md`.

## Run it

```bash
npm install      # first time only
npm run dev      # → http://localhost:5173
npm run build    # production build into /dist
```

## Where to edit

- **All copy, pricing, proof numbers, testimonials, FAQs** → `src/content.ts`
  (change the brand name once here and it updates everywhere).
- **Colors / fonts / buttons** → `src/index.css` (the `@theme` block at the top).
- **Sections** → `src/components/` (one file per section).
- **Founder headshot** → replace `public/alex-placeholder.svg` with a real photo
  and update the `src="..."` in `src/components/Founder.tsx`.

## Principle → section map

| Principle | Where it lives |
|---|---|
| 1 · Quantified transformation hero | `Hero.tsx` |
| 2 · Three proof numbers above the fold | `Hero.tsx` (`proof` in content) |
| 3 · Publish pricing | `Pricing.tsx` |
| 4 · 2–3 named tiers | `Pricing.tsx` (`tiers`) |
| 6 · Named proprietary system | `System.tsx` — "The Full-Book System" |
| 7 · Outcome-titled case studies | `CaseStudies.tsx` (`cases`) |
| 8 · Testimonials as proof | `Testimonials.tsx` |
| 9 · Reframe the buyer's assumption | `Hero.tsx` + `Reframe.tsx` |
| 10 · Real human by name + pledge | `Founder.tsx` |
| 11 · Signature guide / book | `Playbook.tsx` |
| 12 · Recurring signature visual | `GrowthMap.tsx` (the growth-map) |

## Still to wire up
- Calendar embed (Calendly / SavvyCal) in `FinalCTA.tsx`.
- Playbook email form → your email tool (currently front-end only).
- Real headshot, real case-study numbers, real testimonials.
