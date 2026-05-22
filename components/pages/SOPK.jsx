"use client";

import ThematicPage from "@/components/site/ThematicPage";
import { IMG } from "@/lib/constants";
import SEO from "@/components/site/SEO";

export default function SOPK() {
  return (
    <>
      <SEO
        title="SOPK et alimentation : équilibre hormonal naturel · Guadeloupe"
        description="Accompagnement en nutrition holistique pour mieux vivre le SOPK : cycle irrégulier, fatigue, fringales, inflammation. Consultations à Bouillante et à distance."
        canonical="https://www.lamelodieducorps.com/specialites/sopk"
      />
      <ThematicPage
      title="SOPK et alimentation : soutenir son équilibre hormonal naturellement"
      heroImg={IMG.sopk}
      intro="Cycles irréguliers ou absents, acné hormonale, fatigue persistante, fringales intenses, prise de poids difficile à comprendre… Tu n'as pas besoin de t'imposer un régime strict pour commencer à prendre soin de ton équilibre hormonal."
      h2="Le SOPK ne se résume pas aux ovaires"
      what={{
        paragraphs: [
          "Le SOPK est un trouble hormonal complexe lié à un dérèglement d'origine ovarienne et/ou centrale. Mais dans le quotidien, ce dérèglement ne se manifeste pas uniquement au niveau du cycle.",
          "Une approche globale est souvent nécessaire — pas juste un protocole alimentaire.",
        ],
        bullets: [
          "L'énergie et la fatigue",
          "La peau et l'acné",
          "Les fringales et la glycémie",
          "La digestion",
          "La relation au poids",
          "L'humeur et la charge mentale",
        ],
      }}
      lien={{
        title: "Pourquoi l'alimentation peut jouer un rôle important",
        paragraphs: [
          "L'alimentation ne « guérit » pas le SOPK. Mais elle peut soutenir certains grands équilibres du corps.",
          "L'objectif n'est pas de te donner une liste d'aliments interdits, c'est de comprendre ce dont ton corps a besoin pour retrouver davantage de stabilité.",
        ],
      }}
      levers={[
        "La stabilité de la glycémie",
        "L'inflammation chronique",
        "Les apports en protéines, fibres et bons gras",
        "La digestion et le microbiote",
        "Le rythme des repas",
        "La relation émotionnelle à l'alimentation",
        "Le stress et le sommeil",
      ]}
      work={{
        title: "Ce que nous pouvons travailler ensemble",
        items: [
          "Mieux comprendre ton fonctionnement hormonal",
          "Stabiliser progressivement ton énergie",
          "Réduire les variations de glycémie",
          "Soutenir ta digestion",
          "Apaiser certaines fringales",
          "Remettre du cadre sans rigidité",
          "Retrouver une alimentation plus sereine",
          "Construire des habitudes réalistes et durables",
        ],
      }}
      faq={[
        { q: "L'alimentation peut-elle vraiment changer les choses avec le SOPK ?",
          a: "Elle ne guérit pas le SOPK, mais elle peut soutenir l'équilibre hormonal, réduire l'inflammation et améliorer le confort au quotidien. Beaucoup de femmes constatent des améliorations sur la fatigue, les fringales et la régularité du cycle." },
        { q: "Faut-il arrêter le gluten ou les produits laitiers ?",
          a: "Pas forcément. Ces questions se traitent au cas par cas selon ta situation. Il n'existe pas de liste universelle d'aliments à supprimer avec le SOPK." },
        { q: "Cet accompagnement remplace-t-il mon suivi gynécologique ?",
          a: "Non. Mon accompagnement est complémentaire à ton suivi médical, jamais en remplacement." },
        { q: "Puis-je être accompagnée si je suis en métropole ?",
          a: "Oui, les consultations en visio sont disponibles partout en France." },
      ]}
    />
    </>
  );
}
