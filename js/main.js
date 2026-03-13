'use strict';

/* ============================================================
   TYPEWRITER
   ============================================================ */
const phrases = [
  'Full-Stack Developer',
  'Open Source Enthusiast',
  'Problem Solver',
  'UI/UX Tinkerer',
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typewriterEl = document.getElementById('typewriter');

function type() {
  const current = phrases[phraseIndex];

  if (isDeleting) {
    typewriterEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === current.length) {
    delay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 400;
  }

  setTimeout(type, delay);
}

if (typewriterEl) type();


/* ============================================================
   NAV — scroll shadow & active link highlighting
   ============================================================ */
const navHeader = document.querySelector('.nav-header');
const navLinks  = document.querySelectorAll('.nav__link');
const sections  = document.querySelectorAll('section[id]');

function onScroll() {
  // Sticky shadow
  if (window.scrollY > 10) {
    navHeader.classList.add('scrolled');
  } else {
    navHeader.classList.remove('scrolled');
  }

  // Active link
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
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
  const isOpen = navLinksList.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close menu when a link is clicked
navLinksList.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navLinksList.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});


/* ============================================================
   SCROLL REVEAL
   ============================================================ */
const revealTargets = document.querySelectorAll(
  '.skill-card, .project-card, .contact__text, .contact__form, .section__title, .section__subtitle'
);

revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach(el => observer.observe(el));


/* ============================================================
   CONTACT FORM — client-side validation & submit simulation
   ============================================================ */
const form      = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

function showError(inputId, message) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(`${inputId}-error`);
  input.classList.add('invalid');
  error.textContent = message;
}

function clearError(inputId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(`${inputId}-error`);
  input.classList.remove('invalid');
  error.textContent = '';
}

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validate() {
  let valid = true;

  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name) {
    showError('name', 'Name is required.');
    valid = false;
  } else {
    clearError('name');
  }

  if (!email) {
    showError('email', 'Email is required.');
    valid = false;
  } else if (!validateEmail(email)) {
    showError('email', 'Please enter a valid email address.');
    valid = false;
  } else {
    clearError('email');
  }

  if (!message) {
    showError('message', 'Message is required.');
    valid = false;
  } else if (message.length < 10) {
    showError('message', 'Message must be at least 10 characters.');
    valid = false;
  } else {
    clearError('message');
  }

  return valid;
}

// Clear errors on input
['name', 'email', 'message'].forEach(id => {
  document.getElementById(id).addEventListener('input', () => clearError(id));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  if (!validate()) return;

  submitBtn.disabled = true;
  submitBtn.querySelector('.btn__text').hidden = true;
  submitBtn.querySelector('.btn__sent').hidden = false;

  // Simulate sending — replace with real fetch() call to your backend / email service
  setTimeout(() => {
    form.reset();
    submitBtn.disabled = false;
    submitBtn.querySelector('.btn__text').hidden = false;
    submitBtn.querySelector('.btn__sent').hidden = true;
  }, 3000);
});


/* ============================================================
   FOOTER — dynamic year
   ============================================================ */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
