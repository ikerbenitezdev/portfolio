'use client';

import { useState, type FormEvent } from 'react';
import { Activity, Github, Instagram, Linkedin, Send } from 'lucide-react';
import GlassCard from '../GlassCard';
import { contactContent, socialLinks, type SocialLink } from '../../data/social';
import { contactSchema, type ContactInput } from '../../lib/contact';

const icons = { GitHub: Github, LinkedIn: Linkedin, Instagram, Strava: Activity } satisfies Record<SocialLink['name'], typeof Github>;
type FieldErrors = Partial<Record<keyof ContactInput, string[]>>;
const initialForm: ContactInput = { name: '', email: '', message: '', website: '' };
const inputClass = 'mt-2 w-full rounded-2xl border border-slate-300 bg-white/80 px-4 py-3 text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise-700';

export default function Contact() {
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      setStatus('idle');
      return;
    }
    setErrors({});
    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      });
      if (!response.ok) {
        setStatus('error');
        return;
      }
      setValues(initialForm);
      setStatus('success');
    } catch (error) {
      console.error('Contact request failed:', error);
      setStatus('error');
    }
  }

  return (
    <section id="contacto" aria-labelledby="contact-title" className="px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-turquoise-700">{contactContent.label}</p>
        <h2 id="contact-title" className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-6xl">{contactContent.title}</h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">{contactContent.description}</p>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <GlassCard className="p-6 sm:p-9">
            <form noValidate onSubmit={submit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="text-sm font-bold text-ink">{contactContent.name}</label>
                <input id="contact-name" name="name" autoComplete="name" maxLength={100} required value={values.name} onChange={(event) => setValues({ ...values, name: event.target.value })} aria-invalid={Boolean(errors.name)} aria-describedby="contact-name-error" className={inputClass} />
                <p id="contact-name-error" aria-live="polite" className="mt-1 text-sm text-red-700">{errors.name?.[0]}</p>
              </div>
              <div>
                <label htmlFor="contact-email" className="text-sm font-bold text-ink">{contactContent.email}</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} required value={values.email} onChange={(event) => setValues({ ...values, email: event.target.value })} aria-invalid={Boolean(errors.email)} aria-describedby="contact-email-error" className={inputClass} />
                <p id="contact-email-error" aria-live="polite" className="mt-1 text-sm text-red-700">{errors.email?.[0]}</p>
              </div>
              <div>
                <label htmlFor="contact-message" className="text-sm font-bold text-ink">{contactContent.message}</label>
                <textarea id="contact-message" name="message" rows={6} maxLength={5000} required value={values.message} onChange={(event) => setValues({ ...values, message: event.target.value })} aria-invalid={Boolean(errors.message)} aria-describedby="contact-message-error" className={inputClass} />
                <p id="contact-message-error" aria-live="polite" className="mt-1 text-sm text-red-700">{errors.message?.[0]}</p>
              </div>
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="contact-website">No rellenes este campo</label>
                <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => setValues({ ...values, website: event.target.value })} />
              </div>
              <button type="submit" disabled={status === 'sending'} className="inline-flex min-h-12 items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-turquoise-700">
                {status === 'sending' ? contactContent.sending : contactContent.submit}<Send aria-hidden="true" size={16} />
              </button>
              <p role="status" aria-live="polite" className={`text-sm ${status === 'error' ? 'text-red-700' : 'text-turquoise-700'}`}>{status === 'success' ? contactContent.success : status === 'error' ? contactContent.error : errors.website?.[0]}</p>
            </form>
          </GlassCard>
          <GlassCard className="h-fit p-6 sm:p-9">
            <h3 className="font-display text-2xl font-semibold text-ink">{contactContent.social}</h3>
            <ul className="mt-5 space-y-3">
              {socialLinks.filter((social) => social.url).map((social) => {
                const Icon = icons[social.name];
                return <li key={social.name}>{social.url && (
                  <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center gap-3 rounded-2xl border border-turquoise-700/10 bg-white/70 px-4 py-3 text-sm font-bold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise-700"><Icon aria-hidden="true" size={19} />{social.name} <span aria-hidden="true" className="ml-auto">↗</span></a>
                )}</li>;
              })}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
