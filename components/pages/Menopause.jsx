"use client";

import ThematicPage from "@/components/site/ThematicPage";
import { IMG } from "@/lib/constants";
import SEO from "@/components/site/SEO";

export default function Menopause() {
  return (
    <>
      <SEO
        title="Ménopause et alimentation : retrouver énergie et sérénité · Guadeloupe"
        description="Accompagnement en nutrition holistique pour mieux vivre la ménopause et la périménopause. Bouffées de chaleur, fatigue, prise de poids. Bouillante et visio."
        canonical="https://www.lamelodieducorps.com/menopause-alimentation-guadeloupe"
      />
      <ThematicPage
      title="Ménopause : retrouver énergie, confort et sérénité naturellement"
      heroImg={IMG.menopause}
      intro="La ménopause est une transition, pas une maladie. Pourtant, bouffées de chaleur, prise de poids, fatigue, troubles du sommeil… ces symptômes peuvent vraiment impacter la qualité de vie. Mon accompagnement est là pour t'aider à traverser cette transition avec plus de douceur et d'outils concrets."
      h2="Ce que tu vis peut-être en ce moment"
      what={{
        paragraphs: [
          "Périménopause et ménopause se manifestent différemment d'une femme à l'autre. Ces symptômes sont réels et méritent une attention et un accompagnement adaptés.",
        ],
        bullets: [
          "Cycles irréguliers (périménopause)",
          "Bouffées de chaleur, sueurs nocturnes",
          "Prise de poids, notamment au ventre",
          "Fatigue chronique",
          "Troubles du sommeil",
          "Sautes d'humeur, irritabilité",
          "Baisse de libido",
          "Difficultés de concentration",
        ],
      }}
      lien={{
        title: "Quel rôle peut jouer l'alimentation pendant la ménopause ?",
        paragraphs: [
          "L'alimentation ne supprime pas les symptômes de la ménopause. Mais elle peut soutenir ton corps dans cette transition en agissant sur plusieurs leviers.",
          "L'alimentation à la ménopause n'est pas un régime restrictif. C'est une façon de nourrir ton corps pour qu'il traverse cette période avec le plus de confort et de vitalité possible.",
        ],
      }}
      levers={[
        "La stabilité de l'énergie tout au long de la journée",
        "La réduction de l'inflammation",
        "Le soutien osseux (calcium, vitamine D, magnésium)",
        "La santé cardiovasculaire",
        "Le confort digestif",
        "La glycémie et la gestion du poids",
        "Le sommeil et le système nerveux",
      ]}
      work={{
        title: "Ce que nous pouvons travailler ensemble",
        items: [
          "Adapter ton alimentation à tes besoins actuels",
          "Soutenir ton énergie au quotidien",
          "Améliorer ton sommeil",
          "Réduire les inconforts digestifs",
          "Gérer les variations de poids sans régime",
          "Prendre soin de ta santé osseuse et cardiovasculaire",
          "Retrouver une relation apaisée à ton corps",
        ],
      }}
      faq={[
        { q: "L'alimentation peut-elle vraiment réduire les bouffées de chaleur ?",
          a: "Certains ajustements alimentaires peuvent contribuer à les atténuer chez certaines femmes. Cela varie selon les personnes. Mon accompagnement prend en compte ta situation spécifique." },
        { q: "Faut-il prendre des compléments alimentaires pendant la ménopause ?",
          a: "Pas forcément, et pas sans évaluation préalable. On fait le point ensemble sur tes besoins réels avant de recommander quoi que ce soit." },
        { q: "Cet accompagnement remplace-t-il un suivi gynécologique ?",
          a: "Non. Si tu prends un traitement hormonal, cela ne contre-indique pas un accompagnement en nutrition." },
        { q: "Puis-je être accompagnée en métropole ?",
          a: "Oui, les consultations en visio sont disponibles partout en France." },
      ]}
    />
    </>
  );
}
