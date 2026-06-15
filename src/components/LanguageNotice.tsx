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
  fr: {
    title: "Version éditoriale en préparation",
    body: "Cette langue est déjà disponible techniquement. Jusqu'à la validation finale, certaines zones utilisent encore le contenu maître allemand.",
  },
  es: {
    title: "Versión editorial en preparación",
    body: "Este idioma ya está disponible técnicamente. Hasta la revisión final, algunas áreas siguen usando el contenido maestro alemán.",
  },
  it: {
    title: "Versione editoriale in preparazione",
    body: "Questa lingua è già disponibile tecnicamente. Fino alla revisione finale, alcune aree usano ancora il contenuto master tedesco.",
  },
  nl: {
    title: "Redactionele versie in voorbereiding",
    body: "Deze taal is technisch al beschikbaar. Tot de finale redactionele goedkeuring gebruiken sommige delen nog de Duitse mastercontent.",
  },
  pl: {
    title: "Wersja redakcyjna w przygotowaniu",
    body: "Ten język jest już technicznie dostępny. Do czasu finalnej redakcji niektóre obszary nadal używają niemieckiej treści źródłowej.",
  },
  pt: {
    title: "Versão editorial em preparação",
    body: "Este idioma já está tecnicamente disponível. Até à revisão final, algumas áreas ainda usam o conteúdo mestre alemão.",
  },
};

export function LanguageNotice({ locale }: { locale: Locale }) {
  if (hasEditorialTranslation(locale)) return null;
  const text = copy[locale as keyof typeof copy] ?? copy.de;

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
