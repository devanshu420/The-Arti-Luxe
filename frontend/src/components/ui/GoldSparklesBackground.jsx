import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

// Pre-calculated smooth random sparkle positions aur timings
const sparklesList = [
  { id: 1, top: "12%", left: "8%", size: "w-3 h-3", delay: 0, duration: 4 },
  { id: 2, top: "25%", right: "12%", size: "w-4 h-4", delay: 1.2, duration: 5 },
  { id: 3, top: "45%", left: "15%", size: "w-3.5 h-3.5", delay: 0.5, duration: 4.5 },
  { id: 4, top: "60%", right: "8%", size: "w-5 h-5", delay: 1.8, duration: 6 },
  { id: 5, top: "78%", left: "10%", size: "w-3 h-3", delay: 0.8, duration: 4 },
  { id: 6, top: "88%", right: "18%", size: "w-4 h-4", delay: 2.2, duration: 5.5 },
  { id: 7, top: "35%", right: "30%", size: "w-2.5 h-2.5", delay: 1.5, duration: 4 },
  { id: 8, top: "70%", left: "28%", size: "w-3 h-3", delay: 2.5, duration: 5 },
];

export default function GoldSparklesBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* 1. Ambient Gold Glow Orbs (Luxury Atmosphere) */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />
      <div className="absolute top-1/2 -right-40 h-[600px] w-[600px] rounded-full bg-[#D4AF37]/8 blur-[160px]" />
      <div className="absolute -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[150px]" />

      {/* 2. Floating Golden Animated Sparkles */}
      {sparklesList.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          style={{
            position: "absolute",
            top: sparkle.top,
            left: sparkle.left,
            right: sparkle.right,
          }}
          initial={{ opacity: 0.2, scale: 0.6 }}
          animate={{
            opacity: [0.2, 0.9, 0.2],
            scale: [0.7, 1.2, 0.7],
            y: [0, -14, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
          className="text-[#D4AF37] drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]"
        >
          <Sparkles className={sparkle.size} />
        </motion.div>
      ))}

      {/* 3. Subtle Luxury Gold Dust Grid / Grain */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.04]" />
    </div>
  );
}