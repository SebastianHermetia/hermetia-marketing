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
    title: "Hermetia relie systèmes, données et réflexion personnelle",
    lead: "Cette page explique Hermetia dans une langue éditoriale locale, avec une méthode claire, des limites visibles et un accès gratuit au profil.",
    body: "Hermetia transforme des signaux calculés et des réponses volontaires en une lecture calme de soi. Le contenu reste une invitation à réfléchir, jamais une promesse médicale, thérapeutique ou destinée.",
    question: "Que signifie ce sujet dans Hermetia ?",
    answer: "Il aide à comprendre le profil, les données utilisées, la convergence entre systèmes et les limites responsables avant de choisir une profondeur payante.",
    section: "Repère éditorial",
    ctaTitle: "Découvrez votre propre carte de l'âme.",
    ctaText: "Commencez gratuitement et voyez quels thèmes Hermetia relie dans votre profil.",
    seoDescription: "Hermetia explique la carte de l'âme, la convergence, les données sensibles et les limites de l'AI dans une langue claire.",
    safeNote: "Inspiration pour l'autoréflexion, sans diagnostic, thérapie ni prédiction certaine.",
    systemIntro: "Ce système apporte une perspective, mais Hermetia l'évalue toujours avec d'autres familles de signaux.",
    comparisonIntro: "Le comparatif clarifie les forces, les limites et l'usage responsable des deux perspectives.",
    articleIntro: "L'article donne une orientation pratique avant de démarrer le profil.",
    glossaryIntro: "Ce terme aide à comprendre la méthode, les données et la langue de Hermetia.",
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
    title: "Hermetia conecta sistemas, datos y reflexión personal",
    lead: "Esta página explica Hermetia en una versión editorial local, con método claro, límites visibles y acceso gratuito al perfil.",
    body: "Hermetia convierte señales calculadas y respuestas voluntarias en una lectura tranquila de uno mismo. El contenido invita a reflexionar y no promete diagnóstico, terapia ni destino.",
    question: "¿Qué significa este tema en Hermetia?",
    answer: "Ayuda a entender el perfil, los datos utilizados, la convergencia entre sistemas y los límites responsables antes de elegir profundidad de pago.",
    section: "Orientación editorial",
    ctaTitle: "Descubre tu propio mapa del alma.",
    ctaText: "Empieza gratis y mira qué temas conecta Hermetia en tu perfil.",
    seoDescription: "Hermetia explica el mapa del alma, la convergencia, los datos sensibles y los límites de la AI con claridad.",
    safeNote: "Inspiración para la autorreflexión, sin diagnóstico, terapia ni predicción segura.",
    systemIntro: "Este sistema aporta una perspectiva, pero Hermetia siempre la evalúa junto con otras familias de señales.",
    comparisonIntro: "La comparación aclara fortalezas, límites y uso responsable de ambas perspectivas.",
    articleIntro: "El artículo ofrece orientación práctica antes de iniciar el perfil.",
    glossaryIntro: "Este término ayuda a entender el método, los datos y el lenguaje de Hermetia.",
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
    title: "Hermetia collega sistemi, dati e riflessione personale",
    lead: "Questa pagina spiega Hermetia in una lingua editoriale locale, con metodo chiaro, limiti visibili e accesso gratuito al profilo.",
    body: "Hermetia trasforma segnali calcolati e risposte volontarie in una lettura calma di sé. Il contenuto resta un invito alla riflessione, non una diagnosi, terapia o promessa di destino.",
    question: "Che cosa significa questo tema in Hermetia?",
    answer: "Aiuta a capire il profilo, i dati usati, la convergenza tra sistemi e i limiti responsabili prima di scegliere una profondità a pagamento.",
    section: "Orientamento editoriale",
    ctaTitle: "Scopri la tua mappa dell'anima.",
    ctaText: "Inizia gratis e guarda quali temi Hermetia collega nel tuo profilo.",
    seoDescription: "Hermetia spiega mappa dell'anima, convergenza, dati sensibili e limiti dell'AI in modo chiaro.",
    safeNote: "Ispirazione per l'autoriflessione, senza diagnosi, terapia o previsione certa.",
    systemIntro: "Questo sistema offre una prospettiva, ma Hermetia la valuta sempre insieme ad altre famiglie di segnali.",
    comparisonIntro: "Il confronto chiarisce punti di forza, limiti e uso responsabile delle prospettive.",
    articleIntro: "L'articolo offre orientamento pratico prima di iniziare il profilo.",
    glossaryIntro: "Questo termine aiuta a capire metodo, dati e linguaggio di Hermetia.",
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
    title: "Hermetia verbindt systemen, gegevens en persoonlijke reflectie",
    lead: "Deze pagina legt Hermetia uit in lokale redactionele taal, met heldere methode, zichtbare grenzen en gratis profielstart.",
    body: "Hermetia vertaalt berekende signalen en vrijwillige antwoorden naar een rustige zelflezing. De inhoud is reflectie, geen diagnose, therapie of voorspelling.",
    question: "Wat betekent dit onderwerp in Hermetia?",
    answer: "Het helpt om profiel, gebruikte gegevens, convergentie tussen systemen en verantwoordelijke grenzen te begrijpen voor betaalde diepte.",
    section: "Redactionele oriëntatie",
    ctaTitle: "Ontdek uw eigen zielskaart.",
    ctaText: "Start gratis en zie welke thema's Hermetia in uw profiel verbindt.",
    seoDescription: "Hermetia legt zielskaart, convergentie, gevoelige gegevens en AI-grenzen helder uit.",
    safeNote: "Inspiratie voor zelfreflectie, zonder diagnose, therapie of zekere voorspelling.",
    systemIntro: "Dit systeem biedt een perspectief, maar Hermetia weegt het altijd met andere signaalfamilies.",
    comparisonIntro: "De vergelijking verduidelijkt sterke punten, grenzen en verantwoord gebruik.",
    articleIntro: "Het artikel geeft praktische oriëntatie voor de profielstart.",
    glossaryIntro: "Deze term helpt methode, gegevens en Hermetia-taal te begrijpen.",
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
    title: "Hermetia łączy systemy, dane i osobistą refleksję",
    lead: "Ta strona wyjaśnia Hermetię w lokalnym języku redakcyjnym, z jasną metodą, widocznymi granicami i bezpłatnym startem profilu.",
    body: "Hermetia przekształca obliczone sygnały i dobrowolne odpowiedzi w spokojną autorefleksję. Treść inspiruje, ale nie diagnozuje, nie leczy i nie przepowiada losu.",
    question: "Co oznacza ten temat w Hermetii?",
    answer: "Pomaga zrozumieć profil, użyte dane, konwergencję systemów i odpowiedzialne granice przed wyborem płatnej głębi.",
    section: "Orientacja redakcyjna",
    ctaTitle: "Odkryj własną mapę duszy.",
    ctaText: "Zacznij bezpłatnie i zobacz, jakie tematy Hermetia łączy w Twoim profilu.",
    seoDescription: "Hermetia jasno wyjaśnia mapę duszy, konwergencję, dane wrażliwe i granice AI.",
    safeNote: "Inspiracja do autorefleksji, bez diagnozy, terapii ani pewnej prognozy.",
    systemIntro: "Ten system wnosi perspektywę, ale Hermetia zawsze ocenia ją z innymi rodzinami sygnałów.",
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
    title: "Hermetia liga sistemas, dados e reflexão pessoal",
    lead: "Esta página explica Hermetia em linguagem editorial local, com método claro, limites visíveis e início gratuito do perfil.",
    body: "Hermetia transforma sinais calculados e respostas voluntárias numa leitura calma de si. O conteúdo inspira reflexão, sem diagnóstico, terapia ou previsão certa.",
    question: "O que significa este tema na Hermetia?",
    answer: "Ajuda a compreender o perfil, os dados usados, a convergência entre sistemas e os limites responsáveis antes da profundidade paga.",
    section: "Orientação editorial",
    ctaTitle: "Descubra o seu mapa da alma.",
    ctaText: "Comece grátis e veja que temas Hermetia liga no seu perfil.",
    seoDescription: "Hermetia explica mapa da alma, convergência, dados sensíveis e limites da AI com clareza.",
    safeNote: "Inspiração para autorreflexão, sem diagnóstico, terapia ou previsão garantida.",
    systemIntro: "Este sistema traz uma perspectiva, mas Hermetia avalia-a sempre com outras famílias de sinais.",
    comparisonIntro: "A comparação esclarece forças, limites e uso responsável das perspectivas.",
    articleIntro: "O artigo oferece orientação prática antes de iniciar o perfil.",
    glossaryIntro: "Este termo ajuda a compreender método, dados e linguagem da Hermetia.",
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
    title: "Hermetia свързва системи, данни и лична рефлексия",
    lead: "Тази страница обяснява Hermetia на локален редакционен език, с ясен метод, видими граници и безплатен старт на профила.",
    body: "Hermetia превръща изчислени сигнали и доброволни отговори в спокойна саморефлексия. Съдържанието е покана, не диагноза, терапия или сигурно предсказание.",
    question: "Какво означава тази тема в Hermetia?",
    answer: "Помага да разберете профила, данните, конвергенцията между системи и отговорните граници преди платена дълбочина.",
    section: "Редакционна ориентация",
    ctaTitle: "Открийте своята карта на душата.",
    ctaText: "Започнете безплатно и вижте кои теми Hermetia свързва във вашия профил.",
    seoDescription: "Hermetia обяснява карта на душата, конвергенция, чувствителни данни и граници на AI ясно.",
    safeNote: "Вдъхновение за саморефлексия, без диагноза, терапия или сигурна прогноза.",
    systemIntro: "Тази система дава перспектива, но Hermetia я оценява с други семейства сигнали.",
    comparisonIntro: "Сравнението изяснява силни страни, граници и отговорна употреба.",
    articleIntro: "Статията дава практична ориентация преди старта на профила.",
    glossaryIntro: "Терминът помага да разберете метода, данните и езика на Hermetia.",
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
    hr: { title: "Hermetia povezuje sustave, podatke i osobnu refleksiju", lead: "Ova stranica donosi lokalnu uredničku verziju s jasnom metodom i vidljivim granicama.", body: "Hermetia pretvara izračunate signale i dobrovoljne odgovore u miran prostor za samorefleksiju.", safeNote: "Inspiracija za samorefleksiju, bez dijagnoze, terapije ili sigurnog predviđanja." },
    cs: { title: "Hermetia propojuje systémy, data a osobní reflexi", lead: "Tato stránka nabízí místní redakční verzi s jasnou metodou a viditelnými hranicemi.", body: "Hermetia převádí vypočtené signály a dobrovolné odpovědi do klidné sebereflexe.", safeNote: "Inspirace k sebereflexi, bez diagnózy, terapie nebo jisté předpovědi." },
    da: { title: "Hermetia forbinder systemer, data og personlig refleksion", lead: "Denne side giver en lokal redaktionel version med klar metode og synlige grænser.", body: "Hermetia omsætter beregnede signaler og frivillige svar til rolig selvrefleksion.", safeNote: "Inspiration til selvrefleksion, uden diagnose, terapi eller sikker forudsigelse." },
    et: { title: "Hermetia ühendab süsteemid, andmed ja isikliku eneserefleksiooni", lead: "See leht pakub kohalikku toimetatud versiooni selge meetodi ja nähtavate piiridega.", body: "Hermetia muudab arvutatud signaalid ja vabatahtlikud vastused rahulikuks enesevaatluseks.", safeNote: "Inspiratsioon eneserefleksiooniks, mitte diagnoos, teraapia ega kindel ennustus." },
    fi: { title: "Hermetia yhdistää järjestelmät, tiedot ja henkilökohtaisen pohdinnan", lead: "Tämä sivu tarjoaa paikallisen toimituksellisen version, jossa menetelmä ja rajat ovat selkeitä.", body: "Hermetia muuntaa lasketut signaalit ja vapaaehtoiset vastaukset rauhalliseksi itsetutkiskeluksi.", safeNote: "Inspiraatiota itsetutkiskeluun, ei diagnoosia, terapiaa tai varmaa ennustetta." },
    el: { title: "Η Hermetia συνδέει συστήματα, δεδομένα και προσωπικό στοχασμό", lead: "Αυτή η σελίδα προσφέρει τοπική επιμελημένη έκδοση με σαφή μέθοδο και ορατά όρια.", body: "Η Hermetia μετατρέπει υπολογισμένα σήματα και εθελοντικές απαντήσεις σε ήρεμο αυτοστοχασμό.", safeNote: "Έμπνευση για αυτοστοχασμό, χωρίς διάγνωση, θεραπεία ή βέβαιη πρόβλεψη." },
    hu: { title: "A Hermetia rendszereket, adatokat és személyes önreflexiót kapcsol össze", lead: "Ez az oldal helyi szerkesztett változatot ad világos módszerrel és látható határokkal.", body: "A Hermetia számított jeleket és önkéntes válaszokat alakít nyugodt önreflexióvá.", safeNote: "Inspiráció önreflexióhoz, diagnózis, terápia vagy biztos jóslat nélkül." },
    ga: { title: "Nascann Hermetia córais, sonraí agus machnamh pearsanta", lead: "Tugann an leathanach seo leagan eagarthóireachta áitiúil le modh soiléir agus teorainneacha infheicthe.", body: "Athraíonn Hermetia comharthaí ríofa agus freagraí deonacha ina mhachnamh ciúin.", safeNote: "Spreagadh don fhéinmhachnamh, gan diagnóis, teiripe ná tuar cinnte." },
    lv: { title: "Hermetia savieno sistēmas, datus un personisku refleksiju", lead: "Šī lapa sniedz vietēju redakcionālu versiju ar skaidru metodi un redzamām robežām.", body: "Hermetia pārvērš aprēķinātus signālus un brīvprātīgas atbildes mierīgā pašrefleksijā.", safeNote: "Iedvesma pašrefleksijai, ne diagnoze, terapija vai droša prognoze." },
    lt: { title: "Hermetia jungia sistemas, duomenis ir asmeninę refleksiją", lead: "Šis puslapis pateikia vietinę redakcinę versiją su aiškiu metodu ir matomomis ribomis.", body: "Hermetia paverčia apskaičiuotus signalus ir savanoriškus atsakymus ramia savirefleksija.", safeNote: "Įkvėpimas savirefleksijai, be diagnozės, terapijos ar tikros prognozės." },
    mt: { title: "Hermetia tgħaqqad sistemi, data u riflessjoni personali", lead: "Din il-paġna tagħti verżjoni editorjali lokali b'metodu ċar u limiti viżibbli.", body: "Hermetia tbiddel sinjali kkalkulati u tweġibiet volontarji f'riflessjoni kalma.", safeNote: "Ispirazzjoni għal riflessjoni personali, mhux dijanjosi, terapija jew tbassir ċert." },
    ro: { title: "Hermetia conectează sisteme, date și reflecție personală", lead: "Această pagină oferă o versiune editorială locală, cu metodă clară și limite vizibile.", body: "Hermetia transformă semnale calculate și răspunsuri voluntare într-o reflecție calmă.", safeNote: "Inspirație pentru autoreflecție, fără diagnostic, terapie sau predicție sigură." },
    sk: { title: "Hermetia prepája systémy, dáta a osobnú reflexiu", lead: "Táto stránka prináša lokálnu redakčnú verziu s jasnou metódou a viditeľnými hranicami.", body: "Hermetia premieňa vypočítané signály a dobrovoľné odpovede na pokojnú sebareflexiu.", safeNote: "Inšpirácia na sebareflexiu, bez diagnózy, terapie alebo istej predpovede." },
    sl: { title: "Hermetia povezuje sisteme, podatke in osebno refleksijo", lead: "Ta stran prinaša lokalno uredniško različico z jasno metodo in vidnimi mejami.", body: "Hermetia pretvori izračunane signale in prostovoljne odgovore v mirno samorefleksijo.", safeNote: "Navdih za samorefleksijo, brez diagnoze, terapije ali zanesljive napovedi." },
    sv: { title: "Hermetia förenar system, data och personlig reflektion", lead: "Den här sidan ger en lokal redaktionell version med tydlig metod och synliga gränser.", body: "Hermetia omvandlar beräknade signaler och frivilliga svar till lugn självreflektion.", safeNote: "Inspiration för självreflektion, utan diagnos, terapi eller säker prognos." },
  };
  const p = profiles[locale] ?? {};
  return {
    soulMap,
    convergence,
    profile: locale === "sv" ? "profil" : "profil",
    startFree,
    learnMore: "Mehr erfahren",
    readMore: "Weiterlesen",
    faq: "FAQ",
    overview: "Overblik",
    method: "Metode",
    limits: "Grenser",
    privacy: "Data og sikkerhed",
    premium: "Premium",
    daily: "Daglig impuls",
    relationship: "Relation",
    book: "Profilbog",
    title: p.title ?? "Hermetia connects systems, data and reflection",
    lead: p.lead ?? "This page provides a local editorial version with clear method, visible limits and a free profile start.",
    body: p.body ?? "Hermetia turns calculated signals and voluntary answers into calm self-reflection.",
    question: "Hvad betyder dette i Hermetia?",
    answer: "Det hjælper med at forstå profil, data, konvergens og ansvarlige grænser før betalt dybde.",
    section: "Redaktionel orientering",
    ctaTitle: `${startFree}: ${soulMap}`,
    ctaText: `Hermetia viser, hvordan ${convergence} skaber mening i dit ${p.profile ?? "profil"}.`,
    seoDescription: `${soulMap}, ${convergence}, følsomme data og AI-grænser forklares klart i Hermetia.`,
    safeNote: p.safeNote ?? "Inspiration for self-reflection, without diagnosis, therapy or certain prediction.",
    systemIntro: "Dette system giver et perspektiv, men Hermetia vurderer det altid sammen med andre signalfamilier.",
    comparisonIntro: "Sammenligningen afklarer styrker, grænser og ansvarlig brug af perspektiverne.",
    articleIntro: "Artiklen giver praktisk orientering før profilen startes.",
    glossaryIntro: "Dette begreb hjælper med at forstå metode, data og Hermetias sprog.",
    proof: "Styrke opstår fra flere uafhængige perspektiver, ikke fra én påstand.",
    consent: "Personlige og relationelle data kræver klart samtykke.",
  };
}

export function isEditorialLocale(locale: Locale) {
  return locale === "de" || locale === "en";
}

export function pack(locale: Locale): LocalePack | undefined {
  return locale === "de" || locale === "en" ? undefined : localizedPacks[locale];
}

export function localizeCopy<T extends Record<string, unknown>>(locale: Locale, source: { de: T; en: Record<string, unknown> }): T {
  if (locale === "de") return source.de;
  if (locale === "en") return source.en as T;
  return localizeValue(locale, source.en, "root") as T;
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
  if (!original.trim()) return original;
  if (original.startsWith("/") || original.startsWith("#") || original.startsWith("http") || original.includes("@")) return original;
  if (/^[\d\s.,:€/%+-]+$/.test(original)) return original;
  const k = key.toLowerCase();
  if (k.includes("seo")) return `${p.title} | Hermetia`;
  if (k.includes("description")) return p.seoDescription;
  if (k.includes("kicker") || k.includes("eyebrow") || k.includes("tag") || k.includes("label")) return p.section;
  if (k.includes("title") || k.includes("headline") || k.includes("breadcrumb")) return p.title;
  if (k.includes("lead")) return p.lead;
  if (k === "q" || k.includes("question")) return p.question;
  if (k === "a" || k.includes("answer")) return p.answer;
  if (k.includes("cta")) return p.startFree;
  if (k.includes("alt")) return `${p.soulMap} Hermetia`;
  if (k.includes("caption")) return p.proof;
  if (k.includes("note")) return p.safeNote;
  if (k.includes("price") || k.includes("tier") || k.includes("plan")) return p.premium;
  if (k.includes("privacy") || k.includes("data")) return p.privacy;
  return p.body;
}

export function localizeDictionary<T>(locale: Locale, dictionary: T): T {
  if (locale === "de" || locale === "en") return dictionary;
  return localizeValue(locale, dictionary, "dictionary") as T;
}

export function localizeContentPage(page: ContentPage, locale: Locale): ContentPage {
  const p = pack(locale);
  if (!p) return page;
  return {
    ...page,
    title: p.title,
    seoTitle: `${p.title} | Hermetia`,
    seoDescription: p.seoDescription,
    eyebrow: p.section,
    lead: p.lead,
    answer: p.body,
    imageAlt: `${p.soulMap} Hermetia`,
    sections: page.sections.map((_, index) => ({
      title: [p.method, p.convergence, p.privacy, p.limits][index % 4],
      body: [p.body, p.proof, p.consent, p.safeNote][index % 4],
    })),
    graphics: page.graphics?.map((graphic) => ({ ...graphic, alt: `${p.soulMap} Hermetia`, caption: p.proof })),
    faq: localizedFaq(locale, page.faq),
    ctaTitle: p.ctaTitle,
    ctaText: p.ctaText,
  };
}

export function localizedFaq(locale: Locale, items: FaqItem[]): FaqItem[] {
  const p = pack(locale);
  if (!p) return items;
  return items.map((_, index) => ({
    q: index % 2 === 0 ? p.question : `${p.method}: ${p.convergence}?`,
    a: [p.answer, p.safeNote, p.consent][index % 3],
  }));
}

export function localizeKnowledgeItem<T extends { title?: string; term?: string; seoTitle?: string; description?: string; definition?: string; body?: string; slug: string }>(
  item: T,
  locale: Locale,
  kind: "glossary" | "article" | "comparison",
): T {
  const p = pack(locale);
  if (!p) return item;
  const intro = kind === "glossary" ? p.glossaryIntro : kind === "article" ? p.articleIntro : p.comparisonIntro;
  const localized = {
    ...item,
    title: item.title ? `${p.title}` : item.title,
    term: item.term ? `${p.soulMap} · ${p.convergence}` : item.term,
    seoTitle: `${p.title} | Hermetia`,
    description: intro,
    definition: item.definition ? intro : item.definition,
    body: item.body ? `${intro} ${p.safeNote}` : item.body,
  } as T & { sections?: string[] };
  if (Array.isArray((item as { sections?: string[] }).sections)) {
    localized.sections = [intro, p.body, p.proof, p.safeNote];
  }
  return localized as T;
}

export function localizeSystemText(system: SystemEntry, locale: Locale): SystemText {
  const base = locale === "de" ? system.de : system.en;
  const p = pack(locale);
  if (!p) return base;
  return {
    ...base,
    tagline: p.systemIntro,
    seoTitle: `${base.name} | Hermetia`,
    seoDescription: p.seoDescription,
    intro: `${base.name}: ${p.systemIntro}`,
    whatTitle: p.overview,
    what: p.body,
    howTitle: p.method,
    how: p.proof,
    revealsTitle: p.soulMap,
    reveals: p.ctaText,
    faq: localizedFaq(locale, base.faq),
  };
}

export function localizedUi(locale: Locale) {
  const p = pack(locale);
  return {
    startFree: p?.startFree ?? (locale === "de" ? "Profil kostenlos starten" : "Start profile for free"),
    learnMore: p?.learnMore ?? (locale === "de" ? "Mehr erfahren" : "Learn more"),
    readMore: p?.readMore ?? (locale === "de" ? "Weiterlesen" : "Read more"),
    faq: p?.faq ?? "FAQ",
    overview: p?.overview ?? (locale === "de" ? "Überblick" : "Overview"),
    method: p?.method ?? (locale === "de" ? "Methode" : "Method"),
    limits: p?.limits ?? (locale === "de" ? "Grenzen" : "Limits"),
    premium: p?.premium ?? (locale === "de" ? "Premium" : "Premium"),
    strengths: p?.proof ?? (locale === "de" ? "Stärken und Nutzen" : "Strengths and value"),
    proof: p?.proof ?? (locale === "de" ? "Mehrere Perspektiven stützen die Aussage." : "Several perspectives support the statement."),
    comparison: p?.comparisonIntro ?? (locale === "de" ? "Vergleich" : "Comparison"),
    glossary: p?.glossaryIntro ?? (locale === "de" ? "Begriff lesen" : "Read term"),
    article: p?.articleIntro ?? (locale === "de" ? "Artikel lesen" : "Read article"),
    safeNote: p?.safeNote ?? (locale === "de" ? "Inspiration zur Selbstreflexion, keine Beratung." : "Inspiration for self-reflection, not advice."),
    title: p?.title ?? "",
    lead: p?.lead ?? "",
    body: p?.body ?? "",
    ctaTitle: p?.ctaTitle ?? "",
    ctaText: p?.ctaText ?? "",
  };
}
