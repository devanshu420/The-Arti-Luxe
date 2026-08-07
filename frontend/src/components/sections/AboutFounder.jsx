import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { BadgeCheck, Sparkles, Award, Crown, Users, Palette } from "lucide-react";

export default function AboutFounder() {
  const shouldReduceMotion = useReducedMotion();

  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "3000+", label: "Happy Clients" },
    { value: "500+", label: "Brides" },
    { value: "50+", label: "Awards & Features" },
  ];

  const highlights = [
    "4+ years of Experience",
    "Internationally Certified Makeup Artist",
    "Trained under Top Industry Experts",
    "Worked with 3000+ Clients",
    "Specialist in Bridal & Editorial Makeup",
    "Premium Products, Hygiene & Professional Finish",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.16, 0.3, 0.16] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-8%] top-16 h-96 w-96 rounded-full bg-[#D4AF37]/14 blur-3xl"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 16, 0], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-10%] bottom-10 h-[28rem] w-[28rem] rounded-full bg-[#F6E27A]/10 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={itemVariants}
            className="text-primary text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase"
          >
            — About the Founder —
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.02] text-white"
          >
            Arti Sharma
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-3 text-sm sm:text-base lg:text-lg text-text-secondary"
          >
            Founder & Chief Makeup Artist
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[32px] bg-[radial-gradient(circle,rgba(212,175,55,0.18),transparent_70%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-[#D4AF37]/25 bg-[#111111] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/12 via-transparent to-transparent pointer-events-none" />
              <img
                src="https://ik.imagekit.io/asdf5690/Makeup/Arti%20Photo.jpeg"
                alt="Arti Sharma"
                className="h-full w-full object-cover object-center aspect-[4/5] sm:aspect-[5/6] lg:aspect-[520/650]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#111111]/80 px-4 py-2 text-xs sm:text-sm text-[#F6E27A] backdrop-blur-md"
            >
              <Sparkles className="h-4 w-4" />
              Premium Bridal, Editorial & Luxury Makeup Artistry
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-lg leading-8 text-text-secondary"
            >
              With over a decade of experience in the beauty industry, Arti Sharma
              has built a reputation for creating refined, radiant, and deeply
              personalized makeup looks. Her artistry blends premium products,
              precision techniques, hygiene, and professionalism to ensure every
              client feels confident, elegant, and unforgettable.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md"
                >
                  <BadgeCheck className="mt-0.5 h-5 w-5 text-[#F6E27A] shrink-0" />
                  <p className="text-sm text-text-secondary">{item}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-2"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 240, damping: 18 }}
                  className="rounded-2xl border border-[#D4AF37]/18 bg-[#111111]/85 p-5 text-center shadow-[0_18px_40px_rgba(0,0,0,0.3)]"
                >
                  <p className="font-display text-3xl sm:text-4xl font-bold text-[#F6E27A]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm uppercase tracking-[0.16em] text-text-secondary">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link to="/about">
                <Button
                  variant="secondary"
                  size="lg"
                  className="rounded-xl border border-[#D4AF37]/35 bg-[#111111] px-8 py-3 text-[#F6E27A] shadow-[0_0_28px_rgba(212,175,55,0.10)] transition-all hover:border-[#D4AF37]/60 hover:bg-[#151515] hover:shadow-[0_0_36px_rgba(212,175,55,0.18)]"
                >
                  Know More About Me
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}