"use client";

import SEO from "@/components/site/SEO";

const sections = [
  {
    t: "1. Responsable du traitement",
    c: ["Apolline Maysounabe — La Mélodie du Corps, Rue des Manguiers, 97125 Bouillante, Guadeloupe. Contact : lamelodieducorps.pro@gmail.com."],
  },
  {
    t: "2. Données collectées",
    c: [
      "Lorsque tu utilises ce site, je peux collecter les données suivantes :",
      "— Données d'identification : prénom, nom, email, téléphone (via le formulaire de contact ou la newsletter).",
      "— Données de réservation : informations transmises à Setmore lors de la prise de rendez-vous.",
      "— Données de navigation : pages visitées, durée de visite, type d'appareil (via cookies — voir Politique des cookies).",
    ],
  },
  {
    t: "3. Finalités du traitement",
    c: [
      "Tes données sont utilisées exclusivement pour :",
      "— Répondre à tes demandes via le formulaire de contact.",
      "— T'envoyer le guide gratuit auquel tu t'es inscrite.",
      "— Gérer tes rendez-vous (via Setmore).",
      "— Améliorer le site et son contenu.",
    ],
  },
  {
    t: "4. Base légale",
    c: ["Le traitement de tes données repose sur ton consentement explicite (inscription newsletter, envoi du formulaire) ou sur l'exécution d'un contrat (réservation de séance)."],
  },
  {
    t: "5. Durée de conservation",
    c: [
      "— Données du formulaire de contact : 3 ans à compter du dernier contact.",
      "— Emails de la newsletter : jusqu'à la désinscription.",
      "— Données de réservation (Setmore) : selon la politique de Setmore.",
    ],
  },
  {
    t: "6. Destinataires",
    c: [
      "Tes données ne sont jamais revendues. Elles sont transmises uniquement aux prestataires techniques suivants :",
      "— Resend (envoi des emails de confirmation et du guide).",
      "— Setmore (prise de rendez-vous en ligne).",
      "— Google (analytics anonymes).",
    ],
  },
  {
    t: "7. Tes droits",
    c: [
      "Conformément au RGPD, tu disposes d'un droit d'accès, de rectification, de suppression, de portabilité et d'opposition concernant tes données personnelles.",
      "Pour exercer ces droits, écris-moi à lamelodieducorps.pro@gmail.com.",
      "Tu peux également introduire une réclamation auprès de la CNIL (cnil.fr).",
    ],
  },
  {
    t: "8. Sécurité",
    c: ["Je m'engage à mettre en œuvre tous les moyens raisonnables pour protéger tes données contre tout accès non autorisé, altération ou divulgation."],
  },
];

export default function PolitiqueConfidentialite() {
  return (
    <>
      <SEO title="Politique de confidentialité · La Mélodie du Corps" description="Politique de confidentialité et protection des données personnelles sur lamelodieducorps.com." canonical="https://www.lamelodieducorps.com/politique-confidentialite" />
      <section className="pt-32 pb-20 md:pt-44">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <p className="overline mb-5">Légal</p>
          <h1 className="font-serif text-4xl md:text-6xl text-forest leading-[1.1] mb-6">Politique de confidentialité</h1>
          <p className="text-[#4A5D54] mb-12 leading-relaxed">
            La protection de tes données personnelles est essentielle. Voici comment elles sont collectées,
            utilisées et protégées sur lamelodieducorps.com.
          </p>
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
