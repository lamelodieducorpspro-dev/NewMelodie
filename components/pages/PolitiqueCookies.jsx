"use client";

import SEO from "@/components/site/SEO";

const sections = [
  {
    t: "1. Qu'est-ce qu'un cookie ?",
    c: ["Un cookie est un petit fichier déposé sur ton appareil lors de la consultation d'un site. Il permet au site de mémoriser certaines informations et d'améliorer ton expérience."],
  },
  {
    t: "2. Cookies utilisés sur ce site",
    c: [
      "— Cookies techniques : indispensables au fonctionnement du site (gestion de la session, préférences).",
      "— Cookies de mesure d'audience (Google Analytics) : me permettent de comprendre comment les visiteurs utilisent le site, de façon anonyme.",
      "— Pas de cookies publicitaires ni de traceurs commerciaux.",
    ],
  },
  {
    t: "3. Durée de conservation",
    c: ["Les cookies sont conservés au maximum 13 mois, conformément aux recommandations de la CNIL."],
  },
  {
    t: "4. Gestion des cookies",
    c: [
      "Tu peux à tout moment configurer ton navigateur pour accepter ou refuser les cookies :",
      "— Chrome : Paramètres → Confidentialité et sécurité → Cookies.",
      "— Safari : Préférences → Confidentialité.",
      "— Firefox : Paramètres → Vie privée et sécurité.",
    ],
  },
  {
    t: "5. Cookies tiers",
    c: [
      "Lors d'une prise de rendez-vous via Setmore, des cookies de Setmore peuvent être déposés sur ton navigateur. Pour en savoir plus, consulte la politique de cookies de Setmore.",
    ],
  },
];

export default function PolitiqueCookies() {
  return (
    <>
      <SEO title="Politique des cookies · La Mélodie du Corps" description="Information sur l'utilisation des cookies sur lamelodieducorps.com." canonical="https://www.lamelodieducorps.com/politique-cookies" />
      <section className="pt-32 pb-20 md:pt-44">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <p className="overline mb-5">Légal</p>
          <h1 className="font-serif text-4xl md:text-6xl text-forest leading-[1.1] mb-12">Politique des cookies</h1>
          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.t}>
                <h2 className="font-serif text-2xl text-forest mb-3">{s.t}</h2>
                {s.c.map((p, i) => <p key={i} className="text-[#4A5D54] leading-relaxed mb-2">{p}</p>)}
              </div>
            ))}
          </div>
          <p className="text-xs text-[#4A5D54] italic mt-12">Dernière mise à jour : mai 2026</p>
        </div>
      </section>
    </>
  );
}
