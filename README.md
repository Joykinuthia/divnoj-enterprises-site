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
