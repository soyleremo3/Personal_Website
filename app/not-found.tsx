"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { BUTTON_PRIMARY, CONTAINER } from "@/components/ui/styles";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className={`${CONTAINER} flex flex-1 flex-col justify-center py-32`}>
      <p className="display-wide text-6xl text-accent">404</p>
      <h1 className="display-wide mt-6 text-3xl text-text sm:text-4xl">{t("notFound.title")}</h1>
      <p className="mt-4 max-w-md leading-relaxed text-text-muted">{t("notFound.body")}</p>
      <div className="mt-8">
        <Link href="/" className={BUTTON_PRIMARY}>
          {t("notFound.home")}
        </Link>
      </div>
    </section>
  );
}
