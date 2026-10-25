"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { orderedProjects, totalCommits } from "@/data/projects";
import { CONTAINER, SECTION } from "@/components/ui/styles";

export default function AboutSection() {
  const { language, t } = useLanguage();
  const commits = (Math.floor(totalCommits / 100) * 100).toLocaleString(language);

  const facts = [
    { label: t("about.based"), value: t("about.basedValue") },
    { label: t("about.education"), value: t("about.educationValue") },
    { label: t("about.languages"), value: t("about.languagesValue") },
    {
      label: t("about.numbers"),
      value: t("about.numbersValue", { projects: orderedProjects.length, commits }),
    },
  ];

  return (
    <section id="about" aria-labelledby="about-title" className={`${SECTION} py-20 md:py-28`}>
      <div className={`${CONTAINER} grid gap-12 lg:grid-cols-[1fr_minmax(0,22rem)]`}>
        <div className="max-w-2xl">
          <h2 id="about-title" className="display-wide text-3xl text-text sm:text-4xl">
            {t("about.title")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text">{t("about.bio1")}</p>
          <p className="mt-5 leading-relaxed text-text-muted">{t("about.bio2")}</p>
        </div>

        <dl className="self-start rounded-2xl border border-line bg-surface/70">
          {facts.map((fact) => (
            <div key={fact.label} className="border-b border-line px-6 py-4 last:border-0">
              <dt className="text-xs text-text-muted">{fact.label}</dt>
              <dd className="mt-1 text-sm text-text">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
