import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = {
  ...buildMetadata({
    title: "Page introuvable · 404",
    description:
      "La page que vous cherchez n'existe pas ou a été déplacée. Retournez à l'accueil de La Mélodie du Corps.",
    path: "/404",
  }),
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <p className="overline mb-5">Erreur 404</p>
        <h1 className="font-serif text-5xl md:text-7xl text-forest leading-[1.1] mb-6">
          Cette page <em className="text-terracotta">s'est perdue</em> en chemin
        </h1>
        <p className="text-lg text-[#4A5D54] leading-relaxed mb-10">
          La page que tu cherches n'existe pas, ou a peut-être été déplacée.
          Pas de panique — reviens à l'accueil ou explore les rubriques principales.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link href="/" className="btn-primary" data-testid="404-home">
            Retour à l'accueil
          </Link>
          <Link href="/contact" className="btn-secondary" data-testid="404-contact">
            Me contacter
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-left">
          {[
            { href: "/mon-accompagnement", label: "Mon accompagnement" },
            { href: "/sopk-alimentation-guadeloupe", label: "SOPK" },
            { href: "/endometriose-alimentation-guadeloupe", label: "Endométriose" },
            { href: "/menopause-alimentation-guadeloupe", label: "Ménopause" },
            { href: "/cours-yoga-bouillante-guadeloupe", label: "Cours de yoga" },
            { href: "/a-propos", label: "À propos d'Apolline" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block bg-white rounded-2xl p-4 border border-[#E2DCD0] hover:border-sage transition text-sm text-forest"
            >
              → {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
