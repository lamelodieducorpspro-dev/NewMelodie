import Contact from "@/components/pages/Contact";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title:
    "Prendre rendez-vous · Appel découverte gratuit · Bouillante, Guadeloupe",
  description:
    "Réserve ton appel découverte gratuit de 15 min avec Apolline. Consultations en cabinet à Bouillante, à domicile Côte-sous-le-Vent ou en visio France entière.",
  path: "/contact",
  keywords: [
    "prendre rendez-vous",
    "appel découverte gratuit",
    "nutritionniste Bouillante",
    "contact nutrition Guadeloupe",
    "réservation Setmore",
  ],
});

export default function Page() {
  return <Contact />;
}
