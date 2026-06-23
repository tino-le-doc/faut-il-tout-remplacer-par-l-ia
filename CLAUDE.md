# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

French-language community web platform debating AI's role in society ("Should we replace everything with AI?"), built by TLD. Deployed at `tino-le-doc.com` via Firebase Hosting.

**No build step, no package manager.** Pure HTML5 + CSS3 + Vanilla JS static site.

## Local Development

```bash
python3 -m http.server 8000
# Open http://localhost:8000
```

There are no lint, test, or build commands — changes go directly to source files.

## Deployment

Pushing to `main` triggers GitHub Actions (`.github/workflows/firebase-hosting-deploy.yml`), which:
1. Deploys all static files to Firebase Hosting (project: `tino-le-doc`)
2. Deploys `database.rules.json` to Firebase Realtime Database

To manually deploy (requires Firebase CLI + service account):
```bash
npx firebase-tools deploy --project tino-le-doc
```

A second workflow (`.github/workflows/daily-debate-notification.yml`) runs daily at 08:00 UTC via `scripts/send-notifications.js` to send Web Push notifications for the daily debate topic.

## Architecture

### Shared Infrastructure (`js/` and `css/`)

Every page imports these three files:

| File | Purpose |
|------|---------|
| `js/firebase-config.js` | Firebase init, shared globals (`firebaseAuth`, `firebaseDb`), `requireAuth()`, `ModerationSystem`, `escapeHtml()`, `showToast()`, `initUserBadge()` |
| `js/consent.js` | GDPR cookie banner + Google Consent Mode v2 (`window.TLDConsent`) |
| `js/i18n.js` | FR/EN/ES translations via `data-i18n` HTML attributes; `I18N.t(key)` |
| `css/common.css` | CSS custom properties (dark theme), shared components (nav dropdown, global user badge, toast, modals, animations) |

### Firebase

- **Auth**: `firebase.auth()` — email/password auth; session persisted by default (IndexedDB). Do **not** call `setPersistence()` on individual pages — it interrupts session restoration from IndexedDB and causes a spurious `null` in `onAuthStateChanged`.
- **Realtime Database** (not Firestore): `firebase.database()` — all user data, chat, forum, votes, etc.
- **Admin identity**: `ADMIN_EMAIL = 'martialfabrice@tino-le-doc.com'` (checked via `isAdmin(user)` and hardcoded in `database.rules.json`)
- **Stripe config** is stored in Firebase at `settings/stripeConfig`, readable by authenticated users, writable only by admin.

### Authentication Flow

Pages that require login call `await requireAuth()` (from `firebase-config.js`). This:
1. Waits 1 000 ms for Firebase to restore the session from IndexedDB
2. Checks `firebaseAuth.currentUser` immediately
3. Falls back to `onAuthStateChanged` with an 8-second timeout
4. Redirects to `compte.html?redirect=<current-page>` if unauthenticated

### PWA / Service Worker (`sw.js`)

- Cache version: `CACHE_NAME = 'tld-cache-v5'` — **bump the version** whenever pre-cached asset URLs change (otherwise browsers serve stale content)
- Strategy: Network First for HTML pages; Cache First (stale-while-revalidate) for JS/CSS/images
- Firebase, Google, Stripe, and other third-party requests are never intercepted
- Push notification payloads arrive here and are shown as browser notifications

### Internationalisation (`js/i18n.js`)

All user-visible strings must use `data-i18n="key"` attributes (or `data-i18n-html`, `data-i18n-placeholder`, `data-i18n-aria`, `data-i18n-title`). Add new keys to the `translations` object in `i18n.js` with `fr`, `en`, and `es` entries.

### Content Security Policy

The strict CSP is defined in `firebase.json` under `hosting.headers`. When adding new third-party scripts or iframe embeds, update the relevant CSP directive (`script-src`, `frame-src`, etc.) in that file. Inline event handlers (`onclick`, `onchange`) are replaced by `addEventListener` to stay CSP-compliant — see `initNavigationSelects()` in `firebase-config.js`.

### Security Conventions

- Use `escapeHtml(text)` or `element.textContent = text` for user-supplied content — never `innerHTML` with raw user data.
- Use `safeSetText(el, text)` / `safeSetUserContent(el, text)` from `firebase-config.js` for convenience wrappers.
- All user text passes through `ModerationSystem.checkContent(text)` (also in `firebase-config.js`) before being written to Firebase.
- Rate limiting (2-second cooldown, 20 msg/min max) is enforced client-side in each page's JS.
- IDs generated with `crypto.getRandomValues()`.
- Only Tenor GIF URLs are accepted for GIF content (URL allowlist validation).

### Images

Each image is provided in three formats for browser-side format negotiation: `.avif` (smallest), `.webp`, `.png`. Use `<picture>` with `<source type="image/avif">` + `<source type="image/webp">` + `<img>` fallback. New images should be optimised with `scripts/optimize_images.py`.

### Page Structure

Each HTML page follows this pattern:
- `<link rel="stylesheet" href="css/common.css?v=2">`
- Firebase compat SDK loaded from CDN
- `<script src="js/firebase-config.js?v=3" defer></script>`
- `<script src="js/consent.js?v=1" defer></script>` (most pages)
- `<script src="js/i18n.js" defer></script>` (most pages)
- Inline `<script>` with page-specific logic at the bottom of `<body>`
- `gtag` consent defaults set to `denied` before any GA tag is loaded (Consent Mode v2)
- `.nav-dropdown select.nav-select` handles top-right navigation; `initNavigationSelects()` in `firebase-config.js` wires its `change` event

### Firebase Database Rules

`database.rules.json` is the source of truth for security. Default is `".read": false, ".write": false`. Most write rules require `auth != null`; admin-only writes check `auth.token.email === 'martialfabrice@tino-le-doc.com'`. Changes to rules are deployed automatically with the hosting workflow.
