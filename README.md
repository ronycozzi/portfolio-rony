# Rony Cozzi — Portfolio v2

Portfolio personal en producción: **[rony-cozzi.netlify.app](https://rony-cozzi.netlify.app)**

## Stack

- **HTML5 + CSS3 + JavaScript ES6+** — sin frameworks, sin build step, sin npm
- **Netlify** — deploy, forms, headers, CDN
- **Google Fonts** — Space Grotesk (display) + Inter (body)

## Estructura

```
portfolio-rony/
├── index.html              Home — hero, featured deck, services, contact card
├── work.html               Pin horizontal con 4 proyectos + capabilities
├── about.html              Bio, stack, principios
├── contact.html            Form (Netlify Forms) + email/WhatsApp
├── faq.html                10 preguntas frecuentes con FAQPage schema
├── process.html            Proceso de trabajo paso a paso
├── privacy.html            Política de privacidad (Ley 25.326 + GDPR)
├── terms.html              Términos y condiciones
├── 404.html                Página 404 custom con terminal easter egg
├── manifest.json           PWA manifest
├── netlify.toml            Security headers + redirects
├── sitemap.xml             10 URLs indexadas
├── robots.txt              Allow all
├── favicon.svg             Logo RC
├── og-image.svg            OG preview 1200×630
├── css/
│   ├── styles.css          ~2100 líneas — tokens, componentes, responsive
│   └── case.css            Estilos para case studies
├── js/
│   └── main.js             ~820 líneas — i18n, theme, transitions, etc.
├── assets/
│   ├── Rony_Cozzi_CV.pdf   CV descargable
│   ├── img/rony.jpg        Foto bio (B&N vía CSS)
│   ├── icons/              PWA icons 192/512
│   └── work/               Screenshots WebP de proyectos
└── case/
    ├── cucu.html           Case study — Cucú Studio
    ├── luco.html           Case study — Luco Gourmet
    ├── sellink.html        Case study — Sellink Group
    └── cognition.html      Case study — Cognition
```

## Correr local

```bash
# Opción 1: Python (cualquier OS)
python -m http.server 3000

# Opción 2: Node
npx serve .

# Opción 3: VS Code Live Server
# Instalar extensión "Live Server" → click derecho en index.html → Open with Live Server
```

## Deploy

Auto-deploy desde `main` → [Netlify](https://app.netlify.com/projects/rony-cozzi). Push a `main` = deploy en ~30 segundos.

```bash
git add .
git commit -m "feat: descripción del cambio"
git push origin main
```

## Agregar un proyecto nuevo al carrusel

1. En `index.html`, copiar un bloque `<a class="card card--XXX">` en la sección `.featured__deck`
2. Setear `--card-bg`, `--card-fg`, `--card-accent` en el atributo `style`
3. Agregar la paleta correspondiente en `styles.css` (buscar `.card--cucu` como referencia)
4. En `work.html`, copiar un bloque `.work-item` en el track horizontal
5. Crear `case/nombre.html` copiando una página de case study existente
6. Actualizar `sitemap.xml` con la nueva URL

## Agregar un case study

1. Copiar `case/cucu.html` → `case/nuevo.html`
2. Cambiar: title, meta description, canonical, og:image, h1, tags, stats, textos, stack
3. Agregar screenshot a `assets/work/nuevo.webp`
4. Linkear desde `index.html` y `work.html`
5. Actualizar `sitemap.xml`

## Cambiar la paleta

Los tokens están en `css/styles.css` bajo `/* ---------- Tokens ---------- */`:

```css
:root {
  --accent: #C6FF3D; /* verde lima — dark mode */
}
[data-theme="light"] {
  --accent: #2E5BFF; /* azul eléctrico — light mode */
}
```

## Decisiones técnicas

- `overflow-x: clip` en html/body (no `hidden`) — preserva `position: sticky` en descendientes
- IntersectionObserver en `.line` (no en `.reveal` clipped) — el threshold funciona correctamente
- Cache busting con `?v=Date.now()` en navegación interna — evita HTML stale
- `data-netlify="true"` en el form + fetch + fallback mailto — sin backend

## Licencia

MIT — podés ver e inspirarte en el código, pero no copiarlo como portfolio propio.
