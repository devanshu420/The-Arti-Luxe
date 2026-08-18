import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

// Royal Floral Corner Ornament SVG
const RoyalGoldFloral = ({ className }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-36 h-36 sm:w-56 sm:h-56 md:w-64 md:h-64 ${className}`}
  >
    <defs>
      <linearGradient id="floralGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF4D0" />
        <stop offset="40%" stopColor="#D4AF37" />
        <stop offset="85%" stopColor="#AA7C11" />
        <stop offset="100%" stopColor="#664906" />
      </linearGradient>
    </defs>
    {/* Main Outer Filigree Curves */}
    <path
      d="M10 10C60 10 100 50 100 100C100 50 140 10 190 10C190 60 150 100 100 100C150 100 190 140 190 190C140 190 100 150 100 100C100 150 60 190 10 190C10 140 50 100 100 100C50 100 10 60 10 10Z"
      stroke="url(#floralGoldGrad)"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.45"
    />
    {/* Blooming Petals */}
    <path
      d="M20 20Q100 40 100 100Q40 100 20 20Z"
      fill="url(#floralGoldGrad)"
      opacity="0.25"
    />
    <path
      d="M180 20Q100 40 100 100Q160 100 180 20Z"
      fill="url(#floralGoldGrad)"
      opacity="0.25"
    />
    <path
      d="M180 180Q100 160 100 100Q160 100 180 180Z"
      fill="url(#floralGoldGrad)"
      opacity="0.25"
    />
    <path
      d="M20 180Q100 160 100 100Q40 100 20 180Z"
      fill="url(#floralGoldGrad)"
      opacity="0.25"
    />
    {/* Center Core Flower */}
    <circle cx="100" cy="100" r="16" stroke="url(#floralGoldGrad)" strokeWidth="1.8" />
    <circle cx="100" cy="100" r="7" fill="url(#floralGoldGrad)" />
    {/* Delicates Vines & Leaves */}
    <path
      d="M100 20C85 45 85 75 100 100C115 75 115 45 100 20Z"
      stroke="url(#floralGoldGrad)"
      strokeWidth="1.2"
    />
    <path
      d="M100 180C85 155 85 125 100 100C115 155 115 125 100 180Z"
      stroke="url(#floralGoldGrad)"
      strokeWidth="1.2"
    />
    <path
      d="M20 100C45 85 75 85 100 100C75 115 45 115 20 100Z"
      stroke="url(#floralGoldGrad)"
      strokeWidth="1.2"
    />
    <path
      d="M180 100C155 85 125 85 100 100C125 115 155 115 180 100Z"
      stroke="url(#floralGoldGrad)"
      strokeWidth="1.2"
    />
  </svg>
);

export default function Preloader({ onComplete }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      if (onComplete) onComplete();
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(10px)",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-between bg-[#070707] px-6 py-10 select-none overflow-hidden"
        >
          {/* Ambient Gold Core Glow */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] sm:h-[550px] sm:w-[550px] rounded-full bg-[#D4AF37]/15 blur-[140px] animate-pulse" />

          {/* ================= TOP-LEFT CORNER FLORAL ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -25, x: -30, y: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 pointer-events-none drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            <RoyalGoldFloral />
          </motion.div>

          {/* ================= BOTTOM-RIGHT CORNER FLORAL ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: 25, x: 30, y: 30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 pointer-events-none drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            <RoyalGoldFloral className="rotate-180" />
          </motion.div>

          {/* Top Subtle Monogram Tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-spin-slow" />
            <span className="text-[10px] sm:text-xs font-light tracking-[0.4em] uppercase text-[#D4AF37]">
              Makeup Artistry
            </span>
          </motion.div>

          {/* ================= CENTER MAIN BRAND TYPOGRAPHY ================= */}
          <div className="relative z-10 my-auto flex flex-col items-center text-center px-4 max-w-2xl">
            {/* Top Micro Crown Accent */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 flex items-center gap-3 text-[#D4AF37]"
            >
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <Sparkles className="w-4 h-4 drop-shadow-[0_0_8px_#D4AF37]" />
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
            </motion.div>

            {/* Brand Title: THE ARTI LUXE */}
            <div className="overflow-hidden py-1">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3,
                }}
                className="whitespace-nowrap font-serif-custom text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.14em] font-light text-transparent bg-clip-text bg-gradient-to-r from-[#FFF4D0] via-[#F3E5AB] to-[#D4AF37] drop-shadow-[0_4px_25px_rgba(212,175,55,0.3)] uppercase"
              >
                THE ARTI LUXE
              </motion.h1>
            </div>

            {/* Sub-tagline: STUDIO & ACADEMY */}
            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.2em", y: 10 }}
              animate={{ opacity: 1, letterSpacing: "0.5em", y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-3 text-xs sm:text-sm md:text-base text-[#D4AF37] uppercase font-light tracking-[0.5em]"
            >
              - Arti Sharma
            </motion.div>

            {/* Decorative Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="mt-6 h-[1px] w-32 sm:w-48 bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent"
            />
          </div>

          {/* ================= BOTTOM LUXURY SHIMMER BAR ================= */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative z-10 flex flex-col items-center gap-3 w-full max-w-xs sm:max-w-sm pb-2"
          >
            <p className="text-[9px] sm:text-[11px] tracking-[0.35em] uppercase text-neutral-400 font-light">
              Crafting Elegance...
            </p>

            <div className="relative h-[2px] w-full rounded-full bg-neutral-900 overflow-hidden border border-neutral-800/80">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-2/5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_12px_#D4AF37]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}