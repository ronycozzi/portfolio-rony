# Lo que falta para que el portfolio esté completo — Rony Cozzi

> Generado el 2026-06-09. Cruza 4 fuentes:
> 1. **Inventario** del sitio (agente que catalogó las 13 páginas, features y links reales).
> 2. **Research web** (4 agentes): portfolios referentes, qué buscan recruiters, qué hace memorables a los premiados, checklists de "portfolio completo".
> 3. **Auditoría técnica previa** de 96 hallazgos (`AUDITORIA_PORTFOLIO_2026-06-09.md`).
> 4. **Mi pasada con el lente elite-craft** (dirección de arte + criterio senior).
>
> Objetivo declarado: conseguir **trabajo remoto full-time** (también acepta freelance). Todo está priorizado para ese objetivo.

---

## Diagnóstico en una frase

El portfolio **ya está por encima del promedio junior** en craft, performance y SEO técnico — pero le falta lo único que un recruiter técnico realmente abre: **el código**. Y vende freelance cuando tu objetivo es empleo. Eso es lo que hay que cerrar.

**Veredicto de completitud: ~70%.** Lo que falta no es maquillaje: son las señales que separan "lindo sitio" de "contratemos a esta persona".

---

## P0 — CRÍTICO (sin esto, un recruiter técnico descarta o duda)

### 1. Ningún proyecto enlaza al código (GitHub repo)
**Es el estándar más universal de todos.** Brittany Chiang, Adham Dannaway, las guías de freeCodeCamp, Comeau y todos los recruiters coinciden: cada proyecto necesita **dos links — demo en vivo Y repositorio**. Tu sitio solo tiene el demo. Para un junior, el código ES la prueba de que sabés hacer, no solo describir. Hoy un hiring manager no puede inspeccionar una sola línea tuya desde el portfolio.
- **Acción:** agregar link "Código / GitHub ↗" en cada card del home, cada work-item de `/work` y cada case study.

### 2. Los repos necesitan README decente (señal #1 de remoto)
Los recruiters abren el GitHub como **primera impresión técnica**. Cada repo debe tener: overview (qué es y por qué), stack, cómo correrlo local, y screenshots/GIF. Para trabajo remoto pesa doble — *"documentación clara es una señal de remote-work"*: muestra que un compañero entiende tu trabajo sin diez preguntas. Un repo sin README parece tutorial abandonado.
- **Acción:** README por proyecto. Para los demos, aclarar honestamente que es una pieza de demostración y qué decisiones se tomaron.

### 3. Falta tu proyecto fullstack real — Brew Bank
Tu about promete **Node.js, Supabase, APIs REST, serverless, auth**… pero los 4 proyectos mostrados son sitios de marca **frontend**. Hay un hueco entre lo que decís y lo que probás. Y tenés **Brew Bank** (el banco digital fullstack de `web-06`: backend, auth, 26 páginas) que demostraría el claim "Full Stack" de verdad. Las guías marcan el proyecto fullstack (front + back + DB) como **la señal más fuerte para un Full Stack junior**.
- **Acción:** sumar Brew Bank como 5º proyecto (o reemplazar el más débil). Es tu mejor activo y no está.

### 4. El bilingüe EN está incompleto (9 de 13 páginas en español)
Te declarás bilingüe, pero el toggle EN solo funciona en home/work/about/contact. Los **4 case studies, FAQ, proceso y legales** quedan 100% en español — justo el contenido que más vende capacidad técnica. Un recruiter anglo que activa EN y entra a un caso percibe **descuido**. Tratalo como higiene: o está al 100% o no se ofrece.
- **Acción:** traducir el cuerpo de los 4 case studies primero (son el corazón para empleo), luego FAQ/proceso. (Detalle técnico en la auditoría, hallazgo i18n.)

### 5. Los case studies presentan demos como clientes reales + claims falsificables
Narran *"el equipo de ventas perdía leads"*, *"el restaurante tardaba 6s"* como historias de cliente — pero tu propio `terms.html` admite que son demos, y las URLs `*-demo.vercel.app` lo delatan. Además declaran *"field data"* y *"validado en Search Console"* en sitios sin tráfico real, lo cual **cualquier dev senior detecta en 2 minutos**. Si un entrevistador pregunta "¿cómo mediste eso?", se cae la credibilidad de todo el portfolio.
- **Acción:** reencuadrar como *"proyecto de demostración: me propuse resolver el caso típico de…"*. Cambiar "field data" por "lab data (Lighthouse)". Cada número debe sobrevivir a un fact-check en vivo.

### 6. Violaciones de tus propias reglas duras
- **"Argentina" en el hero** (`index.html:177`) → viola tu regla 1 (sin ubicación geográfica en hero).
- **El dark default lo anula el OS** (`main.js:668`) → si el visitante tiene el sistema en claro, carga en light. Viola tu regla 4 (dark por defecto).
- **Acción:** sacar el loc-pin del hero; forzar dark como base real e ignorar `prefers-color-scheme` salvo override manual.

---

## P1 — IMPORTANTE (completan el portfolio profesional)

### 7. Sin Experiencia / timeline ni Educación en /about
Tu about tiene bio + stack + principios, pero **un recruiter no ve trayectoria cronológica**. Los referentes (Brittany Chiang lista 6 posiciones con stack por entrada) la tienen. Para un junior sin experiencia formal extensa, se sustituye con: proyectos freelance, autoaprendizaje/bootcamp presentado como timeline, educación.
- **Acción:** sección "Trayectoria" con hitos fechados (aunque sean proyectos y formación).

### 8. Los case studies no tienen final (resultado + aprendizaje)
Cuentan problema → solución y **cortan ahí**. El patrón ganador 2025-2026 es de 3 actos: **Challenge → Process → Outcome con métricas**. El 78% de los decisores confían más en casos con métricas específicas. Y para un junior, la sección *"qué aprendí / qué refactorizaría"* es oro: demuestra criterio y humildad técnica.
- **Acción:** cerrar cada caso con resultado medible (honesto: Lighthouse, peso del bundle, WCAG) + un párrafo de aprendizaje.

### 9. Todo el copy vende freelance, no a un candidato
Precios, anticipos del 50%, mantenimiento mensual, cripto, "primera llamada gratis"… El objetivo es empleo remoto, pero **no hay ninguna señal "busco un rol full-time"**. Un recruiter que entra no encuentra dónde decís que estás disponible para un equipo.
- **Acción:** sin eliminar la vía freelance, agregar señal dual. En about: *"Abierto a roles full-time remotos en equipos de producto"* + CV. En hero/contact: dual-CTA (*"¿Tenés un proyecto?"* / *"¿Estás contratando?"*).

### 10. Cero prueba social
No hay testimonios, ni recomendaciones, ni logos. La única "prueba" es técnica y auto-declarada. Las guías de empleabilidad lo marcan fuerte para juniors porque compensa la falta de track record.
- **Acción:** 1-3 testimonios cortos de mentores, compañeros de bootcamp o cualquier cliente freelance. Aunque sea una recomendación de LinkedIn citada.

### 11. Métricas Lighthouse sin respaldo verificable
"Lighthouse 94-99", "LCP <900ms" son números propios sin link a un reporte real. Para un perfil que vende performance, esto es fácil de respaldar y fácil de dudar.
- **Acción:** badge o link a PageSpeed Insights / web.dev de cada demo. Convierte un claim en evidencia.

### 12. Dominio propio
Estás en `portfolios-ronycozzi.vercel.app`. Un dominio propio (`ronycozzi.dev`, ~USD 12/año) es **el upgrade de imagen más barato que existe** — múltiples fuentes lo marcan como señal de percepción profesional.
- **Acción:** comprar `ronycozzi.dev` y apuntarlo. (Nota: hay inconsistencia Vercel vs Netlify entre el sitio y tu perfil — unificar.)

### 13. Formulario de contacto sin backend
Solo abre un `mailto:`. Sin envío server-side, sin confirmación, sin anti-spam. Irónico para alguien que ofrece "formularios conectados e integraciones" como servicio — es una oportunidad de **demostrar el skill en tu propio sitio**.
- **Acción:** conectar a Formspree / Netlify Forms / una serverless function. De paso, prueba viva de tu capacidad de integración.

### 14. GitHub perfil sin pulir
El recruiter llega a tu GitHub y la primera impresión importa: **README de perfil** (mini-bio: stack, proyectos, links), **repos pinneados** (los mejores arriba), historial de commits prolijo. Casi el 60% de los hiring managers valora ver trabajo colaborativo/ordenado.
- **Acción:** crear README de perfil + pinnear los repos de los proyectos del portfolio.

### 15. OG image de los case studies en WebP
Las og:image de los 4 casos son WebP 1440x900. **LinkedIn y varios scrapers no renderizan WebP** ni ese ratio — y vas a compartir tu trabajo justamente en LinkedIn. (Detalle en auditoría SEO.)
- **Acción:** generar OG en PNG/JPG 1200x630 por case study.

---

## P2 — DIFERENCIADORES (de "bueno" a "memorable")

### 16. Blog / escritura técnica — el separador más citado
No es obligatorio, **pero es el #1 diferenciador entre "bueno" y "memorable"**. Josh Comeau construyó su marca entera sobre el blog. Para un junior remoto, 2-3 posts explicando *cómo resolviste algo* demuestran **comunicación escrita** — que para remoto predice el éxito mejor que cualquier test de código.
- **Acción:** 2-3 notas cortas. Ej: "Cómo hice este portfolio en vanilla sin frameworks", "i18n a mano sin librerías", "Reescribir un React de 4MB a vanilla".

### 17. Página /uses
Lista de tu setup (editor, terminal, extensiones, hardware). Concepto de Wes Bos (uses.tech). Bajo esfuerzo, alta señal de **pertenencia a la cultura dev**. Humaniza sin ser cursi.

### 18. Un momento memorable / firma (lo que se comparte)
Tenés varios gestos buenos (HUD, reloj GMT-3, transiciones numeradas, terminal en 404) pero **ninguno único e inolvidable**. Bruno Simon = jeep 3D; Josh Comeau = sonido "pop" al hover. No hace falta WebGL: alineado a tu estética editorial sobria, debe ser **elegante** — una transición de firma, un detalle tipográfico animado, un easter egg discreto.
- **Idea:** expandir el modo terminal del 404 a un easter egg navegable (comandos reales: `whoami`, `ls projects`, `cat cv`). Encaja con tu estética y demuestra oficio.

### 19. Tipografía art-directed
Hoy descansás en **Inter** (el default que un director de arte evita). En una estética editorial, **la tipografía ES la dirección de arte**. Space Grotesk para display está bien; el cuerpo en Inter es lo genérico.
- **Acción:** evaluar una neutra con más carácter para el cuerpo (ej. una grotesca con personalidad o una serif editorial para citas/leads).

### 20. Analytics
Sin Plausible/GA, no sabés de dónde llegan las oportunidades (LinkedIn vs GitHub vs Google) ni qué proyectos se ven más. Setup de 5 minutos. Irónico porque ofrecés "analítica + tracking" como servicio.

### 21. Madurez operativa en ≥1 proyecto (tests, error handling, CI)
En 2025-2026, con menos demanda junior, varios hiring managers esperan que **al menos un proyecto** se vea como sistema de producción: manejo de errores, algo de testing, deploy real, CI. No over-engineering en todos — profundidad real en uno. (Brew Bank es el candidato natural.)

### 22. Otros pulidos menores
- **Archive / "ver todos los proyectos"**: opcional con 4 proyectos, útil si sumás más.
- **Newsletter**: prescindible — puede sonar pretencioso sin contenido detrás. Saltear.
- **Charlas/talks**: no esperable en junior. Saltear.
- **Inconsistencia de conteo**: el eyebrow de `/work` dice "[Índice · 02 trabajos]" pero hay 4. Corregir.

---

## Resumen ejecutivo: el orden en que lo haría

| # | Acción | Impacto | Esfuerzo |
|---|---|---|---|
| 1 | Links a GitHub repo en cada proyecto | Altísimo | Bajo |
| 2 | README por repo + README de perfil GitHub | Altísimo | Medio |
| 3 | Sumar Brew Bank (fullstack real) | Altísimo | Medio |
| 4 | Reencuadrar case studies (honestos + con resultado) | Alto | Medio |
| 5 | Señal "busco empleo full-time" (dual-CTA) | Alto | Bajo |
| 6 | Sacar "Argentina" del hero + dark default real | Alto | Bajo |
| 7 | Completar EN en case studies | Alto | Medio |
| 8 | Sección Experiencia/timeline en about | Medio | Bajo |
| 9 | Dominio propio + OG en PNG | Medio | Bajo |
| 10 | Form con backend real | Medio | Medio |
| 11 | 1-3 testimonios | Medio | Bajo |
| 12 | Blog (2-3 posts) | Medio (diferenciador) | Alto |
| 13 | /uses + easter egg terminal + tipografía | Bajo (memorabilidad) | Variable |

**Lo no negociable son los primeros 6.** Con eso pasás de "portfolio lindo" a "candidato serio". El resto es lo que te vuelve memorable.

> Nota: los **fixes técnicos puntuales** (contraste, i18n a nivel código, CSS, JS, PWA) están en el documento aparte `AUDITORIA_PORTFOLIO_2026-06-09.md` con archivo:línea y fix de cada uno.
