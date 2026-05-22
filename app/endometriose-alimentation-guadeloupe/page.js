import Endometriose from "@/components/pages/Endometriose";
import StructuredData from "@/components/site/StructuredData";
import { buildMetadata, buildFAQJsonLd, buildBreadcrumb } from "@/lib/seo";

export const metadata = buildMetadata({
  title:
    "Endométriose et alimentation anti-inflammatoire | Accompagnement holistique Guadeloupe",
  description:
    "Accompagnement holistique pour mieux vivre l'endométriose : alimentation anti-inflammatoire, digestion, fatigue chronique. Consultations à Bouillante et à distance.",
  path: "/endometriose-alimentation-guadeloupe",
  type: "article",
  keywords: [
    "endométriose",
    "alimentation anti-inflammatoire",
    "accompagnement holistique",
    "Guadeloupe",
    "Bouillante",
    "douleur chronique",
    "fatigue",
    "troubles digestifs",
    "nutrition",
  ],
});

const faqItems = [
  {
    q: "Dois-je manger sans gluten avec l'endométriose ?",
    a: "Certaines femmes constatent un mieux-être en réduisant le gluten, d'autres non. Cela se travaille au cas par cas selon tes symptômes digestifs et tes sensibilités. Pas de règle universelle.",
  },
  {
    q: "L'alimentation anti-inflammatoire, c'est compliqué à mettre en place ?",
    a: "Non. On commence par des ajustements progressifs et réalistes, adaptés à ta vie en Guadeloupe. L'objectif n'est pas la perfection, c'est le mieux-être durable.",
  },
  {
    q: "Cet accompagnement remplace-t-il mon suivi médical ?",
    a: "Non. Mon accompagnement est complémentaire à ton suivi gynécologique et médical, jamais en remplacement.",
  },
  {
    q: "Puis-je être accompagnée si je suis en métropole ?",
    a: "Oui, les consultations en visio sont disponibles partout en France avec la même qualité de suivi.",
  },
];

export default function Page() {
  return (
    <>
      <StructuredData id="jsonld-faq-endo" data={buildFAQJsonLd(faqItems)} />
      <StructuredData
        id="jsonld-bc-endo"
        data={buildBreadcrumb([
          { name: "Accueil", path: "/" },
          { name: "Endométriose", path: "/endometriose-alimentation-guadeloupe" },
        ])}
      />
      <Endometriose />
    </>
  );
}
