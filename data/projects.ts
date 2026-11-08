export type Project = {
  id: string;
  title: string;
  summary: string;
  why: string;
  learned: string;
  stack: string[];
  image: { src: string; alt: string };
  links?: { demo?: string; repo?: string };
  featured: boolean;
  year: string;
};

export const projectsContent = {
  label: 'Cosas que he construido',
  title: 'Proyectos',
  description: 'Cada proyecto ha sido una oportunidad para probar, equivocarme y aprender algo nuevo.',
  why: 'Por qué lo hice',
  learned: 'Qué aprendí',
  demo: 'Ver proyecto',
  repo: 'Ver código',
  featured: 'Primer proyecto cobrado',
};

export const projects: Project[] = [
  {
    id: 'torneos',
    title: 'Web de torneos de fútbol',
    summary: 'Una web para la empresa de mi hermano, con inscripciones, plantilla de email y cuentas de correo de empresa.',
    why: 'Quería ayudar a mi hermano con su empresa y dar el paso de trabajar en un proyecto real. Era la primera vez que cobraba por algo que había construido.',
    learned: 'Aprendí a preparar inscripciones y comunicaciones, crear correos de empresa y pensar en el mantenimiento después de publicar la web.',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL'],
    image: { src: '/projects/torneos-placeholder.svg', alt: 'Imagen provisional de la web de torneos de fútbol, pendiente de sustituir por una captura' },
    featured: true,
    year: '2025',
  },
  {
    id: 'casa-rural',
    title: 'Casa rural',
    summary: 'Una web estática para la casa rural de un compañero de piso, con galería de imágenes y formulario de contacto.',
    why: 'Quería ayudar a mi compañero a enseñar su casa rural y facilitar que la gente pudiera ponerse en contacto.',
    learned: 'Aprendí que un proyecto pequeño también cuenta: cuidar los detalles y escuchar lo que necesita otra persona importa tanto como la tecnología.',
    stack: ['HTML', 'CSS'],
    image: { src: '/projects/casa-rural-placeholder.svg', alt: 'Imagen provisional de la web de la casa rural, pendiente de sustituir por una captura' },
    featured: false,
    year: '2026',
  },
  {
    id: 'portfolio',
    title: 'Este portfolio',
    summary: 'Un espacio en construcción para compartir mi recorrido, lo que hago y lo que voy aprendiendo.',
    why: 'Quería contar mi historia de una manera más personal y compartirla con quien también esté buscando su siguiente paso.',
    learned: 'Estoy aprendiendo a convertir una idea personal en una experiencia clara, accesible y que pueda seguir creciendo conmigo.',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    image: { src: '/projects/portfolio-placeholder.svg', alt: 'Imagen provisional de este portfolio, pendiente de sustituir por una captura' },
    featured: false,
    year: 'En curso',
  },
];
