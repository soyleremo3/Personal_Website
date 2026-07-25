import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import GlobalCanvasBackground from "@/components/GlobalCanvasBackground";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Emrullah Soyler",
  description: "Personal portfolio — projects and links",
  openGraph: {
    title: "Emrullah Soyler",
    description: "Personal portfolio — projects and links",
    siteName: "Emrullah Soyler",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Emrullah Soyler",
    description: "Personal portfolio — projects and links",
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="bg-signature min-h-full flex flex-col text-text font-body">
        <GlobalCanvasBackground />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
