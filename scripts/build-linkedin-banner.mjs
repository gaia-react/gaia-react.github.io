/**
 * Builds studio/branding/assets/social/gaia-linkedin-banner.{svg,png}.
 *
 * The wordmark group is spliced from the master SVG to avoid hand-pasting
 * path data. The atmospheric haze mirrors the `gaia-haze` utility used on the
 * /why hero (warm clay top-left, cool teal mid-right, cool teal bottom-center),
 * with the SVG radials elliptically stretched via gradientTransform.
 *
 * Avatar safe zone (Steven's #OPENTOWORK ring): x=0..540, y=140..396 — all
 * brand content is anchored to x>=540.
 *
 * Rasterizes via puppeteer with Fraunces from Google Fonts so the PNG matches
 * the live site's display face.
 */

import {readFile, writeFile} from 'node:fs/promises';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..', '..');
const wordmarkMasterPath = resolve(
  repoRoot,
  'studio/branding/assets/masters/gaia-wordmark.svg',
);
const svgOutPath = resolve(
  repoRoot,
  'studio/branding/assets/social/gaia-linkedin-banner.svg',
);
const jpgOutPath = resolve(
  repoRoot,
  'studio/branding/assets/social/gaia-linkedin-banner.jpg',
);

const WIDTH = 1584;
const HEIGHT = 396;

// LinkedIn avatar (with OPEN TO WORK ring) right edge sits around x=380.
// Content column anchored well clear of the avatar.
const SAFE_X = 540;

// Wordmark sits at top of right column. The master path has ~58 units of
// leading whitespace before the G's actual left edge in the 0–1048 viewBox,
// so we offset the translate so the G aligns with the H1 text below.
const WORDMARK_WIDTH = 280;
const WORDMARK_SCALE = WORDMARK_WIDTH / 1048; // height ≈ 103 at this scale
const WORDMARK_LEFT_INSET = 30 * WORDMARK_SCALE - 2; // ≈ 6
const TEXT_X = SAFE_X + 36; // 478 — H1 text left edge
const WORDMARK_X = TEXT_X - WORDMARK_LEFT_INSET; // ≈ 462.5
const WORDMARK_Y = 58;
const WORDMARK_BOTTOM = WORDMARK_Y + 103;

// Manifesto + descriptor, stacked beneath the wordmark.
const TEXT_RIGHT = WIDTH - 96; // 1488
const H1_SIZE = 64;
const H1_LINE1_BASELINE = WORDMARK_BOTTOM + 60; // 207
const H1_LINE2_BASELINE = H1_LINE1_BASELINE + 70; // 277
const META_BASELINE = H1_LINE2_BASELINE + 40; // 317

// gaia-haze radials (from website/src/styles.css) translated to SVG.
// Each ellipse becomes a radial gradient + gradientTransform that stretches y.
const haze = [
  {
    color: 'rgba(217,119,87,', // accent
    cx: 0.15 * WIDTH,
    cy: -0.15 * HEIGHT,
    rx: 0.8 * WIDTH,
    ry: 0.7 * HEIGHT,
    stops: [
      [0, 0.38],
      [30, 0.2],
      [55, 0.05],
      [75, 0],
    ],
    id: 'haze-warm',
  },
  {
    color: 'rgba(91,138,138,', // secondary
    cx: 1.05 * WIDTH,
    cy: 0.3 * HEIGHT,
    rx: 0.7 * WIDTH,
    ry: 0.8 * HEIGHT,
    stops: [
      [0, 0.3],
      [40, 0.15],
      [70, 0],
    ],
    id: 'haze-teal-right',
  },
  {
    color: 'rgba(91,138,138,', // secondary
    cx: 0.55 * WIDTH,
    cy: 1.15 * HEIGHT,
    rx: 0.5 * WIDTH,
    ry: 0.45 * HEIGHT,
    stops: [
      [0, 0.22],
      [45, 0.1],
      [75, 0],
    ],
    id: 'haze-teal-bottom',
  },
];

const renderHazeDef = (h) => {
  const r = Math.max(h.rx, h.ry);
  const sy = h.ry / r;
  const sx = h.rx / r;
  // Scale around the ellipse center so the radial stays anchored at (cx, cy).
  const transform = `translate(${h.cx} ${h.cy}) scale(${sx.toFixed(4)} ${sy.toFixed(4)}) translate(${-h.cx} ${-h.cy})`;
  const stops = h.stops
    .map(
      ([offset, alpha]) =>
        `<stop offset="${offset}%" stop-color="${h.color}${alpha})" />`,
    )
    .join('\n      ');
  return `<radialGradient
      id="${h.id}"
      cx="${h.cx}"
      cy="${h.cy}"
      r="${r}"
      gradientUnits="userSpaceOnUse"
      gradientTransform="${transform}"
    >
      ${stops}
    </radialGradient>`;
};

const masterSvg = await readFile(wordmarkMasterPath, 'utf8');
const wordmarkMatch = masterSvg.match(
  /<g[^>]*fill="url\(#gaia-logo-gradient\)"[\s\S]*?<\/g>/,
);
if (!wordmarkMatch) {
  throw new Error('Could not extract wordmark group from master SVG');
}
// Strip the master's stroke + stroke-width — at 220px width the 36-unit
// stroke becomes sub-pixel and creates a fringe halo. Use the gradient
// fill alone and let the supersampled rasterizer carry the edge quality.
const wordmarkGroup = wordmarkMatch[0]
  .replace('fill="url(#gaia-logo-gradient)"', 'fill="url(#lb-wordmark-gradient)"')
  .replace(/\s*stroke="[^"]*"/g, '')
  .replace(/\s*stroke-linecap="[^"]*"/g, '')
  .replace(/\s*stroke-width="[^"]*"/g, '');

const svg = `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 ${WIDTH} ${HEIGHT}"
  width="${WIDTH}"
  height="${HEIGHT}"
  preserveAspectRatio="xMidYMid meet"
>
  <defs>
    <linearGradient
      id="lb-wordmark-gradient"
      x1="0%"
      x2="0%"
      y1="0%"
      y2="100%"
    >
      <stop offset="0%" stop-color="#D97757" />
      <stop offset="100%" stop-color="#E89275" />
    </linearGradient>

    ${haze.map(renderHazeDef).join('\n\n    ')}

    <filter id="lb-grain" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.9"
        numOctaves="2"
        seed="7"
        stitchTiles="stitch"
      />
      <feColorMatrix
        values="0 0 0 0 1
                0 0 0 0 1
                0 0 0 0 1
                0 0 0 0.045 0"
      />
    </filter>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="#141413" />
  ${haze.map((h) => `<rect width="${WIDTH}" height="${HEIGHT}" fill="url(#${h.id})" />`).join('\n  ')}
  <rect width="${WIDTH}" height="${HEIGHT}" filter="url(#lb-grain)" />

  <line
    x1="${SAFE_X}"
    y1="${WORDMARK_Y + 2}"
    x2="${SAFE_X}"
    y2="${META_BASELINE + 8}"
    stroke="#3d3d3a"
    stroke-width="1"
    shape-rendering="crispEdges"
  />

  <g
    transform="translate(${WORDMARK_X} ${WORDMARK_Y}) scale(${WORDMARK_SCALE.toFixed(5)})"
    shape-rendering="geometricPrecision"
  >
    ${wordmarkGroup}
  </g>

  <g font-family="'Fraunces Variable', 'Fraunces', Georgia, serif">
    <text
      x="${TEXT_X}"
      y="${H1_LINE1_BASELINE}"
      font-weight="300"
      font-size="${H1_SIZE}"
      fill="#faf9f5"
      letter-spacing="-1.2"
    >Claude is raw power.</text>
    <text
      x="${TEXT_X}"
      y="${H1_LINE2_BASELINE}"
      font-weight="300"
      font-size="${H1_SIZE}"
      fill="#faf9f5"
      letter-spacing="-1.2"
    >GAIA is <tspan font-style="italic" fill="#efa58e">order and focus.</tspan></text>
  </g>

  <g font-family="ui-monospace, 'SF Mono', 'JetBrains Mono', Menlo, Consolas, monospace">
    <text
      x="${TEXT_X + 4}"
      y="${META_BASELINE}"
      font-size="20"
      fill="#87867f"
      letter-spacing="2.4"
    >THE CLAUDE CODE WORKFLOW FOR REACT</text>
    <text
      x="${TEXT_RIGHT}"
      y="${META_BASELINE}"
      text-anchor="end"
      font-size="22"
      fill="#b0aea5"
      letter-spacing="0.5"
    >gaiareact.com</text>
  </g>
</svg>
`;

await writeFile(svgOutPath, svg);

const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;1,9..144,300&display=swap"
      rel="stylesheet"
    />
    <style>
      html, body {
        margin: 0;
        padding: 0;
        background: transparent;
        width: ${WIDTH}px;
        height: ${HEIGHT}px;
        overflow: hidden;
      }
      svg { display: block; width: ${WIDTH}px; height: ${HEIGHT}px; }
      svg text { font-family: 'Fraunces', Georgia, serif; }
      svg text[font-family*="mono" i] {
        font-family: ui-monospace, 'SF Mono', Menlo, Consolas, monospace;
      }
    </style>
  </head>
  <body>${svg}</body>
</html>`;

const browser = await puppeteer.launch({
  args: ['--font-render-hinting=none'],
  headless: true,
});
try {
  // Pass 1: render at 2× DPR for supersampling.
  const page = await browser.newPage();
  await page.setViewport({deviceScaleFactor: 2, height: HEIGHT, width: WIDTH});
  await page.setContent(html, {waitUntil: 'networkidle0'});
  await page.evaluateHandle('document.fonts.ready');
  const hiResBuffer = await page.screenshot({omitBackground: false, type: 'png'});

  // Pass 2: load the 2× PNG into a 1× viewport and screenshot. The browser
  // does a high-quality lanczos-style downscale, eliminating the curve
  // aliasing that 1× SVG rasterization leaves on the wordmark.
  const hiResData = `data:image/png;base64,${Buffer.from(hiResBuffer).toString('base64')}`;
  const downsamplePage = await browser.newPage();
  await downsamplePage.setViewport({
    deviceScaleFactor: 1,
    height: HEIGHT,
    width: WIDTH,
  });
  await downsamplePage.setContent(
    `<!doctype html><html><body style="margin:0;background:#141413;">
      <img src="${hiResData}" style="display:block;width:${WIDTH}px;height:${HEIGHT}px;image-rendering:auto;" />
    </body></html>`,
    {waitUntil: 'networkidle0'},
  );
  const buffer = await downsamplePage.screenshot({
    omitBackground: false,
    quality: 95,
    type: 'jpeg',
  });
  await writeFile(jpgOutPath, buffer);
  console.log(`✓ wrote ${svgOutPath}`);
  console.log(`✓ wrote ${jpgOutPath}`);
} finally {
  await browser.close();
}
