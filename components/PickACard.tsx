"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cardFacts, type CardFact } from "@/data/cardFacts";

function Card({ tag, text, reducedMotion }: { tag: string; text: string; reducedMotion: boolean }) {
  const [open, setOpen] = useState(false);
  const [flash, setFlash] = useState(false);

  function toggle() {
    if (!reducedMotion) {
      setFlash(true);
      window.setTimeout(() => setFlash(false), 240);
    }
    setOpen((o) => !o);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={open}
      aria-label={open ? text : `${tag} — kartı aç`}
      className="relative h-40 w-full cursor-pointer border-0 bg-transparent p-0 text-left outline-none transition-transform duration-200 ease-out [perspective:1000px] hover:scale-[1.02] active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
    >
      <motion.div
        className="relative h-full w-full rounded-lg [transform-style:preserve-3d]"
        animate={{ rotateY: open ? 180 : 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.25, ease: "easeOut" }}
      >
        <div
          aria-hidden={open}
          className="absolute inset-0 flex items-center justify-center rounded-lg bg-bg [backface-visibility:hidden]"
        >
          <span className="font-mono text-sm tracking-widest text-text-muted">{tag}</span>
        </div>
        <div
          aria-hidden={!open}
          className="absolute inset-0 flex items-center justify-center rounded-lg bg-bg p-4 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <p className="text-sm text-text">{text}</p>
        </div>
      </motion.div>
      {flash && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-lg bg-accent-static mix-blend-difference"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 0.24, ease: "easeOut" }}
        />
      )}
    </button>
  );
}

export default function PickACard() {
  const reducedMotion = !!useReducedMotion();

  return (
    <motion.section
      initial={reducedMotion ? undefined : { opacity: 0, y: 12 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-surface text-text w-full"
    >
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="font-display text-3xl font-semibold mb-8">Bir Kart Seç, Gör</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardFacts.map((fact: CardFact) => (
            <Card key={fact.id} tag={fact.tag} text={fact.text} reducedMotion={reducedMotion} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
