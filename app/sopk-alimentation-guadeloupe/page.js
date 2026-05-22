import SOPK from "@/components/pages/SOPK";
import StructuredData from "@/components/site/StructuredData";
import { buildMetadata, buildFAQJsonLd, buildBreadcrumb } from "@/lib/seo";

export const metadata = buildMetadata({
  title:
    "SOPK et alimentation : soutenir son équilibre hormonal naturellement | Guadeloupe",
  description:
    "Accompagnement en nutrition holistique pour mieux vivre le SOPK : cycle irrégulier, fatigue, fringales, inflammation. Consultations à Bouillante, Guadeloupe et à distance.",
  path: "/sopk-alimentation-guadeloupe",
  type: "article",
  keywords: [
    "SOPK",
    "alimentation",
    "équilibre hormonal",
    "nutrition holistique",
    "Guadeloupe",
    "Bouillante",
    "cycle irrégulier",
    "fatigue",
    "fringales",
    "inflammation",
  ],
});

const faqItems = [
  {
    q: "L'alimentation peut-elle vraiment changer les choses avec le SOPK ?",
    a: "Elle ne guérit pas le SOPK, mais elle peut soutenir l'équilibre hormonal, réduire l'inflammation et améliorer le confort au quotidien. Beaucoup de femmes constatent des améliorations sur la fatigue, les fringales et la régularité du cycle.",
  },
  {
    q: "Faut-il arrêter le gluten ou les produits laitiers ?",
    a: "Pas forcément. Ces questions se traitent au cas par cas selon ta situation. Il n'existe pas de liste universelle d'aliments à supprimer avec le SOPK.",
  },
  {
    q: "Cet accompagnement remplace-t-il mon suivi gynécologique ?",
    a: "Non. Mon accompagnement est complémentaire à ton suivi médical, jamais en remplacement.",
  },
  {
    q: "Puis-je être accompagnée si je suis en métropole ?",
    a: "Oui, les consultations en visio sont disponibles partout en France.",
  },
];

export default function Page() {
  return (
    <>
      <StructuredData id="jsonld-faq-sopk" data={buildFAQJsonLd(faqItems)} />
      <StructuredData
        id="jsonld-bc-sopk"
        data={buildBreadcrumb([
          { name: "Accueil", path: "/" },
          { name: "SOPK", path: "/sopk-alimentation-guadeloupe" },
        ])}
      />
      <SOPK />
    </>
  );
}
