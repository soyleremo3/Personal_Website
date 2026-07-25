"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import SocialLinks from "@/components/SocialLinks";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <motion.section
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
      className="bg-bg text-text w-full"
    >
      <div className="mx-auto max-w-5xl px-6 py-24">
        <motion.h1
          initial={reduce ? false : "hidden"}
          variants={item}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="font-display text-4xl font-bold"
        >
          Emrullah Soyler
        </motion.h1>
        <motion.p
          initial={reduce ? false : "hidden"}
          variants={item}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-text-muted mt-3 max-w-md"
        >
          Mostly building games and robots — always trying to make the next one
          better than the last.
        </motion.p>
        <motion.div
          initial={reduce ? false : "hidden"}
          variants={item}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projeler"
            className="bg-accent text-bg inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold outline-none transition-all duration-200 ease-out hover:opacity-90 active:scale-95 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Projelerimi Gör
          </a>
          <a
            href="https://github.com/soyleremo3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text border-text-muted inline-flex items-center gap-2 rounded-md border bg-transparent px-5 py-2.5 text-sm font-semibold outline-none transition-all duration-200 ease-out hover:border-accent hover:text-accent active:scale-95 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            GitHub
          </a>
        </motion.div>
        <motion.a
          initial={reduce ? false : "hidden"}
          variants={item}
          transition={{ duration: 0.3, ease: "easeOut" }}
          href="https://www.youtube.com/@RealPickAndSee"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted mt-5 inline-flex w-fit items-center gap-1.5 rounded-sm text-xs outline-none transition-colors duration-200 ease-out hover:text-accent hover:underline focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          🎬 YouTube: Pick&amp;See
        </motion.a>
        <div className="mt-6">
          <SocialLinks />
        </div>
      </div>
    </motion.section>
  );
}
