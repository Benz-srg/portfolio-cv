import { access, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";

const root = process.cwd();
const screenshotDirs = [path.join(root, ".playwright-mcp"), root, path.dirname(root)];
const tmp = path.join("/private/tmp", "portfolio-interview-demo-video");
const output = path.join(root, "public", "interview-demo.mp4");

const slides = [
  { file: "interview-slide-01.png", duration: 4 },
  { file: "interview-slide-02-paper-trade.png", duration: 7 },
  { file: "interview-slide-03-hermes.png", duration: 7 },
  { file: "interview-slide-04-saju-me.png", duration: 7 },
  { file: "interview-slide-05-closing.png", duration: 5 },
];

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: "inherit" });
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} exited with code ${code}`));
    });
  });
}

await mkdir(tmp, { recursive: true });

const segments = [];
for (let index = 0; index < slides.length; index += 1) {
  const slide = slides[index];
  let input = "";
  for (const directory of screenshotDirs) {
    const candidate = path.join(directory, slide.file);
    try {
      await access(candidate);
      input = candidate;
      break;
    } catch {
      // Try the next known screenshot output directory.
    }
  }
  if (!input) {
    throw new Error(`Missing screenshot ${slide.file}`);
  }
  const segment = path.join(tmp, `segment-${String(index + 1).padStart(2, "0")}.mp4`);

  await run("ffmpeg", [
    "-y",
    "-loop",
    "1",
    "-i",
    input,
    "-t",
    String(slide.duration),
    "-vf",
    "scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,setsar=1,format=yuv420p",
    "-r",
    "30",
    "-c:v",
    "libx264",
    segment,
  ]);

  segments.push(segment);
}

const concatFile = path.join(tmp, "concat.txt");
await writeFile(concatFile, segments.map((segment) => `file '${segment}'`).join("\n"));

await run("ffmpeg", ["-y", "-f", "concat", "-safe", "0", "-i", concatFile, "-c", "copy", output]);
