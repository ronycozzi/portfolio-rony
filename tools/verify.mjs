#!/usr/bin/env node
/**
 * tools/verify.mjs — QA de una sola pasada para el portfolio.
 * Uso: node tools/verify.mjs   (desde cualquier directorio)
 * Sin dependencias externas. Exit code != 0 si falla algún check.
 */
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

let failures = 0;
let passed = 0;
const ok = (msg) => { passed++; console.log('  ✓ ' + msg); };
const bad = (msg) => { failures++; console.log('  ✗ ' + msg); };
const section = (title) => console.log('\n── ' + title + ' ' + '─'.repeat(Math.max(2, 58 - title.length)));

const read = (rel) => readFileSync(path.join(ROOT, rel), 'utf8');

// ---------------------------------------------------------------- HTML files
const htmlFiles = (() => {
  // Preferimos git: valida solo lo que se deploya (excluye restos ignorados).
  try {
    const { execSync } = require('node:child_process');
    const out = execSync('git ls-files -- "*.html"', { cwd: ROOT, encoding: 'utf8' }).trim();
    if (out) return out.split('\n');
  } catch {}
  return [
    ...readdirSync(ROOT).filter((f) => f.endsWith('.html')),
    ...(existsSync(path.join(ROOT, 'case'))
      ? readdirSync(path.join(ROOT, 'case')).filter((f) => f.endsWith('.html')).map((f) => 'case/' + f)
      : []),
  ];
})().sort();
const htmlContent = new Map(htmlFiles.map((f) => [f, read(f)]));

// 1. Integridad -------------------------------------------------------------
section(`1. Integridad de HTML (${htmlFiles.length} archivos)`);
for (const f of htmlFiles) {
  if (htmlContent.get(f).trimEnd().endsWith('</html>')) ok(`${f} termina en </html>`);
  else bad(`${f} NO termina en </html> (posible truncado)`);
}

// 2. i18n -------------------------------------------------------------------
section('2. Diccionario i18n (js/main.js)');
function extractI18nObject(src) {
  const marker = 'const i18n =';
  const start = src.indexOf(marker);
  if (start === -1) return null;
  let i = src.indexOf('{', start);
  if (i === -1) return null;
  let depth = 0;
  let inStr = null;
  let esc = false;
  for (let j = i; j < src.length; j++) {
    const c = src[j];
    if (inStr) {
      if (esc) esc = false;
      else if (c === '\\') esc = true;
      else if (c === inStr) inStr = null;
      continue;
    }
    if (c === "'" || c === '"' || c === '`') inStr = c;
    else if (c === '/' && src[j + 1] === '/') { while (j < src.length && src[j] !== '\n') j++; }
    else if (c === '/' && src[j + 1] === '*') { const e = src.indexOf('*/', j + 2); j = e === -1 ? src.length : e + 1; }
    else if (c === '{') depth++;
    else if (c === '}') { depth--; if (depth === 0) return src.slice(i, j + 1); }
  }
  return null;
}

let dict = null;
try {
  const mainSrc = read('js/main.js');
  const objText = extractI18nObject(mainSrc);
  if (!objText) throw new Error('no se encontró `const i18n = {...}` en js/main.js');
  dict = new Function('return (' + objText + ');')();
  if (!dict.es || !dict.en) throw new Error('el diccionario no tiene ramas es/en');
  ok(`diccionario extraído (es: ${Object.keys(dict.es).length} claves, en: ${Object.keys(dict.en).length} claves)`);
} catch (e) {
  bad('extracción del diccionario falló: ' + e.message);
}

if (dict) {
  const esKeys = new Set(Object.keys(dict.es));
  const enKeys = new Set(Object.keys(dict.en));
  const missingEn = [...esKeys].filter((k) => !enKeys.has(k));
  const missingEs = [...enKeys].filter((k) => !esKeys.has(k));
  if (missingEn.length === 0 && missingEs.length === 0) ok('paridad es/en completa');
  else {
    if (missingEn.length) bad(`claves en ES sin traducción EN (${missingEn.length}): ${missingEn.slice(0, 10).join(', ')}${missingEn.length > 10 ? '…' : ''}`);
    if (missingEs.length) bad(`claves en EN sin versión ES (${missingEs.length}): ${missingEs.slice(0, 10).join(', ')}${missingEs.length > 10 ? '…' : ''}`);
  }

  const usedKeys = new Map(); // key -> Set(files)
  const addKey = (key, file) => {
    if (!key) return;
    if (!usedKeys.has(key)) usedKeys.set(key, new Set());
    usedKeys.get(key).add(file);
  };
  for (const [f, html] of htmlContent) {
    for (const m of html.matchAll(/data-i18n(?:-html)?="([^"]+)"/g)) addKey(m[1].trim(), f);
    for (const m of html.matchAll(/data-i18n-attr="([^"]+)"/g)) {
      for (const pair of m[1].split(',')) {
        const key = (pair.split(':')[1] || '').trim();
        addKey(key, f);
      }
    }
  }
  const unresolved = [];
  for (const [key, files] of usedKeys) {
    if (!esKeys.has(key) || !enKeys.has(key)) unresolved.push(`${key} (${[...files].join(', ')})`);
  }
  if (unresolved.length === 0) ok(`las ${usedKeys.size} claves usadas en los HTML existen en ambos idiomas`);
  else for (const u of unresolved) bad('clave usada sin definición completa: ' + u);
}

// 3. Referencias locales ----------------------------------------------------
section('3. Referencias locales (href/src)');
function resolveLocalRef(ref, fromFile) {
  let target = ref.split('#')[0].split('?')[0];
  if (target === '') return true; // solo hash/query
  let abs;
  if (target.startsWith('/')) abs = path.join(ROOT, target.slice(1));
  else abs = path.resolve(path.join(ROOT, path.dirname(fromFile)), target);
  if (existsSync(abs) && statSync(abs).isDirectory()) abs = path.join(abs, 'index.html');
  if (existsSync(abs) && statSync(abs).isFile()) return true;
  // cleanUrls: "work" -> work.html
  if (!path.extname(abs) && existsSync(abs + '.html')) return true;
  return false;
}
let refCount = 0;
let refBad = 0;
for (const [f, html] of htmlContent) {
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const ref = m[1].trim();
    if (/^(https?:)?\/\//i.test(ref) || /^(#|mailto:|tel:|data:|javascript:)/i.test(ref)) continue;
    refCount++;
    if (!resolveLocalRef(ref, f)) { refBad++; bad(`${f}: referencia rota "${ref}"`); }
  }
}
if (refBad === 0) ok(`${refCount} referencias locales verificadas, todas apuntan a archivos existentes`);

// 4. Versionado -------------------------------------------------------------
section('4. Versionado de assets (?v=)');
const ASSETS = ['styles.css', 'case.css', 'main.js'];
const versions = new Map(ASSETS.map((a) => [a, new Map()])); // asset -> version -> [files]
for (const [f, html] of htmlContent) {
  for (const m of html.matchAll(/(styles\.css|case\.css|main\.js)\?v=(\d+)/g)) {
    const byVer = versions.get(m[1]);
    if (!byVer.has(m[2])) byVer.set(m[2], []);
    byVer.get(m[2]).push(f);
  }
}
const swSrc = read('sw.js');
const swVersions = new Map();
for (const m of swSrc.matchAll(/(styles\.css|case\.css|main\.js)\?v=(\d+)/g)) {
  if (!swVersions.has(m[1])) swVersions.set(m[1], new Set());
  swVersions.get(m[1]).add(m[2]);
}
for (const asset of ASSETS) {
  const byVer = versions.get(asset);
  if (byVer.size === 0) { bad(`${asset}: ninguna página lo referencia con ?v=`); continue; }
  if (byVer.size > 1) {
    bad(`${asset}: versiones inconsistentes entre páginas: ${[...byVer.entries()].map(([v, fs]) => `v=${v} (${fs.length} pág.)`).join(' vs ')}`);
    continue;
  }
  const [pageVer] = byVer.keys();
  const swSet = swVersions.get(asset);
  if (!swSet) { bad(`${asset}: v=${pageVer} en páginas pero sw.js no lo precachea`); continue; }
  if (swSet.size > 1) { bad(`${asset}: sw.js tiene varias versiones: ${[...swSet].join(', ')}`); continue; }
  const [swVer] = swSet;
  if (swVer === pageVer) ok(`${asset}?v=${pageVer} consistente en ${[...byVer.values()][0].length} páginas y sw.js`);
  else bad(`${asset}: páginas usan v=${pageVer} pero sw.js usa v=${swVer}`);
}

// 5. JSON válido ------------------------------------------------------------
section('5. JSON válido');
for (const j of ['vercel.json', 'manifest.json']) {
  try { JSON.parse(read(j)); ok(`${j} parsea correctamente`); }
  catch (e) { bad(`${j} inválido: ${e.message}`); }
}

// 6. Sintaxis JS ------------------------------------------------------------
section('6. Sintaxis JS');
for (const s of ['js/main.js', 'sw.js']) {
  try { new Function(read(s)); ok(`${s} compila sin errores de sintaxis`); }
  catch (e) { bad(`${s} no compila: ${e.message}`); }
}

// Resumen ---------------------------------------------------------------
section('Resumen');
const total = passed + failures;
if (failures === 0) console.log(`  ✓ TODO OK — ${passed}/${total} checks pasaron`);
else console.log(`  ✗ ${failures} problema(s) de ${total} checks — revisar arriba`);
process.exitCode = failures === 0 ? 0 : 1;
