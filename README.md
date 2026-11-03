# KS Armering AS – Flersidig Nettside

Komplett, responsiv flersidig nettside (5 undersider) for **KS Armering AS**, optimalisert for mobil, nettbrett/iPad, PC/laptop, ultrawide og Smart-TV/4K, samt klargjort for **Firebase Hosting** (`site: "ksarmering"` i prosjektet `pot-kunder-439a4`).

## Sidestruktur (5 egne sider)
- `/` (`index.html`) – Forside med hero, nøkkelfordeler, hovedtjenester, hvorfor velge KS Armering AS og utvalgte leveranseområder
- `/tjenester` (`tjenester/index.html`) – 4 dyptgående tjenesteseksjoner og samarbeidsmodeller
- `/prosjekter` (`prosjekter/index.html`) – Filtrerbart prosjektgalleri og 4-stegs arbeidsprosess
- `/om-oss` (`om-oss/index.html`) – Selskapspresentasjon, kjerneverdier og HMS/seriøsitet
- `/kontakt` (`kontakt/index.html`) – Kontaktinformasjon, hurtigveiledning og komplett B2B-forespørselsskjema

## Firebase Hosting & SDK
- **Prosjekt-ID:** `pot-kunder-439a4` (`.firebaserc`)
- **Hosting-site:** `ksarmering` (`firebase.json`)
- **Firebase SDK-konfigurasjon:** [`firebase-config.js`](./firebase-config.js)

### Deploy til Firebase Hosting
```bash
firebase deploy --only hosting:ksarmering
```
eller:
```bash
firebase deploy --only hosting
```

### Generere sidene på nytt
Dersom du gjør endringer i malen i `build.mjs`:
```bash
node build.mjs
```
