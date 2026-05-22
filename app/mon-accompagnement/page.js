import Accompagnement from "@/components/pages/Accompagnement";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title:
    "Accompagnement nutrition holistique & santé hormonale féminine · Bouillante, Guadeloupe",
  description:
    "Un suivi personnalisé sur 3 à 4 mois pour mieux comprendre votre corps, soutenir votre équilibre hormonal et digestif. Cabinet à Bouillante, domicile ou visio.",
  path: "/mon-accompagnement",
  type: "article",
  keywords: [
    "accompagnement nutrition",
    "santé hormonale féminine",
    "SOPK",
    "endométriose",
    "ménopause",
    "fatigue chronique",
    "troubles digestifs",
    "nutrition holistique",
    "Bouillante",
    "Guadeloupe",
    "visio",
  ],
});

export default function Page() {
  return <Accompagnement />;
}
