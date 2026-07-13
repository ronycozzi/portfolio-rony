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
      'hero.intro': "Construyo sitios, landings e integraciones web que cargan rápido, son accesibles y fáciles de mantener, para marcas que necesitan presencia digital con identidad y criterio técnico.",
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
      'signals.s5': "Nueva serie",
      'signals.s6': "Soporte",
      'signals.l6': "Post-entrega",
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
      'work.years': "Serie",
      'work.role': 'Rol',
      'work.role.value': 'Desarrollo full stack',
      'work.status': 'Estado',
      'work.status_val': "En construcción",
      'work.visit': 'Ver caso de estudio',
      'work.eyebrow': "[ Trabajos ]",
      'work.lead': "Retiré los primeros demos del portfolio: estoy construyendo una nueva serie de casos de estudio más completos, con integraciones reales y resultados documentados.",
      'cap.title': 'Capacidades',
      'cap.fe.title': 'Ingeniería frontend',
      'cap.fe': 'HTML semántico, CSS moderno, JavaScript, TypeScript, React y UI responsive. Interfaces rápidas, accesibles y fáciles de mantener.',
      'cap.backend.title': 'Backend ligero & APIs',
      'cap.backend': 'Node.js, TypeScript cuando aporta valor, serverless functions, APIs REST, auth simple y conexión con servicios externos.',
      'cap.data.title': 'Datos e integraciones',
      'cap.data': 'Formularios conectados, SQL básico, Supabase/Firebase, Airtable, email transaccional, analytics, webhooks y scripts de automatización.',
      'cap.perf.title': 'Rendimiento',
      'cap.perf': "Optimización de assets, lazy loading, Core Web Vitals. Audito con Lighthouse y entrego el reporte real de cada proyecto.",
      'cap.pwa.title': 'Apps web progresivas',
      'cap.pwa': 'Service Workers, manifest, instalables. Caching estratégico y offline-first.',
      'cap.seo.title': 'SEO técnico',
      'cap.seo': 'Schema.org, Open Graph, sitemap, semántica correcta. Indexable y compartible.',
      'about.eyebrow': '[ Perfil · sobre mí ]',
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
      'contact.eyebrow': '[ Índice · 05 contacto ]',
      'contact.heading1': "Contame qué",
      'contact.direct': 'Contacto directo',
      'contact.form.name': 'Nombre',
      'contact.form.subject': 'Asunto',
      'contact.form.message': 'Mensaje',
      'contact.form.send': "Enviar consulta",
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
      'meta.work.description': "Nueva serie de casos de estudio en construcción. Mientras tanto: capacidades, servicios y proceso de trabajo de Rony Cozzi, desarrollador full stack.",
      'meta.about.title': 'Sobre mí — Rony Cozzi',
      'meta.about.description': 'Conocé a Rony Cozzi — desarrollador full stack en Argentina. Sitios rápidos, APIs ligeras, integraciones web y experiencias digitales listas para producción.',
      'meta.contact.title': 'Contacto — Rony Cozzi',
      'meta.contact.description': 'Hablemos de tu proyecto. Contactá a Rony Cozzi para sitios full stack, landings, APIs ligeras, integraciones web y desarrollo listo para producción.',
      'meta.process.title': "Proceso de trabajo | Rony Cozzi",
      'meta.process.description': 'Cómo trabajo — proceso full stack de Rony Cozzi: descubrimiento, arquitectura, diseño, frontend, integraciones, QA y puesta en producción.',
      'meta.faq.title': "Preguntas frecuentes | Rony Cozzi",
      'meta.faq.description': 'Preguntas frecuentes — Rony Cozzi, desarrollador full stack. Proceso, precios, tiempos y qué esperar de un proyecto web.',
      'meta.privacy.title': 'Privacidad — Rony Cozzi',
      'meta.privacy.description': 'Política de privacidad — Rony Cozzi. Qué datos se recopilan, cómo se usan y tus derechos como visitante. Cumple Ley 25.326 y principios GDPR.',
      'meta.terms.title': 'Términos — Rony Cozzi',
      'meta.terms.description': 'Términos y condiciones de uso del sitio de Rony Cozzi, desarrollador web full stack independiente.',
      'meta.404.title': '404 — Página no encontrada · Rony Cozzi',
      'meta.404.description': 'Esta página no existe. Volvé al portfolio de Rony Cozzi, desarrollador full stack.',
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
      'faq.q10': "¿Cuándo no sos la mejor opción para mi proyecto?",
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
      'about.hiring': "Abierto a roles full-time remotos en equipos de producto. También tomo proyectos freelance seleccionados.",
      'about.cta.cv': "Descargar CV (PDF)",
      'about.timeline.eyebrow': "[ Trayectoria ]",
      'about.timeline.title': "Recorrido",
      'about.timeline.i1.date': "2026",
      'about.timeline.i1.role': "Segunda serie de demos publicados",
      'about.timeline.i1.desc': "Un sitio corporativo y una plataforma de IA de 11 páginas con calculadora ROI, chat basado en intención y PWA. Construidos como práctica deliberada con estándares de producción.",
      'about.timeline.i1.stack': "HTML · CSS · JavaScript · PWA · Schema.org",
      'about.timeline.i2.date': "2025",
      'about.timeline.i2.role': "Primera serie de demos publicados",
      'about.timeline.i2.desc': "Dos sitios de demostración: un one-page editorial y una PWA con menú offline, galería filtrable, formularios validados, Schema.org y accesibilidad WCAG.",
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
      'legal.privacy.transition': "Privacidad",
      'legal.privacy.eyebrow': "[ Legal ]",
      'legal.privacy.title': "Política de Privacidad",
      'legal.privacy.updated': "Última actualización: <time datetime=\"2026-05\">mayo de 2026</time>",
      'legal.privacy.intro': "Este sitio web (<strong>portfolios-ronycozzi.vercel.app</strong>) es operado por Rony Cozzi, desarrollador web independiente con base en Córdoba, Argentina. Esta política describe qué datos recopilo, cómo los uso y cuáles son tus derechos, en cumplimiento con la <strong>Ley 25.326 de Protección de Datos Personales</strong> (Argentina) y principios del GDPR.",
      'legal.privacy.s1.h': "1. Datos que recopilo",
      'legal.privacy.s1.p1': "Este sitio web recopila datos en dos situaciones:",
      'legal.privacy.s1.li1': "<strong>Formulario de contacto:</strong> cuando enviás un mensaje, el sitio intenta procesarlo mediante una función segura del servidor. Si esa función no está disponible, se abre tu aplicación de email con el contenido preparado para que confirmes el envío.",
      'legal.privacy.s1.li2': "<strong>Datos técnicos mínimos:</strong> el hosting puede procesar logs técnicos básicos (por ejemplo, IP, fecha, URL solicitada y user agent) para seguridad, diagnóstico y disponibilidad del servicio.",
      'legal.privacy.s1.p2': "Este sitio <strong>no usa</strong> cookies de seguimiento, Google Analytics, Facebook Pixel ni herramientas de analítica de terceros instaladas en el frontend.",
      'legal.privacy.s2.h': "2. Cómo uso los datos",
      'legal.privacy.s2.li1': "Los datos del formulario de contacto se usan exclusivamente para responder a tu consulta.",
      'legal.privacy.s2.li2': "No se comparten con terceros salvo proveedores necesarios para operar el sitio y recibir mensajes (por ejemplo, Vercel, Resend y Google/Gmail).",
      'legal.privacy.s2.li3': "No se usan para marketing ni se venden bajo ninguna circunstancia.",
      'legal.privacy.s3.h': "3. Retención de datos",
      'legal.privacy.s3.p1': "Los mensajes del formulario se retienen mientras sean relevantes para la comunicación activa, y se eliminan a pedido. No existe base de datos propia del portfolio: los datos del formulario y los correos residen en la infraestructura de los proveedores usados para recibir y responder mensajes.",
      'legal.privacy.s4.h': "4. Tus derechos",
      'legal.privacy.s4.p1': "Bajo la Ley 25.326 y el GDPR tenés derecho a:",
      'legal.privacy.s4.li1': "Acceder a los datos personales que hayas proporcionado",
      'legal.privacy.s4.li2': "Solicitar la corrección de datos incorrectos",
      'legal.privacy.s4.li3': "Solicitar la eliminación de tus datos",
      'legal.privacy.s4.li4': "Oponerte al tratamiento de tus datos",
      'legal.privacy.s4.p2': "Para ejercer cualquiera de estos derechos, escribí a <a href=\"mailto:ronycozzi5@gmail.com\">ronycozzi5@gmail.com</a>. Respondo en menos de 72 horas hábiles.",
      'legal.privacy.s5.h': "5. Seguridad",
      'legal.privacy.s5.p1': "El sitio está alojado en Vercel con HTTPS, encabezados de seguridad (CSP, X-Frame-Options, HSTS) y sin bases de datos propias accesibles externamente. No puedo garantizar seguridad absoluta —ningún sistema en internet puede—, pero aplico las prácticas estándar de la industria.",
      'legal.privacy.s6.h': "6. Cambios a esta política",
      'legal.privacy.s6.p1': "Si esta política cambia de forma significativa, se actualizará la fecha en el encabezado. Para cambios menores no se enviarán notificaciones.",
      'legal.privacy.s7.h': "7. Contacto",
      'legal.privacy.s7.p1': "Rony Cozzi · <a href=\"mailto:ronycozzi5@gmail.com\">ronycozzi5@gmail.com</a> · Córdoba, Argentina",
      'legal.terms.transition': "Términos",
      'legal.terms.eyebrow': "[ Legal ]",
      'legal.terms.title': "Términos y Condiciones",
      'legal.terms.updated': "Última actualización: <time datetime=\"2026-05\">mayo de 2026</time>",
      'legal.terms.intro': "El uso de este sitio web (<strong>portfolios-ronycozzi.vercel.app</strong>) implica la aceptación de los presentes términos.",
      'legal.terms.s1.h': "1. Naturaleza del sitio",
      'legal.terms.s1.p1': "Este sitio es el portfolio personal y profesional de Rony Cozzi, desarrollador web freelance. Tiene como objetivo presentar trabajos, servicios y facilitar el contacto con potenciales clientes y empleadores.",
      'legal.terms.s2.h': "2. Proyectos mostrados",
      'legal.terms.s2.p1': "Los proyectos que se muestren en este sitio pueden incluir demos autoiniciados, construidos por Rony Cozzi con marcas ficticias creadas para el ejercicio. Cuando ese sea el caso, se declara: no representan clientes reales ni relaciones comerciales.",
      'legal.terms.s3.h': "3. Propiedad intelectual",
      'legal.terms.s3.p1': "El código fuente de este portfolio está disponible públicamente en <a href=\"https://github.com/ronycozzi/portfolio-rony\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a> bajo licencia MIT. Podés ver el código, usarlo como referencia e inspirarte en él, pero no replicarlo en su totalidad como portfolio propio.",
      'legal.terms.s3.p2': "Los logos, marcas y contenidos de los proyectos mostrados pertenecen a sus respectivos titulares.",
      'legal.terms.s4.h': "4. Limitación de responsabilidad",
      'legal.terms.s4.p1': "El sitio se ofrece \"tal cual\". No me hago responsable por daños indirectos o pérdidas derivadas del uso del sitio o de los enlaces externos.",
      'legal.terms.s5.h': "5. Servicios freelance",
      'legal.terms.s5.p1': "Los servicios descritos en este sitio (desarrollo web, landings) se prestan bajo contratos individuales acordados con cada cliente. Las condiciones específicas, precios y plazos se definen en cada propuesta. Este sitio no constituye una oferta contractual vinculante.",
      'legal.terms.s6.h': "6. Ley aplicable",
      'legal.terms.s6.p1': "Estos términos se rigen por las leyes de la República Argentina. Cualquier disputa se someterá a los tribunales ordinarios de la ciudad de Córdoba, Argentina.",
      'legal.terms.s7.h': "7. Contacto",
      'legal.terms.s7.p1': "Rony Cozzi · <a href=\"mailto:ronycozzi5@gmail.com\">ronycozzi5@gmail.com</a> · Córdoba, Argentina",
      'notfound.title': "Esta página no existe.",
      'notfound.copy': "O nunca existió, o la moví, o el link llegó roto en el camino.<br/>Lo importante sigue en pie: los trabajos, los servicios y una puerta directa para tu proyecto.",
      'notfound.cta': "Empezar proyecto",
      'notfound.linksLabel': "Atajos útiles",
      'soon.eyebrow': "[ Trabajos ]",
      'soon.title1': "Nueva serie de proyectos",
      'soon.title2': "en camino.",
      'soon.copy': "Estoy construyendo una nueva serie de casos de estudio más completos: más alcance, integraciones reales y resultados documentados. Mientras tanto, los servicios y el proceso cuentan exactamente cómo trabajo.",
      'soon.detail': "Cada caso nuevo va a documentar el problema, las decisiones técnicas, el stack, lo medible y lo que aprendí — con demo en vivo y capturas desktop y mobile.",
      'soon.cta1': "Ver servicios",
      'soon.cta2': "Empezar el tuyo",
      'signals.l5': "En construcción",
      'featured.heading1': "Trabajos",
      'featured.heading2': "seleccionados.",
      'contact.form.sending': "Enviando tu consulta…",
      'contact.form.sent': "Recibí tu consulta. Si el proyecto encaja, te respondo con próximos pasos en menos de 24 h.",
      'console.aria': "Estado del estudio",
      'console.live': "disponible",
      'console.c1': "SEO técnico",
      'console.c2': "Accesibilidad AA",
      'console.status_key': "estado",
      'console.status_val': "nueva serie de casos: en construcción",
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
      'hero.intro': "I build websites, landing pages and web integrations that load fast, stay accessible and remain easy to maintain — for brands that need a digital presence with identity and technical judgment.",
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
      'signals.s5': "New series",
      'signals.s6': "Support",
      'signals.l6': "Post-delivery",
      'problem.eyebrow': "[ The problem ]",
      'problem.title1': "A good-looking website",
      'problem.title2': "isn't enough.",
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
      'services.title': 'Services',
      'services.copy': "Four ways of working depending on scope: a fast landing page, a complete website, full stack integrations, or improving what you already have online.",
      'services.s1.title': "Conversion landing page",
      'services.s1.tag': "Single page",
      'services.s1.desc': "For launches, campaigns, specific services or lead capture. A page focused on a single action — fast and measurable.",
      'services.s1.i1': "Design and development",
      'services.s1.i2': "Conversion-oriented base copy",
      'services.s1.i3': "Connected form or WhatsApp",
      'services.s1.i4': "Basic technical SEO + mobile performance",
      'services.s1.ideal': "Ideal if you need to publish a single-action page fast.",
      'services.s1.cta': "Ask about a landing page",
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
      'work.years': "Series",
      'work.role': 'Role',
      'work.role.value': 'Full stack development',
      'work.status': 'Status',
      'work.status_val': "In progress",
      'work.visit': 'View case study',
      'work.eyebrow': "[ Work ]",
      'work.lead': "I retired the first demos from the portfolio: I'm building a new series of more complete case studies, with real integrations and documented outcomes.",
      'cap.title': 'Capabilities',
      'cap.fe.title': 'Frontend engineering',
      'cap.fe': 'Semantic HTML, modern CSS, JavaScript, TypeScript, React and responsive UI. Fast, accessible and maintainable interfaces.',
      'cap.backend.title': 'Lightweight backend & APIs',
      'cap.backend': 'Node.js, TypeScript when useful, serverless functions, REST APIs, simple auth and external service connections.',
      'cap.data.title': 'Data and integrations',
      'cap.data': 'Connected forms, basic SQL, Supabase/Firebase, Airtable, transactional email, analytics, webhooks and automation scripts.',
      'cap.perf.title': 'Performance',
      'cap.perf': "Asset optimization, lazy loading, Core Web Vitals. I audit with Lighthouse and deliver the real report for every project.",
      'cap.pwa.title': 'Progressive Web Apps',
      'cap.pwa': 'Service Workers, manifest, installable. Strategic caching and offline-first.',
      'cap.seo.title': 'Technical SEO',
      'cap.seo': 'Schema.org, Open Graph, sitemap, semantic markup. Indexable and shareable.',
      'about.eyebrow': '[ Profile · about ]',
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
      'contact.eyebrow': '[ Index · 05 contact ]',
      'contact.heading1': "Tell me what",
      'contact.direct': 'Direct contact',
      'contact.form.name': 'Name',
      'contact.form.subject': 'Subject',
      'contact.form.message': 'Message',
      'contact.form.send': "Send inquiry",
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
      'signal.eyebrow': '[ Focus ]',
      'signal.title1': 'Design.',
      'signal.title2': 'Code.',
      'signal.title3': 'Strategy.',
      'signal.copy': 'I build clean, functional and measurable interfaces. Every visual decision has to support content, speed and the project goal.',
      'signal.1.title': 'Strategy',
      'signal.1.desc': 'I understand the goal, audience and context before deciding structure, tone and journey.',
      'signal.2.title': 'Design',
      'signal.2.desc': "I design restrained, functional interfaces with a clear identity. No ornament that hides the message.",
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
      'meta.work.description': "A new series of case studies in progress. In the meantime: capabilities, services and the work process of Rony Cozzi, full stack developer.",
      'meta.about.title': 'About — Rony Cozzi',
      'meta.about.description': 'Meet Rony Cozzi — Full Stack Developer based in Argentina. Fast websites, lightweight APIs, web integrations and production-ready digital experiences.',
      'meta.contact.title': 'Contact — Rony Cozzi',
      'meta.contact.description': 'Let’s talk about your project. Contact Rony Cozzi for full stack websites, landing pages, lightweight APIs, web integrations and production-ready development.',
      'meta.process.title': "Work process | Rony Cozzi",
      'meta.process.description': 'How I work — Rony Cozzi’s full stack process: discovery, architecture, design, frontend, integrations, QA and launch.',
      'meta.faq.title': "Frequently asked questions | Rony Cozzi",
      'meta.faq.description': 'Frequently asked questions — Rony Cozzi, full stack developer. Process, pricing, timelines and what to expect from a web project.',
      'meta.privacy.title': 'Privacy — Rony Cozzi',
      'meta.privacy.description': 'Privacy policy — Rony Cozzi. What data is collected, how it is used and your rights as a visitor. Aligned with Argentine Law 25,326 and GDPR principles.',
      'meta.terms.title': 'Terms — Rony Cozzi',
      'meta.terms.description': 'Terms and conditions for using the website of Rony Cozzi, independent full stack web developer.',
      'meta.404.title': '404 — Page not found · Rony Cozzi',
      'meta.404.description': 'This page does not exist. Return to the portfolio of Rony Cozzi, full stack developer.',
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
      'faq.a5': "<p><strong>Yes: catalogs with integrated checkout (Mercado Pago, Stripe, PayPal).</strong></p><p>Where I fit and where I don't:</p><ul><li>Catalog + checkout + payment gateway: I build it custom.</li><li>Hundreds of products, inventory management and complex discount logic: I recommend evaluating a dedicated platform like Shopify or WooCommerce.</li></ul><p>I'm honest about this: if your case calls for a platform, I tell you before quoting.</p>",
      'faq.q6': 'Do you handle backend and integrations?',
      'faq.a6': "<p><strong>Yes. Light backend and integrations are part of the service.</strong></p><p>I work with:</p><ul><li>Node.js, JavaScript/TypeScript, REST APIs and serverless functions.</li><li>Connected forms, simple authentication and internal dashboards.</li><li>Supabase, Firebase, Airtable, transactional email, analytics and webhooks.</li></ul><p>If the project needs a large platform —complex roles, recurring payments, inventory— we scope it properly before promising anything.</p>",
      'faq.q7': "What if I don't like the result?",
      'faq.a7': "<p><strong>There is a major review before final delivery where you can request structural changes.</strong></p><p>On top of that:</p><ul><li>Minor changes (copy, colors, images) happen at any point during development.</li><li>You see real progress on a live preview, not screenshots.</li><li>If the project drifts off course, we talk about it before it becomes a problem.</li></ul>",
      'faq.q8': "What payment methods do you accept?",
      'faq.a8': "<p><strong>Bank transfer, PayPal and, if you prefer, stablecoins.</strong></p><p>For clients in Argentina: bank transfer in ARS or USD. For international clients: PayPal or USD wire transfer. I also accept USDT/USDC as an alternative for international payments; if that is more convenient for you, mention it at the start of the project.</p>",
      'faq.q9': 'How is your work different from an agency?',
      'faq.a9': "<p><strong>You talk directly to the person building your site — no middlemen.</strong></p><p>At an agency your project passes through 4–6 people. With me:</p><ul><li>Faster communication, nothing lost in translation.</li><li>More control over technical decisions.</li><li>One person accountable from start to finish.</li></ul><p>The trade-off: I don't scale to ten parallel projects — which is why I take on few clients at a time.</p>",
      'faq.q10': "When are you not the right fit for my project?",
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
      'about.hiring': "Open to full-time remote roles on product teams. I also take on selected freelance projects.",
      'about.cta.cv': "Download CV (PDF)",
      'about.timeline.eyebrow': "[ Background ]",
      'about.timeline.title': "Journey",
      'about.timeline.i1.date': "2026",
      'about.timeline.i1.role': "Second series of published demos",
      'about.timeline.i1.desc': "A corporate site and an 11-page AI platform with an ROI calculator, intent-based chat and PWA. Built as deliberate practice to production standards.",
      'about.timeline.i1.stack': "HTML · CSS · JavaScript · PWA · Schema.org",
      'about.timeline.i2.date': "2025",
      'about.timeline.i2.role': "First series of published demos",
      'about.timeline.i2.desc': "Two demo sites: a one-page editorial build and an offline-ready PWA with a filterable gallery, validated forms, Schema.org and WCAG accessibility.",
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
      'legal.privacy.transition': "Privacy",
      'legal.privacy.eyebrow': "[ Legal ]",
      'legal.privacy.title': "Privacy Policy",
      'legal.privacy.updated': "Last updated: <time datetime=\"2026-05\">May 2026</time>",
      'legal.privacy.intro': "This website (<strong>portfolios-ronycozzi.vercel.app</strong>) is operated by Rony Cozzi, an independent web developer based in Córdoba, Argentina. This policy describes what data I collect, how I use it and what your rights are, in compliance with Argentina’s <strong>Personal Data Protection Act No. 25,326</strong> and GDPR principles.",
      'legal.privacy.s1.h': "1. Data I collect",
      'legal.privacy.s1.p1': "This website collects data in two situations:",
      'legal.privacy.s1.li1': "<strong>Contact form:</strong> when you send a message, the site tries to process it through a secure server function. If that function is unavailable, your email app opens with the content prepared so you can confirm the send.",
      'legal.privacy.s1.li2': "<strong>Minimal technical data:</strong> the hosting provider may process basic technical logs (e.g. IP address, date, requested URL and user agent) for security, diagnostics and service availability.",
      'legal.privacy.s1.p2': "This site does <strong>not use</strong> tracking cookies, Google Analytics, Facebook Pixel or any third-party analytics tools installed on the frontend.",
      'legal.privacy.s2.h': "2. How I use the data",
      'legal.privacy.s2.li1': "Contact form data is used exclusively to reply to your inquiry.",
      'legal.privacy.s2.li2': "It is not shared with third parties, except for the providers required to operate the site and receive messages (e.g. Vercel, Resend and Google/Gmail).",
      'legal.privacy.s2.li3': "It is never used for marketing and is never sold, under any circumstances.",
      'legal.privacy.s3.h': "3. Data retention",
      'legal.privacy.s3.p1': "Form messages are kept for as long as they remain relevant to an active conversation, and are deleted upon request. The portfolio has no database of its own: form data and emails reside in the infrastructure of the providers used to receive and reply to messages.",
      'legal.privacy.s4.h': "4. Your rights",
      'legal.privacy.s4.p1': "Under Act No. 25,326 and the GDPR, you have the right to:",
      'legal.privacy.s4.li1': "Access the personal data you have provided",
      'legal.privacy.s4.li2': "Request the correction of inaccurate data",
      'legal.privacy.s4.li3': "Request the deletion of your data",
      'legal.privacy.s4.li4': "Object to the processing of your data",
      'legal.privacy.s4.p2': "To exercise any of these rights, write to <a href=\"mailto:ronycozzi5@gmail.com\">ronycozzi5@gmail.com</a>. I reply within 72 business hours.",
      'legal.privacy.s5.h': "5. Security",
      'legal.privacy.s5.p1': "The site is hosted on Vercel with HTTPS, security headers (CSP, X-Frame-Options, HSTS) and no externally accessible databases of its own. I cannot guarantee absolute security — no system on the internet can — but I follow standard industry practices.",
      'legal.privacy.s6.h': "6. Changes to this policy",
      'legal.privacy.s6.p1': "If this policy changes in any significant way, the date in the header will be updated. No notifications will be sent for minor changes.",
      'legal.privacy.s7.h': "7. Contact",
      'legal.privacy.s7.p1': "Rony Cozzi · <a href=\"mailto:ronycozzi5@gmail.com\">ronycozzi5@gmail.com</a> · Córdoba, Argentina",
      'legal.terms.transition': "Terms",
      'legal.terms.eyebrow': "[ Legal ]",
      'legal.terms.title': "Terms & Conditions",
      'legal.terms.updated': "Last updated: <time datetime=\"2026-05\">May 2026</time>",
      'legal.terms.intro': "By using this website (<strong>portfolios-ronycozzi.vercel.app</strong>) you agree to these terms.",
      'legal.terms.s1.h': "1. Nature of this site",
      'legal.terms.s1.p1': "This site is the personal and professional portfolio of Rony Cozzi, a freelance web developer. Its purpose is to showcase work and services, and to make it easy for potential clients and employers to get in touch.",
      'legal.terms.s2.h': "2. Featured projects",
      'legal.terms.s2.p1': "Projects shown on this site may include self-initiated demos built by Rony Cozzi around fictional brands created for the exercise. When that is the case, it is stated: they do not represent real clients or business relationships.",
      'legal.terms.s3.h': "3. Intellectual property",
      'legal.terms.s3.p1': "The source code of this portfolio is publicly available on <a href=\"https://github.com/ronycozzi/portfolio-rony\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a> under the MIT license. You are welcome to browse the code, use it as a reference and draw inspiration from it, but please do not replicate it in its entirety as your own portfolio.",
      'legal.terms.s3.p2': "The logos, trademarks and content of the featured projects belong to their respective owners.",
      'legal.terms.s4.h': "4. Limitation of liability",
      'legal.terms.s4.p1': "This site is provided \"as is\". I accept no liability for indirect damages or losses arising from the use of the site or of any external links.",
      'legal.terms.s5.h': "5. Freelance services",
      'legal.terms.s5.p1': "The services described on this site (web development, landing pages) are provided under individual agreements arranged with each client. Specific conditions, pricing and timelines are defined in each proposal. This site does not constitute a binding contractual offer.",
      'legal.terms.s6.h': "6. Governing law",
      'legal.terms.s6.p1': "These terms are governed by the laws of the Argentine Republic. Any dispute shall be submitted to the ordinary courts of the city of Córdoba, Argentina.",
      'legal.terms.s7.h': "7. Contact",
      'legal.terms.s7.p1': "Rony Cozzi · <a href=\"mailto:ronycozzi5@gmail.com\">ronycozzi5@gmail.com</a> · Córdoba, Argentina",
      'notfound.title': "This page doesn't exist.",
      'notfound.copy': "It never existed, I moved it, or the link broke along the way.<br/>What matters is still standing: the work, the services and a direct line for your project.",
      'notfound.cta': "Start a project",
      'notfound.linksLabel': "Useful shortcuts",
      'soon.eyebrow': "[ Work ]",
      'soon.title1': "A new series of projects",
      'soon.title2': "on the way.",
      'soon.copy': "I'm building a new series of more complete case studies: bigger scope, real integrations and documented outcomes. In the meantime, the services and process pages explain exactly how I work.",
      'soon.detail': "Each new case will document the problem, the technical decisions, the stack, what's measurable and what I learned — with a live demo and desktop and mobile captures.",
      'soon.cta1': "See services",
      'soon.cta2': "Start yours",
      'signals.l5': "In progress",
      'featured.heading1': "Selected",
      'featured.heading2': "work.",
      'contact.form.sending': "Sending your inquiry…",
      'contact.form.sent': "Got your inquiry. If the project is a fit, I'll reply with next steps within 24 hours.",
      'console.aria': "Studio status",
      'console.live': "available",
      'console.c1': "Technical SEO",
      'console.c2': "AA accessibility",
      'console.status_key': "status",
      'console.status_val': "new case series: in progress",
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
    'services',
    'privacy',
    'terms',
    '404',
  ]);
  const localRouteFallbacks = {
    '/work': '/work.html',
    '/about': '/about.html',
    '/contact': '/contact.html',
    '/process': '/process.html',
    '/faq': '/faq.html',
    '/services': '/services.html',
    '/privacy': '/privacy.html',
    '/terms': '/terms.html',
    '/404': '/404.html',
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

  const SAFE_TRANSLATED_TAGS = new Set(['a', 'br', 'code', 'em', 'li', 'p', 'strong', 'time', 'ul']);

  function decodeSafeMarkupEntities(value) {
    const entities = { '&lt;': '<', '&gt;': '>', '&amp;': '&', '&quot;': '"', '&#39;': "'" };
    return String(value).replace(/&(lt|gt|amp|quot|#39);/g, (entity) => entities[entity]);
  }

  function getSafeTranslatedAttribute(source, name) {
    const match = String(source).match(new RegExp(`\\s${name}\\s*=\\s*(["'])(.*?)\\1`, 'i'));
    return match ? decodeSafeMarkupEntities(match[2]) : '';
  }

  function isSafeTranslatedHref(value) {
    return /^(?:https:\/\/[^\s]+|mailto:[^\s]+)$/i.test(value);
  }

  function setSafeTranslatedMarkup(el, val) {
    const source = String(val);
    const tagPattern = /<\/?([a-z][a-z0-9]*)(?:\s+[^<>]*?)?\s*\/?>/gi;
    const stack = [el];
    let cursor = 0;
    let match;
    el.textContent = '';

    const appendText = (value) => {
      if (value) stack[stack.length - 1].appendChild(document.createTextNode(decodeSafeMarkupEntities(value)));
    };

    while ((match = tagPattern.exec(source)) !== null) {
      appendText(source.slice(cursor, match.index));
      const rawTag = match[0];
      const tag = match[1].toLowerCase();
      const isClosing = /^<\//.test(rawTag);

      if (!SAFE_TRANSLATED_TAGS.has(tag)) {
        appendText(rawTag);
      } else if (isClosing) {
        const current = stack[stack.length - 1];
        if (stack.length > 1 && current.tagName.toLowerCase() === tag) stack.pop();
        else appendText(rawTag);
      } else {
        const node = document.createElement(tag);
        if (tag === 'time') {
          const datetime = getSafeTranslatedAttribute(rawTag, 'datetime');
          if (/^\d{4}-\d{2}(?:-\d{2})?$/.test(datetime)) node.setAttribute('datetime', datetime);
        }
        if (tag === 'a') {
          const href = getSafeTranslatedAttribute(rawTag, 'href');
          if (isSafeTranslatedHref(href)) node.setAttribute('href', href);
          if (/^https:\/\//i.test(href) && getSafeTranslatedAttribute(rawTag, 'target') === '_blank') {
            node.setAttribute('target', '_blank');
            node.setAttribute('rel', 'noopener noreferrer');
          }
        }
        stack[stack.length - 1].appendChild(node);
        if (tag !== 'br') stack.push(node);
      }
      cursor = match.index + rawTag.length;
    }
    appendText(source.slice(cursor));
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
      if (val != null) setSafeTranslatedMarkup(el, val);
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
      services: {
        title: 'meta.services.title',
        description: 'meta.services.description',
        imageAlt: 'meta.services.title',
      },
      privacy: {
        title: 'meta.privacy.title',
        description: 'meta.privacy.description',
        imageAlt: 'meta.privacy.title',
      },
      terms: {
        title: 'meta.terms.title',
        description: 'meta.terms.description',
        imageAlt: 'meta.terms.title',
      },
      '404': {
        title: 'meta.404.title',
        description: 'meta.404.description',
        imageAlt: 'meta.404.title',
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
    const projectHosts = [];
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
      { paths: ['/services', '/services.html'], num: '03', es: 'Servicios', en: 'Services' },
      { paths: ['/process', '/process.html'], num: '04', es: 'Proceso', en: 'Process' },
      { paths: ['/contact', '/contact.html'], num: '05', es: 'Contacto', en: 'Contact' },
      { paths: ['/about', '/about.html'], num: '—', es: 'Sobre mí', en: 'About' },
      { paths: ['/faq', '/faq.html'], num: '—', es: 'FAQ', en: 'FAQ' },
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

    const hoverables = document.querySelectorAll('[data-magnetic]');
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
      const setBusy = (busy, labelKey) => {
        if (btn) { btn.disabled = busy; if (busy) btn.setAttribute('aria-busy', 'true'); else btn.removeAttribute('aria-busy'); }
        if (btnText) btnText.textContent = t(labelKey) || originalText;
      };

      const sendViaMailto = () => {
        if (btnText) btnText.textContent = t('contact.form.opening_btn') || (getLang() === 'en' ? 'Opening email…' : 'Abriendo email…');
        if (note) { note.dataset.noteState = 'opening'; note.textContent = openingText(emailTarget); }
        const a = document.createElement('a');
        a.href = `mailto:${emailTarget}?subject=${subject}&body=${body}`;
        a.rel = 'noopener';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => {
          setBusy(false, 'contact.form.send');
          if (note) { note.dataset.noteState = 'hint'; syncNote(); }
        }, 900);
      };

      setBusy(true, 'contact.form.sending');
      if (note) { note.dataset.noteState = 'sending'; note.textContent = t('contact.form.sending') || ''; }

      const payload = {
        name: rawName,
        email,
        message,
        subject: subjectType,
        whatsapp: selText('whatsapp'),
        ptype: selText('ptype'),
        pstate: selText('pstate'),
        budget: selText('budget'),
        pdate: selText('pdate'),
        website: String(data.get('website') || ''),
      };

      const ctrl = ('AbortController' in window) ? new AbortController() : null;
      const timer = ctrl && setTimeout(() => ctrl.abort(), 8000);
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: ctrl ? ctrl.signal : undefined,
      })
        .then((r) => {
          if (timer) clearTimeout(timer);
          if (r.ok) {
            form.reset();
            setBusy(false, 'contact.form.send');
            if (note) {
              note.dataset.noteState = 'sent';
              note.textContent = t('contact.form.sent') || '';
            }
            return;
          }
          // No configurado, validación del server o error: no perdemos la consulta.
          sendViaMailto();
        })
        .catch(() => {
          if (timer) clearTimeout(timer);
          sendViaMailto();
        });
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
    setupHeaderAndProgress();
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
