import type { Metadata } from "next";
import { type Locale, siteUrl } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { paths, startUrl, localePath } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/JsonLd";

const dataTypes = [
  {
    title: "Kontodaten",
    text: "Zum Beispiel E-Mail, Passwort-Hash, Spracheinstellung und technische Sitzungsinformationen. Diese Daten machen Konto und Login nutzbar.",
  },
  {
    title: "Geburts- und Profildaten",
    text: "Geburtsdatum, optionale Geburtszeit, Geburtsort und daraus berechnete Systemsignale. Diese Daten sind der Kern der Seelenkarte.",
  },
  {
    title: "Abgeleitete Deutungen",
    text: "Texte, Ebenen, Kernthemen und Reflexionsinhalte können weltanschauliche oder spirituelle Aussagen berühren und werden deshalb besonders vorsichtig behandelt.",
  },
  {
    title: "Nutzungs- und Zahlungsdaten",
    text: "Journaling, Feedback, Tarifstatus und Zahlungsabwicklung. Vollständige Kartendaten sollen nicht bei Hermetia gespeichert werden.",
  },
];

const safeguards = [
  "ausdrückliche Einwilligung für sensible Profilverarbeitung",
  "Datenminimierung: nur verarbeiten, was für Profil und Funktionen nötig ist",
  "EU-Hosting und technische Schutzmaßnahmen als Produktanforderung",
  "Export und Löschung als erwartete App-Funktionen",
  "AI-Transparenz: AI formuliert, ersetzt aber keine menschliche Entscheidung",
  "keine Weitergabe zu Werbezwecken als Produktprinzip",
];

const faq = [
  {
    q: "Warum spricht Hermetia von sensiblen Daten?",
    a: "Hermetia kann aus Geburtsdaten und Systemen spirituell-weltanschauliche Profilinhalte ableiten. Solche Aussagen können sehr persönlich sein und werden deshalb besonders vorsichtig erklärt und verarbeitet.",
  },
  {
    q: "Braucht Hermetia meine genaue Geburtszeit?",
    a: "Nicht zwingend. Eine genaue Geburtszeit verbessert bestimmte Systeme. Ohne exakte Zeit kennzeichnet Hermetia, welche Aussagen weniger sicher sind.",
  },
  {
    q: "Sieht die AI mein rohes Geburtsdatum?",
    a: "Das Produktkonzept trennt Rechenkern, Konvergenz und AI-Formulierung. AI soll mit abgeleiteten Signalen arbeiten und nicht als Autorität über rohe Identitätsdaten auftreten.",
  },
  {
    q: "Kann ich meine Daten löschen?",
    a: "Ja, Löschung und Export sind als Kernrechte vorgesehen. Die formale Datenschutzerklärung beschreibt die Rechte auf Auskunft, Berichtigung, Löschung, Datenübertragbarkeit und Widerruf.",
  },
  {
    q: "Ist diese Seite Rechtsberatung?",
    a: "Nein. Diese Seite erklärt die Produktlogik verständlich. Die formalen Rechtstexte und externe Datenschutz-/Rechtsprüfung bleiben für den finalen Launch maßgeblich.",
  },
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    path: paths.datenSicherheit,
    title: "Hermetia Daten und Sicherheit — sensible Profile, Einwilligung und AI",
    description:
      "Wie Hermetia Geburtsdaten, sensible Profilinhalte, Einwilligung, Export, Löschung, Zahlung und AI-Transparenz verständlich erklärt.",
  });
}

export default async function DataSecurityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const pageUrl = `${siteUrl}/${locale}${paths.datenSicherheit}/`;

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: "Hermetia Daten und Sicherheit",
            description: "Verständliche Erklärung zu sensiblen Profildaten, Einwilligung, AI und Nutzerrechten.",
            locale,
            url: pageUrl,
            about: "Datenschutz und Sicherheit",
            image: `${siteUrl}/images/hermetia/atmospheric-data-topography.png`,
          }),
          faqSchema(faq),
          breadcrumbSchema([
            { name: "Hermetia", url: `${siteUrl}/${locale}/` },
            { name: "Daten und Sicherheit", url: pageUrl },
          ]),
        ]}
      />
      <Header locale={locale} current="daten-sicherheit" />
      <main>
        <section className="pb-10 pt-16">
          <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_.95fr]">
            <div>
              <span className="kicker">Daten und Sicherheit</span>
              <h1 className="mt-3 text-[clamp(34px,5.5vw,54px)] leading-[1.08]">Persönliche Tiefe braucht verständlichen Datenschutz.</h1>
              <p className="lead mt-5 max-w-[720px]">
                Hermetia arbeitet mit Geburtsdaten und abgeleiteten Profilinhalten. Das kann sehr persönlich werden. Deshalb müssen Einwilligung, Datenminimierung, Export, Löschung, Zahlung und AI-Transparenz nicht irgendwo versteckt sein, sondern vor dem Profilstart klar werden.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "data-security-hero" })}>Profil kostenlos starten</a>
                <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.datenschutz)}>Datenschutzerklärung lesen</a>
              </div>
            </div>
            <figure className="m-0 overflow-hidden rounded-card border border-sand bg-white shadow-soft">
              <img src="/images/hermetia/atmospheric-data-topography.png" alt="Abstrakte Datentopografie als Bild für Hermetia Datenschutz und Sicherheit" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="px-5 py-4 text-[14px] text-pflaume/80">
                Datenschutz ist hier kein Pflichttext, sondern Teil der Produktverantwortung.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="bg-creme-tief py-16">
          <div className="wrap">
            <div className="mb-9 max-w-[760px]">
              <span className="kicker">Welche Daten?</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Vier Datenbereiche, klar getrennt.</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                Nutzer sollen verstehen, welche Informationen wofür gebraucht werden. So entsteht Vertrauen vor der Anmeldung und vor jedem bezahlten Modell.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {dataTypes.map((item) => (
                <article key={item.title} className="card">
                  <h3 className="text-[21px]">{item.title}</h3>
                  <p className="muted mt-3 text-[15px] leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <span className="kicker">Schutzprinzipien</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Was vor dem Onboarding klar sein soll.</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                Hermetia soll Neugier erzeugen, aber keine blinde Dateneingabe. Die folgenden Prinzipien sind deshalb Teil der Website, der Freigabe-Gates und der Produktlogik.
              </p>
              <a className="btn btn-ghost mt-6" href={localePath(locale, paths.freigaben)}>Launch-Freigaben ansehen</a>
            </div>
            <div className="rounded-card border border-sand bg-white p-7 shadow-soft">
              <ul className="flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
                {safeguards.map((item) => <li key={item}>✓ {item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-aubergine py-16 text-white">
          <div className="wrap grid items-center gap-8 lg:grid-cols-[1fr_.9fr]">
            <div>
              <span className="kicker text-gold-weich">Vertrauensschritt</span>
              <h2 className="mt-3 text-[clamp(28px,4vw,40px)] text-white">Starte erst, wenn die Datenlogik für dich stimmig ist.</h2>
              <p className="mt-4 max-w-[640px] text-[17px] leading-[1.85] text-[#e9dcf2]">
                Der kostenlose Einstieg ist dafür da, Methode und Sprache zu prüfen. Wenn Datenschutz, Einwilligung und Grenzen für dich klar sind, kannst du deine Seelenkarte erstellen und danach bewusst entscheiden, ob mehr Tiefe passt.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-on-dark btn-lg" href={startUrl(locale, { source: "data-security-final" })}>Profil kostenlos starten</a>
                <a className="btn btn-ghost btn-lg border-white/30 text-white hover:bg-white/10" href={localePath(locale, paths.ki)}>AI-Transparenz lesen</a>
              </div>
            </div>
            <div className="rounded-card border border-gold-weich/20 bg-white/8 p-6">
              <h3 className="text-[24px] text-white">Wichtig</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#e9dcf2]">
                Diese Seite ist bewusst verständlich formuliert. Maßgeblich bleiben vor finalem Launch die juristisch geprüften Datenschutz-, AGB-, Widerrufs- und Verbraucherrechtsinformationen.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap">
            <div className="mb-8 text-center">
              <span className="kicker">FAQ</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,36px)]">Häufige Fragen zu Daten und Sicherheit</h2>
            </div>
            <Faq items={faq} />
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
