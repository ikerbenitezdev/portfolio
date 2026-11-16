// Textos del hero, del recorrido y de la frase de la isla.
// Las fotografías del recorrido son provisionales (Wikimedia Commons): sustitúyelas por fotos tuyas
// con encuadre horizontal y conserva el texto alternativo actualizado.

export type Chapter = {
  title: string;
  text: string;
  // position: encuadre de la foto dentro del marco (object-position), opcional.
  image: { src: string; alt: string; width: number; height: number; srcSet?: string; position?: string };
};

export const heroContent = {
  name: 'Iker Benítez',
  first: 'Iker',
  last: 'Benítez',
  role: 'Desarrollador web',
  route: 'De Menorca a Barcelona',
  lead: 'Hago webs para negocios pequeños y estudio Ingeniería Informática. Aquí cuento cómo empecé, por si te ayuda a dar tu primer paso.',
  fact: '5 proyectos web desde 2024',
  primary: 'Escríbeme',
  scroll: 'Sigue bajando',
  portrait: { src: '/images/sized/iker-foto-720.webp', alt: 'Retrato de Iker Benítez con un polo azul marino' },
};

export const chaptersContent = {
  label: 'Recorrido',
  title: 'Cuatro cruces',
  lead: 'De Menorca a mi primer proyecto cobrado. Ninguno fue en línea recta.',
};

export const chapters: Chapter[] = [
  {
    title: 'Menorca, donde empieza todo',
    text: 'Crecí en una isla rodeada de mar. Allí aprendí a ir con calma y a preguntarme qué había al otro lado.',
    image: { src: '/images/sized/menorca-1280.webp', alt: 'Iker en el podio de Balearskills con la medalla del tercer puesto', width: 1280, height: 721, srcSet: '/images/sized/menorca-1280.webp 1280w, /images/social/menorca.webp 1600w', position: '60% 40%' },
  },
  {
    title: 'Barcelona, el primer cruce',
    text: 'Vine a buscar trabajo. Hice varias entrevistas y casi nadie respondió, así que volví a empezar por otro lado.',
    image: { src: '/assets/img/photo-f141933458-1280.webp', alt: 'Barcelona al atardecer, con la Sagrada Família y las montañas detrás', width: 1280, height: 649, srcSet: '/assets/img/photo-f141933458-500.jpg 500w, /assets/img/photo-f141933458-960.jpg 960w, /assets/img/photo-f141933458-1280.webp 1280w' },
  },
  {
    title: 'Ingeniería Informática, desde cero',
    text: 'Volví a las mates y a la física después de años sin estudiarlas. Ahora estoy en segundo curso.',
    image: { src: '/images/social/ingenieria.webp', alt: 'Placa de prácticas de la facultad con una pantalla que muestra los nombres Iker Benítez y Aitor Pira', width: 765, height: 1020, position: '50% 62%' },
  },
  {
    title: 'El sí con miedo',
    text: 'Mi hermano me pidió la web de sus torneos de fútbol. Estuve a punto de decir que no. Dije que sí y salió bien.',
    image: { src: '/images/social/elsiconmiedo.webp', alt: 'Mensajes de WhatsApp de un cliente que pide una web con su diseño, pregunta cuánto costaría y si estaría en 20 días', width: 1217, height: 796, position: '50% 35%' },
  },
];

export const statementContent = {
  label: 'De isla en isla',
  before: 'Nací en una isla y aprendí que crecer es cruzar el agua. Cada cruce me ha enseñado lo mismo: no hace falta saberlo todo para empezar, basta con',
  strong: 'dar el primer paso',
};
