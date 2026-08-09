import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
} from "lucide-react";

function PinterestIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.372 0 0 5.372 0 12c0 4.991 3.055 9.256 7.394 11.06-.103-.94-.196-2.38.04-3.406.215-.925 1.39-5.9 1.39-5.9s-.355-.71-.355-1.76c0-1.649.956-2.881 2.145-2.881 1.01 0 1.497.759 1.497 1.668 0 1.016-.647 2.535-.982 3.944-.28 1.175.593 2.13 1.758 2.13 2.11 0 3.732-2.227 3.732-5.439 0-2.847-2.046-4.837-4.967-4.837-3.384 0-5.369 2.538-5.369 5.16 0 1.02.393 2.115.884 2.71a.357.357 0 0 1 .082.342c-.09.376-.293 1.175-.333 1.34-.053.216-.173.262-.398.158-1.49-.695-2.42-2.877-2.42-4.63 0-3.767 2.738-7.226 7.893-7.226 4.144 0 7.367 2.953 7.367 6.893 0 4.112-2.594 7.421-6.195 7.421-1.21 0-2.348-.628-2.735-1.372l-.744 2.835c-.27 1.03-1.003 2.319-1.495 3.108C9.63 23.867 10.8 24 12 24c6.628 0 12-5.372 12-12S18.628 0 12 0z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();

  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Classes", href: "/classes" },
    { label: "Contact", href: "/contact" },
  ];

  const services = [
    "Bridal Makeup",
    "Party Makeup",
    "HD Makeup",
    "Airbrush Makeup",
    "Hair Styling",
    "Saree Draping",
  ];

  const classes = [
    "Makeup Artistry",
    "Self Grooming",
    "Professional Makeup",
    "Personalized Training",
    "Bridal Master Classes",
    "Groom Makeup",
  ];

  return (
    <footer className="relative overflow-hidden border-t border-[#D4AF37]/20 bg-[#050505] text-white font-sans">
      {/* Font Preloads */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        .font-serif-custom { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* BG Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : { scale: [1, 1.08, 1], opacity: [0.12, 0.24, 0.12] }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-10%] top-0 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-3xl"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : { y: [0, 14, 0], opacity: [0.08, 0.18, 0.08] }
          }
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-10%] bottom-0 h-64 w-64 rounded-full bg-[#D4AF37]/8 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14 z-10">
        {/* Main Grid Container (2 Columns on Mobile, 2 on Tablet, 5 on Large Screens) */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-2 xl:grid-cols-5">
          
          {/* Brand Info Column (Full width on mobile) */}
          <div className="col-span-2 xl:col-span-1 border-b border-white/10 pb-4 xl:border-none xl:pb-0">
            <Link to="/" className="inline-flex items-center gap-2.5 shrink-0">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-md bg-[#D4AF37] shadow-[0_0_18px_rgba(212,175,55,0.4)]">
                <span className="text-black text-sm sm:text-lg font-bold">𝓐𝓢</span>
              </div>
              <span className="font-serif-custom text-base sm:text-xl font-bold tracking-widest text-[#D4AF37] uppercase">
                𝖳𝖧𝖤 ARTI 𝖫𝖴𝖷𝖤
              </span>
            </Link>

            <p className="mt-2.5 max-w-sm text-[11px] sm:text-sm leading-relaxed text-gray-300 font-light">
              Arti Makeup Artist offers premium bridal artistry, luxury event
              makeup, and professional academy training.
            </p>

            {/* Social Links */}
            <div className="mt-3.5 flex items-center gap-2.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-black/60 text-gray-300 transition-all hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                aria-label="Instagram"
              >
                <Instagram size={14} className="transition-transform group-hover:scale-110" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-black/60 text-gray-300 transition-all hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                aria-label="Facebook"
              >
                <Facebook size={14} className="transition-transform group-hover:scale-110" />
              </a>

              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-black/60 text-gray-300 transition-all hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                aria-label="Pinterest"
              >
                <PinterestIcon className="h-3.5 w-3.5 sm:h-[15px] sm:w-[15px] transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-span-1">
            <h4 className="text-[11px] sm:text-sm font-semibold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#D4AF37]">
              Quick Links
            </h4>
            <ul className="mt-2.5 sm:mt-4 space-y-1.5 sm:space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-1.5 text-[11px] sm:text-sm text-gray-300 font-light transition-colors hover:text-[#D4AF37]"
                  >
                    <span className="h-px w-2 sm:w-3 bg-[#D4AF37]/40 transition-all group-hover:w-4 group-hover:bg-[#D4AF37]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="col-span-1">
            <h4 className="text-[11px] sm:text-sm font-semibold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#D4AF37]">
              Our Services
            </h4>
            <ul className="mt-2.5 sm:mt-4 space-y-1.5 sm:space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="group inline-flex items-center gap-1.5 text-[11px] sm:text-sm text-gray-300 font-light transition-colors hover:text-[#D4AF37]"
                  >
                    <span className="h-px w-2 sm:w-3 bg-[#D4AF37]/40 transition-all group-hover:w-4 group-hover:bg-[#D4AF37]" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Classes Column */}
          <div className="col-span-1">
            <h4 className="text-[11px] sm:text-sm font-semibold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#D4AF37]">
              Classes Offered
            </h4>
            <ul className="mt-2.5 sm:mt-4 space-y-1.5 sm:space-y-2.5">
              {classes.map((cls) => (
                <li key={cls}>
                  <Link
                    to="/classes"
                    className="group inline-flex items-center gap-1.5 text-[11px] sm:text-sm text-gray-300 font-light transition-colors hover:text-[#D4AF37]"
                  >
                    <span className="h-px w-2 sm:w-3 bg-[#D4AF37]/40 transition-all group-hover:w-4 group-hover:bg-[#D4AF37]" />
                    {cls}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="col-span-1">
            <h4 className="text-[11px] sm:text-sm font-semibold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#D4AF37]">
              Contact
            </h4>

            <div className="mt-2.5 sm:mt-4 space-y-2 sm:space-y-3 text-[11px] sm:text-sm font-light text-gray-300">
              <div className="flex gap-2 sm:gap-3 items-center">
                <Phone size={13} className="shrink-0 text-[#D4AF37]" />
                <a
                  href="tel:+918960507259"
                  className="transition-colors hover:text-[#D4AF37]"
                >
                  +91 8960507259
                </a>
              </div>

              <div className="flex gap-2 sm:gap-3 items-center">
                <Mail size={13} className="shrink-0 text-[#D4AF37]" />
                <a
                  href="mailto:arati.sharma192004@gmail.com"
                  className="transition-colors hover:text-[#D4AF37] truncate"
                >
                  arati.sharma192004@gmail.com
                </a>
              </div>

              <div className="flex gap-2 sm:gap-3 items-start">
                <MapPin size={13} className="mt-0.5 shrink-0 text-[#D4AF37]" />
                <p>Kapashera, New Delhi, 110037</p>
              </div>

              <div className="flex gap-2 sm:gap-3 items-start">
                <Clock size={13} className="mt-0.5 shrink-0 text-[#D4AF37]" />
                <p>Mon - Sun: 9 AM - 8 PM</p>
              </div>
            </div>

            <Link
              to="/contact"
              className="mt-3 inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold tracking-wider text-[#D4AF37] uppercase transition-transform hover:translate-x-1"
            >
              Get In Touch
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 sm:mt-10 border-t border-white/10 pt-4 sm:pt-5">
          <div className="flex flex-col gap-2.5 sm:gap-3 md:flex-row md:items-center md:justify-between text-center md:text-left">
            <p className="text-[10px] sm:text-xs text-gray-400 font-light">
              © {currentYear} Arti Beauty Makeup Studio. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] sm:text-xs text-gray-400 font-light">
              <a href="#" className="transition-colors hover:text-[#D4AF37]">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-[#D4AF37]">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}