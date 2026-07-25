"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const reduce = useReducedMotion();

  return (
    <motion.footer
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-bg/25 text-text w-full"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-20 text-center">
        <SocialLinks />
        <p className="text-text-muted text-sm">© {new Date().getFullYear()} Emrullah Soyler</p>
      </div>
    </motion.footer>
  );
}
