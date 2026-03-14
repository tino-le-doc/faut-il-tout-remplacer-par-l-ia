/**
 * TLD - Envoi des notifications push quotidiennes
 * Exécuté chaque matin par GitHub Actions
 *
 * Variables d'environnement requises (GitHub Secrets) :
 *   VAPID_PUBLIC_KEY       - Clé publique VAPID
 *   VAPID_PRIVATE_KEY      - Clé privée VAPID
 *   FIREBASE_DATABASE_SECRET - Secret de la base Firebase (legacy token)
 */

const webpush = require('web-push');

const VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY;
const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY;
const FIREBASE_DATABASE_SECRET = process.env.FIREBASE_DATABASE_SECRET;
const FIREBASE_DB_URL = 'https://tino-le-doc-default-rtdb.europe-west1.firebasedatabase.app';
const DRY_RUN = process.env.DRY_RUN === 'true';

if (!VAPID_PUBLIC_KEY || !VAPID_PRIVATE_KEY || !FIREBASE_DATABASE_SECRET) {
    console.error('❌ Variables d\'environnement manquantes (VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY, FIREBASE_DATABASE_SECRET)');
    process.exit(1);
}

if (DRY_RUN) {
    console.log('🔍 Mode dry run activé — aucune notification ne sera envoyée.');
}

function toUrlSafeBase64(key) {
    return key.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

webpush.setVapidDetails(
    'mailto:martialfabrice@tino-le-doc.com',
    toUrlSafeBase64(VAPID_PUBLIC_KEY),
    toUrlSafeBase64(VAPID_PRIVATE_KEY)
);

// Doit rester synchronisé avec la liste dans debat.html
const debates = [
    {
        question: "Les agents IA autonomes devraient-ils pouvoir prendre des décisions à votre place ?",
        context: "En 2026, des IA prennent rendez-vous, passent commandes et gèrent vos e-mails en votre nom."
    },
    {
        question: "L'IA devrait-elle être légalement responsable de ses erreurs médicales ?",
        context: "Des IA diagnostiquent et prescrivent déjà. Si un algorithme se trompe, qui est responsable ?"
    },
    {
        question: "Faut-il interdire les deepfakes de personnalités publiques, même humoristiques ?",
        context: "La frontière entre satire et désinformation s'efface dangereusement."
    },
    {
        question: "Les modèles IA open source sont-ils une menace pour la sécurité mondiale ?",
        context: "Rendre l'IA accessible à tous accélère l'innovation, mais aussi les risques."
    },
    {
        question: "Devrait-on créer un permis obligatoire pour utiliser des IA avancées ?",
        context: "Comme le permis de conduire, une certification pour éviter les dérives."
    },
    {
        question: "L'IA peut-elle remplacer un thérapeute ou un psychologue ?",
        context: "Des millions de personnes confient leurs problèmes à des chatbots. Bon ou mauvais ?"
    },
    {
        question: "Faut-il établir un droit universel à ne pas être remplacé par une IA dans son métier ?",
        context: "Certaines professions devraient-elles être protégées par la loi face à l'automatisation ?"
    }
];

async function main() {
    const today = new Date();
    const debateIndex = today.getDate() % debates.length;
    const todayDebate = debates[debateIndex];

    console.log(`📅 Débat du jour (index ${debateIndex}): ${todayDebate.question}`);

    // Récupération des abonnements depuis Firebase
    const url = `${FIREBASE_DB_URL}/pushSubscriptions.json?auth=${FIREBASE_DATABASE_SECRET}`;
    const resp = await fetch(url);
    if (!resp.ok) {
        console.error(`❌ Erreur Firebase: ${resp.status} ${resp.statusText}`);
        process.exit(1);
    }

    const subscriptions = await resp.json();
    if (!subscriptions) {
        console.log('📭 Aucun abonné pour le moment.');
        return;
    }

    const entries = Object.entries(subscriptions);
    console.log(`👥 ${entries.length} abonné(s) trouvé(s)`);

    const payload = JSON.stringify({
        title: '🔥 Débat du Jour - TLD',
        body: todayDebate.question,
        url: 'https://tino-le-doc.com/debat.html',
        icon: 'https://tino-le-doc.com/img/1000074494.png'
    });

    let sent = 0;
    let removed = 0;
    let errors = 0;

    await Promise.allSettled(
        entries.map(async ([key, sub]) => {
            try {
                if (DRY_RUN) {
                    console.log(`[dry run] Notification simulée pour: ${key}`);
                    sent++;
                    return;
                }
                await webpush.sendNotification(sub, payload);
                sent++;
            } catch (err) {
                if (err.statusCode === 410 || err.statusCode === 404) {
                    // Abonnement expiré : suppression
                    const delUrl = `${FIREBASE_DB_URL}/pushSubscriptions/${key}.json?auth=${FIREBASE_DATABASE_SECRET}`;
                    await fetch(delUrl, { method: 'DELETE' }).catch(() => {});
                    removed++;
                    console.log(`🗑️  Abonnement expiré supprimé: ${key}`);
                } else {
                    errors++;
                    console.error(`❌ Erreur (${err.statusCode}) pour ${key}: ${err.message}`);
                }
            }
        })
    );

    console.log(`\n📊 Résumé: ${sent} envoyés | ${removed} expirés supprimés | ${errors} erreurs`);
}

main().catch((err) => {
    console.error('❌ Erreur fatale:', err);
    process.exit(1);
});
