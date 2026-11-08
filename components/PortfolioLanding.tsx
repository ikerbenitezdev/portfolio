import Hero from './sections/Hero';
import Timeline from './sections/Timeline';
import FirstYes from './sections/FirstYes';
import Projects from './sections/Projects';
import TravelMap from './sections/TravelMap';
import Movement from './sections/Movement';
import Now from './sections/Now';
import Contact from './sections/Contact';
import Footer from './Footer';
import Header from './Header';

export default function PortfolioLanding() {
  return (
    <>
    <a href="#contenido" className="skip-link">Saltar al contenido</a>
    <Header />
    <main id="contenido" tabIndex={-1}>
      <Hero />
      <Timeline />
      <FirstYes />
      <Projects />
      <TravelMap />
      <Movement />
      <Now />
      <Contact />
    </main>
    <Footer />
    </>
  );
}
