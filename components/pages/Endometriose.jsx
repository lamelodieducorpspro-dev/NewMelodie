"use client";

import ThematicPage from "@/components/site/ThematicPage";
import { IMG } from "@/lib/constants";
import SEO from "@/components/site/SEO";

export default function Endometriose() {
  return (
    <>
      <SEO
        title="Endométriose et alimentation anti-inflammatoire · Guadeloupe"
        description="Accompagnement holistique pour mieux vivre l'endométriose : alimentation anti-inflammatoire, digestion, fatigue chronique. À Bouillante et à distance."
        canonical="https://www.lamelodieducorps.com/specialites/endometriose"
      />
      <ThematicPage
      title="Endométriose et alimentation : accompagner son corps avec douceur"
      heroImg={IMG.endo}
      intro="Vivre avec l'endométriose, c'est composer avec fatigue profonde, troubles digestifs chroniques, inflammation, douleurs imprévisibles, charge mentale. Mon accompagnement ne remplace pas un suivi médical — il vient en complément, pour t'aider à soutenir ton corps et retrouver plus de confort au quotidien."
      h2="Les symptômes que tu vis peut-être"
      what={{
        paragraphs: [
          "L'endométriose est une maladie gynécologique inflammatoire et chronique qui touche environ 10 % des femmes en âge d'avoir des enfants. Les symptômes peuvent varier énormément d'une femme à l'autre.",
          "Ces symptômes ne doivent pas être banalisés. Tu as le droit de chercher du soutien.",
        ],
        bullets: [
          "Douleurs pendant les règles, parfois invalidantes",
          "Douleurs pelviennes chroniques",
          "Troubles digestifs récurrents (ballonnements, transit perturbé)",
          "Fatigue profonde et chronique",
          "Inflammation et douleurs diffuses",
          "Épuisement physique et mental",
        ],
      }}
      lien={{
        title: "Quel est le lien entre alimentation et endométriose ?",
        paragraphs: [
          "L'alimentation ne guérit pas l'endométriose. Mais elle peut soutenir certains terrains qui influencent ton confort.",
          "Dans une approche holistique, on cherche à comprendre ce qui nourrit vraiment ton corps, ce qui peut l'irriter, et ce qui est réaliste pour toi — sans ajouter de pression supplémentaire.",
        ],
      }}
      levers={[
        "L'inflammation chronique",
        "La digestion et le microbiote",
        "L'énergie et la récupération",
        "La stabilité glycémique",
        "Le transit et le confort intestinal",
        "La relation au corps",
      ]}
      work={{
        title: "Ce que nous pouvons travailler ensemble",
        items: [
          "L'équilibre de tes repas au quotidien",
          "La réduction des facteurs inflammatoires",
          "L'amélioration du confort digestif",
          "L'identification de tes sensibilités individuelles",
          "La gestion de la fatigue",
          "Le soutien du sommeil",
          "L'organisation du quotidien autour du cycle",
          "La reconnexion au corps avec douceur",
        ],
      }}
      faq={[
        { q: "Dois-je manger sans gluten avec l'endométriose ?",
          a: "Certaines femmes constatent un mieux-être en réduisant le gluten, d'autres non. Cela se travaille au cas par cas selon tes symptômes digestifs et tes sensibilités. Pas de règle universelle." },
        { q: "L'alimentation anti-inflammatoire, c'est compliqué à mettre en place ?",
          a: "Non. On commence par des ajustements progressifs et réalistes, adaptés à ta vie en Guadeloupe. L'objectif n'est pas la perfection, c'est le mieux-être durable." },
        { q: "Cet accompagnement remplace-t-il mon suivi médical ?",
          a: "Non. Mon accompagnement est complémentaire à ton suivi gynécologique et médical, jamais en remplacement." },
        { q: "Puis-je être accompagnée si je suis en métropole ?",
          a: "Oui, les consultations en visio sont disponibles partout en France avec la même qualité de suivi." },
      ]}
    />
    </>
  );
}
