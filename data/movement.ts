// Para añadir un mes: exporta las imágenes de Strava y Hevy, conviértelas a WebP, guárdalas en
// public/movement/AAAA-MM/ y pon el mes al principio de months: solo se muestra el primero.
// Describe sus cifras en alt y omite la app que falte.
import type { MovementMonth, MovementProfile } from '../types/movement';

export const movementContent = {
  title: 'Entreno entre clases.',
  // {month} se sustituye por la etiqueta del mes que se muestra.
  titleMuted: 'En {month}: 27 horas de actividad y 17 entrenamientos.',
};

export const profiles: MovementProfile[] = [
  { app: 'strava', label: 'Ver mi perfil en Strava', url: 'https://strava.app.link/JCswappkU7b' },
  { app: 'hevy', label: 'Ver mi perfil en Hevy', url: 'https://hevy.com/user/ikerbenitez' },
];

export const months: MovementMonth[] = [
  {
    id: '2026-10',
    label: 'octubre de 2026',
    strava: {
      image: '/images/sized/strava-720.webp',
      width: 900,
      alt: 'Resumen de Strava de octubre de 2026: 27 horas de actividad, frente a los once meses anteriores.',
    },
    hevy: {
      image: '/images/sized/heavy-720.webp',
      width: 1176,
      alt: 'Resumen de Hevy de octubre de 2026: 17 entrenamientos, 25 horas y 18 minutos, 110 mil kilos de volumen y 368 series.',
    },
  },
];
