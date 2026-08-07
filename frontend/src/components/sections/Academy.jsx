import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, Award, Users, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function Academy() {
  const shouldReduceMotion = useReducedMotion();

  const academyHighlights = [
    "Professional & Self Grooming Masterclasses",
    "Hands-on Practical Training with Live Models",
    "Certification & Career Guidance Included",
  ];

  const academyStats = [
    { value: "50+", label: "STUDENTS TRAINED" },
    { value: "5+", label: "YEARS EXP." },
    { value: "100%", label: "PRACTICAL SESSIONS" },
    { value: "CERTIFIED", label: "MASTER ARTIST" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#050505] text-white font-sans py-16 sm:py-20 lg:py-24">
      {/* Font Preloads */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        .font-serif-custom { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* Gold Ambient Glow Backgrounds */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, -16, 0], opacity: [0.14, 0.28, 0.14] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-8%] top-16 h-80 w-80 rounded-full bg-[#D4AF37]/12 blur-3xl"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 14, 0], opacity: [0.1, 0.22, 0.1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-10%] bottom-8 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Main Banner Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 sm:p-12 lg:p-14 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-md"
        >
          {/* Subtle Background Radial Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <motion.div variants={itemVariants} className="flex items-center gap-2 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D4AF37] bg-black text-[#D4AF37]">
                  <GraduationCap size={16} />
                </div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                  ARTI MAKEUP STUDIO
                </span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="font-serif-custom text-3xl sm:text-5xl font-light text-white leading-tight mt-2"
              >
                Learn. Create. <br />
                <span className="text-[#D4AF37] italic font-normal">Transform Your Passion</span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="mt-4 text-xs sm:text-sm text-gray-300 font-light leading-relaxed max-w-xl"
              >
                Master the art of professional makeup with hands-on training, industry insider techniques, and personalized mentorship designed for aspiring beauty professionals.
              </motion.p>

              {/* Quick Key Points */}
              <motion.ul variants={itemVariants} className="mt-6 space-y-2.5">
                {academyHighlights.map((point, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs text-gray-200">
                    <CheckCircle2 size={14} className="text-[#D4AF37] shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </motion.ul>

              {/* CTA Button */}
              <motion.div variants={itemVariants} className="mt-8">
                <Link
                  to="/classes"
                  className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37] bg-black px-7 py-3 text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_24px_rgba(212,175,55,0.35)]"
                >
                  <span>EXPLORE ALL COURSES</span>
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Key Stats Grid */}
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10">
              <div className="grid grid-cols-2 gap-4">
                {academyStats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="p-4 rounded-xl border border-white/5 bg-white/[0.02] text-center"
                  >
                    <p className="font-serif-custom text-2xl sm:text-3xl text-[#D4AF37] font-medium">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-gray-400">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}