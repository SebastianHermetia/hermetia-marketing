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
  bg: { title: "Редакционната версия е в подготовка", body: "Този език вече е технически наличен. До окончателната редакция някои области все още използват немското основно съдържание." },
  hr: { title: "Urednička verzija je u pripremi", body: "Ovaj jezik je već tehnički dostupan. Do završne redakcije neki dijelovi još koriste njemački master sadržaj." },
  cs: { title: "Redakční verze se připravuje", body: "Tento jazyk je již technicky dostupný. Do finální redakce některé části stále používají německý master obsah." },
  da: { title: "Redaktionel version under forberedelse", body: "Dette sprog er allerede teknisk tilgængeligt. Indtil den endelige redaktion bruger nogle områder stadig det tyske masterindhold." },
  et: { title: "Toimetatud versioon on ettevalmistamisel", body: "See keel on tehniliselt juba saadaval. Kuni lõpliku toimetuseni kasutavad mõned osad veel saksa põhisisu." },
  fi: { title: "Toimituksellinen versio on valmisteilla", body: "Tämä kieli on jo teknisesti saatavilla. Lopulliseen toimitukseen asti osa alueista käyttää vielä saksankielistä pääsisältöä." },
  el: { title: "Η επιμελημένη έκδοση προετοιμάζεται", body: "Αυτή η γλώσσα είναι ήδη τεχνικά διαθέσιμη. Μέχρι την τελική επιμέλεια, ορισμένες ενότητες χρησιμοποιούν ακόμη το γερμανικό κύριο περιεχόμενο." },
  hu: { title: "A szerkesztett verzió előkészítés alatt", body: "Ez a nyelv technikailag már elérhető. A végleges szerkesztésig egyes részek még a német mesteranyagot használják." },
  ga: { title: "Tá an leagan eagarthóireachta á ullmhú", body: "Tá an teanga seo ar fáil go teicniúil cheana. Go dtí an t-athbhreithniú deiridh, úsáideann cuid de na réimsí an máistirábhar Gearmáinise fós." },
  lv: { title: "Redakcionālā versija tiek gatavota", body: "Šī valoda jau ir tehniski pieejama. Līdz galīgajai redakcijai dažas sadaļas joprojām izmanto vācu pamattekstu." },
  lt: { title: "Redakcinė versija ruošiama", body: "Ši kalba jau techniškai prieinama. Iki galutinės redakcijos kai kurios sritys vis dar naudoja vokišką pagrindinį turinį." },
  mt: { title: "Il-verżjoni editorjali qed titħejja", body: "Din il-lingwa hija diġà disponibbli teknikament. Sal-verżjoni finali, xi oqsma għadhom jużaw il-kontenut ewlieni Ġermaniż." },
  ro: { title: "Versiunea editorială este în pregătire", body: "Această limbă este deja disponibilă tehnic. Până la revizuirea finală, unele zone folosesc încă conținutul master german." },
  sk: { title: "Redakčná verzia sa pripravuje", body: "Tento jazyk je už technicky dostupný. Do finálnej redakcie niektoré časti stále používajú nemecký master obsah." },
  sl: { title: "Uredniška različica je v pripravi", body: "Ta jezik je že tehnično na voljo. Do končne redakcije nekateri deli še uporabljajo nemško glavno vsebino." },
  sv: { title: "Redaktionell version förbereds", body: "Detta språk är redan tekniskt tillgängligt. Fram till slutlig redaktion använder vissa delar fortfarande det tyska masterinnehållet." },
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
