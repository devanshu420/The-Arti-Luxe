import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Gem, Sparkles, Camera, Star, Scissors, Shirt, ArrowRight } from "lucide-react";
import GoldSparklesBackground from "../ui/GoldSparklesBackground";

// Luxury Shimmer Skeleton for Service Card
function ServiceSectionCardSkeleton() {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/5 bg-[#0e0e0e] p-3 sm:p-6 min-h-[160px] sm:min-h-[220px]">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent" />
      
      <div>
        <div className="h-7 w-7 sm:h-12 sm:w-12 rounded-full bg-neutral-900 mb-3" />
        <div className="h-4 sm:h-5 w-3/4 rounded bg-neutral-900 mb-2" />
        <div className="space-y-1.5">
          <div className="h-2.5 sm:h-3 w-full rounded bg-neutral-900/80" />
          <div className="h-2.5 sm:h-3 w-4/5 rounded bg-neutral-900/60" />
        </div>
      </div>

      <div className="pt-3 border-t border-neutral-900/60 flex items-center justify-between">
        <div className="h-3 w-16 sm:w-20 rounded bg-neutral-900" />
        <div className="h-3 w-3 rounded-full bg-neutral-900" />
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsDataLoading(false), 350);
    return () => clearTimeout(timer);
  }, []);

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

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-[#050505] py-12 font-sans text-white sm:py-20 lg:py-24 select-none"
    >
      {/* Background Gold Sparkles Component */}
      <GoldSparklesBackground />

      <div className="relative z-10 mx-auto max-w-[1200px] px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="mb-8 text-center sm:mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37] sm:text-xs sm:tracking-[0.3em]">
            — OUR SIGNATURE SERVICES —
          </p>

          <h2
            id="services-heading"
            className="mt-2 font-serif-custom text-2xl font-light leading-tight text-white sm:mt-3 sm:text-4xl lg:text-5xl"
          >
            Professional Makeup Services for{" "}
            <span className="font-normal italic text-[#D4AF37]">
              Every Occasion
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-xl px-2 text-xs font-light leading-relaxed text-gray-300 sm:mt-3 sm:text-sm lg:text-base">
            Discover luxury bridal makeup, party makeup, HD makeup,
            airbrush makeup, hair styling and saree draping by The Arti Luxe.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mx-auto mb-8 grid max-w-[1100px] grid-cols-2 gap-2.5 sm:mb-12 sm:gap-5 lg:grid-cols-3">
          {isDataLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <ServiceSectionCardSkeleton key={index} />
              ))
            : services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.article
                    key={service.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.4,
                      delay: shouldReduceMotion ? 0 : index * 0.05,
                      ease: "easeOut",
                    }}
                    whileHover={shouldReduceMotion ? {} : { y: -5 }}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] p-3 shadow-md backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37]/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.18)] sm:p-6"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#D4AF37]/8 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div>
                      <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#D4AF37] bg-black/80 text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:text-black sm:h-12 sm:w-12">
                        <Icon
                          className="h-4 w-4 sm:h-5 sm:w-5"
                          strokeWidth={1.5}
                        />
                      </div>

                      <h3 className="relative mt-2.5 font-serif-custom text-sm font-medium leading-snug text-white transition-colors group-hover:text-[#D4AF37] sm:mt-4 sm:text-lg">
                        {service.title}
                      </h3>

                      <p className="relative mt-1 line-clamp-2 text-[10.5px] font-light leading-relaxed text-gray-300 sm:mt-2 sm:line-clamp-none sm:text-xs">
                        {service.description}
                      </p>
                    </div>

                    <div>
                      <div className="relative mt-3 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent sm:mt-4" />

                      {/* Fixed Link to prevent hard page reload */}
                      <Link
                        to="/contact"
                        aria-label={`Book ${service.title}`}
                        className="relative mt-2.5 inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#D4AF37] transition-all duration-300 group-hover:translate-x-1 sm:mt-4 sm:text-[11px] sm:tracking-[0.15em]"
                      >
                        <span>BOOK NOW</span>
                        <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
        </div>

        {/* View All / Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center"
        >
          <Link
            to="/contact"
            aria-label="Book a makeup appointment with The Arti Luxe"
            className="inline-flex items-center justify-center rounded-full border border-[#D4AF37] bg-[#0a0a0a] px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_24px_rgba(212,175,55,0.35)] sm:px-8 sm:py-3 sm:text-xs"
          >
            BOOK YOUR APPOINTMENT
          </Link>
        </motion.div>

      </div>
    </section>
  );
}