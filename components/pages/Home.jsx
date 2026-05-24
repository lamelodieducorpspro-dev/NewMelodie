"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, ArrowRight, Sparkles, Heart, Moon, Brain, Eye, Leaf, MapPin, Phone, Laptop } from "lucide-react";
import { IMG, TESTIMONIALS, WHATSAPP_LINK, WHATSAPP_DISPLAY, ADDRESS, GOOGLE_REVIEWS } from "@/lib/constants";
import SEO from "@/components/site/SEO";
import ElfsightWidget from "@/components/site/ElfsightWidget";

const symptoms = [
  "Ballonnements ou troubles digestifs fréquents",
  "Fatigue persistante sans explication claire",
  "SPM marqué ou règles douloureuses",
  "Cycle irrégulier ou difficile à vivre",
  "SOPK, endométriose ou troubles gynécologiques",
  "Stress chronique, charge mentale, sommeil perturbé",
  "Préménopause ou ménopause inconfortable",
  "Sensation que ton corps est déséquilibré",
];

const pillars = [
  { icon: Sparkles, title: "Alimentation", desc: "Des ajustements concrets adaptés à ta vie réelle en Guadeloupe, sans frustration ni perfection." },
  { icon: Heart, title: "Cycle féminin & hormones", desc: "Comprendre et soutenir l'équilibre hormonal à chaque étape de la vie." },
  { icon: Moon, title: "Sommeil & hygiène de vie", desc: "Parce que tout est lié : on travaille sur l'ensemble." },
  { icon: Brain, title: "Stress & système nerveux", desc: "Le stress est le premier perturbateur hormonal. On l'identifie et on l'apprivoise." },
  { icon: Eye, title: "Écoute du corps", desc: "Apprendre à reconnaître ses signaux pour agir en conscience." },
  { icon: Leaf, title: "Plantes & compléments", desc: "Quand c'est pertinent, pour soutenir l'équilibre naturellement." },
];

const specialties = [
  { tag: "SOPK", title: "SOPK", img: IMG.sopk, to: "/sopk-alimentation-guadeloupe",
    desc: "Cycles irréguliers, fatigue, fringales, acné, prise de poids... L'alimentation est l'un des leviers les plus puissants pour soutenir ton équilibre hormonal naturellement." },
  { tag: "Endométriose", title: "Endométriose", img: IMG.endo, to: "/endometriose-alimentation-guadeloupe",
    desc: "Douleurs chroniques, inflammation, troubles digestifs, fatigue profonde... Une approche holistique peut considérablement améliorer ton confort au quotidien." },
  { tag: "Ménopause", title: "Ménopause & périménopause", img: IMG.menopause, to: "/menopause-alimentation-guadeloupe",
    desc: "Bouffées de chaleur, prise de poids, fatigue, humeur... Cette transition mérite un accompagnement doux, personnalisé et naturel." },
];

const steps = [
  { num: "01", title: "Appel découverte", price: "Gratuit · 15 min", desc: "On fait connaissance. Tu me parles de ta situation, je t'explique comment je peux t'aider. Aucune pression." },
  { num: "02", title: "Séance bilan", price: "2h · 90€ cabinet/visio · 100€ domicile", desc: "Un bilan approfondi sur ta santé globale : alimentation, cycle, énergie, sommeil, stress, digestion." },
  { num: "03", title: "Séances de suivi", price: "1h · 50€ cabinet/visio · 60€ domicile", desc: "Minimum 4 séances sur 3 à 4 mois. On ajuste, on approfondit, on avance à ton rythme." },
];

export default function Home() {
  return (
    <>
      <SEO
        title="La Mélodie du Corps · Nutrition Holistique & Santé Féminine · Guadeloupe"
        description="Apolline accompagne les femmes en nutrition holistique et santé hormonale féminine à Bouillante, Guadeloupe et à distance. SOPK, endométriose, ménopause, fatigue. Appel découverte gratuit."
        canonical="https://www.lamelodieducorps.com/"
      />
      {/* HERO */}
      <section data-testid="hero-section" className="relative pt-28 pb-16 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={IMG.hero}
            alt=""
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/80 to-cream" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 fade-in-up">
            {/* Mobile-only hero portrait */}
            <div className="lg:hidden relative mb-8 mx-auto max-w-sm">
              <Image
                src={IMG.life2}
                alt="Apolline Maysounabe, praticienne en nutrition holistique à Bouillante, Guadeloupe, souriante devant la mer des Caraïbes"
                width={400}
                height={500}
                priority
                quality={85}
                sizes="(max-width: 768px) 80vw, 400px"
                className="w-full rounded-[2rem] object-cover shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-[#E2DCD0]">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-terracotta text-terracotta" />)}
                </div>
                <p className="text-xs text-[#1A2421] font-medium">7 avis · 5/5 sur Google</p>
              </div>
            </div>

            <p className="overline mb-5">Praticienne en nutrition holistique · Guadeloupe</p>
            <h1 className="font-serif text-[2.5rem] sm:text-5xl md:text-7xl text-forest leading-[1.05] mb-6">
              Nutrition holistique<br />
              & <em className="text-terracotta">santé hormonale</em><br />
              féminine
            </h1>
            <p className="text-lg text-[#4A5D54] max-w-xl mb-8 leading-relaxed">
              Tu souffres de SOPK, d'endométriose, de fatigue chronique ou de troubles du cycle ?
              J'accompagne les femmes à mieux comprendre leur corps et à retrouver équilibre,
              énergie et sérénité — par l'alimentation et l'hygiène de vie.
            </p>
            <div className="flex flex-wrap gap-6 mb-10 text-sm text-[#4A5D54]">
              <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4 text-sage" /> Cabinet à Bouillante</span>
              <span className="inline-flex items-center gap-2"><Phone className="w-4 h-4 text-sage" /> À domicile</span>
              <span className="inline-flex items-center gap-2"><Laptop className="w-4 h-4 text-sage" /> Visio France entière</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" data-testid="hero-cta-primary" className="btn-primary">
                Réserver mon appel découverte gratuit <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/mon-accompagnement" data-testid="hero-cta-secondary" className="btn-secondary">
                Découvrir mon accompagnement
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative">
              <Image
                src={IMG.life2}
                alt="Apolline Maysounabe, praticienne en nutrition holistique à Bouillante, Guadeloupe"
                width={560}
                height={700}
                priority
                quality={85}
                sizes="(min-width: 1024px) 40vw, 0vw"
                className="w-full rounded-[2rem] object-cover shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
              />
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-5 shadow-xl border border-[#E2DCD0] w-64">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-terracotta text-terracotta" />)}
                </div>
                <p className="text-sm text-[#1A2421] font-medium">7 avis · 5/5 sur Google</p>
                <p className="text-xs text-[#4A5D54] mt-1">Écoute, bienveillance, professionnalisme</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IDENTIFICATION */}
      <section className="py-24 md:py-32 bg-cream-2" data-testid="identification-section">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="overline mb-5">Tu te reconnais ?</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6 leading-tight">
              Tu te reconnais dans l'une de ces situations ?
            </h2>
            <p className="text-[#4A5D54] leading-relaxed mb-6">
              Tu as peut-être déjà essayé plusieurs solutions, sans résultat durable.
              Mon accompagnement t'aide à faire le lien entre tes symptômes, ton alimentation,
              ton mode de vie et ton équilibre hormonal — pour avancer avec des solutions concrètes
              et adaptées à ton quotidien.
            </p>
            <Link href="/contact" data-testid="identification-cta" className="btn-primary">
              Échangeons sur ta situation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-3">
            {symptoms.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-[#E2DCD0] flex items-start gap-3 hover:border-sage transition">
                <span className="w-2 h-2 rounded-full bg-terracotta mt-2.5 flex-shrink-0"></span>
                <span className="text-sm text-[#1A2421] leading-relaxed">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPÉCIALITÉS */}
      <section className="py-24 md:py-32" data-testid="specialties-section">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16">
            <p className="overline mb-5">Mes spécialités</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight">
              Je suis spécialisée dans la santé hormonale féminine
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {specialties.map((sp) => (
              <Link key={sp.tag} href={sp.to} data-testid={`specialty-card-${sp.tag.toLowerCase()}`}
                className="group block bg-white rounded-[2rem] overflow-hidden border border-[#E2DCD0] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={sp.img}
                    alt={`${sp.title} en Guadeloupe — accompagnement nutrition holistique par Apolline Maysounabe à Bouillante`}
                    fill
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <p className="overline mb-3">{sp.tag}</p>
                  <h3 className="font-serif text-2xl text-forest mb-3">{sp.title}</h3>
                  <p className="text-sm text-[#4A5D54] leading-relaxed mb-5">{sp.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sm text-forest font-medium">
                    En savoir plus <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* APPROCHE 6 piliers */}
      <section className="py-24 md:py-32 bg-cream-2" data-testid="approach-section">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16">
            <p className="overline mb-5">Mon approche</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight mb-5">
              Une autre façon de prendre soin de sa santé
            </h2>
            <p className="text-[#4A5D54] leading-relaxed">
              C'est apprendre à mieux se connaître, écouter les signaux du corps
              et mettre en place des ajustements progressifs qui respectent ton rythme.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-white rounded-[1.5rem] p-8 border border-[#E2DCD0]">
                  <div className="w-12 h-12 rounded-full bg-cream-2 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-terracotta" />
                  </div>
                  <h3 className="font-serif text-2xl text-forest mb-3">{p.title}</h3>
                  <p className="text-sm text-[#4A5D54] leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DÉROULEMENT */}
      <section className="py-24 md:py-32" data-testid="process-section">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-16">
            <p className="overline mb-5">Comment ça se passe</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight">
              Concrètement, comment ça se passe ?
            </h2>
          </div>
          <div className="space-y-5">
            {steps.map((s) => (
              <div key={s.num} className="grid md:grid-cols-12 gap-6 bg-white rounded-[2rem] p-8 md:p-12 border border-[#E2DCD0]">
                <div className="md:col-span-2">
                  <span className="font-serif text-6xl text-terracotta">{s.num}</span>
                </div>
                <div className="md:col-span-7">
                  <h3 className="font-serif text-3xl text-forest mb-2">{s.title}</h3>
                  <p className="text-[#4A5D54] leading-relaxed">{s.desc}</p>
                </div>
                <div className="md:col-span-3 flex md:justify-end md:items-center">
                  <span className="inline-block bg-cream-2 text-forest text-sm px-4 py-2 rounded-full font-medium">{s.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" data-testid="process-cta" className="btn-primary">
              Réserver mon appel découverte gratuit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* QUI JE SUIS */}
      <section className="py-24 md:py-32 bg-cream-2" data-testid="about-section">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <Image
              src={IMG.about}
              alt="Apolline Maysounabe, praticienne en nutrition holistique et professeure de yoga en Guadeloupe, dans un moment de connexion avec la nature"
              width={560}
              height={700}
              quality={85}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 40vw"
              className="w-full rounded-[2rem] object-cover"
            />
          </div>
          <div className="md:col-span-7">
            <p className="overline mb-5">Qui je suis</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight mb-6">
              Je suis <em className="text-terracotta">Apolline</em>
            </h2>
            <div className="space-y-4 text-[#4A5D54] leading-relaxed mb-8">
              <p>
                Ingénieure de formation, j'ai traversé ma propre quête de sens avant de me former
                à la nutrition santé préventive et holistique — certification Hygie Pro — et d'obtenir
                mes certifications de professeure de Kundalini Yoga et Yin Yoga.
              </p>
              <p>
                Mon parcours m'a amenée jusqu'en Guadeloupe, où j'ai appris à ralentir, à écouter
                mon corps et à revenir à l'essentiel. C'est ce chemin qui m'a donné envie d'accompagner
                d'autres femmes dans cette même reconnexion.
              </p>
              <p>
                Mon intention : que tu redeviennes pleinement actrice de ta santé, avec plus de clarté,
                de confiance et de douceur.
              </p>
            </div>
            <Link href="/a-propos" data-testid="about-cta" className="btn-secondary">
              En savoir plus sur mon parcours
            </Link>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="py-24 md:py-32" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <p className="overline mb-5">Témoignages · Avis Google vérifiés</p>
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight">
              Ce qu'en disent mes clientes
            </h2>
            <div className="flex items-center justify-center gap-1 mt-5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-terracotta text-terracotta" />)}
              <span className="ml-2 text-sm text-[#4A5D54]">7 avis · 5/5 sur Google</span>
            </div>
          </div>

          {/* Elfsight Google Reviews widget */}
          <ElfsightWidget appId="60304a0e-cd5c-4341-a1c7-6fb03b20eefb" className="w-full" />

          <div className="text-center mt-12">
            <a href={GOOGLE_REVIEWS} target="_blank" rel="noreferrer" data-testid="all-reviews-link"
              className="inline-flex items-center gap-2 text-forest font-medium hover:underline">
              Laisser un avis sur Google <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="pb-32" data-testid="final-cta">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="bg-forest text-white rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Image
                src={IMG.life1}
                alt=""
                fill
                quality={60}
                loading="lazy"
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="relative">
              <p className="overline mb-5 !text-sand">Le premier pas ne coûte rien</p>
              <h2 className="font-serif text-4xl md:text-6xl !text-white leading-tight mb-6">
                Prête à écouter ce que ton corps essaie de te dire ?
              </h2>
              <p className="text-[#D5C8B5] leading-relaxed max-w-2xl mx-auto mb-10">
                Un appel découverte gratuit de 15 minutes pour échanger sur tes besoins,
                répondre à tes questions et voir si mon accompagnement peut te convenir.
                Sans engagement. Sans pression.
              </p>
              <Link href="/contact" data-testid="final-cta-btn"
                className="inline-flex items-center gap-2 bg-terracotta hover:bg-[#a87863] text-white px-8 py-4 rounded-full font-medium transition-all hover:-translate-y-1">
                Réserver mon appel découverte gratuit <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="mt-10 flex flex-wrap gap-6 justify-center text-sm text-[#D5C8B5]">
                <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" /> {ADDRESS}</span>
                <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 hover:text-white">
                  <Phone className="w-4 h-4" /> {WHATSAPP_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
