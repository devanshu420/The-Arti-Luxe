import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Maximize2,
  Heart,
  Sparkles,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import OptimizedImage from "../components/OptimizedImage";
import { getOptimizedImageUrl } from "../utils/Imagekit";
import GoldSparklesBackground from "../components/ui/GoldSparklesBackground";

// Luxury Shimmer Skeleton for Portfolio Grid Cards
function PortfolioCardSkeleton() {
  return (
    <div className="relative rounded-xl overflow-hidden border border-white/5 bg-[#0e0e0e] shadow-md flex flex-col">
      <div className="w-full aspect-3/4 relative overflow-hidden bg-neutral-900 flex items-center justify-center">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent" />
        <Sparkles className="w-6 h-6 text-[#D4AF37]/20 animate-pulse" />
      </div>
    </div>
  );
}

// Cleaned, Re-indexed & Focused Portfolio Items (IDs 1 to 25)
const portfolioItems = [
  {
    id: 1,
    title: "Couture Bridal Beauty Portrait",
    category: "BRIDAL",
    image:
      "https://ik.imagekit.io/asdf5690/Makeup/gurpreet-singh-Po-nggQqplE-unsplash.jpg",
    likes: 189,
  },
  {
    id: 2,
    title: "Soft Glam Look",
    category: "RECEPTION",
    image:
      "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/pvknvjvhojh.jpeg",
    likes: 167,
  },
  {
    id: 3,
    title: "Stitched FX Look",
    category: "HALLOWEEN",
    image:
      "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.10.33.jpeg",
    likes: 178,
  },
  {
    id: 4,
    title: "Soft Watermelon Look",
    category: "HALLOWEEN",
    image:
      "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/slkjkj,jkhfk.jpeg",
    likes: 230,
  },
  {
    id: 5,
    title: "Creative Look on Face",
    category: "HALLOWEEN",
    image:
      "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.01.08.jpeg",
    likes: 289,
  },
  {
    id: 6,
    title: "Glitter Cut-Crease Reception Look",
    category: "RECEPTION",
    image:
      "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.01.09fff.jpeg",
    likes: 228,
  },
  {
    id: 7,
    title: "Pastel Pink Mehendi Glam",
    category: "RECEPTION",
    image:
      "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/pxvkvbvj%20.jpeg",
    likes: 164,
  },
  {
    id: 8,
    title: "Neat Juda Hair Do",
    category: "HAIR DO",
    image:
      "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.23.50%20(1).jpeg",
    likes: 199,
  },
  {
    id: 9,
    title: "Royal Golden Reception Look",
    category: "RECEPTION",
    image:
      "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.23.50%20(2).jpeg",
    likes: 253,
  },
  {
    id: 10,
    title: "Soft Curl Hair Do",
    category: "HAIR DO",
    image:
      "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.23.50%20(4).jpeg",
    likes: 221,
  },
  {
    id: 11,
    title: "Heavy Braid Hair Do",
    category: "HAIR DO",
    image:
      "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.23.50%20(5).jpeg",
    likes: 175,
  },
  {
    id: 12,
    title: "Messy Soft Juda",
    category: "HAIR DO",
    image:
      "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.23.50%20(7).jpeg",
    likes: 340,
  },
  {
    id: 13,
    title: "Radha Rani Glam Look",
    category: "EDITORIAL",
    image:
      "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.23.50%20(6).jpeg",
    likes: 162,
  },
  {
    id: 14,
    title: "Rajasthani Glam Look",
    category: "EDITORIAL",
    image:
      "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/bmxv.jpeg",
    likes: 208,
  },
  {
    id: 15,
    title: "Bridal Juda Look",
    category: "RECEPTION",
    image:
      "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.23.50%20(3).jpeg",
    likes: 195,
  },
  {
    id: 16,
    title: "Cut Crease Eye Look",
    category: "PARTY",
    image:
      "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.23.50%20(9).jpeg",
    likes: 187,
  },
  {
    id: 17,
    title: "Creative Avatar Look",
    category: "HALLOWEEN",
    image:
      "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/kxbmv%20v.jpeg",
    likes: 213,
  },
  {
    id: 18,
    title: "Soft Elegant Look",
    category: "RECEPTION",
    image:
      "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/odhdk.jpeg",
    likes: 322,
  },
  {
    id: 19,
    title: "Dual Colour Cut Crease Look",
    category: "EDITORIAL",
    image:
      "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.25.13%20(1).jpeg",
    likes: 179,
  },
  {
    id: 20,
    title: "Horror Look",
    category: "HALLOWEEN",
    image:
      "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/mvbv.jpeg",
    likes: 145,
  },
  {
    id: 21,
    title: "Burn Horrible Look",
    category: "HALLOWEEN",
    image:
      "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.10.34.jpeg",
    likes: 231,
  },
  {
    id: 22,
    title: "Gorgeous Party Look",
    category: "RECEPTION",
    image:
      "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20atsff.jpeg",
    likes: 188,
  },
  {
    id: 23,
    title: "Soft Cloud Look",
    category: "HALLOWEEN",
    image:
      "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/dkgbfg,jbjgf.jpeg",
    likes: 172,
  },
  {
    id: 24,
    title: "Dual Colour Cut Crease New One",
    category: "EDITORIAL",
    image:
      "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/WhatsApp%20Image%202026-08-06%20at%2018.25.13.jpeg",
    likes: 350,
  },
  {
    id: 25,
    title: "SFX & Gore Realistic Horror",
    category: "HALLOWEEN",
    image:
      "https://ik.imagekit.io/asdf5690/Makeup/Gallery/New%20Gallery/mnxbmcbm.jpeg",
    likes: 191,
  },
];

const categories = [
  "ALL",
  "BRIDAL",
  "RECEPTION",
  "PARTY",
  "HAIR DO",
  "HALLOWEEN",
  "EDITORIAL",
];
const ITEMS_PER_PAGE = 15;

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [likedItems, setLikedItems] = useState({});
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [isModalImgLoading, setIsModalImgLoading] = useState(true);

  useEffect(() => {
    document.title = "Makeup Portfolio | The Arti Luxe";
    const timer = setTimeout(() => setIsDataLoading(false), 350);
    return () => clearTimeout(timer);
  }, []);

  const filteredItems =
    activeCategory === "ALL"
      ? portfolioItems
      : portfolioItems.filter(
          (item) =>
            item.category.toUpperCase() === activeCategory.toUpperCase(),
        );

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const handleCategoryChange = (cat) => {
    setIsDataLoading(true);
    setActiveCategory(cat);
    setCurrentPage(1);
    setTimeout(() => setIsDataLoading(false), 250);
  };

  const handlePageChange = (page) => {
    setIsDataLoading(true);
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: "smooth" });
    setTimeout(() => setIsDataLoading(false), 250);
  };

  const handleOpenModal = (item) => {
    setSelectedImage(item);
    setIsModalImgLoading(true);
  };

  const toggleLike = (e, id) => {
    e.stopPropagation();
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <main className="min-h-screen pt-24 sm:pt-28 pb-16 bg-[#050505] text-white font-sans relative overflow-hidden select-none">
      {/* Background Sparkles Component */}
      <GoldSparklesBackground />

      <div className="w-full px-2.5 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-8 sm:w-10 bg-[#D4AF37]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#D4AF37] font-semibold">
              CURATED ARTISTRY
            </span>
            <div className="h-px w-8 sm:w-10 bg-[#D4AF37]" />
          </div>

          <h1
            className="text-3xl sm:text-6xl font-light text-white tracking-tight mb-2 sm:mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Portfolio{" "}
            <span className="text-[#D4AF37] italic font-normal">Gallery</span>
          </h1>

          <p className="text-gray-400 text-xs sm:text-base leading-relaxed font-light px-2">
            Explore our collection of bespoke bridal looks, editorial shoots,
            and party glam created with luxury products and precision artistry.
          </p>
        </motion.div>

        {/* CATEGORY FILTER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`cursor-pointer relative px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] sm:tracking-[0.2em] transition-all duration-300 uppercase ${
                activeCategory === cat
                  ? "text-black bg-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                  : "text-gray-300 border border-white/10 bg-black/40 hover:border-[#D4AF37]/60 hover:text-[#D4AF37]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* GRID LAYOUT (FIXED: mode="popLayout" instead of mode="wait") */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 min-h-[500px]">
          {isDataLoading ? (
            Array.from({ length: 10 }).map((_, index) => (
              <PortfolioCardSkeleton key={index} />
            ))
          ) : (
            <AnimatePresence mode="popLayout">
              {currentItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative group rounded-xl overflow-hidden cursor-pointer border border-white/10 bg-[#0a0a0a] hover:border-[#D4AF37]/60 transition-all duration-300 shadow-md flex flex-col"
                  onClick={() => handleOpenModal(item)}
                >
                  <div className="w-full aspect-3/4 relative overflow-hidden bg-zinc-900 flex items-center justify-center">
                    <OptimizedImage
                      src={item.image}
                      alt={`${item.title} - HD Bridal & Makeup Artist in Kapashera, Delhi`}
                      width={500}
                      height={667}
                      quality={75}
                      responsiveWidths={[300, 500, 700]}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/25 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 sm:p-3 flex flex-col justify-between pointer-events-none">
                    <div className="flex items-center justify-between pointer-events-auto">
                      <span className="px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[9px] uppercase tracking-wider bg-[#D4AF37] text-black font-bold shadow-sm">
                        {item.category}
                      </span>

                      <button
                        onClick={(e) => toggleLike(e, item.id)}
                        className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors"
                      >
                        <Heart
                          size={11}
                          className={
                            likedItems[item.id]
                              ? "fill-[#D4AF37] text-[#D4AF37]"
                              : ""
                          }
                        />
                      </button>
                    </div>

                    <div className="flex items-end justify-between gap-1.5 pointer-events-auto">
                      <div className="overflow-hidden">
                        <h3
                          className="text-[10px] sm:text-xs text-white font-medium truncate drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-[8px] sm:text-[9px] text-gray-300 flex items-center gap-0.5 font-light">
                          <Eye size={9} className="text-[#D4AF37]" /> View
                        </p>
                      </div>

                      <div className="h-6 w-6 sm:h-7 sm:w-7 shrink-0 rounded-full border border-[#D4AF37] text-[#D4AF37] bg-black/60 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                        <Maximize2 size={10} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>

        {/* PAGINATION CONTROLS */}
        {totalPages > 1 && (
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`h-8 w-8 sm:h-10 sm:w-10 rounded-full border flex items-center justify-center transition-all ${
                  currentPage === 1
                    ? "border-white/10 text-gray-600 cursor-not-allowed"
                    : "border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                }`}
              >
                <ChevronLeft size={16} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`h-8 w-8 sm:h-10 sm:w-10 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider transition-all ${
                      currentPage === page
                        ? "bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                        : "border border-white/10 text-gray-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`h-8 w-8 sm:h-10 sm:w-10 rounded-full border flex items-center justify-center transition-all ${
                  currentPage === totalPages
                    ? "border-white/10 text-gray-600 cursor-not-allowed"
                    : "border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
                }`}
              >
                <ChevronRight size={16} />
              </button>
            </div>

            <span className="text-[11px] sm:text-xs text-gray-400 font-light">
              Showing {indexOfFirstItem + 1}–
              {Math.min(indexOfLastItem, filteredItems.length)} of{" "}
              {filteredItems.length} Looks
            </span>
          </div>
        )}

        {/* LIGHTBOX MODAL */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 overflow-hidden"
              onClick={() => setSelectedImage(null)}
            >
              {/* ========================================= */}
              {/* MODAL BACKGROUND GOLD SPARKLES & GLOW */}
              {/* ========================================= */}
              <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
                {/* Soft Ambient Gold Halo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] sm:h-[650px] sm:w-[650px] rounded-full bg-[#D4AF37]/15 blur-[140px] pointer-events-none animate-pulse" />

                {/* Floating Modal Background Sparkles */}
                {[
                  { id: 1, top: "12%", left: "10%", size: "w-5 h-5", delay: 0 },
                  {
                    id: 2,
                    top: "20%",
                    right: "12%",
                    size: "w-4 h-4",
                    delay: 0.3,
                  },
                  {
                    id: 3,
                    top: "78%",
                    left: "14%",
                    size: "w-4 h-4",
                    delay: 0.5,
                  },
                  {
                    id: 4,
                    top: "82%",
                    right: "10%",
                    size: "w-6 h-6",
                    delay: 0.2,
                  },
                  {
                    id: 5,
                    top: "48%",
                    left: "6%",
                    size: "w-3 h-3",
                    delay: 0.7,
                  },
                  {
                    id: 6,
                    top: "42%",
                    right: "6%",
                    size: "w-5 h-5",
                    delay: 0.4,
                  },
                ].map((sparkle) => (
                  <motion.div
                    key={sparkle.id}
                    style={{
                      position: "absolute",
                      top: sparkle.top,
                      left: sparkle.left,
                      right: sparkle.right,
                    }}
                    initial={{ opacity: 0, scale: 0.5, y: 10 }}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.25, 0.8],
                      y: [0, -12, 0],
                      rotate: [0, 90, 180],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: sparkle.delay,
                      ease: "easeInOut",
                    }}
                    className="text-[#D4AF37] drop-shadow-[0_0_12px_#D4AF37]"
                  >
                    <Sparkles className={sparkle.size} />
                  </motion.div>
                ))}
              </div>

              {/* ========================================= */}
              {/* MODAL MAIN CONTENT BOX */}
              {/* ========================================= */}
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ type: "spring", damping: 26, stiffness: 320 }}
                className="relative z-10 max-w-4xl w-full max-h-[88vh] bg-[#0a0a0a] border border-[#D4AF37]/40 rounded-2xl overflow-hidden grid md:grid-cols-12 shadow-[0_0_70px_rgba(212,175,55,0.3)]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Fixed Close Button (Never touches navbar) */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-40 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-black/90 border border-white/20 text-white hover:text-[#D4AF37] hover:border-[#D4AF37] flex items-center justify-center transition-all shadow-xl cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>

                {/* Left Column: Image Viewer */}
                <div className="md:col-span-7 bg-black flex items-center justify-center h-[300px] sm:h-[400px] md:h-[550px] overflow-hidden relative border-b md:border-b-0 md:border-r border-white/10 p-2">
                  {isModalImgLoading && (
                    <div className="absolute inset-0 bg-neutral-900/90 overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
                      <Sparkles className="w-8 h-8 text-[#D4AF37]/40 animate-pulse" />
                    </div>
                  )}

                  <img
                    src={getOptimizedImageUrl(selectedImage.image, {
                      width: 1200,
                      quality: 85,
                      format: "auto",
                    })}
                    alt={`${selectedImage.title} High Resolution`}
                    onLoad={() => setIsModalImgLoading(false)}
                    className={`w-full h-full object-contain object-center transition-opacity duration-300 ${
                      isModalImgLoading ? "opacity-0" : "opacity-100"
                    }`}
                    loading="eager"
                  />
                </div>

                {/* Right Column: Details */}
                <div className="md:col-span-5 p-5 sm:p-8 flex flex-col justify-between border-t md:border-t-0 border-white/10 bg-[#0a0a0a] overflow-y-auto">
                  <div>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                      {selectedImage.category} LOOK
                    </span>

                    <h2
                      className="text-lg sm:text-2xl lg:text-3xl text-white font-medium mt-1 sm:mt-2 mb-2 sm:mb-3"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {selectedImage.title}
                    </h2>

                    <div className="h-[1px] w-full bg-white/10 my-2 sm:my-3" />

                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light mb-3 sm:mb-5">
                      Customized high-definition bridal glam tailored for skin
                      texture preservation, featuring long-lasting HD products
                      and glowing airbrush finishes.
                    </p>

                    <div className="space-y-1.5 sm:space-y-2.5">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Sparkles size={13} className="text-[#D4AF37]" /> HD
                        Airbrush Finish
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Sparkles size={13} className="text-[#D4AF37]" />{" "}
                        Premium International Brands
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <button
                      onClick={(e) => toggleLike(e, selectedImage.id)}
                      className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-[#D4AF37] transition-colors cursor-pointer"
                    >
                      <Heart
                        size={16}
                        className={
                          likedItems[selectedImage.id]
                            ? "fill-[#D4AF37] text-[#D4AF37]"
                            : ""
                        }
                      />
                      <span>
                        {likedItems[selectedImage.id]
                          ? selectedImage.likes + 1
                          : selectedImage.likes}{" "}
                        Likes
                      </span>
                    </button>

                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-[#D4AF37] text-[10px] sm:text-xs font-semibold tracking-[0.15em] text-[#D4AF37] uppercase hover:bg-[#D4AF37] hover:text-black transition-all bg-black/40 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                    >
                      BOOK THIS LOOK
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
