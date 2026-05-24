export const WHATSAPP_NUMBER = "33651166669";
export const WHATSAPP_DISPLAY = "+33 6 51 16 66 69";
export const WHATSAPP_DEFAULT_MSG =
  "Bonjour Apolline, j'aimerais en savoir plus sur votre accompagnement 🌿";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MSG)}`;
export const EMAIL = "lamelodieducorps.pro@gmail.com";
export const ADDRESS = "Rue des Manguiers, 97125 Bouillante, Guadeloupe";
export const INSTAGRAM = "https://www.instagram.com/lamelodie.ducorps";
export const FACEBOOK = "https://www.facebook.com/profile.php?id=61586657914159";
export const GOOGLE_REVIEWS = "https://share.google/qDtovDfw20UboXaSb";

// All photo assets are now self-hosted WebP under /public/images/
// Sizes are approximations of source aspect ratios (used for next/image).
export const IMG = {
  logo: "https://static.wixstatic.com/media/164c4f_f1f03cef1d5b40ba8a7ba0285a4cfc56~mv2.png/v1/fill/w_155,h_155,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Copilot_20260106_122124_edited.png",
  // Lifestyle / hero portrait — Apolline sunset océan (img02 = format vertical portrait)
  hero: "/images/img02.webp",
  // About / Apolline portrait page "À propos"
  about: "/images/img01.webp",
  // Yoga page hero — femme yoga intérieur arbre de vie
  yoga: "/images/img10.webp",
  // Spécialités (assignés explicitement par l'utilisateur)
  sopk: "/images/img08.webp",
  endo: "/images/img11.webp",
  menopause: "/images/img09.webp",
  // Lifestyle illustrations
  life1: "/images/img06.webp", // Guadeloupe nature racines mossées
  life2: "/images/img02.webp", // Portrait Apolline mer (hero card)
  life3: "/images/img03.webp", // Méditation yoga sunset
  life4: "/images/img04.webp", // Yoga deck bois nature
  life5: "/images/img05.webp", // Méditation rocher océan
  life6: "/images/img07.webp", // Rivère jungle Guadeloupe
};

export const TESTIMONIALS = [
  {
    name: "Monika N.",
    source: "Google",
    text:
      "Quel bonheur ton accompagnement sur la nutrition avec ton écoute et ta bienveillance tout au long des séances.",
  },
  {
    name: "Louis H.",
    source: "Google",
    text:
      "Merci à Apolline pour son oreille attentive et son accompagnement bienveillant !",
  },
  {
    name: "Santi G.",
    source: "Google",
    text:
      "Un accompagnement bienveillant et très professionnel. J'ai appris à mieux comprendre mon corps et à adopter des habitudes alimentaires plus adaptées à mon mode de vie.",
  },
];
