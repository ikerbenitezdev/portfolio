export type TimelineMilestone = {
  title: string;
  eyebrow: string;
  description: string;
};

export const heroContent = {
  name: 'Iker Benítez',
  label: 'De isla en isla',
  headline: 'Nací en una isla. Aprendí que crecer es cruzar el agua.',
  description: 'Soy desarrollador web y estudiante de informática. Esta es la historia de los pasos, dudas y personas que me han traído hasta aquí.',
  action: 'Conoce mi recorrido',
  scroll: 'Sigue la ruta',
  islandButton: 'Un pequeño secreto de Menorca',
  islandNote: 'Menorca siempre será mi primera isla.',
};

export const timelineContent = {
  label: 'Una isla después de otra',
  title: 'Mi recorrido',
  description: 'No siempre he tenido claro el siguiente paso. Pero mirar atrás me recuerda que cada cruce me ha enseñado algo.',
};

export const timeline: TimelineMilestone[] = [
  {
    title: 'Menorca',
    eyebrow: 'Donde empieza todo',
    description: 'Crecí en una isla rodeada de mar. Allí aprendí a valorar la calma, la curiosidad y las ganas de descubrir qué había más allá.',
  },
  {
    title: 'Barcelona',
    eyebrow: 'El primer cruce',
    description: 'Después de varias entrevistas, casi nadie respondió. Y en vez de rendirme, volví a empezar. Buscar mi sitio lejos de casa también era parte del camino.',
  },
  {
    title: 'Ingeniería',
    eyebrow: 'Volver a aprender',
    description: 'Decidí estudiar Ingeniería Informática empezando prácticamente desde cero. Volver a las mates y a la física después de años sin estudiarlas me recordó que aprender también es tener paciencia.',
  },
  {
    title: 'El sí con miedo',
    eyebrow: 'Un proyecto real',
    description: 'Cuando llegó la oportunidad de hacer una web para torneos de fútbol, dije que sí aunque tenía miedo. Fue mi primer proyecto cobrado y una forma de descubrir que no hace falta saberlo todo para empezar.',
  },
  {
    title: 'Lo que viene',
    eyebrow: 'La siguiente isla',
    description: 'No sé exactamente cómo será la siguiente etapa. Quiero seguir aprendiendo, construir cosas útiles y compartir el camino con quienes también se atreven a empezar.',
  },
];
