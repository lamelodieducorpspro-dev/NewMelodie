// Centralised SEO configuration for La Mélodie du Corps.
// All asset references are local — zero Wix CDN dependency.
// Canonical host = non-www (matches what Emergent/Cloudflare actually serves).
export const SITE_BASE_URL = "https://lamelodieducorps.com";
export const OG_IMAGE = `${SITE_BASE_URL}/images/og-banner-melodie-du-corps.jpg`;
export const LOGO_IMAGE = `${SITE_BASE_URL}/images/logo-melodie-du-corps.png`;
export const APOLLINE_IMAGE = `${SITE_BASE_URL}/images/apolline-portrait-mer-caraibes-bouillante.webp`;

/**
 * Build a Next.js Metadata object with sensible defaults + OpenGraph + Twitter cards.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  image = OG_IMAGE,
  type = "website",
  keywords = [],
}) {
  const url = `${SITE_BASE_URL}${path}`;
  return {
    title,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: "La Mélodie du Corps",
      locale: "fr_FR",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

// Global LocalBusiness / Person / Website schemas
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_BASE_URL}/#localbusiness`,
  name: "La Mélodie du Corps",
  description:
    "Praticienne en nutrition holistique et professeure de yoga à Bouillante, Guadeloupe. Accompagnement de la santé hormonale féminine (SOPK, endométriose, ménopause).",
  url: SITE_BASE_URL,
  telephone: "+33651166669",
  email: "lamelodieducorps.pro@gmail.com",
  image: OG_IMAGE,
  logo: LOGO_IMAGE,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rue des Manguiers",
    addressLocality: "Bouillante",
    postalCode: "97125",
    addressRegion: "Guadeloupe",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 16.1361,
    longitude: -61.7717,
  },
  areaServed: ["Guadeloupe", "France"],
  sameAs: [
    "https://www.instagram.com/lamelodie.ducorps",
    "https://www.facebook.com/profile.php?id=61586657914159",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "7",
    bestRating: "5",
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_BASE_URL}/#website`,
  url: SITE_BASE_URL,
  name: "La Mélodie du Corps",
  inLanguage: "fr-FR",
  publisher: { "@id": `${SITE_BASE_URL}/#localbusiness` },
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Apolline Maysounabe",
  jobTitle: "Praticienne en nutrition holistique & professeure de yoga",
  worksFor: { "@id": `${SITE_BASE_URL}/#localbusiness` },
  url: `${SITE_BASE_URL}/a-propos`,
  image: APOLLINE_IMAGE,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bouillante",
    addressRegion: "Guadeloupe",
    addressCountry: "FR",
  },
  knowsAbout: [
    "Nutrition holistique",
    "Santé hormonale féminine",
    "SOPK",
    "Endométriose",
    "Ménopause",
    "Yin Yoga",
    "Kundalini Yoga",
  ],
};

export function buildFAQJsonLd(items) {
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

export function buildBreadcrumb(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_BASE_URL}${it.path}`,
    })),
  };
}
