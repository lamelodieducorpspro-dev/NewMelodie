"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";
import SEO from "@/components/site/SEO";
import StructuredData from "@/components/site/StructuredData";

const categories = [
  {
    title: "Sur les pathologies",
    items: [
      { q: "Peut-on guérir le SOPK par l'alimentation ?",
        a: "L'alimentation ne guérit pas le SOPK, mais elle peut considérablement améliorer les symptômes en soutenant l'équilibre hormonal, en stabilisant la glycémie et en réduisant l'inflammation. Beaucoup de femmes constatent une amélioration sur la fatigue, les fringales et la régularité du cycle." },
      { q: "Alimentation anti-inflammatoire endométriose : par où commencer ?",
        a: "On commence par identifier les facteurs inflammatoires les plus présents dans ton quotidien (sucres rapides, aliments transformés, sensibilités personnelles), puis on installe progressivement des bases anti-inflammatoires : végétaux variés, bons gras, protéines de qualité, hydratation. L'idée est d'avancer sans rigidité." },
      { q: "Quels aliments éviter avec le SOPK ?",
        a: "Il n'existe pas de liste universelle. Selon ta situation, on peut travailler sur la réduction des sucres rapides, des produits ultra-transformés ou de certains aliments selon ta sensibilité. Tout se fait au cas par cas, sans diabolisation." },
      { q: "Comment soulager les règles douloureuses naturellement ?",
        a: "L'alimentation anti-inflammatoire, le soutien du magnésium, la gestion du stress, le mouvement doux et certaines plantes peuvent contribuer à réduire les douleurs menstruelles. On travaille sur le cycle dans sa globalité." },
      { q: "Alimentation ménopause bouffées de chaleur : qu'est-ce qui aide vraiment ?",
        a: "Stabilité glycémique, hydratation, certaines plantes (sauge, actée à grappes selon les cas), réduction des excitants (café, alcool, sucre), gestion du stress et qualité du sommeil. Tout est abordé selon ta situation." },
    ],
  },
  {
    title: "Sur l'accompagnement",
    items: [
      { q: "Quelle est la différence entre nutritionniste et praticienne en nutrition holistique ?",
        a: "Je suis praticienne en nutrition santé holistique certifiée Hygie Pro — je ne suis pas diététicienne-nutritionniste diplômée d'État. Mon approche est préventive et globale : je ne pose pas de diagnostic et n'établis pas de prescription. Mon travail vient en complément du suivi médical." },
      { q: "Combien coûte un suivi en nutrition holistique ?",
        a: "L'appel découverte est gratuit. La séance bilan est à 90€ (cabinet/visio) ou 100€ (domicile). Les séances de suivi sont à 50€/60€. Minimum 4 séances de suivi sur 3 à 4 mois pour un vrai accompagnement." },
      { q: "Est-ce remboursé par la mutuelle ?",
        a: "Certaines mutuelles prennent en charge partiellement les consultations en nutrition holistique. Renseigne-toi auprès de la tienne — je peux te fournir une facture sur demande." },
      { q: "Comment se passe une consultation à distance ?",
        a: "On se retrouve en visioconférence (Zoom, Google Meet ou équivalent). La qualité de l'accompagnement reste identique : écoute, bilan approfondi, plan d'action personnalisé. De nombreuses clientes sont accompagnées entièrement en visio." },
      { q: "Combien de séances sont nécessaires ?",
        a: "L'accompagnement comprend une séance bilan + minimum 4 séances de suivi sur 3 à 4 mois. Le nombre peut évoluer selon tes besoins et ton rythme." },
    ],
  },
  {
    title: "Sur la pratique du yoga",
    items: [
      { q: "Quelle est la différence entre Yin Yoga et Kundalini Yoga ?",
        a: "Le Yin Yoga est une pratique lente et méditative où les postures sont tenues plusieurs minutes, idéale pour libérer les tensions profondes et calmer le système nerveux. Le Kundalini Yoga est dynamique : il associe postures, respiration, mantras et méditation pour libérer l'énergie vitale et développer la conscience de soi." },
      { q: "Le yoga peut-il aider avec les troubles hormonaux ?",
        a: "Oui. Le yoga (en particulier le Yin) aide à apaiser le système nerveux, réduire le cortisol (hormone du stress), améliorer la circulation pelvienne et favoriser l'équilibre hormonal. C'est un excellent complément à une approche nutrition." },
      { q: "Faut-il avoir de l'expérience pour faire du Yin Yoga ?",
        a: "Non, les cours sont accessibles à tous les niveaux, y compris les débutants complets. L'important est de venir avec curiosité et bienveillance envers toi-même." },
    ],
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: categories.flatMap((cat) =>
      cat.items.map((it) => ({
        "@type": "Question",
        name: it.q,
        acceptedAnswer: { "@type": "Answer", text: it.a },
      }))
    ),
  };

  return (
    <>
      <SEO
        title="FAQ nutrition holistique : SOPK, endométriose, ménopause · Apolline"
        description="Réponses aux questions fréquentes sur la nutrition holistique, l'accompagnement SOPK/endométriose/ménopause et les cours de yoga. Tout savoir avant ton RDV."
        canonical="https://www.lamelodieducorps.com/faq"
      />
      <StructuredData data={faqSchema} id="faq-schema" />
      <section className="pt-32 pb-16 md:pt-44">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="overline mb-5">FAQ</p>
          <h1 className="font-serif text-5xl md:text-7xl text-forest leading-[1.1] mb-6">
            Questions <em className="text-terracotta">fréquentes</em>
          </h1>
          <p className="text-lg text-[#4A5D54] leading-relaxed">
            Les questions qu'on me pose le plus souvent — et leurs réponses.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10 space-y-12">
          {categories.map((cat, ci) => (
            <div key={cat.title}>
              <h2 className="font-serif text-2xl md:text-3xl text-forest mb-6">{cat.title}</h2>
              <div className="space-y-3">
                {cat.items.map((item, ii) => {
                  const id = `${ci}-${ii}`;
                  const isOpen = open === id;
                  return (
                    <div key={id} className="bg-white rounded-2xl border border-[#E2DCD0] overflow-hidden">
                      <button
                        onClick={() => setOpen(isOpen ? null : id)}
                        data-testid={`faq-toggle-${id}`}
                        className="w-full flex items-center justify-between gap-6 p-6 text-left hover:bg-cream-2 transition"
                      >
                        <span className="font-serif text-lg text-forest">{item.q}</span>
                        {isOpen ? <Minus className="w-5 h-5 text-terracotta flex-shrink-0" /> : <Plus className="w-5 h-5 text-terracotta flex-shrink-0" />}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 text-sm text-[#4A5D54] leading-relaxed">{item.a}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-6">Une autre question ?</h2>
          <p className="text-[#4A5D54] mb-8">Le mieux, c'est qu'on en parle directement.</p>
          <Link href="/contact" className="btn-primary" data-testid="faq-cta">
            Réserver mon appel découverte gratuit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
