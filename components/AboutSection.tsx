"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function AboutSection() {
  const reduce = useReducedMotion();

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
        <h2 className="font-display text-3xl font-semibold mb-4">About</h2>
        <p className="text-text-muted max-w-2xl">
          I&apos;m focused on Unity and C#, building games while working toward a
          long-term goal of becoming a software engineer and game developer.
          Before starting anything, I ask myself one question: do people
          actually need this? From there I think about whether it could
          realistically make money, whether it&apos;s actually buildable, and
          whether one person can pull it off alone. I&apos;m also fairly
          research-heavy — even a decision as small as buying a monitor turns
          into reading dozens of reviews and running the price-to-performance
          numbers. I&apos;d rather understand why something is done a certain
          way than just get a quick answer, so I ask a lot of &quot;why this and
          not that&quot; questions. I use AI tools like Claude and ChatGPT as
          teammates that speed me up, not as a replacement for doing the work
          myself. I rarely call anything &quot;done&quot; — there&apos;s almost
          always a better version of it in my head.
        </p>
      </div>
    </motion.section>
  );
}
