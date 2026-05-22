import PolitiqueCookies from "@/components/pages/PolitiqueCookies";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Politique des cookies",
  description:
    "Information sur l'utilisation des cookies sur lamelodieducorps.com : cookies techniques, mesure d'audience, gestion des préférences.",
  path: "/politique-cookies",
});

export default function Page() {
  return <PolitiqueCookies />;
}
