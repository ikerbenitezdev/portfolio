import { contactSchema } from '../../../lib/contact';

export const runtime = 'nodejs';
const maxBodyBytes = 16_384;

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get('content-length'));
  if (Number.isFinite(contentLength) && contentLength > maxBodyBytes) {
    return Response.json({ error: 'El mensaje es demasiado largo.' }, { status: 413 });
  }
  if (!request.body) return Response.json({ error: 'Faltan los datos del formulario.' }, { status: 400 });

  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let size = 0;
  let raw = '';
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBodyBytes) {
        await reader.cancel();
        return Response.json({ error: 'El mensaje es demasiado largo.' }, { status: 413 });
      }
      raw += decoder.decode(value, { stream: true });
    }
    raw += decoder.decode();
  } catch {
    return Response.json({ error: 'No se ha podido leer el mensaje.' }, { status: 400 });
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return Response.json({ error: 'El formato del mensaje no es válido.' }, { status: 400 });
  }
  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return Response.json({ error: 'Revisa los datos del formulario.', fields: result.error.flatten().fieldErrors }, { status: 400 });
  }

  const { RESEND_API_KEY, CONTACT_FROM, CONTACT_TO } = process.env;
  if (!RESEND_API_KEY || !CONTACT_FROM || !CONTACT_TO) {
    console.error('Contact email is not configured.');
    return Response.json({ error: 'El formulario no está disponible en este momento.' }, { status: 503 });
  }

  let response: Response;
  try {
    response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: [CONTACT_TO],
        reply_to: result.data.email,
        subject: 'Nuevo mensaje desde el portfolio',
        text: `Nombre: ${result.data.name}\nCorreo: ${result.data.email}\n\n${result.data.message}`,
      }),
      signal: AbortSignal.timeout(10000),
    });
  } catch (error) {
    console.error('Contact email request failed:', error instanceof Error ? error.message : 'unknown error');
    return Response.json({ error: 'No se ha podido enviar el mensaje.' }, { status: 502 });
  }
  if (!response.ok) {
    console.error('Contact email provider returned status', response.status);
    return Response.json({ error: 'No se ha podido enviar el mensaje.' }, { status: 502 });
  }
  return Response.json({ ok: true });
}
