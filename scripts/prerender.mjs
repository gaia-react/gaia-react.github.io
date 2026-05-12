import {writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import puppeteer from 'puppeteer';
import {preview} from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const ROUTES = [
  {url: '/', out: 'index.html'},
  {url: '/about/', out: 'about/index.html'},
  {url: '/consulting/', out: 'consulting/index.html'},
  {url: '/features/', out: 'features/index.html'},
  {url: '/get-started/', out: 'get-started/index.html'},
  {url: '/mentorship/', out: 'mentorship/index.html'},
  {url: '/why/', out: 'why/index.html'},
];

const PORT = 4321;

const server = await preview({
  root,
  preview: {port: PORT, strictPort: true},
});

const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
  headless: true,
});

const exitCode = await (async () => {
  try {
    for (const route of ROUTES) {
      const page = await browser.newPage();

      page.on('pageerror', (error) => {
        console.error(`[${route.url}] page error:`, error.message);
      });
      page.on('console', (message) => {
        if (message.type() === 'error' || message.type() === 'warning') {
          console.error(`[${route.url}] console ${message.type()}:`, message.text());
        }
      });

      await page.setRequestInterception(true);
      page.on('request', (request) => {
        const url = request.url();
        if (
          url.includes('cloudflareinsights.com') ||
          url.includes('cal.com') ||
          url.includes('calendly.com')
        ) {
          request.abort();
          return;
        }
        request.continue();
      });

      const target = `http://localhost:${PORT}${route.url}`;
      await page.goto(target, {timeout: 30_000, waitUntil: 'load'});
      await page.waitForSelector('#root > *', {timeout: 15_000});
      await page
        .waitForNetworkIdle({idleTime: 250, timeout: 5_000})
        .catch(() => {});
      await new Promise((resolve) => {
        setTimeout(resolve, 250);
      });

      // useScrollReveal adds `is-in` at runtime; the IntersectionObserver fires
      // during prerender and bakes it onto above-the-fold elements. Strip it so
      // the static markup matches React's output — otherwise hydration sees a
      // className mismatch and the element renders, hides, then fades back in.
      await page.evaluate(() => {
        for (const element of document.querySelectorAll('.is-in')) {
          element.classList.remove('is-in');
        }
      });

      const html = await page.content();
      const outPath = path.join(root, 'dist', route.out);
      await writeFile(outPath, html);
      console.log(`prerendered ${route.url} -> dist/${route.out}`);

      await page.close();
    }

    return 0;
  } catch (error) {
    console.error('prerender failed:', error);
    return 1;
  } finally {
    await browser.close();
    server.httpServer.close();
  }
})();

process.exit(exitCode);
