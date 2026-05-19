/**
 * One-shot preview: composites the rendered banner PNG with an avatar circle
 * overlay matching Steven's #OPENTOWORK ring placement. Output is for visual
 * QA only — not a deliverable.
 */

import {readFile, writeFile} from 'node:fs/promises';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..', '..');
const bannerPath = resolve(
  repoRoot,
  'studio/branding/assets/social/gaia-linkedin-banner.jpg',
);
const previewPath = resolve(
  repoRoot,
  'studio/branding/assets/social/_preview-with-avatar.png',
);

const banner = (await readFile(bannerPath)).toString('base64');

// Avatar geometry estimated from Steven's profile screenshot, in 1584-wide
// banner coords: ring center ~ (285, 320 from banner top), diameter ~400.
const html = `<!doctype html>
<html>
  <body style="margin:0;background:#1f1e1d;">
    <div style="position:relative;width:1584px;height:560px;">
      <img
        src="data:image/jpeg;base64,${banner}"
        style="display:block;width:1584px;height:396px;"
      />
      <div style="
        position:absolute;
        left:85px; top:160px;
        width:400px; height:400px;
        border-radius:50%;
        background:
          radial-gradient(circle at 35% 30%, #d4b89a 0%, #6b4f3a 70%);
        box-shadow:
          0 0 0 12px #5fa15a,
          0 0 0 14px #2a2a28,
          0 8px 32px rgba(0,0,0,0.4);
      "></div>
      <div style="
        position:absolute;
        left:120px; top:485px;
        width:330px; text-align:center;
        font-family:Helvetica,Arial,sans-serif;
        font-weight:700; font-size:24px; color:#1a1a1a;
        letter-spacing:1.5px;
      ">#OPENTOWORK</div>
    </div>
  </body>
</html>`;

const browser = await puppeteer.launch({headless: true});
try {
  const page = await browser.newPage();
  await page.setViewport({deviceScaleFactor: 1, height: 560, width: 1584});
  await page.setContent(html, {waitUntil: 'networkidle0'});
  const buffer = await page.screenshot({type: 'png'});
  await writeFile(previewPath, buffer);
  console.log(`✓ wrote ${previewPath}`);
} finally {
  await browser.close();
}
