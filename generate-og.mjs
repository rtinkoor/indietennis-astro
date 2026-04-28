import sharp from "sharp";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675">
  <rect width="1200" height="675" fill="#0A1628"/>
  <text x="600" y="300" font-family="Georgia, serif" font-size="96" font-weight="700"
    fill="#C5E335" text-anchor="middle">iT</text>
  <text x="600" y="400" font-family="Georgia, serif" font-size="36"
    fill="#ffffff" text-anchor="middle" opacity="0.85">IndieTennis</text>
  <text x="600" y="460" font-family="Georgia, serif" font-size="22"
    fill="#ffffff" text-anchor="middle" opacity="0.5">The Independent Tennis Network</text>
</svg>`;

await sharp(Buffer.from(svg)).jpeg({ quality: 90 }).toFile("public/og-default.jpg");
console.log("OG image generated.");
