# Tringles

Small-group singles trips: Lisbon, Rio de Janeiro, Bali and Nairobi. A static site (plain HTML, CSS and JS, no build step).

- `index.html` – page shell, header, menu, footer
- `styles.css` – all styles
- `app.js` – trip data, card decks, hash router and every page view
- `config.js` – set `formEndpoint` to a JSON form backend (e.g. Formspree) to collect applications and newsletter sign-ups; left empty they open a pre-filled email to tringles@tourground.com
- `img/` – photography from Wikimedia Commons (credits on the Image Credits page)

## Languages

English (default, `/`), French (`/fr/`), German (`/de/`) and Spanish (`/es/`). Each language is a pre-rendered copy: `fr/index.html` loads `app.fr.js`, and so on. No translation library runs in the browser.

- Translations live in `i18n/{fr,de,es}.json` as `{ "English text": "translation" }`.
- After changing copy in `index.html` or `app.js`, run `node scripts/i18n.mjs check` (rebuilds `fr/`, `de/`, `es/`, `app.*.js` and the sitemap, and fails if a string has no translation), then add the missing strings and run it again.
- The EN · FR · DE · ES switch sits in the header, the menu and the footer and keeps the current view (`#lisbon` stays `#lisbon`).

## Run locally

```sh
python3 -m http.server 8000
```

## Deploy

Import the repo in Vercel (framework preset: Other, no build command, output directory `.`), or run `npx vercel --prod` from the repo root.
