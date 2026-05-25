"use client";

import {
  Bot,
  Database,
  Send,
  Zap,
  Server,
  MessageSquare,
  Brain,
  GitBranch,
  Eye,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import { useLocale } from "@/components/locale-context";

/* ── Bilingual content ─────────────────────────────────────── */
const content = {
  en: {
    eyebrow: "td-bot Workflows",
    hosting: "AWS Lightsail",
    title: "Scheduled learning, reporting, and paper-order automation.",
    description:
      "Three cron workflows run daily — learning market patterns, generating scalp orders, and sending Telegram reports.",

    /* Command chart */
    commandTitle: "Bot Commands",
    commands: [
      { cmd: "summary", action: "Portfolio + orders + P&L" },
      { cmd: "analyze", action: "Market analysis + signals" },
      { cmd: "create orders", action: "Create new planned orders" },
      { cmd: "close orders", action: "Close open positions" },
      { cmd: "cancel orders", action: "Cancel pending orders" },
      { cmd: "status", action: "View all pending orders" },
      { cmd: "backtest", action: "Test indicator strategy" },
      { cmd: "research", action: "News + sentiment analysis" },
    ],

    /* Interaction flow */
    flowTitle: "Example Interactions",
    flows: [
      { user: '"summarize portfolio"', bot: "Fetch portfolio + orders + P&L from Supabase" },
      { user: '"analyze market"', bot: "Fetch BTC price + F&G + signals + indicators" },
      { user: '"create 10 orders"', bot: "Create 10 orders at different levels" },
      { user: '"close all orders"', bot: "Close all positions + cancel all pending" },
      { user: '"backtest STO"', bot: "Create backfill script + measure Win Rate" },
      { user: '"research"', bot: "Analyze news + indicators + recommend" },
    ],

    /* Cron lanes */
    lanes: [
      {
        key: "scalp",
        time: "01:00 UTC",
        script: "daily_scalp_orders",
        color: "emerald",
        icon: Zap,
        label: "Scalp Orders",
        steps: [
          "Fetch BTC price + RSI",
          "RSI < 35 → BUY at support",
          "RSI > 65 → SELL at resistance",
          "Otherwise → BUY + SELL",
        ],
        output: "Supabase DB",
        outputIcon: Database,
      },
      {
        key: "report",
        time: "02:00 / 10:00 UTC",
        script: "btc_usdt_supabase_report",
        color: "cyan",
        icon: Send,
        label: "Morning / Evening Report",
        steps: [
          "Fetch BTC price + Fear & Greed",
          "Calculate session stats",
          "Send formatted report",
        ],
        output: "Telegram",
        outputIcon: Send,
      },
      {
        key: "learning",
        time: "08:00 / 16:00 / 00:00 UTC",
        script: "daily_learning",
        color: "violet",
        icon: Bot,
        label: "Daily Learning (×3/day)",
        steps: [
          "F&G + CryptoPanic → sentiment",
          "Evaluate yesterday's predictions",
          "Generate MA / RSI / MACD signals",
          "Update model beliefs + accuracy",
          "Send Telegram market report",
          "Analyze trades + adjust orders",
        ],
        output: "Supabase + Telegram",
        outputIcon: Database,
      },
    ],

    /* Agents */
    agentsTitle: "Agents (Coming Soon)",
    agents: [
      { name: "Market Watcher", desc: "Monitor price 24/7, alert when price hits target" },
      { name: "Research Agent", desc: "Analyze backtest results + find new params" },
    ],

    /* Memory */
    memoryTitle: "Memory System",
    memory: [
      "MEMORY.md — long-term context",
      "memory/YYYY-MM-DD.md — daily log",
      "Every decision is recorded",
    ],

    /* MCP / Skills */
    mcpTitle: "MCP Tools",
    mcp: [
      { name: "tradingview_indicators", desc: "RSI, MACD, STO, BB, MA, EMA" },
      { name: "obsidian", desc: "Read/write notes in vault" },
    ],

    pluginsTitle: "Plugins",
    plugins: [
      { name: "td-tg-bot", where: "Fly.io", desc: "Telegram bot API" },
      { name: "obsidian_mcp_server", where: "port 8081", desc: "Obsidian MCP server" },
      { name: "supabase", where: "cloud", desc: "Trade/order database" },
    ],

    dbTitle: "Supabase Tables",
    tables: [
      ["paper_trades", "Executed trade history"],
      ["planned_orders", "Orders waiting for execution"],
      ["indicator_signals", "Daily predictive signals"],
      ["indicator_performance", "Cumulative indicator accuracy"],
      ["model_beliefs", "Model regime beliefs"],
      ["news_sentiment", "News-derived sentiment"],
    ],
  },

  th: {
    eyebrow: "td-bot Workflows",
    hosting: "AWS Lightsail",
    title: "ระบบเรียนรู้ รายงาน และสร้าง paper orders ตาม schedule.",
    description:
      "3 cron workflows รันทุกวัน — เรียนรู้รูปแบบตลาด สร้าง scalp orders และส่งรายงานเข้า Telegram",

    commandTitle: "คำสั่งของ Bot",
    commands: [
      { cmd: "สรุปผล", action: "ดู portfolio, orders, P&L" },
      { cmd: "วิเคราะห์", action: "วิเคราะห์ market + signals" },
      { cmd: "สร้าง orders", action: "สร้าง orders ใหม่" },
      { cmd: "ปิด orders", action: "ปิด positions" },
      { cmd: "cancel orders", action: "ยกเลิก pending orders" },
      { cmd: "สถานะ", action: "ดู pending orders ทั้งหมด" },
      { cmd: "backtest", action: "ทดสอบ indicator ใหม่" },
      { cmd: "research", action: "วิเคราะห์ข่าว + sentiment" },
    ],

    flowTitle: "ตัวอย่างการทำงาน",
    flows: [
      { user: '"สรุปผลประกอบการ"', bot: "ดึง portfolio + orders + P&L จาก Supabase" },
      { user: '"วิเคราะห์ตลาด"', bot: "ดึง BTC price + F&G + signals + indicators" },
      { user: '"สร้าง orders 10 อัน"', bot: "สร้าง 10 orders ที่ levels ต่างๆ" },
      { user: '"ปิดทุกออเดอร์"', bot: "close all positions + cancel all pending" },
      { user: '"backtest STO"', bot: "สร้าง backfill script + วัด WR" },
      { user: '"research"', bot: "วิเคราะห์ข่าว + indicators + แนะนำ" },
    ],

    lanes: [
      {
        key: "scalp",
        time: "01:00 UTC",
        script: "daily_scalp_orders",
        color: "emerald",
        icon: Zap,
        label: "Scalp Orders",
        steps: [
          "ดึงราคา BTC + RSI",
          "RSI < 35 → BUY ที่ support",
          "RSI > 65 → SELL ที่ resistance",
          "นอกนั้น → BUY + SELL",
        ],
        output: "Supabase DB",
        outputIcon: Database,
      },
      {
        key: "report",
        time: "02:00 / 10:00 UTC",
        script: "btc_usdt_supabase_report",
        color: "cyan",
        icon: Send,
        label: "รายงานเช้า / เย็น",
        steps: [
          "ดึงราคา BTC + Fear & Greed",
          "คำนวณ session stats",
          "ส่งรายงานเข้า Telegram",
        ],
        output: "Telegram",
        outputIcon: Send,
      },
      {
        key: "learning",
        time: "08:00 / 16:00 / 00:00 UTC",
        script: "daily_learning",
        color: "violet",
        icon: Bot,
        label: "Daily Learning (×3/วัน)",
        steps: [
          "F&G + CryptoPanic → sentiment",
          "ประเมิน predictions เมื่อวาน",
          "คำนวณ MA / RSI / MACD signals",
          "อัปเดต model beliefs + accuracy",
          "ส่งรายงานตลาดเข้า Telegram",
          "วิเคราะห์ trades + ปรับ orders",
        ],
        output: "Supabase + Telegram",
        outputIcon: Database,
      },
    ],

    agentsTitle: "Agents (กำลังจะมี)",
    agents: [
      { name: "Market Watcher", desc: "เฝ้าราคา 24/7 แจ้งเตือนเมื่อราคาถึง target" },
      { name: "Research Agent", desc: "วิเคราะห์ backtest + หา params ใหม่" },
    ],

    memoryTitle: "ระบบ Memory",
    memory: [
      "MEMORY.md — บันทึกระยะยาว",
      "memory/YYYY-MM-DD.md — บันทึกประจำวัน",
      "ทุก decision ที่ทำ → จดไว้",
    ],

    mcpTitle: "MCP Tools",
    mcp: [
      { name: "tradingview_indicators", desc: "RSI, MACD, STO, BB, MA, EMA" },
      { name: "obsidian", desc: "อ่าน/เขียน notes ใน vault" },
    ],

    pluginsTitle: "Plugins",
    plugins: [
      { name: "td-tg-bot", where: "Fly.io", desc: "Telegram bot API รับคำสั่ง" },
      { name: "obsidian_mcp_server", where: "port 8081", desc: "MCP server สำหรับ Obsidian" },
      { name: "supabase", where: "cloud", desc: "Database สำหรับ trades/orders" },
    ],

    dbTitle: "Supabase Tables",
    tables: [
      ["paper_trades", "ประวัติ trades ที่ executed"],
      ["planned_orders", "orders ที่รอ execution"],
      ["indicator_signals", "signals ที่ predict ทุกวัน"],
      ["indicator_performance", "สถิติ accuracy สะสม"],
      ["model_beliefs", "beliefs ของ model"],
      ["news_sentiment", "sentiment จากข่าว"],
    ],
  },
};

const colorMap = {
  emerald: {
    header: "flow-header--emerald",
    dot: "flow-dot--emerald",
    output: "flow-output--emerald",
  },
  cyan: {
    header: "flow-header--cyan",
    dot: "flow-dot--cyan",
    output: "flow-output--cyan",
  },
  violet: {
    header: "flow-header--violet",
    dot: "flow-dot--violet",
    output: "flow-output--violet",
  },
};

export function WorkflowSection() {
  const { locale } = useLocale();
  const copy = content[locale];

  return (
    <section id="workflow" className="workflow-showcase site-section py-16">
      {/* Header */}
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
            <Bot size={16} /> {copy.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
            {copy.title}
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-400">
            {copy.description}
          </p>
        </div>
        <div className="hosting-badge hosting-badge--cloud flex-shrink-0">
          <span className="hosting-badge__dot" aria-hidden="true" />
          <Server size={13} />
          {copy.hosting}
        </div>
      </div>

      {/* ── Command + Flow chart ─────────────────────── */}
      <div className="tdb-chart">
        {/* Left: command table */}
        <div className="tdb-commands">
          <p className="tdb-section-title">
            <MessageSquare size={14} />
            {copy.commandTitle}
          </p>
          <div className="tdb-cmd-grid">
            {copy.commands.map(({ cmd, action }) => (
              <div key={cmd} className="tdb-cmd-row">
                <code className="tdb-cmd">{cmd}</code>
                <span className="tdb-cmd-arrow">→</span>
                <span className="tdb-cmd-action">{action}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Center divider */}
        <div className="tdb-divider" aria-hidden="true">
          <span />
        </div>

        {/* Right: interaction flows */}
        <div className="tdb-flows">
          <p className="tdb-section-title">
            <Brain size={14} />
            {copy.flowTitle}
          </p>
          <div className="tdb-flow-list">
            {copy.flows.map(({ user, bot }) => (
              <div key={user} className="tdb-flow-item">
                <div className="tdb-flow-user">
                  <span className="tdb-bubble tdb-bubble--user">{user}</span>
                </div>
                <div className="tdb-flow-bot">
                  <span className="tdb-bubble tdb-bubble--bot">→ {bot}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Cron Flowchart ───────────────────────────── */}
      <div className="flow-grid mt-6">
        {copy.lanes.map((lane) => {
          const LaneIcon = lane.icon;
          const OutIcon = lane.outputIcon;
          const colors = colorMap[lane.color as keyof typeof colorMap];

          return (
            <div key={lane.key} className="flow-lane">
              <div className={`flow-header ${colors.header}`}>
                <div className="flow-header__icon">
                  <LaneIcon size={16} />
                </div>
                <div>
                  <p className="flow-header__time">{lane.time}</p>
                  <p className="flow-header__script">{lane.script}</p>
                </div>
              </div>
              <div className="flow-connector" aria-hidden="true">
                <span />
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M0 0L5 6L10 0" fill="currentColor" />
                </svg>
              </div>
              <div className="flow-process">
                <p className="flow-process__label">{lane.label}</p>
                <ol className="flow-steps">
                  {lane.steps.map((step, i) => (
                    <li key={step} className="flow-step-item">
                      <span className={`flow-dot ${colors.dot}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="flow-connector" aria-hidden="true">
                <span />
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M0 0L5 6L10 0" fill="currentColor" />
                </svg>
              </div>
              <div className={`flow-output ${colors.output}`}>
                <OutIcon size={14} />
                <span>{lane.output}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Agents + Memory + MCP row ────────────────── */}
      <div className="tdb-meta-grid mt-6">
        {/* Agents */}
        <div className="tdb-meta-card">
          <p className="tdb-section-title">
            <GitBranch size={14} />
            {copy.agentsTitle}
          </p>
          {copy.agents.map(({ name, desc }) => (
            <div key={name} className="tdb-meta-row">
              <span className="tdb-meta-name">{name}</span>
              <span className="tdb-meta-desc">{desc}</span>
            </div>
          ))}
        </div>

        {/* Memory */}
        <div className="tdb-meta-card">
          <p className="tdb-section-title">
            <Eye size={14} />
            {copy.memoryTitle}
          </p>
          {copy.memory.map((line) => (
            <div key={line} className="tdb-meta-row">
              <span className="tdb-meta-desc">{line}</span>
            </div>
          ))}
        </div>

        {/* MCP */}
        <div className="tdb-meta-card">
          <p className="tdb-section-title">
            <RefreshCw size={14} />
            {copy.mcpTitle}
          </p>
          {copy.mcp.map(({ name, desc }) => (
            <div key={name} className="tdb-meta-row">
              <code className="tdb-meta-name">{name}</code>
              <span className="tdb-meta-desc">{desc}</span>
            </div>
          ))}
        </div>

        {/* Plugins */}
        <div className="tdb-meta-card">
          <p className="tdb-section-title">
            <AlertCircle size={14} />
            {copy.pluginsTitle}
          </p>
          {copy.plugins.map(({ name, where, desc }) => (
            <div key={name} className="tdb-meta-row">
              <div>
                <code className="tdb-meta-name">{name}</code>
                <span className="tdb-meta-where">{where}</span>
              </div>
              <span className="tdb-meta-desc">{desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* DB Tables */}
      <div className="flow-db-panel mt-6">
        <p className="flow-db-panel__title">
          <Database size={15} />
          {copy.dbTitle}
        </p>
        <div className="flow-db-grid">
          {copy.tables.map(([name, detail]) => (
            <div key={name} className="flow-db-row">
              <code>{name}</code>
              <p>{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
