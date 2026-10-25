"use client";

import Link from "next/link";
import { Lock } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import ProjectCover from "@/components/ProjectCover";
import SectionHeading from "@/components/SectionHeading";
import { featuredProjects } from "@/data/projects";
import { CONTAINER, SECTION } from "@/components/ui/styles";

export default function FeaturedWork() {
  const { t, l } = useLanguage();

  return (
    <section id="work" aria-labelledby="work-title" className={`${SECTION} py-20 md:py-28`}>
      <div className={CONTAINER}>
        <SectionHeading id="work-title" title={t("featured.title")} intro={t("featured.intro")} />

        <ol className="mt-12 flex flex-col gap-6">
          {featuredProjects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group grid overflow-hidden rounded-2xl border border-line bg-surface/70 outline-none transition-[border-color,background-color] duration-300 hover:border-accent/50 hover:bg-surface focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg md:grid-cols-[1fr_minmax(0,22rem)] lg:grid-cols-[1fr_minmax(0,26rem)]"
              >
                <div className="flex flex-col p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-text-muted">
                    <span className="font-semibold text-accent">{t(`cat.${project.category}` as const)}</span>
                    <span aria-hidden="true" className="h-3 w-px bg-line" />
                    <span>{t(`status.${project.status}` as const)}</span>
                    {project.visibility === "private" && (
                      <>
                        <span aria-hidden="true" className="h-3 w-px bg-line" />
                        <span className="inline-flex items-center gap-1">
                          <Lock className="h-3 w-3" aria-hidden="true" />
                          {t("projects.private")}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="display-wide mt-4 text-2xl text-text sm:text-3xl">{project.name}</h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-text-muted">{l(project.summary)}</p>

                  {project.metrics && (
                    <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
                      {project.metrics.slice(0, 3).map((metric) => (
                        <div key={metric.value} className="border-l-2 border-accent/60 pl-3">
                          <dt className="sr-only">{l(metric.label)}</dt>
                          <dd>
                            <span className="display-tight tabular block text-xl text-text">{metric.value}</span>
                            <span className="mt-0.5 block text-xs leading-snug text-text-muted">{l(metric.label)}</span>
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  <span className="mt-auto pt-7 text-sm font-semibold text-accent">
                    <span className="underline-offset-4 group-hover:underline">{t("featured.readCase")}</span>
                  </span>
                </div>

                <div className="relative hidden items-center border-l border-line bg-bg/40 p-6 md:flex">
                  <ProjectCover
                    motif={project.motif}
                    seed={project.slug}
                    className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
