export type NowItem = { title: string; text: string };

export const nowContent = {
  label: 'Sobre mí',
  title: 'Aprendo haciendo',
  lead: 'Lo que ocupa mis semanas, entre la facultad y los proyectos.',
  // Cambia la fecha cada vez que actualices la lista.
  updated: 'Actualizado el 8 de noviembre de 2026',
  image: { src: '/images/social/actualmente.webp', alt: 'Mi escritorio por la noche: un monitor con código, el portátil, un teclado blanco y una guitarra al fondo', width: 765, height: 1020 },
};

export const nowItems: NowItem[] = [
  { title: 'Segundo de Ingeniería Informática', text: 'En la FIB, asignatura a asignatura, también cuando alguna cuesta.' },
  { title: 'Mantengo la web de Motion Cup', text: 'Me encargo del mantenimiento anual desde que la publiqué.' },
  { title: 'Webs más accesibles', text: 'Aprendo a hacer páginas que se usen bien con teclado y lector de pantalla.' },
  { title: 'Terminar lo que empiezo', text: 'No sé del todo cuál es la siguiente isla, pero quiero llegar con cosas acabadas.' },
];
