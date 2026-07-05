// Test del handler /api/contact sin red: node tools/test-contact.mjs
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const handler = require('../api/contact.js');

function mockRes() {
  const r = { statusCode: 200, headers: {}, body: '' };
  return {
    raw: r,
    setHeader: (k, v) => { r.headers[k] = v; },
    end: (b) => { r.body = b || ''; r.done = true; },
    set statusCode(v) { r.statusCode = v; },
    get statusCode() { return r.statusCode; },
  };
}
async function call(method, body, headers = {}) {
  const res = mockRes();
  await handler({ method, headers: { host: 'x.test', ...headers }, body }, res);
  return res.raw;
}
let fail = 0;
const check = (name, cond) => { console.log(cond ? '  ✓' : '  ✗', name); if (!cond) fail++; };

const get = await call('GET');
check('GET → 405', get.statusCode === 405);

const hp = await call('POST', { website: 'spam', name: 'Bot', email: 'a@b.co', message: 'x'.repeat(20) });
check('honeypot → 200 silencioso', hp.statusCode === 200 && JSON.parse(hp.body).ok === true);

const badmail = await call('POST', { name: 'Rony', email: 'no-es-mail', message: 'hola necesito una web' });
check('email inválido → 400', badmail.statusCode === 400);

const short = await call('POST', { name: 'R', email: 'a@b.co', message: 'hola necesito una web' });
check('nombre corto → 400', short.statusCode === 400);

delete process.env.RESEND_API_KEY;
const ok = await call('POST', { name: 'Rony', email: 'test@test.com', message: 'Necesito una landing para marzo.' });
check('válido sin API key → 501 not-configured', ok.statusCode === 501 && JSON.parse(ok.body).reason === 'not-configured');

const origin = await call('POST', { name: 'Rony', email: 'test@test.com', message: 'Necesito una landing para marzo.' }, { origin: 'https://evil.com' });
check('origin cruzado → 403', origin.statusCode === 403);

console.log(fail ? `${fail} tests fallaron` : 'TODOS los tests del handler pasaron');
process.exit(fail ? 1 : 0);
