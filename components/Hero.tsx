"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useLanguage } from "@/components/LanguageProvider";
import SocialLinks from "@/components/SocialLinks";

const PARALLAX_FACTOR = 20;

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

const PRIMARY_BTN_CLASS =
  "bg-accent text-bg inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold outline-none transition-[opacity,transform] duration-200 ease-out hover:opacity-90 active:scale-95 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const SECONDARY_BTN_CLASS =
  "text-text border-text-muted inline-flex items-center gap-2 rounded-md border bg-transparent px-5 py-3 text-sm font-semibold outline-none transition-[color,border-color,transform] duration-200 ease-out hover:border-accent hover:text-accent active:scale-95 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const BADGE_CLASS =
  "text-text-muted mt-1.5 py-3.5 -mb-3.5 inline-flex w-fit items-center gap-1.5 rounded-sm text-xs outline-none transition-[color,opacity] duration-200 ease-out hover:text-accent hover:underline active:opacity-70 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const { t } = useLanguage();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion) return;
    const content = contentRef.current;
    if (!content) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      content.style.transform = `translate3d(${-x * PARALLAX_FACTOR}px, ${-y * PARALLAX_FACTOR}px, 0)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      content.style.transform = "";
    };
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <section className="bg-bg/25 text-text w-full">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <h1 className="font-display text-4xl font-bold">Emrullah Soyler</h1>
          <p className="text-text-muted mt-3 max-w-md">{t("hero.tagline")}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className={PRIMARY_BTN_CLASS}>
              {t("hero.viewProjects")}
            </a>
            <a
              href="https://github.com/soyleremo3"
              target="_blank"
              rel="noopener noreferrer"
              className={SECONDARY_BTN_CLASS}
            >
              GitHub
            </a>
          </div>
          <a
            href="https://www.youtube.com/@RealPickAndSee"
            target="_blank"
            rel="noopener noreferrer"
            className={BADGE_CLASS}
          >
            🎬 YouTube: Pick&amp;See
          </a>
          <div className="mt-6">
            <SocialLinks />
          </div>
          <div className="mt-10 flex justify-center">
            <ChevronDown className="h-5 w-5 text-text-muted" aria-hidden="true" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={container}
      className="w-full bg-bg/25 text-text"
    >
      <div
        ref={contentRef}
        className="mx-auto max-w-5xl px-6 py-24 will-change-transform"
      >
        <motion.h1
          variants={item}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="font-display text-4xl font-bold"
        >
          Emrullah Soyler
        </motion.h1>
        <motion.p
          variants={item}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-text-muted mt-3 max-w-md"
        >
          {t("hero.tagline")}
        </motion.p>
        <motion.div
          variants={item}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a href="#projects" className={PRIMARY_BTN_CLASS}>
            {t("hero.viewProjects")}
          </a>
          <a
            href="https://github.com/soyleremo3"
            target="_blank"
            rel="noopener noreferrer"
            className={SECONDARY_BTN_CLASS}
          >
            GitHub
          </a>
        </motion.div>
        <motion.a
          variants={item}
          transition={{ duration: 0.3, ease: "easeOut" }}
          href="https://www.youtube.com/@RealPickAndSee"
          target="_blank"
          rel="noopener noreferrer"
          className={BADGE_CLASS}
        >
          🎬 YouTube: Pick&amp;See
        </motion.a>
        <div className="mt-6">
          <SocialLinks />
        </div>
        <motion.div
          variants={item}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mt-10 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5 text-text-muted" aria-hidden="true" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
