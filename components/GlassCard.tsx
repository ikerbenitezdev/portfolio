import type { ComponentPropsWithoutRef } from 'react';

export default function GlassCard({ className = '', ...props }: ComponentPropsWithoutRef<'article'>) {
  return <article className={`glass-card ${className}`} {...props} />;
}
