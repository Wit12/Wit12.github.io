# Bezawit — Portfolio (React + Tailwind CSS)

A single-page developer portfolio built with React, Vite, and Tailwind CSS,
matching the pink/violet neon "Code · Create · Inspire" design.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production files are output to `dist/`.

## Project structure

```
src/
  components/
    Navbar.jsx      sticky nav with scroll-based active link highlighting
    Hero.jsx         intro section with the illustrated desk scene
    DeskScene.jsx     reusable CSS-illustrated monitor/desk graphic
    About.jsx        bio + quick-fact cards
    Services.jsx     4 service cards
    Projects.jsx      filterable project grid (All / Web Apps / UI/UX / Frontend)
    Skills.jsx        skill chips + animated level bars
    Contact.jsx        contact info + working (client-side) contact form
    Footer.jsx
  App.jsx
  index.css          Tailwind directives + shared component classes
tailwind.config.js    custom color palette (hot pink / violet / dark backgrounds)
```

## Customizing

- **Colors**: edit `tailwind.config.js` → `theme.extend.colors`.
- **Content**: each section's text/data lives at the top of its component file
  (e.g. `services`, `projects`, `levels` arrays) — edit those arrays directly.
- **Contact form**: `Contact.jsx` currently just shows a "sent" confirmation
  client-side. Wire it up to a real backend or a service like Formspree /
  EmailJS to actually deliver messages.
- **Hero background photo**: `public/images/hero-bg.jpg` is used as the
  Home section's full-bleed background (see `Hero.jsx`). Replace this file
  (keep the same filename, or update the path in `Hero.jsx`) to swap in a
  different photo.
- **Other sections**: About/Services/Projects/Skills/Contact still use the
  CSS-illustrated desk scene (`DeskScene.jsx` / `RoomBackground.jsx`) instead
  of a photo. Swap those components for an `<img>`/background-image the same
  way if you'd like a consistent photo across every page.
- **CV download / social links**: update the `href="#"` placeholders in
  `Hero.jsx` and `Contact.jsx`.
