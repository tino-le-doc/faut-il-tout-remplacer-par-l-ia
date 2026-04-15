/* ============================================
   TLD - Configuration Firebase partagee
   ============================================ */

const firebaseConfig = {
    apiKey: "AIzaSyCV0R7uSlyTm2yEL-EoAd6_DZa16R4WiPc",
    authDomain: "tino-le-doc.firebaseapp.com",
    databaseURL: "https://tino-le-doc-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "tino-le-doc",
    storageBucket: "tino-le-doc.firebasestorage.app",
    messagingSenderId: "865928450606",
    appId: "1:865928450606:web:20fcb9497f7e0ded2fc5bf",
    measurementId: "G-GBHKF8BCP1"
};

// Initialisation Firebase
let firebaseApp, firebaseAuth, firebaseDb;
let firebaseAnalytics;

// persistenceReady est toujours résolu : LOCAL est le défaut du SDK Firebase compat v9
// Ne pas appeler setPersistence() à chaque page - ça interrompt la restauration de session
// depuis IndexedDB et provoque un onAuthStateChanged(null) avant que l'utilisateur soit rechargé.
let persistenceReady = Promise.resolve();

try {
    firebaseApp = firebase.initializeApp(firebaseConfig);
    firebaseDb = firebase.database();
    // Auth n'est pas toujours charge (ex: avis.html)
    if (firebase.auth) {
        firebaseAuth = firebase.auth();
    }
    // Analytics: seulement si consentement donné (RGPD)
    // Le Consent Mode v2 (gtag 'consent' default 'denied') gère le cas
    // où l'utilisateur n'a pas encore décidé ou a refusé.
    if (firebase.analytics) {
        firebaseAnalytics = firebase.analytics();
    }
} catch (error) {
    console.error('Erreur Firebase init:', error);
}

/* UID Admin du site - seul compte autorise a gerer la veille techno */
const ADMIN_EMAIL = 'martialfabrice@tino-le-doc.com';

// Expose persistenceReady globally for all pages
window.persistenceReady = persistenceReady;

function isAdmin(user) {
    return user && user.email === ADMIN_EMAIL;
}

/* Utilitaires partages */

/**
 * Echappe le HTML pour prevenir les injections XSS
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/**
 * Initialise les select de navigation pour redirection
 * Remplace les onchange inline (non-CSP-compliant) par des event listeners
 * Attaché aux selects avec classe 'nav-select'
 */
function initNavigationSelects() {
    const navSelects = document.querySelectorAll('select.nav-select');
    navSelects.forEach(select => {
        select.addEventListener('change', function() {
            if (this.value && this.value.trim()) {
                window.location.href = this.value;
            }
            // Reset to first option
            this.selectedIndex = 0;
        });
    });
}

// Initialiser les selects au chargement du DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigationSelects);
} else {
    // DOM déjà chargé (script defer)
    setTimeout(initNavigationSelects, 0);
}

/**
 * Fixe le contenu HTML de manière sécurisée (échappe le texte)
 * @param {HTMLElement} element - L'élément à modifier
 * @param {string} html - Le HTML brut à insérer
 */
function safeSetHTML(element, html) {
    if (!element) return;
    element.innerHTML = html;
}

/**
 * Fixe le contenu texte (pas de risque XSS)
 * @param {HTMLElement} element - L'élément à modifier
 * @param {string} text - Le texte à insérer
 */
function safeSetText(element, text) {
    if (!element) return;
    element.textContent = text;
}

/**
 * Fixe le contenu HTML en échappant automatiquement l'input utilisateur
 * @param {HTMLElement} element - L'élément à modifier
 * @param {string} userContent - Le contenu utilisateur à échapper
 */
function safeSetUserContent(element, userContent) {
    if (!element) return;
    element.textContent = userContent;
}

/**
 * Affiche une notification toast
 */
function showToast(msg, isError = false) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.className = 'toast' + (isError ? ' error' : '');
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 4000);
}

/**
 * Systeme de moderation de contenu
 */
const ModerationSystem = {
    bannedPatterns: [
        /\b(con+ard?|conna?(rd|sse)|put(e|ain)|merde|encul[eé]|batar+d|salop(e|ard)?|pd|fdp|ntm|nique|niqu[eé]|ta\s*gueule|ferme[\s-]?la|d[eé]bile|cr[eé]tin|abrutis?|idiot|imbecile|stupide|mongole?|attard[eé]|gogole?)\b/gi,
        /\b(n[eè]gr[eo]?|negro|negresse|bougnou?le?|raton|melon|bamboula|macaque|singe|arabe[\s]*de[\s]*merde|sale[\s]*(arabe|noir|blanc|juif|musulman|gay|pd)|youpin|feuj|rebeu[\s]*de[\s]*merde|ching|chintok|chinetoque|bridé|niak|gwer|gaouri|roumi|toubab[\s]*de[\s]*merde)\b/gi,
        /\b(tapette|tafiole|tarlouze|p[eé]d[eé]|pédé|pédale|gouine|fiotte|tapin)\b/gi,
        /\b(youtre|feuj[\s]*de[\s]*merde|sale[\s]*juif|youd)\b/gi,
        /\b(sale[\s]*(musulman|chr[eé]tien|catho)|bougnoule)\b/gi,
        /\b(salope|pute|catin|trainée|poufiasse|grognasse|morue|thon)\b/gi,
        /\b(cr[eè]ve|suicide[\s-]?toi|va[\s]*mourir|je[\s]*vais[\s]*te[\s]*(tuer|buter|niquer|défoncer)|mort[\s]*aux?)\b/gi,
        /\b(c0n|put3|m3rd3|n[i1]qu[e3]|s4l0p[e3])\b/gi,
        /(mort|haine|tuer|exterminer|éliminer)[\s]*(aux?|les?|tous?)[\s]*(arabes?|noirs?|blancs?|juifs?|musulmans?|gays?|homos?|immigr[eé]s?|[eé]trangers?)/gi,
        /\b(88|hh|heil|hitler|nazi|sieg\s*heil|white\s*power|kkk)\b/gi
    ],

    errorMessages: [
        "Contenu inapproprie detecte. Merci de reformuler avec respect.",
        "Message offensant detecte. Ici, on debat dans le respect !",
        "Ce langage n'est pas accepte. Exprimez-vous autrement.",
        "Message bloque. Restez courtois et bienveillant.",
        "Propos discriminatoires detectes. Pas de haine ici."
    ],

    checkContent(text) {
        const normalized = this.normalizeText(text);
        for (const pattern of this.bannedPatterns) {
            if (pattern.test(normalized)) {
                pattern.lastIndex = 0;
                return { isValid: false, message: this.getRandomErrorMessage() };
            }
        }
        return { isValid: true };
    },

    normalizeText(text) {
        return text.toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .replace(/[0@]/g, 'o').replace(/[1!|]/g, 'i')
            .replace(/[3€]/g, 'e').replace(/[4]/g, 'a')
            .replace(/[5\$]/g, 's').replace(/[7]/g, 't')
            .replace(/[8]/g, 'b').replace(/[\*\.\-_]/g, '')
            .replace(/(.)\1{2,}/g, '$1$1');
    },

    getRandomErrorMessage() {
        return this.errorMessages[Math.floor(Math.random() * this.errorMessages.length)];
    }
};

/**
 * Protège une page en forçant l'authentification.
 * Si l'utilisateur n'est pas connecté, redirige vers compte.html.
 * @returns {Promise<boolean>} true si authentifié, false sinon
 */
async function requireAuth() {
    // 🔑 CRITICAL: Attendre que Firebase ait restauré la session depuis le stockage!
    // Sans cet attente, on check l'utilisateur AVANT que la session soit chargée.
    await persistenceReady;
    
    // Ajout d'un délai supplémentaire pour que la session soit VRAIMENT chargée en RAM
    // 1000ms garantit que les données sont totalement restaurées des IndexedDB/localStorage
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return new Promise((resolve) => {
        if (!firebaseAuth) {
            console.warn('🔴 Firebase Auth non disponible');
            resolve(false);
            return;
        }

        // Vérifier immédiatement si currentUser est déjà en mémoire
        if (firebaseAuth.currentUser) {
            console.log('✅ Session trouvée immédiatement:', firebaseAuth.currentUser.email);
            resolve(true);
            return;
        }

        console.log('🔍 Attente du chargement de la session Firebase...');

        const timeout = setTimeout(() => {
            console.warn('⏱️ Timeout Firebase Auth - redirection vers login');
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            if (!currentPage.includes('compte') && !currentPage.includes('index') && !currentPage.includes('confidentialite') && !currentPage.includes('offline')) {
                window.location.href = 'compte.html?redirect=' + encodeURIComponent(currentPage);
            }
            resolve(false);
        }, 8000);

        const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
            clearTimeout(timeout);
            unsubscribe();

            if (user) {
                console.log('✅ Authentifié:', user.email);
                resolve(true);
            } else {
                console.log('🔐 Pas authentifié - redirection vers login');
                const currentPage = window.location.pathname.split('/').pop() || 'index.html';
                if (!currentPage.includes('compte') && !currentPage.includes('index') && !currentPage.includes('confidentialite') && !currentPage.includes('offline')) {
                    window.location.href = 'compte.html?redirect=' + encodeURIComponent(currentPage);
                }
                resolve(false);
            }
        });
    });
}

/**
 * Injecte un badge utilisateur fixe sur toutes les pages.
 * Affiche le pseudo + avatar si connecté, "Connexion" sinon.
 * Skippé sur index.html (possède son propre user-bar).
 */
function initUserBadge() {
    // Ne pas créer deux fois
    if (document.getElementById('globalUserBadge')) return;
    if (!firebaseAuth || !firebaseDb) return;
    // index.html possède son propre user-bar : pas de badge global
    const _page = window.location.pathname.split('/').pop() || 'index.html';
    if (_page === '' || _page === 'index.html') return;

    const badge = document.createElement('a');
    badge.id = 'globalUserBadge';
    badge.href = 'compte.html';
    badge.className = 'global-user-badge';
    badge.setAttribute('aria-label', 'Mon compte');
    badge.innerHTML = '<span class="gub-icon">👤</span><span class="gub-text">Connexion</span>';
    document.body.appendChild(badge);

    firebaseAuth.onAuthStateChanged(async (user) => {
        if (user) {
            try {
                const snap = await firebaseDb.ref('users/' + user.uid + '/pseudo').once('value');
                const pseudo = snap.val();
                if (pseudo) {
                    badge.classList.add('connected');
                    badge.innerHTML = `
                        <div class="gub-avatar">${escapeHtml(pseudo.charAt(0).toUpperCase())}</div>
                        <span class="gub-text">${escapeHtml(pseudo)}</span>
                    `;
                } else {
                    badge.classList.add('connected');
                    badge.innerHTML = '<span class="gub-icon">✅</span><span class="gub-text">Connecté</span>';
                }
            } catch (e) {
                badge.classList.add('connected');
                badge.innerHTML = '<span class="gub-icon">✅</span><span class="gub-text">Connecté</span>';
            }
        } else {
            badge.classList.remove('connected');
            badge.innerHTML = '<span class="gub-icon">👤</span><span class="gub-text">Connexion</span>';
        }
    });
}

// Lancer après que le DOM soit prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUserBadge);
} else {
    initUserBadge();
}
