/**
 * /api/contact — recepción del formulario de contacto.
 *
 * Sin configurar devuelve 501 y el frontend cae al mailto de siempre.
 * Para activarlo: crear cuenta en https://resend.com, generar una API key
 * y agregar en Vercel la env var RESEND_API_KEY (ver docs/FORMULARIO.md).
 */

const MAX = { name: 80, email: 120, whatsapp: 30, subject: 60, ptype: 60, pstate: 60, budget: 60, pdate: 60, message: 3000 };
const DEST = 'ronycozzi5@gmail.com';

// Rate limit best-effort por instancia (Vercel puede reciclarla; es solo fricción anti-abuso).
const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const list = (hits.get(ip) || []).filter((t) => now - t < windowMs);
  list.push(now);
  hits.set(ip, list);
  return list.length > 5;
}

function clean(v, max) {
  return String(v == null ? '' : v).replace(/[\r\n\t]+/g, ' ').trim().slice(0, max);
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    return res.end(JSON.stringify({ ok: false, reason: 'method' }));
  }

  // Same-origin blando: si viene Origin y no coincide con el host, afuera.
  const origin = req.headers.origin;
  const host = req.headers.host;
  if (origin && host && !origin.endsWith('//' + host)) {
    res.statusCode = 403;
    return res.end(JSON.stringify({ ok: false, reason: 'origin' }));
  }

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'local';
  if (limited(ip)) {
    res.statusCode = 429;
    return res.end(JSON.stringify({ ok: false, reason: 'rate' }));
  }

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = null; } }
  if (!body || typeof body !== 'object') {
    res.statusCode = 400;
    return res.end(JSON.stringify({ ok: false, reason: 'body' }));
  }

  // Honeypot: si el campo oculto viene lleno, respondemos ok sin hacer nada.
  if (clean(body.website, 200)) {
    res.statusCode = 200;
    return res.end(JSON.stringify({ ok: true }));
  }

  const d = {};
  for (const k of Object.keys(MAX)) d[k] = clean(body[k], MAX[k]);

  if (d.name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email) || d.message.length < 10) {
    res.statusCode = 400;
    return res.end(JSON.stringify({ ok: false, reason: 'validation' }));
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    res.statusCode = 501;
    return res.end(JSON.stringify({ ok: false, reason: 'not-configured' }));
  }

  const lines = [
    d.message,
    '',
    '--',
    `Nombre: ${d.name}`,
    `Email: ${d.email}`,
    d.whatsapp && `WhatsApp: ${d.whatsapp}`,
    d.subject && `Motivo: ${d.subject}`,
    d.ptype && `Tipo de proyecto: ${d.ptype}`,
    d.pstate && `Estado actual: ${d.pstate}`,
    d.budget && `Presupuesto: ${d.budget}`,
    d.pdate && `Fecha ideal: ${d.pdate}`,
    `IP: ${ip}`,
  ].filter(Boolean);

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM || 'Portfolio <onboarding@resend.dev>',
        to: [process.env.CONTACT_TO || DEST],
        reply_to: d.email,
        subject: `[Portfolio] ${d.subject || 'Consulta'} - ${d.name}`,
        text: lines.join('\n'),
      }),
    });
    if (!r.ok) throw new Error('resend ' + r.status);
    res.statusCode = 200;
    return res.end(JSON.stringify({ ok: true }));
  } catch (e) {
    res.statusCode = 502;
    return res.end(JSON.stringify({ ok: false, reason: 'send' }));
  }
};
