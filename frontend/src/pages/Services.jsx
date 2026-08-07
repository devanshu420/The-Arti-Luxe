import { useEffect, useState } from "react";
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

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [activeModalImage, setActiveModalImage] = useState(null);

  useEffect(() => {
    document.title = "Services - Luxé Beauty Studio";
  }, []);

  const services = [
    {
      id: "bridal",
      name: "Bridal Makeup",
      icon: Gem,
      tag: "MOST POPULAR",
      desc: "Radiant royal bridal looks crafted with premium international products, flawless skin blending, and long-lasting elegance.",
      features: ["HD Airbrush Base", "Skin Texture Preservation", "Lashes & Hair Accessories"],
      images: [
        "https://ik.imagekit.io/asdf5690/Makeup/watermarked_img_7148972934840787390.png",
        "https://ik.imagekit.io/asdf5690/Makeup/Gemini_Generated_Image_t56mkqt56mkqt56m.png",
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1000&auto=format&fit=crop",
      ],
    },
    {
      id: "hd-airbrush",
      name: "HD & Airbrush Makeup",
      icon: Brush,
      desc: "Ultra-lightweight, camera-ready coverage that looks seamless in high-definition photography, video, and 4K lighting.",
      features: ["Sweat-Resistant Formula", "Non-Caking Base", "Flawless Close-ups"],
      images: [
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop",
      ],
    },
    {
      id: "halloween",
      name: "Halloween & SFX",
      icon: Ghost,
      tag: "SPECIALTY",
      desc: "Transformative character, illusion, dark fantasy, and creative SFX makeup designed for themed parties and Halloween events.",
      features: ["Prosthetics & Illusion", "Custom Color Paints", "All-Night Hold"],
      images: [
        "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1500840218059-8f69f5d60c2e?q=80&w=1000&auto=format&fit=crop",
      ],
    },
    {
      id: "texture-glam",
      name: "Texture & Dextore Glam",
      icon: Layers,
      desc: "Specialized high-definition skin texturing, glass-skin dewiness, and dimensional glam highlighting natural facial contours.",
      features: ["Dimensional Highlighting", "Pore-Blurring Finish", "Dewy Glass Finish"],
      images: [
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1000&auto=format&fit=crop",
      ],
    },
    {
      id: "hairstyle",
      name: "Luxury Hair Styling",
      icon: Scissors,
      desc: "Hollywood waves, textured buns, braided crowns, and sleek styles tailored to complement your outfit and face structure.",
      features: ["Hair Extensions Placement", "Thermal Styling", "Decorative Hair Accessories"],
      images: [
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
      ],
    },
    {
      id: "draping",
      name: "Saree & Dupatta Draping",
      icon: Shirt,
      desc: "Precision draping with graceful pleats, clean structural fitting, and comfortable pinning for sarees and bridal lehengas.",
      features: ["Traditional & Modern Styles", "Can-Can Adjustments", "Secure All-Day Pinning"],
      images: [
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop",
      ],
    },
  ];

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
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white font-sans pt-28 pb-20">
      {/* Font Preloads */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        .font-script { font-family: 'Great Vibes', cursive; }
        .font-serif-custom { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* Background Gold Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-150px] top-10 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />
        <div className="absolute right-[-150px] top-1/3 h-[600px] w-[600px] rounded-full bg-[#D4AF37]/10 blur-[200px]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        <motion.section
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          className="py-6"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-black/60 px-5 py-2 text-xs text-[#D4AF37] backdrop-blur-md tracking-[0.2em] uppercase font-semibold shadow-[0_0_20px_rgba(212,175,55,0.15)]">
              <Sparkles className="h-3.5 w-3.5" />
              BESPOKE BEAUTY EXPERIENCES
            </div>

            <h1 className="font-serif-custom text-4xl sm:text-6xl font-light text-white tracking-tight mt-5">
              Our <span className="text-[#D4AF37] italic font-normal">Services</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              Explore our 6 core signature beauty & styling offerings. Click on any card below to view lookbooks and features.
            </p>
          </motion.div>

          {/* Service Cards Grid (3 Columns x 2 Rows Layout) */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-[1400px] mx-auto">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.id}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  onClick={() => handleOpenGallery(service)}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-7 cursor-pointer backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37] hover:shadow-[0_0_35px_rgba(212,175,55,0.2)]"
                >
                  {/* Service Thumbnail Cover (Background Image Blur) */}
                  <div className="absolute right-0 top-0 w-36 h-36 opacity-15 pointer-events-none overflow-hidden rounded-bl-full">
                    <img
                      src={service.images[0]}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                    />
                  </div>

                  <div>
                    {/* Top Row: Icon, Photo Badge, and Tag */}
                    <div className="flex items-center justify-between">
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37] bg-black/80 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 border border-white/10 text-[10px] text-gray-300">
                          <Images size={12} className="text-[#D4AF37]" />
                          {service.images.length} Photos
                        </span>

                        {service.tag && (
                          <span className="rounded-full bg-[#D4AF37] px-2.5 py-1 text-[9px] font-bold tracking-widest text-black uppercase">
                            {service.tag}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif-custom mt-6 text-2xl font-medium text-white tracking-wide group-hover:text-[#D4AF37] transition-colors">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-xs leading-relaxed text-gray-300 font-light">
                      {service.desc}
                    </p>

                    {/* Feature Pills */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {service.features.map((feat, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-[10px] px-2.5 py-1 rounded bg-white/5 text-gray-300 border border-white/5"
                        >
                          <CheckCircle2 size={10} className="text-[#D4AF37]" />
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.15em] text-[#D4AF37] uppercase group-hover:translate-x-1 transition-transform">
                      VIEW LOOKBOOK <ArrowRight className="h-3.5 w-3.5" />
                    </span>

                    <div className="h-8 w-8 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                      <Maximize2 size={13} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </div>

      {/* SERVICE LOOKBOOK / IMAGE GALLERY MODAL */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-[#0a0a0a] border border-[#D4AF37]/40 rounded-2xl overflow-hidden grid md:grid-cols-12 shadow-[0_0_60px_rgba(212,175,55,0.25)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full bg-black/80 border border-white/20 text-white hover:text-[#D4AF37] flex items-center justify-center transition-colors"
              >
                <X size={20} />
              </button>

              {/* Left Column: Active Image Display */}
              <div className="md:col-span-7 bg-black flex flex-col items-center justify-center relative p-2 max-h-[50vh] md:max-h-[85vh] overflow-hidden">
                <img
                  src={activeModalImage}
                  alt={selectedService.name}
                  className="w-full h-full object-contain rounded-lg"
                />

                {/* Thumbnails Row below main image */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 rounded-full bg-black/70 backdrop-blur-md border border-white/10 max-w-[90%] overflow-x-auto">
                  {selectedService.images.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveModalImage(imgUrl)}
                      className={`relative h-12 w-12 rounded-lg overflow-hidden shrink-0 border transition-all ${
                        activeModalImage === imgUrl
                          ? "border-[#D4AF37] scale-105 shadow-[0_0_10px_rgba(212,175,55,0.6)]"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Service Info & Details */}
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10 overflow-y-auto">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                      SERVICE LOOKBOOK
                    </span>
                  </div>

                  <h2 className="font-serif-custom text-2xl sm:text-3xl text-white font-medium mt-2">
                    {selectedService.name}
                  </h2>

                  <div className="h-[1px] w-full bg-white/10 my-4" />

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light mb-6">
                    {selectedService.desc}
                  </p>

                  <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">
                    WHAT'S INCLUDED:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {selectedService.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 size={14} className="text-[#D4AF37]" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal CTA Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                  <span className="text-[11px] text-gray-400">
                    {selectedService.images.length} High-Res Photos
                  </span>

                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-[#D4AF37] text-xs font-semibold tracking-[0.15em] text-[#D4AF37] uppercase hover:bg-[#D4AF37] hover:text-black transition-all bg-black/40"
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