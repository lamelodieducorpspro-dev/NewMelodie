import "./globals.css";
import Layout from "@/components/site/Layout";
import StructuredData from "@/components/site/StructuredData";
import { localBusinessJsonLd, websiteJsonLd, SITE_BASE_URL, OG_IMAGE } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(SITE_BASE_URL),
  title: {
    default:
      "La Mélodie du Corps · Nutrition Holistique & Santé Féminine à Bouillante, Guadeloupe",
    template: "%s · La Mélodie du Corps",
  },
  description:
    "Apolline accompagne les femmes en nutrition holistique et santé féminine à Bouillante et à distance. SOPK, endométriose, ménopause, fatigue. Appel découverte gratuit.",
  applicationName: "La Mélodie du Corps",
  authors: [{ name: "Apolline Maysounabe", url: SITE_BASE_URL }],
  creator: "Apolline Maysounabe",
  publisher: "La Mélodie du Corps",
  alternates: { canonical: SITE_BASE_URL },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_BASE_URL,
    siteName: "La Mélodie du Corps",
    title: "La Mélodie du Corps · Nutrition Holistique & Santé Féminine",
    description:
      "Accompagnement en nutrition holistique et santé hormonale féminine — Guadeloupe & visio.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "La Mélodie du Corps — Apolline" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Mélodie du Corps · Nutrition Holistique & Santé Féminine",
    description:
      "Accompagnement en nutrition holistique et santé hormonale féminine — Guadeloupe & visio.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/images/logo-melodie-du-corps.png",
    apple: "/images/logo-melodie-du-corps.png",
    shortcut: "/images/logo-melodie-du-corps.png",
  },
  formatDetection: { email: false, telephone: false, address: false },
};

export const viewport = {
  themeColor: "#2C4A3B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <StructuredData id="jsonld-localbusiness" data={localBusinessJsonLd} />
        <StructuredData id="jsonld-website" data={websiteJsonLd} />
      </head>
      <body className="bg-cream text-[#1A2421] font-sans antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
