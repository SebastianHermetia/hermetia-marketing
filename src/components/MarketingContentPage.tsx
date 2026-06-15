import type { Locale } from "@/i18n/config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { AppCta } from "@/components/AppCta";
import type { ContentPage } from "@/content/marketing";

export function MarketingContentPage({ locale, page }: { locale: Locale; page: ContentPage }) {
  return (
    <>
      <Header locale={locale} current={page.navKey} />
      <section className="pb-10 pt-14">
        <div className="wrap grid items-center gap-9 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <span className="kicker mb-3 block">{page.eyebrow}</span>
            <h1 className="text-[clamp(32px,5vw,50px)] leading-[1.08]">{page.title}</h1>
            <p className="lead mt-5 max-w-[680px]">{page.lead}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn btn-primary btn-lg" href="#start">Profil starten</a>
              <a className="btn btn-ghost btn-lg" href="#inhalt">Inhalt lesen</a>
            </div>
          </div>
          <figure className="overflow-hidden rounded-card border border-sand bg-white shadow-soft">
            <img src={page.image} alt={page.imageAlt} width={1200} height={780} className="h-full max-h-[520px] w-full object-cover" />
          </figure>
        </div>
      </section>

      <section id="inhalt" className="py-8">
        <div className="wrap grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-card border border-sand bg-white p-5 shadow-soft">
              <p className="kicker mb-3">Auf dieser Seite</p>
              <nav className="flex flex-col gap-2 text-[14px]">
                {page.sections.map((s) => (
                  <a key={s.title} href={`#${slugify(s.title)}`} className="text-tinte/70 no-underline hover:text-aubergine">{s.title}</a>
                ))}
              </nav>
            </div>
          </aside>
          <article className="min-w-0">
            <div className="rounded-card border border-gold/30 bg-gold-weich/25 p-6">
              <span className="kicker">Kurz gesagt</span>
              <p className="mt-2 text-[18px] leading-relaxed text-aubergine">{page.answer}</p>
            </div>
            <div className="mt-10 flex flex-col gap-10">
              {page.sections.map((s, idx) => (
                <section key={s.title} id={slugify(s.title)} className="scroll-mt-24">
                  <h2 className="text-[clamp(24px,3vw,32px)]">{s.title}</h2>
                  <p className="muted mt-3 text-[17px] leading-[1.85]">{s.body}</p>
                  {idx === 1 ? (
                    <div className="mt-8">
                      <AppCta locale={locale} title={page.ctaTitle} text={page.ctaText} source={`${page.slug}-inline-${idx}`} />
                    </div>
                  ) : null}
                </section>
              ))}
            </div>
            <div className="mt-12">
              <h2 className="mb-4 text-[clamp(24px,3vw,32px)]">Häufige Fragen</h2>
              <Faq items={page.faq} />
            </div>
            <div id="start" className="mt-12">
              <AppCta locale={locale} title={page.ctaTitle} text={page.ctaText} source={`${page.slug}-final`} />
            </div>
          </article>
        </div>
      </section>
      <Footer locale={locale} />
    </>
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
