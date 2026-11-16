export type Screen = { src: string; alt: string };

export type Project = {
  id: string;
  name: string;
  kind: string;
  summary: string;
  year: string;
  stack: string[];
  // Capturas en /images/sized (800 px de ancho). La primera es la portada.
  screens: Screen[];
  // Web publicada ("Ver web") y repositorio ("Ver código"): los dos son opcionales.
  url?: string;
  repo?: string;
};

export const projectsContent = {
  label: 'Proyectos',
  title: 'Cosas que he construido',
  lead: 'Cinco proyectos reales: un torneo, una casa rural, un exportador, mi facultad y una herramienta propia.',
};

const s = (file: string, alt: string): Screen => ({ src: `/images/sized/${file}-800.webp`, alt });

export const projects: Project[] = [
  {
    id: 'motion-cup',
    name: 'Motion Cup',
    kind: 'Web de torneos de fútbol base',
    summary: 'Inscripciones de equipos, noticias, directos y subida de fotos para torneos en la Comunitat Valenciana. Mi primer proyecto cobrado.',
    year: '2025',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Resend', 'Tailwind'],
    url: 'https://motioncupfootball.com',
    screens: [
      s('motion1', 'Portada de Motion Football Cup con el arco de meta del torneo sobre un campo de fútbol'),
      s('motion2', 'Tarjetas de los torneos Motion 2027 en Almussafes y Cattolica'),
      s('motion3', 'Página de un torneo de Motion Cup con equipos, modalidad y palmarés de campeones'),
    ],
  },
  {
    id: 'torre-de-mejanell',
    name: 'Torre de Mejanell',
    kind: 'Web de una casa rural en Lleida',
    summary: 'Un alojamiento con torre medieval: la historia de la casa, fotos del entorno y acceso directo a precios y ocupación.',
    year: '2026',
    stack: ['Astro', 'Tailwind', 'Resend'],
    screens: [
      s('torre-screen1', 'Portada de Torre de Mejanell con la torre de piedra y la piscina'),
      s('torre-screen2', 'Galería de Torre de Mejanell: cocina, comedor, patios y mesa exterior'),
      s('torre-screen3', 'Sección de bares y restaurantes recomendados cerca de Torre de Mejanell'),
    ],
  },
  {
    id: 'ocean-fresh',
    name: 'Ocean Fresh',
    kind: 'Catálogo de un exportador de pescado',
    summary: 'Web de un exportador de Mauritania con un catálogo que se genera a partir del contenido de la propia web.',
    year: '2024',
    stack: ['Next.js', 'MySQL', 'Tailwind', 'Resend'],
    screens: [
      s('ocean-screen1', 'Portada de Ocean Fresh con una barca de pesca en una playa'),
      s('ocean-screen2', 'Ficha de la sepia en el catálogo de Ocean Fresh, con categoría, método de pesca y conservación'),
      s('ocean-screen3', 'Buscador del catálogo de Ocean Fresh con filtros por tipo de producto'),
    ],
  },
  {
    id: 'fib-links',
    name: 'Fib Links',
    kind: 'Los enlaces de mi facultad',
    summary: 'Los enlaces de cada asignatura de la FIB en un solo sitio. Los alumnos entran con Google, proponen enlaces y se revisan antes de publicarse.',
    year: '2024',
    stack: ['Next.js', 'Google Auth', 'Tailwind'],
    url: 'https://fib-links.vercel.app',
    screens: [
      s('fiblinks-screen3', 'Asignaturas en Fib Links con sus enlaces: Programación, Matemáticas y Estructura de Computadores'),
      s('fiblinks-screen2', 'Pantalla de utilidades de Fib Links con la calculadora de media, Discord, YouTube y el horario'),
    ],
  },
  {
    id: 'imgaudit',
    name: 'ImgAudit',
    kind: 'Auditoría de las imágenes de una web',
    summary: 'Pegas la URL de tu web y te dice qué imágenes la frenan de verdad: peso según su papel, formato, tamaño real, lazy loading, srcset y saltos de layout. Ordena los fallos por lo que ahorrarías.',
    year: '2026',
    stack: [],
    repo: 'https://github.com/ikerbenitezdev/imgaudit',
    screens: [
      s('imgAudit', 'Portada de ImgAudit con el titular «Haz que tu web vaya más rápido» y el campo para auditar una URL'),
      s('imgAudit2png', 'Resultado de ImgAudit: imágenes ordenadas por ahorro, con su peso original, la versión WebP y los fallos detectados'),
      s('imgAudit3', 'Lista de lo que revisa ImgAudit: prioridad real, peso según el papel, formato, proporciones, carga y calidad'),
    ],
  },
];
