import type { Metadata } from "next";
import { type Locale, siteUrl } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { paths, startUrl, localePath } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/JsonLd";

const useCases = [
  {
    tag: "Selbstreflexion",
    title: "Wenn du dich besser verstehen willst",
    text: "Hermetia hilft, wiederkehrende Muster, Stärken, Schatten und innere Spannungen in eine Sprache zu bringen. Der Einstieg ist besonders stark, wenn du spürst, dass klassische Persönlichkeitsbeschreibungen zu flach bleiben.",
    cta: "Mit der Seelenkarte beginnen",
    href: paths.seelenkarte,
  },
  {
    tag: "Entscheidungen",
    title: "Wenn du Klarheit suchst, ohne eine Antwort abzugeben",
    text: "Hermetia entscheidet nicht für dich. Die Plattform zeigt innere Prioritäten, Timing-Qualitäten und wiederkehrende Fragen, damit du bewusster prüfen kannst, was stimmig ist.",
    cta: "Methode verstehen",
    href: paths.methodik,
  },
  {
    tag: "Alltag",
    title: "Wenn du eine ruhige tägliche Begleitung möchtest",
    text: "Tagesimpulse und Journaling geben einen kleinen Fokus, ohne Druck oder FOMO. Das passt für Menschen, die Reflexion in den Alltag bringen wollen, statt nur einmal ein großes Profil zu lesen.",
    cta: "Tagesimpulse ansehen",
    href: paths.tagesimpulse,
  },
  {
    tag: "Beziehungen",
    title: "Wenn du Resonanz und Reibung besser einordnen willst",
    text: "Hermetia kann Beziehungsdynamiken als Reflexionsraum sichtbar machen. Entscheidend bleibt klare Einwilligung, denn Profile anderer Menschen sind sensibel.",
    cta: "Beziehungen erkunden",
    href: paths.beziehungen,
  },
  {
    tag: "Berufung",
    title: "Wenn du Arbeit, Energie und Sinn sortieren willst",
    text: "Systemsignale aus Persönlichkeit, Rhythmus und archetypischer Sprache können helfen, Arbeitsweisen, Energiehaushalt und Sehnsucht nach Wirksamkeit neu zu betrachten.",
    cta: "Systeme erkunden",
    href: paths.systeme,
  },
  {
    tag: "Neugier",
    title: "Wenn du mehrere Systeme vergleichbar machen willst",
    text: "Statt Astrologie, Human Design, Gene Keys oder Numerologie isoliert zu lesen, zeigt Hermetia, wo Perspektiven zusammenlaufen und wo sie sich produktiv widersprechen.",
    cta: "Vergleiche lesen",
    href: paths.vergleiche,
  },
];

const goodFit = [
  "Du möchtest dich selbst besser verstehen, ohne dich auf eine starre Identität festzulegen.",
  "Du magst spirituelle Systeme, willst aber Transparenz, Datenschutz und klare Grenzen.",
  "Du suchst einen ruhigen Einstieg und möchtest erst kostenlos prüfen, ob die Sprache resoniert.",
  "Du willst später bewusst entscheiden, ob tiefere Ebenen, Journaling oder Beziehungsauswertungen den Preis wert sind.",
];

const badFit = [
  "Du erwartest Diagnosen, Therapie, medizinische Einschätzungen oder psychologische Behandlung.",
  "Du möchtest sichere Vorhersagen über Zukunft, Liebe, Geld, Gesundheit oder Schicksal.",
  "Du suchst eine Autorität, die dir Entscheidungen abnimmt.",
  "Du möchtest Profile anderer Menschen ohne deren Einwilligung auswerten.",
];

const faq = [
  {
    q: "Für wen ist Hermetia am besten geeignet?",
    a: "Hermetia passt zu Menschen, die spirituelle und psychologische Systeme als Reflexionssprache nutzen möchten und dabei Wert auf Transparenz, Datenschutz, klare Grenzen und eine ästhetische Nutzererfahrung legen.",
  },
  {
    q: "Kann Hermetia bei wichtigen Lebensentscheidungen helfen?",
    a: "Hermetia kann Fragen, Muster und innere Prioritäten sichtbar machen. Es entscheidet aber nicht für dich und ersetzt keine professionelle Beratung bei medizinischen, psychologischen, rechtlichen oder finanziellen Themen.",
  },
  {
    q: "Ist Hermetia eher für Anfänger oder Fortgeschrittene?",
    a: "Beides. Anfänger erhalten eine verständliche Synthese, ohne Fachwissen zu brauchen. Fortgeschrittene können tiefer in Systeme, Konvergenz und Vergleichsseiten einsteigen.",
  },
  {
    q: "Warum sollte ich mich anmelden?",
    a: "Die Website erklärt das Konzept allgemein. Erst im Onboarding entsteht deine persönliche Seelenkarte aus deinen Daten. Der kostenlose Einstieg zeigt erste Kernthemen, bevor du über ein bezahltes Modell entscheidest.",
  },
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    path: paths.anwendungsfaelle,
    title: "Hermetia Anwendungsfälle — Selbstreflexion, Beziehungen, Berufung und Alltag",
    description:
      "Für wen Hermetia geeignet ist, welche Situationen besonders gut passen und wo die Grenzen liegen: Anwendungsfälle, Pro/Contra und FAQ.",
  });
}

export default async function UseCasesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const pageUrl = `${siteUrl}/${locale}${paths.anwendungsfaelle}/`;

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: "Hermetia Anwendungsfälle",
            description: "Selbstreflexion, Beziehungen, Berufung, Tagesimpulse und klare Grenzen.",
            locale,
            url: pageUrl,
            about: "Hermetia Anwendungsfälle",
            image: `${siteUrl}/images/hermetia/library-of-self-profile.png`,
          }),
          faqSchema(faq),
          breadcrumbSchema([
            { name: "Hermetia", url: `${siteUrl}/${locale}/` },
            { name: "Anwendungsfälle", url: pageUrl },
          ]),
        ]}
      />
      <Header locale={locale} current="anwendungsfaelle" />
      <main>
        <section className="pb-10 pt-16">
          <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_.95fr]">
            <div>
              <span className="kicker">Anwendungsfälle</span>
              <h1 className="mt-3 text-[clamp(34px,5.5vw,54px)] leading-[1.08]">Wofür Hermetia besonders gut geeignet ist.</h1>
              <p className="lead mt-5 max-w-[720px]">
                Hermetia ist kein Orakel, keine Diagnose und kein Ersatz für Beratung. Es ist ein Reflexionssystem für Menschen, die sich selbst, ihre Beziehungen und ihre inneren Muster tiefer verstehen wollen und dafür einen ruhigen, transparenten Einstieg suchen.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "use-cases-hero" })}>Profil kostenlos starten</a>
                <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.preise)}>Modelle vergleichen</a>
              </div>
            </div>
            <figure className="m-0 overflow-hidden rounded-card border border-sand bg-white shadow-soft">
              <img src="/images/hermetia/library-of-self-profile.png" alt="Eine ruhige Bibliothek als Bild für Selbstreflexion und Hermetia Anwendungsfälle" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="px-5 py-4 text-[14px] text-pflaume/80">
                Die beste Anwendung beginnt nicht mit einem Versprechen, sondern mit einer guten Frage: Was erkenne ich wieder?
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="bg-creme-tief py-16">
          <div className="wrap">
            <div className="mb-9 max-w-[760px]">
              <span className="kicker">Situationen</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Sechs Wege, Hermetia sinnvoll zu nutzen.</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                Die Website ist als Ressource aufgebaut. Die App macht daraus persönliche Erfahrung: kostenlos starten, erste Kernthemen sehen und danach entscheiden, ob mehr Tiefe sinnvoll ist.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map((item) => (
                <article key={item.title} className="card flex flex-col">
                  <span className="chip w-fit">{item.tag}</span>
                  <h3 className="mt-4 text-[22px]">{item.title}</h3>
                  <p className="muted mt-3 flex-1 text-[15px] leading-relaxed">{item.text}</p>
                  <a className="note mt-5 font-semibold text-gold no-underline" href={localePath(locale, item.href)}>{item.cta} →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap grid gap-6 lg:grid-cols-2">
            <div className="rounded-card border border-salbei/40 bg-white p-7 shadow-soft">
              <span className="chip">Gute Passung</span>
              <h2 className="mt-4 text-[clamp(26px,3.5vw,34px)]">Hermetia passt gut, wenn...</h2>
              <ul className="mt-5 flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
                {goodFit.map((item) => <li key={item}>✓ {item}</li>)}
              </ul>
            </div>
            <div className="rounded-card border border-altrosa/35 bg-altrosa/10 p-7">
              <span className="chip chip-rose">Grenzen</span>
              <h2 className="mt-4 text-[clamp(26px,3.5vw,34px)]">Hermetia passt nicht, wenn...</h2>
              <ul className="mt-5 flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
                {badFit.map((item) => <li key={item}>× {item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-aubergine py-16 text-white">
          <div className="wrap grid items-center gap-8 lg:grid-cols-[1fr_.9fr]">
            <div>
              <span className="kicker text-gold-weich">Nächster Schritt</span>
              <h2 className="mt-3 text-[clamp(28px,4vw,40px)] text-white">Prüfe Hermetia an deinem eigenen Profil.</h2>
              <p className="mt-4 max-w-[640px] text-[17px] leading-[1.85] text-[#e9dcf2]">
                Allgemeine Inhalte können Orientierung geben. Der Aha-Moment entsteht, wenn Hermetia deine eigenen Daten berechnet und die ersten Themen sichtbar macht. Der Einstieg bleibt kostenlos.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-on-dark btn-lg" href={startUrl(locale, { source: "use-cases-final" })}>Profil kostenlos starten</a>
                <a className="btn btn-ghost btn-lg border-white/30 text-white hover:bg-white/10" href={localePath(locale, paths.about)}>Über Hermetia lesen</a>
              </div>
            </div>
            <div className="rounded-card border border-gold-weich/20 bg-white/8 p-6">
              <h3 className="text-[24px] text-white">Vom Content zur App</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#e9dcf2]">
                Diese Seite hilft bei der Entscheidung, ob Hermetia grundsätzlich passt. Das Onboarding macht daraus eine persönliche Seelenkarte. Bezahlte Modelle öffnen erst danach die tiefere Begleitung.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap">
            <div className="mb-8 text-center">
              <span className="kicker">FAQ</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,36px)]">Häufige Fragen zu Anwendungsfällen</h2>
            </div>
            <Faq items={faq} />
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
