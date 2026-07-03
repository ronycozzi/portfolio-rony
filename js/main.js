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
      'hero.eyebrow': "Desarrollo full stack · UI · Performance",
      'hero.title1': "Diseño que",
      'hero.title2': "comunica.",
      'hero.title3': "Código que sostiene.",
      'hero.intro': "Construyo sitios, landings e integraciones web rápidas, accesibles y mantenibles para marcas que necesitan presencia digital con identidad y criterio técnico.",
      'hero.cta': 'Ver proyectos',
      'hero.cta2': "Empezar proyecto",
      'hero.trust1': "Respuesta < 24h",
      'hero.trust2': "SEO técnico incluido",
      'hero.trust3': "Deploy limpio",
      'hero.trust4': "Remoto · GMT-3",
      'hero.scroll': 'Scroll',
      'hero.fact.services': 'Servicios',
      'hero.fact.services_val': 'Sitios · APIs · Landings',
      'hero.fact.response': 'Respuesta',
      'hero.fact.response_val': '< 24h',
      'hero.fact.langs': 'Idiomas',
      'hero.fact.modality': 'Modalidad',
      'hero.fact.modality_val': 'Remoto · GMT-3',
      'hero.facts.quick': 'Datos rápidos',
      'signals.aria': "Señales rápidas",
      'signals.s1': "< 24h",
      'signals.l1': "Respuesta",
      'signals.l2': "Deploy",
      'signals.s3': "SEO técnico",
      'signals.l3': "Incluido",
      'signals.l4': "Responsive real",
      'signals.s5': "4 demos en vivo",
      'signals.s6': "Soporte",
      'signals.l6': "Post-entrega",
      'featured.copy': "Proyectos publicados con foco en identidad, velocidad, estructura y conversión.",
      'featured.cta': 'Explorar trabajos',
      'featured.index_aria': "Casos de estudio",
      'featured.heading1': 'Trabajos',
      'featured.heading2': 'seleccionados.',
      'featured.eyebrow': '[ Destacado · 2026 ]',
      'problem.eyebrow': "[ El problema ]",
      'problem.title1': "Una web no alcanza",
      'problem.title2': "con verse bien.",
      'problem.copy': "También tiene que cargar rápido, guiar al usuario, adaptarse al contenido, funcionar en mobile, ser indexable y mantenerse sin volverse un problema.",
      'problem.c1.title': "Diseño sin objetivo",
      'problem.c1.desc': "Se ve correcto, pero no guía al usuario hacia una acción clara.",
      'problem.c2.title': "Sitios lentos",
      'problem.c2.desc': "Imágenes pesadas, scripts innecesarios y mala estructura afectan conversión y SEO.",
      'problem.c3.title': "Código difícil de mantener",
      'problem.c3.desc': "Cada cambio se vuelve costoso porque no hay componentes, estructura ni criterio técnico.",
      'problem.c4.title': "Formularios débiles",
      'problem.c4.desc': "El usuario consulta, pero el negocio no recibe ni procesa bien esa información.",
      'problem.c5.title': "SEO técnico incompleto",
      'problem.c5.desc': "Sin metadata, schema, sitemap, semántica y performance, el sitio pierde visibilidad.",
      'problem.close': "Mi trabajo es unir diseño, código y estrategia para que la web funcione como una herramienta real, no solo como presencia online.",
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
      'services.copy': "Cuatro formas de trabajar según el alcance: una landing rápida, un sitio completo, integraciones full stack o mejora de lo que ya tenés online.",
      'services.s1.title': "Landing de conversión",
      'services.s1.tag': "Página única",
      'services.s1.desc': "Para lanzamientos, campañas, servicios puntuales o captación de leads. Una página enfocada en una sola acción, rápida y medible.",
      'services.s1.i1': "Diseño y desarrollo",
      'services.s1.i2': "Copy base orientado a conversión",
      'services.s1.i3': "Formulario o WhatsApp conectado",
      'services.s1.i4': "SEO técnico básico + performance mobile",
      'services.s1.ideal': "Ideal si necesitás publicar rápido una página enfocada en una acción.",
      'services.s1.cta': "Consultar landing",
      'services.s2.title': "Sitio web completo",
      'services.s2.tag': "Proyecto completo",
      'services.s2.desc': "Para marcas, estudios, profesionales y negocios que necesitan presencia completa: arquitectura, diseño, desarrollo y deploy con SEO y accesibilidad de base.",
      'services.s2.i1': "Arquitectura de información + diseño responsive",
      'services.s2.i2': "Desarrollo frontend y páginas principales",
      'services.s2.i3': "SEO técnico, metadata y Open Graph",
      'services.s2.i4': "Deploy en Vercel + documentación",
      'services.s2.ideal': "Ideal si necesitás un sitio profesional que puedas mostrar, posicionar y mantener.",
      'services.s2.cta': "Consultar sitio web",
      'services.s3.title': "Full stack ligero",
      'services.s3.tag': "Integraciones",
      'services.s3.desc': "Para proyectos que necesitan que la web haga más que verse bien: formularios, APIs, datos, paneles simples o automatizaciones.",
      'services.s3.i1': "APIs y serverless functions",
      'services.s3.i2': "Formularios conectados + email transaccional",
      'services.s3.i3': "Supabase, Firebase o Airtable",
      'services.s3.i4': "Webhooks, auth simple y paneles básicos",
      'services.s3.ideal': "Ideal si necesitás que tu web procese información, guarde datos o se conecte con otras herramientas.",
      'services.s3.cta': "Consultar integración",
      'services.s4.title': "Optimización y mantenimiento",
      'services.s4.tag': "Mejora continua",
      'services.s4.desc': "Para webs ya publicadas que necesitan mejorar velocidad, SEO, accesibilidad o corregir errores sin rehacer todo.",
      'services.s4.i1': "Auditoría técnica con reporte real",
      'services.s4.i2': "Performance y accesibilidad",
      'services.s4.i3': "SEO técnico y fixes",
      'services.s4.i4': "Monitoreo y soporte mensual",
      'services.s4.ideal': "Ideal si tu web ya existe pero no rinde como debería.",
      'services.s4.cta': "Mejorar mi web",
      'services.note.title': "Cuándo no soy la mejor opción.",
      'services.note.p1': "Prefiero decirlo al principio: no soy la mejor opción si necesitás una app nativa, un backend corporativo complejo, un equipo dedicado 40 horas por semana o una plataforma con muchas reglas de negocio avanzadas.",
      'services.note.p2': "Si el proyecto supera mi alcance, puedo ayudarte a dimensionarlo o recomendar otro camino.",
      'services.more': "Ver servicios en detalle",
      'contactCard.eyebrow': '[ Contacto directo ]',
      'contactCard.title': "¿Tenés una web para lanzar,<br/>mejorar o reconstruir?",
      'contactCard.copy': "Contame qué necesitás lograr y te respondo con el camino más claro para avanzar.",
      'contactCard.btn': "Empezar proyecto",
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
      'proc.eyebrow': "[ Proceso ]",
      'proc.title1': "De la primera llamada",
      'proc.title2': "al sitio publicado.",
      'proc.copy': "Un proceso claro para definir alcance, validar estructura, diseñar, desarrollar, revisar y entregar sin sorpresas.",
      'proc.more': "Ver el proceso completo",
      'home.fit.eyebrow': "[ Para quién ]",
      'home.fit.title': "Para quién trabajo.",
      'home.fit.who': "Trabajo con",
      'home.fit.w1': "Marcas y estudios que necesitan presencia con identidad.",
      'home.fit.w2': "Emprendedores y profesionales que lanzan un producto o servicio.",
      'home.fit.w3': "Negocios que quieren convertir visitas en consultas.",
      'home.fit.w4': "Equipos de producto que buscan un perfil full stack remoto.",
      'home.fit.stack': "Capacidades",
      'quality.eyebrow': "[ Calidad ]",
      'quality.title1': "Todo proyecto",
      'quality.title2': "incluye.",
      'quality.q1': "SEO técnico: metadata, Open Graph, schema y sitemap",
      'quality.q2': "Accesibilidad base WCAG: semántica, foco visible y contraste",
      'quality.q3': "Mobile-first y responsive real en todos los quiebres",
      'quality.q4': "Performance: imágenes optimizadas, carga diferida y CLS estable",
      'quality.q5': "Formulario o WhatsApp conectado para recibir consultas",
      'quality.q6': "Deploy en Vercel con dominio configurado",
      'quality.q7': "Documentación breve para mantener el sitio",
      'quality.q8': "Soporte post-entrega para ajustes",
      'faqmini.title': "Preguntas frecuentes.",
      'faqmini.more': "Ver todas las preguntas",
      'work.years': 'Años',
      'work.role': 'Rol',
      'work.role.value': 'Desarrollo full stack',
      'work.status': 'Estado',
      'work.status_val': "4 demos · en vivo",
      'work.hint': 'Deslizá',
      'work.visit': 'Ver caso de estudio',
      'work.eyebrow': '[ Índice · 04 proyectos ]',
      'work.lead': "Proyectos publicados con foco en identidad, velocidad, estructura y conversión.",
      'work.meta.problem': "Problema",
      'work.meta.solution': "Solución",
      'work.meta.role': "Rol",
      'work.meta.result': "Resultado",
      'case.back': 'Volver a trabajos',
      'work.cucu.desc': "Proyecto de demostración: sitio para un estudio creativo. Tipografía editorial, animaciones por scroll y micro-interacciones.",
      'work.cucu.problem': "Un estudio creativo necesita presencia visual con carácter y navegación simple para mostrar identidad, servicios y contacto.",
      'work.cucu.solution': "Sitio editorial con animaciones por scroll, microinteracciones y estructura clara para convertir visitas en consultas.",
      'work.cucu.role': "Diseño y desarrollo completos.",
      'work.cucu.result': "Sitio liviano en vivo, navegación simple e identidad digital sólida.",
      'work.cucu.eyebrow': '— Estudio creativo',
      'work.luco.desc': "Proyecto de demostración: sitio para una marca gastronómica. PWA con menú offline, Schema.org y carga sub-segundo en Lighthouse (lab).",
      'work.luco.problem': "Una marca gastronómica necesita una carta digital mobile-first, accesible desde cualquier celular.",
      'work.luco.solution': "PWA con menú offline, Schema.org, prioridad móvil y carga optimizada.",
      'work.luco.role': "Diseño y desarrollo completos.",
      'work.luco.result': "Menú rápido, instalable y usable sin conexión.",
      'work.luco.eyebrow': '— Comedor & mercado',
      'work.sellink.desc': "Proyecto de demostración: sitio corporativo. Estructura modular, presentación de servicios y formularios accesibles.",
      'work.sellink.problem': "Una agencia necesita presentar servicios, marca y contacto con estética oscura y estructura modular.",
      'work.sellink.solution': "Sitio corporativo con secciones reutilizables, formularios accesibles y sistema visual dark.",
      'work.sellink.role': "Diseño y desarrollo completos.",
      'work.sellink.result': "Presentación profesional y escalable para servicios creativos.",
      'work.sellink.eyebrow': '★ Agencia creativa',
      'work.sellink.thumb': 'Marca · Web · Digital',
      'work.cognition.desc': "Proyecto de demostración: plataforma de IA para empresas. 11 páginas, calculadora ROI, chat basado en intención y PWA.",
      'work.cognition.problem': "Comunicar una propuesta compleja de IA de forma entendible y accionable.",
      'work.cognition.solution': "Plataforma de 11 páginas con calculadora ROI, chat basado en intención y PWA.",
      'work.cognition.role': "Diseño y desarrollo completos.",
      'work.cognition.result': "Sitio completo para explicar IA, captar intención y guiar usuarios.",
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
      'about.lead': "Trabajo en la intersección entre diseño, código y estrategia. Mi objetivo no es solo publicar una web: es construir una presencia digital que cargue rápido, comunique bien y sea fácil de sostener en el tiempo.",
      'about.fit.eyebrow': "[ Encaje ]",
      'about.fit.title': "Cuándo puedo ayudarte — y cuándo no.",
      'about.fit.yes': "Soy buena opción si necesitás",
      'about.fit.y1': "Un sitio, landing o integración web con identidad, rápido y mantenible.",
      'about.fit.y2': "SEO técnico, accesibilidad y performance desde el primer commit.",
      'about.fit.y3': "Comunicación directa, alcance claro y entregas sin sorpresas.",
      'about.fit.y4': "Un perfil full stack para un equipo de producto remoto.",
      'about.fit.no': "No soy la mejor opción si necesitás",
      'about.fit.n1': "Una app nativa iOS/Android.",
      'about.fit.n2': "Un backend corporativo complejo con muchas reglas de negocio.",
      'about.fit.n3': "Un equipo dedicado de 40 horas semanales desde el día uno.",
      'about.fit.note': "Si el proyecto supera mi alcance, puedo ayudarte a dimensionarlo o recomendar otro camino.",
      'about.bio.heading': 'Bio',
      'about.bio.p1': 'Desarrollador full stack con foco fuerte en frontend, performance e integraciones web. Construyo sitios accesibles, rápidos y mantenibles con HTML, CSS, JavaScript, TypeScript, React, Node.js y SQL básico cuando el proyecto lo necesita.',
      'about.bio.p2': "Trabajo de forma autónoma, con código limpio, tiempos cortos y comunicación directa. Puedo resolver desde una landing hasta formularios conectados, APIs ligeras, paneles simples y automatizaciones de contacto.",
      'about.bio.p3': "Disponible para roles full-time en equipos de producto, colaboraciones remotas y proyectos puntuales.",
      'about.facts.role': 'Rol',
      'about.facts.role_val': 'Desarrollador full stack',
      'about.facts.modality': 'Modalidad',
      'about.facts.modality_val': 'Remoto · GMT-3',
      'about.facts.langs': 'Idiomas',
      'about.facts.status': 'Estado',
      'about.facts.status_val': "Abierto a full-time y freelance",
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
      'contact.heading1': "Contame qué",
      'contact.direct': 'Contacto directo',
      'contact.form.name': 'Nombre',
      'contact.form.subject': 'Asunto',
      'contact.form.message': 'Mensaje',
      'contact.form.send': "Enviar proyecto",
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
      'meta.home.title': "Rony Cozzi | Desarrollador full stack, sitios web y landings",
      'meta.home.description': "Diseño y desarrollo sitios web rápidos, claros y mantenibles: landings, sitios completos e integraciones full stack con foco en performance, SEO técnico y accesibilidad.",
      'meta.work.title': "Trabajos seleccionados | Rony Cozzi",
      'meta.work.description': 'Proyectos full stack de Rony Cozzi: sitios web rápidos, landings, PWAs, integraciones, SEO técnico y experiencias digitales listas para producción.',
      'meta.about.title': 'Sobre mí — Rony Cozzi',
      'meta.about.description': 'Conocé a Rony Cozzi — desarrollador full stack en Argentina. Sitios rápidos, APIs ligeras, integraciones web y experiencias digitales listas para producción.',
      'meta.contact.title': 'Contacto — Rony Cozzi',
      'meta.contact.description': 'Hablemos de tu proyecto. Contactá a Rony Cozzi para sitios full stack, landings, APIs ligeras, integraciones web y desarrollo listo para producción.',
      'meta.process.title': "Proceso de trabajo | Rony Cozzi",
      'meta.process.description': 'Cómo trabajo — proceso full stack de Rony Cozzi: descubrimiento, arquitectura, diseño, frontend, integraciones, QA y puesta en producción.',
      'meta.faq.title': "Preguntas frecuentes | Rony Cozzi",
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
      'case.cucu.p1': "Proyecto de demostración: me propuse resolver el caso típico de un estudio de tatuaje que opera sin presencia web, con toda la captación concentrada en Instagram — un escenario muy común en estudios creativos de Argentina. Cucú Studio es la marca ficticia que diseñé para ese ejercicio.",
      'case.cucu.p2': "El objetivo que me fijé: construir un sitio a la altura visual del rubro — editorial, audaz y rápido. Sin WordPress, sin templates. Todo desde cero.",
      'case.cucu.problem_desc': "Cuando Instagram es el único canal, el visitante no encuentra precios claros, un proceso de reserva definido ni el portafolio completo de los artistas. El demo ataca exactamente esa fricción: estructura, jerarquía visual y un camino directo hacia el contacto.",
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
      'case.luco.p1': "Proyecto de demostración: me propuse resolver el caso típico de un restaurante cuyo menú vive en una imagen o un PDF pesado — lento en móvil, imposible de indexar y frustrante con conexiones inestables en hora pico. Luco Gourmet es la marca ficticia que inventé para ese escenario: pasta artesanal, pizza al molde y vermut de bodegón.",
      'case.luco.p2': "La respuesta: una PWA instalable con menú offline, datos estructurados para Google y carga sub-segundo en 3G simulado (lab data).",
      'case.luco.problem_desc': "El escenario a resolver es conocido: sitios gastronómicos que tardan varios segundos en cargar en móvil, menús en JPG que se actualizan a mano y clientes que terminan pidiendo la carta por WhatsApp. El demo ataca cada uno de esos puntos con decisiones verificables en el sitio publicado.",
      'case.luco.solution_desc': "Construcción desde cero con foco en rendimiento y PWA. Menú dinámico desde un archivo JSON versionado, datos estructurados Schema.org para restaurantes, Service Worker con estrategia offline-first para el menú e instalación nativa en la pantalla de inicio.",
      'case.luco.tech1.title': 'PWA completa',
      'case.luco.tech1.desc': 'Service Worker con estrategia cache-first para CSS/JS e imágenes, y network-first con fallback offline para el menú JSON. <code>manifest.json</code> con iconos maskable. Aviso de instalación personalizado.',
      'case.luco.tech2.title': 'Schema.org para restaurantes',
      'case.luco.tech2.desc': 'JSON-LD con <code>Restaurant</code>, <code>OpeningHoursSpecification</code>, <code>Menu</code> y <code>GeoCoordinates</code>. Marcado validado con el Test de Resultados Enriquecidos de Google.',
      'case.luco.tech3.title': 'Performance extrema',
      'case.luco.tech3.desc': "Critical CSS inlineado en <code>&lt;head&gt;</code>. Font preload para Inter 400/500. Imágenes en WebP con <code>width</code>/<code>height</code> explícitos. Total page weight &lt;200KB. LCP &lt;900ms en 3G lento simulado (Lighthouse, lab data).",
      'case.luco.tech4.title': 'Menú actualizable',
      'case.luco.tech4.desc': "Menú almacenado en <code>menu.json</code> versionado. Quien administre el sitio edita un archivo, hace push y Vercel redeploya en segundos. Sin CMS, sin suscripción mensual, sin interfaz que romper.",
      'case.luco.tech5.title': 'SEO local',
      'case.luco.tech5.desc': 'Títulos y descripciones únicos por sección. Sitemap con prioridad diferenciada. Métricas de Lighthouse en verde (lab data).',
      'case.luco.tech6.title': 'Formulario de reservas',
      'case.luco.tech6.desc': 'Formulario de contacto estático con validación HTML5 + JS custom, pensado para derivar consultas por email o WhatsApp sin backend propio ni costo adicional.',
      'case.luco.stack8': 'Formulario estático',
      'case.sellink.tag1': 'Agencia',
      'case.sellink.tag2': 'Corporativo',
      'case.sellink.cover_alt': 'Portada de Sellink Group — fondo oscuro, acento rojo y layout de servicios',
      'case.sellink.p1': "Proyecto de demostración: me propuse resolver el caso típico de una agencia creativa que necesita una web corporativa a la altura de su trabajo — un rubro donde abundan las plantillas genéricas sin personalidad ni diferenciación. Sellink Group es la marca ficticia que construí para ese ejercicio.",
      'case.sellink.p2': "El brief que me fijé fue claro: oscuro, audaz, con sensación de diseño a medida sin volverse difícil de mantener. Que transmita una agencia de nivel senior desde el primer recorrido.",
      'case.sellink.problem_desc': "El patrón que quería atacar: plantillas de constructores visuales lentas, sin adaptación móvil real, sin modo oscuro nativo ni identidad coherente. Una agencia que vende diseño no puede permitirse un sitio que contradiga su propio discurso — ese fue el punto de partida del demo.",
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
      'case.sellink.tech5.desc': "Hoja de estilos <code>@media print</code> que oculta nav, cursor, animaciones y background. Imprime en blanco con tipografía legible. Pensada para el escenario en que una propuesta se imprime con el sitio como referencia.",
      'case.sellink.tech6.title': 'Contraste WCAG AA',
      'case.sellink.tech6.desc': 'Rojo <code>#FF3300</code> sobre negro <code>#070707</code> con ratio 5.4:1 — pasa <strong>AA</strong> para texto normal. Texto en blanco <code>#EDEDED</code> sobre el fondo principal alcanza ratio &gt;15:1. Verificado con Colour Contrast Analyser.',
      'case.cognition.title2': 'Plataforma IA',
      'case.cognition.tag1': 'Plataforma IA',
      'case.cognition.tag2': 'Empresas',
      'case.cognition.stat1': 'Páginas',
      'case.cognition.cover_alt': 'Portada de Cognition — hero con interfaz tipo terminal y acentos cian',
      'case.cognition.p1': "Proyecto de demostración: me propuse resolver el caso típico de una plataforma de IA para empresas cuyo sitio es una demo pesada construida en un framework — lenta en móvil y sin SEO. Cognition es el producto ficticio que diseñé para ese ejercicio: explicar una tecnología compleja a una audiencia no técnica y construir un embudo de conversión creíble.",
      'case.cognition.p2': 'El proyecto más complejo del portfolio: 11 páginas interrelacionadas, calculadora de ROI en JS puro, un chat basado en intención para calificar leads, animaciones de datos en tiempo real y PWA instalable.',
      'case.cognition.problem_desc': "El anti-patrón que quería demostrar cómo evitar: sitios de producto construidos como SPA con bundles de varios MB, sin SEO ni datos estructurados, donde la página pesa más que el argumento de venta. El demo muestra la alternativa: el embudo completo en vanilla JS liviano.",
      'case.cognition.solution_desc': "Construcción íntegra en vanilla JS. Arquitectura multi-página con ruteo a medida. Calculadora de ROI que persiste en sessionStorage. Chat con 12 intenciones mapeadas para calificar consultas antes del formulario. Service Worker con caché estratégico por tipo de recurso.",
      'case.cognition.tech1.title': 'Calculadora de ROI',
      'case.cognition.tech1.desc': 'Calculadora interactiva en JS puro con inputs deslizantes y resultado animado. Persiste en <code>sessionStorage</code> para que el usuario no pierda sus datos al navegar entre páginas. El resultado completa automáticamente el formulario de demo.',
      'case.cognition.tech2.title': 'Chat basado en intención',
      'case.cognition.tech2.desc': 'Widget de chat sin dependencias externas. 12 intenciones mapeadas (precios, integraciones, seguridad, demo, etc.). Respuestas en árbol de decisión. Cuando el usuario pide una demo, el formulario conserva el contexto de la conversación.',
      'case.cognition.tech3.title': 'Service Worker',
      'case.cognition.tech3.desc': 'Precaching del shell en instalación. Estrategia network-first para páginas HTML y caché primero para assets. Versionado por hash para invalidar caché en cada despliegue. Funcionamiento offline con fallback de error a medida.',
      'case.cognition.tech4.title': 'Animaciones de datos',
      'case.cognition.tech4.desc': 'Canvas API para animaciones de red neuronal en hero. <code>requestAnimationFrame</code> con throttle a 30fps. Pausa automática con <code>IntersectionObserver</code> cuando el canvas sale del viewport. Fallback SVG estático para <code>prefers-reduced-motion</code>.',
      'case.cognition.tech5.title': 'Schema.org SaaS',
      'case.cognition.tech5.desc': '<code>SoftwareApplication</code> con <code>applicationCategory: "BusinessApplication"</code>. <code>Offer</code> para pricing. <code>FAQPage</code> en la página de preguntas. <code>BreadcrumbList</code> en todas las páginas secundarias. Marcado validado con el Test de Resultados Enriquecidos de Google.',
      'case.cognition.tech6.title': 'Rendimiento en 11 páginas',
      'case.cognition.tech6.desc': 'CSS compartido en un solo archivo con lazy-loading de secciones. JS modularizado por feature con dynamic import. Total bundle: 38KB JS + 24KB CSS comprimidos. LCP de 2.1s en 3G lento simulado, medido en Lighthouse (lab data).',
      'process.eyebrow': '[ Proceso de trabajo ]',
      'process.title1': "De la primera llamada",
      'process.title2': "al sitio publicado.",
      'process.lead': "Un proceso claro para definir alcance, validar estructura, diseñar, desarrollar, revisar y entregar sin sorpresas.",
      'process.step1.title': 'Briefing y alcance',
      'process.step1.duration': '1–2 días',
      'process.step1.desc': 'Una llamada de 30–60 minutos para entender qué necesitás, quién es tu audiencia y qué querés lograr con el sitio. Tomo notas, hago preguntas incómodas y al final del proceso tenés un documento con el alcance definido: qué incluye el proyecto, qué no incluye y cuánto cuesta.',
      'process.meta.dur': "Duración",
      'process.meta.del': "Entregable",
      'process.meta.avoid': "Evita",
      'process.step1.dur': "1–2 días",
      'process.step1.del': "Documento de alcance, presupuesto cerrado y cronograma",
      'process.step1.avoid': "Arrancar sin dirección ni presupuesto cerrado",
      'process.step1.del1': 'Documento de alcance',
      'process.step1.del2': 'Presupuesto cerrado',
      'process.step1.del3': 'Cronograma acordado',
      'process.step2.title': 'Arquitectura y wireframes',
      'process.step2.duration': '2–4 días',
      'process.step2.desc': 'Defino la arquitectura de información, el flujo de páginas y los wireframes de baja fidelidad. Te muestro la estructura antes de tocar diseño visual para validar que tenemos la información correcta en el lugar correcto.',
      'process.step2.dur': "2–4 días",
      'process.step2.del': "Sitemap, wireframes y flujos de usuario",
      'process.step2.avoid': "Rediseñar la estructura a mitad del proyecto",
      'process.step2.del1': 'Sitemap',
      'process.step2.del2': 'Wireframes de baja fidelidad',
      'process.step2.del3': 'Flujos de usuario',
      'process.step3.title': 'Diseño',
      'process.step3.duration': '3–7 días',
      'process.step3.desc': 'Diseño visual de las pantallas principales en Figma. Sistema de tokens, tipografía, espaciado y color. Iteración hasta que el look refleje la marca y resuelva el contenido.',
      'process.step3.dur': "3–7 días",
      'process.step3.del': "Diseño final en Figma, tokens y una ronda de revisión",
      'process.step3.avoid': "Programar sobre un diseño que nadie validó",
      'process.step3.del1': 'Diseño final en Figma',
      'process.step3.del2': 'Tokens de diseño',
      'process.step3.del3': '1 ronda de revisión',
      'process.step4.title': 'Desarrollo',
      'process.step4.duration': '5–14 días',
      'process.step4.desc': 'Construcción del sitio con HTML, CSS y JavaScript modernos. Foco en performance, accesibilidad y SEO técnico desde el primer commit. Vistas previas por rama en Vercel para que veas el progreso.',
      'process.step4.dur': "5–14 días según alcance",
      'process.step4.del': "Sitio funcionando en preview de Vercel + repo en GitHub",
      'process.step4.avoid': "Avanzar a ciegas sin ver el progreso real",
      'process.step4.del1': 'Repo en GitHub',
      'process.step4.del2': 'Preview en Vercel',
      'process.step4.del3': 'APIs / integraciones si hacen falta',
      'process.step5.title': 'QA y revisión',
      'process.step5.duration': '1–2 días',
      'process.step5.desc': 'Antes de llamarlo "listo" pasa por una lista de control de más de 60 puntos: Lighthouse, navegación por teclado, móviles reales (iOS Safari + Android Chrome), formularios, links rotos, integraciones, estados de error y hoja de estilos de impresión. Comparto el reporte con los puntajes reales.',
      'process.step5.dur': "1–2 días",
      'process.step5.del': "Reporte QA con los puntajes reales de Lighthouse",
      'process.step5.avoid': "Publicar con errores que descubre tu cliente",
      'process.step5.del1': 'Reporte QA',
      'process.step5.del2': 'Auditoría Lighthouse',
      'process.step5.del3': 'Ajustes finales',
      'process.step6.title': 'Deploy y entrega',
      'process.step6.duration': '1 día',
      'process.step6.desc': 'Puesta en producción con tu dominio, DNS configurado y HTTPS activo. Te entrego: acceso al repo en GitHub, acceso al proyecto desplegado, el PDF de documentación técnica y una grabación de Loom explicando cómo actualizar contenido básico por tu cuenta. Soporte de 30 días incluido.',
      'process.step6.dur': "1 día",
      'process.step6.del': "Sitio en producción, accesos, documentación y 30 días de soporte",
      'process.step6.avoid': "Quedar atado a tu desarrollador para cada cambio",
      'process.step6.del1': 'Dominio configurado + SSL',
      'process.step6.del2': 'Accesos a todos los servicios',
      'process.step6.del3': 'Documentación técnica',
      'process.step6.del4': '30 días de soporte',
      'process.cta.title': '¿Empezamos?',
      'process.cta.copy': 'Contame en qué estás trabajando. Sin compromiso — la primera llamada es gratis.',
      'process.cta.link': "Empezar proyecto",
      'faq.eyebrow': '[ FAQ — Preguntas frecuentes ]',
      'faq.title1': 'Todo lo que',
      'faq.title2': 'querés <em>saber.</em>',
      'faq.cat1': "Proyecto",
      'faq.cat2': "Servicios",
      'faq.cat3': "Trabajo y pagos",
      'faq.q1': '¿Cuánto tarda un proyecto web?',
      'faq.a1': "<p><strong>Una web completa: 2–4 semanas. Una landing: 5–7 días hábiles.</strong></p><p>El plazo depende de tres factores:</p><ul><li>Cantidad de páginas y secciones.</li><li>Integraciones: pagos, formularios, APIs.</li><li>Qué tan rápido llegue el material: textos, fotos y logo.</li></ul><p>En el briefing te doy un cronograma cerrado antes de empezar.</p>",
      'faq.q2': "¿Qué incluye un proyecto?",
      'faq.a2': "<p><strong>Diseño, desarrollo, deploy, una ronda de revisiones y 30 días de soporte post-entrega.</strong></p><p>En concreto:</p><ul><li>Diseño visual y arquitectura de la información.</li><li>Desarrollo completo, optimizado para performance y SEO técnico.</li><li>Puesta en producción con tu dominio y HTTPS.</li><li>Una ronda de revisión estructural antes de la entrega final.</li><li>30 días de soporte para ajustes y correcciones.</li></ul>",
      'faq.q3': '¿Hacés mantenimiento después de entregar?',
      'faq.a3': "<p><strong>Sí. Planes de mantenimiento mensual o arreglos puntuales por hora.</strong></p><p>El plan mensual incluye:</p><ul><li>Actualizaciones de contenido y cambios menores.</li><li>Backups y monitoreo de uptime.</li><li>Corrección de errores.</li></ul><p>Si no querés un plan fijo, hago arreglos puntuales por hora.</p>",
      'faq.q4': '¿Trabajás con marcas fuera de Argentina?',
      'faq.a4': "<p><strong>Sí. Trabajo 100% remoto con clientes de cualquier país.</strong></p><ul><li>Zona horaria GMT-3 (Córdoba, Argentina).</li><li>Disponibilidad para reuniones en horario LATAM y tarde/noche UTC para Europa o Norteamérica.</li><li>Proyectos internacionales: presupuesto y cobro en USD.</li></ul>",
      'faq.q5': '¿Hacés ecommerce?',
      'faq.a5': "<p><strong>Sí: catálogos con checkout integrado (Mercado Pago, Stripe, PayPal).</strong></p><p>Dónde encajo bien y dónde no:</p><ul><li>Catálogo + checkout + pasarela de pagos: lo construyo a medida.</li><li>Cientos de productos, gestión de inventario y lógica de descuentos compleja: te recomiendo evaluar una plataforma dedicada como Shopify o WooCommerce.</li></ul><p>Soy honesto con eso: si tu caso pide plataforma, te lo digo antes de cotizar.</p>",
      'faq.q6': '¿Hacés backend e integraciones?',
      'faq.a6': "<p><strong>Sí. Backend ligero e integraciones son parte del servicio.</strong></p><p>Trabajo con:</p><ul><li>Node.js, JavaScript/TypeScript, APIs REST y serverless functions.</li><li>Formularios conectados, autenticación simple y paneles internos.</li><li>Supabase, Firebase, Airtable, email transaccional, analytics y webhooks.</li></ul><p>Si el proyecto necesita una plataforma grande —roles complejos, pagos recurrentes, inventario— lo dimensionamos bien antes de prometer.</p>",
      'faq.q7': '¿Qué pasa si no me gusta el resultado?',
      'faq.a7': "<p><strong>Hay una revisión mayor antes de la entrega final donde podés pedir cambios estructurales.</strong></p><p>Además:</p><ul><li>Los cambios menores (copy, colores, imágenes) se hacen en cualquier momento del desarrollo.</li><li>Ves el avance real en un preview online, no capturas de pantalla.</li><li>Si el proyecto no va en la dirección correcta, lo hablamos antes de que sea un problema.</li></ul>",
      'faq.q8': "¿Qué medios de pago aceptás?",
      'faq.a8': "<p><strong>Transferencia bancaria, PayPal y, si lo preferís, stablecoins.</strong></p><p>Para clientes en Argentina: transferencia en pesos o USD. Para clientes internacionales: PayPal o transferencia en USD. También acepto USDT/USDC como alternativa para pagos internacionales; si te resulta más práctico, avisame al inicio del proyecto.</p>",
      'faq.q9': '¿En qué se diferencia tu trabajo del de una agencia?',
      'faq.a9': "<p><strong>Hablás directo con quien construye tu sitio, sin intermediarios.</strong></p><p>En una agencia tu proyecto pasa por 4–6 personas. Conmigo:</p><ul><li>Comunicación más rápida, sin teléfono roto.</li><li>Más control sobre las decisiones técnicas.</li><li>Una sola persona responsable de principio a fin.</li></ul><p>La contra: no escalo a diez proyectos en paralelo — por eso trabajo con pocos clientes a la vez.</p>",
      'faq.q10': '¿Cuándo no soy la mejor opción para tu proyecto?',
      'faq.a10': "<p><strong>Cuando el proyecto necesita un equipo, no un desarrollador.</strong></p><p>Probablemente no sea la mejor opción si necesitás:</p><ul><li>Un portal con autenticación compleja y muchos roles de usuario.</li><li>Una app móvil nativa (iOS/Android).</li><li>Un backend corporativo con lógica de negocio pesada o alta concurrencia.</li><li>Un equipo dedicado de 40h/semana exclusivas.</li></ul><p>Para esos casos te lo digo al principio y, si puedo, te recomiendo a alguien.</p>",
      'faq.q11': '¿Necesito saber de tecnología para trabajar con vos?',
      'faq.a11': "<p><strong>No. Mi trabajo es traducir tu objetivo de negocio a decisiones técnicas.</strong></p><p>Vos me contás qué necesitás lograr; yo decido cómo implementarlo y te lo explico en lenguaje humano. No necesitás saber qué es un Service Worker para tener un sitio rápido y bien hecho.</p>",
      'faq.q12': "¿Qué necesito para empezar?",
      'faq.a12': "<p><strong>Una idea clara de qué querés lograr y el material de tu marca. Del resto me encargo yo.</strong></p><p>Lo mínimo para arrancar:</p><ul><li>El objetivo del sitio: vender, captar consultas, mostrar tu trabajo.</li><li>Logo y textos si los tenés — si no, lo resolvemos en el briefing.</li><li>Referencias de sitios que te gustan (opcional, pero ayuda).</li></ul><p>Con eso hacemos la primera llamada y salís con alcance y presupuesto definidos.</p>",
      'faq.q13': "¿Cómo cobrás?",
      'faq.a13': "<p><strong>50% de anticipo al arrancar y 50% al entregar el sitio funcionando.</strong></p><ul><li>Presupuesto cerrado antes de empezar: sabés el total desde el día uno.</li><li>Sin costos sorpresa: si el alcance cambia, se cotiza aparte y lo aprobás vos.</li><li>Para proyectos internacionales, cotizo y cobro en USD.</li></ul>",
      'faq.cta.title': '¿Tenés otra pregunta?',
      'faq.cta.copy': 'Escribime directo — respondo en menos de 24h.',
      'faq.cta.link': 'Ir a contacto',
      'case.demo_badge': "Proyecto de demostración",
      'case.close.num': "[ Cierre ]",
      'case.close.title': "Resultado y aprendizaje",
      'case.close.result': "Resultado",
      'case.close.learn': "Qué aprendí",
      'case.cucu.close_result': "Quedó construido y publicado un sitio editorial de una página, navegable en cucu-studio-demo.vercel.app: galería con carga diferida, sección de artistas, proceso de reserva y contacto directo. Todo lo que afirmo acá se puede verificar contra el demo público.",
      'case.cucu.close_m1': "Lighthouse 98 en móvil (lab data)",
      'case.cucu.close_m2': "LCP por debajo de 1.4 s y CLS 0.02 en laboratorio",
      'case.cucu.close_m3': "Contraste WCAG AA y navegación completa por teclado",
      'case.cucu.close_learn': "Aprendí que las animaciones por scroll sin librerías son viables — IntersectionObserver más CSS cubre casi todos los casos — pero exigen disciplina: cada reveal necesita su fallback para prefers-reduced-motion y para navegadores sin JavaScript.",
      'case.cucu.close_refactor': "Si lo retomara hoy, generaría variantes responsive de las imágenes (srcset) en un paso de build en lugar de servir un único WebP por pieza, y centralizaría los umbrales del observer en un solo módulo configurable.",
      'case.luco.close_result': "El resultado es una PWA publicada en luco-gourmet-demo.vercel.app: instalable, con el menú disponible sin conexión y un peso total de página por debajo de 200 KB. Nada de esto depende de mi palabra — se puede auditar con DevTools sobre el demo.",
      'case.luco.close_m1': "Lighthouse 99 en móvil (lab data)",
      'case.luco.close_m2': "Peso total de página por debajo de 200 KB",
      'case.luco.close_m3': "Menú offline vía Service Worker, instalable como app",
      'case.luco.close_learn': "Este proyecto me obligó a entender de verdad el ciclo de vida del Service Worker: qué estrategia de caché conviene por tipo de recurso y, sobre todo, cómo invalidar caché sin dejar usuarios atrapados en una versión vieja.",
      'case.luco.close_refactor': "Hoy automatizaría el versionado del Service Worker en un paso de build (o usaría Workbox) en lugar de mantenerlo a mano, y agregaría un chequeo automático que falle si el peso de página supera el presupuesto de 200 KB.",
      'case.sellink.close_result': "Quedó publicado en sellink-group-demo.vercel.app un sitio corporativo modular: tokens de diseño en variables CSS, modo oscuro y claro sin JavaScript, formulario accesible y hoja de estilos de impresión. Todo se puede verificar inspeccionando el demo.",
      'case.sellink.close_m1': "Lighthouse 96 en móvil (lab data)",
      'case.sellink.close_m2': "Contraste WCAG 2.1 AA verificado: 5.4:1 en el acento, 15:1 o más en texto principal",
      'case.sellink.close_m3': "Cambio de tema sin JavaScript, solo con data-theme y variables CSS",
      'case.sellink.close_learn': "La lección fue de sistema, no de páginas: definir primero los tokens (color semántico, espaciado, tipografía) hizo que cada sección nueva saliera más rápido que la anterior. El diseño \"a medida\" es, sobre todo, disciplina de variables.",
      'case.sellink.close_refactor': "Hoy movería los módulos repetidos a plantillas generadas en un paso de build para no duplicar HTML entre secciones, y sumaría chequeos automáticos de contraste para que el AA no dependa de verificación manual.",
      'case.cognition.close_result': "Quedó publicado en cognition-demo-cyan.vercel.app el proyecto más ambicioso del portfolio: 11 páginas, calculadora de ROI, chat basado en intención y PWA instalable, sin frameworks ni dependencias externas. Cada feature se puede probar directamente en el demo.",
      'case.cognition.close_m1': "Lighthouse 94 en móvil (lab data)",
      'case.cognition.close_m2': "Bundle total: 38 KB de JS y 24 KB de CSS comprimidos",
      'case.cognition.close_m3': "LCP 2.1 s en 3G lento simulado (Lighthouse)",
      'case.cognition.close_learn': "Aprendí dónde está el límite del vanilla JS: 11 páginas compartiendo header, footer y widgets implican duplicación real de HTML, y el estado entre páginas vía sessionStorage funciona pero hay que diseñarlo de forma explícita — no viene gratis como en una SPA.",
      'case.cognition.close_refactor': "Hoy usaría un generador estático liviano (Eleventy o similar) para compartir plantillas manteniendo la salida en HTML puro, y movería las 12 intenciones del chat a un JSON declarativo separado de la lógica.",
      'about.hiring': "Abierto a roles full-time remotos en equipos de producto. También tomo proyectos freelance seleccionados.",
      'about.cta.cv': "Descargar CV (PDF)",
      'about.timeline.eyebrow': "[ Trayectoria ]",
      'about.timeline.title': "Recorrido",
      'about.timeline.i1.date': "2026",
      'about.timeline.i1.role': "Proyectos de demostración — Sellink Group & Cognition",
      'about.timeline.i1.desc': "Landing corporativa para una agencia creativa y plataforma de IA de 11 páginas con calculadora ROI, chat basado en intención y PWA. Construidos como demos con estándares de producción.",
      'about.timeline.i1.stack': "HTML · CSS · JavaScript · PWA · Schema.org",
      'about.timeline.i2.date': "2025",
      'about.timeline.i2.role': "Primeros proyectos publicados — Cucú Studio & Luco Gourmet",
      'about.timeline.i2.desc': "Dos sitios de demostración de 11 y 12 páginas: PWA con soporte offline, galería filtrable, formularios validados, Schema.org y accesibilidad WCAG.",
      'about.timeline.i2.stack': "HTML · CSS · JavaScript · Service Worker · WCAG",
      'about.timeline.i3.date': "Feb 2023 — Presente",
      'about.timeline.i3.role': "Tecnicatura en Desarrollo Full Stack — CoderHouse",
      'about.timeline.i3.desc': "Formación full stack en curso, complementada con práctica autodidacta constante. Actualmente profundizando React, TypeScript, Tailwind y Node.js.",
      'about.timeline.i3.stack': "React · TypeScript · Tailwind · Node.js",
      'about.timeline.i4.date': "Etapa previa",
      'about.timeline.i4.role': "Experiencia previa — ventas, producción y eventos",
      'about.timeline.i4.desc': "DJ profesional (5+ años), venta consultiva en Royal Prestige y operación industrial en Qiri Toys. De ahí vienen la disciplina, el trato con clientes y el trabajo bajo presión que hoy aplico al desarrollo.",
      'about.timeline.i4.stack': "Comunicación · Atención al cliente · Trabajo bajo presión",
      'contact.path.project': "¿Tenés un proyecto?",
      'contact.path.project_desc': "Contame qué necesitás y te respondo en menos de 24 h con próximos pasos.",
      'contact.path.project_aria': "Ir al formulario de contacto para contarme tu proyecto",
      'contact.path.hiring': "¿Estás contratando?",
      'contact.path.hiring_desc': "Busco roles full-time remotos. Descargá mi CV o escribime directo.",
      'hero.issue': "Portfolio — Edición 2026",
      'hero.hiring': "¿Estás contratando? Busco roles full-time remotos",
      'hero.plate_aria': "Ver caso: Cognition",
      'hero.plate_cap': "Fig. 01 — Cognition, plataforma IA · 2026",
      'hero.plate_cta': "Ver caso →",
      'alt.home.portrait': "Retrato de Rony Cozzi",
      'nav.services': "Servicios",
      'nav.process': "Proceso",
      'nav.talk': "Hablemos",
      'services.page.eyebrow': "[ Servicios · 04 paquetes ]",
      'services.page.title1': "Servicios",
      'services.page.title2': "según tu alcance.",
      'services.page.lead': "Una landing rápida, un sitio completo, integraciones full stack o mejora de lo que ya tenés online. Alcance claro, entregables definidos y comunicación directa.",
      'contact.heading2': "querés construir.",
      'contact.lead': "Con unas pocas respuestas puedo decirte qué alcance tiene el proyecto, qué camino conviene y si soy la persona indicada para hacerlo.",
      'contact.form.whatsapp': "WhatsApp",
      'contact.form.optional': "(opcional)",
      'contact.form.ptype': "Tipo de proyecto",
      'contact.form.pt_landing': "Landing",
      'contact.form.pt_site': "Sitio completo",
      'contact.form.pt_integration': "Integración / backend",
      'contact.form.pt_optimization': "Optimización",
      'contact.form.pt_unsure': "No sé todavía",
      'contact.form.pstate': "Estado actual",
      'contact.form.ps_idea': "Es una idea",
      'contact.form.ps_content': "Tengo contenido",
      'contact.form.ps_design': "Tengo diseño",
      'contact.form.ps_live': "Tengo web publicada",
      'contact.form.ps_rebuild': "Necesito rehacer todo",
      'contact.form.budget': "Presupuesto aproximado",
      'contact.form.b_tbd': "A definir",
      'contact.form.b_low': "Bajo",
      'contact.form.b_mid': "Medio",
      'contact.form.b_high': "Alto",
      'contact.form.b_talk': "Prefiero conversarlo",
      'contact.form.pdate': "Fecha ideal",
      'contact.form.pdate_ph': "ej. Marzo 2026",
      'contact.form.opt_placeholder2': "Elegí una opción…",
      'meta.services.title': "Servicios web full stack | Rony Cozzi",
      'meta.services.description': "Landing de conversión, sitio web completo, integraciones full stack y optimización. Servicios de desarrollo web con SEO técnico, accesibilidad y performance.",
    },
    en: {
      'nav.home': 'Home',
      'nav.work': 'Work',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'hero.tag': 'Available · 2026',
      'hero.role': 'Rony Cozzi — Full Stack Developer',
      'hero.eyebrow': "Full stack development · UI · Performance",
      'hero.title1': "Design that",
      'hero.title2': "speaks.",
      'hero.title3': "Code that holds up.",
      'hero.intro': "I build fast, accessible and maintainable websites, landing pages and web integrations for brands that need a digital presence with identity and technical judgment.",
      'hero.cta': 'View work',
      'hero.cta2': "Start a project",
      'hero.trust1': "Reply < 24h",
      'hero.trust2': "Technical SEO included",
      'hero.trust3': "Clean deploys",
      'hero.trust4': "Remote · GMT-3",
      'hero.scroll': 'Scroll',
      'hero.fact.services': 'Services',
      'hero.fact.services_val': 'Sites · APIs · Landing pages',
      'hero.fact.response': 'Response',
      'hero.fact.response_val': '< 24h',
      'hero.fact.langs': 'Languages',
      'hero.fact.modality': 'Work mode',
      'hero.fact.modality_val': 'Remote · GMT-3',
      'hero.facts.quick': 'Quick facts',
      'signals.aria': "Quick signals",
      'signals.s1': "< 24h",
      'signals.l1': "Reply",
      'signals.l2': "Deploy",
      'signals.s3': "Technical SEO",
      'signals.l3': "Included",
      'signals.l4': "Truly responsive",
      'signals.s5': "4 live demos",
      'signals.s6': "Support",
      'signals.l6': "Post-delivery",
      'featured.copy': "Published projects focused on identity, speed, structure and conversion.",
      'featured.cta': 'Explore work',
      'featured.index_aria': "Case studies",
      'featured.heading1': 'Selected',
      'featured.heading2': 'work.',
      'featured.eyebrow': '[ Featured · 2026 ]',
      'problem.eyebrow': "[ The problem ]",
      'problem.title1': "A website isn't enough",
      'problem.title2': "just looking good.",
      'problem.copy': "It also has to load fast, guide the user, adapt to content, work on mobile, be indexable and stay easy to maintain.",
      'problem.c1.title': "Design without a goal",
      'problem.c1.desc': "It looks right, but it doesn't guide the user toward a clear action.",
      'problem.c2.title': "Slow websites",
      'problem.c2.desc': "Heavy images, unnecessary scripts and poor structure hurt conversion and SEO.",
      'problem.c3.title': "Hard-to-maintain code",
      'problem.c3.desc': "Every change becomes expensive without components, structure or technical judgment.",
      'problem.c4.title': "Weak forms",
      'problem.c4.desc': "Users reach out, but the business never receives or processes that information properly.",
      'problem.c5.title': "Incomplete technical SEO",
      'problem.c5.desc': "Without metadata, schema, sitemap, semantics and performance, the site loses visibility.",
      'problem.close': "My job is to combine design, code and strategy so the website works as a real tool, not just an online presence.",
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
      'services.copy': "Four ways of working depending on scope: a fast landing page, a complete website, full stack integrations, or improving what you already have online.",
      'services.s1.title': "Conversion landing",
      'services.s1.tag': "Single page",
      'services.s1.desc': "For launches, campaigns, specific services or lead capture. A page focused on a single action — fast and measurable.",
      'services.s1.i1': "Design and development",
      'services.s1.i2': "Conversion-oriented base copy",
      'services.s1.i3': "Connected form or WhatsApp",
      'services.s1.i4': "Basic technical SEO + mobile performance",
      'services.s1.ideal': "Ideal if you need to publish a single-action page fast.",
      'services.s1.cta': "Ask about a landing",
      'services.s2.title': "Complete website",
      'services.s2.tag': "Full project",
      'services.s2.desc': "For brands, studios, professionals and businesses that need a complete presence: architecture, design, development and deploy with SEO and accessibility built in.",
      'services.s2.i1': "Information architecture + responsive design",
      'services.s2.i2': "Frontend development and main pages",
      'services.s2.i3': "Technical SEO, metadata and Open Graph",
      'services.s2.i4': "Vercel deploy + documentation",
      'services.s2.ideal': "Ideal if you need a professional site you can show, rank and maintain.",
      'services.s2.cta': "Ask about a website",
      'services.s3.title': "Lightweight full stack",
      'services.s3.tag': "Integrations",
      'services.s3.desc': "For projects where the website has to do more than look good: forms, APIs, data, simple panels or automations.",
      'services.s3.i1': "APIs and serverless functions",
      'services.s3.i2': "Connected forms + transactional email",
      'services.s3.i3': "Supabase, Firebase or Airtable",
      'services.s3.i4': "Webhooks, simple auth and basic panels",
      'services.s3.ideal': "Ideal if your website needs to process information, store data or connect with other tools.",
      'services.s3.cta': "Ask about an integration",
      'services.s4.title': "Optimization & maintenance",
      'services.s4.tag': "Ongoing improvement",
      'services.s4.desc': "For published websites that need better speed, SEO, accessibility or bug fixes without rebuilding everything.",
      'services.s4.i1': "Technical audit with a real report",
      'services.s4.i2': "Performance and accessibility",
      'services.s4.i3': "Technical SEO and fixes",
      'services.s4.i4': "Monitoring and monthly support",
      'services.s4.ideal': "Ideal if your website exists but isn't performing as it should.",
      'services.s4.cta': "Improve my website",
      'services.note.title': "When I'm not the best option.",
      'services.note.p1': "I'd rather say it upfront: I'm not the best option if you need a native app, a complex corporate backend, a 40-hour-a-week dedicated team, or a platform with heavy business logic.",
      'services.note.p2': "If the project exceeds my scope, I can help you size it or recommend another path.",
      'services.more': "See services in detail",
      'contactCard.eyebrow': '[ Direct contact ]',
      'contactCard.title': "Launching, improving<br/>or rebuilding a website?",
      'contactCard.copy': "Tell me what you need to achieve and I'll reply with the clearest path forward.",
      'contactCard.btn': "Start a project",
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
      'proc.eyebrow': "[ Process ]",
      'proc.title1': "From the first call",
      'proc.title2': "to the published site.",
      'proc.copy': "A clear process to define scope, validate structure, design, build, review and deliver without surprises.",
      'proc.more': "See the full process",
      'home.fit.eyebrow': "[ Who for ]",
      'home.fit.title': "Who I work with.",
      'home.fit.who': "I work with",
      'home.fit.w1': "Brands and studios that need a presence with identity.",
      'home.fit.w2': "Founders and professionals launching a product or service.",
      'home.fit.w3': "Businesses that want to turn visits into inquiries.",
      'home.fit.w4': "Product teams looking for a remote full stack profile.",
      'home.fit.stack': "Capabilities",
      'quality.eyebrow': "[ Quality ]",
      'quality.title1': "Every project",
      'quality.title2': "includes.",
      'quality.q1': "Technical SEO: metadata, Open Graph, schema and sitemap",
      'quality.q2': "WCAG accessibility base: semantics, visible focus and contrast",
      'quality.q3': "Mobile-first, truly responsive at every breakpoint",
      'quality.q4': "Performance: optimized images, lazy loading and stable CLS",
      'quality.q5': "Connected form or WhatsApp to receive inquiries",
      'quality.q6': "Vercel deploy with configured domain",
      'quality.q7': "Brief documentation to maintain the site",
      'quality.q8': "Post-delivery support for adjustments",
      'faqmini.title': "Frequently asked questions.",
      'faqmini.more': "See all questions",
      'work.years': 'Years',
      'work.role': 'Role',
      'work.role.value': 'Full stack development',
      'work.status': 'Status',
      'work.status_val': "4 demos · live",
      'work.hint': 'Scroll',
      'work.visit': 'View case study',
      'work.eyebrow': '[ Index · 04 projects ]',
      'work.lead': "Published projects focused on identity, speed, structure and conversion.",
      'work.meta.problem': "Problem",
      'work.meta.solution': "Solution",
      'work.meta.role': "Role",
      'work.meta.result': "Result",
      'case.back': 'Back to work',
      'work.cucu.desc': "Demo project: site for a creative studio. Editorial typography, scroll animations and micro-interactions.",
      'work.cucu.problem': "A creative studio needs a visual presence with character and simple navigation to showcase identity, services and contact.",
      'work.cucu.solution': "Editorial site with scroll animations, micro-interactions and a clear structure to turn visits into inquiries.",
      'work.cucu.role': "Full design and development.",
      'work.cucu.result': "Lightweight live site, simple navigation and a solid digital identity.",
      'work.cucu.eyebrow': '— Creative studio',
      'work.luco.desc': "Demo project: site for a food brand. PWA with offline menu, Schema.org and sub-second load in Lighthouse (lab).",
      'work.luco.problem': "A food brand needs a mobile-first digital menu, accessible from any phone.",
      'work.luco.solution': "PWA with offline menu, Schema.org, mobile-first approach and optimized loading.",
      'work.luco.role': "Full design and development.",
      'work.luco.result': "A fast menu, installable and usable offline.",
      'work.luco.eyebrow': '— Dining & market',
      'work.sellink.desc': "Demo project: corporate site. Modular structure, services showcase and accessible forms.",
      'work.sellink.problem': "An agency needs to present services, brand and contact with a dark aesthetic and modular structure.",
      'work.sellink.solution': "Corporate site with reusable sections, accessible forms and a dark visual system.",
      'work.sellink.role': "Full design and development.",
      'work.sellink.result': "A professional, scalable showcase for creative services.",
      'work.sellink.eyebrow': '★ Creative agency',
      'work.sellink.thumb': 'Brand · Web · Digital',
      'work.cognition.desc': "Demo project: AI platform for companies. 11 pages, ROI calculator, intent-based chat and PWA.",
      'work.cognition.problem': "Communicating a complex AI value proposition in a way that is clear and actionable.",
      'work.cognition.solution': "An 11-page platform with an ROI calculator, intent-based chat and PWA.",
      'work.cognition.role': "Full design and development.",
      'work.cognition.result': "A complete site to explain AI, capture intent and guide users.",
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
      'about.lead': "I work at the intersection of design, code and strategy. My goal is not just to publish a website: it is to build a digital presence that loads fast, communicates well and is easy to sustain over time.",
      'about.fit.eyebrow': "[ Fit ]",
      'about.fit.title': "When I can help you — and when I can't.",
      'about.fit.yes': "I'm a good fit if you need",
      'about.fit.y1': "A site, landing page or web integration with identity — fast and maintainable.",
      'about.fit.y2': "Technical SEO, accessibility and performance from the first commit.",
      'about.fit.y3': "Direct communication, clear scope and no-surprise deliveries.",
      'about.fit.y4': "A full stack profile for a remote product team.",
      'about.fit.no': "I'm not the best fit if you need",
      'about.fit.n1': "A native iOS/Android app.",
      'about.fit.n2': "A complex enterprise backend with heavy business logic.",
      'about.fit.n3': "A dedicated 40-hour-per-week team from day one.",
      'about.fit.note': "If your project goes beyond my scope, I can help you size it or point you to a better path.",
      'about.bio.heading': 'Bio',
      'about.bio.p1': 'Full Stack Developer with a strong focus on frontend, performance and web integrations. I build accessible, fast and maintainable sites with HTML, CSS, JavaScript, TypeScript, React, Node.js and basic SQL when the project needs it.',
      'about.bio.p2': "I work autonomously, with clean code, fast turnaround and direct communication. I can handle anything from a landing page to connected forms, lightweight APIs, simple admin panels and contact automations.",
      'about.bio.p3': "Available for full-time roles on product teams, remote collaborations and one-off projects.",
      'about.facts.role': 'Role',
      'about.facts.role_val': 'Full Stack Developer',
      'about.facts.modality': 'Work mode',
      'about.facts.modality_val': 'Remote · GMT-3',
      'about.facts.langs': 'Languages',
      'about.facts.status': 'Status',
      'about.facts.status_val': "Open to full-time & freelance",
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
      'contact.heading1': "Tell me what",
      'contact.direct': 'Direct contact',
      'contact.form.name': 'Name',
      'contact.form.subject': 'Subject',
      'contact.form.message': 'Message',
      'contact.form.send': "Send project",
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
      'meta.home.title': "Rony Cozzi | Full stack developer, websites and landing pages",
      'meta.home.description': "I design and build fast, clear, maintainable websites: landing pages, complete sites and full stack integrations focused on performance, technical SEO and accessibility.",
      'meta.work.title': "Selected work | Rony Cozzi",
      'meta.work.description': 'Full stack projects by Rony Cozzi: fast websites, landing pages, PWAs, integrations, technical SEO and production-ready digital experiences.',
      'meta.about.title': 'About — Rony Cozzi',
      'meta.about.description': 'Meet Rony Cozzi — Full Stack Developer based in Argentina. Fast websites, lightweight APIs, web integrations and production-ready digital experiences.',
      'meta.contact.title': 'Contact — Rony Cozzi',
      'meta.contact.description': 'Let’s talk about your project. Contact Rony Cozzi for full stack websites, landing pages, lightweight APIs, web integrations and production-ready development.',
      'meta.process.title': "Work process | Rony Cozzi",
      'meta.process.description': 'How I work — Rony Cozzi’s full stack process: discovery, architecture, design, frontend, integrations, QA and launch.',
      'meta.faq.title': "Frequently asked questions | Rony Cozzi",
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
      'case.cucu.p1': "Demo project: I set out to solve the typical case of a tattoo studio operating with no web presence, with all client acquisition funneled through Instagram — a very common scenario among creative studios in Argentina. Cucú Studio is the fictional brand I designed for this exercise.",
      'case.cucu.p2': "The goal I set for myself: build a site that matches the visual bar of the industry — editorial, bold and fast. No WordPress, no templates. Everything from scratch.",
      'case.cucu.problem_desc': "When Instagram is the only channel, visitors can't find clear pricing, a defined booking process or the artists' full portfolios. The demo tackles exactly that friction: structure, visual hierarchy and a direct path to contact.",
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
      'case.luco.p1': "Demo project: I set out to solve the typical case of a restaurant whose menu lives in an image or a heavy PDF — slow on mobile, impossible to index and frustrating on unstable connections at peak hours. Luco Gourmet is the fictional brand I invented for that scenario: handmade pasta, pan pizza and old-school vermouth.",
      'case.luco.p2': "The answer: an installable PWA with an offline menu, structured data for Google and sub-second load on simulated 3G (lab data).",
      'case.luco.problem_desc': "The scenario is a familiar one: restaurant sites that take several seconds to load on mobile, JPG menus updated by hand, and customers ending up asking for the menu over WhatsApp. The demo tackles each of those points with decisions you can verify on the live site.",
      'case.luco.solution_desc': "Built from scratch with a focus on performance and PWA. Dynamic menu served from a versioned JSON file, Schema.org structured data for restaurants, a Service Worker with an offline-first strategy for the menu, and native install to the home screen.",
      'case.luco.tech1.title': 'Complete PWA',
      'case.luco.tech1.desc': 'Service Worker using cache-first for CSS/JS/images and network-first with offline fallback for the menu JSON. <code>manifest.json</code> ships with maskable icons. Custom install prompt.',
      'case.luco.tech2.title': 'Schema.org for restaurants',
      'case.luco.tech2.desc': 'JSON-LD with <code>Restaurant</code>, <code>OpeningHoursSpecification</code>, <code>Menu</code> and <code>GeoCoordinates</code>. Markup validated with Google’s Rich Results Test.',
      'case.luco.tech3.title': 'Extreme performance',
      'case.luco.tech3.desc': "Critical CSS inlined in the <code>&lt;head&gt;</code>. Font preload for Inter 400/500. WebP images with explicit <code>width</code>/<code>height</code>. Total page weight &lt;200KB. LCP &lt;900ms on simulated slow 3G (Lighthouse, lab data).",
      'case.luco.tech4.title': 'Updatable menu',
      'case.luco.tech4.desc': "Menu stored in a versioned <code>menu.json</code>. Whoever manages the site edits one file, pushes, and Vercel redeploys in seconds. No CMS, no monthly subscription, no interface to break.",
      'case.luco.tech5.title': 'Local SEO',
      'case.luco.tech5.desc': 'Unique titles and descriptions by section. Sitemap with differentiated priority. Lighthouse metrics in the green zone (lab data).',
      'case.luco.tech6.title': 'Booking form',
      'case.luco.tech6.desc': 'Static contact form with HTML5 validation plus custom JS, designed to route inquiries through email or WhatsApp without its own backend or extra cost.',
      'case.luco.stack8': 'Static form',
      'case.sellink.tag1': 'Agency',
      'case.sellink.tag2': 'Corporate',
      'case.sellink.cover_alt': 'Sellink Group cover — dark background, red accent and service-driven layout',
      'case.sellink.p1': "Demo project: I set out to solve the typical case of a creative agency that needs a corporate website on par with its work — an industry full of generic templates with no personality or differentiation. Sellink Group is the fictional brand I built for this exercise.",
      'case.sellink.p2': "The brief I set for myself was clear: dark, bold, with a bespoke feel that never becomes hard to maintain. It should read as a senior-level agency from the very first scroll.",
      'case.sellink.problem_desc': "The pattern I wanted to attack: slow visual-builder templates, no real mobile adaptation, no native dark mode, no coherent identity. An agency that sells design can't afford a site that contradicts its own pitch — that was the starting point for the demo.",
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
      'case.sellink.tech5.desc': "A <code>@media print</code> stylesheet that hides the nav, cursor, animations and background. Prints on white with readable typography. Designed for the scenario where a proposal gets printed with the site as reference.",
      'case.sellink.tech6.title': 'WCAG AA contrast',
      'case.sellink.tech6.desc': 'Red <code>#FF3300</code> on black <code>#070707</code> gives a 5.4:1 ratio — it passes <strong>AA</strong> for normal text. White text <code>#EDEDED</code> on the main background reaches a ratio above 15:1. Verified with Colour Contrast Analyser.',
      'case.cognition.title2': 'AI Platform',
      'case.cognition.tag1': 'AI Platform',
      'case.cognition.tag2': 'Enterprise',
      'case.cognition.stat1': 'Pages',
      'case.cognition.cover_alt': 'Cognition cover — hero with a terminal-like interface and cyan accents',
      'case.cognition.p1': "Demo project: I set out to solve the typical case of an enterprise AI platform whose site is a heavy framework-built demo — slow on mobile and with no SEO. Cognition is the fictional product I designed for this exercise: explaining a complex technology to a non-technical audience and building a credible conversion funnel.",
      'case.cognition.p2': 'The most complex project in the portfolio: 11 connected pages, a vanilla JS ROI calculator, an intent-based lead-qualifying chat, real-time data motion and an installable PWA.',
      'case.cognition.problem_desc': "The anti-pattern I wanted to show how to avoid: product sites built as SPAs with multi-MB bundles, no SEO or structured data, where the page weighs more than the sales argument. The demo shows the alternative: the entire funnel in lightweight vanilla JS.",
      'case.cognition.solution_desc': "Built entirely in vanilla JS. Multi-page architecture with custom routing. An ROI calculator that persists in sessionStorage. A chat with 12 mapped intents to qualify inquiries before the form. A Service Worker with a per-resource caching strategy.",
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
      'process.title1': "From the first call",
      'process.title2': "to the live site.",
      'process.lead': "A clear process to define scope, validate structure, design, build, review and deliver without surprises.",
      'process.step1.title': 'Briefing and scope',
      'process.step1.duration': '1–2 days',
      'process.step1.desc': 'A 30–60 minute call to understand what you need, who your audience is and what you want the site to achieve. I take notes, ask uncomfortable questions and by the end you have a defined scope document: what the project includes, what it does not and how much it costs.',
      'process.meta.dur': "Duration",
      'process.meta.del': "Deliverable",
      'process.meta.avoid': "Prevents",
      'process.step1.dur': "1–2 days",
      'process.step1.del': "Scope document, fixed quote and timeline",
      'process.step1.avoid': "Starting with no direction and no fixed budget",
      'process.step1.del1': 'Scope document',
      'process.step1.del2': 'Fixed quote',
      'process.step1.del3': 'Agreed timeline',
      'process.step2.title': 'Architecture and wireframes',
      'process.step2.duration': '2–4 days',
      'process.step2.desc': 'I define the information architecture, page flow and low-fidelity wireframes. You see the structure before visual design starts, so we validate that the right information is in the right place.',
      'process.step2.dur': "2–4 days",
      'process.step2.del': "Sitemap, wireframes and user flows",
      'process.step2.avoid': "Restructuring the site mid-project",
      'process.step2.del1': 'Sitemap',
      'process.step2.del2': 'Low-fidelity wireframes',
      'process.step2.del3': 'User flows',
      'process.step3.title': 'Design',
      'process.step3.duration': '3–7 days',
      'process.step3.desc': 'Visual design for the key screens in Figma. Tokens, typography, spacing and color. We iterate until the look reflects the brand and resolves the content.',
      'process.step3.dur': "3–7 days",
      'process.step3.del': "Final Figma design, tokens and one revision round",
      'process.step3.avoid': "Building on a design nobody validated",
      'process.step3.del1': 'Final Figma design',
      'process.step3.del2': 'Design tokens',
      'process.step3.del3': '1 revision round',
      'process.step4.title': 'Development',
      'process.step4.duration': '5–14 days',
      'process.step4.desc': 'The site is built with modern HTML, CSS and JavaScript. Performance, accessibility and technical SEO are part of the first commit. Branch previews in Vercel let you follow progress in real time.',
      'process.step4.dur': "5–14 days depending on scope",
      'process.step4.del': "Working site on a Vercel preview + GitHub repo",
      'process.step4.avoid': "Flying blind with no visible progress",
      'process.step4.del1': 'GitHub repo',
      'process.step4.del2': 'Vercel preview',
      'process.step4.del3': 'APIs / integrations when needed',
      'process.step5.title': 'QA and review',
      'process.step5.duration': '1–2 days',
      'process.step5.desc': 'Before calling anything “done”, it goes through a 60+ point checklist: Lighthouse, keyboard navigation, real mobile devices (iOS Safari + Android Chrome), forms, broken links, integrations, error states and print styles. I share the report with real scores.',
      'process.step5.dur': "1–2 days",
      'process.step5.del': "QA report with the real Lighthouse scores",
      'process.step5.avoid': "Launching with bugs your customers find first",
      'process.step5.del1': 'QA report',
      'process.step5.del2': 'Lighthouse audit',
      'process.step5.del3': 'Final adjustments',
      'process.step6.title': 'Launch and handoff',
      'process.step6.duration': '1 day',
      'process.step6.desc': 'Production launch with your domain, DNS configured and HTTPS active. You receive: repo access on GitHub, deployed project access, a technical PDF and a Loom recording explaining how to update basic content on your own. 30 days of support included.',
      'process.step6.dur': "1 day",
      'process.step6.del': "Live site, credentials, documentation and 30 days of support",
      'process.step6.avoid': "Being locked to your developer for every change",
      'process.step6.del1': 'Configured domain + SSL',
      'process.step6.del2': 'Access to every service',
      'process.step6.del3': 'Technical documentation',
      'process.step6.del4': '30 days of support',
      'process.cta.title': 'Shall we start?',
      'process.cta.copy': 'Tell me what you’re building. No pressure — the first call is free.',
      'process.cta.link': "Start a project",
      'faq.eyebrow': '[ FAQ — Frequently asked questions ]',
      'faq.title1': 'Everything you',
      'faq.title2': 'might <em>want to know.</em>',
      'faq.cat1': "Project",
      'faq.cat2': "Services",
      'faq.cat3': "Work & payments",
      'faq.q1': 'How long does a web project take?',
      'faq.a1': "<p><strong>A full website: 2–4 weeks. A landing page: 5–7 business days.</strong></p><p>The timeline depends on three factors:</p><ul><li>Number of pages and sections.</li><li>Integrations: payments, forms, APIs.</li><li>How quickly the material arrives: copy, photos and logo.</li></ul><p>You get a fixed timeline during the briefing, before we start.</p>",
      'faq.q2': "What does a project include?",
      'faq.a2': "<p><strong>Design, development, deployment, one revision round and 30 days of post-launch support.</strong></p><p>In practice:</p><ul><li>Visual design and information architecture.</li><li>Full development, optimized for performance and technical SEO.</li><li>Production launch on your domain with HTTPS.</li><li>One structural revision round before final delivery.</li><li>30 days of support for fixes and adjustments.</li></ul>",
      'faq.q3': 'Do you handle maintenance after delivery?',
      'faq.a3': "<p><strong>Yes. Monthly maintenance plans or one-off fixes billed by the hour.</strong></p><p>The monthly plan includes:</p><ul><li>Content updates and minor changes.</li><li>Backups and uptime monitoring.</li><li>Bug fixes.</li></ul><p>If you would rather skip a fixed plan, I do one-off fixes by the hour.</p>",
      'faq.q4': 'Do you work with brands outside Argentina?',
      'faq.a4': "<p><strong>Yes. I work 100% remote with clients anywhere.</strong></p><ul><li>Time zone GMT-3 (Córdoba, Argentina).</li><li>Available for meetings during LATAM hours and UTC afternoons/evenings for Europe or North America.</li><li>International projects: quoted and billed in USD.</li></ul>",
      'faq.q5': 'Do you build ecommerce?',
      'faq.a5': "<p><strong>Yes: catalogs with integrated checkout (Mercado Pago, Stripe, PayPal).</strong></p><p>Where I fit and where I do not:</p><ul><li>Catalog + checkout + payment gateway: I build it custom.</li><li>Hundreds of products, inventory management and complex discount logic: I recommend evaluating a dedicated platform like Shopify or WooCommerce.</li></ul><p>I am honest about this: if your case calls for a platform, I tell you before quoting.</p>",
      'faq.q6': 'Do you handle backend and integrations?',
      'faq.a6': "<p><strong>Yes. Light backend and integrations are part of the service.</strong></p><p>I work with:</p><ul><li>Node.js, JavaScript/TypeScript, REST APIs and serverless functions.</li><li>Connected forms, simple authentication and internal dashboards.</li><li>Supabase, Firebase, Airtable, transactional email, analytics and webhooks.</li></ul><p>If the project needs a large platform —complex roles, recurring payments, inventory— we scope it properly before promising anything.</p>",
      'faq.q7': 'What if I do not like the result?',
      'faq.a7': "<p><strong>There is a major review before final delivery where you can request structural changes.</strong></p><p>On top of that:</p><ul><li>Minor changes (copy, colors, images) happen at any point during development.</li><li>You see real progress on a live preview, not screenshots.</li><li>If the project drifts off course, we talk about it before it becomes a problem.</li></ul>",
      'faq.q8': "What payment methods do you accept?",
      'faq.a8': "<p><strong>Bank transfer, PayPal and, if you prefer, stablecoins.</strong></p><p>For clients in Argentina: bank transfer in ARS or USD. For international clients: PayPal or USD wire transfer. I also accept USDT/USDC as an alternative for international payments; if that is more convenient for you, mention it at the start of the project.</p>",
      'faq.q9': 'How is your work different from an agency?',
      'faq.a9': "<p><strong>You talk directly to the person building your site — no middlemen.</strong></p><p>At an agency your project passes through 4–6 people. With me:</p><ul><li>Faster communication, nothing lost in translation.</li><li>More control over technical decisions.</li><li>One person accountable from start to finish.</li></ul><p>The trade-off: I do not scale to ten parallel projects — which is why I take on few clients at a time.</p>",
      'faq.q10': 'When am I not the right fit for your project?',
      'faq.a10': "<p><strong>When the project needs a team, not one developer.</strong></p><p>I am probably not the best fit if you need:</p><ul><li>A portal with complex authentication and many user roles.</li><li>A native mobile app (iOS/Android).</li><li>A corporate backend with heavy business logic or high concurrency.</li><li>A dedicated in-house resource at 40h/week.</li></ul><p>In those cases I tell you upfront and, when I can, refer you to someone.</p>",
      'faq.q11': 'Do I need to understand technology to work with you?',
      'faq.a11': "<p><strong>No. My job is translating your business goal into technical decisions.</strong></p><p>You tell me what you need to achieve; I decide how to implement it and explain it in plain language. You do not need to know what a Service Worker is to get a fast, well-built site.</p>",
      'faq.q12': "What do I need to get started?",
      'faq.a12': "<p><strong>A clear idea of what you want to achieve, plus your brand material. I handle the rest.</strong></p><p>The bare minimum to start:</p><ul><li>The goal of the site: sell, capture leads, showcase your work.</li><li>Logo and copy if you have them — if not, we sort it out in the briefing.</li><li>Reference sites you like (optional, but it helps).</li></ul><p>With that we do the first call and you walk away with a defined scope and quote.</p>",
      'faq.q13': "How do you charge?",
      'faq.a13': "<p><strong>50% upfront to start and 50% on delivery of the working site.</strong></p><ul><li>Fixed quote before we start: you know the total from day one.</li><li>No surprise costs: if the scope changes, it is quoted separately and you approve it.</li><li>International projects are quoted and billed in USD.</li></ul>",
      'faq.cta.title': 'Do you have another question?',
      'faq.cta.copy': 'Write to me directly — I reply in under 24h.',
      'faq.cta.link': 'Go to contact',
      'case.demo_badge': "Demo project",
      'case.close.num': "[ Wrap-up ]",
      'case.close.title': "Outcome and takeaways",
      'case.close.result': "Outcome",
      'case.close.learn': "What I learned",
      'case.cucu.close_result': "What got built and shipped is a one-page editorial site, live at cucu-studio-demo.vercel.app: a lazy-loaded gallery, an artists section, a booking process and direct contact. Everything I claim here can be checked against the public demo.",
      'case.cucu.close_m1': "Lighthouse 98 on mobile (lab data)",
      'case.cucu.close_m2': "LCP under 1.4 s and CLS of 0.02 in lab conditions",
      'case.cucu.close_m3': "WCAG AA contrast and full keyboard navigation",
      'case.cucu.close_learn': "I learned that scroll animations without libraries are entirely viable — IntersectionObserver plus CSS covers almost every case — but they demand discipline: every reveal needs its fallback for prefers-reduced-motion and for browsers without JavaScript.",
      'case.cucu.close_refactor': "If I revisited it today, I would generate responsive image variants (srcset) in a build step instead of serving a single WebP per piece, and centralize the observer thresholds in one configurable module.",
      'case.luco.close_result': "The result is a PWA live at luco-gourmet-demo.vercel.app: installable, with the menu available offline and a total page weight under 200 KB. None of this rests on my word — it can all be audited with DevTools against the demo.",
      'case.luco.close_m1': "Lighthouse 99 on mobile (lab data)",
      'case.luco.close_m2': "Total page weight under 200 KB",
      'case.luco.close_m3': "Offline menu via Service Worker, installable as an app",
      'case.luco.close_learn': "This project forced me to truly understand the Service Worker lifecycle: which caching strategy fits each resource type and, above all, how to invalidate caches without leaving users stuck on a stale version.",
      'case.luco.close_refactor': "Today I would automate Service Worker versioning in a build step (or use Workbox) instead of maintaining it by hand, and add an automated check that fails whenever the page weight exceeds the 200 KB budget.",
      'case.sellink.close_result': "Live at sellink-group-demo.vercel.app is a modular corporate site: design tokens in CSS variables, dark and light mode without JavaScript, an accessible form and a print stylesheet. All of it can be verified by inspecting the demo.",
      'case.sellink.close_m1': "Lighthouse 96 on mobile (lab data)",
      'case.sellink.close_m2': "WCAG 2.1 AA contrast verified: 5.4:1 on the accent, 15:1 or higher on body text",
      'case.sellink.close_m3': "Theme switching with no JavaScript, using only data-theme and CSS variables",
      'case.sellink.close_learn': "The lesson was about systems, not pages: defining the tokens first (semantic color, spacing, typography) made each new section come together faster than the previous one. \"Bespoke\" design is, above all, discipline with variables.",
      'case.sellink.close_refactor': "Today I would move the repeated modules into build-generated templates to stop duplicating HTML across sections, and add automated contrast checks so AA compliance doesn't depend on manual verification.",
      'case.cognition.close_result': "Live at cognition-demo-cyan.vercel.app is the most ambitious project in the portfolio: 11 pages, an ROI calculator, an intent-based chat and an installable PWA, with no frameworks or external dependencies. Every feature can be tried directly in the demo.",
      'case.cognition.close_m1': "Lighthouse 94 on mobile (lab data)",
      'case.cognition.close_m2': "Total bundle: 38 KB of JS and 24 KB of CSS, compressed",
      'case.cognition.close_m3': "LCP of 2.1 s on simulated slow 3G (Lighthouse)",
      'case.cognition.close_learn': "I learned where the limits of vanilla JS are: 11 pages sharing a header, footer and widgets means real HTML duplication, and cross-page state via sessionStorage works but has to be designed explicitly — it doesn't come for free like in an SPA.",
      'case.cognition.close_refactor': "Today I would use a lightweight static site generator (Eleventy or similar) to share templates while keeping the output as plain HTML, and move the chat's 12 intents into a declarative JSON file separated from the logic.",
      'about.hiring': "Open to full-time remote roles on product teams. I also take on selected freelance projects.",
      'about.cta.cv': "Download CV (PDF)",
      'about.timeline.eyebrow': "[ Background ]",
      'about.timeline.title': "Journey",
      'about.timeline.i1.date': "2026",
      'about.timeline.i1.role': "Demo projects — Sellink Group & Cognition",
      'about.timeline.i1.desc': "Corporate landing for a creative agency and an 11-page AI platform with an ROI calculator, intent-based chat and PWA. Built as demos to production standards.",
      'about.timeline.i1.stack': "HTML · CSS · JavaScript · PWA · Schema.org",
      'about.timeline.i2.date': "2025",
      'about.timeline.i2.role': "First shipped projects — Cucú Studio & Luco Gourmet",
      'about.timeline.i2.desc': "Two demo sites of 11 and 12 pages: PWA with offline support, filterable gallery, validated forms, Schema.org and WCAG accessibility.",
      'about.timeline.i2.stack': "HTML · CSS · JavaScript · Service Worker · WCAG",
      'about.timeline.i3.date': "Feb 2023 — Present",
      'about.timeline.i3.role': "Full Stack Development program — CoderHouse",
      'about.timeline.i3.desc': "Ongoing full-stack training, paired with constant self-taught practice. Currently going deeper into React, TypeScript, Tailwind and Node.js.",
      'about.timeline.i3.stack': "React · TypeScript · Tailwind · Node.js",
      'about.timeline.i4.date': "Earlier",
      'about.timeline.i4.role': "Earlier experience — sales, production and events",
      'about.timeline.i4.desc': "Professional DJ (5+ years), consultative sales at Royal Prestige and industrial operations at Qiri Toys. That is where the discipline, client communication and calm under pressure I bring to development come from.",
      'about.timeline.i4.stack': "Communication · Customer care · Working under pressure",
      'contact.path.project': "Have a project?",
      'contact.path.project_desc': "Tell me what you need and I will get back to you within 24 hours with next steps.",
      'contact.path.project_aria': "Jump to the contact form to tell me about your project",
      'contact.path.hiring': "Hiring?",
      'contact.path.hiring_desc': "I am looking for full-time remote roles. Download my CV or reach out directly.",
      'hero.issue': "Portfolio — 2026 Edition",
      'hero.hiring': "Hiring? I'm looking for remote full-time roles",
      'hero.plate_aria': "View case study: Cognition",
      'hero.plate_cap': "Fig. 01 — Cognition, AI platform · 2026",
      'hero.plate_cta': "View case →",
      'alt.home.portrait': "Portrait of Rony Cozzi",
      'nav.services': "Services",
      'nav.process': "Process",
      'nav.talk': "Let's talk",
      'services.page.eyebrow': "[ Services · 04 packages ]",
      'services.page.title1': "Services",
      'services.page.title2': "that match your scope.",
      'services.page.lead': "A fast landing page, a complete website, full stack integrations, or improving what you already have online. Clear scope, defined deliverables and direct communication.",
      'contact.heading2': "you want to build.",
      'contact.lead': "With a few answers I can tell you the project's scope, the best path, and whether I'm the right person to build it.",
      'contact.form.whatsapp': "WhatsApp",
      'contact.form.optional': "(optional)",
      'contact.form.ptype': "Project type",
      'contact.form.pt_landing': "Landing page",
      'contact.form.pt_site': "Complete website",
      'contact.form.pt_integration': "Integration / backend",
      'contact.form.pt_optimization': "Optimization",
      'contact.form.pt_unsure': "I don't know yet",
      'contact.form.pstate': "Current state",
      'contact.form.ps_idea': "It's an idea",
      'contact.form.ps_content': "I have content",
      'contact.form.ps_design': "I have a design",
      'contact.form.ps_live': "I have a live website",
      'contact.form.ps_rebuild': "I need to rebuild everything",
      'contact.form.budget': "Approximate budget",
      'contact.form.b_tbd': "To be defined",
      'contact.form.b_low': "Low",
      'contact.form.b_mid': "Medium",
      'contact.form.b_high': "High",
      'contact.form.b_talk': "I'd rather discuss it",
      'contact.form.pdate': "Ideal date",
      'contact.form.pdate_ph': "e.g. March 2026",
      'contact.form.opt_placeholder2': "Choose an option…",
      'meta.services.title': "Full stack web services | Rony Cozzi",
      'meta.services.description': "Conversion landing, complete website, full stack integrations and optimization. Web development services with technical SEO, accessibility and performance.",
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
      { paths: ['/services', '/services.html'], num: '03', es: 'Servicios', en: 'Services' },
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
      const selText = (name) => {
        const el = form.querySelector('[name="' + name + '"]');
        if (!el) return '';
        if (el.tagName === 'SELECT') {
          if (!el.value) return '';
          return (el.selectedOptions && el.selectedOptions[0] && el.selectedOptions[0].textContent.trim()) || el.value;
        }
        return String(data.get(name) || '').trim();
      };
      const en = getLang() === 'en';
      const detailLines = [
        [en ? 'Project type' : 'Tipo de proyecto', selText('ptype')],
        [en ? 'Current state' : 'Estado actual', selText('pstate')],
        [en ? 'Budget' : 'Presupuesto', selText('budget')],
        [en ? 'Ideal date' : 'Fecha ideal', selText('pdate')],
        ['WhatsApp', selText('whatsapp')]
      ].filter((l) => l[1]).map((l) => l[0] + ': ' + l[1]).join('\n');
      const subject = encodeURIComponent('[Portfolio] ' + subjectType + ' - ' + rawName);
      const body = encodeURIComponent(message + (detailLines ? '\n\n' + detailLines : '') + '\n\n--\n' + rawName + '\n' + email);

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
