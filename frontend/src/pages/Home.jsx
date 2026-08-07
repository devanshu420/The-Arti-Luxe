import { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import ServicesSection from '../components/sections/Services';
import PortfolioSection from '../components/sections/PortfolioSection';
import AboutFounder from '../components/sections/AboutFounder';
import Academy from '../components/sections/Academy';
import Testimonials from '../components/sections/Testimonials';
import ContactBanner from '../components/sections/ContactBanner';

export default function Home() {
  useEffect(() => {
    document.title = 'Arti Makeup Artist';
  }, []);

  return (
    <main className="w-full">
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      {/* <AboutFounder /> */}
      <Academy />
      <Testimonials />
      <ContactBanner />
    </main>
  );
}
