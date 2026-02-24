import React from "react";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

export default function DownloadSection() {
  return (
    <section id="download" className="py-24 px-6 bg-[#2D5A3D] relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#3A7550]/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3A7550]/20 rounded-full translate-x-1/3 translate-y-1/3" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-[#E8722A] flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#E8722A]/30">
          <Smartphone className="w-8 h-8 text-white" />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
          Join the Pack Today
        </h2>
        <p className="text-white/80 text-lg max-w-xl mx-auto leading-relaxed mb-10">
          Download the WEDOG app and give your dog the premium care they deserve. Available on iOS and Android.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-white text-[#2D5A3D] px-6 py-3.5 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] opacity-70 leading-none">Download on the</div>
              <div className="text-base leading-tight">App Store</div>
            </div>
          </a>

          <a
            href="#"
            className="inline-flex items-center gap-3 bg-white text-[#2D5A3D] px-6 py-3.5 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
              <path d="M3.18 23.79c-.66-.35-1.14-.88-1.42-1.56L13.3 10.7l3.55 3.55L3.18 23.79zM.32 2.47C.11 3.02 0 3.64 0 4.33v15.34c0 .69.11 1.31.32 1.86l11.44-11.44L.32 2.47zM21.16 10.34l-2.77-1.57-3.65 3.65 3.65 3.65 2.77-1.57c.93-.53 1.4-1.24 1.4-2.08s-.47-1.55-1.4-2.08zM13.3 10.7L1.77 22.23c.28.68.76 1.21 1.42 1.56l13.67-7.74-3.55-3.55z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] opacity-70 leading-none">Get it on</div>
              <div className="text-base leading-tight">Google Play</div>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
}