# Prompt à copier-coller dans Lovable

---

Construis-moi un site vitrine en français pour "La Mélodie du Corps", praticienne en nutrition holistique et professeure de yoga (Apolline), basée à Bouillante en Guadeloupe. Le site doit être premium, féminin, organique, type magazine éditorial bien-être haut de gamme. Pas de rendu "site générique". Stack : React + Tailwind CSS + React Router.

## CHARTE GRAPHIQUE

**Palette (utiliser via CSS variables et classes Tailwind custom)** :
- Fond crème principal : `#F9F6F0`
- Fond beige secondaire : `#F3EFE6`
- Vert forêt (titres, boutons primaires) : `#2C4A3B`
- Vert forêt hover : `#1F3429`
- Vert sauge (secondaire, overlines) : `#849974`
- Terracotta (accents, mots en italique) : `#C38D75`
- Sable : `#D5C8B5`
- Texte courant : `#1A2421`
- Texte secondaire : `#4A5D54`
- Bordures : `#E2DCD0`
- WhatsApp : `#25D366`

**Typographie** (importer depuis Google Fonts) :
- Titres : `Cormorant Garamond` (poids 300, 400, 500, 600)
- Corps : `Manrope` (poids 300, 400, 500, 600)

Tailles : H1 desktop 60-72px / mobile 40px · H2 44-48px / 32px · H3 28-32px / 24px · Surtitre Manrope MAJUSCULES 12px lettre-spacing +28% couleur sauge · Corps 16-18px · Mobile 15px.

**Style** :
- Boutons en forme pilule (rounded-full), padding 16px vertical / 32px horizontal
- Cartes avec coins très arrondis (rounded-[2rem])
- Ombres très douces (`0 12px 40px rgba(0,0,0,0.08)`)
- Espacement très généreux entre sections (py-20 md:py-32)
- Photos coins arrondis 24-32px, jamais d'overlay noir > 30%
- Mots-clés en italique Cormorant terracotta dans les titres (ex : "*santé hormonale*")
- Animations subtiles au scroll (fade-in-up)
- Site 100% responsive (mobile-first)

## IMAGES À UTILISER

```
logo : https://static.wixstatic.com/media/164c4f_f1f03cef1d5b40ba8a7ba0285a4cfc56~mv2.png/v1/fill/w_155,h_155,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Copilot_20260106_122124_edited.png

hero principal : https://static.wixstatic.com/media/164c4f_7f36ebbaab8d43e890abe4955375fb82~mv2.jpg/v1/fill/w_1429,h_440,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/164c4f_7f36ebbaab8d43e890abe4955375fb82~mv2.jpg

portrait Apolline : https://static.wixstatic.com/media/164c4f_01bf8edaf9904cd5867d1cf368199ce7~mv2.jpeg/v1/fill/w_714,h_760,al_b,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/164c4f_01bf8edaf9904cd5867d1cf368199ce7~mv2.jpeg

photo SOPK : https://static.wixstatic.com/media/164c4f_9773b833589744e59ef75ddaead19f2d~mv2.jpeg/v1/fill/w_714,h_647,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/164c4f_9773b833589744e59ef75ddaead19f2d~mv2.jpeg

photo endométriose : https://static.wixstatic.com/media/164c4f_cdaa36f7d4ac4f7a81281cee284451d9~mv2.jpeg/v1/fill/w_712,h_847,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/164c4f_cdaa36f7d4ac4f7a81281cee284451d9~mv2.jpeg

photo ménopause : https://static.wixstatic.com/media/164c4f_5254f8be3e784c728edb9a14745d4e3e~mv2.jpg/v1/fill/w_712,h_644,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/164c4f_5254f8be3e784c728edb9a14745d4e3e~mv2.jpg

photo yoga : https://static.wixstatic.com/media/11062b_0398be681c584ec3ad301d5835029598~mv2.jpg/v1/fill/w_1429,h_256,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_0398be681c584ec3ad301d5835029598~mv2.jpg

lifestyle 1 : https://static.wixstatic.com/media/164c4f_812d307204f5450e84bc6c149d87a532~mv2.jpeg/v1/crop/x_0,y_97,w_1200,h_1406/fill/w_321,h_376,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202026-01-04%20at%2011_56_25%20(1).jpeg

lifestyle 2 (portrait) : https://static.wixstatic.com/media/164c4f_56427d7a445642cf8304a9ba0a838077~mv2.jpeg/v1/fill/w_409,h_505,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202026-01-04%20at%2012_04_06.jpeg

lifestyle 3 : https://static.wixstatic.com/media/164c4f_056b83e071a146e29de3ff1340b0556e~mv2.jpeg/v1/fill/w_354,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202026-01-04%20at%2011_56_24.jpeg
```

## INFORMATIONS DE CONTACT

- WhatsApp : +33 6 51 16 66 69 (lien `https://wa.me/33651166669?text=Bonjour%20Apolline...`)
- Email : lamelodieducorps.pro@gmail.com
- Adresse : Rue des Manguiers, 97125 Bouillante, Guadeloupe
- Instagram : https://www.instagram.com/lamelodieducorps_/
- Facebook : https://www.facebook.com/lamelodieducorps
- Avis Google : https://share.google/qDtovDfw20UboXaSb

## STRUCTURE DU SITE (10 pages)

### Layout commun (sur toutes les pages)

1. **Header sticky** avec backdrop blur, fond crème semi-transparent
   - Logo + "La Mélodie du Corps" en Cormorant Garamond
   - Menu navigation : Accueil · Mes spécialités ▾ (dropdown SOPK / Endométriose / Ménopause) · Mon accompagnement · Yoga · Tarifs · FAQ · À propos
   - Bouton "Prendre RDV" à droite (style pilule vert forêt)
   - Sur mobile : menu burger

2. **Footer** vert forêt avec 4 colonnes
   - Col 1 : logo + tagline + icônes Instagram/Facebook/WhatsApp
   - Col 2 : Navigation (Accueil, Accompagnement, Yoga, Tarifs, À propos, FAQ)
   - Col 3 : Spécialités (SOPK, Endométriose, Ménopause, Fatigue chronique, Digestion)
   - Col 4 : Contact (adresse, téléphone, email)
   - Mention "© 2026 La Mélodie du Corps · Tous droits réservés"

3. **Bandeau de réassurance** (sous le footer ou en bandeau marquee horizontal défilant)
   - ⭐ 7 avis 5/5 sur Google
   - 🎓 Certifiée Hygie Pro
   - 🌿 Approche naturelle & holistique
   - 💻 Consultations à distance disponibles

4. **Bouton WhatsApp flottant** (FAB) en bas à droite, couleur `#25D366`, lien WhatsApp avec message pré-rempli : "Bonjour Apolline, j'aimerais en savoir plus sur votre accompagnement 🌿"

5. **Popup exit-intent** : déclenchée au mouseleave (curseur vers le haut) après 4s, affichée 1 fois max par session. Titre "Tu pars déjà ? 🌿", texte "Reçois ton guide gratuit 'Mon cycle, mon allié' avant de partir", champ email + bouton "Envoyer mon guide". Stocker l'email dans le state (ou backend si dispo).

### Page 1 — ACCUEIL `/`

Section Hero :
- Surtitre : `PRATICIENNE EN NUTRITION HOLISTIQUE · GUADELOUPE`
- H1 : `Nutrition holistique et santé hormonale féminine en Guadeloupe`
- Sous-titre : "Tu souffres de SOPK, d'endométriose, de fatigue chronique ou de troubles du cycle ? J'accompagne les femmes à mieux comprendre leur corps et à retrouver équilibre, énergie et sérénité — par l'alimentation et l'hygiène de vie."
- 3 icônes : 📍 Cabinet à Bouillante · 🚗 À domicile · 💻 Visio France entière
- Bouton 1 (plein) : "Réserver mon appel découverte gratuit"
- Bouton 2 (outline) : "Découvrir mon accompagnement"
- À droite : portrait Apolline avec badge flottant blanc "⭐⭐⭐⭐⭐ 7 avis · 5/5 sur Google · Écoute, bienveillance, professionnalisme"

Section Identification :
- H2 : "Tu te reconnais dans l'une de ces situations ?"
- Liste de 8 symptômes en cartes blanches :
  1. Ballonnements ou troubles digestifs fréquents
  2. Fatigue persistante sans explication claire
  3. SPM marqué ou règles douloureuses
  4. Cycle irrégulier ou difficile à vivre
  5. SOPK, endométriose ou troubles gynécologiques
  6. Stress chronique, charge mentale, sommeil perturbé
  7. Préménopause ou ménopause inconfortable
  8. Sensation que ton corps est déséquilibré
- Texte conclusif sur l'approche
- CTA "Échangeons sur ta situation"

Section Spécialités (3 cartes cliquables vers pages dédiées) :
- H2 : "Je suis spécialisée dans la santé hormonale féminine"
- Carte SOPK : "Cycles irréguliers, fatigue, fringales, acné, prise de poids... L'alimentation est l'un des leviers les plus puissants pour soutenir ton équilibre hormonal naturellement."
- Carte Endométriose : "Douleurs chroniques, inflammation, troubles digestifs, fatigue profonde... Une approche holistique peut considérablement améliorer ton confort au quotidien."
- Carte Ménopause : "Bouffées de chaleur, prise de poids, fatigue, humeur... Cette transition mérite un accompagnement doux, personnalisé et naturel."

Section Approche (6 piliers en grille 3 colonnes) :
- H2 : "Une autre façon de prendre soin de sa santé"
- 6 cartes :
  1. **Alimentation** : "Des ajustements concrets adaptés à ta vie réelle en Guadeloupe, sans frustration ni perfection."
  2. **Cycle féminin & hormones** : "Comprendre et soutenir l'équilibre hormonal à chaque étape de la vie."
  3. **Sommeil & hygiène de vie** : "Parce que tout est lié : on travaille sur l'ensemble."
  4. **Stress & système nerveux** : "Le stress est le premier perturbateur hormonal. On l'identifie et on l'apprivoise."
  5. **Écoute du corps** : "Apprendre à reconnaître ses signaux pour agir en conscience."
  6. **Plantes & compléments** : "Quand c'est pertinent, pour soutenir l'équilibre naturellement."

Section Déroulement (3 grandes cartes horizontales) :
- H2 : "Concrètement, comment ça se passe ?"
- Étape 01 — Appel découverte — Gratuit · 15 min : "On fait connaissance. Tu me parles de ta situation, je t'explique comment je peux t'aider. Aucune pression."
- Étape 02 — Séance bilan — 2h · 90€ cabinet/visio · 100€ domicile : "Un bilan approfondi sur ta santé globale : alimentation, cycle, énergie, sommeil, stress, digestion."
- Étape 03 — Séances de suivi — 1h · 50€ cabinet/visio · 60€ domicile : "Minimum 4 séances sur 3 à 4 mois. On ajuste, on approfondit, on avance à ton rythme."
- CTA en fin de section : "Réserver mon appel découverte gratuit"

Section Qui je suis (2 colonnes photo + texte) :
- H2 : "Je suis *Apolline*" (mot Apolline en italique terracotta)
- 3 paragraphes :
  - "Ingénieure de formation, j'ai traversé ma propre quête de sens avant de me former à la nutrition santé préventive et holistique — certification Hygie Pro — et d'obtenir mes certifications de professeure de Kundalini Yoga et Yin Yoga."
  - "Mon parcours m'a amenée jusqu'en Guadeloupe, où j'ai appris à ralentir, à écouter mon corps et à revenir à l'essentiel. C'est ce chemin qui m'a donné envie d'accompagner d'autres femmes dans cette même reconnexion."
  - "Mon intention : que tu redeviennes pleinement actrice de ta santé, avec plus de clarté, de confiance et de douceur."
- CTA outline : "En savoir plus sur mon parcours"

Section Témoignages (3 cartes 5 étoiles) :
- H2 : "Ce qu'en disent mes clientes"
- Témoignage 1 — Monika N. · Google : "Quel bonheur ton accompagnement sur la nutrition avec ton écoute et ta bienveillance tout au long des séances."
- Témoignage 2 — Louis H. · Google : "Merci à Apolline pour son oreille attentive et son accompagnement bienveillant !"
- Témoignage 3 — Santi G. · Google : "Un accompagnement bienveillant et très professionnel. J'ai appris à mieux comprendre mon corps et à adopter des habitudes alimentaires plus adaptées à mon mode de vie."
- Lien sous la section : "→ Voir tous les avis Google · 5/5"

Section CTA finale (bloc vert forêt, texte blanc, photo en arrière-plan 10% opacité) :
- H2 : "Prête à écouter ce que ton corps essaie de te dire ?"
- Texte : "Un appel découverte gratuit de 15 minutes pour échanger sur tes besoins, répondre à tes questions et voir si mon accompagnement peut te convenir. Sans engagement. Sans pression."
- Bouton terracotta : "Réserver mon appel découverte gratuit"
- Sous le bouton : adresse + téléphone

### Page 2 — SOPK `/specialites/sopk`

H1 : "SOPK et alimentation : soutenir son équilibre hormonal naturellement"

Hero : photo SOPK + intro "Cycles irréguliers ou absents, acné hormonale, fatigue persistante, fringales intenses, prise de poids difficile à comprendre… Tu n'as pas besoin de t'imposer un régime strict pour commencer à prendre soin de ton équilibre hormonal."

Section "Le SOPK ne se résume pas aux ovaires" : paragraphe sur le SOPK comme trouble hormonal complexe + 6 bullets sur les manifestations (énergie, peau, fringales, digestion, humeur, confiance).

Section "Pourquoi l'alimentation peut jouer un rôle important" : paragraphe + 7 bullets sur les leviers (glycémie, inflammation, protéines/fibres/gras, microbiote, rythme des repas, relation émotionnelle, stress/sommeil).

Section "Mon approche du SOPK" : approche holistique + 7 bullets sur ce qu'on regarde.

Section "Ce que nous pouvons travailler ensemble" : 8 bénéfices listés.

Section déroulement (3 cartes étapes), 3 modalités (cabinet/domicile/visio), CTA.

FAQ SOPK (4 questions) :
1. "L'alimentation peut-elle vraiment changer les choses avec le SOPK ?" — "Elle ne guérit pas le SOPK, mais elle peut soutenir l'équilibre hormonal, réduire l'inflammation et améliorer le confort au quotidien."
2. "Faut-il arrêter le gluten ou les produits laitiers ?" — "Pas forcément. Ces questions se traitent au cas par cas selon ta situation."
3. "Cet accompagnement remplace-t-il mon suivi gynécologique ?" — "Non. Mon accompagnement est complémentaire à ton suivi médical."
4. "Puis-je être accompagnée si je suis en métropole ?" — "Oui, les consultations en visio sont disponibles partout en France."

CTA final.

### Page 3 — ENDOMÉTRIOSE `/specialites/endometriose`

H1 : "Endométriose et alimentation : accompagner son corps avec douceur"

Intro : "Vivre avec l'endométriose, c'est composer avec fatigue profonde, troubles digestifs chroniques, inflammation, douleurs imprévisibles, charge mentale. Mon accompagnement ne remplace pas un suivi médical — il vient en complément."

Sections identiques à SOPK avec contenu spécifique :
- Symptômes typiques (6 bullets)
- Lien alimentation/endométriose (6 leviers : inflammation, digestion, énergie, glycémie, transit, relation au corps)
- Approche globale (8 leviers de travail)
- FAQ endométriose (4 questions sur gluten, anti-inflammatoire, suivi médical, métropole)

### Page 4 — MÉNOPAUSE `/specialites/menopause`

H1 : "Ménopause et alimentation : retrouver énergie, confort et sérénité naturellement"

Intro : "La ménopause est une transition, pas une maladie. Pourtant, bouffées de chaleur, prise de poids, fatigue, troubles du sommeil… peuvent vraiment impacter la qualité de vie."

Sections :
- Symptômes périménopause + ménopause (8 bullets)
- Rôle de l'alimentation (7 leviers : énergie, inflammation, soutien osseux, cardiovasculaire, digestion, glycémie/poids, sommeil)
- Approche globale (7 axes de travail)
- FAQ ménopause (4 questions sur bouffées de chaleur, compléments, suivi gynécologique, métropole)

### Page 5 — MON ACCOMPAGNEMENT `/accompagnement`

H1 : "Accompagnement en *nutrition holistique* et santé féminine"
Sous-titre : "Un suivi global, personnalisé et progressif — spécialisé en santé hormonale féminine. SOPK · Endométriose · SPM · Ménopause · Fatigue chronique · Digestion"

Section Accroche : "Tu en as assez des solutions qui ne durent pas ?" — paragraphe sur l'approche globale

Section Pour qui (liste de 8 avec checkmarks terracotta) :
- Souffre de SOPK, d'endométriose ou de troubles du cycle
- A un SPM marqué ou des règles douloureuses
- Traverse la ménopause ou la périménopause
- Ressent une fatigue chronique inexpliquée
- A des troubles digestifs persistants
- Veut équilibrer ses hormones naturellement
- Cherche à comprendre son corps, pas juste à perdre du poids

Section Approche (6 piliers : Nutrition, Cycle féminin & hormones, Sommeil & récupération, Gestion du stress, Plantes & compléments, Mouvement & respiration)

Section Déroulement détaillé (3 grandes cartes étapes avec prix)

Section CTA "Le premier pas ne coûte rien"

### Page 6 — YOGA `/yoga`

H1 : "Cours de *Kundalini* & Yin Yoga à Bouillante, Guadeloupe"

Section Hero avec photo yoga, sous-titre sur l'espace bienveillant.

Section Planning (2 grandes cartes) :
- **Kundalini Yoga avec Damien** — Lundi 18h-19h30 — 15€/cours ou 130€ les 10 cours — au Yoga'Niti Studio
- **Yin Yoga avec Apolline** — Mercredi 18h-19h — 12€/cours ou 100€ les 10 cours — au Yoga'Niti Studio
- Bouton WhatsApp sur chaque carte pour s'inscrire

Section Les pratiques :
- **Yin Yoga — la douceur qui va en profondeur** : pratique lente méditative, idéale pour libérer tensions, calmer système nerveux, améliorer mobilité, méditation active, équilibre hormonal
- **Kundalini Yoga — l'énergie qui se réveille** : pratique dynamique combinant postures, respiration, mantras et méditation, booste énergie/vitalité, gestion stress, système nerveux, clarté mentale

Section "Pourquoi intégrer le yoga" + photo lifestyle

Section "Ces cours sont faits pour toi si..." (6 bullets)

Section infos pratiques (FAQ : tapis, réservation, paiement, débutants, calendrier scolaire)

CTA WhatsApp final.

### Page 7 — TARIFS `/tarifs`

H1 : "Tarifs *clairs* et transparents"

Tableau 1 — Accompagnement nutrition holistique :
| Séance | Durée | Cabinet/Visio | Domicile |
|--------|-------|---------------|----------|
| Appel découverte | 15 min | Gratuit | — |
| Séance bilan | 2h | 90€ | 100€ |
| Séance de suivi | 1h | 50€ | 60€ |

Tableau 2 — Cours de yoga :
| Cours | Horaire | Séance | 10 cours |
|-------|---------|--------|----------|
| Kundalini Yoga | Lundi 18h-19h30 | 15€ | 130€ |
| Yin Yoga | Mercredi 18h-19h | 12€ | 100€ |

Notes importantes :
- Paiement en espèces ou par virement
- Certaines mutuelles remboursent partiellement
- Accompagnement complémentaire au suivi médical
- Aucun abonnement obligatoire

CTA final.

### Page 8 — FAQ `/faq`

H1 : "Questions *fréquentes*"

Accordéon organisé en 3 catégories :

**Sur les pathologies** :
1. "Peut-on guérir le SOPK par l'alimentation ?" (réponse sur soutien hormonal et amélioration symptômes)
2. "Alimentation anti-inflammatoire endométriose : par où commencer ?" (identification facteurs inflammatoires + bases anti-inflammatoires)
3. "Quels aliments éviter avec le SOPK ?" (pas de liste universelle, cas par cas)
4. "Comment soulager les règles douloureuses naturellement ?" (anti-inflammatoire, magnésium, stress, mouvement, plantes)
5. "Alimentation ménopause bouffées de chaleur : qu'est-ce qui aide vraiment ?" (stabilité glycémique, hydratation, plantes, réduction excitants)

**Sur l'accompagnement** :
1. "Quelle est la différence entre nutritionniste et praticienne en nutrition holistique ?" (Hygie Pro vs diplôme d'État, approche préventive complémentaire)
2. "Combien coûte un suivi en nutrition holistique ?" (gratuit appel, 90€ bilan, 50€ suivi, minimum 4 séances)
3. "Est-ce remboursé par la mutuelle ?" (certaines oui partiellement, facture sur demande)
4. "Comment se passe une consultation à distance ?" (visio Zoom/Meet, qualité identique)
5. "Combien de séances sont nécessaires ?" (1 bilan + min 4 suivis sur 3-4 mois)

**Sur la pratique du yoga** :
1. "Quelle est la différence entre Yin Yoga et Kundalini Yoga ?" (Yin lent/méditatif, Kundalini dynamique)
2. "Le yoga peut-il aider avec les troubles hormonaux ?" (oui, apaise système nerveux, réduit cortisol)
3. "Faut-il avoir de l'expérience pour faire du Yin Yoga ?" (non, accessible débutants)

### Page 9 — À PROPOS `/a-propos`

H1 : "Je suis *Apolline*"
Sous-titre : "Praticienne en nutrition santé holistique et professeure de yoga à Bouillante, Guadeloupe. Certification Hygie Pro · Kundalini Yoga · Yin Yoga."

Section "Mon parcours" (4 paragraphes) :
1. "Ingénieure de formation, j'ai d'abord travaillé dans la protection de l'environnement — un domaine qui comptait pour moi, mais dans lequel je ressentais un manque d'alignement profond entre mes valeurs et mon rythme de vie."
2. "Avec le temps, j'ai ressenti un besoin fort de réalignement : revenir à plus de sens, de présence et de cohérence."
3. "Ce chemin m'a amenée jusqu'en Guadeloupe. Ici, j'ai appris à ralentir, à écouter, à me reconnecter à mon corps, à la nature."
4. "Aujourd'hui, je travaille à Bouillante, entourée de la mer des Caraïbes, de la forêt tropicale."

Section "Ma formation" (4 cartes) :
- 🎓 **Certification Hygie Pro** : "Formation complète en nutrition santé préventive et holistique — Lisa Salis."
- ☀️ **Professeure de Kundalini Yoga** : "Pratique axée sur l'énergie, la respiration, la méditation."
- 🌙 **Professeure de Yin Yoga** : "Pratique profonde et méditative pour libérer les tensions."
- 📚 **Formation continue** : "Je me forme régulièrement sur la santé hormonale féminine."

Note de transparence sur le statut praticienne (pas diététicienne diplômée d'État).

Section "Ce en quoi je crois profondément" (4 valeurs) :
- **L'autonomie avant tout** : "Mon objectif n'est pas que tu aies besoin de moi pour toujours."
- **La douceur plutôt que la restriction** : "Pas de régimes drastiques ni de listes d'aliments interdits."
- **La globalité plutôt que le symptôme** : "Les signaux sont des messages, pas des ennemis."
- **La présence et l'écoute** : "Chaque personne a une histoire unique."

Section "La Guadeloupe comme terrain de vie" + photo lifestyle

Section Témoignages (3 mêmes que sur l'accueil)

CTA final.

### Page 10 — CONTACT `/contact`

H1 : "On se *parle* ?"
Sous-titre : "Un appel découverte gratuit de 15 minutes pour échanger sur tes besoins. Sans engagement."

Layout 2 colonnes :

**Colonne gauche (sticky)** : carte vert forêt avec
- 📍 Adresse : Rue des Manguiers, 97125 Bouillante, Guadeloupe
- 📞 +33 6 51 16 66 69 (lien WhatsApp)
- 📧 lamelodieducorps.pro@gmail.com
- Gros bouton WhatsApp vert : "Discuter sur WhatsApp"
- Horaires : Lundi au vendredi · 8h-17h
- Consultations visio partout en France

**Colonne droite** : formulaire de contact
- Prénom (requis)
- Email (requis)
- Téléphone (optionnel)
- Sujet (liste déroulante) : Appel découverte gratuit / SOPK Endométriose Ménopause / Cours de yoga / Autre demande
- Message (textarea requise) : placeholder "Parle-moi de ta situation, de ce que tu cherches…"
- Bouton "Envoyer mon message"
- Mention RGPD : "En envoyant ce message, tu acceptes d'être recontactée par email ou téléphone."

À la soumission : afficher un message de succès "Message bien reçu 🌿 Je reviens vers toi dans les 48h." avec bouton pour envoyer un nouveau message.

## EXIGENCES TECHNIQUES

- React + React Router pour la navigation
- Tailwind CSS pour le style
- Lucide React pour les icônes (jamais d'emojis dans les icônes UI, utiliser des icônes lucide)
- Sonner (ou équivalent) pour les toasts de confirmation
- 100% responsive (mobile-first)
- Animations CSS subtiles au scroll (fade-in-up)
- Préchargement des polices Google Fonts
- Title et meta description SEO uniques pour chaque page
- Toutes les pages doivent avoir le Header sticky, le Footer, le bandeau de réassurance, le bouton WhatsApp flottant et le popup exit-intent

## URLS À CONFIGURER

- `/` → Accueil
- `/specialites/sopk` → SOPK
- `/specialites/endometriose` → Endométriose
- `/specialites/menopause` → Ménopause
- `/accompagnement` → Mon Accompagnement
- `/yoga` → Yoga
- `/tarifs` → Tarifs
- `/faq` → FAQ
- `/a-propos` → À propos
- `/contact` → Contact

Crée le site complet avec toutes les pages, tous les composants partagés (Header, Footer, ReassuranceBanner, WhatsAppFAB, ExitIntentPopup, ThematicPageTemplate). Tous les liens "Réserver mon appel découverte gratuit" doivent pointer vers `/contact`. Tous les liens "S'inscrire" sur la page Yoga pointent vers WhatsApp.

Important : ne fais pas un site "Wix générique" ni un rendu IA banal. Cherche une typographie éditoriale élégante, des espacements généreux, des photos pleine largeur, des micro-animations subtiles. Le ton est doux, féminin, expert, ancré dans le réel.
