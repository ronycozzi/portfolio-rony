# Rony Cozzi — Portfolio v2

Portfolio personal en producción: **[portfolios-ronycozzi.vercel.app](https://portfolios-ronycozzi.vercel.app)**

## Stack

- **HTML5 + CSS3 + JavaScript ES6+** — sin frameworks, sin build step, sin npm
- **Vercel** — deploy, headers, CDN
- **Google Fonts** — Space Grotesk (display) + Inter (body)
- **PWA** — Service Worker, manifest instalable, offline-first

## Estructura

```
portfolio-rony/
├── index.html              Home — hero, featured deck, services, contact card
├── work.html               Pin horizontal con 4 proyectos + capabilities
├── about.html              Bio, stack, principios
├── contact.html            Form mailto + email/WhatsApp
├── faq.html                Preguntas frecuentes con FAQPage schema
├── process.html            Proceso de trabajo paso a paso
├── privacy.html            Política de privacidad (Ley 25.326 + GDPR)
├── terms.html              Términos y condiciones
├── 404.html                Página 404 custom con terminal easter egg
├── manifest.json           PWA manifest
├── vercel.json             Security headers + cache rules
├── sitemap.xml             URLs indexadas
├── robots.txt              Allow all
├── sw.js                   Service worker (network-first docs, SWR assets)
├── favicon.svg             Logo RC
├── og-image.png            OG preview 1200×630
├── LICENSE                 MIT
├── css/
│   ├── styles.css          Tokens, componentes, responsive
│   └── case.css            Estilos para case studies
├── js/
│   └── main.js             i18n, theme, transitions, etc.
├── assets/
│   ├── Rony_Cozzi_CV.pdf   CV descargable
│   ├── img/rony.jpg        Foto bio (B&N vía CSS)
│   ├── icons/              PWA icons 180/192/512
│   └── work/               Screenshots WebP de proyectos
└── case/
    ├── cucu.html           Caso de estudio — Cucú Studio
    ├── luco.html           Caso de estudio — Luco Gourmet
    ├── sellink.html        Caso de estudio — Sellink Group
    └── cognition.html      Caso de estudio — Cognition
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

Auto-deploy desde `main` en Vercel. Push a `main` = deploy automático.

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
5. Crear `case/nombre.html` copiando una página de caso de estudio existente
6. Actualizar `sitemap.xml` con la nueva URL (sin `.html`; por ejemplo: `https://portfolios-ronycozzi.vercel.app/case/nombre`)

## Agregar un caso de estudio

1. Copiar `case/cucu.html` → `case/nuevo.html`
2. Cambiar: title, meta description, canonical, og:image, h1, tags, stats, textos, stack
3. Agregar screenshot a `assets/work/nuevo.webp`
4. Linkear desde `index.html` y `work.html`
5. Actualizar `sitemap.xml` (URLs públicas sin `.html`)

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
- IntersectionObserver en `.line` para reveals — el threshold funciona correctamente
- Versionado de assets (CSS/JS) vía `?v=` + rotación de caches del Service Worker por `VERSION` (evita stale con `immutable`)
- Formulario sin backend: prepara un `mailto:` con los datos ingresados y mantiene canales directos de email/WhatsApp
- Tema respeta `prefers-color-scheme` por defecto, override por toggle persiste en `localStorage`
- i18n ES/EN con `data-i18n`, ARIA labels y skip-link traducidos dinámicamente

## Licencia

MIT — ver [LICENSE](./LICENSE). Podés ver e inspirarte en el código, pero no replicarlo como portfolio propio.
