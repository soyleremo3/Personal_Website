const NAV_LINK_CLASS =
  "rounded-sm outline-none transition-colors duration-200 ease-out hover:text-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const links = [
  { href: "#kart", label: "Bir Kart Seç" },
  { href: "#projeler", label: "Projeler" },
  { href: "#hakkimda", label: "Hakkımda" },
];

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-bg/60 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-center gap-4 px-4 py-3 sm:justify-between sm:gap-6 sm:px-6 sm:py-4">
        <span className="font-display hidden text-sm font-semibold text-text sm:inline">
          Emrullah Soyler
        </span>
        <ul className="flex items-center gap-4 text-xs text-text-muted sm:gap-6 sm:text-sm">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={NAV_LINK_CLASS}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
