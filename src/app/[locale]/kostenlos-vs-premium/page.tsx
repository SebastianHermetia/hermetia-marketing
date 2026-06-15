import type { Metadata } from "next";
import { type Locale, siteUrl } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { paths, startUrl, localePath } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/JsonLd";

const freeItems = [
  "Seelenkarte als erster Aha-Moment",
  "erste Kernthemen und Grundresonanz",
  "keine Kreditkarte beim Start",
  "Gefühl für Sprache, Methode und Datenschutz",
  "Entscheidung, ob Hermetia überhaupt passt",
];

const premiumItems = [
  "alle Ebenen deiner Seelenkarte",
  "tägliche Impulse und Journaling",
  "dein Profil als gestaltetes Buch/PDF",
  "Beziehungs- und Kompatibilitätsprofile",
  "mehrere Profile, Rückblicke und tiefere Module",
];

const decisionSignals = [
  {
    title: "Kostenlos reicht, wenn...",
    text: "du erst prüfen willst, ob Hermetias Sprache dich berührt, ob die Seelenkarte resoniert und ob du Vertrauen in Methode, Datenschutz und Grenzen aufbaust.",
  },
  {
    title: "Premium lohnt sich, wenn...",
    text: "du regelmäßig mit deinem Profil arbeiten möchtest: Ebenen lesen, Tagesimpulse nutzen, Journaling vertiefen oder Beziehungsmuster bewusst reflektieren.",
  },
  {
    title: "Warten ist richtig, wenn...",
    text: "du gerade eine Diagnose, Therapie, akute Krisenhilfe oder eine Entscheidungsgarantie suchst. Dafür ist Hermetia nicht gedacht.",
  },
];

const faq = [
  {
    q: "Kann ich Hermetia wirklich kostenlos starten?",
    a: "Ja. Der Einstieg ist ohne Kreditkarte gedacht. Du siehst deine Seelenkarte und erste Kernthemen, bevor du entscheidest, ob ein bezahltes Modell sinnvoll ist.",
  },
  {
    q: "Warum gibt es überhaupt ein Premium-Modell?",
    a: "Tiefe Auswertungen, tägliche Begleitung, Journaling, Beziehungsauswertungen, Sicherheit, Infrastruktur und Redaktion brauchen laufende Entwicklung. Premium finanziert diese Tiefe.",
  },
  {
    q: "Wann sollte ich nicht upgraden?",
    a: "Wenn du nur aus Angst, Druck oder dem Wunsch nach sicheren Vorhersagen upgraden würdest. Hermetia soll keine FOMO erzeugen, sondern bewusste Reflexion unterstützen.",
  },
  {
    q: "Kann ich später kündigen?",
    a: "Ja. Laufende Abonnements sollen transparent kündbar sein. Die Website verweist zusätzlich auf AGB, Widerruf und die rechtlichen Freigaben vor finalem Launch.",
  },
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    path: paths.freePremium,
    title: "Hermetia kostenlos vs Premium — wann sich bezahlte Tiefe lohnt",
    description:
      "Was du kostenlos bei Hermetia bekommst, wann Premium sinnvoll ist und wann du bewusst nicht upgraden solltest. Klare Entscheidungshilfe mit FAQ.",
  });
}

export default async function FreePremiumPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const pageUrl = `${siteUrl}/${locale}${paths.freePremium}/`;

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: "Hermetia kostenlos vs Premium",
            description: "Klare Entscheidungshilfe für kostenlosen Einstieg und bezahlte Tiefe.",
            locale,
            url: pageUrl,
            about: "Hermetia Preise und Premium-Modell",
            image: `${siteUrl}/images/hermetia/celestial-layer-orbits.png`,
          }),
          faqSchema(faq),
          breadcrumbSchema([
            { name: "Hermetia", url: `${siteUrl}/${locale}/` },
            { name: "Kostenlos vs Premium", url: pageUrl },
          ]),
        ]}
      />
      <Header locale={locale} current="preise" />
      <main>
        <section className="pb-10 pt-16">
          <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_.95fr]">
            <div>
              <span className="kicker">Kostenlos vs Premium</span>
              <h1 className="mt-3 text-[clamp(34px,5.5vw,54px)] leading-[1.08]">Erst Resonanz prüfen. Dann bewusst Tiefe wählen.</h1>
              <p className="lead mt-5 max-w-[720px]">
                Hermetia soll nicht über Druck verkaufen. Der kostenlose Einstieg zeigt dir, ob deine Seelenkarte, die Sprache und die Methode stimmig wirken. Premium wird erst dann sinnvoll, wenn du mehr Tiefe, Alltag und Beziehungsebene wirklich nutzen möchtest.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "free-premium-hero" })}>Kostenlos starten</a>
                <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.preise)}>Tarife ansehen</a>
              </div>
            </div>
            <figure className="m-0 overflow-hidden rounded-card border border-sand bg-white shadow-soft">
              <img src="/images/hermetia/celestial-layer-orbits.png" alt="Abstrakte Ebenen als Bild für kostenlosen Einstieg und Premium-Tiefe bei Hermetia" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="px-5 py-4 text-[14px] text-pflaume/80">
                Kostenlos zeigt den ersten Zusammenhang. Premium öffnet die fortlaufende Arbeit mit den Ebenen.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="bg-creme-tief py-16">
          <div className="wrap grid gap-6 lg:grid-cols-2">
            <div className="rounded-card border border-sand bg-white p-7 shadow-soft">
              <span className="chip">Kostenlos</span>
              <h2 className="mt-4 text-[clamp(26px,3.5vw,34px)]">Was du ohne Zahlung prüfen kannst</h2>
              <p className="muted mt-3 text-[16px] leading-relaxed">
                Der kostenlose Einstieg ist nicht als Köder gedacht, sondern als Vertrauensprobe: Passt die Sprache? Fühlt sich die Seelenkarte stimmig an? Sind Methode und Datenschutz nachvollziehbar?
              </p>
              <ul className="mt-5 flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
                {freeItems.map((item) => <li key={item}>✓ {item}</li>)}
              </ul>
            </div>
            <div className="rounded-card border-2 border-gold bg-white p-7 shadow-soft">
              <span className="chip chip-gold">Premium</span>
              <h2 className="mt-4 text-[clamp(26px,3.5vw,34px)]">Was bezahlte Tiefe sinnvoll macht</h2>
              <p className="muted mt-3 text-[16px] leading-relaxed">
                Premium ist für Nutzer gedacht, die aus einem einmaligen Aha-Moment eine fortlaufende Reflexionspraxis machen möchten: lesen, beobachten, journaln, vertiefen.
              </p>
              <ul className="mt-5 flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
                {premiumItems.map((item) => <li key={item}>✓ {item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap">
            <div className="mb-8 max-w-[760px]">
              <span className="kicker">Entscheidungshilfe</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Nicht jeder sollte sofort upgraden.</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                Gute Conversion heißt bei Hermetia nicht, möglichst schnell Druck aufzubauen. Gute Conversion heißt: Nutzer verstehen, welcher Schritt wirklich passt.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {decisionSignals.map((item) => (
                <article key={item.title} className="card">
                  <h3 className="text-[22px]">{item.title}</h3>
                  <p className="muted mt-3 text-[15px] leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-aubergine py-16 text-white">
          <div className="wrap grid items-center gap-8 lg:grid-cols-[1fr_.9fr]">
            <div>
              <span className="kicker text-gold-weich">Nächster Schritt</span>
              <h2 className="mt-3 text-[clamp(28px,4vw,40px)] text-white">Beginne dort, wo Vertrauen entsteht: kostenlos.</h2>
              <p className="mt-4 max-w-[640px] text-[17px] leading-[1.85] text-[#e9dcf2]">
                Öffne zuerst deine Seelenkarte. Wenn die ersten Themen Resonanz haben, kannst du die Tarife vergleichen und bewusst entscheiden, ob Premium zu deiner Nutzung passt.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-on-dark btn-lg" href={startUrl(locale, { source: "free-premium-final" })}>Kostenlos starten</a>
                <a className="btn btn-ghost btn-lg border-white/30 text-white hover:bg-white/10" href={localePath(locale, paths.anwendungsfaelle)}>Anwendungsfälle lesen</a>
              </div>
            </div>
            <div className="rounded-card border border-gold-weich/20 bg-white/8 p-6">
              <h3 className="text-[24px] text-white">Fairness-Regel</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#e9dcf2]">
                Premium sollte sich wie eine bewusste Vertiefung anfühlen, nicht wie eine Angstreaktion. Deshalb benennt Hermetia Grenzen, Kündigung, Widerruf und Datenschutz sichtbar.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap">
            <div className="mb-8 text-center">
              <span className="kicker">FAQ</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,36px)]">Häufige Fragen zu kostenlos und Premium</h2>
            </div>
            <Faq items={faq} />
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
