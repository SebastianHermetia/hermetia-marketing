import { hasEditorialTranslation, localeNames, type Locale } from "@/i18n/config";

const copy = {
  de: {
    title: "Sprachfassung in redaktioneller Vorbereitung",
    body: "Diese Sprache ist technisch bereits verfügbar. Bis die finale redaktionelle Übersetzung freigegeben ist, zeigen einzelne Bereiche den deutschen Mastercontent.",
  },
  en: {
    title: "Editorial translation in progress",
    body: "This language is already technically available. Until the final editorial translation is approved, some areas use the German master content.",
  },
};

export function LanguageNotice({ locale }: { locale: Locale }) {
  if (hasEditorialTranslation(locale)) return null;
  const text = locale === "en" ? copy.en : copy.de;

  return (
    <div className="border-b border-gold/25 bg-gold-weich/35">
      <div className="wrap flex flex-col gap-1 py-3 text-[13px] text-aubergine sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold">{text.title}</p>
        <p className="text-aubergine/75">
          {localeNames[locale]} · {text.body}
        </p>
      </div>
    </div>
  );
}
