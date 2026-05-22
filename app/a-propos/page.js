import APropos from "@/components/pages/APropos";
import StructuredData from "@/components/site/StructuredData";
import { buildMetadata, personJsonLd, buildBreadcrumb } from "@/lib/seo";

export const metadata = buildMetadata({
  title:
    "Apolline · Praticienne en nutrition holistique & professeure de yoga à Bouillante, Guadeloupe",
  description:
    "Découvrez Apolline, praticienne en nutrition santé holistique certifiée et professeure de yoga à Bouillante, Guadeloupe. Son parcours, ses valeurs, son approche globale de la santé féminine.",
  path: "/a-propos",
  type: "profile",
  keywords: [
    "Apolline",
    "nutrition holistique",
    "professeure de yoga",
    "Kundalini Yoga",
    "Yin Yoga",
    "Bouillante",
    "Guadeloupe",
    "santé féminine",
  ],
});

export default function Page() {
  return (
    <>
      <StructuredData id="jsonld-person-apropos" data={personJsonLd} />
      <StructuredData
        id="jsonld-bc-apropos"
        data={buildBreadcrumb([
          { name: "Accueil", path: "/" },
          { name: "À propos", path: "/a-propos" },
        ])}
      />
      <APropos />
    </>
  );
}
