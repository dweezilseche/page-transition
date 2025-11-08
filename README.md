# Page Transition — Projet de démonstration

Ce dépôt contient un petit projet d'exemples de transitions de pages (page transitions) construit avec Vite, Barba.js et GSAP. Le but est de montrer des techniques d'animations et de transitions entre pages pour une interface web créative.

## Aperçu

- Pages : `index.html`, `work.html`, `contact.html`
- Technologie : Vite (dev server), Barba.js pour la gestion des transitions, GSAP pour les animations, Sass pour les styles

## Structure du projet

- `index.html`, `work.html`, `contact.html` — pages statiques d'exemple
- `src/` — sources JS et SCSS
  - `main.js` — point d'entrée JS
  - `app.scss`, `transition.scss` — styles
- `public/` — assets publics (polices, icônes, images)

## Prérequis

- Node.js (version moderne, 16+ recommandée)
- Un gestionnaire de paquets : `pnpm`, `npm` ou `yarn`. Les commandes exemples ci-dessous utilisent `pnpm` mais les équivalents `npm`/`yarn` fonctionnent aussi.

## Installation

Ouvrez un terminal à la racine du projet et installez les dépendances :

```bash
pnpm install
```

Si vous n'utilisez pas `pnpm`, utilisez :

```bash
npm install
# ou
yarn install
```

## Commandes utiles

Les scripts disponibles (définis dans `package.json`) :

- `pnpm dev` — lance le serveur de développement (vite)
- `pnpm build` — construit le site pour la production
- `pnpm preview` — prévisualise le build de production

Exemples :

```bash
pnpm dev
# ou avec npm
npm run dev
```

## Développement

- Éditez les fichiers dans `src/`.
- Vite recharge automatiquement la page lors des changements.
- Les assets statiques placés dans `public/` sont servis tels quels.

## Bonnes pratiques / notes

- Barba.js gère la navigation sans rechargement complet ; assurez-vous que vos scripts et initialisations sont compatibles avec une navigation par transition (ré-initialiser les listeners après chaque transition si nécessaire).
- Sass est déjà inclus en dépendance ; vous pouvez organiser les partials dans `src/` si nécessaire.

## Contribution

Proposez des améliorations via des issues ou des pull requests. Pour des modifications locales :

1. Forkez le dépôt
2. Créez une branche feature
3. Ouvrez une PR décrivant les changements

## Licence

Choisissez une licence si vous comptez partager publiquement (MIT, Apache, etc.).

---

Fichier généré automatiquement — adapté au projet présent dans ce répertoire.
