import Header from './Header';
import Footer from './Footer';
import Motion from './Motion';
import Orbs from './Orbs';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Statement from './sections/Statement';
import Marquee from './sections/Marquee';
import Chapters from './sections/Chapters';
import About from './sections/About';
import Contact from './sections/Contact';

export default function PortfolioLanding() {
  return (
    <>
      <Orbs />
      <Header />
      <main id="contenido">
        <span id="top" />
        <Hero />
        <Projects />
        <Statement />
        <Marquee />
        <Chapters />
        <About />
        <Contact />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
