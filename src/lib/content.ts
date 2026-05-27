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

    projectCases: {
      eyebrow: "Selected Projects",
      title: "Readable case studies, built with AI-assisted workflow.",
      copy: "Each project is framed as a product problem, what I built, how AI helped the build, and the proof you can inspect.",
      builtBadge: "Built with AI",
      columns: {
        built: "What I built",
        ai: "AI workflow",
        proof: "Proof",
      },
      items: [
        {
          index: "01",
          title: "Nexus AI Paper Trade",
          tag: "Trading web app · BTC/USDT · live dashboard",
          premise: "A paper trading lab that connects chart review, order history, research signals, and Telegram summaries into one feedback loop.",
          built: [
            "Next.js trading dashboard with light/dark screenshots, chart views, portfolio table, stats, and research panels.",
            "Backend API layer for trade records, research data, Binance market stream, and portfolio performance.",
            "Telegram research output that turns market indicators into a daily BTC/USDT review brief.",
          ],
          ai: [
            "Codex and Claude Code for frontend build, responsive fixes, component refactors, and production build repairs.",
            "OpenClaw + MiniMax 2.5 for the Telegram agent that reads indicators and prepares market summaries.",
            "Playwright/browser checks for mobile menu, theme screenshots, and visual verification.",
          ],
          proof: "Live app, production build, theme-specific product captures, and Telegram research output.",
          stack: ["Next.js", "TypeScript", "Supabase", "Binance WS", "Telegram", "OpenClaw"],
          href: "https://frontend-sigma-murex-aakt3b4x1w.vercel.app/",
          githubHref: "https://github.com/Benz-srg/paper-trade",
          demoHref: "/interview-demo.html#paper-trade",
          linkLabel: "Live app",
        },
        {
          index: "02",
          title: "Hermes AI",
          tag: "Telegram-native AI project manager",
          premise: "A Telegram workflow that turns loose requests into scoped tickets, Definition of Done, execution tracking, QA review, and reports.",
          built: [
            "Telegram-first brainstorm interface that clarifies requirements before creating any ticket.",
            "Paperclip AI ticket creation with DoD checklist and unit-test expectations.",
            "Project/report channels that keep execution, QA, and delivery status visible.",
          ],
          ai: [
            "Hermes AI for requirement clarification and project-management conversation loops.",
            "Paperclip AI for structured task creation and TDD-oriented execution handoff.",
            "Codex for portfolio integration, content structure, and UI polish.",
          ],
          proof: "Live Telegram channel screenshots, ticket/project/report flows, and local workflow demo.",
          stack: ["Telegram", "Paperclip AI", "Codex", "TDD", "QA"],
          href: "#hermes",
          githubHref: "https://github.com/Benz-srg",
          demoHref: "/interview-demo.html#hermes",
          linkLabel: "View flow",
        },
        {
          index: "03",
          title: "Saju Me",
          tag: "Fullstack TypeScript domain engine",
          premise: "A rule-heavy Four Pillars product transformed into typed calculation APIs, localized dashboards, and readable visual analysis.",
          built: [
            "Typed domain engine for pillars, day master strength, element dynamics, luck cycles, interactions, and Ten Gods.",
            "Session-based product flow from birth input to computed analysis dashboard.",
            "Multilingual UI with charts, strength meters, timeline views, tabs, and localized interpretation.",
          ],
          ai: [
            "Codex and Claude Code for TypeScript refactors, API flow, UI structure, and content iteration.",
            "AI-assisted domain decomposition to keep calculation logic separate from interpretation and UI.",
            "Build verification and GitHub push workflow handled through agent-assisted development.",
          ],
          proof: "GitHub repo, deterministic TypeScript engine, API-backed UX, and multilingual dashboard.",
          stack: ["Next.js", "TypeScript", "API Routes", "Recharts", "i18n"],
          href: "https://github.com/Benz-srg/saju-me",
          githubHref: "https://github.com/Benz-srg/saju-me",
          demoHref: "/interview-demo.html#saju-me",
          linkLabel: "GitHub",
        },
      ],
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

    projectCases: {
      eyebrow: "Selected Projects",
      title: "Case study ที่อ่านง่าย และ build ผ่าน AI-assisted workflow",
      copy: "แต่ละโปรเจกต์เล่าแบบสั้นและตรง: ปัญหาคืออะไร, ผม build อะไร, AI ช่วยตรงไหน และมีอะไรให้ตรวจดูได้",
      builtBadge: "Built with AI",
      columns: {
        built: "สิ่งที่ build",
        ai: "AI workflow",
        proof: "หลักฐาน",
      },
      items: [
        {
          index: "01",
          title: "Nexus AI Paper Trade",
          tag: "Trading web app · BTC/USDT · live dashboard",
          premise: "Paper trading lab ที่รวม chart review, order history, research signals และ Telegram summaries ให้เป็น feedback loop เดียว",
          built: [
            "Next.js trading dashboard พร้อม light/dark screenshots, chart views, portfolio table, stats และ research panels",
            "Backend API layer สำหรับ trade records, research data, Binance market stream และ portfolio performance",
            "Telegram research output ที่แปลง indicator เป็นรายงาน BTC/USDT รายวัน",
          ],
          ai: [
            "ใช้ Codex และ Claude Code ช่วย build frontend, แก้ responsive, refactor component และซ่อม production build",
            "ใช้ OpenClaw + MiniMax 2.5 สำหรับ Telegram agent ที่อ่าน indicator และสรุปตลาด",
            "ใช้ Playwright/browser checks ตรวจ mobile menu, theme screenshots และ visual verification",
          ],
          proof: "Live app, production build, product captures แยก theme และ Telegram research output",
          stack: ["Next.js", "TypeScript", "Supabase", "Binance WS", "Telegram", "OpenClaw"],
          href: "https://frontend-sigma-murex-aakt3b4x1w.vercel.app/",
          githubHref: "https://github.com/Benz-srg/paper-trade",
          demoHref: "/interview-demo.html#paper-trade",
          linkLabel: "ดูเว็บสด",
        },
        {
          index: "02",
          title: "Hermes AI",
          tag: "Telegram-native AI project manager",
          premise: "Workflow บน Telegram ที่เปลี่ยนคำสั่งกว้าง ๆ เป็น ticket, Definition of Done, execution tracking, QA review และ reports",
          built: [
            "Telegram-first brainstorm interface ที่ช่วย clarify requirement ก่อนสร้าง ticket",
            "Paperclip AI ticket creation พร้อม DoD checklist และ unit-test expectations",
            "Project/report channels ที่ทำให้ execution, QA และ delivery status มองเห็นได้",
          ],
          ai: [
            "ใช้ Hermes AI สำหรับ requirement clarification และ project-management conversation loops",
            "ใช้ Paperclip AI สร้าง task แบบมีโครงสร้างและรองรับ TDD handoff",
            "ใช้ Codex สำหรับ portfolio integration, content structure และ UI polish",
          ],
          proof: "Telegram channel screenshots, ticket/project/report flows และ local workflow demo",
          stack: ["Telegram", "Paperclip AI", "Codex", "TDD", "QA"],
          href: "#hermes",
          githubHref: "https://github.com/Benz-srg",
          demoHref: "/interview-demo.html#hermes",
          linkLabel: "ดู flow",
        },
        {
          index: "03",
          title: "Saju Me",
          tag: "Fullstack TypeScript domain engine",
          premise: "ระบบ Four Pillars ที่ rule-heavy ถูกแปลงเป็น typed calculation APIs, localized dashboards และ visual analysis ที่อ่านง่าย",
          built: [
            "Typed domain engine สำหรับ pillars, day master strength, element dynamics, luck cycles, interactions และ Ten Gods",
            "Session-based product flow จาก birth input ไปจนถึง analysis dashboard",
            "Multilingual UI พร้อม charts, strength meters, timeline, tabs และ localized interpretation",
          ],
          ai: [
            "ใช้ Codex และ Claude Code ช่วย refactor TypeScript, API flow, UI structure และ content iteration",
            "ใช้ AI-assisted domain decomposition เพื่อแยก calculation logic ออกจาก interpretation และ UI",
            "ใช้ agent-assisted workflow สำหรับ build verification และ GitHub push",
          ],
          proof: "GitHub repo, deterministic TypeScript engine, API-backed UX และ multilingual dashboard",
          stack: ["Next.js", "TypeScript", "API Routes", "Recharts", "i18n"],
          href: "https://github.com/Benz-srg/saju-me",
          githubHref: "https://github.com/Benz-srg/saju-me",
          demoHref: "/interview-demo.html#saju-me",
          linkLabel: "GitHub",
        },
      ],
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
