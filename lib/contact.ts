import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(1, 'Cuéntame cómo te llamas.').max(100, 'El nombre no puede superar 100 caracteres.'),
  email: z.string().trim().min(1, 'Escribe tu correo electrónico.').email('Escribe un correo electrónico válido.').max(254, 'El correo es demasiado largo.'),
  message: z.string().trim().min(1, 'Escribe un mensaje antes de enviarlo.').max(5000, 'El mensaje no puede superar 5000 caracteres.'),
  website: z.string().max(0, 'No se ha podido validar el formulario.'),
}).strict();

export type ContactInput = z.infer<typeof contactSchema>;
