// Permanent, repo-resident version of the ad hoc /tmp/full_sweep.js used
// throughout the Aug 2026 sessions. Run after every rebuild, before every commit.
//
// Checks every club page, every league page, every nation page, and index.html for:
//   - JS runtime errors (page.on('pageerror'))
//   - horizontal overflow (document.body.scrollWidth > clientWidth + 2px)
//
// Usage:
//   node engine/verify_site.js            # full sweep, all pages
//   node engine/verify_site.js --fast     # club pages only sampled 1-in-5 (quick smoke test)
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const fast = process.argv.includes('--fast');
  const root = path.join(__dirname, '..');
  let clubFiles = fs.readdirSync(root).filter(f => f.endsWith('.html') && f !== 'index.html' && f !== 'template.html');
  if (fast) clubFiles = clubFiles.filter((_, i) => i % 5 === 0);
  const files = [
    ...clubFiles,
    ...fs.readdirSync(path.join(root, 'leagues')).filter(f => f.endsWith('.html')).map(f => 'leagues/' + f),
    ...fs.readdirSync(path.join(root, 'nations')).filter(f => f.endsWith('.html')).map(f => 'nations/' + f),
    'index.html',
  ];

  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
  let fails = 0;
  const WORKERS = 8;
  let idx = 0;
  async function worker() {
    while (idx < files.length) {
      const f = files[idx++];
      const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      try {
        await page.goto('file://' + root + '/' + f, { waitUntil: 'networkidle', timeout: 20000 });
        const overflow = await page.evaluate(() => document.body.scrollWidth > document.documentElement.clientWidth + 2);
        if (errors.length || overflow) {
          fails++;
          console.log('FAIL', f, errors, 'overflow:', overflow);
        }
      } catch (e) {
        fails++;
        console.log('FAIL', f, 'exception:', e.message);
      }
      await page.close();
    }
  }
  await Promise.all(Array.from({ length: WORKERS }, worker));
  console.log(`\nDone. ${files.length} pages checked, ${fails} failures.`);
  await browser.close();
  process.exit(fails ? 1 : 0);
})();
