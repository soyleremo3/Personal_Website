# Emrullah Söyler — Personal Website

Portfolio of an AI & software developer: featured case studies, a filterable index of every
project, experience, skills, a "Pick a card" section and a contact form. English, Turkish and German.

Live: https://emrullahsoylerpersonalwebsite.vercel.app

## Stack

- **Framework:** Next.js 16 (App Router) + TypeScript, statically generated
- **Styling:** Tailwind CSS v4, Archivo (variable width) + JetBrains Mono
- **Animation:** CSS, Framer Motion (card flips), a custom canvas background
- **Icons:** lucide-react

No external APIs or paid services: all content is hand-written in `data/`.

## Getting started

```bash
npm install
npm run dev
```

```bash
npm run build   # production build (prerenders every project page)
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

```
/app                    layout, home page, /projects/[slug], sitemap, robots, OG image, 404
/components             page sections, project cover art, language provider
/data/projects.ts       every project: copy in EN/TR/DE, stack, metrics, status
/data/profile.ts        contact, lab log, experience, skills
/data/cardFacts.ts      "Pick a card" facts
/lib/dictionary.ts      UI strings in EN/TR/DE
```

### Adding a project

Add an entry to `projects` in `data/projects.ts` (all three languages). It appears in the project
index and gets its own page at `/projects/<slug>` automatically. To feature it, set `featured: true`
and add its slug to `FEATURED_ORDER`.

## Deploy

Deployed on [Vercel](https://vercel.com).
