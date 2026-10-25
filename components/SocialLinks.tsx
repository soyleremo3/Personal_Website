import { Mail } from "lucide-react";
import { EMAIL, socialLinks } from "@/data/profile";
import { cn } from "@/lib/utils";
import { FOCUS_RING } from "@/components/ui/styles";

export const brandIcons = [
  {
    label: "GitHub",
    handle: "soyleremo3",
    href: socialLinks.github,
    path: "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z",
  },
  {
    label: "LinkedIn",
    handle: "Emrullah Söyler",
    href: socialLinks.linkedin,
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z",
  },
  {
    label: "Kaggle",
    handle: "emrullahsyler",
    href: socialLinks.kaggle,
    path: "M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358",
  },
];

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-1", className)}>
      {brandIcons.map(({ label, href, path }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              "inline-flex rounded-full p-2.5 text-text-muted transition-colors duration-200 hover:bg-surface hover:text-accent",
              FOCUS_RING,
            )}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d={path} />
            </svg>
          </a>
        </li>
      ))}
      <li>
        <a
          href={`mailto:${EMAIL}`}
          aria-label="Email"
          className={cn(
            "inline-flex rounded-full p-2.5 text-text-muted transition-colors duration-200 hover:bg-surface hover:text-accent",
            FOCUS_RING,
          )}
        >
          <Mail className="h-5 w-5" aria-hidden="true" />
        </a>
      </li>
    </ul>
  );
}
