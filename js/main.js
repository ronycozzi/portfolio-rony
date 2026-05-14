/* =========================================================
   Rony Cozzi — Portfolio v2
   Vanilla JS · no deps
   ========================================================= */
(() => {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  /* ---------- i18n strings ---------- */
  const i18n = {
    es: {
      'nav.about': 'Sobre mí',
      'nav.contact': 'Contacto',
      'hero.tag': 'Disponible · 2026',
      'hero.role': 'Rony Cozzi — Full-Stack Developer',
      'hero.title1': 'Construyendo',
      'hero.title2': 'sitios rápidos',
      'hero.title3': 'para marcas modernas.',
      'hero.intro': 'Diseño y desarrollo enfocados en performance, accesibilidad y código mantenible. Trabajo con marcas, estudios y startups.',
      'hero.cta': 'Ver proyectos',
      'hero.cta2': 'Contacto',
      'hero.scroll': 'Scroll',
      'hero.fact.services': 'Servicios',
      'hero.fact.services_val': 'Web nueva · Landing pages',
      'hero.fact.response': 'Respuesta',
      'hero.fact.response_val': '< 24h',
      'hero.fact.langs': 'Idiomas',
      'hero.fact.modality': 'Modalidad',
      'hero.fact.modality_val': 'Remoto · GMT-3',
      'featured.copy': 'Una selección de proyectos en producción. Sitios pensados desde la performance, el contenido y la marca.',
      'featured.cta': 'Explorar trabajos',
      'services.title': 'Servicios',
      'services.copy': 'Dos modalidades de trabajo. Cada proyecto se entrega listo para producción: optimizado, accesible y mantenible.',
      'services.s1.title': 'Web nueva desde cero',
      'services.s1.tag': 'Proyecto completo',
      'services.s1.desc': 'Diseño y desarrollo completo. HTML, CSS y JavaScript modernos. Estructura semántica, performance, SEO técnico y deploy listo para producción.',
      'services.s1.i1': 'Diseño + desarrollo',
      'services.s1.i2': 'Responsive · Mobile-first',
      'services.s1.i3': 'SEO técnico + Schema.org',
      'services.s1.i4': 'Deploy en Netlify / Vercel',
      'services.s2.title': 'Landing page',
      'services.s2.tag': 'Single page',
      'services.s2.desc': 'Página única orientada a conversión. Para lanzamientos, campañas o productos específicos. Foco en velocidad de carga, copy claro y CTA visible.',
      'services.s2.i1': 'Diseño + desarrollo',
      'services.s2.i2': 'Formulario / integración',
      'services.s2.i3': 'Analytics + tracking',
      'services.s2.i4': 'A/B test ready',
      'contactCard.eyebrow': '[ Contacto directo ]',
      'contactCard.title': 'Escribime por mail<br/>o WhatsApp.',
      'contactCard.response': 'Respuesta',
      'contactCard.response_val': '< 24h',
      'contactCard.langs': 'Idiomas',
      'contactCard.modality': 'Modalidad',
      'contactCard.modality_val': 'Remoto · GMT-3',
      'contactCard.based': 'Base',
      'card.soon': 'Próximamente',
      'footer.status': 'Disponible · 2026',
      'footer.based': 'Remoto',
      'footer.services': 'Servicios',
      'footer.s1': 'Web desde cero',
      'footer.s2': 'Landing pages',
      'footer.topLabel': 'Subir',
      'footer.contact': 'Contacto',
      'footer.social': 'Social',
      'footer.nav': 'Navegación',
      'footer.assets': 'Recursos',
      'footer.cv': 'CV (PDF) ↓',
      'footer.top': 'Volver arriba ↑',
      'work.years': 'Años',
      'work.role': 'Rol',
      'work.status': 'Estado',
      'work.status_val': '4 proyectos · live',
      'work.hint': 'Scroll',
      'work.visit': 'Visitar sitio',
      'work.soon': 'Próximamente',
      'work.cucu.desc': 'Sitio para estudio creativo. Tipografía editorial, animaciones por scroll y micro-interacciones.',
      'work.luco.desc': 'Sitio para marca gastronómica. PWA con menú offline, Schema.org y carga sub-segundo.',
      'work.sellink.desc': 'Sitio corporativo. Estructura modular, presentación de servicios y formularios accesibles.',
      'work.cognition.desc': 'Plataforma de IA para empresas. 11 páginas, calculadora ROI, chat con intents y PWA.',
      'cap.title': 'Capacidades',
      'cap.fe.title': 'Desarrollo frontend',
      'cap.fe': 'HTML semántico, CSS moderno, JavaScript ES6+. Sitios accesibles y rápidos.',
      'cap.perf.title': 'Performance',
      'cap.perf': 'Optimización de assets, lazy loading, Core Web Vitals. Score Lighthouse 90+.',
      'cap.pwa.title': 'Progressive Web Apps',
      'cap.pwa': 'Service Workers, manifest, instalables. Caching estratégico y offline-first.',
      'cap.seo.title': 'SEO técnico',
      'cap.seo': 'Schema.org, Open Graph, sitemap, semántica correcta. Indexable y compartible.',
      'about.lead': 'Diseño y desarrollo de sitios web con foco en performance, accesibilidad y código mantenible. Trabajo con marcas, estudios y startups que necesitan una presencia digital que funcione.',
      'about.bio.heading': 'Bio',
      'about.bio.p1': 'Full Stack Developer enfocado en frontend. Construyo sitios accesibles, rápidos y mantenibles con HTML, CSS y JavaScript modernos, sin depender de frameworks innecesarios.',
      'about.bio.p2': 'Trabajo de forma independiente con marcas y estudios que valoran código limpio, tiempos cortos y comunicación directa. Cada proyecto se entrega listo para producción: optimizado, indexable y mantenible.',
      'about.bio.p3': 'Disponible para colaboraciones remotas, proyectos puntuales y posiciones in-house.',
      'about.facts.role': 'Rol',
      'about.facts.modality': 'Modalidad',
      'about.facts.langs': 'Idiomas',
      'about.facts.status': 'Estado',
      'about.facts.status_val': 'Aceptando proyectos',
      'stack.languages': 'Lenguajes',
      'stack.frameworks': 'Frameworks',
      'stack.tools': 'Herramientas',
      'stack.practices': 'Prácticas',
      'principles.title': 'Principios',
      'principles.1.title': 'Performance primero',
      'principles.1.desc': 'Cada milisegundo cuenta. Sitios optimizados desde el primer commit.',
      'principles.2.title': 'Accesibilidad por default',
      'principles.2.desc': 'WCAG 2.1, contraste, navegación por teclado. Sin compromisos.',
      'principles.3.title': 'Código mantenible',
      'principles.3.desc': 'Sin frameworks por moda. Cada decisión técnica se sostiene en el tiempo.',
      'principles.4.title': 'Comunicación clara',
      'principles.4.desc': 'Updates frecuentes, deadlines reales y entregas sin sorpresas.',
      'contact.direct': 'Contacto directo',
      'contact.form.title': 'Mensaje rápido',
      'contact.form.name': 'Nombre',
      'contact.form.subject': 'Asunto',
      'contact.form.message': 'Mensaje',
      'contact.form.send': 'Enviar mensaje',
      'contact.form.opt_project': 'Proyecto',
      'contact.form.opt_job': 'Oportunidad laboral',
      'contact.form.opt_collab': 'Colaboración',
      'contact.form.opt_other': 'Otro',
      'contact.availability': 'Disponibilidad',
      'contact.availability_val': 'Aceptando proyectos · 2026',
      'contact.timezone': 'Zona horaria',
      'contact.response': 'Tiempo de respuesta',
      'contact.response_val': 'Menos de 24h',
    },
    en: {
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'hero.tag': 'Available · 2026',
      'hero.role': 'Rony Cozzi — Full-Stack Developer',
      'hero.title1': 'Building',
      'hero.title2': 'fast websites',
      'hero.title3': 'for modern brands.',
      'hero.intro': 'Design and development focused on performance, accessibility and maintainable code. Working with brands, studios and startups.',
      'hero.cta': 'View work',
      'hero.cta2': 'Contact',
      'hero.scroll': 'Scroll',
      'hero.fact.services': 'Services',
      'hero.fact.services_val': 'New site · Landing pages',
      'hero.fact.response': 'Response',
      'hero.fact.response_val': '< 24h',
      'hero.fact.langs': 'Languages',
      'hero.fact.modality': 'Modality',
      'hero.fact.modality_val': 'Remote · GMT-3',
      'featured.copy': 'A selection of live projects. Sites built around performance, content and brand.',
      'featured.cta': 'Explore work',
      'services.title': 'Services',
      'services.copy': 'Two work modes. Every project ships production-ready: optimized, accessible and maintainable.',
      'services.s1.title': 'New site from scratch',
      'services.s1.tag': 'Full project',
      'services.s1.desc': 'End-to-end design and development. Modern HTML, CSS and JavaScript. Semantic structure, performance, technical SEO and deploy-ready output.',
      'services.s1.i1': 'Design + development',
      'services.s1.i2': 'Responsive · Mobile-first',
      'services.s1.i3': 'Technical SEO + Schema.org',
      'services.s1.i4': 'Deploy on Netlify / Vercel',
      'services.s2.title': 'Landing page',
      'services.s2.tag': 'Single page',
      'services.s2.desc': 'Single page focused on conversion. For launches, campaigns or specific products. Built around load speed, clear copy and a visible CTA.',
      'services.s2.i1': 'Design + development',
      'services.s2.i2': 'Form / integration',
      'services.s2.i3': 'Analytics + tracking',
      'services.s2.i4': 'A/B test ready',
      'contactCard.eyebrow': '[ Direct contact ]',
      'contactCard.title': 'Email me or<br/>send a WhatsApp.',
      'contactCard.response': 'Response',
      'contactCard.response_val': '< 24h',
      'contactCard.langs': 'Languages',
      'contactCard.modality': 'Modality',
      'contactCard.modality_val': 'Remote · GMT-3',
      'contactCard.based': 'Based',
      'card.soon': 'Coming soon',
      'footer.status': 'Available · 2026',
      'footer.based': 'Remote',
      'footer.services': 'Services',
      'footer.s1': 'Web from scratch',
      'footer.s2': 'Landing pages',
      'footer.topLabel': 'Top',
      'footer.contact': 'Contact',
      'footer.social': 'Social',
      'footer.nav': 'Navigation',
      'footer.assets': 'Assets',
      'footer.cv': 'CV (PDF) ↓',
      'footer.top': 'Back to top ↑',
      'work.years': 'Years',
      'work.role': 'Role',
      'work.status': 'Status',
      'work.status_val': '4 projects · live',
      'work.hint': 'Scroll',
      'work.visit': 'Visit site',
      'work.soon': 'Coming soon',
      'work.cucu.desc': 'Site for a creative studio. Editorial typography, scroll animations and micro-interactions.',
      'work.luco.desc': 'Site for a gastronomy brand. PWA with offline menu, Schema.org and sub-second load.',
      'work.sellink.desc': 'Corporate site. Modular structure, services presentation and accessible forms.',
      'work.cognition.desc': 'AI platform for enterprises. 11 pages, ROI calculator, intent-based chat and PWA.',
      'cap.title': 'Capabilities',
      'cap.fe.title': 'Frontend Development',
      'cap.fe': 'Semantic HTML, modern CSS, ES6+ JavaScript. Accessible and fast websites.',
      'cap.perf.title': 'Performance Engineering',
      'cap.perf': 'Asset optimization, lazy loading, Core Web Vitals. 90+ Lighthouse score.',
      'cap.pwa.title': 'Progressive Web Apps',
      'cap.pwa': 'Service Workers, manifest, installable. Strategic caching and offline-first.',
      'cap.seo.title': 'Technical SEO',
      'cap.seo': 'Schema.org, Open Graph, sitemap, semantic markup. Indexable and shareable.',
      'about.lead': 'Web development focused on performance, accessibility and maintainable code. Working with brands, studios and startups that need a digital presence that performs.',
      'about.bio.heading': 'Bio',
      'about.bio.p1': 'Full Stack Developer focused on frontend. I build accessible, fast and maintainable sites with modern HTML, CSS and JavaScript — without relying on unnecessary frameworks.',
      'about.bio.p2': 'I work independently with brands and studios that value clean code, fast delivery and direct communication. Each project ships production-ready: optimized, indexable and maintainable.',
      'about.bio.p3': 'Available for remote collaborations, one-off projects and in-house positions.',
      'about.facts.role': 'Role',
      'about.facts.modality': 'Modality',
      'about.facts.langs': 'Languages',
      'about.facts.status': 'Status',
      'about.facts.status_val': 'Accepting projects',
      'stack.languages': 'Languages',
      'stack.frameworks': 'Frameworks',
      'stack.tools': 'Tools',
      'stack.practices': 'Practices',
      'principles.title': 'Principles',
      'principles.1.title': 'Performance first',
      'principles.1.desc': 'Every millisecond counts. Sites optimized from the first commit.',
      'principles.2.title': 'Accessibility by default',
      'principles.2.desc': 'WCAG 2.1, contrast, keyboard navigation. No compromises.',
      'principles.3.title': 'Maintainable code',
      'principles.3.desc': 'No frameworks by trend. Every technical decision holds up over time.',
      'principles.4.title': 'Clear communication',
      'principles.4.desc': 'Frequent updates, realistic deadlines and no-surprises delivery.',
      'contact.direct': 'Direct contact',
      'contact.form.title': 'Quick message',
      'contact.form.name': 'Name',
      'contact.form.subject': 'Subject',
      'contact.form.message': 'Message',
      'contact.form.send': 'Send message',
      'contact.form.opt_project': 'Project',
      'contact.form.opt_job': 'Job opportunity',
      'contact.form.opt_collab': 'Collaboration',
      'contact.form.opt_other': 'Other',
      'contact.availability': 'Availability',
      'contact.availability_val': 'Accepting projects · 2026',
      'contact.timezone': 'Timezone',
      'contact.response': 'Response time',
      'contact.response_val': 'Less than 24h',
    },
  };

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      const val = i18n[lang]?.[key];
      if (val == null) return;
      // Allow controlled HTML (eg. <br/>, <em>) in i18n strings — strings come from this file, not user input.
      if (/<[a-z\/][^>]*>/i.test(val)) el.innerHTML = val;
      else el.textContent = val;
    });
    document.querySelectorAll('.lang-toggle').forEach((btn) => {
      btn.querySelectorAll('[data-lang]').forEach((s) => {
        s.classList.toggle('is-active', s.dataset.lang === lang);
      });
    });
  }

  function setupLang() {
    const stored = localStorage.getItem('rc-lang') || 'es';
    applyLang(stored);
    document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const current = localStorage.getItem('rc-lang') || 'es';
        const next = current === 'es' ? 'en' : 'es';
        localStorage.setItem('rc-lang', next);
        applyLang(next);
      });
    });
  }

  /* ---------- Theme ---------- */
  function setupTheme() {
    const stored = localStorage.getItem('rc-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', stored);
    document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('rc-theme', next);
      });
    });
  }

  /* ---------- Page transitions ---------- */
  function setupPageTransitions() {
    const overlay = document.querySelector('.page-transition');
    const page = document.querySelector('.page');

    // Entrance
    requestAnimationFrame(() => {
      page?.classList.add('is-ready');
    });

    if (!overlay) return;
    document.querySelectorAll('a[data-link]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || a.target === '_blank') return;
        e.preventDefault();

        // Set transition label from target page
        const num = getPageNumFromHref(href);
        const name = getPageNameFromHref(href);
        overlay.querySelector('.page-transition__num').textContent = num;
        overlay.querySelector('.page-transition__name').textContent = name;

        overlay.classList.add('is-active', 'is-in');

        // Cache-bust: append timestamp so Chrome doesn't serve a stale copy
        // Preserve any existing hash; strip prior ?v= if present
        const url = new URL(href, window.location.origin);
        url.searchParams.set('v', Date.now());
        setTimeout(() => { window.location.href = url.pathname + url.search + url.hash; }, 700);
      });
    });
  }

  function getPageNumFromHref(href) {
    if (href.includes('work')) return '02';
    if (href.includes('about')) return '03';
    if (href.includes('contact')) return '04';
    return '01';
  }
  function getPageNameFromHref(href) {
    const lang = localStorage.getItem('rc-lang') || 'es';
    if (href.includes('work')) return 'Work';
    if (href.includes('about')) return lang === 'en' ? 'About' : 'Sobre mí';
    if (href.includes('contact')) return lang === 'en' ? 'Contact' : 'Contacto';
    return 'Home';
  }

  /* ---------- Reveals ---------- */
  function setupReveals() {
    const dataReveals = document.querySelectorAll('[data-reveal]');
    const lines = document.querySelectorAll('.line');
    const fades = document.querySelectorAll('.reveal-fade');

    if (!('IntersectionObserver' in window)) {
      dataReveals.forEach((el) => el.classList.add('is-in'));
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-in'));
      fades.forEach((el) => el.classList.add('is-in'));
      return;
    }

    const ioData = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            setTimeout(() => el.classList.add('is-in'), i * 60);
            ioData.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    dataReveals.forEach((el) => ioData.observe(el));

    const ioLines = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const line = entry.target;
            const children = line.querySelectorAll('.reveal, .reveal-fade');
            const siblings = Array.from(line.parentElement.querySelectorAll('.line'));
            const idx = siblings.indexOf(line);
            children.forEach((child) => {
              setTimeout(() => child.classList.add('is-in'), idx * 120);
            });
            ioLines.unobserve(line);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    lines.forEach((line) => ioLines.observe(line));
  }

  /* ---------- Cursor ---------- */
  function setupCursor() {
    if (isTouch) return;
    const cursor = document.querySelector('.cursor');
    const dot = document.querySelector('.cursor-dot');
    const label = cursor?.querySelector('.cursor__label');
    if (!cursor || !dot) return;

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let cx = mx, cy = my, dx = mx, dy = my;
    window.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; }, { passive: true });

    function loop() {
      cx += (mx - cx) * 0.16;
      cy += (my - cy) * 0.16;
      dx += (mx - dx) * 0.4;
      dy += (my - dy) * 0.4;
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    const hoverables = document.querySelectorAll('a, button, [data-magnetic], [data-tilt]');
    hoverables.forEach((el) => {
      const cursorText = el.dataset.cursor;
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('is-hover');
        if (cursorText && label) label.textContent = cursorText;
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('is-hover');
        if (label) label.textContent = '';
      });
    });
  }

  /* ---------- Magnetic ---------- */
  function setupMagnetic() {
    if (isTouch || reducedMotion) return;
    const els = document.querySelectorAll('[data-magnetic]');
    const strength = 0.22;
    els.forEach((el) => {
      let raf = null;
      let tx = 0, ty = 0, cx = 0, cy = 0;
      function update() {
        cx += (tx - cx) * 0.18;
        cy += (ty - cy) * 0.18;
        el.style.transform = `translate(${cx}px, ${cy}px)`;
        if (Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1) raf = requestAnimationFrame(update);
        else raf = null;
      }
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        tx = (e.clientX - (r.left + r.width / 2)) * strength;
        ty = (e.clientY - (r.top + r.height / 2)) * strength;
        if (!raf) raf = requestAnimationFrame(update);
      });
      el.addEventListener('mouseleave', () => {
        tx = 0; ty = 0;
        if (!raf) raf = requestAnimationFrame(update);
      });
    });
  }

  /* ---------- Tilt 3D ---------- */
  function setupTilt() {
    if (isTouch || reducedMotion) return;
    const cards = document.querySelectorAll('[data-tilt]');
    cards.forEach((card) => {
      let raf = null;
      let tx = 0, ty = 0, cx = 0, cy = 0;

      function update() {
        cx += (tx - cx) * 0.12;
        cy += (ty - cy) * 0.12;
        card.style.transform = `perspective(900px) rotateX(${cy}deg) rotateY(${cx}deg) translateZ(0)`;
        if (Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05) raf = requestAnimationFrame(update);
        else raf = null;
      }
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        tx = (px - 0.5) * 14;
        ty = -(py - 0.5) * 10;
        if (!raf) raf = requestAnimationFrame(update);
      });
      card.addEventListener('mouseleave', () => {
        tx = 0; ty = 0;
        if (!raf) raf = requestAnimationFrame(update);
      });
    });
  }

  /* ---------- Header scroll state + scroll progress ---------- */
  function setupHeaderAndProgress() {
    const header = document.querySelector('.header');
    const pct = document.querySelector('[data-scroll-pct]');
    function onScroll() {
      header?.classList.toggle('is-scrolled', window.scrollY > 24);
      if (pct) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const val = max > 0 ? Math.min(99, Math.floor((window.scrollY / max) * 100)) : 0;
        pct.textContent = String(val).padStart(2, '0');
      }
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Word rotator (hero) ---------- */
  function setupRotator() {
    const rot = document.querySelector('[data-rotator]');
    if (!rot) return;
    const items = Array.from(rot.children);
    let idx = 0;
    setInterval(() => {
      items[idx].classList.remove('is-active');
      items[idx].classList.add('is-out');
      const next = (idx + 1) % items.length;
      items[next].classList.remove('is-out');
      items[next].classList.add('is-active');
      idx = next;
      setTimeout(() => items.forEach((it, i) => { if (i !== idx) it.classList.remove('is-out'); }), 700);
    }, 2400);
  }

  /* ---------- Manifesto word lighting (scroll-driven) ---------- */
  function setupManifesto() {
    const target = document.querySelector('[data-split]');
    if (!target) return;
    const span = target.querySelector('[data-i18n]') || target;
    const text = span.textContent.trim();
    span.textContent = '';
    const words = text.split(/\s+/);
    const fragments = words.map((w) => {
      const s = document.createElement('span');
      s.className = 'word';
      s.textContent = w + ' ';
      span.appendChild(s);
      return s;
    });

    function onScroll() {
      const rect = target.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 1 - (rect.top - vh * 0.2) / (vh * 0.7)));
      const lit = Math.floor(progress * fragments.length);
      fragments.forEach((f, i) => f.classList.toggle('is-lit', i < lit));
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Re-render on lang change: observe the data-i18n target
    const mo = new MutationObserver(() => {
      const newText = span.dataset._origin || span.textContent;
      // not used; lang toggle re-renders innerText of [data-i18n] children, which removes our spans.
      // We re-split on each lang change handler via setupLang trigger; here as a safety net.
    });
    mo.observe(span, { childList: true });
  }

  /* ---------- Horizontal pinning: vertical scroll → horizontal translate ---------- */
  function setupHorizontal() {
    const section = document.querySelector('[data-pin-horizontal]');
    if (!section) return;
    const track = section.querySelector('[data-horizontal-track]');
    const bar = section.querySelector('[data-horizontal-progress]');
    const current = section.querySelector('[data-horizontal-current]');
    if (!track) return;

    const mobileMQ = window.matchMedia('(max-width: 860px)');
    let horizontalDist = 0;
    let tailDwell = 0;
    let itemCount = track.children.length || 1;
    // Set total count dynamically (scales with number of work items)
    const total = section.querySelector('[data-horizontal-total]');
    if (total) total.textContent = String(itemCount).padStart(2, '0');

    function setup() {
      if (mobileMQ.matches) {
        section.style.height = '';
        track.style.transform = '';
        if (bar) bar.style.width = '100%';
        return;
      }
      const trackWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      horizontalDist = Math.max(0, trackWidth - viewportWidth);
      // Extra "dwell": once the last item is in view, keep the pin for ~70% of viewport
      // so the user can see it settled before the page continues scrolling down.
      tailDwell = Math.round(window.innerHeight * 0.7);
      section.style.height = (horizontalDist + window.innerHeight + tailDwell) + 'px';
    }

    function onScroll() {
      if (mobileMQ.matches) return;
      const rect = section.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      // The horizontal phase consumes the first `horizontalDist` of scroll.
      // The remaining `tailDwell` keeps the last item pinned before release.
      const xProgress = horizontalDist > 0 ? Math.min(1, scrolled / horizontalDist) : 1;
      const x = xProgress * horizontalDist;
      track.style.transform = `translate3d(${-x}px, 0, 0)`;
      if (bar) bar.style.width = `${Math.max(8, xProgress * 100)}%`;
      if (current) {
        const idx = Math.min(itemCount, Math.floor(xProgress * itemCount) + 1);
        current.textContent = String(idx).padStart(2, '0');
      }
    }

    setup();
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', () => { setup(); onScroll(); }, { passive: true });
    // Re-measure once images/fonts settle
    setTimeout(() => { setup(); onScroll(); }, 400);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => { setup(); onScroll(); });
    }
  }

  /* ---------- Parallax cards (featured deck) ---------- */
  function setupParallaxDeck() {
    if (reducedMotion) return;
    const deck = document.querySelector('[data-parallax-deck]');
    if (!deck) return;
    const cards = Array.from(deck.querySelectorAll('.card'));
    function onScroll() {
      cards.forEach((c, i) => {
        const r = c.getBoundingClientRect();
        const vh = window.innerHeight;
        const t = (vh - r.top) / (vh + r.height);
        const offset = (t - 0.5) * 30 * (i % 2 === 0 ? -1 : 1);
        c.style.setProperty('--y', `${offset}px`);
        c.style.translate = `0 ${offset}px`;
      });
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Parallax image (about) ---------- */
  function setupParallaxImg() {
    if (reducedMotion) return;
    const wrap = document.querySelector('[data-parallax-img]');
    if (!wrap) return;
    const img = wrap.querySelector('img');
    if (!img) return;
    function onScroll() {
      const r = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      const t = (vh - r.top) / (vh + r.height);
      const offset = (t - 0.5) * 50;
      img.style.translate = `0 ${offset}px`;
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Mobile menu ---------- */
  function setupMobileMenu() {
    const btn = document.querySelector('[data-menu-toggle]');
    const menu = document.querySelector('[data-mobile-menu]');
    if (!btn || !menu) return;

    function setOpen(open) {
      menu.classList.toggle('is-open', open);
      btn.classList.toggle('is-open', open);
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      btn.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    }

    btn.addEventListener('click', () => setOpen(!menu.classList.contains('is-open')));

    // Close on link click (so the next page loads with menu closed)
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) setOpen(false);
    });

    // Close on resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 860 && menu.classList.contains('is-open')) setOpen(false);
    });
  }

  /* ---------- Clock ---------- */
  function setupClock() {
    const els = document.querySelectorAll('[data-clock]');
    if (!els.length) return;
    function tick() {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      const ss = String(now.getSeconds()).padStart(2, '0');
      els.forEach((el) => { el.textContent = `${hh}:${mm}:${ss} GMT-3`; });
    }
    tick();
    setInterval(tick, 1000);
  }

  /* ---------- Year ---------- */
  function setupYear() {
    const y = new Date().getFullYear();
    document.querySelectorAll('.year').forEach((el) => { el.textContent = y; });
  }

  /* ---------- Contact form (Netlify Forms) ---------- */
  function setupContactForm() {
    const form = document.querySelector('[data-contact-form]');
    if (!form) return;
    const note = form.querySelector('[data-form-note]');
    const btn = form.querySelector('[type="submit"]');
    const btnText = btn?.querySelector('.form-submit__text');
    const lang = () => localStorage.getItem('rc-lang') || 'es';

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }

      // Loading state
      if (btn) { btn.disabled = true; btn.setAttribute('aria-busy', 'true'); }
      if (btnText) btnText.textContent = lang() === 'en' ? 'Sending…' : 'Enviando…';
      if (note) note.textContent = '';

      try {
        const data = new FormData(form);
        const encoded = new URLSearchParams(data).toString();
        const res = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encoded,
        });

        if (res.ok) {
          if (note) note.textContent = lang() === 'en' ? '✓ Message sent — I will reply within 24h.' : '✓ Mensaje enviado — respondo en menos de 24h.';
          form.reset();
        } else {
          throw new Error('Server error ' + res.status);
        }
      } catch (err) {
        // Graceful fallback to mailto
        const d = new FormData(form);
        const subject = encodeURIComponent('[Portfolio] ' + (d.get('subject') || 'Contacto') + ' — ' + d.get('name'));
        const body = encodeURIComponent(d.get('message') + '\n\n— ' + d.get('name') + ' (' + d.get('email') + ')');
        window.location.href = 'mailto:ronycozzi5@gmail.com?subject=' + subject + '&body=' + body;
      } finally {
        if (btn) { btn.disabled = false; btn.removeAttribute('aria-busy'); }
        if (btnText) btnText.textContent = lang() === 'en' ? 'Send message' : 'Enviar mensaje';
      }
    });
  }


  /* ---------- Copy to clipboard ---------- */
  function setupCopyButtons() {
    document.querySelectorAll('[data-copy]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const text = btn.dataset.copy;
        navigator.clipboard?.writeText(text).then(() => {
          const original = btn.textContent;
          btn.textContent = '✓ Copiado';
          setTimeout(() => { btn.textContent = original; }, 2000);
        }).catch(() => {
          // silently fail on old browsers
        });
      });
    });
  }

  /* ---------- Skip link a11y ---------- */
  function setupSkipLink() {
    const link = document.querySelector('.skip-link');
    if (!link) return;
    link.addEventListener('focus', () => link.style.top = '16px');
    link.addEventListener('blur', () => link.style.top = '-100%');
  }

  /* ---------- Console easter egg ---------- */
  function consoleEasterEgg() {
    const accent = '#C6FF3D';
    const dark = '#0A0A0A';
    const muted = '#8A8780';
    try {
      console.log(
        '%c Rony Cozzi %c Full Stack Developer %c',
        `background:${accent};color:${dark};font-family:monospace;font-size:14px;font-weight:bold;padding:6px 12px;border-radius:4px 0 0 4px`,
        `background:${dark};color:${accent};font-family:monospace;font-size:14px;padding:6px 12px;border:1px solid ${accent};border-left:none;border-radius:0 4px 4px 0`,
        'background:transparent'
      );
      console.log(
        '%c ronycozzi5@gmail.com · rony-cozzi.netlify.app',
        `color:${muted};font-family:monospace;font-size:12px`
      );
      console.log(
        '%c Built with vanilla HTML/CSS/JS — no frameworks harmed.',
        `color:${muted};font-family:monospace;font-size:11px;font-style:italic`
      );
    } catch (e) {}
  }

  /* ---------- Init ---------- */
  function init() {
    setupTheme();
    setupLang();
    setupPageTransitions();
    setupReveals();
    setupCursor();
    setupMagnetic();
    setupTilt();
    setupHeaderAndProgress();
    setupRotator();
    setupManifesto();
    setupHorizontal();
    setupParallaxDeck();
    setupParallaxImg();
    setupMobileMenu();
    setupClock();
    setupYear();
    setupContactForm();
    setupCopyButtons();
    setupSkipLink();
    consoleEasterEgg();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
