import { hasEditorialTranslation, localeNames, locales, type Locale } from "./config";

export type TranslationStatus = "editorial" | "fallback";

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
    return {
      locale,
      name: localeNames[locale],
      status: editorial ? "editorial" : "fallback",
      label: editorial ? "Redaktionell freigegeben" : "Technisch live, redaktionell in Vorbereitung",
      description: editorial
        ? "Diese Sprachfassung ist redaktionell gepflegt und ohne Fallback-Hinweis live."
        : "Diese Sprachroute ist technisch live. Bis zur finalen Übersetzung zeigt sie teilweise deutschen Mastercontent mit sichtbarem Hinweis.",
    };
  });
}

export function translationSummary() {
  const statuses = getLocaleStatuses();
  return {
    total: statuses.length,
    editorial: statuses.filter((entry) => entry.status === "editorial").length,
    fallback: statuses.filter((entry) => entry.status === "fallback").length,
  };
}
