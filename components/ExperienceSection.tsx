"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/data/profile";
import { CONTAINER, SECTION, TEXT_LINK } from "@/components/ui/styles";

function formatPeriod(period: string, language: string) {
  const month = new Intl.DateTimeFormat(language, { month: "short", year: "numeric" });
  const [start, end] = period.split("—").map((part) => part.trim());
  const fmt = (v: string) => month.format(new Date(`${v}-15T12:00:00`));
  if (end === undefined) return fmt(start);
  return `${fmt(start)} – ${end ? fmt(end) : "…"}`;
}

export default function ExperienceSection() {
  const { language, t, l } = useLanguage();

  return (
    <section id="experience" aria-labelledby="experience-title" className={`${SECTION} py-20 md:py-28`}>
      <div className={`${CONTAINER} grid gap-12 lg:grid-cols-[minmax(0,20rem)_1fr]`}>
        <SectionHeading id="experience-title" title={t("experience.title")} intro={t("experience.intro")} />

        <ol className="relative border-l border-line">
          {experience.map((item) => (
            <li key={`${item.org}-${item.period}`} className="relative pb-10 pl-7 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-bg bg-accent"
              />
              <p className="tabular text-sm text-text-muted">{formatPeriod(item.period, language)}</p>
              <h3 className="display-tight mt-1 text-lg text-text">
                {item.org}
                <span className="font-normal text-text-muted"> · {l(item.role)}</span>
              </h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-text-muted">{l(item.text)}</p>
              {item.slug && (
                <Link href={`/projects/${item.slug}`} className={`${TEXT_LINK} mt-2 inline-block text-sm font-semibold`}>
                  {t("featured.readCase")}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
