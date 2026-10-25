"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import SocialLinks from "@/components/SocialLinks";
import { CONTAINER, TEXT_LINK } from "@/components/ui/styles";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-line bg-bg/80">
      <div className={`${CONTAINER} flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between`}>
        <div>
          <p className="display-tight text-text">Emrullah Söyler</p>
          <p className="mt-1 text-sm text-text-muted">{t("footer.built")}</p>
        </div>
        <div className="flex items-center gap-4">
          <SocialLinks />
          <Link href="/#main" className={`${TEXT_LINK} text-sm`}>
            {t("footer.top")}
          </Link>
        </div>
      </div>
      <p className={`${CONTAINER} pb-8 text-xs text-text-muted/70`}>© {new Date().getFullYear()} Emrullah Söyler</p>
    </footer>
  );
}
