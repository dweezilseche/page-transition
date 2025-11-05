Placez vos fichiers de police dans ce dossier, par exemple :

- my-font.woff2
- my-font.woff

Exemple d'utilisation dans SCSS (fichier `src/app.scss`) :

@font-face {
font-family: 'MyFont';
src: url('/fonts/my-font.woff2') format('woff2'),
url('/fonts/my-font.woff') format('woff');
font-weight: 400 700;
font-style: normal;
font-display: swap;
}

body { font-family: 'MyFont', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }

Notes:

- Avec Vite, le dossier `public` est servi à la racine. Utilisez donc le chemin `/fonts/nom-de-police.woff2`.
- Préférez le format WOFF2 pour de meilleures performances.
