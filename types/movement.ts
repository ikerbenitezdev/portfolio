export type MovementApp = 'strava' | 'hevy';

export type MovementProfile = {
  app: MovementApp;
  label: string;
  url: string;
};

export type MovementImage = {
  image: string;
  alt: string;
  // ancho del original (las capturas son cuadradas)
  width: number;
};

export type MovementMonth = {
  id: string;
  label: string;
  strava?: MovementImage;
  hevy?: MovementImage;
};
