// Generator: kjør `node build.mjs` for å generere alle 5 sider (index.html + undermapper).
import { mkdirSync, writeFileSync } from 'node:fs';

const U = (id, w = 1200, q = 78) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;
const IMG_ID = {
  hero: 'photo-1504307651254-35680f356dfd',
  a: 'photo-1541888946425-d81bb19240f5',
  b: 'photo-1503387762-592deb58ef4e',
  c: 'photo-1581094794329-c8112a89af12',
  d: 'photo-1587293852726-70cdb56c2866',
  e: 'photo-1621905252507-b35492cc74b4',
  f: 'photo-1590496793929-36417d3117de',
};

const pages = [
  {
    slug: '',
    nav: 'Hjem',
    title: 'KS Armering AS – Spesialister på armering og jernbinding for bygg og anlegg',
    desc: 'KS Armering AS utfører alt innen jernbinding, kapping, bøying og montering av armering for næringsbygg, boligprosjekter, industri og samferdsel.',
  },
  {
    slug: 'tjenester',
    nav: 'Tjenester',
    title: 'Våre tjenester innen armering og betongarbeid – KS Armering AS',
    desc: 'Komplett utførelse av armeringsarbeider for hovedentreprenører og betongentreprenører – fra fundament og bunnplater til dekker, vegger og samferdsel.',
  },
  {
    slug: 'prosjekter',
    nav: 'Prosjekter',
    title: 'Leveranseområder og arbeidsmetodikk – KS Armering AS',
    desc: 'Se typiske betong- og armeringskonstruksjoner vi leverer innen bygg, bolig, næring, industri og samferdselsanlegg, samt vår 4-stegs arbeidsprosess.',
  },
  {
    slug: 'om-oss',
    nav: 'Om oss',
    title: 'Om KS Armering AS – Spesialisert underentreprenør innen jernbinding',
    desc: 'KS Armering AS er en spesialisert underentreprenør innen armering og jernbinding – bygget på yrkesstolthet, høyt arbeidstempo og pålitelig gjennomføring.',
  },
  {
    slug: 'kontakt',
    nav: 'Kontakt',
    title: 'Forespør kapasitet eller pristilbud – KS Armering AS',
    desc: 'Kontakt KS Armering AS for pristilbud på tonnasje, fastpris eller innleie av selvgående armeringslag til bygge- og anleggsprosjekter.',
  },
];

const href = (from, slug) => {
  const base = from === '' ? './' : '../';
  return slug === '' ? base : `${base}${slug}/`;
};

const rImg = (id, alt, { eager = false, sizes = '(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 600px' } = {}) => {
  const src = U(id, 1200);
  const srcset = [600, 1000, 1600, 2200].map(w => `${U(id, w)} ${w}w`).join(', ');
  const loadAttr = eager ? 'loading="eager" fetchpriority="high"' : 'loading="lazy" decoding="async"';
  return `<img src="${src}" srcset="${srcset}" sizes="${sizes}" alt="${alt}" ${loadAttr} onerror="this.classList.add('broken')">`;
};

const check = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
const icons = {
  bind: '<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h18M3 16h18M8 3v18M16 3v18"/></svg>',
  build: '<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg>',
  infra: '<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 18h20M4 18v-6a8 8 0 0 1 16 0v6M12 4v14"/></svg>',
  team: '<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6M15 14.5c3 0 6 1.5 6 5.5"/></svg>',
  shield: '<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  ruler: '<svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.4 2.4 0 0 1 0-3.4l2.6-2.6a2.4 2.4 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2M11.5 9.5l2-2M8.5 6.5l2-2M17.5 15.5l2-2"/></svg>',
};

const layout = (p, body) => {
  const h = (s) => href(p.slug, s);
  const rootPrefix = p.slug === '' ? './' : '../';
  const nav = pages
    .map(x => `<a href="${h(x.slug)}"${x.slug === p.slug ? ' class="active" aria-current="page"' : ''}>${x.nav}</a>`)
    .join('');
  const showMobileBar = p.slug !== 'kontakt';

  return `<!DOCTYPE html>
<html lang="nb">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#151A21">
<meta name="format-detection" content="telephone=no">
<title>${p.title}</title>
<meta name="description" content="${p.desc}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://images.unsplash.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${rootPrefix}style.css">
<script type="importmap">
{
  "imports": {
    "firebase/app": "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js",
    "firebase/firestore": "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js",
    "firebase/analytics": "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js"
  }
}
</script>
</head>
<body class="${showMobileBar ? 'has-mobile-cta' : ''}">
<a class="skip-link" href="#mainContent">Hopp til hovedinnhold</a>
<header class="site-header">
  <div class="container header-in">
    <a class="logo" href="${h('')}" aria-label="KS Armering AS – Til forsiden">
      <span class="logo-mark" aria-hidden="true"></span>
      <span>KS ARMERING AS</span>
    </a>
    <nav class="main-nav" id="mainNav" aria-label="Hovedmeny">
      <div class="nav-links">${nav}</div>
      <a class="btn btn-primary nav-cta" href="${h('kontakt')}">Forespør kapasitet / tilbud</a>
    </nav>
    <button class="burger" id="burger" type="button" aria-label="Åpne meny" aria-expanded="false" aria-controls="mainNav">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
<div class="nav-backdrop" id="navBackdrop" hidden></div>

<main id="mainContent" tabindex="-1">
${body(h)}
</main>

<footer class="site-footer">
  <div class="container foot-grid">
    <div class="foot-brand">
      <a class="logo light" href="${h('')}"><span class="logo-mark" aria-hidden="true"></span><span>KS ARMERING AS</span></a>
      <p>Spesialisert underentreprenør innen armering og jernbinding for hovedentreprenører, betongentreprenører, utbyggere og byggherrer over hele landet.</p>
      <ul class="foot-contact">
        <li><strong>Telefon:</strong> <a href="tel:+4740000000">+47 400 00 000</a></li>
        <li><strong>E-post:</strong> <a href="mailto:post@ksarmering.no">post@ksarmering.no</a></li>
        <li><strong>Åpningstid:</strong> Man–Fre 07:00–16:00</li>
      </ul>
    </div>
    <div>
      <h4>Hurtiglenker</h4>
      <nav aria-label="Bunntekstmeny">
        ${pages.map(x => `<a href="${h(x.slug)}">${x.nav}</a>`).join('')}
      </nav>
    </div>
    <div>
      <h4>Fagområder</h4>
      <ul class="foot-list">
        <li><a href="${h('tjenester')}#jernbinding">Jernbinding &amp; montering på plass</a></li>
        <li><a href="${h('tjenester')}#fundament">Armering for bygg, dekke &amp; fundament</a></li>
        <li><a href="${h('tjenester')}#anlegg">Anleggsarmering &amp; infrastruktur</a></li>
        <li><a href="${h('tjenester')}#kapasitet">Innleie av armeringslag &amp; prosjektstøtte</a></li>
      </ul>
    </div>
    <div>
      <h4>Kvalitet &amp; Utførelse</h4>
      <p class="foot-note">Alt armeringsarbeid utføres i henhold til tekniske arbeidstegninger, bøyelister, NS-EN 13670 og prosjektets kontrollplan.</p>
      <a class="btn btn-primary btn-sm" href="${h('kontakt')}">Send forespørsel →</a>
    </div>
  </div>
  <div class="container foot-bottom">
    <span>© KS Armering AS. Levert av Vikingnet.</span>
    <span class="foot-meta">Jernbinding · Slakkarmering · Bygg, Industri &amp; Anlegg</span>
  </div>
</footer>

${showMobileBar ? `<div class="mobile-cta-bar" role="region" aria-label="Hurtigkontakt">
  <a class="btn btn-primary mobile-cta-btn" href="${h('kontakt')}">Forespør kapasitet / tilbud</a>
</div>` : ''}

<script type="module" src="${rootPrefix}main.js"></script>
</body>
</html>`;
};

const hero = (tag, h1, lead) => `
<section class="page-hero">
  <div class="container">
    <span class="badge">${tag}</span>
    <h1>${h1}</h1>
    <p class="lead">${lead}</p>
  </div>
</section>`;

const cta = (h, title, text, btn) => `
<section class="cta-banner">
  <div class="container cta-in">
    <div>
      <h2>${title}</h2>
      <p>${text}</p>
    </div>
    <a class="btn btn-primary" href="${h('kontakt')}">${btn}</a>
  </div>
</section>`;

const home = (h) => `
<section class="hero">
  <div class="container hero-grid">
    <div class="hero-copy">
      <span class="badge">Spesialister på armering og jernbinding for bygg og anlegg</span>
      <h1>Styrken i betongen starter med presis armering</h1>
      <p class="lead">KS Armering AS utfører alt innen jernbinding, kapping, bøying og montering av armering for næringsbygg, boligprosjekter, industri og samferdsel. Vi leverer høy kapasitet, nøyaktig utførelse etter tegning og full fremdrift på byggeplassen.</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${h('kontakt')}">Be om pristilbud eller kapasitet</a>
        <a class="btn btn-outline" href="${h('tjenester')}">Se våre tjenester</a>
      </div>
      <ul class="trust">
        <li>${check}<span>Utførelse strengt etter armeringstegninger og bøyelister</span></li>
        <li>${check}<span>Rask mobilisering på bygge- og anleggsplass</span></li>
        <li>${check}<span>Kompromissløst fokus på HMS, kvalitet og fremdrift</span></li>
      </ul>
    </div>
    <div class="hero-img">
      ${rImg(IMG_ID.hero, 'Jernbindere som monterer armeringsjern på byggeplass', { eager: true, sizes: '(max-width: 960px) 92vw, 560px' })}
      <div class="hero-stat-card">
        <strong>100 % etter tegning</strong>
        <span>Kvalitetssikret overdekning, forankring og knutepunkter før hver støp</span>
      </div>
    </div>
  </div>
</section>

<section class="metrics-strip" aria-label="Nøkkelfordeler for entreprenører">
  <div class="container metrics-grid">
    <div class="metric-item">
      <strong>Bygg, Næring &amp; Anlegg</strong>
      <span>Fra boligblokker og parkeringskjellere til bruer og tungindustri</span>
    </div>
    <div class="metric-item">
      <strong>Fleksible Oppgjør</strong>
      <span>Fastpris etter bøyeliste, enhetspris pr. tonn eller innleie på time</span>
    </div>
    <div class="metric-item">
      <strong>Selvgående Lag</strong>
      <span>Erfarne jernbindere med egen bas som leser komplekse tegninger</span>
    </div>
    <div class="metric-item">
      <strong>Full Egenkontroll</strong>
      <span>Gjennomgang av overdekning, senteravstand og skjøter før utstøping</span>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="sec-head">
      <span class="kicker">Tjenesteoversikt</span>
      <h2>Komplette armeringsleveranser på bygge- og anleggsplass</h2>
      <p class="sub">Vi tilpasser bemanning og gjennomføring etter støpeplan, konstruksjonstype og fremdriftskrav – enten dere trenger et komplett armeringsentreprise-opplegg eller ekstra kapasitet i kritiske faser.</p>
    </div>
    <div class="grid-4">
      ${[
        [
          icons.bind,
          'Jernbinding & Montering på Plass',
          'Komplett legging, kapping, bøying og binding av kamstål, armeringsnett og spesialarmering direkte på dekket eller i byggegropen.',
        ],
        [
          icons.build,
          'Armering for Bygg, Dekke & Fundament',
          'Nøyaktig armering av banketter, bunnplater, plasstøpte kjellervegger, søyler, dragere og etasjeskillere i bolig- og næringsbygg.',
        ],
        [
          icons.infra,
          'Anleggsarmering & Infrastruktur',
          'Håndtering av grov dimensjonsarmering og tette knutepunkter i kulverter, støttemurer, brukonstruksjoner, kraft- og VA-anlegg.',
        ],
        [
          icons.team,
          'Innleie av Armeringslag & Prosjektstøtte',
          'Rask mobilisering av selvgående arbeidslag med egen bas ved arbeidstopper, stramme støpefrister eller langvarige råbygg.',
        ],
      ].map(([i, t, d]) => `
        <article class="card service-card">
          <div class="icon">${i}</div>
          <h3>${t}</h3>
          <p>${d}</p>
          <a class="more" href="${h('tjenester')}">Les mer →</a>
        </article>`).join('')}
    </div>
  </div>
</section>

<section class="section alt">
  <div class="container">
    <div class="sec-head">
      <span class="kicker">Kvalitet &amp; Fremdrift</span>
      <h2>Hvorfor velge KS Armering AS</h2>
      <p class="sub">Når betongbilen er bestilt og kranen går, er det avgjørende at armeringsarbeidet holder riktig tempo og består kontrollen uten anmerkninger.</p>
    </div>
    <div class="grid-3">
      <article class="card why">
        <span class="num">01</span>
        <h3>Presisjon i hver knute</h3>
        <p>Riktig overdekning, senteravstand og forankringslengde sikrer at konstruksjonen består kontroll på første forsøk. Vi kontrollerer avstandsklosser, stolper og oppheng nøye før forskaling lukkes.</p>
      </article>
      <article class="card why">
        <span class="num">02</span>
        <h3>Høy produksjonstakt</h3>
        <p>Erfarne jernbindere som jobber effektivt og strukturert slik at støpeplanen alltid holdes. Vi planlegger rekkefølge, mottak av jern og krantid i tett dialog med forskalingslag og byggeleder.</p>
      </article>
      <article class="card why">
        <span class="num">03</span>
        <h3>Sikker og ryddig byggeplass</h3>
        <p>Vi følger alle krav til verneutstyr, sikker jobb-analyse (SJA) og orden på dekket. God sortering av bøyelister og ryddige gangsoner reduserer ulykkesrisiko og øker hastigheten.</p>
      </article>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="sec-head">
      <span class="kicker">Leveranseområder</span>
      <h2>Utvalgte leveranseområder</h2>
      <p class="sub">Vi leverer strukturert armeringsarbeid på tvers av boligbygging, næringsprosjekter, industrianlegg og offentlig infrastruktur.</p>
    </div>
    <div class="grid-3">
      ${[
        [
          IMG_ID.a,
          'Bygg & Næring',
          'Bunnplate og fundamentering for næringsbygg',
          'Komplett jernbinding av tunge punktfundamenter, dragere, heisgroper og armert gulv på grunn med høye krav til nøyaktighet.',
        ],
        [
          IMG_ID.b,
          'Bolig & Råbygg',
          'Plasstøpte dekker og leilighetsbygg',
          'Effektiv legging av under- og overarmering, armeringsnett, gjennomstikksarmering og utsparingsforsterkninger på etasjeskillere.',
        ],
        [
          IMG_ID.c,
          'Anlegg & Samferdsel',
          'Tunge anleggskonstruksjoner og støttemurer',
          'Montering av grov dimensjonsarmering og skjøtesystemer for støttemurer, kulverter, fundamenter og teknisk infrastruktur.',
        ],
      ].map(([id, tag, t, d]) => `
        <article class="card img-card">
          <div class="card-media">${rImg(id, t)}</div>
          <div class="pad">
            <span class="tag">${tag}</span>
            <h3>${t}</h3>
            <p>${d}</p>
          </div>
        </article>`).join('')}
    </div>
    <div class="center">
      <a class="btn btn-dark" href="${h('prosjekter')}">Se flere prosjekter</a>
    </div>
  </div>
</section>

${cta(
  h,
  'Trenger du et erfarent armeringslag til ditt neste støpeprosjekt? Ta kontakt for rask avklaring',
  'Send oss tegninger, bøyelister eller en kort beskrivelse av bemanningsbehovet – vi gir rask tilbakemelding på kapasitet og pris.',
  'Forespør kapasitet eller tilbud'
)}`;

const svc = [
  {
    id: 'jernbinding',
    img: IMG_ID.d,
    kicker: '01 · Byggeplassutførelse',
    title: 'Jernbinding & Montering på Byggeplass',
    desc: 'Vi utfører komplett montering og binding av kamstål, armeringsnett og spesialarmering direkte på byggeplassen. Våre fagarbeidere leser komplekse armeringstegninger og bøyelister effektivt og selvstendig.',
    extra: 'God logistikk på dekket og systematisk utlegging etter posisjonsnummer sikrer at arbeidet flyter sømløst sammen med forskalingssnekkere, rørleggere og elektrikere.',
    list: [
      'Montering av slakkarmering etter tekniske tegninger',
      'Sikring av korrekt overdekning og avstandsklosser',
      'Montering av gjennomstikksarmering og skjøtesystemer',
      'Klargjøring og egenkontroll før støp',
    ],
  },
  {
    id: 'fundament',
    img: IMG_ID.a,
    kicker: '02 · Råbygg & Betongkonstruksjoner',
    title: 'Fundament, Gulv, Vegger & Dekkearmering',
    desc: 'Fra banketter, ringmurer og bunnplater til plasstøpte vegger, søyler og etasjeskillere i store bolig- og næringsbygg. Vi sørger for at armeringen ligger nøyaktig og stabilt før betongbilen kommer.',
    extra: 'Vi har bred erfaring med både tradisjonelle plasstøpte råbygg og kombinasjonsløsninger med plattendekker, prefabrikkerte elementer og komplekse utsparinger.',
    list: [
      'Armering av bunnplater, fundamenter og kjellerkonstruksjoner',
      'Vegg-, søyle- og dragerarmering',
      'Etasjeskillere, plattendekker og plasstøpte dekker',
      'Utsparinger, kantforsterkninger og heissjakter',
    ],
  },
  {
    id: 'anlegg',
    img: IMG_ID.c,
    kicker: '03 · Samferdsel & Industri',
    title: 'Anleggsarmering, Konstruksjoner & Samferdsel',
    desc: 'Tunge betongkonstruksjoner innen infrastruktur og industri stiller ekstra strenge krav til dimensjoner, toleranser og dokumentasjon. Vi har kompetansen til å håndtere krevende anleggsarmering.',
    extra: 'Ved store armeringsmengder og grove dimensjoner (Ø25–Ø40) kreves både riktig løfteutstyr, nøyaktig plassering i tette knutepunkter og tett samspill med anleggsledelsen.',
    list: [
      'Støttemurer, kulverter og brukonstruksjoner',
      'Industribygg, kraftverk og vann/avløpsanlegg',
      'Tung armering med store jern-dimensjoner og tette knutepunkter',
      'Samarbeid med forskalingssnekkere og anleggsledelse',
    ],
  },
  {
    id: 'kapasitet',
    img: IMG_ID.f,
    kicker: '04 · Fleksibel Bemanning & Entreprise',
    title: 'Kapasitetsstøtte, Akkord & Prosjektbistand',
    desc: 'Har prosjektet stramme tidsfrister eller behov for ekstra bemanning før en stor støp? Vi stiller med selvgående jernbindere og komplette arbeidslag på både fastpris, enhetspris (pr. tonn) eller timebasis.',
    extra: 'Enten du trenger et fast lag gjennom hele byggetiden eller rask oppbemanning i noen intensive uker, tilpasser vi lagstørrelsen slik at støpeplanen holdes.',
    list: [
      'Komplette, selvgående arbeidslag med egen bas',
      'Fleksibel oppstart ved arbeidstopper',
      'Oppdrag etter tonnasje, fastpris eller medgått tid',
      'Bistand ved både kortvarige etapper og langsiktige byggeprosjekter',
    ],
  },
];

const tjenester = (h) => `
${hero(
  'Tjenester & Fagområder',
  'Våre tjenester innen armering og betongarbeid',
  'Vi bistår hovedentreprenører og betongentreprenører med komplett utførelse av armeringsarbeider – fra grunn og fundament til ferdig armerte dekker, vegger og anleggskonstruksjoner.'
)}

${svc.map((s, i) => `
<section class="section${i % 2 ? ' alt' : ''}" id="${s.id}">
  <div class="container split${i % 2 ? ' rev' : ''}">
    <div class="split-img">${rImg(s.img, s.title)}</div>
    <div class="split-copy">
      <span class="kicker">${s.kicker}</span>
      <h2>${s.title}</h2>
      <p class="split-lead">${s.desc}</p>
      <p>${s.extra}</p>
      <ul class="checks">
        ${s.list.map(x => `<li>${check}<span>${x}</span></li>`).join('')}
      </ul>
    </div>
  </div>
</section>`).join('')}

<section class="section dark">
  <div class="container">
    <div class="sec-head">
      <span class="kicker">Samarbeidsmodeller</span>
      <h2>Fleksible oppgjørs- og gjennomføringsmodeller for entreprenører</h2>
      <p class="sub">Vi tilpasser kontraktsformen etter prosjektets modenhet, tegningsgrunnlag og fremdriftsplan.</p>
    </div>
    <div class="grid-3">
      <article class="card dark-card">
        <span class="num">A</span>
        <h3>Tonnasjepris (kr pr. tonn)</h3>
        <p>Forutsigbar enhetspris basert på bøyelister og konstruksjonstype. Ideelt for større råbygg, dekker, bunnplater og anleggskonstruksjoner der mengdene kan avregnes løpende etter levert tonnasje.</p>
      </article>
      <article class="card dark-card">
        <span class="num">B</span>
        <h3>Fastpris på definerte etapper</h3>
        <p>Avtalt fastpris for komplette konstruksjonsdeler basert på armeringstegninger og mengdebeskrivelse. Gir hovedentreprenør full kostnadskontroll på prosjektet.</p>
      </article>
      <article class="card dark-card">
        <span class="num">C</span>
        <h3>Innleie og regningsarbeid</h3>
        <p>Selvgående jernbindere eller komplette arbeidslag med bas på timebasis ved krevende ombygginger, arbeidstopper eller prosjekter der tegningsgrunnlaget revideres fortløpende.</p>
      </article>
    </div>
  </div>
</section>

${cta(
  h,
  'Har du armeringstegninger eller bøyelister klare for prising?',
  'Send oss en forespørsel med litt informasjon om konstruksjonstype, lokasjon og ønsket oppstart, så beregner vi pris og kapasitet raskt.',
  'Gå til kontaktskjema'
)}`;

const proj = [
  ['bygg', 'Bygg & Bolig', IMG_ID.a, 'Bunnplate og fundamentering for næringsbygg', 'Komplett jernbinding av tunge punktfundamenter, dragere og armert gulv på grunn.'],
  ['bygg', 'Bygg & Bolig', IMG_ID.b, 'Plasstøpte dekker og leilighetsbygg', 'Rask og presis legging av under- og overarmering, nett og skjærarmering på etasjeskillere.'],
  ['bygg', 'Bygg & Bolig', IMG_ID.d, 'Plasstøpte kjellervegger og sjakter', 'Armering av bærende vegger, heissjakter og trapperom med strenge krav til nøyaktighet.'],
  ['anlegg', 'Anlegg', IMG_ID.c, 'Tunge anleggskonstruksjoner og støttemurer', 'Montering av grov dimensjonsarmering for samferdsel og teknisk infrastruktur.'],
  ['naring', 'Næring & Industri', IMG_ID.e, 'Industrigulv og maskinfundamenter', 'Spesialtilpasset armering dimensjonert for høy punktbelastning og tung industriell drift.'],
  ['naring', 'Næring & Industri', IMG_ID.f, 'Prefabrikasjon av armeringskurver', 'Ferdigbinding av søyle- og bjelkekurver på byggeplass for rask innheising med kran.'],
];

const prosjekter = (h) => `
${hero(
  'Prosjekter & Arbeidsprosess',
  'Leveranseområder og arbeidsmetodikk',
  'Se typiske konstruksjoner vi armerer, og hvordan vi jobber strukturert for å sikre at armeringsarbeidet aldri blir en flaskehals på byggeplassen.'
)}

<section class="section">
  <div class="container">
    <div class="sec-head">
      <span class="kicker">Konstruksjonstyper</span>
      <h2>Typiske leveranseområder innen bygg, industri og anlegg</h2>
      <p class="sub">Filtrer mellom våre hovedkategorier for å se hvilke typer betongkonstruksjoner og armeringsarbeider vi utfører for entreprenører.</p>
    </div>
    <div class="filters" role="group" aria-label="Filtrer prosjekter etter kategori">
      <button class="chip active" type="button" data-filter="all" aria-pressed="true">Alle</button>
      <button class="chip" type="button" data-filter="bygg" aria-pressed="false">Bygg &amp; Bolig</button>
      <button class="chip" type="button" data-filter="naring" aria-pressed="false">Næring &amp; Industri</button>
      <button class="chip" type="button" data-filter="anlegg" aria-pressed="false">Anlegg</button>
    </div>
    <div class="grid-3" id="projGrid">
      ${proj.map(([c, tag, id, t, d]) => `
        <article class="card img-card" data-cat="${c}">
          <div class="card-media">${rImg(id, t)}</div>
          <div class="pad">
            <span class="tag">${tag}</span>
            <h3>${t}</h3>
            <p>${d}</p>
          </div>
        </article>`).join('')}
    </div>
  </div>
</section>

<section class="section dark">
  <div class="container">
    <div class="sec-head">
      <span class="kicker">Strukturert Gjennomføring</span>
      <h2>Slik sikrer vi fremdriften – 4 faste steg</h2>
      <p class="sub">En forutsigbar arbeidsmetodikk fra mottak av armeringstegninger til ferdig kontrollert armering klar for betongstøp.</p>
    </div>
    <div class="grid-4">
      ${[
        [
          'Steg 01',
          'Gjennomgang av tegninger, bøyelister og støpeplan',
          'Vi analyserer armeringstegninger, bøyelister, etappeinndeling og støpedatoer i forkant, slik at leveranser og rekkefølge på plassen er avklart før oppstart.',
        ],
        [
          'Steg 02',
          'Mobilisering av riktig dimensjonert arbeidslag',
          'Vi stiller med et erfarent, selvgående armeringslag dimensjonert etter tonnasje og tidsfrist – ledet av arbeidsbas som holder løpende dialog med byggeledelsen.',
        ],
        [
          'Steg 03',
          'Effektiv jernbinding i tett samspill med forskalingslag',
          'Strukturert utlegging og binding av armering parallelt med forskaling og tekniske fag sørger for maksimal utnyttelse av krantid og høy daglig produksjon.',
        ],
        [
          'Steg 04',
          'Egenkontroll av overdekning og forankring før støp',
          'Før hver støp gjennomfører vi systematisk sjekk av overdekning, avstandsklosser, skjøtelengder, utsparinger og renhet i formen slik at kontrollen godkjennes på første forsøk.',
        ],
      ].map(([st, title, desc], i) => `
        <div class="step">
          <span class="num">0${i + 1}</span>
          <h3>${st}: ${title}</h3>
          <p>${desc}</p>
        </div>`).join('')}
    </div>
  </div>
</section>

<section class="section alt">
  <div class="container split">
    <div class="split-copy">
      <span class="kicker">Teknisk Presisjon</span>
      <h2>Dokumentert kvalitet og kontroll før støp</h2>
      <p class="split-lead">Feil i armeringen oppdaget rett før støp koster verdifull tid på byggeplassen. Derfor bygger vi kvalitetssikring inn i hver eneste arbeidsoperasjon.</p>
      <ul class="checks">
        <li>${check}<span>Kontroll av jernkvalitet, dimensjon, senteravstand og antall etter tegning</span></li>
        <li>${check}<span>Riktig bruk av avstandsklosser, armeringsstoler og monteringsjern for garantert overdekning</span></li>
        <li>${check}<span>Nøyaktige forankringslengder, omfarsskjøter og mekaniske koblinger i belastede soner</span></li>
        <li>${check}<span>Sikring av stabilitet slik at armeringsnettet tåler ferdsel under utstøping</span></li>
      </ul>
    </div>
    <div class="split-img">${rImg(IMG_ID.e, 'Kontroll av ferdig bundet armering før betongstøp')}</div>
  </div>
</section>

${cta(
  h,
  'Planlegger dere neste støpeetappe eller råbygg?',
  'Ta kontakt med oss for å diskutere fremdriftsplan, tonnasje og bemanningsbehov på ditt prosjekt.',
  'Forespør kapasitet'
)}`;

const omoss = (h) => `
${hero(
  'Om Selskapet',
  'Om KS Armering AS',
  'En spesialisert underentreprenør innen armering og jernbinding – bygget på yrkesstolthet, høyt arbeidstempo og pålitelig gjennomføring.'
)}

<section class="section">
  <div class="container split">
    <div class="prose">
      <span class="kicker">Vår Rolle på Byggeplassen</span>
      <h2>Spesialister på selve skjelettet i betongkonstruksjonen</h2>
      <p>I ethvert betongprosjekt er armeringen selve skjelettet som gir konstruksjonen bæreevne, strekkfasthet og levetid. Hos KS Armering AS vet vi hvor avgjørende det er at armeringsarbeidet utføres 100 prosent etter tegningene, samtidig som tidsplanen frem mot støp overholdes uten forsinkelser.</p>
      <p>Vi samarbeider tett med både store og mellomstore entreprenører, betongarbeidere og byggeledere. Når våre jernbindere kommer ut på plassen, er målet alltid det samme: å være et selvgående, løsningsorientert og effektivt lag som gjør hverdagen enklere for anleggsledelsen.</p>
      <p>For oss henger høy produksjonstakt alltid sammen med sikkerhet og kvalitet. Vi følger strenge rutiner for HMS, ryddighet på arbeidsplassen og grundig egenkontroll før utstøping, slik at oppdragsgiverne våre kan være trygge på et feilfritt sluttresultat.</p>
    </div>
    <div class="split-img">${rImg(IMG_ID.b, 'Fagarbeidere fra KS Armering AS i arbeid på byggeplass')}</div>
  </div>
</section>

<section class="section alt">
  <div class="container">
    <div class="sec-head">
      <span class="kicker">Kjerneverdier</span>
      <h2>Det vi står for</h2>
      <p class="sub">Våre faste prinsipper i møte med hvert eneste prosjekt, uansett størrelse og kompleksitet.</p>
    </div>
    <div class="grid-3">
      <article class="card why">
        <div class="icon">${icons.ruler}</div>
        <span class="num">01</span>
        <h3>Nøyaktighet</h3>
        <p>Alt arbeid utføres i tråd med tegninger og gjeldende krav. Vi går aldri på akkord med overdekning, skjøtelengder eller plassering av skjær- og gjennomstikksarmering.</p>
      </article>
      <article class="card why">
        <div class="icon">${icons.team}</div>
        <span class="num">02</span>
        <h3>Pålitelighet</h3>
        <p>Vi stiller med avtalt bemanning og holder støpefrister. For en hovedentreprenør betyr det forutsigbar drift og trygghet for at betongleveransen går som planlagt.</p>
      </article>
      <article class="card why">
        <div class="icon">${icons.shield}</div>
        <span class="num">03</span>
        <h3>Sikkerhet og orden</h3>
        <p>En ryddig og trygg arbeidsplass for alle fag på bygget. Vi sørger for god merking, sikring av oppstikkende jern, ryddige ferdselsårer og aktiv deltakelse i vernetjenesten.</p>
      </article>
    </div>
  </div>
</section>

<section class="section">
  <div class="container split rev">
    <div class="split-img">${rImg(IMG_ID.f, 'Armeringsstål og bøyelister klargjort på byggeplass')}</div>
    <div class="split-copy">
      <span class="kicker">HMS &amp; Seriøsitet</span>
      <h2>En trygg og ryddig samarbeidspartner for hovedentreprenører</h2>
      <p class="split-lead">På moderne bygge- og anleggsplasser stilles det strenge krav til dokumentasjon, sikkerhetskultur og samhandling mellom underentreprenører.</p>
      <ul class="checks">
        <li>${check}<span>Gyldige HMS-kort, påbudt verneutstyr og opplæring på alle mannskaper</span></li>
        <li>${check}<span>Aktiv deltakelse i oppstartsmøter, SJA (Sikker Jobb-Analyse) og vernerunder</span></li>
        <li>${check}<span>Tydelig arbeidslagstruktur med erfaren bas som kommuniserer direkte med anleggsleder</span></li>
        <li>${check}<span>Strukturert mottak og lagring av armeringsstål på byggeplassen for effektiv kranbruk</span></li>
      </ul>
    </div>
  </div>
</section>

${cta(
  h,
  'Ønsker du en pålitelig underentreprenør på armering?',
  'Ta kontakt for en uforpliktende prat om kommende anbud, rammeavtaler eller konkrete byggeprosjekter.',
  'Ta kontakt med oss'
)}`;

const sel = (id, label, opts) => `
  <div class="field">
    <label for="${id}">${label} <span class="req" aria-hidden="true">*</span></label>
    <select id="${id}" name="${id}" required>
      <option value="">Velg alternativ …</option>
      ${opts.map(o => `<option value="${o}">${o}</option>`).join('')}
    </select>
  </div>`;

const inp = (id, label, type = 'text', extra = '') => `
  <div class="field">
    <label for="${id}">${label} <span class="req" aria-hidden="true">*</span></label>
    <input id="${id}" name="${id}" type="${type}" required ${extra}>
  </div>`;

const kontakt = () => `
${hero(
  'Kontakt & Tilbudsforespørsel',
  'Forespør kapasitet eller pristilbud',
  'Send oss en kort beskrivelse av prosjektet eller behovet ditt, så tar vi raskt kontakt for å gjennomgå tegninger, tidsplan og prising.'
)}

<section class="section">
  <div class="container contact-grid">
    <aside class="contact-aside">
      <div class="card contact-info-card">
        <span class="kicker">Direkte Kontakt</span>
        <h3>KS Armering AS</h3>
        <p>Ta gjerne direkte kontakt på telefon eller e-post dersom det gjelder rask avklaring av kapasitet, befaring eller oversendelse av armeringstegninger og bøyelister.</p>
        <ul class="contact-list">
          <li>
            <strong>Telefon</strong>
            <a href="tel:+4740000000">+47 400 00 000</a>
          </li>
          <li>
            <strong>E-post</strong>
            <a href="mailto:post@ksarmering.no">post@ksarmering.no</a>
          </li>
          <li>
            <strong>Åpningstider</strong>
            <span>Man–Fre 07:00–16:00</span>
          </li>
          <li>
            <strong>Oppdragsområde</strong>
            <span>Bygg, industri og anlegg – rask mobilisering</span>
          </li>
        </ul>
      </div>

      <div class="card infobox">
        <h3>Rask tilbakemelding til entreprenører</h3>
        <ol>
          <li>Send inn forespørsel eller kontakt oss på telefon</li>
          <li>Vi går gjennom omfang, tonnasje eller bemanningsbehov</li>
          <li>Du får rask avklaring på kapasitet og pris</li>
        </ol>
      </div>
    </aside>

    <form class="card form" id="contactForm" novalidate>
      <div class="full form-head">
        <h2>Send forespørsel om prosjekt eller bemanning</h2>
        <p>Fyll ut skjemaet under, så tar vi kontakt for videre gjennomgang av tegningsgrunnlag og oppstart.</p>
      </div>
      ${inp('bedrift', 'Bedriftsnavn / Entreprenør', 'text', 'autocomplete="organization" placeholder="F.eks. Betong & Bygg Entreprenør AS"')}
      ${inp('kontaktperson', 'Kontaktperson', 'text', 'autocomplete="name" placeholder="Navn og rolle / tittel"')}
      ${inp('telefon', 'Telefonnummer', 'tel', 'autocomplete="tel" inputmode="tel" placeholder="+47 000 00 000"')}
      ${inp('epost', 'E-postadresse', 'email', 'autocomplete="email" inputmode="email" placeholder="navn@entreprenor.no"')}
      ${inp('sted', 'Prosjektsted / Kommune', 'text', 'placeholder="F.eks. Oslo, Lillestrøm, Drammen …"')}
      ${sel('type', 'Type oppdrag', [
        'Fastpris / Tonnasjepris på prosjekt',
        'Innleie av jernbindere',
        'Bolig- og næringsbygg',
        'Anlegg og infrastruktur',
        'Annet',
      ])}
      <div class="full">
        ${sel('oppstart', 'Ønsket oppstart', [
          'Så snart som mulig',
          'Innen 2–4 uker',
          'Planlagt fremtidig prosjekt',
        ])}
      </div>
      <div class="field full">
        <label for="beskrivelse">Kort beskrivelse av prosjektet / estimert mengde <span class="req" aria-hidden="true">*</span></label>
        <textarea id="beskrivelse" name="beskrivelse" rows="5" required placeholder="Beskriv kort type konstruksjon (f.eks. bunnplate, dekker, vegger, anlegg), estimert tonnasje eller antall jernbindere, og ønsket tidsperiode …"></textarea>
      </div>
      <div class="full">
        <button class="btn btn-primary btn-block" id="submitBtn" type="submit">Send forespørsel</button>
      </div>
      <p class="form-ok full" id="formOk" role="status" aria-live="polite" hidden>
        Takk! Forespørselen din er registrert hos KS Armering AS. Vi tar kontakt med deg innen kort tid.
      </p>
    </form>
  </div>
</section>`;

const bodies = [home, tjenester, prosjekter, omoss, kontakt];
pages.forEach((p, i) => {
  const dir = p.slug === '' ? '.' : p.slug;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/index.html`, layout(p, bodies[i]));
});
console.log('Ferdig: 5 sider generert');
