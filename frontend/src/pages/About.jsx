import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Award,
  Heart,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";

// Founder / Artist Photo URL from ImageKit
const founderPhoto = "https://ik.imagekit.io/asdf5690/Makeup/Arti%20Photo.jpeg?updatedAt=1785827375624";

export default function About() {
  useEffect(() => {
    document.title = "About Arti Sharma - Luxé Beauty Studio";
  }, []);

  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Happy Brides", value: "100+" },
    { label: "Masterclasses Taught", value: "50+" },
    { label: "Client Satisfaction", value: "100%" },
  ];

  const coreValues = [
    {
      title: "Natural Texture Lock",
      desc: "We preserve authentic skin structure and natural glow without unnatural smoothing or heavy artificial filters.",
    },
    {
      title: "International Luxury Brands",
      desc: "Exclusively using tested, skin-safe products from top global brands for 18-hour sweatproof longevity.",
    },
    {
      title: "Hygienic & Sanitized Tools",
      desc: "Strict medical-grade sanitization of brushes, palettes, and sponges before every client session.",
    },
    {
      title: "Tailored Custom Looks",
      desc: "Customized color palettes designed to complement your outfit, skin tone, jewelry, and event lighting.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white font-sans pt-28 pb-20">
      {/* Font Preloads */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        .font-script { font-family: 'Great Vibes', cursive; }
        .font-serif-custom { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* Gold Ambient Glow Backgrounds */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-200px] top-[-100px] h-[600px] w-[600px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />
        <div className="absolute right-[-150px] top-1/2 h-[600px] w-[600px] rounded-full bg-[#D4AF37]/10 blur-[200px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 lg:px-12 z-10">
        
        {/* ========================================= */}
        {/* HERO SECTION: FOUNDER PROFILE & BIO */}
        {/* ========================================= */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left: Founder Image with Luxury Border */}
          <motion.div variants={fadeUp} className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[480px] lg:max-w-none">
              {/* Gold Decorative Back Frame */}
              <div className="absolute -inset-3 rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 -rotate-2 pointer-events-none" />

              {/* Main Photo Card */}
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                <img
                  src={founderPhoto}
                  alt="Arti Sharma - Founder & Celebrity Makeup Artist"
                  className="w-full h-[520px] sm:h-[600px] object-cover object-top"
                />

                {/* Vignette Overlays */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#050505]/80 to-transparent" />

                {/* Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl border border-[#D4AF37]/40 bg-black/80 backdrop-blur-md flex items-center justify-between">
                  <div>
                    <h3 className="font-serif-custom text-lg text-white font-medium">
                      Arti Sharma
                    </h3>
                    <p className="text-[11px] text-[#D4AF37] uppercase tracking-widest">
                      FOUNDER & MASTER ARTIST
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    <Star size={14} className="fill-[#D4AF37]" />
                    <Star size={14} className="fill-[#D4AF37]" />
                    <Star size={14} className="fill-[#D4AF37]" />
                    <Star size={14} className="fill-[#D4AF37]" />
                    <Star size={14} className="fill-[#D4AF37]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Biography Text */}
          <motion.div variants={fadeUp} className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-black/60 px-5 py-2 text-xs text-[#D4AF37] backdrop-blur-md tracking-[0.2em] uppercase font-semibold mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              MEET THE ARTIST
            </div>

            <h1 className="font-serif-custom text-4xl sm:text-6xl font-light text-white tracking-tight leading-[1.1]">
              Crafting Timeless <br />
              <span className="text-[#D4AF37] italic font-normal">Elegance & Confidence</span>
            </h1>

            <p className="mt-6 text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              Welcome to Luxé Beauty Studio. Founded by <strong className="text-white font-medium">Arti Sharma</strong>, our studio is dedicated to delivering flawless bridal and celebrity makeup artistry. With over 5 years of professional experience, Arti believes that true beauty lies in enhancing your natural facial structure rather than masking it.
            </p>

            <p className="mt-4 text-gray-400 text-sm leading-relaxed font-light">
              From traditional North Indian royal brides to contemporary high-fashion editorial shoots, every look is meticulously customized using high-definition airbrush techniques and skin-loving luxury products that last throughout your special event.
            </p>

            {/* Quote Box */}
            <div className="mt-8 p-5 rounded-xl border-l-2 border-[#D4AF37] bg-white/[0.02] border-y border-r border-white/5">
              <p className="font-script text-2xl text-[#D4AF37] leading-snug">
                "Makeup is not a mask that covers up your beauty; it's a weapon that helps you express who you are from within."
              </p>
              <span className="block mt-2 text-[10px] text-gray-400 uppercase tracking-widest">
                — Arti Sharma, Founder
              </span>
            </div>

            {/* CTA Button Row */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#D4AF37] px-8 text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] bg-black/40"
              >
                BOOK A CONSULTATION
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-8 text-xs font-semibold tracking-[0.2em] text-gray-300 uppercase transition-all duration-300 hover:border-white/40 hover:text-white"
              >
                VIEW PORTFOLIO
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* ========================================= */}
        {/* STATS COUNTER BAR */}
        {/* ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 pt-10 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center relative">
                {idx < stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-[1px] bg-white/10" />
                )}
                <h3 className="font-serif-custom text-4xl sm:text-5xl text-[#D4AF37] font-normal">
                  {stat.value}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-300 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ========================================= */}
        {/* WHY CHOOSE US / PHILOSOPHY GRID */}
        {/* ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-28"
        >
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              OUR STANDARDS
            </span>
            <h2 className="font-serif-custom text-3xl sm:text-5xl text-white font-light mt-2">
              Why Choose <span className="text-[#D4AF37] italic font-normal">Luxé Beauty?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl border border-white/10 bg-[#0a0a0a] hover:border-[#D4AF37]/50 transition-all duration-300 group"
              >
                <div className="h-12 w-12 rounded-full border border-[#D4AF37] bg-black flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors mb-5">
                  <CheckCircle2 size={22} />
                </div>
                <h3 className="font-serif-custom text-xl text-white font-medium mb-3">
                  {value.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}