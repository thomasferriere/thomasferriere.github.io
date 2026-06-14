'use strict';

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50
  });
});

/* ================================================================
   TRANSLATIONS
   All user-visible text, keyed by ID.
   Add/change keys here the page updates automatically.
   ================================================================ */
const TRANSLATIONS = {

  fr: {
    /* page */
    'page.title': 'Thomas Ferriere Développeur',

    /* nav */
    'nav.about':    'À propos',
    'nav.skills':   'Compétences',
    'nav.projects': 'Projets',
    'nav.contact':  'Contact',

    /* hero */
    'hero.eyebrow':     'Développeur & Étudiant en Informatique',
    'hero.sub':         "Je conçois et construis des applications propres, performantes et bien pensées.",
    'hero.cta.work':    'Voir mes projets',
    'hero.cta.contact': 'Me contacter',

    /* about */
    'about.label':   'À propos',
    'about.heading': 'Un peu plus sur moi',
    'about.p1':      "Je suis étudiant en Licence 3 Informatique à l'Université de La Réunion et candidat au Master Informatique & IA. Passionné par le développement web et mobile, l'administration système et l'automatisation.",
    'about.p2':      "J'aime construire des outils concrets qui résolvent de vrais problèmes : une API, une interface ou un script qui fait gagner du temps. En dehors du code, je m'intéresse à l'écosystème numérique, au cinéma et à la musique.",

    'about.fact.status.label':   'Statut',
    'about.fact.status.value':   'Étudiant · L3 Informatique',
    'about.fact.location.label': 'Localisation',
    'about.fact.location.value': 'La Réunion, France',
    'about.fact.edu.label':      'Formation',
    'about.fact.edu.value':      'Université de La Réunion',
    'about.fact.lang.label':     'Langues',
    'about.fact.lang.value':     'Français (natif) · Anglais (B1)',
    'about.fact.interest.label': 'Intérêts',
    'about.fact.interest.value': 'Linux · Réseaux · IA · Cinéma',

    /* skills */
    'skills.label':   'Compétences',
    'skills.heading': 'Ce avec quoi je travaille',
    'skills.g1':      'Langages',
    'skills.g2':      'Outils & Environnements',
    'skills.g3':      'Systèmes & Réseaux',

    /* certifications */
    'certs.heading':   'Certifications',
    'cert.1.name':     'SecNumacadémie ANSSI',
    'cert.1.detail':   'MOOC cybersécurité · 100 % aux 4 modules',
    'cert.1.date':     'Mars 2024',
    'cert.2.name':     'Certification Pix Niveau Avancé 1',
    'cert.2.detail':   'Score 532/895 · Université de La Réunion',
    'cert.2.date':     'Déc. 2025',

    /* projects */
    'projects.label':   'Projets',
    'projects.heading': "Ce que j'ai construit",

    'proj.type.personal':    'Projet personnel',
    'proj.type.uni':         'Projet universitaire',
    'proj.type.entrepreneur':'Projet entrepreneurial',
    'proj.type.intern':      "Stage d'observation",

    'proj.1.title': 'Serveur Linux / Homelab',
    'proj.1.desc':  "Serveur maison complet : Docker (Jellyfin, Portainer, Pi-hole), monitoring Netdata & Uptime Kuma, API Flask de supervision, réseau privé sécurisé via Tailscale.",

    'proj.2.title': 'Applications Android',
    'proj.2.desc':  "Conception et développement d'applications mobiles en Java avec Android Studio. Interfaces XML et intégration d'API REST.",

    'proj.3.title': 'Analyse de données',
    'proj.3.desc':  "Traitements statistiques et visualisations sous R. Méthodes exploratoires : ACP, clustering, régression pour interpréter les résultats.",

    'proj.4.title': 'Gestion de ventes',
    'proj.4.desc':  "Automatisation de la gestion via Excel : tableaux croisés dynamiques, formules avancées, reporting automatisé pour le suivi des commandes et recettes.",

    'proj.5.title': 'Enseignement NSI',
    'proj.5.desc':  "Observation pédagogique au Lycée Lislet Geoffroy. Préparation de contenus et réflexion sur la didactique en Numérique & Sciences Informatiques.",

    'proj.type.subtext': 'Projet Ingénieur & IA',
    'proj.subtext.title': 'Subtext AI',
    'proj.subtext.desc': "Application full-stack d'analyse psychologique de scénarios propulsée par des LLMs locaux. Backend asynchrone (FastAPI), cache MD5 (SQLite), conteneurisation (Docker) et pipeline CI/CD automatisé.",

    /* contact */
    'contact.label':          'Contact',
    'contact.heading':        'Travaillons ensemble',
    'contact.sub':            "Vous avez un projet, une opportunité ou simplement envie d'échanger ? Je suis disponible et je réponds rapidement.",
    'contact.email.label':    'Email',
    'contact.email.action':   "M'écrire ↗",
    'contact.github.label':   'GitHub',
    'contact.github.action':  'Voir le code ↗',
    'contact.location.label': 'Localisation',
    'contact.location.value': 'La Réunion, France (UTC+4)',
    'contact.location.status': 'Disponible pour échanger',

    /* form */
    'form.name':       'Nom',
    'form.name.ph':    'Votre nom',
    'form.email':      'Email',
    'form.email.ph':   'votre@email.com',
    'form.message':    'Message',
    'form.message.ph': 'Votre message...',
    'form.submit':     'Envoyer',
    'form.sent':       'Envoyé !',

    /* form errors */
    'err.name':          'Le nom est requis.',
    'err.email.empty':   "L'email est requis.",
    'err.email.invalid': 'Adresse email invalide.',
    'err.msg.empty':     'Le message est requis.',
    'err.msg.short':     'Le message doit contenir au moins 10 caractères.',

    /* lab */
    'nav.lab':              'Lab & DevOps',
    'lab.label':            'Infrastructure & DevOps',
    'lab.heading':          'Mon Homelab & DevOps',
    'lab.terminal.welcome': 'Bienvenue sur la console Homelab. Cliquez sur les boutons ci-dessus pour lancer des commandes ou saisissez "help".',
    'lab.info.sub':         'Infrastructure & Auto-hébergement',
    'lab.info.p1':          "J'auto-héberge mes outils de développement et de divertissement sur un serveur dédié sous Debian. Cet environnement de laboratoire me permet de mettre en pratique Docker, l'administration système Linux et la sécurité réseau.",
    'lab.info.p2':          "L'accès à distance est entièrement sécurisé via Tailscale (VPN Mesh privé) et les flux internes sont monitorés en permanence pour garantir la disponibilité.",
    'lab.feat.docker':      'Conteneurisation et orchestration des applications.',
    'lab.feat.vpn':         'Réseau maillé sécurisé pour un accès distant sans ouvrir de ports sur ma box.',
    'lab.feat.monitor':     'Suivi des ressources système et alertes de disponibilité.',
    'hero.status.live':     'En ligne depuis La Réunion · ',
    'theme.light': 'Mode Clair',
    'theme.dark': 'Mode Sombre',

    /* architecture */
    'arch.label': 'Expertise Technique',
    'arch.heading': 'Architecture & Méthodologie',
    'arch.card1.title': 'Architecture Logicielle',
    'arch.card1.desc': "Conception d'un backend asynchrone sous FastAPI. Optimisation des temps d'inférence via un système de cache MD5 sur SQLite.",
    'arch.card2.title': 'DevOps & CI/CD',
    'arch.card2.desc': "Pipeline d'automatisation complet avec GitHub Actions : tests, build d'images Docker, et déploiement continu sécurisé.",
    'arch.card3.title': 'Qualité & Méthode',
    'arch.card3.desc': "Développement piloté par la documentation, approche Clean Code, versioning strict Gitflow et monitoring haute disponibilité.",

    /* knowledge hub */
    'knowledge.label': 'Recherche & Veille',
    'knowledge.heading': 'Knowledge Hub',
    'knowledge.item1.title': 'Optimisation des LLMs Locaux',
    'knowledge.item1.desc': "Analyse des performances d'inférence avec cache MD5.",
    'knowledge.item2.title': 'Sécurisation Réseaux Maillés (Tailscale)',
    'knowledge.item2.desc': 'Configuration avancée et gestion des ACLs.',
  },

  en: {
    /* page */
    'page.title': 'Thomas Ferriere Developer',

    /* nav */
    'nav.about':    'About',
    'nav.skills':   'Skills',
    'nav.projects': 'Projects',
    'nav.contact':  'Contact',

    /* hero */
    'hero.eyebrow':     'Developer & Computer Science Student',
    'hero.sub':         'I design and build clean, performant, well-considered applications.',
    'hero.cta.work':    'View my work',
    'hero.cta.contact': 'Get in touch',

    /* about */
    'about.label':   'About',
    'about.heading': 'A bit more about me',
    'about.p1':      "I'm a third-year Computer Science student at the University of La Réunion, prospective Master's in CS & AI. I'm passionate about web and mobile development, system administration, and automation.",
    'about.p2':      "I like building concrete tools that solve real problems: an API, an interface, or a script that saves time. Outside of code, I follow the tech ecosystem, enjoy cinema and music.",

    'about.fact.status.label':   'Status',
    'about.fact.status.value':   'Student · BSc Computer Science',
    'about.fact.location.label': 'Location',
    'about.fact.location.value': 'La Réunion, France',
    'about.fact.edu.label':      'Education',
    'about.fact.edu.value':      'University of La Réunion',
    'about.fact.lang.label':     'Languages',
    'about.fact.lang.value':     'French (native) · English (B1)',
    'about.fact.interest.label': 'Interests',
    'about.fact.interest.value': 'Linux · Networking · AI · Cinema',

    /* skills */
    'skills.label':   'Skills',
    'skills.heading': 'What I work with',
    'skills.g1':      'Languages',
    'skills.g2':      'Tools & Environments',
    'skills.g3':      'Systems & Networks',

    /* certifications */
    'certs.heading':   'Certifications',
    'cert.1.name':     'SecNumacadémie ANSSI',
    'cert.1.detail':   'Cybersecurity MOOC · 100% on all 4 modules',
    'cert.1.date':     'March 2024',
    'cert.2.name':     'Pix Certification Advanced Level 1',
    'cert.2.detail':   'Score 532/895 · University of La Réunion',
    'cert.2.date':     'Dec. 2025',

    /* projects */
    'projects.label':   'Projects',
    'projects.heading': "Things I've built",

    'proj.type.personal':    'Personal project',
    'proj.type.uni':         'University project',
    'proj.type.entrepreneur':'Entrepreneurial project',
    'proj.type.intern':      'Observation internship',

    'proj.1.title': 'Linux Server / Homelab',
    'proj.1.desc':  "Full home server running Linux with Docker (Jellyfin, Portainer, Pi-hole), Netdata & Uptime Kuma monitoring, Flask supervision API, and a private network via Tailscale.",

    'proj.2.title': 'Android Applications',
    'proj.2.desc':  "Design and development of mobile applications in Java with Android Studio. XML interfaces and REST API integration.",

    'proj.3.title': 'Data Analysis',
    'proj.3.desc':  "Statistical processing and data visualisation in R. Exploratory methods (PCA, clustering, regression) to interpret results.",

    'proj.4.title': 'Sales Management',
    'proj.4.desc':  "Automated sales management with Excel: pivot tables, advanced formulas, and automated reporting for order and revenue tracking.",

    'proj.5.title': 'NSI Teaching',
    'proj.5.desc':  "Pedagogical observation at Lycée Lislet Geoffroy. Content preparation and discussion on teaching methods in Digital & Computer Science.",

    'proj.type.subtext': 'Engineering & AI Project',
    'proj.subtext.title': 'Subtext AI',
    'proj.subtext.desc': "Full-stack psychological screenplay analysis app powered by local LLMs. Features an asynchronous backend (FastAPI), MD5 caching (SQLite), Docker containerisation, and an automated CI/CD pipeline.",

    /* contact */
    'contact.label':          'Contact',
    'contact.heading':        "Let's work together",
    'contact.sub':            "Have a project, an opportunity, or just want to chat? I'm available and reply quickly.",
    'contact.email.label':    'Email',
    'contact.email.action':   'Write me ↗',
    'contact.github.label':   'GitHub',
    'contact.github.action':  'View code ↗',
    'contact.location.label': 'Location',
    'contact.location.value': 'La Réunion, France (UTC+4)',
    'contact.location.status': 'Available to chat',

    /* form */
    'form.name':       'Name',
    'form.name.ph':    'Your name',
    'form.email':      'Email',
    'form.email.ph':   'your@email.com',
    'form.message':    'Message',
    'form.message.ph': 'Your message...',
    'form.submit':     'Send',
    'form.sent':       'Sent!',

    /* form errors */
    'err.name':          'Name is required.',
    'err.email.empty':   'Email is required.',
    'err.email.invalid': 'Invalid email address.',
    'err.msg.empty':     'Message is required.',
    'err.msg.short':     'Message must be at least 10 characters.',

    /* lab */
    'nav.lab':              'Lab & DevOps',
    'lab.label':            'Infrastructure & DevOps',
    'lab.heading':          'My Homelab & DevOps',
    'lab.terminal.welcome': 'Welcome to the Homelab console. Click the buttons above to run commands or type "help".',
    'lab.info.sub':         'Infrastructure & Self-Hosting',
    'lab.info.p1':          'I self-host my development and media tools on a dedicated Debian home server. This laboratory environment allows me to put Docker, Linux system administration, and network security into practice.',
    'lab.info.p2':          'Remote access is fully secured via Tailscale (private mesh VPN), and internal traffic is monitored constantly to ensure high availability.',
    'lab.feat.docker':      'Containerisation and orchestration of services.',
    'lab.feat.vpn':         'Secured mesh network for remote access without exposing public ports.',
    'lab.feat.monitor':     'System resource monitoring and uptime alerts.',
    'hero.status.live':     'Online from La Réunion · ',
    'theme.light': 'Light Mode',
    'theme.dark': 'Dark Mode',

    /* architecture */
    'arch.label': 'Technical Expertise',
    'arch.heading': 'Architecture & Methodology',
    'arch.card1.title': 'Software Architecture',
    'arch.card1.desc': 'Designing an asynchronous backend using FastAPI. Inferences optimized via an MD5 caching system on SQLite.',
    'arch.card2.title': 'DevOps & CI/CD',
    'arch.card2.desc': 'Complete automation pipeline with GitHub Actions: testing, Docker image building, and secure continuous deployment.',
    'arch.card3.title': 'Quality & Methodology',
    'arch.card3.desc': 'Documentation-driven development, Clean Code approach, strict Gitflow versioning and high availability monitoring.',

    /* knowledge hub */
    'knowledge.label': 'Research & Insights',
    'knowledge.heading': 'Knowledge Hub',
    'knowledge.item1.title': 'Local LLMs Optimization',
    'knowledge.item1.desc': 'Analysis of inference performance using an MD5 cache.',
    'knowledge.item2.title': 'Securing Mesh Networks (Tailscale)',
    'knowledge.item2.desc': 'Advanced configuration and ACL management.',
  },
};

/* ================================================================
   LANGUAGE ENGINE
   ================================================================ */
let lang = localStorage.getItem('portfolio-lang') || 'fr';

function applyLang(next) {
  lang = next;
  document.documentElement.lang         = lang;
  document.documentElement.dataset.lang = lang;

  /* page title */
  document.title = TRANSLATIONS[lang]['page.title'];

  /* all [data-i18n] text nodes */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = TRANSLATIONS[lang][el.dataset.i18n];
    if (val !== undefined) el.textContent = val;
  });

  /* all [data-i18n-ph] placeholder attributes */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const val = TRANSLATIONS[lang][el.dataset.i18nPh];
    if (val !== undefined) el.placeholder = val;
  });

  /* lang button active state */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem('portfolio-lang', lang);
}

/* wire up language buttons */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

/* apply on load */
applyLang(lang);

/* ================================================================
   THEME ENGINE
   ================================================================ */
const themeBtn = document.getElementById('theme-toggle');
let currentTheme = localStorage.getItem('portfolio-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio-theme', theme);
}

applyTheme(currentTheme);

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
  });
}

/* ================================================================
   HEADER border on scroll
   ================================================================ */
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

/* ================================================================
   ACTIVE NAV LINK
   ================================================================ */
const navLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('main section[id]');

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => navObserver.observe(s));

/* ================================================================
   MOBILE MENU
   ================================================================ */
const nav     = document.getElementById('nav');
const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
});

nav.querySelectorAll('.nav__link').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', false);
  });
});

/* ================================================================
   SCROLL REVEAL
   ================================================================ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(
  '.card, .skill-group, .fact, .cert-item, .about__text, .about__facts, .contact__info, .form, .terminal-container, .lab__info'
).forEach(el => revealObserver.observe(el));



/* ================================================================
   FOOTER YEAR
   ================================================================ */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


/* ================================================================
   INTERACTIVE TERMINAL
   ================================================================ */
const termInput = document.getElementById('term-input');
const termBody = document.getElementById('term-body');

const welcomeTextFr = "[OK] Initialisation de l'environnement Darwin/macOS...\\n[OK] Lancement des daemons FastAPI & Docker...\\n[OK] Connexion établie.\\nSaisissez 'help' pour démarrer.";
const welcomeTextEn = "[OK] Initializing Darwin/macOS environment...\\n[OK] Starting FastAPI & Docker daemons...\\n[OK] Connection established.\\nType 'help' to start.";

const typedTextElement = document.querySelector('.typed-text');
const welcomeMsgElement = document.querySelector('.term-welcome-msg');

// Nettoyage initial
if (typedTextElement && welcomeMsgElement) {
    const terminal = document.querySelector('.terminal-container');
    typedTextElement.textContent = '';
    welcomeMsgElement.innerHTML = '<span class="cursor-blink"></span>';
    
    let i = 0;
    const textToType = lang === 'fr' ? welcomeTextFr : welcomeTextEn;
    const speed = 35; // Vitesse de frappe en ms
    
    function typeWriter() {
        if (i < textToType.length) {
            if (textToType.charAt(i) === '\\n') {
                welcomeMsgElement.innerHTML = welcomeMsgElement.innerHTML.replace('<span class="cursor-blink"></span>', '<br><span class="cursor-blink"></span>');
            } else {
                const span = document.createElement('span');
                span.textContent = textToType.charAt(i);
                welcomeMsgElement.insertBefore(span, welcomeMsgElement.querySelector('.cursor-blink'));
            }
            i++;
            setTimeout(typeWriter, speed);
        } else {
            welcomeMsgElement.querySelector('.cursor-blink').remove();
        }
    }
    
    // Lancer l'animation quand on scrolle sur le terminal
    const termObserver = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting) {
            setTimeout(typeWriter, 500);
            termObserver.disconnect();
        }
    });
    termObserver.observe(terminal);
}

const SYSINFO_FR = `
<b>Système :</b> Debian GNU/Linux 12 (bookworm)
<b>Kernel :</b> Linux 6.1.0-21-amd64 x86_64
<b>Machine :</b> Homelab Server (Intel i5-8400 @ 2.80GHz, 32GB RAM)
<b>Uptime :</b> Up 42 jours, 12 heures, 4 minutes
<b>Ressources :</b> 
  ├─ CPU : [██░░░░░░░░] 22.4% (6 Cores)
  ├─ RAM : [██████░░░░] 18.2 GB / 32 GB (56.8%)
  └─ Disk : [████░░░░░░] 412 GB / 1 TB (41.2%)
`;

const SYSINFO_EN = `
<b>OS:</b> Debian GNU/Linux 12 (bookworm)
<b>Kernel:</b> Linux 6.1.0-21-amd64 x86_64
<b>Host:</b> Homelab Server (Intel i5-8400 @ 2.80GHz, 32GB RAM)
<b>Uptime:</b> Up 42 days, 12 hours, 4 minutes
<b>Resources:</b> 
  ├─ CPU: [██░░░░░░░░] 22.4% (6 Cores)
  ├─ RAM: [██████░░░░] 18.2 GB / 32 GB (56.8%)
  └─ Disk: [████░░░░░░] 412 GB / 1 TB (41.2%)
`;

const DOCKER_FR = `
<b>CONTAINER ID   IMAGE                 STATUS         PORTS</b>
3a19fc2c4b8e   jellyfin/jellyfin     Up 5 days      127.0.0.1:8096->8096/tcp
d7a46e12bb03   pihole/pihole         Up 42 days     53/udp, 53/tcp, 80/tcp
8f828a2a88e9   louislam/uptime-kuma  Up 12 days     127.0.0.1:3001->3001/tcp
9c8a77b10291   portainer/portainer   Up 42 days     127.0.0.1:9443->9443/tcp
0e118ba8e34f   homelab-supervision   Up 12 days     127.0.0.1:5000->5000/tcp (Flask API)
`;

const DOCKER_EN = `
<b>CONTAINER ID   IMAGE                 STATUS         PORTS</b>
3a19fc2c4b8e   jellyfin/jellyfin     Up 5 days      127.0.0.1:8096->8096/tcp
d7a46e12bb03   pihole/pihole         Up 42 days     53/udp, 53/tcp, 80/tcp
8f828a2a88e9   louislam/uptime-kuma  Up 12 days     127.0.0.1:3001->3001/tcp
9c8a77b10291   portainer/portainer   Up 42 days     127.0.0.1:9443->9443/tcp
0e118ba8e34f   homelab-supervision   Up 12 days     127.0.0.1:5000->5000/tcp (Flask API)
`;

const NETWORK_FR = `
<b>Réseau VPN Mesh (Tailscale) :</b>
  ├─ Adresse IP locale VPN : 100.82.14.92 (Interface: tailscale0)
  ├─ Peer local : macbook-pro (Autorisé)
  └─ Chiffrement : WireGuard Noise Protocol
<b>Firewall (UFW) :</b>
  ├─ Entrant par défaut : REJECT
  ├─ Sortant par défaut : ALLOW
  └─ Règles actives :
       ├─ SSH (port 22) : Limité à tailscale0
       └─ Portainer/Jellyfin : Limité au localhost (Reverse Proxy par Nginx)
`;

const NETWORK_EN = `
<b>Mesh VPN Network (Tailscale):</b>
  ├─ Local VPN IP: 100.82.14.92 (Interface: tailscale0)
  ├─ Local Peer: macbook-pro (Authorized)
  └─ Encryption: WireGuard Noise Protocol
<b>Firewall (UFW):</b>
  ├─ Default Inbound: REJECT
  ├─ Default Outbound: ALLOW
  └─ Active Rules:
       ├─ SSH (port 22): Limited to tailscale0
       └─ Portainer/Jellyfin: Limited to localhost (Proxied via Nginx)
`;

const HELP_FR = `
Commandes disponibles :
  <b>sysinfo</b> : Afficher les spécifications système et les ressources.
  <b>docker</b>  : Lister les conteneurs Docker actifs.
  <b>network</b> : Afficher l'état du VPN Tailscale et du Pare-feu.
  <b>clear</b>   : Effacer l'écran du terminal.
`;

const HELP_EN = `
Available commands:
  <b>sysinfo</b> : Display system specifications and resources.
  <b>docker</b>  : List active Docker containers.
  <b>network</b> : Show Tailscale VPN and Firewall status.
  <b>clear</b>   : Clear the terminal screen.
`;

const DEPLOY_FR = `
<b>[CI/CD] Déploiement de Subtext AI...</b>
[✓] Checkout de la branche main
[✓] Build de l'image Docker (subtext-ai:latest)
[✓] Vérification du cache MD5 et Linting : PASS
[✓] Lancement du conteneur FastAPI sur le port 8000
[✓] Connexion à host.docker.internal:11434 (Ollama)
<b>Statut :</b> Application en ligne et prête pour l'analyse NLP.
`;

const DEPLOY_EN = `
<b>[CI/CD] Deploying Subtext AI...</b>
[✓] Checkout main branch
[✓] Build Docker image (subtext-ai:latest)
[✓] MD5 Cache verification & Linting: PASS
[✓] Starting FastAPI container on port 8000
[✓] Connecting to host.docker.internal:11434 (Ollama)
<b>Status:</b> Application online and ready for NLP analysis.
`;

function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function scrollTerminal() {
  if (termBody) termBody.scrollTop = termBody.scrollHeight;
}

function termExecute(command) {
  if (!termBody) return;
  const cmd = command.toLowerCase().trim();
  
  // Create output block
  const outputBlock = document.createElement('div');
  outputBlock.className = 'terminal-output-block';
  
  // Add command line
  const cmdLine = document.createElement('div');
  cmdLine.className = 'terminal-output-line';
  cmdLine.innerHTML = `<span class="terminal-prompt">thomas@homelab:~ $</span> <span class="typed-text">${escapeHtml(command)}</span>`;
  outputBlock.appendChild(cmdLine);
  
  const content = document.createElement('p');
  content.className = 'terminal-output-text';
  
  if (cmd === 'sysinfo') {
    content.innerHTML = lang === 'fr' ? SYSINFO_FR : SYSINFO_EN;
  } else if (cmd === 'docker' || cmd === 'docker ps') {
    content.innerHTML = lang === 'fr' ? DOCKER_FR : DOCKER_EN;
  } else if (cmd === 'network') {
    content.innerHTML = lang === 'fr' ? NETWORK_FR : NETWORK_EN;
  } else if (cmd === 'deploy') {
    content.innerHTML = lang === 'fr' ? DEPLOY_FR : DEPLOY_EN;
  } else if (cmd === 'clear') {
    const outputs = termBody.querySelectorAll('.terminal-output-block');
    outputs.forEach(o => o.remove());
    const welcome = termBody.querySelector('.terminal-output');
    if (welcome) welcome.style.display = 'none';
    return;
  } else if (cmd === 'help') {
    content.innerHTML = lang === 'fr' ? HELP_FR : HELP_EN;
  } else if (cmd === '') {
    outputBlock.appendChild(content);
    termBody.insertBefore(outputBlock, document.getElementById('term-input-line'));
    scrollTerminal();
    return;
  } else {
    content.innerHTML = lang === 'fr' 
      ? `Commande inconnue: <b>${escapeHtml(cmd)}</b>. Saisissez <b>help</b> pour la liste des commandes.`
      : `Command not found: <b>${escapeHtml(cmd)}</b>. Type <b>help</b> for a list of commands.`;
  }
  
  outputBlock.appendChild(content);
  termBody.insertBefore(outputBlock, document.getElementById('term-input-line'));
  scrollTerminal();
}

document.querySelectorAll('.term-tool-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const cmd = btn.dataset.cmd;
    termExecute(cmd);
  });
});

termInput?.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const val = termInput.value;
    termExecute(val);
    termInput.value = '';
  }
});

termBody?.addEventListener('click', () => {
  termInput?.focus();
});

const terminal = document.querySelector('.terminal-container');
const headerTerm = document.querySelector('.terminal-header');
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

if (headerTerm && terminal) {
  headerTerm.addEventListener('mousedown', dragStart);
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', dragEnd);

  // Mobile touch event support
  headerTerm.addEventListener('touchstart', e => dragStart(e.touches[0]));
  document.addEventListener('touchmove', e => drag(e.touches[0]), { passive: false });
  document.addEventListener('touchend', dragEnd);
}

function dragStart(e) {
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;
  if (e.target === headerTerm || e.target.parentNode === headerTerm) {
    isDragging = true;
  }
}

function drag(e) {
  if (isDragging) {
    e.preventDefault();
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;
    xOffset = currentX;
    yOffset = currentY;
    terminal.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
  }
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;
  isDragging = false;
}

/* ================================================================
   LIVE STATUS CLOCK
   ================================================================ */
const clockFormatters = {
  fr: new Intl.DateTimeFormat('fr-FR', { timeZone: 'Indian/Reunion', hour: '2-digit', minute: '2-digit', second: '2-digit' }),
  en: new Intl.DateTimeFormat('en-GB', { timeZone: 'Indian/Reunion', hour: '2-digit', minute: '2-digit', second: '2-digit' })
};

function updateClock() {
  const timeEl = document.getElementById('local-time');
  if (!timeEl) return;
  const now = new Date();
  const formatter = clockFormatters[lang] || clockFormatters.fr;
  timeEl.textContent = formatter.format(now) + (lang === 'fr' ? ' (REU)' : ' (REU)');
}
setInterval(updateClock, 1000);
updateClock();

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const heroTitle = document.querySelector('.hero__inner');
  if (heroTitle) {
    heroTitle.style.transform = `translateY(${scrolled * 0.3}px)`;
    heroTitle.style.opacity = 1 - (scrolled / 500);
  }
});

document.querySelectorAll('.card, .bento-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  });
});
