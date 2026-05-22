"use client";

import Link from "next/link";
import { ArrowRight, Check, MapPin, Car, Laptop, Sparkles, Heart, Moon, Brain, Leaf, Wind } from "lucide-react";
import { IMG } from "@/lib/constants";
import SEO from "@/components/site/SEO";

const pourQui = [
  "Souffre de SOPK, d'endométriose ou de troubles du cycle",
  "A un SPM marqué ou des règles douloureuses",
  "Traverse la ménopause ou la périménopause",
  "Ressent une fatigue chronique inexpliquée",
  "A des troubles digestifs persistants",
  "Veut équilibrer ses hormones naturellement",
  "Cherche à comprendre son corps, pas juste à perdre du poids",
];

const leviers = [
  { icon: Sparkles, t: "Nutrition", d: "Ajustements concrets, adaptés à ta vie en Guadeloupe. Pas de suppression brutale, pas de frustration." },
  { icon: Heart, t: "Cycle féminin & hormones", d: "Comprendre les phases du cycle et adapter l'alimentation en conséquence." },
  { icon: Moon, t: "Sommeil & récupération", d: "Le sommeil est un pilier hormonal fondamental." },
  { icon: Brain, t: "Gestion du stress", d: "Premier perturbateur hormonal. On identifie tes tensions et on met en place des outils concrets." },
  { icon: Leaf, t: "Plantes & compléments", d: "Quand c'est adapté, pour soutenir naturellement." },
  { icon: Wind, t: "Mouvement & respiration", d: "J'intègre le yoga et la respiration quand c'est pertinent." },
];

export default function Accompagnement() {
  return (
    <>
      <SEO
        title="Accompagnement nutrition holistique Guadeloupe · Apolline"
        description="Praticienne en nutrition holistique à Bouillante : SOPK, endométriose, ménopause, fatigue. Suivi personnalisé cabinet, domicile ou visio. Appel découverte gratuit."
        canonical="https://www.lamelodieducorps.com/accompagnement"
      />
      <section className="pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="overline mb-5">Mon accompagnement</p>
            <h1 className="font-serif text-4xl md:text-6xl text-forest leading-[1.1] mb-6">
              Accompagnement en <em className="text-terracotta">nutrition holistique</em> et santé féminine
            </h1>
            <p className="text-lg text-[#4A5D54] leading-relaxed mb-6">
              Un suivi global, personnalisé et progressif — spécialisé en santé hormonale féminine.
              SOPK · Endométriose · SPM · Ménopause · Fatigue chronique · Digestion.
            </p>
            <div className="flex flex-wrap gap-6 mb-8 text-sm text-[#4A5D54]">
              <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4 text-sage" /> Bouillante</span>
              <span className="inline-flex items-center gap-2"><Car className="w-4 h-4 text-sage" /> À domicile</span>
              <span className="inline-flex items-center gap-2"><Laptop className="w-4 h-4 text-sage" /> Visio France</span>
            </div>
            <Link href="/contact" data-testid="accomp-hero-cta" className="btn-primary">
              Réserver mon appel découverte gratuit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-5">
            <img src={IMG.life1} alt="" className="w-full rounded-[2rem] object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-2">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-6">Tu en as assez des solutions qui ne durent pas ?</h2>
          <p className="text-[#4A5D54] leading-relaxed max-w-3xl mx-auto">
            Prendre soin de sa santé, ce n'est pas chercher une solution miracle ni appliquer des règles toutes faites.
            C'est apprendre à comprendre son corps, ses besoins et les déséquilibres qui s'expriment au quotidien.
            Mon accompagnement t'aide à faire le lien entre tes symptômes, ton alimentation, ton mode de vie,
            ton stress, ta digestion et ton équilibre hormonal.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="overline mb-5">Pour qui</p>
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-10">Cet accompagnement s'adresse à toi si tu es une femme qui...</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {pourQui.map((b, i) => (
              <li key={i} className="bg-white rounded-2xl p-5 border border-[#E2DCD0] flex gap-3 items-start">
                <Check className="w-5 h-5 text-terracotta mt-0.5 flex-shrink-0" />
                <span className="text-[#1A2421]">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-cream-2">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="overline mb-5">Mon approche</p>
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-10 max-w-2xl">Je regarde tout, pas juste ton assiette</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {leviers.map((l) => {
              const Icon = l.icon;
              return (
                <div key={l.t} className="bg-white rounded-[1.5rem] p-7 border border-[#E2DCD0]">
                  <div className="w-12 h-12 rounded-full bg-cream-2 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-terracotta" />
                  </div>
                  <h3 className="font-serif text-2xl text-forest mb-2">{l.t}</h3>
                  <p className="text-sm text-[#4A5D54] leading-relaxed">{l.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="overline mb-5">Déroulement</p>
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-10">Comment se déroule concrètement un accompagnement ?</h2>
          <div className="space-y-5">
            {[
              { n: "01", t: "L'appel découverte", p: "Gratuit · 15 min · Sans engagement",
                d: "Tu me décris ta situation, tes symptômes, tes attentes. Je t'explique comment je travaille. Repars avec de la clarté." },
              { n: "02", t: "La séance bilan", p: "2h · 90€ cabinet/visio · 100€ domicile",
                d: "Un bilan approfondi : histoire de santé, alimentation, cycle, énergie, sommeil, stress, digestion, objectifs. Repars avec un plan d'action personnalisé." },
              { n: "03", t: "Les séances de suivi", p: "1h · 50€ cabinet/visio · 60€ domicile",
                d: "Minimum 4 séances sur 3 à 4 mois. On ajuste, on approfondit, on consolide. Disponibilité par message entre les séances." },
            ].map((s) => (
              <div key={s.n} className="grid md:grid-cols-12 gap-6 bg-cream-2 rounded-[2rem] p-8 md:p-12">
                <div className="md:col-span-2 font-serif text-6xl text-terracotta">{s.n}</div>
                <div className="md:col-span-7">
                  <h3 className="font-serif text-2xl text-forest mb-2">{s.t}</h3>
                  <p className="text-[#4A5D54] leading-relaxed">{s.d}</p>
                </div>
                <div className="md:col-span-3 flex md:items-center md:justify-end">
                  <span className="inline-block bg-white text-forest text-sm px-4 py-2 rounded-full font-medium border border-[#E2DCD0]">{s.p}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-2">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-6">Le premier pas ne coûte rien</h2>
          <p className="text-[#4A5D54] leading-relaxed mb-8 max-w-2xl mx-auto">
            Un appel de 15 minutes. Gratuit. Sans engagement. Tu me parles de toi, je t'explique comment je peux t'aider.
          </p>
          <Link href="/contact" className="btn-primary" data-testid="accomp-final-cta">
            Réserver mon appel découverte gratuit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
