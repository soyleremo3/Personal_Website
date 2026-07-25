"use client";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageProvider";
import type { DictionaryKey, Language } from "@/lib/dictionary";

const NAV_LINK_CLASS =
  "inline-block rounded-sm py-3.5 -my-3.5 outline-none transition-colors duration-200 ease-out hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const links: { href: string; key: DictionaryKey }[] = [
  { href: "#pick-a-card", key: "nav.pickACard" },
  { href: "#projects", key: "nav.projects" },
  { href: "#about", key: "nav.about" },
];

const LANGUAGES: Language[] = ["en", "tr"];

function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t("nav.languageLabel")}
      className="flex items-center gap-0.5 rounded-full border border-white/10 bg-surface/40 p-0.5 font-mono text-xs"
    >
      {LANGUAGES.map((lng) => (
        <button
          key={lng}
          type="button"
          onClick={() => setLanguage(lng)}
          aria-pressed={language === lng}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase tracking-wide outline-none transition-colors duration-200 ease-out focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
            language === lng
              ? "bg-accent text-bg"
              : "text-text-muted hover:text-accent",
          )}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function SiteNav() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-bg/60 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-center gap-4 px-4 py-3 sm:justify-between sm:gap-6 sm:px-6 sm:py-4">
        <span className="font-display hidden text-sm font-semibold text-text sm:inline">
          Emrullah Soyler
        </span>
        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="flex items-center gap-4 text-xs text-text-muted sm:gap-6 sm:text-sm">
            {links.map(({ href, key }) => (
              <li key={href}>
                <a href={href} className={NAV_LINK_CLASS}>
                  {t(key)}
                </a>
              </li>
            ))}
          </ul>
          <LanguageToggle />
        </div>
      </nav>
    </header>
  );
}
