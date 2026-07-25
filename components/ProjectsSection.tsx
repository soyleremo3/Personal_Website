"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const reduce = useReducedMotion();

  return (
    <motion.section
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      id="projects"
      className="bg-bg/25 text-text w-full scroll-mt-20"
    >
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="font-display text-3xl font-semibold mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
