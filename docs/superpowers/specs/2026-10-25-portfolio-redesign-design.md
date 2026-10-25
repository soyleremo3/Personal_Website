# Portfolio redesign — design

Date: 2026-10-25 · Owner: Emrullah Söyler · Site: https://emrullahsoylerpersonalwebsite.vercel.app (domain stays)

## Intent

The site last changed on 2026-07-25 and shows 3 projects. Since then the owner has shipped ~25 real
projects (CV/ML mobile app, RL research, Kaggle LLM agent, Unity games, native tools). The site must
introduce him for everything — job/internship applications, programs, collaborations — and position
him first as an **AI / ML / software developer**, while still showing games and robotics.

## Goals

- Professional, recruiter-readable portfolio: who he is in 5 seconds, proof of depth in 30 seconds.
- Featured (owner's order): Basketball APP v2, ARC-AGI-3 agent, Monopoly Champion Agent,
  AI-Machine_Learning, Team Sirius 2026 FRC code. Every other non-empty repo also listed.
- Private repos (Basketball APP v2, APEX GRID, Kahvehane: Midnight Tiles, DailySafe) stay private:
  description + "Private repository" badge, no repo link.
- Per-project case-study pages (`/projects/[slug]`), statically generated.
- Languages: EN / TR / DE (German added).
- Contact section (email, LinkedIn, GitHub, Kaggle) replacing YouTube everywhere.
- Keep the animated background and Pick-a-Card, but calmer and more professional.

## Non-goals / anti-goals

- No paid services, no external APIs at build or run time (owner: "API kullanma, para harcama").
  Project data is hand-written in `data/projects.ts`.
- No live links except Link Launchpad (owner request). No Kalem / Granola live links.
- Do not touch the GitHub profile README or any repo.
- Never overclaim: numbers come from the repos (commit counts, metrics in docs). Basketball live
  detection is still a scripted demo; the site says so. openvoicecs-bench is a fork with no commits
  by the owner — mentioned only as the Exposure AI Academy weekend case study, not as his project.
- No empty/tutorial repos (ARC-AGI-COMP, Growtopia, cikwick, CikWickTutorial, desktop-tutorial,
  SWERVE-navX2-Limelight, TEAMSIRIUS94682026CODE, NBA, Space_Shooter).

## Decided by owner

- Audience: everything, briefly. Focus: AI, software, machine learning.
- Exposure Members app: may be shown — built for a startup, releasing soon.
- Personal details: left to the builder (high-school student, FRC, Türkiye confirmed).
- Hand-written project list; detail pages and section choices left to the builder.

## Builder's calls

- Stack unchanged: Next.js 16 App Router, Tailwind v4, Framer Motion, client-side language context
  (localStorage) extended with `de` and first-visit browser-language detection.
- Home sections: Nav (mobile menu) → Hero (role, availability, stats) → Tech marquee →
  Featured work → All projects (category filter) → Experience timeline → Skills → Pick a Card →
  About → Contact → Footer.
- Contact uses a `mailto:` compose form + copy-email button (no backend).
- Project covers are generated SVG art per category (no screenshots exist).
- SEO: `metadataBase`, per-project metadata, `sitemap.ts`, `robots.ts`, generated OG image,
  `not-found` page.
- Tone: confident, specific, numbers with sources; German written in plain professional German.

## Done when

- `npm run lint` and `npm run build` pass; all project pages prerender.
- Home and a detail page checked in the browser at desktop and phone width, in all 3 languages.
