/**
 * Builds the 1200x630 link-preview image used by og:image / twitter:image.
 * Run with: npm run generate:og
 */
import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#4ade80" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#000000" />
  <rect y="606" width="1200" height="24" fill="url(#accent)" />
  <text x="80" y="250" font-family="Helvetica, Arial, sans-serif" font-size="86" font-weight="700" fill="#ffffff">Kavin Parthipan</text>
  <text x="80" y="330" font-family="Helvetica, Arial, sans-serif" font-size="46" font-weight="700" fill="url(#accent)">Software Engineer</text>
  <text x="80" y="410" font-family="Helvetica, Arial, sans-serif" font-size="32" fill="#9ca3af">Computer Science @ National University of Singapore</text>
  <text x="80" y="462" font-family="Helvetica, Arial, sans-serif" font-size="32" fill="#9ca3af">Python · TypeScript · FastAPI · React · Docker</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(new URL('../public/og-image.png', import.meta.url).pathname);

console.log('Wrote public/og-image.png');
