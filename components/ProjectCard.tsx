import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-surface text-text rounded-lg p-6 flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-display text-lg font-semibold break-words">{project.name}</h3>
        <span className="font-mono text-xs text-accent shrink-0">{project.language}</span>
      </div>
      <p className="text-text-muted text-sm flex-1">{project.description}</p>
      <a
        href={project.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent text-sm inline-flex items-center gap-1 rounded-sm outline-none transition-opacity duration-200 ease-out hover:underline hover:opacity-80 active:opacity-60 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
      >
        Repo
        <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  );
}
