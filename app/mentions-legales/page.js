import MentionsLegales from "@/components/pages/MentionsLegales";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Mentions légales",
  description:
    "Mentions légales du site lamelodieducorps.com : éditeur, hébergeur, propriété intellectuelle.",
  path: "/mentions-legales",
});

export default function Page() {
  return <MentionsLegales />;
}
