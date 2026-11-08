export type SocialLink = {
  name: 'GitHub' | 'LinkedIn' | 'Instagram' | 'Strava';
  url?: string;
};

// TODO: confirmar los perfiles de GitHub e Instagram.
export const socialLinks: SocialLink[] = [
  { name: 'GitHub' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ikerbenitez/' },
  { name: 'Instagram' },
  { name: 'Strava', url: 'https://strava.app.link/JCswappkU7b' },
];

export const contactContent = {
  label: 'Hablemos',
  title: 'Si estás cruzando tu propia isla, escríbeme.',
  description: 'Si quieres compartir una idea, una duda o simplemente saludar, estaré encantado de leerte.',
  name: 'Nombre',
  email: 'Correo electrónico',
  message: 'Mensaje',
  submit: 'Enviar mensaje',
  sending: 'Enviando…',
  success: '¡Gracias por escribirme! Tu mensaje está en camino.',
  error: 'No he podido enviar tu mensaje. Inténtalo de nuevo más tarde.',
  social: 'Encuéntrame también en',
  footer: 'De isla en isla, seguimos aprendiendo.',
  backToTop: 'Volver arriba ↑',
};
