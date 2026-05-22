# Guide de recréation sur Wix · La Mélodie du Corps

Ce guide reprend toutes les spécifications du site moderne (palette, polices, structure, contenus, fonctions dynamiques) pour vous permettre de tout reconstruire dans l'éditeur Wix.

---

## 1. CHARTE GRAPHIQUE

### 🎨 Palette de couleurs (à entrer dans Wix → Site → Design → Palette)

| Usage | Nom | Code HEX | RGB |
|-------|-----|----------|-----|
| Fond principal (crème) | Beige doux | `#F9F6F0` | 249, 246, 240 |
| Fond secondaire | Beige plus chaud | `#F3EFE6` | 243, 239, 230 |
| Couleur principale (titres, boutons) | Vert forêt | `#2C4A3B` | 44, 74, 59 |
| Variante hover | Vert forêt foncé | `#1F3429` | 31, 52, 41 |
| Vert sauge (secondaire) | Sauge | `#849974` | 132, 153, 116 |
| Accent chaud (boutons accent, icônes) | Terracotta doux | `#C38D75` | 195, 141, 117 |
| Accent neutre | Sable | `#D5C8B5` | 213, 200, 181 |
| Texte courant | Anthracite vert | `#1A2421` | 26, 36, 33 |
| Texte secondaire | Vert grisé | `#4A5D54` | 74, 93, 84 |
| Bordures discrètes | Beige bordure | `#E2DCD0` | 226, 220, 208 |
| WhatsApp | Vert WhatsApp | `#25D366` | 37, 211, 102 |

### ✍️ Typographie

**Police titres** : Cormorant Garamond (Google Fonts — dispo dans Wix)
**Police texte** : Manrope (Google Fonts — dispo dans Wix)

| Niveau | Police | Taille desktop | Taille mobile | Graisse | Couleur |
|--------|--------|----------------|---------------|---------|---------|
| H1 (titre page) | Cormorant Garamond | 60-72 px | 40 px | Light/Regular (300-400) | Vert forêt `#2C4A3B` |
| H2 (section) | Cormorant Garamond | 44-48 px | 32 px | Regular (400) | Vert forêt |
| H3 (sous-section) | Cormorant Garamond | 28-32 px | 24 px | Regular (400) | Vert forêt |
| H4 (carte) | Cormorant Garamond | 22-24 px | 20 px | Medium (500) | Vert forêt |
| Surtitre (overline) | Manrope | 12 px | 12 px | Medium (500) | Sauge `#849974` |
| Lettres majuscules avec espacement +28 % | | | | | |
| Texte courant | Manrope | 16-18 px | 15 px | Regular (400) | Anthracite `#1A2421` |
| Texte secondaire | Manrope | 14-16 px | 14 px | Regular (400) | Vert grisé `#4A5D54` |
| Bouton | Manrope | 14-15 px | 14 px | Medium (500) | Blanc ou Vert forêt |

**Astuce** : Italique en Cormorant Garamond → utilisez-le pour mettre en valeur certains mots (ex : "*santé hormonale*", "*Apolline*"). Couleur terracotta `#C38D75` pour ces mots en italique.

### 🎯 Style général

- **Bordures arrondies** : généreuses (16-32 px sur les cartes, pilule complète sur les boutons)
- **Boutons** : forme pilule (border-radius 999px), padding généreux 16px vertical / 32px horizontal
- **Ombres** : douces et basses (ex: `0 12px 40px rgba(0,0,0,0.08)`)
- **Espacement** : très généreux entre sections (80-120 px de padding vertical sur desktop)
- **Photos** : grandes, organiques, coins arrondis 24-32 px
- **Surimpressions sur photos** : maximum 30 % d'opacité pour ne pas écraser l'image

---

## 2. MENU DE NAVIGATION

Dans l'ordre exact, sticky (collé en haut) avec fond crème semi-transparent :

```
Accueil  ·  Mes spécialités ▾  ·  Mon accompagnement  ·  Yoga  ·  Tarifs  ·  FAQ  ·  À propos  ·  [Prendre RDV]
```

**Mes spécialités** = menu déroulant avec :
- SOPK
- Endométriose
- Ménopause

**Logo à gauche** : votre logo rond + texte "La Mélodie du Corps" en Cormorant Garamond.

**Bouton "Prendre RDV"** à droite : style pilule, fond vert forêt, texte blanc.

**Sur mobile** : Wix gère automatiquement le menu burger ☰.

---

## 3. STRUCTURE DES PAGES

### 📄 PAGE 1 — ACCUEIL (`/`)

**Balise Title SEO** : `La Mélodie du Corps · Nutrition Holistique & Santé Féminine à Bouillante, Guadeloupe`
**Meta Description** : `Apolline accompagne les femmes en nutrition holistique et santé féminine à Bouillante et à distance. SOPK, endométriose, ménopause, fatigue. Appel découverte gratuit.`

#### Section 1 — Hero
- **Surtitre** : `PRATICIENNE EN NUTRITION HOLISTIQUE · GUADELOUPE`
- **H1** : `Nutrition holistique et santé hormonale féminine en Guadeloupe`
- **Sous-titre** : `Tu souffres de SOPK, d'endométriose, de fatigue chronique ou de troubles du cycle ? J'accompagne les femmes à mieux comprendre leur corps et à retrouver équilibre, énergie et sérénité — par l'alimentation et l'hygiène de vie.`
- **Pictogrammes** : 📍 Cabinet à Bouillante · 🚗 À domicile · 💻 Visio France
- **Bouton 1 (principal)** : `Réserver mon appel découverte gratuit (15 min)`
- **Bouton 2 (outline)** : `Découvrir mon accompagnement`
- **Image à droite** : portrait Apolline (photo Wix existante)
- **Badge flottant sur l'image** : 5 étoiles ⭐⭐⭐⭐⭐ + "7 avis · 5/5 sur Google"

#### Section 2 — Bandeau de réassurance (juste après le hero)
Bande horizontale avec 4 éléments alignés :
- ⭐ 7 avis 5/5 sur Google
- 🎓 Certifiée Hygie Pro
- 🌿 Approche naturelle & holistique
- 💻 Consultations à distance disponibles

#### Section 3 — Identification des symptômes
- **H2** : `Tu te reconnais dans l'une de ces situations ?`
- 8 puces (bullet points) :
  - Ballonnements ou troubles digestifs fréquents
  - Fatigue persistante sans explication claire
  - SPM marqué ou règles douloureuses
  - Cycle irrégulier ou difficile à vivre
  - SOPK, endométriose ou troubles gynécologiques
  - Stress chronique, charge mentale, sommeil perturbé
  - Préménopause ou ménopause inconfortable
  - Sensation que ton corps est déséquilibré
- **Texte de conclusion** : `Tu as peut-être déjà essayé plusieurs solutions, sans résultat durable. Mon accompagnement t'aide à faire le lien entre tes symptômes, ton alimentation, ton mode de vie et ton équilibre hormonal.`

#### Section 4 — Mes spécialités (3 cartes)
- **H2** : `Je suis spécialisée dans la santé hormonale féminine`
- Carte 1 — **SOPK** : Cycles irréguliers, fatigue, fringales, acné, prise de poids... → lien vers `/specialites/sopk`
- Carte 2 — **Endométriose** : Douleurs chroniques, inflammation, troubles digestifs... → lien vers `/specialites/endometriose`
- Carte 3 — **Ménopause & périménopause** : Bouffées de chaleur, prise de poids, fatigue... → lien vers `/specialites/menopause`

Chaque carte : image + tag (overline sauge) + titre + paragraphe + lien "En savoir plus →"

#### Section 5 — Mon approche (6 piliers)
- **H2** : `Une autre façon de prendre soin de sa santé`
- 6 cartes en grille (3 colonnes desktop, 1 colonne mobile) :

| Icône | Titre | Description |
|-------|-------|-------------|
| 🥗 | Alimentation | Des ajustements concrets adaptés à ta vie réelle en Guadeloupe, sans frustration ni perfection. |
| 🌀 | Cycle féminin & hormones | Comprendre et soutenir l'équilibre hormonal à chaque étape de la vie. |
| 😴 | Sommeil & hygiène de vie | Parce que tout est lié : on travaille sur l'ensemble. |
| 🧠 | Stress & système nerveux | Le stress est le premier perturbateur hormonal. On l'identifie et on l'apprivoise. |
| 👁️ | Écoute du corps | Apprendre à reconnaître ses signaux pour agir en conscience. |
| 🌿 | Plantes & compléments | Quand c'est pertinent, pour soutenir l'équilibre naturellement. |

#### Section 6 — Déroulement en 3 étapes
- **H2** : `Concrètement, comment ça se passe ?`

| Étape | Titre | Durée / Prix | Description |
|-------|-------|--------------|-------------|
| 01 | Appel découverte | Gratuit · 15 min | On fait connaissance. Tu me parles de ta situation, je t'explique comment je peux t'aider. |
| 02 | Séance bilan | 2h · 90€ / 100€ | Un bilan approfondi sur ta santé globale : alimentation, cycle, énergie, sommeil. |
| 03 | Séances de suivi | 1h · 50€ / 60€ | Min. 4 séances sur 3 à 4 mois. On ajuste, on approfondit, on avance à ton rythme. |

Bouton CTA en fin de section : `Réserver mon appel découverte gratuit →`

#### Section 7 — Qui je suis
- **H2** : `Je suis Apolline`
- Photo à gauche + texte à droite (2 colonnes)
- Texte : reprenez le contenu de la page « À propos » en version courte (3 paragraphes max)
- Bouton outline : `En savoir plus sur mon parcours`

#### Section 8 — Témoignages
- **H2** : `Ce qu'en disent mes clientes`
- 3 cartes témoignage avec : 5 étoiles + citation en italique + nom + "Google"

| # | Citation | Nom |
|---|----------|-----|
| 1 | Quel bonheur ton accompagnement sur la nutrition avec ton écoute et ta bienveillance tout au long des séances. | Monika N. · Google |
| 2 | Merci à Apolline pour son oreille attentive et son accompagnement bienveillant ! | Louis H. · Google |
| 3 | Un accompagnement bienveillant et très professionnel. J'ai appris à mieux comprendre mon corps et à adopter des habitudes alimentaires plus adaptées à mon mode de vie. | Santi G. · Google |

Lien sous la section : `→ Voir tous les avis Google · 5/5`

#### Section 9 — CTA final
Bloc large vert forêt, texte blanc, photo en arrière-plan à 10 % d'opacité.
- **H2** : `Prête à écouter ce que ton corps essaie de te dire ?`
- **Texte** : `Un appel découverte gratuit de 15 minutes pour échanger sur tes besoins, répondre à tes questions et voir si mon accompagnement peut te convenir. Sans engagement.`
- **Bouton** : `Réserver mon appel découverte gratuit →` (fond terracotta)
- Sous le bouton : adresse + WhatsApp

---

### 📄 PAGE 2 — SOPK (`/specialites/sopk`)

**Title** : `SOPK et alimentation : soutenir son équilibre hormonal naturellement · Guadeloupe`

Structure :
1. **Hero** avec photo + H1 `SOPK et alimentation : soutenir son équilibre hormonal naturellement`
2. **H2** `Le SOPK ne se résume pas aux ovaires` + paragraphes + liste à puces (énergie/fatigue, peau, fringales, digestion, humeur)
3. **H2** `Pourquoi l'alimentation peut jouer un rôle important` + liste des leviers (glycémie, inflammation, microbiote…)
4. **H2** `Mon approche du SOPK` + paragraphes personnalisés
5. **H2** `Ce que nous pouvons travailler ensemble` + 8 bullets bénéfices
6. **3 cartes étapes** (Appel découverte / Bilan / Suivi)
7. **FAQ spécifique SOPK** (4 questions)
8. **CTA final** : `Réserver mon appel découverte gratuit`

Le contenu complet de cette page est dans le document `v2_pages_thematiques.md` que vous m'avez fourni — copiez-collez tel quel.

---

### 📄 PAGE 3 — ENDOMÉTRIOSE (`/specialites/endometriose`)

Même structure que SOPK avec contenu spécifique endométriose.
Contenu complet dans `v2_pages_thematiques.md`.

---

### 📄 PAGE 4 — MÉNOPAUSE (`/specialites/menopause`)

Même structure. Contenu complet dans `v2_pages_thematiques.md`.

---

### 📄 PAGE 5 — MON ACCOMPAGNEMENT (`/mon-accompagnement`)

Structure :
1. **Hero** : H1 `Accompagnement en nutrition holistique et santé féminine`
2. **Section accroche** : `Tu en as assez des solutions qui ne durent pas ?`
3. **Section Pour qui** : liste de 8 + bullets
4. **Section Mon approche** : 6 piliers (nutrition, cycle, sommeil, stress, plantes, mouvement)
5. **Section Déroulement** : 3 étapes détaillées avec tarifs
6. **Section Tarifs récapitulatifs** (tableau)
7. **Section Formats et lieux** (cabinet, domicile, visio)
8. **FAQ** (7 questions sur l'accompagnement)
9. **CTA final**

Contenu complet dans `v2_accompagnement.md`.

---

### 📄 PAGE 6 — YOGA (`/cours-yoga-bouillante-guadeloupe`)

Structure :
1. **Hero** : H1 `Cours de Kundalini Yoga & Yin Yoga à Bouillante, Guadeloupe`
2. **Planning** : 2 grandes cartes (Kundalini lundi 18h-19h30 / Yin mercredi 18h-19h)
3. **Les pratiques** : 2 sections détaillées (Yin / Kundalini)
4. **Pourquoi le yoga** : paragraphe + image
5. **Pour qui** : 6 bullets
6. **Le studio** : description Yoga'Niti
7. **Yoga + Nutrition** : combinaison puissante
8. **Infos pratiques** (FAQ pratique)
9. **CTA WhatsApp** : `S'inscrire par WhatsApp +33 6 51 16 66 69`

Contenu complet dans `v2_yoga.md`.

---

### 📄 PAGE 7 — TARIFS (`/tarifs`)

- **H1** : `Tarifs clairs et transparents`

**Tableau 1 — Accompagnement nutrition holistique**

| Séance | Durée | Cabinet / Visio | À domicile |
|--------|-------|-----------------|------------|
| Appel découverte | 15 min | Gratuit | — |
| Séance bilan | 2h | 90€ | 100€ |
| Séance de suivi | 1h | 50€ | 60€ |

**Tableau 2 — Cours de yoga**

| Cours | Horaire | Tarif séance | Carte 10 cours |
|-------|---------|--------------|----------------|
| Kundalini Yoga | Lundi 18h-19h30 | 15€ | 130€ |
| Yin Yoga | Mercredi 18h-19h | 12€ | 100€ |

**Notes importantes** :
- Paiement en espèces ou par virement
- Certaines mutuelles remboursent partiellement — renseigne-toi
- Mon accompagnement est complémentaire au suivi médical

**CTA final** : `Réserver mon appel découverte gratuit (15 min · Gratuit)`

---

### 📄 PAGE 8 — FAQ (`/faq`)

3 catégories de questions avec accordéons (Wix → ajouter widget "FAQ") :

**Catégorie 1 — Sur les pathologies**
- Peut-on guérir le SOPK par l'alimentation ?
- Alimentation anti-inflammatoire endométriose : par où commencer ?
- Quels aliments éviter avec le SOPK ?
- Comment soulager les règles douloureuses naturellement ?
- Alimentation ménopause bouffées de chaleur : qu'est-ce qui aide vraiment ?

**Catégorie 2 — Sur l'accompagnement**
- Quelle est la différence entre nutritionniste et praticienne en nutrition holistique ?
- Combien coûte un suivi en nutrition holistique ?
- Est-ce remboursé par la mutuelle ?
- Comment se passe une consultation à distance ?
- Combien de séances sont nécessaires ?

**Catégorie 3 — Sur la pratique du yoga**
- Quelle est la différence entre Yin Yoga et Kundalini Yoga ?
- Le yoga peut-il aider avec les troubles hormonaux ?
- Faut-il avoir de l'expérience pour faire du Yin Yoga ?

Les réponses détaillées sont déjà rédigées dans le code que je vous ai fourni (fichier `frontend/src/pages/FAQ.jsx`).

---

### 📄 PAGE 9 — À PROPOS (`/a-propos`)

Structure :
1. **Hero** : `Je suis Apolline` + photo
2. **Mon parcours** : 4 paragraphes (ingénieure → reconversion → Guadeloupe → aujourd'hui)
3. **Mon intention** : liste de 5 objectifs
4. **Ma formation** : 4 certifications (Hygie Pro, Kundalini, Yin, Formation continue)
5. **Ma vision de la santé** : philosophie globale
6. **Mes valeurs** : 4 piliers (autonomie, douceur, globalité, présence)
7. **Mon ancrage local** : Guadeloupe / Bouillante
8. **Témoignages** (3 mêmes)
9. **CTA final**

Contenu complet dans `v2_a_propos.md`.

---

### 📄 PAGE 10 — CONTACT / RDV (`/contact`)

Page en 2 colonnes :

**Colonne gauche (sticky)** : carte vert forêt avec coordonnées
- 📍 Rue des Manguiers, 97125 Bouillante, Guadeloupe
- 📞 +33 6 51 16 66 69 (lien WhatsApp)
- 📧 lamelodieducorps.pro@gmail.com
- Bouton WhatsApp vert : `Discuter sur WhatsApp`
- Horaires : Lundi au vendredi · 8h-17h

**Colonne droite** : formulaire de contact
- Champ Prénom
- Champ Email
- Champ Téléphone (optionnel)
- Liste déroulante Sujet : Appel découverte / SOPK Endo Méno / Cours de yoga / Autre
- Zone Message
- Bouton `Envoyer mon message`

---

## 4. FONCTIONS DYNAMIQUES

### ⚡ Bouton WhatsApp flottant (sur toutes les pages)

**Wix App Market** → chercher "WhatsApp Chat Button" (gratuit)

Configuration :
- Numéro : `+33 6 51 16 66 69` (format international : `33651166669`)
- Message pré-rempli : `Bonjour Apolline, j'aimerais en savoir plus sur votre accompagnement 🌿`
- Position : bas-droite
- Couleur : `#25D366` (vert WhatsApp)
- Visible sur toutes les pages

### ⚡ Popup exit-intent (capture email)

**Wix App Market** → chercher "Exit Pop" ou "Popup Maker" (gratuit ou freemium)

Configuration :
- Déclenchement : `mouseleave` haut de l'écran (desktop) OU scroll > 50 % + tentative de fermeture
- Délai : se déclenche après 4-5 secondes de présence sur le site
- Afficher max 1 fois par session

Contenu :
- **Titre** : `Tu pars déjà ?` 🌿
- **Texte** : `Reçois ton guide gratuit "Mon cycle, mon allié" avant de partir`
- **Champ** : Email
- **Bouton** : `Envoyer mon guide`
- Sous le bouton : "Aucun spam. Désabonnement en un clic."

Stockage des emails : Wix Forms les stocke automatiquement dans votre dashboard.

### ⚡ Formulaire de contact (page Contact)

Utiliser **Wix Forms** natif → glisser-déposer.
- Stockage automatique des soumissions dans le dashboard Wix
- Notification email à chaque envoi
- Possibilité de configurer une réponse automatique : `Merci pour ton message, je reviens vers toi sous 48h 🌿`

### ⚡ Newsletter récurrente

Si vous voulez envoyer des newsletters plus tard :
- **Wix Ascend** (intégré à Wix) — gratuit jusqu'à 5 000 emails/mois
- Synchronisation automatique avec les contacts du formulaire et de la popup

### ⚡ Bandeau de réassurance

Construire avec un **Strip Wix** :
- Largeur : 100 %
- Hauteur : ~60 px
- Fond : `#F3EFE6`
- 4 colonnes égales avec icône Wix + texte court à droite
- Sur mobile : carrousel automatique ou stack vertical

### ⚡ Marquee (défilement texte) — optionnel

Wix Editor X ou App Market → chercher "Marquee Slider" pour faire défiler horizontalement le bandeau de réassurance.

---

## 5. SEO & OPTIMISATION

### 🔍 Pour chaque page, configurer dans Wix → SEO :

| Page | URL | Title | Mots-clés principaux |
|------|-----|-------|----------------------|
| Accueil | `/` | La Mélodie du Corps · Nutrition Holistique & Santé Féminine · Guadeloupe | nutrition holistique guadeloupe, santé hormonale féminine |
| SOPK | `/sopk-alimentation-guadeloupe` | SOPK et alimentation : soutenir son équilibre hormonal naturellement | SOPK alimentation, SOPK nutrition |
| Endométriose | `/endometriose-alimentation-guadeloupe` | Endométriose et alimentation anti-inflammatoire · Guadeloupe | endométriose alimentation, endométriose nutrition |
| Ménopause | `/menopause-alimentation-guadeloupe` | Ménopause et alimentation : retrouver énergie · Guadeloupe | ménopause alimentation, périménopause |
| Accompagnement | `/mon-accompagnement` | Accompagnement nutrition holistique · Bouillante, Guadeloupe | nutritionniste bouillante, praticienne nutrition |
| Yoga | `/cours-yoga-bouillante-guadeloupe` | Cours de Yin Yoga & Kundalini Yoga à Bouillante | yoga bouillante, kundalini guadeloupe |
| Tarifs | `/tarifs` | Tarifs · La Mélodie du Corps | tarifs nutritionniste guadeloupe |
| FAQ | `/faq` | Questions fréquentes · La Mélodie du Corps | — |
| À propos | `/a-propos` | Apolline · Praticienne nutrition holistique & yoga · Bouillante | apolline nutrition, hygie pro |
| Contact | `/contact` | Prendre rendez-vous · Appel découverte gratuit | rdv nutritionniste guadeloupe |

### 🎯 Données structurées LocalBusiness

Wix → SEO → Schema Markup → ajouter type `HealthAndBeautyBusiness` ou `LocalBusiness` avec :
- Nom : La Mélodie du Corps
- Adresse : Rue des Manguiers, 97125 Bouillante, Guadeloupe
- Téléphone : +33651166669
- Horaires : Mo-Fr 08:00-17:00
- Photo : votre logo
- Url : https://www.lamelodieducorps.com

### 🔗 Outils à connecter

1. **Google Search Console** (Wix → SEO → Google Tools)
2. **Google Analytics 4** (Wix → Marketing → Analytics)
3. **Google Business Profile** : connecter votre fiche d'établissement
4. **Pixel Facebook** : si vous prévoyez des publicités Insta/Facebook

### ⚡ Performance / Vitesse

- Compresser toutes les images avec [TinyPNG.com](https://tinypng.com) avant upload
- Limiter les animations à 1-2 par page
- Activer le **lazy loading** dans Wix (Site → Paramètres → Vitesse)
- Préférer les formats **WebP** pour les images (Wix le fait automatiquement)

### 📱 Mobile

Wix a un éditeur mobile séparé : vérifiez **chaque page** en mode mobile avant publication.
- Cacher les éléments décoratifs sur mobile (les photos secondaires)
- Vérifier que tous les boutons sont cliquables sans zoom
- Le menu burger se génère automatiquement sur mobile

---

## 6. FOOTER

Footer 4 colonnes (1 colonne sur mobile) avec fond vert forêt `#2C4A3B` :

**Col 1 — Logo + tagline**
- Logo + "La Mélodie du Corps"
- "Apolline · Praticienne en nutrition holistique & professeure de yoga"
- 3 icônes réseaux sociaux : Instagram, Facebook, WhatsApp

**Col 2 — Navigation**
- Accueil
- Accompagnement
- Yoga
- Tarifs
- À propos
- FAQ

**Col 3 — Spécialités**
- SOPK
- Endométriose
- Ménopause
- Fatigue chronique
- Digestion

**Col 4 — Contact**
- 📍 Rue des Manguiers, 97125 Bouillante, Guadeloupe
- 📞 +33 6 51 16 66 69
- 📧 lamelodieducorps.pro@gmail.com

**Bandeau bas du footer** :
- Gauche : © 2026 La Mélodie du Corps · Tous droits réservés
- Droite (italique) : Mon accompagnement ne remplace pas un suivi médical.

---

## 7. CHECKLIST AVANT PUBLICATION

- [ ] Logo importé et placé dans le header
- [ ] Palette de couleurs configurée
- [ ] Polices Cormorant Garamond + Manrope ajoutées au site
- [ ] Toutes les pages créées (10 pages)
- [ ] Menu de navigation avec dropdown "Mes spécialités"
- [ ] Bouton WhatsApp flottant installé (App Wix)
- [ ] Popup exit-intent installé et configuré
- [ ] Formulaire de contact testé (envoyer un message test)
- [ ] Bandeau de réassurance ajouté sur toutes les pages
- [ ] Footer complet avec liens réseaux sociaux
- [ ] SEO Title + Meta Description renseignés pour chaque page
- [ ] URLs propres (slugs en kebab-case)
- [ ] Google Search Console connecté
- [ ] Google Analytics 4 connecté
- [ ] Données structurées LocalBusiness configurées
- [ ] Toutes les images compressées (TinyPNG)
- [ ] Test mobile sur chaque page
- [ ] Test des liens WhatsApp (numéro pré-rempli)
- [ ] Test des CTA "Réserver mon appel découverte"
- [ ] Pages légales : Mentions légales + Politique de confidentialité (obligatoires RGPD)

---

## 8. RESSOURCES UTILES

- **Polices Google Fonts** :
  - [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond)
  - [Manrope](https://fonts.google.com/specimen/Manrope)
- **Compression images** : [tinypng.com](https://tinypng.com)
- **Icônes gratuites** : Lucide / Heroicons / Feather Icons (intégrés à Wix ou à importer en SVG)
- **Aide Wix Forms** : [support.wix.com/forms](https://support.wix.com/fr/forms)
- **Wix App Market** : [wix.com/app-market](https://wix.com/app-market)

---

## 9. CONTENU PRÊT À COPIER-COLLER

Tous les textes des pages sont déjà rédigés dans les 5 documents que vous m'avez fournis :

1. `v2_accueil.md` → page d'accueil
2. `v2_pages_thematiques.md` → SOPK / Endométriose / Ménopause
3. `v2_accompagnement.md` → Mon Accompagnement
4. `v2_yoga.md` → Cours de Yoga
5. `v2_a_propos.md` → À propos

➡️ **Reprenez les textes au mot près**, ils sont déjà optimisés SEO et conversion.

---

*Bon courage pour la recréation 🌿 N'hésite pas si tu as besoin d'aide sur un point précis.*
