import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ShieldCheck,
  House,
  Users,
  Instagram,
  MessageCircle,
  Youtube,
} from "lucide-react";

const bridal = "https://ik.imagekit.io/asdf5690/Makeup/Gemini_Generated_Image_t56mkqt56mkqt56m.png";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const features = [
    {
      icon: Sparkles,
      title: "PREMIUM PRODUCTS",
    },
    {
      icon: Users,
      title: "EXPERT ARTIST",
    },
    {
      icon: ShieldCheck,
      title: "HYGIENIC & SAFE",
    },
    {
      icon: House,
      title: "HOME SERVICE",
    },
  ];

  const socials = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/the_arti_luxe/",
      name: "Instagram",
      hoverClass:
        "hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(220,39,67,0.6)]",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/@arti_sharma2004?si=RBLLrddZ7Q3RvTT9",
      name: "YouTube",
      hoverClass:
        "hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] hover:shadow-[0_0_15px_rgba(255,0,0,0.6)]",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/918960507259",
      name: "WhatsApp",
      hoverClass:
        "hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-[0_0_15px_rgba(37,211,102,0.6)]",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative min-h-[85vh] lg:min-h-screen w-full bg-[#050505] text-white font-sans overflow-hidden pt-16 sm:pt-20 lg:pt-24">
      {/* Google Fonts Preload */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        .font-script { font-family: 'Great Vibes', cursive; }
        .font-serif-custom { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* ========================================= */}
      {/* BRIDAL IMAGE BACKGROUND */}
      {/* ========================================= */}
      <div className="absolute right-0 top-0 w-full lg:w-[60%] h-full z-0 overflow-hidden pointer-events-none">
        <img
          src={bridal}
          alt="Luxury Bridal Makeup"
          className="w-full h-full object-cover object-[55%_center] lg:object-[40%_center] scale-105 opacity-85 lg:opacity-100 transition-opacity duration-500"
        />

        {/* Soft Mobile Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent lg:hidden" />

        {/* Desktop Left Edge Fade */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent" />

        {/* ========================================= */}
        {/* NEW TOP VIGNETTE (Makes Logo clearly visible) */}
        {/* ========================================= */}
        <div className="absolute inset-x-0 top-0 h-24 sm:h-28 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-transparent z-10" />

        {/* Bottom Vignette */}
        <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
      </div>

      {/* ========================================= */}
      {/* GOLD BACKGROUND AMBIENT GLOWS */}
      {/* ========================================= */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute left-[-150px] top-[-50px] h-[350px] sm:h-[600px] w-[350px] sm:w-[600px] rounded-full bg-[#D4AF37]/15 blur-[100px] sm:blur-[180px]" />
      </div>

      {/* ========================================= */}
      {/* DESKTOP FLOATING SOCIAL ICONS (LEFT BAR) */}
      {/* ========================================= */}
      <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className={`h-11 w-11 rounded-full border border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] transition-all duration-300 bg-black/60 backdrop-blur-md ${social.hoverClass}`}
            >
              <Icon size={18} />
            </motion.a>
          );
        })}
      </div>

      {/* ========================================= */}
      {/* MAIN HERO CONTENT */}
      {/* ========================================= */}
      <div className="relative z-20 max-w-[1800px] mx-auto min-h-[calc(85vh-64px)] lg:min-h-[calc(100vh-80px)] grid lg:grid-cols-12 items-center px-5 sm:px-8 lg:px-16 pb-8 sm:pb-12">
        
        {/* LEFT COLUMN - TEXT CONTENT */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="lg:col-span-8 xl:col-span-7 lg:pl-6 pt-2 sm:pt-4 lg:pt-6"
        >
          {/* SUBTITLE & HANDWRITTEN ACCENT */}
          <motion.div variants={fadeUp} className="flex items-center flex-wrap gap-2 sm:gap-3 mb-2">
            <div className="h-px w-8 sm:w-12 bg-[#D4AF37]" />
            <span className="uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[10px] sm:text-[11px] text-gray-200 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              BE YOUR OWN KIND OF
            </span>
            <span className="font-script text-[#D4AF37] text-3xl sm:text-5xl ml-1 leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Beautiful.
            </span>
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h1
            variants={fadeUp}
            className="font-serif-custom text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.15] sm:leading-[1.1] tracking-tight mt-2 sm:mt-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
          >
            Enhancing <span className="text-[#D4AF37] italic font-normal drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]">Beauty,</span>
            <br />
            Creating <span className="text-[#D4AF37] italic font-normal drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]">Confidence</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            className="mt-3 sm:mt-6 max-w-130 text-gray-200 text-xs sm:text-base leading-relaxed font-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]"
          >
            Flawless HD bridal glam aur luxury styling ke saath, Senior Artist <span className="text-white font-medium">Arti Sharma</span> New Delhi ki ek behtareen aur trusted makeup artist hain.
            <br className="hidden sm:block" />
            <span className="text-gray-300 block mt-1 sm:mt-0">
              Bridal, Party, Editorial – We make your special moments unforgettable.
            </span>
          </motion.p>

          {/* CTA BUTTON & MOBILE SOCIALS */}
          <motion.div variants={fadeUp} className="mt-5 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
            <Link
              to="/contact"
              className="inline-flex h-11 sm:h-12 items-center justify-center rounded-full border border-[#D4AF37] px-7 sm:px-8 text-xs font-semibold tracking-[0.2em] text-[#D4AF37] uppercase transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] bg-black/70 backdrop-blur-md shadow-lg"
            >
              GET IN TOUCH
            </Link>

            {/* Mobile-Only Social Media Bar */}
            <div className="flex lg:hidden items-center gap-3 pt-1 sm:pt-0">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="h-10 w-10 rounded-full border border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] bg-black/80 backdrop-blur-md"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* ========================================= */}
          {/* COMPACT FEATURES BADGES ROW (MOBILE & DESKTOP) */}
          {/* ========================================= */}
          <motion.div
            variants={fadeUp}
            className="mt-8 sm:mt-16 pt-4 sm:pt-8 border-t border-white/15"
          >
            <div className="flex overflow-x-auto sm:grid sm:grid-cols-4 gap-3 sm:gap-6 relative max-w-155 pb-2 sm:pb-0 scrollbar-none">
              {features.map((feature) => (
                <div 
                  key={feature.title} 
                  className="flex-shrink-0 flex flex-col items-center text-center group min-w-[75px] sm:min-w-0"
                >
                  <div className="relative h-9 sm:h-14 w-9 sm:w-14 rounded-full border border-[#D4AF37] bg-black/80 backdrop-blur-md flex items-center justify-center text-[#D4AF37] transition-transform group-hover:scale-105 duration-300 shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                    <feature.icon size={15} className="sm:hidden" strokeWidth={1.5} />
                    <feature.icon size={20} className="hidden sm:block" strokeWidth={1.5} />
                    <div className="absolute inset-0 rounded-full border border-[#D4AF37]/30 scale-110" />
                  </div>
                  <h4 className="mt-1.5 sm:mt-3 text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.18em] text-gray-100 font-semibold max-w-[80px] sm:max-w-[100px] leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    {feature.title}
                  </h4>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}












// import { motion, useReducedMotion } from "framer-motion";
// import { Link } from "react-router-dom";
// import {
//   Sparkles,
//   ShieldCheck,
//   House,
//   UserCog,
//   Instagram,
//   Facebook,
//   MessageCircle,
//   Pin,
// } from "lucide-react";

// const bridal = "https://ik.imagekit.io/asdf5690/Makeup/gurpreet-singh-Po-nggQqplE-unsplash.jpg";

// export default function Hero() {
//   const reduceMotion = useReducedMotion();

//   const features = [
//     {
//       icon: Sparkles,
//       title: "Premium Products",
//     },
//     {
//       icon: UserCog,
//       title: "Expert Artist",
//     },
//     {
//       icon: ShieldCheck,
//       title: "Hygienic & Safe",
//     },
//     {
//       icon: House,
//       title: "Home Service",
//     },
//   ];

//   const socials = [
//     Instagram,
//     Facebook,
//     MessageCircle,
//     Pin,
//   ];

//   const fadeUp = {
//     hidden: {
//       opacity: 0,
//       y: 30,
//     },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: reduceMotion ? 0 : 0.7,
//       },
//     },
//   };

//   return (
//     <section className="relative overflow-hidden bg-[#070707]">

//       {/* ========================================= */}
//       {/* GOLD BACKGROUND GLOW */}
//       {/* ========================================= */}

//       <div className="absolute inset-0">

//         <div className="absolute left-[-250px] top-10 h-[550px] w-[550px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />
//           <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] pointer-events-none" />

//         <div className="absolute right-[-250px] top-[120px] h-[650px] w-[650px] rounded-full bg-[#D4AF37]/5 blur-[220px]" />

//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_60%)]" />

//       </div>

//       {/* ========================================= */}
//       {/* SOCIAL ICONS */}
//       {/* ========================================= */}

//       <div className="hidden xl:flex fixed left-10 top-1/2 -translate-y-1/2 z-50 flex-col gap-5">

//         {socials.map((Icon, index) => (

//           <motion.a
//             key={index}
//             href="#"
//             whileHover={{
//               scale: 1.08,
//             }}
//             className="
//             h-12
//             w-12
//             rounded-full
//             border
//             border-[#D4AF37]
//             flex
//             items-center
//             justify-center
//             text-[#D4AF37]
//             transition-all
//             duration-300
//             hover:bg-[#D4AF37]
//             hover:text-black
//             "
//           >

//             <Icon size={18} />

//           </motion.a>

//         ))}

//       </div>

//       {/* ========================================= */}
//       {/* CONTAINER */}
//       {/* ========================================= */}

//       <div className="relative mx-auto max-w-[1700px] h-screen">

//         <div className="grid lg:grid-cols-[40%_60%] h-screen">

//           {/* ===================================== */}
//           {/* LEFT SIDE */}
//           {/* ===================================== */}

//           <motion.div
//             initial="hidden"
//             animate="show"
//             variants={{
//               show: {
//                 transition: {
//                   staggerChildren: 0.15,
//                 },
//               },
//             }}
//             className="
//             flex
//             flex-col
//             justify-center
//             px-6
//             sm:px-10
//             lg:px-16
//             xl:pl-32
//             xl:pr-10
//             pt-28
//             pb-16
//             "
//           >

//             {/* SMALL TITLE */}

//             <motion.div
//               variants={fadeUp}
//               className="flex items-center gap-5"
//             >

//               <div className="h-px w-14 bg-[#D4AF37]" />

//               <span
//                 className="
//                 uppercase
//                 tracking-[4px]
//                 text-[11px]
//                 text-white
//                 font-medium
//                 "
//               >
//                 BE YOUR OWN KIND OF
//               </span>

//               <div className="h-px w-14 bg-[#D4AF37]" />

//             </motion.div>

//             {/* BEAUTIFUL */}

//             <motion.h3
//               variants={fadeUp}
//               className="
//               mt-4
//               text-[#D4AF37]
//               text-[64px]
//               lg:text-[78px]
//               font-normal
//               "
//               style={{
//                 fontFamily: "'Great Vibes', cursive",
//               }}
//             >
//               Beautiful
//             </motion.h3>

//             {/* HEADING */}

//             <motion.h1
//               variants={fadeUp}
//               className="
//               mt-5
//               font-bold
//               leading-[1.02]
//               text-white
//               tracking-tight
//               text-[52px]
//               sm:text-[64px]
//               lg:text-[92px]
//               xl:text-[98px]
//               leading-[0.95]
//               "
//               style={{
//                 fontFamily: "'Playfair Display', serif",
//               }}
//             >
//               Enhancing{" "}
//               <span className="text-[#D4AF37]">
//                 Beauty
//               </span>
//               <br />

//               Creating{" "}

//               <span className="text-[#D4AF37]">
//                 Confidence
//               </span>

//             </motion.h1>

//             {/* DESCRIPTION */}

//             <motion.p
//               variants={fadeUp}
//               className="
//               mt-8
//               max-w-[470px]
//               text-[#CFCFCF]
//               text-[17px]
//               leading-8
//               "
//             >
//               Professional makeup services for bridal,
//               engagement, reception, fashion shoots,
//               editorial and luxury occasions.
//               We create elegant timeless looks that
//               enhance your natural beauty while making
//               every special moment unforgettable.
//             </motion.p>

//             {/* BUTTON */}

//             <motion.div
//               variants={fadeUp}
//               className="mt-10"
//             >

//               <Link
//                 to="/contact"
//                 className="
//                 inline-flex
//                 h-14
//                 items-center
//                 justify-center
//                 rounded-md
//                 border
//                 border-[#D4AF37]
//                 px-10
//                 uppercase
//                 tracking-[3px]
//                 text-sm
//                 font-medium
//                 text-[#D4AF37]
//                 transition-all
//                 duration-300
//                 hover:bg-[#D4AF37]
//                 hover:text-black
//                 "
//               >

//                 GET IN TOUCH

//               </Link>

//             </motion.div>

//                      {/* ===================================== */}
//             {/* FEATURES */}
//             {/* ===================================== */}

//             <motion.div
//               variants={fadeUp}
//               className="mt-24 border-t border-[#2A2A2A] pt-10"
//             >
//               <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">

//                 {features.map((feature) => (
//                   <motion.div
//                     key={feature.title}
//                     whileHover={
//                       reduceMotion
//                         ? {}
//                         : {
//                             y: -6,
//                           }
//                     }
//                     className="flex flex-col items-center text-center lg:items-start lg:text-left"
//                   >
//                     <div
//                       className="
//                       flex
//                       h-14
//                       w-14
//                       items-center
//                       justify-center
//                       rounded-full
//                       border
//                       border-[#D4AF37]
//                       text-[#D4AF37]
//                       transition-all
//                       duration-300
//                       hover:bg-[#D4AF37]
//                       hover:text-black
//                       "
//                     >
//                       <feature.icon size={24} />
//                     </div>

//                     <h4
//                       className="
//                       mt-4
//                       text-[11px]
//                       uppercase
//                       tracking-[2px]
//                       text-white
//                       "
//                     >
//                       {feature.title}
//                     </h4>
//                   </motion.div>
//                 ))}

//               </div>
//             </motion.div>

//           </motion.div>

//           {/* ===================================== */}
//           {/* RIGHT IMAGE */}
//           {/* ===================================== */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               x: 50,
//             }}
//             animate={{
//               opacity: 1,
//               x: 0,
//             }}
//             transition={{
//               duration: 1,
//             }}
//             className="
//                 relative
//                 hidden
//                 lg:flex
//                 h-screen
//                 items-center
//                 justify-end
//                 overflow-hidden
//                 pr-6
//                 "
//           >

//             <motion.img
//                 src={bridal}
//                 alt="Luxury Bridal Makeup"
//                 animate={
//   reduceMotion
//     ? {}
//     : {
//         y: [0, -6, 0],
//       }
// }
//                 transition={{
//   duration: 7,
//   repeat: Infinity,
//   ease: "easeInOut",
// }}
// className="
// absolute
// right-[-30px]
// bottom-0
// translate-y-[30px]
// h-full
// w-[850px]
// max-w-none
// object-cover
// object-[70%_center]
// scale-90
// "
//               />

//                           {/* LEFT FADE */}

//                         <div
//               className="
//               absolute
//               left-0
//               top-0
//               bottom-0
//               w-[320px]
//               bg-gradient-to-r
//               from-[#070707]
//               via-[#070707]/92
//               to-transparent
//               z-10
//               "
//               />

//                           {/* BOTTOM FADE */}
//               <div
//               className="
//               absolute
//               left-0
//               right-0
//               bottom-0
//               h-[220px]
//               bg-gradient-to-t
//               from-[#070707]
//               via-[#070707]/75
//               to-transparent
//               "
//               />

//                           {/* GOLD LIGHT */}

//                     <div
//               className="
//               absolute
//               right-10
//               top-24
//               h-[450px]
//               w-[450px]
//               rounded-full
//               bg-[#D4AF37]/15
//               blur-[180px]
//               "
//               />

//                         </motion.div>

//                       </div>
//                     </div>
//                   </section>
//                 );
//               }










// import { motion, useReducedMotion } from "framer-motion";
// import { Link } from "react-router-dom";
// import Button from "../ui/Button";
// import { Sparkles, UserCog, ShieldCheck, House } from "lucide-react";

// export default function Hero() {
//   const shouldReduceMotion = useReducedMotion();

//   const features = [
//     { icon: Sparkles, label: "Premium Products" },
//     { icon: UserCog, label: "Expert Artist" },
//     { icon: ShieldCheck, label: "Hygienic & Safe" },
//     { icon: House, label: "Home Service" },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: shouldReduceMotion ? 0 : 0.12,
//         delayChildren: shouldReduceMotion ? 0 : 0.15,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 18 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: shouldReduceMotion ? 0 : 0.55, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="relative overflow-hidden bg-[#050505] pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
//       {/* Background glow */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <motion.div
//           aria-hidden
//           animate={
//             shouldReduceMotion
//               ? {}
//               : { scale: [1, 1.08, 1], opacity: [0.2, 0.32, 0.2] }
//           }
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute left-[-8%] top-10 h-80 w-80 rounded-full bg-[#D4AF37]/12 blur-3xl"
//         />
//         <motion.div
//           aria-hidden
//           animate={
//             shouldReduceMotion
//               ? {}
//               : { y: [0, 18, 0], opacity: [0.14, 0.26, 0.14] }
//           }
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute right-[-10%] top-28 h-96 w-96 rounded-full bg-[#F6E27A]/8 blur-3xl"
//         />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.07),transparent_55%)]" />
//       </div>

//       <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
//         <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 min-h-[calc(100vh-6rem)]">
//           {/* LEFT: TEXT CONTENT */}
//           <motion.div
//             className="space-y-6 sm:space-y-7 lg:space-y-8 text-center lg:text-left"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.p
//               variants={itemVariants}
//               className="text-[#D4AF37] text-xs sm:text-sm md:text-base font-semibold tracking-[0.32em] uppercase"
//             >
//               Be Your Own Kind of Beautiful
//             </motion.p>

//             <motion.div variants={itemVariants} className="space-y-4">
//               <h1 className="font-serif font-bold leading-[0.95] tracking-tight text-[2.8rem] sm:text-[3.7rem] md:text-[4.4rem] lg:text-[5.2rem] xl:text-[5.6rem] text-balance max-w-[12ch] mx-auto lg:mx-0 text-white">
//                 Enhancing <span className="text-[#D4AF37]">Beauty</span>, Creating{" "}
//                 <span className="text-[#F6E27A]">Confidence</span>
//               </h1>
//             </motion.div>

//             <motion.p
//               variants={itemVariants}
//               className="mx-auto max-w-xl text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-[#D6D1C5] lg:mx-0"
//             >
//               Professional makeup services for bridal, party, HD, airbrush,
//               editorial, and luxury occasions. We create elegant looks that
//               feel timeless, confident, and unforgettable.
//             </motion.p>

//             {/* FEATURES */}
//             <motion.div
//               variants={containerVariants}
//               className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 max-w-xl mx-auto lg:mx-0"
//             >
//               {features.map((feature, index) => (
//                 <motion.div
//                   key={feature.label}
//                   variants={itemVariants}
//                   whileHover={shouldReduceMotion ? {} : { y: -3, scale: 1.02 }}
//                   transition={{ type: "spring", stiffness: 260, damping: 18 }}
//                   className="group flex items-center gap-3 rounded-xl border border-[#D4AF37]/20 bg-white/[0.03] px-4 py-3 backdrop-blur-md shadow-[0_0_24px_rgba(0,0,0,0.35)] transition-all hover:border-[#D4AF37]/45 hover:bg-white/[0.05]"
//                 >
//                   <motion.div
//                     animate={
//                       shouldReduceMotion
//                         ? {}
//                         : { rotate: index % 2 === 0 ? [0, 8, 0] : [0, -8, 0] }
//                     }
//                     transition={{
//                       duration: 6,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                     className="shrink-0 text-[#F6E27A]"
//                   >
//                     <feature.icon className="w-6 h-6 sm:w-7 sm:h-7" />
//                   </motion.div>
//                   <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.16em] text-[#D6D1C5] group-hover:text-[#F6E27A] transition-colors">
//                     {feature.label}
//                   </span>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* BUTTONS */}
//             <motion.div
//               variants={itemVariants}
//               className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2"
//             >
//               <Link to="/contact" className="w-full sm:w-auto">
//                 <Button
//                   variant="secondary"
//                   size="lg"
//                   className="group relative w-full sm:w-auto overflow-hidden rounded-xl border border-[#D4AF37]/40 bg-[#0b0b0b] px-8 py-3 text-[#F6E27A] shadow-[0_0_28px_rgba(212,175,55,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37]/70 hover:bg-[#111111] hover:shadow-[0_0_36px_rgba(212,175,55,0.22)]"
//                 >
//                   <span className="relative z-10">Contact Us</span>
//                   <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#F6E27A]/12 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
//                 </Button>
//               </Link>

//               <Link to="/portfolio" className="w-full sm:w-auto">
//                 <Button
//                   variant="secondary"
//                   size="lg"
//                   className="group relative w-full sm:w-auto overflow-hidden rounded-xl border border-[#D4AF37]/40 bg-[#0b0b0b] px-8 py-3 text-[#F6E27A] shadow-[0_0_28px_rgba(212,175,55,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37]/70 hover:bg-[#111111] hover:shadow-[0_0_36px_rgba(212,175,55,0.22)]"
//                 >
//                   <span className="relative z-10">View Portfolio</span>
//                   <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#F6E27A]/12 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
//                 </Button>
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* RIGHT: IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, x: 30, scale: 0.98 }}
//             animate={{ opacity: 1, x: 0, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative w-full flex justify-center lg:justify-end"
//           >
//             <motion.div
//               animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
//               transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
//               className="relative w-full max-w-none lg:max-w-[610px]"
//             >
//               <div className="absolute -inset-4 rounded-[30px] bg-[#D4AF37]/12 blur-2xl" />
//               <div className="relative overflow-hidden rounded-[22px] border border-[#D4AF37]/25 bg-gradient-to-br from-white/[0.04] to-black shadow-[0_20px_80px_rgba(212,175,55,0.12)] aspect-[4/5] sm:aspect-[9/10] lg:aspect-[4/5]">
//                 <img
//                   src="https://ik.imagekit.io/asdf5690/Makeup/gurpreet-singh-Po-nggQqplE-unsplash.jpg"
//                   alt="Luxury Makeup"
//                   className="h-full w-full object-cover object-center opacity-95 transition-transform duration-700 ease-out hover:scale-105"
//                   loading="eager"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent pointer-events-none" />
//                 <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(246,226,122,0.08),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }