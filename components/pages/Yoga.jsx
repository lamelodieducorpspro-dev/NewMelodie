"use client";

import Link from "next/link";
import { Calendar, MapPin, ArrowRight, Check } from "lucide-react";
import { IMG, WHATSAPP_LINK, WHATSAPP_DISPLAY } from "@/lib/constants";
import SEO from "@/components/site/SEO";

export default function Yoga() {
  return (
    <>
      <SEO
        title="Cours de Yoga à Bouillante, Guadeloupe · Yin & Kundalini"
        description="Cours hebdomadaires de Yin Yoga (mercredi 18h) et Kundalini Yoga (lundi 18h) au Yoga'Niti Studio à Bouillante, Guadeloupe. Tous niveaux. À partir de 12€."
        canonical="https://www.lamelodieducorps.com/yoga"
      />
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={IMG.yoga} alt="Cours de yoga à Bouillante, Guadeloupe — méditation et bien-être" loading="eager" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/70 to-cream" />
        </div>
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <p className="overline mb-5">Yoga'Niti Studio · Bouillante, Guadeloupe</p>
          <h1 className="font-serif text-4xl md:text-7xl text-forest leading-[1.1] mb-6">
            Cours de <em className="text-terracotta">Kundalini</em><br />& Yin Yoga<br />
            <span className="text-3xl md:text-5xl">à Bouillante, Guadeloupe</span>
          </h1>
          <p className="text-lg text-[#4A5D54] leading-relaxed max-w-2xl mx-auto mb-8">
            Un espace pour revenir au corps, au souffle et à soi. Des cours collectifs accessibles
            à tous les niveaux, dans un cadre bienveillant et naturel.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" data-testid="yoga-hero-cta" className="btn-primary">
            S'inscrire par WhatsApp <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-12 text-center">Le planning des cours</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2rem] p-10 border border-[#E2DCD0]">
              <p className="overline mb-3 !text-terracotta">Kundalini Yoga · avec Damien</p>
              <h3 className="font-serif text-3xl text-forest mb-5">L'énergie qui se réveille</h3>
              <div className="space-y-3 text-[#4A5D54] mb-6">
                <p className="flex items-center gap-2"><Calendar className="w-4 h-4 text-sage" /> Lundi · 18h00 – 19h30</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-sage" /> Yoga'Niti Studio, Village de Bouillante</p>
              </div>
              <div className="bg-cream-2 rounded-2xl p-5 mb-6">
                <p className="text-2xl font-serif text-forest">15€ <span className="text-sm text-[#4A5D54]">/ cours</span></p>
                <p className="text-sm text-[#4A5D54]">130€ les 10 cours · <span className="text-terracotta">économisez 20€</span></p>
              </div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-secondary w-full justify-center">
                S'inscrire
              </a>
            </div>

            <div className="bg-forest text-white rounded-[2rem] p-10">
              <p className="overline mb-3 !text-sand">Yin Yoga · avec Apolline</p>
              <h3 className="font-serif text-3xl !text-white mb-5">La douceur qui va en profondeur</h3>
              <div className="space-y-3 text-[#D5C8B5] mb-6">
                <p className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Mercredi · 18h00 – 19h00</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Yoga'Niti Studio, Village de Bouillante</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-5 mb-6">
                <p className="text-2xl font-serif text-white">12€ <span className="text-sm text-[#D5C8B5]">/ cours</span></p>
                <p className="text-sm text-[#D5C8B5]">100€ les 10 cours · <span className="text-terracotta">économisez 20€</span></p>
              </div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
                className="inline-flex w-full justify-center bg-terracotta hover:bg-[#a87863] text-white px-6 py-3.5 rounded-full font-medium transition">
                S'inscrire
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-2">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-12 text-center">Pourquoi intégrer le yoga dans ta vie ?</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img src={IMG.yoga} alt="Cours de yoga à Bouillante, Guadeloupe — séance Yin et Kundalini Yoga sous l'arbre de vie au Yoga'Niti Studio" loading="lazy" className="rounded-[2rem] w-full object-cover" />
            <div className="space-y-4 text-[#4A5D54] leading-relaxed">
              <p>
                Le stress chronique, la charge mentale et la déconnexion au corps peuvent avoir un impact
                important sur les hormones, la digestion, l'énergie, le sommeil et le système nerveux.
              </p>
              <p>
                Le yoga offre un espace pour ralentir, respirer et revenir à l'écoute de soi.
                Ici, il n'est pas question de performance ni de souplesse parfaite.
              </p>
              <p>Le yoga est proposé comme un espace de présence, accessible à chacun·e, quel que soit son niveau.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-10 text-center">Ces cours sont faits pour toi si...</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Tu veux commencer le yoga dans un cadre bienveillant et non compétitif",
              "Tu cherches à évacuer le stress de la semaine",
              "Tu souffres de tensions chroniques (dos, hanches, épaules)",
              "Tu traverses un déséquilibre hormonal (SOPK, ménopause)",
              "Tu veux prendre soin de toi sans performance ni pression",
              "Tu veux combiner yoga et nutrition pour une approche globale",
            ].map((b, i) => (
              <li key={i} className="bg-cream-2 rounded-2xl p-5 flex items-start gap-3">
                <Check className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                <span className="text-[#1A2421]">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-cream-2">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-10 text-center">Infos pratiques</h2>
          <div className="space-y-4">
            {[
              { q: "Que faut-il apporter ?", a: "Un tapis de yoga si tu en as un (quelques tapis disponibles sur place), une tenue confortable, une bouteille d'eau." },
              { q: "Faut-il réserver à l'avance ?", a: "Oui, l'inscription est recommandée pour garantir ta place. Contacte-nous par WhatsApp avant le cours." },
              { q: "Comment payer ?", a: "En espèces ou par virement, sur place ou à l'avance pour les cartes de 10 cours." },
              { q: "Je suis débutante, est-ce adapté ?", a: "Oui, les deux cours sont accessibles aux débutants. Arrive quelques minutes avant pour te présenter." },
              { q: "Les cours ont-ils lieu toute l'année ?", a: "Les cours suivent le calendrier scolaire de Guadeloupe. En cas d'annulation, les inscrits sont prévenus par WhatsApp." },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#E2DCD0]">
                <h3 className="font-serif text-xl text-forest mb-2">{f.q}</h3>
                <p className="text-sm text-[#4A5D54] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-primary">
              S'inscrire par WhatsApp · {WHATSAPP_DISPLAY} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
