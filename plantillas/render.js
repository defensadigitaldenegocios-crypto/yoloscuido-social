// Uso: node plantillas/render.js semana-NN [A1 A2 ...]
// Renderiza semana-NN/src/<X>.html -> semana-NN/<X>.jpg (1080x1350) y <X>.png
// Requiere playwright (npm i playwright@1.56.1) y Chromium en /opt/pw-browsers/chromium.
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
(async () => {
  const dir = path.resolve(process.argv[2]);
  const src = path.join(dir, 'src');
  let names = process.argv.slice(3);
  if (!names.length) names = fs.readdirSync(src).filter(f => f.endsWith('.html')).map(f => f.slice(0, -5)).sort();
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  for (const n of names) {
    await page.goto('file://' + path.join(src, n + '.html'));
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(150);
    await page.screenshot({ path: path.join(dir, n + '.png'), clip: { x: 0, y: 0, width: 1080, height: 1350 } });
    await page.screenshot({ path: path.join(dir, n + '.jpg'), type: 'jpeg', quality: 92, clip: { x: 0, y: 0, width: 1080, height: 1350 } });
    console.log('ok', n);
  }
  await browser.close();
})();
