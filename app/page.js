import Home from "@/components/pages/Home";
import StructuredData from "@/components/site/StructuredData";
import { buildMetadata, personJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title:
    "La Mélodie du Corps · Nutrition Holistique & Santé Féminine à Bouillante, Guadeloupe",
  description:
    "Apolline accompagne les femmes en nutrition holistique et santé féminine à Bouillante et à distance. SOPK, endométriose, ménopause, fatigue. Appel découverte gratuit.",
  path: "/",
  keywords: [
    "nutrition holistique",
    "santé féminine",
    "santé hormonale",
    "Guadeloupe",
    "Bouillante",
    "SOPK",
    "endométriose",
    "ménopause",
    "fatigue chronique",
    "appel découverte gratuit",
  ],
});

export default function Page() {
  return (
    <>
      <StructuredData id="jsonld-person" data={personJsonLd} />
      <Home />
    </>
  );
}
