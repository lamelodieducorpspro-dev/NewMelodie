"use client";

import Link from "next/link";
import { ArrowRight, GraduationCap, Sun, Moon, BookOpen, Star } from "lucide-react";
import { IMG, TESTIMONIALS } from "@/lib/constants";
import SEO from "@/components/site/SEO";

export default function APropos() {
  return (
    <>
      <SEO
        title="Apolline Maysounabe · Praticienne nutrition holistique Guadeloupe"
        description="Ingénieure devenue praticienne en nutrition holistique certifiée Hygie Pro et professeure de yoga à Bouillante. Mon parcours, ma vision, mes engagements."
        canonical="https://www.lamelodieducorps.com/a-propos"
      />
      <section className="pt-32 pb-20 md:pt-44">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="overline mb-5">À propos</p>
            <h1 className="font-serif text-4xl md:text-6xl text-forest leading-[1.1] mb-6">
              Je suis <em className="text-terracotta">Apolline</em>
            </h1>
            <p className="text-lg text-[#4A5D54] leading-relaxed">
              Praticienne en nutrition santé holistique et professeure de yoga à Bouillante, Guadeloupe.
              Certification Hygie Pro · Kundalini Yoga · Yin Yoga.
            </p>
          </div>
          <div className="lg:col-span-5">
            <img src={IMG.about} alt="Apolline" className="w-full rounded-[2rem] object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-2">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-8">Mon parcours</h2>
          <div className="space-y-4 text-[#4A5D54] leading-relaxed">
            <p>
              Ingénieure de formation, j'ai d'abord travaillé dans la protection de l'environnement —
              un domaine qui comptait pour moi, mais dans lequel je ressentais un manque d'alignement
              profond entre mes valeurs et mon rythme de vie.
            </p>
            <p>
              Avec le temps, j'ai ressenti un besoin fort de réalignement : revenir à plus de sens,
              de présence et de cohérence entre ce que je vivais et ce que je ressentais vraiment.
            </p>
            <p>
              Ce chemin m'a amenée jusqu'en Guadeloupe. Ici, j'ai appris à ralentir, à écouter,
              à me reconnecter à mon corps, à la nature, à ce qui m'animait réellement.
            </p>
            <p>
              Aujourd'hui, je travaille à Bouillante, entourée de la mer des Caraïbes, de la forêt tropicale
              et d'une communauté qui partage ces valeurs d'équilibre et de conscience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-10">Ma formation</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: GraduationCap, t: "Certification Hygie Pro", d: "Formation complète en nutrition santé préventive et holistique — Lisa Salis. Approche globale par l'alimentation, l'hygiène de vie et la prévention." },
              { icon: Sun, t: "Professeure de Kundalini Yoga", d: "Pratique axée sur l'énergie, la respiration, la méditation et la conscience corporelle." },
              { icon: Moon, t: "Professeure de Yin Yoga", d: "Pratique profonde et méditative pour libérer les tensions et rééquilibrer le système nerveux." },
              { icon: BookOpen, t: "Formation continue", d: "Je me forme régulièrement sur la santé hormonale féminine, la nutrition fonctionnelle et les médecines douces." },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.t} className="bg-cream-2 rounded-[1.5rem] p-7">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-terracotta" />
                  </div>
                  <h3 className="font-serif text-2xl text-forest mb-2">{c.t}</h3>
                  <p className="text-sm text-[#4A5D54] leading-relaxed">{c.d}</p>
                </div>
              );
            })}
          </div>
          <p className="mt-8 text-sm italic text-[#4A5D54] max-w-3xl">
            Note de transparence : je suis praticienne en nutrition santé holistique — je ne suis pas diététicienne-nutritionniste
            au sens légal du terme (diplôme d'État). Mon approche est préventive et complémentaire au suivi médical.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream-2">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-10">Ce en quoi je crois profondément</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { t: "L'autonomie avant tout", d: "Mon objectif n'est pas que tu aies besoin de moi pour toujours. C'est que tu comprennes ton corps assez bien pour faire tes propres choix en conscience." },
              { t: "La douceur plutôt que la restriction", d: "Je ne crois pas aux régimes drastiques ni aux listes d'aliments interdits. Je crois en des ajustements progressifs, réalistes et durables." },
              { t: "La globalité plutôt que le symptôme", d: "Une douleur, une fatigue, un déséquilibre hormonal — ce sont des signaux, pas des ennemis. Mon travail est de comprendre ce que ton corps essaie de te dire." },
              { t: "La présence et l'écoute", d: "Chaque personne que j'accompagne a une histoire unique. Je prends le temps de vraiment comprendre la tienne avant de proposer quoi que ce soit." },
            ].map((v) => (
              <div key={v.t} className="bg-white rounded-[1.5rem] p-7 border border-[#E2DCD0]">
                <h3 className="font-serif text-2xl text-forest mb-3">{v.t}</h3>
                <p className="text-sm text-[#4A5D54] leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <img src={IMG.life1} alt="" className="rounded-[2rem] w-full object-cover" />
          </div>
          <div className="md:col-span-7">
            <h2 className="font-serif text-3xl md:text-4xl text-forest mb-6">La Guadeloupe comme terrain de vie</h2>
            <div className="space-y-4 text-[#4A5D54] leading-relaxed">
              <p>
                Bouillante, c'est la Côte-sous-le-Vent. La mer turquoise, la Réserve Cousteau à deux pas,
                la forêt tropicale qui descend jusqu'à la mer.
              </p>
              <p>
                Connaître la réalité guadeloupéenne me permet de proposer des recommandations adaptées
                aux produits locaux, au mode de vie caribéen et aux défis spécifiques de l'île.
                Pas de conseils déconnectés de ta réalité quotidienne.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-2">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-10 text-center">Ce qu'en disent celles qui m'ont fait confiance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white rounded-[2rem] p-8 border border-[#E2DCD0]">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, k) => <Star key={k} className="w-4 h-4 fill-terracotta text-terracotta" />)}
                </div>
                <p className="font-serif text-lg text-forest italic mb-4 leading-relaxed">"{t.text}"</p>
                <p className="text-sm text-[#4A5D54]">— {t.name} · {t.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-forest mb-6">Tu veux savoir si mon accompagnement est fait pour toi ?</h2>
          <p className="text-[#4A5D54] mb-8">Le meilleur moyen de le savoir, c'est de se parler.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary" data-testid="apropos-cta-primary">
              Réserver mon appel découverte <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/accompagnement" className="btn-secondary">Découvrir mon accompagnement</Link>
          </div>
        </div>
      </section>
    </>
  );
}
