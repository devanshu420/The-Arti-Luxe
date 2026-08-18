import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Classes from './pages/Classes';
import Contact from './pages/Contact';
import Preloader from './components/ui/Preloader';
import CursorSparkles from './components/ui/CursorSparkles';
import GoldSparklesBackground from './components/ui/GoldSparklesBackground';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <CursorSparkles />

      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <div className="relative flex flex-col min-h-screen bg-[#080808] text-white">
          <GoldSparklesBackground />
          <Navbar />
          <main className="relative z-10 flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}