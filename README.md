# Quillwood Wellness Centre

A static marketing site for **Quillwood Wellness Centre** — CPD-accredited,
evidence-informed writing programs for clinicians, individuals and
organisations. Built with **React + TypeScript + Tailwind CSS**, bundled by
**Vite**.

This is an original build: a fresh brand (name, logo mark, and copy) on a
from-scratch React/Tailwind codebase — not a copy of any client's site or
proprietary code.

## Stack

- [Vite](https://vitejs.dev/) — build tool / dev server
- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling, brand
  palette defined in `tailwind.config.ts`

## Project structure

```
src/
  components/       Nav, Hero, AudienceSection (+ Tabs/Cards/Rows variants),
                     Accreditation, Courses, Founder, Testimonials,
                     Insights, CTABand, Footer, Logo, SectionEyebrow
  data/              Content — audiences, courses, testimonials, insights,
                     image URLs. Edit these files to change site copy.
  types.ts           Shared TypeScript interfaces
  App.tsx            Composes the page from the components above
  main.tsx           React entry point
  index.css          Tailwind directives + small global rules
```

## Getting started

```bash
npm install
npm run dev       # starts a local dev server (usually http://localhost:5173)
```

## Building for production

```bash
npm run build      # type-checks with tsc, then builds to dist/
npm run preview    # serves the production build locally to sanity-check it
```

## Editing content

- **Copy / data**: edit the files in `src/data/` — no JSX knowledge needed
  for most text changes (course names, prices, testimonials, blog post
  titles, etc).
- **Colors**: the brand palette (sage / coral / sky / ink / etc.) is defined
  once in `tailwind.config.ts` under `theme.extend.colors`. Change a hex
  value there and it updates everywhere that color is used.
- **Fonts**: currently Playfair Display (serif, headings) + Inter (sans,
  body), loaded from Google Fonts in `index.html`.
- **Images**: `src/data/images.ts` currently points at royalty-free Unsplash
  placeholder photography. Swap these for the client's own photography
  before launch — either point the URLs at hosted images, or drop files into
  `public/` and reference them as `/your-image.jpg`.
- **Audience layout**: `App.tsx` renders `<AudienceSection layout="tabs" />`.
  Change `layout` to `"cards"` or `"rows"` to switch how the three audience
  segments (Clinicians / Individuals / Organisations) are presented.

## Deploying

This builds to a fully static `dist/` folder, so it can be hosted anywhere
that serves static files:

- **GitHub Pages**: run `npm run build`, then deploy the `dist/` folder (for
  example with the `gh-pages` npm package, or GitHub Actions).
- **Netlify / Vercel / Cloudflare Pages**: connect the repo, set the build
  command to `npm run build` and the output directory to `dist`.

## Pushing to GitHub

If you haven't already, from inside this project folder:

```bash
git init
git add .
git commit -m "Initial commit: Quillwood Wellness Centre site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Notes

- The stock photography URLs in `src/data/images.ts` are Unsplash hotlinks
  meant as layout placeholders — replace them with licensed or original
  photography before this goes live commercially.
- All copy (course names, testimonials, blog post titles, the founder bio)
  is placeholder content written for this rebrand and should be reviewed /
  replaced with real content for the business.
