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
      'hero.role': 'Rony Cozzi — desarrollador full stack',
      'hero.title1': 'Función.',
      'hero.title2': 'Forma.',
      'hero.title3': 'Resultado.',
      'hero.intro': 'Combino diseño, código y estrategia para construir sitios claros, rápidos y mantenibles. Experiencias digitales con identidad, estructura y criterio técnico.',
      'hero.cta': 'Ver proyectos',
      'hero.cta2': 'Contacto',
      'hero.scroll': 'Scroll',
      'hero.fact.services': 'Servicios',
      'hero.fact.services_val': 'Sitios · APIs · Landings',
      'hero.fact.response': 'Respuesta',
      'hero.fact.response_val': '< 24h',
      'hero.fact.langs': 'Idiomas',
      'hero.fact.modality': 'Modalidad',
      'hero.fact.modality_val': 'Remoto · GMT-3',
      'hero.facts.quick': 'Datos rápidos',
      'hero.browser_bar': 'vista-en-vivo',
      'hero.metric.performance': 'performance: 96',
      'hero.metric.seo': 'seo: indexado',
      'hero.metric.motion': 'motion: seguro',
      'featured.copy': 'Una selección de proyectos en vivo. Sitios pensados desde la performance, el contenido y la marca.',
      'featured.cta': 'Explorar trabajos',
      'featured.heading1': 'Trabajos',
      'featured.heading2': 'seleccionados.',
      'featured.eyebrow': '[ Destacado · 2026 ]',
      'ticker.fullstack': 'Desarrollo full stack',
      'ticker.performance': 'Performance web',
      'ticker.accessibility': 'Accesibilidad',
      'ticker.ui': 'Ingeniería UI',
      'ticker.seo': 'SEO técnico',
      'ticker.pwa': 'Apps web progresivas',
      'card.visit': 'Visitar ↗',
      'card.cucu.type': 'Estudio creativo',
      'card.luco.sub': 'Comedor & mercado · Nueva Córdoba',
      'card.luco.type': 'Gastronomía',
      'card.sellink.sub': '★ Agencia creativa ★',
      'card.sellink.type': 'Agencia · Corporativo',
      'card.cognition.sub': 'Transformación digital · IA aplicada',
      'card.cognition.type': 'IA · Plataforma',
      'case.live': 'Ver sitio en vivo',
      'services.title': 'Servicios',
      'services.copy': 'Desarrollo sitios completos, landings e integraciones web listas para producción: rápidas, accesibles, medibles y mantenibles.',
      'services.s1.title': 'Sitio web full stack',
      'services.s1.tag': 'Proyecto completo',
      'services.s1.desc': 'Diseño y desarrollo completo para sitios institucionales, portfolios, páginas comerciales o plataformas simples. Frontend sólido, lógica en JavaScript, estructura semántica, SEO técnico y deploy en Vercel.',
      'services.s1.i1': 'Arquitectura + UI responsive',
      'services.s1.i2': 'HTML, CSS, JavaScript / TypeScript / React',
      'services.s1.i3': 'SEO técnico + Schema.org',
      'services.s1.i4': 'Deploy, dominio y performance',
      'services.s2.title': 'Landing',
      'services.s2.tag': 'Página única',
      'services.s2.desc': 'Página única orientada a conversión. Para lanzamientos, campañas o productos específicos. Foco en velocidad de carga, copy claro y CTA visible.',
      'services.s2.i1': 'Diseño + desarrollo',
      'services.s2.i2': 'Formulario / integración',
      'services.s2.i3': 'Analítica + tracking',
      'services.s2.i4': 'Lista para tests A/B',
      'services.s3.title': 'Integraciones y backend ligero',
      'services.s3.tag': 'Full stack',
      'services.s3.desc': 'Conecto tu web con formularios, APIs, bases de datos simples, paneles internos o automatizaciones. Ideal cuando necesitás algo más que una página estática, sin construir una plataforma gigante.',
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
      'footer.s2': 'Landings',
      'footer.s3': 'Integraciones web',
      'footer.topLabel': 'Subir',
      'footer.contact': 'Contacto',
      'footer.social': 'Redes',
      'footer.nav': 'Navegación',
      'footer.assets': 'Recursos',
      'footer.cv': 'CV (PDF) ↓',
      'footer.privacy': 'Privacidad',
      'footer.terms': 'Términos',
      'footer.proceso': 'Proceso',
      'work.years': 'Años',
      'work.role': 'Rol',
      'work.role.value': 'Desarrollo full stack',
      'work.status': 'Estado',
      'work.status_val': '4 proyectos · en vivo',
      'work.hint': 'Deslizá',
      'work.visit': 'Ver caso de estudio',
      'work.eyebrow': '[ Índice · 04 proyectos ]',
      'case.back': 'Volver a trabajos',
      'work.cucu.desc': 'Sitio para estudio creativo. Tipografía editorial, animaciones por scroll y micro-interacciones.',
      'work.cucu.eyebrow': '— Estudio creativo',
      'work.luco.desc': 'Sitio para marca gastronómica. PWA con menú offline, Schema.org y carga sub-segundo.',
      'work.luco.eyebrow': '— Comedor & mercado',
      'work.sellink.desc': 'Sitio corporativo. Estructura modular, presentación de servicios y formularios accesibles.',
      'work.sellink.eyebrow': '★ Agencia creativa',
      'work.sellink.thumb': 'Marca · Web · Digital',
      'work.cognition.desc': 'Plataforma de IA para empresas. 11 páginas, calculadora ROI, chat basado en intención y PWA.',
      'work.cognition.eyebrow': '— Plataforma IA',
      'work.cognition.thumb': 'Transformación digital · IA',
      'card.cucu.sub': 'Estudio creativo · Tatuaje y diseño',
      'work.cucu.thumb': 'Tatuaje y diseño · Córdoba',
      'work.luco.tag4': 'Prioridad móvil',
      'work.sellink.tag3': 'Accesibilidad',
      'work.sellink.tag4': 'Oscuro',
      'case.cucu.tag1': 'Estudio creativo',
      'case.cucu.tag2': 'Tatuaje y diseño',
      'cap.title': 'Capacidades',
      'cap.fe.title': 'Ingeniería frontend',
      'cap.fe': 'HTML semántico, CSS moderno, JavaScript, TypeScript, React y UI responsive. Interfaces rápidas, accesibles y fáciles de mantener.',
      'cap.backend.title': 'Backend ligero & APIs',
      'cap.backend': 'Node.js, TypeScript cuando aporta valor, serverless functions, APIs REST, auth simple y conexión con servicios externos.',
      'cap.data.title': 'Datos e integraciones',
      'cap.data': 'Formularios conectados, SQL básico, Supabase/Firebase, Airtable, email transaccional, analytics, webhooks y scripts de automatización.',
      'cap.perf.title': 'Rendimiento',
      'cap.perf': 'Optimización de assets, lazy loading, Core Web Vitals. Score Lighthouse 90+.',
      'cap.pwa.title': 'Apps web progresivas',
      'cap.pwa': 'Service Workers, manifest, instalables. Caching estratégico y offline-first.',
      'cap.seo.title': 'SEO técnico',
      'cap.seo': 'Schema.org, Open Graph, sitemap, semántica correcta. Indexable y compartible.',
      'about.eyebrow': '[ Índice · 03 sobre mí ]',
      'about.hero.title1': 'Desarrollador',
      'about.hero.title2': 'full stack.',
      'about.lead': 'Desarrollo productos web completos con foco en performance, accesibilidad, SEO técnico e integraciones útiles. Trabajo con marcas, estudios y startups que necesitan una presencia digital que funcione.',
      'about.bio.heading': 'Bio',
      'about.bio.p1': 'Desarrollador full stack con foco fuerte en frontend, performance e integraciones web. Construyo sitios accesibles, rápidos y mantenibles con HTML, CSS, JavaScript, TypeScript, React, Node.js y SQL básico cuando el proyecto lo necesita.',
      'about.bio.p2': 'Trabajo de forma independiente con marcas y estudios que valoran código limpio, tiempos cortos y comunicación directa. Puedo resolver desde una landing hasta formularios conectados, APIs ligeras, paneles simples y automatizaciones de contacto.',
      'about.bio.p3': 'Disponible para colaboraciones remotas, proyectos puntuales y roles en equipos internos.',
      'about.facts.role': 'Rol',
      'about.facts.role_val': 'Desarrollador full stack',
      'about.facts.modality': 'Modalidad',
      'about.facts.modality_val': 'Remoto · GMT-3',
      'about.facts.langs': 'Idiomas',
      'about.facts.status': 'Estado',
      'about.facts.status_val': 'Aceptando proyectos',
      'about.stack.title': 'Stack',
      'stack.languages': 'Lenguajes',
      'stack.frameworks': 'Frontend',
      'stack.frameworks.i4': 'UI responsive / WCAG',
      'stack.backend': 'Backend y APIs',
      'stack.backend.i2': 'APIs REST',
      'stack.backend.i4': 'Auth simple / Webhooks',
      'stack.data': 'Datos & servicios',
      'stack.tools': 'Herramientas',
      'stack.practices': 'Prácticas',
      'stack.practices.i2': 'SEO técnico',
      'stack.practices.i3': 'Encabezados de seguridad',
      'stack.practices.i4': 'PWA / QA móvil',
      'principles.title': 'Principios',
      'principles.1.title': 'Performance primero',
      'principles.1.desc': 'Cada milisegundo cuenta. Sitios optimizados desde el primer commit.',
      'principles.2.title': 'Accesibilidad por defecto',
      'principles.2.desc': 'WCAG 2.1, contraste, navegación por teclado. Sin compromisos.',
      'principles.3.title': 'Código mantenible',
      'principles.3.desc': 'Sin frameworks por moda. Cada decisión técnica se sostiene en el tiempo.',
      'principles.4.title': 'Comunicación clara',
      'principles.4.desc': 'Actualizaciones frecuentes, plazos reales y entregas sin sorpresas.',
      'contact.eyebrow': '[ Índice · 04 contacto ]',
      'contact.heading1': 'Conversemos.',
      'contact.direct': 'Contacto directo',
      'contact.form.name': 'Nombre',
      'contact.form.subject': 'Asunto',
      'contact.form.message': 'Mensaje',
      'contact.form.send': 'Enviar mensaje',
      'contact.form.opt_placeholder': 'Elegí un asunto…',
      'contact.form.opt_project': 'Proyecto',
      'contact.form.opt_job': 'Oportunidad laboral',
      'contact.form.opt_collab': 'Colaboración',
      'contact.form.opt_other': 'Otro',
      'contact.form.hint': 'Te respondo en menos de 24 horas.',
      'contact.form.opening_btn': 'Abriendo email…',
      'contact.form.opening_note': 'Se está abriendo tu cliente de correo. Si no se abre, escribime a {email}.',
      'contact.form.aria_label': 'Formulario de contacto',
      'contact.form.name_ph': 'Tu nombre',
      'contact.form.email_ph': 'tu@email.com',
      'contact.form.message_ph': 'Contame en qué estás trabajando…',
      'contact.availability': 'Disponibilidad',
      'contact.availability_val': 'Aceptando proyectos · 2026',
      'contact.timezone': 'Zona horaria',
      'contact.response': 'Tiempo de respuesta',
      'contact.response_val': 'Menos de 24h',
      'wsp.fab.aria_label': 'Abrir WhatsApp para enviar un mensaje',
      'wsp.fab.title': 'WhatsApp (mensaje prearmado)',
      'wsp.prefill': 'Hola Rony, vi tu portfolio y me gustaría consultarte por un proyecto. ¿Tenés disponibilidad?\n\nPágina: {url}',
      'a11y.nav': 'Navegación principal',
      'a11y.mobileNav': 'Menú móvil',
      'a11y.langToggle': 'Cambiar idioma',
      'a11y.langToggleToEn': 'Cambiar idioma a English',
      'a11y.langToggleToEs': 'Cambiar idioma a Español',
      'a11y.themeToggle': 'Cambiar tema',
      'a11y.menuOpen': 'Abrir menú',
      'a11y.menuClose': 'Cerrar menú',
      'a11y.skip': 'Saltar al contenido',
      'a11y.demo': 'Abrir demo',
      'a11y.projects': 'Proyectos',
      'alt.case.cucu.meta': 'Sitio de Cucú Studio — caso de estudio',
      'alt.case.luco.meta': 'Sitio de Luco Gourmet — caso de estudio',
      'alt.case.sellink.meta': 'Sitio de Sellink Group — caso de estudio',
      'alt.case.cognition.meta': 'Sitio de Cognition — caso de estudio',
      'alt.home.cucu': 'Sitio de Cucú Studio — layout editorial sobre fondo claro con acento cobre',
      'alt.home.luco': 'Sitio de Luco Gourmet — paleta cálida con tarjetas de menú',
      'alt.home.sellink': 'Sitio de Sellink Group — fondo oscuro con acento rojo audaz',
      'alt.home.cognition': 'Sitio de Cognition — hero con interfaz tipo terminal y acento cian',
      'alt.work.cucu': 'Sitio de Cucú Studio en escritorio',
      'alt.work.luco': 'Sitio de Luco Gourmet en escritorio',
      'alt.work.sellink': 'Sitio de Sellink Group en escritorio',
      'alt.work.cognition': 'Sitio de Cognition en escritorio',
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
      'signal.rail.1': 'brief claro',
      'signal.rail.2': 'prototipo rápido',
      'signal.rail.3': 'copy útil',
      'signal.rail.4': 'UI con carácter',
      'signal.rail.5': 'performance medida',
      'signal.rail.6': 'deploy limpio',
      'meta.home.title': 'Rony Cozzi — desarrollador full stack',
      'meta.home.description': 'Rony Cozzi — desarrollador full stack. Sitios web rápidos, landings, APIs ligeras e integraciones para marcas, estudios y startups.',
      'meta.work.title': 'Trabajos — Rony Cozzi',
      'meta.work.description': 'Proyectos full stack de Rony Cozzi: sitios web rápidos, landings, PWAs, integraciones, SEO técnico y experiencias digitales listas para producción.',
      'meta.about.title': 'Sobre mí — Rony Cozzi',
      'meta.about.description': 'Conocé a Rony Cozzi — desarrollador full stack en Argentina. Sitios rápidos, APIs ligeras, integraciones web y experiencias digitales listas para producción.',
      'meta.contact.title': 'Contacto — Rony Cozzi',
      'meta.contact.description': 'Hablemos de tu proyecto. Contactá a Rony Cozzi para sitios full stack, landings, APIs ligeras, integraciones web y desarrollo listo para producción.',
      'meta.process.title': 'Proceso — Rony Cozzi',
      'meta.process.description': 'Cómo trabajo — proceso full stack de Rony Cozzi: descubrimiento, arquitectura, diseño, frontend, integraciones, QA y puesta en producción.',
      'meta.faq.title': 'FAQ — Rony Cozzi',
      'meta.faq.description': 'Preguntas frecuentes — Rony Cozzi, desarrollador full stack. Proceso, precios, tiempos y qué esperar de un proyecto web.',
      'meta.case.cucu.title': 'Cucú Studio — Caso de estudio · Rony Cozzi',
      'meta.case.cucu.description': 'Caso de estudio — Cucú Studio. Sitio para estudio de tatuaje y diseño creativo. Tipografía editorial, animaciones por scroll y prioridad móvil.',
      'meta.case.luco.title': 'Luco Gourmet — Caso de estudio · Rony Cozzi',
      'meta.case.luco.description': 'Caso de estudio — Luco Gourmet. PWA para marca gastronómica con menú offline, datos estructurados para restaurantes y carga sub-segundo.',
      'meta.case.sellink.title': 'Sellink Group — Caso de estudio · Rony Cozzi',
      'meta.case.sellink.description': 'Caso de estudio — Sellink Group. Sitio corporativo para agencia creativa. Diseño oscuro, modular, accesible y rápido.',
      'meta.case.cognition.title': 'Cognition — Caso de estudio · Rony Cozzi',
      'meta.case.cognition.description': 'Caso de estudio — Cognition. Plataforma de IA para empresas. 11 páginas, calculadora ROI, chat basado en intención y PWA completa.',
      'case.project': 'El proyecto',
      'case.challenge': 'Reto y respuesta',
      'case.tech': 'Decisiones técnicas',
      'case.problem': 'El problema',
      'case.solution': 'La solución',
      'case.next': 'Siguiente proyecto',
      'case.all': 'Ver todos los proyectos',
      'case.year': 'Año',
      'case.installable': 'Instalable',
      'case.cucu.cover_alt': 'Portada de Cucú Studio — layout editorial sobre fondo claro con acento cobre',
      'case.cucu.p1': 'Cucú Studio es un estudio creativo de Córdoba especializado en tatuaje y diseño gráfico. Operaban sin presencia web — toda su captación pasaba por Instagram, lo que limitaba el alcance y la profesionalidad percibida.',
      'case.cucu.p2': 'El encargo fue construir un sitio que igualara el nivel visual de su trabajo: editorial, audaz y rápido. Sin WordPress, sin templates. Todo desde cero.',
      'case.cucu.problem_desc': 'Instagram como único canal de contacto generaba fricción para los clientes: no había precios claros, proceso de reserva definido ni forma de ver el portafolio completo de los artistas. El estudio perdía clientes potenciales que preferían estudios con sitio web.',
      'case.cucu.solution_desc': 'Un sitio editorial de una sola página con navegación suave, tipografía grande y espacio blanco intencional. Portfolio de trabajos con galería lazy-loaded, sección de artistas, proceso de reserva y contacto directo. Deploy en Vercel con dominio de demo.',
      'case.cucu.tech1.title': 'HTML semántico',
      'case.cucu.tech1.desc': 'Estructura con <code>&lt;article&gt;</code>, <code>&lt;figure&gt;</code> y <code>&lt;section&gt;</code> correctas. Schema.org para <code>CreativeWork</code> y artistas. Jerarquía de encabezados estricta.',
      'case.cucu.tech2.title': 'CSS Grid editorial',
      'case.cucu.tech2.desc': 'Layout con <code>grid-template-areas</code> asimétrico. Tipografía con <code>clamp()</code> para escala fluida entre 320px y 1920px. Variables custom properties para el sistema de color del estudio.',
      'case.cucu.tech3.title': 'Animaciones por scroll',
      'case.cucu.tech3.desc': '<code>IntersectionObserver</code> con umbral escalonado para reveals por línea. Sin librerías externas. <code>prefers-reduced-motion</code> respetado en todas las animaciones.',
      'case.cucu.tech4.title': 'Imágenes optimizadas',
      'case.cucu.tech4.desc': 'Imágenes en WebP con <code>width</code>/<code>height</code> explícitos en cada <code>&lt;img&gt;</code> para CLS = 0. <code>loading="lazy"</code> en portfolio, <code>loading="eager"</code> en hero.',
      'case.cucu.tech5.title': 'Deploy & CI',
      'case.cucu.tech5.desc': 'Auto-deploy desde rama <code>main</code> en Vercel. Encabezados de seguridad configurados para producción: CSP, X-Frame-Options y Referrer-Policy. Compresión Brotli automática desde CDN.',
      'case.cucu.tech6.title': 'Accesibilidad',
      'case.cucu.tech6.desc': 'Contraste WCAG AA en todos los elementos. Navegación 100% por teclado. <code>aria-label</code> en botones icon-only. <code>alt</code> descriptivo en imágenes del portfolio.',
      'case.luco.tag1': 'Restaurante',
      'case.luco.cover_alt': 'Portada de Luco Gourmet — tonos cálidos, tarjetas de menú y fotografía gastronómica',
      'case.luco.p1': 'Luco Gourmet es un comedor y mercado en Nueva Córdoba con foco en pasta artesanal, pizza al molde y vermut de bodegón. Necesitaban un sitio que mostrara el menú, contara la propuesta gastronómica y funcionara incluso con conexiones inestables en hora pico.',
      'case.luco.p2': 'La solución: una PWA instalable con menú offline, datos estructurados para Google y carga sub-segundo en 3G.',
      'case.luco.problem_desc': 'El restaurante tenía un sitio antiguo que tardaba más de 6 segundos en cargar en móvil. El menú vivía en una imagen JPG que se actualizaba cada quince días manualmente. Los clientes pedían el menú por WhatsApp porque el sitio era inviable.',
      'case.luco.solution_desc': 'Reescritura completa con foco en rendimiento y PWA. Menú dinámico desde un archivo JSON versionado, datos estructurados Schema.org para restaurantes, Service Worker con estrategia offline-first para el menú e instalación nativa en la pantalla de inicio.',
      'case.luco.tech1.title': 'PWA completa',
      'case.luco.tech1.desc': 'Service Worker con estrategia cache-first para CSS/JS e imágenes, y network-first con fallback offline para el menú JSON. <code>manifest.json</code> con iconos maskable. Aviso de instalación personalizado.',
      'case.luco.tech2.title': 'Schema.org para restaurantes',
      'case.luco.tech2.desc': 'JSON-LD con <code>Restaurant</code>, <code>OpeningHoursSpecification</code>, <code>Menu</code> y <code>GeoCoordinates</code>. Marcado validado con el Test de Resultados Enriquecidos de Google.',
      'case.luco.tech3.title': 'Performance extrema',
      'case.luco.tech3.desc': 'Critical CSS inlineado en <code>&lt;head&gt;</code>. Font preload para Inter 400/500. Imágenes en WebP con <code>width</code>/<code>height</code> explícitos. Total page weight &lt;200KB. LCP &lt;900ms en 3G lento.',
      'case.luco.tech4.title': 'Menú actualizable',
      'case.luco.tech4.desc': 'Menú almacenado en <code>menu.json</code> versionado. El dueño edita un archivo, hace push y Vercel redeploya en segundos. Sin CMS, sin suscripción mensual, sin interfaz que romper.',
      'case.luco.tech5.title': 'SEO local',
      'case.luco.tech5.desc': 'Titles y descriptions únicos por sección. Sitemap con prioridad diferenciada. Métricas de Lighthouse en verde (lab data).',
      'case.luco.tech6.title': 'Formulario de reservas',
      'case.luco.tech6.desc': 'Formulario de contacto estático con validación HTML5 + JS custom, pensado para derivar consultas por email o WhatsApp sin backend propio ni costo adicional.',
      'case.luco.stack8': 'Formulario estático',
      'case.sellink.tag1': 'Agencia',
      'case.sellink.tag2': 'Corporativo',
      'case.sellink.cover_alt': 'Portada de Sellink Group — fondo oscuro, acento rojo y layout de servicios',
      'case.sellink.p1': 'Sellink Group es una agencia creativa que necesitaba reposicionarse hacia clientes corporativos de mayor volumen. Su sitio anterior era una plantilla genérica de agencia — sin personalidad, sin diferenciación y con una experiencia móvil deficiente.',
      'case.sellink.p2': 'El encargo fue claro: oscuro, audaz, con sensación de diseño a medida sin volverse difícil de mantener. Que transmita una agencia de nivel senior desde el primer recorrido.',
      'case.sellink.problem_desc': 'Plantilla de Wix que tardaba 5+ segundos en cargar. Sin adaptación móvil real, sin modo oscuro nativo, sin identidad visual coherente. Los clientes potenciales no terminaban de confiar en la agencia porque el sitio no reflejaba la calidad del trabajo.',
      'case.sellink.solution_desc': 'Sitio modular con sistema de secciones componentizadas en variables CSS. Modo oscuro nativo por defecto. Tipografía display en mayúsculas con interletrado amplio. Formulario de contacto accesible con validación semántica. Despliegue en Vercel con encabezados de seguridad.',
      'case.sellink.tech1.title': 'Tokens de diseño en CSS',
      'case.sellink.tech1.desc': 'Sistema de variables CSS por capa: color semántico, tipografía, espaciado y radios. Cambio entre modo oscuro y claro sin JS, usando solo el atributo <code>data-theme</code> en <code>html</code>. Fácil de mantener y extender.',
      'case.sellink.tech2.title': 'Layout modular',
      'case.sellink.tech2.desc': 'Cada sección es independiente: <code>.services</code>, <code>.cases</code>, <code>.team</code>, <code>.contact</code>. Sin dependencias entre módulos. Nuevo servicio = copiar un <code>&lt;article&gt;</code>. Sin tocar CSS global.',
      'case.sellink.tech3.title': 'Formulario semántico',
      'case.sellink.tech3.desc': '<code>aria-required</code>, <code>aria-invalid</code>, <code>aria-describedby</code> en cada campo. Mensajes de error con <code>role="alert"</code>. <code>inputmode</code> correcto por tipo de campo. Funciona con teclado, lector de pantalla y autocompletado del navegador.',
      'case.sellink.tech4.title': 'Typography scale',
      'case.sellink.tech4.desc': 'Escala tipográfica fluida con <code>clamp()</code> entre 4 breakpoints. Display en Space Grotesk 700 y cuerpo en Inter 400/500. Interletrado en mayúsculas calculado por tamaño (más grande = más interletrado). Sin saltos bruscos al redimensionar.',
      'case.sellink.tech5.title': 'Print stylesheet',
      'case.sellink.tech5.desc': 'Hoja de estilos <code>@media print</code> que oculta nav, cursor, animaciones y background. Imprime en blanco con tipografía legible. Útil cuando clientes imprimen propuestas con el sitio como referencia.',
      'case.sellink.tech6.title': 'Contraste WCAG AA',
      'case.sellink.tech6.desc': 'Rojo <code>#FF3300</code> sobre negro <code>#070707</code> con ratio 5.4:1 — pasa <strong>AA</strong> para texto normal. Texto en blanco <code>#EDEDED</code> sobre el fondo principal alcanza ratio &gt;15:1. Verificado con Colour Contrast Analyser.',
      'case.cognition.title2': 'Plataforma IA',
      'case.cognition.tag1': 'Plataforma IA',
      'case.cognition.tag2': 'Empresas',
      'case.cognition.stat1': 'Páginas',
      'case.cognition.cover_alt': 'Portada de Cognition — hero con interfaz tipo terminal y acentos cian',
      'case.cognition.p1': 'Cognition es una plataforma de IA aplicada para empresas medianas en Argentina. El producto real existe — el desafío fue construir un sitio que explique una tecnología compleja a una audiencia no técnica, genere confianza corporativa y convierta demos.',
      'case.cognition.p2': 'El proyecto más complejo del portfolio: 11 páginas interrelacionadas, calculadora de ROI en JS puro, un chat basado en intención para calificar leads, animaciones de datos en tiempo real y PWA instalable.',
      'case.cognition.problem_desc': 'Una demo existente del producto en React con bundle de 4MB que tardaba 8s en cargar en móvil. Sin SEO, sin Schema.org, sin conversión medida. El equipo de ventas perdía leads porque el sitio no transmitía seriedad corporativa antes de la primera reunión.',
      'case.cognition.solution_desc': 'Reescritura completa en vanilla JS. Arquitectura multi-página con ruteo a medida. Calculadora de ROI que persiste en sessionStorage. Chat con 12 intenciones mapeadas para calificar leads antes del formulario. Service Worker con caché estratégico por tipo de recurso.',
      'case.cognition.tech1.title': 'Calculadora de ROI',
      'case.cognition.tech1.desc': 'Calculadora interactiva en JS puro con inputs deslizantes y resultado animado. Persiste en <code>sessionStorage</code> para que el usuario no pierda sus datos al navegar entre páginas. El resultado se prellena en el formulario de demo.',
      'case.cognition.tech2.title': 'Chat basado en intención',
      'case.cognition.tech2.desc': 'Widget de chat sin dependencias externas. 12 intenciones mapeadas (precios, integraciones, seguridad, demo, etc.). Respuestas en árbol de decisión. Cuando el usuario pide una demo, el formulario se prellena con el contexto de la conversación.',
      'case.cognition.tech3.title': 'Service Worker',
      'case.cognition.tech3.desc': 'Precaching del shell en instalación. Estrategia network-first para páginas HTML y caché primero para assets. Versionado por hash para invalidar caché en cada despliegue. Funcionamiento offline con fallback de error a medida.',
      'case.cognition.tech4.title': 'Animaciones de datos',
      'case.cognition.tech4.desc': 'Canvas API para animaciones de red neuronal en hero. <code>requestAnimationFrame</code> con throttle a 30fps. Pausa automática con <code>IntersectionObserver</code> cuando el canvas sale del viewport. Fallback SVG estático para <code>prefers-reduced-motion</code>.',
      'case.cognition.tech5.title': 'Schema.org SaaS',
      'case.cognition.tech5.desc': '<code>SoftwareApplication</code> con <code>applicationCategory: "BusinessApplication"</code>. <code>Offer</code> para pricing. <code>FAQPage</code> en la página de preguntas. <code>BreadcrumbList</code> en todas las páginas secundarias. Marcado validado con el Test de Resultados Enriquecidos de Google.',
      'case.cognition.tech6.title': 'Rendimiento en 11 páginas',
      'case.cognition.tech6.desc': 'CSS compartido en un solo archivo con lazy-loading de secciones. JS modularizado por feature con dynamic import. Total bundle: 38KB JS + 24KB CSS comprimidos. LCP de 2.1s en 3G lento simulado, medido en Lighthouse (lab data).',
      'process.eyebrow': '[ Proceso de trabajo ]',
      'process.title1': 'Cómo',
      'process.title2': 'trabajo.',
      'process.lead': 'De la primera llamada a la puesta en producción. Sin sorpresas, sin deriva de alcance, sin "terminó pero no funciona".',
      'process.step1.title': 'Briefing y alcance',
      'process.step1.duration': '1–2 días',
      'process.step1.desc': 'Una llamada de 30–60 minutos para entender qué necesitás, quién es tu audiencia y qué querés lograr con el sitio. Tomo notas, hago preguntas incómodas y al final del proceso tenés un documento con el alcance definido: qué incluye el proyecto, qué no incluye y cuánto cuesta.',
      'process.step1.del1': 'Documento de alcance',
      'process.step1.del2': 'Presupuesto cerrado',
      'process.step1.del3': 'Cronograma acordado',
      'process.step2.title': 'Arquitectura y wireframes',
      'process.step2.duration': '2–4 días',
      'process.step2.desc': 'Defino la arquitectura de información, el flujo de páginas y los wireframes de baja fidelidad. Te muestro la estructura antes de tocar diseño visual para validar que tenemos la información correcta en el lugar correcto.',
      'process.step2.del1': 'Sitemap',
      'process.step2.del2': 'Wireframes de baja fidelidad',
      'process.step2.del3': 'Flujos de usuario',
      'process.step3.title': 'Diseño',
      'process.step3.duration': '3–7 días',
      'process.step3.desc': 'Diseño visual de las pantallas principales en Figma. Sistema de tokens, tipografía, espaciado y color. Iteración hasta que el look refleje la marca y resuelva el contenido.',
      'process.step3.del1': 'Diseño final en Figma',
      'process.step3.del2': 'Tokens de diseño',
      'process.step3.del3': '1 ronda de revisión',
      'process.step4.title': 'Desarrollo',
      'process.step4.duration': '5–14 días',
      'process.step4.desc': 'Construcción del sitio con HTML, CSS y JavaScript modernos. Foco en performance, accesibilidad y SEO técnico desde el primer commit. Vistas previas por rama en Vercel para que veas el progreso.',
      'process.step4.del1': 'Repo en GitHub',
      'process.step4.del2': 'Preview en Vercel',
      'process.step4.del3': 'APIs / integraciones si hacen falta',
      'process.step5.title': 'QA y revisión',
      'process.step5.duration': '1–2 días',
      'process.step5.desc': 'Antes de llamarlo "listo" pasa por una lista de control de más de 60 puntos: Lighthouse, navegación por teclado, móviles reales (iOS Safari + Android Chrome), formularios, links rotos, integraciones, estados de error y hoja de estilos de impresión. Comparto el reporte con los puntajes reales.',
      'process.step5.del1': 'Reporte QA',
      'process.step5.del2': 'Auditoría Lighthouse',
      'process.step5.del3': 'Ajustes finales',
      'process.step6.title': 'Deploy y entrega',
      'process.step6.duration': '1 día',
      'process.step6.desc': 'Puesta en producción con tu dominio, DNS configurado y HTTPS activo. Te entrego: acceso al repo en GitHub, acceso al proyecto desplegado, el PDF de documentación técnica y una grabación de Loom explicando cómo actualizar contenido básico por tu cuenta. Soporte de 30 días incluido.',
      'process.step6.del1': 'Dominio configurado + SSL',
      'process.step6.del2': 'Accesos a todos los servicios',
      'process.step6.del3': 'Documentación técnica',
      'process.step6.del4': '30 días de soporte',
      'process.cta.title': '¿Empezamos?',
      'process.cta.copy': 'Contame en qué estás trabajando. Sin compromiso — la primera llamada es gratis.',
      'process.cta.link': 'Escribime',
      'faq.eyebrow': '[ FAQ — Preguntas frecuentes ]',
      'faq.title1': 'Todo lo que',
      'faq.title2': 'querés <em>saber.</em>',
      'faq.q1': '¿Cuánto tarda un proyecto web?',
      'faq.a1': 'Una <strong>web nueva desde cero</strong> tarda entre 2 y 4 semanas según la complejidad: cantidad de páginas, integraciones, contenido a preparar. Una <strong>landing</strong> bien definida puede estar lista en 5–7 días hábiles. Los tiempos dependen también de qué tan rápido llegue el material (textos, fotos, logo).',
      'faq.q2': '¿Qué incluye un proyecto y cómo cobrás?',
      'faq.a2': 'Todo proyecto incluye diseño + desarrollo + deploy + 1 ronda de revisiones + 30 días de soporte post-entrega. Cobro <strong>50% de anticipo al arrancar</strong> y el 50% restante al entregar el sitio funcionando. Acepto transferencia bancaria, PayPal y cripto (USDT/USDC).',
      'faq.q3': '¿Hacés mantenimiento después de entregar?',
      'faq.a3': 'Sí. Tengo <strong>planes de mantenimiento mensual</strong> que incluyen actualizaciones de contenido, backups, monitoreo de uptime y correcciones menores. También hago fixes puntuales por hora si no querés un plan fijo.',
      'faq.q4': '¿Trabajás con marcas fuera de Argentina?',
      'faq.a4': 'Sí. Trabajo <strong>100% remoto</strong>. Mi zona horaria es GMT-3 (Córdoba, Argentina), con disponibilidad para reuniones en horario LATAM y tarde/noche UTC para clientes europeos o norteamericanos. Cobro en USD para proyectos internacionales.',
      'faq.q5': '¿Hacés ecommerce?',
      'faq.a5': 'Sí, pero depende del caso. Para <strong>catálogos con checkout integrado</strong> (Mercado Pago, Stripe, PayPal): adelante, lo construyo. Para tiendas con cientos de productos, gestión de inventario y lógica de descuentos compleja: te recomiendo evaluar si una plataforma como WooCommerce o Shopify no te conviene más. Soy honesto con eso.',
      'faq.q6': '¿Hacés backend e integraciones?',
      'faq.a6': 'Sí. Hago <strong>backend ligero e integraciones web</strong>: Node.js, JavaScript/TypeScript, APIs REST, serverless functions, SQL básico, formularios conectados, autenticación simple, paneles internos, Supabase/Firebase, Airtable, email transaccional, analytics y webhooks. Si el proyecto necesita una plataforma grande con roles complejos, pagos recurrentes, inventario o lógica pesada, lo dimensionamos bien antes de prometer.',
      'faq.q7': '¿Qué pasa si no me gusta el resultado?',
      'faq.a7': 'El proceso incluye una <strong>revisión mayor</strong> antes de la entrega final donde podés pedir cambios estructurales. Cambios menores (copy, colores, imágenes) se pueden hacer en cualquier momento durante el desarrollo. Si el proyecto no va en la dirección correcta, lo discutimos antes de que sea un problema.',
      'faq.q8': '¿Aceptás cripto?',
      'faq.a8': 'Sí. Acepto <strong>USDT y USDC</strong> en redes Polygon, Arbitrum o Base. También acepto Bitcoin (BTC) para montos mayores. Si querés pagar en cripto, avisame al inicio del proyecto.',
      'faq.q9': '¿En qué se diferencia tu trabajo del de una agencia?',
      'faq.a9': 'En una agencia, tu proyecto pasa por 4–6 personas (account, diseñador, desarrollador, PM, QA). Conmigo, <strong>yo hago todo</strong> y respondés directo al que lo construye. Eso significa comunicación más rápida, menos teléfono roto y más control sobre las decisiones técnicas. La contra: no escalo a 10 proyectos en paralelo.',
      'faq.q10': '¿Cuándo no soy la mejor opción para tu proyecto?',
      'faq.a10': 'Soy honesto con esto. Probablemente no sea la mejor opción si necesitás:<br/><br/>— Un portal con autenticación compleja de usuarios y muchos roles<br/>— Una app móvil nativa (iOS/Android)<br/>— Un backend corporativo con lógica de negocio pesada, permisos avanzados o alta concurrencia<br/>— Un equipo interno dedicado 40h/semana en exclusiva<br/><br/>Para esos casos, te lo digo al principio y si puedo te recomiendo a alguien.',
      'faq.q11': '¿Necesito saber de tecnología para trabajar con vos?',
      'faq.a11': 'No. Mi trabajo es <strong>traducir tu objetivo de negocio a decisiones técnicas</strong>. Vos me contás qué necesitás lograr, yo decido cómo implementarlo y te lo explico en lenguaje humano. No hace falta saber qué es un Service Worker para tener un sitio que carga en 1 segundo.',
      'faq.cta.title': '¿Tenés otra pregunta?',
      'faq.cta.copy': 'Escribime directo — respondo en menos de 24h.',
      'faq.cta.link': 'Ir a contacto',
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
      'hero.fact.modality': 'Work mode',
      'hero.fact.modality_val': 'Remote · GMT-3',
      'hero.facts.quick': 'Quick facts',
      'hero.browser_bar': 'live-preview',
      'hero.metric.performance': 'performance: 96',
      'hero.metric.seo': 'seo: indexed',
      'hero.metric.motion': 'motion: reduced-safe',
      'featured.copy': 'A selection of live projects. Sites built around performance, content and brand.',
      'featured.cta': 'Explore work',
      'featured.heading1': 'Selected',
      'featured.heading2': 'work.',
      'featured.eyebrow': '[ Featured · 2026 ]',
      'ticker.fullstack': 'Full Stack Development',
      'ticker.performance': 'Web Performance',
      'ticker.accessibility': 'Accessibility',
      'ticker.ui': 'UI Engineering',
      'ticker.seo': 'Technical SEO',
      'ticker.pwa': 'Progressive Web Apps',
      'card.visit': 'Visit ↗',
      'card.cucu.type': 'Creative studio',
      'card.luco.sub': 'Dining & market · Nueva Córdoba',
      'card.luco.type': 'Gastronomy',
      'card.sellink.sub': '★ Creative agency ★',
      'card.sellink.type': 'Agency · Corporate',
      'card.cognition.sub': 'Digital transformation · Applied AI',
      'card.cognition.type': 'AI · Platform',
      'case.live': 'Visit live site',
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
      'contactCard.title': 'Email me or<br/>message me on WhatsApp.',
      'contactCard.response': 'Response',
      'contactCard.response_val': '< 24h',
      'contactCard.langs': 'Languages',
      'contactCard.modality': 'Work mode',
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
      'work.role.value': 'Full stack development',
      'work.status': 'Status',
      'work.status_val': '4 projects · live',
      'work.hint': 'Scroll',
      'work.visit': 'View case study',
      'work.eyebrow': '[ Index · 04 projects ]',
      'case.back': 'Back to work',
      'work.cucu.desc': 'Site for a creative studio. Editorial typography, scroll animations and micro-interactions.',
      'work.cucu.eyebrow': '— Creative studio',
      'work.luco.desc': 'Site for a gastronomy brand. PWA with offline menu, Schema.org and sub-second load.',
      'work.luco.eyebrow': '— Dining & market',
      'work.sellink.desc': 'Corporate site. Modular structure, services presentation and accessible forms.',
      'work.sellink.eyebrow': '★ Creative agency',
      'work.sellink.thumb': 'Brand · Web · Digital',
      'work.cognition.desc': 'AI platform for enterprises. 11 pages, ROI calculator, intent-based chat and PWA.',
      'work.cognition.eyebrow': '— AI platform',
      'work.cognition.thumb': 'Digital transformation · AI',
      'card.cucu.sub': 'Creative studio · Tattoo & design',
      'work.cucu.thumb': 'Tattoo & design · Córdoba',
      'work.luco.tag4': 'Mobile-first',
      'work.sellink.tag3': 'Accessibility',
      'work.sellink.tag4': 'Dark',
      'case.cucu.tag1': 'Creative studio',
      'case.cucu.tag2': 'Tattoo & design',
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
      'about.hero.title1': 'Full Stack',
      'about.hero.title2': 'Developer.',
      'about.lead': 'Full web product development focused on performance, accessibility, technical SEO and useful integrations. Working with brands, studios and startups that need a digital presence that performs.',
      'about.bio.heading': 'Bio',
      'about.bio.p1': 'Full Stack Developer with a strong focus on frontend, performance and web integrations. I build accessible, fast and maintainable sites with HTML, CSS, JavaScript, TypeScript, React, Node.js and basic SQL when the project needs it.',
      'about.bio.p2': 'I work independently with brands and studios that value clean code, fast delivery and direct communication. I can handle anything from a landing page to connected forms, lightweight APIs, simple admin panels and contact automations.',
      'about.bio.p3': 'Available for remote collaborations, one-off projects and roles inside product teams.',
      'about.facts.role': 'Role',
      'about.facts.role_val': 'Full Stack Developer',
      'about.facts.modality': 'Work mode',
      'about.facts.modality_val': 'Remote · GMT-3',
      'about.facts.langs': 'Languages',
      'about.facts.status': 'Status',
      'about.facts.status_val': 'Accepting projects',
      'about.stack.title': 'Stack',
      'stack.languages': 'Languages',
      'stack.frameworks': 'Frontend',
      'stack.frameworks.i4': 'Responsive UI / WCAG',
      'stack.backend': 'Backend & APIs',
      'stack.backend.i2': 'REST APIs',
      'stack.backend.i4': 'Simple auth / Webhooks',
      'stack.data': 'Data & services',
      'stack.tools': 'Tools',
      'stack.practices': 'Practices',
      'stack.practices.i2': 'Technical SEO',
      'stack.practices.i3': 'Security headers',
      'stack.practices.i4': 'PWA / mobile QA',
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
      'contact.form.opt_placeholder': 'Select a subject…',
      'contact.form.opt_project': 'Project',
      'contact.form.opt_job': 'Job opportunity',
      'contact.form.opt_collab': 'Collaboration',
      'contact.form.opt_other': 'Other',
      'contact.form.hint': "I'll get back to you within 24 hours.",
      'contact.form.opening_btn': 'Opening email…',
      'contact.form.opening_note': 'Your email app is opening. If it does not, write to {email}.',
      'contact.form.aria_label': 'Contact form',
      'contact.form.name_ph': 'Your name',
      'contact.form.email_ph': 'you@email.com',
      'contact.form.message_ph': "Tell me what you're working on…",
      'contact.availability': 'Availability',
      'contact.availability_val': 'Accepting projects · 2026',
      'contact.timezone': 'Timezone',
      'contact.response': 'Response time',
      'contact.response_val': 'Less than 24h',
      'wsp.fab.aria_label': 'Open WhatsApp to send a message',
      'wsp.fab.title': 'WhatsApp (prefilled message)',
      'wsp.prefill': 'Hi Rony, I saw your portfolio and I’d like to ask about a project. Are you available?\n\nPage: {url}',
      'a11y.nav': 'Main navigation',
      'a11y.mobileNav': 'Mobile menu',
      'a11y.langToggle': 'Switch language',
      'a11y.langToggleToEn': 'Switch language to English',
      'a11y.langToggleToEs': 'Switch language to Español',
      'a11y.themeToggle': 'Switch theme',
      'a11y.menuOpen': 'Open menu',
      'a11y.menuClose': 'Close menu',
      'a11y.skip': 'Skip to content',
      'a11y.demo': 'Open demo',
      'a11y.projects': 'Projects',
      'alt.case.cucu.meta': 'Website for Cucú Studio — case study',
      'alt.case.luco.meta': 'Website for Luco Gourmet — case study',
      'alt.case.sellink.meta': 'Website for Sellink Group — case study',
      'alt.case.cognition.meta': 'Website for Cognition — case study',
      'alt.home.cucu': 'Website for Cucú Studio — editorial layout on a light background with a copper accent',
      'alt.home.luco': 'Website for Luco Gourmet — warm palette with menu cards',
      'alt.home.sellink': 'Website for Sellink Group — dark background with a bold red accent',
      'alt.home.cognition': 'Website for Cognition — hero with a terminal-style interface and cyan accent',
      'alt.work.cucu': 'Website for Cucú Studio on desktop',
      'alt.work.luco': 'Website for Luco Gourmet on desktop',
      'alt.work.sellink': 'Website for Sellink Group on desktop',
      'alt.work.cognition': 'Website for Cognition on desktop',
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
      'signal.rail.1': 'clear brief',
      'signal.rail.2': 'fast prototype',
      'signal.rail.3': 'useful copy',
      'signal.rail.4': 'UI with character',
      'signal.rail.5': 'measured performance',
      'signal.rail.6': 'clean deploy',
      'meta.home.title': 'Rony Cozzi — Full Stack Developer',
      'meta.home.description': 'Rony Cozzi — Full Stack Developer. Fast websites, landing pages, lightweight APIs and integrations for brands, studios and startups.',
      'meta.work.title': 'Work — Rony Cozzi',
      'meta.work.description': 'Full stack projects by Rony Cozzi: fast websites, landing pages, PWAs, integrations, technical SEO and production-ready digital experiences.',
      'meta.about.title': 'About — Rony Cozzi',
      'meta.about.description': 'Meet Rony Cozzi — Full Stack Developer based in Argentina. Fast websites, lightweight APIs, web integrations and production-ready digital experiences.',
      'meta.contact.title': 'Contact — Rony Cozzi',
      'meta.contact.description': 'Let’s talk about your project. Contact Rony Cozzi for full stack websites, landing pages, lightweight APIs, web integrations and production-ready development.',
      'meta.process.title': 'Process — Rony Cozzi',
      'meta.process.description': 'How I work — Rony Cozzi’s full stack process: discovery, architecture, design, frontend, integrations, QA and launch.',
      'meta.faq.title': 'FAQ — Rony Cozzi',
      'meta.faq.description': 'Frequently asked questions — Rony Cozzi, full stack developer. Process, pricing, timelines and what to expect from a web project.',
      'meta.case.cucu.title': 'Cucú Studio — Case Study · Rony Cozzi',
      'meta.case.cucu.description': 'Case study — Cucú Studio. Website for a tattoo and creative design studio. Editorial typography, scroll animation and mobile-first thinking.',
      'meta.case.luco.title': 'Luco Gourmet — Case Study · Rony Cozzi',
      'meta.case.luco.description': 'Case study — Luco Gourmet. PWA for a gastronomy brand with an offline menu, restaurant structured data and sub-second load times.',
      'meta.case.sellink.title': 'Sellink Group — Case Study · Rony Cozzi',
      'meta.case.sellink.description': 'Case study — Sellink Group. Corporate website for a creative agency. Dark, modular, accessible and fast.',
      'meta.case.cognition.title': 'Cognition — Case Study · Rony Cozzi',
      'meta.case.cognition.description': 'Case study — Cognition. AI platform for enterprises. 11 pages, ROI calculator, intent-driven chat and a complete PWA.',
      'case.project': 'The project',
      'case.challenge': 'Challenge and response',
      'case.tech': 'Technical decisions',
      'case.problem': 'The problem',
      'case.solution': 'The solution',
      'case.next': 'Next project',
      'case.all': 'View all projects',
      'case.year': 'Year',
      'case.installable': 'Installable',
      'case.cucu.cover_alt': 'Cucú Studio cover — editorial layout on a light background with a copper accent',
      'case.cucu.p1': 'Cucú Studio is a creative studio in Córdoba focused on tattooing and graphic design. They operated without a website — all acquisition happened through Instagram, which limited reach and perceived professionalism.',
      'case.cucu.p2': 'The brief was to build a site that matched the visual level of their work: editorial, bold and fast. No WordPress, no templates. Everything from scratch.',
      'case.cucu.problem_desc': 'Using Instagram as the only contact channel created friction for clients: there were no clear prices, no defined booking flow and no way to browse the artists’ full portfolio. The studio was losing potential clients to competitors with proper websites.',
      'case.cucu.solution_desc': 'A single-page editorial site with smooth navigation, oversized type and intentional whitespace. Work gallery with lazy-loaded media, an artists section, booking process and direct contact. Deployed on Vercel with a demo domain.',
      'case.cucu.tech1.title': 'Semantic HTML',
      'case.cucu.tech1.desc': 'Structure built with proper <code>&lt;article&gt;</code>, <code>&lt;figure&gt;</code> and <code>&lt;section&gt;</code> usage. Schema.org for <code>CreativeWork</code> and artists. Strict heading hierarchy.',
      'case.cucu.tech2.title': 'Editorial CSS Grid',
      'case.cucu.tech2.desc': 'Asymmetric layout powered by <code>grid-template-areas</code>. Typography uses <code>clamp()</code> for a fluid scale between 320px and 1920px. Custom properties drive the studio’s color system.',
      'case.cucu.tech3.title': 'Scroll animation',
      'case.cucu.tech3.desc': '<code>IntersectionObserver</code> with staggered thresholds for line reveals. No external libraries. <code>prefers-reduced-motion</code> is respected in every animation.',
      'case.cucu.tech4.title': 'Optimized images',
      'case.cucu.tech4.desc': 'WebP images with explicit <code>width</code>/<code>height</code> on every <code>&lt;img&gt;</code> for CLS = 0. <code>loading=\"lazy\"</code> in the gallery, <code>loading=\"eager\"</code> in the hero.',
      'case.cucu.tech5.title': 'Deploy & CI',
      'case.cucu.tech5.desc': 'Auto-deploys from the <code>main</code> branch on Vercel. Production security headers configured: CSP, X-Frame-Options and Referrer-Policy. Brotli compression served automatically by the CDN.',
      'case.cucu.tech6.title': 'Accessibility',
      'case.cucu.tech6.desc': 'WCAG AA contrast across the interface. 100% keyboard navigation. <code>aria-label</code> on icon-only buttons. Descriptive <code>alt</code> text on portfolio imagery.',
      'case.luco.tag1': 'Restaurant',
      'case.luco.cover_alt': 'Luco Gourmet cover — warm tones, menu cards and food photography',
      'case.luco.p1': 'Luco Gourmet is a dining room and market in Nueva Córdoba centered on handmade pasta, pan pizza and classic vermouth. They needed a site that could present the menu, explain the food concept and still work under unstable connections during peak hours.',
      'case.luco.p2': 'The answer: an installable PWA with an offline menu, structured data for Google and sub-second load times on 3G.',
      'case.luco.problem_desc': 'The restaurant had an old site that took more than 6 seconds to load on mobile. The menu lived inside a JPG updated manually every two weeks. Customers asked for the menu on WhatsApp because the website was not usable.',
      'case.luco.solution_desc': 'A full rewrite focused on performance and PWA behavior. Dynamic menu from a versioned JSON file, Schema.org restaurant markup, an offline-first Service Worker for the menu and native install on the home screen.',
      'case.luco.tech1.title': 'Complete PWA',
      'case.luco.tech1.desc': 'Service Worker using cache-first for CSS/JS/images and network-first with offline fallback for the menu JSON. <code>manifest.json</code> ships with maskable icons. Custom install prompt.',
      'case.luco.tech2.title': 'Schema.org for restaurants',
      'case.luco.tech2.desc': 'JSON-LD with <code>Restaurant</code>, <code>OpeningHoursSpecification</code>, <code>Menu</code> and <code>GeoCoordinates</code>. Markup validated with Google’s Rich Results Test.',
      'case.luco.tech3.title': 'Extreme performance',
      'case.luco.tech3.desc': 'Critical CSS inlined in <code>&lt;head&gt;</code>. Font preload for Inter 400/500. WebP imagery with explicit dimensions. Total page weight under 200KB. LCP under 900ms on slow 3G.',
      'case.luco.tech4.title': 'Updatable menu',
      'case.luco.tech4.desc': 'Menu stored in a versioned <code>menu.json</code>. The owner edits one file, pushes, and Vercel redeploys in seconds. No CMS, no monthly subscription, no fragile admin UI.',
      'case.luco.tech5.title': 'Local SEO',
      'case.luco.tech5.desc': 'Unique titles and descriptions by section. Sitemap with differentiated priority. Lighthouse metrics in the green zone (lab data).',
      'case.luco.tech6.title': 'Booking form',
      'case.luco.tech6.desc': 'Static contact form with HTML5 validation plus custom JS, designed to route inquiries through email or WhatsApp without its own backend or extra cost.',
      'case.luco.stack8': 'Static form',
      'case.sellink.tag1': 'Agency',
      'case.sellink.tag2': 'Corporate',
      'case.sellink.cover_alt': 'Sellink Group cover — dark background, red accent and service-driven layout',
      'case.sellink.p1': 'Sellink Group is a creative agency that needed to reposition itself toward higher-volume corporate clients. Their previous website was a generic agency template — no personality, no differentiation and a weak mobile experience.',
      'case.sellink.p2': 'The brief was explicit: dark, bold and custom-designed without becoming hard to maintain. It had to feel like a senior agency from the first scroll.',
      'case.sellink.problem_desc': 'A Wix template taking 5+ seconds to load. No real mobile adaptation, no native dark mode and no coherent visual identity. Prospective clients hesitated because the website did not reflect the quality of the agency’s work.',
      'case.sellink.solution_desc': 'A modular site with a component-like section system built on CSS variables. Native dark mode by default. Display typography in uppercase with wide tracking. Accessible contact form with semantic validation. Deployed on Vercel with security headers.',
      'case.sellink.tech1.title': 'CSS design tokens',
      'case.sellink.tech1.desc': 'Layered CSS variables for semantic color, typography, spacing and radii. Dark/light switching works without JS, only by reading the <code>data-theme</code> attribute on <code>html</code>. Easy to maintain and scale.',
      'case.sellink.tech2.title': 'Modular layout',
      'case.sellink.tech2.desc': 'Every section is independent: <code>.services</code>, <code>.cases</code>, <code>.team</code>, <code>.contact</code>. No dependencies between modules. New service = copy one <code>&lt;article&gt;</code>. No global CSS surgery.',
      'case.sellink.tech3.title': 'Semantic form',
      'case.sellink.tech3.desc': '<code>aria-required</code>, <code>aria-invalid</code> and <code>aria-describedby</code> on every field. Error messages with <code>role=\"alert\"</code>. Correct <code>inputmode</code> by field type. Works with keyboard, screen readers and browser autocomplete.',
      'case.sellink.tech4.title': 'Typography scale',
      'case.sellink.tech4.desc': 'Fluid type scale with <code>clamp()</code> across four breakpoints. Space Grotesk 700 for display and Inter 400/500 for body. Uppercase tracking tuned by size. No abrupt jumps while resizing.',
      'case.sellink.tech5.title': 'Print stylesheet',
      'case.sellink.tech5.desc': '<code>@media print</code> stylesheet hides nav, cursor, animations and backgrounds. Prints black on white with readable type. Useful when clients print proposals and reference the site.',
      'case.sellink.tech6.title': 'WCAG AA contrast',
      'case.sellink.tech6.desc': 'Red <code>#FF3300</code> on black <code>#070707</code> gives a 5.4:1 ratio — it passes <strong>AA</strong> for normal text. White text <code>#EDEDED</code> on the main background reaches a ratio above 15:1. Verified with Colour Contrast Analyser.',
      'case.cognition.title2': 'AI Platform',
      'case.cognition.tag1': 'AI Platform',
      'case.cognition.tag2': 'Enterprise',
      'case.cognition.stat1': 'Pages',
      'case.cognition.cover_alt': 'Cognition cover — hero with a terminal-like interface and cyan accents',
      'case.cognition.p1': 'Cognition is an applied AI platform for mid-sized companies in Argentina. The real product exists — the challenge was to explain a complex technology to a non-technical audience, build enterprise trust and convert demo requests.',
      'case.cognition.p2': 'The most complex project in the portfolio: 11 connected pages, a vanilla JS ROI calculator, an intent-based lead-qualifying chat, real-time data motion and an installable PWA.',
      'case.cognition.problem_desc': 'An existing React demo with a 4MB bundle that took 8 seconds to load on mobile. No SEO, no Schema.org and no measurable conversion. The sales team lost leads because the site failed to project corporate credibility before the first meeting.',
      'case.cognition.solution_desc': 'A full rewrite in vanilla JS. Multi-page architecture with custom routing. ROI calculator persisted in sessionStorage. Chat with 12 mapped intents to qualify leads before the form. Service Worker with strategic caching by resource type.',
      'case.cognition.tech1.title': 'ROI calculator',
      'case.cognition.tech1.desc': 'Interactive vanilla JS calculator with sliders and animated output. Persists in <code>sessionStorage</code> so visitors keep their inputs while navigating between pages. The result pre-fills the demo request form.',
      'case.cognition.tech2.title': 'Intent-based chat',
      'case.cognition.tech2.desc': 'Chat widget with no external dependencies. 12 mapped intents (pricing, integrations, security, demo, etc.). Tree-based answers. When a visitor requests a demo, the form is pre-filled with the conversation context.',
      'case.cognition.tech3.title': 'Service Worker',
      'case.cognition.tech3.desc': 'Shell precaching on install. Network-first for HTML pages and cache-first for assets. Versioned by hash to invalidate cache on each deploy. Offline behavior with a custom error fallback.',
      'case.cognition.tech4.title': 'Data motion',
      'case.cognition.tech4.desc': 'Canvas API powers the neural-network animation in the hero. <code>requestAnimationFrame</code> throttled to 30fps. Automatic pause with <code>IntersectionObserver</code> when the canvas leaves the viewport. Static SVG fallback for <code>prefers-reduced-motion</code>.',
      'case.cognition.tech5.title': 'Schema.org for SaaS',
      'case.cognition.tech5.desc': '<code>SoftwareApplication</code> with <code>applicationCategory: \"BusinessApplication\"</code>. <code>Offer</code> for pricing. <code>FAQPage</code> on the question page. <code>BreadcrumbList</code> on every secondary page. Markup validated with Google’s Rich Results Test.',
      'case.cognition.tech6.title': 'Performance across 11 pages',
      'case.cognition.tech6.desc': 'Shared CSS in a single file with lazy-loaded sections. Feature-based JS modules with dynamic import. Total bundle: 38KB JS + 24KB CSS compressed. 2.1s LCP on simulated slow 3G, measured in Lighthouse (lab data).',
      'process.eyebrow': '[ Working process ]',
      'process.title1': 'How I',
      'process.title2': 'work.',
      'process.lead': 'From the first call to launch. No surprises, no scope drift, no “it’s done but it doesn’t work.”',
      'process.step1.title': 'Briefing and scope',
      'process.step1.duration': '1–2 days',
      'process.step1.desc': 'A 30–60 minute call to understand what you need, who your audience is and what you want the site to achieve. I take notes, ask uncomfortable questions and by the end you have a defined scope document: what the project includes, what it does not and how much it costs.',
      'process.step1.del1': 'Scope document',
      'process.step1.del2': 'Fixed quote',
      'process.step1.del3': 'Agreed timeline',
      'process.step2.title': 'Architecture and wireframes',
      'process.step2.duration': '2–4 days',
      'process.step2.desc': 'I define the information architecture, page flow and low-fidelity wireframes. You see the structure before visual design starts, so we validate that the right information is in the right place.',
      'process.step2.del1': 'Sitemap',
      'process.step2.del2': 'Low-fidelity wireframes',
      'process.step2.del3': 'User flows',
      'process.step3.title': 'Design',
      'process.step3.duration': '3–7 days',
      'process.step3.desc': 'Visual design for the key screens in Figma. Tokens, typography, spacing and color. We iterate until the look reflects the brand and resolves the content.',
      'process.step3.del1': 'Final Figma design',
      'process.step3.del2': 'Design tokens',
      'process.step3.del3': '1 revision round',
      'process.step4.title': 'Development',
      'process.step4.duration': '5–14 days',
      'process.step4.desc': 'The site is built with modern HTML, CSS and JavaScript. Performance, accessibility and technical SEO are part of the first commit. Branch previews in Vercel let you follow progress in real time.',
      'process.step4.del1': 'GitHub repo',
      'process.step4.del2': 'Vercel preview',
      'process.step4.del3': 'APIs / integrations when needed',
      'process.step5.title': 'QA and review',
      'process.step5.duration': '1–2 days',
      'process.step5.desc': 'Before calling anything “done”, it goes through a 60+ point checklist: Lighthouse, keyboard navigation, real mobile devices (iOS Safari + Android Chrome), forms, broken links, integrations, error states and print styles. I share the report with real scores.',
      'process.step5.del1': 'QA report',
      'process.step5.del2': 'Lighthouse audit',
      'process.step5.del3': 'Final adjustments',
      'process.step6.title': 'Launch and handoff',
      'process.step6.duration': '1 day',
      'process.step6.desc': 'Production launch with your domain, DNS configured and HTTPS active. You receive: repo access on GitHub, deployed project access, a technical PDF and a Loom recording explaining how to update basic content on your own. 30 days of support included.',
      'process.step6.del1': 'Configured domain + SSL',
      'process.step6.del2': 'Access to every service',
      'process.step6.del3': 'Technical documentation',
      'process.step6.del4': '30 days of support',
      'process.cta.title': 'Shall we start?',
      'process.cta.copy': 'Tell me what you’re building. No pressure — the first call is free.',
      'process.cta.link': 'Write to me',
      'faq.eyebrow': '[ FAQ — Frequently asked questions ]',
      'faq.title1': 'Everything you',
      'faq.title2': 'might <em>want to know.</em>',
      'faq.q1': 'How long does a web project take?',
      'faq.a1': 'A <strong>new website from scratch</strong> usually takes between 2 and 4 weeks depending on complexity: page count, integrations and how much content has to be prepared. A well-defined <strong>landing page</strong> can be ready in 5–7 business days. Timelines also depend on how quickly content arrives (copy, photos, logo).',
      'faq.q2': 'What is included in a project and how do you charge?',
      'faq.a2': 'Every project includes design + development + deployment + 1 review round + 30 days of post-launch support. I charge a <strong>50% upfront deposit</strong> to start and the remaining 50% when the site is delivered working. I accept bank transfer, PayPal and crypto (USDT/USDC).',
      'faq.q3': 'Do you handle maintenance after delivery?',
      'faq.a3': 'Yes. I offer <strong>monthly maintenance plans</strong> that include content updates, backups, uptime monitoring and minor fixes. I can also handle one-off hourly fixes if you do not want a fixed plan.',
      'faq.q4': 'Do you work with brands outside Argentina?',
      'faq.a4': 'Yes. I work <strong>100% remotely</strong>. My timezone is GMT-3 (Córdoba, Argentina), and I can meet during LATAM hours plus late UTC afternoons/evenings for European or North American clients. International projects are billed in USD.',
      'faq.q5': 'Do you build ecommerce?',
      'faq.a5': 'Yes, depending on the case. For <strong>catalogues with integrated checkout</strong> (Mercado Pago, Stripe, PayPal): yes, I can build that. For stores with hundreds of products, inventory management and complex discount logic, I will honestly recommend evaluating WooCommerce or Shopify first.',
      'faq.q6': 'Do you handle backend and integrations?',
      'faq.a6': 'Yes. I build <strong>lightweight backend and web integrations</strong>: Node.js, JavaScript/TypeScript, REST APIs, serverless functions, basic SQL, connected forms, simple auth, admin panels, Supabase/Firebase, Airtable, transactional email, analytics and webhooks. If the project needs a large platform with complex roles, recurring billing, inventory or heavy logic, we scope it properly before promising anything.',
      'faq.q7': 'What if I do not like the result?',
      'faq.a7': 'The process includes a <strong>major review</strong> before final delivery where you can request structural changes. Minor changes (copy, colors, imagery) can happen at any point during development. If the project starts going in the wrong direction, we discuss it before it becomes a real problem.',
      'faq.q8': 'Do you accept crypto?',
      'faq.a8': 'Yes. I accept <strong>USDT and USDC</strong> on Polygon, Arbitrum or Base. I also accept Bitcoin (BTC) for larger budgets. If you want to pay in crypto, let me know at the start of the project.',
      'faq.q9': 'How is your work different from an agency?',
      'faq.a9': 'At an agency, your project usually goes through 4–6 people (account, designer, developer, PM, QA). With me, <strong>I do the work directly</strong> and you talk to the person building it. That means faster communication, less telephone game and more control over technical decisions. The tradeoff: I do not scale to 10 projects in parallel.',
      'faq.q10': 'When am I not the right fit for your project?',
      'faq.a10': 'I am honest about this. I am probably not the right fit if you need:<br/><br/>— A portal with complex user authentication and many roles<br/>— A native mobile app (iOS/Android)<br/>— An enterprise backend with heavy business logic, advanced permissions or high concurrency<br/>— A full-time internal team member working 40h/week exclusively<br/><br/>In those cases I will say it early and, if I can, point you to someone better suited.',
      'faq.q11': 'Do I need to understand technology to work with you?',
      'faq.a11': 'No. My job is to <strong>translate your business goal into technical decisions</strong>. You tell me what you need to achieve, I decide how to implement it and explain it in plain language. You do not need to know what a Service Worker is to have a site that loads in 1 second.',
      'faq.cta.title': 'Do you have another question?',
      'faq.cta.copy': 'Write to me directly — I reply in under 24h.',
      'faq.cta.link': 'Go to contact',
    },
  };

  /* ---------- Storage helpers (cached) ---------- */
  let cachedLang = null;
  let cachedTheme = null;
  const fullyLocalizedPages = new Set([
    'home',
    'about',
    'work',
    'contact',
    'process',
    'faq',
    'case-cucu',
    'case-luco',
    'case-sellink',
    'case-cognition',
  ]);
  const localRouteFallbacks = {
    '/work': '/work.html',
    '/about': '/about.html',
    '/contact': '/contact.html',
    '/process': '/process.html',
    '/faq': '/faq.html',
    '/privacy': '/privacy.html',
    '/terms': '/terms.html',
    '/404': '/404.html',
    '/case/cucu': '/case/cucu.html',
    '/case/luco': '/case/luco.html',
    '/case/sellink': '/case/sellink.html',
    '/case/cognition': '/case/cognition.html',
  };

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

  function getPageId() {
    return (document.body && document.body.dataset && document.body.dataset.page) || '';
  }

  function pageSupportsLangToggle(pageId = getPageId()) {
    return fullyLocalizedPages.has(pageId);
  }

  function resolveLang(lang) {
    return pageSupportsLangToggle() ? lang : 'es';
  }

  function normalizePathname(pathname) {
    if (!pathname) return '/';
    let normalized = String(pathname).toLowerCase().replace(/\/+/g, '/');
    if (!normalized.startsWith('/')) normalized = `/${normalized}`;
    if (normalized.length > 1) normalized = normalized.replace(/\/$/, '');
    return normalized || '/';
  }

  function normalizeRoutePath(pathname) {
    const normalized = normalizePathname(pathname);
    if (normalized === '/index.html') return '/';
    if (normalized.endsWith('.html')) {
      const withoutHtml = normalized.slice(0, -5);
      return withoutHtml || '/';
    }
    return normalized;
  }

  function resolveLocalHrefFallback(rawHref) {
    if (!rawHref || /^(#|mailto:|tel:|data:|javascript:)/i.test(rawHref)) return null;
    let url;
    try {
      url = new URL(rawHref, window.location.href);
    } catch (err) {
      return null;
    }
    if (url.origin !== window.location.origin) return null;
    const fallbackPath = localRouteFallbacks[normalizePathname(url.pathname)];
    if (!fallbackPath) return null;
    return `${fallbackPath}${url.search}${url.hash}`;
  }

  function setupLocalRouteFallback() {
    if (!isLocalOrigin) return;
    document.querySelectorAll('a[href], link[rel="prefetch"][href]').forEach((el) => {
      const rawHref = el.getAttribute('href');
      const fallbackHref = resolveLocalHrefFallback(rawHref);
      if (fallbackHref && fallbackHref !== rawHref) {
        el.setAttribute('href', fallbackHref);
      }
    });
  }

  function t(key) {
    const lang = resolveLang(getLang());
    return (i18n[lang] && i18n[lang][key]) || (i18n.es && i18n.es[key]) || '';
  }

  /* ---------- WhatsApp FAB (prefill) ---------- */
  function updateWhatsAppFabLink(lang) {
    const fab = document.querySelector('[data-wsp-fab]');
    if (!fab) return;
    const number = String(fab.dataset.wspNumber || '').trim();
    if (!number) return;

    const canonical = document.querySelector('link[rel="canonical"]');
    const pageUrl = (canonical && canonical.href) ? canonical.href : window.location.href.split('#')[0];

    const template =
      (i18n[lang] && i18n[lang]['wsp.prefill']) ||
      (i18n.es && i18n.es['wsp.prefill']) ||
      '';
    if (!template) return;

    const text = template.replace('{url}', pageUrl);
    fab.href = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
  }

  /* ---------- i18n apply ---------- */
  function setTextWithBr(el, val) {
    if (!/<br\s*\/?>/i.test(val)) {
      el.textContent = val;
      return;
    }
    const parts = val.split(/<br\s*\/?>/i);
    el.textContent = '';
    parts.forEach((part, idx) => {
      if (idx) el.appendChild(document.createElement('br'));
      el.appendChild(document.createTextNode(part));
    });
  }

  function applyLang(lang) {
    const activeLang = resolveLang(lang);
    document.documentElement.lang = activeLang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      const val = i18n[activeLang] && i18n[activeLang][key];
      if (val == null) return;
      setTextWithBr(el, val);
    });
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const pairs = el.dataset.i18nAttr.split(',');
      pairs.forEach((pair) => {
        const [attr, key] = pair.split(':').map((s) => s.trim());
      const val = i18n[activeLang] && i18n[activeLang][key];
      if (val != null) el.setAttribute(attr, val);
      });
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.dataset.i18nHtml;
      const val = i18n[activeLang] && i18n[activeLang][key];
      if (val != null) el.innerHTML = val;
    });
    document.querySelectorAll('.lang-toggle').forEach((btn) => {
      btn.querySelectorAll('[data-lang]').forEach((s) => {
        s.classList.toggle('is-active', s.dataset.lang === activeLang);
      });
      const nextLangLabel = activeLang === 'es' ? t('a11y.langToggleToEn') : t('a11y.langToggleToEs');
      btn.setAttribute('aria-label', nextLangLabel || t('a11y.langToggle'));
      btn.setAttribute('title', nextLangLabel || t('a11y.langToggle'));
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
    document.querySelectorAll('[data-mobile-menu]').forEach((nav) => {
      nav.setAttribute('aria-label', t('a11y.mobileNav'));
    });

    document.querySelectorAll('[data-demo-name]').forEach((el) => {
      const name = el.getAttribute('data-demo-name');
      if (!name) return;
      const base = (i18n[activeLang] && i18n[activeLang]['a11y.demo'])
        || (i18n.es && i18n.es['a11y.demo'])
        || (activeLang === 'en' ? 'Open demo' : 'Abrir demo');
      el.setAttribute('aria-label', `${base}: ${name}`);
    });

    updateWhatsAppFabLink(activeLang);
    updatePageMetadata(activeLang);
  }

  function updatePageMetadata(lang) {
    const pageId = getPageId();
    const pageMeta = {
      home: {
        title: 'meta.home.title',
        description: 'meta.home.description',
        imageAlt: 'meta.home.title',
      },
      work: {
        title: 'meta.work.title',
        description: 'meta.work.description',
        imageAlt: 'meta.work.title',
      },
      about: {
        title: 'meta.about.title',
        description: 'meta.about.description',
        imageAlt: 'meta.about.title',
      },
      contact: {
        title: 'meta.contact.title',
        description: 'meta.contact.description',
        imageAlt: 'meta.contact.title',
      },
      process: {
        title: 'meta.process.title',
        description: 'meta.process.description',
        imageAlt: 'meta.process.title',
      },
      faq: {
        title: 'meta.faq.title',
        description: 'meta.faq.description',
        imageAlt: 'meta.faq.title',
      },
      'case-cucu': {
        title: 'meta.case.cucu.title',
        description: 'meta.case.cucu.description',
        imageAlt: 'alt.case.cucu.meta',
      },
      'case-luco': {
        title: 'meta.case.luco.title',
        description: 'meta.case.luco.description',
        imageAlt: 'alt.case.luco.meta',
      },
      'case-sellink': {
        title: 'meta.case.sellink.title',
        description: 'meta.case.sellink.description',
        imageAlt: 'alt.case.sellink.meta',
      },
      'case-cognition': {
        title: 'meta.case.cognition.title',
        description: 'meta.case.cognition.description',
        imageAlt: 'alt.case.cognition.meta',
      },
    }[pageId];

    if (!pageMeta) return;

    const strings = i18n[lang] || i18n.es;
    const title = strings && strings[pageMeta.title];
    const description = strings && strings[pageMeta.description];
    const imageAlt = strings && strings[pageMeta.imageAlt];

    if (title) document.title = title;

    if (!description) return;

    const selectors = [
      'meta[name="description"]',
      'meta[property="og:description"]',
      'meta[name="twitter:description"]',
    ];

    selectors.forEach((selector) => {
      const meta = document.querySelector(selector);
      if (meta) meta.setAttribute('content', description);
    });

    const titleSelectors = [
      'meta[property="og:title"]',
      'meta[name="twitter:title"]',
    ];

    titleSelectors.forEach((selector) => {
      const meta = document.querySelector(selector);
      if (meta && title) meta.setAttribute('content', title);
    });

    const imageAltSelectors = [
      'meta[property="og:image:alt"]',
      'meta[name="twitter:image:alt"]',
    ];

    imageAltSelectors.forEach((selector) => {
      const meta = document.querySelector(selector);
      if (meta && imageAlt) meta.setAttribute('content', imageAlt);
    });
  }

  function setupLang() {
    applyLang(getLang());
    const allowLangToggle = pageSupportsLangToggle();
    document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
      btn.hidden = !allowLangToggle;
      if (!allowLangToggle) return;
      btn.addEventListener('click', () => {
        const next = getLang() === 'es' ? 'en' : 'es';
        setLang(next);
        applyLang(next);
      });
    });
  }

  /* ---------- Theme ---------- */
  // Dark es el tema por defecto del sitio, sin importar la preferencia del SO.
  // Solo un override manual guardado en localStorage puede cambiarlo.
  function getDefaultTheme() {
    return 'dark';
  }

  function setupTheme() {
    if (cachedTheme == null) {
      cachedTheme = storageGet('rc-theme', null) || getDefaultTheme();
    }
    document.documentElement.setAttribute('data-theme', cachedTheme);
    document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(cachedTheme === 'dark'));
      btn.addEventListener('click', () => {
        document.documentElement.classList.add('theme-anim');
        cachedTheme = cachedTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', cachedTheme);
        storageSet('rc-theme', cachedTheme);
        btn.setAttribute('aria-pressed', String(cachedTheme === 'dark'));
        window.setTimeout(() => document.documentElement.classList.remove('theme-anim'), 220);
      });
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
    const lang = resolveLang(getLang());
    if (!href) return { num: '01', name: lang === 'en' ? 'Home' : 'Inicio' };

    let normalizedPath = '';
    try {
      normalizedPath = new URL(href, window.location.href).pathname.toLowerCase();
    } catch (e) {
      normalizedPath = href.toLowerCase();
    }

    normalizedPath = normalizedPath.replace(/\/+/g, '/');
    if (normalizedPath.length > 1) normalizedPath = normalizedPath.replace(/\/$/, '');

    const matches = [
      { paths: ['/', '/index.html'], num: '01', es: 'Inicio', en: 'Home' },
      { paths: ['/work', '/work.html'], num: '02', es: 'Trabajos', en: 'Work' },
      { paths: ['/about', '/about.html'], num: '03', es: 'Sobre mí', en: 'About' },
      { paths: ['/contact', '/contact.html'], num: '04', es: 'Contacto', en: 'Contact' },
      { paths: ['/process', '/process.html'], num: '05', es: 'Proceso', en: 'Process' },
      { paths: ['/faq', '/faq.html'], num: '06', es: 'FAQ', en: 'FAQ' },
      { paths: ['/case/cucu', '/case/cucu.html'], num: '02·1', es: 'Cucú Studio', en: 'Cucú Studio' },
      { paths: ['/case/luco', '/case/luco.html'], num: '02·2', es: 'Luco Gourmet', en: 'Luco Gourmet' },
      { paths: ['/case/sellink', '/case/sellink.html'], num: '02·3', es: 'Sellink Group', en: 'Sellink Group' },
      { paths: ['/case/cognition', '/case/cognition.html'], num: '02·4', es: 'Cognition', en: 'Cognition' },
      { paths: ['/privacy', '/privacy.html'], num: '—', es: 'Privacidad', en: 'Privacy' },
      { paths: ['/terms', '/terms.html'], num: '—', es: 'Términos', en: 'Terms' },
    ];
    for (const m of matches) {
      if (m.paths.includes(normalizedPath)) {
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
        if (
          !href
          || href.startsWith('#')
          || href.startsWith('mailto:')
          || href.startsWith('tel:')
          || a.target === '_blank'
          || a.hasAttribute('download')
          || e.defaultPrevented
          || e.button !== 0
          || e.metaKey
          || e.ctrlKey
          || e.shiftKey
          || e.altKey
        ) return;
        e.preventDefault();
        const meta = pageMetaFromHref(href);
        const numEl = overlay.querySelector('.page-transition__num');
        const nameEl = overlay.querySelector('.page-transition__name');
        if (numEl) numEl.textContent = meta.num;
        if (nameEl) nameEl.textContent = meta.name;
        overlay.classList.add('is-active', 'is-in');
        setTimeout(() => { window.location.href = a.href || href; }, 700);
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
    const hintText = () => t('contact.form.hint');
    const openingText = (emailTarget) => {
      const template = t('contact.form.opening_note')
        || (getLang() === 'en'
          ? 'Your email app is opening. If it does not, write to {email}.'
          : 'Se está abriendo tu cliente de correo. Si no se abre, escribime a {email}.');
      return template.replace('{email}', emailTarget);
    };
    const syncNote = () => {
      if (!note) return;
      if (note.dataset.noteState === 'opening') {
        note.textContent = openingText(form.dataset.email || 'ronycozzi5@gmail.com');
        return;
      }
      note.dataset.noteState = 'hint';
      note.textContent = hintText();
    };

    // Provide initial hint in the live region so SR users have context
    if (note && !note.textContent) syncNote();

    // Clear aria-invalid on input
    form.querySelectorAll('input, textarea, select').forEach((field) => {
      field.addEventListener('input', () => field.removeAttribute('aria-invalid'));
      field.addEventListener('change', () => field.removeAttribute('aria-invalid'));
    });

    document.querySelectorAll('[data-lang-toggle]').forEach((toggle) => {
      toggle.addEventListener('click', () => {
        setTimeout(syncNote, 0);
      });
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
      if (btnText) btnText.textContent = t('contact.form.opening_btn') || (getLang() === 'en' ? 'Opening email…' : 'Abriendo email…');
      if (note) {
        note.dataset.noteState = 'opening';
        note.textContent = openingText(emailTarget);
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
        if (btnText) btnText.textContent = t('contact.form.send') || originalText || (getLang() === 'en' ? 'Send message' : 'Enviar mensaje');
        if (note) note.dataset.noteState = 'hint';
        syncNote();
      }, 900);
    });
  }

  /* ---------- Skip link a11y (CSS-driven, no JS needed) ---------- */
  /* The skip link is fully styled via .skip-link:focus / :focus-visible. */

  /* ---------- Active nav ---------- */
  function setupActiveNav() {
    const currentPath = normalizeRoutePath(window.location.pathname);
    const isCase = currentPath.startsWith('/case/');

    document.querySelectorAll('.nav a, [data-mobile-menu] a').forEach((a) => {
      const href = a.getAttribute('href') || '';
      if (!href || /^(#|mailto:|tel:)/i.test(href)) return;
      let targetPath = '';
      try {
        targetPath = normalizeRoutePath(new URL(href, window.location.href).pathname);
      } catch (err) {
        targetPath = normalizeRoutePath(href);
      }
      const isActive = targetPath === currentPath || (isCase && targetPath === '/work');
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
    setupLocalRouteFallback();
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

  // Skip SW on local/dev origins to avoid stale caches and cross-port audit noise.
  const isLocalOrigin = location.protocol === 'file:' || ['localhost', '127.0.0.1', '::1', '[::1]'].includes(location.hostname);

  // Service Worker registration
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      if (isLocalOrigin) {
        navigator.serviceWorker.getRegistrations()
          .then((registrations) => Promise.all(registrations.map((registration) => registration.unregister())))
          .catch(() => {});
        return;
      }
      let refreshing = false;
      const hadController = Boolean(navigator.serviceWorker.controller);
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (refreshing || !hadController) return;
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
