"use client";

import { motion, useReducedMotion } from "framer-motion";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  const reduce = useReducedMotion();

  return (
    <motion.footer
      initial={reduce ? undefined : { opacity: 0, y: 12 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-bg text-text w-full"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-20 text-center">
        <SocialLinks />
        <p className="text-text-muted text-sm">© {new Date().getFullYear()} Emrullah Soyler</p>
      </div>
    </motion.footer>
  );
}
