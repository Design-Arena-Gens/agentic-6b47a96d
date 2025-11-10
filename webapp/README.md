## AetherView — Anime Intelligence Hub

AetherView is a Next.js 16 application purpose-built for anime discovery. It blends season-aware rankings, story-rich summaries, and community-sourced pros and cons so viewers can decide what to watch in seconds—or deep dive like a critic.

### Core Features

- **Seasonal Spotlight Carousel** – Auto-rotating slideshow of the top 10 ongoing-season anime with quick stats and atmospheric hero art.
- **Top Charts & Trending Panel** – Dual-column layout showcasing the highest-rated posters and a ranked trending list based on view velocity.
- **Dual Summary Reviews** – Every title ships with a spoiler-safe short synopsis, an in-depth long breakdown, and bullet-point community sentiment.
- **Genre Intelligence** – Mood-first genre explorer with descriptive capsules and direct links into each review hub.
- **Dedicated Review Hubs** – Rich detail pages with metadata, related picks, and curated recommendation rails for binge planning.

### Tech Stack

- Next.js 16 App Router with TypeScript
- Tailwind CSS v4 via `@tailwindcss/postcss`
- Static generation for review pages plus remote image optimization

### Local Development

```bash
npm install
npm run dev
```

Browse the site at [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run lint
npm run build
npm start
```

### Deployment

The project is wired for Vercel. A successful production deployment is available at  
[`https://agentic-6b47a96d.vercel.app`](https://agentic-6b47a96d.vercel.app).
