export type Trip = {
  id: string;
  name: string;
  country: string;
  coordinates: [number, number];
  year?: string;
  shortNote: string;
  story?: string;
  photo: string;
  highlight: boolean;
  isOrigin: boolean;
};

const placeholder = '/travel/placeholder.svg';

export const travelContent = {
  label: 'Más allá de mi isla',
  title: 'Lugares que forman parte del camino',
  description: 'Un pequeño mapa de lugares por los que he pasado. Poco a poco iré poniendo palabras y fotos a cada viaje.',
  map: 'Mapa',
  list: 'Lista',
  mapLoading: 'Preparando el mapa…',
  mapHelp: 'Acerca el mapa y arrástralo para explorar. También puedes usar la lista de lugares.',
  origin: 'Origen',
  highlight: 'Viaje destacado',
  details: 'Ver historia',
  pending: 'Pronto compartiré una historia personal y una foto de este lugar.',
};

// TODO: sustituir las imágenes provisionales y añadir anécdotas y fechas personales.
export const trips: Trip[] = [
  { id: 'menorca', name: 'Menorca', country: 'España', coordinates: [4.08, 39.95], shortNote: 'La isla donde empezó mi historia.', story: 'Menorca es el lugar donde crecí y el punto de partida de este recorrido.', photo: placeholder, highlight: false, isOrigin: true },
  // TODO: añadir una anécdota personal del viaje a Maldivas.
  { id: 'maldivas', name: 'Maldivas', country: 'Maldivas', coordinates: [73.51, 4.18], shortNote: 'Agua cristalina, fauna marina e islas locales.', story: 'En Maldivas me llamaron la atención la fauna marina, el agua cristalina y las islas locales menos masificadas.', photo: placeholder, highlight: true, isOrigin: false },
  { id: 'egipto', name: 'Egipto', country: 'Egipto', coordinates: [31.24, 30.04], shortNote: 'Un viaje al encuentro de una historia que sigue muy presente.', photo: placeholder, highlight: false, isOrigin: false },
  { id: 'dubai', name: 'Dubái', country: 'Emiratos Árabes Unidos', coordinates: [55.27, 25.2], shortNote: 'Una ciudad donde la vida junto al desierto toma otra escala.', photo: placeholder, highlight: false, isOrigin: false },
  { id: 'londres', name: 'Londres', country: 'Reino Unido', coordinates: [-0.13, 51.51], shortNote: 'Una ciudad de barrios distintos y muchas formas de recorrerla.', photo: placeholder, highlight: false, isOrigin: false },
  { id: 'sicilia', name: 'Sicilia', country: 'Italia', coordinates: [14.27, 37.6], shortNote: 'Una isla mediterránea con una historia diferente a la mía.', photo: placeholder, highlight: false, isOrigin: false },
  { id: 'estrasburgo', name: 'Estrasburgo', country: 'Francia', coordinates: [7.75, 48.58], shortNote: 'Una ciudad junto al Rin, cerca de la frontera alemana.', photo: placeholder, highlight: false, isOrigin: false },
  { id: 'tenerife', name: 'Tenerife', country: 'España', coordinates: [-16.63, 28.29], shortNote: 'Otra isla, esta vez con el Teide en el horizonte.', photo: placeholder, highlight: false, isOrigin: false },
  { id: 'marrakech', name: 'Marrakech', country: 'Marruecos', coordinates: [-7.99, 31.63], shortNote: 'Una ciudad para recorrer entre la medina y sus calles nuevas.', photo: placeholder, highlight: false, isOrigin: false },
  { id: 'granada', name: 'Granada', country: 'España', coordinates: [-3.6, 37.18], shortNote: 'Una ciudad al pie de Sierra Nevada.', photo: placeholder, highlight: false, isOrigin: false },
  { id: 'camino', name: 'Camino de Santiago', country: 'España', coordinates: [-8.54, 42.88], shortNote: 'Un camino que termina en Santiago y se recorre paso a paso.', photo: placeholder, highlight: false, isOrigin: false },
  { id: 'milan', name: 'Milán', country: 'Italia', coordinates: [9.19, 45.46], shortNote: 'Una parada en el norte de Italia.', photo: placeholder, highlight: false, isOrigin: false },
  { id: 'dolomitas', name: 'Dolomitas', country: 'Italia', coordinates: [11.85, 46.49], shortNote: 'Montañas del norte de Italia, lejos del paisaje de mi isla.', photo: placeholder, highlight: false, isOrigin: false },
  { id: 'perpinan', name: 'Perpiñán', country: 'Francia', coordinates: [2.9, 42.7], shortNote: 'Una ciudad cerca de los Pirineos y del Mediterráneo.', photo: placeholder, highlight: false, isOrigin: false },
];
