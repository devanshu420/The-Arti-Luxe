import { motion, useReducedMotion } from "framer-motion";
import { Gem, Sparkles, Camera, Star, Scissors, Shirt, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      icon: Gem,
      title: "Bridal Makeup",
      description:
        "Luxury bridal makeup designed to create an elegant, long-lasting and camera-ready look for your wedding day.",
    },
    {
      icon: Sparkles,
      title: "Party Makeup",
      description:
        "Elegant party makeup with a radiant glow and polished finish for receptions, celebrations and special occasions.",
    },
    {
      icon: Camera,
      title: "Airbrush Makeup",
      description:
        "Lightweight airbrush makeup that delivers a smooth, seamless and natural-looking finish for special events.",
    },
    {
      icon: Star,
      title: "HD Makeup",
      description:
        "Professional HD makeup created for photography and videography, helping your skin look flawless on camera.",
    },
    {
      icon: Scissors,
      title: "Hair Styling",
      description:
        "Customized bridal and occasion hairstyles including elegant buns, curls, waves and modern textured styles.",
    },
    {
      icon: Shirt,
      title: "Saree Draping",
      description:
        "Professional saree draping with precise pleats and elegant finishing to complete your bridal or occasion look.",
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
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-[#050505] py-8 font-sans text-white sm:py-20 lg:py-24"
    >
      {/* Background Gold Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -18, 0],
                  opacity: [0.18, 0.34, 0.18],
                }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-8%] top-10 h-80 w-80 rounded-full bg-[#D4AF37]/14 blur-3xl"
        />

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, 16, 0],
                  opacity: [0.14, 0.28, 0.14],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-10%] top-40 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-6 text-center sm:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.p
            variants={itemVariants}
            className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37] sm:text-xs sm:tracking-[0.3em]"
          >
            — OUR SIGNATURE SERVICES —
          </motion.p>

          <motion.h2
            id="services-heading"
            variants={itemVariants}
            className="mt-1.5 font-serif-custom text-xl font-light leading-tight text-white sm:mt-3 sm:text-4xl lg:text-5xl"
          >
            Professional Makeup Services for{" "}
            <span className="font-normal italic text-[#D4AF37]">
              Every Occasion
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-1.5 max-w-xl px-2 text-[11px] font-light leading-relaxed text-gray-300 sm:mt-3 sm:text-sm lg:text-base"
          >
            Discover luxury bridal makeup, party makeup, HD makeup,
            airbrush makeup, hair styling and saree draping by The Arti Luxe.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="mx-auto mb-6 grid max-w-[1100px] grid-cols-2 gap-2.5 sm:mb-10 sm:gap-5 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={itemVariants}
                whileHover={shouldReduceMotion ? {} : { y: -5 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] p-2.5 shadow-md backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37]/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] sm:p-6"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#D4AF37]/8 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  <div className="relative flex h-7 w-7 items-center justify-center rounded-full border border-[#D4AF37] bg-black/80 text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:text-black sm:h-12 sm:w-12">
                    <Icon
                      className="h-3.5 w-3.5 sm:h-5 sm:w-5"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="relative mt-2 font-serif-custom text-xs font-medium leading-snug text-white transition-colors group-hover:text-[#D4AF37] sm:mt-4 sm:text-lg">
                    {service.title}
                  </h3>

                  <p className="relative mt-1 line-clamp-2 text-[10px] font-light leading-relaxed text-gray-300 sm:mt-2 sm:line-clamp-none sm:text-xs">
                    {service.description}
                  </p>
                </div>

                <div>
                  <div className="relative mt-2 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent sm:mt-4" />

                  <a
                    href="#contact"
                    aria-label={`Book ${service.title}`}
                    className="relative mt-2 inline-flex items-center gap-1 text-[8.5px] font-semibold uppercase tracking-[0.12em] text-[#D4AF37] transition-all duration-300 group-hover:translate-x-1 sm:mt-4 sm:text-[11px] sm:tracking-[0.15em]"
                  >
                    <span>BOOK NOW</span>
                    <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* View All / Contact */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <a
            href="#contact"
            aria-label="Book a makeup appointment with The Arti Luxe"
            className="inline-flex items-center justify-center rounded-full border border-[#D4AF37] bg-[#0a0a0a] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_24px_rgba(212,175,55,0.35)] sm:px-8 sm:py-2.5 sm:text-xs"
          >
            BOOK YOUR APPOINTMENT
          </a>
        </motion.div>
      </div>
    </section>
  );
}