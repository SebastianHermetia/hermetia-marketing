import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppCta } from "@/components/AppCta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, articleSchema, faqSchema } from "@/components/JsonLd";
import { type Locale, siteUrl } from "@/i18n/config";
import { tr, trItems, trObject } from "@/i18n/html-translations";
import { buildMetadata } from "@/lib/seo";
import { localePath, paths } from "@/lib/links";
import { getGlossaryThemeTerms, glossaryThemeIntro, glossaryThemes } from "@/content/system-library";
import { localizeKnowledgeItem } from "@/i18n/localized-content";

const routePath = paths.glossarThemen;
const heroImage = "/images/hermetia/library-of-self-profile.png";

const faq = [
  { q: "Warum ein thematisches Glossar?", a: "Weil Astrakey Begriffe aus verschiedenen Welten verbindet. Die thematische Ansicht zeigt Zusammenhaenge, damit Methode, Systemsprachen und Vertrauensbegriffe nicht durcheinander geraten." },
  { q: "Ersetzt diese Seite die einzelnen Glossarbegriffe?", a: "Nein. Sie ist eine Uebersicht. Jeder Begriff hat zusaetzlich eine eigene Detailseite." },
  { q: "Sind die Systembegriffe Originaltexte der jeweiligen Schulen?", a: "Nein. Astrakey nutzt eigene redaktionelle Erklaerungen und respektiert geschuetzte Texte, Marken und Traditionen." },
  { q: "Warum stehen Datenschutzbegriffe im Glossar?", a: "Weil Astrakey mit sensiblen Selbstbeschreibungen arbeitet. Begriffe wie Einwilligung und Datenminimierung gehoeren deshalb zur Produktlogik, nicht nur ins Kleingedruckte." },
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  return buildMetadata({ locale: loc, path: routePath, title: tr(loc, glossaryThemeIntro.seoTitle), description: tr(loc, glossaryThemeIntro.seoDescription) });
}

export default async function GlossaryThemesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const intro = trObject(locale, glossaryThemeIntro);
  const themes = trItems(locale, glossaryThemes);
  const localizedFaq = trItems(locale, faq);

  return (
    <>
      <JsonLd data={[articleSchema({ headline: intro.seoTitle, description: intro.seoDescription, locale, url: `${siteUrl}/${locale}${routePath}/`, about: intro.title, image: `${siteUrl}${heroImage}` }), faqSchema(localizedFaq)]} />
      <Header locale={locale} current="glossar" />
      <main>
        <section className="pb-10 pt-14">
          <div className="wrap grid items-center gap-9 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <Breadcrumbs locale={locale} items={[{ label: tr(locale, "Glossar"), href: paths.glossar }, { label: intro.eyebrow }]} />
              <span className="kicker mt-5 block">{intro.eyebrow}</span>
              <h1 className="mt-3 text-[clamp(32px,5vw,50px)] leading-[1.08]">{intro.title}</h1>
              <p className="lead mt-5 max-w-[680px]">{intro.lead}</p>
              <p className="note mt-4 max-w-[680px]">{intro.trustline}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-primary btn-lg" href={localePath(locale, paths.glossar)}>{tr(locale, "Alphabetisches Glossar")}</a>
                <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.systemeBibliothek)}>{tr(locale, "Systeme ansehen")}</a>
              </div>
            </div>
            <figure className="overflow-hidden rounded-card border border-sand bg-white shadow-soft">
              <img src={heroImage} alt={tr(locale, "Astrakey Glossar nach Themen")} width={1200} height={780} className="h-full max-h-[520px] w-full object-cover" />
            </figure>
          </div>
        </section>
        <section className="py-8">
          <div className="wrap grid gap-8 lg:grid-cols-[260px_1fr]">
            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-card border border-sand bg-white p-5 shadow-soft">
                <p className="kicker mb-3">{tr(locale, "Auf dieser Seite")}</p>
                <nav className="flex flex-col gap-2 text-[14px]">
                  <a href="#kurz" className="text-tinte/70 no-underline hover:text-aubergine">{tr(locale, "Kurz gesagt")}</a>
                  {themes.map((theme) => (
                    <a key={theme.key} href={`#${theme.key}`} className="text-tinte/70 no-underline hover:text-aubergine">{theme.title}</a>
                  ))}
                </nav>
              </div>
            </aside>
            <article className="min-w-0">
              <div id="kurz" className="rounded-card border border-gold/30 bg-gold-weich/25 p-6">
                <span className="kicker">{tr(locale, "Kurz gesagt")}</span>
                <p className="mt-2 text-[18px] leading-relaxed text-aubergine">{intro.answer}</p>
              </div>
              <div className="mt-10 flex flex-col gap-12">
                {themes.map((theme, index) => (
                  <section key={theme.key} id={theme.key} className="scroll-mt-24">
                    <span className="kicker">{tr(locale, "Themencluster")}</span>
                    <h2 className="mt-3 text-[clamp(24px,3vw,32px)]">{theme.title}</h2>
                    <p className="muted mt-3 text-[17px] leading-[1.85]">{theme.intro}</p>
                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                      {getGlossaryThemeTerms(glossaryThemes[index]).map((rawTerm) => {
                        const term = localizeKnowledgeItem(rawTerm, locale, "glossary");
                        return (
                          <Link key={term.slug} href={localePath(locale, `${paths.glossar}/${term.slug}`)} className="rounded-card border border-sand bg-white p-5 no-underline shadow-soft transition-transform hover:-translate-y-1">
                            <h3 className="text-[18px]">{tr(locale, term.term)}</h3>
                            <p className="muted mt-2 text-[14.5px] leading-relaxed">{tr(locale, term.definition)}</p>
                          </Link>
                        );
                      })}
                    </div>
                  </section>
                ))}
              </div>
              <div className="mt-12">
                <AppCta locale={locale} title={tr(locale, "Erlebe die Begriffe in deinem eigenen Profil.")} text={tr(locale, "Astrakey macht abstrakte Begriffe greifbar, wenn sie mit deiner Seelenkarte verbunden sind.")} source="glossary-themes-final" />
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
