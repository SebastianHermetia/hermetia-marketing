import type { Locale } from "@/i18n/config";
import { startUrl, localePath, paths } from "@/lib/links";

export function AppCta({
  locale,
  title,
  text,
  source,
  secondary = true,
}: {
  locale: Locale;
  title: string;
  text: string;
  source: string;
  secondary?: boolean;
}) {
  const url = startUrl(locale, { source, medium: "cta", campaign: "content" });
  const labels =
    locale === "de"
      ? { primary: "Profil kostenlos starten", secondary: "Modelle vergleichen" }
      : { primary: "Start profile for free", secondary: "Compare plans" };
  return (
    <div className="rounded-card bg-gradient-to-br from-aubergine to-pflaume px-7 py-10 text-center text-white">
      <h2 className="mx-auto max-w-[720px] text-[clamp(25px,3.5vw,34px)] text-white">{title}</h2>
      <p className="mx-auto my-4 max-w-[560px] text-[#e9dcf2]">{text}</p>
      <div className="flex flex-wrap justify-center gap-3">
        <a className="btn btn-on-dark btn-lg" href={url}>{labels.primary}</a>
        {secondary ? <a className="btn btn-ghost btn-lg border-white/30 text-white hover:bg-white/10" href={localePath(locale, paths.preise)}>{labels.secondary}</a> : null}
      </div>
    </div>
  );
}
