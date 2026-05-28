import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const publicDir = join(root, "public");
const tmpDir = "/private/tmp/rust-plugin-builder-demo-video";

const htmlOut = join(publicDir, "rust-plugin-builder-demo.html");
const mp4Out = join(publicDir, "rust-plugin-builder-demo.mp4");

rmSync(tmpDir, { recursive: true, force: true });
mkdirSync(tmpDir, { recursive: true });

const palette = {
  ink: "#070a12",
  panel: "#0d1224",
  panel2: "#111a32",
  line: "#273856",
  cyan: "#22d3ee",
  violet: "#8b5cf6",
  green: "#34d399",
  amber: "#f59e0b",
  text: "#e5eefc",
  muted: "#8fa5c5",
  red: "#fb7185",
};

function svgText(lines, x, y, size = 34, fill = palette.text, weight = 600, lineHeight = 1.28) {
  return lines.map((line, index) => (
    `<text x="${x}" y="${y + index * size * lineHeight}" fill="${fill}" font-size="${size}" font-weight="${weight}">${line}</text>`
  )).join("\n");
}

function pill(label, x, y, w, color = palette.cyan) {
  return `
    <rect x="${x}" y="${y}" width="${w}" height="44" rx="22" fill="${color}" fill-opacity="0.14" stroke="${color}" stroke-opacity="0.48"/>
    <text x="${x + 22}" y="${y + 29}" fill="${color}" font-size="18" font-weight="800" letter-spacing="2">${label}</text>
  `;
}

function panel(x, y, w, h, title, accent = palette.cyan) {
  return `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="24" fill="${palette.panel}" stroke="${palette.line}" stroke-width="2"/>
    <rect x="${x}" y="${y}" width="${w}" height="66" rx="24" fill="${accent}" fill-opacity="0.1"/>
    <text x="${x + 28}" y="${y + 42}" fill="${accent}" font-size="20" font-weight="900" letter-spacing="1">${title}</text>
  `;
}

function node(label, x, y, w, accent) {
  return `
    <rect x="${x}" y="${y}" width="${w}" height="84" rx="20" fill="${palette.panel2}" stroke="${accent}" stroke-opacity="0.58" stroke-width="2"/>
    <circle cx="${x + 42}" cy="${y + 42}" r="15" fill="${accent}" fill-opacity="0.25" stroke="${accent}"/>
    <text x="${x + 72}" y="${y + 50}" fill="${palette.text}" font-size="22" font-weight="800">${label}</text>
  `;
}

function shell(lines, x, y, w, h) {
  return `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="20" fill="#050814" stroke="#1e2c4a" stroke-width="2"/>
    <circle cx="${x + 28}" cy="${y + 28}" r="6" fill="${palette.red}"/>
    <circle cx="${x + 50}" cy="${y + 28}" r="6" fill="${palette.amber}"/>
    <circle cx="${x + 72}" cy="${y + 28}" r="6" fill="${palette.green}"/>
    ${lines.map((line, i) => `<text x="${x + 30}" y="${y + 74 + i * 34}" fill="${line[1] || palette.muted}" font-size="22" font-family="SFMono-Regular, Menlo, monospace">${line[0]}</text>`).join("\n")}
  `;
}

function base(content) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glow1" cx="18%" cy="20%" r="55%">
        <stop offset="0%" stop-color="${palette.violet}" stop-opacity="0.34"/>
        <stop offset="100%" stop-color="${palette.violet}" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="glow2" cx="85%" cy="76%" r="50%">
        <stop offset="0%" stop-color="${palette.cyan}" stop-opacity="0.22"/>
        <stop offset="100%" stop-color="${palette.cyan}" stop-opacity="0"/>
      </radialGradient>
      <style>
        text { font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
      </style>
    </defs>
    <rect width="1920" height="1080" fill="${palette.ink}"/>
    <rect width="1920" height="1080" fill="url(#glow1)"/>
    <rect width="1920" height="1080" fill="url(#glow2)"/>
    <path d="M0 840 C360 720 520 900 880 780 C1220 668 1400 700 1920 560" fill="none" stroke="#223154" stroke-width="2" opacity="0.6"/>
    <path d="M0 900 C420 780 580 965 940 842 C1300 720 1500 765 1920 620" fill="none" stroke="#17233f" stroke-width="2" opacity="0.8"/>
    ${content}
  </svg>`;
}

const slides = [
  base(`
    ${pill("INTERVIEW DEMO", 112, 94, 252, palette.cyan)}
    ${svgText(["rust-plugin-builder"], 112, 246, 86, palette.text, 900, 1.05)}
    ${svgText(["Agentic AI plugins, WASM isolation,", "workflow hooks, and realtime events -", "all designed as Rust-native platform primitives."], 118, 370, 40, palette.muted, 600, 1.34)}
    ${node("Plugin SDK", 1040, 180, 310, palette.cyan)}
    ${node("WASM Sandbox", 1390, 180, 330, palette.violet)}
    <path d="M1350 222 H1390" stroke="${palette.cyan}" stroke-width="4" stroke-linecap="round"/>
    ${node("Event Bus", 1040, 320, 310, palette.green)}
    ${node("Workflow Trigger", 1390, 320, 330, palette.amber)}
    <path d="M1350 362 H1390" stroke="${palette.green}" stroke-width="4" stroke-linecap="round"/>
    ${shell([
      ["> rpb plugin run ai-reviewer", palette.green],
      ["manifest loaded: ai.review.v1", palette.muted],
      ["capabilities: ai.generate, http.fetch, events.publish", palette.cyan],
      ["sandbox: wasi preview2 | memory 64MB | cpu budget 150ms", palette.violet],
    ], 1040, 515, 680, 300)}
  `),
  base(`
    ${pill("PLUGIN FIRST", 112, 94, 228, palette.violet)}
    ${svgText(["Typed manifest + capability gates"], 112, 205, 58, palette.text, 900)}
    ${panel(112, 330, 760, 500, "plugin.rpb.toml", palette.violet)}
    ${svgText([
      "name = \"ai-reviewer\"",
      "runtime = \"wasm32-wasi\"",
      "entrypoint = \"review.wasm\"",
      "",
      "[permissions]",
      "ai.generate = [\"sonnet\", \"gpt\"]",
      "http.fetch = [\"api.github.com\"]",
      "events.publish = [\"review.*\"]",
    ], 160, 420, 30, palette.text, 700, 1.42)}
    ${panel(980, 330, 660, 500, "host enforcement", palette.cyan)}
    ${node("Resolve manifest", 1035, 430, 540, palette.cyan)}
    ${node("Check capability token", 1035, 552, 540, palette.green)}
    ${node("Attach scoped tool handles", 1035, 674, 540, palette.violet)}
  `),
  base(`
    ${pill("SANDBOX", 112, 94, 178, palette.cyan)}
    ${svgText(["WASM host foundation"], 112, 205, 64, palette.text, 900)}
    ${svgText(["Plugins run as isolated modules. The host owns identity,", "permissions, resource budgets, lifecycle events, and tool access."], 118, 296, 34, palette.muted, 600, 1.35)}
    ${panel(116, 430, 500, 320, "plugin module", palette.violet)}
    <text x="166" y="548" fill="${palette.text}" font-size="34" font-weight="900">review.wasm</text>
    <text x="166" y="608" fill="${palette.muted}" font-size="26">guest calls imported host APIs</text>
    <path d="M638 590 H854" stroke="${palette.cyan}" stroke-width="6" stroke-linecap="round"/>
    <path d="M830 565 L870 590 L830 615" fill="none" stroke="${palette.cyan}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    ${panel(900, 390, 780, 420, "Rust host runtime", palette.cyan)}
    ${node("Lifecycle: install -> load -> run -> stop", 960, 500, 650, palette.green)}
    ${node("Limits: memory, time, network, file scopes", 960, 625, 650, palette.amber)}
  `),
  base(`
    ${pill("ORCHESTRATION", 112, 94, 254, palette.green)}
    ${svgText(["Events become workflow triggers"], 112, 205, 62, palette.text, 900)}
    ${node("plugin.ai-reviewer.completed", 120, 420, 450, palette.green)}
    ${node("event bus stream", 700, 420, 350, palette.cyan)}
    ${node("workflow: pr-review", 1180, 420, 430, palette.amber)}
    <path d="M570 462 H700" stroke="${palette.green}" stroke-width="5" stroke-linecap="round"/>
    <path d="M1050 462 H1180" stroke="${palette.cyan}" stroke-width="5" stroke-linecap="round"/>
    ${shell([
      ["[12:41:08] plugin.loaded ai-reviewer", palette.green],
      ["[12:41:09] ai.tool.invoke provider=codex", palette.cyan],
      ["[12:41:10] events.publish review.completed", palette.green],
      ["[12:41:10] workflow.trigger pr-review", palette.amber],
      ["[12:41:11] workflow.completed status=approved", palette.green],
    ], 360, 640, 1200, 250)}
  `),
  base(`
    ${pill("RESULT", 112, 94, 150, palette.amber)}
    ${svgText(["A platform foundation for Agentic AI extension systems"], 112, 205, 56, palette.text, 900, 1.16)}
    ${svgText(["Built to show senior-level ownership across backend architecture,", "runtime systems, frontend visualization, and AI-capable workflows."], 118, 345, 36, palette.muted, 600, 1.35)}
    ${panel(112, 520, 500, 250, "developer value", palette.cyan)}
    ${svgText(["Create plugins", "Run safely", "Observe everything"], 165, 608, 30, palette.text, 800, 1.55)}
    ${panel(710, 520, 500, 250, "platform value", palette.violet)}
    ${svgText(["Reusable runtime", "Workflow automation", "Realtime debugging"], 763, 608, 30, palette.text, 800, 1.55)}
    ${panel(1308, 520, 500, 250, "AI value", palette.green)}
    ${svgText(["Tool-enabled agents", "Permissioned providers", "Auditable results"], 1361, 608, 30, palette.text, 800, 1.55)}
  `),
];

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>rust-plugin-builder - Agentic AI Runtime Demo</title>
  <style>
    :root {
      color-scheme: dark;
      --bg: #070a12;
      --panel: rgba(13, 18, 36, 0.86);
      --line: rgba(148, 163, 184, 0.22);
      --text: #e5eefc;
      --muted: #8fa5c5;
      --cyan: #22d3ee;
      --violet: #8b5cf6;
      --green: #34d399;
      --amber: #f59e0b;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background:
        radial-gradient(circle at 12% 10%, rgba(139, 92, 246, 0.28), transparent 34%),
        radial-gradient(circle at 88% 72%, rgba(34, 211, 238, 0.18), transparent 35%),
        var(--bg);
      color: var(--text);
      overflow-x: hidden;
    }
    main { width: min(1180px, calc(100vw - 40px)); margin: 0 auto; padding: 56px 0; }
    .hero { display: grid; grid-template-columns: 1fr 430px; gap: 24px; align-items: stretch; min-height: 480px; }
    .card { background: var(--panel); border: 1px solid var(--line); border-radius: 24px; box-shadow: 0 24px 90px rgba(0,0,0,.32); backdrop-filter: blur(18px); }
    .hero-copy { padding: 44px; position: relative; overflow: hidden; }
    .eyebrow { display: inline-flex; gap: 8px; align-items: center; padding: 8px 12px; border: 1px solid rgba(34,211,238,.35); border-radius: 999px; color: var(--cyan); font-size: 12px; font-weight: 900; letter-spacing: .12em; text-transform: uppercase; }
    h1 { font-size: clamp(44px, 7vw, 84px); line-height: .95; letter-spacing: -0.04em; margin: 28px 0 22px; max-width: 740px; }
    p { color: var(--muted); line-height: 1.7; font-size: 17px; margin: 0; }
    .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 18px; }
    .metric { padding: 18px; border-radius: 18px; background: rgba(255,255,255,.04); border: 1px solid var(--line); }
    .metric b { display: block; font-size: 26px; margin-bottom: 4px; }
    .metric span { color: var(--muted); font-size: 13px; }
    .runtime { padding: 22px; display: flex; flex-direction: column; gap: 14px; }
    .node { padding: 16px; border-radius: 18px; background: rgba(255,255,255,.045); border: 1px solid var(--line); display: flex; gap: 12px; align-items: center; animation: pulse 3s infinite ease-in-out; }
    .dot { width: 13px; height: 13px; border-radius: 999px; background: var(--cyan); box-shadow: 0 0 24px var(--cyan); }
    .node:nth-child(2) .dot { background: var(--violet); box-shadow: 0 0 24px var(--violet); }
    .node:nth-child(3) .dot { background: var(--green); box-shadow: 0 0 24px var(--green); }
    .node:nth-child(4) .dot { background: var(--amber); box-shadow: 0 0 24px var(--amber); }
    .node strong { font-size: 15px; }
    .node small { display: block; color: var(--muted); margin-top: 3px; }
    .section { margin-top: 22px; display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
    pre { margin: 0; padding: 22px; border-radius: 22px; border: 1px solid var(--line); background: #050814; color: #cbd5e1; min-height: 286px; overflow: hidden; font-size: 14px; line-height: 1.75; }
    .flow { padding: 24px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; align-items: center; }
    .step { min-height: 132px; padding: 18px; border-radius: 18px; border: 1px solid var(--line); background: rgba(255,255,255,.04); position: relative; }
    .step:after { content: ""; position: absolute; top: 50%; right: -15px; width: 16px; height: 2px; background: var(--cyan); opacity: .75; }
    .step:last-child:after { display: none; }
    .step b { display: block; margin-bottom: 10px; }
    .step span { color: var(--muted); font-size: 13px; line-height: 1.5; }
    .logs { grid-column: 1 / -1; }
    .logs code { display: block; color: var(--green); margin: 4px 0; }
    @keyframes pulse { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
    @media (max-width: 900px) {
      .hero, .section { grid-template-columns: 1fr; }
      .flow { grid-template-columns: 1fr; }
      .step:after { display: none; }
    }
  </style>
</head>
<body>
  <main>
    <section class="hero">
      <div class="card hero-copy">
        <span class="eyebrow">Agentic AI plugin OS</span>
        <h1>rust-plugin-builder</h1>
        <p>A Rust-native platform foundation for AI-capable plugins: typed SDK contracts, WASM sandboxing, capability permissions, event publication, workflow triggers, and realtime runtime inspection.</p>
        <div class="grid">
          <div class="metric"><b>WASM</b><span>isolated plugin modules</span></div>
          <div class="metric"><b>Events</b><span>streamed workflow hooks</span></div>
          <div class="metric"><b>AI</b><span>tool/provider extension points</span></div>
        </div>
      </div>
      <aside class="card runtime">
        <div class="node"><i class="dot"></i><div><strong>Plugin manifest loaded</strong><small>ai-reviewer@0.1.0</small></div></div>
        <div class="node"><i class="dot"></i><div><strong>Capabilities granted</strong><small>ai.generate, http.fetch, events.publish</small></div></div>
        <div class="node"><i class="dot"></i><div><strong>WASM host running</strong><small>64MB memory, 150ms CPU budget</small></div></div>
        <div class="node"><i class="dot"></i><div><strong>Workflow completed</strong><small>review.completed -> pr-review</small></div></div>
      </aside>
    </section>

    <section class="section">
      <pre><code>plugin = "ai-reviewer"
runtime = "wasm32-wasi"
entrypoint = "review.wasm"

[permissions]
ai.generate = ["sonnet", "gpt"]
http.fetch = ["api.github.com"]
events.publish = ["review.*"]

[workflow.triggers]
on = "pull_request.opened"
run = "ai_review_pipeline"</code></pre>
      <div class="card flow">
        <div class="step"><b>SDK</b><span>Plugins implement typed Rust traits and declare host imports.</span></div>
        <div class="step"><b>Sandbox</b><span>The host injects scoped tools and rejects missing capabilities.</span></div>
        <div class="step"><b>Event Bus</b><span>Plugin outputs become realtime platform events.</span></div>
        <div class="step"><b>Workflow</b><span>Events trigger retryable automation pipelines.</span></div>
        <pre class="logs"><code>[12:41:08] plugin.loaded ai-reviewer</code><code>[12:41:09] ai.tool.invoke provider=codex</code><code>[12:41:10] events.publish review.completed</code><code>[12:41:11] workflow.completed status=approved</code></pre>
      </div>
    </section>
  </main>
</body>
</html>
`;

writeFileSync(htmlOut, html);

const pngFiles = [];
slides.forEach((slide, index) => {
  const svgPath = join(tmpDir, `slide-${String(index).padStart(2, "0")}.svg`);
  writeFileSync(svgPath, slide);
  const ql = spawnSync("qlmanage", ["-t", "-s", "1920", "-o", tmpDir, svgPath], { encoding: "utf8" });
  if (ql.status !== 0) {
    throw new Error(`qlmanage failed for ${svgPath}\n${ql.stderr}`);
  }
  pngFiles.push(`${svgPath}.png`);
});

const concatFile = join(tmpDir, "frames.txt");
const concatLines = [];
pngFiles.forEach((png) => {
  concatLines.push(`file '${png}'`);
  concatLines.push("duration 3.8");
});
concatLines.push(`file '${pngFiles[pngFiles.length - 1]}'`);
writeFileSync(concatFile, concatLines.join("\n"));

const ffmpeg = spawnSync("ffmpeg", [
  "-y",
  "-f", "concat",
  "-safe", "0",
  "-i", concatFile,
  "-vf", "crop=1920:1080:0:0,fps=30,format=yuv420p",
  "-movflags", "+faststart",
  mp4Out,
], { encoding: "utf8" });

if (ffmpeg.status !== 0) {
  throw new Error(`ffmpeg failed\n${ffmpeg.stderr}`);
}

console.log(`Generated ${htmlOut}`);
console.log(`Generated ${mp4Out}`);
