"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import SEO from "@/components/site/SEO";

export default function Tarifs() {
  return (
    <>
      <SEO
        title="Tarifs nutritionniste holistique Guadeloupe · La Mélodie du Corps"
        description="Tarifs transparents : appel découverte gratuit, bilan 90€, suivi 50€. Cabinet à Bouillante, domicile Côte-sous-le-Vent ou visio. Mutuelles parfois remboursées."
        canonical="https://www.lamelodieducorps.com/tarifs"
      />
      <section className="pt-32 pb-16 md:pt-44">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <p className="overline mb-5">Tarifs · La Mélodie du Corps</p>
          <h1 className="font-serif text-5xl md:text-7xl text-forest leading-[1.1] mb-6">
            Tarifs <em className="text-terracotta">clairs</em> et transparents
          </h1>
          <p className="text-lg text-[#4A5D54] leading-relaxed">
            Pour que tu puisses choisir ton accompagnement en toute sérénité.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl text-forest mb-8">Accompagnement nutrition holistique</h2>
          <div className="bg-white rounded-[2rem] overflow-hidden border border-[#E2DCD0]">
            <div className="grid grid-cols-12 bg-cream-2 px-6 py-4 text-xs uppercase tracking-[0.2em] text-sage font-medium">
              <div className="col-span-5 md:col-span-5">Séance</div>
              <div className="col-span-3 md:col-span-3">Durée</div>
              <div className="col-span-2 md:col-span-2 text-right">Cabinet / Visio</div>
              <div className="col-span-2 md:col-span-2 text-right">À domicile</div>
            </div>
            {[
              { s: "Appel découverte", d: "15 min", v: "Gratuit", h: "—" },
              { s: "Séance bilan", d: "2h", v: "90€", h: "100€" },
              { s: "Séance de suivi", d: "1h", v: "50€", h: "60€" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-12 px-6 py-6 border-t border-[#E2DCD0] items-center">
                <div className="col-span-5 md:col-span-5 font-serif text-xl text-forest">{row.s}</div>
                <div className="col-span-3 md:col-span-3 text-sm text-[#4A5D54]">{row.d}</div>
                <div className="col-span-2 md:col-span-2 text-right text-forest font-medium">{row.v}</div>
                <div className="col-span-2 md:col-span-2 text-right text-forest font-medium">{row.h}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#4A5D54] mt-4 italic">Supplément déplacement domicile inclus dans le tarif.</p>
        </div>
      </section>

      <section className="py-16 bg-cream-2">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl text-forest mb-8">Cours de yoga</h2>
          <div className="bg-white rounded-[2rem] overflow-hidden border border-[#E2DCD0]">
            <div className="grid grid-cols-12 bg-cream-2 px-6 py-4 text-xs uppercase tracking-[0.2em] text-sage font-medium">
              <div className="col-span-4">Cours</div>
              <div className="col-span-4">Horaire</div>
              <div className="col-span-2 text-right">Séance</div>
              <div className="col-span-2 text-right">10 cours</div>
            </div>
            {[
              { c: "Kundalini Yoga", h: "Lundi 18h–19h30", s: "15€", p: "130€" },
              { c: "Yin Yoga", h: "Mercredi 18h–19h", s: "12€", p: "100€" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-12 px-6 py-6 border-t border-[#E2DCD0] items-center">
                <div className="col-span-4 font-serif text-xl text-forest">{row.c}</div>
                <div className="col-span-4 text-sm text-[#4A5D54]">{row.h}</div>
                <div className="col-span-2 text-right text-forest font-medium">{row.s}</div>
                <div className="col-span-2 text-right text-forest font-medium">{row.p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl text-forest mb-8">Notes importantes</h2>
          <ul className="space-y-3">
            {[
              "Paiement en espèces ou par virement",
              "Certaines mutuelles remboursent partiellement — renseigne-toi auprès de la tienne",
              "Mon accompagnement est complémentaire au suivi médical, jamais en remplacement",
              "Aucun abonnement obligatoire — paiement à la séance",
            ].map((n, i) => (
              <li key={i} className="flex gap-3 items-start bg-cream-2 rounded-2xl p-5">
                <Check className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                <span className="text-[#1A2421]">{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-6">Une question avant de commencer ?</h2>
          <p className="text-[#4A5D54] mb-8">Un appel découverte gratuit de 15 minutes, sans engagement.</p>
          <Link href="/contact" className="btn-primary" data-testid="tarifs-cta">
            Réserver mon appel découverte gratuit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
