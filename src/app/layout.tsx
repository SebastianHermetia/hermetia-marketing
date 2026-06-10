import type { Metadata } from "next";
import { siteUrl } from "@/i18n/config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Hermetia", template: "%s" },
};

// Pass-through: <html>/<body> + Fonts werden im [locale]-Layout gesetzt,
// damit jede Sprache statisch das korrekte lang-Attribut ausliefert (SEO).
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
