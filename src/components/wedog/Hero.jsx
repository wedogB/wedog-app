import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" dir="rtl">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&q=80"
          alt="כלבים רצים יחד"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D5A3D]/80 via-[#2D5A3D]/60 to-[#FAF8F5]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              טיולי כלבים ואילוף פרמיום · תל אביב
            </span>
          </div>

          <div className="flex justify-center mb-6">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699db1c3be9861723766da7c/8bf31c57a_212727517_padded_logo.png"
              alt="WEDOG"
              className="h-28 w-28 rounded-2xl shadow-2xl"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            הכלב שלך מגיע לטוב ביותר
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl mx-auto mb-10 font-light">
            טיולי להקה, אילוף קבוצתי ואילוף פרטי — חוויה שלמה לכלב שלך ושקט נפשי בשבילך.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2D5A3D] font-bold rounded-full text-lg shadow-lg hover:bg-gray-50 transition-colors"
            >
              הכירו את השירותים שלנו
            </motion.a>
            <motion.a
              href="#download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E8722A] text-white font-semibold rounded-full text-lg shadow-lg shadow-[#E8722A]/30 hover:bg-[#d4641f] transition-colors"
            >
              הורידו את האפליקציה
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#services">
            <ArrowDown className="w-6 h-6 text-white/70 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}