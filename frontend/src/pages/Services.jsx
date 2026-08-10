import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Gem,
  Scissors,
  Brush,
  Shirt,
  Ghost,
  ArrowRight,
  X,
  Images,
  Maximize2,
  CheckCircle2,
  Sparkle,
} from "lucide-react";
import OptimizedImage from "../components/OptimizedImage";
import { getOptimizedImageUrl } from "../utils/Imagekit";

// Unique categories array
const categories = ["BRIDAL", "RECEPTION", "PARTY", "HAIR DO", "HALLOWEEN", "EDITORIAL"];

// Central Portfolio Source Data
const portfolioDatabase = [
  {
    id: 1,
    title: "Couture Bridal Beauty Portrait",
    category: "BRIDAL",
    image: "https://ik.imagekit.io/asdf5690/Makeup/gurpreet-singh-Po-nggQqplE-unsplash.jpg",
  },
  {
    id: 2,
    title: "Soft Glam Look",
    category: "RECEPTION",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/pvknvjvhojh.jpeg",
  },
  {
    id: 3,
    title: "Stitched FX Look",
    category: "HALLOWEEN",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.10.33.jpeg",
  },
  {
    id: 4,
    title: "Soft Watermelon Look",
    category: "HALLOWEEN",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/slkjkj,jkhfk.jpeg",
  },
  {
    id: 5,
    title: "Creative Look on Face",
    category: "HALLOWEEN",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.01.08.jpeg",
  },
  {
    id: 6,
    title: "Glitter Cut-Crease Reception Look",
    category: "RECEPTION",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.01.09fff.jpeg",
  },
  {
    id: 7,
    title: "Pastel Pink Mehendi Glam",
    category: "RECEPTION",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/pxvkvbvj%20.jpeg",
  },
  {
    id: 8,
    title: "Neat Juda Hair Do",
    category: "HAIR DO",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.23.50%20(1).jpeg",
  },
  {
    id: 9,
    title: "Royal Golden Reception Look",
    category: "RECEPTION",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.23.50%20(2).jpeg",
  },
  {
    id: 10,
    title: "Soft Curl Hair Do",
    category: "HAIR DO",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.23.50%20(4).jpeg",
  },
  {
    id: 11,
    title: "Heavy Braid Hair Do",
    category: "HAIR DO",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.23.50%20(5).jpeg",
  },
  {
    id: 12,
    title: "Messy Soft Juda",
    category: "HAIR DO",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.23.50%20(7).jpeg",
  },
  {
    id: 13,
    title: "Radha Rani Glam Look",
    category: "EDITORIAL",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.23.50%20(6).jpeg",
  },
  {
    id: 14,
    title: "Rajasthani Glam Look",
    category: "EDITORIAL",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/bmxv.jpeg",
  },
  {
    id: 15,
    title: "Bridal Juda Look",
    category: "RECEPTION",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.23.50%20(3).jpeg",
  },
  {
    id: 16,
    title: "Cut Crease Eye Look",
    category: "PARTY",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.23.50%20(9).jpeg",
  },
  {
    id: 17,
    title: "Creative Avatar Look",
    category: "HALLOWEEN",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/kxbmv%20v.jpeg",
  },
  {
    id: 18,
    title: "Soft Elegant Look",
    category: "RECEPTION",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/odhdk.jpeg",
  },
  {
    id: 19,
    title: "Dual Colour Cut Crease Look",
    category: "EDITORIAL",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.25.13%20(1).jpeg",
  },
  {
    id: 20,
    title: "Horror Look",
    category: "HALLOWEEN",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/mvbv.jpeg",
  },
  {
    id: 21,
    title: "Burn Horrible Look",
    category: "HALLOWEEN",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.10.34.jpeg",
  },
  {
    id: 22,
    title: "Gorgeous Party Look",
    category: "RECEPTION",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20atsff.jpeg",
  },
  {
    id: 23,
    title: "Soft Cloud Look",
    category: "HALLOWEEN",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/dkgbfg,jbjgf.jpeg",
  },
  {
    id: 24,
    title: "Dual Colour Cut Crease New One",
    category: "EDITORIAL",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.25.13.jpeg",
  },
  {
    id: 25,
    title: "SFX & Gore Realistic Horror",
    category: "HALLOWEEN",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/mnxbmcbm.jpeg",
  },
];

// Updated Service Definitions matching updated categories
const rawServices = [
  {
    id: "bridal",
    name: "Bridal Makeup",
    category: "BRIDAL",
    icon: Gem,
    tag: "MOST POPULAR",
    desc: "Radiant royal bridal looks crafted with premium international products, flawless skin blending, and long-lasting elegance.",
    features: ["HD Airbrush Base", "Skin Texture Preservation", "Lashes & Hair Accessories"],
  },
  {
    id: "reception",
    name: "Reception & Glam",
    category: "RECEPTION",
    icon: Brush,
    desc: "Ultra-lightweight, camera-ready coverage that looks seamless in high-definition photography, video, and 4K lighting.",
    features: ["Sweat-Resistant Formula", "Non-Caking Base", "Flawless Close-ups"],
  },
  {
    id: "party",
    name: "Party & Cocktail Glam",
    category: "PARTY",
    icon: Shirt,
    desc: "Vibrant, elegant party looks customized for sangeet, cocktail nights, and special celebrations.",
    features: ["Custom Lash Application", "Long-Wear Lip Formula", "Glowy Highlight"],
  },
  {
    id: "hairstyle",
    name: "Luxury Hair Styling",
    category: "HAIR DO",
    icon: Scissors,
    desc: "Hollywood waves, neat judas, textured braids, and sleek styles tailored to complement your outfit and face structure.",
    features: ["Hair Extensions Placement", "Thermal Styling", "Decorative Hair Accessories"],
  },
  {
    id: "halloween",
    name: "Halloween & SFX",
    category: "HALLOWEEN",
    icon: Ghost,
    tag: "SPECIALTY",
    desc: "Transformative character, illusion, dark fantasy, and creative SFX makeup designed for themed events and Halloween.",
    features: ["Prosthetics & Illusion", "Custom Color Paints", "All-Night Hold"],
  },
  {
    id: "editorial",
    name: "Editorial & Creative Glam",
    category: "EDITORIAL",
    icon: Sparkle,
    desc: "High-fashion, sharp cut-creases, and concept-driven editorial makeup for photoshoots, concepts, and runway looks.",
    features: ["Dimensional Highlighting", "Sharp Precision Lines", "Dewy & Glass Finish"],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [activeModalImage, setActiveModalImage] = useState(null);

  useEffect(() => {
    document.title = "Services - Luxé Beauty Studio";
  }, []);

  // AUTOMATICALLY ASSIGN PORTFOLIO IMAGES TO SERVICES BASED ON CATEGORY MATCH
  const services = useMemo(() => {
    return rawServices.map((service) => {
      const matchedImages = portfolioDatabase
        .filter((item) => item.category === service.category)
        .map((item) => item.image);

      return {
        ...service,
        images: matchedImages.length > 0 ? matchedImages : portfolioDatabase.slice(0, 4).map((i) => i.image),
      };
    });
  }, []);

  const handleOpenGallery = (service) => {
    setSelectedService(service);
    setActiveModalImage(service.images[0]);
  };

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white font-sans pt-24 sm:pt-28 pb-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        .font-script { font-family: 'Great Vibes', cursive; }
        .font-serif-custom { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-37.5 top-10 h-125 w-125 rounded-full bg-[#D4AF37]/10 blur-[180px]" />
        <div className="absolute right-[-150px] top-1/3 h-[600px] w-150 rounded-full bg-[#D4AF37]/10 blur-[200px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <motion.section
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          className="py-4 sm:py-6"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-black/60 px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs text-[#D4AF37] backdrop-blur-md tracking-[0.2em] uppercase font-semibold shadow-[0_0_20px_rgba(212,175,55,0.15)]">
              <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              BESPOKE BEAUTY EXPERIENCES
            </div>

            <h1 className="font-serif-custom text-3xl sm:text-6xl font-light text-white tracking-tight mt-4 sm:mt-5">
              Our <span className="text-[#D4AF37] italic font-normal">Services</span>
            </h1>

            <p className="mt-3 sm:mt-4 text-xs sm:text-base text-gray-300 font-light leading-relaxed px-2">
              Explore our core signature beauty & styling offerings. Click on any card below to view portfolio lookbooks and features.
            </p>
          </motion.div>

          {/* Service Cards Grid - Upgraded UI */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-[1400px] mx-auto">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.id}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  onClick={() => handleOpenGallery(service)}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#121212] via-[#0a0a0a] to-black p-6 sm:p-7 cursor-pointer backdrop-blur-xl transition-all duration-500 hover:border-[#D4AF37]/80 hover:shadow-[0_10px_40px_rgba(212,175,55,0.25)]"
                >
                  {/* Subtle Top Gold Gradient Flare */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent group-hover:via-[#D4AF37] transition-all duration-500" />

                  {/* Thumbnail Preview Blur Corner Effect */}
                  <div className="absolute right-0 top-0 w-36 h-36 opacity-25 pointer-events-none overflow-hidden rounded-bl-full border-l border-b border-[#D4AF37]/20 transition-all duration-500 group-hover:scale-110 group-hover:opacity-40">
                    <OptimizedImage
                      src={service.images[0]}
                      alt={service.name}
                      width={200}
                      quality={60}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                    />
                  </div>

                  <div className="relative z-10">
                    {/* Header Row */}
                    <div className="flex items-center justify-between">
                      <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/40 bg-black/80 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black group-hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300">
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 border border-white/10 text-[10px] text-gray-300 font-medium backdrop-blur-md">
                          <Images size={11} className="text-[#D4AF37]" />
                          {service.images.length} Photos
                        </span>

                        {service.tag && (
                          <span className="rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] px-2.5 py-1 text-[8px] sm:text-[9px] font-bold tracking-wider text-black uppercase shadow-sm">
                            {service.tag}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif-custom mt-6 text-xl sm:text-2xl font-medium text-white tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-gray-400 font-light group-hover:text-gray-300 transition-colors">
                      {service.desc}
                    </p>

                    {/* Feature Badges */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {service.features.map((feat, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] px-2.5 py-1 rounded-lg bg-white/5 text-gray-300 border border-white/5 group-hover:border-[#D4AF37]/20 group-hover:bg-black/40 transition-colors"
                        >
                          <CheckCircle2 size={11} className="text-[#D4AF37]" />
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="relative z-10 mt-7 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-[#D4AF37] uppercase group-hover:translate-x-1.5 transition-transform duration-300">
                      VIEW LOOKBOOK <ArrowRight className="h-3.5 w-3.5" />
                    </span>

                    <div className="h-8 w-8 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                      <Maximize2 size={13} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </div>

      {/* LOOKBOOK MODAL */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-3 pt-16 sm:p-6"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[85vh] sm:max-h-[90vh] bg-[#0a0a0a] border border-[#D4AF37]/40 rounded-2xl overflow-hidden grid md:grid-cols-12 shadow-[0_0_60px_rgba(212,175,55,0.25)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-30 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-black/80 border border-white/20 text-white hover:text-[#D4AF37] flex items-center justify-center transition-colors shadow-lg"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Left Column: Image Viewer */}
              <div className="md:col-span-7 bg-black flex flex-col items-center justify-center relative p-2 max-h-[40vh] md:max-h-[85vh] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center overflow-hidden">
                  <img
                    src={getOptimizedImageUrl(activeModalImage, { width: 1000, quality: 85, format: "auto" })}
                    alt={selectedService.name}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>

                {/* Thumbnails Row */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 p-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 max-w-[90%] overflow-x-auto">
                  {selectedService.images.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveModalImage(imgUrl)}
                      className={`relative h-10 w-10 sm:h-12 sm:w-12 rounded-lg overflow-hidden shrink-0 border transition-all ${
                        activeModalImage === imgUrl
                          ? "border-[#D4AF37] scale-105 shadow-[0_0_10px_rgba(212,175,55,0.6)]"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <OptimizedImage src={imgUrl} alt="Thumbnail" width={100} quality={60} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Service Details */}
              <div className="md:col-span-5 p-5 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 overflow-y-auto">
                <div>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                    {selectedService.category} LOOKBOOK
                  </span>

                  <h2 className="font-serif-custom text-xl sm:text-3xl text-white font-medium mt-1 sm:mt-2">
                    {selectedService.name}
                  </h2>

                  <div className="h-[1px] w-full bg-white/10 my-3 sm:my-4" />

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light mb-4 sm:mb-6">
                    {selectedService.desc}
                  </p>

                  <h4 className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2 sm:mb-3">
                    WHAT'S INCLUDED:
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {selectedService.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 size={13} className="text-[#D4AF37]" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <span className="text-[10px] sm:text-xs text-gray-400 font-light">
                    {selectedService.images.length} Real Client Photos
                  </span>

                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-[#D4AF37] text-[10px] sm:text-xs font-semibold tracking-[0.15em] text-[#D4AF37] uppercase hover:bg-[#D4AF37] hover:text-black transition-all bg-black/40"
                  >
                    BOOK SERVICE
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}