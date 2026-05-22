import "./globals.css";
import Layout from "@/components/site/Layout";

export const metadata = {
  title: "La Mélodie du Corps · Nutrition Holistique & Santé Féminine · Guadeloupe",
  description:
    "Apolline accompagne les femmes en nutrition holistique et santé hormonale féminine à Bouillante, Guadeloupe et à distance. SOPK, endométriose, ménopause, fatigue.",
  metadataBase: new URL("https://www.lamelodieducorps.com"),
  openGraph: {
    title: "La Mélodie du Corps · Nutrition Holistique & Santé Féminine",
    description:
      "Accompagnement en nutrition holistique et santé hormonale féminine — Guadeloupe & visio.",
    locale: "fr_FR",
    type: "website",
  },
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
      </head>
      <body className="bg-cream text-[#1A2421] font-sans antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
