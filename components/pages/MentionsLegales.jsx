"use client";

import SEO from "@/components/site/SEO";

const items = [
  { label: "Nom commercial", value: "La Mélodie du Corps" },
  { label: "Nom", value: "Apolline Maysounabe" },
  { label: "Statut", value: "Entrepreneur individuel" },
  { label: "Adresse", value: "Rue des Manguiers, 97125 Bouillante, Guadeloupe" },
  { label: "Email", value: "lamelodieducorps.pro@gmail.com" },
  { label: "Téléphone", value: "+33 6 51 16 66 69" },
  { label: "Numéro SIRET", value: "994 629 723 00010" },
  { label: "Activité", value: "Coaching et accompagnement en nutrition, santé préventive et holistique" },
  { label: "Directrice de la publication", value: "Apolline Maysounabe" },
  { label: "Hébergeur", value: "Emergent Labs (préview) — Vercel/Wix pour la mise en production." },
];

export default function MentionsLegales() {
  return (
    <>
      <SEO title="Mentions légales · La Mélodie du Corps" description="Mentions légales du site lamelodieducorps.com." canonical="https://www.lamelodieducorps.com/mentions-legales" />
      <section className="pt-32 pb-20 md:pt-44">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <p className="overline mb-5">Légal</p>
          <h1 className="font-serif text-4xl md:text-6xl text-forest leading-[1.1] mb-12">Mentions légales</h1>

          <dl className="space-y-4">
            {items.map((it) => (
              <div key={it.label} className="grid sm:grid-cols-3 gap-2 bg-white rounded-2xl p-5 border border-[#E2DCD0]">
                <dt className="font-medium text-forest">{it.label}</dt>
                <dd className="sm:col-span-2 text-[#4A5D54]">{it.value}</dd>
              </div>
            ))}
          </dl>

          <h2 className="font-serif text-2xl text-forest mt-12 mb-3">Propriété intellectuelle</h2>
          <p className="text-[#4A5D54] leading-relaxed">
            L'ensemble du contenu de ce site (textes, images, logos, vidéos) est la propriété exclusive de
            La Mélodie du Corps, sauf mention contraire. Toute reproduction, représentation, modification
            ou exploitation, totale ou partielle, sans autorisation écrite préalable est interdite.
          </p>

          <h2 className="font-serif text-2xl text-forest mt-10 mb-3">Données personnelles</h2>
          <p className="text-[#4A5D54] leading-relaxed">
            Voir la <a href="/politique-confidentialite" className="text-terracotta underline">Politique de confidentialité</a>.
          </p>

          <p className="text-xs text-[#4A5D54] italic mt-12">Dernière mise à jour : mai 2026</p>
        </div>
      </section>
    </>
  );
}
