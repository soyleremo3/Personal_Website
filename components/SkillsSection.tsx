"use client";

import { useLanguage } from "@/components/LanguageProvider";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/data/profile";
import { CONTAINER, SECTION } from "@/components/ui/styles";

export default function SkillsSection() {
  const { t, l } = useLanguage();

  return (
    <section id="skills" aria-labelledby="skills-title" className={`${SECTION} py-20 md:py-28`}>
      <div className={CONTAINER}>
        <SectionHeading id="skills-title" title={t("skills.title")} intro={t("skills.intro")} />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title.en} className="bg-surface p-6">
              <h3 className="display-tight text-base text-accent">{l(group.title)}</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-text/90">
                {group.items.map((item) => (
                  <li key={item} className="leading-snug">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
