import type { Metadata } from "next";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { startUrl, paths } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { JsonLd, faqSchema } from "@/components/JsonLd";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  const title = locale === "en" ? "FAQ — All your questions about Hermetia" : "FAQ — Alle Fragen zu Hermetia";
  const desc = locale === "en"
    ? "Soul map, birth time, privacy, pricing and cancellation: all frequently asked questions about Hermetia, answered clearly."
    : "Seelenkarte, Geburtszeit, Datenschutz, Preise und Kündigung: alle häufigen Fragen zu Hermetia, klar beantwortet.";
  return buildMetadata({ locale: locale as Locale, path: paths.faq, title, description: desc });
}

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const t = getDictionary(locale);
  const items = [...t.home.faq.items, ...t.preise.faq];

  return (
    <>
      <JsonLd data={faqSchema(items)} />
      <Header locale={locale} current="faq" />

      <section className="pb-8 pt-16">
        <div className="wrap flex flex-col items-center text-center">
          <span className="kicker mb-3.5">{t.footer.faq}</span>
          <h1 className="max-w-[680px] text-[clamp(32px,5vw,44px)]">{t.home.faq.title}</h1>
        </div>
      </section>

      <section className="pb-16">
        <div className="wrap"><Faq items={items} /></div>
      </section>

      <section className="bg-creme-tief py-16 text-center">
        <div className="wrap">
          <a className="btn btn-primary btn-lg" href={startUrl(locale)}>{t.cta.startFree}</a>
        </div>
      </section>

      <Footer locale={locale} />
    </>
  );
}
