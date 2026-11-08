// Para añadir un mes: exporta las imágenes, conviértelas a WebP y guárdalas en
// public/movement/AAAA-MM/ como strava.webp y hevy.webp. Añade el objeto al
// principio de months: solo se muestra el primero. Describe sus cifras en alt
// y omite la app que falte.
import type { MovementMonth, MovementProfile } from '../types/movement';

export const movementContent = {
  label: 'Movimiento',
  title: 'También entreno',
  subtitle: 'El último mes hice todo esto.',
  description: 'Moverme me ayuda a desconectar entre tareas largas y volver al estudio con la mente más despejada.',
  noImages: 'Todavía no hay postales disponibles para este mes.',
  profilePending: 'Perfil pendiente de añadir',
  imageError: 'No se ha podido cargar esta imagen. Comprueba la ruta del archivo.',
};

// TODO: añadir el usuario de Strava y los logos de public/logos.
// TODO: revisar las guías de marca oficiales antes de publicar los logos.
export const profiles: MovementProfile[] = [
  { app: 'strava', url: 'https://strava.app.link/JCswappkU7b' },
  { app: 'hevy', username: 'ikerbenitez', url: 'https://hevy.com/user/ikerbenitez' },
];

export const months: MovementMonth[] = [
  {
    id: '2026-10',
    label: 'Octubre 2026',
    strava: {
      image: '/images/training/strava.webp',
      alt: 'Resumen de Strava de octubre de 2026: 27 horas de actividad. Gráfico mensual de noviembre a octubre sin cifras para los demás meses.',
    },
    hevy: {
      image: '/images/training/heavy.webp',
      alt: 'Resumen de Hevy de octubre de 2026: 17 entrenamientos, 25 horas y 18 minutos, 110 mil kilogramos de volumen y 368 series. Incrementos: 6 entrenamientos, 11 horas y 24 minutos, 46 mil kilogramos y 165 series.',
    },
  },
];
