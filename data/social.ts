export type SocialLink = { name: string; url: string };

// Añade GitHub o Instagram aquí cuando tengas la URL: solo se muestran los perfiles con enlace.
export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ikerbenitez/' },
  { name: 'Strava', url: 'https://strava.app.link/JCswappkU7b' },
  { name: 'Hevy', url: 'https://hevy.com/user/ikerbenitez' },
];

export const contactContent = {
  label: 'Contacto',
  title: 'Cuéntame en qué isla estás',
  text: 'Si estás empezando, dudas de ti o tienes una idea de web, escríbeme. Te contesto yo.',
  name: 'Nombre',
  email: 'Correo electrónico',
  message: 'Mensaje',
  errors: {
    name: 'Escribe cómo te llamas.',
    email: 'Escribe un correo válido, como nombre@correo.es.',
    message: 'Escribe tu mensaje antes de enviarlo.',
  },
  submit: 'Enviar mensaje',
  sending: 'Enviando…',
  sent: '¡Mensaje enviado! Te contesto a tu correo.',
  failed: 'No se ha podido enviar. Tu texto sigue aquí: inténtalo de nuevo.',
};

export const footerContent = {
  tagline: 'Webs para negocios pequeños, desde Barcelona.',
  madeWith: 'Hecho con Next.js, GSAP y Lenis',
  credits: 'Foto de Barcelona vía Wikimedia Commons',
};
