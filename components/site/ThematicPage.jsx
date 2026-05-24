"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, MapPin, Phone, Laptop } from "lucide-react";

export default function ThematicPage({ title, heroImg, heroAlt, intro, h2, what, lien, levers, work, faq }) {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-44 md:pb-24" data-testid="thematic-hero">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="overline mb-5">Pathologie · Approche holistique</p>
            <h1 className="font-serif text-4xl md:text-6xl text-forest leading-[1.1] mb-6">{title}</h1>
            <p className="text-lg text-[#4A5D54] leading-relaxed">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary" data-testid="thematic-cta-hero">
                Réserver mon appel découverte <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/mon-accompagnement" className="btn-secondary">Mon accompagnement</Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-square w-full overflow-hidden rounded-[2rem]">
              <Image
                src={heroImg}
                alt={heroAlt || title}
                fill
                priority
                quality={85}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-2">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-6">{h2}</h2>
          <div className="text-[#4A5D54] leading-relaxed space-y-4">
            {what.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          {what.bullets && (
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {what.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 items-start bg-white rounded-2xl p-4 border border-[#E2DCD0]">
                  <Check className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-6">{lien.title}</h2>
          <div className="text-[#4A5D54] leading-relaxed space-y-4 mb-8">
            {lien.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {levers.map((b, i) => (
              <li key={i} className="flex gap-3 items-start bg-cream-2 rounded-2xl p-4">
                <span className="w-2 h-2 mt-2 rounded-full bg-sage flex-shrink-0"></span>
                <span className="text-sm text-[#1A2421]">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-cream-2">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-8">{work.title}</h2>
          <ul className="space-y-3">
            {work.items.map((b, i) => (
              <li key={i} className="flex gap-3 items-start bg-white rounded-2xl p-5 border border-[#E2DCD0]">
                <Check className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                <span className="text-[#1A2421]">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-10">Comment se déroule l'accompagnement ?</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { t: "Appel découverte", p: "Gratuit · 15 min", d: "On se parle de ta situation et de tes attentes." },
              { t: "Séance bilan", p: "2h · 90€ / 100€", d: "Un bilan approfondi de ton terrain et un plan d'action." },
              { t: "Séances de suivi", p: "1h · 50€ / 60€", d: "Min. 4 séances sur 3 à 4 mois pour ancrer les changements." },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-[1.5rem] p-7 border border-[#E2DCD0]">
                <span className="overline">Étape {i + 1}</span>
                <h3 className="font-serif text-2xl text-forest mt-3 mb-2">{s.t}</h3>
                <p className="text-sm text-terracotta font-medium mb-3">{s.p}</p>
                <p className="text-sm text-[#4A5D54]">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-[#4A5D54]">
            <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4 text-sage" /> Cabinet à Bouillante</span>
            <span className="inline-flex items-center gap-2"><Phone className="w-4 h-4 text-sage" /> À domicile Côte-sous-le-Vent</span>
            <span className="inline-flex items-center gap-2"><Laptop className="w-4 h-4 text-sage" /> Visio France entière</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-2">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-10">Questions fréquentes</h2>
          <div className="space-y-4">
            {faq.map((q, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#E2DCD0]">
                <h3 className="font-serif text-xl text-forest mb-2">{q.q}</h3>
                <p className="text-sm text-[#4A5D54] leading-relaxed">{q.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary" data-testid="thematic-cta-final">
              Réserver mon appel découverte gratuit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
