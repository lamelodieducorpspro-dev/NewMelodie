import Menopause from "@/components/pages/Menopause";
import StructuredData from "@/components/site/StructuredData";
import { buildMetadata, buildFAQJsonLd, buildBreadcrumb } from "@/lib/seo";

export const metadata = buildMetadata({
  title:
    "Ménopause et alimentation : retrouver énergie et sérénité naturellement | Guadeloupe",
  description:
    "Accompagnement en nutrition holistique pour mieux vivre la ménopause et la périménopause. Bouffées de chaleur, fatigue, prise de poids. Bouillante, Guadeloupe et visio.",
  path: "/menopause-alimentation-guadeloupe",
  type: "article",
  keywords: [
    "ménopause",
    "périménopause",
    "alimentation",
    "énergie",
    "sérénité",
    "nutrition holistique",
    "Guadeloupe",
    "Bouillante",
    "bouffées de chaleur",
    "prise de poids",
  ],
});

const faqItems = [
  {
    q: "L'alimentation peut-elle vraiment réduire les bouffées de chaleur ?",
    a: "Certains ajustements alimentaires peuvent contribuer à les atténuer chez certaines femmes. Cela varie selon les personnes. Mon accompagnement prend en compte ta situation spécifique.",
  },
  {
    q: "Faut-il prendre des compléments alimentaires pendant la ménopause ?",
    a: "Pas forcément, et pas sans évaluation préalable. On fait le point ensemble sur tes besoins réels avant de recommander quoi que ce soit.",
  },
  {
    q: "Cet accompagnement remplace-t-il un suivi gynécologique ?",
    a: "Non. Si tu prends un traitement hormonal, cela ne contre-indique pas un accompagnement en nutrition.",
  },
  {
    q: "Puis-je être accompagnée en métropole ?",
    a: "Oui, les consultations en visio sont disponibles partout en France.",
  },
];

export default function Page() {
  return (
    <>
      <StructuredData id="jsonld-faq-menopause" data={buildFAQJsonLd(faqItems)} />
      <StructuredData
        id="jsonld-bc-menopause"
        data={buildBreadcrumb([
          { name: "Accueil", path: "/" },
          { name: "Ménopause", path: "/menopause-alimentation-guadeloupe" },
        ])}
      />
      <Menopause />
    </>
  );
}
