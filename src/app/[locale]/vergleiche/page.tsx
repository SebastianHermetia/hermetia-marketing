import type { Metadata } from "next";
import Link from "next/link";
import { type Locale } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { localePath, paths } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { comparisons } from "@/content/marketing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ locale: locale as Locale, path: paths.vergleiche, title: "Hermetia Vergleiche — Systeme verständlich gegenübergestellt", description: "Vergleiche zwischen Astrologie, Human Design, Gene Keys, Numerologie und weiteren Systemen." });
}

export default async function VergleichePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  return (
    <>
      <Header locale={locale} current="vergleiche" />
      <section className="py-16">
        <div className="wrap">
          <span className="kicker">Vergleiche</span>
          <h1 className="mt-3 max-w-[760px] text-[clamp(32px,5vw,48px)]">Welche Systeme zeigen was?</h1>
          <p className="lead mt-5 max-w-[700px]">Vergleichsseiten holen typische Suchfragen ab und zeigen, warum Hermetia Systeme nicht gegeneinander ausspielt, sondern verantwortungsvoll verbindet.</p>
        </div>
      </section>
      <section className="bg-creme-tief py-16">
        <div className="wrap grid gap-5 md:grid-cols-2">
          {comparisons.map((comparison) => (
            <Link key={comparison.slug} href={localePath(locale, `${paths.vergleiche}/${comparison.slug}`)} className="card no-underline transition-transform hover:-translate-y-1">
              <h2 className="text-[22px]">{comparison.title}</h2>
              <p className="muted mt-2">{comparison.description}</p>
              <span className="note mt-3 inline-block font-semibold text-gold">Vergleich lesen →</span>
            </Link>
          ))}
        </div>
      </section>
      <Footer locale={locale} />
    </>
  );
}
