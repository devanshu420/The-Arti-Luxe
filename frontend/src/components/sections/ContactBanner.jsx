import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircleMore, Sparkles, ArrowRight } from "lucide-react";

export default function ContactBanner() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-[#D4AF37]/20 bg-[#050505] text-white font-sans py-16 sm:py-20 lg:py-24">
      {/* Font Preloads */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        .font-serif-custom { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* Gold Ambient Glow Backgrounds */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.12, 0.25, 0.12] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-10%] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#D4AF37]/12 blur-3xl"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, -16, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-8%] top-10 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] px-6 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16 text-center shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-xl"
        >
          {/* Subtle Background Radial Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

          {/* Icon Badge */}
          <motion.div
            animate={shouldReduceMotion ? {} : { rotate: [0, 6, 0, -6, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto flex h-13 w-13 items-center justify-center rounded-full border border-[#D4AF37] bg-black text-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.2)]"
          >
            <Sparkles className="h-6 w-6" />
          </motion.div>

          {/* Heading */}
          <h2 className="relative mt-5 font-serif-custom text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white">
            Ready to Transform Your{" "}
            <span className="text-[#D4AF37] italic font-normal">Look?</span>
          </h2>

          {/* Description */}
          <p className="relative mx-auto mt-4 max-w-xl text-xs sm:text-sm lg:text-base leading-relaxed text-gray-300 font-light">
            Let’s discuss your bridal makeup, event styling, or professional academy journey. Luxé Beauty Studio is here to create a tailored luxury experience for you.
          </p>

          {/* Buttons */}
          <div className="relative mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Contact Page Button */}
            <Link to="/contact" className="w-full sm:w-auto">
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <button className="group flex w-full sm:w-auto items-center cursor-pointer justify-center gap-2 rounded-full border border-[#D4AF37] bg-[#D4AF37] px-8 py-3 text-xs font-semibold tracking-[0.2em] text-black uppercase transition-all duration-300 hover:bg-[#D4AF37]/90 hover:shadow-[0_0_24px_rgba(212,175,55,0.4)]">
                  <span>GET IN TOUCH</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </motion.div>
            </Link>

            {/* WhatsApp CTA Button */}
            <a
              href="https://wa.me/918960507259"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <button className="group flex w-full sm:w-auto items-center cursor-pointer justify-center gap-2 rounded-full border border-[#D4AF37] bg-black/60 px-8 py-3 text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_24px_rgba(212,175,55,0.3)]">
                  <MessageCircleMore className="h-4 w-4" />
                  <span>CHAT ON WHATSAPP</span>
                </button>
              </motion.div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}