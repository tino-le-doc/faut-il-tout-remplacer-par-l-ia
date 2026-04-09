/**
 * TLD - Bannière de consentement cookies (RGPD / Google Consent Mode v2)
 * Stockage: localStorage['tld_consent'] = { v, choice: 'all'|'none', ts }
 * API globale: window.TLDConsent.hasAnalytics()
 *
 * Le script GA doit être chargé AVANT ce fichier avec les defaults:
 *   gtag('consent', 'default', { analytics_storage: 'denied', ... })
 * Ce fichier appelle gtag('consent', 'update', ...) quand l'utilisateur accepte.
 */
(function () {
    var KEY = 'tld_consent';
    var VERSION = '1';

    function getRaw() {
        try { return JSON.parse(localStorage.getItem(KEY)); } catch (e) { return null; }
    }

    function setConsent(choice) {
        localStorage.setItem(KEY, JSON.stringify({ v: VERSION, choice: choice, ts: Date.now() }));
    }

    function grantAnalytics() {
        if (typeof window.gtag === 'function') {
            window.gtag('consent', 'update', {
                analytics_storage: 'granted',
                ad_storage: 'granted',
                ad_user_data: 'granted',
                ad_personalization: 'granted'
            });
        }
    }

    function denyAnalytics() {
        if (typeof window.gtag === 'function') {
            window.gtag('consent', 'update', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied'
            });
        }
    }

    window.TLDConsent = {
        hasConsented: function () { var c = getRaw(); return !!(c && c.v === VERSION); },
        hasAnalytics: function () { var c = getRaw(); return !!(c && c.v === VERSION && c.choice === 'all'); },
        reset: function () { localStorage.removeItem(KEY); }
    };

    // Si déjà accepté → activer Analytics immédiatement (avant le DOMContentLoaded)
    if (window.TLDConsent.hasAnalytics()) {
        grantAnalytics();
        return; // pas de bannière
    }

    // Si déjà refusé → pas de bannière, consent reste denied
    if (window.TLDConsent.hasConsented()) return;

    /* ---------- HTML + CSS de la bannière ---------- */
    var style = document.createElement('style');
    style.textContent = '#tld-consent{position:fixed;bottom:0;left:0;right:0;z-index:10000;padding:16px;display:flex;justify-content:center;animation:tld-slideUp .4s ease-out}#tld-consent-box{background:linear-gradient(135deg,rgba(10,10,20,.97),rgba(18,18,30,.97));backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1.5px solid rgba(0,245,255,.18);border-radius:16px;padding:18px 22px;max-width:860px;width:100%;box-shadow:0 -4px 40px rgba(0,0,0,.6),0 0 24px rgba(0,245,255,.06);display:flex;align-items:center;gap:18px;flex-wrap:wrap}#tld-consent-text{flex:1;min-width:200px;font-family:"Space Grotesk",sans-serif;font-size:.88rem;color:rgba(232,232,232,.85);line-height:1.5}#tld-consent-text strong{color:#e8e8e8;font-size:.93rem;display:block;margin-bottom:4px}#tld-consent-text a{color:#00f5ff;text-decoration:none}#tld-consent-text a:hover{text-decoration:underline}#tld-consent-btns{display:flex;gap:10px;flex-shrink:0;flex-wrap:wrap}#tld-consent-btns button{font-family:"Space Grotesk",sans-serif;font-size:.85rem;font-weight:700;padding:10px 20px;border-radius:10px;cursor:pointer;border:1.5px solid transparent;transition:transform .2s,opacity .2s;white-space:nowrap}#tld-consent-btns button:hover{transform:translateY(-2px);opacity:.9}#tld-btn-accept{background:linear-gradient(135deg,#00f5ff,#0090ff);color:#0a0a0f;border-color:transparent}#tld-btn-refuse{background:transparent;color:#a0a0a0;border-color:rgba(160,160,160,.35)}#tld-btn-refuse:hover{border-color:rgba(160,160,160,.6);color:#e8e8e8}@keyframes tld-slideUp{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}@media(max-width:600px){#tld-consent-box{flex-direction:column;gap:14px;padding:16px 18px;border-radius:14px 14px 0 0;border-bottom:none}#tld-consent-btns{width:100%;justify-content:stretch}#tld-consent-btns button{flex:1;padding:12px 10px}}';
    document.head.appendChild(style);

    var banner = document.createElement('div');
    banner.id = 'tld-consent';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Consentement cookies');
    banner.innerHTML = '<div id="tld-consent-box"><div id="tld-consent-text"><strong>🍪 Cookies & vie privée</strong>Ce site utilise des cookies analytiques (Google Analytics) pour mesurer l\'audience. Aucune donnée personnelle n\'est vendue. <a href="confidentialite.html">Politique de confidentialité</a></div><div id="tld-consent-btns"><button id="tld-btn-refuse" aria-label="Refuser les cookies analytiques">Refuser</button><button id="tld-btn-accept" aria-label="Accepter les cookies analytiques">Accepter</button></div></div>';

    function dismiss(choice) {
        setConsent(choice);
        if (choice === 'all') {
            grantAnalytics();
        } else {
            denyAnalytics();
        }
        banner.style.animation = 'none';
        banner.style.transition = 'transform .3s ease-in, opacity .3s ease-in';
        banner.style.transform = 'translateY(100%)';
        banner.style.opacity = '0';
        setTimeout(function () { banner.remove(); style.remove(); }, 320);
    }

    document.addEventListener('DOMContentLoaded', function () {
        document.body.appendChild(banner);
        document.getElementById('tld-btn-accept').addEventListener('click', function () { dismiss('all'); });
        document.getElementById('tld-btn-refuse').addEventListener('click', function () { dismiss('none'); });
    });
})();
