"use client";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import type { Project } from "@/data/projects";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProjectCard({ project }: { project: Project }) {
  const { language, t } = useLanguage();

  return (
    <div className="relative bg-surface text-text rounded-lg p-6 flex flex-col gap-3">
      <GlowingEffect glow={false} disabled={false} proximity={48} spread={25} />
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-display text-lg font-semibold break-words">{project.name}</h3>
        <span className="font-mono text-xs text-accent shrink-0">{project.language}</span>
      </div>
      <p className="text-text-muted text-base flex-1">{project.description[language]}</p>
      <a
        href={project.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent text-sm inline-flex items-center gap-1 rounded-sm py-3.5 -my-3.5 outline-none transition-opacity duration-200 ease-out hover:underline hover:opacity-80 active:opacity-60 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
      >
        {t("projectCard.repo")}
        <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  );
}
