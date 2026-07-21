# Design Two — "Performance" (Linear × growthwebsites.tech)

Second design iteration for the Open Growth Strategies site.

## Sources

- **Brief:** `../../bestprinciples.md` — the 12-principle design brief (quantified hero,
  three proof numbers, published pricing, named system, outcome-titled proof, founder
  module, FAQ, scarcity).
- **Structure & offer influence:** [growthwebsites.tech](https://growthwebsites.tech/) —
  performance promise hero ("…or you don't pay"), numbered sections 01–06, named
  operators with real numbers, two public pricing paths (Performance vs Flat), quarterly
  cohort scarcity, founder-operator story.
- **Visual system:** `awesome-design-md` → `design-md/linear.app/DESIGN.md`
  (VoltAgent/awesome-design-md). Tokens ported into `src/index.css` `@theme`:
  near-black canvas `#010102`, four-step surface ladder, hairline borders, single
  lavender accent `#5e6ad2`, Inter with aggressive negative display tracking,
  8px buttons / 12px cards, no gradients, no pill CTAs.

## Signature moves

- Numbered section openers (mono `01–06` + eyebrow) — growthwebsites skeleton in Linear clothes.
- The **growth dashboard mock** in section 02 — the "product screenshot as protagonist"
  from the Linear spec doubles as the recurring signature visual asset (principle 12).
- All copy lives in `src/content.ts` — swap brand/numbers there.

## Run

```
npm install
npm run dev      # http://localhost:5173
npm run build
```
