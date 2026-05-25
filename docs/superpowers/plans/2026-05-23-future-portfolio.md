# Future Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a futuristic Next.js portfolio for Ekkasit Songrungruang with Paper Trade as the featured case study.

**Architecture:** Create a static App Router site with one primary page, global styling, local data arrays, lucide UI icons, and SVGL React brand logos. Keep the implementation compact because the workspace starts empty.

**Tech Stack:** Next.js, TypeScript, Tailwind CSS, lucide-react, @ridemountainpig/svgl-react.

---

### Task 1: Scaffold App

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `app/globals.css`

- [ ] Use `npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir false --import-alias "@/*"` to create the base app.
- [ ] Install `lucide-react` and `@ridemountainpig/svgl-react`.
- [ ] Replace the starter page with the portfolio page.

### Task 2: Build Portfolio Page

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

- [ ] Add metadata for Ekkasit's portfolio in `app/layout.tsx`.
- [ ] Add structured data arrays for Paper Trade modules, architecture steps, work experience, and skills.
- [ ] Use lucide icons for dashboard, bot, database, websocket, research, and contact actions.
- [ ] Use SVGL React for brand-logo style technology badges where compatible.
- [ ] Build sections: navigation, hero, Paper Trade overview, module grid, architecture flow, experience, skills, and contact.
- [ ] Style with a dark terminal/research-lab theme, cyan/green accents, responsive grids, and mobile-safe spacing.

### Task 3: Verify

**Files:**
- No new files.

- [ ] Run `npm run build`.
- [ ] Start the local dev server.
- [ ] Inspect the page in the browser at the local URL.
- [ ] Fix any build, layout, or readability issues found during verification.
