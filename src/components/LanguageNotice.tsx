import { hasEditorialTranslation, localeNames, type Locale } from "@/i18n/config";

const copy = {
  de: {
    title: "Sprachfassung in redaktioneller Vorbereitung",
    body: "Diese Sprache ist technisch bereits verfügbar. Bis die finale redaktionelle Übersetzung freigegeben ist, nutzen einzelne Bereiche englische Editorial-Inhalte.",
  },
  en: {
    title: "Editorial translation in progress",
    body: "This language is already technically available. Until the final editorial translation is approved, some areas use English editorial content.",
  },
  fr: {
    title: "Version éditoriale en préparation",
    body: "Cette langue est déjà disponible techniquement. Jusqu'à la validation finale, certaines zones utilisent encore le contenu éditorial anglais.",
  },
  es: {
    title: "Versión editorial en preparación",
    body: "Este idioma ya está disponible técnicamente. Hasta la revisión final, algunas áreas usan contenido editorial en inglés.",
  },
  it: {
    title: "Versione editoriale in preparazione",
    body: "Questa lingua è già disponibile tecnicamente. Fino alla revisione finale, alcune aree usano contenuti editoriali in inglese.",
  },
  nl: {
    title: "Redactionele versie in voorbereiding",
    body: "Deze taal is technisch al beschikbaar. Tot de finale redactionele goedkeuring gebruiken sommige delen Engelse redactionele inhoud.",
  },
  pl: {
    title: "Wersja redakcyjna w przygotowaniu",
    body: "Ten język jest już technicznie dostępny. Do czasu finalnej redakcji niektóre obszary używają angielskich treści redakcyjnych.",
  },
  pt: {
    title: "Versão editorial em preparação",
    body: "Este idioma já está tecnicamente disponível. Até à revisão final, algumas áreas usam conteúdo editorial em inglês.",
  },
  bg: { title: "Редакционната версия е в подготовка", body: "Този език вече е технически наличен. До окончателната редакция някои области използват английско редакционно съдържание." },
  hr: { title: "Urednička verzija je u pripremi", body: "Ovaj jezik je već tehnički dostupan. Do završne redakcije neki dijelovi koriste engleski urednički sadržaj." },
  cs: { title: "Redakční verze se připravuje", body: "Tento jazyk je již technicky dostupný. Do finální redakce některé části používají anglický redakční obsah." },
  da: { title: "Redaktionel version under forberedelse", body: "Dette sprog er allerede teknisk tilgængeligt. Indtil den endelige redaktion bruger nogle områder engelsk redaktionelt indhold." },
  et: { title: "Toimetatud versioon on ettevalmistamisel", body: "See keel on tehniliselt juba saadaval. Kuni lõpliku toimetuseni kasutavad mõned osad ingliskeelset toimetatud sisu." },
  fi: { title: "Toimituksellinen versio on valmisteilla", body: "Tämä kieli on jo teknisesti saatavilla. Lopulliseen toimitukseen asti osa alueista käyttää englanninkielistä toimituksellista sisältöä." },
  el: { title: "Η επιμελημένη έκδοση προετοιμάζεται", body: "Αυτή η γλώσσα είναι ήδη τεχνικά διαθέσιμη. Μέχρι την τελική επιμέλεια, ορισμένες ενότητες χρησιμοποιούν αγγλικό επιμελημένο περιεχόμενο." },
  hu: { title: "A szerkesztett verzió előkészítés alatt", body: "Ez a nyelv technikailag már elérhető. A végleges szerkesztésig egyes részek angol szerkesztett tartalmat használnak." },
  ga: { title: "Tá an leagan eagarthóireachta á ullmhú", body: "Tá an teanga seo ar fáil go teicniúil cheana. Go dtí an t-athbhreithniú deiridh, úsáideann cuid de na réimsí ábhar eagarthóireachta Béarla." },
  lv: { title: "Redakcionālā versija tiek gatavota", body: "Šī valoda jau ir tehniski pieejama. Līdz galīgajai redakcijai dažas sadaļas izmanto angļu redakcionālo saturu." },
  lt: { title: "Redakcinė versija ruošiama", body: "Ši kalba jau techniškai prieinama. Iki galutinės redakcijos kai kurios sritys naudoja anglišką redakcinį turinį." },
  mt: { title: "Il-verżjoni editorjali qed titħejja", body: "Din il-lingwa hija diġà disponibbli teknikament. Sal-verżjoni finali, xi oqsma jużaw kontenut editorjali bl-Ingliż." },
  ro: { title: "Versiunea editorială este în pregătire", body: "Această limbă este deja disponibilă tehnic. Până la revizuirea finală, unele zone folosesc conținut editorial în engleză." },
  sk: { title: "Redakčná verzia sa pripravuje", body: "Tento jazyk je už technicky dostupný. Do finálnej redakcie niektoré časti používajú anglický redakčný obsah." },
  sl: { title: "Uredniška različica je v pripravi", body: "Ta jezik je že tehnično na voljo. Do končne redakcije nekateri deli uporabljajo angleško uredniško vsebino." },
  sv: { title: "Redaktionell version förbereds", body: "Detta språk är redan tekniskt tillgängligt. Fram till slutlig redaktion använder vissa delar engelskt redaktionellt innehåll." },
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

