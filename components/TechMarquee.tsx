"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

const TECHS = [
  "Unity",
  "C#",
  "React",
  "Next.js",
  "TypeScript",
  "Framer Motion",
  "FRC Robotics",
  "Tailwind CSS",
];

function TechItem({ tech }: { tech: string }) {
  return (
    <span className="whitespace-nowrap">
      {tech}
      <span className="text-accent/40 ml-8" aria-hidden="true">
        ·
      </span>
    </span>
  );
}

export default function TechMarquee() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className="bg-surface/25 py-3">
        <ul className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-3 gap-y-2 px-6 font-mono text-xs text-text-muted">
          {TECHS.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div
      className="bg-surface/25 overflow-hidden py-3"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="animate-[marquee_28s_linear_infinite] flex w-max font-mono text-xs text-text-muted">
        <div className="flex gap-8 pr-8">
          {TECHS.map((tech) => (
            <TechItem key={tech} tech={tech} />
          ))}
        </div>
        <div className="flex gap-8 pr-8" aria-hidden="true">
          {TECHS.map((tech) => (
            <TechItem key={tech} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
