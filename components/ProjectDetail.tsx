"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Lock } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import ProjectCover from "@/components/ProjectCover";
import { getProject, orderedProjects, repoUrl } from "@/data/projects";
import { BUTTON_PRIMARY, BUTTON_SECONDARY, CONTAINER, FOCUS_RING } from "@/components/ui/styles";

// Below this, the commit count says more about how the code was uploaded than about the work.
const MIN_COMMITS_TO_SHOW = 10;

function formatMonth(value: string, language: string) {
  return new Intl.DateTimeFormat(language, { month: "short", year: "numeric" }).format(
    new Date(`${value}-15T12:00:00`),
  );
}

export default function ProjectDetail({ slug }: { slug: string }) {
  const { language, t, l } = useLanguage();
  const project = getProject(slug)!;
  const index = orderedProjects.findIndex((p) => p.slug === slug);
  const prev = orderedProjects[(index - 1 + orderedProjects.length) % orderedProjects.length];
  const next = orderedProjects[(index + 1) % orderedProjects.length];

  const period =
    project.started === project.updated
      ? formatMonth(project.started, language)
      : `${formatMonth(project.started, language)} – ${formatMonth(project.updated, language)}`;

  const facts = [
    { label: t("detail.category"), value: t(`cat.${project.category}` as const) },
    { label: t("detail.status"), value: t(`status.${project.status}` as const) },
    { label: t("detail.period"), value: period },
    ...(project.commits >= MIN_COMMITS_TO_SHOW
      ? [{ label: t("detail.commits"), value: project.commits.toLocaleString(language) }]
      : []),
  ];

  return (
    <article className="w-full">
      <div className={`${CONTAINER} pt-10 md:pt-14`}>
        <Link
          href="/#projects"
          className={`inline-flex items-center gap-2 rounded-sm text-sm text-text-muted transition-colors hover:text-text ${FOCUS_RING}`}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {t("detail.back")}
        </Link>
      </div>

      <header className={`${CONTAINER} grid gap-10 pb-12 pt-8 lg:grid-cols-[1.2fr_1fr] lg:items-center`}>
        <div>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className="font-semibold text-accent">{t(`cat.${project.category}` as const)}</span>
            {project.visibility === "private" && (
              <span className="inline-flex items-center gap-1 text-text-muted">
                <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                {t("projects.private")}
              </span>
            )}
          </p>
          <h1 className="display-wide mt-4 text-[clamp(2.2rem,6vw,4rem)] leading-[1] text-text">{project.name}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-text-muted">{l(project.summary)}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={BUTTON_PRIMARY}>
                {t("detail.live")}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
            {project.visibility === "public" && (
              <a
                href={repoUrl(project)}
                target="_blank"
                rel="noopener noreferrer"
                className={project.liveUrl ? BUTTON_SECONDARY : BUTTON_PRIMARY}
              >
                {t("detail.repo")}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-surface/70 p-6 sm:p-8">
          <ProjectCover motif={project.motif} seed={project.slug} />
        </div>
      </header>

      <div className={`${CONTAINER} border-t border-line`}>
        <dl className="grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs text-text-muted">{fact.label}</dt>
              <dd className="tabular mt-1 text-text">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {project.metrics && (
        <div className={`${CONTAINER} pb-4`}>
          <dl className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {project.metrics.map((metric) => (
              <div key={metric.value} className="bg-surface p-6">
                <dt className="sr-only">{l(metric.label)}</dt>
                <dd>
                  <span className="display-wide tabular block text-3xl text-text">{metric.value}</span>
                  <span className="mt-1 block text-sm leading-snug text-text-muted">{l(metric.label)}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      <div className={`${CONTAINER} grid gap-12 py-14 lg:grid-cols-[1fr_minmax(0,20rem)]`}>
        <div className="max-w-2xl">
          <section aria-labelledby="overview-title">
            <h2 id="overview-title" className="display-tight text-2xl text-text">
              {t("detail.overview")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text/90">{l(project.overview)}</p>
          </section>

          <section aria-labelledby="highlights-title" className="mt-12">
            <h2 id="highlights-title" className="display-tight text-2xl text-text">
              {t("detail.highlights")}
            </h2>
            <ul className="mt-5 space-y-4">
              {project.highlights.map((item) => (
                <li key={item.en} className="flex gap-4 leading-relaxed text-text-muted">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{l(item)}</span>
                </li>
              ))}
            </ul>
          </section>

          {project.note && (
            <section
              aria-labelledby="honest-title"
              className="mt-12 rounded-xl border border-signal/30 bg-signal/5 p-5"
            >
              <h2 id="honest-title" className="text-sm font-semibold text-signal">
                {t("detail.honest")}
              </h2>
              <p className="mt-2 leading-relaxed text-text/90">{l(project.note)}</p>
            </section>
          )}
        </div>

        <aside className="space-y-6 self-start">
          <section aria-labelledby="stack-title" className="rounded-2xl border border-line bg-surface/70 p-6">
            <h2 id="stack-title" className="text-sm font-semibold text-text">
              {t("detail.stack")}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <li key={item} className="rounded-full border border-line bg-bg/60 px-3 py-1 text-xs text-text/90">
                  {item}
                </li>
              ))}
            </ul>
          </section>
          {project.visibility === "private" && (
            <section aria-labelledby="private-title" className="rounded-2xl border border-line bg-surface/70 p-6">
              <h2 id="private-title" className="flex items-center gap-2 text-sm font-semibold text-text">
                <Lock className="h-4 w-4 text-text-muted" aria-hidden="true" />
                {t("detail.privateTitle")}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{t("detail.privateNote")}</p>
              <Link href="/#contact" className={`${BUTTON_SECONDARY} mt-4`}>
                {t("hero.ctaContact")}
              </Link>
            </section>
          )}
        </aside>
      </div>

      <nav aria-label={t("nav.projects")} className={`${CONTAINER} grid gap-4 border-t border-line py-10 sm:grid-cols-2`}>
        <Link
          href={`/projects/${prev.slug}`}
          className={`group rounded-xl border border-line p-5 transition-colors hover:border-accent/50 ${FOCUS_RING}`}
        >
          <span className="flex items-center gap-2 text-xs text-text-muted">
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            {t("detail.prev")}
          </span>
          <span className="display-tight mt-2 block text-lg text-text group-hover:text-accent">{prev.name}</span>
        </Link>
        <Link
          href={`/projects/${next.slug}`}
          className={`group rounded-xl border border-line p-5 text-right transition-colors hover:border-accent/50 ${FOCUS_RING}`}
        >
          <span className="flex items-center justify-end gap-2 text-xs text-text-muted">
            {t("detail.next")}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span className="display-tight mt-2 block text-lg text-text group-hover:text-accent">{next.name}</span>
        </Link>
      </nav>
    </article>
  );
}
