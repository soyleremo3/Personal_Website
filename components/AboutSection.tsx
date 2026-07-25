"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutSection() {
  const reduce = useReducedMotion();
  const { t } = useLanguage();

  return (
    <motion.section
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      id="about"
      className="bg-surface/25 text-text w-full scroll-mt-20"
    >
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="font-display text-3xl font-semibold mb-4">{t("about.title")}</h2>
        <p className="text-text-muted max-w-2xl">{t("about.bio")}</p>
      </div>
    </motion.section>
  );
}
