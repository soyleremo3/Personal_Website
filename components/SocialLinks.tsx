const links = [
  {
    label: "GitHub",
    href: "https://github.com/soyleremo3",
    path: "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emrullah-soyler-032442421/",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@RealPickAndSee",
    path: "M23.5 6.5s-.23-1.64-.94-2.36c-.9-.94-1.9-.94-2.36-1C17.02 3 12 3 12 3h-.01s-5.02 0-8.19.14c-.46.06-1.47.06-2.36 1C.72 4.86.5 6.5.5 6.5S.27 8.42.27 10.34v1.32C.27 13.58.5 15.5.5 15.5s.22 1.64.93 2.36c.9.94 2.07.9 2.6 1C5.94 20.98 12 21 12 21s5.03-.01 8.2-.15c.46-.06 1.46-.06 2.36-1 .71-.72.94-2.36.94-2.36s.23-1.92.23-3.84v-1.32c0-1.92-.23-3.84-.23-3.84ZM9.68 14.98V8.02L15.82 11.5l-6.14 3.48Z",
  },
];

export default function SocialLinks() {
  return (
    <ul className="flex items-center gap-4">
      {links.map(({ label, href, path }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-text-muted inline-flex rounded-full p-2.5 outline-none transition-all duration-200 ease-out hover:bg-surface hover:text-accent active:scale-95 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
              <path d={path} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
