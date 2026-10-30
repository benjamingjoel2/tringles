# Tringles

Small-group singles trips: Lisbon, Rio de Janeiro, Bali and Nairobi. A static site (plain HTML, CSS and JS, no build step).

- `index.html` – page shell, header, menu, footer
- `styles.css` – all styles
- `app.js` – trip data, card decks, hash router and every page view
- `config.js` – set `formEndpoint` to a JSON form backend (e.g. Formspree) to collect applications and newsletter sign-ups; left empty they open a pre-filled email to tringles@tourground.com
- `img/` – photography from Wikimedia Commons (credits on the Image Credits page)

## Run locally

```sh
python3 -m http.server 8000
```

## Deploy

Import the repo in Vercel (framework preset: Other, no build command, output directory `.`), or run `npx vercel --prod` from the repo root.
