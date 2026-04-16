# Faut-il tout remplacer par l'IA ?

Plateforme web communautaire francophone explorant le debat sur l'intelligence artificielle et son role dans la societe. Creee par **TLD**.

## Fonctionnalites

- **Page d'accueil** - Presentation du debat IA vs Humains avec statistiques en direct
- **Tchat en temps reel** - Messagerie publique avec moderation, emojis, GIFs et visioconference Jitsi Meet
- **Messagerie privee** - Communication utilisateur-a-utilisateur (DM, groupes, appels video)
- **Forum** - Groupes de discussion thematiques publics et prives
- **Quiz interactif** - "IA ou Humain ?" avec systeme de scoring et classement
- **Debats quotidiens** - Discussions communautaires avec systeme de votes et arguments
- **Sondages** - Votes en temps reel
- **Veille technologique** - Articles et actualites IA (ajout par l'admin)
- **Creations** - Partage de projets et creations de la communaute
- **Appareils connectes** - Ressources et infos sur l'IoT et l'IA embarquee
- **Boutique** - Catalogue de produits et ressources IA (e-books, guides, prompts)
- **Premium** - Abonnements via Stripe (mensuel/annuel)
- **Comptes utilisateurs** - Inscription, connexion, profils via Firebase Auth
- **Contact** - Formulaire de contact envoye en base de donnees
- **Avis** - Systeme de retours et evaluations utilisateurs
- **Politique de confidentialite** - Conforme RGPD
- **Administration** - Interface admin pour moderation et gestion du contenu

## Technologies

| Couche | Technologies |
|--------|-------------|
| Frontend | HTML5, CSS3 (glass-morphism, dark mode), Vanilla JavaScript |
| Backend | Firebase Realtime Database, Firebase Authentication |
| Paiements | Stripe v3 (config partagee via Firebase DB) |
| Video | Jitsi Meet (visioconference publique quotidienne) |
| GIFs | API Tenor |
| Polices | Google Fonts (Space Grotesk, Syne) |
| Hebergement | Firebase Hosting (tino-le-doc.com) |
| CI/CD | GitHub Actions |

## Structure du projet

```
.
├── index.html              # Page d'accueil
├── tchat.html              # Chat en temps reel + visioconference Jitsi
├── messagerie.html         # Messagerie privee (DM, groupes, appels)
├── forum.html              # Forum communautaire
├── quiz.html               # Quiz IA ou Humain
├── debat.html              # Debats quotidiens
├── sondages.html           # Sondages en temps reel
├── veille-techno.html      # Veille technologique IA
├── creations.html          # Creations de la communaute
├── appareils-connectes.html# IoT et IA embarquee
├── boutique.html           # Boutique e-commerce
├── premium.html            # Abonnements Stripe
├── compte.html             # Gestion de compte utilisateur
├── contact.html            # Formulaire de contact
├── avis.html               # Avis et evaluations
├── confidentialite.html    # Politique de confidentialite
├── admin.html              # Interface d'administration (acces restreint)
├── offline.html            # Page hors-ligne (PWA)
├── css/
│   └── common.css          # Styles partages (variables, reset, composants communs)
├── js/
│   ├── firebase-config.js  # Configuration Firebase partagee et utilitaires
│   ├── consent.js          # Gestion du consentement RGPD (Google Consent Mode v2)
│   └── i18n.js             # Internationalisation (FR/EN)
├── img/                    # Images et icones
├── *.pdf                   # Ressources telechargeables (guides, prompts, glossaire)
├── sw.js                   # Service Worker (PWA, cache offline)
├── manifest.json           # Manifest PWA
├── firebase.json           # Configuration Firebase Hosting + regles CSP/headers
├── database.rules.json     # Regles de securite Firebase Realtime Database
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
- **CSP stricte** - Content-Security-Policy avec liste blanche des sources autorisees
- **RGPD** - Google Consent Mode v2, consentement explicite avant collecte de donnees

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

Le deploiement utilise **Firebase Hosting** (projet : `tino-le-doc`) avec domaine personnalise `tino-le-doc.com`.

### Stripe (Premium)
La configuration Stripe (cles API, IDs de prix) est stockee dans Firebase Realtime Database (`settings/stripeConfig`) pour etre partagee sur tous les appareils. Seul l'admin peut modifier la configuration via le bouton engrenage de la page Premium.

### Jitsi Meet (Visioconference)
La visioconference est accessible depuis le tchat public via le bouton 📹. Les salles sont nommees `TLDchat-YYYY-MM-DD` (rotation quotidienne automatique, aucune gestion requise). Fonctionne via `meet.jit.si`.

## Licence

Tous droits reserves - TLD

## Credits

- Propulse par [Claude AI](https://claude.ai) (Anthropic)
- Base de donnees temps reel par [Firebase](https://firebase.google.com)
- Heberge sur [Firebase Hosting](https://firebase.google.com/products/hosting)
