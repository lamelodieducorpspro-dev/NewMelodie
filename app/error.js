'use client';

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="overline mb-5">Erreur</p>
        <h1 className="font-serif text-5xl md:text-7xl text-forest leading-[1.1] mb-6">
          Oups, quelque chose s&apos;est mal passé
        </h1>
        <p className="text-lg text-[#4A5D54] leading-relaxed mb-10">
          Une erreur inattendue est survenue. Vous pouvez réessayer de charger la page ou retourner à l&apos;accueil.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => reset()} className="btn-primary" data-testid="error-retry">
            Réessayer
          </button>
          <a href="/" className="btn-secondary" data-testid="error-home">
            Retour à l&apos;accueil
          </a>
        </div>
      </div>
    </div>
  );
}
