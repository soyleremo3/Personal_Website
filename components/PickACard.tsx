"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cardFacts, type CardFact } from "@/data/cardFacts";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function Card({
  tag,
  text,
  reducedMotion,
  onFirstOpen,
}: {
  tag: string;
  text: string;
  reducedMotion: boolean;
  onFirstOpen: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [flash, setFlash] = useState(false);
  const [rareGlitch, setRareGlitch] = useState(false);
  const hasOpenedBefore = useRef(false);

  function toggle() {
    const willOpen = !open;

    if (!reducedMotion) {
      setFlash(true);
      window.setTimeout(() => setFlash(false), 240);

      if (Math.random() < 0.2) {
        setRareGlitch(true);
        window.setTimeout(() => setRareGlitch(false), 200);
      }
    }

    if (willOpen && !hasOpenedBefore.current) {
      hasOpenedBefore.current = true;
      navigator.vibrate?.(10);
      onFirstOpen();
    }

    setOpen(willOpen);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={open}
      aria-label={open ? text : `${tag} — kartı aç`}
      className="relative h-40 w-full min-h-[44px] min-w-[44px] cursor-pointer rounded-lg border-0 bg-transparent p-0 text-left outline-none transition-transform duration-200 ease-out [perspective:1000px] hover:scale-[1.02] active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
    >
      <GlowingEffect glow={false} disabled={false} proximity={48} spread={25} />
      <motion.div
        className="relative h-full w-full rounded-lg [transform-style:preserve-3d]"
        animate={{ rotateY: open ? 180 : 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.25, ease: "easeOut" }}
      >
        <div
          aria-hidden={open}
          className="absolute inset-0 flex items-center justify-center rounded-lg bg-bg [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
        >
          <span className="font-mono text-sm tracking-widest text-text-muted">{tag}</span>
        </div>
        <div
          aria-hidden={!open}
          className="absolute inset-0 flex items-center justify-center rounded-lg bg-bg p-4 text-center [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)]"
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
      {rareGlitch && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-lg bg-accent-static mix-blend-difference"
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: [0, 0.6, 0, 0.4, 0], x: [0, -3, 3, -2, 0] }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      )}
    </button>
  );
}

export default function PickACard() {
  const reducedMotion = useReducedMotion();
  const [openedCount, setOpenedCount] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const celebratedRef = useRef(false);

  useEffect(() => {
    if (openedCount === cardFacts.length && !celebratedRef.current) {
      celebratedRef.current = true;
      setShowCelebration(true);
      const t = window.setTimeout(() => setShowCelebration(false), 3000);
      return () => window.clearTimeout(t);
    }
  }, [openedCount]);

  return (
    <motion.section
      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-surface text-text w-full"
    >
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-3xl font-semibold">Bir Kart Seç, Gör</h2>
          <span className="font-mono text-xs text-text-muted">
            {openedCount}/{cardFacts.length} açıldı
          </span>
        </div>
        <AnimatePresence>
          {showCelebration && (
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: reducedMotion ? 0 : 0.3, ease: "easeOut" }}
              className="mb-6 rounded-lg bg-accent/10 px-4 py-3 text-sm text-accent"
            >
              Hepsini buldun! ✨
            </motion.div>
          )}
        </AnimatePresence>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardFacts.map((fact: CardFact) => (
            <Card
              key={fact.id}
              tag={fact.tag}
              text={fact.text}
              reducedMotion={reducedMotion}
              onFirstOpen={() => setOpenedCount((c) => c + 1)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
