# Pizza Venue — Pleasure in Every Bite

A premium, fully responsive restaurant website for **Pizza Venue** (Live Kitchen,
Lahore & beyond), built with **React + Vite + Tailwind CSS**. Fiery red & gold on
black, a spinning 3D pizza hero, ember background, and a full ordering flow with
multi-branch WhatsApp checkout.

## Features

- **Spinning 3D pizza hero** with a conic fire-ring and cursor-reactive tilt
- Live-kitchen **ember/spark background** (cursor parallax, on-theme)
- 12 combo deals (one-tap add to cart)
- Full menu: signature & stuffer pizzas (S/M/L), wings, pasta, burgers, rolls,
  fries, drinks — live search + category filter
- Cart + item customization (add-ons + special instructions + quantity)
- **Multi-branch WhatsApp checkout** — enter name/address/block/street, pick one
  of 5 branches, order opens in WhatsApp (plain-text, name & address on top)
- 3D tilt cards, scroll reveals, back-to-top, fully responsive, dark theme pinned
- All content in `src/data/menu.js`

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy (Railway, Docker)

Connected to GitHub → **New Project → Deploy from GitHub repo → `pizza-venue`**.
Railway auto-detects the `Dockerfile` (Vite build → static serve on `$PORT`).

## Notes

- Images are professional stock placeholders in `public/images/food/` — swap for
  Pizza Venue's own photos anytime (same filenames).
- Only Park View City has a published phone number, so all 5 branches currently
  route to the main WhatsApp line; add per-branch numbers in `src/data/menu.js`.
