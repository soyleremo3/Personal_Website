"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function AboutSection() {
  const reduce = useReducedMotion();

  return (
    <motion.section
      initial={reduce ? undefined : { opacity: 0, y: 12 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-surface text-text w-full"
    >
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="font-display text-3xl font-semibold mb-4">Hakkımda</h2>
        <p className="text-text-muted max-w-2xl">
          Unity ve C# ile oyun geliştiriyorum, FRC robotik takımımda swerve-drive
          kodunu yazdım. Bir şey kodlamadan önce sorduğum ilk soru: insanların
          buna gerçekten ihtiyacı var mı? Uzun vadeli hedefim software engineer
          olarak çalışmak, bunun yanında oyun geliştirmeyi de sürdürmek.
        </p>
      </div>
    </motion.section>
  );
}
