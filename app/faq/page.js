import FAQ from "@/components/pages/FAQ";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title:
    "FAQ · Nutrition holistique, SOPK, endométriose, ménopause & yoga — La Mélodie du Corps",
  description:
    "Réponses aux questions fréquentes sur la nutrition holistique, l'accompagnement SOPK/endométriose/ménopause et les cours de yoga à Bouillante. Tout savoir avant ton RDV.",
  path: "/faq",
  keywords: [
    "FAQ nutrition holistique",
    "SOPK questions",
    "endométriose alimentation",
    "ménopause nutrition",
    "Bouillante",
    "yoga questions",
  ],
});

export default function Page() {
  return <FAQ />;
}
