import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { Sparkles } from "lucide-react";

export default function PortfolioSection() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      category: "bridal",
      image:
        "https://ik.imagekit.io/asdf5690/Makeup/Gallery/WhatsApp%20Image%202026-08-06%20at%2013.06.55%20(1).jpeg?updatedAt=1786013564919",
      title: "Elegant Bridal Makeup Look",
      alt: "Elegant bridal makeup look by The Arti Luxe",
    },
    {
      id: 2,
      category: "bridal",
      image:
        "https://ik.imagekit.io/asdf5690/Makeup/Gallery/WhatsApp%20Image%202026-08-06%20at%2013.06.55%20(2).jpeg?updatedAt=1786013564853",
      title: "Luxury Bridal Makeup",
      alt: "Luxury bridal makeup artistry by The Arti Luxe",
    },
    {
      id: 3,
      category: "party",
      image:
        "https://ik.imagekit.io/asdf5690/Makeup/Gallery/WhatsApp%20Image%202026-08-06%20at%2017.00.10.jpeg",
      title: "Halloween Look",
      title: "Glamorous Party Makeup",
      alt: "Glamorous party makeup look by The Arti Luxe",
    },
    {
      id: 4,
      category: "reception",
      image:
        "https://ik.imagekit.io/asdf5690/Makeup/Gallery/WhatsApp%20Image%202026-08-06%20at%2016.23.05%20(1).jpeg?updatedAt=1786013653310",
      title: "Reception Glam Makeup",
      alt: "Elegant reception makeup look by The Arti Luxe",
    },
    {
      id: 5,
      category: "editorial",
      image:
        "https://ik.imagekit.io/asdf5690/Makeup/Gallery/WhatsApp%20Image%202026-08-06%20at%2016.23.05%20(2).jpeg?updatedAt=1786013653318",
      title: "Luxury Editorial Makeup",
      alt: "Luxury editorial makeup look by The Arti Luxe",
    },
    {
      id: 6,
      category: "editorial",
      image:
        "https://ik.imagekit.io/asdf5690/Makeup/Gallery/WhatsApp%20Image%202026-08-06%20at%2017.01.35.jpeg",
      title: "Model Look",
      title: "Professional Model Makeup",
      alt: "Professional model makeup look by The Arti Luxe",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category === activeCategory.toLowerCase(),
        );

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
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="relative overflow-hidden bg-background-secondary py-10 sm:py-16 lg:py-20"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : { y: [0, -16, 0], opacity: [0.16, 0.3, 0.16] }
          }
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-10%] top-16 h-80 w-80 rounded-full bg-[#D4AF37]/14 blur-3xl"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : { y: [0, 18, 0], opacity: [0.12, 0.24, 0.12] }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-8%] bottom-10 h-96 w-96 rounded-full bg-[#F6E27A]/10 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-[1100px] px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={itemVariants}
            className="text-primary text-[10px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase"
          >
            — Our Work —
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="mt-2 font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white"
          >
            Check Out Our{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F6E27A] to-[#D4AF37] bg-clip-text text-transparent">
              Latest Work
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-2 sm:mt-3 max-w-xl text-xs sm:text-sm lg:text-base leading-relaxed text-text-secondary font-light px-2"
          >
            A curated gallery of bridal, party, editorial, and luxury beauty
            looks crafted with premium artistry and cinematic detail.
          </motion.p>
        </motion.div>

        {/* 2-Column Grid on Mobile (2x3 Matrix) | 3-Column Grid on Desktop */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              className="group relative w-full overflow-hidden rounded-xl border border-[#D4AF37]/20 bg-[#111111]/80 shadow-md aspect-[3/4]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Gradient overlay: static subtle on mobile, interactive on hover for desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/30 to-transparent sm:opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Overlay Content */}
              <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-4 sm:opacity-0 sm:translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <div className="inline-flex items-center gap-1 rounded-full border border-[#D4AF37]/30 bg-black/60 px-2 py-0.5 text-[8px] sm:text-[9px] tracking-wider uppercase text-[#F6E27A] backdrop-blur-md">
                  <Sparkles className="h-2 w-2 sm:h-2.5 sm:w-2.5" />
                  {item.category}
                </div>

                <h3 className="mt-1 font-display text-xs sm:text-base font-semibold text-white truncate">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Button */}
        <motion.div
          className="mt-8 sm:mt-10 text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Link
            to="/portfolio"
            aria-label="View The Arti Luxe makeup portfolio"
          >
            <Button
              variant="secondary"
              size="md"
              className="cursor-pointer rounded-lg border border-[#D4AF37]/35 bg-[#111111] px-6 py-2.5 text-xs text-[#F6E27A] shadow-[0_0_20px_rgba(212,175,55,0.10)] transition-all hover:border-[#D4AF37]/60 hover:bg-[#151515] hover:shadow-[0_0_30px_rgba(212,175,55,0.18)] uppercase tracking-wider font-semibold"
            >
              View Full Gallery
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
