import type { Metadata } from "next";
import { type Locale, siteUrl } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { paths, startUrl, localePath } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { JsonLd, faqSchema, orgSchema, breadcrumbSchema } from "@/components/JsonLd";

const faq = [
  {
    q: "Was ist Astrakey in einem Satz?",
    a: "Astrakey ist eine AI-gestützte Reflexionsplattform, die berechnete Systemsignale zu einer verständlichen Seelenkarte verdichtet und Menschen behutsam in Selbstreflexion, Journaling und Alltag begleitet.",
  },
  {
    q: "Warum verbindet Astrakey so viele Systeme?",
    a: "Ein einzelnes System bleibt immer eine Perspektive. Astrakey sucht deshalb nach Konvergenz: Themen werden relevanter, wenn mehrere unabhängige Systemfamilien auf dieselbe Qualität zeigen.",
  },
  {
    q: "Ist Astrakey wissenschaftliche Diagnostik?",
    a: "Nein. Astrakey ist keine medizinische, psychologische, therapeutische, rechtliche oder finanzielle Beratung. Die Inhalte sind als Reflexionsimpulse und nicht als Diagnose oder Vorhersage zu verstehen.",
  },
  {
    q: "Wie geht Astrakey mit sensiblen Daten um?",
    a: "Geburtsdaten und spirituell-weltanschauliche Profile werden als sensible Informationen behandelt. Die Website erklärt Datenminimierung, Einwilligung, EU-Hosting, Löschung und Export transparent.",
  },
  {
    q: "Warum gibt es ein bezahltes Modell?",
    a: "Der kostenlose Einstieg zeigt die Seelenkarte und erste Kernthemen. Bezahlte Modelle finanzieren tiefere Auswertungen, laufende Begleitung, Infrastruktur, Sicherheit, Redaktion und Weiterentwicklung.",
  },
];

const principles = [
  {
    title: "Berechnen statt behaupten",
    text: "Astrakey trennt Rechenkern, Konvergenzlogik und sprachliche Deutung. Systemdaten werden reproduzierbar berechnet, bevor AI oder redaktionelle Sprache sie lesbar machen.",
  },
  {
    title: "Einladend statt bestimmend",
    text: "Die Texte ermöglichen Resonanz, ohne Identität festzuschreiben. Du darfst widersprechen, pausieren, nachfragen und deine eigene Erfahrung wichtiger nehmen als jede Auswertung.",
  },
  {
    title: "Tiefe mit Grenzen",
    text: "Astrakey darf berühren, aber nicht übergriffig werden. Medizinische, therapeutische, rechtliche und finanzielle Aussagen bleiben ausgeschlossen.",
  },
  {
    title: "Transparenz vor Mystifizierung",
    text: "Wo etwas berechnet wird, bleibt es nachvollziehbar. Wo AI formuliert, wird AI benannt. Wo eine Übersetzung noch nicht final ist, wird der Status sichtbar gemacht.",
  },
];

const trustBlocks = [
  {
    label: "Content",
    title: "Eigene Sprache statt kopierter Deutung",
    text: "Astrakey verwendet eigene Formulierungen und eigene Struktur. Proprietäre Kartentexte, Fragebogenitems, Markenlogiken oder geschützte Originaldeutungen werden nicht übernommen.",
  },
  {
    label: "Daten",
    title: "Sensible Profile brauchen klare Einwilligung",
    text: "Spirituell-weltanschauliche Profilinformationen können besonders sensibel sein. Deshalb sind Einwilligung, Datenminimierung, Export, Löschung und transparente Grenzen Teil der Produktlogik.",
  },
  {
    label: "AI",
    title: "AI ist Stimme, nicht Autorität",
    text: "AI kann Muster verständlicher formulieren. Sie entscheidet aber nicht darüber, wer ein Mensch ist. Astrakey rahmt AI als unterstützende Text- und Reflexionsschicht.",
  },
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    path: paths.about,
    title: "Über Astrakey — Haltung, Methode und Vertrauen",
    description:
      "Warum Astrakey Seelenkarte, Konvergenz-Engine, AI-Transparenz, Datenschutz und bezahlte Begleitung verbindet und welche Grenzen bewusst eingebaut sind.",
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const pageUrl = `${siteUrl}/${locale}${paths.about}/`;

  return (
    <>
      <JsonLd
        data={[
          orgSchema(siteUrl),
          faqSchema(faq),
          breadcrumbSchema([
            { name: "Astrakey", url: `${siteUrl}/${locale}/` },
            { name: "Über Astrakey", url: pageUrl },
          ]),
        ]}
      />
      <Header locale={locale} current="about" />
      <main>
        <section className="pb-10 pt-16">
          <div className="wrap grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <span className="kicker">Über Astrakey</span>
              <h1 className="mt-3 text-[clamp(34px,5.5vw,54px)] leading-[1.08]">Ein System für Menschen, die Tiefe suchen, ohne sich festlegen zu lassen.</h1>
              <p className="lead mt-5 max-w-[720px]">
                Astrakey übersetzt spirituelle und psychologische Systeme in eine persönliche Seelenkarte. Das Ziel ist nicht, Menschen zu vermessen. Das Ziel ist, Muster sichtbar zu machen, Sprache für innere Erfahrung zu geben und eine ruhige Begleitung in den Alltag zu bringen.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "about-hero" })}>Profil kostenlos starten</a>
                <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.konvergenz)}>Methode ansehen</a>
              </div>
            </div>
            <figure className="m-0 overflow-hidden rounded-card border border-sand bg-white shadow-soft">
              <img src="/images/hermetia/alchemical-listening-room.png" alt="Ein ruhiger Astrakey-Raum als Bild für Reflexion und innere Übersetzung" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="px-5 py-4 text-[14px] text-pflaume/80">
                Astrakey ist als ruhiger Raum gedacht: berechnet im Fundament, warm in der Sprache, transparent in den Grenzen.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="bg-creme-tief py-16">
          <div className="wrap">
            <div className="max-w-[760px]">
              <span className="kicker">Warum es Astrakey gibt</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Zwischen spiritueller Neugier und digitaler Verantwortung.</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                Viele Menschen nutzen Astrologie, Human Design, Gene Keys, Numerologie oder Persönlichkeitssysteme, weil sie sich selbst besser verstehen wollen. Gleichzeitig sind viele Angebote laut, deterministisch, rechtlich unsauber oder überladen. Astrakey will diese Lücke schließen: mit einer ästhetischen Oberfläche, einer erklärbaren Konvergenz-Logik und einer Sprache, die neugierig macht, aber keine Autorität über das Leben eines Menschen beansprucht.
              </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-4">
              {principles.map((item) => (
                <article key={item.title} className="card">
                  <h3 className="text-[20px]">{item.title}</h3>
                  <p className="muted mt-3 text-[15px] leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <span className="kicker">Was Astrakey anders macht</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Nicht mehr Systeme. Mehr Zusammenhang.</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                Astrakey sammelt Systeme nicht als Schaulaufen. Entscheidend ist, ob unabhängige Perspektiven ein Thema wirklich tragen. Die Konvergenz-Engine bündelt verwandte Quellen, dämpft Doppelzählungen und macht sichtbar, wo mehrere Wege auf denselben Punkt zeigen.
              </p>
              <a className="btn btn-ghost mt-6" href={localePath(locale, paths.systeme)}>Alle Systeme erkunden</a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <Metric value="31" label="Systemperspektiven" />
              <Metric value="51" label="Glossarbegriffe" />
              <Metric value="20" label="Wissensartikel" />
              <Metric value="12" label="Vergleichsseiten" />
              <Metric value="24" label="EU-Sprachrouten" />
              <Metric value="0" label="Diagnoseversprechen" />
            </div>
          </div>
        </section>

        <section className="bg-aubergine py-16 text-white">
          <div className="wrap">
            <div className="max-w-[760px]">
              <span className="kicker text-gold-weich">Vertrauen</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)] text-white">Tiefe braucht klare Leitplanken.</h2>
              <p className="mt-4 text-[17px] leading-[1.85] text-[#e9dcf2]">
                Astrakey berührt Identität, Beziehung, Sinn und Weltanschauung. Genau deshalb gehören rechtliche, ethische und technische Grenzen nicht ans Ende, sondern in das Produkt selbst.
              </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {trustBlocks.map((item) => (
                <article key={item.title} className="rounded-card border border-gold-weich/20 bg-white/8 p-6">
                  <span className="chip chip-gold">{item.label}</span>
                  <h3 className="mt-4 text-[22px] text-white">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#e9dcf2]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap grid gap-8 lg:grid-cols-[1fr_.9fr]">
            <div>
              <span className="kicker">Vom ersten Blick zur bezahlten Tiefe</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Kostenlos beginnen, bewusst vertiefen.</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                Astrakey baut zuerst Vertrauen auf. Deshalb beginnt der Einstieg kostenlos: Seelenkarte, erste Kernthemen und ein Gefühl für die Sprache. Bezahlte Modelle öffnen mehr Ebenen, tägliche Begleitung, Journaling, Beziehungsauswertungen und exportierbare Inhalte. Die Grenze zwischen kostenlos und bezahlt bleibt klar, nicht manipulativ.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "about-paid-depth" })}>Profil kostenlos starten</a>
                <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.preise)}>Modelle vergleichen</a>
              </div>
            </div>
            <div className="rounded-card border border-gold/30 bg-gold-weich/25 p-6">
              <h3 className="text-[24px]">Was du spüren kannst</h3>
              <ul className="mt-4 flex list-none flex-col gap-3 text-[15px] leading-relaxed text-pflaume/90">
                <li>Eine klare erste Antwort auf die Frage: Was macht Astrakey mit meinen Daten?</li>
                <li>Ein Gefühl von Tiefe, ohne Angstmarketing oder Schicksalsdruck.</li>
                <li>Ein nachvollziehbarer Grund, warum ein bezahltes Modell mehr Wert liefert.</li>
                <li>Die Sicherheit, dass Grenzen, Einwilligung und Transparenz eingebaut sind.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-creme-tief py-16">
          <div className="wrap">
            <div className="mb-8 text-center">
              <span className="kicker">FAQ</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,36px)]">Fragen zu Astrakeys Haltung</h2>
            </div>
            <Faq items={faq} />
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-card border border-sand bg-white p-5 shadow-soft">
      <p className="text-[34px] font-semibold text-aubergine">{value}</p>
      <p className="note mt-1">{label}</p>
    </div>
  );
}
