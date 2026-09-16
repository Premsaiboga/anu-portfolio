# Pasikanti Anusri — Architectural Portfolio

Production-ready React + TypeScript + Vite portfolio built from the supplied `PORTFOLIO.pdf`.

## Source fidelity

All portfolio content and visual assets are derived from the supplied 53-page portfolio. The site uses the original profile photograph, project renderings, technical drawing boards, travel photographs and architectural model imagery extracted from the PDF.

The following source sections are represented:

- Profile / introduction
- Education, software skills, other skills, languages and interests
- Work experience
- 01 — Pub Interiors
- 02 — Working Drawings
- 03 — NIFT Campus
- 04 — Internship Works
- Miscellaneous plans, travel photographs and architectural models

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy

The generated `dist/` folder can be deployed to Vercel, Netlify, GitHub Pages (with SPA configuration), Cloudflare Pages or any static hosting provider.

## Important content note

No claims, employers, awards, clients or statistics were added beyond the source portfolio. The original PDF is included as `public/assets/portfolio-source.pdf` and is available from the Resume / Portfolio button.

## Edit contact details

Source details are centralized in `src/data/portfolio.ts` so they can be changed without touching the UI components.
