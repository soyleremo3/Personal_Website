"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  dictionary,
  LANGUAGES,
  type DictionaryKey,
  type Language,
  type Localized,
} from "@/lib/dictionary";

const STORAGE_KEY = "language";
const CHANGE_EVENT = "language-change";

function isLanguage(value: string | null): value is Language {
  return LANGUAGES.includes(value as Language);
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function readStored(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

// First visit: follow the browser's language when it's one we have.
function detectBrowserLanguage(): Language {
  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag.slice(0, 2).toLowerCase();
    if (isLanguage(base)) return base;
  }
  return "en";
}

// Holds the choice when localStorage is unavailable (private mode, blocked storage).
let chosenLanguage: Language | null = null;

function getSnapshot(): Language {
  if (chosenLanguage) return chosenLanguage;
  const stored = readStored();
  return isLanguage(stored) ? stored : detectBrowserLanguage();
}

function getServerSnapshot(): Language {
  return "en";
}

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: DictionaryKey, vars?: Record<string, string | number>) => string;
  /** Pick the current language's string from a localized value. */
  l: (value: Localized) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    // Respect deep links like /#contact; otherwise always start at the top.
    if (!window.location.hash) window.scrollTo(0, 0);
  }, []);

  const setLanguage = useCallback((next: Language) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be blocked; the change still applies for this page view.
      chosenLanguage = next;
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  const t = useCallback(
    (key: DictionaryKey, vars?: Record<string, string | number>) => {
      let text: string = dictionary[key][language];
      if (vars) {
        for (const [name, value] of Object.entries(vars)) {
          text = text.replace(`{${name}}`, String(value));
        }
      }
      return text;
    },
    [language],
  );

  const l = useCallback((value: Localized) => value[language], [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t, l }),
    [language, setLanguage, t, l],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
