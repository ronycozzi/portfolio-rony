# Rony Cozzi — Portfolio

Sitio comercial de desarrollo web full stack. Estático, sin build ni dependencias: HTML + CSS + JavaScript vanilla, deploy en Vercel.

**En vivo:** https://portfolios-ronycozzi.vercel.app/

## Qué vende

Landing de conversión · Sitio web completo · Full stack ligero (integraciones) · Optimización y mantenimiento. Los primeros demos fueron retirados: hay una nueva serie de casos de estudio en construcción. Para sumar un caso nuevo: `docs/NUEVO_CASO.md` + `tools/templates/`.

## Arquitectura

- **Cero build**: los archivos del repo son los que se sirven. Vercel con `cleanUrls`.
- **Diseño**: sistema "Obsidian Editorial" — Fraunces (display) + Inter (cuerpo) + JetBrains Mono (metadata), paleta obsidiana cálida con acento vermellón, tema claro/oscuro vía `data-theme`.
- **Fuentes self-hosted** en `assets/fonts/` (woff2, subset latin). Sin requests a Google Fonts.
- **i18n ES/EN** por diccionario en `js/main.js` (`data-i18n`, `data-i18n-html`, `data-i18n-attr`), toggle persistido en localStorage.
- **PWA**: service worker (`sw.js`) con precache versionado; bump de `VERSION` y de los query params `?v=` al cambiar assets.
- **SEO**: metadata por página + JSON-LD (Person, ProfessionalService, WebSite, OfferCatalog, FAQPage, BreadcrumbList, CreativeWork). Los hashes CSP de los bloques JSON-LD se regeneran con `node .codex_tmp/csp-hashes.js` y se pegan en `vercel.json`.
- **Accesibilidad**: WCAG 2.1 AA — 0 violaciones en axe (última auditoría). Skip link, foco visible, `prefers-reduced-motion`.

## Estructura

```
index.html            Home comercial (hero, señales, problema, trabajos,
                      paquetes, enfoque, proceso, para quién, calidad, FAQ, CTA)
work.html             Trabajos (nueva serie en camino) + capacidades
services.html         Paquetes de servicios en detalle
process.html          Proceso en 6 etapas (duración / entregable / evita)
faq.html              FAQ por categorías
about.html            Bio, trayectoria, stack, cuándo sí / cuándo no
contact.html          Formulario orientado a proyecto (serverless + fallback mailto)
css/styles.css        Sistema de diseño global (+ @font-face al tope)
tools/templates/      Plantilla de caso de estudio (HTML + CSS)
docs/NUEVO_CASO.md    Checklist para publicar un caso nuevo
tools/verify.mjs      QA estático: node tools/verify.mjs
tools/e2e.mjs         QA de flujos: node tools/e2e.mjs (requiere playwright)
tools/test-contact.mjs Tests del endpoint del formulario
api/contact.js        Función serverless del formulario (docs/FORMULARIO.md)
js/main.js            i18n, tema, navegación, reveals, formulario, SW registro
vercel.json           Headers de seguridad (CSP con hashes), cache, cleanUrls
```

## Desarrollo local

Cualquier server estático con clean URLs. Incluido en el repo:

```bash
node tools/serve.mjs   # http://127.0.0.1:4173, con clean URLs y 404 real
```

## Checklist al editar

1. Cambiaste copy con `data-i18n` → actualizá **ambos** idiomas en el diccionario de `js/main.js`.
2. Cambiaste CSS/JS → bump del `?v=` en todas las páginas **y** en `sw.js` (+ `VERSION`).
3. Cambiaste un JSON-LD inline → regenerá sus hashes SHA-256 de CSP y actualizá `vercel.json` antes del deploy.
4. Sumaste página → sitemap.xml, sw.js (precache), navegación y `pageMetaFromHref` en main.js.

## Verificación

Última auditoría local registrada: Accesibilidad 100 · Best Practices 100 · SEO 100. Performance se mide por entorno antes de publicar cambios relevantes; no se declara un score fijo porque Lighthouse local puede variar por CPU, red simulada y estado del navegador.

## Licencia

MIT — ver `LICENSE`.
