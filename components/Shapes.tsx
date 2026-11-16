// Formas propias del portfolio: el sol, la isla (media luna), el anillo del mar, la ola y la píldora.
type ShapeProps = { className?: string; speed?: number };

export function Sun({ className = '', speed }: ShapeProps) {
  return <span className={`shape shape--sun ${className}`} data-speed={speed} aria-hidden="true" />;
}

export function Island({ className = '', speed }: ShapeProps) {
  return <span className={`shape shape--island ${className}`} data-speed={speed} aria-hidden="true" />;
}

export function Ring({ className = '', speed }: ShapeProps) {
  return <span className={`shape shape--ring ${className}`} data-speed={speed} aria-hidden="true" />;
}

export function Pill({ className = '', speed }: ShapeProps) {
  return <span className={`shape shape--pill ${className}`} data-speed={speed} aria-hidden="true" />;
}

export function Wave({ className = '', speed }: ShapeProps) {
  return (
    <span className={`shape shape--wave ${className}`} data-speed={speed} aria-hidden="true">
      <svg viewBox="0 0 120 40"><path d="M4 26c10-14 22-14 32 0s22 14 32 0 22-14 32 0 12 8 16 4" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round" /></svg>
    </span>
  );
}

export function Star({ className = '', speed }: ShapeProps) {
  return (
    <span className={`shape shape--star ${className}`} data-speed={speed} aria-hidden="true">
      <svg viewBox="0 0 100 100"><path d="M50 0c4 30 16 42 50 50-34 8-46 20-50 50-4-30-16-42-50-50 34-8 46-20 50-50z" fill="currentColor" /></svg>
    </span>
  );
}
