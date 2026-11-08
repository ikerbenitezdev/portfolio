export type Project = {
  title: string;
  description: string;
  stack: string[];
  impact: string;
  year: string;
  accent: string;
  accentSecondary: string;
  icon: string;
  screens: string[];
  metrics: Array<{ label: string; value: string }>;
  highlights: string[];
  links?: Array<{ label: string; href: string }>;
};

export const heroStats = [
  { value: '4+', label: 'proyectos destacados' },
  { value: 'React / Next', label: 'stack principal' },
  { value: 'Full Stack', label: 'enfoque de trabajo' },
];

export const heroPortrait = '/images/brand/iker-foto.webp';

export const profileHighlights = [
  '2º año de Ingeniería Informática',
  'Interés en arquitectura de software y cloud',
  'Apertura a open source y retos tecnológicos',
  'React, Next.js, TypeScript, PHP y bases de datos relacionales',
];

export const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'PHP',
  'Tailwind',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Node.js',
  'SQL',
  'Arquitectura',
  'Cloud',
];

export const projects: Project[] = [
  {
    title: 'Motion Cup',
    description:
      'Plataforma de torneos de fútbol en la Comunitat Valenciana para equipos internacionales. Integra noticias, streaming en directo, vídeos en diferido, subida de fotos online e inscripciones.',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL'],
    impact: 'Experiencia editorial y deportiva con un ritmo visual pensado para capturar comunidad y competición.',
    year: '2025',
    accent: '#7ce3bf',
    accentSecondary: '#7aa6ff',
    icon: '/images/projects/motion-logo.webp',
    screens: [
      '/images/projects/motion-screen1.webp',
      '/images/projects/motion-screen2.webp',
      '/images/projects/motion-screen3.webp',
    ],
    metrics: [
      { label: 'Contenido', value: 'Noticias + media' },
      { label: 'Arquitectura', value: 'SSR + DB' },
    ],
    highlights: ['Streaming en vivo', 'Subida de fotos', 'Inscripción de equipos'],
    links: [
      { label: 'Demo', href: '#' },
      { label: 'Repo', href: '#' },
    ],
  },
  {
    title: 'Ocean Fresh',
    description:
      'Web informativa enfocada en la exportación de pescados desde Mauritania. Cuenta con un catálogo dinámico generado a partir del contenido web.',
    stack: ['PHP', 'MySQL', 'Tailwind'],
    impact: 'Proyecto orientado a catálogo y presentación de producto, con foco en claridad comercial y actualización sencilla.',
    year: '2024',
    accent: '#ffd166',
    accentSecondary: '#7aa6ff',
    icon: '/images/projects/ocean-logo.webp',
    screens: [
      '/images/projects/ocean-screen1.webp',
      '/images/projects/ocean-screen2.webp',
      '/images/projects/ocean-screen3.webp',
    ],
    metrics: [
      { label: 'Catálogo', value: 'Dinámico' },
      { label: 'Objetivo', value: 'Conversión' },
    ],
    highlights: ['Catálogo generado desde web', 'Base de datos relacional', 'Diseño comercial'],
    links: [
      { label: 'Demo', href: '#' },
      { label: 'Repo', href: '#' },
    ],
  },
  {
    title: 'Fib Links',
    description:
      'Plataforma colaborativa para centralizar y unificar los enlaces de la universidad por asignatura, evitando despistes y permitiendo peticiones y aportaciones directas de los alumnos.',
    stack: ['React', 'Node.js', 'MongoDB / SQL'],
    impact: 'Herramienta útil y social, centrada en reducir fricción y convertir enlaces dispersos en un hub claro.',
    year: '2024',
    accent: '#8b9cff',
    accentSecondary: '#25d366',
    icon: '/images/projects/fiblinks-logo.svg',
    screens: [
      '/images/projects/fiblinks-screen1.webp',
      '/images/projects/fiblinks-screen2.webp',
      '/images/projects/fiblinks-screen3.webp',
    ],
    metrics: [
      { label: 'Comunidad', value: 'Colaborativa' },
      { label: 'Stack', value: 'Frontend + API' },
    ],
    highlights: ['Aportaciones de alumnos', 'Enlaces por asignatura', 'Flujo simple'],
    links: [
      { label: 'Demo', href: '#' },
      { label: 'Repo', href: '#' },
    ],
  },
  {
    title: 'Torre de Mejanell',
    description:
      'Web de alojamiento rústico en Lleida con información de contacto, experiencia inmersiva y un diseño cuidado para transmitir calma, entorno y autenticidad.',
    stack: ['React', 'Diseño visual', 'Conversión'],
    impact: 'Pensado como landing emocional, priorizando atmósfera, confianza y acceso rápido al contacto.',
    year: '2026',
    accent: '#f4a261',
    accentSecondary: '#7ce3bf',
    icon: '/images/projects/logo-blanc-torre-mejanell.svg',
    screens: [
      '/images/projects/torre-screen1.webp',
      '/images/projects/torre-screen2.webp',
      '/images/projects/torre-screen3.webp',
    ],
    metrics: [
      { label: 'Experiencia', value: 'Inmersiva' },
      { label: 'Enfoque', value: 'Contacto' },
    ],
    highlights: ['Fotografía protagonista', 'Accesos rápidos', 'Diseño cuidado'],
    links: [
      { label: 'Demo', href: '#' },
      { label: 'Repo', href: '#' },
    ],
  },
];

export const contactDetails = [
  { label: 'Email', value: 'hola@ikerbenitez.dev', href: 'mailto:hola@ikerbenitez.dev' },
  { label: 'GitHub', value: 'github.com/ikerbenitez', href: 'https://github.com/ikerbenitez' },
  { label: 'LinkedIn', value: 'linkedin.com/in/ikerbenitez', href: 'https://www.linkedin.com/in/ikerbenitez' },
];

export const inquiryPoints = [
  'Colaboraciones open source',
  'Proyectos web con foco en producto',
  'Landing pages y experiencias inmersivas',
  'Desarrollo frontend y backend con bases de datos relacionales',
];

export const whatsappLink =
  'https://wa.me/34600000000?text=Hola%20Iker%2C%20quiero%20hablar%20sobre%20tu%20portfolio%20y%20un%20proyecto.';
