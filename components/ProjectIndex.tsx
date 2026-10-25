"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageProvider";
import SectionHeading from "@/components/SectionHeading";
import { orderedProjects, type Category } from "@/data/projects";
import { CONTAINER, FOCUS_RING, SECTION } from "@/components/ui/styles";

const CATEGORIES: Category[] = ["ai", "mobile", "web", "games", "tools", "robotics"];

function formatMonth(value: string, language: string) {
  return new Intl.DateTimeFormat(language, { month: "short", year: "numeric" }).format(
    new Date(`${value}-15T12:00:00`),
  );
}

export default function ProjectIndex() {
  const { language, t, l } = useLanguage();
  const [filter, setFilter] = useState<Category | "all">("all");

  const visible = filter === "all" ? orderedProjects : orderedProjects.filter((p) => p.category === filter);
  const counts = Object.fromEntries(
    CATEGORIES.map((c) => [c, orderedProjects.filter((p) => p.category === c).length]),
  ) as Record<Category, number>;

  const chip = (active: boolean) =>
    cn(
      "inline-flex min-h-9 items-center gap-1.5 rounded-full border px-3.5 text-sm transition-colors duration-200",
      FOCUS_RING,
      active
        ? "border-accent bg-accent text-bg"
        : "border-line bg-surface/60 text-text-muted hover:border-text-muted hover:text-text",
    );

  return (
    <section id="projects" aria-labelledby="projects-title" className={`${SECTION} py-20 md:py-28`}>
      <div className={CONTAINER}>
        <SectionHeading id="projects-title" title={t("projects.title")} intro={t("projects.intro")} />

        <div role="group" aria-label={t("projects.filterLabel")} className="mt-10 flex flex-wrap gap-2">
          <button type="button" aria-pressed={filter === "all"} onClick={() => setFilter("all")} className={chip(filter === "all")}>
            {t("projects.all")}
            <span className="tabular text-xs opacity-70">{orderedProjects.length}</span>
          </button>
          {CATEGORIES.map((c) => (
            <button key={c} type="button" aria-pressed={filter === c} onClick={() => setFilter(c)} className={chip(filter === c)}>
              {t(`cat.${c}` as const)}
              <span className="tabular text-xs opacity-70">{counts[c]}</span>
            </button>
          ))}
        </div>

        <p className="sr-only" aria-live="polite">
          {visible.length} {t("projects.showing")}
        </p>

        <ul className="mt-8 border-t border-line">
          {visible.map((project) => (
            <li key={project.slug} className="border-b border-line">
              <Link
                href={`/projects/${project.slug}`}
                className="group grid gap-x-6 gap-y-2 rounded-sm px-1 py-5 outline-none transition-colors duration-200 hover:bg-surface/50 focus-visible:bg-surface focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent sm:px-3 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)_8rem] md:items-baseline"
              >
                <div className="flex items-center gap-2">
                  <h3 className="display-tight text-lg text-text group-hover:text-accent">{project.name}</h3>
                  {project.featured && (
                    <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[11px] font-semibold text-accent">
                      {t("projects.featured")}
                    </span>
                  )}
                </div>
                <div>
                  <p className="leading-relaxed text-text-muted">{l(project.summary)}</p>
                  <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text-muted/80">
                    <span className="text-text-muted">{t(`cat.${project.category}` as const)}</span>
                    <span>{project.stack.slice(0, 4).join(", ")}</span>
                    {project.visibility === "private" && (
                      <span className="inline-flex items-center gap-1 text-text-muted">
                        <Lock className="h-3 w-3" aria-hidden="true" />
                        {t("projects.private")}
                      </span>
                    )}
                    {project.liveUrl && (
                      <span className="inline-flex items-center gap-1 text-signal">
                        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal" />
                        {t("projects.live")}
                      </span>
                    )}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-2 text-sm text-text-muted md:justify-end">
                  <time dateTime={project.updated} className="tabular">
                    {formatMonth(project.updated, language)}
                  </time>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
