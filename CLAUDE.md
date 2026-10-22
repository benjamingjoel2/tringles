# Tringles

Static site for small-group singles trips (see `README.md` for files, run and deploy).
Read `BRAND.md` before writing any copy or design.

## Code map

- `app.js` holds all content and views. Trip facts are spread across several constants
  that must stay in sync: `TRIPS` (itinerary, price, `when`), `META` (per-trip page copy,
  images, colours, notices), `SEATS`, `NIGHTS` (exact dates), `INCLUDED`/`NOT_INCLUDED`,
  `FAQS`, `STORIES`, `CREDITS` (image licences). Pages are functions rendered by a hash
  router (`route()` on `hashchange`).
- `styles.css` design tokens are on `:root`. `index.html` is the shell, menu and footer.
- No build step, no dependencies. Check changes with `node --check app.js` and by serving
  with `python3 -m http.server 8000`.

## Agent team

Project subagents live in `.claude/agents/`. Delegate to them by name, for example
"use the copywriter to draft three Instagram captions for the Bali launch".

| Agent | Use it for | Edits files? |
| --- | --- | --- |
| `brand-strategist` | Positioning, naming, new trips or brands, voice rules, keeping `BRAND.md` current | `BRAND.md` and docs only |
| `copywriter` | Site copy, trip pages, FAQ, emails, social posts, ads | Copy in `app.js`, `index.html`, drafts in `marketing/` |
| `trip-designer` | New destinations, itineraries, dates, prices, inclusions | Trip data in `app.js` |
| `frontend-dev` | Layout, components, styles, interactions, forms, performance | Any site file |
| `growth-marketer` | SEO, meta and social tags, launch plans, newsletter, campaign calendars | `index.html` meta, `marketing/` |
| `qa-reviewer` | Review before shipping: brand voice, fact consistency, accessibility, broken links | Read-only, reports findings |

A typical flow for a new trip: `brand-strategist` (angle) → `trip-designer` (itinerary
and data) → `copywriter` (page copy) → `frontend-dev` (anything new in layout) →
`growth-marketer` (launch) → `qa-reviewer` (sign-off).
