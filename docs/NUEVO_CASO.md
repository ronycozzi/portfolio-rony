# Checklist: sumar un caso de estudio nuevo

Guía para integrar un proyecto de la nueva serie. Referencia viva de cómo estaban
armados los casos anteriores: `git show 0b66b3a^:case/luco.html` (o cucu/sellink/cognition).

## 1. Assets
- [ ] Captura hero del demo → `assets/work/SLUG.webp` (1440×900, ~40-80 KB).
- [ ] Galería: portada desktop, sección interior y mobile → `assets/work/gallery/SLUG-d1.webp`, `SLUG-d2.webp` (1200×750), `SLUG-m1.webp` (480×1039).
- [ ] OG del caso → `assets/og/og-case-SLUG.png` (1200×630, layout editorial con el acento del proyecto).
- [ ] Si `assets/work/` sigue en `.gitignore`, quitá esas líneas.

## 2. Página del caso
- [ ] Copiar `tools/templates/case.html` → `case/SLUG.html` y `tools/templates/case.css` → `css/case.css` (si no existe).
- [ ] Completar TODOs: nombre, año, tipo, colores (`--case-accent/bg/fg`), URL del demo, copy.
- [ ] Estructura que vende: contexto → objetivo → decisiones (estructura/UI/motion/perf/SEO/a11y/integración) → resultado honesto (lab data) → aprendizaje → galería → CTA "¿Querés algo parecido?".
- [ ] Regla de honestidad: si es demo con marca ficticia, badge "Proyecto de demostración" y cero métricas de negocio inventadas.

## 3. i18n
- [ ] Cada texto con `data-i18n="case.SLUG..."`; agregar TODAS las claves en `js/main.js` en **ambos** idiomas.
- [ ] Agregar `'case-SLUG'` a `fullyLocalizedPages` en `js/main.js`.

## 4. Integración al sitio
- [ ] `work.html`: reemplazar/acompañar el bloque "nueva serie" con el `work-item` del proyecto (estructura en `git show 0b66b3a^:work.html`), con problema/solución/rol/resultado + link al caso.
- [ ] `index.html`: sumar el proyecto a la sección de trabajos de la home (cuando haya 2+, restaurar la sección featured desde `git show 0b66b3a^:index.html` y su CSS desde `git show 0b66b3a^:css/styles.css`).
- [ ] `js/main.js`: entrada en `pageMetaFromHref` y fallback en `localRouteFallbacks` (`'/case/SLUG': '/case/SLUG.html'`).
- [ ] `sitemap.xml`: URL del caso con lastmod.
- [ ] `sw.js`: precache de `/case/SLUG` y `/case/SLUG.html` + bump de `VERSION`.
- [ ] `vercel.json`: cuando el primer caso esté publicado, revisar el redirect `/case/:slug* → /work` (dejarlo solo para los slugs viejos o quitarlo).
- [ ] Schema: `CreativeWork` en el JSON-LD de `work.html` + `BreadcrumbList` en el caso.
- [ ] Regenerar hashes CSP: `node .codex_tmp/csp-hashes.js` (agregar la página a su lista) → pegar en `vercel.json`.

## 5. Publicar
- [ ] Bump `?v=` de los assets tocados en TODAS las páginas y en `sw.js` (+ `VERSION`).
- [ ] `node tools/verify.mjs` → todo verde.
- [ ] Revisar en local (`node .codex_tmp/serve-local.js`), en ES y EN, claro y oscuro, desktop y mobile.
- [ ] Commit + push.
