# Future Portfolio Design

## Goal

Build a Next.js portfolio website for Ekkasit Songrungruang that presents him as a fullstack developer focused on crypto trading systems, AI-assisted tooling, and production web applications.

## Visual Direction

The approved style combines Trading Terminal Future and AI Lab / Quant Research. The site should use a dark future-terminal base, thin grid and chart-line details, cyan and green market accents, compact metric panels, glass-like cards, and clear technical typography. The result should feel like a serious trading workstation, not a generic cyber landing page.

## Content

The first screen introduces Ekkasit Songrungruang as a Fullstack Developer with almost 7 years of experience in web/app development across Chiang Mai and Bangkok. The featured project is Paper Trade, described as an AI-assisted BTC/USDT paper trading system.

Paper Trade has three modules:

1. Web application for viewing order results, graph visualization, and backtesting.
2. Telegram AI agent for daily research, trade planning, indicator selection, and backtesting.
3. Backend API for CRUD data with Supabase and Binance WebSocket integration.

The site should also include an architecture flow, professional experience from the CV, skills grouped by frontend/backend/data/AI, and contact links for email, phone, and GitHub.

## Technical Direction

Use Next.js App Router with TypeScript and Tailwind CSS. Use lucide-react for interface icons and use SVGL-style brand icons for technology logos. Keep the app static and deployable to Vercel. Use local structured data arrays for portfolio content.

## Acceptance Criteria

- The app renders a polished one-page portfolio at `/`.
- The visual theme clearly blends trading terminal and AI research lab aesthetics.
- The Paper Trade project is the main content focus and includes all three user-provided modules.
- Contact and CV-derived experience/skills are present.
- Icons use lucide-react for UI concepts and SVGL-style brand assets for technology logos.
- The app builds successfully with `npm run build`.
