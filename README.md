# Rony Cozzi — Portfolio personal

Sitio personal y portfolio de **Rony Cozzi**, Full-Stack Developer.
HTML + CSS + JavaScript vanilla. Sin frameworks, sin build step.

## Live

Próximamente en Netlify.

## Stack

- **HTML5** semántico
- **CSS3** con variables, grid, clamp, container queries, `position: sticky`, `overflow: clip`
- **JavaScript** ES6+ vanilla — `IntersectionObserver`, `requestAnimationFrame`, sin dependencias
- **Google Fonts:** Space Grotesk + Inter
- **Mobile-first** desde 375px hasta ultra-wide

## Features

- **Dark / light theme** con persistencia en `localStorage` (default: dark)
- **i18n ES / EN** con toggle funcional (todos los strings traducidos)
- **Page transitions** custom con overlay verde lima
- **Cursor custom** magnético con `mix-blend-mode: difference`
- **Magnetic links** y botones con `rAF` smoothing
- **3D tilt cards** en el deck de proyectos del home
- **Scroll horizontal pinneado** en `work.html` (vertical scroll → horizontal translate + tail dwell)
- **Word rotator** en el hero
- **Reveals** por línea con `IntersectionObserver`
- **Parallax** sutil en cards y foto del about
- **Accesibilidad:** `prefers-reduced-motion` respetado, focus visible, ARIA en navegación, keyboard nav
- **Cache control:** meta tags + versioning para evitar staleness en deploy

## Estructura

```
.
├── index.html         Home: hero, featured deck (4 proyectos), services, contact card
├── work.html          Proyectos: scroll horizontal pinneado, capabilities
├── about.html         Sobre mí: bio, stack, principios
├── contact.html       Contacto: email/WhatsApp + formulario que abre mailto
├── css/
│   └── styles.css     Sistema de diseño completo (tokens, dark/light, responsive)
├── js/
│   └── main.js        Theme, lang, transitions, cursor, magnetic, tilt, scroll horizontal, etc.
└── assets/
    └── img/           Foto + thumbnails (CSS-generated)
```

## Proyectos destacados

1. **Cucú Studio** — Estudio creativo · [cucu-studios.netlify.app](https://cucu-studios.netlify.app)
2. **Luco Gourmet** — Gastronomía · [luco-gourmet-demo.netlify.app](https://luco-gourmet-demo.netlify.app)
3. **Sellink Group** — Agencia · [sellink-group.netlify.app](https://sellink-group.netlify.app)
4. **Cognition** — Transformación digital + IA · [cognition.com.ar](https://cognition.com.ar)

## Preview local

```bash
# desde la raíz del proyecto:
python -m http.server 5505
# abrir http://localhost:5505
```

O usar Live Server en VS Code.

## Contacto

- **Email:** ronycozzi5@gmail.com
- **WhatsApp:** +54 351 507 3210
- **GitHub:** [github.com/ronycozzi](https://github.com/ronycozzi)
- **LinkedIn:** [linkedin.com/in/rony-cozzi-677111251](https://linkedin.com/in/rony-cozzi-677111251)

---

© 2026 — Rony Cozzi
