import { getFirebaseApp } from './firebase-config.js';

// Initialiser Firebase automatisk via Firebase Hosting sin innebygde init.json
getFirebaseApp().then(app => {
  if (app) window.__FIREBASE_APP_NAME__ = app.name;
});

// Mobilmeny med backdrop, tastaturnavigasjon (Escape) og scroll-lock
const burger = document.getElementById('burger');
const nav = document.getElementById('mainNav');
const backdrop = document.getElementById('navBackdrop');

const setMenuOpen = (open) => {
  if (!burger || !nav) return;
  nav.classList.toggle('open', open);
  burger.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Lukk meny' : 'Åpne meny');
  if (backdrop) backdrop.hidden = !open;
  document.body.style.overflow = open ? 'hidden' : '';
};

if (burger && nav) {
  burger.addEventListener('click', () => {
    setMenuOpen(!nav.classList.contains('open'));
  });
  if (backdrop) {
    backdrop.addEventListener('click', () => setMenuOpen(false));
  }
  nav.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => setMenuOpen(false))
  );
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      setMenuOpen(false);
      burger.focus();
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 960 && nav.classList.contains('open')) {
      setMenuOpen(false);
    }
  });
}

// ScrollToTop ved sidebytte (med støtte for ankerlenker som #jernbinding)
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
if (!window.location.hash) {
  window.scrollTo(0, 0);
}
window.addEventListener('pageshow', e => {
  if (e.persisted && !window.location.hash) {
    window.scrollTo(0, 0);
  }
});

// Prosjektfilter på /prosjekter
const chips = document.querySelectorAll('.chip');
if (chips.length) {
  chips.forEach(chip =>
    chip.addEventListener('click', () => {
      chips.forEach(c => {
        c.classList.remove('active');
        c.setAttribute('aria-pressed', 'false');
      });
      chip.classList.add('active');
      chip.setAttribute('aria-pressed', 'true');
      const f = chip.dataset.filter;
      document.querySelectorAll('#projGrid [data-cat]').forEach(card => {
        card.classList.toggle('hide', f !== 'all' && card.dataset.cat !== f);
      });
    })
  );
}

// B2B-kontaktskjema (med valgfri lagring til Firestore dersom aktivert i prosjektet)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const submitBtn = document.getElementById('submitBtn');
    const formOk = document.getElementById('formOk');
    const data = Object.fromEntries(new FormData(form).entries());

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sender forespørsel …';
    }

    try {
      const app = await getFirebaseApp();
      if (app) {
        const { getFirestore, collection, addDoc, serverTimestamp } = await import('firebase/firestore');
        const db = getFirestore(app);
        await addDoc(collection(db, 'inquiries'), {
          ...data,
          site: 'ksarmering',
          createdAt: serverTimestamp(),
        });
      }
    } catch {
      // Fortsett med bekreftelse til bruker selv om Firestore ikke er åpnet for offentlig skriving ennå
    } finally {
      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send forespørsel';
      }
      if (formOk) {
        formOk.hidden = false;
        formOk.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  });
}
