/* ============================================
   TLD - Systeme d'internationalisation (i18n)
   Langues : FR, EN, ES
   ============================================ */

const I18N = {
    currentLang: 'fr',
    supportedLangs: ['fr', 'en', 'es'],
    langNames: { fr: 'Français', en: 'English', es: 'Español' },
    langFlags: { fr: '🇫🇷', en: '🇬🇧', es: '🇪🇸' },

    translations: {
        // ==================== COMMON / NAVIGATION ====================
        'nav.menu': { fr: 'Menu', en: 'Menu', es: 'Menú' },
        'nav.accueil': { fr: 'Accueil', en: 'Home', es: 'Inicio' },
        'nav.veille': { fr: 'Veille Techno', en: 'Tech Watch', es: 'Vigilancia Tech' },
        'nav.quiz': { fr: 'Quiz', en: 'Quiz', es: 'Quiz' },
        'nav.sondages': { fr: 'Sondages', en: 'Polls', es: 'Encuestas' },
        'nav.debat': { fr: 'Débat', en: 'Debate', es: 'Debate' },
        'nav.tchat': { fr: 'Tchat', en: 'Chat', es: 'Chat' },
        'nav.messagerie': { fr: 'Messagerie', en: 'Messages', es: 'Mensajes' },
        'nav.forum': { fr: 'Forum', en: 'Forum', es: 'Foro' },
        'nav.avis': { fr: 'Avis', en: 'Reviews', es: 'Opiniones' },
        'nav.compte': { fr: 'Compte', en: 'Account', es: 'Cuenta' },
        'nav.premium': { fr: 'Premium', en: 'Premium', es: 'Premium' },
        'nav.boutique': { fr: 'Boutique', en: 'Shop', es: 'Tienda' },
        'nav.appareils': { fr: 'Appareils IA', en: 'AI Devices', es: 'Dispositivos IA' },
        'nav.contact': { fr: 'Contact', en: 'Contact', es: 'Contacto' },
        'nav.confidentialite': { fr: 'Confidentialité', en: 'Privacy', es: 'Privacidad' },
        'nav.aria': { fr: 'Navigation rapide', en: 'Quick navigation', es: 'Navegación rápida' },
        'nav.aria.select': { fr: 'Naviguer vers une page', en: 'Navigate to a page', es: 'Navegar a una página' },

        // Banner IoT
        'banner.iot.title': { fr: 'Tino Assistant IoT', en: 'Tino IoT Assistant', es: 'Tino Asistente IoT' },
        'banner.iot.sub': { fr: 'Appareils connectés & IA', en: 'Connected devices & AI', es: 'Dispositivos conectados e IA' },

        // Skip link
        'skip.link': { fr: 'Aller au contenu', en: 'Skip to content', es: 'Ir al contenido' },

        // Footer
        'footer.created': { fr: 'Créé avec ❤️ par', en: 'Created with ❤️ by', es: 'Creado con ❤️ por' },
        'footer.powered': { fr: 'Propulsé par', en: 'Powered by', es: 'Impulsado por' },

        // Common buttons
        'btn.back': { fr: '← Retour à l\'accueil', en: '← Back to home', es: '← Volver al inicio' },
        'btn.back.short': { fr: '← Retour', en: '← Back', es: '← Volver' },
        'btn.send': { fr: 'Envoyer', en: 'Send', es: 'Enviar' },
        'btn.cancel': { fr: 'Annuler', en: 'Cancel', es: 'Cancelar' },
        'btn.close': { fr: 'Fermer', en: 'Close', es: 'Cerrar' },
        'btn.login': { fr: 'Se connecter', en: 'Log in', es: 'Iniciar sesión' },
        'btn.share': { fr: '📤 Partager ce débat', en: '📤 Share this debate', es: '📤 Compartir este debate' },
        'btn.copy': { fr: '🔗 Copier le lien', en: '🔗 Copy link', es: '🔗 Copiar enlace' },

        // Stats
        'stats.visites': { fr: 'visites', en: 'visits', es: 'visitas' },
        'stats.membres': { fr: 'membres', en: 'members', es: 'miembros' },
        'stats.enligne': { fr: 'en ligne', en: 'online', es: 'en línea' },

        // User
        'user.login': { fr: 'Connexion / Inscription', en: 'Login / Register', es: 'Iniciar sesión / Registrarse' },

        // ==================== INDEX.HTML ====================
        'index.title': { fr: 'Faut-il tout remplacer par l\'IA ? 🤖', en: 'Should we replace everything with AI? 🤖', es: '¿Hay que reemplazarlo todo con IA? 🤖' },
        'index.desc': { fr: 'Faut-il tout remplacer par l\'IA ? Explorez le débat avec TLD : quiz, sondages, débats et tchat en direct sur l\'intelligence artificielle.', en: 'Should we replace everything with AI? Explore the debate with TLD: quizzes, polls, debates and live chat about artificial intelligence.', es: '¿Hay que reemplazarlo todo con IA? Explora el debate con TLD: quiz, encuestas, debates y chat en vivo sobre inteligencia artificial.' },
        'index.badge': { fr: '🤖 Débat IA vs Humains', en: '🤖 AI vs Humans Debate', es: '🤖 Debate IA vs Humanos' },
        'index.h1': { fr: 'Faut-il TOUT remplacer par l\'IA ?', en: 'Should we replace EVERYTHING with AI?', es: '¿Hay que reemplazarlo TODO con IA?' },
        'index.subtitle': { fr: 'J\'ai posé la question directement à une intelligence artificielle. Voici sa réponse.', en: 'I asked the question directly to an artificial intelligence. Here is its answer.', es: 'Le hice la pregunta directamente a una inteligencia artificial. Aquí está su respuesta.' },
        'index.video.fallback': { fr: 'Votre navigateur ne supporte pas la lecture vidéo.', en: 'Your browser does not support video playback.', es: 'Su navegador no soporta la reproducción de video.' },
        'index.question.label': { fr: 'Question posée à l\'IA', en: 'Question asked to the AI', es: 'Pregunta hecha a la IA' },
        'index.question.text': { fr: '"Est-ce bien de tout remplacer par l\'IA et les robots ? Donne-moi ton avis."', en: '"Is it good to replace everything with AI and robots? Give me your opinion."', es: '"¿Es bueno reemplazarlo todo con IA y robots? Dame tu opinión."' },
        'index.answer.title': { fr: 'Réponse de Claude (IA)', en: 'Claude\'s Answer (AI)', es: 'Respuesta de Claude (IA)' },
        'index.answer.subtitle': { fr: 'Intelligence Artificielle par Anthropic', en: 'Artificial Intelligence by Anthropic', es: 'Inteligencia Artificial por Anthropic' },
        'index.answer.verdict': { fr: 'NON. ❌', en: 'NO. ❌', es: 'NO. ❌' },
        'index.answer.explanation': { fr: 'Tout remplacer par l\'IA et les robots ne serait pas souhaitable. L\'automatisation est utile pour certaines tâches, mais un remplacement total poserait des problèmes majeurs.', en: 'Replacing everything with AI and robots would not be desirable. Automation is useful for certain tasks, but a total replacement would pose major problems.', es: 'Reemplazarlo todo con IA y robots no sería deseable. La automatización es útil para ciertas tareas, pero un reemplazo total plantearía problemas graves.' },
        'index.reasons.title': { fr: '⚡ Les 3 raisons principales', en: '⚡ The 3 main reasons', es: '⚡ Las 3 razones principales' },
        'index.reason1.title': { fr: '🎯 Le sens de la vie', en: '🎯 The meaning of life', es: '🎯 El sentido de la vida' },
        'index.reason1.text': { fr: 'Le travail donne de la dignité, des liens sociaux, un but dans la vie. Une société où personne ne travaille risque de créer un vide existentiel massif.', en: 'Work gives dignity, social connections, a purpose in life. A society where nobody works risks creating a massive existential void.', es: 'El trabajo da dignidad, vínculos sociales, un propósito en la vida. Una sociedad donde nadie trabaja podría crear un vacío existencial masivo.' },
        'index.reason2.title': { fr: '🧠 Les limites de l\'IA', en: '🧠 The limits of AI', es: '🧠 Los límites de la IA' },
        'index.reason2.text': { fr: 'L\'IA fait des erreurs, parfois graves. Pas de jugement moral, pas de créativité véritable, pas d\'empathie réelle. Pour soigner, éduquer, juger — l\'humain reste irremplaçable.', en: 'AI makes mistakes, sometimes serious ones. No moral judgment, no true creativity, no real empathy. For healing, educating, judging — humans remain irreplaceable.', es: 'La IA comete errores, a veces graves. Sin juicio moral, sin creatividad verdadera, sin empatía real. Para curar, educar, juzgar — el humano sigue siendo irremplazable.' },
        'index.reason3.title': { fr: '💰 Le paradoxe économique', en: '💰 The economic paradox', es: '💰 La paradoja económica' },
        'index.reason3.text': { fr: 'Si les robots produisent tout mais que personne n\'a de revenu... qui achète ? Ça suppose une refonte totale de notre modèle économique.', en: 'If robots produce everything but nobody has income... who buys? It implies a complete overhaul of our economic model.', es: 'Si los robots producen todo pero nadie tiene ingresos... ¿quién compra? Eso supone una reforma total de nuestro modelo económico.' },
        'index.conclusion.title': { fr: 'La vraie solution', en: 'The real solution', es: 'La verdadera solución' },
        'index.conclusion.text1': { fr: 'L\'idéal serait une ', en: 'The ideal would be ', es: 'Lo ideal sería una ' },
        'index.conclusion.highlight1': { fr: 'complémentarité', en: 'complementarity', es: 'complementariedad' },
        'index.conclusion.text2': { fr: ' — l\'IA comme outil qui ', en: ' — AI as a tool that ', es: ' — la IA como herramienta que ' },
        'index.conclusion.highlight2': { fr: 'augmente nos capacités', en: 'enhances our capabilities', es: 'aumenta nuestras capacidades' },
        'index.conclusion.text3': { fr: ', pas qui nous remplace. Libérer du temps pour ce qui compte vraiment, pas créer une humanité spectatrice.', en: ', not replace us. Free up time for what really matters, not create a spectator humanity.', es: ', no que nos reemplace. Liberar tiempo para lo que realmente importa, no crear una humanidad espectadora.' },

        // Ad zone
        'ad.badge': { fr: '📢 Sponsorisé', en: '📢 Sponsored', es: '📢 Patrocinado' },
        'ad.title': { fr: 'Votre publicité ici', en: 'Your ad here', es: 'Su publicidad aquí' },
        'ad.size': { fr: '468 × 120 — Espace publicitaire', en: '468 × 120 — Ad space', es: '468 × 120 — Espacio publicitario' },
        'ad.description': { fr: 'Touchez une audience passionnée par l\'IA et les nouvelles technologies. Boostez votre visibilité auprès de milliers de visiteurs engagés.', en: 'Reach an audience passionate about AI and new technologies. Boost your visibility with thousands of engaged visitors.', es: 'Llegue a una audiencia apasionada por la IA y las nuevas tecnologías. Aumente su visibilidad ante miles de visitantes comprometidos.' },
        'ad.cta': { fr: '💼 Réserver cet espace', en: '💼 Reserve this space', es: '💼 Reservar este espacio' },
        'ad.footer': { fr: 'Annonce', en: 'Ad', es: 'Anuncio' },
        'ad.footer.link': { fr: 'Pourquoi cette pub ?', en: 'Why this ad?', es: '¿Por qué este anuncio?' },

        // CTA section
        'cta.question': { fr: 'Et toi, tu en penses quoi ? 🤔', en: 'What do you think? 🤔', es: '¿Y tú, qué opinas? 🤔' },
        'cta.quiz': { fr: '🧠 Quiz IA ou Humain ?', en: '🧠 Quiz: AI or Human?', es: '🧠 Quiz: ¿IA o Humano?' },
        'cta.sondages': { fr: '📊 Sondages en direct', en: '📊 Live polls', es: '📊 Encuestas en vivo' },
        'cta.debat': { fr: '⚔️ Débat du jour', en: '⚔️ Debate of the day', es: '⚔️ Debate del día' },
        'cta.tchat': { fr: '💬 Tchat public', en: '💬 Public chat', es: '💬 Chat público' },
        'cta.messagerie': { fr: '✉️ Messagerie privée', en: '✉️ Private messaging', es: '✉️ Mensajería privada' },
        'cta.forum': { fr: '🏛️ Forum', en: '🏛️ Forum', es: '🏛️ Foro' },
        'cta.avis': { fr: '⭐ Donner mon avis', en: '⭐ Give my review', es: '⭐ Dar mi opinión' },
        'cta.compte': { fr: '👤 Mon compte', en: '👤 My account', es: '👤 Mi cuenta' },
        'cta.premium': { fr: '👑 Devenir Premium', en: '👑 Go Premium', es: '👑 Ser Premium' },
        'cta.boutique': { fr: '🛒 Boutique IA', en: '🛒 AI Shop', es: '🛒 Tienda IA' },
        'cta.veille': { fr: '📡 Veille Techno', en: '📡 Tech Watch', es: '📡 Vigilancia Tech' },
        'cta.appareils': { fr: '📡 Appareils IA — Explorez l\'univers connecté', en: '📡 AI Devices — Explore the connected world', es: '📡 Dispositivos IA — Explora el mundo conectado' },
        'cta.nouveau': { fr: 'NOUVEAU', en: 'NEW', es: 'NUEVO' },

        // ==================== TCHAT.HTML ====================
        'tchat.title': { fr: 'Tchat Live 💬 TLD', en: 'Live Chat 💬 TLD', es: 'Chat en Vivo 💬 TLD' },
        'tchat.desc': { fr: 'Tchat en direct avec la communauté TLD. Discutez de l\'IA, partagez vos idées et connectez-vous en temps réel.', en: 'Live chat with the TLD community. Discuss AI, share ideas and connect in real time.', es: 'Chat en vivo con la comunidad TLD. Discute sobre IA, comparte ideas y conéctate en tiempo real.' },
        'tchat.h1': { fr: '💬 Tchat Live', en: '💬 Live Chat', es: '💬 Chat en Vivo' },
        'tchat.join.title': { fr: '👋 Rejoindre le tchat', en: '👋 Join the chat', es: '👋 Unirse al chat' },
        'tchat.join.btn': { fr: '🚀 C\'est parti !', en: '🚀 Let\'s go!', es: '🚀 ¡Vamos!' },
        'tchat.live': { fr: 'En direct', en: 'Live', es: 'En vivo' },
        'tchat.secure': { fr: '🔒 Sécurisé', en: '🔒 Secure', es: '🔒 Seguro' },
        'tchat.moderated': { fr: '🛡️ Modéré', en: '🛡️ Moderated', es: '🛡️ Moderado' },
        'tchat.placeholder.pseudo': { fr: 'Votre pseudo...', en: 'Your nickname...', es: 'Tu apodo...' },
        'tchat.placeholder.message': { fr: 'Message...', en: 'Message...', es: 'Mensaje...' },
        'tchat.placeholder.gif': { fr: '🔍 Rechercher un GIF...', en: '🔍 Search for a GIF...', es: '🔍 Buscar un GIF...' },
        'tchat.first': { fr: 'Soyez le premier !', en: 'Be the first!', es: '¡Sé el primero!' },
        'tchat.joined': { fr: 'a rejoint le tchat', en: 'joined the chat', es: 'se unió al chat' },
        'tchat.left': { fr: 'a quitté le tchat', en: 'left the chat', es: 'abandonó el chat' },
        'tchat.wait': { fr: '⏳ Attendez avant d\'envoyer un autre message', en: '⏳ Wait before sending another message', es: '⏳ Espera antes de enviar otro mensaje' },
        'tchat.blocked': { fr: '🛡️ Message bloqué par la modération', en: '🛡️ Message blocked by moderation', es: '🛡️ Mensaje bloqueado por la moderación' },
        'tchat.invalid': { fr: '🛡️ Message invalide (1-500 caractères)', en: '🛡️ Invalid message (1-500 characters)', es: '🛡️ Mensaje inválido (1-500 caracteres)' },
        'tchat.pseudo.invalid': { fr: 'Pseudo invalide (2-20 caractères, sans caractères spéciaux)', en: 'Invalid nickname (2-20 characters, no special characters)', es: 'Apodo inválido (2-20 caracteres, sin caracteres especiales)' },
        'tchat.pseudo.blocked': { fr: '🛡️ Pseudo non autorisé', en: '🛡️ Nickname not allowed', es: '🛡️ Apodo no autorizado' },
        'tchat.auth.error': { fr: 'Connexion impossible. Veuillez réessayer ou vous connecter via la page Compte.', en: 'Connection failed. Please try again or log in via the Account page.', es: 'Conexión imposible. Inténtelo de nuevo o inicie sesión desde la página Cuenta.' },
        'tchat.gif.none': { fr: 'Aucun GIF 😢', en: 'No GIF found 😢', es: 'Ningún GIF 😢' },
        'tchat.typing': { fr: 'écrit...', en: 'is typing...', es: 'está escribiendo...' },
        'tchat.typing.plural': { fr: 'écrivent...', en: 'are typing...', es: 'están escribiendo...' },

        // ==================== QUIZ.HTML ====================
        'quiz.title': { fr: 'Quiz IA ou Humain ? 🧠 TLD', en: 'Quiz: AI or Human? 🧠 TLD', es: 'Quiz: ¿IA o Humano? 🧠 TLD' },
        'quiz.desc': { fr: 'Quiz interactif : saurez-vous distinguer ce qui est fait par l\'IA ou par un humain ? Testez vos connaissances avec TLD.', en: 'Interactive quiz: can you tell what\'s made by AI or by a human? Test your knowledge with TLD.', es: 'Quiz interactivo: ¿puedes distinguir lo hecho por IA o por un humano? Pon a prueba tus conocimientos con TLD.' },
        'quiz.h1': { fr: '🧠 Quiz : IA ou Humain ?', en: '🧠 Quiz: AI or Human?', es: '🧠 Quiz: ¿IA o Humano?' },
        'quiz.subtitle': { fr: 'Saurez-vous distinguer les créations de l\'IA ?', en: 'Can you tell AI creations apart?', es: '¿Podrás distinguir las creaciones de la IA?' },
        'quiz.question': { fr: 'Question', en: 'Question', es: 'Pregunta' },
        'quiz.text': { fr: '📝 Texte', en: '📝 Text', es: '📝 Texto' },
        'quiz.image': { fr: '🖼️ Image', en: '🖼️ Image', es: '🖼️ Imagen' },
        'quiz.image.question': { fr: 'Cette image a-t-elle été créée par une IA ?', en: 'Was this image created by an AI?', es: '¿Esta imagen fue creada por una IA?' },
        'quiz.correct': { fr: '✅ Bonnes réponses', en: '✅ Correct answers', es: '✅ Respuestas correctas' },
        'quiz.streak': { fr: '🔥 Meilleure série', en: '🔥 Best streak', es: '🔥 Mejor racha' },
        'quiz.accuracy': { fr: 'Précision', en: 'Accuracy', es: 'Precisión' },
        'quiz.btn.ai': { fr: '🤖 Intelligence Artificielle', en: '🤖 Artificial Intelligence', es: '🤖 Inteligencia Artificial' },
        'quiz.btn.human': { fr: '👤 Humain', en: '👤 Human', es: '👤 Humano' },
        'quiz.btn.next': { fr: 'Question suivante →', en: 'Next question →', es: 'Siguiente pregunta →' },
        'quiz.result.correct': { fr: '✅ Correct !', en: '✅ Correct!', es: '✅ ¡Correcto!' },
        'quiz.result.wrong': { fr: '❌ Raté !', en: '❌ Wrong!', es: '❌ ¡Fallaste!' },
        'quiz.finished': { fr: '🎉 Quiz terminé !', en: '🎉 Quiz completed!', es: '🎉 ¡Quiz terminado!' },
        'quiz.share': { fr: '📤 Partager mon score', en: '📤 Share my score', es: '📤 Compartir mi puntuación' },
        'quiz.replay': { fr: '🔄 Rejouer', en: '🔄 Play again', es: '🔄 Jugar de nuevo' },
        'quiz.leaderboard': { fr: '🏆 Meilleurs scores', en: '🏆 Leaderboard', es: '🏆 Mejores puntuaciones' },
        'quiz.result.expert': { fr: '🏆 Incroyable ! Vous êtes un expert en détection d\'IA !', en: '🏆 Amazing! You\'re an AI detection expert!', es: '🏆 ¡Increíble! ¡Eres un experto en detección de IA!' },
        'quiz.result.good': { fr: '🎯 Très bien ! Vous avez l\'œil pour repérer les différences.', en: '🎯 Great job! You have an eye for spotting differences.', es: '🎯 ¡Muy bien! Tienes ojo para detectar las diferencias.' },
        'quiz.result.ok': { fr: '👍 Pas mal ! La frontière IA/humain devient floue...', en: '👍 Not bad! The AI/human boundary is getting blurry...', es: '👍 ¡Nada mal! La frontera IA/humano se vuelve borrosa...' },
        'quiz.result.low': { fr: '🤖 Les IA vous ont bien eu ! Elles progressent vite...', en: '🤖 The AIs fooled you! They\'re improving fast...', es: '🤖 ¡Las IAs te engañaron! Mejoran rápido...' },

        // ==================== DEBAT.HTML ====================
        'debat.title': { fr: 'Débat du Jour ⚔️ TLD', en: 'Debate of the Day ⚔️ TLD', es: 'Debate del Día ⚔️ TLD' },
        'debat.desc': { fr: 'Participez au débat du jour sur l\'intelligence artificielle. Donnez votre avis et débattez avec la communauté de TLD.', en: 'Join today\'s debate on artificial intelligence. Share your opinion and debate with the TLD community.', es: 'Participa en el debate del día sobre inteligencia artificial. Da tu opinión y debate con la comunidad de TLD.' },
        'debat.h1': { fr: '⚔️ Débat du Jour', en: '⚔️ Debate of the Day', es: '⚔️ Debate del Día' },
        'debat.subtitle': { fr: 'Prenez position et défendez vos arguments !', en: 'Take a stand and defend your arguments!', es: '¡Toma posición y defiende tus argumentos!' },
        'debat.badge': { fr: '🔥 Question du jour', en: '🔥 Question of the day', es: '🔥 Pregunta del día' },
        'debat.pour': { fr: '✅ POUR', en: '✅ FOR', es: '✅ A FAVOR' },
        'debat.contre': { fr: '❌ CONTRE', en: '❌ AGAINST', es: '❌ EN CONTRA' },
        'debat.votes': { fr: 'votes', en: 'votes', es: 'votos' },
        'debat.total': { fr: 'votes au total', en: 'total votes', es: 'votos en total' },
        'debat.voted.pour': { fr: '✅ Vous avez voté POUR', en: '✅ You voted FOR', es: '✅ Has votado A FAVOR' },
        'debat.voted.contre': { fr: '✅ Vous avez voté CONTRE', en: '✅ You voted AGAINST', es: '✅ Has votado EN CONTRA' },
        'debat.arguments': { fr: '💬 Arguments', en: '💬 Arguments', es: '💬 Argumentos' },
        'debat.add.arg': { fr: '➕ Ajouter un argument', en: '➕ Add an argument', es: '➕ Añadir un argumento' },
        'debat.arg.pour': { fr: '✅ Pour', en: '✅ For', es: '✅ A favor' },
        'debat.arg.contre': { fr: '❌ Contre', en: '❌ Against', es: '❌ En contra' },
        'debat.arg.none.pour': { fr: 'Aucun argument pour le moment.', en: 'No arguments yet.', es: 'Ningún argumento por el momento.' },
        'debat.arg.none.contre': { fr: 'Aucun argument contre pour le moment.', en: 'No arguments against yet.', es: 'Ningún argumento en contra por el momento.' },
        'debat.arg.first': { fr: 'Soyez le premier à donner votre avis !', en: 'Be the first to share your opinion!', es: '¡Sé el primero en dar tu opinión!' },
        'debat.modal.title': { fr: '➕ Ajouter un argument', en: '➕ Add an argument', es: '➕ Añadir un argumento' },
        'debat.modal.label': { fr: 'Votre argument', en: 'Your argument', es: 'Tu argumento' },
        'debat.modal.placeholder': { fr: 'Expliquez votre point de vue...', en: 'Explain your point of view...', es: 'Explica tu punto de vista...' },
        'debat.modal.submit': { fr: 'Publier mon argument', en: 'Post my argument', es: 'Publicar mi argumento' },
        'debat.modal.loading': { fr: '⏳ Publication...', en: '⏳ Publishing...', es: '⏳ Publicando...' },
        'debat.validation': { fr: 'Sélectionnez une position et écrivez au moins 10 caractères.', en: 'Select a position and write at least 10 characters.', es: 'Selecciona una posición y escribe al menos 10 caracteres.' },

        // Debate topics
        'debat.topic.1': { fr: 'L\'IA devrait-elle être autorisée à créer des œuvres d\'art vendues aux enchères ?', en: 'Should AI be allowed to create artwork sold at auction?', es: '¿Debería permitirse a la IA crear obras de arte vendidas en subasta?' },
        'debat.topic.2': { fr: 'Faut-il obliger les entreprises à signaler quand un contenu est généré par IA ?', en: 'Should companies be required to disclose when content is AI-generated?', es: '¿Deberían las empresas estar obligadas a señalar cuándo un contenido es generado por IA?' },
        'debat.topic.3': { fr: 'Les chatbots IA devraient-ils pouvoir refuser de répondre à certaines questions ?', en: 'Should AI chatbots be able to refuse to answer certain questions?', es: '¿Deberían los chatbots de IA poder negarse a responder ciertas preguntas?' },
        'debat.topic.4': { fr: 'L\'IA devrait-elle remplacer les juges pour les petites infractions ?', en: 'Should AI replace judges for minor offenses?', es: '¿Debería la IA reemplazar a los jueces para infracciones menores?' },
        'debat.topic.5': { fr: 'Faut-il taxer les robots qui remplacent des emplois humains ?', en: 'Should robots that replace human jobs be taxed?', es: '¿Hay que gravar a los robots que reemplazan empleos humanos?' },
        'debat.topic.6': { fr: 'Les enfants devraient-ils apprendre à coder ou à utiliser l\'IA ?', en: 'Should children learn to code or to use AI?', es: '¿Los niños deberían aprender a programar o a usar IA?' },
        'debat.topic.7': { fr: 'Une IA peut-elle être considérée comme un ami ?', en: 'Can an AI be considered a friend?', es: '¿Puede una IA ser considerada un amigo?' },

        // ==================== SONDAGES.HTML ====================
        'sondages.title': { fr: 'Sondages IA 📊 TLD', en: 'AI Polls 📊 TLD', es: 'Encuestas IA 📊 TLD' },
        'sondages.desc': { fr: 'Sondages sur l\'intelligence artificielle. Votez et découvrez ce que pense la communauté sur l\'IA avec TLD.', en: 'Polls about artificial intelligence. Vote and discover what the community thinks about AI with TLD.', es: 'Encuestas sobre inteligencia artificial. Vota y descubre qué piensa la comunidad sobre la IA con TLD.' },
        'sondages.h1': { fr: '📊 Sondages en direct', en: '📊 Live Polls', es: '📊 Encuestas en vivo' },
        'sondages.subtitle': { fr: 'Donnez votre avis et voyez les résultats en temps réel !', en: 'Share your opinion and see results in real time!', es: '¡Da tu opinión y ve los resultados en tiempo real!' },
        'sondages.total': { fr: 'Votes totaux', en: 'Total votes', es: 'Votos totales' },
        'sondages.active': { fr: 'Sondages actifs', en: 'Active polls', es: 'Encuestas activas' },
        'sondages.today': { fr: 'Votes aujourd\'hui', en: 'Votes today', es: 'Votos hoy' },
        'sondages.live': { fr: 'Résultats en direct', en: 'Live results', es: 'Resultados en vivo' },
        'sondages.all': { fr: '🌐 Tous', en: '🌐 All', es: '🌐 Todos' },
        'sondages.work': { fr: '💼 Travail', en: '💼 Work', es: '💼 Trabajo' },
        'sondages.society': { fr: '🏛️ Société', en: '🏛️ Society', es: '🏛️ Sociedad' },
        'sondages.tech': { fr: '🔬 Techno', en: '🔬 Tech', es: '🔬 Tecnología' },
        'sondages.ethics': { fr: '⚖️ Éthique', en: '⚖️ Ethics', es: '⚖️ Ética' },
        'sondages.vote': { fr: '📤 Voter', en: '📤 Vote', es: '📤 Votar' },
        'sondages.voted': { fr: '✅ Vous avez voté', en: '✅ You voted', es: '✅ Has votado' },
        'sondages.people.voted': { fr: 'personnes ont voté', en: 'people voted', es: 'personas votaron' },
        'sondages.select.error': { fr: 'Sélectionnez une option avant de voter !', en: 'Select an option before voting!', es: '¡Selecciona una opción antes de votar!' },
        'sondages.load.error': { fr: '⚠️ Erreur de chargement. Vérifiez votre connexion.', en: '⚠️ Loading error. Check your connection.', es: '⚠️ Error de carga. Verifique su conexión.' },
        'sondages.retry': { fr: '🔄 Réessayer', en: '🔄 Retry', es: '🔄 Reintentar' },
        'sondages.none': { fr: 'Aucun sondage disponible.', en: 'No polls available.', es: 'No hay encuestas disponibles.' },

        // ==================== FORUM.HTML ====================
        'forum.title': { fr: 'Forum 🏛️ TLD', en: 'Forum 🏛️ TLD', es: 'Foro 🏛️ TLD' },
        'forum.desc': { fr: 'Forum communautaire TLD. Rejoignez des groupes de discussion sur l\'IA, la tech et bien plus.', en: 'TLD community forum. Join discussion groups about AI, tech and more.', es: 'Foro comunitario TLD. Únete a grupos de discusión sobre IA, tecnología y más.' },
        'forum.h1': { fr: '🏛️ Forum', en: '🏛️ Forum', es: '🏛️ Foro' },
        'forum.subtitle': { fr: 'Rejoignez des groupes de discussion et partagez vos idées', en: 'Join discussion groups and share your ideas', es: 'Únete a grupos de discusión y comparte tus ideas' },
        'forum.login.title': { fr: '🔒 Connexion requise', en: '🔒 Login required', es: '🔒 Inicio de sesión requerido' },
        'forum.login.text': { fr: 'Connectez-vous pour accéder au forum et rejoindre des groupes de discussion.', en: 'Log in to access the forum and join discussion groups.', es: 'Inicia sesión para acceder al foro y unirte a grupos de discusión.' },
        'forum.search': { fr: '🔍 Rechercher un groupe...', en: '🔍 Search for a group...', es: '🔍 Buscar un grupo...' },
        'forum.all.categories': { fr: 'Toutes les catégories', en: 'All categories', es: 'Todas las categorías' },
        'forum.cat.ia': { fr: '🤖 Intelligence Artificielle', en: '🤖 Artificial Intelligence', es: '🤖 Inteligencia Artificial' },
        'forum.cat.dev': { fr: '💻 Développement', en: '💻 Development', es: '💻 Desarrollo' },
        'forum.cat.tech': { fr: '🔧 Tech & Gadgets', en: '🔧 Tech & Gadgets', es: '🔧 Tech y Gadgets' },
        'forum.cat.science': { fr: '🔬 Science', en: '🔬 Science', es: '🔬 Ciencia' },
        'forum.cat.gaming': { fr: '🎮 Gaming', en: '🎮 Gaming', es: '🎮 Gaming' },
        'forum.cat.other': { fr: '💬 Autre', en: '💬 Other', es: '💬 Otro' },
        'forum.create.group': { fr: '+ Créer un groupe', en: '+ Create a group', es: '+ Crear un grupo' },
        'forum.invitations': { fr: '📩 Invitations', en: '📩 Invitations', es: '📩 Invitaciones' },
        'forum.no.groups': { fr: 'Aucun groupe pour le moment', en: 'No groups yet', es: 'Ningún grupo por el momento' },
        'forum.first.group': { fr: 'Soyez le premier à créer un groupe !', en: 'Be the first to create a group!', es: '¡Sé el primero en crear un grupo!' },
        'forum.no.results': { fr: 'Aucun groupe trouvé', en: 'No groups found', es: 'Ningún grupo encontrado' },
        'forum.modal.create': { fr: '✨ Créer un groupe', en: '✨ Create a group', es: '✨ Crear un grupo' },
        'forum.modal.name': { fr: 'Nom du groupe', en: 'Group name', es: 'Nombre del grupo' },
        'forum.modal.name.placeholder': { fr: 'Ex: IA & Machine Learning', en: 'Ex: AI & Machine Learning', es: 'Ej: IA & Machine Learning' },
        'forum.modal.desc': { fr: 'Description', en: 'Description', es: 'Descripción' },
        'forum.modal.desc.placeholder': { fr: 'Décrivez le thème du groupe...', en: 'Describe the group topic...', es: 'Describe el tema del grupo...' },
        'forum.modal.category': { fr: 'Catégorie', en: 'Category', es: 'Categoría' },
        'forum.modal.visibility': { fr: 'Visibilité', en: 'Visibility', es: 'Visibilidad' },
        'forum.modal.public': { fr: '🌍 Public - Tout le monde peut rejoindre', en: '🌍 Public - Anyone can join', es: '🌍 Público - Cualquiera puede unirse' },
        'forum.modal.private': { fr: '🔒 Privé - Sur invitation uniquement', en: '🔒 Private - Invite only', es: '🔒 Privado - Solo por invitación' },
        'forum.modal.submit': { fr: 'Créer', en: 'Create', es: 'Crear' },
        'forum.members': { fr: '👥 Membres', en: '👥 Members', es: '👥 Miembros' },
        'forum.leave': { fr: '🚪 Quitter', en: '🚪 Leave', es: '🚪 Salir' },
        'forum.no.messages': { fr: 'Aucun message. Lancez la conversation !', en: 'No messages. Start the conversation!', es: 'Sin mensajes. ¡Inicia la conversación!' },
        'forum.msg.placeholder': { fr: 'Écrire un message...', en: 'Write a message...', es: 'Escribe un mensaje...' },
        'forum.members.title': { fr: '👥 Membres du groupe', en: '👥 Group members', es: '👥 Miembros del grupo' },
        'forum.admin': { fr: '👑 Admin', en: '👑 Admin', es: '👑 Admin' },
        'forum.member': { fr: 'Membre', en: 'Member', es: 'Miembro' },
        'forum.no.members': { fr: 'Aucun membre', en: 'No members', es: 'Sin miembros' },
        'forum.no.invites': { fr: 'Aucune invitation', en: 'No invitations', es: 'Sin invitaciones' },
        'forum.accept': { fr: 'Accepter', en: 'Accept', es: 'Aceptar' },
        'forum.refuse': { fr: 'Refuser', en: 'Refuse', es: 'Rechazar' },
        'forum.invited.by': { fr: 'Invité par', en: 'Invited by', es: 'Invitado por' },
        'forum.loading': { fr: 'Chargement...', en: 'Loading...', es: 'Cargando...' },

        // ==================== AVIS.HTML ====================
        'avis.title': { fr: 'Avis - TLD | IA vs Humains', en: 'Reviews - TLD | AI vs Humans', es: 'Opiniones - TLD | IA vs Humanos' },
        'avis.desc': { fr: 'Lisez les avis de la communauté et partagez votre opinion sur l\'IA vs les humains avec TLD.', en: 'Read community reviews and share your opinion on AI vs humans with TLD.', es: 'Lee las opiniones de la comunidad y comparte tu opinión sobre IA vs humanos con TLD.' },
        'avis.h1': { fr: '💬 Donnez votre avis', en: '💬 Give your review', es: '💬 Da tu opinión' },
        'avis.subtitle': { fr: 'Faut-il tout remplacer par l\'IA ? Partagez votre opinion !', en: 'Should we replace everything with AI? Share your opinion!', es: '¿Hay que reemplazarlo todo con IA? ¡Comparte tu opinión!' },
        'avis.back': { fr: '← Retour au débat', en: '← Back to debate', es: '← Volver al debate' },
        'avis.moderation': { fr: '🛡️ Modération IA activée', en: '🛡️ AI moderation enabled', es: '🛡️ Moderación IA activada' },
        'avis.realtime': { fr: '🔥 Temps réel Firebase', en: '🔥 Firebase real-time', es: '🔥 Tiempo real Firebase' },
        'avis.total': { fr: 'Avis total', en: 'Total reviews', es: 'Opiniones totales' },
        'avis.average': { fr: 'Note moyenne', en: 'Average rating', es: 'Nota media' },
        'avis.for': { fr: '✅ Pour l\'IA', en: '✅ Pro AI', es: '✅ A favor de IA' },
        'avis.against': { fr: '❌ Contre', en: '❌ Against', es: '❌ En contra' },
        'avis.form.title': { fr: '✍️ Laissez un commentaire', en: '✍️ Leave a comment', es: '✍️ Deja un comentario' },
        'avis.form.pseudo': { fr: 'Votre pseudo *', en: 'Your nickname *', es: 'Tu apodo *' },
        'avis.form.pseudo.placeholder': { fr: 'Ex: TechFan2025', en: 'Ex: TechFan2025', es: 'Ej: TechFan2025' },
        'avis.form.position': { fr: 'Votre position sur l\'IA', en: 'Your stance on AI', es: 'Tu posición sobre la IA' },
        'avis.form.neutral': { fr: '🤔 Nuancé - ça dépend', en: '🤔 Nuanced - it depends', es: '🤔 Matizado - depende' },
        'avis.form.for': { fr: '✅ Pour - L\'IA c\'est l\'avenir', en: '✅ For - AI is the future', es: '✅ A favor - La IA es el futuro' },
        'avis.form.against': { fr: '❌ Contre - On garde l\'humain', en: '❌ Against - Keep it human', es: '❌ En contra - Mantengamos lo humano' },
        'avis.form.rating': { fr: 'Votre note', en: 'Your rating', es: 'Tu nota' },
        'avis.form.comment': { fr: 'Votre commentaire *', en: 'Your comment *', es: 'Tu comentario *' },
        'avis.form.comment.placeholder': { fr: 'Partagez votre opinion sur l\'IA et les robots... (min 10 caractères)', en: 'Share your opinion on AI and robots... (min 10 characters)', es: 'Comparte tu opinión sobre la IA y los robots... (mín 10 caracteres)' },
        'avis.form.submit': { fr: '🚀 Publier mon avis', en: '🚀 Post my review', es: '🚀 Publicar mi opinión' },
        'avis.latest': { fr: '📝 Derniers avis', en: '📝 Latest reviews', es: '📝 Últimas opiniones' },
        'avis.live': { fr: 'En direct', en: 'Live', es: 'En vivo' },
        'avis.loading': { fr: 'Chargement des avis...', en: 'Loading reviews...', es: 'Cargando opiniones...' },
        'avis.none': { fr: 'Aucun avis pour le moment. Soyez le premier !', en: 'No reviews yet. Be the first!', es: 'Ninguna opinión por el momento. ¡Sé el primero!' },
        'avis.opinion.for': { fr: '✅ Pour l\'IA', en: '✅ Pro AI', es: '✅ A favor de IA' },
        'avis.opinion.against': { fr: '❌ Contre le tout-IA', en: '❌ Against all-AI', es: '❌ Contra el todo-IA' },
        'avis.opinion.neutral': { fr: '🤔 Position nuancée', en: '🤔 Nuanced position', es: '🤔 Posición matizada' },
        'avis.success': { fr: '🎉 Merci ! Votre avis est visible par tous.', en: '🎉 Thanks! Your review is visible to everyone.', es: '🎉 ¡Gracias! Tu opinión es visible para todos.' },
        'avis.pseudo.error': { fr: '🛡️ Pseudo inapproprié. Choisissez-en un autre.', en: '🛡️ Inappropriate nickname. Choose another one.', es: '🛡️ Apodo inapropiado. Elige otro.' },
        'avis.publishing': { fr: '⏳ Publication...', en: '⏳ Publishing...', es: '⏳ Publicando...' },
        'avis.error': { fr: '❌ Erreur. Réessayez.', en: '❌ Error. Try again.', es: '❌ Error. Inténtalo de nuevo.' },

        // ==================== COMPTE.HTML ====================
        'compte.title': { fr: 'Mon Compte 👤 TLD', en: 'My Account 👤 TLD', es: 'Mi Cuenta 👤 TLD' },
        'compte.desc': { fr: 'Gérez votre compte TLD. Accédez à votre profil, vos statistiques et vos paramètres.', en: 'Manage your TLD account. Access your profile, statistics and settings.', es: 'Gestiona tu cuenta TLD. Accede a tu perfil, estadísticas y configuración.' },
        'compte.h1': { fr: '👤 Mon Compte', en: '👤 My Account', es: '👤 Mi Cuenta' },

        // ==================== PREMIUM.HTML ====================
        'premium.title': { fr: 'Premium ✨ TLD', en: 'Premium ✨ TLD', es: 'Premium ✨ TLD' },
        'premium.desc': { fr: 'Passez Premium sur TLD et débloquez des fonctionnalités exclusives sur l\'intelligence artificielle.', en: 'Go Premium on TLD and unlock exclusive AI features.', es: 'Hazte Premium en TLD y desbloquea funciones exclusivas sobre inteligencia artificial.' },
        'premium.h1': { fr: '✨ Tino Premium', en: '✨ Tino Premium', es: '✨ Tino Premium' },
        'premium.subtitle': { fr: 'Débloquez tout le potentiel de TLD et accédez à des contenus exclusifs sur l\'IA', en: 'Unlock TLD\'s full potential and access exclusive AI content', es: 'Desbloquea todo el potencial de TLD y accede a contenidos exclusivos sobre IA' },
        'premium.launch': { fr: '👑 OFFRE DE LANCEMENT -30%', en: '👑 LAUNCH OFFER -30%', es: '👑 OFERTA DE LANZAMIENTO -30%' },
        'premium.free': { fr: '🆓 Gratuit', en: '🆓 Free', es: '🆓 Gratis' },
        'premium.free.price': { fr: '0€', en: '€0', es: '0€' },
        'premium.free.period': { fr: 'Pour toujours', en: 'Forever', es: 'Para siempre' },
        'premium.free.start': { fr: 'Commencer gratuitement', en: 'Start for free', es: 'Empezar gratis' },
        'premium.monthly': { fr: '⚡ Premium Mensuel', en: '⚡ Monthly Premium', es: '⚡ Premium Mensual' },
        'premium.monthly.price': { fr: '4,99€/mois', en: '€4.99/month', es: '4,99€/mes' },
        'premium.monthly.btn': { fr: 'S\'abonner maintenant', en: 'Subscribe now', es: 'Suscribirse ahora' },
        'premium.yearly': { fr: '💎 Premium Annuel', en: '💎 Yearly Premium', es: '💎 Premium Anual' },
        'premium.yearly.price': { fr: '39,99€/an', en: '€39.99/year', es: '39,99€/año' },
        'premium.yearly.best': { fr: 'Meilleure offre', en: 'Best offer', es: 'Mejor oferta' },
        'premium.features': { fr: '🚀 Avantages Premium', en: '🚀 Premium Benefits', es: '🚀 Ventajas Premium' },
        'premium.stripe': { fr: '🔒 Paiement 100% sécurisé par Stripe', en: '🔒 100% secure payment by Stripe', es: '🔒 Pago 100% seguro con Stripe' },
        'premium.unlimited.quiz': { fr: 'Quiz illimités', en: 'Unlimited quizzes', es: 'Quiz ilimitados' },
        'premium.unlimited.votes': { fr: 'Votes illimités', en: 'Unlimited votes', es: 'Votos ilimitados' },
        'premium.create.debates': { fr: 'Créer vos débats', en: 'Create your debates', es: 'Crea tus debates' },
        'premium.unlimited.msg': { fr: 'Messages privés illimités', en: 'Unlimited private messages', es: 'Mensajes privados ilimitados' },
        'premium.no.ads': { fr: 'Sans publicité', en: 'Ad-free', es: 'Sin publicidad' },
        'premium.badge': { fr: 'Badge Premium ✨', en: 'Premium badge ✨', es: 'Insignia Premium ✨' },

        // ==================== BOUTIQUE.HTML ====================
        'boutique.title': { fr: 'Boutique 🛒 TLD', en: 'Shop 🛒 TLD', es: 'Tienda 🛒 TLD' },
        'boutique.desc': { fr: 'Boutique TLD : découvrez nos produits et ressources sur l\'intelligence artificielle.', en: 'TLD Shop: discover our products and resources about artificial intelligence.', es: 'Tienda TLD: descubre nuestros productos y recursos sobre inteligencia artificial.' },
        'boutique.h1': { fr: '🛒 Boutique', en: '🛒 Shop', es: '🛒 Tienda' },

        // ==================== CONTACT.HTML ====================
        'contact.title': { fr: 'Contact - TLD', en: 'Contact - TLD', es: 'Contacto - TLD' },
        'contact.desc': { fr: 'Contactez TLD - Formulaire de contact pour questions, suggestions ou partenariats.', en: 'Contact TLD - Contact form for questions, suggestions or partnerships.', es: 'Contacta con TLD - Formulario de contacto para preguntas, sugerencias o colaboraciones.' },
        'contact.h1': { fr: 'Contactez-nous', en: 'Contact us', es: 'Contáctenos' },
        'contact.subtitle': { fr: 'Une question, une suggestion ou une demande de partenariat ? Écrivez-nous !', en: 'A question, suggestion or partnership request? Write to us!', es: '¿Una pregunta, sugerencia o solicitud de colaboración? ¡Escríbenos!' },
        'contact.email': { fr: '📧 Email', en: '📧 Email', es: '📧 Email' },
        'contact.delay': { fr: '⏱️ Délai de réponse', en: '⏱️ Response time', es: '⏱️ Tiempo de respuesta' },
        'contact.delay.text': { fr: 'Nous répondons sous 48h en général', en: 'We usually respond within 48h', es: 'Respondemos en 48h generalmente' },
        'contact.partnership': { fr: '💼 Partenariats', en: '💼 Partnerships', es: '💼 Colaboraciones' },
        'contact.partnership.text': { fr: 'Pub, collabs, sponsoring... contactez-nous !', en: 'Ads, collabs, sponsoring... contact us!', es: 'Publicidad, colaboraciones, patrocinios... ¡contáctenos!' },
        'contact.form.name': { fr: 'Votre nom / pseudo', en: 'Your name / nickname', es: 'Tu nombre / apodo' },
        'contact.form.name.placeholder': { fr: 'Ex: Tino', en: 'Ex: Tino', es: 'Ej: Tino' },
        'contact.form.email': { fr: 'Votre email', en: 'Your email', es: 'Tu email' },
        'contact.form.email.placeholder': { fr: 'votre@email.com', en: 'your@email.com', es: 'tu@email.com' },
        'contact.form.subject': { fr: 'Sujet', en: 'Subject', es: 'Asunto' },
        'contact.form.subject.default': { fr: '-- Choisissez un sujet --', en: '-- Choose a subject --', es: '-- Elige un asunto --' },
        'contact.form.subject.general': { fr: 'Question générale', en: 'General question', es: 'Pregunta general' },
        'contact.form.subject.bug': { fr: 'Signaler un bug', en: 'Report a bug', es: 'Reportar un bug' },
        'contact.form.subject.idea': { fr: 'Suggestion / Idée', en: 'Suggestion / Idea', es: 'Sugerencia / Idea' },
        'contact.form.subject.partner': { fr: 'Partenariat / Publicité', en: 'Partnership / Advertising', es: 'Colaboración / Publicidad' },
        'contact.form.subject.account': { fr: 'Problème de compte', en: 'Account issue', es: 'Problema de cuenta' },
        'contact.form.subject.other': { fr: 'Autre', en: 'Other', es: 'Otro' },
        'contact.form.message': { fr: 'Votre message', en: 'Your message', es: 'Tu mensaje' },
        'contact.form.message.placeholder': { fr: 'Décrivez votre demande en détail...', en: 'Describe your request in detail...', es: 'Describe tu solicitud en detalle...' },
        'contact.form.submit': { fr: '📨 Envoyer le message', en: '📨 Send message', es: '📨 Enviar mensaje' },
        'contact.form.name.error': { fr: 'Veuillez entrer un nom valide (minimum 2 caractères).', en: 'Please enter a valid name (minimum 2 characters).', es: 'Introduce un nombre válido (mínimo 2 caracteres).' },
        'contact.form.email.error': { fr: 'Adresse email invalide.', en: 'Invalid email address.', es: 'Dirección de email inválida.' },
        'contact.form.subject.error': { fr: 'Veuillez choisir un sujet.', en: 'Please choose a subject.', es: 'Por favor elige un asunto.' },
        'contact.form.message.error': { fr: 'Votre message est trop court (minimum 10 caractères).', en: 'Your message is too short (minimum 10 characters).', es: 'Tu mensaje es demasiado corto (mínimo 10 caracteres).' },
        'contact.form.rate.limit': { fr: 'Veuillez patienter 1 minute entre chaque message.', en: 'Please wait 1 minute between messages.', es: 'Espera 1 minuto entre cada mensaje.' },
        'contact.form.captcha.error': { fr: 'Vérification de sécurité échouée. Rechargez la page et réessayez.', en: 'Security verification failed. Reload the page and try again.', es: 'Verificación de seguridad fallida. Recarga la página e inténtalo de nuevo.' },
        'contact.form.success': { fr: 'Message envoyé avec succès ! Nous vous répondrons sous 48h.', en: 'Message sent successfully! We will respond within 48h.', es: '¡Mensaje enviado con éxito! Responderemos en 48h.' },
        'contact.form.error': { fr: 'Erreur lors de l\'envoi. Veuillez réessayer.', en: 'Error sending message. Please try again.', es: 'Error al enviar. Por favor inténtalo de nuevo.' },
        'contact.recaptcha': { fr: 'Ce site est protégé par reCAPTCHA Enterprise.', en: 'This site is protected by reCAPTCHA Enterprise.', es: 'Este sitio está protegido por reCAPTCHA Enterprise.' },
        'contact.recaptcha.privacy': { fr: 'Confidentialité', en: 'Privacy', es: 'Privacidad' },
        'contact.recaptcha.terms': { fr: 'Conditions', en: 'Terms', es: 'Términos' },

        // ==================== CONFIDENTIALITE.HTML ====================
        'confidentialite.title': { fr: 'Politique de Confidentialité 🔒 TLD', en: 'Privacy Policy 🔒 TLD', es: 'Política de Privacidad 🔒 TLD' },
        'confidentialite.desc': { fr: 'Politique de confidentialité de TLD. Découvrez comment nous protégeons vos données personnelles.', en: 'TLD Privacy Policy. Learn how we protect your personal data.', es: 'Política de privacidad de TLD. Descubre cómo protegemos tus datos personales.' },
        'confidentialite.h1': { fr: '🔒 Politique de Confidentialité', en: '🔒 Privacy Policy', es: '🔒 Política de Privacidad' },
        'confidentialite.updated': { fr: 'Dernière mise à jour : Janvier 2026', en: 'Last updated: January 2026', es: 'Última actualización: Enero 2026' },

        // ==================== VEILLE-TECHNO.HTML ====================
        'veille.title': { fr: 'Veille Techno IA 📡 TLD', en: 'AI Tech Watch 📡 TLD', es: 'Vigilancia Tech IA 📡 TLD' },
        'veille.desc': { fr: 'Veille technologique IA : suivez les dernières actualités, tendances et innovations en intelligence artificielle avec TLD.', en: 'AI tech watch: follow the latest news, trends and innovations in artificial intelligence with TLD.', es: 'Vigilancia tecnológica IA: sigue las últimas noticias, tendencias e innovaciones en inteligencia artificial con TLD.' },
        'veille.h1': { fr: '📡 Veille Techno IA', en: '📡 AI Tech Watch', es: '📡 Vigilancia Tech IA' },

        // ==================== APPAREILS-CONNECTES.HTML ====================
        'appareils.title': { fr: 'Appareils Connectés & IA - TLD', en: 'Connected Devices & AI - TLD', es: 'Dispositivos Conectados e IA - TLD' },
        'appareils.desc': { fr: 'Appareils connectés et IA - Découvrez comment l\'intelligence artificielle transforme nos objets du quotidien.', en: 'Connected devices and AI - Discover how artificial intelligence transforms our everyday objects.', es: 'Dispositivos conectados e IA - Descubre cómo la inteligencia artificial transforma nuestros objetos cotidianos.' },
        'appareils.h1': { fr: '📡 Appareils Connectés & IA', en: '📡 Connected Devices & AI', es: '📡 Dispositivos Conectados e IA' },

        // ==================== MESSAGERIE.HTML ====================
        'messagerie.title': { fr: 'Messagerie 💬 TLD', en: 'Messages 💬 TLD', es: 'Mensajes 💬 TLD' },
        'messagerie.desc': { fr: 'Messagerie privée TLD. Envoyez des messages privés aux membres de la communauté.', en: 'TLD private messaging. Send private messages to community members.', es: 'Mensajería privada TLD. Envía mensajes privados a los miembros de la comunidad.' },

        // ==================== MODERATION SYSTEM ====================
        'moderation.1': { fr: 'Contenu inapproprié détecté. Merci de reformuler avec respect.', en: 'Inappropriate content detected. Please rephrase respectfully.', es: 'Contenido inapropiado detectado. Por favor reformula con respeto.' },
        'moderation.2': { fr: 'Message offensant détecté. Ici, on débat dans le respect !', en: 'Offensive message detected. Here, we debate with respect!', es: 'Mensaje ofensivo detectado. ¡Aquí debatimos con respeto!' },
        'moderation.3': { fr: 'Ce langage n\'est pas accepté. Exprimez-vous autrement.', en: 'This language is not accepted. Express yourself differently.', es: 'Este lenguaje no está aceptado. Exprésate de otra manera.' },
        'moderation.4': { fr: 'Message bloqué. Restez courtois et bienveillant.', en: 'Message blocked. Stay courteous and kind.', es: 'Mensaje bloqueado. Sé cortés y amable.' },
        'moderation.5': { fr: 'Propos discriminatoires détectés. Pas de haine ici.', en: 'Discriminatory speech detected. No hate here.', es: 'Discurso discriminatorio detectado. Nada de odio aquí.' },

        // Language switcher
        'lang.label': { fr: 'Langue', en: 'Language', es: 'Idioma' },
    },

    /**
     * Initialize i18n system
     */
    init() {
        // Check saved preference
        const saved = localStorage.getItem('tld_lang');
        if (saved && this.supportedLangs.includes(saved)) {
            this.currentLang = saved;
        } else {
            // Auto-detect browser language
            const browserLang = (navigator.language || navigator.userLanguage || 'fr').substring(0, 2);
            if (this.supportedLangs.includes(browserLang)) {
                this.currentLang = browserLang;
            }
        }
        this.applyTranslations();
        this.injectLangSwitcher();
        this.updateHtmlLang();
    },

    /**
     * Get translation for a key
     */
    t(key) {
        const entry = this.translations[key];
        if (!entry) return key;
        return entry[this.currentLang] || entry['fr'] || key;
    },

    /**
     * Switch language
     */
    setLang(lang) {
        if (!this.supportedLangs.includes(lang)) return;
        this.currentLang = lang;
        localStorage.setItem('tld_lang', lang);
        this.applyTranslations();
        this.updateHtmlLang();
        this.updateLangSwitcher();
    },

    /**
     * Apply translations to all elements with data-i18n attribute
     */
    applyTranslations() {
        // Translate text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translated = this.t(key);
            if (translated !== key) {
                el.textContent = translated;
            }
        });

        // Translate innerHTML (for elements with HTML content)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            const translated = this.t(key);
            if (translated !== key) {
                el.innerHTML = translated;
            }
        });

        // Translate placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const translated = this.t(key);
            if (translated !== key) {
                el.placeholder = translated;
            }
        });

        // Translate aria-labels
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            const translated = this.t(key);
            if (translated !== key) {
                el.setAttribute('aria-label', translated);
            }
        });

        // Translate title attribute
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            const translated = this.t(key);
            if (translated !== key) {
                el.title = translated;
            }
        });

        // Update page title
        const titleEl = document.querySelector('title[data-i18n]');
        if (titleEl) {
            const key = titleEl.getAttribute('data-i18n');
            const translated = this.t(key);
            if (translated !== key) {
                document.title = translated;
            }
        }

        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"][data-i18n]');
        if (metaDesc) {
            const key = metaDesc.getAttribute('data-i18n');
            const translated = this.t(key);
            if (translated !== key) {
                metaDesc.setAttribute('content', translated);
            }
        }

        // Update og:description
        const ogDesc = document.querySelector('meta[property="og:description"][data-i18n]');
        if (ogDesc) {
            const key = ogDesc.getAttribute('data-i18n');
            const translated = this.t(key);
            if (translated !== key) {
                ogDesc.setAttribute('content', translated);
            }
        }

        // Update og:title
        const ogTitle = document.querySelector('meta[property="og:title"][data-i18n]');
        if (ogTitle) {
            const key = ogTitle.getAttribute('data-i18n');
            const translated = this.t(key);
            if (translated !== key) {
                ogTitle.setAttribute('content', translated);
            }
        }

        // Update og:locale
        const ogLocale = document.querySelector('meta[property="og:locale"]');
        if (ogLocale) {
            const localeMap = { fr: 'fr_FR', en: 'en_US', es: 'es_ES' };
            ogLocale.setAttribute('content', localeMap[this.currentLang] || 'fr_FR');
        }

        // Update content-language meta
        const contentLang = document.querySelector('meta[http-equiv="content-language"]');
        if (contentLang) {
            contentLang.setAttribute('content', this.currentLang);
        }
    },

    /**
     * Update html lang attribute
     */
    updateHtmlLang() {
        document.documentElement.lang = this.currentLang;
    },

    /**
     * Inject language switcher into the page
     */
    injectLangSwitcher() {
        // Find the nav-dropdown (exists on all pages)
        const navDropdown = document.querySelector('.nav-dropdown');
        if (!navDropdown) return;

        const switcher = document.createElement('div');
        switcher.className = 'lang-switcher';
        switcher.id = 'langSwitcher';

        const select = document.createElement('select');
        select.className = 'lang-select';
        select.setAttribute('aria-label', this.t('lang.label'));
        select.onchange = (e) => this.setLang(e.target.value);

        this.supportedLangs.forEach(lang => {
            const opt = document.createElement('option');
            opt.value = lang;
            opt.textContent = this.langFlags[lang] + ' ' + this.langNames[lang];
            if (lang === this.currentLang) opt.selected = true;
            select.appendChild(opt);
        });

        switcher.appendChild(select);

        // Insert after nav-dropdown
        navDropdown.parentNode.insertBefore(switcher, navDropdown.nextSibling);

        // Add styles
        this.injectStyles();
    },

    /**
     * Update the language switcher selection
     */
    updateLangSwitcher() {
        const select = document.querySelector('.lang-select');
        if (select) {
            select.value = this.currentLang;
        }
    },

    /**
     * Inject CSS styles for the language switcher
     */
    injectStyles() {
        if (document.getElementById('i18n-styles')) return;
        const style = document.createElement('style');
        style.id = 'i18n-styles';
        style.textContent = `
            .lang-switcher {
                position: fixed;
                top: 12px;
                left: 12px;
                z-index: 10001;
            }
            .lang-select {
                background: rgba(10, 10, 15, 0.9);
                color: #e8e8e8;
                border: 1px solid rgba(0, 245, 255, 0.3);
                border-radius: 8px;
                padding: 6px 10px;
                font-family: 'Space Grotesk', sans-serif;
                font-size: 0.8rem;
                cursor: pointer;
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                transition: all 0.3s;
            }
            .lang-select:hover {
                border-color: rgba(0, 245, 255, 0.6);
                box-shadow: 0 0 10px rgba(0, 245, 255, 0.2);
            }
            .lang-select:focus {
                outline: none;
                border-color: #00f5ff;
                box-shadow: 0 0 15px rgba(0, 245, 255, 0.3);
            }
            .lang-select option {
                background: #0a0a0f;
                color: #e8e8e8;
            }
            @media (max-width: 600px) {
                .lang-switcher {
                    top: 8px;
                    left: 8px;
                }
                .lang-select {
                    font-size: 0.75rem;
                    padding: 4px 8px;
                }
            }
        `;
        document.head.appendChild(style);
    }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => I18N.init());
} else {
    I18N.init();
}
