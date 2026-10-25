"use client";

import { useState, type FormEvent } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/LanguageProvider";
import { brandIcons } from "@/components/SocialLinks";
import { EMAIL } from "@/data/profile";
import { BUTTON_PRIMARY, BUTTON_SECONDARY, CONTAINER, FOCUS_RING, SECTION } from "@/components/ui/styles";

const FIELD =
  "mt-1.5 block w-full rounded-md border border-line bg-bg/70 px-3.5 py-2.5 text-sm text-text placeholder:text-text-muted/60 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

export default function ContactSection() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!message) {
      setError(true);
      return;
    }
    setError(false);
    const body = name ? `${message}\n\n— ${name}` : message;
    const params = new URLSearchParams({ subject: subject || "Hello", body });
    // URLSearchParams encodes spaces as "+", which mail clients show literally.
    window.location.href = `mailto:${EMAIL}?${params.toString().replace(/\+/g, "%20")}`;
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className={`${SECTION} py-20 md:py-28`}>
      <div className={`${CONTAINER} grid gap-12 lg:grid-cols-[1fr_minmax(0,28rem)]`}>
        <div>
          <h2 id="contact-title" className="display-wide text-3xl text-text sm:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-text-muted">{t("contact.intro")}</p>

          <a
            href={`mailto:${EMAIL}`}
            className={cn(
              "display-tight mt-8 inline-block break-all rounded-sm text-2xl text-text underline decoration-accent/60 decoration-2 underline-offset-8 transition-colors hover:text-accent sm:text-3xl",
              FOCUS_RING,
            )}
          >
            {EMAIL}
          </a>
          <div className="mt-6">
            <button type="button" onClick={copyEmail} className={BUTTON_SECONDARY} aria-live="polite">
              {copied ? <Check className="h-4 w-4 text-signal" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
              {copied ? t("contact.copied") : t("contact.copy")}
            </button>
          </div>

          <h3 className="mt-12 text-sm text-text-muted">{t("contact.elsewhere")}</h3>
          <ul className="mt-3 divide-y divide-line border-y border-line">
            {brandIcons.map(({ label, handle, href, path }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group flex items-center gap-4 py-3.5 text-text transition-colors hover:text-accent",
                    FOCUS_RING,
                  )}
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-text-muted group-hover:text-accent" fill="currentColor" aria-hidden="true">
                    <path d={path} />
                  </svg>
                  <span className="w-20 font-semibold">{label}</span>
                  <span className="truncate text-sm text-text-muted">{handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="self-start rounded-2xl border border-line bg-surface/80 p-6 sm:p-7"
          aria-labelledby="contact-form-title"
        >
          <h3 id="contact-form-title" className="display-tight text-lg text-text">
            {t("contact.formTitle")}
          </h3>
          <div className="mt-5 space-y-4">
            <label className="block text-sm text-text-muted">
              {t("contact.name")}
              <input name="name" autoComplete="name" className={FIELD} />
            </label>
            <label className="block text-sm text-text-muted">
              {t("contact.subject")}
              <input name="subject" className={FIELD} />
            </label>
            <label className="block text-sm text-text-muted">
              {t("contact.message")}
              <textarea
                name="message"
                rows={5}
                aria-invalid={error}
                aria-describedby={error ? "contact-error" : undefined}
                onInput={() => error && setError(false)}
                className={cn(FIELD, "resize-y", error && "border-accent-static")}
              />
            </label>
            {error && (
              <p id="contact-error" role="alert" className="text-sm text-[#f07a6f]">
                {t("contact.messageRequired")}
              </p>
            )}
          </div>
          <button type="submit" className={cn(BUTTON_PRIMARY, "mt-6 w-full justify-center")}>
            {t("contact.send")}
          </button>
          <p className="mt-3 text-xs leading-relaxed text-text-muted">{t("contact.formNote")}</p>
        </form>
      </div>
    </section>
  );
}
