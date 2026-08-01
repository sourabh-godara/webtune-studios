# WebTune Studios

Marketing site for WebTune Studios — a web development, business automation,
and AI solutions agency. Built with Next.js (App Router), Tailwind CSS v4,
and shadcn/ui, in a light "control panel" theme.

## Design direction

- **Palette** — paper white (`#faf9f6`) background, near-black ink text, and
  a single signal orange (`#ff5a1f`) accent used sparingly for state and
  calls to action.
- **Type** — Bricolage Grotesque (display), Manrope (body), IBM Plex Mono
  (labels, eyebrows, data — a nod to the studio's technical/dev identity).
- **Signature element** — an animated automation-pipeline diagram (in the
  hero and in "How We Work") that visualizes the actual product: leads
  flowing through a workflow, node by node.

All design tokens live in `app/globals.css` under `:root` / `@theme inline`,
so colors, fonts, and spacing can be re-tuned from one place.

## Getting started

Requires Node.js 18.18+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx           Root layout, fonts, metadata
  page.tsx             Home page composition
  globals.css          Design tokens + global styles
components/
  ui/                   shadcn/ui primitives (button, badge, card)
  sections/             Page sections (navbar, hero, services, footer, ...)
  pipeline-diagram.tsx  Signature automation-flow visualization
lib/
  utils.ts              cn() class helper
```

## Editing content

- **Business details** (email, phone, address) — `components/sections/footer.tsx`
  and `components/sections/cta.tsx`.
- **Services** — `components/sections/services.tsx`.
- **Process steps** — `components/sections/how-we-work.tsx`.
- **Stats** — `components/sections/stats.tsx`.
- **Nav links** — `components/sections/navbar.tsx`.

## Adding more shadcn/ui components

This project follows the standard shadcn/ui conventions (`components.json`
is set up), so you can add further components normally:

```bash
npx shadcn@latest add dialog
```
