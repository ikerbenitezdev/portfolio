export type MovementApp = 'strava' | 'hevy';

export type MovementProfile = {
  app: MovementApp;
  username?: string;
  url?: string;
  logo?: string;
};

export type MovementImage = {
  image: string;
  alt: string;
};

export type MovementMonth = {
  id: string;
  label: string;
  strava?: MovementImage;
  hevy?: MovementImage;
  note?: string;
};
