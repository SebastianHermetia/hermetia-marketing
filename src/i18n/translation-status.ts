import { hasEditorialTranslation, hasUiLocalization, localeNames, locales, type Locale } from "./config";

export type TranslationStatus = "editorial" | "ui" | "fallback";

export type LocaleStatus = {
  locale: Locale;
  name: string;
  status: TranslationStatus;
  label: string;
  description: string;
};

export function getLocaleStatuses(): LocaleStatus[] {
  return locales.map((locale) => {
    const editorial = hasEditorialTranslation(locale);
    const ui = hasUiLocalization(locale);
    return {
      locale,
      name: localeNames[locale],
      status: editorial ? "editorial" : ui ? "ui" : "fallback",
      label: editorial
        ? "Redaktionell freigegeben"
        : ui
          ? "UI lokalisiert, Longform in Vorbereitung"
          : "Technisch live, redaktionell in Vorbereitung",
      description: editorial
        ? "Diese Sprachfassung ist redaktionell gepflegt und ohne Fallback-Hinweis live."
        : ui
          ? "Navigation, CTAs und globale UI-Texte sind lokalisiert. Lange Inhalte bleiben bis zur finalen Redaktion sichtbar als Mastercontent gekennzeichnet."
          : "Diese Sprachroute ist technisch live. Bis zur finalen Übersetzung zeigt sie teilweise deutschen Mastercontent mit sichtbarem Hinweis.",
    };
  });
}

export function translationSummary() {
  const statuses = getLocaleStatuses();
  return {
    total: statuses.length,
    editorial: statuses.filter((entry) => entry.status === "editorial").length,
    ui: statuses.filter((entry) => entry.status === "ui").length,
    fallback: statuses.filter((entry) => entry.status === "fallback").length,
  };
}
