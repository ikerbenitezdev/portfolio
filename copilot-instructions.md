# Contexto del proyecto

Portfolio web personal de un desarrollador de 23 años. NO está pensado para
reclutadores, sino para inspirar a gente que empieza o duda de sí misma
(estudiantes, profesionales).

## Concepto: "De isla en isla"
Crecer es cruzar el agua hacia la siguiente isla. La historia son cruces:
1. Menorca (origen)
2. Barcelona (busqué trabajo, tras varias entrevistas casi nadie respondió)
3. Ingeniería Informática desde cero (mates y física tras años sin estudiar)
4. El "sí con miedo": primer proyecto cobrado (web de torneos de fútbol)
5. Lo que viene

Frase del hero: "Nací en una isla. Aprendí que crecer es cruzar el agua."

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion para animaciones
- Iconos: lucide-react
- Mapa: react-simple-maps o Leaflet (decidiremos en su fase)

## Estilo visual
- Moderno, fondo blanco con degradados suaves: turquesa, azul cielo, arena/coral.
- Glassmorphism: tarjetas con `bg-white/40`, `backdrop-blur-xl`,
  `border border-white/50`, `shadow-lg shadow-cyan-900/5`, `rounded-3xl`.
- Blobs de degradado difuminados detrás de las secciones para dar profundidad.
- Tipografía: Plus Jakarta Sans (texto) y una display con carácter para títulos,
  cargadas con next/font.
- Mucho espacio en blanco, logos de tecnologías, fotos reales.

## Tono de los textos
Cercano, honesto, sin jerga corporativa, sin dramatizar. Primera persona, español.

## Reglas de código
- Componentes pequeños y reutilizables en /components, secciones en /components/sections.
- Todo el contenido (textos, proyectos, viajes) en /data como objetos tipados,
  nunca hardcodeado en los componentes.
- Mobile-first y responsive.
- Accesibilidad: HTML semántico, alt en imágenes, contraste suficiente,
  respetar `prefers-reduced-motion`.
- Reutiliza lo existente antes de crear algo nuevo y no rompas lo que funciona.
- Si dudas entre dos opciones, explica brevemente cuál eliges y por qué.