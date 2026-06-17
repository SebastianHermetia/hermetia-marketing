import type { Metadata } from "next";
import { type Locale, siteUrl } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { startUrl, paths, localePath } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/JsonLd";
import { LocalizedEditorialShell } from "@/components/LocalizedEditorialShell";

const questionGroupsDe = [
  {
    kicker: "Einstieg",
    title: "Fragen vor der Anmeldung",
    text: "Diese Antworten helfen dir, den kostenlosen Start richtig einzuordnen: Was passiert im Onboarding, welche Daten werden gebraucht und wann entsteht der erste persönliche Aha-Moment?",
    href: paths.onboarding,
    cta: "Onboarding ansehen",
  },
  {
    kicker: "Methode",
    title: "Fragen zu Systemen und Konvergenz",
    text: "Hermetia verbindet 31 Systeme nicht als lose Sammlung, sondern über Systemfamilien, Gewichtung und Konvergenz. Die FAQ erklärt, warum mehrere Perspektiven stärker sind als ein einzelnes Label.",
    href: paths.methodik,
    cta: "Methode verstehen",
  },
  {
    kicker: "Vertrauen",
    title: "Fragen zu Datenschutz, AI und Grenzen",
    text: "Spirituelle Profildaten sind sensibel. Du bekommst klare Antworten zu Einwilligung, Löschung, AI-Transparenz, IP-Schutz, fehlenden Diagnosen und rechtlich vorsichtiger Sprache.",
    href: paths.datenSicherheit,
    cta: "Datenschutz lesen",
  },
];

const questionGroupsEn = [
  {
    kicker: "Start",
    title: "Questions before signup",
    text: "These answers help you understand the free start: what happens in onboarding, which data is needed and when the first personal aha moment appears.",
    href: paths.onboarding,
    cta: "View onboarding",
  },
  {
    kicker: "Method",
    title: "Questions about systems and convergence",
    text: "Hermetia connects 31 systems through system families, weighting and convergence, not as a loose collection. The FAQ explains why several perspectives are stronger than one label.",
    href: paths.methodik,
    cta: "Understand method",
  },
  {
    kicker: "Trust",
    title: "Questions about privacy, AI and limits",
    text: "Spiritual profile data is sensitive. You get clear answers about consent, deletion, AI transparency, IP care, no diagnoses and legally careful language.",
    href: paths.datenSicherheit,
    cta: "Read data protection",
  },
];

const extraFaqDe = [
  {
    q: "Was ist Hermetia in einem Satz?",
    a: "Hermetia ist eine Plattform für spirituelle und psychologische Selbstreflexion, die aus Geburtsdaten, Selbstauskunft und 31 Systemperspektiven eine persönliche Seelenkarte und begleitende Impulse erstellt.",
  },
  {
    q: "Warum sollte ich mich anmelden, wenn die Website schon viel erklärt?",
    a: "Die Website erklärt Methode, Systeme und Grenzen allgemein. Erst im Onboarding entsteht deine persönliche Seelenkarte. Genau dort siehst du, ob die Sprache und die ersten Kernthemen wirklich mit dir resonieren.",
  },
  {
    q: "Welche Daten brauche ich für den Start?",
    a: "Für den Einstieg werden typischerweise Geburtsdatum, Geburtsort und soweit vorhanden Geburtszeit genutzt. Ergänzende Selbstauskünfte können das Profil erden. Hermetia kennzeichnet, wenn eine ungenaue Geburtszeit Aussagen unsicherer macht.",
  },
  {
    q: "Kann ich Hermetia ohne genaue Geburtszeit nutzen?",
    a: "Ja. Einige Systeme werden mit exakter Geburtszeit präziser, aber viele Bereiche bleiben nutzbar. Hermetia kennzeichnet transparent, welche Aussagen sicherer und welche vorsichtiger zu lesen sind.",
  },
  {
    q: "Was bedeutet Konvergenz in Hermetia?",
    a: "Konvergenz bedeutet, dass mehrere unabhängige Systemfamilien auf ähnliche Themen zeigen. Hermetia zählt verwandte Quellen nicht einfach doppelt, sondern prüft, ob ein Thema aus unterschiedlichen Blickwinkeln getragen wird.",
  },
  {
    q: "Ist Hermetia wissenschaftlich bewiesen?",
    a: "Hermetia verbindet psychologische Fragebögen, symbolische Systeme und spirituelle Deutungssprache. Es ist kein wissenschaftliches Diagnoseinstrument, sondern ein Reflexionsangebot mit transparenten Grenzen.",
  },
  {
    q: "Trifft Hermetia Entscheidungen für mich?",
    a: "Nein. Hermetia kann Muster, Fragen und Spannungsfelder sichtbar machen. Entscheidungen bleiben bei dir und sollten bei wichtigen medizinischen, psychologischen, rechtlichen oder finanziellen Themen professionell begleitet werden.",
  },
  {
    q: "Warum gibt es bezahlte Modelle?",
    a: "Der kostenlose Einstieg zeigt erste Resonanz. Bezahlte Modelle öffnen mehr Ebenen, Tagesimpulse, Journaling, Vollprofil-Buch, Companion-Dialoge oder Beziehungsprofile. Der Wert liegt in Tiefe und langfristiger Begleitung.",
  },
  {
    q: "Kann ich meine Daten löschen oder exportieren?",
    a: "Persönliche Daten bleiben exportierbar und löschbar. Gerade bei sensiblen spirituellen Profilen sind klare Einwilligung, Zweckbindung und Löschwege zentrale Anforderungen.",
  },
  {
    q: "Verwendet Hermetia fremde geschützte Deutungstexte?",
    a: "Hermetia verwendet eigene Formulierungen und keine proprietären Systemtexte, Kartentexte oder Fragebogenitems Dritter. Systembezüge werden beschreibend und transformativ formuliert.",
  },
  {
    q: "Sind Beziehungsprofile heimlich möglich?",
    a: "Nein. Beziehungsauswertungen betreffen eine zweite Person und brauchen informierte Einwilligung. Solche Profile gehören nur in einen Kontext mit klarer Zustimmung und transparenter Zweckbindung.",
  },
  {
    q: "Ist Hermetia Therapie oder psychologische Beratung?",
    a: "Nein. Hermetia ist Inspiration zur Selbstreflexion. Die Plattform stellt keine Diagnosen, behandelt keine Erkrankungen und ersetzt keine medizinische, psychologische oder therapeutische Beratung.",
  },
];

const extraFaqEn = [
  {
    q: "What is Hermetia in one sentence?",
    a: "Hermetia is a platform for spiritual and psychological self-reflection that creates a personal soul map and guiding impulses from birth data, self-reporting and 31 system perspectives.",
  },
  {
    q: "Why should I sign up if the website already explains so much?",
    a: "The website explains method, systems and limits in general. Only onboarding creates your personal soul map from your data. That is where you see whether the language and first core themes truly resonate with you.",
  },
  {
    q: "Which data do I need to start?",
    a: "The start typically uses date of birth, place of birth and, if available, birth time. Additional self-reporting can ground the profile. Hermetia marks when an imprecise birth time makes statements less certain.",
  },
  {
    q: "Can I use Hermetia without an exact birth time?",
    a: "Yes. Some systems become more precise with exact birth time, but many areas remain usable. Hermetia clearly marks which statements are more reliable and which should be read more carefully.",
  },
  {
    q: "What does convergence mean in Hermetia?",
    a: "Convergence means that several independent system families point to similar themes. Hermetia does not simply count related sources twice, but checks whether a theme is supported from different perspectives.",
  },
  {
    q: "Is Hermetia scientifically proven?",
    a: "Hermetia combines psychological questionnaires, symbolic systems and spiritual interpretation language. It is not a scientific diagnostic tool, but a reflection offer with transparent limits.",
  },
  {
    q: "Does Hermetia make decisions for me?",
    a: "No. Hermetia can make patterns, questions and fields of tension visible. Decisions remain yours and should be professionally supported for important medical, psychological, legal or financial topics.",
  },
  {
    q: "Why are there paid models?",
    a: "The free start shows first resonance. Paid models open more layers, daily impulses, journaling, the full profile book, Companion dialogues or relationship profiles. The value lies in depth and long-term companionship.",
  },
  {
    q: "Can I delete or export my data?",
    a: "Personal data remains exportable and deletable. Clear consent, purpose limitation and deletion paths are central requirements, especially for sensitive spiritual profiles.",
  },
  {
    q: "Does Hermetia use protected third-party interpretation texts?",
    a: "Hermetia uses original wording and no proprietary system texts, card texts or questionnaire items from third parties. System references are descriptive and transformative.",
  },
  {
    q: "Are secret relationship profiles possible?",
    a: "No. Relationship readings concern a second person and need informed consent. Such profiles belong only in a context with clear permission and transparent purpose limitation.",
  },
  {
    q: "Is Hermetia therapy or psychological counselling?",
    a: "No. Hermetia is inspiration for self-reflection. The platform does not diagnose, treat illnesses or replace medical, psychological or therapeutic counselling.",
  },
];

const allFaq = (baseItems: { q: string; a: string }[], locale: Locale) => [...baseItems, ...(locale === "de" ? extraFaqDe : extraFaqEn)];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  const title = locale === "de" ? "FAQ — Alle Fragen zu Hermetia" : "FAQ — All your questions about Hermetia";
  const desc = locale === "de"
    ? "Seelenkarte, Geburtszeit, Datenschutz, Preise und Kündigung: alle häufigen Fragen zu Hermetia, klar beantwortet."
    : "Soul map, birth time, privacy, pricing and cancellation: all frequently asked questions about Hermetia, answered clearly.";
  return buildMetadata({ locale: locale as Locale, path: paths.faq, title, description: desc });
}

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  if (locale !== "de" && locale !== "en") return <LocalizedEditorialShell locale={locale} routePath="/faq" />;
  const t = getDictionary(locale);
  const items = allFaq([...t.home.faq.items, ...t.preise.faq], locale);
  const pageUrl = `${siteUrl}/${locale}${paths.faq}/`;
  const questionGroups = locale === "de" ? questionGroupsDe : questionGroupsEn;

  return (
    <>
      <JsonLd
        data={[
          faqSchema(items),
          articleSchema({
            headline: "Hermetia FAQ",
            description: "Antworten zu Seelenkarte, Onboarding, Systemen, Datenschutz, Preisen, AI und rechtlichen Grenzen.",
            locale,
            url: pageUrl,
            about: "Hermetia FAQ",
            image: `${siteUrl}/images/hermetia/library-of-self-profile.png`,
          }),
          breadcrumbSchema([
            { name: "Hermetia", url: `${siteUrl}/${locale}/` },
            { name: "FAQ", url: pageUrl },
          ]),
        ]}
      />
      <Header locale={locale} current="faq" />

      <section className="pb-8 pt-16">
        <div className="wrap flex flex-col items-center text-center">
          <span className="kicker mb-3.5">{t.footer.faq}</span>
          <h1 className="max-w-[680px] text-[clamp(32px,5vw,44px)]">{t.home.faq.title}</h1>
          <p className="lead mt-4 max-w-[760px]">
            Klare Antworten für Menschen, die Hermetia verstehen möchten, bevor sie ihr Profil starten: Methode, Datenschutz, Preise, AI, Beziehungsprofile und die bewussten Grenzen der Deutung.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "faq-hero" })}>{t.cta.startFree}</a>
            <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.leistungen)}>Leistungen ansehen</a>
          </div>
        </div>
      </section>

      <section className="bg-creme-tief py-14">
        <div className="wrap">
          <div className="mb-8 max-w-[760px]">
            <span className="kicker">Antwortbereiche</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,36px)]">Die wichtigsten Fragen vor dem ersten Profil.</h2>
            <p className="muted mt-4 text-[17px] leading-[1.85]">
              Die FAQ beantwortet Suchfragen direkt, baut Vertrauen auf und führt dich dann an die richtige Stelle: Start, Methode, Datenschutz oder Preise.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {questionGroups.map((group) => (
              <article key={group.title} className="card flex flex-col">
                <span className="chip w-fit">{group.kicker}</span>
                <h3 className="mt-4 text-[23px]">{group.title}</h3>
                <p className="muted mt-3 flex-1 text-[15.5px] leading-relaxed">{group.text}</p>
                <a className="note mt-5 font-semibold text-gold no-underline" href={localePath(locale, group.href)}>{group.cta} →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="wrap">
          <div className="mb-8 text-center">
            <span className="kicker">Alle Antworten</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,36px)]">FAQ zu Hermetia, Preisen, Daten und Grenzen</h2>
          </div>
          <Faq items={items} />
        </div>
      </section>

      <section className="bg-aubergine py-16 text-white">
        <div className="wrap grid items-center gap-8 lg:grid-cols-[1fr_.9fr]">
          <div>
            <span className="kicker text-gold-weich">Nächster Schritt</span>
            <h2 className="mt-3 text-[clamp(28px,4vw,40px)] text-white">Die beste Antwort entsteht in deinem eigenen Profil.</h2>
            <p className="mt-4 max-w-[680px] text-[17px] leading-[1.85] text-[#e9dcf2]">
              Allgemeine FAQ können Orientierung geben. Ob Hermetia wirklich passt, zeigt sich erst, wenn deine Seelenkarte berechnet ist. Der Einstieg bleibt kostenlos und führt erst danach zu einer bewussten Modellwahl.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn btn-on-dark btn-lg" href={startUrl(locale, { source: "faq-final" })}>{t.cta.startFree}</a>
              <a className="btn btn-ghost btn-lg border-white/30 text-white hover:bg-white/10" href={localePath(locale, paths.preise)}>Preise vergleichen</a>
            </div>
          </div>
          <div className="rounded-card border border-gold-weich/20 bg-white/8 p-6">
            <h3 className="text-[24px] text-white">Was die FAQ bewusst nicht tut</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#e9dcf2]">
              Sie ersetzt keine Rechtsberatung, keine Therapie und keine Produkt-Endfreigabe. Sie schafft verständliche Orientierung und macht transparent, wo Hermetia inspiriert und wo professionelle Beratung nötig bleibt.
            </p>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </>
  );
}
