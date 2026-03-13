'use strict';

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const i18n = {
  fr: {
    'page.title':            'Thomas Ferriere — Développeur',

    // Nav
    'nav.about':             'À propos',
    'nav.education':         'Formation',
    'nav.skills':            'Compétences',
    'nav.projects':          'Projets',
    'nav.contact':           'Contact',

    // Hero
    'hero.greeting':         'Bonjour, je suis',
    'hero.bio':              "Étudiant en Licence 3 Informatique à l'Université de La Réunion, candidat au Master Informatique & IA. Passionné par le développement, l'administration système et l'automatisation.",
    'hero.cta.projects':     'Voir mes projets',
    'hero.cta.contact':      'Me contacter',
    'typewriter':            ['Étudiant en Informatique', 'Développeur Web & Mobile', 'Passionné de Linux & DevOps', 'Candidat Master Info & IA'],

    // Formation
    'section.education.sub': 'Parcours académique',
    'edu.l3.years':          '2023 – 2026',
    'edu.l3.degree':         'Licence 3 Informatique',
    'edu.l3.school':         'Université de La Réunion — Campus du Moufia',
    'edu.l3.detail1':        "Algorithmique, POO, bases de données, réseaux, systèmes d'exploitation",
    'edu.l3.detail2':        'Projets : Android (Java), analyse de données (R), modélisation UML',
    'edu.bac.years':         '2022',
    'edu.bac.degree':        'Baccalauréat Général',
    'edu.bac.school':        'Lycée Marie Curie — La Réunion',
    'edu.bac.detail1':       'Spécialités : Mathématiques et NSI (Numérique & Sciences Informatiques)',

    // Compétences
    'section.skills.sub':    'Technologies et outils',
    'skills.languages':      'Langages',
    'skills.tools':          'Outils & Environnements',
    'skills.systems':        'Systèmes & Réseaux',
    'section.certs':         'Certifications',
    'cert.anssi.name':       'SecNumacadémie — ANSSI',
    'cert.anssi.detail':     'MOOC cybersécurité · 100 % aux 4 modules',
    'cert.anssi.date':       'Mars 2024',
    'cert.pix.name':         'Certification Pix — Niveau Avancé 1',
    'cert.pix.detail':       'Score 532/895 · Université de La Réunion',
    'cert.pix.date':         'Déc. 2025',

    // Projets
    'section.projects.sub':       "Ce que j'ai construit",
    'project.type.personal':      'Projet personnel',
    'project.type.uni':           'Projet universitaire',
    'project.type.entrepreneur':  'Projet entrepreneurial',
    'project.type.intern':        "Stage d'observation",
    'proj.homelab.title':  'Serveur Linux / Homelab',
    'proj.homelab.desc':   "Serveur maison complet sous Linux avec Docker (Jellyfin, Portainer, Pi-hole), monitoring Netdata & Uptime Kuma, API Flask de supervision et réseau privé sécurisé via Tailscale.",
    'proj.android.title':  'Applications Android',
    'proj.android.desc':   "Conception et développement d'applications mobiles en Java avec Android Studio. Interfaces XML et intégration d'API REST.",
    'proj.data.title':     'Analyse de données',
    'proj.data.desc':      "Traitements statistiques et visualisations sous R. Méthodes exploratoires (ACP, clustering, régression) pour interpréter les résultats.",
    'proj.sales.title':    'Gestion de ventes',
    'proj.sales.desc':     "Automatisation de la gestion via Excel : tableaux croisés dynamiques, formules avancées et reporting automatisé pour le suivi des commandes et recettes.",
    'proj.nsi.title':      'Enseignement NSI',
    'proj.nsi.desc':       "Observation pédagogique au Lycée Lislet Geoffroy. Participation à la préparation de contenus en Numérique & Sciences Informatiques.",

    // Contact
    'section.contact.sub': 'Construisons quelque chose ensemble',
    'contact.desc':        "Que vous ayez un projet, une opportunité ou simplement envie d'échanger — je suis disponible et je réponds rapidement.",
    'contact.location':    'La Réunion, France',
    'lang.fr':             '🇫🇷 Français — natif',
    'lang.en':             '🇬🇧 Anglais — B1',

    // Formulaire
    'form.name':           'Nom',
    'form.name.ph':        'Votre nom',
    'form.email':          'Email',
    'form.email.ph':       'votre@email.com',
    'form.message':        'Message',
    'form.message.ph':     'Votre message...',
    'form.submit':         'Envoyer',
    'form.sent':           'Envoyé !',

    // Erreurs
    'err.name':            'Le nom est requis.',
    'err.email.required':  "L'email est requis.",
    'err.email.invalid':   'Veuillez entrer une adresse email valide.',
    'err.msg.required':    'Le message est requis.',
    'err.msg.short':       'Le message doit contenir au moins 10 caractères.',
  },

  en: {
    'page.title':            'Thomas Ferriere — Developer',

    // Nav
    'nav.about':             'About',
    'nav.education':         'Education',
    'nav.skills':            'Skills',
    'nav.projects':          'Projects',
    'nav.contact':           'Contact',

    // Hero
    'hero.greeting':         "Hi, I'm",
    'hero.bio':              "Computer Science student (3rd year) at the University of La Réunion, prospective Master's in CS & AI. Passionate about development, system administration, and automation.",
    'hero.cta.projects':     'View my projects',
    'hero.cta.contact':      'Get in touch',
    'typewriter':            ['CS Student', 'Web & Mobile Developer', 'Linux & DevOps Enthusiast', "Master's CS & AI Candidate"],

    // Education
    'section.education.sub': 'Academic background',
    'edu.l3.years':          '2023 – 2026',
    'edu.l3.degree':         "Bachelor's in Computer Science",
    'edu.l3.school':         'University of La Réunion — Campus du Moufia',
    'edu.l3.detail1':        'Algorithms, OOP, databases, networking, operating systems',
    'edu.l3.detail2':        'Projects: Android (Java), data analysis (R), UML modelling',
    'edu.bac.years':         '2022',
    'edu.bac.degree':        'General Baccalaureate',
    'edu.bac.school':        'Lycée Marie Curie — La Réunion',
    'edu.bac.detail1':       'Specialisations: Mathematics and NSI (Digital & Computer Science)',

    // Skills
    'section.skills.sub':    'Technologies and tools',
    'skills.languages':      'Languages',
    'skills.tools':          'Tools & Environments',
    'skills.systems':        'Systems & Networks',
    'section.certs':         'Certifications',
    'cert.anssi.name':       'SecNumacadémie — ANSSI',
    'cert.anssi.detail':     'Cybersecurity MOOC · 100% on all 4 modules',
    'cert.anssi.date':       'March 2024',
    'cert.pix.name':         'Pix Certification — Advanced Level 1',
    'cert.pix.detail':       'Score 532/895 · University of La Réunion',
    'cert.pix.date':         'Dec. 2025',

    // Projects
    'section.projects.sub':       "Things I've built",
    'project.type.personal':      'Personal project',
    'project.type.uni':           'University project',
    'project.type.entrepreneur':  'Entrepreneurial project',
    'project.type.intern':        'Observation internship',
    'proj.homelab.title':  'Linux Server / Homelab',
    'proj.homelab.desc':   "Full home server running Linux with Docker (Jellyfin, Portainer, Pi-hole), Netdata & Uptime Kuma monitoring, Flask supervision API, and a private network via Tailscale.",
    'proj.android.title':  'Android Applications',
    'proj.android.desc':   "Design and development of mobile applications in Java with Android Studio. XML interfaces and REST API integration.",
    'proj.data.title':     'Data Analysis',
    'proj.data.desc':      "Statistical processing and data visualisation in R. Exploratory methods (PCA, clustering, regression) to interpret results.",
    'proj.sales.title':    'Sales Management',
    'proj.sales.desc':     "Automated sales management with Excel: pivot tables, advanced formulas and automated reporting for order and revenue tracking.",
    'proj.nsi.title':      'NSI Teaching',
    'proj.nsi.desc':       "Pedagogical observation at Lycée Lislet Geoffroy. Participation in content preparation for Digital & Computer Science classes.",

    // Contact
    'section.contact.sub': "Let's build something together",
    'contact.desc':        "Whether you have a project, an opportunity, or just want to chat — my inbox is open and I reply quickly.",
    'contact.location':    'La Réunion, France',
    'lang.fr':             '🇫🇷 French — native',
    'lang.en':             '🇬🇧 English — B1',

    // Form
    'form.name':           'Name',
    'form.name.ph':        'Your name',
    'form.email':          'Email',
    'form.email.ph':       'your@email.com',
    'form.message':        'Message',
    'form.message.ph':     'Your message...',
    'form.submit':         'Send',
    'form.sent':           'Sent!',

    // Errors
    'err.name':            'Name is required.',
    'err.email.required':  'Email is required.',
    'err.email.invalid':   'Please enter a valid email address.',
    'err.msg.required':    'Message is required.',
    'err.msg.short':       'Message must be at least 10 characters.',
  },
};

/* ============================================================
   LANGUAGE SYSTEM
   ============================================================ */
let currentLang = localStorage.getItem('lang') || 'fr';

// Typewriter phrase pool (mutable reference)
const phrases = [...i18n[currentLang]['typewriter']];

function setLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;

  document.documentElement.lang      = lang;
  document.documentElement.dataset.lang = lang;
  document.title = i18n[lang]['page.title'];

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = i18n[lang][key];
    if (val !== undefined) el.textContent = val;
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const val = i18n[lang][key];
    if (val !== undefined) el.placeholder = val;
  });

  // Toggle button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Refresh typewriter phrases
  phrases.length = 0;
  phrases.push(...i18n[lang]['typewriter']);

  // Restart typewriter so phrase stays in sync
  charIndex   = 0;
  phraseIndex = 0;
  isDeleting  = false;
  if (typewriterEl) typewriterEl.textContent = '';

  localStorage.setItem('lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// Apply on load
setLanguage(currentLang);


/* ============================================================
   TYPEWRITER
   ============================================================ */
let phraseIndex = 0;
let charIndex   = 0;
let isDeleting  = false;

const typewriterEl = document.getElementById('typewriter');

function type() {
  const current = phrases[phraseIndex];
  if (!current) { setTimeout(type, 200); return; }

  if (isDeleting) {
    typewriterEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 55 : 90;

  if (!isDeleting && charIndex === current.length) {
    delay = 2200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 350;
  }

  setTimeout(type, delay);
}

if (typewriterEl) setTimeout(type, 600);


/* ============================================================
   NAV — scroll & active link
   ============================================================ */
const navHeader = document.getElementById('nav-header');
const navLinks  = document.querySelectorAll('.nav__link');
const sections  = document.querySelectorAll('section[id]');

function onScroll() {
  navHeader.classList.toggle('scrolled', window.scrollY > 8);

  let active = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 90) active = s.id;
  });
  navLinks.forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === `#${active}`);
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();


/* ============================================================
   MOBILE NAV TOGGLE
   ============================================================ */
const navToggle    = document.getElementById('nav-toggle');
const navLinksList = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  const open = navLinksList.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open);
});

navLinksList.querySelectorAll('.nav__link').forEach(l => {
  l.addEventListener('click', () => {
    navLinksList.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});


/* ============================================================
   SCROLL REVEAL
   ============================================================ */
document.querySelectorAll(
  '.timeline__item, .skill-group, .cert, .project, .contact__info, .contact__form, .section__header'
).forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* ============================================================
   CONTACT FORM
   ============================================================ */
const form      = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

function showError(id, key) {
  const el  = document.getElementById(id);
  const err = document.getElementById(`${id}-error`);
  el.classList.add('invalid');
  err.textContent = i18n[currentLang][key] || key;
}

function clearError(id) {
  document.getElementById(id).classList.remove('invalid');
  document.getElementById(`${id}-error`).textContent = '';
}

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function validate() {
  let ok = true;
  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name)                    { showError('name',    'err.name');           ok = false; }
  else                            clearError('name');

  if (!email)                   { showError('email',   'err.email.required'); ok = false; }
  else if (!isValidEmail(email)){ showError('email',   'err.email.invalid');  ok = false; }
  else                            clearError('email');

  if (!message)                 { showError('message', 'err.msg.required');   ok = false; }
  else if (message.length < 10) { showError('message', 'err.msg.short');      ok = false; }
  else                            clearError('message');

  return ok;
}

['name', 'email', 'message'].forEach(id => {
  document.getElementById(id).addEventListener('input', () => clearError(id));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!validate()) return;

  submitBtn.disabled = true;
  submitBtn.querySelector('.btn__text').hidden = true;
  submitBtn.querySelector('.btn__sent').hidden = false;

  // Replace with real fetch() to your backend / email service
  setTimeout(() => {
    form.reset();
    submitBtn.disabled = false;
    submitBtn.querySelector('.btn__text').hidden = false;
    submitBtn.querySelector('.btn__sent').hidden = true;
  }, 3000);
});


/* ============================================================
   FOOTER YEAR
   ============================================================ */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
