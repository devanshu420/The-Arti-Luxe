import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  Award,
  CheckCircle2,
  Clock,
  Users,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  X,
  PhoneCall,
  Star,
} from "lucide-react";
import GoldSparklesBackground from "../components/ui/GoldSparklesBackground";

// Luxury Shimmer Skeleton for Course Cards
function CourseCardSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-[#0e0e0e] p-6 sm:p-8 flex flex-col justify-between shadow-xl min-h-[460px]">
      {/* Shimmer Sweep Animation */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent" />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="h-5 w-28 rounded-full bg-neutral-900" />
          <div className="h-4 w-24 rounded bg-neutral-900" />
        </div>

        <div className="h-8 w-4/5 rounded-lg bg-neutral-900 pt-1" />

        <div className="flex items-center gap-4 py-3 border-y border-neutral-900">
          <div className="h-4 w-32 rounded bg-neutral-900/80" />
          <div className="h-4 w-28 rounded bg-neutral-900/80" />
        </div>

        <div className="space-y-2 pt-1">
          <div className="h-3.5 w-full rounded bg-neutral-900/70" />
          <div className="h-3.5 w-5/6 rounded bg-neutral-900/60" />
        </div>

        <div className="space-y-2.5 pt-3">
          <div className="h-3 w-28 rounded bg-neutral-900" />
          <div className="h-3.5 w-3/4 rounded bg-neutral-900/70" />
          <div className="h-3.5 w-2/3 rounded bg-neutral-900/70" />
          <div className="h-3.5 w-4/5 rounded bg-neutral-900/70" />
        </div>
      </div>

      <div className="pt-5 border-t border-neutral-900 flex items-center justify-between">
        <div className="space-y-1">
          <div className="h-2.5 w-20 rounded bg-neutral-900" />
          <div className="h-3.5 w-24 rounded bg-neutral-900" />
        </div>
        <div className="h-9 w-32 rounded-full bg-neutral-900" />
      </div>
    </div>
  );
}

// Certificate Image Placeholder
const certificateImg =
  "https://ik.imagekit.io/asdf5690/Makeup/Certificate%20Arti.jpeg?updatedAt=1786801463608";

export default function Classes() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [isCertLoading, setIsCertLoading] = useState(true);

  useEffect(() => {
    document.title = "Makeup Classes | The Arti Luxe";
    const timer = setTimeout(() => setIsDataLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  const courses = [
    {
      id: "pro-masterclass",
      title: "Complete Professional Makeup Masterclass",
      tag: "CAREER COURSE",
      duration: "2 Month (120 Hours)",
      mode: "Personalized 1-on-1",
      level: "Basic to Advanced",
      price: "Enquire for Fees",
      desc: "An intensive career-focused program designed to transform beginners into certified professional makeup artists. Covers skin prep, HD airbrush techniques, bridal glam, color theory, and client management.",
      curriculum: [
        "Skin Science & Texture Analysis",
        "Color Correction & Base Matching",
        "HD & Airbrush Bridal Techniques",
        "Eye Makeup Mastery (Cut crease, Smokey, Glitter)",
        "Portfolio Shoot & Social Media Branding",
      ],
      features: [
        "Live Model Practice",
        "Professional Kit Guidance",
        "Recognized Certification",
        "Post-Course Mentorship",
      ],
    },
    {
      id: "self-grooming",
      title: "Personal Self Grooming Workshop",
      tag: "PERSONAL COURSE",
      duration: "1 Month (60 Hours)",
      mode: "Personalized 1-on-1",
      level: "Beginner Friendly",
      price: "Enquire for Fees",
      desc: "Learn how to style yourself effortlessly for work, parties, and everyday wear using your existing makeup kit while discovering the best products for your unique skin tone.",
      curriculum: [
        "5-Minute Everyday No-Makeup Look",
        "Day-to-Night Glam Transformation",
        "Skin Care Routines & Shade Selection",
        "Basic Hairstyling & Saree Draping Essentials",
      ],
      features: [
        "Personal Vanity Product Audit",
        "1-on-1 Artist Attention",
        "Custom Beauty Guidebook",
      ],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white font-sans pt-24 pb-16 select-none">
      
      {/* Background Gold Sparkles Component */}
      <GoldSparklesBackground />

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12 z-10">
        
        {/* ========================================= */}
        {/* HEADER SECTION */}
        {/* ========================================= */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/35 bg-[#0a0a0a]/80 px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs text-[#D4AF37] backdrop-blur-md tracking-[0.25em] uppercase font-semibold shadow-[0_0_25px_rgba(212,175,55,0.18)]">
            <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 animate-spin-slow text-[#D4AF37]" />
            LUXÉ BEAUTY ACADEMY
          </div>

          <h1 className="font-serif-custom text-3xl sm:text-5xl font-light text-white tracking-tight mt-4">
            Makeup & <span className="text-[#D4AF37] italic font-normal">Grooming Classes</span>
          </h1>

          <p className="mt-3 text-xs sm:text-base text-gray-300 font-light leading-relaxed px-2">
            Elevate your passion into a thriving career or master your personal look with accredited courses taught by senior makeup artist Arti Sharma.
          </p>
        </motion.div>

        {/* ========================================= */}
        {/* COURSES LISTING GRID (WITH SKELETON) */}
        {/* ========================================= */}
        <div className="mb-14">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              CURRICULUM
            </span>
            <h2 className="font-serif-custom text-2xl sm:text-3xl text-white font-light mt-1">
              Featured <span className="text-[#D4AF37] italic font-normal">Programs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1100px] mx-auto">
            {isDataLoading
              ? Array.from({ length: 2 }).map((_, index) => (
                  <CourseCardSkeleton key={index} />
                ))
              : courses.map((course) => (
                  <motion.div
                    key={course.id}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 sm:p-8 flex flex-col justify-between shadow-xl backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37]/60 hover:shadow-[0_0_35px_rgba(212,175,55,0.18)]"
                  >
                    {/* Background Subtle Flare */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />

                    <div>
                      {/* Tag & Level */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-black text-[9px] font-bold tracking-widest uppercase">
                          {course.tag}
                        </span>
                        <span className="text-xs text-gray-400 font-light flex items-center gap-1">
                          <BookOpen size={13} className="text-[#D4AF37]" />
                          {course.level}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif-custom text-xl sm:text-2xl text-white font-medium mb-2">
                        {course.title}
                      </h3>

                      {/* Program Meta Details */}
                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 py-2 border-y border-white/5">
                        <div className="flex items-center gap-1.5">
                          <Clock size={13} className="text-[#D4AF37]" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users size={13} className="text-[#D4AF37]" />
                          <span>{course.mode}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-gray-300 font-light leading-relaxed mb-4">
                        {course.desc}
                      </p>

                      {/* Key Syllabus Points */}
                      <h4 className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold mb-2">
                        WHAT YOU WILL LEARN:
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {course.curriculum.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-gray-300 font-light">
                            <CheckCircle2 size={13} className="text-[#D4AF37] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Course CTA Footer */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                      <div>
                        <span className="block text-[9px] text-gray-400 uppercase tracking-wider">
                          ADMISSION STATUS
                        </span>
                        <span className="text-xs text-[#D4AF37] font-semibold">
                          Enrolling Now
                        </span>
                      </div>

                      <button
                        onClick={() => setSelectedCourse(course)}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D4AF37] text-xs font-semibold tracking-[0.15em] text-[#D4AF37] uppercase hover:bg-[#D4AF37] hover:text-black transition-all bg-black/50"
                      >
                        <span>ENQUIRE NOW</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </motion.div>
                ))}
          </div>
        </div>

        {/* ========================================= */}
        {/* CERTIFICATE SHOWCASE SECTION */}
        {/* ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-[#0a0a0a] p-6 sm:p-10 shadow-[0_0_40px_rgba(0,0,0,0.8)] max-w-[1100px] mx-auto mb-12"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left: Certificate Description */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-black/60 px-3 py-1 text-[11px] text-[#D4AF37] tracking-[0.2em] uppercase font-semibold mb-3">
                <ShieldCheck className="h-3.5 w-3.5" />
                VERIFIED CREDENTIALS
              </div>

              <h2 className="font-serif-custom text-2xl sm:text-4xl font-light text-white leading-tight">
                Earn a Recognized <br />
                <span className="text-[#D4AF37] italic font-normal">Academy Certificate</span>
              </h2>

              <p className="mt-3 text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                Upon successful completion of your training and practical assessment, you will receive an official Completion Certificate from <strong className="text-white">The Arti Luxe Studio & Academy</strong>.
              </p>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2.5 text-xs text-gray-200">
                  <Star size={13} className="text-[#D4AF37] fill-[#D4AF37]" />
                  <span>Valid for professional studio employment & freelance practice</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-200">
                  <Star size={13} className="text-[#D4AF37] fill-[#D4AF37]" />
                  <span>Includes student credential registration & verification</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-200">
                  <Star size={13} className="text-[#D4AF37] fill-[#D4AF37]" />
                  <span>Signed & awarded directly by Senior Artist Arti Sharma</span>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="https://wa.me/918960507259"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#D4AF37] bg-[#D4AF37] text-xs font-semibold tracking-[0.15em] text-black uppercase hover:bg-transparent hover:text-[#D4AF37] transition-all shadow-[0_0_15px_rgba(212,175,55,0.25)]"
                >
                  <PhoneCall size={13} />
                  <span>VERIFY OR ENQUIRE ON WHATSAPP</span>
                </a>
              </div>
            </div>

            {/* Right: Certificate Image Showcase Frame (With Shimmer) */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-2 rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 rotate-1 pointer-events-none" />
                <div className="relative overflow-hidden rounded-lg border border-white/20 bg-black shadow-2xl min-h-[260px] flex items-center justify-center">
                  
                  {isCertLoading && (
                    <div className="absolute inset-0 bg-neutral-900 overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
                      <Sparkles className="w-8 h-8 text-[#D4AF37]/30 animate-pulse" />
                    </div>
                  )}

                  <img
                    src={certificateImg}
                    alt="The Arti Luxe Academy Official Certificate"
                    onLoad={() => setIsCertLoading(false)}
                    className={`w-full h-auto object-cover transition-opacity duration-300 ${
                      isCertLoading ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ========================================= */}
      {/* ENROLLMENT INQUIRY MODAL */}
      {/* ========================================= */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-md w-full bg-[#0a0a0a] border border-[#D4AF37]/40 rounded-2xl p-6 shadow-[0_0_50px_rgba(212,175,55,0.25)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 h-8 w-8 rounded-full bg-black/80 border border-white/20 text-white hover:text-[#D4AF37] flex items-center justify-center transition-colors"
              >
                <X size={16} />
              </button>

              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                  ENROLLMENT INQUIRY
                </span>

                <h3 className="font-serif-custom text-xl text-white font-medium mt-1 mb-2">
                  {selectedCourse.title}
                </h3>

                <p className="text-xs text-gray-300 font-light mb-5">
                  Fill in your details below or chat with us on WhatsApp to reserve your seat for the upcoming batch.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.open(
                      `https://wa.me/918960507259?text=Hello,%20I%20am%20interested%20in%20enrolling%20for%20the%20${encodeURIComponent(
                        selectedCourse.title
                      )}`,
                      "_blank"
                    );
                    setSelectedCourse(null);
                  }}
                  className="space-y-3.5"
                >
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      className="w-full bg-black/60 border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-black/60 border border-white/10 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-3 py-2.5 rounded-full border border-[#D4AF37] bg-[#D4AF37] text-xs font-semibold tracking-[0.2em] text-black uppercase transition-all hover:bg-transparent hover:text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.25)]"
                  >
                    CONTINUE ON WHATSAPP
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}