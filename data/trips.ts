export type Trip = {
  id: string;
  name: string;
  country: string;
  // [longitud, latitud]
  coordinates: [number, number];
  isOrigin?: boolean;
};

export const travelContent = {
  title: 'Trece viajes desde Menorca.',
  titleMuted: 'De las Maldivas al Camino de Santiago.',
  mapLabel: 'Mapa de Europa, el norte de África y Oriente Medio con Menorca y los trece lugares que he visitado marcados con puntos',
};

export const trips: Trip[] = [
  { id: 'menorca', name: 'Menorca', country: 'España', coordinates: [4.08, 39.95], isOrigin: true },
  { id: 'maldivas', name: 'Maldivas', country: 'Maldivas', coordinates: [73.51, 4.18] },
  { id: 'egipto', name: 'Egipto', country: 'Egipto', coordinates: [31.24, 30.04] },
  { id: 'dubai', name: 'Dubái', country: 'Emiratos Árabes', coordinates: [55.27, 25.2] },
  { id: 'londres', name: 'Londres', country: 'Reino Unido', coordinates: [-0.13, 51.51] },
  { id: 'sicilia', name: 'Sicilia', country: 'Italia', coordinates: [14.27, 37.6] },
  { id: 'estrasburgo', name: 'Estrasburgo', country: 'Francia', coordinates: [7.75, 48.58] },
  { id: 'tenerife', name: 'Tenerife', country: 'España', coordinates: [-16.63, 28.29] },
  { id: 'marrakech', name: 'Marrakech', country: 'Marruecos', coordinates: [-7.99, 31.63] },
  { id: 'granada', name: 'Granada', country: 'España', coordinates: [-3.6, 37.18] },
  { id: 'camino', name: 'Camino de Santiago', country: 'España', coordinates: [-8.54, 42.88] },
  { id: 'milan', name: 'Milán', country: 'Italia', coordinates: [9.19, 45.46] },
  { id: 'dolomitas', name: 'Dolomitas', country: 'Italia', coordinates: [11.85, 46.49] },
  { id: 'perpinan', name: 'Perpiñán', country: 'Francia', coordinates: [2.9, 42.7] },
];
