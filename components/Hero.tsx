"use client";

import { motion, useReducedMotion } from "framer-motion";
import SocialLinks from "@/components/SocialLinks";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <motion.section
      initial={reduce ? undefined : { opacity: 0, y: 12 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-bg text-text w-full"
    >
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="font-display text-4xl font-bold">Emrullah Soyler</h1>
        <p className="text-text-muted mt-3 max-w-md">
          Mostly building games and robots — always trying to make the next one
          better than the last.
        </p>
        <div className="mt-6">
          <SocialLinks />
        </div>
      </div>
    </motion.section>
  );
}
