"use client";

import {
  useCallback, useEffect, useRef, useState,
  type ReactNode, type CSSProperties,
} from "react";
import {
  ArrowUpRight, Briefcase, CircleCheck, Cloud,
  Layers, Mail, MapPin, Paperclip, Play, Radio,
  ShieldCheck, Sparkles, TestTubeDiagonal, Wrench, Zap,
} from "lucide-react";
import { createPortal } from "react-dom";
import {
  Nextjs, NestJS, TypeScript, Supabase, Binance,
  ClaudeAI, OpenClaw, CodexLight, Telegram,
  ReactLight, TailwindCSS, Vue, Nuxt,
  Python, PostgreSQL, MongoDBLight, Redis, Nodejs,
  AmazonWebServicesLight, VercelLight,
  Laravel, PhpLight, WordPress, Vuetify, LinkedIn,
  RustLight,
} from "@ridemountainpig/svgl-react";
import "./nimbus.css";

/* ── GitHub inline SVG (reliable black octocat) ─────────────────── */
function GitHubIcon({ size = 16, color = "currentColor", style }: { size?: number; color?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color} style={{ flexShrink: 0, ...style }} aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

/* ── Icon shim (maps string names → lucide-react) ────────────────── */
const ICON_MAP = {
  "arrow-up-right": ArrowUpRight,
  briefcase: Briefcase,
  "circle-check": CircleCheck,
  cloud: Cloud,
  layers: Layers,
  mail: Mail,
  "map-pin": MapPin,
  play: Play,
  radio: Radio,
  sparkles: Sparkles,
  wrench: Wrench,
  zap: Zap,
} as const;

type IconName = keyof typeof ICON_MAP | "github";

function Icon({
  name, size = 20, color, strokeWidth = 2, style, githubDark,
}: {
  name: IconName; size?: number; color?: string; strokeWidth?: number; style?: CSSProperties; githubDark?: boolean;
}) {
  if (name === "github") {
    return <GitHubIcon size={size} color={githubDark ? "#1e1b4b" : "white"} style={style} />;
  }
  const Ic = ICON_MAP[name as keyof typeof ICON_MAP];
  if (!Ic) return null;
  return (
    <Ic
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      style={{ display: "inline-flex", flexShrink: 0, ...style }}
      aria-hidden
    />
  );
}

/* ── Stack logo map ──────────────────────────────────────────────── */
type SvglComp = React.ComponentType<{ style?: CSSProperties }>;

function StackLucideIcon({
  icon: LucideIcon,
  color = "#4f46e5",
  style,
}: {
  icon: React.ComponentType<{
    color?: string;
    size?: number;
    strokeWidth?: number;
    style?: CSSProperties;
  }>;
  color?: string;
  style?: CSSProperties;
}) {
  return (
    <LucideIcon
      color={color}
      size={14}
      strokeWidth={2.4}
      style={{ flexShrink: 0, ...style }}
    />
  );
}

function TechBadgeIcon({
  label,
  style,
}: {
  label: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{ flexShrink: 0, ...style }}
      aria-hidden
    >
      <rect width="24" height="24" rx="7" fill="#111827" />
      <path
        d="M6.5 15.8 12 5.4l5.5 10.4H6.5Z"
        fill="#38bdf8"
        opacity="0.22"
      />
      <path
        d="M7.2 16.1h9.6M8.9 13.2h6.2M10.4 10.4h3.2"
        stroke="#f8fafc"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <text
        x="12"
        y="20.6"
        textAnchor="middle"
        fill="#f97316"
        fontSize="5"
        fontFamily="SFMono-Regular, Menlo, Consolas, monospace"
        fontWeight="800"
      >
        {label}
      </text>
    </svg>
  );
}

const TokioIcon = ({ style }: { style?: CSSProperties }) => (
  <TechBadgeIcon label="TK" style={style} />
);

const AxumIcon = ({ style }: { style?: CSSProperties }) => (
  <TechBadgeIcon label="AX" style={style} />
);

const WasmIcon = ({ style }: { style?: CSSProperties }) => (
  <TechBadgeIcon label="WA" style={style} />
);

const SerdeIcon = ({ style }: { style?: CSSProperties }) => (
  <TechBadgeIcon label="SE" style={style} />
);

const PaperclipAiIcon = ({ style }: { style?: CSSProperties }) => (
  <StackLucideIcon icon={Paperclip} color="#64748b" style={style} />
);

const TddIcon = ({ style }: { style?: CSSProperties }) => (
  <StackLucideIcon icon={TestTubeDiagonal} color="#0ea5e9" style={style} />
);

const QaIcon = ({ style }: { style?: CSSProperties }) => (
  <StackLucideIcon icon={ShieldCheck} color="#10b981" style={style} />
);

const STACK_LOGO: Record<string, SvglComp> = {
  "Next.js":      Nextjs,
  "NestJS":       NestJS,
  "TypeScript":   TypeScript,
  "Supabase":     Supabase,
  "Binance WS":   Binance,
  "Binance":      Binance,
  "Claude Code":  ClaudeAI,
  "Claude Code CLI": ClaudeAI,
  "OpenClaw":     OpenClaw,
  "Codex":        CodexLight,
  "Telegram":     Telegram,
  "Paperclip AI": PaperclipAiIcon,
  "TDD":          TddIcon,
  "QA":           QaIcon,
  "React 19":     ReactLight,
  "React":        ReactLight,
  "Tailwind CSS": TailwindCSS,
  "Vue":          Vue,
  "Vue 3":        Vue,
  "Nuxt":         Nuxt,
  "Nuxt.js":      Nuxt,
  "Python":       Python,
  "PostgreSQL":   PostgreSQL,
  "MongoDB":      MongoDBLight,
  "Redis":        Redis,
  "Node.js":      Nodejs,
  "AWS":          AmazonWebServicesLight,
  "Vercel":       VercelLight,
  "Laravel":      Laravel,
  "PHP":          PhpLight,
  "WordPress":    WordPress,
  "Vuetify":      Vuetify,
  "Rust":         RustLight,
  "Tokio":        TokioIcon,
  "Axum":         AxumIcon,
  "WASM":         WasmIcon,
  "Serde":        SerdeIcon,
};

function StackChip({
  label, className = "nb-chip", style,
}: {
  label: string; className?: string; style?: CSSProperties;
}) {
  const Logo = STACK_LOGO[label] as SvglComp | undefined;
  return (
    <span className={className} style={style}>
      {Logo && <Logo style={{ width: 14, height: 14, flexShrink: 0 }} />}
      {label}
    </span>
  );
}

/* ── PORTFOLIO data ──────────────────────────────────────────────── */
const PORTFOLIO = {
  name: "Ekkasit Songrungruang",
  shortName: "Ekkasit · SRG",
  role: "Full Stack Developer · AI-Driven Builder",
  location: "Thailand · Remote",
  intro:
    "~7 years building trading interfaces, e-commerce platforms and integration-heavy APIs. Production fluency in Next.js, NestJS, TypeScript and Python — amplified by daily use of Claude Code, Codex and MCP-style tooling for faster, review-quality delivery.",
  email: "Ekkasit.srg@gmail.com",
  github: "github.com/Benz-srg",
  linkedin: "linkedin.com/in/ekkasit-songrungruang-72bb44231",

  work: [
    {
      index: "01",
      name: "Nexus AI Paper Trade",
      tag: "AI-driven paper trading system · BTC/USDT · Next.js dashboard",
      summary:
        "An AI-driven paper trading system: a Next.js frontend streams BTC/USDT views while the td-bot AI service collects news, analyzes indicators, generates TP/SL plans, backtests strategies, and feeds the live dashboard.",
      stack: ["Next.js", "TypeScript", "Supabase", "OpenClaw"],
      image: "/paper-trade-stats-light.png",
      href: "https://frontend-sigma-murex-aakt3b4x1w.vercel.app/",
      linkLabel: "Live app",
      repoLinks: [
        { label: "Frontend", href: "https://github.com/Benz-srg/paper-trade" },
        { label: "AI bot", href: "https://github.com/Benz-srg/td-bot" },
      ],
    },
    {
      index: "02",
      name: "Hermes AI",
      tag: "Telegram-native project manager",
      summary:
        "Turns loose chat requests into scoped tickets — Definition of Done, execution tracking, QA review, and reports — all inside Telegram.",
      stack: ["Telegram", "Paperclip AI", "Codex", "TDD", "QA"],
      image: "/hermes-projects.png",
      href: "",
      linkLabel: "",
      hasDemo: "/hermes-workflow.mp4",
    },
    {
      index: "03",
      name: "rust-plugin-builder",
      tag: "Rust-native plugin runtime · WASM sandbox · workflow platform",
      summary:
        "A next-generation plugin operating system built in Rust: domain-first workspace crates, plugin SDK contracts, runtime lifecycle, capability permissions, WASM host traits, event bus, workflow trigger hooks, scheduler/API/devtools stubs, and a sample plugin layout.",
      stack: ["Rust", "Tokio", "Axum", "WASM", "Serde"],
      image: "/rust-plugin-builder-og.svg",
      href: "https://github.com/Benz-srg/rust-plugin-builder",
      linkLabel: "GitHub",
    },
    {
      index: "04",
      name: "The Byte Times",
      tag: "AI news daily · Next.js 16 · skills.sh leaderboard · ISR",
      summary:
        "A pixel-aesthetic daily AI news board with live theme switching, a skills.sh top-10 leaderboard (server-parsed RSC payload with daily ISR), and the full design-to-code pipeline built with Claude Code.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/byte-times-og.png",
      href: "https://byte-times.vercel.app",
      githubHref: "https://github.com/Benz-srg/byte-times",
      linkLabel: "Live demo",
    },
  ],

  experience: [
    {
      period: "Apr 2025 — Present",
      role: "Full Stack Developer",
      company: "Yellow Capital Co., Ltd.",
      detail: "Built P2P trading, spot views, order placement and position management. Engineered React data flows with hooks for trading-state caching. Introduced Claude Code CLI and Gemini CLI for AI-assisted refactoring and daily delivery.",
      stack: ["Next.js", "React", "TypeScript", "Claude Code"],
    },
    {
      period: "Apr 2024 — Apr 2025",
      role: "Frontend Developer",
      company: "Bitnance Co., Ltd.",
      detail: "Delivered P2P and spot trading interfaces — order placement and position management on responsive web. Improved maintainability through React hook-based state and data-caching patterns.",
      stack: ["React", "TypeScript", "Binance WS", "Tailwind CSS"],
    },
    {
      period: "Feb 2022 — Apr 2024",
      role: "Full Stack Developer",
      company: "ndoandco Co., Ltd.",
      detail: "Built Storemate CMS e-commerce interfaces and backend APIs via Nuxt.js admin. Delivered NestJS + TypeScript microservices for integration-heavy workflows. Shipped reusable screens with BootstrapVue, Vuetify and Ant Design.",
      stack: ["NestJS", "Nuxt.js", "TypeScript"],
    },
    {
      period: "Aug 2021 — Feb 2022",
      role: "Junior Frontend Developer",
      company: "Fillgoods Co., Ltd.",
      detail: "Built Vue 3 + TypeScript web application screens for internal operations. Created internal frontend library components that improved consistency and reduced repeated UI work.",
      stack: ["Vue 3", "TypeScript"],
    },
    {
      period: "Nov 2020 — Aug 2021",
      role: "Junior Full Stack Developer",
      company: "Tectony Co., Ltd.",
      detail: "Developed Next.js, Vuex and LIFF web apps for business workflows. Deployed on EC2 and Vercel using AWS and PM2. Maintained WordPress sites on Lightsail and Cloudflare with SEO and SSL.",
      stack: ["Next.js", "AWS", "Vercel"],
    },
    {
      period: "Aug 2019 — Oct 2020",
      role: "Backend Developer",
      company: "Harrots Company",
      detail: "Delivered internal projects in CodeIgniter and Laravel. Built and maintained WordPress content sites on Lightsail and Cloudflare with SEO and SSL setup.",
      stack: ["Laravel", "PHP", "WordPress"],
    },
  ],

  skills: [
    { cat: "Frontend",   items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
    { cat: "Backend",    items: ["NestJS", "Python", "Node.js", "PostgreSQL"] },
    { cat: "Data",       items: ["PostgreSQL", "MongoDB", "Redis"] },
    { cat: "AI tools",   items: ["Claude Code", "Codex", "OpenClaw"] },
  ],
};

/* ── CloudPuff ───────────────────────────────────────────────────── */
function CloudPuff({
  scale = 1, opacity = 0.85, tint,
}: {
  scale?: number; opacity?: number; tint?: string;
}) {
  const fill = tint ?? "#ffffff";
  return (
    <svg
      className="cloud"
      viewBox="0 0 240 100"
      width={240 * scale}
      height={100 * scale}
      style={{ opacity }}
    >
      <ellipse cx="60"  cy="60" rx="40" ry="28" fill={fill} />
      <ellipse cx="110" cy="50" rx="50" ry="34" fill={fill} />
      <ellipse cx="170" cy="58" rx="42" ry="28" fill={fill} />
      <ellipse cx="200" cy="68" rx="32" ry="22" fill={fill} />
      <ellipse cx="90"  cy="74" rx="38" ry="20" fill={fill} />
    </svg>
  );
}

function CloudWisp({ scale = 0.6, opacity = 0.55 }: { scale?: number; opacity?: number }) {
  return (
    <svg className="cloud" viewBox="0 0 240 60" width={240 * scale} height={60 * scale} style={{ opacity }}>
      <ellipse cx="60"  cy="34" rx="50" ry="14" fill="#ffffff" />
      <ellipse cx="160" cy="30" rx="70" ry="16" fill="#ffffff" />
    </svg>
  );
}

/* ── CloudBackdrop ───────────────────────────────────────────────── */
const CLOUDS = [
  { top: "12%", dir: "right", dur: 90,  scale: 1.1, opacity: 0.75, kind: "puff" },
  { top: "48%", dir: "left",  dur: 120, scale: 0.7, opacity: 0.45, kind: "wisp" },
  { top: "74%", dir: "right", dur: 110, scale: 0.85, opacity: 0.55, kind: "puff" },
] as const;

function CloudBackdrop() {
  return (
    <div className="nb-cloud-layer" aria-hidden>
      {CLOUDS.map((c, i) => (
        <div
          key={i}
          style={{
            position: "absolute", top: c.top, left: 0,
            animation: `nb-drift-${c.dir} ${c.dur}s linear infinite`,
            animationDelay: `${-i * 14}s`,
          }}
        >
          {c.kind === "puff"
            ? <CloudPuff scale={c.scale} opacity={c.opacity} />
            : <CloudWisp scale={c.scale} opacity={c.opacity} />}
        </div>
      ))}
      {Array.from({ length: 30 }).map((_, i) => {
        const x = (i * 53) % 100, y = (i * 37) % 60;
        const sz = 1.5 + (i % 4) * 0.6, delay = (i * 0.31) % 4;
        return (
          <span
            key={`s${i}`}
            className="nb-star"
            style={{ left: `${x}%`, top: `${y}%`, width: sz, height: sz, animationDelay: `${delay}s` }}
          />
        );
      })}
    </div>
  );
}

/* ── CloudCard ───────────────────────────────────────────────────── */
function CloudCard({
  children, hoverable, soft, strong, style, className = "", ...rest
}: {
  children?: ReactNode; hoverable?: boolean; soft?: boolean; strong?: boolean;
  style?: CSSProperties; className?: string; id?: string;
}) {
  let cls = "nb-card";
  if (hoverable) cls += " is-hoverable";
  if (soft)      cls += " is-soft";
  if (strong)    cls += " is-strong";
  if (className) cls += " " + className;
  return <div className={cls} style={style} {...rest}>{children}</div>;
}

/* ── Cumulus mascot ──────────────────────────────────────────────── */
function Cumulus({ size = 80 }: { size?: number }) {
  return (
    <svg viewBox="0 0 120 100" width={size} height={(size * 100) / 120} aria-label="Cumulus cloud mascot">
      <defs>
        <linearGradient id="cm-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e0f2fe" />
        </linearGradient>
        <radialGradient id="cm-blush" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#fbcfe8" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#fbcfe8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="35" cy="62" rx="28" ry="22" fill="url(#cm-body)" />
      <ellipse cx="65" cy="50" rx="36" ry="28" fill="url(#cm-body)" />
      <ellipse cx="92" cy="62" rx="22" ry="18" fill="url(#cm-body)" />
      <ellipse cx="60" cy="78" rx="40" ry="16" fill="url(#cm-body)" />
      <circle cx="50" cy="56" r="3.5" fill="#1e1b4b" />
      <circle cx="74" cy="56" r="3.5" fill="#1e1b4b" />
      <path d="M 54 66 Q 62 72 70 66" stroke="#1e1b4b" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <ellipse cx="44" cy="64" rx="6" ry="3.5" fill="url(#cm-blush)" />
      <ellipse cx="80" cy="64" rx="6" ry="3.5" fill="url(#cm-blush)" />
    </svg>
  );
}

/* ── Tweaks panel ────────────────────────────────────────────────── */
type TweakValues = { theme: string; palette: string; motionScale: number };

function useTweaks(defaults: TweakValues): [TweakValues, (k: keyof TweakValues, v: string | number) => void] {
  const [values, setValues] = useState<TweakValues>(defaults);
  const setTweak = useCallback((k: keyof TweakValues, v: string | number) => {
    setValues((prev) => ({ ...prev, [k]: v }));
  }, []);
  return [values, setTweak];
}

const TWEAK_STYLE = `
  .nb-twk{position:fixed;right:16px;bottom:16px;z-index:9999;width:240px;
    background:rgba(250,249,247,.92);color:#29261b;
    backdrop-filter:blur(24px) saturate(160%);-webkit-backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 12px 40px rgba(0,0,0,.18);font:11.5px/1.4 ui-sans-serif,system-ui,sans-serif;overflow:hidden}
  .nb-twk-hd{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;cursor:default;user-select:none}
  .nb-twk-hd b{font-size:12px;font-weight:600}
  .nb-twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:pointer;font-size:13px}
  .nb-twk-x:hover{background:rgba(0,0,0,.06)}
  .nb-twk-body{padding:4px 14px 14px;display:flex;flex-direction:column;gap:10px}
  .nb-twk-row{display:flex;flex-direction:column;gap:5px}
  .nb-twk-lbl{display:flex;justify-content:space-between;color:rgba(41,38,27,.72);font-weight:500}
  .nb-twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .nb-twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;background:rgba(0,0,0,.06);user-select:none}
  .nb-twk-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .nb-twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:pointer;padding:4px 6px}
  .nb-twk-slider{appearance:none;width:100%;height:4px;margin:6px 0;border-radius:999px;
    background:rgba(0,0,0,.12);outline:none}
  .nb-twk-slider::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;
    border-radius:50%;background:#fff;border:.5px solid rgba(0,0,0,.12);
    box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:pointer}
  @media (max-width:430px){
    .nb-twk{left:12px;right:12px;bottom:12px;width:auto;max-height:72dvh;overflow:auto}
    .nb-twk-body{padding:4px 12px 12px;gap:8px}
    .nb-twk-seg button{min-height:30px;padding:6px 4px;font-size:11px}
  }
`;

function TweakRadio({
  label, value, options, onChange,
}: {
  label: string; value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  const idx = Math.max(0, options.indexOf(value));
  const n = options.length;
  const trackRef = useRef<HTMLDivElement>(null);
  const segAt = (clientX: number) => {
    const r = trackRef.current!.getBoundingClientRect();
    const i = Math.floor(((clientX - r.left - 2) / (r.width - 4)) * n);
    return options[Math.max(0, Math.min(n - 1, i))];
  };
  return (
    <div className="nb-twk-row">
      <div className="nb-twk-lbl"><span>{label}</span></div>
      <div
        ref={trackRef}
        className="nb-twk-seg"
        onPointerDown={(e) => { const v = segAt(e.clientX); if (v !== value) onChange(v); }}
      >
        <div
          className="nb-twk-thumb"
          style={{ left: `calc(2px + ${idx}*(100% - 4px)/${n})`, width: `calc((100% - 4px)/${n})` }}
        />
        {options.map((o) => (
          <button key={o} type="button" onClick={() => onChange(o)}>{o}</button>
        ))}
      </div>
    </div>
  );
}

function TweaksPanel({ t, setTweak }: { t: TweakValues; setTweak: (k: keyof TweakValues, v: string | number) => void }) {
  const [open, setOpen] = useState(false);
  if (!open) return (
    <button
      className="nb-twk-trigger"
      onClick={() => setOpen(true)}
      style={{ position: "fixed", right: 16, bottom: 16, zIndex: 9999,
        background: "var(--brand-grad)", color: "white", border: "none",
        borderRadius: 999, padding: "10px 18px", cursor: "pointer", fontSize: 13, fontWeight: 600 }}
    >
      Tweaks
    </button>
  );
  return (
    <>
      <style>{TWEAK_STYLE}</style>
      <div className="nb-twk">
        <div className="nb-twk-hd">
          <b>Tweaks</b>
          <button className="nb-twk-x" onClick={() => setOpen(false)}>✕</button>
        </div>
        <div className="nb-twk-body">
          <div className="nb-twk-sect">Theme</div>
          <TweakRadio label="Day / Night" value={t.theme} options={["day", "night"]} onChange={(v) => setTweak("theme", v)} />
          <div className="nb-twk-sect">Palette</div>
          <TweakRadio label="Colour" value={t.palette} options={["skyblue", "lavender", "mint", "sunset"]} onChange={(v) => setTweak("palette", v)} />
          <div className="nb-twk-sect">Motion</div>
          <div className="nb-twk-row">
            <div className="nb-twk-lbl"><span>Animation speed</span><span>{t.motionScale}×</span></div>
            <input
              type="range" className="nb-twk-slider" min={0} max={1.5} step={0.1}
              value={t.motionScale}
              onChange={(e) => setTweak("motionScale", Number(e.target.value))}
            />
          </div>
        </div>
      </div>
    </>
  );
}

/* ── PNav ────────────────────────────────────────────────────────── */
function PNav() {
  return (
    <header className="nb-site-header" style={{
      position: "sticky", top: 0, zIndex: 20, padding: "16px 32px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
      background: "rgba(255,255,255,0.35)", borderBottom: "1px solid var(--cloud-edge)",
    }}>
      <a className="nb-site-brand" href="#top" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <span className="nb-site-brand-text" style={{
          width: 36, height: 36, background: "var(--brand-grad)", borderRadius: 12,
          display: "grid", placeItems: "center", boxShadow: "var(--cloud-shadow-soft)",
        }}>
          <Icon name="cloud" size={18} color="white" />
        </span>
        <span style={{
          fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700,
          color: "var(--text-strong)", letterSpacing: "-0.02em",
        }}>
          {PORTFOLIO.shortName}
        </span>
      </a>
      <nav className="nb-site-nav" style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <a href="#now"        className="nb-btn nb-btn-ghost" style={{ fontSize: 14 }}>Now</a>
        <a href="#work"       className="nb-btn nb-btn-ghost" style={{ fontSize: 14 }}>Work</a>
        <a href="#experience" className="nb-btn nb-btn-ghost" style={{ fontSize: 14 }}>Path</a>
        <a href="#skills"     className="nb-btn nb-btn-ghost" style={{ fontSize: 14 }}>Skills</a>
        <a href="#contact"    className="nb-btn nb-btn-soft"  style={{ fontSize: 14, padding: "10px 18px" }}>
          <Icon name="mail" size={14} /> Say hi
        </a>
      </nav>
    </header>
  );
}

/* ── PBentoHero ──────────────────────────────────────────────────── */
function PBentoHero() {
  return (
    <section className="nb-section nb-hero-section" id="top" style={{ padding: "44px 32px 24px", maxWidth: 1180, margin: "0 auto" }}>
      <div className="nb-bento" style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridAutoRows: "minmax(140px, auto)", gap: 16 }}>
        <CloudCard strong className="nb-bento-main nb-hero-main" style={{ gridColumn: "span 4", gridRow: "span 2", padding: 36, position: "relative", overflow: "hidden" }}>
          <div className="nb-eyebrow" style={{ marginBottom: 14 }}>
            <Icon name="sparkles" size={14} /> {PORTFOLIO.role}
          </div>
          <h1 className="nb-display" style={{ marginBottom: 18, maxWidth: 640 }}>{PORTFOLIO.name}</h1>
          <p className="nb-hero-intro" style={{ fontSize: 17, lineHeight: 1.6, color: "var(--text-body)", maxWidth: 540, marginBottom: 26 }}>
            {PORTFOLIO.intro}
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a className="nb-btn nb-btn-primary" href="#work">
              <Icon name="play" size={16} color="white" /> See selected work
            </a>
            <a className="nb-btn nb-btn-soft" href={`https://${PORTFOLIO.github}`} target="_blank" rel="noreferrer">
              <Icon name="github" size={16} githubDark /> GitHub
            </a>
          </div>
        </CloudCard>

        <CloudCard hoverable className="nb-bento-side nb-cumulus-card" style={{ gridColumn: "span 2", gridRow: "span 2", padding: 22, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div className="nb-eyebrow"><Icon name="cloud" size={14} /> Cumulus says hi</div>
          <div className="nb-float" style={{ alignSelf: "center", margin: "8px 0" }}>
            <Cumulus size={130} />
          </div>
          <div style={{ background: "var(--cloud-soft)", borderRadius: 16, padding: "12px 14px", fontSize: 13.5, color: "var(--text-body)", lineHeight: 1.5 }}>
            &quot;He builds trading apps and lets me proofread the prose.&quot;
          </div>
        </CloudCard>

        <CloudCard style={{ gridColumn: "span 2", padding: 22, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div className="nb-eyebrow"><Icon name="zap" size={14} /> Years shipping</div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span className="nb-display" style={{ fontSize: 56, lineHeight: 1 }}>~7</span>
            <span className="nb-muted" style={{ fontSize: 14 }}>years fullstack</span>
          </div>
        </CloudCard>

        <CloudCard style={{ gridColumn: "span 2", padding: 22, display: "flex", flexDirection: "column", gap: 14, justifyContent: "space-between" }}>
          <div className="nb-eyebrow"><Icon name="map-pin" size={14} /> Based in</div>
          <div>
            <div className="nb-h3">Chiang Mai</div>
            <div className="nb-muted" style={{ fontSize: 14, marginTop: 2 }}>+ Bangkok · GMT+7</div>
          </div>
          <span className="nb-chip is-positive" style={{ alignSelf: "flex-start" }}>
            <Icon name="circle-check" size={12} /> Open to work
          </span>
        </CloudCard>

        <CloudCard style={{ gridColumn: "span 2", padding: 22, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div className="nb-eyebrow"><Icon name="layers" size={14} /> Currently in rotation</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {["Next.js", "NestJS", "TypeScript", "Supabase", "Binance WS", "Claude Code"].map((t) => (
              <StackChip key={t} label={t} style={{ padding: "4px 10px", fontSize: 12 }} />
            ))}
          </div>
        </CloudCard>
      </div>
    </section>
  );
}

/* ── PNow ────────────────────────────────────────────────────────── */
function PNow() {
  const p = PORTFOLIO.work[0];
  return (
    <section className="nb-section" id="now" style={{ padding: "32px 32px 16px", maxWidth: 1180, margin: "0 auto" }}>
      <div style={{ marginBottom: 22 }}>
        <div className="nb-eyebrow"><Icon name="radio" size={14} /> Right now</div>
        <h2 className="nb-h1" style={{ marginTop: 8 }}>
          Building{" "}
          <span style={{ background: "var(--brand-grad)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            {p.name}
          </span>.
        </h2>
      </div>
      <CloudCard strong hoverable style={{ padding: 0, display: "grid", gridTemplateColumns: "1.1fr 1fr", overflow: "hidden" }} className="nb-now-grid">
        <div className="nb-now-copy" style={{ padding: "32px 36px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 18 }}>
          <span className="nb-chip is-accent" style={{ alignSelf: "flex-start" }}>
            <Icon name="play" size={12} /> Live · BTC/USDT paper lab
          </span>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--text-body)", margin: 0 }}>{p.summary}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {p.stack.map((s) => <StackChip key={s} label={s} style={{ padding: "4px 10px", fontSize: 12 }} />)}
          </div>
          <a className="nb-btn nb-btn-primary" href={p.href} target="_blank" rel="noreferrer" style={{ alignSelf: "flex-start" }}>
            {p.linkLabel} <Icon name="arrow-up-right" size={14} color="white" />
          </a>
        </div>
        <div className="nb-now-media" style={{ position: "relative", minHeight: 360, overflow: "hidden", background: "linear-gradient(135deg, var(--brand-1), var(--brand-2))" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.image} alt={p.name} loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "left top" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(255,255,255,0.35) 0%, transparent 30%)" }} />
        </div>
      </CloudCard>
    </section>
  );
}

/* ── Pipeline step modal ─────────────────────────────────────────── */
const PIPELINE_STEPS = [
  { label: "Idle",              agent: "—",                      desc: "Pipeline is ready. Waiting for a ticket from Telegram. All agents on standby." },
  { label: "Ticket arrives",    agent: "Telegram",               desc: "TICKET-042 received: 'Implement dark-mode toggle with system preference detection and persist to user profile.'" },
  { label: "CEO reviews",       agent: "CEO · claude-opus-4-5",  desc: "CEO Agent assesses complexity as medium and assigns the full pipeline — PO → QA → Dev Lead → Fullstack → DevOps." },
  { label: "PO drafts DoD",     agent: "PO · claude-sonnet-4-6", desc: "Product Owner starts writing the Definition of Done: acceptance criteria, API contract, animation budget, and test coverage target." },
  { label: "DoD complete",      agent: "PO · claude-sonnet-4-6", desc: "5 acceptance criteria locked: keyboard access, system-preference detection, API persistence via PATCH /users/:id, ≤200ms animation, ≥80% unit-test coverage." },
  { label: "QA test plan",      agent: "QA · claude-sonnet-4-6", desc: "QA Agent writes 5 expected test cases: first-load theme, toggle switch, cross-reload persistence, API payload, and keyboard navigation." },
  { label: "Dev Lead specs",    agent: "Dev Lead · code-review", desc: "Dev Lead adds technical spec: ThemeContext + useTheme hook, CSS vars on <html data-theme>, debounced PATCH call, 180ms transition." },
  { label: "Fullstack builds",  agent: "Fullstack · frontend-design", desc: "Fullstack Dev implements ThemeProvider with localStorage + matchMedia fallback, CSS var swap, and initial API integration." },
  { label: "Code review",       agent: "Dev Lead · code-review", desc: "Dev Lead finds one issue: API fires on every rapid toggle — missing debounce. Requests change before approval." },
  { label: "Fix → approved",    agent: "Fullstack + Dev Lead",   desc: "Fullstack wraps the API call with debounce(500ms). Dev Lead reviews and approves. All review items resolved." },
  { label: "QA final check",    agent: "QA · claude-sonnet-4-6", desc: "QA runs all 5 test cases against the PR. All pass — first-load, toggle, persist, API payload, and keyboard nav." },
  { label: "Team notified",     agent: "QA → Telegram",          desc: "QA reports 5/5 pass to the team via Telegram. Ticket handed off to DevOps for production deploy." },
  { label: "Deploying",         agent: "DevOps · claude-haiku-4-5", desc: "DevOps Agent triggers Vercel deploy via vercel-mcp plugin. Build completes in 23s. Pushing to production." },
  { label: "Shipped 🚀",        agent: "DevOps → Telegram",      desc: "TICKET-042 shipped in 4m 12s. Full pipeline: Telegram → CEO → PO → QA → Dev Lead ↔ Fullstack → QA → Telegram → DevOps → Production." },
];

function PipelineModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [imageVisible, setImageVisible] = useState(true);
  const fadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const total = PIPELINE_STEPS.length;
  const s = PIPELINE_STEPS[step];

  const changeStep = useCallback((direction: 1 | -1) => {
    if (fadeTimeoutRef.current) {
      clearTimeout(fadeTimeoutRef.current);
    }

    setImageVisible(false);
    fadeTimeoutRef.current = setTimeout(() => {
      setStep((current) => Math.max(0, Math.min(current + direction, total - 1)));
      requestAnimationFrame(() => setImageVisible(true));
    }, 260);
  }, [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if ((e.key === "ArrowRight" || e.key === "ArrowDown") && step < total - 1) changeStep(1);
      if ((e.key === "ArrowLeft"  || e.key === "ArrowUp") && step > 0) changeStep(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [changeStep, onClose, step, total]);

  useEffect(() => {
    return () => {
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, []);

  return createPortal(
    <div
      className="nb-pipeline-overlay"
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 100000,
        background: "rgba(10,10,26,0.9)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px 32px",
      }}
    >
      <div
        className="nb-pipeline-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{ width: "100%", maxWidth: 1000, display: "flex", flexDirection: "column", gap: 16 }}
      >
        {/* top bar */}
        <div className="nb-pipeline-topbar" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(167,139,250,0.8)" }}>
              Hermes AI — Agentic Pipeline
            </span>
            <span style={{ fontSize: 14, fontWeight: 700, color: "white" }}>
              Step {step + 1} / {total} · {s.label}
            </span>
          </div>
          <button
            onClick={onClose}
            style={{ background: "rgba(255,255,255,0.1)", border: "none", color: "white", borderRadius: 8, padding: "6px 14px", cursor: "pointer", fontSize: 12, fontWeight: 600 }}
          >
            ✕ Close
          </button>
        </div>

        {/* progress bar */}
        <div style={{ height: 3, background: "rgba(255,255,255,0.1)", borderRadius: 99, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${((step + 1) / total) * 100}%`, background: "linear-gradient(90deg, #7c3aed, #06b6d4)", borderRadius: 99, transition: "width 0.3s ease" }} />
        </div>

        {/* screenshot */}
        <div className="nb-pipeline-shot" style={{ borderRadius: 12, overflow: "hidden", background: "#0d0d1a", lineHeight: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={step}
            src={`/hf/frame-${String(step).padStart(2, "0")}.png`}
            alt={`Pipeline step ${step + 1}: ${s.label}`}
            style={{
              width: "100%",
              display: "block",
              borderRadius: 12,
              opacity: imageVisible ? 1 : 0,
              transition: "opacity 520ms cubic-bezier(0.22, 0.61, 0.36, 1)",
            }}
          />
        </div>

        {/* description + nav */}
        <div className="nb-pipeline-body" style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(167,139,250,0.2)", borderRadius: 10, padding: "12px 16px" }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", color: "rgba(167,139,250,0.7)", marginBottom: 4 }}>
              {s.agent}
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(226,232,240,0.9)", margin: 0 }}>{s.desc}</p>
          </div>
          <div className="nb-pipeline-controls" style={{ display: "flex", gap: 8, flexShrink: 0 }}>
            <button
              onClick={() => changeStep(-1)}
              disabled={step === 0}
              style={{
                background: step === 0 ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.15)", color: step === 0 ? "rgba(255,255,255,0.3)" : "white",
                borderRadius: 8, padding: "10px 18px", cursor: step === 0 ? "default" : "pointer",
                fontSize: 13, fontWeight: 600,
              }}
            >
              ← Prev
            </button>
            <button
              onClick={() => changeStep(1)}
              disabled={step === total - 1}
              style={{
                background: step === total - 1 ? "rgba(124,58,237,0.3)" : "linear-gradient(135deg, #7c3aed, #06b6d4)",
                border: "none", color: "white",
                borderRadius: 8, padding: "10px 18px", cursor: step === total - 1 ? "default" : "pointer",
                fontSize: 13, fontWeight: 600,
              }}
            >
              {step === total - 1 ? "Done ✓" : "Next →"}
            </button>
          </div>
        </div>
        <div style={{ textAlign: "center", fontSize: 10, color: "rgba(255,255,255,0.25)" }}>
          ← → arrow keys to navigate · Esc to close
        </div>
      </div>
    </div>,
    document.body
  );
}

/* ── PWork ───────────────────────────────────────────────────────── */
function ProjectCard({ project }: { project: typeof PORTFOLIO.work[number] }) {
  const [modalOpen, setModalOpen] = useState(false);
  const hasDemo = "hasDemo" in project && !!project.hasDemo;
  const showProjectLink = Boolean(project.href && project.linkLabel);
  const media = (
    <div style={{ aspectRatio: "16/9", background: "linear-gradient(135deg, var(--brand-1), var(--brand-2))", position: "relative", overflow: "hidden" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={project.image} alt={project.name} loading="lazy"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(255,255,255,0) 50%, rgba(255,255,255,0.5) 100%)" }} />
      <div style={{ position: "absolute", top: 14, left: 16 }}>
        <span style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(12px)", color: "var(--text-strong)", padding: "5px 11px", borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          {project.index}
        </span>
      </div>
      {hasDemo && (
        <div style={{ position: "absolute", top: 14, right: 14 }}>
          <span style={{ background: "rgba(124,58,237,0.85)", color: "white", padding: "4px 10px", borderRadius: 999, fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 4 }}>
            <Icon name="play" size={10} color="white" /> Demo
          </span>
        </div>
      )}
    </div>
  );

  return (
    <>
      {modalOpen && hasDemo && (
        <PipelineModal onClose={() => setModalOpen(false)} />
      )}
      <CloudCard hoverable strong style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}>
        {showProjectLink ? (
          <a href={project.href} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit", display: "contents" }}>
            {media}
          </a>
        ) : media}
        <div style={{ padding: 22, display: "flex", flexDirection: "column", flex: 1 }}>
          <h3 className="nb-h3" style={{ marginBottom: 4 }}>{project.name}</h3>
          <div className="nb-muted" style={{ fontSize: 13, marginBottom: 12 }}>{project.tag}</div>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--text-body)", margin: "0 0 16px" }}>{project.summary}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
            {project.stack.map((s) => <StackChip key={s} label={s} style={{ padding: "4px 10px", fontSize: 12 }} />)}
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: "auto" }}>
            {hasDemo && (
              <button
                onClick={() => setModalOpen(true)}
                className="nb-btn nb-btn-primary"
                style={{ fontSize: 13, padding: "8px 14px", border: "none", cursor: "pointer" }}
              >
                <Icon name="play" size={13} color="white" /> Watch demo
              </button>
            )}
            {showProjectLink && (
              <a href={project.href} target="_blank" rel="noreferrer" className="nb-btn nb-btn-soft" style={{ fontSize: 13, padding: "8px 14px" }}>
                {project.linkLabel} <Icon name="arrow-up-right" size={13} />
              </a>
            )}
            {"githubHref" in project && project.githubHref && (
              <a href={project.githubHref as string} target="_blank" rel="noreferrer" className="nb-btn nb-btn-soft" style={{ fontSize: 13, padding: "8px 14px" }}>
                <Icon name="github" size={13} githubDark /> GitHub
              </a>
            )}
            {"repoLinks" in project && project.repoLinks?.map((repo) => (
              <a key={repo.href} href={repo.href} target="_blank" rel="noreferrer" className="nb-btn nb-btn-soft" style={{ fontSize: 13, padding: "8px 14px" }}>
                <Icon name="github" size={13} githubDark /> {repo.label}
              </a>
            ))}
          </div>
        </div>
      </CloudCard>
    </>
  );
}

function PWork() {
  return (
    <section className="nb-section" id="work" style={{ padding: "44px 32px 16px", maxWidth: 1180, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 28, gap: 16, flexWrap: "wrap" }}>
        <div>
          <div className="nb-eyebrow"><Icon name="layers" size={14} /> Selected work</div>
          <h2 className="nb-h1" style={{ marginTop: 8 }}>Three small worlds I built.</h2>
        </div>
        <p className="nb-muted" style={{ fontSize: 15, maxWidth: 340, lineHeight: 1.6 }}>
          Each one started as a question and ended as a working tool — calmly shipped, all with AI in the loop.
        </p>
      </div>
      <div className="nb-work-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
        {PORTFOLIO.work.map((p) => <ProjectCard key={p.index} project={p} />)}
      </div>
    </section>
  );
}

/* ── PExperience ─────────────────────────────────────────────────── */
function PExperience() {
  return (
    <section className="nb-section" id="experience" style={{ padding: "56px 32px 16px", maxWidth: 860, margin: "0 auto" }}>
      <div style={{ marginBottom: 36 }}>
        <div className="nb-eyebrow"><Icon name="briefcase" size={14} /> Experience</div>
        <h2 className="nb-h1" style={{ marginTop: 8 }}>Seven calm years of shipping.</h2>
      </div>

      <div className="nb-timeline" style={{ position: "relative", paddingLeft: 32 }}>
        {/* vertical stem */}
        <div className="nb-timeline-stem" style={{
          position: "absolute", left: 7, top: 6, bottom: 0,
          width: 2, background: "linear-gradient(180deg, var(--lav-300) 0%, rgba(196,181,253,0.15) 100%)",
          borderRadius: 2,
        }} />

        {PORTFOLIO.experience.map((e, i) => (
          <div key={i} style={{ position: "relative", paddingBottom: 20 }}>
            {/* dot */}
            <div className="nb-timeline-dot" style={{
              position: "absolute", left: -32, top: 18,
              width: 16, height: 16, borderRadius: "50%",
              background: i === 0 ? "var(--brand-grad)" : "rgba(255,255,255,0.95)",
              border: `2px solid ${i === 0 ? "transparent" : "var(--lav-300)"}`,
              boxShadow: i === 0 ? "0 0 0 3px rgba(167,139,250,0.25)" : "none",
              zIndex: 1,
            }} />

            <CloudCard soft hoverable style={{ padding: "18px 22px" }}>
              <div style={{ fontFamily: "var(--font-mono-nb)", fontSize: 11, fontWeight: 700, color: "var(--ink-500)", letterSpacing: "0.06em", marginBottom: 6 }}>
                {e.period}
              </div>
              <div className="nb-h4" style={{ marginBottom: 2 }}>{e.role}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--lav-500)", marginBottom: 8 }}>{e.company}</div>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--text-soft)", margin: "0 0 10px" }}>{e.detail}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {e.stack.map((s) => <StackChip key={s} label={s} style={{ padding: "2px 9px", fontSize: 11 }} />)}
              </div>
            </CloudCard>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── PSkillsAndContact ───────────────────────────────────────────── */
function PSkillsAndContact() {
  return (
    <section className="nb-section" id="skills" style={{ padding: "56px 32px 96px", maxWidth: 1180, margin: "0 auto" }}>
      <div className="nb-skills-contact" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 20 }}>
        <CloudCard style={{ padding: 28 }}>
          <div className="nb-eyebrow"><Icon name="wrench" size={14} /> Skills</div>
          <h2 className="nb-h2" style={{ marginTop: 8, marginBottom: 18 }}>What&apos;s in rotation today.</h2>
          {PORTFOLIO.skills.map((g) => (
            <div key={g.cat} style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-soft)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>{g.cat}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {g.items.map((s) => <StackChip key={s} label={s} className="nb-chip is-accent" style={{ padding: "5px 11px", fontSize: 13, fontWeight: 600 }} />)}
              </div>
            </div>
          ))}
        </CloudCard>

        <CloudCard id="contact" strong style={{ padding: 32, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div className="nb-float" style={{ position: "absolute", top: -8, right: 20, opacity: 0.7 }}>
            <CloudPuff scale={0.55} opacity={0.95} />
          </div>
          <div>
            <div className="nb-eyebrow"><Icon name="mail" size={14} /> Get in touch</div>
            <h2 className="nb-h2" style={{ marginTop: 10 }}>Drop a calm note.</h2>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--text-body)", margin: "12px 0 22px", maxWidth: 360 }}>
              Open to fullstack, trading platform, and AI-tooling work. Usually replies within a day.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a className="nb-btn nb-btn-primary" style={{ justifyContent: "flex-start" }} href={`mailto:${PORTFOLIO.email}`}>
              <Icon name="mail" size={16} color="white" /> Email
            </a>
            <a className="nb-btn nb-btn-soft" style={{ justifyContent: "flex-start" }} href={`https://${PORTFOLIO.github}`} target="_blank" rel="noreferrer">
              <Icon name="github" size={16} githubDark /> GitHub
            </a>
            <a className="nb-btn nb-btn-soft" style={{ justifyContent: "flex-start" }} href={`https://www.${PORTFOLIO.linkedin}/`} target="_blank" rel="noreferrer">
              <LinkedIn style={{ width: 16, height: 16, flexShrink: 0 }} /> LinkedIn
            </a>
          </div>
        </CloudCard>
      </div>
      <div style={{ textAlign: "center", marginTop: 36, fontSize: 13, color: "var(--text-faint)" }}>
        © 2026 · {PORTFOLIO.name} · Nimbus aesthetic
      </div>
    </section>
  );
}

/* ── Build story panel (The Byte Times) ─────────────────────────── */
const BUILD_STEPS = [
  {
    step: "01",
    tool: "GPT or Codex",
    label: "Ideate & prompt",
    desc: "Started with a conversation to shape the concept, scope, and core AI prompts for the project.",
  },
  {
    step: "02",
    tool: "Claude Design",
    label: "Design handoff",
    desc: "Took the prompts to Claude Design to generate the visual system — layout, palette, and component spec.",
  },
  {
    step: "03",
    tool: "Claude Code CLI",
    label: "Build",
    desc: "Implemented the full Next.js app in Claude Code CLI, with MCP servers and plugins (Playwright, Vercel, memory) wired in throughout.",
  },
];

const BUILD_STYLE = `
  .nb-bsp{position:fixed;right:16px;bottom:68px;z-index:9998;width:300px;
    background:rgba(250,249,247,.96);color:#29261b;
    border:.5px solid rgba(167,139,250,.3);border-radius:16px;
    box-shadow:0 16px 48px rgba(99,102,241,.18),0 4px 12px rgba(0,0,0,.1);
    font:12.5px/1.45 ui-sans-serif,system-ui,sans-serif;overflow:hidden}
  .nb-bsp-hd{display:flex;align-items:flex-start;justify-content:space-between;padding:14px 16px 10px;gap:8px}
  .nb-bsp-title{font-size:12px;font-weight:700;letter-spacing:.01em}
  .nb-bsp-sub{font-size:11px;color:rgba(99,102,241,.85);font-weight:600;margin-top:1px}
  .nb-bsp-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.45);
    width:20px;height:20px;border-radius:6px;cursor:pointer;font-size:12px;flex-shrink:0}
  .nb-bsp-x:hover{background:rgba(0,0,0,.06)}
  .nb-bsp-body{padding:0 16px 16px;display:flex;flex-direction:column;gap:0}
  .nb-bsp-step{display:flex;gap:12px;padding:10px 0;border-top:.5px solid rgba(0,0,0,.06)}
  .nb-bsp-dot{width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,#7dd3fc,#a78bfa);
    display:flex;align-items:center;justify-content:center;flex-shrink:0;
    font-size:9px;font-weight:800;color:white;letter-spacing:.04em;margin-top:1px}
  .nb-bsp-info{}
  .nb-bsp-lbl{font-size:11.5px;font-weight:700;color:#1e1b4b}
  .nb-bsp-tool{font-size:10px;font-weight:600;color:rgba(99,102,241,.8);margin-bottom:3px}
  .nb-bsp-desc{font-size:11px;color:rgba(41,38,27,.65);line-height:1.5}
`;

function BuildStoryPanel() {
  const [open, setOpen] = useState(false);
  if (!open) return (
    <button
      className="nb-bsp-trigger"
      onClick={() => setOpen(true)}
      style={{
        position: "fixed", right: 16, bottom: 68, zIndex: 9998,
        background: "rgba(255,255,255,0.92)", color: "var(--ink-600)",
        border: "1px solid rgba(167,139,250,0.4)",
        borderRadius: 999, padding: "8px 14px", cursor: "pointer",
        fontSize: 12, fontWeight: 600,
        boxShadow: "0 4px 16px rgba(99,102,241,0.15)",
        display: "flex", alignItems: "center", gap: 6,
      }}
    >
      <span style={{ fontSize: 14 }}>⚡</span> How this was built
    </button>
  );
  return (
    <>
      <style>{BUILD_STYLE}</style>
      <div className="nb-bsp">
        <div className="nb-bsp-hd">
          <div>
            <div className="nb-bsp-title">How The Byte Times was built</div>
            <div className="nb-bsp-sub">GPT / Codex → Claude Design → Claude Code CLI</div>
          </div>
          <button className="nb-bsp-x" onClick={() => setOpen(false)}>✕</button>
        </div>
        <div className="nb-bsp-body">
          {BUILD_STEPS.map((s) => (
            <div key={s.step} className="nb-bsp-step">
              <div className="nb-bsp-dot">{s.step}</div>
              <div className="nb-bsp-info">
                <div className="nb-bsp-tool">{s.tool}</div>
                <div className="nb-bsp-lbl">{s.label}</div>
                <div className="nb-bsp-desc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ── App root ────────────────────────────────────────────────────── */
const TWEAK_DEFAULTS: TweakValues = { theme: "day", palette: "skyblue", motionScale: 1 };

export default function NimbusPage() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("nimbus-night", t.theme === "night");
    (["skyblue", "lavender", "mint", "sunset"] as const).forEach((p) =>
      root.classList.toggle(`nimbus-palette-${p}`, t.palette === p)
    );
    root.style.setProperty("--motion-scale", String(t.motionScale));
    return () => {
      root.classList.remove("nimbus-night", "nimbus-palette-skyblue", "nimbus-palette-lavender", "nimbus-palette-mint", "nimbus-palette-sunset");
      root.style.removeProperty("--motion-scale");
    };
  }, [t.theme, t.palette, t.motionScale]);

  return (
    <div className="nimbus-root">
      <CloudBackdrop />
      <PNav />
      <PBentoHero />
      <PNow />
      <PWork />
      <PExperience />
      <PSkillsAndContact />
      <TweaksPanel t={t} setTweak={setTweak} />
      <BuildStoryPanel />
    </div>
  );
}
