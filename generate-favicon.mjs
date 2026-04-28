import sharp from "sharp";
import { writeFileSync } from "fs";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <rect x="0" y="0" width="120" height="120" rx="24" fill="#0A1628"/>
  <text x="60" y="82" font-family="Georgia, serif" font-size="52" font-weight="700" fill="#C5E335" text-anchor="middle">iT</text>
</svg>`;

const svgBuffer = Buffer.from(svg);
await sharp(svgBuffer).resize(32, 32).toFormat("png").toFile("public/favicon-32.png");
await sharp(svgBuffer).resize(16, 16).toFormat("png").toFile("public/favicon-16.png");
await sharp(svgBuffer).resize(180, 180).toFormat("png").toFile("public/apple-touch-icon.png");
writeFileSync("public/favicon.svg", svg);
console.log("Done.");
