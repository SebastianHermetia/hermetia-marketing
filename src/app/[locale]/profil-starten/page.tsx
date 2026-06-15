import type { Metadata } from "next";
import { type Locale, siteUrl } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { paths, startUrl, localePath } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/JsonLd";

const steps = [
  {
    n: "01",
    title: "Sprache und Konto wählen",
    text: "Du startest mit deiner bevorzugten Sprache und einem Konto. Die Sprache wird als Hinweis an die App übergeben, damit der Einstieg nicht bei null beginnt.",
  },
  {
    n: "02",
    title: "Geburtsdaten eingeben",
    text: "Hermetia braucht Geburtsdatum, Geburtsort und, wenn vorhanden, die Geburtszeit. Wenn du die Uhrzeit nicht kennst, geht es trotzdem weiter.",
  },
  {
    n: "03",
    title: "Einwilligung verstehen",
    text: "Vor sensiblen Profilinhalten muss klar sein, welche Daten verarbeitet werden, warum Art. 9 DSGVO relevant ist und welche Rechte du hast.",
  },
  {
    n: "04",
    title: "Seelenkarte ansehen",
    text: "Der kostenlose Einstieg zeigt die erste Seelenkarte und Kernthemen. Erst danach entscheidest du, ob bezahlte Tiefe sinnvoll ist.",
  },
];

const prepare = [
  "Geburtsdatum",
  "Geburtsort",
  "Geburtszeit, falls bekannt",
  "eine E-Mail-Adresse für dein Konto",
  "ein paar Minuten Ruhe, um die ersten Themen wirklich zu lesen",
];

const faq = [
  {
    q: "Kann ich ohne genaue Geburtszeit starten?",
    a: "Ja. Hermetia funktioniert auch ohne exakte Uhrzeit, kennzeichnet aber, welche Systeme dadurch weniger sicher sind. Du kannst die Geburtszeit später nachtragen.",
  },
  {
    q: "Brauche ich eine Kreditkarte für den Einstieg?",
    a: "Nein. Der erste Profilstart ist als kostenloser Einstieg ohne Kreditkarte gedacht. Bezahlte Modelle werden erst später bewusst gewählt.",
  },
  {
    q: "Warum muss ich einer sensiblen Verarbeitung zustimmen?",
    a: "Aus Geburtsdaten und Systemen können spirituell-weltanschauliche Profilinhalte entstehen. Hermetia behandelt diese Inhalte als sensibel und erklärt Einwilligung und Rechte vor der Verarbeitung.",
  },
  {
    q: "Was passiert nach der ersten Seelenkarte?",
    a: "Du kannst die ersten Themen lesen, die Methode prüfen und entscheiden, ob du weitere Ebenen, Tagesimpulse, Journaling oder Beziehungsauswertungen nutzen möchtest.",
  },
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    path: paths.onboarding,
    title: "Hermetia Profil starten - Ablauf, Geburtsdaten, Einwilligung und Seelenkarte",
    description:
      "So funktioniert der kostenlose Profilstart bei Hermetia: Sprache, Konto, Geburtsdaten, Einwilligung, Seelenkarte und nächste Schritte.",
  });
}

export default async function OnboardingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const pageUrl = `${siteUrl}/${locale}${paths.onboarding}/`;

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: "Hermetia Profil starten",
            description: "Ablauf, benötigte Daten, Einwilligung und kostenlose Seelenkarte.",
            locale,
            url: pageUrl,
            about: "Hermetia Onboarding",
            image: `${siteUrl}/images/hermetia/birth-moment-meridian.png`,
          }),
          faqSchema(faq),
          breadcrumbSchema([
            { name: "Hermetia", url: `${siteUrl}/${locale}/` },
            { name: "Profil starten", url: pageUrl },
          ]),
        ]}
      />
      <Header locale={locale} current="onboarding" />
      <main>
        <section className="pb-10 pt-16">
          <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_.95fr]">
            <div>
              <span className="kicker">Profil starten</span>
              <h1 className="mt-3 text-[clamp(34px,5.5vw,54px)] leading-[1.08]">So kommst du von der Website in deine persönliche Seelenkarte.</h1>
              <p className="lead mt-5 max-w-[720px]">
                Das Onboarding soll ruhig und verständlich sein: Du gibst nur ein, was für die Berechnung nötig ist, verstehst vorher die Datenlogik und siehst zuerst kostenlos, ob Hermetia für dich resoniert.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "onboarding-guide-hero" })}>Jetzt Profil starten</a>
                <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.datenSicherheit)}>Datenlogik prüfen</a>
              </div>
            </div>
            <figure className="m-0 overflow-hidden rounded-card border border-sand bg-white shadow-soft">
              <img src="/images/hermetia/birth-moment-meridian.png" alt="Abstrakter Geburtsmoment als Bild für den Hermetia Profilstart" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="px-5 py-4 text-[14px] text-pflaume/80">
                Der Profilstart verbindet Sprache, Geburtsdaten, Einwilligung und die erste Seelenkarte.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="bg-creme-tief py-16">
          <div className="wrap">
            <div className="mb-9 max-w-[760px]">
              <span className="kicker">Ablauf</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Vier Schritte, bevor du Tiefe freischaltest.</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                Hermetia soll nicht mit einem Formular überfallen. Der Ablauf erklärt, warum Daten gebraucht werden und was du schon kostenlos sehen kannst.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <article key={step.n} className="card">
                  <span className="kicker">{step.n}</span>
                  <h3 className="mt-2 text-[21px]">{step.title}</h3>
                  <p className="muted mt-3 text-[15px] leading-relaxed">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <span className="kicker">Vorbereitung</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Was du bereithalten kannst.</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                Du kannst auch spontan starten. Wenn du die folgenden Informationen griffbereit hast, wird deine erste Seelenkarte genauer und der Einstieg ruhiger.
              </p>
            </div>
            <div className="rounded-card border border-sand bg-white p-7 shadow-soft">
              <ul className="flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
                {prepare.map((item) => <li key={item}>Check: {item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-aubergine py-16 text-white">
          <div className="wrap grid items-center gap-8 lg:grid-cols-[1fr_.9fr]">
            <div>
              <span className="kicker text-gold-weich">Kostenloser Einstieg</span>
              <h2 className="mt-3 text-[clamp(28px,4vw,40px)] text-white">Starte mit der Seelenkarte, nicht mit einer Kaufentscheidung.</h2>
              <p className="mt-4 max-w-[640px] text-[17px] leading-[1.85] text-[#e9dcf2]">
                Der erste Schritt soll zeigen, ob Hermetia für dich stimmt. Bezahlte Modelle sind für spätere Tiefe gedacht: Ebenen, Tagesimpulse, Journaling, Buch und Beziehungsauswertungen.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-on-dark btn-lg" href={startUrl(locale, { source: "onboarding-guide-final" })}>Profil kostenlos starten</a>
                <a className="btn btn-ghost btn-lg border-white/30 text-white hover:bg-white/10" href={localePath(locale, paths.freePremium)}>Kostenlos vs Premium</a>
              </div>
            </div>
            <div className="rounded-card border border-gold-weich/20 bg-white/8 p-6">
              <h3 className="text-[24px] text-white">Wenn etwas unsicher ist</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#e9dcf2]">
                Keine genaue Uhrzeit? Kein Problem. Hermetia kennzeichnet Sicherheit und Unsicherheit, statt so zu tun, als wäre jede Aussage gleich belastbar.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap">
            <div className="mb-8 text-center">
              <span className="kicker">FAQ</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,36px)]">Häufige Fragen zum Profilstart</h2>
            </div>
            <Faq items={faq} />
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
