import type { Metadata } from "next";
import Link from "next/link";
import { type Locale } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { localePath, paths } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { articles } from "@/content/marketing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ locale: locale as Locale, path: paths.wissen, title: "Hermetia Wissen — spirituelles Profiling, AI und Selbstreflexion", description: "Ratgeber und Grundlagen zu spirituellem Profiling, Geburtszeit, AI-Deutung, Datenschutz und verantwortungsvoller Selbstreflexion." });
}

export default async function WissenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  return (
    <>
      <Header locale={locale} current="wissen" />
      <section className="py-16">
        <div className="wrap">
          <span className="kicker">Wissen</span>
          <h1 className="mt-3 max-w-[780px] text-[clamp(32px,5vw,48px)]">Ratgeber für spirituelles Profiling, AI und Selbstreflexion</h1>
          <p className="lead mt-5 max-w-[700px]">Vertiefende Artikel, die Suchfragen beantworten und gleichzeitig zeigen, wie Hermetia verantwortungsvoll mit komplexen Systemen arbeitet.</p>
        </div>
      </section>
      <section className="bg-creme-tief py-16">
        <div className="wrap grid gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <Link key={article.slug} href={localePath(locale, `${paths.wissen}/${article.slug}`)} className="card no-underline transition-transform hover:-translate-y-1">
              <h2 className="text-[22px]">{article.title}</h2>
              <p className="muted mt-2">{article.description}</p>
              <span className="note mt-3 inline-block font-semibold text-gold">Artikel lesen →</span>
            </Link>
          ))}
        </div>
      </section>
      <Footer locale={locale} />
    </>
  );
}
