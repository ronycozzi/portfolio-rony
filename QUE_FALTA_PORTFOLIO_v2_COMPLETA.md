# Lista COMPLETA de todo lo que falta — Portfolio de Rony Cozzi (v2 expandida)

> Generado el 2026-06-09. Versión expandida y granular de `QUE_FALTA_PORTFOLIO_2026-06-09.md`.
>
> Cruza **5 fuentes**: inventario del sitio, research web (referentes + recruiters + premiados + checklists), auditoría técnica de 96 hallazgos, pasada con lente **elite-craft**, y **una segunda tanda de 6 agentes** que cavaron áreas granulares (página por página, secciones nuevas, funnel, marca cross-channel, cobertura de proyectos, micro-craft).
>
> **176 ítems en total**: 24 estratégicos (Parte A) + 152 granulares (Parte B). Cada uno con prioridad (P0/P1/P2), esfuerzo, acción concreta y ubicación.
>
> Objetivo: **trabajo remoto full-time** (también freelance). Todo priorizado para eso.

---

## Cómo leer esto

- **P0** = sin esto te descartan o dudan. **17 ítems granulares** + los 6 estratégicos.
- **P1** = completan el portfolio profesional. **56 ítems**.
- **P2** = diferenciadores y pulido fino. **79 ítems**.
- **Esfuerzo** bajo/medio/alto = cuánto trabajo lleva.

> La **Parte A** (abajo) es el resumen estratégico de alto nivel — empezá por ahí.
> La **Parte B** es el detalle granular por área — usala como backlog ejecutable.

---

# PARTE A — Los 6 movimientos estratégicos (lo no negociable)

Si solo hacés 6 cosas, son estas. Todo lo demás de la Parte B cuelga de acá:

1. **Mostrar el código.** Link a GitHub repo en cada proyecto + README decente por repo. Es el estándar más universal y hoy no lo tenés.
2. **Sumar Brew Bank** (tu banco fullstack oculto) — prueba el claim "Full Stack" que tus 4 demos frontend no sostienen.
3. **Reencuadrar los case studies** como demos honestos con resultado + aprendizaje (hoy presentan demos como clientes reales con métricas falsificables).
4. **Hablarle al empleador**, no solo al cliente freelance. Dual-CTA, página /hire, FAQ para reclutadores, señal "busco full-time".
5. **Completar el inglés** en las 9 páginas que hoy quedan en español (case studies primero).
6. **Cumplir tus propias reglas**: sacar "Argentina" del hero (regla 1) y forzar dark default real (regla 4).

> El detalle técnico de cada fix puntual está en `AUDITORIA_PORTFOLIO_2026-06-09.md` (96 hallazgos con archivo:línea).

---

# PARTE B — Backlog granular (152 ítems por área)

Ordenado por área y dentro de cada área por prioridad. Las áreas van de mayor a menor impacto para conseguir empleo.


---

## Cobertura del portafolio de proyectos

### P0

**Falta una app fullstack con CRUD + auth + DB persistente (el caso que prueba el claim 'full stack')** _(esfuerzo: alto)_
- Los 4 proyectos (Cucú, Luco, Sellink, Cognition) son 100% frontend: el stack de cada case study termina en HTML/CSS/JS/Canvas/Service Worker/Schema. Ninguno persiste datos en un servidor ni autentica usuarios. Sin embargo el JSON-LD de index.html (líneas 91-95) declara 'knowsAbout': Node.js, APIs REST, SQL, Supabase, Firebase, Serverless, y la sección Capacidades de work.html promete 'auth simple', 'SQL básico', 'Supabase/Firebase'. Un recruiter que abra los 4 demos ve solo sitios de marca: el claim full stack queda sin evidencia. Una app con login real, base de datos y operaciones de crear/leer/editar/borrar es LO MÍNIMO que separa a un front de un full stack a ojos de quien filtra CVs. Brew Bank ya cumple esto técnicamente pero no está mostrado.
- **Acción:** Mostrar Brew Bank como proyecto fullstack #5: una app con auth (registro/login/sesión), base de datos (cuentas, transacciones, usuarios) y CRUD completo. Si Brew Bank es demasiado grande/sensible para deploy público, construir una app fullstack acotada y nueva (ej: gestor de tareas o gastos con login). El case study debe mostrar explícitamente el modelo de datos, las rutas protegidas y el flujo de auth.
- **Dónde:** `work.html (sección .works, faltaría work-item 05) y nuevo case/ HTML`

**Falta una API REST propia, documentada, con endpoints navegables** _(esfuerzo: medio)_
- El portafolio dice 'APIs REST' tres veces (knowsAbout, Capacidades 02 'APIs REST', Servicios 03 'Node.js, APIs REST y serverless functions') pero no hay UN solo endpoint que un recruiter pueda abrir o probar. Para un backend junior, tener una API propia con rutas GET/POST/PUT/DELETE, manejo de errores con códigos HTTP correctos, validación de input y un README/OpenAPI que documente cada endpoint es la prueba directa del skill. Es muy barata de hostear (serverless en Vercel, que ya usa) y muy fácil de evaluar en 2 minutos.
- **Acción:** Construir una API REST pequeña pero real (ej: API de un recurso de dominio claro con CRUD + filtros + paginación) desplegada como serverless functions en Vercel. Documentarla con OpenAPI/Swagger o un README con tabla de endpoints (método, ruta, body, respuesta, códigos de error). Linkear tanto el endpoint vivo como el repo desde el case study.
- **Dónde:** `work.html + nuevo proyecto`

**Brew Bank existe pero no se muestra: el activo fullstack más fuerte está oculto** _(esfuerzo: alto)_
- Según la memoria, Brew Bank es un banco digital fullstack con 11 fases completas (auth, DB, transacciones, backend en Node, port 4000) — exactamente la prueba del claim full stack que falta en el portafolio. Pero no aparece en work.html ni tiene case study. Es el proyecto que más rápido convertiría a un recruiter escéptico, y está invisible. Mostrarlo (aunque sea con video/screenshots si no se puede deployear el back) resuelve de un golpe la mayor brecha de cobertura.
- **Acción:** Crear el case study de Brew Bank y sumarlo a work.html como proyecto fullstack estrella. Si el backend no se puede dejar deployado 24/7 gratis, mostrarlo con video walkthrough + screenshots + diagrama de arquitectura + repo, dejando claro qué es real (auth, DB, API, transacciones). Documentar el modelo de datos y el flujo de auth en el case study.
- **Dónde:** `work.html (falta work-item) + nuevo case/brew-bank.html`

### P1

**Falta un proyecto que consuma una API externa de terceros (fetch + manejo de estados)** _(esfuerzo: medio)_
- Ninguno de los 4 demos consume datos externos en vivo: son sitios con contenido estático/hardcodeado. Consumir una API pública de terceros demuestra skills que un sitio de marca no toca: fetch async, manejo de loading/error/empty states, rate limits, paginación, debounce en búsquedas, y manejo de API keys sin exponerlas (proxy serverless). Es el puente natural entre el front que ya domina y el back que reclama. Muy común que lo pidan en take-home tests junior.
- **Acción:** Construir una app pequeña que consuma una API pública real (clima, películas, criptomonedas, GitHub, etc.) con búsqueda, filtros y los tres estados (cargando/error/vacío) bien resueltos. Esconder la API key detrás de un serverless proxy para demostrar que entiende por qué no va en el cliente. Documentar la decisión del proxy en el README.
- **Dónde:** `work.html + nuevo proyecto`

**Falta un dashboard con datos reales / visualización (no solo páginas de marketing)** _(esfuerzo: medio)_
- Cognition tiene una 'calculadora de ROI' y 'animaciones de datos', pero es un widget de marketing, no un dashboard que lea y agregue datos. Un dashboard con tablas filtrables, gráficos derivados de datos reales (de su propia API o DB) y estado de UI (orden, filtros, paginación) demuestra que sabe mover datos de la DB → API → UI: el ciclo completo full stack en una sola pantalla. Es uno de los proyectos que más rápido convence a un recruiter de que el candidato maneja el rango entero.
- **Acción:** Construir un dashboard que lea datos de su API/DB y los muestre en tablas ordenables/filtrables y al menos un gráfico (puede ser Canvas, que ya domina, sin libs pesadas). Idealmente reusar la DB de la app fullstack para no inventar datos. Documentar el flujo dato→render y cómo se computan las métricas.
- **Dónde:** `work.html + nuevo proyecto`

**Ningún proyecto muestra tests automatizados (claim de 'buenas prácticas' sin evidencia)** _(esfuerzo: medio)_
- El home (signal-card 03) dice 'buenas prácticas' y Capacidades habla de 'fáciles de mantener', pero no hay un solo test en ninguno de los 4 proyectos. Tener aunque sea un proyecto con tests (unitarios de lógica + algún test de integración de la API) y un badge de CI verde comunica madurez de ingeniería que casi ningún junior muestra. Diferencia fuerte en el filtro de candidatos: 'testea su código' es una checkbox que muchos recruiters técnicos buscan explícitamente.
- **Acción:** Agregar tests reales al proyecto de API o a la app fullstack: unit tests de la lógica de negocio (validaciones, cálculos) e integration tests de los endpoints. Configurar CI (GitHub Actions) que corra los tests en cada push y mostrar el badge de estado en el README. Mencionar la estrategia de testing en el case study, no solo el número de cobertura.
- **Dónde:** `Repos de los proyectos nuevos (API/app fullstack)`

**Falta un proyecto con integración de pagos / servicio externo serio (Stripe, email, etc.)** _(esfuerzo: medio)_
- Servicios 03 menciona 'email transaccional', 'webhooks' e 'integraciones', y Brew Bank es un banco, pero ningún demo público muestra una integración real con un proveedor externo. Integrar pagos en sandbox (Stripe test mode), email transaccional o un webhook handler demuestra manejo de secrets, callbacks asíncronos, estados de transacción y manejo de fallos de terceros: skills muy concretos que los e-commerce/SaaS piden. Es de los proyectos que más 'parece trabajo real' a un recruiter.
- **Acción:** Sumar a la app fullstack (o un proyecto nuevo) una integración real en modo test: checkout con Stripe sandbox, o email transaccional (Resend/SendGrid) disparado por un webhook. Documentar el flujo asíncrono, el manejo de webhooks y cómo gestiona los secrets. Dejar claro que es modo test para que nadie crea que cobra de verdad.
- **Dónde:** `work.html + nuevo proyecto o feature de la app fullstack`

**Los proyectos no están categorizados por capa: el recruiter no ve el rango front/back/datos de un vistazo** _(esfuerzo: medio)_
- En work.html los 4 proyectos se muestran en un carrusel horizontal homogéneo, todos etiquetados 'Desarrollo full stack' (work-hero__meta), pero todos son del mismo tipo (sitio de marca frontend). Cuando sume proyectos de back/datos/tooling, sin categorías el recruiter no percibirá el rango: parecerá 'más de lo mismo'. Categorizar (Frontend / Fullstack / Backend & APIs / Tooling) hace LEGIBLE la amplitud del stack en 5 segundos, que es justo el tiempo que un recruiter le da a la sección de proyectos.
- **Acción:** Agrupar los proyectos por capa con etiquetas/filtros claros: Frontend (los 4 actuales), Fullstack (app CRUD+auth, Brew Bank), Backend & APIs (la API REST), Datos (dashboard), Tooling/OSS (CLI, contribuciones). Mostrar la categoría visible en cada tarjeta y, si se puede, un filtro. El objetivo es que el rango se vea sin tener que leer cada case study.
- **Dónde:** `work.html (sección .works y .work-hero__meta)`

**Riesgo de saturar: hay que mostrar profundidad por capa, no 12 proyectos planos** _(esfuerzo: bajo)_
- Sumar 6-7 proyectos nuevos sin criterio convierte el portafolio en una lista que nadie lee. La regla para un junior remoto: pocos proyectos pero que cada uno pruebe una capa distinta del stack, con UN proyecto-estrella full stack profundo (Brew Bank) y demos satélite que cubran los huecos (API, consumo de API externa, dashboard, tooling). Mejor 5-6 proyectos que demuestren rango + 1 profundo, que 12 superficiales. La calidad del case study importa más que la cantidad.
- **Acción:** Definir un set curado de ~6 proyectos donde cada uno tenga un propósito de stack distinto y no se repita el tipo. Poner el proyecto fullstack profundo (Brew Bank) primero como ancla. Limitar a 1-2 demos por capa. Ordenarlos para contar una historia de rango: front pulido → fullstack profundo → back/API → datos → tooling/OSS.
- **Dónde:** `work.html (cantidad y orden de proyectos)`

**Falta variedad de tipo de aplicación: los 4 demos son todos sitios vitrina, no apps con lógica de usuario** _(esfuerzo: alto)_
- Cucú, Luco, Sellink y Cognition son todos del mismo arquetipo: sitio institucional/de marca que presenta información. No hay ninguna app donde el usuario tenga estado, sesión, datos propios o realice acciones que persistan (un to-do, un panel, un carrito real, un perfil). Un recruiter ve 'sabe hacer webs bonitas' pero no 'sabe construir software con lógica de aplicación'. La variedad de arquetipo (vitrina vs app con estado de usuario) importa tanto como la variedad de industria.
- **Acción:** Asegurar que el set incluya al menos 2-3 apps con lógica de usuario real (estado, sesión, datos propios persistidos), no solo sitios informativos. La app fullstack CRUD+auth y el dashboard cubren esto. Etiquetarlas como 'aplicación' vs 'sitio' para que la diferencia sea explícita.
- **Dónde:** `work.html (mix de tipos de proyecto)`

**Falta mostrar el modelo de datos / arquitectura en los case studies (los recruiters técnicos lo buscan)** _(esfuerzo: medio)_
- El case study de Cognition documenta bien decisiones frontend (Canvas, Service Worker, Schema), pero cuando lleguen los proyectos backend hará falta lo que ningún case actual tiene: un diagrama de arquitectura, el esquema de la base de datos (tablas/relaciones), el contrato de la API y el flujo de auth. Para un puesto full stack, un recruiter técnico mira justamente eso para evaluar si el candidato piensa en sistemas, no solo en píxeles.
- **Acción:** Extender la plantilla de case study con secciones para proyectos backend: diagrama de arquitectura (cliente → API → DB), esquema de datos (tablas y relaciones), tabla de endpoints, y diagrama del flujo de auth. Reusar el estilo visual existente (.case-tech-grid, .case-stack) para mantener coherencia.
- **Dónde:** `case/ (plantilla de case study para proyectos fullstack)`

### P2

**Falta una herramienta / CLI / script de automatización (prueba de pensamiento backend puro)** _(esfuerzo: bajo)_
- Servicios 03 menciona 'scripts de automatización' y 'webhooks', pero el portafolio no tiene nada que viva fuera del navegador. Una herramienta de línea de comandos o un script de automatización (procesar archivos, generar reportes, un bot, un scraper respetuoso, un webhook handler) demuestra que sabe escribir backend sin la muleta de una UI. Para roles que tienen tareas de tooling/integración interna esto es muy valorado y es de bajo costo construirlo.
- **Acción:** Construir una CLI o script útil en Node (ej: generador, conversor, automatización que él mismo use, o un webhook handler que conecte dos servicios). Publicarlo con README de instalación/uso y, si aplica, como paquete npm. No necesita demo visual: el repo con buen README ES la demo.
- **Dónde:** `GitHub (repo independiente) + mención en about/work`

**Falta cualquier contribución open source o evidencia de trabajo sobre código ajeno** _(esfuerzo: medio)_
- Todos los proyectos son greenfield propios y en solitario. Una contribución open source (aunque sea un fix de bug, mejora de docs, o un PR pequeño a una lib que use) demuestra algo que ningún proyecto propio puede: que sabe leer código ajeno, seguir convenciones de un repo, pasar un code review y colaborar vía Git/PR. Para trabajo remoto esto pesa mucho porque el día a día es exactamente eso: meterse en una codebase existente, no arrancar de cero.
- **Acción:** Hacer al menos 1-2 contribuciones a proyectos open source reales (empezar por 'good first issue' en libs que ya conoce). Linkear los PRs mergeados desde el portafolio o el README de GitHub. Aunque sean pequeños, el link a un PR aceptado en un repo ajeno vale más que otra landing propia.
- **Dónde:** `GitHub + sección about/work`

**Todo el portafolio es trabajo en solitario: falta evidencia de colaboración en equipo** _(esfuerzo: bajo)_
- Los 4 proyectos y Brew Bank son de un solo autor. El trabajo remoto full-time es colaborativo: ramas, PRs, code reviews, issues, convenciones de commits. No hay nada que muestre que Rony puede trabajar en un repo compartido con un flujo de equipo. Aunque sea simulado (un repo con flujo Git serio: feature branches, PRs auto-revisados, issues, milestones, conventional commits), comunica readiness para un entorno de equipo mucho mejor que commits sueltos a main.
- **Acción:** En el proyecto fullstack o la API, adoptar un flujo Git de equipo aunque trabaje solo: feature branches, PRs descriptivos con checklist, issues vinculados, conventional commits, CHANGELOG. Si puede, sumar un proyecto co-construido con otra persona (un colega/bootcamp) y nombrar explícitamente su rol. Mencionar el flujo de trabajo en el case study.
- **Dónde:** `GitHub (historial/flujo de los repos)`

**Falta un proyecto con tiempo real / WebSockets (rango técnico que el stack actual no insinúa)** _(esfuerzo: medio)_
- Todos los proyectos son request/response clásico. Un proyecto con tiempo real (chat en vivo, notificaciones, presencia, un tablero que se actualiza solo) vía WebSockets o Supabase Realtime amplía el rango percibido y es muy memorable en una demo. No es imprescindible para un junior, pero es un diferenciador fuerte y encaja con que ya menciona Supabase. Cuidado de no saturar: es un 'nice to have' después de cubrir CRUD+auth+API+tests.
- **Acción:** Construir una demo chica de tiempo real (chat, tablero colaborativo o feed live) usando Supabase Realtime o WebSockets nativos. Mantenerla pequeña y enfocada en demostrar el canal en vivo. Documentar cómo maneja reconexión y estado optimista.
- **Dónde:** `work.html + nuevo proyecto`

**La industria/dominio de los proyectos no comunica el tipo de empleo que busca** _(esfuerzo: medio)_
- Los proyectos cubren: estudio creativo, gastronomía, agencia, IA empresarial. Es razonable variedad de industria, pero todos en clave 'agencia/marca'. Para apuntar a empleos remotos en producto/SaaS (donde están los puestos junior remotos en USD), conviene que al menos un proyecto se parezca al dominio del trabajo objetivo: una app SaaS interna, una herramienta de productividad, un panel de admin. El portafolio debe mirar como el trabajo que quiere, no solo como freelance de marca.
- **Acción:** Orientar al menos un proyecto nuevo a un dominio tipo producto/SaaS (panel de administración, herramienta interna, app de productividad) para que el recruiter de un producto remoto se vea reflejado. No hace falta abandonar los de marca; sí balancear hacia el tipo de software que se construye en un empleo full-time.
- **Dónde:** `work.html (dominio de los proyectos)`


---

## Funnel de contratación y conversión

### P0

**No hay botón de agendar llamada (Calendly/Cal.com) en ningún lado** _(esfuerzo: medio)_
- El embudo termina siempre en mailto, WhatsApp o un form sin backend. process.html promete 'la primera llamada es gratis' y 'una llamada de 30-60 min', pero no hay forma de reservarla: el recruiter tiene que escribir, esperar respuesta y coordinar horario por ida y vuelta. Para un hiring manager de otro huso, agendar self-service elimina 2-3 intercambios de fricción y es la conversión de mayor intención. Es la pieza que más falta en el funnel.
- **Acción:** Crear cuenta Cal.com (gratis), definir un evento 'Charla 20 min' con disponibilidad real en GMT-3 mostrando conversión automática de huso. Embeber el link como CTA secundario en hero, contact.html y en el bloque proc-cta de process.html (que ya dice 'la primera llamada es gratis').
- **Dónde:** `index.html hero / contact.html / process.html proc-cta`

**El hero tiene dual-CTA mal balanceado: 'Ver proyectos' + 'Contacto', falta separar intención de contratación** _(esfuerzo: bajo)_
- Los dos CTA del hero (hero__cta 'Ver proyectos' y hero__cta--ghost 'Contacto') apuntan a explorar y a un genérico 'Contacto'. No hay un CTA explícito de contratación tipo 'Contratame' / 'Trabajemos juntos' / 'Agendar charla'. Un recruiter que ya decidió que le interesa no tiene un camino directo de alta intención; tiene que pasar por 'Contacto' que mezcla proyectos freelance y empleo. Separar el camino 'mirar trabajo' del camino 'quiero contratarte' es CRO básico de portfolio.
- **Acción:** Cambiar el CTA ghost de 'Contacto' a algo orientado a contratación ('Trabajemos juntos' / 'Agendá una charla') que vaya directo a Cal.com o al form con asunto pre-seleccionado job. Mantener 'Ver proyectos' como CTA primario.
- **Dónde:** `index.html líneas 192-202 (hero__actions)`

**No hay CTA persistente en el header** _(esfuerzo: bajo)_
- El header (header__actions) solo tiene toggles de idioma, tema y menú. La nav es Inicio/Trabajos/Sobre mí/Contacto. No hay un botón de acción tipo 'Contratame' o 'Agendar' visible en todo momento. Un recruiter que llega scrolleando una case study o el about no tiene un CTA siempre a la vista; tiene que volver a buscar 'Contacto' en la nav. Un botón sticky de conversión en el header sube la tasa de contacto sin depender de que el usuario llegue al final de la página.
- **Acción:** Agregar en header__actions un botón destacado 'Hablemos' / 'Contratame' que enlace a contact o a Cal.com, presente en las 13 páginas. Diferenciarlo visualmente de los toggles.
- **Dónde:** `index.html líneas 145-157 (header__actions), replicar en todas las páginas`

**No se responde la objeción de inglés en ningún lado (riesgo crítico para empleo remoto)** _(esfuerzo: bajo)_
- Para un puesto remoto la primera objeción de un recruiter angloparlante es '¿se comunica en inglés?'. El sitio solo muestra el badge 'ES · EN' como skill de idioma, sin contexto. No dice si es inglés técnico/lectura, conversacional, ni cómo maneja standups/PRs/async en inglés. Dado el perfil (sin inglés avanzado, según criterios), esto hay que encuadrarlo proactivamente: 'inglés técnico y async sólido, comunicación escrita fluida' baja el riesgo percibido. Dejarlo solo como 'EN' genera dudas o falsas expectativas.
- **Acción:** Agregar en about.html y/o FAQ una respuesta honesta y bien encuadrada sobre inglés: nivel de lectura/escritura técnica, comodidad con comunicación async escrita (PRs, docs, chat), y aclarar si las calls son en español. Convertir una objeción en un encuadre controlado.
- **Dónde:** `about.html (sección Bio o nueva), faq.html (sin pregunta de inglés hoy)`

**La FAQ es 100% freelance/cliente, no responde ninguna objeción de empleador** _(esfuerzo: medio)_
- Las 11 preguntas de faq.html son de cliente comprando un sitio: '¿Cuánto tarda un proyecto?', '¿cómo cobrás?', '¿aceptás cripto?', '¿hacés ecommerce?', '¿en qué te diferenciás de una agencia?'. Cero preguntas que se hace un hiring manager: disponibilidad full-time, modalidad de contrato (relación de dependencia vs contractor), expectativa salarial/rango, zona horaria de trabajo, experiencia previa en equipo, manejo de Git en equipo, inglés. El recruiter no encuentra respuestas a sus objeciones reales.
- **Acción:** Agregar un bloque de FAQ orientado a empleo (puede ser una pestaña/sección dentro de faq.html): '¿Estás disponible full-time?', '¿Trabajás como contractor o en relación de dependencia?', '¿Tenés experiencia trabajando en equipo con Git/PRs?', '¿Qué husos cubrís?', '¿Inglés?'. Responder las objeciones que hoy quedan sin tocar.
- **Dónde:** `faq.html (summaries líneas 189-264, todas freelance)`

### P1

**El indicador de disponibilidad es vago: 'Disponible · 2026' sin fecha de arranque** _(esfuerzo: bajo)_
- El badge dice 'Disponible · 2026' (hero.tag, footer.status) y contact dice 'Aceptando proyectos · 2026'. Para un empleador la pregunta clave es '¿desde cuándo puede empezar?'. '2026' es un año entero, no comunica nada accionable. Falta un 'Disponible para empezar desde [mes]' o 'Disponible inmediatamente / full-time'. Sin fecha de inicio concreta el recruiter no sabe si encaja con su timeline de contratación.
- **Acción:** Reemplazar 'Disponible · 2026' por algo concreto y editable: 'Disponible full-time · desde ya' o 'Disponible para empezar en junio 2026'. Centralizar en el i18n para no tener que editar 13 archivos.
- **Dónde:** `index.html línea 176 (hero.tag), línea 528 (footer.status), contact.html línea 242`

**El form no comunica qué pasa después de enviar (próximos pasos)** _(esfuerzo: bajo)_
- El form de contact.html no tiene ningún texto de expectativa: el usuario no sabe si recibirá un auto-reply, en cuánto, ni qué sigue. Solo hay un form-note vacío que se llena por JS al enviar. Falta un microcopy bajo el botón tipo 'Te respondo en menos de 24h con próximos pasos / coordinamos una llamada'. Reducir la incertidumbre del 'envié, ¿y ahora?' baja la fricción del submit y aumenta la confianza de que no cae en un vacío.
- **Acción:** Agregar bajo el btn-submit un microcopy de expectativa: 'Te respondo en menos de 24h. Si preferís, agendá una charla directo acá [link Cal.com]'. Dar una alternativa a esperar.
- **Dónde:** `contact.html líneas 231-236`

**No hay sección 'próximos pasos si querés trabajar conmigo' orientada a empleo** _(esfuerzo: medio)_
- process.html describe un proceso de proyecto freelance (briefing, presupuesto cerrado, deploy, 30 días de soporte). No existe un equivalente para un recruiter: '¿Cómo es contratarme como empleado? Qué espero, cómo es mi onboarding, cómo trabajo en equipo, cómo me sumo a tu stack'. El funnel de empleo no tiene su propio recorrido de próximos pasos; el único proceso documentado asume que sos un cliente comprando un sitio.
- **Acción:** Crear un bloque o sección 'Para equipos / empleadores' con próximos pasos concretos: 1) charla de 20 min, 2) revisión técnica de mi código en GitHub, 3) prueba/challenge si querés, 4) arranco. Distinto del proceso de proyecto freelance.
- **Dónde:** `Nueva sección en about.html o process.html`

**No hay señales de confianza cerca de los CTA (solo aparecen lejos)** _(esfuerzo: medio)_
- Los CTA del hero, del contact-card y del form están 'desnudos': no tienen ninguna señal de confianza adyacente (ni un mini-testimonio, ni 'X proyectos entregados', ni logos, ni 'respondo el mismo día'). Las únicas señales (< 24h, ES/EN, Remoto) están en bloques de facts separados, no pegadas al botón donde se decide la acción. En CRO, la prueba social/confianza debe estar en el punto de conversión, no en otra sección.
- **Acción:** Colocar una micro-señal de confianza inmediatamente debajo de cada CTA principal (hero, contact-card, form): por ej. una línea de testimonio corto, o 'Código abierto en GitHub · Respondo el mismo día'. Acercar la prueba al punto de decisión.
- **Dónde:** `index.html hero (192-202) y contact-card (487-522), contact.html form`

**El solapamiento de huso horario (time-zone overlap) no se explicita para equipos remotos** _(esfuerzo: bajo)_
- El sitio muestra GMT-3 y un reloj en vivo, pero no traduce eso a la pregunta que se hace un equipo distribuido: '¿cuántas horas se solapa con mi equipo?'. Un hiring manager en US-East (GMT-5/-4) o Europa necesita saber el overlap sin calcular. GMT-3 en realidad tiene excelente overlap con US y aceptable con Europa por la mañana: eso es un argumento de venta que hoy queda implícito. Mostrarlo explícito convierte un dato neutro en ventaja competitiva.
- **Acción:** Agregar cerca del reloj/disponibilidad una línea tipo 'GMT-3 · solapo de jornada completa con US (EST/PST) y mañanas con Europa'. Convertir el dato de huso en argumento de overlap.
- **Dónde:** `contact.html contact-meta (244-247), index.html hero__top (176-178)`

**No hay un CTA secundario de bajo compromiso ('mirá mi código') para recruiters técnicos** _(esfuerzo: bajo)_
- Un hiring manager técnico no quiere agendar una call de entrada: quiere ver código primero. El link a GitHub existe pero está enterrado en footer y en la lista de canales de contact. No hay un CTA destacado tipo 'Revisá mi código en GitHub' que sea el paso de menor fricción para un evaluador técnico. El funnel asume que todos quieren hablar; el recruiter técnico quiere leer código antes. Falta ese escalón intermedio en la escalera de compromiso.
- **Acción:** Promover GitHub a CTA visible (no solo footer): un botón 'Mirá mi código' en hero o en work.html. Idealmente apuntando a repos reales con READMEs (depende de que existan). Dar el camino de baja fricción al evaluador técnico.
- **Dónde:** `index.html (GitHub solo en footer 541), contact.html (canal 149-151)`

**El bloque proc-cta promete 'primera llamada gratis' pero no permite agendarla** _(esfuerzo: bajo)_
- En process.html el cierre (proc-cta) dice '¿Empezamos? Contame en qué estás trabajando. Sin compromiso — la primera llamada es gratis' y el botón solo lleva a 'contact'. Se promete una llamada concreta y de bajo compromiso pero el siguiente paso es un form genérico, no reservar la llamada. Hay un desajuste entre la promesa ('llamada gratis') y la acción disponible (escribir un mail). El momento de mayor intención del usuario en esa página se desperdicia.
- **Acción:** Cambiar el botón de proc-cta para que lleve directo a agendar (Cal.com) en vez de 'contact', cumpliendo la promesa de 'la primera llamada es gratis' con un paso real de reserva.
- **Dónde:** `process.html líneas 247-255 (proc-cta)`

**No hay diferenciación de copy para los dos públicos (cliente freelance vs empleador)** _(esfuerzo: medio)_
- Todo el copy del sitio habla a un cliente que compra un sitio web ('tu proyecto', 'tu marca', 'presupuesto cerrado', 'deploy con tu dominio'). El servicios block, el proceso y la FAQ asumen freelance. Un recruiter que busca empleado full-time no se siente interpelado en ningún lado: no hay un track de 'para equipos que quieren sumar un dev'. El visitante-empleador tiene que auto-traducir todo, y muchos rebotan porque 'parece que solo hace freelance'. Falta un switch o sección que hable explícitamente al empleador.
- **Acción:** Agregar un track/sección clara para empleadores (puede ser un bloque 'Para equipos' en home o en about) que hable de sumarse a un equipo, modalidad full-time remota, encaje en stack existente. No obligar al recruiter a leerse el copy freelance y auto-traducir.
- **Dónde:** `index.html services (422-484) y contact-card; copy global orientado a freelance`

**No hay encuadre de seniority/experiencia que responda '¿cuántos años tiene?'** _(esfuerzo: medio)_
- La objeción silenciosa de todo recruiter es el nivel real: junior/semi-senior, años de experiencia, si puede trabajar autónomo. about.html dice 'Desarrollador full stack' y 'trabajo de forma independiente' pero no encuadra seniority ni autonomía de forma que tranquilice ('puedo tomar una tarea y entregarla sin supervisión constante'). Para empleo, no responder esto deja al recruiter adivinando y muchos descartan por las dudas. Encuadrar la autonomía y el nivel de forma honesta reduce el descarte por incertidumbre.
- **Acción:** Agregar en about un encuadre honesto de nivel y autonomía: cómo trabaja sin supervisión, qué tipo de tareas resuelve solo, disposición a aprender en el rol. Convierte la incertidumbre de seniority en una señal de confiabilidad.
- **Dónde:** `about.html bio (142-161)`

**No hay prueba de fiabilidad/compromiso (puntualidad, entregas) cerca de la decisión** _(esfuerzo: medio)_
- El principio 'Comunicación clara — plazos reales y entregas sin sorpresas' (about.html) y el proceso con duraciones existen, pero son afirmaciones. Para un empleador el miedo a contratar a alguien remoto y junior es la fiabilidad: '¿va a desaparecer? ¿cumple plazos?'. No hay ninguna prueba de track record de compromiso (proyectos entregados a tiempo, continuidad, un testimonio que hable de fiabilidad). Esta es la objeción emocional clave en contratación remota y no está atendida con evidencia.
- **Acción:** Sumar evidencia de fiabilidad cerca de los CTA: un testimonio que mencione cumplimiento de plazos, o un dato verificable de continuidad/commits. Atacar el miedo a la informalidad del freelancer/junior remoto con prueba concreta.
- **Dónde:** `about.html principles (209-235) e index.html antes del contact-card`

### P2

**'Respuesta < 24h' se afirma pero no se demuestra ni se respalda** _(esfuerzo: bajo)_
- Hero (hero.fact.response), contact-card y contact-meta repiten '< 24h' / 'Menos de 24h'. Es una afirmación sin prueba. Un recruiter escéptico no tiene señal de que sea real. Falta cualquier evidencia: 'normalmente respondo en pocas horas', un historial, o al menos un microcopy que refuerce ('te escribo el mismo día'). Una promesa de velocidad sin respaldo pesa poco; con una señal concreta se vuelve diferenciador real frente a otros candidatos.
- **Acción:** Reforzar el claim con microcopy honesto cerca del form ('Suelo contestar el mismo día, en horario GMT-3') y, si es posible, sumar una captura/testimonio que lo demuestre. Evitar inflar si no es verificable.
- **Dónde:** `index.html líneas 230-232, contact.html líneas 248-251`

**El select del form mezcla freelance y empleo sin priorizar contratación** _(esfuerzo: bajo)_
- El select 'Asunto' tiene Proyecto / Oportunidad laboral / Colaboración / Otro, con 'Proyecto' implícitamente primero. Para un portfolio cuyo objetivo declarado es empleo remoto full-time, 'Oportunidad laboral' debería estar primero o destacado. Además 'Proyecto' como default sesga la lectura hacia freelance. El orden de las opciones comunica la prioridad real del candidato.
- **Acción:** Reordenar las opciones poniendo 'Oportunidad laboral / Empleo remoto' primero, o renombrar para dejar claro que recibe ambas. Considerar separar 'Empleo full-time' de 'Freelance/Proyecto'.
- **Dónde:** `contact.html líneas 205-211`

**El microcopy de los botones es genérico y no vende acción** _(esfuerzo: bajo)_
- Los botones dicen 'Ver proyectos', 'Contacto', 'Explorar trabajos', 'Enviar mensaje', 'Escribime'. Son funcionales pero sin gancho ni orientación a contratación. Un recruiter no encuentra un botón que hable su idioma ('Trabajemos juntos', 'Sumame al equipo', 'Agendá 20 min'). El microcopy de los botones es una palanca barata de conversión: pasar de 'Contacto' a un verbo de intención sube clics.
- **Acción:** Reescribir el microcopy de los CTA principales con verbos de intención y orientación a empleo. Ej: 'Enviar mensaje' -> 'Hablemos de tu equipo', 'Contacto' -> 'Trabajemos juntos'. Probar 1-2 variantes.
- **Dónde:** `index.html (194, 200, 285), contact.html (232), process.html (253)`

**No hay manejo de exit-intent ni recordatorio para quien se va sin contactar** _(esfuerzo: medio)_
- El sitio no captura de ninguna forma al visitante que está por irse sin convertir. No hay exit-intent, ni un prompt de '¿Te llevás mi CV?', ni nada que recupere a un recruiter que estuvo mirando y cierra la pestaña. El CV en PDF está enterrado en el footer (footer.cv). Para un candidato que busca trabajo, dejar ir al visitante sin al menos ofrecerle el CV o un modo fácil de guardarlo es una fuga clara del embudo.
- **Acción:** Agregar un exit-intent discreto (o un sticky bar) que ofrezca el CV en PDF y/o el link de agenda cuando el usuario muestra intención de salir. Mantenerlo sobrio para no romper el tono editorial.
- **Dónde:** `js/main.js + nuevo componente; CV hoy solo en footer línea 558`

**No hay rango salarial ni expectativa de compensación para filtrar/atraer** _(esfuerzo: bajo)_
- El sitio no menciona en ningún lado modalidad de compensación ni rango. Para un perfil que apunta a un rango específico (USD/mes), no declarar nada genera dos fricciones: recruiters que pagan menos igual escriben (pérdida de tiempo) y recruiters que encajan no saben si están en rango. Un microcopy honesto de expectativa (o al menos 'abierto a roles full-time remotos, hablemos de números') pre-califica al lead y reduce ida y vuelta.
- **Acción:** Decidir si exponer un rango o un encuadre suave ('Busco roles full-time remotos en USD, charlamos el número'). Ubicarlo en about o en la FAQ de empleo. Pre-califica leads sin cerrar puertas.
- **Dónde:** `about.html bio__facts (155-160) o nueva FAQ de empleo`

**El WhatsApp como canal principal puede frenar a recruiters internacionales** _(esfuerzo: bajo)_
- El FAB de WhatsApp está en todas las páginas y es uno de los dos canales destacados en el contact-card ('Escribime por mail o WhatsApp'). WhatsApp es excelente para clientes LATAM pero un recruiter de US/Europa probablemente prefiere email/LinkedIn/agenda y puede leer 'WhatsApp primero' como señal de informalidad freelance local. No es que sobre, pero como canal co-primario para empleo remoto internacional puede restar. Falta jerarquizar email/agenda/LinkedIn para el público empleador.
- **Acción:** Mantener WhatsApp pero re-jerarquizar para el público de empleo: en el contact-card y la página de contacto poner email + agenda + LinkedIn como canales primarios y WhatsApp como secundario, o etiquetarlo ('WhatsApp · LATAM').
- **Dónde:** `index.html contact-card (491-501), contact.html (143-156), FAB en todas`


---

## Gap página por página (las 13 páginas)

### P0

**La home no tiene una sección "Qué aporto a un equipo" orientada a empleadores** _(esfuerzo: medio)_
- index.html tiene Hero, Featured, Signal (Diseño/Código/Estrategia), Services y Contact Card. Las tres tarjetas de Services (Sitio full stack, Landing, Integraciones) están redactadas como oferta de servicios freelance a clientes, no como skills que un empleador contrata. Un reclutador que cae en la home no ve en ningún bloque qué rol cubre Rony dentro de un equipo (frontend, integraciones, QA), cómo colabora ni con qué seniority. Falta un bloque tipo "Para equipos" con 3-4 puntos: ownership de features, code reviews, trabajo async en GMT-3, onboarding rápido.
- **Acción:** Agregar en index.html una sección nueva entre Signal y Services titulada p.ej. "Cómo sumo a un equipo" con 3-4 cards (frontend ownership, integraciones/APIs, performance/QA, comunicación async) escritas en lenguaje de empleo, no de venta de servicios.
- **Dónde:** `index.html (entre sección .signal y .services, líneas ~420-484)`

**FAQ no tiene ninguna pregunta orientada a empleadores/reclutadores** _(esfuerzo: medio)_
- Las 11 preguntas de faq.html son 100% de cliente freelance: cuánto tarda un proyecto, cómo cobrás, mantenimiento, ecommerce, cripto, diferencia con agencia, etc. Cero preguntas sobre empleo: ¿buscás full-time o freelance?, ¿relocalizás o solo remoto?, ¿qué seniority?, ¿qué pretensión salarial / banda USD?, ¿inglés a qué nivel?, ¿disponibilidad de inicio?, ¿modalidad de contratación (relación de dependencia, contractor, monotributo)?. Un reclutador no encuentra ninguna respuesta a sus dudas reales.
- **Acción:** Agregar a faq.html un bloque de 5-7 preguntas para empleadores (full-time vs freelance, remoto/relocación, seniority, nivel de inglés real, disponibilidad de inicio, modalidad de contratación, expectativa salarial) o separar la FAQ en dos pestañas: Para empresas / Para clientes.
- **Dónde:** `faq.html (.faq-body, líneas 187-269)`

### P1

**El hero no muestra el stack/tecnologías visibles de un vistazo** _(esfuerzo: bajo)_
- En index.html el hero tiene facts (Servicios, Respuesta, Idiomas, Modalidad) pero no lista las tecnologías. Un reclutador escanea 5 segundos buscando "React, Node, TypeScript". Hoy esos términos solo aparecen enterrados en Services y en about. El ticker tiene conceptos (Performance, Accesibilidad) pero no nombres de tecnologías concretas que el ATS o el recruiter buscan.
- **Acción:** Reemplazar o sumar al ticker / a hero__facts una fila de chips tecnológicos concretos (React · TypeScript · Node.js · Supabase · Vercel) visibles sin scroll.
- **Dónde:** `index.html hero (líneas 224-241) o ticker (líneas 256-271)`

**La home no tiene prueba social ni logos/contexto de los proyectos** _(esfuerzo: bajo)_
- El deck de Featured muestra 4 cards de proyectos pero sin ninguna línea de credibilidad (años de experiencia totales, cantidad de proyectos entregados, tecnologías dominadas en números). No hay una franja de "números" (ej: 4 proyectos en producción, 90+ Lighthouse, 0 dependencias de framework) que dé escala rápida. Es un patrón estándar de portfolios senior que falta.
- **Acción:** Agregar una franja de stats/metrics breve (3-4 números) después del Featured o dentro del hero: proyectos, mejor Lighthouse, tiempo de respuesta, años codeando.
- **Dónde:** `index.html (después de .featured, antes de .signal)`

**About no tiene timeline de formación/educación ni cómo aprendió a programar** _(esfuerzo: medio)_
- about.html tiene Bio (3 párrafos), Stack, Principios y Contact Card. Para un junior la historia de "cómo llegué a esto" (autodidacta, bootcamp, estudios) es clave para empleadores que evalúan trayectoria y motivación. No hay ninguna mención a educación, cursos, certificaciones ni un relato de aprendizaje. La bio salta directo a "desarrollador full stack" sin contexto de origen.
- **Acción:** Agregar en about.html una sección "Formación" o "Cómo llegué acá" con educación, cursos/certificaciones relevantes y un par de líneas de narrativa de aprendizaje.
- **Dónde:** `about.html (nueva sección entre .bio y .stack-grid)`

**About no tiene CTA inline para descargar el CV ni link a GitHub/LinkedIn en el cuerpo** _(esfuerzo: bajo)_
- En about.html el CV solo está en el footer (link genérico compartido por todas las páginas). La página "Sobre mí" es exactamente donde un reclutador busca el CV y los perfiles, pero el cuerpo de la página no tiene ningún botón "Descargar CV" ni links directos a GitHub/LinkedIn en el bloque bio o facts. Obliga a buscar en el footer.
- **Acción:** Agregar en el bloque bio o bajo bio__facts de about.html un par de botones inline: "Descargar CV (PDF)", "GitHub", "LinkedIn".
- **Dónde:** `about.html (.bio__text, después de ul.bio__facts, línea ~160)`

**Work no separa proyectos cliente/demo de proyectos fullstack propios** _(esfuerzo: medio)_
- work.html presenta 4 sitios de marca (frontend) como "4 proyectos · en producción". No hay categorización que distinga demos de marca frontend de un proyecto fullstack con backend real (como Brew Bank que se va a sumar). Para un puesto fullstack, el reclutador necesita ver claramente cuál proyecto tiene backend/DB/auth de verdad, y hoy todos se ven iguales.
- **Acción:** Introducir agrupación o etiqueta de categoría en work.html ("Fullstack con backend" vs "Frontend / marca") para que el proyecto fullstack destaque del resto.
- **Dónde:** `work.html (.work-hero__meta y .work-item, líneas 169-291)`

**Contact no tiene link a agenda (Calendly/Cal.com) para reservar llamada** _(esfuerzo: bajo)_
- contact.html ofrece email, WhatsApp, GitHub, LinkedIn y un formulario, pero ningún link para agendar una llamada directamente. process.html promete "la primera llamada es gratis" y "una llamada de 30-60 min", pero no hay forma de reservarla. Para empleos remotos internacionales, un botón "Agendar 15 min" reduce fricción enorme frente a coordinar por email a través de husos horarios.
- **Acción:** Agregar en contact.html (y enlazar desde process CTA) un botón "Agendar una llamada" con Calendly o Cal.com.
- **Dónde:** `contact.html (.contact-channels o .contact-meta, líneas 143-156 / 239-252)`

**Contact no muestra disponibilidad horaria real ni horario de solapamiento con otros husos** _(esfuerzo: bajo)_
- contact.html tiene un reloj GMT-3 en vivo y "respuesta <24h", pero no indica franja horaria de trabajo ni cuántas horas solapa con US/EU. Para trabajo remoto el overlap horario es un filtro de contratación duro; mostrar "disponible 9-18 GMT-3, solapo 4h con EST / 3h con CET" responde una objeción antes de que surja.
- **Acción:** Agregar a contact.html (en .contact-meta) la franja horaria de trabajo y las horas de solapamiento con zonas US/EU.
- **Dónde:** `contact.html (.contact-meta, líneas 239-252)`

**Los case studies no tienen galería ni capturas de pantallas internas del proyecto** _(esfuerzo: medio)_
- case/cognition.html (y los otros 3) muestran UNA sola imagen de portada (case-cover) más bloques de texto. No hay galería de pantallas (mobile vs desktop, secciones internas, estados, antes/después). El caso afirma "11 páginas, calculadora ROI, chat por intención" pero no muestra ninguna de esas pantallas. Para evaluar diseño/UI real, un reclutador necesita ver más de una captura.
- **Acción:** Agregar a cada case study una galería de 3-5 capturas (desktop + mobile + features clave como la calculadora ROI / el chat). Reutilizar el frame de navegador ya existente.
- **Dónde:** `case/*.html (después de .case-cover, líneas ~160-200)`

**Los case studies no tienen navegación prev/next entre proyectos** _(esfuerzo: bajo)_
- case/cognition.html termina con .case-next que solo enlaza "Ver todos los proyectos" (vuelve a work). No hay navegación a el caso anterior/siguiente. El patrón estándar de portfolio es "← Proyecto anterior | Proyecto siguiente →" para que el reclutador recorra todos los casos sin volver al índice cada vez, lo que aumenta páginas vistas por sesión.
- **Acción:** Reemplazar/ampliar el bloque .case-next de cada case study con navegación prev/next que enlace a los otros casos por nombre, además del link a work.
- **Dónde:** `case/*.html (.case-next, líneas ~275-280 en cognition)`

**Los case studies no tienen tabla de specs (cliente, rol, duración, año, URL) resumida** _(esfuerzo: bajo)_
- El case de Cognition tiene stats (11 páginas, Lighthouse 94, LCP, PWA) pero no una ficha de specs estándar: rol exacto de Rony en el proyecto, duración, año, tipo de cliente, si fue solo o en equipo, URL. Esa metadata es lo primero que un reclutador busca para contextualizar. Hoy hay que inferirla del texto.
- **Acción:** Agregar a cada case study una ficha de specs (Rol · Año · Duración · Tipo · Stack · Link) en formato tabla/lista compacta cerca del hero.
- **Dónde:** `case/*.html (junto a .case-hero__tags o .case-overview, líneas 150-198)`

**Los case studies no tienen sección de aprendizajes / qué haría distinto** _(esfuerzo: bajo)_
- Los casos tienen Problema, Solución, Decisiones técnicas y Stack, pero no una sección de "Aprendizajes" o "Qué haría distinto la próxima vez". Para evaluar a un junior, los empleadores valoran muchísimo la capacidad de reflexión sobre el propio trabajo; una sección de aprendizajes honestos diferencia un portfolio que vende de uno que demuestra criterio y crecimiento.
- **Acción:** Agregar a cada case study una sección breve "Aprendizajes" o "Qué cambiaría" con 2-3 reflexiones reales sobre decisiones del proyecto.
- **Dónde:** `case/*.html (antes de .case-next)`

**Los case studies presentan métricas como verificadas sin fuente ("según field data")** _(esfuerzo: bajo)_
- case/cognition.html afirma "LCP medio de 2.1s en 3G lento según field data" y "Rich results en Google validados", pero al ser demos (no productos con tráfico real) no puede haber field data ni CrUX real. Esto es un riesgo de credibilidad: un reclutador técnico que pregunta por la fuente puede pillar la inconsistencia. Si el reencuadre a demos honestos se va a hacer, estas afirmaciones de métricas "de campo" deben revisarse específicamente.
- **Acción:** Revisar cada afirmación de métrica en los case studies y, donde sean demos, etiquetarlas como medición de lab (Lighthouse local) en lugar de field data, o quitarlas.
- **Dónde:** `case/cognition.html (línea 252 y similares en otros casos)`

**Los case studies no enlazan el código de cada feature técnica que describen** _(esfuerzo: medio)_
- El caso describe en detalle el Service Worker, la calculadora ROI, el chat por intención, el canvas con throttle a 30fps. Es contenido perfecto para enlazar al archivo exacto en GitHub ("ver el sw.js", "ver la calculadora"). Sin repos enlazados, estas descripciones técnicas tan ricas quedan sin respaldo verificable, justo lo que un evaluador técnico quiere comprobar.
- **Acción:** Cuando existan los repos, enlazar desde cada bloque de "Decisiones técnicas" al archivo/línea concreto en GitHub que implementa esa feature.
- **Dónde:** `case/*.html (.case-tech-grid, líneas 220-256 en cognition)`

**Process es 100% pipeline de cliente freelance, sin equivalente para empleadores** _(esfuerzo: medio)_
- process.html describe un pipeline de proyecto cliente (Briefing, Wireframes, Diseño, Desarrollo, QA, Deploy) con anticipos del 50%, presupuesto cerrado, dominio del cliente y "la primera llamada es gratis". Para un empleador, esta página refuerza que Rony vende proyectos, no que se integra a un equipo. No hay un equivalente que muestre cómo trabaja DENTRO de un equipo (git flow, PRs, code review, tickets, dailys async).
- **Acción:** Crear una variante o sección en process.html "Cómo trabajo en un equipo" (ramas/PRs, code review, gestión de tickets, comunicación async, estimaciones) además del pipeline de cliente, o reencuadrar la página.
- **Dónde:** `process.html (.proc-steps, líneas 137-245)`

**Work no tiene CTA hacia el código/GitHub a nivel página, solo "ver caso de estudio"** _(esfuerzo: bajo)_
- En work.html cada work-item enlaza solo a su case study interno. No hay, ni a nivel de página ni por proyecto, un enlace directo al repositorio ni al demo en vivo (el demo en vivo sí está en index y en el case, pero work.html no lo ofrece). Un reclutador técnico en la página de trabajos espera poder saltar al código o al sitio en vivo desde ahí mismo.
- **Acción:** Agregar en cada .work-item__info de work.html links secundarios "Ver en vivo ↗" y "Código ↗" además del link al caso de estudio.
- **Dónde:** `work.html (.work-item__info, líneas 196-291)`

**About no tiene sección de idiomas con nivel real de inglés** _(esfuerzo: bajo)_
- about.html repite "ES · EN" como dato plano en facts, igual que home y contact. No hay ningún detalle del nivel real de inglés (lectura técnica, conversacional, escrito). Dado que el inglés es un filtro de contratación remota crítico y un criterio explícito del perfil de Rony (sin inglés avanzado), conviene declararlo con honestidad y precisión en about (ej: "inglés técnico: leo/escribo fluido, conversacional intermedio") para evitar descartes o malentendidos.
- **Acción:** En about.html, expandir el dato de idiomas a una micro-sección honesta con el nivel real de inglés por habilidad (lectura/escritura/conversación).
- **Dónde:** `about.html (.bio__facts líneas 155-160, o nueva micro-sección)`

**Ninguna página tiene un bloque de "disponibilidad" diferenciando full-time de freelance** _(esfuerzo: bajo)_
- Todas las páginas muestran "Disponible · 2026" y "Aceptando proyectos", lenguaje de freelance. Como Rony busca primariamente empleo full-time remoto (y acepta freelance), ninguna página deja claro ese orden de preferencia. El badge "Aceptando proyectos" en about/contact sugiere lo contrario al objetivo principal. Falta un statement de disponibilidad que priorice empleo full-time.
- **Acción:** Ajustar el copy de disponibilidad (badges "Disponible", "Aceptando proyectos") en todas las páginas para que comunique "Abierto a posiciones full-time remotas · también freelance".
- **Dónde:** `index/about/contact (footer__badge, about.facts.status_val, contact.availability_val)`

### P2

**About no humaniza: sin hobbies, intereses ni nada fuera del trabajo** _(esfuerzo: bajo)_
- La foto (rony.jpg) es un retrato neutro con figcaption "Rony Cozzi · 2026". No hay nada que humanice al candidato: qué le interesa fuera del código, qué lo motiva, qué tipo de problemas disfruta. Los equipos remotos contratan personas, no solo CVs; una micro-sección humana mejora el recall y la conexión en entrevistas.
- **Acción:** Agregar en about.html un bloque corto "Fuera del código" o una frase humana junto a la foto (intereses, qué disfruta construir, música/deporte) sin caer en el tono DJ prohibido.
- **Dónde:** `about.html (.bio, junto a figure.bio__photo, líneas 137-161)`

**El Stack de about no distingue nivel de dominio ni separa "sé bien" de "toco"** _(esfuerzo: medio)_
- about.html stack-grid lista 6 columnas con todas las tecnologías al mismo nivel visual (HTML, React, Node, Supabase, Firebase, Airtable, Python scripts, etc.). Para un junior honesto importa distinguir lo que domina de lo que conoce a nivel básico; mezclar todo plano puede leerse como inflado y genera preguntas incómodas en entrevista. No hay indicación de proficiency.
- **Acción:** Reorganizar el stack en about.html en dos niveles claros ("Trabajo a diario" vs "Conozco / he usado") o agregar un marcador sutil de dominio, para que sea honesto y defendible en entrevista.
- **Dónde:** `about.html (.stack-grid__cols, líneas 169-206)`

**Work no tiene fechas reales por proyecto ni duración, solo años genéricos** _(esfuerzo: bajo)_
- work.html muestra "2025-2026" en el hero pero las work-item no llevan fecha individual ni duración del proyecto. En index el deck sí muestra card__year (2025/2026) pero work.html (la página principal de proyectos) no expone año por ítem en la tarjeta. Un reclutador no puede ubicar la cronología ni ver progresión técnica entre el primer y el último proyecto.
- **Acción:** Agregar año (y opcionalmente duración) en cada .work-item__info de work.html, consistente con los años ya usados en el deck de index.
- **Dónde:** `work.html (.work-item__info de cada artículo, líneas 196-291)`

**Work no tiene filtros por tecnología/tipo ni vista de lista alternativa** _(esfuerzo: medio)_
- work.html usa un track horizontal con pin-scroll (4 proyectos). No hay forma de filtrar por tecnología (React vs vanilla, PWA, fullstack) ni una vista de lista/grid alternativa para quien no quiere hacer scroll horizontal. Con solo 4 proyectos el filtro es opcional, pero la vista de lista accesible/scaneable sí importa: el scroll horizontal con pin puede ser frustrante en desktop y poco escaneable para un recruiter apurado.
- **Acción:** Agregar a work.html un toggle de vista (horizontal / grid-lista) y, cuando se sume Brew Bank y más proyectos, chips de filtro por tecnología/tipo.
- **Dónde:** `work.html (.works sección, líneas 176-310)`

**El formulario de contacto no permite adjuntar nada ni enlazar a CV/portfolio del que escribe** _(esfuerzo: bajo)_
- El formulario (name, email, subject, message) está pensado para que un cliente describa un proyecto. Para una oportunidad laboral, un reclutador podría querer dejar un link a la vacante o a la empresa. El select tiene opción "Oportunidad laboral" pero ningún campo opcional para link de la posición/empresa. Pequeño detalle que mejora el fit del form al caso empleo.
- **Acción:** Agregar al form de contact.html un campo opcional "Link de la posición / empresa (opcional)" que aparezca o tenga sentido cuando el asunto es Oportunidad laboral.
- **Dónde:** `contact.html (form.contact-form, líneas 159-236)`

**Contact no aclara el comportamiento del formulario (mailto vs backend) al usuario** _(esfuerzo: bajo)_
- El form usa data-contact-form y data-email apuntando al Gmail; previsiblemente abre el cliente de correo o arma un mailto. El usuario no recibe ninguna expectativa de qué pasa al enviar (¿se abre tu mail?, ¿llega a una bandeja?). Sin mensaje de éxito claro ni indicación previa, un reclutador puede dudar si su mensaje llegó. El form-note existe pero está vacío hasta el submit.
- **Acción:** Agregar una microcopia bajo el botón ("Se abrirá tu cliente de correo" o "Te respondo a este email") y asegurar un mensaje de confirmación claro en form-note tras enviar.
- **Dónde:** `contact.html (form.contact-form, botón y #form-note, líneas 231-236)`

**FAQ no tiene categorías ni índice de navegación con tantas preguntas** _(esfuerzo: medio)_
- faq.html lista 11 details seguidos sin agrupar ni índice. Si se suman preguntas para empleadores serán ~18, demasiadas para una lista plana. Falta categorización (Proyecto / Pagos / Trabajo / Técnico) o un mini-índice clickable arriba que salte a cada grupo. Mejora el escaneo y la percepción de orden.
- **Acción:** Agrupar las preguntas de faq.html por categoría con subtítulos y/o un índice de anclas arriba del .faq-body.
- **Dónde:** `faq.html (.faq-body, línea 187)`

**FAQ no incluye FAQPage Schema.org pese a ser una página de FAQ** _(esfuerzo: bajo)_
- El case study de Cognition presume usar FAQPage Schema, pero la propia página faq.html no tiene JSON-LD de tipo FAQPage. Es justamente la página que más se beneficia de rich results en Google (las preguntas pueden aparecer expandidas en la búsqueda). Oportunidad SEO concreta y específica de esta página.
- **Acción:** Agregar a faq.html un bloque JSON-LD FAQPage con las preguntas/respuestas para habilitar rich results.
- **Dónde:** `faq.html (<head>, junto a los demás meta/JSON-LD)`

**Los case studies no tienen video/GIF de las interacciones que describen** _(esfuerzo: medio)_
- Los casos describen animaciones (canvas de red neuronal, calculadora animada, scroll editorial, micro-interacciones) en texto, pero no hay ningún GIF/video corto mostrándolas. "Animaciones de datos en tiempo real" sin un clip es una afirmación que el reclutador no puede verificar sin ir al demo. Un loop de 5-8s por feature clave eleva muchísimo la credibilidad.
- **Acción:** Agregar a los case studies un GIF/MP4 corto (autoplay muted loop) de la interacción estrella de cada proyecto (calculadora ROI de Cognition, scroll editorial de Cucú, etc.).
- **Dónde:** `case/*.html (sección de decisiones técnicas, junto a cada feature descripta)`

**La 404 no sugiere páginas útiles ni busca recuperar al visitante** _(esfuerzo: bajo)_
- 404.html tiene una terminal decorativa y un solo CTA "Ir al inicio". No ofrece links a las páginas más probables que el visitante buscaba (Trabajos, Sobre mí, Contacto en el cuerpo) ni un buscador. Para un reclutador que llegó por un link viejo, una 404 que lo reencauza a los proyectos o al CV recupera la visita en vez de mandarlo solo al home.
- **Acción:** Agregar a 404.html una lista corta de links útiles (Trabajos, Sobre mí, Contacto, Descargar CV) además del botón al inicio.
- **Dónde:** `404.html (.err-inner, líneas 124-142)`

**El footer de las legales/404 omite el link al CV que sí tienen las demás páginas** _(esfuerzo: bajo)_
- En 404.html el footer es reducido (solo © + Inicio + Contacto) y los case studies cambian la columna "Servicios" por "Recursos" con el CV. Esta inconsistencia de footer entre páginas hace que el CV no esté siempre a un clic. Un reclutador en una legal o en 404 pierde el acceso rápido al CV/perfiles que sí está en home/work/about.
- **Acción:** Unificar el footer en todas las páginas (incluida 404 y legales) para que el CV y los links a GitHub/LinkedIn estén siempre presentes.
- **Dónde:** `404.html (.footer, líneas 145-151) y privacy/terms`

**Privacy y Terms tienen tono de proveedor de servicios, no de candidato a empleo** _(esfuerzo: bajo)_
- privacy.html y terms.html existen como páginas legales completas (apropiadas para un freelance que factura). Para un portfolio cuyo objetivo principal es conseguir empleo, unos Términos de servicio de contratación pueden reforzar el encuadre "vendo servicios" en vez de "busco empleo". No es que sobren, pero su prominencia en el footer junto a un copy 100% freelance contribuye al problema de posicionamiento.
- **Acción:** Revisar privacy.html y terms.html para suavizar el lenguaje contractual de servicios y alinear con el objetivo de empleo; o reducir su prominencia visual frente al CV.
- **Dónde:** `privacy.html y terms.html`

**Process menciona "reporte QA de 60 puntos" y "documentación técnica" pero no los enseña** _(esfuerzo: medio)_
- process.html promete entregables concretos (Reporte QA, Auditoría Lighthouse, documentación técnica PDF, Loom). Ninguno está disponible para ver como muestra. Un empleador que lee esto querría ver UN ejemplo real de checklist QA o de doc técnica para creer que existe. Es contenido que demostraría rigor de forma verificable y hoy es solo una promesa.
- **Acción:** Publicar como muestra descargable un ejemplo real (checklist QA de 60 puntos, o un PDF de documentación de uno de los proyectos) y enlazarlo desde process.html.
- **Dónde:** `process.html (proc-step 05 QA y 06 Deploy, líneas 210-245)`

**Ninguna página tiene breadcrumbs visibles para orientar en la jerarquía del sitio** _(esfuerzo: bajo)_
- Los case studies viven bajo /case/ y solo tienen un link "Volver a trabajos". No hay breadcrumb visible (Inicio › Trabajos › Cognition) en ninguna página interna. El case de Cognition incluso presume usar BreadcrumbList Schema en SU demo, pero el portfolio propio no tiene breadcrumbs ni visuales ni en Schema. Mejora orientación y SEO.
- **Acción:** Agregar breadcrumbs visibles + BreadcrumbList JSON-LD en las páginas internas, especialmente los 4 case studies.
- **Dónde:** `case/*.html (.case-hero__meta) y resto de páginas internas`

**La Contact Card repetida en home/about/work no varía el mensaje según contexto** _(esfuerzo: bajo)_
- El bloque .contact-card es idéntico (mismo eyebrow, título, facts) en index, about y work. Repetir exactamente el mismo CTA tres veces es una oportunidad perdida: en work podría decir "¿Querés ver el código?", en about "¿Hablamos de una posición?". El mensaje único "Escribime por mail o WhatsApp" no se adapta al lector ni empuja hacia el objetivo de empleo.
- **Acción:** Diferenciar el copy de la Contact Card por página (en about orientarla a empleo/posición, en work a ver código/repos) en vez de repetir el mismo bloque.
- **Dónde:** `index.html (487-522), about.html (238-273), work.html (351-386)`

**El hero de Contact es demasiado escueto: solo "Conversemos." sin contexto** _(esfuerzo: bajo)_
- contact.html abre con un H1 de una sola palabra ("Conversemos.") y salta directo al split de contacto. No hay una bajada que diga a quién busca, para qué tipo de oportunidades está disponible (full-time remoto, freelance) ni qué incluir en el mensaje. Una o dos líneas orientarían al reclutador sobre qué escribir y reforzarían el objetivo de empleo.
- **Acción:** Agregar bajo el H1 de contact.html una bajada breve: tipo de oportunidades buscadas (full-time remoto / freelance), qué incluir en el mensaje y tiempo de respuesta.
- **Dónde:** `contact.html (.contact-hero, líneas 125-130)`


---

## Páginas y secciones nuevas que faltan

### P0

**Falta una página dedicada /hire (Para empleadores / Contratame)** _(esfuerzo: medio)_
- Toda la copy actual vende freelance al cliente final ('Escribime por tu proyecto', '50% de anticipo', 'cripto'). Un reclutador que busca un empleado full-time no encuentra una página pensada para él. Una landing /hire dedicada responde las preguntas de un hiring manager en 30 segundos: rol buscado, modalidad (remoto full-time), zona horaria/overlap, seniority, stack, link a CV y a LinkedIn, disponibilidad de inicio. Es la página que se pega en una postulación o se manda por DM a un recruiter.
- **Acción:** Crear hire.html orientada 100% a empleo: titular 'Busco posición full-time remota como Full Stack Developer (junior/semi-senior)', bloque de fit (qué tipo de equipo/empresa), overlap horario con US/EU, stack, links a CV/GitHub/LinkedIn, botón de agendar llamada y email. Sin precios ni lenguaje de agencia.
- **Dónde:** `Nueva /hire.html`

**Falta una sección 'Cómo trabajo en equipo' (soft skills para remoto async)** _(esfuerzo: bajo)_
- El process actual describe el flujo cliente-freelance (brief, diseño, deploy), no cómo colabora dentro de un equipo: comunicación async, uso de PRs/code review, daily/standup, manejo de feedback, documentación, herramientas (Slack/Jira/Git flow). Para un puesto remoto esto es decisivo: el reclutador teme contratar a alguien que no sabe trabajar async. Es probablemente el vacío más caro para conseguir empleo remoto.
- **Acción:** Crear sección/página 'Cómo trabajo en equipo' con 5-6 puntos: comunicación async y escrita, Git flow / PRs / code review, documentación, manejo de feedback, proactividad, herramientas de equipo. Enfocado a empleo, no a cliente.
- **Dónde:** `about.html o /how-i-work.html`

**Falta una FAQ orientada a reclutadores (la actual es solo para clientes)** _(esfuerzo: bajo)_
- La FAQ existente responde dudas de un cliente que paga un proyecto (precios, cripto, mantenimiento, anticipo). Un reclutador tiene otras preguntas: '¿nivel de inglés real?', '¿overlap horario con nuestro huso?', '¿pretensión salarial / rango USD?', '¿disponibilidad de inicio?', '¿relocación o solo remoto?', '¿experiencia laboral previa?', '¿modalidad relación de dependencia o contractor?'. Sin estas respuestas, el reclutador descarta por las dudas. Hay que separar ambos públicos.
- **Acción:** Agregar un set de FAQ para reclutadores: inglés (nivel honesto), husos/overlap, modalidad (contractor/relación dependencia), disponibilidad de inicio, expectativa de rango, remoto vs relocación, experiencia previa. Mantener separado del FAQ de clientes.
- **Dónde:** `faq.html (bloque nuevo) o /faq-recruiters.html`

### P1

**Falta una página /now (en qué estoy trabajando ahora)** _(esfuerzo: bajo)_
- El portfolio comunica disponibilidad genérica ('Disponible · 2026') pero nada vivo y fechado. Una página /now (estilo nownownow.com de Derek Sivers, convención conocida en la comunidad dev) muestra a un reclutador que el candidato está activo HOY: qué está estudiando, qué proyecto construye, qué tecnología explora. Para un junior es señal fuerte de aprendizaje continuo y de que el sitio no está abandonado (el reclutador siempre se pregunta '¿esto sigue vigente?'). Es de las páginas que más diferencian a un junior proactivo.
- **Acción:** Crear now.html con 4-5 bloques fechados (mes/año): 'Aprendiendo ahora', 'Construyendo', 'Leyendo', 'Próximo objetivo'. Encabezar con la fecha de última actualización visible. Linkear desde el footer y desde about. Reusar el layout editorial existente (eyebrow + secciones numeradas).
- **Dónde:** `Nueva /now.html + ítem en nav/footer`

**Falta una sección/página de Timeline de aprendizaje (cómo aprendí a programar)** _(esfuerzo: medio)_
- Un junior sin experiencia laboral formal compite con su historia de aprendizaje. Una línea de tiempo ('De X a desarrollador') con hitos —cuándo empezó, qué cursos, primer proyecto, primer deploy, qué construyó cada trimestre— convierte la falta de experiencia en una narrativa de progreso medible. Los reclutadores de junior valoran trayectoria y constancia por encima de años. Hoy el about solo tiene bio + stack + principios, sin ningún eje temporal.
- **Acción:** Agregar sección 'Trayectoria de aprendizaje' en about con 5-7 hitos fechados (formación, primer proyecto en producción, primera API, primer fullstack Brew Bank). Usar el patrón visual de proc-step existente.
- **Dónde:** `about.html (nueva sección) o /journey.html`

**Falta una página/sección de Certificaciones y formación** _(esfuerzo: bajo)_
- No hay ningún lugar que liste cursos, certificados o formación. Para un junior sin título o sin experiencia laboral, los certificados (freeCodeCamp, The Odin Project, cursos de JS/React, etc.) son una señal de credibilidad concreta que muchos ATS y reclutadores buscan explícitamente. Hoy el reclutador tiene que asumir o ir al LinkedIn; tenerlo en el sitio con badges verificables baja la fricción.
- **Acción:** Agregar sección 'Formación y certificaciones' con tarjetas: nombre del curso/cert, emisor, año, link a la credencial verificable. Si hay pocos, integrarla en about; si hay varios, página propia.
- **Dónde:** `about.html (sección) o /credentials.html`

**Falta una sección de Testimonios / referencias verificables** _(esfuerzo: bajo)_
- Mencionada en tu lista 'falta de testimonios' a nivel general, pero acá el punto granular es que no existe NI la estructura de página/sección para alojarlas (ni siquiera un esqueleto con 1-2 referencias de un profesor, mentor, compañero de bootcamp o cliente de los demos). Una sola referencia con nombre real y rol genera confianza desproporcionada en un junior. La ausencia total de prueba social es una de las mayores barreras de contratación.
- **Acción:** Crear sección de prueba social con 2-3 quotes atribuidas (nombre, rol, link a su LinkedIn). Si no hay clientes, pedir a un mentor/profesor/colega. Estructurar la sección aunque arranque con 1 testimonio.
- **Dónde:** `index.html (nueva sección) o /references.html`

**Falta una página/sección de Disponibilidad con agenda real (booking)** _(esfuerzo: bajo)_
- La home repite 'Disponible · 2026' y 'respuesta < 24h' pero no hay forma de reservar una llamada. Un botón a un Calendly/Cal.com baja la fricción de un reclutador de 'mandar mail y esperar' a 'agendar en 10 segundos'. Para empleo remoto internacional, mostrar slots ya convertidos a su huso horario es un diferenciador. Hoy todo el contacto depende de email/WhatsApp, canales que un recruiter corporativo usa menos.
- **Acción:** Integrar un embed de Cal.com/Calendly en contact o página propia con disponibilidad real, mostrando huso GMT-3 y conversión automática. Agregar 'Agendar llamada' como tercer canal junto a email/WhatsApp.
- **Dónde:** `contact.html o /availability.html`

**Falta una sección 'En qué quiero trabajar' (rol objetivo y tipo de empresa)** _(esfuerzo: bajo)_
- El sitio dice 'desarrollador full stack' pero no declara qué busca: ¿frontend-heavy? ¿startups o agencias? ¿producto propio? ¿qué stack quiere usar en su próximo rol? Para un reclutador, un candidato que sabe lo que quiere se lee como más maduro y fácil de matchear. La ausencia de un 'norte' hace que el portfolio se sienta de 'acepto cualquier cosa', lo que paradójicamente reduce respuestas. Es distinto de /hire: acá es la intención de carrera.
- **Acción:** Agregar bloque 'Lo que busco' con: tipo de rol (full stack con foco front), tamaño/tipo de empresa ideal, stack que quiere consolidar, qué aporta a un equipo. Honesto sobre nivel junior y ganas de crecer.
- **Dónde:** `about.html o /hire.html`

**Falta una página de descarga de CV con versiones (ES/EN) y formato web** _(esfuerzo: medio)_
- Hoy el CV es un único PDF en español linkeado desde el footer ('Rony_Cozzi_CV.pdf'). No hay versión en inglés (crítico para empleo remoto internacional) ni una versión HTML del CV (mejor para ATS y para compartir por link sin descargar). Una página /cv con ambos idiomas, vista web indexable y botón de descarga PDF cubre todos los canales por los que un reclutador consume un CV.
- **Acción:** Crear página /cv con el CV en formato web (HTML semántico, indexable, imprimible) en ES y EN, más botones de descarga de ambos PDFs. Asegurar que el HTML sea ATS-friendly (texto real, no imagen).
- **Dónde:** `Nueva /cv.html + assets/Rony_Cozzi_CV_EN.pdf`

### P2

**Falta una página /playground o /experiments (laboratorio de mini-demos)** _(esfuerzo: medio)_
- Los 4 proyectos son sitios de marca completos; no hay lugar para mostrar capacidad técnica suelta (un componente animado, una utilidad JS, un experimento CSS, un mini-juego en canvas, una visualización). Un playground estilo CodePen propio demuestra curiosidad y rango técnico sin el peso de un proyecto entero, y da material para que un evaluador técnico 'vea código pensar'. Para un junior es la vitrina más barata de skill puro.
- **Acción:** Crear grilla de 6-10 mini-experimentos, cada uno con demo embebida o screenshot + link a su código en GitHub. Mezclar CSS art, animaciones, una utilidad JS, un fetch a API pública. Etiquetar por tecnología.
- **Dónde:** `Nueva /playground.html`

**Falta una página de Servicios detallada con paquetes y entregables** _(esfuerzo: medio)_
- La home tiene un bloque /services resumido (3 servicios), pero no hay una página /services dedicada con alcance, qué incluye/qué no, tiempos y entregables por tipo de trabajo. Aunque el foco es empleo, una página de servicios sólida ayuda a captar freelance (que Rony también acepta) y demuestra pensamiento de producto/scoping ante un empleador. Hoy el detalle vive disperso entre home, process y faq.
- **Acción:** Crear services.html consolidando los 3 servicios con: alcance detallado, entregables, tiempos, qué NO incluye, y CTA. Mover el detalle disperso de home/faq aquí y dejar la home como resumen con link.
- **Dónde:** `Nueva /services.html`

**Falta una página /uses-style de Stack y herramientas con justificación (no solo /uses de hardware)** _(esfuerzo: bajo)_
- El about lista el stack como bullets planos sin contexto. Una página dedicada de stack/tooling donde cada tecnología viene con UNA línea de por qué la usa y a qué nivel ('React: SPAs medianas, hooks y context; aún no Redux') comunica criterio técnico y honestidad de seniority. A un evaluador técnico le dice mucho más que una nube de logos. Distinto de /uses (escritorio/hardware) ya mencionada: esto es el porqué del stack.
- **Acción:** Crear página de stack con cada tecnología + nivel real (sólido / en uso / aprendiendo) + 1 línea de contexto de cuándo la aplica. Separar 'uso a diario' de 'explorando'. Esto también ayuda a calibrar honestamente la seniority.
- **Dónde:** `Nueva /stack.html o sección ampliada en about`

**Falta una página/sección de Open Source y contribuciones** _(esfuerzo: medio)_
- No hay ninguna mención a contribuciones open source, issues, PRs a repos de terceros, o proyectos propios publicados como librerías/plantillas. Para un junior, incluso un par de PRs pequeños a proyectos reales es prueba de que sabe trabajar con el flujo de Git colaborativo (fork, branch, PR, review) —exactamente lo que un empleo exige. Mostrarlo, aunque sea modesto, supera a la mayoría de portfolios junior que no tienen nada.
- **Acción:** Crear sección listando: PRs/contribuciones a repos de terceros (con link), proyectos propios open source (plantillas, utilidades), y stats de GitHub. Si hoy no hay contribuciones, es un disparador para empezar a hacerlas y luego documentarlas.
- **Dónde:** `Nueva /open-source.html o sección en about`

**Falta una mini-sección en vivo de métricas del propio sitio (Lighthouse/Core Web Vitals)** _(esfuerzo: medio)_
- El sitio afirma 'performance: 96' como dato estático decorativo en el hero, sin verificación. Una mini-sección que muestre los Core Web Vitals reales del propio portfolio (o un badge de PageSpeed/Lighthouse CI que linkee al reporte) demuestra la competencia técnica EN EL PROPIO PRODUCTO —el argumento más fuerte para un dev: 'mi sitio es la prueba'. Pasa de claim a evidencia auditable.
- **Acción:** Agregar sección 'Este sitio en números' con LCP/CLS/INP reales y un link al reporte de PageSpeed Insights del propio dominio. Opcional: badge de Lighthouse CI auto-actualizable. Reemplazar el '96' inventado del hero por dato verificable.
- **Dónde:** `index.html o /colophon.html`

**Falta un Colofón / Changelog del sitio (cómo está construido este portfolio)** _(esfuerzo: bajo)_
- El portfolio es vanilla HTML/CSS/JS, PWA, sin frameworks —una decisión técnica interesante— pero no se explica en ningún lado. Una página de colofón ('cómo está hecho este sitio': sin frameworks, por qué, service worker, i18n propio, build, hosting) convierte al propio portfolio en un quinto case study meta y demuestra que sabe explicar decisiones de arquitectura. El changelog además muestra mantenimiento activo (hay decenas de patches en el repo que prueban iteración constante pero nadie los ve).
- **Acción:** Crear colofón explicando el stack del sitio (vanilla, PWA, SW, i18n custom, Vercel) y por qué. Agregar un changelog corto con 5-8 hitos de evolución del portfolio. Linkear al repo del propio portfolio.
- **Dónde:** `Nueva /colophon.html o /changelog.html`

**Falta una página de Recursos / lecturas que comparte (curaduría)** _(esfuerzo: bajo)_
- No hay ninguna página donde Rony comparta lo que lee, herramientas que recomienda o recursos para otros devs. Una página /resources curada demuestra que está inmerso en el ecosistema y tiene criterio para filtrar (señal de madurez técnica que los reclutadores notan). Es bajo costo y da personalidad y un motivo de retorno al sitio. Complementa la futura página /now.
- **Acción:** Crear página con secciones: artículos/libros que recomienda, herramientas que usa, blogs/devs que sigue, snippets útiles. Mantenerla corta y honesta (5-15 links bien elegidos), con una línea de por qué cada uno.
- **Dónde:** `Nueva /resources.html`

**Falta una sección de Métricas/credibilidad del developer (números agregados)** _(esfuerzo: bajo)_
- No hay ningún bloque de 'números' que resuma de un vistazo la actividad: cantidad de proyectos, commits, días de racha de aprendizaje, tecnologías, líneas de código, repos públicos. Aunque para un junior los números son modestos, presentarlos da una sensación de actividad y compromiso medible. Es la versión 'about' de un dashboard personal y funciona como gancho visual en la home.
- **Acción:** Agregar una franja de stats: nº de proyectos en producción, repos públicos, tecnologías dominadas, commits del último año (vía GitHub API o estático). Mantenerlos verificables, no inflados.
- **Dónde:** `index.html o about.html`

**Falta una página de Caso de estudio del propio portfolio como proyecto técnico** _(esfuerzo: medio)_
- Los 4 case studies son de sitios de marca, pero el artefacto técnico más complejo que Rony controla de punta a punta —su propio portfolio con PWA, service worker, i18n custom ES/EN, transiciones de página, cursor custom, sin frameworks— no está documentado como case study. Mostrar las decisiones de ingeniería detrás del sitio que el reclutador YA está viendo cierra el loop de credibilidad de forma poderosa.
- **Acción:** Crear un case study del propio portfolio: problema (mostrarse como junior), decisiones técnicas (vanilla + PWA + i18n + SW), retos resueltos, métricas. Linkearlo desde work como quinto ítem.
- **Dónde:** `Nueva /case/portfolio.html`

**Falta una sección de 'Antes / Después' o rediseños/refactors** _(esfuerzo: medio)_
- Para un junior, mostrar evolución (un proyecto v1 vs v2, un refactor, una mejora de performance medida) demuestra capacidad de iterar y mejorar código existente —habilidad clave del día a día laboral que no se ve en proyectos terminados-y-pulidos. El repo tiene historial de patches de auditoría que evidencian este trabajo pero no hay vitrina. Es una forma honesta de mostrar proceso real, no solo resultado final perfecto.
- **Acción:** Agregar un bloque 'Antes / Después' en algún case study o página propia: capturas o métricas de un refactor real (ej: mejora de Lighthouse, reescritura de componente), explicando qué cambió y por qué.
- **Dónde:** `Nueva sección en work o en un case study`

**Falta una página de Contacto pensada para empresas (vs persona)** _(esfuerzo: bajo)_
- El contact actual es informal (WhatsApp gigante, 'Contame en qué estás trabajando…', asunto 'Proyecto/Colaboración'). Para una postulación laboral falta el flujo formal: subir/linkear CV, indicar rol al que aplica, link a la vacante, pretensión, y un canal que un recruiter corporativo use (LinkedIn/email formal por encima de WhatsApp). El select ya tiene 'Oportunidad laboral' pero el resto de la página no acompaña ese caso.
- **Acción:** Agregar en contact un sub-flujo para empresas: campo opcional de 'link a la vacante', priorizar email/LinkedIn sobre WhatsApp cuando el asunto es 'Oportunidad laboral', y un recordatorio de CV/LinkedIn a mano.
- **Dónde:** `contact.html`


---

## Marca personal más allá del portfolio

### P0

**El handle de LinkedIn es una URL numérica fea (rony-cozzi-677111251)** _(esfuerzo: bajo)_
- La URL pública del LinkedIn es linkedin.com/in/rony-cozzi-677111251 (visible en about.html:291 y work.html:404). Un slug con 9 dígitos random grita 'perfil sin configurar', rompe la consistencia de naming con github.com/ronycozzi y @ronycozzi, y queda feo en el CV, la firma de email y cualquier mensaje a un recruiter. Un recruiter remoto que copia/pega tu link lo nota.
- **Acción:** En LinkedIn > Editar perfil público y URL, cambiar a linkedin.com/in/ronycozzi (o rony-cozzi si está tomado). Después actualizar los hrefs en about.html:291, work.html:404 y cualquier otra página que lo linkee, más el CV PDF.
- **Dónde:** `about.html:291, work.html:404`

**Falta README de perfil de GitHub (repo especial ronycozzi/ronycozzi)** _(esfuerzo: medio)_
- El README de perfil es lo primero que ve un recruiter al abrir github.com/ronycozzi. Sin él, el perfil se ve vacío y poco profesional. Es el lugar para un pitch de 5 segundos: quién sos, stack, que buscas (remoto junior), link al portfolio y al CV, y disponibilidad. Es la pieza de marca con mayor ROI fuera del portfolio.
- **Acción:** Crear repo público ronycozzi/ronycozzi con README.md: titular 'Full Stack Developer', stack en badges (HTML/CSS/JS/Node), una linea de que buscas (remoto, junior/intermedio), links a portfolio + CV + LinkedIn, y CTA de contacto. Mantenerlo en ES/EN.

**No hay repos pinneados curados en GitHub** _(esfuerzo: bajo)_
- GitHub permite fijar hasta 6 repos en el perfil. Si no estan seteados, el recruiter ve el orden cronologico con repos a medio terminar o forks. Los 4 proyectos del portfolio (cucu, luco, sellink, cognition) mas el portfolio mismo y Brew Bank deberian estar pinneados con orden intencional, mostrando lo mejor primero.
- **Acción:** En github.com/ronycozzi, Customize your pins: fijar el repo del portfolio, los 4 demos de marca y Brew Bank (cuando este publico). Ordenar poniendo Brew Bank y el portfolio primero por ser los mas completos.

### P1

**No hay handle unificado @ronycozzi reclamado en todas las plataformas** _(esfuerzo: bajo)_
- GitHub usa 'ronycozzi', Twitter meta apunta a '@ronycozzi', pero LinkedIn es numérico y no hay perfiles reservados en dev.to, Hashnode, Frontend Mentor, Codewars ni Exercism. Un recruiter que googlea 'ronycozzi' debería encontrar un ecosistema coherente, no fragmentos. Reservar el handle ahora evita que otro lo tome y construye identidad de marca buscable.
- **Acción:** Registrar 'ronycozzi' como handle en dev.to, Hashnode, Frontend Mentor, Codewars, Exercism y Twitter/X aunque todavia no los uses. Verificar disponibilidad con namechk o manualmente y documentar en un archivo de marca personal.

**Los repos no tienen description ni topics seteados** _(esfuerzo: bajo)_
- Cada repo en GitHub tiene un campo 'About' (descripcion + website + topics). Vacios, los repos se ven abandonados y no aparecen en busquedas de GitHub por topic (ej. 'javascript', 'pwa', 'vanilla-js'). Los topics tambien alimentan el algoritmo de descubrimiento. Un recruiter filtra candidatos por topics.
- **Acción:** En cada repo, completar About: descripcion de una linea, URL del demo en vivo (website field), y topics relevantes (javascript, html, css, pwa, vanilla-js, portfolio, responsive). Para el portfolio agregar link a portfolios-ronycozzi.vercel.app.

**El gráfico de contribuciones probablemente está vacío o irregular** _(esfuerzo: medio)_
- El contribution graph (cuadritos verdes) es la prueba social #1 de que codeas consistentemente. Un recruiter junior-friendly lo mira para ver constancia, no volumen. Si el portfolio se buildeo en rafagas con Codex y los commits estan en otra cuenta o aplastados, el grafico se ve muerto. Esto importa mas para un junior sin experiencia laboral formal.
- **Acción:** Verificar que todos los commits del portfolio y Brew Bank usen el email asociado a la cuenta GitHub (git config user.email). Adoptar un ritmo de commits pequenos y frecuentes. Revisar Settings > Contributions para incluir actividad privada en el conteo.

**Falta sección Featured (Destacado) en LinkedIn** _(esfuerzo: bajo)_
- La seccion Featured de LinkedIn aparece arriba del perfil y permite fijar links e imagenes. Es donde un recruiter ve, sin scrollear, el portfolio, los case studies y el CV. Sin Featured, todo eso queda enterrado en texto. Es el equivalente LinkedIn de los repos pinneados.
- **Acción:** Agregar a Featured en LinkedIn: link al portfolio (con preview OG), link a 1-2 case studies, el PDF del CV subido como documento, y el repo de GitHub. Cada uno con un titulo claro.

**El headline de LinkedIn probablemente no está optimizado para búsqueda de recruiters** _(esfuerzo: bajo)_
- Los recruiters buscan en LinkedIn por keywords del headline (ej. 'Full Stack Developer', 'JavaScript', 'React', 'Remote'). Un headline generico tipo 'Estudiante' o solo el nombre te deja fuera de esas busquedas. El headline tiene 220 caracteres: hay que cargarlo de keywords reales del stack y la modalidad (Open to remote).
- **Acción:** Setear headline tipo 'Full Stack Developer | JavaScript, Node, HTML/CSS | Sitios rapidos y PWAs | Open to remote'. Activar el badge 'Open to Work' configurado solo para recruiters con roles remotos.

**La foto de perfil no es consistente entre canales** _(esfuerzo: bajo)_
- Existe una sola foto (assets/img/rony.jpg) que el portfolio renderiza en B&N via CSS. Si LinkedIn, GitHub y el portfolio usan fotos distintas (o GitHub tiene el avatar default), se rompe el reconocimiento facial cross-canal que un recruiter usa para confirmar que es la misma persona. La consistencia de foto es senal de cuidado profesional.
- **Acción:** Usar exactamente la misma foto (misma toma, recorte y tratamiento) como avatar en GitHub, LinkedIn, dev.to y el portfolio. Subir la version a color a GitHub/LinkedIn aunque el portfolio la muestre en B&N.
- **Dónde:** `assets/img/rony.jpg`

**El CV PDF no enlaza explícitamente todos los canales (sin firma de enlaces clicables verificada)** _(esfuerzo: bajo)_
- El CV (assets/Rony_Cozzi_CV.pdf) es el documento que circula por ATS y mail. Si los links de GitHub/LinkedIn/portfolio no son clicables o apuntan a la URL fea de LinkedIn, se pierde la entrada al ecosistema. Hay que garantizar que el CV use los mismos handles limpios y links clicables que el resto de canales para que el recruiter salte de un canal a otro.
- **Acción:** Revisar el CV: asegurar links clicables a portfolio, github.com/ronycozzi, la nueva URL limpia de LinkedIn y el email. Usar exactamente los mismos handles que en todos lados.
- **Dónde:** `assets/Rony_Cozzi_CV.pdf`

**GitHub sin bio, link al portfolio ni 'Available for hire' configurado** _(esfuerzo: bajo)_
- Mas alla del README, los campos del sidebar del perfil de GitHub (bio de una linea, ubicacion, link al website, badge de disponibilidad) son lo que indexa Google y lo que se ve en hovers/cards. Una bio vacia y sin link al portfolio desaprovecha el header del perfil. El campo Bio aparece en resultados de busqueda de GitHub.
- **Acción:** Completar en GitHub Settings: Bio ('Full Stack Developer | JS, Node | Open to remote'), website apuntando a portfolios-ronycozzi.vercel.app, y la zona horaria/ubicacion solo si ayuda (region, no ciudad). Considerar el panel Achievements limpio.

### P2

**GitHub Pages no se usa como demo alternativo / respaldo** _(esfuerzo: medio)_
- Cada repo de los 4 demos de marca (cucu, luco, sellink, cognition) podria publicarse via GitHub Pages como demo en vivo, dando una segunda URL de respaldo si Vercel cae y reforzando que el codigo realmente corre. Tambien permite al recruiter ver el sitio sin clonar. Hoy los demos solo viven dentro del portfolio como case studies.
- **Acción:** Para cada demo de marca que tenga repo propio, activar GitHub Pages desde la branch main y poner esa URL en el campo website del repo. Alternativamente desplegar cada uno en su propio subdominio de Vercel.

**No hay recomendaciones (Recommendations) en LinkedIn** _(esfuerzo: medio)_
- Las recomendaciones de LinkedIn son testimonios verificables ligados a personas reales con foto y cargo, mucho mas creibles que testimonios anonimos en el portfolio. Para un junior sin trayectoria laboral, 2-3 recomendaciones de profesores, companeros de bootcamp o clientes freelance compensan la falta de experiencia formal.
- **Acción:** Pedir 2-3 recomendaciones en LinkedIn a clientes freelance, mentores o companeros, dandoles un borrador corto para facilitarles la tarea. Reciprocar escribiendo las de ellos.

**No hay banner / imagen de portada en LinkedIn coherente con el portfolio** _(esfuerzo: bajo)_
- El banner de LinkedIn (1584x396) es espacio gratis de branding que casi nadie usa bien. Reutilizar el sistema visual del portfolio (verde lima C6FF3D sobre oscuro, tipografia Space Grotesk) crea reconocimiento cruzado: el recruiter que vio tu portfolio reconoce tu LinkedIn al instante. Hoy probablemente esta el default gris.
- **Acción:** Disenar un banner de LinkedIn con la paleta y tipografia del portfolio: nombre, 'Full Stack Developer', stack y la URL del portfolio. Exportar a 1584x396 y subirlo.

**Falta perfil en Frontend Mentor como prueba de práctica de UI** _(esfuerzo: medio)_
- Frontend Mentor da challenges de maquetado con disenos reales; tu perfil publico ahi muestra soluciones con codigo y demo. Para un junior sin experiencia laboral, es prueba concreta de que sabes traducir diseno a HTML/CSS pixel-perfect, justo lo que validan los demos de marca del portfolio. El perfil es linkeable y suma a la red de canales.
- **Acción:** Crear perfil en frontendmentor.io con handle ronycozzi, resolver 3-4 challenges (free) y linkear el perfil desde el portfolio y LinkedIn Featured.

**Falta perfil en Codewars o Exercism como prueba de lógica/JS** _(esfuerzo: medio)_
- Codewars/Exercism muestran un perfil con kata resueltos y un rank (kyu) que prueba practica sostenida de algoritmos y JavaScript. Para un junior, mitiga la duda del recruiter sobre fundamentos de programacion mas alla de maquetar. El rank es una metrica externa verificable, no autoproclamada.
- **Acción:** Crear perfil en Codewars (handle ronycozzi), resolver katas de JS hasta llegar a un rank decente (ej. 5 kyu) y exhibir el badge/link en GitHub README y LinkedIn.

**No hay presencia en dev.to / Hashnode para alojar el blog técnico** _(esfuerzo: medio)_
- El blog se planeo dentro del portfolio, pero publicar tambien (o primero) en dev.to/Hashnode con canonical apuntando al portfolio da distribucion gratis: estas plataformas tienen audiencia y SEO propios, y un recruiter que busca tu nombre encuentra articulos tecnicos firmados. Refuerza que sabes comunicar, skill clave en remoto.
- **Acción:** Crear perfil en dev.to o Hashnode con handle ronycozzi, publicar 1-2 articulos cortos (ej. 'Por que hice mi portfolio sin frameworks', 'Construir una PWA vanilla') con canonical_url apuntando al portfolio para no competir en SEO.

**Falta una firma de email profesional con links a los canales** _(esfuerzo: bajo)_
- Cada mail a un recruiter (aplicacion, follow-up) es una oportunidad de branding. Una firma con nombre, titulo 'Full Stack Developer', y links a portfolio + GitHub + LinkedIn convierte cada correo en un micro-portfolio. Sin firma, el recruiter tiene que buscarte. Es gratis y se configura una sola vez.
- **Acción:** Configurar en Gmail una firma HTML: 'Rony Cozzi — Full Stack Developer' + linea de links (Portfolio · GitHub · LinkedIn) + telefono/WhatsApp. Mantener handles consistentes con el resto.

**El email de contacto (ronycozzi5@gmail.com) tiene un número que rompe la marca** _(esfuerzo: bajo)_
- El email ronycozzi5@gmail.com (en about.html:244, work.html:357 y contact) tiene un '5' que no aparece en ningun otro handle (github es ronycozzi a secas). Pequeno detalle, pero rompe la coherencia perfecta del ecosistema y un email con numero random se lee menos profesional. No es bloqueante, pero conviene evaluarlo.
- **Acción:** Evaluar registrar un alias o email mas limbpio (ej. hola@ronycozzi.dev cuando tengas dominio propio, o ronycozzi@gmail.com si esta disponible) y usarlo de forma consistente en todos los canales.
- **Dónde:** `about.html:244, work.html:357`

**No hay presencia mínima en comunidades dev (Discord/foros) para señales de actividad** _(esfuerzo: medio)_
- Estar en 1-2 comunidades dev activas (Discord de freeCodeCamp, midudev, o comunidades LatAm de JS) genera contactos, referidos y a veces ofertas remotas directas que nunca llegan a un job board. Para un junior sin red, es el canal mas subestimado para conseguir el primer remoto. No es publico como un perfil, pero alimenta el resto.
- **Acción:** Unirse a 1-2 Discords de dev en espanol activos (midudev, freeCodeCamp ES) usando el handle ronycozzi, presentarse en el canal correspondiente y participar buscando oportunidades remotas y referidos.

**No hay contribuciones open source visibles (ni siquiera triviales)** _(esfuerzo: medio)_
- Aunque sea una contribucion chica (arreglar typo en docs, traduccion ES, issue bien reportado) aparece en el contribution graph y en la pestana de actividad del perfil, mostrando que sabes trabajar con el flujo fork/PR/review, justo lo que un equipo remoto necesita. Para un junior, una sola PR mergeada en un repo conocido vale como senal de colaboracion.
- **Acción:** Hacer 1-2 PRs reales y aceptables a repos open source (correccion de docs, traduccion al espanol, fix menor) usando el flujo completo fork-branch-PR. Documentar el merge en el README de perfil.

**El meta twitter:creator apunta a @ronycozzi pero no hay perfil de X real detrás** _(esfuerzo: bajo)_
- Todas las paginas declaran twitter:creator=@ronycozzi (ej. 404.html:38, work.html:38, about.html:38) para que las cards de Twitter atribuyan al autor. Si ese perfil no existe o esta vacio, la atribucion apunta al vacio y un recruiter que clickea desde una card cae en la nada. O se crea el perfil minimo, o se quita el meta para no prometer algo inexistente.
- **Acción:** Crear un perfil X minimo @ronycozzi (foto consistente, bio 'Full Stack Developer', link al portfolio, pin de un tweet con el portfolio) o, si no se va a usar, quitar las meta twitter:creator de todas las paginas.
- **Dónde:** `404.html:38, work.html:38, about.html:38`

**Falta un agregador de enlaces (link-in-bio) para usar en perfiles de una sola URL** _(esfuerzo: bajo)_
- Plataformas como Discord, Codewars o X solo dejan poner un link. Una pagina /links en el portfolio (o el home mismo) que centralice portfolio, CV, GitHub, LinkedIn y email sirve de hub unico que pones en todos esos campos de un solo link. Evita tener que elegir un canal y da control total del branding sin depender de Linktree.
- **Acción:** Crear una pagina /links propia en el portfolio (o reutilizar la contact card del home) con todos los canales, y usar esa URL en cada bio que solo admita un link. Asi todo apunta a tu dominio.


---

## Micro-craft, UX fina y pulido

### P0

**El email no tiene click-to-copy; solo abre mailto** _(esfuerzo: bajo)_
- En contact.html (líneas 137-141 y 264) y en el footer, el email es un mailto: puro. Un reclutador en un equipo que usa Outlook web o que no tiene cliente de mail configurado hace click y no pasa nada útil. El gesto esperado en 2026 es copiar al portapapeles con feedback. Es un micro-momento que define si te pueden contactar o no.
- **Acción:** Agregar un botón/icono 'copiar' junto al email que use navigator.clipboard.writeText, con fallback a selección. Al copiar, cambiar el label a 'Copiado ✓' por ~1.5s y disparar una región aria-live='polite' para lectores de pantalla. Mantener el mailto como acción secundaria.
- **Dónde:** `contact.html:137, footer (todas las páginas), js/main.js`

### P1

**El form de contacto no da confirmación visual de éxito con personalidad** _(esfuerzo: medio)_
- setupContactForm (main.js:1259-1301) solo cambia el texto del botón a 'Abriendo email…' y escribe en un <p> nota. No hay un estado de éxito celebratorio ni un fallback claro si el mailto no abre. Para alguien que evalúa tu craft, el momento 'envié el form' es donde se nota el pulido. Hoy es plano y ambiguo (no sabés si funcionó).
- **Acción:** Diseñar un estado de éxito: el form se reemplaza por una tarjeta 'Listo. Te abrí el mail' con un check animado (SVG draw), el mensaje copiado como fallback ('o copiá el texto') y un botón 'enviar otro'. Respetar prefers-reduced-motion (sin animar el check).
- **Dónde:** `js/main.js:1259-1301, contact.html:235`

**Los case studies no tienen breadcrumbs** _(esfuerzo: bajo)_
- En las 4 páginas case/*.html no hay un rastro de navegación (Inicio › Trabajos › Cucú). Solo existe un botón 'Volver a trabajos' (case.back). Un breadcrumb con Schema BreadcrumbList además ayuda SEO y orienta al visitante que entra directo a un caso desde Google o un link compartido.
- **Acción:** Agregar un <nav aria-label='Breadcrumb'> al inicio de cada caso con Inicio › Trabajos › [Proyecto], más JSON-LD BreadcrumbList. Estilar discreto, alineado con el eyebrow editorial existente.
- **Dónde:** `case/cucu.html, case/luco.html, case/sellink.html, case/cognition.html`

**No hay navegación prev/next entre case studies** _(esfuerzo: medio)_
- Al terminar un caso, el único camino es 'Volver a trabajos'. No existe 'Siguiente proyecto →'. Encadenar casos mantiene al reclutador navegando tu trabajo en vez de cerrar la pestaña. Es un patrón estándar de portfolios fuertes que acá falta.
- **Acción:** Agregar al final de cada caso un bloque 'Siguiente proyecto' con el nombre y thumbnail del próximo caso (cíclico: cucu→luco→sellink→cognition→cucu), reutilizando pageMetaFromHref para los nombres.
- **Dónde:** `case/*.html (pie de cada caso)`

**No hay validación inline con mensajes de error con personalidad** _(esfuerzo: medio)_
- El form usa reportValidity() nativo (main.js:1266) y aria-invalid. Los mensajes son los del navegador, genéricos y en idioma del SO, no del sitio. Para un dev frontend, mostrar validación propia bien diseñada (mensaje bajo cada campo, bilingüe, con tono) es justamente la skill que querés demostrar.
- **Acción:** Reemplazar reportValidity por validación custom: un <span> de error por campo (aria-describedby), mensajes bilingües con tono propio ('Falta tu nombre', 'Ese email no parece válido'), foco al primer error. Mantener fallback nativo si JS falla.
- **Dónde:** `js/main.js:1259-1268, contact.html:169-230`

**La barra del navegador 'fake' del hero (live-preview) muestra métricas fijas no verificables** _(esfuerzo: bajo)_
- i18n hero.metric.performance: 'performance: 96' y la barra 'vista-en-vivo' (main.js:47-50) muestran números hardcodeados. Como detalle de craft es lindo, pero un número inventado en un portfolio de dev puede leerse como poco honesto si no coincide con un Lighthouse real del propio sitio.
- **Acción:** O bien verificar que el sitio realmente da ~96 en Lighthouse y dejarlo, o cambiar el copy a algo no numérico ('performance: optimizado') para no exponer una métrica falsable. Coherente con el ítem ya listado de 'métricas Lighthouse sin verificar'.
- **Dónde:** `js/main.js:47-50, index.html (hero preview)`

**No hay un estado vacío con personalidad para JS deshabilitado más allá del noscript de animaciones** _(esfuerzo: bajo)_
- El <noscript> (404.html:66-73) solo neutraliza animaciones, lo cual es correcto. Pero el form de contacto sin JS no informa al usuario que debe usar el email directo (el submit hace e.preventDefault solo con JS; sin JS el form no tiene action y no envía nada). Estado degradado silencioso.
- **Acción:** Dar al form un action de fallback (mailto: con el método correcto) o un mensaje noscript en contact que diga 'Escribime directo a ronycozzi5@gmail.com' visible solo sin JS, para que el form nunca quede muerto.
- **Dónde:** `contact.html (form), <noscript>`

### P2

**No hay barra de progreso de scroll global** _(esfuerzo: bajo)_
- Ninguna función en main.js dibuja un indicador de progreso de página (solo existe la barra del carrusel horizontal en work). En páginas largas (about, case studies, process) el lector no tiene sentido de avance. Es un detalle de craft barato que eleva la percepción de 'producto cuidado'.
- **Acción:** Agregar una barra fina fija arriba (2-3px, color --accent) que crece con scrollY/scrollHeight, calculada en setupHeaderAndProgress que ya escucha scroll. Ocultarla bajo prefers-reduced-motion o dejarla sin transición.
- **Dónde:** `js/main.js (nuevo), css/styles.css`

**Falta indicador de tiempo de lectura / progreso en casos largos** _(esfuerzo: bajo)_
- Los case studies y process son páginas de lectura sin señal de cuánto falta ni cuánto toma. No hay 'reading-time' ni progreso por sección. Comunica respeto por el tiempo del lector y es craft visible.
- **Acción:** Calcular y mostrar '~X min de lectura' en el header del caso (palabras/200) y, opcionalmente, reutilizar la barra de progreso global para ese contenedor.
- **Dónde:** `case/*.html, process.html`

**La 404 no linkea a páginas reales del sitio** _(esfuerzo: bajo)_
- 404.html (líneas 124-143) solo ofrece 'Ir al inicio' y dos links en el footer. No hay un menú de rescate con las páginas reales (Trabajos, Sobre mí, Contacto, los 4 casos). Una 404 útil reduce el rebote y demuestra cuidado de UX en el peor momento del usuario.
- **Acción:** Agregar bajo el CTA una lista 'Quizás buscabas:' con links a /work, /about, /contact y los 4 casos. Mantener el bloque terminal como remate de craft.
- **Dónde:** `404.html:124-143`

**Sin estados de hover/focus visibles en los links de navegación del menú móvil** _(esfuerzo: bajo)_
- En el mobile-menu los <a> no muestran (en la revisión) un tratamiento de hover/focus diferenciado claro; el focus-visible global existe pero el menú overlay merece un estado propio (subrayado animado, número de índice). Es donde el dedo/teclado aterriza y hoy se siente genérico.
- **Acción:** Dar a los items del menú móvil un hover/focus con desplazamiento sutil + numeración [01..04] y una línea que crece desde la izquierda. Verificar contraste de focus en ambos temas.
- **Dónde:** `css/styles.css (.mobile-menu a), 404.html:117-122`

**El toggle de tema cambia sin transición suave de color** _(esfuerzo: bajo)_
- setupTheme (main.js:672-691) hace setAttribute('data-theme') instantáneo. El salto dark↔light es abrupto. Una transición suave de background/color (con view-transition o transición CSS breve) se percibe premium y es un detalle que los devs notan.
- **Acción:** Agregar una transición corta (~180ms) en background-color/color/border-color del :root al togglear, activada por una clase temporal para no afectar la carga inicial. Saltearla si prefers-reduced-motion. Opcional: usar document.startViewTransition donde exista.
- **Dónde:** `js/main.js:672-691, css/styles.css`

**El toggle de tema no tiene icono sol/luna, solo un punto** _(esfuerzo: medio)_
- En el header el theme-toggle es un .theme-toggle__dot (404.html:108-110). No comunica qué hace ni el estado actual de un vistazo. Un icono sol/luna que hace morph es microcraft reconocible y mejora la affordance.
- **Acción:** Reemplazar/aumentar el dot por un icono SVG sol/luna que rota o hace morph según data-theme. Mantener aria-pressed ya existente. Tooltip nativo via title con 'Tema claro/oscuro'.
- **Dónde:** `css/styles.css (.theme-toggle), todas las páginas`

**No hay tooltips en los toggles de idioma y tema** _(esfuerzo: bajo)_
- lang-toggle y theme-toggle tienen aria-label pero no title visible para usuarios de mouse. Un tooltip nativo (o custom) aclara la acción sin ocupar espacio. Detalle chico que reduce fricción.
- **Acción:** Agregar title a lang-toggle ('Cambiar idioma / Switch language') y theme-toggle ('Cambiar tema'). Opcional: tooltip CSS propio para consistencia visual con el resto del sistema.
- **Dónde:** `header en todas las páginas (404.html:103-110)`

**No hay fecha de 'última actualización' visible en ningún lado** _(esfuerzo: bajo)_
- El sitio muestra '2026' y un reloj GMT-3, pero nada indica cuándo se actualizó el portfolio o cada caso. Un 'Actualizado: junio 2026' transmite que el portfolio está vivo y mantenido, señal positiva para quien contrata.
- **Acción:** Agregar un 'Actualizado [mes año]' en el footer y/o en el header de cada caso. Marcar con <time datetime> para semántica.
- **Dónde:** `footer global, case/*.html`

**El footer no tiene firma/signature personal** _(esfuerzo: bajo)_
- El footer cierra con '© año — Rony Cozzi' estándar. No hay un toque autoral (un 'Hecho a mano en Córdoba, sin frameworks', un monograma RC, o 'Diseñado y codeado por mí'). Para un portfolio, la firma es donde dejás carácter y reforzás el diferencial 'vanilla, sin frameworks'.
- **Acción:** Agregar una línea de firma: 'Diseñado y construido a mano — HTML, CSS y JS, sin frameworks.' con el monograma SVG ya existente. Bilingüe via data-i18n.
- **Dónde:** `footer global (todas las páginas)`

**No hay favicon con estado ni animado** _(esfuerzo: bajo)_
- El favicon es estático (favicon.svg). No aprovecha el dark/light ni un micro-estado. Es un detalle menor pero los devs lo notan: un favicon que respeta prefers-color-scheme o que tiene el monograma RC bien resuelto suma puntos de craft.
- **Acción:** Hacer un favicon.svg que use media (prefers-color-scheme) embebido para invertir en dark/light, asegurando que el monograma se lea en la pestaña. (Animado solo si no rompe en navegadores; el estado por tema es la prioridad).
- **Dónde:** `favicon.svg, <head> de todas las páginas`

**El modo de impresión es muy básico y no contempla CV ni casos** _(esfuerzo: medio)_
- El @media print (styles.css:3311-3317) oculta UI y agranda títulos, pero no está optimizado para imprimir/guardar-como-PDF un case study o la página about como mini-CV. Un reclutador que imprime a PDF se lleva una página rota. Print bien hecho es craft invisible que paga.
- **Acción:** Extender el print stylesheet: ocultar wsp-fab, page-transition, parallax; forzar imágenes a tamaño contenido; expandir URLs de links externos con a[href]:after { content: ' (' attr(href) ')' }; asegurar saltos de página limpios en secciones de los casos y de about.
- **Dónde:** `css/styles.css:3311-3317`

**No hay estados de loading/skeleton para las imágenes pesadas de los casos** _(esfuerzo: medio)_
- Las capturas de los proyectos (work shots con animación workShotPan) cargan sin placeholder. En conexiones lentas se ve el hueco vacío hasta que aparece de golpe. Un skeleton/blur-up comunica pulido y evita el layout 'roto' percibido.
- **Acción:** Agregar un fondo skeleton (gradiente animado o color sólido del tema) en los contenedores de imagen, con loading='lazy' y un blur-up (LQIP) o un fade-in al onload. Respetar reduced-motion (sin shimmer).
- **Dónde:** `work.html, case/*.html, css/styles.css`

**El botón submit no muestra spinner durante 'Abriendo email…'** _(esfuerzo: bajo)_
- En el submit (main.js:1281-1282) se setea aria-busy y se cambia el texto, pero no hay indicador visual de actividad (spinner o dots). El usuario ve texto cambiar pero no un 'cargando'. Microcraft de feedback de acción.
- **Acción:** Mostrar un spinner SVG o tres puntos animados dentro del botón mientras aria-busy='true', y reemplazar la flecha por el spinner. Quitar animación bajo prefers-reduced-motion (solo texto).
- **Dónde:** `js/main.js:1281-1300, css/styles.css (.btn-submit)`

**::selection está definido pero no hay caret-color ni accent-color en el form** _(esfuerzo: bajo)_
- styles.css:20 define ::selection con --accent, buen detalle. Pero los inputs no setean caret-color ni accent-color (para el select/checkbox del navegador). El cursor de texto y los controles nativos quedan con el azul default del browser, rompiendo la paleta.
- **Acción:** Agregar caret-color: var(--accent) y accent-color: var(--accent) a los campos del form para que el cursor y los controles nativos respeten la identidad.
- **Dónde:** `css/styles.css (.field input/textarea/select)`

**No hay estilo propio de scrollbar** _(esfuerzo: bajo)_
- No se encontró ninguna regla ::-webkit-scrollbar ni scrollbar-color. La scrollbar default del SO contrasta con un sitio dark editorial y rompe la inmersión en desktop. Detalle chico de craft que los evaluadores registran.
- **Acción:** Estilar scrollbar fina con scrollbar-width/scrollbar-color (Firefox) y ::-webkit-scrollbar (Chromium), usando tokens del tema. Probar en dark y light.
- **Dónde:** `css/styles.css`

**Falta un badge 'Nuevo' para señalar el proyecto más reciente o Brew Bank** _(esfuerzo: bajo)_
- Las cards de work (work.html) no destacan cuál es el último/más relevante. Cuando sumes Brew Bank (fullstack), un badge 'Nuevo' o 'Destacado' guía el ojo del reclutador al proyecto que más te conviene mostrar. Hoy todos los proyectos pesan igual visualmente.
- **Acción:** Diseñar un badge sutil ('Nuevo · 2026' o 'Full stack') posicionado sobre la card del proyecto estrella. Bilingüe via data-i18n. Usarlo con criterio (1 sola card) para que tenga peso.
- **Dónde:** `work.html, index.html (cards destacadas)`

**El reloj GMT-3 puede dar sensación de 'fuera de horario' a reclutadores de otras zonas** _(esfuerzo: bajo)_
- setupClock (main.js:1192-1210) muestra la hora de Córdoba en tiempo real en contact. Es lindo craft, pero a un reclutador en US/EU le puede leer 'está dormido / muy lejos'. Falta contexto de solapamiento horario que convierta ese dato en algo positivo.
- **Acción:** Acompañar el reloj con una línea tipo 'Solapo con US/EU business hours' o un indicador 'Online/Offline ahora' según la hora, en tono que venda disponibilidad remota en vez de distancia.
- **Dónde:** `contact.html:244-251, js/main.js:1192-1210`

**No hay sonido sutil opcional (y por ende ningún toggle de mute)** _(esfuerzo: alto)_
- El sitio es silencioso. No es obligatorio, pero un micro-sonido opcional (hover en CTA principal, confirmación de copiado/envío) con un toggle de mute persistido puede ser un diferencial memorable si se hace con muchísimo cuidado. Riesgo: molesta si está on por default.
- **Acción:** Si se hace: sonidos muy sutiles (Web Audio, no archivos pesados) SOLO en confirmaciones (copiar email, enviar form), OFF por default, con toggle de sonido en el header y preferencia en localStorage. Nunca autoplay. Evaluar si aporta o distrae antes de invertir.
- **Dónde:** `js/main.js (nuevo módulo), header (toggle)`

**El skip-link existe pero solo salta a #main; no hay skip a navegación ni a secciones** _(esfuerzo: bajo)_
- Hay un único skip-link a #main (404.html:64, css 3292). Para páginas largas como about/process/casos, un segundo skip o un menú de secciones accesible al teclado mejora la navegación de usuarios de teclado/SR. Accesibilidad que también es craft.
- **Acción:** En casos y process, agregar un índice de secciones con anclas (visible o accesible al focus) tipo 'En esta página: Contexto · Solución · Stack'. Asegurar focus styles consistentes.
- **Dónde:** `css/styles.css:3292-3308, páginas largas`

**Las animaciones por scroll no tienen un fallback 'elegante' más allá de aparecer de golpe** _(esfuerzo: bajo)_
- setupReveals (main.js:792-836) con reduced-motion simplemente agrega is-in sin transición (aparición instantánea correcta), pero el resto de la experiencia reduced-motion no ofrece una alternativa pensada (p.ej. fade muy sutil permitido). El manejo es funcional pero no 'diseñado'. Craft de reduced-motion = mostrar que pensaste en ese usuario, no solo apagar todo.
- **Acción:** Permitir un cross-fade muy breve (opacity 150ms) bajo reduced-motion en lugar de cero animación, manteniendo cero movimiento de transform. Documentar la decisión. Verificar que el hero y reveals se vean intencionales, no rotos.
- **Dónde:** `js/main.js:792-836, css (@media prefers-reduced-motion: styles.css:2923)`

**El cursor custom no se desactiva al pasar sobre campos de texto del form** _(esfuerzo: bajo)_
- setupCursor (main.js:856-902) maneja [data-magnetic]/[data-tilt] pero no hay un estado para inputs/textarea, donde el cursor custom puede tapar el caret y molestar al escribir. Detalle fino de UX que se nota al completar el form.
- **Acción:** Agregar listeners para que al entrar a input/textarea/select el cursor custom se oculte (o muestre un estado 'text') y vuelva al salir, para no interferir con la escritura.
- **Dónde:** `js/main.js:856-902`

**Falta microcopy en el placeholder/hint del select de asunto cuando se elige 'Oportunidad laboral'** _(esfuerzo: bajo)_
- El select (contact.html:205-211) tiene 'Oportunidad laboral' como opción, pero el form no reacciona ni adapta el hint. Para tu objetivo (conseguir empleo), cuando alguien elige esa opción podrías mostrar un microcopy específico que facilite el contacto laboral (p.ej. 'Pasame el rol y la modalidad').
- **Acción:** Al elegir 'Oportunidad laboral', actualizar el hint/placeholder del mensaje a algo orientado a empleo ('Contame el rol, stack y si es remoto') y, opcional, prellenar el asunto del mailto con '[Oportunidad]'.
- **Dónde:** `contact.html:205-211, js/main.js setupContactForm`

**Los links externos no tienen indicación visual consistente de 'abre en nueva pestaña'** _(esfuerzo: bajo)_
- Los links externos usan target=_blank y un '↗' textual inconsistente (a veces sí, a veces no; en contact:146-154 sí, en footer:265 no). No hay un icono uniforme ni aria que avise 'abre en pestaña nueva'. Consistencia = craft.
- **Acción:** Unificar: todo link a target=_blank lleva el mismo icono '↗' (o SVG) y un texto SR-only 'abre en nueva pestaña'. Aplicar via CSS attribute selector a[target=_blank] para no depender de escribirlo a mano.
- **Dónde:** `contact.html:146-154 y 264-269, footer global`

**No hay confirmación/estado al copiar el número de WhatsApp o el handle de GitHub** _(esfuerzo: bajo)_
- En contact (líneas 143-156) WhatsApp, GitHub y LinkedIn son solo links. Igual que el email, copiar el dato (sobre todo el número de WhatsApp y el handle) con feedback es un gesto esperado. Hoy el usuario tiene que seleccionar a mano.
- **Acción:** Sumar botón de copiar al número de WhatsApp y al handle de GitHub/LinkedIn con el mismo patrón de 'Copiado ✓' + aria-live reutilizado del email.
- **Dónde:** `contact.html:143-156`

**El botón 'Subir' del footer (footer.topLabel) no tiene scroll suave garantizado ni animación de aparición** _(esfuerzo: bajo)_
- Existe un footer.topLabel ('Subir'/'Top') en i18n pero no se ve un botón flotante 'volver arriba' que aparezca tras scrollear. En páginas largas el usuario debe scrollear todo a mano. Un back-to-top que aparece/desaparece con fade es microcraft clásico que falta.
- **Acción:** Implementar un botón 'volver arriba' que aparece tras ~600px de scroll (clase is-visible), con scroll suave (scroll-behavior ya está en smooth) y respeto a reduced-motion. Reusar el string footer.topLabel.
- **Dónde:** `footer global, js/main.js`

**No hay focus trap ni manejo de Escape en otros overlays además del menú móvil** _(esfuerzo: medio)_
- setupMobileMenu (main.js:1129-1189) implementa focus trap y Escape correctamente, buen craft. Pero si se agregan overlays nuevos (estado de éxito del form, lightbox de capturas de casos), no hay un helper reutilizable. Sin esto, cualquier modal futuro nacerá inaccesible.
- **Acción:** Extraer la lógica de focus-trap + Escape + restauración de foco a un helper reutilizable, para que el modal de éxito del form y un eventual lightbox de imágenes lo hereden.
- **Dónde:** `js/main.js:1129-1189`

**Los thumbnails de los casos no tienen lightbox para ver las capturas en grande** _(esfuerzo: alto)_
- En work.html y los casos, las capturas son demostración de tu trabajo visual pero no se pueden ampliar. Un reclutador que quiere ver el detalle de la UI no puede hacer zoom. Un lightbox accesible (con focus trap del helper anterior) es craft que muestra tu trabajo mejor.
- **Acción:** Agregar lightbox accesible al click en las capturas (con teclado, Escape, focus trap, aria), respetando reduced-motion. Solo si las imágenes tienen resolución suficiente para verse bien ampliadas.
- **Dónde:** `work.html, case/*.html`

**El indicador 'Disponible' del footer es un punto que no comunica actividad real** _(esfuerzo: bajo)_
- footer__badge-dot (contact.html:257) es un punto estático/pulsante de 'Disponible · 2026'. Es decorativo. Podría reflejar algo real (online según horario laboral GMT-3) para que el 'disponible' tenga sustento y no sea solo gráfico.
- **Acción:** Hacer que el dot/estado refleje la franja horaria laboral (verde 'disponible ahora' L-V 9-19 GMT-3, atenuado fuera de eso) reutilizando la lógica de setupClock. Mantener honesto y sutil.
- **Dónde:** `footer global (contact.html:256-259), js/main.js`

**Falta un microcopy de 'respuesta < 24h' reforzado en el botón de envío, no solo en el hint** _(esfuerzo: bajo)_
- El hint 'Te respondo en menos de 24 horas' (contact.form.hint) está bajo el form, pero el momento de máxima ansiedad del usuario es justo al apretar enviar. Reforzar la promesa en/junto al botón reduce fricción de conversión.
- **Acción:** Mostrar el '< 24h' como microcopy permanente junto al botón enviar (no solo como nota post-submit), reforzando la promesa de respuesta en el punto de decisión.
- **Dónde:** `contact.html:231-235`
