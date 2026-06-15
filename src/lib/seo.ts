import type { Metadata } from "next";
import { hasEditorialTranslation, locales, siteUrl, type Locale } from "@/i18n/config";

type LocalSeoCopy = {
  fallbackNote: string;
  pages: Record<string, string>;
};

const localizedSeoFallbacks: Partial<Record<Locale, LocalSeoCopy>> = {
  fr: {
    fallbackNote: "La version éditoriale longue est en préparation; la structure, la langue et l'accès à l'app sont déjà disponibles.",
    pages: {
      "/": "Carte de l'âme",
      "/leistungen": "Fonctionnalités",
      "/systeme": "Systèmes",
      "/so-entsteht-dein-profil": "Méthode",
      "/preise": "Tarifs",
      "/faq": "FAQ",
      "/sprachen": "Langues européennes",
      "/freigaben": "Validations de lancement",
      "/glossar": "Glossaire",
      "/wissen": "Ressources",
      "/vergleiche": "Comparaisons",
      "/anwendungsfaelle": "Cas d'utilisation",
      "/kostenlos-vs-premium": "Gratuit ou Premium",
      "/daten-und-sicherheit": "Données et sécurité",
      "/profil-starten": "Commencer le profil",
      "/ueber-hermetia": "À propos de Hermetia",
      "/konvergenz-engine": "Moteur de convergence",
      "/seelenkarte": "Carte de l'âme",
      "/tagesimpulse": "Impulsions quotidiennes",
      "/beziehungen": "Relations",
    },
  },
  es: {
    fallbackNote: "La versión editorial completa está en preparación; la estructura, el idioma y el acceso a la app ya están disponibles.",
    pages: {
      "/": "Mapa del alma",
      "/leistungen": "Funciones",
      "/systeme": "Sistemas",
      "/so-entsteht-dein-profil": "Método",
      "/preise": "Precios",
      "/faq": "FAQ",
      "/sprachen": "Idiomas europeos",
      "/freigaben": "Validaciones de lanzamiento",
      "/glossar": "Glosario",
      "/wissen": "Recursos",
      "/vergleiche": "Comparaciones",
      "/anwendungsfaelle": "Casos de uso",
      "/kostenlos-vs-premium": "Gratis o Premium",
      "/daten-und-sicherheit": "Datos y seguridad",
      "/profil-starten": "Empezar perfil",
      "/ueber-hermetia": "Sobre Hermetia",
      "/konvergenz-engine": "Motor de convergencia",
      "/seelenkarte": "Mapa del alma",
      "/tagesimpulse": "Impulsos diarios",
      "/beziehungen": "Relaciones",
    },
  },
  it: {
    fallbackNote: "La versione editoriale completa è in preparazione; struttura, lingua e accesso all'app sono già disponibili.",
    pages: {
      "/": "Mappa dell'anima",
      "/leistungen": "Funzionalità",
      "/systeme": "Sistemi",
      "/so-entsteht-dein-profil": "Metodo",
      "/preise": "Prezzi",
      "/faq": "FAQ",
      "/sprachen": "Lingue europee",
      "/freigaben": "Approvazioni di lancio",
      "/glossar": "Glossario",
      "/wissen": "Risorse",
      "/vergleiche": "Confronti",
      "/anwendungsfaelle": "Casi d'uso",
      "/kostenlos-vs-premium": "Gratis o Premium",
      "/daten-und-sicherheit": "Dati e sicurezza",
      "/profil-starten": "Iniziare il profilo",
      "/ueber-hermetia": "Informazioni su Hermetia",
      "/konvergenz-engine": "Motore di convergenza",
      "/seelenkarte": "Mappa dell'anima",
      "/tagesimpulse": "Impulsi quotidiani",
      "/beziehungen": "Relazioni",
    },
  },
  nl: {
    fallbackNote: "De volledige redactionele versie is in voorbereiding; structuur, taal en app-toegang zijn al beschikbaar.",
    pages: {
      "/": "Zielenkaart",
      "/leistungen": "Functies",
      "/systeme": "Systemen",
      "/so-entsteht-dein-profil": "Methode",
      "/preise": "Prijzen",
      "/faq": "FAQ",
      "/sprachen": "Europese talen",
      "/freigaben": "Lanceringstoetsen",
      "/glossar": "Woordenlijst",
      "/wissen": "Kennis",
      "/vergleiche": "Vergelijkingen",
      "/anwendungsfaelle": "Gebruikssituaties",
      "/kostenlos-vs-premium": "Gratis of Premium",
      "/daten-und-sicherheit": "Gegevens en veiligheid",
      "/profil-starten": "Profiel starten",
      "/ueber-hermetia": "Over Hermetia",
      "/konvergenz-engine": "Convergentie-engine",
      "/seelenkarte": "Zielenkaart",
      "/tagesimpulse": "Dagimpulsen",
      "/beziehungen": "Relaties",
    },
  },
  pl: {
    fallbackNote: "Pełna wersja redakcyjna jest w przygotowaniu; struktura, język i dostęp do aplikacji są już dostępne.",
    pages: {
      "/": "Mapa duszy",
      "/leistungen": "Funkcje",
      "/systeme": "Systemy",
      "/so-entsteht-dein-profil": "Metoda",
      "/preise": "Ceny",
      "/faq": "FAQ",
      "/sprachen": "Języki europejskie",
      "/freigaben": "Zatwierdzenia startowe",
      "/glossar": "Glosariusz",
      "/wissen": "Wiedza",
      "/vergleiche": "Porównania",
      "/anwendungsfaelle": "Przypadki użycia",
      "/kostenlos-vs-premium": "Darmowe czy Premium",
      "/daten-und-sicherheit": "Dane i bezpieczeństwo",
      "/profil-starten": "Rozpocznij profil",
      "/ueber-hermetia": "O Hermetia",
      "/konvergenz-engine": "Silnik konwergencji",
      "/seelenkarte": "Mapa duszy",
      "/tagesimpulse": "Codzienne impulsy",
      "/beziehungen": "Relacje",
    },
  },
  pt: {
    fallbackNote: "A versão editorial completa está em preparação; a estrutura, o idioma e o acesso à app já estão disponíveis.",
    pages: {
      "/": "Mapa da alma",
      "/leistungen": "Funcionalidades",
      "/systeme": "Sistemas",
      "/so-entsteht-dein-profil": "Método",
      "/preise": "Preços",
      "/faq": "FAQ",
      "/sprachen": "Línguas europeias",
      "/freigaben": "Validações de lançamento",
      "/glossar": "Glossário",
      "/wissen": "Recursos",
      "/vergleiche": "Comparações",
      "/anwendungsfaelle": "Casos de uso",
      "/kostenlos-vs-premium": "Grátis ou Premium",
      "/daten-und-sicherheit": "Dados e segurança",
      "/profil-starten": "Começar perfil",
      "/ueber-hermetia": "Sobre a Hermetia",
      "/konvergenz-engine": "Motor de convergência",
      "/seelenkarte": "Mapa da alma",
      "/tagesimpulse": "Impulsos diários",
      "/beziehungen": "Relações",
    },
  },
  bg: {
    fallbackNote: "Пълната редакционна версия е в подготовка; структурата, езикът и достъпът до приложението вече са налични.",
    pages: { "/": "Карта на душата", "/leistungen": "Функции", "/systeme": "Системи", "/so-entsteht-dein-profil": "Метод", "/preise": "Цени", "/faq": "FAQ", "/sprachen": "Европейски езици", "/freigaben": "Проверки за стартиране", "/glossar": "Речник", "/wissen": "Ресурси", "/vergleiche": "Сравнения", "/anwendungsfaelle": "Случаи на употреба", "/kostenlos-vs-premium": "Безплатно или Premium", "/ueber-hermetia": "За Hermetia", "/konvergenz-engine": "Двигател на конвергенцията", "/seelenkarte": "Карта на душата", "/tagesimpulse": "Дневни импулси", "/beziehungen": "Връзки" },
  },
  hr: {
    fallbackNote: "Cjelovita urednička verzija je u pripremi; struktura, jezik i pristup aplikaciji već su dostupni.",
    pages: { "/": "Karta duše", "/leistungen": "Funkcije", "/systeme": "Sustavi", "/so-entsteht-dein-profil": "Metoda", "/preise": "Cijene", "/faq": "FAQ", "/sprachen": "Europski jezici", "/freigaben": "Provjere za lansiranje", "/glossar": "Pojmovnik", "/wissen": "Resursi", "/vergleiche": "Usporedbe", "/anwendungsfaelle": "Slučajevi uporabe", "/kostenlos-vs-premium": "Besplatno ili Premium", "/ueber-hermetia": "O Hermetiji", "/konvergenz-engine": "Motor konvergencije", "/seelenkarte": "Karta duše", "/tagesimpulse": "Dnevni poticaji", "/beziehungen": "Odnosi" },
  },
  cs: {
    fallbackNote: "Úplná redakční verze se připravuje; struktura, jazyk a přístup do aplikace jsou již dostupné.",
    pages: { "/": "Mapa duše", "/leistungen": "Funkce", "/systeme": "Systémy", "/so-entsteht-dein-profil": "Metoda", "/preise": "Ceny", "/faq": "FAQ", "/sprachen": "Evropské jazyky", "/freigaben": "Kontroly spuštění", "/glossar": "Slovník", "/wissen": "Zdroje", "/vergleiche": "Srovnání", "/anwendungsfaelle": "Případy použití", "/kostenlos-vs-premium": "Zdarma nebo Premium", "/ueber-hermetia": "O Hermetii", "/konvergenz-engine": "Konvergenční engine", "/seelenkarte": "Mapa duše", "/tagesimpulse": "Denní impulzy", "/beziehungen": "Vztahy" },
  },
  da: {
    fallbackNote: "Den fulde redaktionelle version er under forberedelse; struktur, sprog og appadgang er allerede tilgængelige.",
    pages: { "/": "Sjælekort", "/leistungen": "Funktioner", "/systeme": "Systemer", "/so-entsteht-dein-profil": "Metode", "/preise": "Priser", "/faq": "FAQ", "/sprachen": "Europæiske sprog", "/freigaben": "Lanceringstjek", "/glossar": "Ordliste", "/wissen": "Ressourcer", "/vergleiche": "Sammenligninger", "/anwendungsfaelle": "Anvendelser", "/kostenlos-vs-premium": "Gratis eller Premium", "/ueber-hermetia": "Om Hermetia", "/konvergenz-engine": "Konvergensmotor", "/seelenkarte": "Sjælekort", "/tagesimpulse": "Daglige impulser", "/beziehungen": "Relationer" },
  },
  et: {
    fallbackNote: "Täielik toimetatud versioon on ettevalmistamisel; struktuur, keel ja ligipääs rakendusele on juba olemas.",
    pages: { "/": "Hingekaart", "/leistungen": "Funktsioonid", "/systeme": "Süsteemid", "/so-entsteht-dein-profil": "Meetod", "/preise": "Hinnad", "/faq": "KKK", "/sprachen": "Euroopa keeled", "/freigaben": "Käivituse kontrollid", "/glossar": "Sõnastik", "/wissen": "Ressursid", "/vergleiche": "Võrdlused", "/anwendungsfaelle": "Kasutusjuhud", "/kostenlos-vs-premium": "Tasuta või Premium", "/ueber-hermetia": "Hermetiast", "/konvergenz-engine": "Konvergentsimootor", "/seelenkarte": "Hingekaart", "/tagesimpulse": "Päevased impulsid", "/beziehungen": "Suhted" },
  },
  fi: {
    fallbackNote: "Täysi toimituksellinen versio on valmisteilla; rakenne, kieli ja pääsy sovellukseen ovat jo saatavilla.",
    pages: { "/": "Sielukartta", "/leistungen": "Ominaisuudet", "/systeme": "Järjestelmät", "/so-entsteht-dein-profil": "Menetelmä", "/preise": "Hinnat", "/faq": "UKK", "/sprachen": "Euroopan kielet", "/freigaben": "Julkaisun tarkistukset", "/glossar": "Sanasto", "/wissen": "Resurssit", "/vergleiche": "Vertailut", "/anwendungsfaelle": "Käyttötapaukset", "/kostenlos-vs-premium": "Ilmainen vai Premium", "/ueber-hermetia": "Tietoa Hermetiasta", "/konvergenz-engine": "Konvergenssimoottori", "/seelenkarte": "Sielukartta", "/tagesimpulse": "Päivittäiset impulssit", "/beziehungen": "Suhteet" },
  },
  el: {
    fallbackNote: "Η πλήρης επιμελημένη έκδοση προετοιμάζεται· η δομή, η γλώσσα και η πρόσβαση στην εφαρμογή είναι ήδη διαθέσιμες.",
    pages: { "/": "Χάρτης ψυχής", "/leistungen": "Λειτουργίες", "/systeme": "Συστήματα", "/so-entsteht-dein-profil": "Μέθοδος", "/preise": "Τιμές", "/faq": "FAQ", "/sprachen": "Ευρωπαϊκές γλώσσες", "/freigaben": "Έλεγχοι κυκλοφορίας", "/glossar": "Γλωσσάρι", "/wissen": "Πόροι", "/vergleiche": "Συγκρίσεις", "/anwendungsfaelle": "Περιπτώσεις χρήσης", "/kostenlos-vs-premium": "Δωρεάν ή Premium", "/ueber-hermetia": "Σχετικά με τη Hermetia", "/konvergenz-engine": "Μηχανή σύγκλισης", "/seelenkarte": "Χάρτης ψυχής", "/tagesimpulse": "Ημερήσιες ωθήσεις", "/beziehungen": "Σχέσεις" },
  },
  hu: {
    fallbackNote: "A teljes szerkesztett változat előkészítés alatt áll; a struktúra, a nyelv és az apphozzáférés már elérhető.",
    pages: { "/": "Lélektérkép", "/leistungen": "Funkciók", "/systeme": "Rendszerek", "/so-entsteht-dein-profil": "Módszer", "/preise": "Árak", "/faq": "GYIK", "/sprachen": "Európai nyelvek", "/freigaben": "Indítási ellenőrzések", "/glossar": "Szószedet", "/wissen": "Források", "/vergleiche": "Összehasonlítások", "/anwendungsfaelle": "Felhasználási esetek", "/kostenlos-vs-premium": "Ingyenes vagy Premium", "/ueber-hermetia": "A Hermetiáról", "/konvergenz-engine": "Konvergenciamotor", "/seelenkarte": "Lélektérkép", "/tagesimpulse": "Napi impulzusok", "/beziehungen": "Kapcsolatok" },
  },
  ga: {
    fallbackNote: "Tá an leagan iomlán eagarthóireachta á ullmhú; tá an struchtúr, an teanga agus rochtain ar an aip ar fáil cheana.",
    pages: { "/": "Léarscáil anama", "/leistungen": "Gnéithe", "/systeme": "Córais", "/so-entsteht-dein-profil": "Modh", "/preise": "Praghsanna", "/faq": "FAQ", "/sprachen": "Teangacha Eorpacha", "/freigaben": "Seiceálacha seolta", "/glossar": "Gluais", "/wissen": "Acmhainní", "/vergleiche": "Comparáidí", "/anwendungsfaelle": "Cásanna úsáide", "/kostenlos-vs-premium": "Saor in aisce nó Premium", "/ueber-hermetia": "Maidir le Hermetia", "/konvergenz-engine": "Inneall cóineasaithe", "/seelenkarte": "Léarscáil anama", "/tagesimpulse": "Spreagthaí laethúla", "/beziehungen": "Caidrimh" },
  },
  lv: {
    fallbackNote: "Pilnā redakcionālā versija tiek gatavota; struktūra, valoda un piekļuve lietotnei jau ir pieejama.",
    pages: { "/": "Dvēseles karte", "/leistungen": "Funkcijas", "/systeme": "Sistēmas", "/so-entsteht-dein-profil": "Metode", "/preise": "Cenas", "/faq": "FAQ", "/sprachen": "Eiropas valodas", "/freigaben": "Palaišanas pārbaudes", "/glossar": "Glosārijs", "/wissen": "Resursi", "/vergleiche": "Salīdzinājumi", "/anwendungsfaelle": "Lietošanas gadījumi", "/kostenlos-vs-premium": "Bezmaksas vai Premium", "/ueber-hermetia": "Par Hermetia", "/konvergenz-engine": "Konverģences dzinējs", "/seelenkarte": "Dvēseles karte", "/tagesimpulse": "Dienas impulsi", "/beziehungen": "Attiecības" },
  },
  lt: {
    fallbackNote: "Pilna redakcinė versija ruošiama; struktūra, kalba ir prieiga prie programos jau pasiekiama.",
    pages: { "/": "Sielos žemėlapis", "/leistungen": "Funkcijos", "/systeme": "Sistemos", "/so-entsteht-dein-profil": "Metodas", "/preise": "Kainos", "/faq": "DUK", "/sprachen": "Europos kalbos", "/freigaben": "Paleidimo patikros", "/glossar": "Žodynas", "/wissen": "Ištekliai", "/vergleiche": "Palyginimai", "/anwendungsfaelle": "Naudojimo atvejai", "/kostenlos-vs-premium": "Nemokama ar Premium", "/ueber-hermetia": "Apie Hermetia", "/konvergenz-engine": "Konvergencijos variklis", "/seelenkarte": "Sielos žemėlapis", "/tagesimpulse": "Dienos impulsai", "/beziehungen": "Santykiai" },
  },
  mt: {
    fallbackNote: "Il-verżjoni editorjali sħiħa qed titħejja; l-istruttura, il-lingwa u l-aċċess għall-app diġà huma disponibbli.",
    pages: { "/": "Mappa tar-ruħ", "/leistungen": "Funzjonijiet", "/systeme": "Sistemi", "/so-entsteht-dein-profil": "Metodu", "/preise": "Prezzijiet", "/faq": "FAQ", "/sprachen": "Lingwi Ewropej", "/freigaben": "Kontrolli tat-tnedija", "/glossar": "Glossarju", "/wissen": "Riżorsi", "/vergleiche": "Paraguni", "/anwendungsfaelle": "Każijiet ta' użu", "/kostenlos-vs-premium": "B'xejn jew Premium", "/ueber-hermetia": "Dwar Hermetia", "/konvergenz-engine": "Magna tal-konverġenza", "/seelenkarte": "Mappa tar-ruħ", "/tagesimpulse": "Impulsi ta' kuljum", "/beziehungen": "Relazzjonijiet" },
  },
  ro: {
    fallbackNote: "Versiunea editorială completă este în pregătire; structura, limba și accesul la aplicație sunt deja disponibile.",
    pages: { "/": "Harta sufletului", "/leistungen": "Funcționalități", "/systeme": "Sisteme", "/so-entsteht-dein-profil": "Metodă", "/preise": "Prețuri", "/faq": "FAQ", "/sprachen": "Limbi europene", "/freigaben": "Verificări de lansare", "/glossar": "Glosar", "/wissen": "Resurse", "/vergleiche": "Comparații", "/anwendungsfaelle": "Cazuri de utilizare", "/kostenlos-vs-premium": "Gratuit sau Premium", "/ueber-hermetia": "Despre Hermetia", "/konvergenz-engine": "Motor de convergență", "/seelenkarte": "Harta sufletului", "/tagesimpulse": "Impulsuri zilnice", "/beziehungen": "Relații" },
  },
  sk: {
    fallbackNote: "Úplná redakčná verzia sa pripravuje; štruktúra, jazyk a prístup do aplikácie sú už dostupné.",
    pages: { "/": "Mapa duše", "/leistungen": "Funkcie", "/systeme": "Systémy", "/so-entsteht-dein-profil": "Metóda", "/preise": "Ceny", "/faq": "FAQ", "/sprachen": "Európske jazyky", "/freigaben": "Kontroly spustenia", "/glossar": "Slovník", "/wissen": "Zdroje", "/vergleiche": "Porovnania", "/anwendungsfaelle": "Prípady použitia", "/kostenlos-vs-premium": "Zadarmo alebo Premium", "/ueber-hermetia": "O Hermetii", "/konvergenz-engine": "Konvergenčný engine", "/seelenkarte": "Mapa duše", "/tagesimpulse": "Denné impulzy", "/beziehungen": "Vzťahy" },
  },
  sl: {
    fallbackNote: "Celotna uredniška različica je v pripravi; struktura, jezik in dostop do aplikacije so že na voljo.",
    pages: { "/": "Zemljevid duše", "/leistungen": "Funkcije", "/systeme": "Sistemi", "/so-entsteht-dein-profil": "Metoda", "/preise": "Cene", "/faq": "FAQ", "/sprachen": "Evropski jeziki", "/freigaben": "Pregledi za zagon", "/glossar": "Slovar", "/wissen": "Viri", "/vergleiche": "Primerjave", "/anwendungsfaelle": "Primeri uporabe", "/kostenlos-vs-premium": "Brezplačno ali Premium", "/ueber-hermetia": "O Hermetii", "/konvergenz-engine": "Konvergenčni motor", "/seelenkarte": "Zemljevid duše", "/tagesimpulse": "Dnevni impulzi", "/beziehungen": "Odnosi" },
  },
  sv: {
    fallbackNote: "Den fullständiga redaktionella versionen förbereds; struktur, språk och appåtkomst är redan tillgängliga.",
    pages: {
      "/": "Själskarta",
      "/leistungen": "Funktioner",
      "/systeme": "System",
      "/so-entsteht-dein-profil": "Metod",
      "/preise": "Priser",
      "/faq": "FAQ",
      "/sprachen": "Europeiska språk",
      "/freigaben": "Lanseringsgodkännanden",
      "/glossar": "Ordlista",
      "/wissen": "Kunskap",
      "/vergleiche": "Jämförelser",
      "/anwendungsfaelle": "Användningsfall",
      "/kostenlos-vs-premium": "Gratis eller Premium",
      "/daten-und-sicherheit": "Data och säkerhet",
      "/profil-starten": "Starta profil",
      "/ueber-hermetia": "Om Hermetia",
      "/konvergenz-engine": "Konvergensmotor",
      "/seelenkarte": "Själskarta",
      "/tagesimpulse": "Dagliga impulser",
      "/beziehungen": "Relationer",
    },
  },
};

function localizedFallbackMetadata(locale: Locale, path: string, title: string, description: string) {
  if (hasEditorialTranslation(locale)) return { title, description };
  const clean = path === "/" ? "/" : path.replace(/\/$/, "");
  const copy = localizedSeoFallbacks[locale];
  if (!copy) return { title, description };
  const page = copy.pages[clean];
  if (!page) return { title, description };
  return {
    title: `${page} | Hermetia`,
    description: `${page} bei Hermetia. ${copy.fallbackNote}`,
  };
}

// Baut konsistente Metadaten inkl. canonical + hreflang-Alternates für jede Seite.
// path = Pfad OHNE Locale, z. B. "/preise" oder "" für die Startseite.
export function buildMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const clean = path === "/" ? "" : path.replace(/\/$/, "");
  const canonical = `${siteUrl}/${locale}${clean}/`;
  const meta = localizedFallbackMetadata(locale, path, title, description);

  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `${siteUrl}/${l}${clean}/`;
  languages["x-default"] = `${siteUrl}/de${clean}/`;

  const ogImage = `${siteUrl}/og/default.jpg`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical, languages },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName: "Hermetia",
      locale,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: "Hermetia" }],
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: [ogImage] },
  };
}
