# Emrullah Soyler — Personal Website

Single-page personal portfolio built with Next.js (App Router), TypeScript,
Tailwind CSS, and Framer Motion. Features a mouse-reactive animated
background mesh, a signature "Pick a Card, See" interactive section, and a
short showcase of Unity/FRC robotics projects.

See [plan.md](plan.md) for the original design brief.

## Stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion + a custom canvas background
- **Icons:** Heroicons, lucide-react

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

```
/app         layout, page, global styles
/components  page sections + shadcn-style UI primitives (components/ui)
/data        static content (projects, card facts)
/hooks       shared hooks (e.g. prefers-reduced-motion)
/lib         shared utilities
```

## Deploy

Deployed on [Vercel](https://vercel.com).
