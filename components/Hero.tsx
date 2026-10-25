"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { labLog } from "@/data/profile";
import { BUTTON_PRIMARY, BUTTON_SECONDARY } from "@/components/ui/styles";

function formatLogDate(date: string, language: string) {
  return new Intl.DateTimeFormat(language, { day: "numeric", month: "short", year: "numeric" }).format(
    new Date(`${date}T12:00:00`),
  );
}

export default function Hero() {
  const { language, t, l } = useLanguage();

  return (
    <section aria-labelledby="hero-title" className="w-full bg-bg/25">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-16 sm:px-6 md:pt-24 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-16">
        <div>
          <p className="rise flex items-center gap-2.5 text-sm text-text-muted">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-signal motion-safe:animate-[pulse-dot_2.4s_ease-in-out_infinite]"
            />
            {t("hero.available")}
          </p>

          <h1
            style={{ animationDelay: "0.05s" }}
            id="hero-title"
            className="rise display-wide mt-6 text-[clamp(2.6rem,8vw,5.5rem)] leading-[0.95] text-text"
          >
            Emrullah
            <br />
            Söyler
          </h1>

          <p style={{ animationDelay: "0.12s" }} className="rise display-tight mt-6 text-xl text-accent sm:text-2xl">
            {t("hero.role")}
          </p>

          <p style={{ animationDelay: "0.18s" }} className="rise mt-4 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
            {t("hero.statement")}
          </p>

          <div style={{ animationDelay: "0.24s" }} className="rise mt-9 flex flex-wrap items-center gap-3">
            <Link href="/#work" className={BUTTON_PRIMARY}>
              {t("hero.ctaWork")}
            </Link>
            <Link href="/#contact" className={BUTTON_SECONDARY}>
              {t("hero.ctaContact")}
            </Link>
          </div>
        </div>

        <aside
          style={{ animationDelay: "0.3s" }}
          aria-labelledby="lab-log-title"
          className="rise rounded-xl border border-line bg-surface/80 backdrop-blur-sm"
        >
          <div className="flex items-baseline justify-between gap-4 border-b border-line px-5 py-4">
            <h2 id="lab-log-title" className="display-tight text-base text-text">
              {t("hero.logTitle")}
            </h2>
            <p className="text-xs text-text-muted">{t("hero.logNote")}</p>
          </div>
          <ol className="divide-y divide-line">
            {labLog.map((entry) => (
              <li key={`${entry.date}-${entry.slug}`}>
                <Link
                  href={`/projects/${entry.slug}`}
                  className="group block px-5 py-3.5 outline-none transition-colors duration-200 hover:bg-raised/60 focus-visible:bg-raised focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
                >
                  <div className="flex items-baseline justify-between gap-3 text-xs">
                    <span className="font-semibold text-accent">{entry.project}</span>
                    <time dateTime={entry.date} className="tabular shrink-0 font-mono text-text-muted">
                      {formatLogDate(entry.date, language)}
                    </time>
                  </div>
                  <p className="mt-1 text-sm leading-snug text-text/90 group-hover:text-text">{l(entry.text)}</p>
                </Link>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}
