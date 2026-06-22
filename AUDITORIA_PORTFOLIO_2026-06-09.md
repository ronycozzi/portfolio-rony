# Auditoria completa del portfolio - Rony Cozzi

> Generada el 2026-06-09 con 20 agentes (8 auditores por dimension + 12 verificadores adversariales).
> Sitio auditado: `C:\Users\Usuario\Desktop\PORTFOLIO-WEBS\Rony-potfolios`
> Total: 96 hallazgos (12 alta, 33 media, 51 baja). Los 12 de severidad alta fueron verificados por un segundo agente: 12 confirmados, 0 refutados.

## Notas por dimension

| Dimension | Nota | Alta | Media | Baja |
|---|---|---|---|---|
| copy-tono | 6 de 10 | 4 | 3 | 4 |
| i18n | 5.5 de 10 | 1 | 4 | 4 |
| accesibilidad | 7 de 10 | 1 | 5 | 6 |
| seo | 7.5 de 10 | 0 | 2 | 8 |
| css-diseno | 6.5 de 10 | 2 | 8 | 7 |
| javascript | 7.5 de 10 | 1 | 3 | 7 |
| pwa-performance | 7.5 de 10 | 0 | 5 | 8 |
| estructura-html | 7.5 de 10 | 3 | 3 | 7 |

---

## Dimension: copy-tono - 6 de 10

El copy es notablemente sobrio y profesional para un junior: voseo rioplatense consistente, CTAs claros, cero cursilería y una FAQ honesta que genera confianza. Los problemas graves son de credibilidad y de cobertura: los case studies narran clientes y métricas "de antes" que la propia página de Términos admite que son demos, hay claims técnicos fácilmente falsificables (field data y Search Console en sitios demo), el hero muestra "Argentina" violando la regla 1, y el toggle EN deja en español justo el contenido que más vende (case studies, FAQ, proceso). Además, todo el sitio está escrito para captar clientes freelance, no para convencer empleadores, que es el objetivo declarado del portfolio.

### Fortalezas (no tocar)

- Voseo rioplatense 100% consistente en todo el sitio ("contame", "escribime", "necesitás", "podés", "Deslizá") — la voz nunca se quiebra entre páginas, algo difícil de lograr en 13 HTML.
- Cumple la regla 2 a rajatabla: no hay "DJ", ni "me obsesiona", ni copy cursi en ninguna página. El tono es sobrio y directo ("Función. Forma. Resultado.", "Sin ornamento que tape el mensaje").
- CTAs claros y consistentes en todas las páginas: "Ver proyectos", "Escribime", "Enviar mensaje", con la promesa "<24h" repetida idéntica en hero, contact-card, FAQ y contact — no tocar.
- La FAQ tiene honestidad que vende: "¿Cuándo no soy buen encaje?" lista casos donde NO conviene contratarlo y recomienda Shopify/WooCommerce cuando aplica (faq.html:219, 252-259). Eso genera confianza real.
- El claim de contraste de sellink.html:252 ("Rojo #FF3300 sobre negro #070707 con ratio 5.4:1") es matemáticamente correcto (5.49:1 verificado) — buen ejemplo de claim respaldable.
- El copy de privacy.html:140 ("se abre tu aplicación de email... se envía recién cuando confirmás") describe con precisión el comportamiento mailto real del formulario — copy y producto alineados.
- La página 404 tiene personalidad sin perder profesionalismo: "O nunca existió, o la moví, o el link estaba mal desde el principio" + terminal con curl (404.html:127-141).
- La traducción EN del contenido que SÍ está traducido (home, about, work, contact en js/main.js:247-468) es correcta y natural en su mayoría, sin errores gramaticales graves.

### Severidad alta

#### Ubicación geográfica en el hero — viola la regla dura 1

- **Archivo:** `index.html:177`
- **Detalle:** En el bloque hero__top aparece `<span class="loc-pin"><span class="loc-pin__dot"></span><span>Argentina</span></span>` junto al tag "Disponible · 2026" y el reloj GMT-3. Es exactamente lo que la regla 1 prohíbe: ubicación geográfica visible en el hero. El mismo loc-pin se repite en el footer (index.html:529), donde sí es aceptable.
- **Fix:** Eliminar el loc-pin del hero (index.html:177) y dejar solo "Disponible · 2026" + reloj. La señal de zona horaria ya está cubierta por "Remoto · GMT-3" en hero__facts y el dato "Base: Córdoba, AR" queda en la contact-card y footer.
- **Verificacion adversarial:** CONFIRMADO - Verificado en C:\Users\Usuario\Desktop\PORTFOLIO-WEBS\Rony-potfolios\index.html:177, dentro del bloque hero__top (líneas 175-179): `<span class="loc-pin"><span class="loc-pin__dot"></span><span>Argentina</span></span>`, junto al tag "Disponible · 2026" (línea 176) y el reloj `--:--:-- GMT-3` (línea 178), exactamente como describe el hallazgo. No está oculto: css/styles.css:552 define `.loc-pin { display: inline-flex; ... }` y css/styles.css:871 tiene una regla responsive específica `.hero__top .loc-pin { padding: 6px 10px; font-size: 11px; }`, lo que confirma que el pin se renderiza visiblemente en el hero. El loc-pin del footer (index.html:529) también existe tal como se cita. Es una violación directa de la regla dura 1 (sin ubicación geográfica en el hero), y el fix propuesto es coherente: "Córdoba, AR" ya aparece en la contact-card (index.html:518) y la zona horaria queda cubierta por el reloj GMT-3.

#### Toggle EN incompleto: case studies, FAQ, process, legales y 404 fuerzan español — viola la regla dura 5

- **Archivo:** `js/main.js:474`
- **Detalle:** `const fullyLocalizedPages = new Set(['home', 'about', 'work', 'contact']);` y `resolveLang()` (main.js:505-507) devuelve 'es' para cualquier otra página. Todo el cuerpo de case/cognition.html, case/cucu.html, case/luco.html, case/sellink.html, faq.html, process.html, privacy.html, terms.html y 404.html está hardcodeado en español sin atributos data-i18n. Un recruiter angloparlante que activa EN en home y hace clic en "View case study" cae en "El problema / La solución / Decisiones técnicas" 100% en español — justo el contenido que más vende capacidad técnica.
- **Fix:** Prioridad: traducir los 4 case studies (son el corazón del portfolio para empleo remoto). Agregar data-i18n al cuerpo de los cases y extender el diccionario en de main.js, o crear versiones /en/ estáticas. FAQ y process siguen en prioridad; legales pueden quedar ES con una nota "available in Spanish only". Mientras tanto, mostrar un aviso al usuario EN en esas páginas en vez de silenciosamente ignorar el toggle.
- **Verificacion adversarial:** CONFIRMADO - CONFIRMADO. Evidencia textual: (1) js/main.js:474 contiene exactamente `const fullyLocalizedPages = new Set(['home', 'about', 'work', 'contact']);`. (2) js/main.js:505-507: `function resolveLang(lang) { return pageSupportsLangToggle() ? lang : 'es'; }` — fuerza 'es' en toda página fuera del set. (3) El cuerpo de los 4 case studies está hardcodeado en español sin data-i18n: case/cognition.html:208 `<h3>El problema</h3>`, :213 `<h3>La solución</h3>`, :222 `Decisiones técnicas` (idéntico en cucu.html:208/213/222, luco.html:208/213/222, sellink.html:208/213/222). Los ~27 data-i18n que sí existen en cada case son solo nav/footer/a11y (nav.home, footer.status, case.back, etc.), no contenido. Igual en faq.html (29 data-i18n, todos chrome), process.html, privacy.html, terms.html y 404.html. (4) Agravante verificado: como applyLang() (main.js:548-549) usa resolveLang(), en esas páginas hasta el nav y footer localizados se renderizan en español aunque el usuario tenga EN guardado en localStorage. Única matización: el toggle no se "ignora silenciosamente" — se oculta (main.js:655-657 `btn.hidden = !allowLangToggle`), así que el usuario EN queda atrapado en español sin control visible. Eso no refuta el hallazgo; lo refuerza. Severidad alta justificada: los case studies son el contenido que vende capacidad técnica a recruiters angloparlantes y viola la regla dura 5 ("Toggle ES/EN funcional y completo").

#### Case studies presentan demos como clientes reales con historias inventadas — contradicho por terms.html

- **Archivo:** `case/cognition.html:195`
- **Detalle:** Los cuatro case studies narran backstories de cliente con métricas "de antes": cognition.html:195 "El producto real existe", cognition.html:209 "Una demo existente del producto en React con bundle de 4MB que tardaba 8s en cargar en móvil... El equipo de ventas perdía leads"; luco.html:209 "El restaurante tenía un sitio antiguo que tardaba más de 6 segundos... El menú vivía en una imagen JPG"; sellink.html:209 "Plantilla de Wix que tardaba 5+ segundos"; cucu.html:195 "Operaban sin presencia web". Pero terms.html:141 admite: "Algunos de estos proyectos son demos o proyectos personales — no implican necesariamente una relación comercial contractual vigente con las marcas mencionadas". Las URLs (*-demo.vercel.app) delatan que son demos. Si un entrevistador pregunta "¿cómo mediste el bundle de 4MB del sitio anterior?" la historia se cae, y con ella la credibilidad de todo el portfolio.
- **Fix:** Reencuadrar el copy de los cases con honestidad, que además vende bien para un junior: "Proyecto de demostración: me propuse resolver el caso típico de un restaurante con menú en JPG...". Mantener problema→solución como escenario de diseño, no como historia de cliente. Si alguno fue cliente real, etiquetarlo explícitamente para diferenciarlo.
- **Verificacion adversarial:** CONFIRMADO - Todas las citas del hallazgo se verifican textualmente: cognition.html:195 "El producto real existe"; cognition.html:209 "Una demo existente del producto en React con bundle de 4MB que tardaba 8s en cargar en móvil... El equipo de ventas perdía leads"; luco.html:209 "El restaurante tenía un sitio antiguo que tardaba más de 6 segundos en cargar en móvil. El menú vivía en una imagen JPG"; sellink.html:209 "Plantilla de Wix que tardaba 5+ segundos en cargar"; cucu.html:195 "Operaban sin presencia web". Y terms.html:141 admite literalmente: "Algunos de estos proyectos son demos o proyectos personales — no implican necesariamente una relación comercial contractual vigente con las marcas mencionadas". Las cuatro URLs confirman el patrón demo: cognition-demo-cyan.vercel.app (cognition.html:60), luco-gourmet-demo.vercel.app (luco.html:60), sellink-group-demo.vercel.app (sellink.html:60), cucu-studio-demo.vercel.app (cucu.html:60). Evidencia adicional que refuerza la contradicción interna: cucu.html:214 dice en el mismo case "Deploy en Vercel con dominio de demo", mientras dos secciones antes (línea 195) narra el backstory de cliente como real. Las métricas "de antes" (bundle 4MB, 8s, 6s, 5+s) son inverificables y se caen ante una pregunta de entrevista, exactamente como describe el hallazgo. La severidad alta es correcta: es un riesgo de credibilidad de todo el portfolio para un junior buscando empleo.

#### Claims técnicos falsificables: Search Console y field data en sitios demo sin tráfico

- **Archivo:** `case/luco.html:232`
- **Detalle:** luco.html:232: "Rich results validados en Google Search Console"; luco.html:247: "Core Web Vitals en verde según PageSpeed Insights (field data)"; cognition.html:252: "LCP medio de 2.1s en 3G lento según field data"; cognition.html:247: "Rich results en Google validados". El field data (CrUX) requiere tráfico real significativo — un demo en *.vercel.app no tiene datos de campo, y cualquier dev senior lo sabe. Además luco.html:232 declara `AggregateRating` en el Schema de un restaurante demo, lo cual hasta contraviene las guidelines de Google. Son claims que un entrevistador técnico puede verificar en 2 minutos y encontrar falsos.
- **Fix:** Cambiar "field data" por "lab data (Lighthouse/PageSpeed)" que sí es verificable en un demo, y "validados en Search Console" por "validados con el Rich Results Test". Quitar la mención a AggregateRating o aclarar que es ilustrativa. Regla: cada número del portfolio debe sobrevivir a un fact-check en vivo durante una entrevista.
- **Verificacion adversarial:** CONFIRMADO - Las 4 citas existen textualmente en los archivos: (1) case/luco.html:232 — "JSON-LD con Restaurant, OpeningHoursSpecification, Menu, GeoCoordinates y AggregateRating. Rich results validados en Google Search Console."; (2) case/luco.html:247 — "Core Web Vitals en verde según PageSpeed Insights (field data)."; (3) case/cognition.html:252 — "LCP medio de 2.1s en 3G lento según field data."; (4) case/cognition.html:247 — "Rich results en Google validados." El contexto agrava el hallazgo: los proyectos son demos confirmados por sus propias URLs en el código — case/luco.html:155 enlaza a https://luco-gourmet-demo.vercel.app/ y case/cognition.html:155 a https://cognition-demo-cyan.vercel.app/. El field data (CrUX) exige un volumen mínimo de usuarios reales de Chrome; un subdominio demo de vercel.app no aparece en CrUX, por lo que cualquier entrevistador puede pegar la URL en PageSpeed Insights y ver "no hay datos de campo disponibles", refutando el claim en vivo. Lo mismo aplica a "LCP medio según field data". El claim de Search Console es técnicamente posible (se puede verificar la propiedad propia) pero combinado con AggregateRating para un restaurante ficticio contraviene las guidelines de review snippets de Google (ratings autogenerados/no verificables) y es difícil de defender. Única imprecisión menor del hallazgo original: AggregateRating aparece en el COPY que describe el schema del demo (línea 232), no como declaración JSON-LD dentro del propio luco.html del portfolio — pero la sustancia (afirmar haber usado AggregateRating en un demo) se mantiene. El fix propuesto (cambiar a "lab data" / "Rich Results Test") es correcto y verificable. Severidad alta justificada: el portfolio existe para conseguir entrevistas y estos son exactamente los claims que un entrevistador técnico fact-checkea en minutos.

### Severidad media

#### Todo el copy vende servicios freelance a clientes, no al candidato ante empleadores

- **Archivo:** `faq.html:196`
- **Detalle:** El objetivo declarado del portfolio es conseguir trabajo remoto, pero el copy está orientado a captar clientes: faq.html:198 "Cobro 50% de anticipo al arrancar", faq.html:205 "planes de mantenimiento mensual", process.html:250 "la primera llamada es gratis", y la única mención a empleo es "Oportunidad laboral" como opción del select (contact.html:208) y "posiciones internas" al pasar (about.html:152). Un recruiter que entra no encuentra ninguna página ni sección que diga "estoy buscando un rol full-time remoto" ni qué aporta a un equipo.
- **Fix:** Sin eliminar la vía freelance, agregar señal explícita para empleadores: en about, un párrafo tipo "Abierto a roles full-time remotos en equipos de producto" con link al CV, y en el hero o contact un dual-CTA ("¿Tenés un proyecto?" / "¿Estás contratando?"). Considerar que FAQ y process hablen también al caso de contratación.

#### Título "Full Stack Developer" inconsistente entre páginas e idiomas — regla dura 3 a medias

- **Archivo:** `js/main.js:380`
- **Detalle:** La regla pide "Full Stack Developer" como título. El JSON-LD lo cumple (index.html:76 "jobTitle": "Full Stack Developer") y el hero EN también (main.js:253). Pero conviven variantes: ES usa "desarrollador full stack" en minúsculas (title, meta description, hero.role en index.html:6,7,183), y en EN se mezclan "Full stack developer." (main.js:379-380, about hero), "Full stack development" (main.js:341), "Full stack sites" (main.js:327) y "Full Stack Developer" (main.js:253,383,387).
- **Fix:** Unificar capitalización: en EN siempre "Full Stack Developer" (incluido el about hero: "Full Stack / Developer."); en ES decidir una sola forma ("Desarrollador Full Stack" respeta mejor la regla 3) y aplicarla en title, metas, hero.role y about.facts.

#### Case studies sin sección de resultado: la estructura es problema→solución y ahí corta

- **Archivo:** `case/cognition.html:204`
- **Detalle:** Las cuatro páginas de caso tienen "Reto y respuesta" con bloques "01 El problema / 02 La solución" (cognition.html:204-216, cucu.html:204-216, luco.html:204-216, sellink.html:204-216) y luego "Decisiones técnicas" y "Stack". No hay sección "Resultado" ni "Aprendizajes": las stats del header (Lighthouse 94-99, LCP) quedan flotando sin narrativa de cierre, y nada conecta la solución con un outcome ("el menú offline eliminó las consultas por WhatsApp", "LCP pasó de 6s a 0.9s"). El brief de esta auditoría pide problema→solución→resultado convincente.
- **Fix:** Agregar una sección final "Resultado" (o "Qué logré") de 3-4 bullets por caso conectando las stats del header con el problema inicial (antes/después de LCP, peso de página, score). Si el proyecto es demo, encuadrarlo como "objetivos de la demo cumplidos" + "qué aprendí", que para un junior vende incluso más.

### Severidad baja

#### Alt text contradictorio y con anglicismo en las imágenes de Cucú

- **Archivo:** `case/cucu.html:168`
- **Detalle:** index.html:297 describe la imagen como "layout editorial sobre fondo claro con acento copper" (mezcla "copper" en inglés) mientras case/cucu.html:168 describe la misma captura como "layout editorial con fondo oscuro y acento cobre". El sitio Cucú es claro (la propia case-hero usa --case-bg:#FAFAF7, cucu.html:141), así que el alt del case study es incorrecto además de inconsistente.
- **Fix:** Unificar: "Sitio de Cucú Studio — layout editorial sobre fondo claro con acento cobre" en ambos archivos (index.html:297 y case/cucu.html:168).

#### Calcos del inglés en ES y EN poco natural en etiquetas

- **Archivo:** `faq.html:252`
- **Detalle:** ES: faq.html:252 "¿Cuándo no soy buen encaje para tu proyecto?" — "buen encaje" es calco de "good fit"; about.html:152 "posiciones internas" es calco de "in-house positions". EN: main.js:266/321/388 usa "Modality" como etiqueta (calco de "Modalidad"; en inglés natural sería "Work mode" o "Location") y main.js:317 "Email me or send a WhatsApp." — "send a WhatsApp" suena a traducción; lo natural es "message me on WhatsApp".
- **Fix:** ES: "¿Cuándo NO soy la mejor opción para tu proyecto?" y "roles full-time en empresas". EN: cambiar "Modality" por "Work mode" y el contactCard.title EN por "Email me or<br/>message me on WhatsApp."

#### FAQ dedicada a cripto con detalle de redes — señal rara para empleadores

- **Archivo:** `faq.html:238`
- **Detalle:** faq.html:238-241: "¿Aceptás cripto? Sí. Acepto USDT y USDC en redes Polygon, Arbitrum o Base. También acepto Bitcoin (BTC) para montos mayores." Es la única FAQ que no aporta a la decisión de contratar y el nivel de detalle (redes específicas) le da un protagonismo desproporcionado; para un recruiter corporativo puede leerse como señal informal.
- **Fix:** Eliminar la pregunta dedicada y dejar la mención breve que ya existe en "¿Qué incluye un proyecto y cómo cobrás?" (faq.html:198: "transferencia bancaria, PayPal y cripto (USDT/USDC)"), que es suficiente.

#### "4 proyectos · en producción" estira el significado de producción para demos

- **Archivo:** `work.html:172`
- **Detalle:** work.html:172 declara "4 proyectos · en producción" y featured.copy (index.html:282) "Una selección de proyectos en producción", cuando las 4 URLs son *-demo.vercel.app. terms.html:141 lo matiza ("Los sitios están en producción y son funcionales"), pero "en producción" en contexto de portfolio sugiere clientes reales usándolos. Es coherente con el hallazgo mayor de los case studies.
- **Fix:** Cambiar a "4 proyectos · online" o "4 demos publicadas" en work.status_val (ES y EN, main.js:121 y 343) y "proyectos publicados" en featured.copy, alineado con el reencuadre honesto de los cases.

---

## Dimension: i18n - 5.5 de 10

El sistema i18n de js/main.js está bien construido para las 4 páginas principales (home, work, about, contact): 220 claves perfectamente simétricas ES/EN, persistencia en localStorage, actualización de lang, metadatos y atributos. El problema grave es de cobertura: 9 de las 13 páginas (los 4 case studies, FAQ, process, privacy, terms y 404) están forzadas a español y el toggle se oculta ahí, así que un reclutador angloparlante que abre un caso de estudio cae a un sitio 100% en español sin forma de cambiarlo. Además el inglés es invisible para buscadores (no hay hreflang ni URLs por idioma), no se detecta el idioma del navegador, hay flash de español para usuarios EN, y quedan textos y alt de imágenes sin traducir en las páginas que sí son bilingües.

### Fortalezas (no tocar)

- Las claves de traducción están perfectamente simétricas: 220 keys en ES y 220 en EN, sin faltantes en ninguna dirección (verificado programáticamente sobre js/main.js).
- El mecanismo de aplicación es sólido: data-i18n para texto, data-i18n-attr para atributos (aria-label, placeholder, title), y t() con fallback a ES si falta una key (js/main.js:509-512). No tocar.
- La preferencia se persiste en localStorage ('rc-lang') con helpers try/catch y caché en memoria (js/main.js:476-495), y sobrevive entre páginas.
- document.documentElement.lang se actualiza en cada applyLang (js/main.js:550), y los metadatos title/description/og/twitter se retraducen por idioma en las 4 páginas principales (updatePageMetadata, js/main.js:598-651).
- setTextWithBr (js/main.js:535-546) inserta <br> con createElement en vez de innerHTML: el sistema es seguro contra XSS aun con HTML en las strings.
- El formulario de contacto es completamente bilingüe: labels, placeholders (data-i18n-attr en contact.html:184,200,228), opciones del select, estados del botón ('Abriendo email…') y la nota live-region se resincronizan al cambiar idioma (js/main.js:1253-1257).
- El prefill de WhatsApp se regenera en el idioma activo en cada cambio (updateWhatsAppFabLink, js/main.js:515-532).
- Los aria-label dinámicos (menú, tema, nav, skip link, 'Abrir demo: X') se retraducen en applyLang (js/main.js:565-592).

### Severidad alta

#### 9 de 13 páginas no tienen inglés y el toggle desaparece en ellas (viola la regla 'toggle ES/EN funcional y completo')

- **Archivo:** `js/main.js:474`
- **Detalle:** const fullyLocalizedPages = new Set(['home', 'about', 'work', 'contact']); — resolveLang() (js/main.js:505-507) fuerza 'es' en cualquier otra página y setupLang() oculta el botón (btn.hidden = !allowLangToggle, js/main.js:655-658). Afecta a: case/cucu.html, case/luco.html, case/sellink.html, case/cognition.html, faq.html, process.html, privacy.html, terms.html y 404.html (verificado por data-page en cada body). El contenido de los case studies es 100% español hardcodeado (ej. case/cucu.html: 'El proyecto', 'Reto y respuesta', 'El problema', 'La solución'). Consecuencia concreta: un reclutador en EN que hace clic en 'View case study' aterriza en una página completamente en español, donde además el nav y footer (que sí tienen data-i18n) REVIERTEN a español por el forzado de resolveLang, y el botón ES/EN ya no existe para volver. Los case studies son justamente la prueba de trabajo que un empleador extranjero quiere leer.
- **Fix:** Traducir al menos los 4 case studies y la FAQ (son las páginas con valor de venta): agregar las keys es/en en js/main.js, marcar el contenido con data-i18n, y agregar esos data-page a fullyLocalizedPages. Para privacy/terms, si no se quieren traducir aún, dejar el toggle visible con un aviso 'EN version pending' o un resumen en inglés, pero nunca ocultar el control de idioma a mitad de navegación.
- **Verificacion adversarial:** CONFIRMADO - Verificado línea por línea: js/main.js:474 contiene exactamente `const fullyLocalizedPages = new Set(['home', 'about', 'work', 'contact']);`. js/main.js:505-507 (`resolveLang`) fuerza 'es' en cualquier página fuera de ese set, y js/main.js:653-665 (`setupLang`) oculta el botón con `btn.hidden = !allowLangToggle` (línea 657) y no registra el click listener. Grep de `data-page=` confirma 13 páginas, de las cuales 9 quedan fuera del set: case-cucu, case-luco, case-sellink, case-cognition, faq, process, privacy, terms y 404. case/cucu.html:194/204/208/213 tiene 'El proyecto', 'Reto y respuesta', 'El problema', 'La solución' hardcodeados sin data-i18n. El nav de los case sí tiene data-i18n (case/cucu.html:113-116) y t() (js/main.js:509-512) pasa por resolveLang, por lo que nav/footer revierten a español aunque el visitante tenga rc-lang=en; el botón existe en el markup (case/cucu.html:119) pero queda oculto, dejando al usuario EN sin forma de cambiar idioma. La consecuencia descrita es exacta y viola la regla dura #5 (toggle ES/EN funcional y completo) en las páginas de mayor valor de venta.

### Severidad media

#### Los alt de las 8 imágenes de proyectos quedan en español en modo EN

- **Archivo:** `index.html:297`
- **Detalle:** Ningún alt de screenshot tiene mecanismo de traducción (no existen keys 'alt.*' en i18n ni data-i18n-attr="alt:..."). En index.html:297 alt="Sitio de Cucú Studio — layout editorial sobre fondo claro con acento copper", :313 (Luco), :330 (Sellink), :347 (Cognition); en work.html:187 alt="Sitio de Cucú Studio en escritorio", :215, :243, :271. Un usuario de lector de pantalla en inglés escucha descripciones en español, y es incoherente con el resto del sistema que sí traduce aria-labels.
- **Fix:** Crear keys (ej. 'alt.cucu.home', 'alt.cucu.work', etc.) en ambos idiomas en js/main.js y marcar cada <img> con data-i18n-attr="alt:alt.cucu.home" — el mecanismo applyLang ya soporta el atributo alt sin cambios de código.

#### La versión EN es invisible para buscadores: sin hreflang, og:locale fijo es_AR, JSON-LD inLanguage es-AR

- **Archivo:** `index.html:21`
- **Detalle:** No existe ninguna etiqueta <link rel="alternate" hreflang> en ninguna de las 13 páginas ni entradas xhtml:link en sitemap.xml (verificado con grep). Toda la traducción es client-side sobre la misma URL: Google solo indexa el HTML en español, así que un reclutador que busca en inglés nunca encuentra el sitio. Además el og:locale es es_AR en todas las páginas y og:locale:alternate en_US existe SOLO en index.html:32 (falta en work.html:28, about.html:28, contact.html:28), y el JSON-LD declara "inLanguage": "es-AR" en todas (ej. index.html:67). El meta description que updatePageMetadata cambia en runtime (js/main.js:598-651) no lo ve ningún crawler.
- **Fix:** Decisión de arquitectura: o aceptar que el EN es solo client-side (y entonces al menos replicar og:locale:alternate en las 4 páginas localizadas), o servir URLs por idioma (ej. /en/ estático generado desde las mismas keys) con hreflang es/en/x-default recíproco en cada página y en sitemap.xml. Para un portfolio que busca trabajo remoto en inglés, la segunda opción es la que paga.

#### Sin detección del idioma del navegador: el primer visitante angloparlante siempre ve español

- **Archivo:** `js/main.js:486`
- **Detalle:** getLang() hace storageGet('rc-lang', 'es') (js/main.js:488): el default es 'es' incondicional. No hay ninguna lectura de navigator.language/navigator.languages en todo main.js (verificado con grep). Un reclutador de EE.UU. que entra por primera vez ve todo en español y tiene que descubrir el botoncito ES/EN del header para entender el sitio.
- **Fix:** En getLang(), si no hay valor guardado, usar (navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en' como default, y persistirlo recién cuando el usuario toque el toggle.

#### Flash de idioma incorrecto (FOUC) para usuarios con preferencia EN

- **Archivo:** `index.html:2`
- **Detalle:** El HTML está autorado en español (<html lang="es">, <title>Rony Cozzi — desarrollador full stack</title>) y main.js se carga con defer sin ningún snippet inline en <head> que aplique el idioma antes del primer paint (index.html:571 <script src="js/main.js?v=38" defer>). Un usuario que eligió EN ve el contenido en español durante la carga y luego el swap a inglés (incluido el <title> de la pestaña, que cambia visiblemente). Con red lenta o caché fría el flash es notorio. Nota: para el tema sí mitigaron el equivalente hardcodeando data-theme="dark" en el html, pero para idioma no hay mitigación.
- **Fix:** Agregar un script inline mínimo en <head> que lea localStorage('rc-lang') y, si es 'en', setee document.documentElement.lang='en' más una clase que oculte/desvanezca el contenido textual hasta que applyLang corra (o aplicar las strings críticas del hero inline). Alternativa más limpia: páginas /en/ estáticas (mismo fix que el hallazgo de hreflang).

### Severidad baja

#### Items del stack en about.html quedan en español en modo EN

- **Archivo:** `about.html:203`
- **Detalle:** En la grilla Stack hay <li> sin data-i18n con texto español: about.html:203 <li>SEO técnico</li><li>Encabezados de seguridad</li><li>PWA / QA móvil</li> y about.html:185 <li>Auth simple / Webhooks</li>. En modo EN se mezclan con títulos traducidos ('Practices', 'Backend & APIs'), quedando 'Security headers' como 'Encabezados de seguridad' a la vista de un evaluador técnico.
- **Fix:** Agregar keys (ej. 'stack.item.seo': 'SEO técnico'/'Technical SEO', 'stack.item.headers': 'Encabezados de seguridad'/'Security headers', 'stack.item.pwa_qa': 'PWA / QA móvil'/'PWA / mobile QA', 'stack.item.auth': 'Auth simple / Webhooks'/'Simple auth / Webhooks') y marcar esos <li> con data-i18n.

#### Tags de proyectos en work.html sin traducir: 'Formularios' y '11 páginas'

- **Archivo:** `work.html:256`
- **Detalle:** work.html:256: <li>Modular</li><li>Formularios</li><li data-i18n="work.sellink.tag3">Accesibilidad</li>... — 'Formularios' no tiene data-i18n mientras sus hermanos sí (existe la palabra 'Forms' obvia en EN). work.html:284: <li>11 páginas</li><li>Canvas</li>... — '11 páginas' tampoco. En modo EN la lista de tags queda mezclada español/inglés.
- **Fix:** Agregar keys 'work.sellink.tag2' ('Formularios'/'Forms') y 'work.cognition.tag1' ('11 páginas'/'11 pages') en js/main.js y marcar ambos <li> con data-i18n, siguiendo el patrón ya usado en work.sellink.tag3/tag4.

#### El thumb de Luco es el único de los 4 sin key de traducción

- **Archivo:** `work.html:219`
- **Detalle:** work.html:219: <span class="thumb__tag">Pasta · Pizza · Vermut</span> sin data-i18n, mientras los otros tres thumbs usan keys existentes ('work.cucu.thumb', 'work.sellink.thumb', 'work.cognition.thumb' en js/main.js:132-137 y 354-359). Aunque 'Pasta · Pizza · Vermut' funciona en ambos idiomas, rompe la simetría del sistema: si mañana se edita el copy, ese thumb queda fuera del flujo i18n.
- **Fix:** Crear la key 'work.luco.thumb' en es y en (puede ser idéntica: 'Pasta · Pizza · Vermut') y agregar data-i18n="work.luco.thumb" al span, igual que sus hermanos.

#### Con JavaScript deshabilitado el toggle ES/EN queda visible pero muerto

- **Archivo:** `index.html:146`
- **Detalle:** El botón <button type="button" class="lang-toggle" data-lang-toggle ...> (index.html:146 y equivalentes en todas las páginas) no tiene atributo hidden en el HTML; solo JS lo gestiona (btn.hidden en js/main.js:657). El sitio tiene cuidado noscript en otras cosas (bloque <style> en index.html:104-111), pero sin JS el toggle se ve clickeable y no hace nada, y el sitio queda ES-only sin indicación.
- **Fix:** Agregar hidden al botón en el HTML y que setupLang() lo des-oculte (btn.hidden = !allowLangToggle ya lo hace en ambas direcciones), de modo que sin JS el control simplemente no aparezca.

---

## Dimension: accesibilidad - 7 de 10

La base de accesibilidad es notablemente sólida para un portfolio junior: skip links en todas las páginas, focus trap completo en el menú móvil, jerarquía de headings limpia, labels reales en el formulario y doble cobertura de prefers-reduced-motion (CSS global + gates en JS). Los problemas reales se concentran en tres zonas: el carrusel horizontal de work.html rompe la navegación por teclado (foco que se va fuera de pantalla), el outline de foco lima es invisible sobre las tarjetas claras en dark mode, y 3-4 pares de contraste fallan AA (fg-muted sobre bg-elev en light, el idioma inactivo del lang-toggle, y el cobre de Cucú sobre fondo claro). Nada es estructural: todos los fixes son puntuales en css/styles.css y js/main.js.

### Fortalezas (no tocar)

- Skip link presente y funcional en las 13 páginas, con estilos :focus/:focus-visible que lo hacen visible (css/styles.css:3292-3308) y target #main correcto en todas.
- Menú móvil ejemplar: focus trap con Tab/Shift+Tab, cierre con Escape, aria-expanded/aria-controls, restauración del foco previo y visibility:hidden cuando está cerrado para sacarlo del tab order (js/main.js:1129-1189, css/styles.css:400-405).
- prefers-reduced-motion respetado en dos capas: kill-switch global de animaciones/transiciones en CSS (css/styles.css:2918-2927) y gates en JS para cursor custom, magnetic, tilt, parallax y page transitions (js/main.js:760, 858, 906, 934, 1030, 1112).
- Jerarquía de headings impecable: un solo h1 por página y sin saltos de nivel en index, work, about, contact, faq, process, privacy, terms, 404 y los 4 case studies.
- Formulario de contacto bien resuelto: label asociado a cada campo, aria-invalid dinámico que se limpia al tipear, aria-busy en el submit, nota con role=status + aria-live=polite con mensaje inicial para dar contexto a lectores de pantalla (contact.html:159-236, js/main.js:1219-1302).
- Landmarks correctos en todas las páginas (header/nav con aria-label/main/footer) y aria-current="page" tanto estático como recalculado por JS (js/main.js:1308-1330).
- aria-hidden bien aplicado a todo lo decorativo: cursor custom, page-transition, ticker, barras de browser falsas, SVGs de flechas e imágenes del collage del hero con alt vacío.
- theme-toggle con aria-pressed sincronizado con el estado real y área clickeable extendida a 44x44px vía ::before (css/styles.css:337-352, js/main.js:677-684); menu-toggle de 44px y WhatsApp FAB de 52px cumplen target size.
- Contraste del texto principal excelente en ambos temas (#F2EFE9/#0A0A0A = 17.25:1) y fg-muted en dark cumple AA (5.52:1 sobre bg, 5.14:1 sobre bg-elev).
- noscript con fallback que fuerza opacity:1 en los reveals y oculta cursor/transiciones, así el contenido nunca queda invisible sin JS (presente en todas las páginas).
- Los lectores de pantalla reciben labels traducidas: applyLang actualiza document.documentElement.lang, aria-labels de nav/toggles/skip-link y los aria-label de las tarjetas demo (js/main.js:548-596).

### Severidad alta

#### Carrusel horizontal pineado inaccesible por teclado: el foco se va fuera de pantalla

- **Archivo:** `work.html:176`
- **Detalle:** La sección `<section class="works" data-pin-horizontal>` traduce el track exclusivamente según el scroll vertical (js/main.js:974-1026: `track.style.transform = translate3d(${-x}px, 0, 0)`), dentro de `.works__viewport { overflow: hidden }` y `.works { overflow-x: clip }` (css/styles.css:1918, 1935). Un usuario de teclado que tabula hacia los links "Ver caso de estudio" de los proyectos 2, 3 y 4 (work.html:230, 258, 286) recibe el foco en un elemento posicionado fuera del viewport: el navegador no puede traerlo a la vista porque la posición depende del transform controlado por scroll, no de scrollLeft. Resultado: foco invisible (falla WCAG 2.4.7) y orden de foco que no se corresponde con lo visible (2.4.3). No hay ningún listener de focusin ni fallback de teclado en setupHorizontal. Además setupHorizontal no consulta `reducedMotion`, a diferencia del resto de las animaciones.
- **Fix:** En setupHorizontal agregar un listener `focusin` sobre el track que calcule la posición vertical de scroll equivalente al item enfocado y haga `window.scrollTo()` para sincronizar el carrusel (idx * horizontalDist / (itemCount-1) + offset de la sección). Alternativa más simple: cuando `reducedMotion` o navegación por teclado, aplicar el layout vertical que ya existe para mobile (css/styles.css:2278-2297).
- **Verificacion adversarial:** CONFIRMADO - Verificado en el código real, cada cita es exacta: (1) work.html:176 tiene `<section class="works" data-pin-horizontal ...>` y los links "Ver caso de estudio" de los proyectos 2-4 están en work.html:230, 258 y 286. (2) js/main.js:974-1026 define setupHorizontal; la línea 1009 es literalmente `track.style.transform = \`translate3d(${-x}px, 0, 0)\``, calculada solo desde `-rect.top` del scroll vertical (líneas 1005-1008). (3) css/styles.css:1918 `.works { overflow-x: clip }` y :1935 `.works__viewport { overflow: hidden }`. (4) Grep de "focusin" en js/main.js: cero resultados — no hay ningún fallback de teclado. (5) setupHorizontal no consulta `reducedMotion` (la variable existe en main.js:13 y sí la usan setupParallaxDeck en :1030 y setupHeroScene en :1061). (6) Los items son `flex: 0 0 min(520px, 78vw)` con gap 28px (styles.css:1963-1964, 1943): en desktop el track (~2200px) excede el viewport, así que los items 2-4 quedan en layout fuera de pantalla y su posición visible depende solo del transform. El layout vertical mobile citado como fix existe en styles.css:2278-2297. Único matiz: `overflow-x: clip` en .works sí impide todo scroll programático, pero `overflow: hidden` en .works__viewport puede ser scrolleado por el navegador al enfocar (Chrome ajusta scrollLeft); aun en ese caso el resultado es igual de roto, porque el scrollLeft impuesto por el navegador se suma al transform controlado por JS (que lo ignora) y desincroniza carrusel, HUD y posición del foco en cuanto el usuario scrollea. En cualquier rama del comportamiento, el foco por teclado sobre los links principales del portfolio queda invisible o el layout se rompe: falla real de WCAG 2.4.7/2.4.3 en el contenido central del sitio (los casos de estudio), severidad alta justificada.

### Severidad media

#### Outline de foco lima invisible sobre las tarjetas claras en dark mode (1.13:1)

- **Archivo:** `css/styles.css:13`
- **Detalle:** El indicador de foco global es `outline: 2px solid var(--accent)` (css/styles.css:13-17 y 2726-2729). En dark theme --accent es #C6FF3D. Los links dentro de tarjetas con fondo claro — `.work-item__link` dentro de work-items con `--w-bg:#FAFAF7` y `#F5F1ED` (work.html:181, 209) — dibujan ese outline sobre el fondo claro de la tarjeta: #C6FF3D vs #FAFAF7 = 1.13:1 y vs #F5F1ED = 1.05:1 (calculado). Falla 1.4.11 (non-text contrast, mínimo 3:1) y en la práctica el foco es invisible. En light theme el caso inverso (azul #2E5BFF sobre tarjeta #070707) da 3.89:1, justo pasa.
- **Fix:** Para links dentro de superficies con color propio usar `outline-color: currentColor` (heredan --w-fg / --card-fg que sí contrasta con su fondo), o un indicador doble: `outline: 2px solid var(--accent); box-shadow: 0 0 0 4px var(--bg)`. Ej.: `.work-item a:focus-visible, .card:focus-visible { outline-color: currentColor; }`.

#### Idioma inactivo del lang-toggle con contraste 2.67-3.45:1

- **Archivo:** `css/styles.css:333`
- **Detalle:** `.lang-toggle span { opacity: 0.4 }` (css/styles.css:333-335) deja el idioma no activo ("EN" o "ES", texto de 12-13px) a #F2EFE9 al 40% sobre #0A0A0A ≈ #676663 = 3.45:1 en dark, y #0A0A0A al 40% sobre #F2EFE9 ≈ #959390 = 2.67:1 en light (calculado). Texto normal necesita 4.5:1 (WCAG 1.4.3). El separador `/` tiene el mismo problema pero es decorativo (aria-hidden).
- **Fix:** Subir la opacidad del estado inactivo a 0.62 en dark y usar `color: var(--fg-muted)` en light (o opacity 0.7), verificando ≥4.5:1 en ambos temas. El estado activo puede diferenciarse además con font-weight o subrayado para no depender solo del contraste.

#### lang-toggle no comunica estado ni destino a lectores de pantalla

- **Archivo:** `index.html:146`
- **Detalle:** El botón `<button class="lang-toggle" data-lang-toggle aria-label="Cambiar idioma">` expone siempre la misma label genérica (y su versión EN "Switch language", js/main.js:214/436). El idioma activo se indica únicamente con la clase visual `.is-active` (opacity); no hay aria-pressed, ni texto oculto, ni label del tipo "Cambiar a English". Un usuario de SR no sabe en qué idioma está el sitio ni qué hará el botón. Aplica a las 13 páginas (mismo markup).
- **Fix:** En applyLang setear label dinámica: `btn.setAttribute('aria-label', lang === 'es' ? 'Cambiar idioma a English' : 'Switch language to Español')`, o convertirlo en par de botones con aria-pressed por idioma. Una línea extra en js/main.js:565-570.

#### Light theme: --fg-muted sobre --bg-elev queda en 4.37:1, por debajo de AA

- **Archivo:** `css/styles.css:68`
- **Detalle:** En light theme --fg-muted es #6B6862 y --bg-elev es #E8E4DA (css/styles.css:64-73): ratio 4.37:1 (calculado), bajo el mínimo 4.5:1 para texto normal. Afecta a todo texto fg-muted sobre superficies elevadas: `.proc-step__duration` (12px, color fg-muted + background bg-elev, css/styles.css:3102-3112) y `.faq-cta__copy` (15px, css/styles.css:3017) dentro de `.faq-cta { background: var(--bg-elev) }` (css/styles.css:3000-3010). Sobre --bg el mismo gris da 4.84:1 y sí pasa.
- **Fix:** Oscurecer el muted de light a #615E58 (≈4.9:1 sobre #E8E4DA) o definir un token específico `--fg-muted-elev` para superficies elevadas. Cambio de un valor en css/styles.css:68.

#### "Cucú" en cobre sobre tarjeta clara: 2.51:1, falla incluso como texto grande

- **Archivo:** `css/styles.css:1127`
- **Detalle:** `.card--cucu .card__brand em { color: var(--color-cucu) }` pinta la palabra "Cucú" en #C9956E sobre el fondo de tarjeta #FAFAF7 (index.html:291, style inline `--card-bg:#FAFAF7`). Ratio 2.51:1 (calculado): aunque `.card__brand` es texto grande (clamp 38-72px, css/styles.css:1036-1044), el mínimo AA para texto grande es 3:1 y no llega. Es el nombre de marca dentro de un link de la home.
- **Fix:** Oscurecer el copper solo en superficies claras: `.card--cucu .card__brand em { color: #8A5A2E; }` (≈4.6:1 sobre #FAFAF7) o aplicarle un text-shadow/peso que no dependa del color. El mismo token #C9956E puede seguir usándose sobre fondos oscuros donde sí contrasta.

### Severidad baja

#### Formulario sin fallback si JS no carga

- **Archivo:** `contact.html:159`
- **Detalle:** El form no tiene atributo `action` ni `method` y depende de `e.preventDefault()` + construcción de mailto en JS (js/main.js:1259-1294). Con JS deshabilitado o roto, el submit hace un GET inútil a la misma página y el usuario no recibe ningún feedback. Existen mitigaciones (el mailto directo `contact-big` en contact.html:137 sigue funcionando), por eso es baja y no media.
- **Fix:** Agregar `action="mailto:ronycozzi5@gmail.com" method="post" enctype="text/plain"` como fallback nativo, o al menos un `<noscript>` junto al form indicando que se use el mail directo.

#### aria-required redundante con required en los 4 campos

- **Archivo:** `contact.html:182`
- **Detalle:** Los campos name (contact.html:175/182), email (:193/198), subject (:205) y message (:219/226) llevan a la vez `required` y `aria-required="true"`. El atributo nativo ya expone el estado required en el árbol de accesibilidad; el ARIA duplicado es exactamente el caso "ARIA de más". Inofensivo pero ruido.
- **Fix:** Eliminar los cuatro `aria-required="true"` y dejar solo `required`.

#### Menú móvil sin landmark de navegación

- **Archivo:** `index.html:160`
- **Detalle:** `<div class="mobile-menu" id="mobile-menu" data-mobile-menu>` es un div plano con 4 links, sin `<nav>` ni role/aria-label (mismo patrón en las 13 páginas). El nav principal `.nav` se oculta en mobile, así que en pantallas chicas la única navegación real del sitio no está marcada como landmark y un usuario de SR no puede saltar a ella con la rotor/lista de landmarks.
- **Fix:** Cambiar el div por `<nav class="mobile-menu" id="mobile-menu" aria-label="Menú" data-mobile-menu>` en todas las páginas (no afecta CSS porque el selector es por clase).

#### WhatsApp FAB al final del DOM: último en el orden de foco pese a estar siempre visible

- **Archivo:** `index.html:572`
- **Detalle:** El `<a class="wsp-fab">` está después del `<script>` y del footer en todas las páginas (index.html:572-586). Visualmente flota fijo abajo a la derecha desde el primer scroll, pero un usuario de teclado debe tabular por absolutamente todo el documento para alcanzarlo. Discordancia leve entre orden visual y orden de foco (2.4.3). Mitigado porque hay links de WhatsApp equivalentes en footer y contact-card.
- **Fix:** Mover el FAB justo después del `<main>` (antes del footer) o tras el skip link al inicio del body, manteniendo el `position: fixed`.

#### El scroll-jacking horizontal no se desactiva con prefers-reduced-motion

- **Archivo:** `js/main.js:974`
- **Detalle:** setupHorizontal (js/main.js:974-1026) es la única feature de movimiento que no consulta la variable `reducedMotion` (sí lo hacen setupPageTransitions:760, setupCursor:858, setupMagnetic:906, setupTilt:934, setupParallaxDeck:1030, setupParallaxImg:1112). El movimiento es proporcional al scroll del usuario (técnicamente "direct manipulation", tolerado por 2.3.3), pero el efecto de pinning + desplazamiento lateral inesperado es exactamente lo que usuarios con trastornos vestibulares piden evitar, y ya existe el layout vertical alternativo en el media query mobile.
- **Fix:** Al inicio de setupHorizontal: `if (reducedMotion) { aplicar el mismo layout estático del breakpoint mobile; return; }` — o añadir `.works` dentro de una regla `@media (prefers-reduced-motion: reduce)` que replique css/styles.css:2279-2297.

#### Targets pequeños: links legales del footer (11px) y lang-toggle desktop (~18px de alto)

- **Archivo:** `css/styles.css:2930`
- **Detalle:** `.footer__legal { font-size: 11px }` (css/styles.css:2930-2933) y el lang-toggle en desktop (font-size 13px, sin min-height; el `min-height: 38px` solo existe en el media query mobile, css/styles.css:434-438) quedan por debajo de los 24px del criterio 2.5.8 de WCAG 2.2. No es un fallo de WCAG 2.1 AA (2.5.5 es AAA), por eso baja, pero el portfolio declara "WCAG 2.1, contraste, navegación por teclado. Sin compromisos" (about.html:223) y conviene cubrirlo.
- **Fix:** Dar `padding-block: 6px` a .footer__legal y `min-height: 24px; align-items: center` al .lang-toggle también fuera del breakpoint mobile, replicando la técnica del ::before de 44px ya usada en theme-toggle (css/styles.css:346-352).

---

## Dimension: seo - 7.5 de 10

La base SEO es notablemente sólida para un portfolio junior: las 13 páginas tienen title, description, canonical, Open Graph y Twitter cards únicos y bien formados; el JSON-LD parsea válido en todas con tipos correctos; sitemap, robots y clean URLs son coherentes al 100% con las páginas reales. Los problemas son de segunda capa: el sitio se declara bilingüe (og:locale:alternate en_US) pero no existe ninguna URL en inglés ni hreflang, así que Google solo verá español; y las og:image de los case studies son WebP 1440x900, formato que LinkedIn y otros scrapers pueden no renderizar — crítico para alguien que comparte su trabajo buscando empleo. El resto son detalles menores (canonical en la 404 noindex, lastmod uniforme, referencias JSON-LD colgantes entre páginas).

### Fortalezas (no tocar)

- Title y meta description únicos y bien escritos en las 13 páginas, con longitudes correctas (titles < 60 chars, descriptions ~100-155) y canonical absoluto correcto por página apuntando a la clean URL — no tocar.
- og-image.png existe y mide exactamente 1200x630, igual que lo declarado en og:image:width/height de todas las páginas raíz; todos los assets referenciados en metadata (rony.jpg 400x600, icons 180/192/512, los 4 .webp de casos) existen con las dimensiones declaradas.
- JSON-LD 100% válido (los 13 bloques parsean) y con tipos bien elegidos para un portfolio: WebSite+Person en home, AboutPage, CollectionPage con hasPart, ContactPage, FAQPage con 12 Question/Answer reales (elegible para rich results), y CreativeWork+BreadcrumbList en cada case study.
- sitemap.xml exacto: 12 URLs que coinciden 1:1 con las páginas reales en formato clean URL, con prioridades razonables; la 404 está correctamente excluida del sitemap y marcada noindex,nofollow.
- robots.txt correcto y mínimo: Allow / + referencia absoluta al sitemap.
- Consistencia total de clean URLs: cleanUrls:true + trailingSlash:false en vercel.json y cero links internos a .html en todo el sitio (root usa "work", los cases usan "../work"); la 404 funciona por la convención de Vercel para deploys estáticos (404.html en root).
- manifest.json completo y coherente: iconos existentes (incluye maskable), shortcuts a /work y /contact con clean URLs, screenshot, theme_color alineado con el meta theme-color #0A0A0A del dark default.

### Severidad media

#### Se declara versión EN que no existe para buscadores: og:locale:alternate sin hreflang ni URLs por idioma

- **Archivo:** `index.html:31`
- **Detalle:** index.html:31 declara `<meta property="og:locale:alternate" content="en_US" />`, pero un grep de `hreflang` en las 13 páginas devuelve cero resultados: no hay ningún `<link rel="alternate" hreflang=...>` ni URLs separadas por idioma. El toggle ES/EN es 100% client-side sobre la misma URL (js/main.js reescribe title y metas vía JS según localStorage), por lo que Google indexará únicamente el contenido en español: títulos, descriptions y todo el copy EN son invisibles para buscadores y para reclutadores anglo que busquen en inglés. Además og:locale:alternate solo está en index.html — las otras 12 páginas no lo tienen, inconsistencia adicional.
- **Fix:** Decidir una de dos: (a) aceptar que el sitio es ES-only para SEO y quitar el og:locale:alternate de index.html para no declarar una alternativa inexistente; o (b) si el público objetivo incluye empleadores en inglés (lo es, según el perfil de búsqueda remota), generar páginas estáticas /en/... con su propio head EN y pares hreflang recíprocos (es-AR, en, x-default) en todas las páginas y en el sitemap. La opción (b) es la que realmente ayuda a conseguir trabajo remoto.

#### og:image de los 4 case studies en WebP 1440x900 — LinkedIn puede no mostrar preview

- **Archivo:** `case/cognition.html (y case/cucu.html, case/luco.html, case/sellink.html)`
- **Detalle:** Las 4 páginas de caso usan WebP como imagen social: `<meta property="og:image" content="https://portfolios-ronycozzi.vercel.app/assets/work/cognition-v2.webp" />` con `og:image:width 1440 / height 900` (verificado: los .webp existen y miden exactamente 1440x900). Problema doble: (1) LinkedIn y varios scrapers de OG históricamente no renderizan WebP en previews — y LinkedIn es exactamente donde Rony compartiría sus casos buscando trabajo; (2) el aspect 16:10 no es el 1.91:1 (1200x630) recomendado, así que incluso donde renderice saldrá recortada. Las páginas raíz no tienen este problema (usan og-image.png 1200x630, dimensiones reales verificadas).
- **Fix:** Exportar una versión PNG o JPG de 1200x630 por cada caso (p.ej. assets/work/og-cognition.png) y referenciarla en og:image, og:image:width/height y twitter:image de cada case/*.html. Mantener los .webp solo para los <img> del sitio. Validar con el Post Inspector de LinkedIn y el Sharing Debugger de Facebook.

### Severidad baja

#### Canonical en página noindex (404) — señales contradictorias

- **Archivo:** `404.html`
- **Detalle:** 404.html tiene `<meta name="robots" content="noindex, nofollow" />` (correcto) pero también `<link rel="canonical" href="https://portfolios-ronycozzi.vercel.app/404" />`. Un canonical es una señal de "esta es la URL indexable preferida", lo que contradice el noindex de la misma página. Google suele resolverlo bien, pero es ruido innecesario. El bloque OG/Twitter completo en una 404 tampoco aporta (nadie comparte una 404), aunque es inofensivo.
- **Fix:** Eliminar el <link rel="canonical"> de 404.html. Opcionalmente podar también el bloque OG/Twitter de esa página.

#### Los CreativeWork del JSON-LD apuntan a los demos externos, no a los case studies propios

- **Archivo:** `work.html (bloque JSON-LD CollectionPage)`
- **Detalle:** En el CollectionPage de work.html, cada hasPart usa la URL del demo como identidad de la obra: `"name": "Cucú Studio", "url": "https://cucu-studio-demo.vercel.app/"` (ídem luco, sellink, cognition). Lo mismo ocurre en el CreativeWork de cada case/*.html. Semánticamente, la "obra" queda asociada a un dominio externo y los case studies del portfolio (case/cucu, etc.) no aparecen referenciados en el structured data de work.html, perdiendo la conexión entidad-página que más le conviene al sitio.
- **Fix:** En cada CreativeWork agregar la propiedad que vincule al caso propio: usar "url" hacia https://portfolios-ronycozzi.vercel.app/case/cucu y mover el demo a "sameAs" o "workExample" — o como mínimo agregar "mainEntityOfPage": ".../case/cucu" en cada item de hasPart y en los CreativeWork de case/*.html.

#### Referencias JSON-LD @id colgantes: #website y #person solo existen en index.html

- **Archivo:** `about.html:610-621 (y work, contact, faq, process, privacy, terms, case/*)`
- **Detalle:** El AboutPage de about.html referencia `"isPartOf": { "@id": "https://portfolios-ronycozzi.vercel.app/#website" }` y `"about": { "@id": ".../#person" }`, pero los nodos WebSite y Person solo están definidos en el @graph de index.html. Los parsers de structured data procesan cada página de forma aislada, así que en about/work/contact/case esas referencias quedan colgando: Google no hereda los datos del Person definido en otra URL. No es un error de sintaxis (los 13 bloques parsean OK), pero diluye el beneficio del grafo.
- **Fix:** Incluir en cada página un nodo Person mínimo (name, jobTitle, url, sameAs) y un WebSite mínimo dentro del mismo @graph, reutilizando los mismos @id para que consoliden como entidad.

#### Teléfono y dirección expuestos en JSON-LD del Person

- **Archivo:** `index.html:79-85`
- **Detalle:** El nodo Person de index.html publica `"telephone": "+543515073210"` y un PostalAddress con addressLocality/addressRegion "Córdoba". El JSON-LD es texto plano en el HTML: scrapeable por bots de spam telefónico. El teléfono ya es público en el sitio vía WhatsApp, así que el riesgo incremental es bajo, pero ninguno de los dos campos aporta rich results para un Person de portfolio. Nota: no viola la regla "sin ubicación en el hero" (es metadata, no copy visible), aunque conviene saber que la ubicación sí está declarada a nivel datos.
- **Fix:** Eliminar "telephone" y "address" del Person en index.html, o reducir address a solo "addressCountry": "AR". Mantener email es decisión del dueño (ya es público en el sitio).

#### lastmod idéntico (2026-06-06) en las 12 URLs

- **Archivo:** `sitemap.xml`
- **Detalle:** Todas las entradas del sitemap, desde la home hasta privacy/terms (que declaran changefreq yearly), tienen exactamente `<lastmod>2026-06-06</lastmod>`. Un lastmod uniforme y sincronizado con cada deploy le quita valor a la señal: Google aprende a ignorar lastmod cuando detecta que no refleja cambios reales de contenido.
- **Fix:** Actualizar el lastmod de cada URL solo cuando esa página cambie de verdad (mantenimiento manual al editar, o script de build que compare hashes). Si no se va a mantener, es preferible quitar lastmod/changefreq/priority y dejar solo los <loc>.

#### La meta description de la home repite el title y desperdicia caracteres

- **Archivo:** `index.html:6`
- **Detalle:** Title: `Rony Cozzi — desarrollador full stack`. Description: `Rony Cozzi — desarrollador full stack. Sitios web rápidos, landings, APIs ligeras e integraciones para marcas, estudios y startups.` Los primeros 38 caracteres de la description duplican literalmente el title que aparece justo arriba en el resultado de búsqueda. Las demás páginas no tienen este problema (descriptions únicas y de buena longitud, todas entre ~100 y ~155 caracteres).
- **Fix:** Reescribir la description de index.html arrancando por la propuesta de valor, p.ej.: "Desarrollo sitios web rápidos, landings, APIs ligeras e integraciones listas para producción para marcas, estudios y startups. Remoto, ES/EN." Replicar en og:description y twitter:description.

#### La traducción de title/description en EN solo cubre 4 de 13 páginas

- **Archivo:** `js/main.js:600-617`
- **Detalle:** El objeto pageMeta de js/main.js:600 solo mapea home, work, about y contact. Al togglear a EN en faq, process, privacy, terms o cualquier case/*.html, el document.title y las metas quedan en español mientras el contenido visible cambia a inglés — pestaña del navegador y bookmark inconsistentes con el idioma activo. Impacto SEO directo casi nulo (es client-side y los crawlers ven ES), pero rompe la regla del dueño de "toggle ES/EN funcional y completo" a nivel metadata.
- **Fix:** Extender pageMeta con entradas para faq, process, privacy, terms y los 4 cases, agregando las claves meta.*.title/description correspondientes al diccionario i18n EN.

#### twitter:creator @ronycozzi sin verificar que la cuenta exista

- **Archivo:** `index.html:42 (y las otras 12 páginas)`
- **Detalle:** Las 13 páginas declaran `<meta name="twitter:creator" content="@ronycozzi" />`. El perfil de Rony documenta GitHub y LinkedIn pero ninguna cuenta de X/Twitter, y el footer del sitio tampoco enlaza a X. Si la cuenta @ronycozzi no existe o no es suya, la card atribuye el contenido a un handle ajeno o muerto.
- **Fix:** Confirmar que @ronycozzi es una cuenta propia y activa. Si no lo es, eliminar la meta twitter:creator de las 13 páginas (twitter:card funciona perfectamente sin ella).

---

## Dimension: css-diseno - 6.5 de 10

El CSS tiene una base de design tokens genuinamente buena (colores semánticos, acentos de marca, easings/duraciones, safe-areas) y dark mode real por defecto a nivel CSS, con accesibilidad cuidada (focus-visible, reduced-motion, áreas táctiles 44px). Pero hay drift acumulado: una sección "Interaction polish" al final que re-parchea reglas ya definidas, tema light con zonas visualmente rotas (sección Signal con lavados negros hardcodeados), el H1 de contacto que desborda y se recorta en móviles, animaciones infinitas sobre object-position (repaint continuo), y dos voces tipográficas distintas (peso 500 en páginas core vs 700 en FAQ/process/legal/case). Además, el "dark por defecto" lo anula el JS cuando el OS del visitante prefiere light, violando la regla dura del dueño.

### Fortalezas (no tocar)

- Sistema de tokens en :root sólido y semántico (css/styles.css:23-62): --bg/--fg/--line/--accent, acentos de marca compartidos (--color-luco, --color-sellink, etc.), duraciones y easings tokenizados (--t-fast/--t-base/--ease-out), safe-area insets y --header-h calculado. No tocar.
- Dark mode es el default real a nivel CSS: :root define los valores oscuros con el comentario 'Dark by default' (styles.css:24) y todos los HTML llevan data-theme="dark" en <html>, así que sin JS el sitio carga oscuro. Cumple la regla dura #4 en su capa CSS.
- !important casi ausente y siempre justificado: solo en el stack móvil de .works para anular transforms inline del JS (styles.css:2280-2284), en prefers-reduced-motion (2918-2927) y en @media print (3311-3317). No 'arreglar' esto.
- Accesibilidad CSS muy por encima de un junior: focus-visible consistente con outline de acento (styles.css:13-17, 2726-2729), área táctil de 44px extendida en .theme-toggle::before con comentario WCAG 2.5.5 (343-352), min-height 44px en CTAs (2746-2755), font-size 16px en inputs para evitar zoom iOS (2656), prefers-reduced-motion global y por componente, y print styles en ambos archivos.
- Las animaciones estructurales grandes usan propiedades compositables: page transition con scaleY (styles.css:109-121), reveals con translateY/opacity (617-624, 2343-2344), mobile menu con translate3d y will-change (382-405), marquee con translateX (896-899).
- Fallbacks de compatibilidad conscientes: cada color-mix lleva declaración previa de fallback comentada (ej. styles.css:271-272, 547-548) y case.css usa @supports/var(--case-accent, var(--accent)) (case.css:22, 57). La intención es correcta aunque algunos fallbacks tengan bugs puntuales (ver hallazgos).
- Unidades fluidas bien usadas en general: clamp() para tipografía display y paddings, 100svh en hero y works, aspect-ratio en cards e imágenes, overscroll-behavior y text-wrap: balance/pretty (2734-2740).

### Severidad alta

#### El 'dark por defecto' lo anula prefers-color-scheme: con OS en modo claro el sitio carga en light

- **Archivo:** `js/main.js:668-676`
- **Detalle:** El CSS y el HTML definen dark como default, pero setupTheme() hace `getDefaultTheme() { return darkSchemeMQ.matches ? 'dark' : 'light'; }` y lo aplica con `document.documentElement.setAttribute('data-theme', cachedTheme)`. Para cualquier recruiter sin preferencia guardada cuyo OS esté en modo claro (configuración común en Windows corporativo), el portfolio se ve en light en la primera visita. Esto contradice la regla dura #4 del dueño ('dark default') y además produce un flash dark→light porque el HTML arranca con data-theme="dark".
- **Fix:** Cambiar getDefaultTheme() para que devuelva siempre 'dark' (el toggle y localStorage siguen permitiendo light), y eliminar el listener de darkSchemeMQ o limitarlo a usuarios que nunca interactuaron. Si se quiere respetar el OS, decidirlo explícitamente con el dueño porque hoy viola su regla.
- **Verificacion adversarial:** CONFIRMADO - Confirmado en el código real. js/main.js:11 define `const darkSchemeMQ = window.matchMedia('(prefers-color-scheme: dark)')`. js/main.js:668-670 contiene textualmente `function getDefaultTheme() { return darkSchemeMQ.matches ? 'dark' : 'light'; }`. En setupTheme() (js/main.js:672-676), si no hay valor en localStorage (`storageGet('rc-theme', null)`), se usa ese default y se aplica con `document.documentElement.setAttribute('data-theme', cachedTheme)` (línea 676), sobreescribiendo el `data-theme="dark"` con el que arranca el HTML (index.html:2 y las 12 páginas restantes: `<html lang="es" data-theme="dark">`). Además, js/main.js:686-690 agrega un listener `onMQChange(darkSchemeMQ, ...)` que sigue cambiando el tema según el OS mientras el usuario nunca haya tocado el toggle. Conclusión: un recruiter con OS en modo claro y sin visita previa ve el sitio en light en la primera carga, con flash dark→light, violando la regla dura #4 ('dark mode por defecto'). El detalle y el fix propuesto del hallazgo son correctos.

#### H1 de contacto se recorta en móviles: clamp con mínimo 80px no entra en 320-400px

- **Archivo:** `css/styles.css:2565`
- **Detalle:** `.contact-hero__title { font-size: clamp(80px, 16vw, 240px); }` — en un viewport de 360px, 16vw = 57.6px, así que aplica el mínimo de 80px. El texto real es la palabra única 'Conversemos.' (contact.html:128), que a 80px en Space Grotesk mide ~450-500px, contra ~320px disponibles. Como está envuelta en `.line { overflow: hidden }` (styles.css:2571) y html tiene overflow-x: clip, la palabra se trunca visualmente en vez de desbordar. El H1 de la página de conversión queda cortado en teléfonos.
- **Fix:** Bajar el mínimo del clamp (ej. clamp(44px, 16vw, 240px)) o añadir un override en @media (max-width: 480px). Verificar también la variante EN del heading con el mismo criterio.
- **Verificacion adversarial:** CONFIRMADO - Confirmado en el código real. (1) css/styles.css:2565 dice textualmente `font-size: clamp(80px, 16vw, 240px);` dentro de `.contact-hero__title` (líneas 2563-2570, con `letter-spacing: -0.055em`). En viewport de 360px, 16vw = 57.6px < 80px, así que rige el mínimo de 80px. (2) contact.html:128 contiene `<span class="line"><span class="reveal" data-i18n="contact.heading1">Conversemos.</span></span>` — palabra única de 12 caracteres que en Space Grotesk (definida como --font-display en styles.css:41) a 80px mide ~450-500px aun con tracking negativo. (3) El espacio disponible es aún menor que el estimado: --pad-x = clamp(20px, 4vw, 56px) (styles.css:44), o sea ~320px útiles en un viewport de 360px. (4) El recorte visual está confirmado: styles.css:2571 `.contact-hero__title .line { display: block; overflow: hidden; }` y styles.css:9 `html { ... overflow-x: clip; ... }`. (5) Busqué overrides: las únicas otras reglas que tocan .contact-hero__title son text-wrap: balance (styles.css:2734, irrelevante para una palabra única sin espacios) y @media print (styles.css:3316) — NO existe ningún @media de ancho que reduzca el font-size en móviles. (6) La variante EN "Let's talk." (js/main.js:409) a 80px ronda ~380-400px y también desborda los ~320px, aunque menos. El H1 de la página de conversión queda truncado en teléfonos en ambos idiomas; severidad alta correcta.

### Severidad media

#### Sección Signal rota en tema light: lavados negros y fondos hardcodeados

- **Archivo:** `css/styles.css:1169-1306`
- **Detalle:** `.signal` usa `linear-gradient(90deg, rgba(0,0,0,0.46), transparent 58%)` como primera capa de fondo — un velo negro al 46% que sobre el fondo crema (#F2EFE9) del tema light produce una banda gris sucia. Además `.signal__architecture` hardcodea `#070706` y las paredes `.arch--wall/--two/--three` usan `#14130f`, `#050505`, `#1b1812`, `#1d1a14` con highlights rgba(255,255,255,...). Si la 'escena' oscura es intencional, el velo negro sobre el texto del intro no lo es: en light la mitad izquierda de la sección queda turbia.
- **Fix:** Tokenizar el velo (ej. color-mix(in srgb, var(--bg) 46%, transparent) o una var --signal-wash redefinida en [data-theme="light"]) y, si el stage oscuro es intencional, aislarlo con un comentario y un override light explícito para el gradiente del contenedor .signal.

#### Safe-area del footer muerta: el shorthand padding pisa el padding-bottom anterior

- **Archivo:** `css/styles.css:1780-1781`
- **Detalle:** `.footer { padding-bottom: max(2rem, env(safe-area-inset-bottom)); padding: 36px var(--pad-x) 20px; }` — el shorthand `padding` declarado después resetea padding-bottom a 20px, así que el max() con safe-area-inset-bottom nunca aplica. En iPhones con home indicator el footer queda a 20px del borde, y la declaración es código muerto que confunde.
- **Fix:** Invertir el orden: declarar primero `padding: 36px var(--pad-x) 20px;` y después `padding-bottom: max(20px, var(--safe-bottom));` (ya existe el token --safe-bottom en :root).

#### Tres bloques @supports (color-mix) muertos: re-declaraciones posteriores los pisan

- **Archivo:** `css/styles.css:2129-2161 y 2730-2732`
- **Detalle:** Patrón repetido tres veces: `.thumb--luco { background: transparent; }` + `@supports { .thumb--luco { background: radial-gradient(...color-mix...) } }` (2129-2134) seguido de `.thumb--luco { ...; background: linear-gradient(90deg, rgba(245,241,237,0.18), rgba(245,241,237,0.92)); }` (2136-2140). Misma especificidad, declarada después → el linear-gradient gana siempre y el bloque @supports es código muerto. Idéntico con .thumb--sellink (2153-2162) y .thumb--cognition (2181-2187 pisado por la regla en 2730-2732, a 550 líneas de distancia).
- **Fix:** Eliminar los @supports muertos o fusionar: dejar una sola declaración por thumb con el fallback primero y el gradiente final deseado después. Mover la regla de .thumb--cognition de la línea 2730 junto a las demás (2181).

#### Sección 'Interaction polish' re-parchea reglas ya definidas: duplicación y fuente de bugs

- **Archivo:** `css/styles.css:2725-2915`
- **Detalle:** El bloque final duplica selectores definidos arriba en vez de consolidarlos: `.card { transition: ... }` (970 y 2767-2772), `.header.is-scrolled` (278 y 2742-2744), `.field input/textarea/select { transition: ... }` (2658 y 2863-2870), `.work-item__device { transition }` (2794). Quien edite la primera declaración de .card no verá que la transición real viene de la línea 2767. También hay duplicado literal: `@media (max-width: 760px) { .footer__top { grid-template-columns: repeat(2, 1fr); gap: 28px; } }` aparece dos veces (1850-1854 y 1867-1869).
- **Fix:** Fusionar cada parche con su regla original (mantener una sola declaración de transition por selector) y borrar el media query duplicado del footer (1867-1869).

#### Animaciones infinitas sobre object-position: repaint continuo de imágenes grandes

- **Archivo:** `css/styles.css:679, 1024, 2050`
- **Detalle:** Tres keyframes animan object-position en loop infinito: `heroPreviewPan 14s` en .hero__browser--main img (679, keyframes 746-749), `projectDrift 18s` en .card__shot (1024, keyframes 1032-1035) y `workShotPan 20s` en .work-item__shot (2050, keyframes 2057-2060). object-position no es compositable: cada frame fuerza repaint de screenshots a tamaño completo, en el hero y en 4 cards simultáneas. En laptops modestas (el público que ve portfolios suele abrir 10 pestañas) esto cuesta CPU constante y compite con el scroll listener del pin horizontal.
- **Fix:** Reemplazar por transform: el <img> más alto que su contenedor (overflow hidden) animando translateY entre 0 y -X%, que es compositable. Mismo efecto visual de paneo, costo casi cero.

#### Theme toggle invisible en móvil sin alternativa: no se puede cambiar de tema bajo 860px

- **Archivo:** `css/styles.css:413-415 + index.html:160-166`
- **Detalle:** `@media (max-width: 860px) { .theme-toggle { display: none; } }` oculta el único control de tema, y el `.mobile-menu` (index.html:160-166) solo contiene los 4 links de navegación — no hay toggle de tema dentro. Un visitante móvil (la mayoría del tráfico de un portfolio compartido por WhatsApp/LinkedIn) queda clavado en el tema que le tocó. La regla dura #5 exige toggles 'funcionales y completos'; el de tema deja de existir en móvil.
- **Fix:** Añadir el botón .theme-toggle dentro del .mobile-menu (todas las páginas) o dejarlo visible en el header móvil — mide 38x22px, cabe junto al lang-toggle.

#### Dos voces tipográficas: heroes core en peso 500, páginas secundarias en 700

- **Archivo:** `css/styles.css:604 vs 2953 (y case.css:48)`
- **Detalle:** Las páginas principales usan display weight 500: .hero__title (607), .work-hero__title (1889), .about-hero__title (2366), .contact-hero__title (2566), .featured__title (926). Pero FAQ, process, legal y case usan 700: .faq-hero__title `font-weight: 700` (2953), .proc-hero__title 700 (3050), .legal-hero__title 700 (3195), .err-num 700 (3234), .case-hero__title 700 (case.css:48), .case-stat__val 700. También los CTA secundarios usan border-radius 6px (.faq-cta__btn 3028, .err-cta 3263) mientras el sistema core usa píldoras 999px (.hero__cta 794). Parecen dos sitios diseñados en momentos distintos.
- **Fix:** Definir tokens tipográficos (--display-weight: 500) y de radio (--radius-pill) y alinear FAQ/process/legal/404/case al sistema core: weight 500 + tracking negativo + píldoras, que es la voz del hero.

#### Sistema de contenedores incoherente: --max casi sin uso y anchos máximos ad-hoc

- **Archivo:** `css/styles.css:43 y contenedores varios`
- **Detalle:** Existe el token `--max: 1480px` pero solo lo usan faq-hero (2940), proc-steps (3069) y case.css. Mientras tanto: .services__head/.services__list usan `max-width: 1100px; margin: 0 auto` (1568, 1596), .contact-card__inner usa 1200px (1690), y .featured/.capabilities/.bio no tienen máximo (full-bleed en monitores 2K+). Además .faq-hero/.faq-body/.legal-body/.proc-steps declaran max-width pero SIN `margin: 0 auto` (2940, 2965, 3205, 3069), así que en pantallas anchas quedan pegados a la izquierda mientras .case-section__inner sí centra (case.css:149-152).
- **Fix:** Unificar: un contenedor con `max-width: var(--max); margin-inline: auto` aplicado consistentemente, y decidir explícitamente qué secciones son full-bleed. Añadir margin-inline: auto a faq/legal/proc.

### Severidad baja

#### Hovers que animan padding y background provocan reflow

- **Archivo:** `css/styles.css:1609-1622, 2327-2329, 2530-2532`
- **Detalle:** `.service { transition: padding ... } .service:hover { padding-left: 24px; padding-right: 24px; }` (1609, 1622), replicado en .capabilities__list li (2327-2329), .principles__list li (2530-2532) y .contact-card__channel (1728-1731). Animar padding dispara layout en cada frame del hover y mueve el texto interno. Hay override correcto para touch (2884-2902), pero en desktop sigue siendo layout-thrash evitable.
- **Fix:** Lograr el mismo desplazamiento con `transform: translateX()` sobre un hijo interno, o aceptarlo conscientemente (elementos chicos, hover puntual) y documentarlo; lo importante es no extender el patrón.

#### Fallback inválido: box-shadow: transparent no es una declaración válida

- **Archivo:** `css/styles.css:579 y 1814`
- **Detalle:** `.tag__dot { box-shadow: transparent; /* fallback: color-mix not supported */ box-shadow: 0 0 0 4px color-mix(...); }` (579-580) y `.footer__badge-dot` idéntico (1814-1815). box-shadow no acepta solo un color: la declaración es inválida y el parser la descarta, así que el 'fallback' no hace nada. Si color-mix no está soportado, ambas declaraciones caen y no hay halo — que es justo lo que pasaría sin el fallback. Código muerto que aparenta robustez.
- **Fix:** Usar un fallback real (`box-shadow: 0 0 0 4px rgba(198,255,61,0.25);`) o eliminar la línea inválida. Mismo criterio en `border-top: transparent` (1084), que sí es válido pero conviene comentar por qué.

#### Hex mágico #00D4FF duplicado: ya existe como token --color-cognition

- **Archivo:** `css/styles.css:508`
- **Detalle:** `.hero__beam--one { ... background: #00D4FF; }` hardcodea exactamente el mismo valor que el token definido en :root línea 39 (`--color-cognition: #00D4FF`). Si mañana cambia el acento de Cognition, el beam del hero queda desincronizado. Misma familia de problema: los colores del terminal 404 `#FF5757`/`#27C93F` (3280-3281) sin token, aunque ahí es más defendible por ser estética de terminal.
- **Fix:** Reemplazar por `background: var(--color-cognition);` en .hero__beam--one.

#### Reglas muertas: content: none sobre pseudo inexistente, margin-top: 0 redundante, height: auto sin height previo

- **Archivo:** `css/styles.css:1504, 1544-1545, 2293`
- **Detalle:** `.signal-card::before { content: none; }` (1504-1506) anula un ::before que ningún otro selector define para .signal-card — muerta. `.signal-card--two, .signal-card--three { margin-top: 0; }` (1544-1545) declara el valor por defecto — muerta (y se re-declara en el MQ de 900px, 1552). `.work-item { ... height: auto; ... }` en el MQ móvil (2293) cuando .work-item nunca define height, solo min-height. Son restos de iteraciones anteriores que ensucian la lectura.
- **Fix:** Eliminar las tres declaraciones. Pasada general con un linter (stylelint con plugin de declaraciones redundantes) para cazar el resto.

#### Zoo de breakpoints: 9 valores distintos sin escala definida, y case.css usa otros

- **Archivo:** `css/styles.css:413-449, 845, 868, 976, 1546, 1555, 1675, 1680, 2503-2505, 2904 + case.css:373, 379`
- **Detalle:** styles.css usa max-width 1100, 900, 860, 760, 700, 600, 560, 500 y 420 según la sección; case.css usa 900 y 600. La navegación colapsa a 860 pero el hero stackea a 900 y el grid de servicios a 760: entre 861-900px hay hamburguesa con layout desktop del hero. No es un bug per se, pero cada breakpoint nuevo se eligió ad-hoc y dificulta razonar el responsive.
- **Fix:** Consolidar a 3-4 breakpoints canónicos documentados en el comentario de cabecera (ej. 560 / 760 / 900 / 1100) y migrar los casos sueltos (420, 500, 600, 700, 860) al más cercano, verificando visualmente cada sección.

#### case.css desalineado del sistema: píldoras radius 100px vs 999px y acento por caso aplicado a medias

- **Archivo:** `css/case.css:69-72, 193, 273-276, 312-318`
- **Detalle:** `.case-tag { border-radius: 100px }` (72) y `.case-stack__item { border-radius: 100px }` (318) mientras todo styles.css usa 999px para píldoras (.tag 542, .hero__cta 794, .service__tag 1651). Además el acento por proyecto var(--case-accent, var(--accent)) solo se aplica en el hero (case.css:22, 57, 86); .case-stat__val (193), .case-tech-item:hover (274) y .case-next__link:hover (349, 370) usan var(--accent) plano, así que dentro del case de Sellink (rojo) los stats y hovers son lima — el acento por caso queda a mitad de camino.
- **Fix:** Unificar radius a 999px (o tokenizar --radius-pill) y reemplazar var(--accent) por var(--case-accent, var(--accent)) en stats, tech-items y next-link dentro de case.css.

#### Detalles de theming y viewport: ::selection ignora --accent-ink y cascada vh/dvh/svh confusa

- **Archivo:** `css/styles.css:20 y 1924-1925`
- **Detalle:** `::selection { background: var(--accent); color: var(--bg); }` (20) — en light el texto seleccionado queda crema (#F2EFE9) sobre azul en vez de blanco; existe --accent-ink (#FFFFFF en light) exactamente para esto. Y `.works__sticky { height: 100vh; height: 100dvh; height: 100svh; }` (1924-1925): la cascada deja svh como ganador, con dvh como línea muerta en el medio — si la intención era dvh con fallback, el orden está invertido.
- **Fix:** Cambiar a `color: var(--accent-ink)` en ::selection. En .works__sticky dejar dos líneas con intención clara: `height: 100vh; height: 100svh;` (o dvh si se prefiere que el pin ocupe el viewport dinámico) y borrar la intermedia.

---

## Dimension: javascript - 7.5 de 10

El JavaScript del portfolio es notablemente sólido para un perfil junior: main.js (1386 líneas, IIFE con 'use strict') no usa innerHTML en ningún punto, todos los scroll handlers van con rAF-throttle y passive, cada setup tiene guards de existencia (cero null refs en las 13 páginas) y la degradación sin JS está resuelta con noscript. Los problemas reales son de producto, no de código: el sistema i18n fuerza español y oculta el toggle en 9 de 13 páginas (viola la regla "ES/EN completo"), el form de contacto depende 100% de mailto sin envío por red, el tema default sigue al OS en vez de ser dark, y la página puede quedar invisible si algo lanza una excepción antes de setupPageTransitions.

### Fortalezas (no tocar)

- Cero superficie XSS en el sistema i18n: no existe ni un solo innerHTML/insertAdjacentHTML/document.write/eval en main.js (grep verificado). setTextWithBr (líneas 535-546) maneja el único string con <br/> usando textContent + createTextNode + createElement('br'), y los datos del form de contacto solo viajan por encodeURIComponent hacia un mailto (líneas 1277-1278), con CR/LF del nombre saneados (línea 1271). No tocar.
- Disciplina de performance en scroll consistente: helper rafThrottle (líneas 839-846) aplicado a TODOS los scroll handlers (header :966, horizontal :1003, parallax deck :1034, hero :1052, parallax img :1117), siempre con { passive: true }, y resize con debounce de 150ms (línea 1020). Las animaciones de cursor/magnetic/tilt usan rAF auto-cancelable (raf = null cuando converge). Patrón correcto, no tocar.
- Degradación sin JS bien resuelta: las 13 páginas tienen <noscript> (p.ej. index.html:104-111) que fuerza opacity:1 en .reveal/[data-reveal]/.page y oculta overlay de transición y cursor custom. Además setupReveals tiene fallback explícito si falta IntersectionObserver o hay prefers-reduced-motion (main.js:797-802).
- Guards de existencia impecables: cada setupX hace early return si su elemento no existe (setupHorizontal :975-980, setupContactForm :1220-1221, setupMobileMenu :1132, setupCursor :862, etc.), por lo que un único main.js corre en las 13 páginas sin riesgo de null reference. Verificado contra el HTML real: todos los .reveal viven dentro de .line, ningún selector queda huérfano.
- prefers-reduced-motion y touch respetados sistemáticamente: cursor, magnetic, tilt, transiciones de página, parallax y spotlights se desactivan con reducedMotion/isTouch (líneas 760, 858, 906, 934, 1030, 1061, 1089, 1112), con media queries vivas vía onMQChange (líneas 16-21). Cumple la regla 7 sin sacrificar accesibilidad.
- Registro del Service Worker con guard anti-bucle de recarga: controllerchange solo recarga si ya había controller y con flag refreshing (main.js:1366-1379), y sw.js usa network-first para documentos con fallback a .html cacheado y a /404.html (sw.js:89-134) — los visitantes nunca ven contenido HTML stale.
- Focus trap del menú móvil completo y correcto (main.js:1129-1188): Tab/Shift+Tab circular, Escape cierra, restaura el foco previo con try/catch, restaura body overflow, sincroniza aria-expanded/aria-label, y se cierra solo al cruzar el breakpoint a desktop (onMQChange :1186-1188).
- Accesos a localStorage siempre envueltos en try/catch (storageGet/storageSet, líneas 476-484), así el sitio funciona en modo incógnito estricto o con storage bloqueado; el estado de idioma/tema cae a defaults sin romper nada.

### Severidad alta

#### El toggle ES/EN solo funciona en 4 de 13 páginas: en el resto se fuerza español y el botón desaparece

- **Archivo:** `js/main.js:474`
- **Detalle:** Línea 474: `const fullyLocalizedPages = new Set(['home', 'about', 'work', 'contact'])`. `resolveLang()` (líneas 505-507) devuelve 'es' fijo para cualquier otra página, y `setupLang()` (línea 657) hace `btn.hidden = !allowLangToggle`. Consecuencia: un recruiter que eligió EN en el home y hace click en un case study (case/cognition.html, etc.), FAQ, process, privacy, terms o cae en el 404, ve TODO en español —incluida la navegación que sí tiene data-i18n— y el toggle de idioma desaparece sin explicación. Viola la regla dura 5 del dueño ('Toggle ES/EN funcional y completo'). Los case studies son justamente lo que un empleador angloparlante más quiere leer.
- **Fix:** Agregar las claves EN faltantes al objeto i18n para case/*, faq, process, privacy, terms y 404 (y los data-i18n correspondientes en esos HTML), luego sumar esos pageIds al Set de la línea 474. Si traducir privacy/terms es mucho, al menos cubrir los 4 case studies, faq y process, que son contenido de venta.
- **Verificacion adversarial:** CONFIRMADO - Verificado línea por línea en C:\Users\Usuario\Desktop\PORTFOLIO-WEBS\Rony-potfolios\js\main.js: (1) línea 474: `const fullyLocalizedPages = new Set(['home', 'about', 'work', 'contact']);` — exacto como se reportó. (2) líneas 505-507: `function resolveLang(lang) { return pageSupportsLangToggle() ? lang : 'es'; }` fuerza 'es' en toda página fuera del Set; además applyLang (línea 549) usa resolveLang, por lo que incluso los elementos con data-i18n de esas páginas (nav/footer: case/* tienen 25-27 atributos data-i18n, faq 27, process 26, privacy/terms/404 11 c/u) se renderizan en español aunque el usuario haya guardado 'en' en localStorage ('rc-lang'). (3) línea 657: `btn.hidden = !allowLangToggle;` dentro de setupLang oculta el botón de idioma; las 13 páginas tienen [data-lang-toggle] (grep confirma 13/13), así que en 9 de 13 el botón desaparece. (4) Los data-page reales confirman el alcance: home, about, work, contact están en el Set; quedan fuera case-cognition, case-cucu, case-luco, case-sellink (case/*.html:79), faq (faq.html:117), process (process.html:64), privacy (privacy.html:66), terms (terms.html:66) y 404 (404.html:63). El escenario descrito (recruiter en EN entra a un case study y ve todo en español sin toggle) es exactamente lo que produce este código. Viola la regla dura 5 ('Toggle ES/EN funcional y completo') y afecta justo los case studies, el contenido de venta principal. Severidad alta confirmada.

### Severidad media

#### El form de contacto es solo mailto: sin envío por red, sin detección de fallo

- **Archivo:** `js/main.js:1259`
- **Detalle:** `setupContactForm()` (líneas 1259-1301) arma un `mailto:` y lo dispara creando un <a> invisible y haciendo `a.click()` (líneas 1288-1294). No hay fetch a ningún endpoint, por lo tanto no existe manejo de errores de red porque no hay red. Si el visitante no tiene cliente de correo configurado (caso típico: recruiter en Windows corporativo con Gmail/Outlook web), el click no produce nada visible; el botón muestra 'Abriendo email…' 900ms (setTimeout línea 1296) y vuelve a la normalidad como si hubiera funcionado. La única red de seguridad es el texto del note ('Si no se abre, escribime a {email}'). Para un portfolio cuyo objetivo es que te contacten, es el punto de conversión más frágil del sitio.
- **Fix:** Conectar el form a un backend real: Formspree/Web3Forms o una serverless function en Vercel (/api/contact) con fetch + estados success/error en el note (aria-live ya existe). Mantener el mailto como fallback en el catch de red. La validación HTML5 (checkValidity + reportValidity + aria-invalid, líneas 1261-1267) ya está bien y se conserva.

#### Página invisible si cualquier setup lanza excepción antes de setupPageTransitions

- **Archivo:** `js/main.js:1336`
- **Detalle:** css/styles.css:146 define `.page { opacity: 0 }` y la clase `is-ready` que la revela se agrega recién dentro de `setupPageTransitions()` (main.js:750-752). Pero `init()` (líneas 1336-1356) ejecuta antes `setupActiveNav()`, `setupTheme()` y `setupLang()` sin ningún try/catch. Si cualquiera de esas tres lanza (un cambio futuro en el HTML, un navegador viejo sin alguna API), la ejecución se corta y la página queda en opacity:0 para siempre — pantalla en blanco con JS habilitado, donde el <noscript> no aplica. Es un single point of failure innecesario para contenido estático.
- **Fix:** Opción mínima: mover el `requestAnimationFrame(() => page.classList.add('is-ready'))` al primer statement de init(). Opción robusta: envolver cada setupX() en try/catch dentro de init() para que un fallo en una feature no mate a las demás.

#### El tema por defecto sigue al sistema operativo, no es dark — contradice la regla 4 del dueño

- **Archivo:** `js/main.js:668`
- **Detalle:** `getDefaultTheme()` (líneas 668-670) devuelve `darkSchemeMQ.matches ? 'dark' : 'light'` y `setupTheme()` (línea 674) lo usa cuando no hay tema guardado: `cachedTheme = storageGet('rc-theme', null) || getDefaultTheme()`. Un visitante nuevo con el OS en modo claro (mayoría de PCs corporativas) recibe el tema LIGHT, violando la regla dura 'dark mode por defecto'. Además hay un flash de tema: el HTML trae `data-theme="dark"` hardcodeado (index.html:2) pero main.js carga con defer, así que ese visitante ve un frame dark y luego el salto a light; lo mismo le pasa a quien guardó 'light' en visitas previas.
- **Fix:** Cambiar getDefaultTheme() para devolver siempre 'dark' (o eliminar la función y usar 'dark' como fallback en la línea 674), borrando también el listener de darkSchemeMQ (líneas 686-690). Para el flash con tema guardado: script inline de 3 líneas en el <head> de cada página que lea localStorage('rc-theme') y setee data-theme antes del primer paint.

### Severidad baja

#### Cada navegación interna en desktop espera 700ms fijos por la transición

- **Archivo:** `js/main.js:786`
- **Detalle:** En `setupPageTransitions()`, línea 786: `setTimeout(() => { window.location.href = a.href || href; }, 700);`. Todo click en un link interno con data-link queda retenido 700ms antes de empezar siquiera el request de la página siguiente. La transición es un buen detalle creativo (regla 7), pero 700ms es un impuesto alto multiplicado por cada navegación de un recruiter recorriendo el sitio; se siente como un sitio lento aunque el Lighthouse diga 96.
- **Fix:** Bajar el delay a 350-450ms ajustando la animación CSS del overlay a juego, o disparar la navegación en el `transitionend` del panel en vez de un timeout fijo. Bonus: hacer prefetch del href (<link rel="prefetch"> dinámico) al iniciar la transición para que los 700ms no sean tiempo muerto.

#### Código muerto: la lógica del label del cursor nunca se ejecuta porque ningún HTML usa data-cursor

- **Archivo:** `js/main.js:892`
- **Detalle:** `setupCursor()` lee `const cursorText = el.dataset.cursor` (línea 892) y solo escribe el label si existe (líneas 895 y 899: `if (cursorText && label) label.textContent = cursorText`). Un grep de `data-cursor=` sobre los 13 HTML devuelve cero resultados, así que el `<span class="cursor__label">` que existe en todas las páginas (p.ej. index.html:123) jamás muestra texto. Es una feature a medio cablear: el JS y el span existen, el atributo no.
- **Fix:** Decidir: o agregar `data-cursor="Ver caso"` a las cards de proyectos (donde un cursor con label luce y suma a la regla de interacciones creativas), o eliminar el branch de cursorText en main.js y el span .cursor__label de los 13 HTML.

#### Layout thrashing leve en setupParallaxDeck: lecturas y escrituras de layout intercaladas por card

- **Archivo:** `js/main.js:1034`
- **Detalle:** Dentro del rAF de `setupParallaxDeck()` (líneas 1034-1042), el forEach hace por cada card `c.getBoundingClientRect()` (lectura de layout) seguido de `c.style.translate = ...` (escritura). La escritura de la card N invalida el layout, y la lectura de la card N+1 fuerza un reflow sincrónico — un reflow extra por card en cada frame de scroll. Con 4 cards el costo es bajo, pero es el patrón clásico de read/write interleaving.
- **Fix:** Separar fases dentro del mismo rAF: primero `const rects = cards.map(c => c.getBoundingClientRect())` y `const vh = window.innerHeight` (una sola vez, hoy se lee dentro del loop), después un segundo loop que solo escriba style.translate.

#### Hosts de los demos hardcodeados y duplicados respecto del HTML

- **Archivo:** `js/main.js:696`
- **Detalle:** `setupExternalProjectLinks()` mantiene la lista `projectHosts` con 4 dominios vercel.app (líneas 696-701: 'cucu-studio-demo.vercel.app', 'luco-gourmet-demo.vercel.app', 'sellink-group-demo.vercel.app', 'cognition-demo-cyan.vercel.app') para quitar target=_blank en touch. Si un demo cambia de dominio o se agrega un quinto proyecto, hay que acordarse de tocar también esta lista; si no, el comportamiento mobile diverge en silencio (el link nuevo seguiría abriendo en pestaña nueva).
- **Fix:** Eliminar la lista y marcar los links de demos en el HTML con un atributo (`data-project-demo`), cambiando el selector a `document.querySelectorAll('a[data-project-demo][target="_blank"]')`. Una sola fuente de verdad.

#### Triple versionado manual (sw VERSION, ?v= de CSS y ?v= de JS) propenso a desincronizarse

- **Archivo:** `sw.js:35`
- **Detalle:** sw.js precachea URLs con query string fija: '/css/styles.css?v=30' (línea 35) y '/js/main.js?v=38' (línea 39), que deben coincidir a mano con lo que piden los 13 HTML (hoy coinciden: styles.css?v=30, main.js?v=38), más el bump independiente de `VERSION = 'v58'` (sw.js:2). Son tres contadores manuales en archivos distintos; el día que se actualice main.js y se olvide una de las tres puntas, el SW servirá la versión vieja con stale-while-revalidate y el bug 'pero si ya lo arreglé' aparecerá solo en visitantes recurrentes.
- **Fix:** Unificar: una constante de versión única (script de build trivial que reemplace el ?v= en HTML y sw.js, o derivar las entradas del SHELL desde una sola variable ASSET_VERSION en sw.js). Como mínimo, documentar en un comentario al tope de sw.js los 3 lugares a bumpear.

#### El reloj corre con setInterval cada segundo incluso con la pestaña oculta

- **Archivo:** `js/main.js:1209`
- **Detalle:** `setupClock()` ejecuta `setInterval(tick, 1000)` (línea 1209) sin pausa: `Intl.DateTimeFormat.formatToParts` + escritura de textContent en cada elemento [data-clock] una vez por segundo, también cuando la pestaña está en background (los navegadores lo throttlean a ~1/min, pero sigue siendo trabajo inútil). Sin cleanup, aunque al ser MPA el costo real es mínimo.
- **Fix:** Escuchar `visibilitychange`: clearInterval al ocultarse, tick() + setInterval al volver. Tres líneas y demuestra criterio de performance en un portfolio que vende exactamente eso.

#### applyLang marca el idioma activo del toggle con `lang` crudo en vez de `activeLang`

- **Archivo:** `js/main.js:567`
- **Detalle:** Línea 567: `s.classList.toggle('is-active', s.dataset.lang === lang)` usa el parámetro `lang` sin pasar por `resolveLang()`, mientras todo el resto de la función usa `activeLang` (línea 549). Hoy es inocuo porque en las páginas donde lang ≠ activeLang el toggle está oculto (btn.hidden, línea 657), pero es una inconsistencia latente: si mañana se muestra el toggle en una página no localizada, marcaría EN como activo mientras la página renderiza ES.
- **Fix:** Cambiar la línea 567 a `s.dataset.lang === activeLang` para que el estado visual del toggle siempre refleje el idioma realmente aplicado.

---

## Dimension: pwa-performance - 7.5 de 10

La capa PWA/performance está sorprendentemente bien resuelta para un sitio vanilla: SW con network-first para HTML (cero riesgo de HTML viejo para siempre), limpieza de caches viejos en activate, imágenes WebP con dimensiones declaradas y lazy/eager correcto, JS con defer y headers immutable para assets versionados con ?v=. Los problemas reales son de segundo orden: CSS (90KB) y JS (60KB) sin minificar, Google Fonts como recurso render-blocking de terceros, un sistema de cache busting triple totalmente manual (VERSION del SW + ?v= en 13 HTML + lista SHELL) que es frágil, e immutable de 1 año sobre imágenes sin versionar. El fallback offline reutiliza la 404 con copy engañoso. Nada bloquea una candidatura, pero hay margen claro de pulido.

### Fortalezas (no tocar)

- Estrategia de cache del SW correcta en lo fundamental: network-first para HTML (sw.js:89-118) — cero riesgo de servir HTML viejo para siempre, el error clásico de los SW de portfolio — y stale-while-revalidate para assets (sw.js:136-150). No tocar.
- Ciclo de vida del SW bien manejado: activate borra caches viejos filtrando por prefijo 'rony-portfolio-' (sw.js:62-69), skipWaiting + clients.claim, y el reload en controllerchange tiene guard 'hadController' que evita el reload en la primera instalación (js/main.js:1369-1373).
- El CV PDF está explícitamente excluido del SW (sw.js:86) y servido con no-store (vercel.json:123-127) — decisión correcta para un documento que se actualiza durante la búsqueda laboral.
- Disciplina de imágenes ejemplar: todas en WebP, todas con width/height declarados (cero CLS), loading=lazy debajo del fold y eager + fetchpriority=high + decoding=async en las LCP, con preload del hero en index.html:53.
- main.js con defer en las 13 páginas, prefetch de /work y /contact desde la home (index.html:55-56), preconnect a los dos dominios de fonts, y display=swap en la URL de Google Fonts.
- Headers de Vercel coherentes: immutable de 1 año para /css y /js (que sí van versionados con ?v=), no-store + Service-Worker-Allowed para /sw.js (actualización inmediata del SW), y cleanUrls consistente con los links internos, el manifest (start_url '/', shortcuts a /work y /contact) y el sitemap.
- manifest.json válido y coherente con las reglas del dueño: theme_color/background_color #0A0A0A (dark por defecto), id y scope '/', display standalone, shortcuts útiles, los 3 íconos PNG existen en disco.
- Runtime cache acotado con trimCache a 60 entradas (sw.js:71-79) y cache.addAll con fallback a adds individuales para que un 404 no rompa toda la instalación (sw.js:57).
- Fallback noscript para las animaciones reveal (index.html:104-111): el contenido es visible sin JS — las interacciones creativas no bloquean el render del contenido.

### Severidad media

#### CSS y JS se sirven sin minificar (90KB + 60KB)

- **Archivo:** `css/styles.css / js/main.js`
- **Detalle:** css/styles.css pesa 90.345 bytes y js/main.js 60.435 bytes, ambos con comentarios y formato completo (ej. cabecera '/* ===== Rony Cozzi — Portfolio v2 ... */'). Vercel aplica brotli/gzip automáticamente, lo que mitiga bastante, pero la minificación previa todavía ahorraría ~20-30% adicional post-compresión y reduce el costo de parseo de JS en móviles. Para un portfolio que vende 'sitios web rápidos' (meta description de index.html:7), servir fuentes sin minificar es un detalle que un revisor técnico puede notar en DevTools.
- **Fix:** Agregar un paso de build mínimo (esbuild/lightningcss o incluso 'npx esbuild js/main.js --minify' y 'npx lightningcss css/styles.css') que genere styles.min.css y main.min.js, y referenciarlos desde los HTML. Alternativa sin build: minificar una vez a mano antes de cada deploy. Mantener los fuentes legibles en el repo.

#### Cache busting triple y 100% manual: VERSION del SW + ?v= en 13 HTML + lista SHELL

- **Archivo:** `sw.js:2,35-39`
- **Detalle:** Hay tres versiones que deben mantenerse sincronizadas a mano: 'const VERSION = v58' (sw.js:2), '?v=30' para styles.css y '?v=38' para main.js repetidos en los 13 archivos HTML, y la lista SHELL del SW que precachea '/css/styles.css?v=30' y '/js/main.js?v=38' (sw.js:35,39). Hoy todo está consistente, pero si se bumpa el ?v= en los HTML y se olvida actualizar SHELL (o un solo HTML), el precache deja de coincidir con lo que piden las páginas y se descarga doble, o una página queda pidiendo una versión vieja. El historial de v58/v30/v38 muestra que ya hubo decenas de bumps manuales — es cuestión de tiempo que se desincronice.
- **Fix:** Centralizar: derivar las URLs versionadas de una sola constante (ej. script de deploy que reemplaza un placeholder __V__ en HTML y sw.js), o simplificar eliminando los ?v= y confiando en VERSION del SW + Cache-Control. Como mínimo, documentar en README la checklist de bump (HTML x13 + sw.js SHELL + VERSION).

#### Cache-Control immutable de 1 año sobre imágenes e iconos sin versionar

- **Archivo:** `vercel.json:117-121`
- **Detalle:** '/assets/(icons|img|work)/(.*)' recibe 'public, max-age=31536000, immutable', pero los archivos no tienen hash ni query de versión: rony.jpg, cucu.webp, luco.webp, icon-512.png. Si se reemplaza el contenido de cualquiera manteniendo el nombre, los visitantes recurrentes (y el SW) ven la imagen vieja hasta 1 año. La evidencia de que esto ya mordió: la imagen de Cognition se llama 'cognition-v2.webp' — hubo que renombrar el archivo para bustear el cache de la v1.
- **Fix:** Formalizar la convención: toda imagen que cambie de contenido cambia de nombre (como ya se hizo con cognition-v2). Documentarlo, o bajar a 'max-age=86400, stale-while-revalidate=604800' para /assets/img y /assets/work si se prevén reemplazos in-place, dejando immutable solo para /assets/icons.

#### El fallback offline es la página 404 con copy engañoso

- **Archivo:** `sw.js:114,129`
- **Detalle:** En el handler de navegación, tanto el caso 404 como el catch de red caído terminan en 'return caches.match("/404.html")' (sw.js:114 y 129). 404.html dice 'Esta página no existe. O nunca existió, o la moví, o el link estaba mal desde el principio' (404.html:127-129) — si el usuario está offline y pide una página no cacheada, se le dice que la página no existe, lo cual es falso y confunde. Está mitigado porque SHELL precachea todas las páginas del sitio, pero cualquier URL nueva o querystring distinto cae en este caso.
- **Fix:** Crear un offline.html dedicado ('Parece que estás sin conexión — estas páginas están disponibles offline: ...'), precachearlo en SHELL y usarlo solo en el catch de red (sw.js:129), dejando 404.html únicamente para el caso res.status === 404.

#### Google Fonts de terceros en el critical path de render

- **Archivo:** `index.html:49-52`
- **Detalle:** Las fuentes (Inter + Space Grotesk) se cargan vía '<link href="https://fonts.googleapis.com/css2?..." rel="stylesheet" />' (index.html:52 y equivalente en las 13 páginas): el CSS de fonts.googleapis.com es render-blocking y agrega dos conexiones de terceros (googleapis + gstatic) al critical path. Hay preconnect y display=swap, lo que mitiga, pero en conexiones lentas sigue costando un round-trip DNS+TLS extra antes del first render. Además el SW no puede cachear estas respuestas (el handler descarta origin !== self.location.origin, sw.js:84), así que offline las fuentes dependen solo del HTTP cache del navegador.
- **Fix:** Self-hostear los woff2 de Inter (400/500/600) y Space Grotesk (400-700) en /assets/fonts con @font-face + font-display: swap en styles.css, preload del woff2 principal, y eliminar los 3 links a Google. Elimina 2 dominios del critical path y permite precachearlas en el SW.

### Severidad baja

#### Precache duplicado: 52 entradas con cada página por partida doble (clean URL + .html)

- **Archivo:** `sw.js:8-52`
- **Detalle:** SHELL incluye cada página dos veces ('/work' y '/work.html', '/case/cucu' y '/case/cucu.html', etc.) y CSS/JS dos veces (con y sin '?v='): unas 24 entradas redundantes. En producción con cleanUrls de Vercel, '/work.html' responde 308 hacia '/work', así que esas entradas cachean respuestas redirected que ningún link del sitio usa (los enlaces internos usan clean URLs); solo sirven para servidores locales sin cleanUrls. '/css/styles.css' sin query (sw.js:34) nunca es pedido por ninguna página (todas usan ?v=30). Resultado: la instalación del SW descarga aproximadamente el doble de HTML del necesario en la primera visita.
- **Fix:** Precachear solo las clean URLs (que es lo que se navega en producción) y las versiones con ?v= de CSS/JS. La lógica de fallback `${path}.html` para servidores locales ya existe en el fetch handler (sw.js:107-113); si se quiere soporte local completo, basta dejarla resolver desde el runtime cache.

#### El SW precachea og-image.png (55KB) que el sitio nunca renderiza

- **Archivo:** `sw.js:42`
- **Detalle:** SHELL incluye '/og-image.png' (sw.js:42), pero esa imagen solo la consumen crawlers de redes sociales (og:image / twitter:image) y el campo screenshots del manifest — ningún <img> del sitio la usa. Son 55.564 bytes descargados en cada instalación del SW de cada visitante, sin beneficio offline.
- **Fix:** Quitar '/og-image.png' de SHELL. Los crawlers no ejecutan el SW y el manifest la pide bajo demanda.

#### 'no-store' en HTML elimina la posibilidad de revalidación 304

- **Archivo:** `vercel.json:22-29`
- **Detalle:** Todas las rutas HTML usan 'Cache-Control: no-cache, no-store, must-revalidate' (vercel.json:22,28 y los 12 bloques siguientes). 'no-store' prohíbe guardar la respuesta, así que cada navegación re-descarga el HTML completo en lugar de revalidar con ETag/If-None-Match y recibir un 304 vacío. 'no-cache' solo (que ya obliga a revalidar siempre) daría la misma frescura con menos bytes. Además la combinación es internamente contradictoria (no-store hace redundantes a no-cache y must-revalidate). Impacto chico (HTML de 10-33KB comprimido), pero es bytes gratis.
- **Fix:** Cambiar a 'Cache-Control: no-cache' (o 'max-age=0, must-revalidate') en todos los bloques HTML de vercel.json, dejando no-store solo para /sw.js y el CV PDF si se quiere máxima frescura ahí.

#### Preload de fuentes redundante: mismo href que el stylesheet inmediato

- **Archivo:** `index.html:51-52`
- **Detalle:** index.html:51 hace '<link rel="preload" ... as="style" />' del CSS de Google Fonts e index.html:52 lo pide como stylesheet en la línea siguiente (patrón repetido en las 13 páginas, ej. 404.html:46-47, work.html:46). El preload de un recurso que se solicita inmediatamente después en el mismo head no aporta nada — el preload scanner ya ve el stylesheet — y puede generar el warning de Chrome 'resource was preloaded but not used within a few seconds' si los headers no coinciden.
- **Fix:** Eliminar la línea de preload, o usar el patrón async real (preload + onload="this.rel='stylesheet'") si la intención era sacar las fuentes del critical path — aunque la mejor solución es self-hostear (ver hallazgo de fonts).

#### work.html y los case studies no preloadean su imagen LCP (index sí lo hace)

- **Archivo:** `work.html:187`
- **Detalle:** index.html:53 tiene '<link rel="preload" as="image" href="assets/work/cognition-v2.webp" fetchpriority="high" />' para su hero, pero work.html (cuya probable LCP es cucu.webp en work.html:187, marcada eager + fetchpriority=high) y los 4 case/*.html (img hero en línea 168 de cada uno, también eager + fetchpriority=high) no tienen preload equivalente. La imagen recién se descubre al parsear el body, perdiendo el head start que sí tiene la home. Inconsistencia menor porque fetchpriority=high ya ayuda.
- **Fix:** Agregar '<link rel="preload" as="image" href="assets/work/cucu.webp" fetchpriority="high" />' en work.html y el preload del webp correspondiente en cada case/*.html.

#### Manifest: purpose 'any maskable' combinado y screenshot sin form_factor

- **Archivo:** `manifest.json:31`
- **Detalle:** icon-192.png e icon-512.png declaran '"purpose": "any maskable"' (manifest.json:31,37). Usar el mismo bitmap para ambos propósitos está desaconsejado: un ícono maskable necesita ~20% de safe zone de padding; si el ícono actual llena el canvas, Android lo recorta en círculo y pierde bordes. Además el screenshot (og-image.png 1200x630, manifest.json:40-47) no declara '"form_factor": "wide"', con lo que algunos navegadores lo tratan como screenshot móvil pese a ser apaisado. Detalles cosméticos de la UI de instalación.
- **Fix:** Generar una variante icon-512-maskable.png con safe zone y separar purposes ('any' y 'maskable' en entradas distintas); agregar '"form_factor": "wide"' al screenshot.

#### Network-first sin timeout: en red lenta/flaky el usuario espera el fail completo antes del cache

- **Archivo:** `sw.js:89-118`
- **Detalle:** El handler de navegación hace 'fetch(e.request).then(...)' y solo cae al cache en el '.catch(...)' (sw.js:118). En una conexión que no falla pero tarda (lie-fi), el usuario espera el timeout del navegador (decenas de segundos) aunque toda la página esté precacheada y lista para servirse al instante.
- **Fix:** Envolver el fetch en un Promise.race con un timeout de ~3-4s que caiga al cache: 'Promise.race([fetch(req), new Promise((_, rej) => setTimeout(rej, 4000))])', manteniendo el catch actual como fallback.

#### El tema guardado se aplica recién cuando ejecuta main.js (defer): flash oscuro para usuarios que eligieron light

- **Archivo:** `index.html:2`
- **Detalle:** Todas las páginas hardcodean '<html lang="es" data-theme="dark">' y no hay ningún <script> inline en el head que lea la preferencia guardada (grep de '<script>' en index.html y work.html no devuelve inline scripts; el toggle vive en js/main.js que se carga con defer, index.html:571). Resultado: un usuario que eligió tema claro ve un flash dark→light en cada navegación, proporcional al tiempo de descarga+parseo de los 60KB de main.js. Cumple la regla 'dark por defecto', pero penaliza al que optó por light. El CSP de vercel.json ya tiene 13 hashes sha256 de scripts inline, así que agregar uno más es viable.
- **Fix:** Inline script de 3 líneas al inicio del <head>: leer localStorage y setear document.documentElement.dataset.theme antes del CSS; agregar su hash sha256 al CSP de vercel.json.

---

## Dimension: estructura-html - 7.5 de 10

La estructura HTML es notablemente sólida y consistente: las 13 páginas comparten header/nav/footer con estados activos correctos, no hay IDs duplicados, atributos duplicados ni tags sin cerrar (verificado con script), todos los target="_blank" llevan rel="noopener noreferrer", y los links internos usan clean URLs alineados con vercel.json (cleanUrls:true), sitemap y canonicals. Los problemas reales son de consistencia, no de corrección: la cobertura del sistema i18n es muy desigual (FAQ, Proceso, Privacidad, Términos y el cuerpo de los 4 case studies no tienen data-i18n, así que el toggle EN los deja en español — viola la regla dura 5), hay drift de footer entre páginas root y case studies, y el hero de index.html muestra "Argentina" violando la regla dura 1. Los archivos codex-changes-*.patch están correctamente ignorados por git y no se deployean.

### Fortalezas (no tocar)

- Header, nav principal y mobile-menu son idénticos en las 13 páginas, con estado activo correcto (class="is-current" + aria-current="page") en work/about/contact y links absolutos (/) para el logo.
- 404.html tiene navegación completa de vuelta al sitio: header con nav, CTA "Ir al inicio", footer reducido con Inicio/Contacto, y usa links absolutos (/work, /about, /css/styles.css) — correcto porque la página 404 se sirve en cualquier profundidad de URL.
- Cero IDs duplicados, cero atributos duplicados y cero tags sin cerrar en las 13 páginas (verificado programáticamente con parser HTML y balance de tags).
- Cero restos de desarrollo: no hay TODO, FIXME, console.log ni código comentado en ningún HTML/CSS/JS; los únicos comentarios HTML son 13 etiquetas de sección en index.html (<!-- HERO -->, etc.), que son documentación legítima.
- Todos los links externos con target="_blank" (WhatsApp, GitHub, LinkedIn, demos) llevan rel="noopener noreferrer" sin excepción en las 13 páginas.
- Links internos 100% consistentes con clean URLs: "work"/"about" desde root, "../work" y "case/cucu" relativos correctos desde subdirectorio, alineados con cleanUrls:true en vercel.json, con el sitemap.xml y con los canonicals. Las versiones de cache-busting (styles.css?v=30, main.js?v=38, case.css?v=3) coinciden entre HTML y la precache del sw.js.
- Las 4 case studies comparten plantilla estructural idéntica: case-hero con back-link e índice, case-cover con barra de browser, overview con 4 stats, "Reto y respuesta" en 2 columnas, 6 decisiones técnicas, stack, y case-next encadenado correctamente (cucu→luco→sellink→cognition→work).
- Los ~20 archivos codex-changes-*.patch del root están excluidos del repo por .gitignore línea 29 (codex-changes-*.patch) y git ls-files confirma que ninguno está tracked — con deploy vía Git NO se publican. No tocar esa línea del .gitignore.
- El patrón del footer de omitir la página actual en la columna "Navegación" se aplica de forma consistente en todas las páginas root (index omite Inicio, about omite Sobre mí, faq omite FAQ, etc.) — es intencional, no drift.
- Skip-link, fallback <noscript> para reveals/cursor, y semántica correcta de <details>/<summary> en FAQ presentes y uniformes en todas las páginas.

### Severidad alta

#### Ubicación geográfica "Argentina" dentro del hero — viola la regla dura 1

- **Archivo:** `index.html:177`
- **Detalle:** Dentro de <section class="hero"> está el bloque hero__top con: <span class="loc-pin"><span class="loc-pin__dot"></span><span>Argentina</span></span>. La regla dura del dueño dice explícitamente "sin ubicación geográfica en el hero". El mismo loc-pin aparece en el footer (index.html:529), donde la regla no aplica, pero en el hero es violación directa.
- **Fix:** Eliminar el <span class="loc-pin">…Argentina…</span> del hero__top de index.html (línea 177). Si se quiere conservar un dato ahí, reemplazarlo por algo no geográfico (p.ej. "Remoto" ya cubierto en hero__facts). El loc-pin del footer puede quedarse.
- **Verificacion adversarial:** CONFIRMADO - Verificado en C:\Users\Usuario\Desktop\PORTFOLIO-WEBS\Rony-potfolios\index.html. La sección hero abre en la línea 169 (<section class="hero" data-hero-scene>) y dentro de su bloque hero__top (líneas 175-179) está exactamente la línea 177: <span class="loc-pin"><span class="loc-pin__dot"></span><span>Argentina</span></span>. Esto viola directamente la regla dura 1 ("sin ubicación geográfica en el hero"). El segundo loc-pin citado también existe tal cual en la línea 529, dentro de <footer class="footer"> (línea 526), donde la regla no aplica. La cita, las líneas y el contexto del hallazgo coinciden al 100% con el código real; el fix propuesto (eliminar el loc-pin del hero, conservar el del footer) es correcto. Nota adicional: el grep confirma que "Argentina" solo aparece en esas dos líneas del archivo.

#### Cobertura i18n inconsistente: cuerpos enteros de página sin data-i18n — el toggle EN los deja en español

- **Archivo:** `faq.html:179-277`
- **Detalle:** index/about/work/contact tienen cobertura i18n completa (133/64/74/49 atributos data-i18n), pero el contenido principal de faq.html (las 11 preguntas/respuestas, faq-hero y faq-cta, líneas 179-277), process.html (proc-hero y los 6 proc-step, líneas 126-256), privacy.html (legal-body, líneas 127-173), terms.html (legal-body, líneas 127-158) y 404.html (err-title/err-copy, líneas 127-131) NO tienen ningún data-i18n. En js/main.js el diccionario no contiene claves para ese contenido (solo chrome: nav, footer, case.back, etc.). Resultado: al togglear EN, header y footer cambian de idioma pero todo el cuerpo queda en español — incumple la regla dura 5 ("toggle ES/EN funcional y completo") y se ve roto/mezclado ante un recruiter angloparlante.
- **Fix:** Agregar claves data-i18n a todo el contenido de faq.html, process.html, privacy.html, terms.html y 404.html, y poblar el diccionario es/en de js/main.js con esas claves. Priorizar FAQ y Process (páginas de venta); para privacy/terms una alternativa aceptable es un aviso "This page is available in Spanish only" al activar EN.
- **Verificacion adversarial:** CONFIRMADO - Confirmado en el código real. (1) faq.html:179-277: todo el cuerpo (faq-hero línea 180 "[ FAQ — Preguntas frecuentes ]", los 11 <details class="faq-item"> líneas 188-268, y faq-cta líneas 270-276 "¿Tenés otra pregunta?") está en español sin ningún data-i18n; los 29 data-i18n de faq.html son exclusivamente chrome (skip-link:118, nav:150-154, mobile-menu:172-175, footer:282-319, FAB wsp:333). (2) process.html: proc-hero (línea 126, "[ Proceso de trabajo ]") y los proc-step (líneas 138+, "Briefing y alcance", "Arquitectura y wireframes", "Diseño"...) sin data-i18n; sus 28 data-i18n son solo nav/footer. (3) privacy.html:127-173: legal-body completo ("Política de Privacidad", secciones 1-7) sin data-i18n; sus 13 atributos son chrome. (4) 404.html:127-128: <h1 class="err-title">Esta página no existe.</h1> y err-copy sin data-i18n; sus 13 atributos son chrome. (5) js/main.js: grep de claves faq./proc./legal./err. solo devuelve la entrada de ruta nav (línea 730: { paths: ['/faq'...], es: 'FAQ', en: 'FAQ' }) — no existen claves de traducción para el contenido de esas páginas. (6) Los conteos citados también cuadran: index 133, about 64, work 74, contact 49 data-i18n. Resultado verificado: al togglear EN en estas páginas, header/footer cambian de idioma y el cuerpo queda en español — incumple la regla dura 5. Severidad alta justificada: FAQ y Process son páginas de venta y el sitio se ve mezclado/roto ante un recruiter angloparlante.

#### Cuerpo de los 4 case studies sin i18n — solo se traducen tags de chrome

- **Archivo:** `case/cognition.html:194-253`
- **Detalle:** En las 4 case studies, todo el contenido sustantivo ("El proyecto", "Reto y respuesta", "El problema", "La solución", las 6 "Decisiones técnicas" y los títulos de sección) está hardcodeado en español sin data-i18n. Ejemplo: case/cognition.html líneas 194-253, case/cucu.html 194-253, case/luco.html 194-253, case/sellink.html 194-253. Solo case.back, case.live y (solo en cucu) los case-tag tienen claves. Las case studies son el contenido que más lee un empleador — en EN quedan completamente en español.
- **Fix:** Extender el sistema data-i18n al cuerpo de los 4 case studies (títulos de sección, overview, problema/solución, decisiones técnicas y labels de stats) y agregar las claves al diccionario en de js/main.js.
- **Verificacion adversarial:** CONFIRMADO - Confirmado en el código real. En case/cognition.html el cuerpo está hardcodeado en español sin data-i18n exactamente en las líneas citadas: línea 194 `<h2 id="cog-overview">El proyecto</h2>`, 204 "Reto y respuesta", 208 "El problema", 213 "La solución", 222 "Decisiones técnicas" y los 6 case-tech-item (226-252), además de labels de stats como "Páginas"/"Instalable" (178, 190). El mismo patrón se repite en las mismas líneas (194/204/208/213/222) en case/cucu.html, case/luco.html y case/sellink.html (verificado por grep). El inventario completo de data-i18n en las 4 case pages solo cubre chrome: a11y.skip, nav.*, footer.*, case.back (línea 143), case.live (156) y, únicamente en cucu.html, case.cucu.tag1/tag2 (151-152). En js/main.js el diccionario solo contiene esas claves de case: 'case.live' (líneas 70 ES / 292 EN), 'case.back' (125/347) y 'case.cucu.tag1/tag2' (141-142/363-364); no existe ninguna clave para el cuerpo ni mecanismo alternativo de traducción. Con el toggle en EN, todo el contenido sustantivo de los 4 case studies queda en español, violando la regla 5 ("Toggle ES/EN funcional y completo") en el contenido que más pesa para un empleador. Severidad alta justificada.

### Severidad media

#### Drift entre case studies: solo cucu tiene data-i18n en los case-tag del hero

- **Archivo:** `case/luco.html:151-152`
- **Detalle:** case/cucu.html:151-152 usa <span class="case-tag" data-i18n="case.cucu.tag1">Estudio creativo</span> (y main.js tiene la clave en ES línea 141 y EN línea 363), pero luco (líneas 151-152: "Restaurante", "PWA"), sellink (151-152: "Agencia", "Corporativo") y cognition (151-152: "Plataforma IA", "Empresas") tienen los mismos spans SIN data-i18n. La plantilla divergió: una case study se tradujo y las otras tres no.
- **Fix:** Agregar data-i18n="case.luco.tag1" etc. a los case-tag de luco, sellink y cognition, con sus claves en el diccionario es/en de js/main.js, replicando el patrón ya hecho en cucu. Lo mismo aplica al thumb__tag de luco en work.html:219 ("Pasta · Pizza · Vermut" sin data-i18n mientras cucu en work.html:191 sí lo tiene).

#### Footer drift entre páginas root y case studies: faltan WhatsApp, Proceso y FAQ

- **Archivo:** `case/cucu.html:294-304`
- **Detalle:** El footer de las páginas root tiene en "Redes": GitHub, LinkedIn y WhatsApp (index.html:541-543), y en "Navegación": …Proceso y FAQ (index.html:547-551). Las 4 case studies omiten el link de WhatsApp en Redes (case/cucu.html:294-297 solo GitHub+LinkedIn), omiten Proceso y FAQ en Navegación (case/cucu.html:299-304), y reemplazan la columna "Servicios" (footer.services con 3 spans + CV) por "Recursos" (footer.assets solo con CV, case/cucu.html:305-308). Mismo patrón en luco, sellink y cognition. Desde una case study no hay forma de llegar a /process ni /faq sin pasar por otra página.
- **Fix:** Unificar el footer de las 4 case studies con el de las páginas root: agregar WhatsApp a Redes, y Proceso + FAQ a la columna Navegación (con ../process y ../faq). Si la columna "Recursos" es intencional, mantenerla pero documentarlo; si no, restaurar "Servicios".

#### aria-current="page" incorrecto en las case studies

- **Archivo:** `case/cucu.html:114`
- **Detalle:** Las 4 case studies marcan el link "Trabajos" del nav con class="is-current" aria-current="page" (case/cucu.html:114, case/luco.html:114, case/sellink.html:114, case/cognition.html:114), pero la página actual es /case/cucu, no /work. aria-current="page" significa literalmente "este link apunta a la página actual", lo cual es falso y confunde a lectores de pantalla.
- **Fix:** En las case studies, mantener class="is-current" para el resaltado visual de sección pero cambiar a aria-current="true" (sección actual) o quitar el atributo aria-current.

### Severidad baja

#### Inconsistencia semántica: faq/process/privacy/terms usan <div> donde el resto del sitio usa <section>

- **Archivo:** `faq.html:179-187`
- **Detalle:** index, about, work y contact estructuran el <main> con <section> + aria-labelledby (p.ej. about.html:125,136,164). En cambio faq.html usa <div class="faq-hero"> (179) y <div class="faq-body"> (187), process.html usa <div class="proc-steps"> (137) con <div class="proc-step"> en vez de <article>/<li>, y privacy/terms usan <div class="legal-hero">/<div class="legal-body"> (privacy.html:128,134). No es inválido, pero rompe la convención del propio sitio (que además vende "HTML semántico" como capacidad en work.html:321).
- **Fix:** Cambiar esos <div> estructurales por <section aria-labelledby> (y los proc-step por <article> o <ol>/<li>, que es una secuencia ordenada de pasos), igualando el patrón de las otras páginas.

#### mobile-menu es un <div> sin semántica de navegación

- **Archivo:** `index.html:160-165`
- **Detalle:** En las 13 páginas el menú móvil es <div class="mobile-menu" id="mobile-menu" data-mobile-menu> con 4 links sueltos, sin <nav> ni aria-label, a diferencia del nav de escritorio que sí es <nav aria-label="Navegación principal">. El botón hamburguesa lo referencia bien con aria-controls="mobile-menu", pero el contenedor no se anuncia como navegación.
- **Fix:** Cambiar el <div class="mobile-menu"> por <nav class="mobile-menu" aria-label="Navegación móvil"> (o role="navigation") en las 13 páginas.

#### <section> completo con aria-hidden="true" (ticker)

- **Archivo:** `index.html:256`
- **Detalle:** index.html:256: <section class="ticker" aria-hidden="true"> — un landmark section cuyo contenido completo está oculto a tecnologías asistivas. Si el contenido es puramente decorativo (marquee duplicado), no debería ser un <section>; el mismo patrón ocurre con <div class="signal__rail" aria-hidden="true"> que sí usa div correctamente.
- **Fix:** Cambiar <section class="ticker"> por <div class="ticker"> manteniendo aria-hidden="true".

#### Alt text contradictorio para la misma imagen cucu.webp

- **Archivo:** `case/cucu.html:168`
- **Detalle:** index.html:297 describe assets/work/cucu.webp como "layout editorial sobre fondo claro con acento copper", mientras case/cucu.html:168 describe la misma imagen como "layout editorial con fondo oscuro y acento cobre". Una de las dos descripciones es factualmente incorrecta, y además mezcla "copper" (inglés) con "cobre" (español) en la versión ES.
- **Fix:** Verificar la imagen real y unificar ambos alt con la descripción correcta, usando "cobre" en la versión en español.

#### Formulario de contacto sin action de fallback — con JS deshabilitado el submit no hace nada

- **Archivo:** `contact.html:159-168`
- **Detalle:** El <form class="contact-form" name="contact" data-contact-form data-email="..." novalidate> no tiene atributo action ni method; depende 100% de js/main.js. La página tiene <noscript> para los reveals pero ninguna alternativa para el formulario: sin JS, el botón "Enviar mensaje" no produce nada (ni siquiera validación nativa, porque tiene novalidate).
- **Fix:** Agregar un fallback: action="mailto:ronycozzi5@gmail.com" method="post" enctype="text/plain" (que el JS puede preventDefault cuando está activo), o un aviso <noscript> dentro del form indicando escribir directo al mail.

#### Patches excluidos de git pero sin .vercelignore como segunda red

- **Archivo:** `.gitignore:29`
- **Detalle:** Confirmado: .gitignore línea 29 (codex-changes-*.patch) más las líneas 30-31 (.codex_tmp/, .codex_git_temp/) excluyen los ~20 patches del repo, y git ls-files no muestra ninguno tracked — con deploy vía integración Git NO se publican. Pero no existe archivo .vercelignore: si alguna vez se deploya con `vercel` CLI directamente desde la carpeta (que sube el filesystem, no el repo), los ~1.4MB de patches y las carpetas .codex_* se subirían al deployment.
- **Fix:** Crear un .vercelignore con: codex-changes-*.patch, .codex_tmp/, .codex_git_temp/, .claude/ — un archivo de 4 líneas que blinda el deploy independientemente del método.

#### 19 archivos modificados sin commit en el working tree

- **Archivo:** `index.html`
- **Detalle:** git status muestra 19 archivos con modificaciones sin commitear (todos los HTML, js/main.js, sw.js, manifest.json, sitemap.xml, robots.txt, vercel.json, fechados 6-jun) más .gitattributes sin trackear. Si el deploy es vía Git, producción NO refleja el estado local auditado aquí.
- **Fix:** Revisar el diff, commitear los cambios (incluyendo agregar .gitattributes) y pushear para que producción coincida con lo local.

