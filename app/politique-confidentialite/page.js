import PolitiqueConfidentialite from "@/components/pages/PolitiqueConfidentialite";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles sur lamelodieducorps.com. Vos droits RGPD.",
  path: "/politique-confidentialite",
});

export default function Page() {
  return <PolitiqueConfidentialite />;
}
