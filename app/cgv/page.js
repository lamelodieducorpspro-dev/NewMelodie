import CGV from "@/components/pages/CGV";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Conditions Générales de Vente",
  description:
    "Conditions générales de vente de La Mélodie du Corps : modalités de réservation, tarifs, annulation, remboursement.",
  path: "/cgv",
});

export default function Page() {
  return <CGV />;
}
