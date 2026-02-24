# Faut-il tout remplacer par l'IA ?

Plateforme web communautaire francophone explorant le debat sur l'intelligence artificielle et son role dans la societe. Creee par **TLD**.

## Fonctionnalites

- **Page d'accueil** - Presentation du debat IA vs Humains avec statistiques en direct
- **Tchat en temps reel** - Messagerie publique avec moderation, emojis, GIFs et visioconference Jitsi
- **Messagerie privee** - Communication utilisateur-a-utilisateur
- **Quiz interactif** - "IA ou Humain ?" avec systeme de scoring
- **Debats quotidiens** - Discussions communautaires avec systeme de votes
- **Sondages** - Votes en temps reel
- **Boutique** - Catalogue de produits et ressources IA (e-books, guides, prompts)
- **Premium** - Abonnements via Stripe (mensuel/annuel)
- **Comptes utilisateurs** - Inscription, connexion, profils via Firebase Auth
- **Avis** - Systeme de retours et evaluations utilisateurs
- **Politique de confidentialite** - Conforme RGPD

## Technologies

| Couche | Technologies |
|--------|-------------|
| Frontend | HTML5, CSS3 (glass-morphism, dark mode), Vanilla JavaScript |
| Backend | Firebase Realtime Database, Firebase Authentication |
| Paiements | Stripe v3 |
| Video | Jitsi Meet |
| GIFs | API Tenor |
| Polices | Google Fonts (Space Grotesk, Syne) |
| Hebergement | GitHub Pages |
| CI/CD | GitHub Actions (Jekyll + Docker) |

## Structure du projet

```
.
├── index.html              # Page d'accueil
├── tchat.html              # Chat en temps reel + visioconference
├── messagerie.html         # Messagerie privee
├── quiz.html               # Quiz IA ou Humain
├── debat.html              # Debats quotidiens
├── sondages.html           # Sondages en temps reel
├── boutique.html           # Boutique e-commerce
├── premium.html            # Abonnements Stripe
├── compte.html             # Gestion de compte utilisateur
├── avis.html               # Avis et evaluations
├── confidentialite.html    # Politique de confidentialite
├── css/
│   └── common.css          # Styles partages (variables, reset, composants communs)
├── js/
│   └── firebase-config.js  # Configuration Firebase partagee et utilitaires
├── *.pdf                   # Ressources telechargeables (guides, prompts, glossaire)
└── .github/workflows/      # CI/CD GitHub Actions
```

## Securite

- **Moderation de contenu** - Filtrage automatique multi-categories (injures, discriminations, haine)
- **Rate limiting** - Protection anti-spam (2s cooldown, 20 messages/minute max)
- **Validation des entrees** - Longueur pseudo (3-20 chars), messages (1-500 chars)
- **Protection XSS** - Echappement HTML via `textContent` et `escapeHtml()`
- **Validation des URLs** - Seules les URLs Tenor autorisees pour les GIFs
- **Sandbox iframe** - Permissions restreintes pour l'integration Jitsi
- **IDs securises** - Generation via `crypto.getRandomValues()`

## Installation

Le projet est un site statique. Pour le lancer localement :

```bash
# Cloner le depot
git clone https://github.com/tino-le-doc/faut-il-tout-remplacer-par-l-ia.git
cd faut-il-tout-remplacer-par-l-ia

# Ouvrir dans un navigateur (ou utiliser un serveur local)
python3 -m http.server 8000
# Puis ouvrir http://localhost:8000
```

## Configuration

### Firebase
La configuration Firebase est centralisee dans `js/firebase-config.js`. Le projet utilise Firebase Realtime Database pour le stockage des donnees et Firebase Auth pour l'authentification.

### Stripe (Premium)
Pour activer les paiements Stripe, configurez vos cles via l'interface admin de la page Premium (bouton engrenage).

## Licence

Tous droits reserves - TLD

## Credits

- Propulse par [Claude AI](https://claude.ai) (Anthropic)
- Base de donnees temps reel par [Firebase](https://firebase.google.com)
- Heberge sur [GitHub Pages](https://pages.github.com)
