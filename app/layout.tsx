import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import GlobalCanvasBackground from "@/components/GlobalCanvasBackground";
import { LanguageProvider } from "@/components/LanguageProvider";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import { FULL_NAME, SITE_URL } from "@/data/profile";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["500"],
});

const DESCRIPTION =
  "Emrullah Söyler — AI & software developer from Türkiye. Computer vision, reinforcement learning and LLM agents, plus mobile apps, games and FRC robotics.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${FULL_NAME} — AI & software developer`,
    template: `%s · ${FULL_NAME}`,
  },
  description: DESCRIPTION,
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  keywords: [
    "Emrullah Söyler",
    "Emrullah Soyler",
    "AI developer",
    "machine learning",
    "computer vision",
    "reinforcement learning",
    "React Native",
    "Unity",
    "FRC",
    "portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${FULL_NAME} — AI & software developer`,
    description: DESCRIPTION,
    siteName: FULL_NAME,
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${FULL_NAME} — AI & software developer`,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0d",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-signature min-h-full flex flex-col text-text font-body">
        <GlobalCanvasBackground />
        <LanguageProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
          >
            Skip to content
          </a>
          <SiteNav />
          <main id="main" className="flex flex-1 flex-col">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
