import { useEffect } from 'react';

import Hero from '../components/sections/Hero';
import ServicesSection from '../components/sections/Services';
import PortfolioSection from '../components/sections/PortfolioSection';
// import AboutFounder from '../components/sections/AboutFounder';
import Academy from '../components/sections/Academy';
import Testimonials from '../components/sections/Testimonials';
import ContactBanner from '../components/sections/ContactBanner';

export default function Home() {

  return (
    <main
      className="w-full"
      id="home"
    >
      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
      >
        <Hero />
      </section>

      {/* Makeup Services */}
      <section
        id="services"
        aria-labelledby="services-heading"
      >
        <ServicesSection />
      </section>

      {/* Portfolio / Gallery */}
      <section
        id="portfolio"
        aria-labelledby="portfolio-heading"
      >
        <PortfolioSection />
      </section>

      {/* Founder */}
      {/* 
      <section
        id="about"
        aria-labelledby="about-heading"
      >
        <AboutFounder />
      </section>
      */}

      {/* Academy */}
      <section
        id="academy"
        aria-labelledby="academy-heading"
      >
        <Academy />
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        aria-labelledby="testimonials-heading"
      >
        <Testimonials />
      </section>

      {/* Contact / Booking */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
      >
        <ContactBanner />
      </section>
    </main>
  );
}