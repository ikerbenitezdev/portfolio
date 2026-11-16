'use client';

import { useState, type FormEvent } from 'react';
import { contactContent as c } from '../../data/social';
import { Pill, Star } from '../Shapes';

type Field = 'name' | 'email' | 'message';
type Status = 'idle' | 'sending' | 'sent' | 'failed';

export default function Contact() {
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const next: Partial<Record<Field, string>> = {};
    if (!data.name?.trim()) next.name = c.errors.name;
    if (!/^\S+@\S+\.\S+$/.test(data.email?.trim() ?? '')) next.email = c.errors.email;
    if (!data.message?.trim()) next.message = c.errors.message;
    setErrors(next);
    const first = (Object.keys(next) as Field[])[0];
    if (first) { (form.elements.namedItem(first) as HTMLElement).focus(); return; }

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: data.name, email: data.email, message: data.message, website: data.website ?? '' }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('failed');
    }
  }

  const field = (name: Field, label: string, input: JSX.Element) => (
    <div className={`field${name === 'message' ? ' field--full' : ''}`}>
      <label htmlFor={`f-${name}`}>{label}</label>
      {input}
      {errors[name] && <p className="field__error" id={`f-${name}-err`}>{errors[name]}</p>}
    </div>
  );
  const aria = (name: Field) => ({ 'aria-invalid': errors[name] ? true : undefined, 'aria-describedby': errors[name] ? `f-${name}-err` : undefined });

  return (
    <section className="contact" id="contacto" aria-labelledby="contacto-title">
      <Star className="contact__star" speed={0.5} />
      <Pill className="contact__pill" speed={-0.4} />
      <div className="contact__head" data-reveal>
        <span className="label label--dark">{c.label}</span>
        <h2 id="contacto-title" className="display">{c.title}</h2>
        <p className="lead">{c.text}</p>
      </div>
      <form className="contact__form" onSubmit={onSubmit} noValidate data-reveal>
        {field('name', c.name, <input id="f-name" name="name" type="text" autoComplete="name" maxLength={100} {...aria('name')} />)}
        {field('email', c.email, <input id="f-email" name="email" type="email" autoComplete="email" maxLength={254} {...aria('email')} />)}
        {field('message', c.message, <textarea id="f-message" name="message" rows={5} maxLength={5000} {...aria('message')} />)}
        <div className="field--trap" aria-hidden="true">
          <label htmlFor="f-website">Web</label>
          <input id="f-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="contact__submit">
          <button className="pill-button pill-button--ink" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? c.sending : c.submit}<span aria-hidden="true">→</span>
          </button>
          <p className="contact__status" role="status">
            {status === 'sent' && c.sent}
            {status === 'failed' && c.failed}
          </p>
        </div>
      </form>
    </section>
  );
}
