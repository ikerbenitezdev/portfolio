'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Capa de movimiento: scroll suave (Lenis) + animaciones (GSAP ScrollTrigger).
// Todo el contenido está en el HTML y visible sin JavaScript; con movimiento reducido no se anima nada.
export default function Motion() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.documentElement.classList.add(reduce ? 'is-still' : 'is-moving');
    if (reduce) return;

    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ lerp: 0.09 });
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Los enlaces internos se desplazan con Lenis.
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;
      const id = link.getAttribute('href')!;
      const target = id === '#top' ? 0 : document.querySelector(id);
      if (target === null) return;
      event.preventDefault();
      lenis.scrollTo(target as HTMLElement | number, { offset: 0 });
      history.replaceState(null, '', id);
    };
    document.addEventListener('click', onClick);

    const ctx = gsap.context(() => {
      // Hero: las letras del nombre suben, las formas aparecen girando.
      gsap.from('.hero__char', { yPercent: 110, duration: 1.1, ease: 'expo.out', stagger: 0.035, delay: 0.1 });
      // Solo escala: la rotación la lleva el scroll y no deben pisarse.
      gsap.from('.hero .shape', { scale: 0, duration: 1, ease: 'back.out(1.7)', stagger: 0.08, delay: 0.45 });
      gsap.from('.hero__foot > *', { y: 30, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08, delay: 0.7 });

      // Hero al hacer scroll: las dos líneas del nombre se separan y las formas flotan a distinta velocidad.
      const heroScroll = { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true };
      gsap.to('.hero__line--first', { xPercent: -8, scrollTrigger: heroScroll });
      gsap.to('.hero__line--last', { xPercent: 8, scrollTrigger: heroScroll });
      gsap.utils.toArray<HTMLElement>('[data-speed]').forEach((el) => {
        const speed = Number(el.dataset.speed);
        // En el hero empiezan a moverse desde su sitio al hacer scroll; en el resto, al entrar en pantalla.
        const inHero = Boolean(el.closest('.hero'));
        gsap.to(el, { y: () => -window.innerHeight * speed * 0.5, rotate: speed * 40, ease: 'none', scrollTrigger: { trigger: el.closest('section'), start: inHero ? 'top top' : 'top bottom', end: 'bottom top', scrub: true } });
      });

      // Esferas del fondo: se desplazan despacio con el scroll de toda la página.
      gsap.utils.toArray<HTMLElement>('[data-orb]').forEach((el) => {
        const k = Number(el.dataset.orb);
        gsap.to(el, { yPercent: k * -70, ease: 'none', scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 1.2 } });
      });

      // Bloques que entran al aparecer.
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, { y: 70, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } });
      });

      // La frase de la isla se enciende palabra a palabra.
      gsap.fromTo('.statement__word', { opacity: 0.14 }, {
        opacity: 1, ease: 'none', stagger: 0.1,
        scrollTrigger: { trigger: '.statement__text', start: 'top 80%', end: 'bottom 45%', scrub: true },
      });

      // Recorrido: en pantallas anchas, la pista de capítulos avanza en horizontal mientras la sección se fija.
      const mm = gsap.matchMedia();
      mm.add('(min-width: 900px)', () => {
        const track = document.querySelector<HTMLElement>('.chapters__track');
        if (!track) return;
        const distance = () => track.scrollWidth - window.innerWidth;
        gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: { trigger: '.chapters', start: 'top top', end: () => `+=${distance()}`, pin: true, scrub: 0.6, invalidateOnRefresh: true, anticipatePin: 1 },
        });
      });
    });

    return () => {
      document.removeEventListener('click', onClick);
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
