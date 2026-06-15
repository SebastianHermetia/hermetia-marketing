import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, siteUrl, type Locale } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { paths } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppCta } from "@/components/AppCta";
import { Faq } from "@/components/Faq";
import { JsonLd, articleSchema, faqSchema } from "@/components/JsonLd";
import { articles } from "@/content/marketing";

export function generateStaticParams() {
  return locales.flatMap((locale) => articles.map((article) => ({ locale, slug: article.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return buildMetadata({ locale: locale as Locale, path: `${paths.wissen}/${slug}`, title: article.seoTitle, description: article.description });
}

export default async function ArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params;
  const locale = raw as Locale;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  const sections = articleSections(article);
  const faq = articleFaq(article);
  return (
    <>
      <JsonLd data={[articleSchema({ headline: article.seoTitle, description: article.description, locale, url: `${siteUrl}/${locale}${paths.wissen}/${article.slug}/`, about: article.title, image: `${siteUrl}/images/hermetia/alchemical-listening-room.png` }), faqSchema(faq)]} />
      <Header locale={locale} current="wissen" />
      <article className="py-16">
        <div className="wrap max-w-[820px]">
          <span className="kicker">Wissen</span>
          <h1 className="mt-3 text-[clamp(32px,5vw,46px)]">{article.title}</h1>
          <p className="lead mt-5">{article.description}</p>
          <div className="mt-8 rounded-card border border-gold/30 bg-gold-weich/25 p-6">
            <span className="kicker">Kurz gesagt</span>
            <p className="mt-2 text-[18px] leading-relaxed text-aubergine">{article.body}</p>
          </div>
          <div className="mt-10 flex flex-col gap-10">
            {sections.map((section, idx) => (
              <section key={section.title}>
                <h2 className="text-[clamp(24px,3vw,32px)]">{section.title}</h2>
                <p className="muted mt-3 text-[17px] leading-[1.9]">{section.body}</p>
                {idx === 1 ? (
                  <div className="mt-8">
                    <AppCta locale={locale} title="Mach aus dem Thema dein eigenes Profil." text="Hermetia verbindet Wissen mit deiner Seelenkarte, damit aus Theorie ein persönlicher Aha-Moment wird." source={`article-${article.slug}-inline`} />
                  </div>
                ) : null}
              </section>
            ))}
          </div>
          <div className="mt-12">
            <h2 className="mb-4 text-[clamp(24px,3vw,32px)]">Häufige Fragen</h2>
            <Faq items={faq} />
          </div>
          <div className="mt-12">
            <AppCta locale={locale} title="Mach aus Wissen deinen eigenen Aha-Moment." text="Starte dein Hermetia-Profil und verbinde die Theorie mit deiner persönlichen Seelenkarte." source={`article-${article.slug}`} />
          </div>
        </div>
      </article>
      <Footer locale={locale} />
    </>
  );
}

function articleSections(article: (typeof articles)[number]) {
  return [
    {
      title: "Warum dieses Thema für Hermetia wichtig ist",
      body: `${article.title} ist mehr als ein einzelner Suchbegriff. Das Thema berührt die zentrale Frage, wie Menschen spirituelle Systeme, Selbstauskunft und AI-Deutung nutzen können, ohne sich selbst in ein starres Label zu pressen. Hermetia behandelt solche Themen deshalb immer als Orientierung: hilfreich genug, um Sprache für Muster zu finden, aber offen genug, damit der Nutzer die Deutung prüfen, verwerfen oder vertiefen kann.`,
    },
    {
      title: "Wie Hermetia daraus eine persönliche Erfahrung macht",
      body: `Der Unterschied zwischen einem Ratgebertext und Hermetia liegt in der Verbindung mit dem eigenen Profil. Auf der Website erklärt ${article.title} die Grundlagen. In der App werden passende Signale mit Geburtsdaten, Systemfamilien, Fragebogenantworten, Tagesimpulsen und Konvergenz gewichtet. Dadurch wird aus einem allgemeinen Thema eine persönliche Reflexion, die nachvollziehbar bleibt und nicht als Diagnose oder Vorhersage auftritt.`,
    },
    {
      title: "Chancen, Grenzen und verantwortungsvolle Nutzung",
      body: `Der Nutzen entsteht, wenn ein Thema Resonanz auslöst und zu einer besseren Frage führt: Was erkenne ich wieder? Was stimmt nicht? Was will ich im Alltag anders beobachten? Die Grenze ist ebenso wichtig: Hermetia ersetzt keine medizinische, psychologische, therapeutische, rechtliche oder finanzielle Beratung. Die Inhalte sollen Neugier wecken, aber keine Abhängigkeit erzeugen und keine Angst als Conversion-Hebel nutzen.`,
    },
    {
      title: "Der nächste sinnvolle Schritt",
      body: `Nach dem Lesen ist der stärkste nächste Schritt nicht, noch mehr abstrakte Definitionen zu sammeln, sondern das Thema am eigenen Profil zu prüfen. Genau dafür führt Hermetia vom Wissensbereich in das Onboarding: kostenlos starten, erste Kernthemen sehen, Vertrauen in Methode und Datenschutz gewinnen und danach bewusst entscheiden, ob ein bezahltes Modell mit tieferen Ebenen, Tagesbegleitung oder Beziehungsauswertungen sinnvoll ist.`,
    },
  ];
}

function articleFaq(article: (typeof articles)[number]) {
  return [
    {
      q: `Ist ${article.title} bei Hermetia eine feste Wahrheit über mich?`,
      a: "Nein. Hermetia formuliert Themen als Reflexionsangebot. Entscheidend ist, ob eine Aussage nachvollziehbar ist, Resonanz erzeugt und im Alltag hilfreich geprüft werden kann.",
    },
    {
      q: "Warum führt der Artikel zur Anmeldung?",
      a: "Weil der eigentliche Nutzen entsteht, wenn das Wissen mit deiner eigenen Seelenkarte verbunden wird. Der Einstieg ist als persönlicher Aha-Moment gedacht, nicht als aggressive Paywall.",
    },
    {
      q: "Ist der Inhalt medizinische oder therapeutische Beratung?",
      a: "Nein. Hermetia bietet Inspiration zur Selbstreflexion und ersetzt keine professionelle Beratung, Diagnose oder Behandlung.",
    },
  ];
}
