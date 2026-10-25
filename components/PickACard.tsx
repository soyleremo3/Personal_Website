"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cardFacts } from "@/data/cardFacts";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useLanguage } from "@/components/LanguageProvider";
import SectionHeading from "@/components/SectionHeading";
import { CONTAINER, SECTION } from "@/components/ui/styles";

function Corner({ rank, flip }: { rank: string; flip?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`display-tight absolute flex flex-col items-center text-sm leading-none text-accent ${
        flip ? "bottom-3 right-3 rotate-180" : "left-3 top-3"
      }`}
    >
      {rank}
      <span className="mt-0.5 text-[10px]">◆</span>
    </span>
  );
}

function Card({
  rank,
  text,
  openCardLabel,
  reducedMotion,
  onFirstOpen,
}: {
  rank: string;
  text: string;
  openCardLabel: string;
  reducedMotion: boolean;
  onFirstOpen: () => void;
}) {
  const [open, setOpen] = useState(false);
  const hasOpenedBefore = useRef(false);

  function toggle() {
    const willOpen = !open;
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
      aria-label={open ? text : `${rank} — ${openCardLabel}`}
      className="relative aspect-[5/7] w-full cursor-pointer rounded-xl bg-transparent p-0 text-left outline-none transition-transform duration-200 ease-out [perspective:1000px] hover:-translate-y-1 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        animate={{ rotateY: open ? 180 : 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Back of the card */}
        <div
          aria-hidden={open}
          className="absolute inset-0 overflow-hidden rounded-xl border border-accent/40 bg-surface [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
        >
          <div
            className="absolute inset-2 rounded-lg border border-accent/25"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(232,163,61,0.10) 0 6px, transparent 6px 12px), repeating-linear-gradient(-45deg, rgba(232,163,61,0.07) 0 6px, transparent 6px 12px)",
            }}
          />
          <span className="display-wide absolute inset-0 grid place-items-center text-2xl text-accent">ES</span>
        </div>
        {/* Face of the card */}
        <div
          aria-hidden={!open}
          className="absolute inset-0 flex items-center rounded-xl border border-line bg-[#f3f1ea] px-5 py-10 text-[#16171a] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <Corner rank={rank} />
          <p className="text-[15px] font-medium leading-snug">{text}</p>
          <Corner rank={rank} flip />
        </div>
      </motion.div>
    </button>
  );
}

export default function PickACard() {
  const reducedMotion = useReducedMotion();
  const { l, t } = useLanguage();
  const [openedCount, setOpenedCount] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const celebratedRef = useRef(false);

  useEffect(() => {
    if (openedCount === cardFacts.length && !celebratedRef.current) {
      celebratedRef.current = true;
      setShowCelebration(true);
      const timeoutId = window.setTimeout(() => setShowCelebration(false), 3000);
      return () => window.clearTimeout(timeoutId);
    }
  }, [openedCount]);

  return (
    <section id="pick-a-card" aria-labelledby="cards-title" className={`${SECTION} py-20 md:py-28`}>
      <div className={CONTAINER}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading id="cards-title" title={t("pickACard.title")} intro={t("pickACard.intro")} />
          <p className="tabular text-sm text-text-muted" aria-live="polite">
            {openedCount}/{cardFacts.length} {t("pickACard.opened")}
          </p>
        </div>
        <AnimatePresence>
          {showCelebration && (
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-6 inline-block rounded-md bg-accent/10 px-4 py-2 text-sm text-accent"
            >
              {t("pickACard.celebration")}
            </motion.p>
          )}
        </AnimatePresence>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
          {cardFacts.map((fact) => (
            <Card
              key={fact.id}
              rank={fact.rank}
              text={l(fact.text)}
              openCardLabel={t("pickACard.openCard")}
              reducedMotion={reducedMotion}
              onFirstOpen={() => setOpenedCount((c) => c + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
