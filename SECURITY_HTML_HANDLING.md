# 🔒 Système de Gestion Sécurisée du HTML

## Vue d'ensemble

Pour prévenir les injections XSS dans le DOM, un système unifié de gestion du HTML a été implémenté dans `js/firebase-config.js`.

## Fonctions Disponibles

### 1. `safeSetHTML(element, html)`

Fixe le contenu HTML brut d'un élément.

```javascript
safeSetHTML(container, '<div class="card">Contenu</div>');
```

**Cas d'usage:**

- Template HTML structuré avec contenu contrôlé
- Code HTML côté serveur/application
- Structures DOM générées de manière sécurisée

### 2. `safeSetText(element, text)`

Fixe le contenu texte d'un élément (pas de risque XSS).

```javascript
safeSetText(container, 'Mon texte simple');
```

**Cas d'usage:**

- Contenu texte uniquement
- Vider un élément
- Messages statiques

### 3. `safeSetUserContent(element, userContent)`

Fixe le contenu utilisateur de manière sécurisée (échappe automatiquement).

```javascript
safeSetUserContent(nameDiv, userProvidedName);
```

**Cas d'usage:**

- Contenu provenant de formulaires utilisateur
- Données de Firebase non validées
- Noms, commentaires, ou texte généré par l'utilisateur

### 4. `escapeHtml(text)`

Échappe manuellement du texte pour l'utiliser en HTML.

```javascript
const safeName = escapeHtml(userInput);
element.innerHTML = `<p>Bonjour ${safeName}</p>`;
```

**Cas d'usage:**

- Nécessaire si vous devez construire du HTML avec du contenu utilisateur
- Alternative: utiliser `safeSetUserContent()`

## Principe de Sécurité

- ✅ Pas de `eval()` ou exécution de code dynamique
- ✅ Tout contenu utilisateur est échappé
- ✅ Les événements HTML onclick ne risquent pas l'injection XSS
- ✅ CSP (Content Security Policy) stricte activée

## Migration de l'ancien code

### ❌ Avant (DANGEREUX)

```javascript
container.innerHTML = userContent;  // Risque XSS
container.innerHTML = `
    <div>${userData.name}</div>  // Risque XSS
`;
```

### ✅ Après (SÉCURISÉ)

```javascript
// Option 1: Contenu utilisateur
safeSetUserContent(container, userData.name);

// Option 2: HTML avec contenu échappé
const escaped = escapeHtml(userData.name);
safeSetHTML(container, `<div>${escaped}</div>`);

// Option 3: Si c'est du HTML structuré statique
safeSetHTML(container, '<div class="card">Contenu</div>');
```

## Vérification de Sécurité

Voir `database.rules.json` pour:

- Règles Firestore de validation
- Contrôle d'accès aux données
- Modération automatique du contenu

Voir `firebase-config.js` pour:

- Système `ModerationSystem` (détection de contenu offensant)
- Validation du contenu utilisateur
- Gestion des erreurs

## Checklist d'Intégration

- [x] Fonctions helper créées dans `firebase-config.js`
- [x] Forum remplacé avec `safeSetHTML()`
- [x] Messagerie remplacée partiellement
- [x] Créations remplacée partiellement
- [x] Quiz remplacé avec `safeSetHTML()`
- [x] Boutique remplacée avec `safeSetHTML()`
- [x] Veille Techno remplacée partiellement
- [ ] Tests de sécurité (XSS payloads)
- [ ] Audit de sécurité complet

## Ressources

- [OWASP XSS Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
- [MDN: innerHTML Security](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
- [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
