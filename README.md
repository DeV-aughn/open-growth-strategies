# Open Growth Strategies — design gallery

Website design explorations for **Open Growth Strategies**, a North Carolina
growth consultancy for high-margin service businesses. Every direction is built
to the 12-principle brief in [`bestprinciples.md`](./bestprinciples.md).

## Run the gallery

A single local host renders every design side by side.

```bash
npm run gallery        # or: node serve.mjs
# then open http://localhost:4321/
```

On Windows you can also double-click **`start-gallery.cmd`**.

## Structure

| Path | Design | Stack |
|------|--------|-------|
| `designs/one/` | Open Growth Strategies — bold editorial | React + Vite + Tailwind + Framer Motion |
| `designs/two/` | Open Growth Strategies — "Performance" (Linear-inspired) | React + Vite + Tailwind + Framer Motion + Three.js |
| `2/` | Foundry — dark engineering studio | Static HTML/CSS |
| `5/` | Open Growth — Vercel cut | Static HTML/CSS/JS |

> `designs/one` and `designs/two` are Vite apps. After editing their source,
> rebuild so the gallery reflects changes:
>
> ```bash
> cd designs/two && npm install && npm run build
> ```
>
> For live development with hot reload: `npm run dev` inside that folder
> (or double-click `designs/two/start-two-dev.cmd`).

## Notes

- `bestprinciples.md` — the competitive teardown and 12-principle design brief.
- `serve.mjs` — a tiny zero-dependency static server for the whole folder.
- `node_modules/` and build caches are git-ignored; `dist/` builds are committed
  so the gallery runs immediately after cloning.
