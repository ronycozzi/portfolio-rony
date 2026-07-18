/**
 * E2E del sitio con Playwright. Uso:
 *   npm install && npx playwright install chromium
 *   npm run test:e2e            (levanta un server estático propio en :4599)
 *   BASE=https://mi-preview npm run test:e2e   (contra un deploy)
 */
import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'application/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2', '.xml': 'application/xml', '.pdf': 'application/pdf', '.txt': 'text/plain' };

let BASE = process.env.BASE;
let server = null;
if (!BASE) {
  server = createServer((req, res) => {
    let p = decodeURIComponent(req.url.split('?')[0]);
    if (p.endsWith('/')) p += 'index.html';
    let abs = path.join(ROOT, p);
    if (!existsSync(abs) && existsSync(abs + '.html')) abs += '.html';
    if (!existsSync(abs) || statSync(abs).isDirectory()) {
      res.writeHead(404, { 'Content-Type': MIME['.html'] });
      return res.end(readFileSync(path.join(ROOT, '404.html')));
    }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(abs)] || 'application/octet-stream' });
    res.end(readFileSync(abs));
  }).listen(4599);
  BASE = 'http://localhost:4599';
}

const { chromium } = await import('playwright');
const browser = await chromium.launch();
let fail = 0;
const check = (name, cond) => { console.log(cond ? '  ✓' : '  ✗', name); if (!cond) fail++; };

const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
const jsErrors = [];
page.on('pageerror', (e) => jsErrors.push(String(e)));

// 1. Home carga y el hero es visible sin esperar animaciones
await page.goto(BASE + '/', { waitUntil: 'networkidle' });
check('home: título del hero visible', await page.locator('h1').isVisible());

// 2. Navegación por el header
await page.click('.nav a[href*="services"]');
await page.waitForURL('**/services*', { timeout: 8000 });
check('nav: /services carga', (await page.title()).includes('Servicios'));

// 3. Toggle de idioma persiste entre páginas
await page.click('[data-lang-toggle]');
await page.waitForTimeout(800);
const htmlLang = await page.evaluate(() => document.documentElement.lang);
check('i18n: html[lang] pasa a en', htmlLang === 'en');
await page.click('.nav a[href*="contact"]');
await page.waitForURL('**/contact*');
await page.waitForTimeout(400);
check('i18n: EN persiste al navegar', (await page.locator('h1').textContent()).includes('build'));

// 4. Toggle de tema
const themeBefore = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
await page.click('[data-theme-toggle]');
const themeAfter = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
check('tema: alterna dark/light', themeBefore !== themeAfter);

// 5. Formulario: validación nativa + envío con fallback
await page.click('[data-lang-toggle]'); // volver a ES
await page.waitForTimeout(300);
await page.fill('#name', 'Test E2E');
await page.fill('#email', 'e2e@test.com');
await page.selectOption('#subject', 'project');
await page.selectOption('#ptype', 'landing');
await page.fill('#message', 'Mensaje de prueba end to end.');
await page.click('.btn-submit');
await page.waitForTimeout(1600);
const note = await page.locator('[data-form-note]').textContent();
check('form: responde tras submit (envío o fallback)', !!note && note.length > 5);

// 6. Menú móvil
const m = await browser.newContext({ viewport: { width: 390, height: 844 } });
const mp = await m.newPage();
await mp.goto(BASE + '/', { waitUntil: 'networkidle' });
await mp.click('[data-menu-toggle]');
await mp.waitForTimeout(400);
check('mobile: menú abre con 7 links', (await mp.locator('.mobile-menu a').count()) === 7);
await mp.close(); await m.close();

// 7. 404
const r404 = await page.goto(BASE + '/no-existe-xyz');
check('404: responde con la página diseñada y muestra CTA', r404.status() === 404 && (await page.title()).includes('404') && await page.locator('.err-cta').isVisible());

// 8. Cero errores JS en todo el recorrido
check('cero errores JS en el recorrido', jsErrors.length === 0);
if (jsErrors.length) console.log('   errores:', jsErrors.slice(0, 3).join(' | '));

await browser.close();
if (server) server.close();
console.log(fail ? `\n${fail} tests E2E fallaron` : '\nTODOS los tests E2E pasaron');
process.exit(fail ? 1 : 0);
