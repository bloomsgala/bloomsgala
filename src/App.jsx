import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Promo from './components/Promo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <SEO />
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Promo />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default App;
