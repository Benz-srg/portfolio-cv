"use client";

import Image from "next/image";
import {
  Activity,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  CandlestickChart,
  CheckCircle2,
  Code2,
  DatabaseZap,
  Lightbulb,
  Mail,
  MapPin,
  Network,
  Phone,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
} from "lucide-react";
import {
  Binance,
  Bitcoin,
  Chartjs,
  ClaudeAI,
  Gemini,
  GitHubDark,
  JavaScript,
  MongoDBDark,
  NestJS,
  Nextjs,
  Nuxt,
  OpenClaw,
  Portfolio,
  PostgreSQL,
  ReactDark,
  Redis,
  Supabase,
  Telegram,
  TypeScript,
  VercelDark,
  Vue,
} from "@ridemountainpig/svgl-react";
import { ProductShowcase } from "@/components/product-showcase";
import { HermesShowcase } from "@/components/hermes-showcase";
import { ThemeToggle } from "@/components/theme-toggle";
import { WorkflowSection } from "@/components/workflow-section";
import { LeftNav } from "@/components/left-nav";
import { NavLangToggle } from "@/components/nav-lang-toggle";
import { useLocale } from "@/components/locale-context";
import { siteContent } from "@/lib/content";

/* icons that stay constant across locales */
const paperTradeIcons = [CandlestickChart, Bot, DatabaseZap] as const;
const hermesIcons = [BrainCircuit, Bot, RadioTower] as const;
const sajuMeIcons = [TypeScript, Nextjs, Chartjs] as const;

const stack = [
  { name: "React", icon: ReactDark },
  { name: "Next.js", icon: Nextjs },
  { name: "TypeScript", icon: TypeScript },
  { name: "JavaScript", icon: JavaScript },
  { name: "Vue", icon: Vue },
  { name: "Nuxt", icon: Nuxt },
  { name: "Nest.js", icon: NestJS },
  { name: "Supabase", icon: Supabase },
  { name: "PostgreSQL", icon: PostgreSQL },
  { name: "MongoDB", icon: MongoDBDark },
  { name: "Redis", icon: Redis },
  { name: "Binance", icon: Binance },
  { name: "Bitcoin", icon: Bitcoin },
  { name: "Telegram", icon: Telegram },
  { name: "OpenClaw", icon: OpenClaw },
  { name: "MiniMax 2.5", icon: BrainCircuit },
  { name: "Claude", icon: ClaudeAI },
  { name: "Gemini", icon: Gemini },
  { name: "GitHub", icon: GitHubDark },
  { name: "Vercel", icon: VercelDark },
];

export default function Home() {
  const { locale } = useLocale();
  const c = siteContent[locale];

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--site-bg)] text-[var(--site-fg)] transition-colors duration-500">
      <div className="pointer-events-none fixed inset-0 bg-[var(--site-grid)] bg-[length:auto,auto,44px_44px,44px_44px] transition-colors duration-500" />
      <div className="showcase-beams pointer-events-none fixed inset-0" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="showcase-orbit pointer-events-none fixed" aria-hidden="true">
        <span />
        <span />
      </div>
      <div className="site-container relative mx-auto flex w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <nav className="site-nav flex items-center justify-between border-b border-white/10 pb-5">
          <a
            href="#top"
            className="site-brand flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200"
          >
            <span className="site-brand__mark grid size-9 place-items-center rounded border border-cyan-300/30 bg-cyan-300/10">
              <Terminal size={18} />
            </span>
            <span className="site-brand__text">{c.nav.brand}</span>
          </a>
          <div className="flex items-center gap-3">
            <NavLangToggle />
            <ThemeToggle />
          </div>
        </nav>
        <LeftNav />

        {/* ── Hero ───────────────────────────────────── */}
        <section
          id="top"
          className="site-section flex min-h-[calc(100vh-92px)] flex-col justify-center gap-8 py-14 lg:py-16"
        >
          {/* 2-col row: intro + Paper Trade panel */}
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
            <div>
              <div className="hero-kicker mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-emerald-200">
                <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
                {c.hero.badge}
              </div>
              <h1 className="hero-title max-w-4xl text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl">
                {c.hero.name}
              </h1>
              <p className="hero-copy mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                {c.hero.copy}
              </p>
              <div className="hero-actions mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#paper-trade"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded border border-cyan-300/40 bg-cyan-300 px-5 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.28)] transition hover:bg-cyan-200"
                >
                  {c.hero.cta1} <ArrowUpRight size={17} />
                </a>
                <a
                  href="https://github.com/Benz-srg/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded border border-white/15 bg-white/5 px-5 text-sm font-semibold text-white transition hover:border-emerald-300/40 hover:text-emerald-200"
                >
                  <Code2 size={17} /> {c.hero.cta2}
                </a>
              </div>
            </div>

            <div className="hero-panel relative">
              <div className="relative border border-white/10 bg-slate-950/70 p-4 shadow-2xl shadow-cyan-950/30 backdrop-blur">
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3 text-xs uppercase tracking-[0.2em] text-slate-400">
                  <span>{c.hero.panelLabel}</span>
                  <span className="live-status text-emerald-300">
                    <span aria-hidden="true" />
                    {c.hero.panelStatus}
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {c.metrics.map(([label, value]) => (
                    <div key={label} className="border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
                      <p className="mt-2 text-xl font-semibold text-white">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 h-52 border border-cyan-300/15 bg-[linear-gradient(180deg,rgba(34,211,238,0.08),rgba(15,23,42,0)),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[length:auto,38px_38px,38px_38px] p-4">
                  <div className="flex h-full items-end gap-2">
                    {[42, 64, 48, 75, 58, 92, 70, 86, 63, 96, 88, 104].map((height, index) => (
                      <span
                        key={height + index}
                        className="chart-bar flex-1 rounded-t-sm bg-gradient-to-t from-emerald-400/20 to-cyan-300"
                        style={{ height }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Full-width Skill Split widget ── */}
          <div className="skill-widget-full border border-white/10 bg-slate-950/60 p-5 backdrop-blur">
            <p className="skill-widget__title mb-4">{c.skillPie.title}</p>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">

              {/* Left: Pie + legend + stats */}
              <div className="skill-pie-wrap shrink-0">
                <div className="skill-pie" aria-hidden="true">
                  <div className="skill-pie__ring" />
                  <div className="skill-pie__hole">
                    <span className="skill-pie__center-fe">60%</span>
                    <span className="skill-pie__sep">/</span>
                    <span className="skill-pie__center-be">40%</span>
                  </div>
                </div>
                <div className="skill-pie__legend">
                  <div className="skill-legend-item">
                    <span className="skill-legend-dot skill-legend-dot--fe" />
                    <span>{c.skillPie.frontend}</span>
                    <strong>60%</strong>
                  </div>
                  <div className="skill-legend-item">
                    <span className="skill-legend-dot skill-legend-dot--be" />
                    <span>{c.skillPie.backend}</span>
                    <strong>40%</strong>
                  </div>
                </div>
                {/* Stats */}
                <div className="skill-stats-row">
                  <div className="skill-stat">
                    <span className="skill-stat-num">7</span>
                    <span className="skill-stat-unit">yrs exp</span>
                  </div>
                  <div className="skill-stat">
                    <span className="skill-stat-num">50+</span>
                    <span className="skill-stat-unit">projects</span>
                  </div>
                </div>
              </div>

              {/* vertical divider */}
              <div className="hidden w-px self-stretch shrink-0 bg-white/10 sm:block" />

              {/* Right: Progress bars + Vibe coding */}
              <div className="skill-right-panel">
                {/* Progress bars */}
                <div className="skill-bar-section">
                  <div className="skill-bar-item">
                    <div className="skill-bar-label">
                      <span>{c.skillPie.frontend}</span>
                      <strong>60%</strong>
                    </div>
                    <div className="skill-bar-track">
                      <div className="skill-bar-fill skill-bar-fill--fe" />
                    </div>
                    <div className="skill-stack-tags">
                      {["Next.js", "React", "TypeScript", "Tailwind"].map(t => (
                        <span key={t} className="skill-stack-tag skill-stack-tag--fe">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="skill-bar-item">
                    <div className="skill-bar-label">
                      <span>{c.skillPie.backend}</span>
                      <strong>40%</strong>
                    </div>
                    <div className="skill-bar-track">
                      <div className="skill-bar-fill skill-bar-fill--be" />
                    </div>
                    <div className="skill-stack-tags">
                      {["Node.js", "PostgreSQL", "Supabase", "Python"].map(t => (
                        <span key={t} className="skill-stack-tag skill-stack-tag--be">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Vibe coding */}
                <div className="vibe-coding skill-vibe-sep">
                  <p className="vibe-coding__title">{c.skillPie.vibeTitle}</p>
                  <div className="vibe-coding__group">
                    <span className="vibe-coding__label">{c.skillPie.currentLabel}</span>
                    <div className="vibe-coding__chips">
                      {c.skillPie.currentTools.map((tool) => (
                        <span key={tool} className="vibe-chip vibe-chip--active">{tool}</span>
                      ))}
                    </div>
                  </div>
                  <div className="vibe-coding__group">
                    <span className="vibe-coding__label">{c.skillPie.pastLabel}</span>
                    <div className="vibe-coding__chips">
                      {c.skillPie.pastTools.map((tool) => (
                        <span key={tool} className="vibe-chip">{tool}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Project Case Studies ───────────────────── */}
        <section id="projects" className="site-section project-cases py-16">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                <Sparkles size={16} /> {c.projectCases.eyebrow}
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white sm:text-5xl">
                {c.projectCases.title}
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-slate-400">
                {c.projectCases.copy}
              </p>
            </div>
          </div>

          <div className="project-case-list">
            {c.projectCases.items.map((project) => (
              <article key={project.title} className="project-case-card">
                <div className="project-case-card__head">
                  <span className="project-case-card__index">{project.index}</span>
                  <div>
                    <div className="project-case-card__meta">
                      <span>{project.tag}</span>
                      <span className="project-case-card__ai">
                        <Sparkles size={13} />
                        {c.projectCases.builtBadge}
                      </span>
                    </div>
                    <h3>{project.title}</h3>
                  </div>
                </div>

                <p className="project-case-card__premise">
                  <strong>Premise.</strong> {project.premise}
                </p>

                <div className="project-case-card__grid">
                  <div className="project-case-col">
                    <p className="project-case-col__label">
                      <Lightbulb size={14} /> {c.projectCases.columns.built}
                    </p>
                    <ul>
                      {project.built.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-case-col">
                    <p className="project-case-col__label">
                      <BrainCircuit size={14} /> {c.projectCases.columns.ai}
                    </p>
                    <ul>
                      {project.ai.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-case-col">
                    <p className="project-case-col__label">
                      <ShieldCheck size={14} /> {c.projectCases.columns.proof}
                    </p>
                    <p className="project-case-card__proof">{project.proof}</p>
                    <div className="project-case-stack">
                      {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="project-case-card__footer">
                  <span>
                    <CheckCircle2 size={15} />
                    AI-assisted build verified
                  </span>
                  <div className="project-case-card__actions">
                    <a href={project.githubHref} target="_blank" rel="noreferrer">
                      <GitHubDark className="size-4" /> GitHub
                    </a>
                    <a href={project.demoHref} target="_blank" rel="noreferrer">
                      Demo <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Paper Trade ────────────────────────────── */}
        <section id="paper-trade" className="site-section py-16">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                <Activity size={16} /> {c.paperTrade.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
                {c.paperTrade.title}
              </h2>
            </div>
            <a
              href="https://frontend-sigma-murex-aakt3b4x1w.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded border border-white/15 bg-white/5 px-4 text-sm font-medium text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200"
            >
              {c.paperTrade.liveRef} <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {c.paperTrade.modules.map((module, i) => {
              const Icon = paperTradeIcons[i];
              return (
                <article
                  key={module.title}
                  className="motion-card group border border-white/10 bg-white/[0.035] p-6 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.06]"
                >
                  <div className="module-card__head mb-8 flex items-center justify-between">
                    <span className="module-card__icon grid size-12 place-items-center rounded border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                      <Icon size={22} />
                    </span>
                    <span className="module-card__signal text-xs uppercase tracking-[0.2em] text-emerald-300">
                      {module.signal}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                  <p className="mt-4 leading-7 text-slate-400">{module.body}</p>
                </article>
              );
            })}
          </div>

          <div className="dashboard-showcase mt-6 border border-white/10 bg-slate-950/70 p-4 backdrop-blur lg:p-6">
            <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                  <CandlestickChart size={16} /> {c.paperTrade.dashboard.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white sm:text-4xl">
                  {c.paperTrade.dashboard.title}
                </h3>
              </div>
            </div>
            <ProductShowcase />
          </div>

          <div className="telegram-showcase mt-6 grid gap-6 border border-white/10 bg-slate-950/70 p-4 backdrop-blur lg:grid-cols-[0.9fr_1.1fr] lg:p-6">
            <div className="research-terminal">
              <div className="research-terminal__bar">
                <span /><span /><span />
                <p>btc/usdt-research.agent</p>
              </div>
              <div className="research-terminal__body">
                {c.paperTrade.telegram.terminal.map(([label, value]) => (
                  <div className="research-row" key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>
            <div className="research-copy flex flex-col justify-center p-2 sm:p-4">
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">
                <Telegram className="size-5" /> {c.paperTrade.telegram.eyebrow}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white sm:text-4xl">
                {c.paperTrade.telegram.title}
              </h3>
              <p className="mt-5 leading-7 text-slate-400">
                {c.paperTrade.telegram.body}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {c.paperTrade.telegram.stats.map(([label, value]) => (
                  <div key={label} className="research-stat border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
                    <p className="mt-2 font-semibold text-slate-100">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── System Flow ────────────────────────────── */}
        <section className="site-section grid gap-6 py-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">
              <Workflow size={16} /> {c.systemFlow.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              {c.systemFlow.title}
            </h2>
            <p className="mt-5 leading-7 text-slate-400">{c.systemFlow.body}</p>
          </div>
          <div className="grid gap-3">
            {c.systemFlow.steps.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 border border-white/10 bg-slate-950/70 p-4"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded border border-emerald-300/25 bg-emerald-300/10 font-mono text-sm text-emerald-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-medium text-slate-100">{item}</p>
                <Network className="ml-auto text-cyan-200" size={18} />
              </div>
            ))}
          </div>
        </section>

        {/* ── Hermes AI ──────────────────────────────── */}
        <section id="hermes" className="site-section py-16">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">
                <Bot size={16} /> {c.hermes.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
                {c.hermes.title}
              </h2>
            </div>
            <div className="hosting-badge hosting-badge--local">
              <span className="hosting-badge__dot" aria-hidden="true" />
              <Terminal size={13} />
              {c.hermes.hosting}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {c.hermes.modules.map((m, i) => {
              const Icon = hermesIcons[i];
              const borderCls =
                m.color === "violet"
                  ? "hover:border-violet-300/35 hover:bg-violet-300/[0.06]"
                  : m.color === "cyan"
                    ? "hover:border-cyan-300/35 hover:bg-cyan-300/[0.06]"
                    : "hover:border-emerald-300/35 hover:bg-emerald-300/[0.06]";
              const iconCls =
                m.color === "violet"
                  ? "border-violet-300/20 bg-violet-300/10 text-violet-200"
                  : m.color === "cyan"
                    ? "border-cyan-300/20 bg-cyan-300/10 text-cyan-200"
                    : "border-emerald-300/20 bg-emerald-300/10 text-emerald-200";
              const signalCls =
                m.color === "violet"
                  ? "text-violet-300"
                  : m.color === "cyan"
                    ? "text-emerald-300"
                    : "text-cyan-300";

              return (
                <article
                  key={m.title}
                  className={`motion-card group border border-white/10 bg-white/[0.035] p-6 transition ${borderCls}`}
                >
                  <div className="module-card__head mb-8 flex items-center justify-between">
                    <span className={`module-card__icon grid size-12 place-items-center rounded border ${iconCls}`}>
                      <Icon size={22} />
                    </span>
                    <span className={`module-card__signal text-xs uppercase tracking-[0.2em] ${signalCls}`}>
                      {m.signal}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{m.title}</h3>
                  <p className="mt-4 leading-7 text-slate-400">{m.body}</p>
                </article>
              );
            })}
          </div>

          <div className="hermes-flow mt-6">
            {c.hermes.flow.map(([node, desc], i, arr) => (
              <div key={node} className="hermes-flow__step">
                <div className="hermes-flow__box">
                  <span>{node}</span>
                  <p>{desc}</p>
                </div>
                {i < arr.length - 1 && (
                  <svg className="hermes-flow__arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            ))}
          </div>

          <div className="dashboard-showcase mt-6 border border-white/10 bg-slate-950/70 p-4 backdrop-blur lg:p-6">
            <div className="mb-5">
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">
                <Telegram className="size-4" /> {c.hermes.showcaseEyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white sm:text-4xl">
                {c.hermes.showcaseTitle}
              </h3>
            </div>
            <HermesShowcase />
          </div>
        </section>

        {/* ── td-bot Workflow ─────────────────────────── */}
        <WorkflowSection />

        {/* ── Saju Me ─────────────────────────────────── */}
        <section id="saju-me" className="site-section py-16">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">
                <Portfolio className="size-4" aria-hidden="true" /> {c.sajuMe.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
                {c.sajuMe.title}
              </h2>
            </div>
            <a
              href="https://github.com/Benz-srg/saju-me"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded border border-white/15 bg-white/5 px-4 text-sm font-medium text-slate-200 transition hover:border-amber-300/40 hover:text-amber-200"
            >
              <GitHubDark className="size-4" /> {c.sajuMe.repoLabel}
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border border-white/10 bg-slate-950/70 p-5 backdrop-blur">
              <div className="mb-5 overflow-hidden border border-amber-300/15 bg-white">
                <Image
                  src="/saju-me-og.png"
                  alt="Saju Me project brand image"
                  width={1536}
                  height={1024}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-amber-200">
                <span className="grid size-9 place-items-center rounded border border-amber-300/25 bg-amber-300/10">
                  <TypeScript className="size-5" aria-hidden="true" />
                </span>
                {c.sajuMe.hosting}
              </div>
              <p className="leading-8 text-slate-300">{c.sajuMe.body}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {c.sajuMe.stats.map(([label, value]) => (
                  <div key={label} className="border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
                    <p className="mt-2 font-semibold text-slate-100">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {c.sajuMe.modules.map((module, i) => {
                const Icon = sajuMeIcons[i];
                return (
                  <article
                    key={module.title}
                    className="group border border-white/10 bg-white/[0.035] p-6 transition hover:border-amber-300/35 hover:bg-amber-300/[0.06]"
                  >
                    <div className="module-card__head mb-6 flex items-center justify-between">
                      <span className="module-card__icon grid size-12 place-items-center rounded border border-amber-300/20 bg-amber-300/10 text-amber-200">
                        <Icon className="size-6" aria-hidden="true" />
                      </span>
                      <span className="module-card__signal text-xs uppercase tracking-[0.2em] text-emerald-300">
                        {module.signal}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                    <p className="mt-4 leading-7 text-slate-400">{module.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Experience ─────────────────────────────── */}
        <section id="experience" className="site-section grid gap-8 py-16 lg:grid-cols-2">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
              <BrainCircuit size={16} /> {c.experience.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              {c.experience.title}
            </h2>
          </div>
          <div className="space-y-4">
            {c.experience.items.map((item) => (
              <article
                key={`${item.company}-${item.period}`}
                className="reveal-left reveal-stagger border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <div>
                    <h3 className="font-semibold text-white">{item.role}</h3>
                    <p className="text-sm text-cyan-200">{item.company}</p>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">
                    {item.period}
                  </p>
                </div>
                <p className="mt-4 leading-7 text-slate-400">{item.detail}</p>
                {item.stack && (
                  <div className="exp-stack">
                    {item.stack.map(({ name, Icon }) => (
                      <span key={name} className="exp-stack__chip" title={name}>
                        <Icon className="size-4" aria-hidden="true" />
                        <span>{name}</span>
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* ── Stack Signals ───────────────────────────── */}
        <section id="stack" className="site-section py-16">
          <div className="mb-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">
            <Sparkles size={16} /> {c.stack.eyebrow}
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {stack.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.name}
                  className="reveal-pop reveal-stagger flex min-h-24 flex-col justify-between border border-white/10 bg-white/[0.035] p-4"
                >
                  <Icon className="size-8" aria-hidden="true" />
                  <span className="mt-4 text-sm font-medium text-slate-200">{tool.name}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Contact ─────────────────────────────────── */}
        <section
          id="contact"
          className="site-section mb-10 border border-cyan-300/20 bg-cyan-300/[0.06] p-6 sm:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                <RadioTower size={16} /> {c.contact.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                {c.contact.title}
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                className="reveal-scale reveal-stagger flex items-center gap-3 border border-white/10 bg-slate-950/50 p-4 text-slate-200 transition hover:border-cyan-300/35 hover:text-cyan-200"
                href="mailto:Ekkasit.srg@gmail.com"
              >
                <Mail size={18} /> Ekkasit.srg@gmail.com
              </a>
              <a
                className="reveal-scale reveal-stagger flex items-center gap-3 border border-white/10 bg-slate-950/50 p-4 text-slate-200 transition hover:border-cyan-300/35 hover:text-cyan-200"
                href="tel:+66614498826"
              >
                <Phone size={18} /> 061-4498826
              </a>
              <a
                className="reveal-scale reveal-stagger flex items-center gap-3 border border-white/10 bg-slate-950/50 p-4 text-slate-200 transition hover:border-cyan-300/35 hover:text-cyan-200"
                href="https://github.com/Benz-srg/"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={18} /> github.com/Benz-srg
              </a>
              <div className="reveal-scale reveal-stagger flex items-center gap-3 border border-white/10 bg-slate-950/50 p-4 text-slate-200">
                <MapPin size={18} /> Chiang Mai / Bangkok
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
