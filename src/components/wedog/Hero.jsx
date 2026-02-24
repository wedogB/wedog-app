import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&q=80"
          alt="Dogs running together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D5A3D]/70 via-[#2D5A3D]/50 to-[#FAF8F5]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium tracking-wide">
              PREMIUM DOG CARE · TEL AVIV
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            WE<span className="text-[#E8722A]">DOG</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl mx-auto mb-10 font-light">
            Professional dog walking & training — where every walk is an adventure and every dog is part of the pack.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E8722A] text-white font-semibold rounded-full text-lg shadow-lg shadow-[#E8722A]/30 hover:bg-[#d4641f] transition-colors"
            >
              Download the App
            </motion.a>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 backdrop-blur-sm text-white font-medium rounded-full text-lg border border-white/30 hover:bg-white/25 transition-colors"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#features">
            <ArrowDown className="w-6 h-6 text-[#2D5A3D] animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}