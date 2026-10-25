export const FOCUS_RING =
  "outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

export const BUTTON_PRIMARY = `inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-[filter,transform] duration-200 ease-out hover:brightness-110 active:scale-[0.97] ${FOCUS_RING}`;

export const BUTTON_SECONDARY = `inline-flex min-h-11 items-center gap-2 rounded-md border border-line bg-surface/60 px-5 py-2.5 text-sm font-semibold text-text transition-[border-color,background-color,transform] duration-200 ease-out hover:border-text-muted hover:bg-raised active:scale-[0.97] ${FOCUS_RING}`;

export const TEXT_LINK = `rounded-sm text-accent underline-offset-4 transition-colors hover:underline ${FOCUS_RING}`;

export const SECTION = "w-full scroll-mt-20 bg-bg/25";
export const CONTAINER = "mx-auto max-w-6xl px-4 sm:px-6";
