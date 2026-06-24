import type { Metadata } from "next";
import { type Locale } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { localePath, loginUrl, paths } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AccessForm } from "@/components/BetaAccessForm";

const copy = {
  de: {
    seoTitle: "Profilstart zu Astrakey erhalten",
    seoDescription: "Starte dein Astrakey-Profil oder hinterlasse deine E-Mail, falls dein Zugang noch nicht freigeschaltet ist.",
    kicker: "Profilstart",
    title: "Starte dein Profil, sobald dein Zugang freigeschaltet ist.",
    intro: "Wenn deine E-Mail bereits freigegeben ist, gelangst du direkt zum Profilstart. Wenn nicht, speichern wir deine Anfrage für die nächste Freigaberunde.",
    bullets: [
      "öffentliche Website lesen und Methode verstehen",
      "Zugang mit deiner E-Mail prüfen",
      "bei Freigabe direkt in das Onboarding starten",
      "sonst eine saubere Anfrage hinterlassen",
    ],
    returning: "Du hast bereits ein Konto?",
    login: "Zum Login",
    legal: ["Datenschutz", "Widerruf", "AGB"],
    form: {
      emailLabel: "E-Mail für den Profilstart",
      emailPlaceholder: "du@example.com",
      submit: "Zugang prüfen",
      loading: "Prüfe Zugang...",
      approved: "Freigabe gefunden. Du wirst weitergeleitet.",
      requested: "Danke. Deine Anfrage ist gespeichert und wartet auf Freigabe.",
      error: "Die Anfrage konnte gerade nicht verarbeitet werden. Bitte versuche es erneut.",
      privacy: "Wir nutzen deine E-Mail nur, um deine Zugangs-Anfrage zu prüfen und dich zum Zugang zu kontaktieren.",
    },
  },
  en: {
    seoTitle: "Start your Astrakey profile",
    seoDescription: "Start your Astrakey profile or leave your email if your access has not been approved yet.",
    kicker: "Profile start",
    title: "Start your profile as soon as your access is approved.",
    intro: "If your email has already been approved, you will continue straight to profile setup. If not, we will save your request for the next approval round.",
    bullets: [
      "read the public website and understand the method",
      "Check access with your email",
      "continue directly to onboarding when approved",
      "otherwise leave a clear access request",
    ],
    returning: "Already have an account?",
    login: "Go to login",
    legal: ["Privacy", "Withdrawal", "Terms"],
    form: {
      emailLabel: "Email for profile start",
      emailPlaceholder: "you@example.com",
      submit: "Check access",
      loading: "Checking access...",
      approved: "Approval found. Redirecting you now.",
      requested: "Thank you. Your request has been saved and is waiting for approval.",
      error: "Your request could not be processed right now. Please try again.",
      privacy: "We use your email only to review your access request and contact you about access.",
    },
  },
};

function pageCopy(locale: Locale) {
  return locale === "de" ? copy.de : copy.en;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const c = pageCopy(locale);
  return buildMetadata({
    locale,
    path: paths.betaAccess,
    title: c.seoTitle,
    description: c.seoDescription,
  });
}

export default async function AccessPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = pageCopy(locale);
  return (
    <>
      <Header locale={locale} current="beta" />
      <main>
        <section className="section">
          <div className="wrap grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="eyebrow">{c.kicker}</p>
              <h1 className="h1 mt-4 max-w-3xl">{c.title}</h1>
              <p className="lead mt-5 max-w-2xl">{c.intro}</p>
              <div className="mt-7 grid gap-3">
                {c.bullets.map((item) => (
                  <div key={item} className="flex gap-3 text-tinte/80">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-tinte/65">
                {c.returning} <a className="link" href={loginUrl(locale, { source: "beta-returning-user" })}>{c.login}</a>
              </p>
            </div>
            <div>
              <AccessForm locale={locale} copy={c.form} />
              <div className="mt-5 rounded-2xl border border-sand bg-creme p-5 text-sm text-tinte/70">
                <a className="link" href={localePath(locale, paths.datenschutz)}>{c.legal[0]}</a>
                <span className="mx-2">·</span>
                <a className="link" href={localePath(locale, paths.widerruf)}>{c.legal[1]}</a>
                <span className="mx-2">·</span>
                <a className="link" href={localePath(locale, paths.agb)}>{c.legal[2]}</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}


