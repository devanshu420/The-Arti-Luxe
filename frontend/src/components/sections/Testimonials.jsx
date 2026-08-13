import { motion, useReducedMotion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react";
import OptimizedImage from "../OptimizedImage";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  const testimonials = [
    {
      id: 1,
      name: "Devanshu Sharma",
      service: "Developer",
      rating: 5,
      isHighlighted: true, // Special highlight flag for larger avatar & gold glow
      quote:
        "The makeup work looks absolutely beautiful and professional. The bridal looks are elegant, well-finished, and beautifully done. Highly recommended for anyone looking for a premium makeup artist!",
      image:
        "https://ik.imagekit.io/asdf5690/Makeup/Devanshu%20bbbbbbb.jpeg?tr=w-200,h-200,fo-face,q-80,f-auto",
    },
    {
      id: 2,
      name: "Neha Gupta",
      service: "Party Makeup",
      rating: 5,
      quote:
        "The professionalism and attention to skin texture was incredible. I received endless compliments on my cocktail look. Highly recommended!",
      image:
        "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=200&h=200&fit=crop&crop=faces&q=80", // Indian Woman
    },
    {
      id: 3,
      name: "Anushka Verma",
      service: "Editorial Makeup",
      rating: 5,
      quote:
        "Working with Luxé Beauty Studio was an absolute dream. The makeup was creative, high-fashion, and perfectly suited for studio lights.",
      image:
        "https://ik.imagekit.io/asdf5690/Makeup/Review/Screenshot%202026-08-13%20120101.png?tr=w-200,h-200,fo-face,q-80,f-auto", 
    },
    {
      id: 4,
      name: "Ritika Sharma",
      service: "Bridal Makeup",
      rating: 5,
      quote:
        "Every single detail was executed with perfection. Arti understood my vision and created a royal bridal look that exceeded my expectations.",
      image:
        "https://ik.imagekit.io/asdf5690/Makeup/Review/Screenshot%202026-08-13%20120011.png?tr=w-200,h-200,fo-face,q-80,f-auto", // Indian Professional Woman
    },
    {
      id: 5,
      name: "Divya Patel",
      service: "Reception Makeup",
      rating: 5,
      quote:
        "I booked Luxé Beauty for my reception glam and could not be happier. Clean, hygienic brushes and a gorgeous long-lasting finish!",
      image:
        "https://ik.imagekit.io/asdf5690/Makeup/Review/Screenshot%202026-08-13%20120032.png?tr=w-200,h-200,fo-face,q-80,f-auto", // Indian Woman Portrait
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
    <section className="relative overflow-hidden bg-[#050505] text-white font-sans py-1 sm:py-0 lg:py-0">
      {/* Font Preloads */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        .font-serif-custom { font-family: 'Playfair Display', serif; }
        
        /* Swiper Custom Styling */
        .luxury-testimonials-swiper {
          padding-bottom: 50px !important;
          padding-top: 10px !important;
        }
        .luxury-testimonials-swiper .swiper-pagination-bullet {
          background: #D4AF37 !important;
          opacity: 0.35;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .luxury-testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 9999px;
          background: #D4AF37 !important;
        }
        .luxury-testimonials-swiper .swiper-button-next,
        .luxury-testimonials-swiper .swiper-button-prev {
          color: #D4AF37 !important;
          width: 42px;
          height: 42px;
          border-radius: 9999px;
          background: rgba(10, 10, 10, 0.85);
          border: 1px solid rgba(212, 175, 55, 0.4);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        .luxury-testimonials-swiper .swiper-button-next:hover,
        .luxury-testimonials-swiper .swiper-button-prev:hover {
          background: #D4AF37;
          color: #000000 !important;
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
        }
        .luxury-testimonials-swiper .swiper-button-next::after,
        .luxury-testimonials-swiper .swiper-button-prev::after {
          font-size: 14px;
          font-weight: 700;
        }
      `}</style>

      {/* Gold Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.12, 0.25, 0.12] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-10%] top-10 h-96 w-96 rounded-full bg-[#D4AF37]/12 blur-3xl"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 16, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-10%] bottom-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.p
            variants={itemVariants}
            className="text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase"
          >
            — REAL BRIDAL & CLIENT STORIES —
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="mt-3 font-serif-custom text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white"
          >
            Client <span className="text-[#D4AF37] italic font-normal">Testimonials</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-3 max-w-xl text-xs sm:text-sm lg:text-base leading-relaxed text-gray-300 font-light"
          >
            Read trusted reviews from brides, clients, and collaborators who experienced our luxury makeup artistry and personalized care.
          </motion.p>
        </motion.div>

        {/* Testimonials Swiper Carousel */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="luxury-testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -4 }}
                  className="relative flex flex-col justify-between h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 shadow-md backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37]/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/8 via-transparent to-transparent pointer-events-none" />

                  <div>
                    {/* Top Row: Stars & Quote Icon */}
                    <div className="relative flex items-center justify-between">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                        ))}
                      </div>
                      <Quote className="h-7 w-7 text-[#D4AF37]/40" />
                    </div>

                    {/* Quote Content */}
                    <p className="relative mt-4 text-xs sm:text-sm leading-relaxed text-gray-300 font-light italic">
                      “{testimonial.quote}”
                    </p>
                  </div>

                  {/* Client Info Footer */}
                  <div className="relative mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                    <div
                      className={`shrink-0 overflow-hidden rounded-full border bg-black transition-all ${
                        testimonial.isHighlighted
                          ? "w-14 h-14 sm:w-16 sm:h-16 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.6)] ring-2 ring-[#D4AF37]/40"
                          : "w-11 h-11 border-[#D4AF37]/60"
                      }`}
                    >
                      <OptimizedImage
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={testimonial.isHighlighted ? 150 : 100}
                        height={testimonial.isHighlighted ? 150 : 100}
                        quality={80}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif-custom text-base font-medium text-white flex items-center gap-1.5">
                        {testimonial.name}
                      </h3>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[#D4AF37]">
                        {testimonial.service}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}