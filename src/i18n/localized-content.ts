import type { Locale } from "./config";
import type { ContentPage, FaqItem } from "@/content/marketing";
import type { SystemEntry, SystemText } from "@/content/systems";

type LocalePack = {
  soulMap: string;
  convergence: string;
  profile: string;
  startFree: string;
  learnMore: string;
  readMore: string;
  faq: string;
  overview: string;
  method: string;
  limits: string;
  privacy: string;
  premium: string;
  daily: string;
  relationship: string;
  book: string;
  title: string;
  lead: string;
  body: string;
  question: string;
  answer: string;
  section: string;
  ctaTitle: string;
  ctaText: string;
  seoDescription: string;
  safeNote: string;
  systemIntro: string;
  comparisonIntro: string;
  articleIntro: string;
  glossaryIntro: string;
  proof: string;
  consent: string;
};

export const localizedPacks: Record<Exclude<Locale, "de" | "en">, LocalePack> = {
  fr: {
    soulMap: "carte de l'âme",
    convergence: "convergence",
    profile: "profil",
    startFree: "Commencer gratuitement",
    learnMore: "En savoir plus",
    readMore: "Lire la suite",
    faq: "Questions fréquentes",
    overview: "Vue d'ensemble",
    method: "Méthode",
    limits: "Limites",
    privacy: "Données et sécurité",
    premium: "Profondeur premium",
    daily: "Impulsion du jour",
    relationship: "Relation",
    book: "Livre de profil",
    title: "Astrakey relie systèmes, données et réflexion personnelle",
    lead: "Cette page explique Astrakey dans une langue éditoriale locale, avec une méthode claire, des limites visibles et un accès gratuit au profil.",
    body: "Astrakey transforme des signaux calculés et des réponses volontaires en une lecture calme de soi. Le contenu reste une invitation à réfléchir, jamais une promesse médicale, thérapeutique ou destinée.",
    question: "Que signifie ce sujet dans Astrakey ?",
    answer: "Il aide à comprendre le profil, les données utilisées, la convergence entre systèmes et les limites responsables avant de choisir une profondeur payante.",
    section: "Repère éditorial",
    ctaTitle: "Découvrez votre propre carte de l'âme.",
    ctaText: "Commencez gratuitement et voyez quels thèmes Astrakey relie dans votre profil.",
    seoDescription: "Astrakey explique la carte de l'âme, la convergence, les données sensibles et les limites de l'AI dans une langue claire.",
    safeNote: "Inspiration pour l'autoréflexion, sans diagnostic, thérapie ni prédiction certaine.",
    systemIntro: "Ce système apporte une perspective, mais Astrakey l'évalue toujours avec d'autres familles de signaux.",
    comparisonIntro: "Le comparatif clarifie les forces, les limites et l'usage responsable des deux perspectives.",
    articleIntro: "L'article donne une orientation pratique avant de démarrer le profil.",
    glossaryIntro: "Ce terme aide à comprendre la méthode, les données et la langue de Astrakey.",
    proof: "La force vient de plusieurs perspectives indépendantes, pas d'une seule affirmation.",
    consent: "Les données personnelles et relationnelles demandent un consentement clair.",
  },
  es: {
    soulMap: "mapa del alma",
    convergence: "convergencia",
    profile: "perfil",
    startFree: "Empezar gratis",
    learnMore: "Saber más",
    readMore: "Leer más",
    faq: "Preguntas frecuentes",
    overview: "Vista general",
    method: "Método",
    limits: "Límites",
    privacy: "Datos y seguridad",
    premium: "Profundidad premium",
    daily: "Impulso diario",
    relationship: "Relación",
    book: "Libro de perfil",
    title: "Astrakey conecta sistemas, datos y reflexión personal",
    lead: "Esta página explica Astrakey en una versión editorial local, con método claro, límites visibles y acceso gratuito al perfil.",
    body: "Astrakey convierte señales calculadas y respuestas voluntarias en una lectura tranquila de uno mismo. El contenido invita a reflexionar y no promete diagnóstico, terapia ni destino.",
    question: "¿Qué significa este tema en Astrakey?",
    answer: "Ayuda a entender el perfil, los datos utilizados, la convergencia entre sistemas y los límites responsables antes de elegir profundidad de pago.",
    section: "Orientación editorial",
    ctaTitle: "Descubre tu propio mapa del alma.",
    ctaText: "Empieza gratis y mira qué temas conecta Astrakey en tu perfil.",
    seoDescription: "Astrakey explica el mapa del alma, la convergencia, los datos sensibles y los límites de la AI con claridad.",
    safeNote: "Inspiración para la autorreflexión, sin diagnóstico, terapia ni predicción segura.",
    systemIntro: "Este sistema aporta una perspectiva, pero Astrakey siempre la evalúa junto con otras familias de señales.",
    comparisonIntro: "La comparación aclara fortalezas, límites y uso responsable de ambas perspectivas.",
    articleIntro: "El artículo ofrece orientación práctica antes de iniciar el perfil.",
    glossaryIntro: "Este término ayuda a entender el método, los datos y el lenguaje de Astrakey.",
    proof: "La solidez surge de varias perspectivas independientes, no de una sola afirmación.",
    consent: "Los datos personales y de relación requieren consentimiento claro.",
  },
  it: {
    soulMap: "mappa dell'anima",
    convergence: "convergenza",
    profile: "profilo",
    startFree: "Inizia gratis",
    learnMore: "Scopri di più",
    readMore: "Leggi di più",
    faq: "Domande frequenti",
    overview: "Panoramica",
    method: "Metodo",
    limits: "Limiti",
    privacy: "Dati e sicurezza",
    premium: "Profondità premium",
    daily: "Impulso del giorno",
    relationship: "Relazione",
    book: "Libro del profilo",
    title: "Astrakey collega sistemi, dati e riflessione personale",
    lead: "Questa pagina spiega Astrakey in una lingua editoriale locale, con metodo chiaro, limiti visibili e accesso gratuito al profilo.",
    body: "Astrakey trasforma segnali calcolati e risposte volontarie in una lettura calma di sé. Il contenuto resta un invito alla riflessione, non una diagnosi, terapia o promessa di destino.",
    question: "Che cosa significa questo tema in Astrakey?",
    answer: "Aiuta a capire il profilo, i dati usati, la convergenza tra sistemi e i limiti responsabili prima di scegliere una profondità a pagamento.",
    section: "Orientamento editoriale",
    ctaTitle: "Scopri la tua mappa dell'anima.",
    ctaText: "Inizia gratis e guarda quali temi Astrakey collega nel tuo profilo.",
    seoDescription: "Astrakey spiega mappa dell'anima, convergenza, dati sensibili e limiti dell'AI in modo chiaro.",
    safeNote: "Ispirazione per l'autoriflessione, senza diagnosi, terapia o previsione certa.",
    systemIntro: "Questo sistema offre una prospettiva, ma Astrakey la valuta sempre insieme ad altre famiglie di segnali.",
    comparisonIntro: "Il confronto chiarisce punti di forza, limiti e uso responsabile delle prospettive.",
    articleIntro: "L'articolo offre orientamento pratico prima di iniziare il profilo.",
    glossaryIntro: "Questo termine aiuta a capire metodo, dati e linguaggio di Astrakey.",
    proof: "La solidità nasce da più prospettive indipendenti, non da una sola affermazione.",
    consent: "I dati personali e relazionali richiedono consenso chiaro.",
  },
  nl: {
    soulMap: "zielskaart",
    convergence: "convergentie",
    profile: "profiel",
    startFree: "Gratis starten",
    learnMore: "Meer lezen",
    readMore: "Verder lezen",
    faq: "Veelgestelde vragen",
    overview: "Overzicht",
    method: "Methode",
    limits: "Grenzen",
    privacy: "Gegevens en veiligheid",
    premium: "Premium diepte",
    daily: "Dagimpuls",
    relationship: "Relatie",
    book: "Profielboek",
    title: "Astrakey verbindt systemen, gegevens en persoonlijke reflectie",
    lead: "Deze pagina legt Astrakey uit in lokale redactionele taal, met heldere methode, zichtbare grenzen en gratis profielstart.",
    body: "Astrakey vertaalt berekende signalen en vrijwillige antwoorden naar een rustige zelflezing. De inhoud is reflectie, geen diagnose, therapie of voorspelling.",
    question: "Wat betekent dit onderwerp in Astrakey?",
    answer: "Het helpt om profiel, gebruikte gegevens, convergentie tussen systemen en verantwoordelijke grenzen te begrijpen voor betaalde diepte.",
    section: "Redactionele oriëntatie",
    ctaTitle: "Ontdek uw eigen zielskaart.",
    ctaText: "Start gratis en zie welke thema's Astrakey in uw profiel verbindt.",
    seoDescription: "Astrakey legt zielskaart, convergentie, gevoelige gegevens en AI-grenzen helder uit.",
    safeNote: "Inspiratie voor zelfreflectie, zonder diagnose, therapie of zekere voorspelling.",
    systemIntro: "Dit systeem biedt een perspectief, maar Astrakey weegt het altijd met andere signaalfamilies.",
    comparisonIntro: "De vergelijking verduidelijkt sterke punten, grenzen en verantwoord gebruik.",
    articleIntro: "Het artikel geeft praktische oriëntatie voor de profielstart.",
    glossaryIntro: "Deze term helpt methode, gegevens en Astrakey-taal te begrijpen.",
    proof: "Sterkte ontstaat uit meerdere onafhankelijke perspectieven, niet uit één uitspraak.",
    consent: "Persoonlijke en relationele gegevens vragen duidelijke toestemming.",
  },
  pl: {
    soulMap: "mapa duszy",
    convergence: "konwergencja",
    profile: "profil",
    startFree: "Zacznij bezpłatnie",
    learnMore: "Dowiedz się więcej",
    readMore: "Czytaj dalej",
    faq: "Częste pytania",
    overview: "Przegląd",
    method: "Metoda",
    limits: "Granice",
    privacy: "Dane i bezpieczeństwo",
    premium: "Głębia premium",
    daily: "Impuls dnia",
    relationship: "Relacja",
    book: "Księga profilu",
    title: "Astrakey łączy systemy, dane i osobistą refleksję",
    lead: "Ta strona wyjaśnia Hermetię w lokalnym języku redakcyjnym, z jasną metodą, widocznymi granicami i bezpłatnym startem profilu.",
    body: "Astrakey przekształca obliczone sygnały i dobrowolne odpowiedzi w spokojną autorefleksję. Treść inspiruje, ale nie diagnozuje, nie leczy i nie przepowiada losu.",
    question: "Co oznacza ten temat w Hermetii?",
    answer: "Pomaga zrozumieć profil, użyte dane, konwergencję systemów i odpowiedzialne granice przed wyborem płatnej głębi.",
    section: "Orientacja redakcyjna",
    ctaTitle: "Odkryj własną mapę duszy.",
    ctaText: "Zacznij bezpłatnie i zobacz, jakie tematy Astrakey łączy w Twoim profilu.",
    seoDescription: "Astrakey jasno wyjaśnia mapę duszy, konwergencję, dane wrażliwe i granice AI.",
    safeNote: "Inspiracja do autorefleksji, bez diagnozy, terapii ani pewnej prognozy.",
    systemIntro: "Ten system wnosi perspektywę, ale Astrakey zawsze ocenia ją z innymi rodzinami sygnałów.",
    comparisonIntro: "Porównanie pokazuje mocne strony, granice i odpowiedzialne użycie perspektyw.",
    articleIntro: "Artykuł daje praktyczną orientację przed startem profilu.",
    glossaryIntro: "Ten termin pomaga zrozumieć metodę, dane i język Hermetii.",
    proof: "Wiarygodność rośnie z wielu niezależnych perspektyw, nie z jednej tezy.",
    consent: "Dane osobiste i relacyjne wymagają jasnej zgody.",
  },
  pt: {
    soulMap: "mapa da alma",
    convergence: "convergência",
    profile: "perfil",
    startFree: "Começar grátis",
    learnMore: "Saber mais",
    readMore: "Ler mais",
    faq: "Perguntas frequentes",
    overview: "Visão geral",
    method: "Método",
    limits: "Limites",
    privacy: "Dados e segurança",
    premium: "Profundidade premium",
    daily: "Impulso diário",
    relationship: "Relação",
    book: "Livro de perfil",
    title: "Astrakey liga sistemas, dados e reflexão pessoal",
    lead: "Esta página explica Astrakey em linguagem editorial local, com método claro, limites visíveis e início gratuito do perfil.",
    body: "Astrakey transforma sinais calculados e respostas voluntárias numa leitura calma de si. O conteúdo inspira reflexão, sem diagnóstico, terapia ou previsão certa.",
    question: "O que significa este tema na Astrakey?",
    answer: "Ajuda a compreender o perfil, os dados usados, a convergência entre sistemas e os limites responsáveis antes da profundidade paga.",
    section: "Orientação editorial",
    ctaTitle: "Descubra o seu mapa da alma.",
    ctaText: "Comece grátis e veja que temas Astrakey liga no seu perfil.",
    seoDescription: "Astrakey explica mapa da alma, convergência, dados sensíveis e limites da AI com clareza.",
    safeNote: "Inspiração para autorreflexão, sem diagnóstico, terapia ou previsão garantida.",
    systemIntro: "Este sistema traz uma perspectiva, mas Astrakey avalia-a sempre com outras famílias de sinais.",
    comparisonIntro: "A comparação esclarece forças, limites e uso responsável das perspectivas.",
    articleIntro: "O artigo oferece orientação prática antes de iniciar o perfil.",
    glossaryIntro: "Este termo ajuda a compreender método, dados e linguagem da Astrakey.",
    proof: "A força vem de várias perspectivas independentes, não de uma única afirmação.",
    consent: "Dados pessoais e relacionais exigem consentimento claro.",
  },
  bg: {
    soulMap: "карта на душата",
    convergence: "конвергенция",
    profile: "профил",
    startFree: "Започнете безплатно",
    learnMore: "Научете повече",
    readMore: "Прочетете още",
    faq: "Чести въпроси",
    overview: "Преглед",
    method: "Метод",
    limits: "Граници",
    privacy: "Данни и сигурност",
    premium: "Премиум дълбочина",
    daily: "Дневен импулс",
    relationship: "Връзка",
    book: "Книга на профила",
    title: "Astrakey свързва системи, данни и лична рефлексия",
    lead: "Тази страница обяснява Astrakey на локален редакционен език, с ясен метод, видими граници и безплатен старт на профила.",
    body: "Astrakey превръща изчислени сигнали и доброволни отговори в спокойна саморефлексия. Съдържанието е покана, не диагноза, терапия или сигурно предсказание.",
    question: "Какво означава тази тема в Astrakey?",
    answer: "Помага да разберете профила, данните, конвергенцията между системи и отговорните граници преди платена дълбочина.",
    section: "Редакционна ориентация",
    ctaTitle: "Открийте своята карта на душата.",
    ctaText: "Започнете безплатно и вижте кои теми Astrakey свързва във вашия профил.",
    seoDescription: "Astrakey обяснява карта на душата, конвергенция, чувствителни данни и граници на AI ясно.",
    safeNote: "Вдъхновение за саморефлексия, без диагноза, терапия или сигурна прогноза.",
    systemIntro: "Тази система дава перспектива, но Astrakey я оценява с други семейства сигнали.",
    comparisonIntro: "Сравнението изяснява силни страни, граници и отговорна употреба.",
    articleIntro: "Статията дава практична ориентация преди старта на профила.",
    glossaryIntro: "Терминът помага да разберете метода, данните и езика на Astrakey.",
    proof: "Силата идва от независими перспективи, не от едно твърдение.",
    consent: "Личните и релационните данни изискват ясно съгласие.",
  },
  hr: fallbackPack("hr", "karta duše", "konvergencija", "Započni besplatno"),
  cs: fallbackPack("cs", "mapa duše", "konvergence", "Začít zdarma"),
  da: fallbackPack("da", "sjælekort", "konvergens", "Start gratis"),
  et: fallbackPack("et", "hingekaart", "konvergents", "Alusta tasuta"),
  fi: fallbackPack("fi", "sielukartta", "konvergenssi", "Aloita maksutta"),
  el: fallbackPack("el", "χάρτης ψυχής", "σύγκλιση", "Ξεκινήστε δωρεάν"),
  hu: fallbackPack("hu", "lélektérkép", "konvergencia", "Indítás ingyen"),
  ga: fallbackPack("ga", "léarscáil anama", "cóineasú", "Tosaigh saor in aisce"),
  lv: fallbackPack("lv", "dvēseles karte", "konverģence", "Sākt bez maksas"),
  lt: fallbackPack("lt", "sielos žemėlapis", "konvergencija", "Pradėti nemokamai"),
  mt: fallbackPack("mt", "mappa tar-ruħ", "konverġenza", "Ibda b'xejn"),
  ro: fallbackPack("ro", "hartă a sufletului", "convergență", "Începe gratuit"),
  sk: fallbackPack("sk", "mapa duše", "konvergencia", "Začať zadarmo"),
  sl: fallbackPack("sl", "zemljevid duše", "konvergenca", "Začni brezplačno"),
  sv: fallbackPack("sv", "själskarta", "konvergens", "Starta gratis"),
};

function fallbackPack(locale: string, soulMap: string, convergence: string, startFree: string): LocalePack {
  const profiles: Record<string, Partial<LocalePack>> = {
    hr: { learnMore: "Saznajte više", readMore: "Pročitajte više", faq: "Česta pitanja", overview: "Pregled", method: "Metoda", limits: "Granice", privacy: "Podaci i sigurnost", premium: "Premium dubina", daily: "Dnevni impuls", relationship: "Odnos", book: "Knjiga profila", title: "Astrakey povezuje sustave, podatke i osobnu refleksiju", lead: "Ova stranica donosi lokalnu uredničku verziju s jasnom metodom i vidljivim granicama.", body: "Astrakey pretvara izračunate signale i dobrovoljne odgovore u miran prostor za samorefleksiju.", question: "Što ova tema znači u Hermetiji?", answer: "Pomaže razumjeti profil, podatke, konvergenciju i odgovorne granice prije plaćene dubine.", section: "Urednička orijentacija", safeNote: "Inspiracija za samorefleksiju, bez dijagnoze, terapije ili sigurnog predviđanja." },
    cs: { learnMore: "Zjistit více", readMore: "Číst dál", faq: "Časté otázky", overview: "Přehled", method: "Metoda", limits: "Hranice", privacy: "Data a bezpečnost", premium: "Prémiová hloubka", daily: "Denní impulz", relationship: "Vztah", book: "Kniha profilu", title: "Astrakey propojuje systémy, data a osobní reflexi", lead: "Tato stránka nabízí místní redakční verzi s jasnou metodou a viditelnými hranicemi.", body: "Astrakey převádí vypočtené signály a dobrovolné odpovědi do klidné sebereflexe.", question: "Co toto téma znamená v Hermetii?", answer: "Pomáhá pochopit profil, data, konvergenci a odpovědné hranice před placenou hloubkou.", section: "Redakční orientace", safeNote: "Inspirace k sebereflexi, bez diagnózy, terapie nebo jisté předpovědi." },
    da: { learnMore: "Læs mere", readMore: "Læs videre", faq: "Ofte stillede spørgsmål", overview: "Overblik", method: "Metode", limits: "Grænser", privacy: "Data og sikkerhed", premium: "Premium-dybde", daily: "Daglig impuls", relationship: "Relation", book: "Profilbog", title: "Astrakey forbinder systemer, data og personlig refleksion", lead: "Denne side giver en lokal redaktionel version med klar metode og synlige grænser.", body: "Astrakey omsætter beregnede signaler og frivillige svar til rolig selvrefleksion.", question: "Hvad betyder dette i Astrakey?", answer: "Det hjælper med at forstå profil, data, konvergens og ansvarlige grænser før betalt dybde.", section: "Redaktionel orientering", safeNote: "Inspiration til selvrefleksion, uden diagnose, terapi eller sikker forudsigelse." },
    et: { learnMore: "Loe rohkem", readMore: "Jätka lugemist", faq: "Korduma kippuvad küsimused", overview: "Ülevaade", method: "Meetod", limits: "Piirid", privacy: "Andmed ja turvalisus", premium: "Premium-sügavus", daily: "Päevaimpulss", relationship: "Suhe", book: "Profiiliraamat", title: "Astrakey ühendab süsteemid, andmed ja isikliku eneserefleksiooni", lead: "See leht pakub kohalikku toimetatud versiooni selge meetodi ja nähtavate piiridega.", body: "Astrakey muudab arvutatud signaalid ja vabatahtlikud vastused rahulikuks enesevaatluseks.", question: "Mida see teema Astrakeys tähendab?", answer: "See aitab mõista profiili, andmeid, konvergentsi ja vastutustundlikke piire enne tasulist sügavust.", section: "Toimetuslik orientatsioon", safeNote: "Inspiratsioon eneserefleksiooniks, mitte diagnoos, teraapia ega kindel ennustus." },
    fi: { learnMore: "Lue lisää", readMore: "Jatka lukemista", faq: "Usein kysytyt kysymykset", overview: "Yleiskuva", method: "Menetelmä", limits: "Rajat", privacy: "Tiedot ja turvallisuus", premium: "Premium-syvyys", daily: "Päivän impulssi", relationship: "Suhde", book: "Profiilikirja", title: "Astrakey yhdistää järjestelmät, tiedot ja henkilökohtaisen pohdinnan", lead: "Tämä sivu tarjoaa paikallisen toimituksellisen version, jossa menetelmä ja rajat ovat selkeitä.", body: "Astrakey muuntaa lasketut signaalit ja vapaaehtoiset vastaukset rauhalliseksi itsetutkiskeluksi.", question: "Mitä tämä aihe tarkoittaa Astrakeyssa?", answer: "Se auttaa ymmärtämään profiilia, tietoja, konvergenssia ja vastuullisia rajoja ennen maksullista syvyyttä.", section: "Toimituksellinen orientaatio", safeNote: "Inspiraatiota itsetutkiskeluun, ei diagnoosia, terapiaa tai varmaa ennustetta." },
    el: { learnMore: "Μάθετε περισσότερα", readMore: "Διαβάστε περισσότερα", faq: "Συχνές ερωτήσεις", overview: "Επισκόπηση", method: "Μέθοδος", limits: "Όρια", privacy: "Δεδομένα και ασφάλεια", premium: "Premium βάθος", daily: "Ημερήσια ώθηση", relationship: "Σχέση", book: "Βιβλίο προφίλ", title: "Η Astrakey συνδέει συστήματα, δεδομένα και προσωπικό στοχασμό", lead: "Αυτή η σελίδα προσφέρει τοπική επιμελημένη έκδοση με σαφή μέθοδο και ορατά όρια.", body: "Η Astrakey μετατρέπει υπολογισμένα σήματα και εθελοντικές απαντήσεις σε ήρεμο αυτοστοχασμό.", question: "Τι σημαίνει αυτό το θέμα στη Astrakey;", answer: "Βοηθά να κατανοήσετε το προφίλ, τα δεδομένα, τη σύγκλιση και τα υπεύθυνα όρια πριν από πληρωμένη εμβάθυνση.", section: "Εκδοτικός προσανατολισμός", safeNote: "Έμπνευση για αυτοστοχασμό, χωρίς διάγνωση, θεραπεία ή βέβαιη πρόβλεψη." },
    hu: { learnMore: "Tudjon meg többet", readMore: "Olvasson tovább", faq: "Gyakori kérdések", overview: "Áttekintés", method: "Módszer", limits: "Határok", privacy: "Adatok és biztonság", premium: "Prémium mélység", daily: "Napi impulzus", relationship: "Kapcsolat", book: "Profilkönyv", title: "A Astrakey rendszereket, adatokat és személyes önreflexiót kapcsol össze", lead: "Ez az oldal helyi szerkesztett változatot ad világos módszerrel és látható határokkal.", body: "A Astrakey számított jeleket és önkéntes válaszokat alakít nyugodt önreflexióvá.", question: "Mit jelent ez a téma a Hermetiában?", answer: "Segít megérteni a profilt, az adatokat, a konvergenciát és a felelős határokat a fizetett mélység előtt.", section: "Szerkesztői tájékozódás", safeNote: "Inspiráció önreflexióhoz, diagnózis, terápia vagy biztos jóslat nélkül." },
    ga: { learnMore: "Tuilleadh eolais", readMore: "Léigh ar aghaidh", faq: "Ceisteanna coitianta", overview: "Forbhreathnú", method: "Modh", limits: "Teorainneacha", privacy: "Sonraí agus slándáil", premium: "Doimhneacht phréimhe", daily: "Spreagadh laethúil", relationship: "Caidreamh", book: "Leabhar próifíle", title: "Nascann Astrakey córais, sonraí agus machnamh pearsanta", lead: "Tugann an leathanach seo leagan eagarthóireachta áitiúil le modh soiléir agus teorainneacha infheicthe.", body: "Athraíonn Astrakey comharthaí ríofa agus freagraí deonacha ina mhachnamh ciúin.", question: "Cad a chiallaíonn an téama seo in Astrakey?", answer: "Cabhraíonn sé leis an bpróifíl, sonraí, cóineasú agus teorainneacha freagracha a thuiscint roimh dhoimhneacht íoctha.", section: "Treoshuíomh eagarthóireachta", safeNote: "Spreagadh don fhéinmhachnamh, gan diagnóis, teiripe ná tuar cinnte." },
    lv: { learnMore: "Uzzināt vairāk", readMore: "Lasīt tālāk", faq: "Bieži jautājumi", overview: "Pārskats", method: "Metode", limits: "Robežas", privacy: "Dati un drošība", premium: "Premium dziļums", daily: "Dienas impulss", relationship: "Attiecības", book: "Profila grāmata", title: "Astrakey savieno sistēmas, datus un personisku refleksiju", lead: "Šī lapa sniedz vietēju redakcionālu versiju ar skaidru metodi un redzamām robežām.", body: "Astrakey pārvērš aprēķinātus signālus un brīvprātīgas atbildes mierīgā pašrefleksijā.", question: "Ko šī tēma nozīmē Astrakey?", answer: "Tā palīdz saprast profilu, datus, konverģenci un atbildīgas robežas pirms maksas dziļuma.", section: "Redakcionāla orientācija", safeNote: "Iedvesma pašrefleksijai, ne diagnoze, terapija vai droša prognoze." },
    lt: { learnMore: "Sužinoti daugiau", readMore: "Skaityti toliau", faq: "Dažniausi klausimai", overview: "Apžvalga", method: "Metodas", limits: "Ribos", privacy: "Duomenys ir saugumas", premium: "Premium gylis", daily: "Dienos impulsas", relationship: "Santykis", book: "Profilio knyga", title: "Astrakey jungia sistemas, duomenis ir asmeninę refleksiją", lead: "Šis puslapis pateikia vietinę redakcinę versiją su aiškiu metodu ir matomomis ribomis.", body: "Astrakey paverčia apskaičiuotus signalus ir savanoriškus atsakymus ramia savirefleksija.", question: "Ką ši tema reiškia Astrakey?", answer: "Ji padeda suprasti profilį, duomenis, konvergenciją ir atsakingas ribas prieš mokamą gylį.", section: "Redakcinė orientacija", safeNote: "Įkvėpimas savirefleksijai, be diagnozės, terapijos ar tikros prognozės." },
    mt: { learnMore: "Sir af aktar", readMore: "Kompli aqra", faq: "Mistoqsijiet frekwenti", overview: "Ħarsa ġenerali", method: "Metodu", limits: "Limiti", privacy: "Data u sigurtà", premium: "Fond premium", daily: "Impuls ta' kuljum", relationship: "Relazzjoni", book: "Ktieb tal-profil", title: "Astrakey tgħaqqad sistemi, data u riflessjoni personali", lead: "Din il-paġna tagħti verżjoni editorjali lokali b'metodu ċar u limiti viżibbli.", body: "Astrakey tbiddel sinjali kkalkulati u tweġibiet volontarji f'riflessjoni kalma.", question: "Xi jfisser dan is-suġġett f'Astrakey?", answer: "Jgħin tifhem il-profil, id-data, il-konverġenza u l-limiti responsabbli qabel fond imħallas.", section: "Orjentazzjoni editorjali", safeNote: "Ispirazzjoni għal riflessjoni personali, mhux dijanjosi, terapija jew tbassir ċert." },
    ro: { learnMore: "Aflați mai mult", readMore: "Citiți mai departe", faq: "Întrebări frecvente", overview: "Prezentare generală", method: "Metodă", limits: "Limite", privacy: "Date și securitate", premium: "Profunzime premium", daily: "Impuls zilnic", relationship: "Relație", book: "Carte de profil", title: "Astrakey conectează sisteme, date și reflecție personală", lead: "Această pagină oferă o versiune editorială locală, cu metodă clară și limite vizibile.", body: "Astrakey transformă semnale calculate și răspunsuri voluntare într-o reflecție calmă.", question: "Ce înseamnă această temă în Astrakey?", answer: "Ajută la înțelegerea profilului, datelor, convergenței și limitelor responsabile înainte de profunzimea plătită.", section: "Orientare editorială", safeNote: "Inspirație pentru autoreflecție, fără diagnostic, terapie sau predicție sigură." },
    sk: { learnMore: "Zistiť viac", readMore: "Čítať ďalej", faq: "Časté otázky", overview: "Prehľad", method: "Metóda", limits: "Hranice", privacy: "Dáta a bezpečnosť", premium: "Prémiová hĺbka", daily: "Denný impulz", relationship: "Vzťah", book: "Kniha profilu", title: "Astrakey prepája systémy, dáta a osobnú reflexiu", lead: "Táto stránka prináša lokálnu redakčnú verziu s jasnou metódou a viditeľnými hranicami.", body: "Astrakey premieňa vypočítané signály a dobrovoľné odpovede na pokojnú sebareflexiu.", question: "Čo táto téma znamená v Hermetii?", answer: "Pomáha pochopiť profil, dáta, konvergenciu a zodpovedné hranice pred platenou hĺbkou.", section: "Redakčná orientácia", safeNote: "Inšpirácia na sebareflexiu, bez diagnózy, terapie alebo istej predpovede." },
    sl: { learnMore: "Izvedite več", readMore: "Preberite naprej", faq: "Pogosta vprašanja", overview: "Pregled", method: "Metoda", limits: "Meje", privacy: "Podatki in varnost", premium: "Premium globina", daily: "Dnevni impulz", relationship: "Odnos", book: "Knjiga profila", title: "Astrakey povezuje sisteme, podatke in osebno refleksijo", lead: "Ta stran prinaša lokalno uredniško različico z jasno metodo in vidnimi mejami.", body: "Astrakey pretvori izračunane signale in prostovoljne odgovore v mirno samorefleksijo.", question: "Kaj ta tema pomeni v Hermetii?", answer: "Pomaga razumeti profil, podatke, konvergenco in odgovorne meje pred plačano globino.", section: "Uredniška orientacija", safeNote: "Navdih za samorefleksijo, brez diagnoze, terapije ali zanesljive napovedi." },
    sv: { learnMore: "Läs mer", readMore: "Läs vidare", faq: "Vanliga frågor", overview: "Översikt", method: "Metod", limits: "Gränser", privacy: "Data och säkerhet", premium: "Premiumdjup", daily: "Daglig impuls", relationship: "Relation", book: "Profilbok", title: "Astrakey förenar system, data och personlig reflektion", lead: "Den här sidan ger en lokal redaktionell version med tydlig metod och synliga gränser.", body: "Astrakey omvandlar beräknade signaler och frivilliga svar till lugn självreflektion.", question: "Vad betyder detta ämne i Astrakey?", answer: "Det hjälper till att förstå profil, data, konvergens och ansvarsfulla gränser före betalt djup.", section: "Redaktionell orientering", safeNote: "Inspiration för självreflektion, utan diagnos, terapi eller säker prognos." },
  };
  const p = profiles[locale] ?? {};
  return {
    soulMap,
    convergence,
    profile: locale === "sv" ? "profil" : "profil",
    startFree,
    learnMore: p.learnMore ?? "Learn more",
    readMore: p.readMore ?? "Read more",
    faq: p.faq ?? "FAQ",
    overview: p.overview ?? "Overview",
    method: p.method ?? "Method",
    limits: p.limits ?? "Limits",
    privacy: p.privacy ?? "Data and security",
    premium: p.premium ?? "Premium depth",
    daily: p.daily ?? "Daily impulse",
    relationship: p.relationship ?? "Relationship",
    book: p.book ?? "Profile book",
    title: p.title ?? "Astrakey connects systems, data and reflection",
    lead: p.lead ?? "This page provides a local editorial version with clear method, visible limits and a free profile start.",
    body: p.body ?? "Astrakey turns calculated signals and voluntary answers into calm self-reflection.",
    question: p.question ?? "What does this mean in Astrakey?",
    answer: p.answer ?? "It helps understand profile, data, convergence and responsible limits before paid depth.",
    section: p.section ?? "Editorial orientation",
    ctaTitle: p.ctaTitle ?? `${startFree}: ${soulMap}`,
    ctaText: p.ctaText ?? `${p.title ?? "Astrakey"}: ${convergence}, ${soulMap}, ${p.method ?? "method"}.`,
    seoDescription: p.seoDescription ?? `${soulMap}, ${convergence}, sensitive data and AI limits explained clearly in Astrakey.`,
    safeNote: p.safeNote ?? "Inspiration for self-reflection, without diagnosis, therapy or certain prediction.",
    systemIntro: p.systemIntro ?? p.answer ?? "This system adds one perspective and is read together with other signal families.",
    comparisonIntro: p.comparisonIntro ?? p.answer ?? "The comparison clarifies strengths, limits and responsible use.",
    articleIntro: p.articleIntro ?? p.answer ?? "The article gives practical orientation before starting the profile.",
    glossaryIntro: p.glossaryIntro ?? p.answer ?? "This term helps explain Astrakey's method, data and language.",
    proof: p.proof ?? p.answer ?? "Strength comes from several independent perspectives.",
    consent: p.consent ?? p.safeNote ?? "Personal and relational data require clear consent.",
  };
}

export function isEditorialLocale(locale: Locale) {
  return locale === "de";
}

export function pack(locale: Locale): LocalePack | undefined {
  return locale === "de" || locale === "en" ? undefined : localizedPacks[locale];
}

export function localizeCopy<T extends Record<string, unknown>>(locale: Locale, source: { de: T; en: Record<string, unknown> }): T {
  if (locale === "de") return source.de;
  return localizeValue(locale, source.de, "root") as T;
}

export function localizeValue(locale: Locale, value: unknown, key = "text"): unknown {
  const p = pack(locale);
  if (!p) return value;
  if (Array.isArray(value)) return value.map((item, index) => localizeValue(locale, item, `${key}.${index}`));
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([childKey, child]) => [childKey, localizeValue(locale, child, childKey)]));
  }
  if (typeof value !== "string") return value;
  return localizedString(p, value, key);
}

export function localizedString(p: LocalePack, original: string, key = "text"): string {
  void p;
  void key;
  if (!original.trim()) return original;
  if (original.startsWith("/") || original.startsWith("#") || original.startsWith("http") || original.includes("@")) return original;
  if (/^[\d\s.,:€/%+-]+$/.test(original)) return original;
  return original;
}

export function localizeDictionary<T>(locale: Locale, dictionary: T): T {
  if (locale === "de" || locale === "en") return dictionary;
  return localizeValue(locale, dictionary, "dictionary") as T;
}

export function localizeContentPage(page: ContentPage, locale: Locale): ContentPage {
  return localizeValue(locale, page, "contentPage") as ContentPage;
}

export function localizedFaq(locale: Locale, items: FaqItem[]): FaqItem[] {
  return localizeValue(locale, items, "faq") as FaqItem[];
}

export function localizeKnowledgeItem<T extends { title?: string; term?: string; seoTitle?: string; description?: string; definition?: string; body?: string; slug: string }>(
  item: T,
  locale: Locale,
  kind: "glossary" | "article" | "comparison",
): T {
  void kind;
  return localizeValue(locale, item, "knowledgeItem") as T;
}

export function localizeSystemText(system: SystemEntry, locale: Locale): SystemText {
  const base = system.de;
  return localizeValue(locale, base, "systemText") as SystemText;
}

export function localizedUi(locale: Locale) {
  void locale;
  return {
    startFree: "Profil kostenlos starten",
    learnMore: "Mehr erfahren",
    readMore: "Weiterlesen",
    faq: "FAQ",
    overview: "Überblick",
    method: "Methode",
    limits: "Grenzen",
    premium: "Premium",
    strengths: "Stärken und Nutzen",
    proof: "Mehrere Perspektiven stützen die Aussage.",
    comparison: "Vergleich",
    glossary: "Begriff lesen",
    article: "Artikel lesen",
    safeNote: "Inspiration zur Selbstreflexion, keine Beratung.",
    title: "Astrakey",
    lead: "Eine ruhige, erklärbare Profilerfahrung.",
    body: "Astrakey verbindet mehrere Perspektiven zu einer vorsichtigen Reflexion.",
    ctaTitle: "Starte dein Astrakey-Profil.",
    ctaText: "Beginne kostenlos und entscheide später, ob du mehr Tiefe möchtest.",
  };
}

export function localizedRouteLabel(locale: Locale, routePath: string, detailLabel?: string) {
  const p = pack(locale);
  if (!p) return detailLabel ?? "Astrakey";
  const clean = routePath === "/" ? "/" : routePath.replace(/\/$/, "");
  const baseLabels: Record<string, string> = {
    "/": p.soulMap,
    "/leistungen": p.premium,
    "/preise": p.premium,
    "/profil-starten": p.startFree,
    "/kostenlos-vs-premium": p.premium,
    "/datenschutz": p.privacy,
    "/daten-und-sicherheit": p.privacy,
    "/ki-transparenz": "AI",
    "/agb": p.limits,
    "/widerruf": p.limits,
    "/impressum": p.limits,
    "/freigaben": p.limits,
    "/so-entsteht-dein-profil": p.method,
    "/konvergenz-engine": p.convergence,
    "/seelenkarte": p.soulMap,
    "/tagesimpulse": p.daily,
    "/journaling": p.daily,
    "/vollprofil-buch": p.book,
    "/companion": "Companion",
    "/profil-verfeinern": p.profile,
    "/beziehungen": p.relationship,
    "/anwendungsfaelle": p.profile,
    "/ueber-hermetia": "Astrakey",
    "/faq": p.faq,
    "/sprachen": p.overview,
    "/systeme": p.method,
    "/glossar": p.glossaryIntro,
    "/wissen": p.articleIntro,
    "/vergleiche": p.comparisonIntro,
  };
  const label = baseLabels[clean] ?? p.title;
  return detailLabel ? `${label}: ${detailLabel}` : label;
}

export function localizedRouteCopy(locale: Locale, routePath: string, detailLabel?: string) {
  const ui = localizedUi(locale);
  const title = localizedRouteLabel(locale, routePath, detailLabel);
  return {
    eyebrow: ui.overview,
    title,
    lead: `${title}. ${ui.lead}`,
    body: ui.body,
    methodTitle: ui.method,
    methodText: ui.ctaText,
    limitsTitle: ui.limits,
    limitsText: ui.safeNote,
    proofTitle: ui.strengths,
    proofText: ui.proof,
    ctaTitle: ui.ctaTitle,
    ctaText: ui.ctaText,
    seoTitle: `${title} | Astrakey`,
    seoDescription: `${title}. ${ui.safeNote}`,
  };
}
