import Yoga from "@/components/pages/Yoga";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cours de Yin Yoga & Kundalini Yoga à Bouillante, Guadeloupe",
  description:
    "Cours collectifs de Kundalini Yoga (lundi) et Yin Yoga (mercredi) à Bouillante, Guadeloupe. Au Yoga'Niti Studio. Tarifs dès 12€/cours. Inscription par WhatsApp.",
  path: "/cours-yoga-bouillante-guadeloupe",
  type: "website",
  keywords: [
    "cours de yoga",
    "Yin Yoga",
    "Kundalini Yoga",
    "Bouillante",
    "Guadeloupe",
    "Yoga'Niti Studio",
    "santé",
    "équilibre",
    "stress",
    "nutrition",
  ],
});

export default function Page() {
  return <Yoga />;
}
