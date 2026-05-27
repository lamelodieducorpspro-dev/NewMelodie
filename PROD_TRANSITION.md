# PROD_TRANSITION.md

## Partie 1 : Démarche technique optimale pour quitter Emergent et mettre le site Next.js en production

### Objectif
Passer d'une dépendance à Emergent à une gestion autonome du site Next.js avec son propre nom de domaine, en utilisant Claude Code comme assistant sécurisé sans déploiement automatisé.

### Étapes détaillées

#### 1. Choix de l'hébergeur
**Options recommandées :**
- **Vercel** : Idéal pour Next.js (créé par les mêmes développeurs), déploiement Git automatisé, CDN mondial, fonctions serverless intégrées.
- **Netlify** : Excellent pour les sites JAMstack, formes intégrées, fonctions serverless, prise en charge facile des domaines personnalisés.
- **AWS Amplify** : Bonne intégration avec les services AWS, scale automatique.
- **Render** : Alternative économique avec support Natif pour Docker et services	background workers.
- **Self-hosted (VPS/Docker)** : Contrôle maximal, nécessite plus de gestion technique (ex: DigitalOcean, Linode, Hetzner).

**Recommandation :** Vercel pour une expérience Next.js optimale zéro-configuration.

#### 2. Préparation du code pour le déploiement autonome
- Vérifier que le projet ne dépend pas de variables d'environnement spécifiques à Emergent.
- S'assurer que toutes les dépendances sont dans package.json.
- Configurer les variables d'environnement nécessaires (MongoDB URL, clés API Resend, etc.) dans les paramètres de l'hébergeur.
- Supprimer toute référence à des services ou middleware propriétaires d'Emergent dans le code.

#### 3. Configuration du nom de domaine
Étapes générales (varient légèrement selon l'hébergeur) :
1. Acheter ou transférer votre nom de domaine chez un registraire (ex: Namecheap, Gandi, OVH).
2. Configurer les DNS :
   - Pour Vercel : Ajouter les enregistrements A ou CNAME fournis par Vercel.
   - Pour Netlify : Utiliser leurs serveurs de noms ou configurer des enregistrements DNS manuels.
   - Vérifier la propagation avec des outils comme dig ou https://dnschecker.org.
3. Configurer le domaine dans les paramètres de l'hébergeur (Vercel/Netlify dashboard).
4. Activer HTTPS (généralement automatique avec Let's Encrypt).

#### 4. Utilisation sécurisée de Claude Code pour l'accompagnement
**Principes de sécurité :**
- Claude Code ne doit JAMAIS avoir accès à vos clés de production ou à votre hébergeur.
- Toutes les actions de déploiement doivent être effectuées MANUELLEMENT par vous.
- Claude Code peut aider à :
  - Analyser et déboguer le code localement.
  - Suggérer des améliorations de configuration.
  - Générer des scripts de déploiement (que vous examinerez et exécuterez vous-même).
  - Vérifier la conformité aux bonnes pratiques de sécurité.
  - Aider à écrire des tests et de la documentation.

**Mesures concrètes :**
- Ne jamais donner à Claude Code accès à vos clés d'hébergeur (Vercel/Netlify token, AWS keys, etc.).
- Ne jamais autoriser Claude Code à exécuter des commandes comme `vercel deploy`, `netlify deploy`, ou tout script de déploiement.
- Utiliser Claude Code uniquement en mode lecture/conseil sur votre environnement de développement local.
- Pour toute modification nécessitant un déploiement :
  1. Claude Code suggère les changements.
  2. Vous examinez et validez les changements localement.
  3. Vous commitez et poussez vers votre dépôt Git.
  4. Vous déclenchez le déploiement manuellement via l'interface de votre hébergeur ou votre CLI personnelle.
  5. Claude Code peut aider à vérifier le déploiement réussi (en lisant les logs ou en testant l'accès, mais sans exécuter d'actions de déploiement).

#### 5. Checklist de transition
- [ ] Code audité pour supprimer toute dépendance Emergent propriétaire.
- [ ] Toutes les variables d'environnement identifiées et documentées.
- [ ] Hébergeur choisi et compte créé.
- [ ] Projet connecté au dépôt Git (GitHub/GitLab/Bitbucket).
- [ ] Variables d'environnement configurées dans l'hébergeur (pas dans le code !).
- [ ] Domaine acheté/configuré chez le registraire.
- [ ] DNS pointant vers l'hébergeur.
- [ ] Domaine ajouté et vérifié dans l'hébergeur.
- [ ] HTTPS activé et fonctionnel.
- [ ] Tests effectués sur le domaine de staging/preview de l'hébergeur.
- [ ] Déploiement de production effectué MANUELLEMENT.
- [ ] Vérification post-déploiement (fonctionnalités, formulaires, emails, base de données).
- [ ] Surveillance configurée (logs, alertes d'erreur).

### Bonnes pratiques pour l'utilisation de Claude Code en production
1. **Mode conseil uniquement** : Claude Code suggère, vous décidez et exécutez.
2. **Revue de code obligatoire** : Toute suggestion de Claude Code doit être revue comme tout autre code.
3. **Environnements séparés** : Utiliser des environnements de développement, de staging et de production distincts.
4. **Sauvegardes** : Toujours avoir une sauvegarde récente avant toute modification importante.
5. **Documentation** : Maintenir à jour cette documentation et les procédures de déploiement.


## Partie 2 : Modèle d'email professionnel pour la réclamation auprès du support Emergent

Objet: Demande de remboursement de l'abonnement annuel - Échecs répétés de résolution technique et mauvais service

Madame, Monsieur,

Je fais suite à mes nombreux échanges avec votre support technique (ticket en cours depuis le 20 mai 2026) concernant des problèmes critiques affectant le référencement et le bon fonctionnement de mon site web www.lamelodieducorps.com. Malgré mes efforts et les crédits consommés, les problèmes persistent ou sont remplacés par de nouveaux dysfonctionnements, ce qui m'oblige à demander le remboursement de mon abonnement annuel Emergent.

Voici un récapitulFactuel des incidents rencontrés, soutenu par les échanges écrits :

### 1. Problème initial de prérendering/SEO (20 mai 2026)
- **Symptôme** : Les outils SEO et crawlers ne voyaient pas le contenu réel, affichant uniquement "You need to enable JavaScript to run this app" au lieu des H1, textes, CTAs et liens internes.
- **Votre action** : Vous avez affirmé avoir identifié et corrigé deux causes :
  1. Le pipeline de build exécutait `yarn run craco build` directement, en contournant l'étape `postbuild` qui lance `prerender.js` (absence de Chrome en environnement de production).
  2. Le script de prérendering générait des fichiers imbriqués (ex: `yoga/index.html`) alors que votre couche de routement s'attendait à des fichiers plats (ex: `yoga.html`).
- **Résultat** : Après mon premier redeploiement suite à votre annonce de correction (21 mai 09:02), le problème persistait exactement dans les mêmes termes.

### 2. Erreurs dans vos propres correctifs
- **21 mai 10:03** : Vous avez admis que :
  a) Le redeploiement du 21 mai (~12:50 UTC) avait exécuté la version de correctif *antérieure* et non la seconde, car cette seconde avait été déployée *après* le démarrage du build.
  b) Votre second correctif contenait une bug : vous redirigiez la sortie d'erreur de Puppeteer vers `/dev/null` (`2>/dev/null`), ce qui masquait le chemin d'installation de Chrome affiché sur stderr, rendant le script inopérant malgré la présence effective de Chrome.
- **Conséquence** : Malgré vos affirmations, le prérendering n'était toujours pas exécuté en production.

### 3. Problème systématique de bibliothèques manquantes
- **22 mai 10:04** : Après un troisième correctif (capture stdout+stderr de Puppeteer, méthodes de détection multiples), vous avez révélé que Chrome ne pouvait toujours pas s'exécuter en production à cause de bibliothèques système manquantes (affichage, graphismes, audio, accessibilité), générant l'erreur `spawn .../chrome ENOENT`.
- **Votre action** : Déploiement d'un quatrième correctif pour installer ces dépendances préalablement.
- **Impact** : Chaque cycle de "correction" nécessitait un nouveau redeploiement, consommant des crédits et prolongeant l'indisponibilité fonctionnelle.

### 4. Échec de la solution React.js et migration imposée vers Next.js
- **22 mai 11:04** : Après que j'ai confirmé que la méta-description et les balises Open Graph restaient manquantes sur toutes les pages sauf l'accueil, vous avez déclaré : *"Le comportement que vous observez est lié à une limite de la stack technique. Pour un rendu SEO complet avec des balises méta dynamiques, il faudrait migrer l'application vers un stack full Next.js."*
- Vous avez ainsi admis que votre environnement React.js/Puppeteer ne pouvait pas satisfaire les exigences SEO de base, malgré les prétentions initiales de votre plateforme.
- Vous m'avez alors guidé vers une migration complète vers Next.js, processus qui aurait dû être proposé initialement au vu de la nature de mon projet (un template Next.js).

### 5. Problèmes durant et après la migration déclarée
- **23 mai 11:40** : Après avoir suivi votre procédure de migration (push sur GitHub, création de nouveau projet, fourniture du lien), j'ai effectué une vérification technique indépendante et confirmé que :
  - Aucun indicateur `__NEXT_DATA__` n'était présent dans le code source.
  - Aucun dossier `_next/` ou assets associés n'étaient détectés.
  - Aucune référence à des scripts Next.js (next/dist, next.js, etc.) n'était visible.
  ⇒ Le site n'était donc *pas* en cours d'exécution sur Next.js contrairement à vos affirmations.
- **23 mai 12:01** : Vous avez soutenu que les indicateurs manquants étaient dus au cache navigateur montrant l'ancienne version, malgré mes tests en navigation privée et après hard refresh.
- **24 mai 10:22** : Vous avez finalement confirmé que le site tournait bien sous Next.js, mais en utilisant l'*App Router* (Next.js 13+), ce qui explique l'absence des indicateurs `__NEXT_DATA__` et `_next/data/` que je recherchais (caractéristiques du vieux Pages Router).
- **Conséquence collatérale** : Vous avez signalé l'apparition d'erreurs de rendu côté serveur (SSR) affectant certaines pages, dues à un *TypeError* lié à une propriété nulle durant le rendu serveur — problème directement introduit par votre migration.

### 6. Incoherté des URLs canoniques (probleme post-migration)
- **24 mai 12:33** : J'ai identifié une incohérence critique entre les balises canoniques :
  - Page d'accueil (`/`) : canonique déclarée en non-www (`https://lamelodieducorps.com/`)
  - Sous-pages (ex: `/mon-accompagnement`) : canonique déclarée en www (`https://www.lamelodieducorps.com/mon-accompagnement`)
- Vous avez expliqué le 24 mai 12:47 que cette incohérence provenait d'un build précédemment déployé *avant* l'application de vos correctifs sur les URLs canoniques et le redirigement www→non-www dans le middleware, et que le redeploiement corrigerait cela.

### 7. Consommation excessive de crédits pour des défaillances de plateforme
- J'ai consommé près de **150 crédits** pour tenter de résoudre le problème initial de prérendering.
- J'ai ensuite dépensé près de **100 crédits supplémentaires** avec votre agent IA, qui s'est avéré incapable de résoudre le problème, m'obligeant à faire intervenir votre support humain.
- Total : ~250 crédits consommés pour des problèmes qui relevaient de votre infrastructure (pipeline de build, dépendances manquantes, limites de votre stack technique) et non d'un développement fonctionnel demandé de ma part.

### 8. Promesses non tenues et gesture commerciale insuffisante
- Après mes reclamtions concernant la consommation de crédits, vous avez accordé une gesture commerciale de **60 crédits** (22 mai 10:04), bien inférieure aux ~250 crédits effectivement gaspillés à cause de vos échecs techniques répétés.
- Cette compensation ne reflète ni le temps perdu, ni la frustration engendrée, ni l'impact réel sur mon activité (retard de référencement, perte potentielle de clients).

### Conclusion et demande
À la lumière de ces faits documentés dans nos échanges écrits, je constate que :
1. Vos affirmations de résolution technique étaient fréquemment prématurées ou basées sur des correctifs buggués.
2. Vous avez déplié la responsabilité vers une migration technologique coûteuse (vers Next.js) uniquement après avoir échoué à faire fonctionner votre stack React.js/Puppeteer pour des besoins SEO de base.
3. Cette migration a introduit de nouveaux problèmes (erreurs SSR) tout en laissant des séquelles (incohérence canonique).
4. La consommation de crédits a été démesurée par rapport à la nature réelle des incidents (défaillances d'infrastructure plateforme, non développements demandés).

En vertu de ces éléments, et conformément aux attentes légitimes de service pour un abonnement payant, je vous demande donc :
**Le remboursement intégral de mon abonnement annuel Emergent**, à l'exclusion des crédits additionnels éventuellement acheté séparément, car ces derniers étaient destinés à un usage fonctionnel que votre plateforme a empêché de se réaliser correctement.

Je reste à votre disposition pour tout échange visant à résoudre ce dossier à l'amiable dans les plus brefs délais.

Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées,

Apolline Maysounabe
La Mélodie du Corps
www.lamelodieducorps.com