import path from 'node:path';
import {fileURLToPath} from 'node:url';
import puppeteer from 'puppeteer';
import {preview} from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = '/Users/stevensacks/Development/gaia-react/website';

const ROUTES = ['/', '/about/', '/why/', '/features/', '/get-started/'];
const PORT = 6416;

const server = await preview({
  root,
  preview: {port: PORT, strictPort: true},
});

const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
  headless: true,
});

try {
  for (const route of ROUTES) {
    const page = await browser.newPage();
    const errors = [];

    // Inject onRecoverableError override BEFORE page loads
    await page.evaluateOnNewDocument(() => {
      const origHydrateRoot = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
      // We'll capture console errors instead
    });

    page.on('pageerror', (error) => {
      errors.push(`PAGE ERROR: ${error.message}`);
    });
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(`CONSOLE ERROR: ${msg.text()}`);
      } else if (msg.type() === 'warning') {
        errors.push(`CONSOLE WARN: ${msg.text()}`);
      }
    });

    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const url = req.url();
      if (url.includes('cloudflareinsights.com') || url.includes('cal.com') || url.includes('calendly.com')) {
        req.abort();
      } else {
        req.continue();
      }
    });

    await page.goto(`http://localhost:${PORT}${route}`, {timeout: 15000, waitUntil: 'networkidle0'});
    await new Promise(r => setTimeout(r, 500));

    const hydrationErrors = errors.filter(e => e.includes('418') || e.includes('hydrat') || e.includes('Hydrat') || e.includes('text') || e.includes('mismatch'));
    console.log(`\n=== ${route} ===`);
    if (errors.length === 0) {
      console.log('  CLEAN (no errors)');
    } else {
      for (const e of errors) {
        if (!e.includes('ERR_FAILED') && !e.includes('net::')) {
          console.log(' ', e.slice(0, 300));
        }
      }
    }

    await page.close();
  }
} finally {
  await browser.close();
  server.httpServer.close();
}
