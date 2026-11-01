# Tidsrum — a consultancy website built with Vite, React and shadcn/ui

> **Tidsrum is fictional.** The studio, its clients, people, cases and
> figures are all made up. The site, its content and its images were
> generated with AI, and it is maintained with [Ikasu](https://ikasu.io),
> an AI content copilot for websites.
> Use it as a starting point for your own studio, agency or consultancy.

A one-page website for a small service design studio, built the way AI app
builders such as Lovable build sites: a React single-page app with
Tailwind CSS and shadcn/ui. Six cases, each with a chart of the number it
moved; services, how a project runs, the team, client quotes, FAQ and a
contact call to action.

- [Vite](https://vite.dev) + [React](https://react.dev) 19 + TypeScript + [Tailwind CSS](https://tailwindcss.com) 4
- [shadcn/ui](https://ui.shadcn.com) components (Button, Card, Badge, Tabs, Dialog, Accordion), [lucide](https://lucide.dev) icons, `react-router-dom`
- Charts drawn with [D3](https://d3js.org) (`d3-scale`, `d3-shape`, `d3-array`) and React
- Parallax photos in the hero and a timeline that fills as you scroll, both switched off for visitors who prefer reduced motion
- Photos turned into responsive WebP files at build time (`vite-imagetools`)
- No cookies, no external fonts, maps or scripts

## Getting started

Needs Node.js 20.19 or newer.

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # type check, then the site in dist/
```

## Where to change what

| To change … | Edit |
|---|---|
| A case: text, result, chart figures | its object in `src/data/cases.ts` |
| Add a case | a new object in `src/data/cases.ts` (copy one) |
| Services | `src/data/services.ts` |
| Team members | `src/data/team.ts` |
| Client quotes | `src/data/quotes.ts` |
| FAQ | `src/data/faq.ts` |
| Name, email, address | `src/data/site.ts`, and the meta tags and JSON-LD in `index.html` |
| Headings and texts of a section | its component in `src/components/sections/` |
| A photo | put it in `src/assets/` and import it in `src/data/images.ts` with its alt text |
| Colours, fonts | `src/index.css` (tokens at the top) |

A case's chart takes the figures month by month (`metric.values`), the
first month (`metric.start`, e.g. `2024-01`) and which month the new
service launched (`metric.launch`, counted from 0). The build runs the
TypeScript compiler first: a missing or misspelt field, or a case that
points at a photo that doesn't exist, stops it with the file and line
named.

## Deploying

`npm run build` writes the site to `dist/`. Any static host works:
Netlify, Cloudflare Pages, GitHub Pages, your own server. Change
`tidsrum.example` in `index.html`, `public/robots.txt` and
`public/sitemap.xml` to your domain.

The site is a single page, so it needs no server rules. If you add pages
with `react-router-dom`, set up your host to answer every path with
`index.html` (on Netlify a `_redirects` file with `/* /index.html 200`).

## Using this for a real site

The images look real but were generated with AI, and the
notice in the footer is what labels them. If you publish a real site with
them and remove that notice, you may have to label them yourself, for
example under Article 50 of the EU AI Act. Replacing them with your own
avoids the question.

## Licence

MIT, see [LICENSE](LICENSE). Images: see [IMAGES.md](IMAGES.md).
