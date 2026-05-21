/* =========================================================
   Rony Cozzi — Portfolio v2
   Vanilla JS · no deps
   ========================================================= */
(() => {
  'use strict';

  const reducedMotionMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
  const touchMQ = window.matchMedia('(hover: none), (pointer: coarse)');
  const mobileBreakpointMQ = window.matchMedia('(max-width: 860px)');
  const darkSchemeMQ = window.matchMedia('(prefers-color-scheme: dark)');

  let reducedMotion = reducedMotionMQ.matches;
  let isTouch = touchMQ.matches;

  const onMQChange = (mq, cb) => {
    if (mq.addEventListener) mq.addEventListener('change', cb);
    else if (mq.addListener) mq.addListener(cb);
  };
  onMQChange(reducedMotionMQ, (e) => { reducedMotion = e.matches; });
  onMQChange(touchMQ, (e) => { isTouch = e.matches; });

  /* ---------- i18n strings ---------- */
  const i18n = {
    es: {
      'nav.home': 'Inicio',
      'nav.work': 'Trabajos',
      'nav.about': 'Sobre mí',
      'nav.contact': 'Contacto',
      'hero.tag': 'Disponible · 2026',
      'hero.role': 'Rony Cozzi — Full Stack Developer',
      'hero.title1': 'Función.',
      'hero.title2': 'Forma.',
      'hero.title3': 'Resultado.',
      'hero.intro': 'Combino diseño, código y estrategia para construir sitios claros, rápidos y mantenibles. Experiencias digitales con identidad, estructura y criterio técnico.',
      'hero.cta': 'Ver proyectos',
      'hero.cta2': 'Contacto',
      'hero.scroll': 'Scroll',
      'hero.fact.services': 'Servicios',
      'hero.fact.services_val': 'Sitios · APIs · Landing pages',
      'hero.fact.response': 'Respuesta',
      'hero.fact.response_val': '< 24h',
      'hero.fact.langs': 'Idiomas',
      'hero.fact.modality': 'Modalidad',
      'hero.fact.modality_val': 'Remoto · GMT-3',
      'hero.facts.quick': 'Datos rápidos',
      'featured.copy': 'Una selección de proyectos en producción. Sitios pensados desde la performance, el contenido y la marca.',
      'featured.cta': 'Explorar trabajos',
      'featured.heading1': 'Selected',
      'featured.heading2': 'work.',
      'services.title': 'Servicios',
      'services.copy': 'Desarrollo sitios completos, landings e integraciones web listas para producción: rápidas, accesibles, medibles y mantenibles.',
      'services.s1.title': 'Sitio web full stack',
      'services.s1.tag': 'Proyecto completo',
      'services.s1.desc': 'Diseño y desarrollo completo para sitios institucionales, portfolios, páginas comerciales o plataformas simples. Frontend sólido, lógica en JavaScript, estructura semántica, SEO técnico y deploy en Vercel.',
      'services.s1.i1': 'Arquitectura + UI responsive',
      'services.s1.i2': 'HTML, CSS, JavaScript / TypeScript / React',
      'services.s1.i3': 'SEO técnico + Schema.org',
      'services.s1.i4': 'Deploy, dominio y performance',
      'services.s2.title': 'Landing page',
      'services.s2.tag': 'Single page',
      'services.s2.desc': 'Página única orientada a conversión. Para lanzamientos, campañas o productos específicos. Foco en velocidad de carga, copy claro y CTA visible.',
      'services.s2.i1': 'Diseño + desarrollo',
      'services.s2.i2': 'Formulario / integración',
      'services.s2.i3': 'Analytics + tracking',
      'services.s2.i4': 'A/B test ready',
      'services.s3.title': 'Integraciones y backend ligero',
      'services.s3.tag': 'Full stack',
      'services.s3.desc': 'Conecto tu web con formularios, APIs, bases de datos simples, dashboards internos o automatizaciones. Ideal cuando necesitás algo más que una página estática, sin construir una plataforma gigante.',
      'services.s3.i1': 'Node.js, APIs REST y serverless functions',
      'services.s3.i2': 'SQL, Supabase, Firebase y Airtable',
      'services.s3.i3': 'Email, analytics y webhooks',
      'services.s3.i4': 'Autenticación simple y paneles internos',
      'contactCard.eyebrow': '[ Contacto directo ]',
      'contactCard.title': 'Escribime por mail<br/>o WhatsApp.',
      'contactCard.response': 'Respuesta',
      'contactCard.response_val': '< 24h',
      'contactCard.langs': 'Idiomas',
      'contactCard.modality': 'Modalidad',
      'contactCard.modality_val': 'Remoto · GMT-3',
      'contactCard.based': 'Base',
      'footer.status': 'Disponible · 2026',
      'footer.based': 'Remoto',
      'footer.services': 'Servicios',
      'footer.s1': 'Sitios full stack',
      'footer.s2': 'Landing pages',
      'footer.s3': 'Integraciones web',
      'footer.topLabel': 'Subir',
      'footer.contact': 'Contacto',
      'footer.social': 'Social',
      'footer.nav': 'Navegación',
      'footer.assets': 'Recursos',
      'footer.cv': 'CV (PDF) ↓',
      'footer.privacy': 'Privacidad',
      'footer.terms': 'Términos',
      'footer.proceso': 'Proceso',
      'work.years': 'Años',
      'work.role': 'Rol',
      'work.status': 'Estado',
      'work.status_val': '4 proyectos · live',
      'work.hint': 'Scroll',
      'work.visit': 'Ver case study',
      'work.eyebrow': '[ Índice · 02 proyectos ]',
      'case.back': 'Volver a trabajos',
      'work.cucu.desc': 'Sitio para estudio creativo. Tipografía editorial, animaciones por scroll y micro-interacciones.',
      'work.luco.desc': 'Sitio para marca gastronómica. PWA con menú offline, Schema.org y carga sub-segundo.',
      'work.sellink.desc': 'Sitio corporativo. Estructura modular, presentación de servicios y formularios accesibles.',
      'work.cognition.desc': 'Plataforma de IA para empresas. 11 páginas, calculadora ROI, chat con intents y PWA.',
      'cap.title': 'Capacidades',
      'cap.fe.title': 'Frontend engineering',
      'cap.fe': 'HTML semántico, CSS moderno, JavaScript, TypeScript, React y UI responsive. Interfaces rápidas, accesibles y fáciles de mantener.',
      'cap.backend.title': 'Backend ligero & APIs',
      'cap.backend': 'Node.js, TypeScript cuando aporta valor, serverless functions, APIs REST, auth simple y conexión con servicios externos.',
      'cap.data.title': 'Datos e integraciones',
      'cap.data': 'Formularios conectados, SQL básico, Supabase/Firebase, Airtable, email transaccional, analytics, webhooks y scripts de automatización.',
      'cap.perf.title': 'Performance',
      'cap.perf': 'Optimización de assets, lazy loading, Core Web Vitals. Score Lighthouse 90+.',
      'cap.pwa.title': 'Progressive Web Apps',
      'cap.pwa': 'Service Workers, manifest, instalables. Caching estratégico y offline-first.',
      'cap.seo.title': 'SEO técnico',
      'cap.seo': 'Schema.org, Open Graph, sitemap, semántica correcta. Indexable y compartible.',
      'about.eyebrow': '[ Índice · 03 about ]',
      'about.lead': 'Desarrollo productos web completos con foco en performance, accesibilidad, SEO técnico e integraciones útiles. Trabajo con marcas, estudios y startups que necesitan una presencia digital que funcione.',
      'about.bio.heading': 'Bio',
      'about.bio.p1': 'Full Stack Developer con foco fuerte en frontend, performance e integraciones web. Construyo sitios accesibles, rápidos y mantenibles con HTML, CSS, JavaScript, TypeScript, React, Node.js y SQL básico cuando el proyecto lo necesita.',
      'about.bio.p2': 'Trabajo de forma independiente con marcas y estudios que valoran código limpio, tiempos cortos y comunicación directa. Puedo resolver desde una landing hasta formularios conectados, APIs ligeras, dashboards simples y automatizaciones de contacto.',
      'about.bio.p3': 'Disponible para colaboraciones remotas, proyectos puntuales y posiciones in-house.',
      'about.facts.role': 'Rol',
      'about.facts.modality': 'Modalidad',
      'about.facts.langs': 'Idiomas',
      'about.facts.status': 'Estado',
      'about.facts.status_val': 'Aceptando proyectos',
      'about.stack.title': 'Stack',
      'stack.languages': 'Lenguajes',
      'stack.frameworks': 'Frontend',
      'stack.backend': 'Backend & APIs',
      'stack.data': 'Datos & servicios',
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
      'contact.eyebrow': '[ Índice · 04 contacto ]',
      'contact.heading1': 'Conversemos.',
      'contact.direct': 'Contacto directo',
      'contact.form.name': 'Nombre',
      'contact.form.subject': 'Asunto',
      'contact.form.message': 'Mensaje',
      'contact.form.send': 'Enviar mensaje',
      'contact.form.opt_project': 'Proyecto',
      'contact.form.opt_job': 'Oportunidad laboral',
      'contact.form.opt_collab': 'Colaboración',
      'contact.form.opt_other': 'Otro',
      'contact.form.hint': 'Te respondo en menos de 24 horas.',
      'contact.availability': 'Disponibilidad',
      'contact.availability_val': 'Aceptando proyectos · 2026',
      'contact.timezone': 'Zona horaria',
      'contact.response': 'Tiempo de respuesta',
      'contact.response_val': 'Menos de 24h',
      'a11y.nav': 'Navegación principal',
      'a11y.langToggle': 'Cambiar idioma',
      'a11y.themeToggle': 'Cambiar tema',
      'a11y.menuOpen': 'Abrir menú',
      'a11y.menuClose': 'Cerrar menú',
      'a11y.skip': 'Saltar al contenido',
      'a11y.demo': 'Abrir demo',
      'signal.eyebrow': '[ Enfoque ]',
      'signal.title1': 'Diseño.',
      'signal.title2': 'Código.',
      'signal.title3': 'Estrategia.',
      'signal.copy': 'Construyo interfaces limpias, funcionales y medibles. Cada decisión visual tiene que sostener el contenido, la velocidad y el objetivo del proyecto.',
      'signal.1.title': 'Estrategia',
      'signal.1.desc': 'Entiendo el objetivo, la audiencia y el contexto antes de decidir estructura, tono y recorrido.',
      'signal.2.title': 'Diseño',
      'signal.2.desc': 'Creo interfaces sobrias, funcionales y con identidad propia. Sin ornamento que tape el mensaje.',
      'signal.3.title': 'Desarrollo',
      'signal.3.desc': 'Implemento con foco en performance, accesibilidad, escalabilidad y buenas prácticas.',
    },
    en: {
      'nav.home': 'Home',
      'nav.work': 'Work',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'hero.tag': 'Available · 2026',
      'hero.role': 'Rony Cozzi — Full Stack Developer',
      'hero.title1': 'Function.',
      'hero.title2': 'Form.',
      'hero.title3': 'Outcome.',
      'hero.intro': 'I combine design, code and strategy to build clear, fast and maintainable websites. Digital experiences with identity, structure and technical judgment.',
      'hero.cta': 'View work',
      'hero.cta2': 'Contact',
      'hero.scroll': 'Scroll',
      'hero.fact.services': 'Services',
      'hero.fact.services_val': 'Sites · APIs · Landing pages',
      'hero.fact.response': 'Response',
      'hero.fact.response_val': '< 24h',
      'hero.fact.langs': 'Languages',
      'hero.fact.modality': 'Modality',
      'hero.fact.modality_val': 'Remote · GMT-3',
      'hero.facts.quick': 'Quick facts',
      'featured.copy': 'A selection of live projects. Sites built around performance, content and brand.',
      'featured.cta': 'Explore work',
      'featured.heading1': 'Selected',
      'featured.heading2': 'work.',
      'services.title': 'Services',
      'services.copy': 'I build complete websites, landing pages and production-ready web integrations: fast, accessible, measurable and maintainable.',
      'services.s1.title': 'Full stack website',
      'services.s1.tag': 'Full project',
      'services.s1.desc': 'End-to-end design and development for business sites, portfolios, commercial pages or simple platforms. Solid frontend, JavaScript logic, semantic structure, technical SEO and Vercel deploy.',
      'services.s1.i1': 'Architecture + responsive UI',
      'services.s1.i2': 'HTML, CSS, JavaScript / TypeScript / React',
      'services.s1.i3': 'Technical SEO + Schema.org',
      'services.s1.i4': 'Deploy, domain and performance',
      'services.s2.title': 'Landing page',
      'services.s2.tag': 'Single page',
      'services.s2.desc': 'Single page focused on conversion. For launches, campaigns or specific products. Built around load speed, clear copy and a visible CTA.',
      'services.s2.i1': 'Design + development',
      'services.s2.i2': 'Form / integration',
      'services.s2.i3': 'Analytics + tracking',
      'services.s2.i4': 'A/B test ready',
      'services.s3.title': 'Integrations and lightweight backend',
      'services.s3.tag': 'Full stack',
      'services.s3.desc': 'I connect your website with forms, APIs, simple databases, internal dashboards or automations. Ideal when you need more than a static page without building a huge platform.',
      'services.s3.i1': 'Node.js, REST APIs and serverless functions',
      'services.s3.i2': 'SQL, Supabase, Firebase and Airtable',
      'services.s3.i3': 'Email, analytics and webhooks',
      'services.s3.i4': 'Simple auth and internal panels',
      'contactCard.eyebrow': '[ Direct contact ]',
      'contactCard.title': 'Email me or<br/>send a WhatsApp.',
      'contactCard.response': 'Response',
      'contactCard.response_val': '< 24h',
      'contactCard.langs': 'Languages',
      'contactCard.modality': 'Modality',
      'contactCard.modality_val': 'Remote · GMT-3',
      'contactCard.based': 'Based',
      'footer.status': 'Available · 2026',
      'footer.based': 'Remote',
      'footer.services': 'Services',
      'footer.s1': 'Full stack sites',
      'footer.s2': 'Landing pages',
      'footer.s3': 'Web integrations',
      'footer.topLabel': 'Top',
      'footer.contact': 'Contact',
      'footer.social': 'Social',
      'footer.nav': 'Navigation',
      'footer.assets': 'Assets',
      'footer.cv': 'CV (PDF) ↓',
      'footer.privacy': 'Privacy',
      'footer.terms': 'Terms',
      'footer.proceso': 'Process',
      'work.years': 'Years',
      'work.role': 'Role',
      'work.status': 'Status',
      'work.status_val': '4 projects · live',
      'work.hint': 'Scroll',
      'work.visit': 'View case study',
      'work.eyebrow': '[ Index · 02 projects ]',
      'case.back': 'Back to work',
      'work.cucu.desc': 'Site for a creative studio. Editorial typography, scroll animations and micro-interactions.',
      'work.luco.desc': 'Site for a gastronomy brand. PWA with offline menu, Schema.org and sub-second load.',
      'work.sellink.desc': 'Corporate site. Modular structure, services presentation and accessible forms.',
      'work.cognition.desc': 'AI platform for enterprises. 11 pages, ROI calculator, intent-based chat and PWA.',
      'cap.title': 'Capabilities',
      'cap.fe.title': 'Frontend engineering',
      'cap.fe': 'Semantic HTML, modern CSS, JavaScript, TypeScript, React and responsive UI. Fast, accessible and maintainable interfaces.',
      'cap.backend.title': 'Lightweight backend & APIs',
      'cap.backend': 'Node.js, TypeScript when useful, serverless functions, REST APIs, simple auth and external service connections.',
      'cap.data.title': 'Data and integrations',
      'cap.data': 'Connected forms, basic SQL, Supabase/Firebase, Airtable, transactional email, analytics, webhooks and automation scripts.',
      'cap.perf.title': 'Performance',
      'cap.perf': 'Asset optimization, lazy loading, Core Web Vitals. 90+ Lighthouse score.',
      'cap.pwa.title': 'Progressive Web Apps',
      'cap.pwa': 'Service Workers, manifest, installable. Strategic caching and offline-first.',
      'cap.seo.title': 'Technical SEO',
      'cap.seo': 'Schema.org, Open Graph, sitemap, semantic markup. Indexable and shareable.',
      'about.eyebrow': '[ Index · 03 about ]',
      'about.lead': 'Full web product development focused on performance, accessibility, technical SEO and useful integrations. Working with brands, studios and startups that need a digital presence that performs.',
      'about.bio.heading': 'Bio',
      'about.bio.p1': 'Full Stack Developer with a strong focus on frontend, performance and web integrations. I build accessible, fast and maintainable sites with HTML, CSS, JavaScript, TypeScript, React, Node.js and basic SQL when the project needs it.',
      'about.bio.p2': 'I work independently with brands and studios that value clean code, fast delivery and direct communication. I can handle anything from a landing page to connected forms, lightweight APIs, simple dashboards and contact automations.',
      'about.bio.p3': 'Available for remote collaborations, one-off projects and in-house positions.',
      'about.facts.role': 'Role',
      'about.facts.modality': 'Modality',
      'about.facts.langs': 'Languages',
      'about.facts.status': 'Status',
      'about.facts.status_val': 'Accepting projects',
      'about.stack.title': 'Stack',
      'stack.languages': 'Languages',
      'stack.frameworks': 'Frontend',
      'stack.backend': 'Backend & APIs',
      'stack.data': 'Data & services',
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
      'contact.eyebrow': '[ Index · 04 contact ]',
      'contact.heading1': "Let's talk.",
      'contact.direct': 'Direct contact',
      'contact.form.name': 'Name',
      'contact.form.subject': 'Subject',
      'contact.form.message': 'Message',
      'contact.form.send': 'Send message',
      'contact.form.opt_project': 'Project',
      'contact.form.opt_job': 'Job opportunity',
      'contact.form.opt_collab': 'Collaboration',
      'contact.form.opt_other': 'Other',
      'contact.form.hint': "I'll get back to you within 24 hours.",
      'contact.availability': 'Availability',
      'contact.availability_val': 'Accepting projects · 2026',
      'contact.timezone': 'Timezone',
      'contact.response': 'Response time',
      'contact.response_val': 'Less than 24h',
      'a11y.nav': 'Main navigation',
      'a11y.langToggle': 'Switch language',
      'a11y.themeToggle': 'Switch theme',
      'a11y.menuOpen': 'Open menu',
      'a11y.menuClose': 'Close menu',
      'a11y.skip': 'Skip to content',
      'a11y.demo': 'Open demo',
      'signal.eyebrow': '[ Focus ]',
      'signal.title1': 'Design.',
      'signal.title2': 'Code.',
      'signal.title3': 'Strategy.',
      'signal.copy': 'I build clean, functional and measurable interfaces. Every visual decision has to support content, speed and the project goal.',
      'signal.1.title': 'Strategy',
      'signal.1.desc': 'I understand the goal, audience and context before deciding structure, tone and journey.',
      'signal.2.title': 'Design',
      'signal.2.desc': 'I create sober, functional interfaces with their own identity. No ornament that hides the message.',
      'signal.3.title': 'Development',
      'signal.3.desc': 'I implement focused on performance, accessibility, scalability and best practices.',
    },
  };

  /* ---------- Storage helpers (cached) ---------- */
  let cachedLang = null;
  let cachedTheme = null;

  function storageGet(key, fallback) {
    try { return localStorage.getItem(key) || fallback; }
    catch (err) { return fallback; }
  }

  function storageSet(key, value) {
    try { localStorage.setItem(key, value); }
    catch (err) {}
  }

  function getLang() {
    if (cachedLang) return cachedLang;
    cachedLang = storageGet('rc-lang', 'es');
    return cachedLang;
  }

  function setLang(lang) {
    cachedLang = lang;
    storageSet('rc-lang', lang);
  }

  function t(key) {
    return (i18n[getLang()] && i18n[getLang()][key]) || (i18n.es && i18n.es[key]) || '';
  }

  /* ---------- i18n apply ---------- */
  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      const val = i18n[lang] && i18n[lang][key];
      if (val == null) return;
      if (/<[a-z\/][^>]*>/i.test(val)) el.innerHTML = val;
      else el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const pairs = el.dataset.i18nAttr.split(',');
      pairs.forEach((pair) => {
        const [attr, key] = pair.split(':').map((s) => s.trim());
        const val = i18n[lang] && i18n[lang][key];
        if (val != null) el.setAttribute(attr, val);
      });
    });
    document.querySelectorAll('.lang-toggle').forEach((btn) => {
      btn.querySelectorAll('[data-lang]').forEach((s) => {
        s.classList.toggle('is-active', s.dataset.lang === lang);
      });
      btn.setAttribute('aria-label', t('a11y.langToggle'));
    });
    // Update menu toggle aria-label if menu is closed
    const menuBtn = document.querySelector('[data-menu-toggle]');
    if (menuBtn) {
      const open = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-label', open ? t('a11y.menuClose') : t('a11y.menuOpen'));
    }
    const themeBtn = document.querySelector('[data-theme-toggle]');
    if (themeBtn) themeBtn.setAttribute('aria-label', t('a11y.themeToggle'));
    const skip = document.querySelector('.skip-link');
    if (skip && !skip.hasAttribute('data-i18n')) skip.textContent = t('a11y.skip');
    document.querySelectorAll('nav.nav').forEach((nav) => {
      nav.setAttribute('aria-label', t('a11y.nav'));
    });
  }

  function setupLang() {
    applyLang(getLang());
    document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const next = getLang() === 'es' ? 'en' : 'es';
        setLang(next);
        applyLang(next);
      });
    });
  }

  /* ---------- Theme ---------- */
  function getDefaultTheme() {
    return darkSchemeMQ.matches ? 'dark' : 'light';
  }

  function setupTheme() {
    if (cachedTheme == null) {
      cachedTheme = storageGet('rc-theme', null) || getDefaultTheme();
    }
    document.documentElement.setAttribute('data-theme', cachedTheme);
    document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(cachedTheme === 'dark'));
      btn.addEventListener('click', () => {
        cachedTheme = cachedTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', cachedTheme);
        storageSet('rc-theme', cachedTheme);
        btn.setAttribute('aria-pressed', String(cachedTheme === 'dark'));
      });
    });
    onMQChange(darkSchemeMQ, (e) => {
      if (storageGet('rc-theme', null)) return;
      cachedTheme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', cachedTheme);
    });
  }

  /* ---------- External project links: open in same tab on mobile ---------- */
  function setupExternalProjectLinks() {
    if (!isTouch) return;
    const projectHosts = [
      'cucu-studio-demo.vercel.app',
      'luco-gourmet-demo.vercel.app',
      'sellink-group-demo.vercel.app',
      'cognition-demo-cyan.vercel.app',
    ];
    document.querySelectorAll('a[target="_blank"]').forEach((link) => {
      const href = link.getAttribute('href') || '';
      if (!projectHosts.some((host) => href.includes(host))) return;
      link.removeAttribute('target');
    });
  }

  /* ---------- Page transitions ---------- */
  function pageMetaFromHref(href) {
    const lang = getLang();
    const matches = [
      { keys: ['index.html', '/'], num: '01', es: 'Inicio', en: 'Home' },
      { keys: ['work.html'], num: '02', es: 'Trabajos', en: 'Work' },
      { keys: ['about.html'], num: '03', es: 'Sobre mí', en: 'About' },
      { keys: ['contact.html'], num: '04', es: 'Contacto', en: 'Contact' },
      { keys: ['process.html'], num: '05', es: 'Proceso', en: 'Process' },
      { keys: ['faq.html'], num: '06', es: 'FAQ', en: 'FAQ' },
      { keys: ['case/cucu'], num: '02·1', es: 'Cucú Studio', en: 'Cucú Studio' },
      { keys: ['case/luco'], num: '02·2', es: 'Luco Gourmet', en: 'Luco Gourmet' },
      { keys: ['case/sellink'], num: '02·3', es: 'Sellink Group', en: 'Sellink Group' },
      { keys: ['case/cognition'], num: '02·4', es: 'Cognition', en: 'Cognition' },
      { keys: ['privacy.html'], num: '—', es: 'Privacidad', en: 'Privacy' },
      { keys: ['terms.html'], num: '—', es: 'Términos', en: 'Terms' },
    ];
    for (const m of matches) {
      if (m.keys.some((k) => href.includes(k))) {
        return { num: m.num, name: lang === 'en' ? m.en : m.es };
      }
    }
    return { num: '01', name: lang === 'en' ? 'Home' : 'Inicio' };
  }

  function setupPageTransitions() {
    const overlay = document.querySelector('.page-transition');
    const page = document.querySelector('.page');

    requestAnimationFrame(() => {
      if (page) page.classList.add('is-ready');
    });

    if (!overlay) return;
    window.addEventListener('pageshow', () => {
      overlay.classList.remove('is-active', 'is-in', 'is-out');
      if (page) page.classList.add('is-ready');
    });

    if (isTouch || reducedMotion) return;

    document.querySelectorAll('a[data-link]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || a.target === '_blank') return;
        e.preventDefault();
        const meta = pageMetaFromHref(href);
        const numEl = overlay.querySelector('.page-transition__num');
        const nameEl = overlay.querySelector('.page-transition__name');
        if (numEl) numEl.textContent = meta.num;
        if (nameEl) nameEl.textContent = meta.name;
        overlay.classList.add('is-active', 'is-in');
        setTimeout(() => { window.location.href = href; }, 700);
      });
    });
  }

  /* ---------- Reveals ---------- */
  function setupReveals() {
    const dataReveals = document.querySelectorAll('[data-reveal]');
    const lines = document.querySelectorAll('.line, .featured__title-line');
    const fades = document.querySelectorAll('.reveal-fade');

    if (!('IntersectionObserver' in window) || reducedMotion) {
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
            const siblings = Array.from(line.parentElement.querySelectorAll('.line, .featured__title-line'));
            const idx = Math.max(0, siblings.indexOf(line));
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

  /* ---------- rAF throttle helper ---------- */
  function rafThrottle(fn) {
    let pending = false;
    return function () {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => { pending = false; fn(); });
    };
  }

  function debounce(fn, delay) {
    let t;
    return function (...args) {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  /* ---------- Cursor ---------- */
  function setupCursor() {
    if (isTouch || reducedMotion) return;
    const cursor = document.querySelector('.cursor');
    const dot = document.querySelector('.cursor-dot');
    const label = cursor && cursor.querySelector('.cursor__label');
    if (!cursor || !dot) return;

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let cx = mx, cy = my, dx = mx, dy = my;
    let moving = false;
    let raf = null;

    window.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      moving = true;
      if (!raf) raf = requestAnimationFrame(loop);
    }, { passive: true });

    function loop() {
      cx += (mx - cx) * 0.16;
      cy += (my - cy) * 0.16;
      dx += (mx - dx) * 0.4;
      dy += (my - dy) * 0.4;
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
      if (Math.abs(mx - cx) > 0.1 || Math.abs(my - cy) > 0.1 || moving) {
        moving = false;
        raf = requestAnimationFrame(loop);
      } else {
        raf = null;
      }
    }

    const hoverables = document.querySelectorAll('[data-magnetic], [data-tilt]');
    hoverables.forEach((el) => {
      const cursorText = el.dataset.cursor;
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('is-hover');
        if (cursorText && label) label.textContent = cursorText;
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('is-hover');
        if (label && cursorText) label.textContent = '';
      });
    });
  }

  /* ---------- Magnetic ---------- */
  function setupMagnetic() {
    if (isTouch || reducedMotion) return;
    const els = document.querySelectorAll('[data-magnetic]:not([data-tilt])');
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

  /* ---------- Header scroll state ---------- */
  function setupHeaderAndProgress() {
    const header = document.querySelector('.header');
    if (!header) return;
    const onScroll = rafThrottle(() => {
      header.classList.toggle('is-scrolled', window.scrollY > 24);
    });
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Horizontal pinning ---------- */
  function setupHorizontal() {
    const section = document.querySelector('[data-pin-horizontal]');
    if (!section) return;
    const track = section.querySelector('[data-horizontal-track]');
    const bar = section.querySelector('[data-horizontal-progress]');
    const current = section.querySelector('[data-horizontal-current]');
    if (!track) return;

    let horizontalDist = 0;
    let tailDwell = 0;
    const itemCount = track.children.length;
    const total = section.querySelector('[data-horizontal-total]');
    if (total) total.textContent = String(itemCount || 0).padStart(2, '0');
    if (!itemCount) return;

    function setup() {
      if (mobileBreakpointMQ.matches) {
        section.style.height = '';
        track.style.transform = '';
        if (bar) bar.style.width = '100%';
        return;
      }
      const trackWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      horizontalDist = Math.max(0, trackWidth - viewportWidth);
      tailDwell = Math.round(window.innerHeight * 0.7);
      section.style.height = (horizontalDist + window.innerHeight + tailDwell) + 'px';
    }

    const onScroll = rafThrottle(() => {
      if (mobileBreakpointMQ.matches) return;
      const rect = section.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const xProgress = horizontalDist > 0 ? Math.min(1, scrolled / horizontalDist) : 1;
      const x = xProgress * horizontalDist;
      track.style.transform = `translate3d(${-x}px, 0, 0)`;
      if (bar) bar.style.width = `${Math.max(8, xProgress * 100)}%`;
      if (current) {
        const idx = Math.min(itemCount, Math.floor(xProgress * itemCount) + 1);
        current.textContent = String(idx).padStart(2, '0');
      }
    });

    setup();
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', debounce(() => { setup(); onScroll(); }, 150), { passive: true });
    onMQChange(mobileBreakpointMQ, () => { setup(); onScroll(); });
    setTimeout(() => { setup(); onScroll(); }, 400);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => { setup(); onScroll(); });
    }
  }

  /* ---------- Parallax cards ---------- */
  function setupParallaxDeck() {
    if (reducedMotion) return;
    const deck = document.querySelector('[data-parallax-deck]');
    if (!deck) return;
    const cards = Array.from(deck.querySelectorAll('.card'));
    const onScroll = rafThrottle(() => {
      cards.forEach((c, i) => {
        const r = c.getBoundingClientRect();
        const vh = window.innerHeight;
        const t = (vh - r.top) / (vh + r.height);
        const offset = (t - 0.5) * 30 * (i % 2 === 0 ? -1 : 1);
        c.style.translate = `0 ${offset}px`;
      });
    });
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Hero scene motion ---------- */
  function setupHeroScene() {
    const hero = document.querySelector('[data-hero-scene]');
    if (!hero) return;

    const setScroll = rafThrottle(() => {
      const rect = hero.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / Math.max(1, rect.height)));
      hero.style.setProperty('--hero-scroll', progress.toFixed(3));
    });

    setScroll();
    window.addEventListener('scroll', setScroll, { passive: true });

    if (isTouch || reducedMotion) return;

    let raf = null;
    let tx = 0, ty = 0, cx = 0, cy = 0;
    function draw() {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      hero.style.setProperty('--hero-x', `${cx.toFixed(2)}px`);
      hero.style.setProperty('--hero-y', `${cy.toFixed(2)}px`);
      if (Math.abs(tx - cx) > 0.08 || Math.abs(ty - cy) > 0.08) raf = requestAnimationFrame(draw);
      else raf = null;
    }

    hero.addEventListener('mousemove', (e) => {
      const r = hero.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 26;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 22;
      if (!raf) raf = requestAnimationFrame(draw);
    }, { passive: true });

    hero.addEventListener('mouseleave', () => {
      tx = 0; ty = 0;
      if (!raf) raf = requestAnimationFrame(draw);
    }, { passive: true });
  }

  /* ---------- Spotlights ---------- */
  function setupSpotlights() {
    if (isTouch || reducedMotion) return;
    const targets = document.querySelectorAll('.service, .capabilities__list li, .principles__list li, .stack-col, .contact-card__inner');
    targets.forEach((el) => {
      el.classList.add('has-spotlight');
      let raf = null;
      let nx = 50, ny = 50;
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        nx = ((e.clientX - r.left) / r.width) * 100;
        ny = ((e.clientY - r.top) / r.height) * 100;
        if (!raf) {
          raf = requestAnimationFrame(() => {
            el.style.setProperty('--mx', `${nx.toFixed(1)}%`);
            el.style.setProperty('--my', `${ny.toFixed(1)}%`);
            raf = null;
          });
        }
      }, { passive: true });
    });
  }

  /* ---------- Parallax image ---------- */
  function setupParallaxImg() {
    if (reducedMotion) return;
    const wrap = document.querySelector('[data-parallax-img]');
    if (!wrap) return;
    const img = wrap.querySelector('img');
    if (!img) return;
    const onScroll = rafThrottle(() => {
      const r = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      const tt = (vh - r.top) / (vh + r.height);
      const offset = (tt - 0.5) * 50;
      img.style.translate = `0 ${offset}px`;
    });
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Mobile menu with focus trap ---------- */
  function setupMobileMenu() {
    const btn = document.querySelector('[data-menu-toggle]');
    const menu = document.querySelector('[data-mobile-menu]');
    if (!btn || !menu) return;

    let prevFocus = null;
    let prevBodyOverflow = '';

    function getFocusable() {
      return menu.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
    }

    function setOpen(open) {
      menu.classList.toggle('is-open', open);
      btn.classList.toggle('is-open', open);
      btn.setAttribute('aria-label', open ? t('a11y.menuClose') : t('a11y.menuOpen'));
      btn.setAttribute('aria-expanded', String(open));
      if (open) {
        prevBodyOverflow = document.body.style.overflow;
        prevFocus = document.activeElement;
        document.body.style.overflow = 'hidden';
        const focusables = getFocusable();
        if (focusables.length) focusables[0].focus();
      } else {
        document.body.style.overflow = prevBodyOverflow;
        if (prevFocus && typeof prevFocus.focus === 'function') {
          try { prevFocus.focus(); } catch (e) {}
        }
      }
    }

    btn.addEventListener('click', () => setOpen(!menu.classList.contains('is-open')));

    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));

    document.addEventListener('keydown', (e) => {
      if (!menu.classList.contains('is-open')) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key === 'Tab') {
        const focusables = Array.from(getFocusable());
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    onMQChange(mobileBreakpointMQ, (e) => {
      if (!e.matches && menu.classList.contains('is-open')) setOpen(false);
    });
  }

  /* ---------- Clock ---------- */
  function setupClock() {
    const els = document.querySelectorAll('[data-clock]');
    if (!els.length) return;
    const fmt = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'America/Argentina/Cordoba',
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
    });
    function tick() {
      const parts = fmt.formatToParts(new Date());
      const get = (typ) => {
        const p = parts.find((x) => x.type === typ);
        return p ? p.value : '00';
      };
      const time = `${get('hour')}:${get('minute')}:${get('second')} GMT-3`;
      els.forEach((el) => { el.textContent = time; });
    }
    tick();
    setInterval(tick, 1000);
  }

  /* ---------- Year ---------- */
  function setupYear() {
    const y = new Date().getFullYear();
    document.querySelectorAll('.year').forEach((el) => { el.textContent = y; });
  }

  /* ---------- Contact form ---------- */
  function setupContactForm() {
    const form = document.querySelector('[data-contact-form]');
    if (!form) return;
    const note = form.querySelector('[data-form-note]');
    const btn = form.querySelector('[type="submit"]');
    const btnText = btn && btn.querySelector('.btn-submit__text');
    const originalText = btnText ? btnText.textContent : '';

    // Provide initial hint in the live region so SR users have context
    if (note && !note.textContent) {
      note.textContent = t('contact.form.hint');
    }

    // Clear aria-invalid on input
    form.querySelectorAll('input, textarea, select').forEach((field) => {
      field.addEventListener('input', () => field.removeAttribute('aria-invalid'));
      field.addEventListener('change', () => field.removeAttribute('aria-invalid'));
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        // Mark invalid fields
        form.querySelectorAll(':invalid').forEach((field) => {
          field.setAttribute('aria-invalid', 'true');
        });
        form.reportValidity();
        return;
      }

      const data = new FormData(form);
      const rawName = String(data.get('name') || '').trim().replace(/[\r\n]/g, ' ');
      const email = String(data.get('email') || '').trim();
      const subjectField = form.querySelector('[name="subject"]');
      const subjectType = (subjectField && subjectField.selectedOptions && subjectField.selectedOptions[0] && subjectField.selectedOptions[0].textContent.trim())
        || String(data.get('subject') || 'Contacto');
      const message = String(data.get('message') || '').trim();
      const subject = encodeURIComponent('[Portfolio] ' + subjectType + ' - ' + rawName);
      const body = encodeURIComponent(message + '\n\n--\n' + rawName + '\n' + email);

      const emailTarget = form.dataset.email || 'ronycozzi5@gmail.com';
      if (btn) { btn.disabled = true; btn.setAttribute('aria-busy', 'true'); }
      if (btnText) btnText.textContent = getLang() === 'en' ? 'Opening email…' : 'Abriendo email…';
      if (note) {
        note.textContent = getLang() === 'en'
          ? `Your email app is opening. If it does not, write to ${emailTarget}.`
          : `Se está abriendo tu app de email. Si no se abre, escribime a ${emailTarget}.`;
      }

      const a = document.createElement('a');
      a.href = `mailto:${emailTarget}?subject=${subject}&body=${body}`;
      a.rel = 'noopener';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      a.remove();

      setTimeout(() => {
        if (btn) { btn.disabled = false; btn.removeAttribute('aria-busy'); }
        if (btnText) btnText.textContent = originalText || (getLang() === 'en' ? 'Send message' : 'Enviar mensaje');
      }, 900);
    });
  }

  /* ---------- Skip link a11y (CSS-driven, no JS needed) ---------- */
  /* The skip link is fully styled via .skip-link:focus / :focus-visible. */

  /* ---------- Active nav ---------- */
  function setupActiveNav() {
    const path = (window.location.pathname.replace(/\/$/, '') || '/').toLowerCase();
    const segments = path.split('/').filter(Boolean);
    const currentFile = segments.length ? segments[segments.length - 1].toLowerCase() : 'index.html';
    const currentDir = segments.length > 1 ? segments[segments.length - 2].toLowerCase() : '';
    const isCase = currentDir === 'case';

    document.querySelectorAll('nav.nav a').forEach((a) => {
      const href = (a.getAttribute('href') || '').toLowerCase();
      if (!href) return;
      const linkFile = href.split('/').pop().split('?')[0].split('#')[0];
      const linkLooksWork = linkFile === 'work.html' || /work\.html$/.test(href);
      const isActive = linkFile === currentFile || (isCase && linkLooksWork) || (path === '/' && (linkFile === 'index.html' || linkFile === ''));
      if (isActive) {
        a.setAttribute('aria-current', 'page');
        a.classList.add('is-current');
      } else {
        a.removeAttribute('aria-current');
        a.classList.remove('is-current');
      }
    });
  }

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'auto';
  }

  function init() {
    setupActiveNav();
    setupTheme();
    setupLang();
    setupPageTransitions();
    setupExternalProjectLinks();
    setupReveals();
    setupCursor();
    setupMagnetic();
    setupTilt();
    setupHeaderAndProgress();
    setupHorizontal();
    setupParallaxDeck();
    setupHeroScene();
    setupSpotlights();
    setupParallaxImg();
    setupMobileMenu();
    setupClock();
    setupYear();
    setupContactForm();
  }

  window.addEventListener('orientationchange', () => {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      window.dispatchEvent(new Event('scroll'));
    }, 300);
  });

  // Service Worker registration
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
      });
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        registration.update().catch(() => {});
      }).catch(() => {});
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
