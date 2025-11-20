# Divno J. Enterprises — Website (Vite + React + Tailwind)

>This README documents how to run, customize, and troubleshoot the Divno J. Enterprises site in this repository.

---

## Overview

This project is a small marketing website built with:

- Vite (dev server + build)
- React 18 + React Router
- Tailwind CSS (utility-first styling)

Core features:

- Responsive navbar, hero, services cards, contact page
- Hero supports a background image (user-provided or bundled fallback)
- The Contact page includes a form and an optional contact info panel
- A small, curated color palette (navy, gold/peach/accents) and typography (Inter + Poppins)

## Quick start (development)

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

Open the local URL printed by Vite (e.g. `http://localhost:5174/`). Vite will auto-pick a different port if `5173` is busy.

## Important files / structure

- `index.html` — HTML shell and Google Fonts includes
- `public/assets/` — static assets (logo, hero background, etc.)
- `src/main.jsx` — React entry, BrowserRouter
- `src/App.jsx` — route definitions
- `src/index.css` — Tailwind directives + small helpers (hero overlay, btn gradients)
- `tailwind.config.js` — content paths and custom colors + fonts

Key components (in `src/components`):
- `Navbar.jsx` — top navigation (currently uses `bg-navy`)
- `Hero.jsx` — hero section; uses `/public/assets/background-photo.jpeg` if present, otherwise `hero.jpg`
- `Footer.jsx` — footer (accent orange background)
- `ContactForm.jsx` — contact form component (client-side submit)
- `ContactPanel.jsx` — contact info sidebar (optional)

Pages (in `src/pages`):
- `Home.jsx`, `About.jsx`, `Services.jsx`, `Contact.jsx`

## Assets — add your logo and background image

Place your image files into `public/assets` using the recommended names:

- `public/assets/background-photo.jpeg` — preferred hero background (user image)
- `public/assets/hero.jpg` — fallback hero image already present
- `public/assets/logo.png` — navbar logo

Copy example (Linux/macOS):

```bash
cp "$HOME/Downloads/background photo.jpeg" ./public/assets/background-photo.jpeg
cp "$HOME/Downloads/divno j logo.png" ./public/assets/logo.png
```

Then hard-refresh the browser to see changes.

## Visual / style notes

- Colors are defined in `tailwind.config.js` and include: `navy`, `brand-orange`, `gold`, `peach`, `accent-orange`.
- Typography uses `Inter` (body) and `Poppins` (headings) via Google Fonts included in `index.html`.
- Hero: a dark overlay (`.hero-overlay` in `src/index.css`) is used to keep white heading text readable.
- Navbar uses `bg-navy` for contrast; footer uses an orange accent for visibility.

## Contact form behavior

- The contact form currently performs a client-side action (alerts and clears fields). For production you should wire it to a backend API or third-party service (Formspree, Netlify Forms, or your own endpoint).

## Troubleshooting

- npm install fails with Tailwind version error

	If you see `No matching version found for tailwindcss@^4.2.1` when running `npm install`, update `package.json` to a valid Tailwind version (for example `"tailwindcss": "^3.4.7"`) and run `npm install` again. Example change in `package.json` (devDependencies):

	```json
	"devDependencies": {
		"tailwindcss": "^3.4.7",
		"postcss": "^8.4.23",
		"autoprefixer": "^10.4.14",
		"vite": "^5.4.21"
	}
	```

- Vite port in use: Vite will automatically try the next available port (check the terminal output for the URL).
- Hero appears washed out: the hero overlay sits on top of the page background when no image is present — add `public/assets/background-photo.jpeg` or use the existing `public/assets/hero.jpg` fallback.
- White text or low contrast: adjust `.hero-overlay` opacity in `src/index.css` or change text colors in components.

## Build / Preview

```bash
npm run build
npm run preview
```

This generates a production build and serves a local preview.

## Recent dev notes (what was changed)

- Hero: fallback to a bundled image + stronger overlay; Learn More CTA links to `/about`.
- Navbar: switched from orange to navy background (white nav links) to improve contrast.
- Footer: updated to use accent orange for better visibility.
- Colors: added `gold`, `peach`, `accent-orange` in `tailwind.config.js`.
- Contact: `ContactPanel.jsx` restored; `ContactForm.jsx` adjusted to span available width; `Contact.jsx` centers content.

## Next steps & suggestions

- Replace contact form alert with a real submission flow.
- Add small entrance animations and hover micro-interactions for a modern feel.
- Consider moving `Navbar` + `Footer` into a shared `Layout` component to reduce repetition.
- Add a simple e2e smoke test (Playwright or Cypress) to verify pages compile and render.

---

If you'd like, I can add deployment instructions for a specific host (Netlify, Vercel, GitHub Pages). Tell me which provider and I'll add that section.
# Divnoj Enterprises — Site starter

This repository contains a minimal Vite + React + Tailwind project structure for Divnoj Enterprises.

Project structure created:

divnoj-site/
├── public/
│   └── index.html            # includes Google Fonts link
│   └── images/               # hero.jpg, logo.png placeholders
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── HeroSection.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Services.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.cjs
├── package.json
└── README.md

How to run locally

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

Notes

- Replace the placeholder files in `public/images/` with real images (hero.jpg, logo.png).
- Tailwind CSS is configured. Run `npm run dev` after installing to see the site.

Using your logo and background image

- To use your logo file located at `/home/joyrose-kinuthia/Downloads/divno j logo.png`, copy it into the project as `public/images/logo.png` (rename if needed). Example:
 - To use your logo and background from your Downloads folder quickly, there's an npm helper script that copies files from your Downloads into the project's `public/assets` folder. From the project root run:

```bash
# copy the exact files from your Downloads into the project (runs the script)
npm run setup:assets
```

The script attempts to copy these two files:

- `$HOME/Downloads/divno j logo.png` -> `public/assets/logo.png`
- `$HOME/Downloads/background photo.jpeg` -> `public/assets/hero.jpg`

If the files are missing or have different names, copy them manually. Example:

```bash
cp "$HOME/Downloads/divno j logo.png" public/assets/logo.png
cp "$HOME/Downloads/background photo.jpeg" public/assets/hero.jpg
```

After copying, start the dev server:

```bash
npm install
npm run dev
```
