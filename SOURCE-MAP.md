# Source map — PORTFOLIO.pdf

This website is built from the supplied 53-page `PORTFOLIO.pdf`.

| Website area | PDF pages |
|---|---:|
| Cover | 1 |
| Profile + photograph | 2 |
| Education / skills / experience | 3 |
| Contents | 4–5 |
| 01 — Pub Interiors | 6–13 |
| 02 — Working Drawings | 14–21 |
| 03 — NIFT Campus | 22–33 |
| 04 — Internship Works | 34–45 |
| Miscellaneous plans | 46–50 |
| Personal travel photographs | 51–52 |
| Architectural models | 53 |

## Image handling

- `public/assets/profile/anusri-profile.jpg` is the original profile photograph extracted from page 2.
- `public/assets/profile/anusri-portrait.jpg` is a closer crop of that same original photograph for the About section.
- `public/assets/key/` contains selected original raster images extracted from the PDF for prominent project visuals.
- `public/assets/pages/` contains optimized WebP renders of all 53 original PDF pages. These preserve vector drawings, annotations, layouts and mixed-media boards that cannot always be represented as standalone raster images.
- `public/assets/portfolio-source.pdf` is the original supplied PDF and is exposed as the site's downloadable portfolio.

## Accuracy notes

The content in `src/data/portfolio.ts` follows the source portfolio. No employers, clients, awards, testimonials, statistics or other achievements were invented.

The source itself contains overlapping work-experience dates; these are preserved rather than silently reconciled.
