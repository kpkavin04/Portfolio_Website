/**
 * Converts source images to WebP at roughly 2x their rendered size.
 * Run with: npm run optimize:images
 */
import { readdir, stat } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';
import sharp from 'sharp';

const ASSETS = new URL('../src/assets/', import.meta.url).pathname;

// Widths are 2x the largest size each image is rendered at, so they stay
// crisp on retina displays without shipping full-resolution originals.
const WIDTHS = {
  'kavin_pic.jpg': 500,          // 192px avatar
  'kavin_buggy_ride.jpg': 700,   // 288x320 about photo
  'kavin_cdg_pic.jpg': 800,      // timeline cards
  'kavin_motional_pic.jpg': 800,
  'kavin_shopee_pic.jpg': 800,
  'kavin_fintech_pic.png': 800,
  'kavin_quadrant_pic.png': 800,
  'kavin_transcom_pic.png': 800,
};

const ICON_WIDTH = 200; // hexagon renders the icon at ~98px
const PROJECT_WIDTH = 800;

const ICONS = new Set([
  'python.png', 'java.png', 'r.png', 'javascript.png', 'typescript.png', 'html.png',
  'reactjs.png', 'tailwind.png', 'streamlit.png', 'openCV.png', 'numpy.png',
  'pandas.png', 'matplotlib.png', 'seaborn.png', 'scikitLearn.png', 'tensorflow.png',
  'fastAPI.png', 'folium.png', 'mysql.png', 'postgresql.png', 'mongodb.png',
  'tableu.png', 'aws.png', 'azure.png', 'virtualbox.png', 'kalilinux.png',
  'wireshark.png', 'nmap.png', 'sentinelOne.png', 'docker.png', 'git.png', 'linux.png',
  'temporal.png', 'nodejs.png', 'express.png',
]);

const SOURCE_EXT = new Set(['.jpg', '.jpeg', '.png', '.JPG', '.webp']);

const widthFor = (file) => WIDTHS[file] ?? (ICONS.has(file) ? ICON_WIDTH : PROJECT_WIDTH);

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

const files = (await readdir(ASSETS)).filter((f) => SOURCE_EXT.has(extname(f)));

let before = 0;
let after = 0;

for (const file of files.sort()) {
  const source = join(ASSETS, file);
  const target = join(ASSETS, `${basename(file, extname(file))}.webp`);

  // Skip files that are already the optimised output of a previous run.
  if (source === target) continue;

  const originalSize = (await stat(source)).size;
  const image = sharp(source);
  const { width } = await image.metadata();
  const targetWidth = widthFor(file);

  await image
    .resize({ width: Math.min(targetWidth, width ?? targetWidth), withoutEnlargement: true })
    .webp({ quality: ICONS.has(file) ? 85 : 80 })
    .toFile(target);

  const newSize = (await stat(target)).size;
  before += originalSize;
  after += newSize;

  const saved = ((1 - newSize / originalSize) * 100).toFixed(0);
  console.log(`${file.padEnd(45)} ${kb(originalSize).padStart(9)} -> ${kb(newSize).padStart(8)}  (-${saved}%)`);
}

console.log(`\nTotal: ${kb(before)} -> ${kb(after)} (-${((1 - after / before) * 100).toFixed(1)}%)`);
