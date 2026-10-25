"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { techMarquee } from "@/data/profile";

function TechItem({ tech }: { tech: string }) {
  return (
    <span className="whitespace-nowrap">
      {tech}
      <span className="ml-8 text-accent/50" aria-hidden="true">
        /
      </span>
    </span>
  );
}

export default function TechMarquee() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className="border-y border-line bg-surface/40 py-3">
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-6 text-sm text-text-muted">
          {techMarquee.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div
      className="overflow-hidden border-y border-line bg-surface/40 py-3.5"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <p className="sr-only">{techMarquee.join(", ")}</p>
      <div className="flex w-max animate-[marquee_60s_linear_infinite] text-sm text-text-muted" aria-hidden="true">
        {Array.from({ length: 6 }, (_, copy) => (
          <div key={copy} className="flex gap-8 pr-8">
            {techMarquee.map((tech) => (
              <TechItem key={tech} tech={tech} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
