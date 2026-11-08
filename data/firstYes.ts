export type FirstYesContent = {
  label: string;
  title: string;
  paragraphs: string[];
  learningTitle: string;
  learnings: string[];
  doubt: string;
  affirmation: string;
  amounts?: {
    show: boolean;
    project: string;
    maintenance: string;
  };
};

export const firstYes: FirstYesContent = {
  label: 'La primera vez',
  title: 'El sí con miedo',
  paragraphs: [
    'Cuando mi hermano me propuso crear la web de torneos de fútbol para su empresa, me hizo mucha ilusión. Pero también tenía nervios: ¿y si no podía cumplir mi palabra?',
    'Estuve a punto de decir que no. Al final entendí que era mi momento de demostrarme que podía, aunque tuviera cosas que aprender por el camino. Dije que sí, me puse manos a la obra y salió bien.',
  ],
  learningTitle: 'Lo que aprendí por el camino',
  learnings: [
    'Crear un formulario de inscripción para los equipos.',
    'Preparar una plantilla de email para las comunicaciones.',
    'Crear cuentas de correo para la empresa.',
    'Organizar el mantenimiento anual de la web.',
  ],
  doubt: '¿Y si no puedo?',
  affirmation: 'Lo hice.',
  amounts: {
    show: false,
    project: '500 € por el proyecto',
    maintenance: '300 € al año por mantenimiento',
  },
};
