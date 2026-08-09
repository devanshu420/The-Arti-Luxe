import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { Gem, Sparkles, Camera, Star, Scissors, Shirt, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      icon: Gem,
      title: "Bridal Makeup",
      description: "Luxe bridal artistry with long-lasting elegance and soft glam.",
    },
    {
      icon: Sparkles,
      title: "Party Makeup",
      description: "Radiant evening looks with polished glow and camera-ready finishing.",
    },
    {
      icon: Camera,
      title: "Airbrush Makeup",
      description: "Feather-light, seamless, and high-performance natural makeup.",
    },
    {
      icon: Star,
      title: "HD Makeup",
      description: "High-definition makeup designed for photography and videography.",
    },
    {
      icon: Scissors,
      title: "Hair Styling",
      description: "Elegant buns, curls, waves, and textured customized styles.",
    },
    {
      icon: Shirt,
      title: "Saree Draping",
      description: "Perfect pleats and graceful draping with premium finishing.",
    },
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
    <section className="relative overflow-hidden bg-[#050505] text-white font-sans py-8 sm:py-20 lg:py-24">
      {/* Font Preloads */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        .font-serif-custom { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* Background Gold Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, -18, 0], opacity: [0.18, 0.34, 0.18] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-8%] top-10 h-80 w-80 rounded-full bg-[#D4AF37]/14 blur-3xl"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 16, 0], opacity: [0.14, 0.28, 0.14] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-10%] top-40 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-6 sm:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.p
            variants={itemVariants}
            className="text-[#D4AF37] text-[9px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase"
          >
            — OUR SIGNATURE SERVICES —
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="mt-1.5 sm:mt-3 font-serif-custom text-xl sm:text-4xl lg:text-5xl font-light leading-tight text-white"
          >
            Beauty for{" "}
            <span className="text-[#D4AF37] italic font-normal">
              Every Occasion
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-1.5 sm:mt-3 max-w-xl text-[11px] sm:text-sm lg:text-base leading-relaxed text-gray-300 font-light px-2"
          >
            Luxury makeup services crafted with precision, premium products, and
            a high-end editorial finish.
          </motion.p>
        </motion.div>

        {/* Services Grid (2 Columns on Mobile 2x3 | 3 Columns on Desktop) */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5 mb-6 sm:mb-10 max-w-[1100px] mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={shouldReduceMotion ? {} : { y: -5 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] p-2.5 sm:p-6 shadow-md backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37]/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] flex flex-col justify-between"
              >
                {/* Background Radial Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/8 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

                <div>
                  {/* Circular Icon */}
                  <div className="relative flex h-7 w-7 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-[#D4AF37] bg-black/80 text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                    <Icon className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="relative mt-2 sm:mt-4 font-serif-custom text-xs sm:text-lg font-medium text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-1 sm:mt-2 text-[10px] sm:text-xs leading-relaxed text-gray-300 font-light line-clamp-2 sm:line-clamp-none">
                    {service.description}
                  </p>
                </div>

                <div>
                  <div className="relative mt-2 sm:mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  {/* Action Link */}
                  <Link
                    to="/services"
                    className="relative mt-2 sm:mt-4 inline-flex items-center gap-1 text-[8.5px] sm:text-[11px] font-semibold tracking-[0.12em] sm:tracking-[0.15em] text-[#D4AF37] uppercase transition-all duration-300 group-hover:translate-x-1"
                  >
                    <span>EXPLORE</span>
                    <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-full border border-[#D4AF37] bg-[#0a0a0a] px-5 sm:px-8 py-2 sm:py-2.5 text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_24px_rgba(212,175,55,0.35)]"
          >
            VIEW ALL SERVICES
          </Link>
        </motion.div>
      </div>
    </section>
  );
}