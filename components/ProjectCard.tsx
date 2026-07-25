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
        className="text-accent text-sm inline-flex items-center gap-1 hover:underline"
      >
        Repo
        <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  );
}
