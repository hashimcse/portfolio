# Hashim — Portfolio

A modern, dark-themed portfolio built with React, Vite, Tailwind CSS, Framer Motion, React Icons, and EmailJS.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL in your browser.

## Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/`. Deploy that folder to any static host (Vercel, Netlify, GitHub Pages, etc).

## Configure

- **Resume**: replace the `#` href on the "Download Resume" button in `src/components/Hero.jsx` with a link to your resume PDF (e.g. place it in `public/resume.pdf` and link to `/resume.pdf`).
- **Profile image**: swap the "H" placeholder in `src/components/Hero.jsx` for an `<img>` tag pointing at your photo.
- **Project images/links**: edit `src/data/projects.js` to add real GitHub/demo URLs and screenshots.
- **Contact info**: edit `src/data/misc.js` (`socials`) with your real email, LinkedIn, GitHub, and phone.
- **Contact form (EmailJS)**: create a free account at emailjs.com, then in `src/components/Contact.jsx` replace:
  - `YOUR_EMAILJS_SERVICE_ID`
  - `YOUR_EMAILJS_TEMPLATE_ID`
  - `YOUR_EMAILJS_PUBLIC_KEY`
- **GitHub stats**: the contribution graph and repo/star/follower counts in `src/components/GitHubStats.jsx` are placeholders. Wire them up to the GitHub REST API or a service like github-readme-stats if you want live data.
- **Certifications/education/experience**: edit `src/data/misc.js`.

## Tech stack

- React 18 + Vite
- Tailwind CSS (custom dark palette, glassmorphism utilities)
- Framer Motion (scroll reveals, hover/tap micro-interactions)
- React Icons
- EmailJS (`@emailjs/browser`) for the contact form

## Features

- Animated typing hero with a signature neural-network canvas background
- Dark/light mode toggle
- Sticky navbar, scroll progress bar, back-to-top button
- Scroll-reveal animations throughout
- Animated skill progress bars and stat counters
- Responsive project, certification, and timeline cards
- Accessible focus states and `prefers-reduced-motion` support
