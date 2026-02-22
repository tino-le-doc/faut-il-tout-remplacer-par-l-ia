/* ============================================
   Tino Le Doc - Configuration Firebase partagee
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

try {
    firebaseApp = firebase.initializeApp(firebaseConfig);
    firebaseDb = firebase.database();
    // Auth n'est pas toujours charge (ex: avis.html)
    if (firebase.auth) {
        firebaseAuth = firebase.auth();
    }
    // Analytics n'est pas toujours charge
    if (firebase.analytics) {
        firebaseAnalytics = firebase.analytics();
    }
} catch (error) {
    console.error('Erreur Firebase init:', error);
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
