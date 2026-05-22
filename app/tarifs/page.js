import Tarifs from "@/components/pages/Tarifs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title:
    "Tarifs consultations nutrition holistique & cours de yoga · Bouillante, Guadeloupe",
  description:
    "Tarifs transparents : appel découverte gratuit, bilan 90€, suivi 50€, cours de yoga dès 12€. Cabinet à Bouillante, domicile Côte-sous-le-Vent ou visio.",
  path: "/tarifs",
  keywords: [
    "tarifs nutritionniste holistique",
    "prix consultation nutrition",
    "tarif yoga Guadeloupe",
    "Bouillante",
    "appel découverte gratuit",
  ],
});

export default function Page() {
  return <Tarifs />;
}
