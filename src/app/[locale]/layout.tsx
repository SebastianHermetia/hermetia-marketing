import { notFound } from "next/navigation";
import { Fraunces, Mulish } from "next/font/google";
import { locales, type Locale } from "@/i18n/config";
import { LanguageNotice } from "@/components/LanguageNotice";
import { LocalizedEditorialShell } from "@/components/LocalizedEditorialShell";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});
const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mulish",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const currentLocale = locale as Locale;

  return (
    <html lang={locale} className={`${fraunces.variable} ${mulish.variable}`}>
      <body>
        <LanguageNotice locale={currentLocale} />
        {currentLocale === "de" || currentLocale === "en" ? children : <LocalizedEditorialShell locale={currentLocale} />}
      </body>
    </html>
  );
}
