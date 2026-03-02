# FTF React SPA

Ce projet est une application React montée avec Vite et convertie depuis un modèle HTML/CSS initial. Il utilise `react-router-dom` pour la navigation entre pages au lieu d'ancres, et Bootstrap 5 pour le style professionnel.

### Principales dépendances

- react, react-dom
- react-router-dom (routing)
- bootstrap (styles et composants JS)
- aos (animations)
- @fortawesome/fontawesome-free (icônes)

### Installation

```bash
npm install
# ou yarn
```

`package.json` inclut déjà les paquets nécessaires. Après l'installation vous pouvez lancer :

```bash
npm run dev
```

L'application s'exécute en mode développement avec rechargement à chaud.

### Structure

- `src/components` : éléments réutilisables (`Navbar`, `Footer`, `Spinner` …)
- `src/pages` : pages accessibles via l'URL (Accueil, Équipes, Matchs, …)
- `src/data.js` : données statiques de démonstration
- `src/App.jsx` : point d'entrée du routeur

### Navigation

Le routeur gère les URL propres :

| chemin | page |
|--------|------|
| `/` | Accueil |
| `/equipes` | Liste des joueurs |
| `/matchs` | Calendrier & matchs |
| `/actualites` | Actualités |
| `/boutique` | Boutique |
| `/selections` | Sélections |
| `/login` | Formulaire de connexion |
| `/admin` | Tableau de bord (administrateur) |

---

Pour aller plus loin, ajoutez les fonctionnalités dynamiques côté API, gestion de panier, etc.