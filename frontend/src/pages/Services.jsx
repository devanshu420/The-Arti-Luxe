import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Gem,
  Scissors,
  Brush,
  Shirt,
  Ghost,
  Layers,
  ArrowRight,
  X,
  Images,
  Maximize2,
  CheckCircle2,
} from "lucide-react";
import OptimizedImage from "../components/OptimizedImage";
import { getOptimizedImageUrl } from "../utils/Imagekit";

// Central Portfolio Source Data
const portfolioDatabase = [
  {
    id: 1,
    title: "Editorial Soft Glam Portrait",
    category: "EDITORIAL",
    image: "https://ik.imagekit.io/asdf5690/Makeup/gurpreet-singh-Po-nggQqplE-unsplash.jpg"
  },
  {
    id: 2,
    title: "Smokey Eye Reception Glam",
    category: "RECEPTION",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/pvknvjvhojh.jpeg"
  },
  {
    id: 3,
    title: "Velvet Matte Luxe Glam",
    category: "EDITORIAL",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.10.33.jpeg"
  },
  {
    id: 4,
    title: "Soft Rose Engagement Beauty",
    category: "ENGAGEMENT",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/slkjkj,jkhfk.jpeg"
  },
  {
    id: 5,
    title: "Traditional South Indian Silk Bridal",
    category: "BRIDAL",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.01.08.jpeg"
  },
  {
    id: 6,
    title: "Glitter Cut-Crease Reception Look",
    category: "RECEPTION",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.01.09fff.jpeg"
  },
  {
    id: 7,
    title: "Pastel Pink Mehendi Glam",
    category: "ENGAGEMENT",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/pxvkvbvj%20.jpeg"
  },
  {
    id: 8,
    title: "High Precision Winged Liner",
    category: "EDITORIAL",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.23.50%20(1).jpeg"
  },
  {
    id: 9,
    title: "Royal Golden Reception Look",
    category: "RECEPTION",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.23.50%20(2).jpeg"
  },
  {
    id: 10,
    title: "Champagne Glow Bridal",
    category: "BRIDAL",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.23.50%20(4).jpeg"
  },
  {
    id: 11,
    title: "Bold Berry Lip Editorial",
    category: "EDITORIAL",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.23.50%20(5).jpeg"
  },
  {
    id: 12,
    title: "Heritage Rajasthani Bridal Elegance",
    category: "BRIDAL",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.23.50%20(7).jpeg"
  },
  {
    id: 13,
    title: "Shimmer Smokey Cocktail Glam",
    category: "PARTY",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.23.50%20(6).jpeg"
  },
  {
    id: 14,
    title: "Fresh Dewy Engagement Glam",
    category: "ENGAGEMENT",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/bmxv.jpeg"
  },
  {
    id: 15,
    title: "High Gloss Runway Glam",
    category: "EDITORIAL",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.23.50%20(3).jpeg"
  },
  {
    id: 16,
    title: "Soft Coral Sangeet Beauty",
    category: "PARTY",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.23.50%20(9).jpeg"
  },
  {
    id: 17,
    title: "Gilded Gold Sunset Glam",
    category: "EDITORIAL",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/kxbmv%20v.jpeg"
  },
  {
    id: 18,
    title: "Classic Maroon Bridal Grace",
    category: "BRIDAL",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/odhdk.jpeg"
  },
  {
    id: 19,
    title: "Sultry Charcoal Eyes Reception",
    category: "RECEPTION",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.25.13%20(1).jpeg"
  },
  {
    id: 20,
    title: "Peach Blossom Party Makeup",
    category: "PARTY",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/mvbv.jpeg"
  },
  {
    id: 21,
    title: "Vintage Hollywood Red Lip",
    category: "EDITORIAL",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.10.34.jpeg"
  },
  {
    id: 22,
    title: "Pastel Mint Engagement Look",
    category: "ENGAGEMENT",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20atsff.jpeg"
  },
  {
    id: 23,
    title: "Jewel Tone Cocktail Glam",
    category: "PARTY",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/dkgbfg,jbjgf.jpeg"
  },
  {
    id: 24,
    title: "Maharani Bridal Elegance",
    category: "BRIDAL",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.25.13.jpeg"
  },
  {
    id: 25,
    title: "Bronze Goddess Party Glam",
    category: "PARTY",
    image: "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/mnxbmcbm.jpeg"
  }
];

// Service definitions linked dynamically by matching categories
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
    id: "hd-airbrush",
    name: "HD & Airbrush Makeup",
    category: "RECEPTION",
    icon: Brush,
    desc: "Ultra-lightweight, camera-ready coverage that looks seamless in high-definition photography, video, and 4K lighting.",
    features: ["Sweat-Resistant Formula", "Non-Caking Base", "Flawless Close-ups"],
  },
  {
    id: "halloween",
    name: "Halloween & SFX",
    category: "EDITORIAL",
    icon: Ghost,
    tag: "SPECIALTY",
    desc: "Transformative character, illusion, dark fantasy, and creative SFX makeup designed for themed parties and Halloween events.",
    features: ["Prosthetics & Illusion", "Custom Color Paints", "All-Night Hold"],
  },
  {
    id: "texture-glam",
    name: "Texture & Dextore Glam",
    category: "ENGAGEMENT",
    icon: Layers,
    desc: "Specialized high-definition skin texturing, glass-skin dewiness, and dimensional glam highlighting natural facial contours.",
    features: ["Dimensional Highlighting", "Pore-Blurring Finish", "Dewy Glass Finish"],
  },
  {
    id: "hairstyle",
    name: "Luxury Hair Styling",
    category: "EDITORIAL",
    icon: Scissors,
    desc: "Hollywood waves, textured buns, braided crowns, and sleek styles tailored to complement your outfit and face structure.",
    features: ["Hair Extensions Placement", "Thermal Styling", "Decorative Hair Accessories"],
  },
  {
    id: "draping",
    name: "Saree & Dupatta Draping",
    category: "PARTY",
    icon: Shirt,
    desc: "Precision draping with graceful pleats, clean structural fitting, and comfortable pinning for sarees and bridal lehengas.",
    features: ["Traditional & Modern Styles", "Can-Can Adjustments", "Secure All-Day Pinning"],
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
        images: matchedImages.length > 0 ? matchedImages : portfolioDatabase.slice(0, 4).map(i => i.image),
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
        <div className="absolute left-[-150px] top-10 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />
        <div className="absolute right-[-150px] top-1/3 h-[600px] w-[600px] rounded-full bg-[#D4AF37]/10 blur-[200px]" />
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

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-[1400px] mx-auto">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.id}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  onClick={() => handleOpenGallery(service)}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-5 sm:p-7 cursor-pointer backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37] hover:shadow-[0_0_35px_rgba(212,175,55,0.2)]"
                >
                  {/* Thumbnail Preview Blur Background */}
                  <div className="absolute right-0 top-0 w-32 h-32 sm:w-36 sm:h-36 opacity-20 pointer-events-none overflow-hidden rounded-bl-full">
                    <OptimizedImage
                      src={service.images[0]}
                      alt={service.name}
                      width={200}
                      quality={60}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                    />
                  </div>

                  <div>
                    {/* Header Row */}
                    <div className="flex items-center justify-between">
                      <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-[#D4AF37] bg-black/80 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
                      </div>

                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 border border-white/10 text-[9px] sm:text-[10px] text-gray-300">
                          <Images size={11} className="text-[#D4AF37]" />
                          {service.images.length} Portfolio Photos
                        </span>

                        {service.tag && (
                          <span className="rounded-full bg-[#D4AF37] px-2 sm:px-2.5 py-1 text-[8px] sm:text-[9px] font-bold tracking-widest text-black uppercase">
                            {service.tag}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif-custom mt-5 sm:mt-6 text-xl sm:text-2xl font-medium text-white tracking-wide group-hover:text-[#D4AF37] transition-colors">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 sm:mt-3 text-xs leading-relaxed text-gray-300 font-light">
                      {service.desc}
                    </p>

                    {/* Feature Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {service.features.map((feat, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5"
                        >
                          <CheckCircle2 size={10} className="text-[#D4AF37]" />
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="mt-6 sm:mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold tracking-[0.15em] text-[#D4AF37] uppercase group-hover:translate-x-1 transition-transform">
                      VIEW LOOKBOOK <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </span>

                    <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                      <Maximize2 size={12} />
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