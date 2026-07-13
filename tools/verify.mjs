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
  // Valida lo que Git puede publicar: HEAD + staging. Así detecta páginas
  // preparadas para deploy sin confundir restos locales no trackeados.
  try {
    const { execSync } = require('node:child_process');
    const out = execSync('git ls-tree -r --name-only HEAD', { cwd: ROOT, encoding: 'utf8', env: { ...process.env, GIT_INDEX_FILE: path.join(ROOT, '.git', 'verify-tmp-index') } }).trim();
    if (out) {
      const files = out.split('\n').filter((f) => f.endsWith('.html') && !f.startsWith('tools/') && !f.startsWith('docs/'));
      if (files.length) return files;
    }
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
  const mainSrcForMetadata = read('js/main.js');
  const localizedBlock = mainSrcForMetadata.match(/const fullyLocalizedPages = new Set\(\[([\s\S]*?)\]\);/);
  const metadataBlock = mainSrcForMetadata.match(/const pageMeta = \{([\s\S]*?)\n\s*\}\[pageId\];/);
  if (!localizedBlock || !metadataBlock) {
    bad('no se pudo verificar la cobertura de metadata para paginas localizadas');
  } else {
    const localizedPages = [...localizedBlock[1].matchAll(/['"]([^'"]+)['"]/g)].map((m) => m[1]);
    const metadataPages = new Set(
      [...metadataBlock[1].matchAll(/^\s{6}(?:'([^']+)'|([a-zA-Z0-9-]+)):\s*\{/gm)]
        .map((m) => m[1] || m[2])
    );
    const missingMetadata = localizedPages.filter((page) => !metadataPages.has(page));
    if (missingMetadata.length === 0) ok(`metadata i18n cubre las ${localizedPages.length} paginas localizadas`);
    else bad(`paginas localizadas sin metadata i18n: ${missingMetadata.join(', ')}`);
  }
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

const swShellMatch = read('sw.js').match(/const SHELL = \[([\s\S]*?)\];/);
if (swShellMatch) {
  const swRefs = [...swShellMatch[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
  let swBad = 0;
  for (const ref of swRefs) {
    if (/^(https?:)?\/\//i.test(ref) || /^(#|mailto:|tel:|data:|javascript:)/i.test(ref)) continue;
    if (!resolveLocalRef(ref, 'sw.js')) { swBad++; bad(`sw.js: SHELL precache apunta a archivo inexistente "${ref}"`); }
  }
  if (swBad === 0) ok(`${swRefs.length} entradas de SHELL en sw.js verificadas`);
} else {
  bad('sw.js: no se pudo encontrar const SHELL para auditar precache');
}

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
  if (byVer.size === 0) { ok(`${asset}: sin referencias (asset no usado actualmente)`); continue; }
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

const caseTemplatePath = 'tools/templates/case.html';
if (existsSync(path.join(ROOT, caseTemplatePath))) {
  const templateSrc = read(caseTemplatePath);
  for (const asset of ['styles.css', 'main.js']) {
    const templateVersion = templateSrc.match(new RegExp(`${asset.replace('.', '\\.')}\\?v=(\\d+)`));
    const activeVersions = versions.get(asset);
    if (!templateVersion) {
      bad(`${caseTemplatePath}: no referencia ${asset} con versión`);
      continue;
    }
    if (activeVersions.size !== 1) continue;
    const [activeVersion] = activeVersions.keys();
    if (templateVersion[1] === activeVersion) ok(`${caseTemplatePath}: ${asset}?v=${activeVersion} coincide con las páginas activas`);
    else bad(`${caseTemplatePath}: ${asset}?v=${templateVersion[1]} no coincide con v=${activeVersion} activo`);
  }
}

// 5. JSON válido ------------------------------------------------------------
section('5. JSON válido');
for (const j of ['vercel.json', 'manifest.json']) {
  try { JSON.parse(read(j)); ok(`${j} parsea correctamente`); }
  catch (e) { bad(`${j} inválido: ${e.message}`); }
}

try {
  const vercel = JSON.parse(read('vercel.json'));
  const redirects = Array.isArray(vercel.redirects) ? vercel.redirects : [];
  const shadowed = [];
  for (const redirect of redirects) {
    if (!redirect || typeof redirect.source !== 'string') continue;
    const source = redirect.source.replace(/^\/+/, '');
    if (!source.includes(':') && htmlFiles.includes(`${source}.html`)) {
      shadowed.push(`${source}.html -> ${redirect.destination || '(sin destino)'}`);
    }
    if (source.endsWith('/:slug*')) {
      const dir = source.slice(0, -'/:slug*'.length);
      for (const f of htmlFiles) {
        if (f.startsWith(`${dir}/`)) shadowed.push(`${f} -> ${redirect.destination || '(sin destino)'}`);
      }
    }
  }
  if (shadowed.length === 0) ok('redirects de Vercel no anulan HTML existente');
  else for (const item of shadowed) bad('redirect de Vercel anula una página existente: ' + item);
} catch (e) {
  bad('no se pudo auditar redirects de Vercel: ' + e.message);
}

// 6. Sintaxis JS ------------------------------------------------------------
section('6. Sintaxis JS');
for (const s of ['js/main.js', 'sw.js']) {
  try { new Function(read(s)); ok(`${s} compila sin errores de sintaxis`); }
  catch (e) { bad(`${s} no compila: ${e.message}`); }
}

// 7. Superficie XSS del frontend --------------------------------------------
section('7. Superficie XSS del frontend');
const mainJs = read('js/main.js');
const htmlSinks = [
  /\.innerHTML\s*=/,
  /\.outerHTML\s*=/,
  /insertAdjacentHTML\s*\(/,
  /document\.write\s*\(/,
  /\beval\s*\(/,
];
if (htmlSinks.every((pattern) => !pattern.test(mainJs))) {
  ok('main.js no contiene sinks de inyección HTML o evaluación dinámica');
} else {
  bad('main.js contiene un sink de inyección HTML o evaluación dinámica');
}

const safeTagsBlock = mainJs.match(/const SAFE_TRANSLATED_TAGS = new Set\(\[([\s\S]*?)\]\);/);
const safeTags = new Set(safeTagsBlock ? [...safeTagsBlock[1].matchAll(/['"]([a-z0-9-]+)['"]/g)].map((m) => m[1]) : []);
const translatedMarkupTags = new Set();
if (dict) {
  for (const html of htmlContent.values()) {
    for (const match of html.matchAll(/data-i18n-html="([^"]+)"/g)) {
      const key = match[1].trim();
      for (const lang of ['es', 'en']) {
        const value = String((dict[lang] && dict[lang][key]) || '');
        for (const tag of value.matchAll(/<\/?([a-z][a-z0-9-]*)\b/gi)) translatedMarkupTags.add(tag[1].toLowerCase());
      }
    }
  }
}
const unsupportedTranslatedTags = [...translatedMarkupTags].filter((tag) => !safeTags.has(tag));
if (safeTags.size > 0 && unsupportedTranslatedTags.length === 0) {
  ok(`renderer i18n seguro cubre ${translatedMarkupTags.size} etiquetas HTML usadas`);
} else {
  bad(`renderer i18n seguro no cubre: ${unsupportedTranslatedTags.join(', ') || 'allowlist ausente'}`);
}

const translatedHtmlApply = mainJs.match(/querySelectorAll\('\[data-i18n-html\]'\)[\s\S]*?\n\s*\}\);/);
if (translatedHtmlApply && /setSafeTranslatedMarkup\(el, val\)/.test(translatedHtmlApply[0])) {
  ok('data-i18n-html usa el renderer seguro estructural');
} else {
  bad('data-i18n-html no usa el renderer seguro estructural');
}

// Resumen ---------------------------------------------------------------
section('Resumen');
const total = passed + failures;
if (failures === 0) console.log(`  ✓ TODO OK — ${passed}/${total} checks pasaron`);
else console.log(`  ✗ ${failures} problema(s) de ${total} checks — revisar arriba`);
process.exitCode = failures === 0 ? 0 : 1;
