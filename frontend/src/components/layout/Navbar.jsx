import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "SERVICES", href: "/services" },
    { label: "PORTFOLIO", href: "/portfolio" },
    { label: "CLASSES", href: "/classes" },
    { label: "ABOUT", href: "/about" },
  ];

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#050505]/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] border-b border-[#D4AF37]/20 py-1"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-2"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          
          {/* Logo */}
          <motion.div>
            <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
              <motion.img
                src="https://ik.imagekit.io/asdf5690/Makeup/Logo.png"
                alt="Arti Luxe Logo"
                className="h-[52px] sm:h-[80px] w-auto object-contain drop-shadow-[0_0_12px_rgba(212,175,55,0.3)]"
              />
              <span className="hidden sm:block font-serif text-xl font-bold text-[#D4AF37] tracking-widest uppercase">
                𝖳𝖧𝖤 ARTI 𝖫𝖴𝖷𝖤
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => {
              const active = location.pathname === link.href;

              return (
                <motion.div
                  key={link.href}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 * index, duration: 0.35 }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    to={link.href}
                    className={`relative text-xs font-semibold tracking-[0.2em] uppercase transition-colors ${
                      active
                        ? "text-[#D4AF37]"
                        : "text-gray-200 hover:text-[#D4AF37]"
                    } group`}
                  >
                    {link.label}
                    <motion.span
                      layoutId="navUnderline"
                      className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F6E27A] ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="hidden sm:inline-flex"
          >
            <Link
              to="/contact"
              className="group relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-full border border-[#D4AF37] px-6 py-2.5 text-xs font-semibold tracking-[0.15em] text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_24px_rgba(212,175,55,0.4)] bg-black/40 backdrop-blur-sm"
            >
              <span className="relative z-10">GET IN TOUCH</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 text-[#D4AF37]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="md:hidden pb-4 overflow-hidden"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.06,
                    },
                  },
                }}
                className="rounded-2xl border border-[#D4AF37]/30 bg-[#0a0a0a]/95 backdrop-blur-2xl overflow-hidden shadow-[0_16px_50px_rgba(0,0,0,0.8)]"
              >
                {navLinks.map((link) => {
                  const active = location.pathname === link.href;

                  return (
                    <motion.div
                      key={link.href}
                      variants={{
                        hidden: { opacity: 0, x: -12 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.25 }}
                    >
                      <Link
                        to={link.href}
                        className={`block px-5 py-3.5 text-xs font-medium tracking-[0.15em] uppercase border-b border-white/5 last:border-b-0 transition-colors ${
                          active
                            ? "text-[#D4AF37] font-semibold bg-[#D4AF37]/10"
                            : "text-gray-200 hover:text-[#D4AF37]"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.25 }}
                  className="p-4"
                >
                  <Link
                    to="/contact"
                    className="group relative block overflow-hidden rounded-xl border border-[#D4AF37] bg-[#111111] px-5 py-3 text-center text-xs font-semibold tracking-[0.15em] text-[#D4AF37] shadow-[0_0_26px_rgba(212,175,55,0.2)] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="relative z-10 inline-flex items-center justify-center gap-2 uppercase">
                      GET IN TOUCH
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}