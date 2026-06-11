# Gurukrupa Paint 🎨

Premium painting contractor website built with **Next.js 15**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide React**.

> Serving Mumbai, Thane & Maharashtra since 1992.

## Tech Stack

- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 with custom glassmorphism theme
- **Animation:** Framer Motion (scroll-triggered, spring animations)
- **Icons:** Lucide React
- **Font:** Poppins (Google Fonts)
- **Images:** Optimized with `sharp`, served from `/public/images/`

## Features

- Glassmorphism UI (backdrop-blur, translucent cards)
- Floating centered navbar with scroll-aware glass effect
- Animated mobile drawer menu
- Full-screen gallery lightbox
- Formspree contact form
- Google Maps embed
- WhatsApp floating button with pulse animation
- Fully static — optimized for fast CDN delivery

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, features, showcase, services, process, testimonials |
| `/about` | Company story, stats, values |
| `/services` | Service overview |
| `/services/interior` | Interior painting details |
| `/services/exterior` | Exterior painting details |
| `/services/house` | Full house painting |
| `/gallery` | Project gallery with lightbox |
| `/contact` | Contact form, map, details |

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm start
```

## Deployment

Deployed on Vercel. Connect your GitHub repo and Vercel will auto-deploy on push.

## License

Private — all rights reserved.
