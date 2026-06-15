// Schema.org JSON-LD für SEO/AEO/GEO (Antwortmaschinen + LLM-Sichtbarkeit).
// Härtung: <, >, & und die Line-/Paragraph-Separatoren werden escaped, damit
// Content (auch künftiger CMS-Content) nicht aus dem <script>-Block ausbricht.
const LS = String.fromCharCode(0x2028);
const PS = String.fromCharCode(0x2029);

function safeJson(data: unknown): string {
  const escaped = JSON.stringify(data).replace(
    /[<>&]/g,
    (c) => "\\u" + c.charCodeAt(0).toString(16).padStart(4, "0"),
  );
  return escaped.split(LS).join("\\u2028").split(PS).join("\\u2029");
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(data) }} />;
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function orgSchema(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hermetia",
    url: siteUrl,
    logo: `${siteUrl}/og/default.jpg`,
    slogan: "Wie oben, so unten",
    description:
      "Hermetia verwandelt Geburtsdaten in eine Seelenkarte aus bis zu 31 Deutungssystemen und begleitet Menschen Tag für Tag.",
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  locale: string;
  url: string;
  about: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    inLanguage: opts.locale,
    about: opts.about,
    image: opts.image,
    url: opts.url,
    author: { "@type": "Organization", name: "Hermetia" },
    publisher: { "@type": "Organization", name: "Hermetia" },
  };
}

export function productSchema(opts: {
  name: string;
  description: string;
  url: string;
  offers: { name: string; price: string; currency?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    description: opts.description,
    brand: { "@type": "Brand", name: "Hermetia" },
    url: opts.url,
    offers: opts.offers.map((o) => ({
      "@type": "Offer",
      name: o.name,
      price: o.price,
      priceCurrency: o.currency ?? "EUR",
      availability: "https://schema.org/InStock",
      url: opts.url,
    })),
  };
}
