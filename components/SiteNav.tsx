"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageProvider";
import { LANGUAGES, type DictionaryKey } from "@/lib/dictionary";
import { FOCUS_RING } from "@/components/ui/styles";

const links: { href: string; key: DictionaryKey }[] = [
  { href: "/#work", key: "nav.work" },
  { href: "/#projects", key: "nav.projects" },
  { href: "/#experience", key: "nav.experience" },
  { href: "/#about", key: "nav.about" },
  { href: "/#contact", key: "nav.contact" },
];

function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t("nav.languageLabel")}
      className="flex items-center gap-0.5 rounded-full border border-line bg-surface/60 p-0.5 text-xs font-semibold"
    >
      {LANGUAGES.map((lng) => (
        <button
          key={lng}
          type="button"
          onClick={() => setLanguage(lng)}
          aria-pressed={language === lng}
          lang={lng}
          className={cn(
            "min-h-8 min-w-9 rounded-full px-2.5 uppercase transition-colors duration-200 ease-out",
            FOCUS_RING,
            language === lng ? "bg-accent text-bg" : "text-text-muted hover:text-text",
          )}
        >
          {lng}
        </button>
      ))}
    </div>
  );
}

export default function SiteNav() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-bg/75 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className={cn("flex items-center gap-2.5 rounded-sm", FOCUS_RING)}
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden="true"
            className="display-wide grid h-8 w-8 place-items-center rounded-md bg-accent text-[13px] text-bg"
          >
            ES
          </span>
          <span className="display-tight text-sm text-text">Emrullah Söyler</span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          <ul className="hidden items-center gap-6 text-sm text-text-muted md:flex">
            {links.map(({ href, key }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn("rounded-sm py-2 transition-colors duration-200 hover:text-text", FOCUS_RING)}
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageToggle />
          <button
            type="button"
            className={cn(
              "grid h-10 w-10 place-items-center rounded-md border border-line text-text md:hidden",
              FOCUS_RING,
            )}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-bg/95 md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {links.map(({ href, key }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "display-tight block rounded-sm border-b border-line py-4 text-lg text-text last:border-0",
                    FOCUS_RING,
                  )}
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
