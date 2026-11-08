import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Iker Benítez: de isla en isla';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', height: '100%', padding: '80px', color: '#16353c', background: 'linear-gradient(120deg, #d8f6f1, #e1f3fc, #fbf2df)' }}>
      <div style={{ fontSize: 28, letterSpacing: 4, textTransform: 'uppercase', color: '#08756e' }}>Iker Benítez · De isla en isla</div>
      <div style={{ marginTop: 35, fontSize: 66, fontWeight: 700, lineHeight: 1.15, maxWidth: 950 }}>Nací en una isla. Aprendí que crecer es cruzar el agua.</div>
      <div style={{ marginTop: 35, fontSize: 27 }}>Un recorrido de aprendizaje, proyectos y nuevas islas.</div>
    </div>,
    size,
  );
}
