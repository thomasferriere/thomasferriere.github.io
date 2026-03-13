'use strict';

/* ================================================================
   TRANSLATIONS
   All user-visible text, keyed by ID.
   Add/change keys here — the page updates automatically.
   ================================================================ */
const TRANSLATIONS = {

  fr: {
    /* page */
    'page.title': 'Thomas Ferriere — Développeur',

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
    'about.p2':      "J'aime construire des outils concrets qui résolvent de vrais problèmes — une API, une interface ou un script qui fait gagner du temps. En dehors du code, je m'intéresse à l'écosystème numérique, au cinéma et à la musique.",

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
    'cert.1.name':     'SecNumacadémie — ANSSI',
    'cert.1.detail':   'MOOC cybersécurité · 100 % aux 4 modules',
    'cert.1.date':     'Mars 2024',
    'cert.2.name':     'Certification Pix — Niveau Avancé 1',
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

    /* contact */
    'contact.label':          'Contact',
    'contact.heading':        'Travaillons ensemble',
    'contact.sub':            "Vous avez un projet, une opportunité ou simplement envie d'échanger ? Je suis disponible et je réponds rapidement.",
    'contact.email.label':    'Email',
    'contact.location.label': 'Localisation',
    'contact.location.value': 'La Réunion, France',

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
  },

  en: {
    /* page */
    'page.title': 'Thomas Ferriere — Developer',

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
    'about.p2':      "I like building concrete tools that solve real problems — an API, an interface, or a script that saves time. Outside of code, I follow the tech ecosystem, enjoy cinema and music.",

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
    'cert.1.name':     'SecNumacadémie — ANSSI',
    'cert.1.detail':   'Cybersecurity MOOC · 100% on all 4 modules',
    'cert.1.date':     'March 2024',
    'cert.2.name':     'Pix Certification — Advanced Level 1',
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
    'proj.3.desc':  "Statistical processing and data visualisation in R. Exploratory methods — PCA, clustering, regression — to interpret results.",

    'proj.4.title': 'Sales Management',
    'proj.4.desc':  "Automated sales management with Excel: pivot tables, advanced formulas, and automated reporting for order and revenue tracking.",

    'proj.5.title': 'NSI Teaching',
    'proj.5.desc':  "Pedagogical observation at Lycée Lislet Geoffroy. Content preparation and discussion on teaching methods in Digital & Computer Science.",

    /* contact */
    'contact.label':          'Contact',
    'contact.heading':        "Let's work together",
    'contact.sub':            "Have a project, an opportunity, or just want to chat? I'm available and reply quickly.",
    'contact.email.label':    'Email',
    'contact.location.label': 'Location',
    'contact.location.value': 'La Réunion, France',

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
   HEADER — border on scroll
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
  '.card, .skill-group, .fact, .cert-item, .about__text, .about__facts, .contact__info, .form'
).forEach(el => revealObserver.observe(el));

/* ================================================================
   CONTACT FORM
   ================================================================ */
const form    = document.getElementById('form');
const formBtn = document.getElementById('form-btn');

function fieldErr(id, key) {
  const input = document.getElementById(id);
  const err   = document.getElementById('err-' + id.replace('f-', ''));
  if (input)  input.classList.add('invalid');
  if (err)    err.textContent = TRANSLATIONS[lang][key] || key;
}

function fieldOk(id) {
  const input = document.getElementById(id);
  const err   = document.getElementById('err-' + id.replace('f-', ''));
  if (input)  input.classList.remove('invalid');
  if (err)    err.textContent = '';
}

function validateForm() {
  const name  = document.getElementById('f-name').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const msg   = document.getElementById('f-msg').value.trim();
  let ok = true;

  if (!name)                                    { fieldErr('f-name',  'err.name');          ok = false; }
  else                                            fieldOk('f-name');

  if (!email)                                   { fieldErr('f-email', 'err.email.empty');   ok = false; }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { fieldErr('f-email', 'err.email.invalid'); ok = false; }
  else                                            fieldOk('f-email');

  if (!msg)                                     { fieldErr('f-msg',   'err.msg.empty');     ok = false; }
  else if (msg.length < 10)                     { fieldErr('f-msg',   'err.msg.short');     ok = false; }
  else                                            fieldOk('f-msg');

  return ok;
}

['f-name', 'f-email', 'f-msg'].forEach(id => {
  document.getElementById(id)?.addEventListener('input', () => fieldOk(id));
});

form?.addEventListener('submit', e => {
  e.preventDefault();
  if (!validateForm()) return;

  formBtn.disabled   = true;
  formBtn.textContent = TRANSLATIONS[lang]['form.sent'];

  /* ── replace with real fetch() to your email service ── */
  setTimeout(() => {
    form.reset();
    formBtn.disabled   = false;
    formBtn.textContent = TRANSLATIONS[lang]['form.submit'];
  }, 3000);
});

/* ================================================================
   FOOTER YEAR
   ================================================================ */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
