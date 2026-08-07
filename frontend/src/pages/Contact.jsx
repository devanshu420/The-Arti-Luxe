import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Sparkles, Send, MessageCircle } from "lucide-react";
import axios from "axios";

// API Base URL fallback
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact - Luxé Beauty Studio";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "other",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Hits backend route mounted at /api/sendMessage-email/contact
      const response = await axios.post(`${API_BASE_URL}/api/sendMessage-email/contact`, formData);

      setSubmitStatus({
        type: "success",
        message: response.data.message || "Your inquiry has been submitted and sent successfully!",
      });

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "other",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus({
        type: "error",
        message: error.response?.data?.message || "Failed to send inquiry. Please try again or reach out on WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8960507259",
      href: "tel:+918960507259",
    },
    {
      icon: Mail,
      label: "Email",
      value: "arati.sharma192004@gmail.com",
      href: "mailto:arati.sharma192004@gmail.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Kapashera, New Delhi, 110037",
      href: "https://maps.google.com/?q=Kapashera+New+Delhi+110037",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Mon - Sun: 9 AM - 8 PM (By Appointment)",
      href: "#",
    },
  ];

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white font-sans pt-28 pb-20">
      {/* Font Preloads */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        .font-serif-custom { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* Background Gold Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-150px] top-10 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />
        <div className="absolute right-[-150px] top-1/3 h-[600px] w-[600px] rounded-full bg-[#D4AF37]/10 blur-[200px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 z-10">
        <motion.section
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          className="py-6"
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-black/60 px-5 py-2 text-xs text-[#D4AF37] backdrop-blur-md tracking-[0.2em] uppercase font-semibold shadow-[0_0_20px_rgba(212,175,55,0.15)]">
              <Sparkles className="h-3.5 w-3.5" />
              PREMIUM CONSULTATIONS & ENQUIRIES
            </div>

            <h1 className="font-serif-custom text-4xl sm:text-6xl font-light text-white tracking-tight mt-4">
              Get In <span className="text-[#D4AF37] italic font-normal">Touch</span>
            </h1>

            <p className="mt-3 text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              Have questions about bridal bookings, party glam, or academy masterclasses? We would love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-start">
            {/* Contact Info Sidebar */}
            <motion.div variants={fadeUp} className="lg:col-span-5 space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    whileHover={{ x: 4 }}
                    className="group flex gap-4 rounded-2xl border border-white/10 bg-[#0a0a0a] p-5 backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D4AF37] bg-black text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[#D4AF37] font-semibold">
                        {info.label}
                      </p>
                      <p className="mt-1 text-xs sm:text-sm text-white font-light group-hover:text-[#D4AF37] transition-colors break-all">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}

              {/* Direct WhatsApp Action Box */}
              <div className="mt-6 p-6 rounded-2xl border border-[#D4AF37]/30 bg-[#0a0a0a] text-center">
                <p className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  NEED A QUICK RESPONSE?
                </p>
                <p className="text-xs text-gray-300 font-light mt-1 mb-4">
                  Chat directly with senior artist Arti Sharma on WhatsApp.
                </p>
                <a
                  href="https://wa.me/918960507259"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#25D366] bg-[#25D366] px-6 py-2.5 text-xs font-semibold tracking-wider text-black uppercase hover:bg-transparent hover:text-[#25D366] transition-all"
                >
                  <MessageCircle size={15} />
                  <span>CHAT ON WHATSAPP</span>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="lg:col-span-7 relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] p-6 sm:p-8 lg:p-10 shadow-xl backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />

              <h3 className="font-serif-custom text-2xl text-white font-medium mb-6">
                Send an <span className="text-[#D4AF37] italic font-normal">Inquiry</span>
              </h3>

              <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Priya Sharma"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-xs text-white placeholder:text-gray-600 outline-none transition-all focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. priya@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-xs text-white placeholder:text-gray-600 outline-none transition-all focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 8960507259"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-xs text-white placeholder:text-gray-600 outline-none transition-all focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-gray-300 mb-1">
                    Select Service / Inquiry
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-xs text-white outline-none transition-all focus:border-[#D4AF37]"
                  >
                    <option value="bridal">Bridal Makeup</option>
                    <option value="party">Party & Cocktail Makeup</option>
                    <option value="hd">HD & Airbrush Makeup</option>
                    <option value="halloween">Halloween & SFX</option>
                    <option value="hair">Luxury Hair Styling</option>
                    <option value="draping">Saree Draping</option>
                    <option value="pro-classes">Professional Makeup Class</option>
                    <option value="self-grooming">Self Grooming Class</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-[10px] uppercase tracking-wider text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your event date, preferred look, or class inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-xs text-white placeholder:text-gray-600 outline-none transition-all focus:border-[#D4AF37]"
                />
              </div>

              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 rounded-xl border px-4 py-3 text-xs ${
                    submitStatus.type === "success"
                      ? "border-green-500/30 bg-green-500/10 text-green-300"
                      : "border-red-500/30 bg-red-500/10 text-red-300"
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <div className="relative mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group cursor-pointer flex w-full items-center justify-center gap-2 rounded-full border border-[#D4AF37] bg-[#D4AF37] px-8 py-3 text-xs font-semibold tracking-[0.2em] text-black uppercase transition-all duration-300 hover:bg-transparent hover:text-[#D4AF37]"
                >
                  <span>{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>
                  <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.form>
          </div>
        </motion.section>
      </div>
    </main>
  );
}