import {
  Activity,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  CandlestickChart,
  Code2,
  DatabaseZap,
  Mail,
  MapPin,
  Network,
  Phone,
  RadioTower,
  Sparkles,
  Workflow,
} from "lucide-react";
import {
  Binance,
  Bitcoin,
  NestJS,
  Nextjs,
  Nuxt,
  ReactDark,
  TypeScript,
  Vue,
} from "@ridemountainpig/svgl-react";

export const siteContent = {
  en: {
    /* ── Nav ── */
    nav: { brand: "Ekkasit SRG" },

    /* ── Hero ── */
    hero: {
      badge: "Fullstack Developer / Trading Systems",
      name: "Ekkasit Songrungruang",
      copy: "Chiang Mai and Bangkok based fullstack developer with almost 7 years of experience building web apps, crypto trading interfaces, backend APIs, and AI-assisted development workflows.",
      cta1: "View Paper Trade",
      cta2: "GitHub",
      panelLabel: "Paper Trade Engine",
      panelStatus: "Online",
    },

    /* ── Paper Trade ── */
    paperTrade: {
      eyebrow: "Featured Project",
      title: "Paper Trade: AI-assisted BTC trading lab",
      liveRef: "Live reference",
      modules: [
        {
          title: "Trading Web Application",
          signal: "Orders + Graph + Backtesting",
          body: "A command-center UI for reviewing paper orders, plotting entries and exits on graphs, and checking strategy performance through backtesting views.",
        },
        {
          title: "Telegram AI Agent",
          signal: "OpenClaw + MiniMax 2.5",
          body: "An OpenClaw agent powered by MiniMax 2.5 sends daily BTC/USDT research, reads indicator context, chooses the strongest setup for the moment, and creates backtests for the plan.",
        },
        {
          title: "Backend API",
          signal: "Supabase + Binance WS",
          body: "A backend API for trade data, research records, and market streams, connected to Supabase storage and Binance WebSocket price feeds.",
        },
      ],
      dashboard: {
        eyebrow: "Trading Dashboard",
        title: "Nexus AI web app for live BTC/USDT paper trading.",
      },
      telegram: {
        eyebrow: "Telegram Research Output",
        title: "Daily BTC/USDT signal report generated for real trading review.",
        body: "This output shows the agent packaging Binance market data into a readable Telegram brief: session timing, current price, moving averages, momentum, trend, RSI, MACD, Bollinger Bands, and paper portfolio order performance.",
        stats: [
          ["Runtime", "OpenClaw"],
          ["LLM", "MiniMax 2.5"],
          ["Market", "BTC/USDT via Binance"],
          ["Delivery", "Telegram bot"],
        ] as [string, string][],
        terminal: [
          ["Session", "Evening 17:00 ICT"],
          ["Price", "79,611.73 USDT"],
          ["MA5 / MA20", "74,860.99 / 75,466.03"],
          ["Momentum", "+6.7171%"],
          ["Trend", "Bearish"],
          ["Portfolio", "7 paper orders tracked"],
        ] as [string, string][],
      },
    },

    /* ── System Flow ── */
    systemFlow: {
      eyebrow: "System Flow",
      title: "Built like a quant research pipeline.",
      body: "The project connects market streams, stored trade data, strategy research, and AI-generated planning into one feedback loop.",
      steps: [
        "Next.js trading dashboard",
        "Backend API layer",
        "Supabase data store",
        "Binance WebSocket feed",
        "OpenClaw MiniMax 2.5 Telegram agent",
      ],
    },

    /* ── Hermes AI ── */
    hermes: {
      eyebrow: "Featured Project",
      hosting: "Runs on Local",
      title: "Hermes AI — Telegram-native project manager",
      modules: [
        {
          title: "AI Brainstorm Interface",
          signal: "Telegram · Hermes Bot",
          body: "Hermes listens in Telegram, clarifies intent, brainstorms scope, and confirms Definition of Done before any ticket is created.",
          color: "violet",
        },
        {
          title: "Paperclip AI Integration",
          signal: "TDD · DoD · Unit Tests",
          body: "Once scope is confirmed, Hermes creates a structured ticket in Paperclip AI with DoD checklist and unit test requirements for TDD workflow.",
          color: "cyan",
        },
        {
          title: "QA → Report Pipeline",
          signal: "Reports Channel · Telegram",
          body: "Paperclip AI distributes work within the org. After completion, QA rechecks and Hermes posts the result to the Reports thread in Telegram.",
          color: "emerald",
        },
      ],
      flow: [
        ["You", "Message Hermes in Telegram"],
        ["Hermes AI", "Brainstorm + clarify scope"],
        ["Paperclip AI", "Create ticket — DoD + unit tests (TDD)"],
        ["Org", "Distribute and execute tasks"],
        ["QA", "Recheck + verify DoD"],
        ["Reports", "Post result to Telegram thread"],
      ] as [string, string][],
      showcaseEyebrow: "Live Telegram Channels",
      showcaseTitle: "Hermes AI in action — Tickets, Projects, and Reports.",
    },

    sajuMe: {
      eyebrow: "Portfolio Project",
      hosting: "Engineering Case Study",
      title: "Saju Me — Saju analysis engine",
      body: "A fullstack product experiment that turns a traditional Four Pillars domain into a structured web application: deterministic calculation APIs, typed domain models, multilingual UX, and data-rich dashboards for element balance, life cycles, Ten Gods, special stars, and annual forecasts.",
      repoLabel: "GitHub",
      modules: [
        {
          title: "Domain Engine",
          signal: "Typed logic · Pure JSON",
          body: "Models a complex rule-based Saju system into reusable TypeScript modules for pillars, day master strength, element dynamics, luck cycles, interactions, geukguk, yongshin, and natal Ten Gods.",
        },
        {
          title: "API + Product Flow",
          signal: "Input → Compute → Interpret",
          body: "Separates calculation, interpretation, and life-period readings into API routes, then carries the result through a polished session-based flow from birth input to analysis dashboard.",
        },
        {
          title: "Visualization + i18n",
          signal: "Recharts · 4 locales",
          body: "Turns dense metaphysical output into readable UI with radar charts, strength meters, 10-year timelines, tabbed analysis, and localized content across English, Thai, Japanese, and Korean.",
        },
      ],
      stats: [
        ["Architecture", "Next.js APIs + TS engine"],
        ["Domain", "Four Pillars / Ten Gods"],
        ["UX", "Dashboard + guided form"],
        ["i18n", "EN / TH / JA / KO"],
      ] as [string, string][],
    },

    /* ── Skill pie ── */
    skillPie: {
      title: "Skill Split",
      frontend: "Frontend",
      backend: "Backend",
      vibeTitle: "Vibe Coding",
      currentLabel: "Primary",
      currentTools: ["Claude Code CLI", "Codex"],
      pastLabel: "Also used",
      pastTools: ["Antigravity", "Gemini CLI"],
    },

    /* ── Metrics ── */
    metrics: [
      ["Experience", "Almost 7 years"],
      ["Focus", "Crypto systems"],
      ["Current stack", "Next.js / Binance"],
      ["Location", "Chiang Mai + Bangkok"],
    ] as [string, string][],

    /* ── Experience ── */
    experience: {
      eyebrow: "Experience",
      title: "Production web apps, trading tools, and AI-assisted workflow.",
      items: [
        {
          period: "Apr 2025 - Present",
          role: "Fullstack Developer",
          company: "Yellow Capital Co.Ltd",
          detail:
            "Build cryptocurrency trading workflows including P2P trading, custom spot trading views, order placement, and position management.",
          stack: [
            { name: "Next.js", Icon: Nextjs },
            { name: "NestJS", Icon: NestJS },
            { name: "TypeScript", Icon: TypeScript },
            { name: "Binance", Icon: Binance },
          ],
        },
        {
          period: "Apr 2024 - Apr 2025",
          role: "Frontend Developer",
          company: "Bitnance Co.Ltd",
          detail:
            "Developed crypto trading interfaces with React hooks, cached market activity data, and supported order and position workflows.",
          stack: [
            { name: "Next.js", Icon: Nextjs },
            { name: "React", Icon: ReactDark },
            { name: "TypeScript", Icon: TypeScript },
          ],
        },
        {
          period: "Feb 2022 - Apr 2024",
          role: "Fullstack Developer",
          company: "ndoandco.co.,ltd",
          detail:
            "Built e-commerce CMS interfaces, backend APIs, Nuxt.js applications, and integration services across team Git workflows.",
          stack: [
            { name: "Next.js", Icon: Nextjs },
            { name: "Nuxt", Icon: Nuxt },
            { name: "NestJS", Icon: NestJS },
            { name: "TypeScript", Icon: TypeScript },
          ],
        },
        {
          period: "2022 - 2024",
          role: "Fullstack Developer",
          company: "It a Lot",
          detail:
            "Built a crypto trading bot system with automated trading via Binance and Bitkub, P2P order management, indicator-based entry logic, and portfolio rebalancing workflows.",
          stack: [
            { name: "Next.js", Icon: Nextjs },
            { name: "TypeScript", Icon: TypeScript },
            { name: "Binance", Icon: Binance },
            { name: "Bitcoin", Icon: Bitcoin },
          ],
        },
        {
          period: "2019 - 2022",
          role: "Backend / Fullstack / Frontend Developer",
          company: "Harrots, Tectony, Fillgoods",
          detail:
            "Delivered internal systems, Next.js and Vue apps, LIFF integrations, AWS deployments, WordPress content, SEO, and SSL operations.",
          stack: [
            { name: "Next.js", Icon: Nextjs },
            { name: "Vue", Icon: Vue },
            { name: "Nuxt", Icon: Nuxt },
          ],
        },
      ],
    },

    /* ── Stack ── */
    stack: {
      eyebrow: "Stack Signals",
    },

    /* ── Contact ── */
    contact: {
      eyebrow: "Contact",
      title: "Open to fullstack, trading platform, and AI tooling work.",
    },
  },

  /* ════════════════════════════════════ TH ════ */
  th: {
    nav: { brand: "Ekkasit SRG" },

    hero: {
      badge: "Fullstack Developer / ระบบเทรดคริปโต",
      name: "เอกสิทธิ์ ทรงรุ่งเรือง",
      copy: "Fullstack Developer จากเชียงใหม่และกรุงเทพฯ มีประสบการณ์เกือบ 7 ปีในการสร้าง web app, crypto trading interface, backend API และ AI-assisted development workflow",
      cta1: "ดู Paper Trade",
      cta2: "GitHub",
      panelLabel: "Paper Trade Engine",
      panelStatus: "ออนไลน์",
    },

    paperTrade: {
      eyebrow: "โปรเจกต์เด่น",
      title: "Paper Trade: แลปเทรด BTC ด้วย AI",
      liveRef: "ดูเว็บสด",
      modules: [
        {
          title: "Trading Web Application",
          signal: "Orders + Graph + Backtesting",
          body: "UI สำหรับดู paper orders วาดจุดเข้า/ออกบนกราฟ และตรวจสอบประสิทธิภาพกลยุทธ์ผ่าน backtesting",
        },
        {
          title: "Telegram AI Agent",
          signal: "OpenClaw + MiniMax 2.5",
          body: "Agent OpenClaw ขับเคลื่อนด้วย MiniMax 2.5 ส่งรายงาน BTC/USDT ทุกวัน อ่าน indicator เลือกจุดที่ดีที่สุด และสร้าง backtest",
        },
        {
          title: "Backend API",
          signal: "Supabase + Binance WS",
          body: "Backend API สำหรับข้อมูลเทรด, research records และ market stream เชื่อมต่อ Supabase และ Binance WebSocket",
        },
      ],
      dashboard: {
        eyebrow: "Trading Dashboard",
        title: "Nexus AI web app สำหรับ BTC/USDT paper trading แบบสด",
      },
      telegram: {
        eyebrow: "ผลลัพธ์จาก Telegram",
        title: "รายงาน BTC/USDT รายวันที่ AI สร้างสำหรับการรีวิวเทรดจริง",
        body: "ผลลัพธ์นี้แสดงให้เห็นว่า agent แปลงข้อมูลตลาด Binance เป็นรายงาน Telegram: เวลา session ราคาปัจจุบัน MA momentum trend RSI MACD Bollinger Bands และ portfolio orders",
        stats: [
          ["Runtime", "OpenClaw"],
          ["LLM", "MiniMax 2.5"],
          ["Market", "BTC/USDT via Binance"],
          ["Delivery", "Telegram bot"],
        ] as [string, string][],
        terminal: [
          ["Session", "Evening 17:00 ICT"],
          ["Price", "79,611.73 USDT"],
          ["MA5 / MA20", "74,860.99 / 75,466.03"],
          ["Momentum", "+6.7171%"],
          ["Trend", "Bearish"],
          ["Portfolio", "7 paper orders tracked"],
        ] as [string, string][],
      },
    },

    systemFlow: {
      eyebrow: "System Flow",
      title: "สร้างแบบ quant research pipeline",
      body: "โปรเจกต์เชื่อมต่อ market stream ข้อมูลเทรด strategy research และ AI planning เข้าเป็น feedback loop เดียว",
      steps: [
        "Next.js trading dashboard",
        "Backend API layer",
        "Supabase data store",
        "Binance WebSocket feed",
        "OpenClaw MiniMax 2.5 Telegram agent",
      ],
    },

    hermes: {
      eyebrow: "โปรเจกต์เด่น",
      hosting: "รันบนเครื่อง Local",
      title: "Hermes AI — AI Project Manager บน Telegram",
      modules: [
        {
          title: "AI Brainstorm Interface",
          signal: "Telegram · Hermes Bot",
          body: "Hermes รับคำสั่งใน Telegram ชวนคิด brainstorm และยืนยัน Definition of Done ก่อนสร้าง ticket ทุกครั้ง",
          color: "violet",
        },
        {
          title: "Paperclip AI Integration",
          signal: "TDD · DoD · Unit Tests",
          body: "เมื่อยืนยัน scope แล้ว Hermes สร้าง ticket ใน Paperclip AI พร้อม DoD checklist และ unit test สำหรับ TDD",
          color: "cyan",
        },
        {
          title: "QA → Report Pipeline",
          signal: "Reports Channel · Telegram",
          body: "Paperclip AI แจกจ่ายงานใน org เมื่อเสร็จ QA ตรวจซ้ำและ Hermes ส่งผลไปยัง Reports thread ใน Telegram",
          color: "emerald",
        },
      ],
      flow: [
        ["คุณ", "สั่งงาน Hermes ใน Telegram"],
        ["Hermes AI", "Brainstorm + ชวนยืนยัน scope"],
        ["Paperclip AI", "สร้าง ticket — DoD + unit tests (TDD)"],
        ["Org", "แจกจ่ายและดำเนินงาน"],
        ["QA", "ตรวจสอบและยืนยัน DoD"],
        ["Reports", "รายงานผลใน Telegram thread"],
      ] as [string, string][],
      showcaseEyebrow: "Telegram Channels สด",
      showcaseTitle: "Hermes AI ในการใช้งานจริง — Tickets, Projects, Reports",
    },

    sajuMe: {
      eyebrow: "Portfolio Project",
      hosting: "Engineering Case Study",
      title: "Saju Me — Saju analysis engine",
      body: "Fullstack product experiment ที่แปลงศาสตร์ Four Pillars ให้กลายเป็น web application แบบเป็นระบบ: calculation API แบบ deterministic, typed domain models, multilingual UX และ dashboard ที่เล่าข้อมูล element balance, life cycles, Ten Gods, special stars และ annual forecasts ให้อ่านง่าย",
      repoLabel: "GitHub",
      modules: [
        {
          title: "Domain Engine",
          signal: "Typed logic · Pure JSON",
          body: "ออกแบบ rule-based Saju system ที่ซับซ้อนให้เป็น TypeScript modules ที่ reuse ได้ ครอบคลุม pillars, day master strength, element dynamics, luck cycles, interactions, geukguk, yongshin และ natal Ten Gods",
        },
        {
          title: "API + Product Flow",
          signal: "Input → Compute → Interpret",
          body: "แยก calculation, interpretation และ life-period readings เป็น API routes ชัดเจน แล้วพาผู้ใช้จาก birth input ไปสู่ analysis dashboard ผ่าน session-based flow ที่ใช้งานง่าย",
        },
        {
          title: "Visualization + i18n",
          signal: "Recharts · 4 locales",
          body: "เปลี่ยนข้อมูลเชิงลึกที่อ่านยากให้เป็น UI ที่ scan ง่าย ด้วย radar charts, strength meters, timeline รอบชีวิต 10 ปี, tabbed analysis และ localized content ภาษา English, Thai, Japanese, Korean",
        },
      ],
      stats: [
        ["Architecture", "Next.js APIs + TS engine"],
        ["Domain", "Four Pillars / Ten Gods"],
        ["UX", "Dashboard + guided form"],
        ["i18n", "EN / TH / JA / KO"],
      ] as [string, string][],
    },

    /* ── Skill pie ── */
    skillPie: {
      title: "สัดส่วน Skill",
      frontend: "Frontend",
      backend: "Backend",
      vibeTitle: "Vibe Coding",
      currentLabel: "หลัก",
      currentTools: ["Claude Code CLI", "Codex"],
      pastLabel: "เคยใช้",
      pastTools: ["Antigravity", "Gemini CLI"],
    },

    metrics: [
      ["ประสบการณ์", "เกือบ 7 ปี"],
      ["โฟกัส", "Crypto systems"],
      ["Stack ปัจจุบัน", "Next.js / Binance"],
      ["ที่อยู่", "เชียงใหม่ + กรุงเทพฯ"],
    ] as [string, string][],

    experience: {
      eyebrow: "ประสบการณ์",
      title: "Web app ระดับ production, trading tools และ AI-assisted workflow",
      items: [
        {
          period: "เม.ย. 2025 - ปัจจุบัน",
          role: "Fullstack Developer",
          company: "Yellow Capital Co.Ltd",
          detail:
            "พัฒนาระบบเทรดคริปโต ได้แก่ P2P trading, custom spot trading view, การส่งคำสั่งซื้อขาย และ position management",
          stack: [
            { name: "Next.js", Icon: Nextjs },
            { name: "NestJS", Icon: NestJS },
            { name: "TypeScript", Icon: TypeScript },
            { name: "Binance", Icon: Binance },
          ],
        },
        {
          period: "เม.ย. 2024 - เม.ย. 2025",
          role: "Frontend Developer",
          company: "Bitnance Co.Ltd",
          detail:
            "พัฒนา crypto trading interface ด้วย React hooks แคช market data และรองรับ order/position workflow",
          stack: [
            { name: "Next.js", Icon: Nextjs },
            { name: "React", Icon: ReactDark },
            { name: "TypeScript", Icon: TypeScript },
          ],
        },
        {
          period: "ก.พ. 2022 - เม.ย. 2024",
          role: "Fullstack Developer",
          company: "ndoandco.co.,ltd",
          detail:
            "สร้าง e-commerce CMS, backend API, Nuxt.js app และ integration service ภายใน Git workflow ของทีม",
          stack: [
            { name: "Next.js", Icon: Nextjs },
            { name: "Nuxt", Icon: Nuxt },
            { name: "NestJS", Icon: NestJS },
            { name: "TypeScript", Icon: TypeScript },
          ],
        },
        {
          period: "2022 - 2024",
          role: "Fullstack Developer",
          company: "It a Lot",
          detail:
            "สร้างระบบ Bot Trade คริปโตอัตโนมัติผ่าน Binance และ Bitkub รองรับ P2P, indicator-based entry และ portfolio rebalancing",
          stack: [
            { name: "Next.js", Icon: Nextjs },
            { name: "TypeScript", Icon: TypeScript },
            { name: "Binance", Icon: Binance },
            { name: "Bitcoin", Icon: Bitcoin },
          ],
        },
        {
          period: "2019 - 2022",
          role: "Backend / Fullstack / Frontend Developer",
          company: "Harrots, Tectony, Fillgoods",
          detail:
            "พัฒนาระบบภายใน Next.js/Vue app, LIFF, AWS, WordPress, SEO และ SSL",
          stack: [
            { name: "Next.js", Icon: Nextjs },
            { name: "Vue", Icon: Vue },
            { name: "Nuxt", Icon: Nuxt },
          ],
        },
      ],
    },

    stack: {
      eyebrow: "Stack ที่ใช้",
    },

    contact: {
      eyebrow: "ติดต่อ",
      title: "พร้อมรับงาน fullstack, trading platform และ AI tooling",
    },
  },
} as const;

export type Locale = "en" | "th";
export type SiteContent = typeof siteContent.en;

// Icon map for module cards — referenced by page
export { Activity, ArrowUpRight, Bot, BrainCircuit, CandlestickChart, Code2, DatabaseZap, Mail, MapPin, Network, Phone, RadioTower, Sparkles, Workflow };
