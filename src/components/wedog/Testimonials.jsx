import React from "react";
import { motion } from "framer-motion";

export default function Testimonials({ testimonials }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <section className="py-20 px-6 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex flex-col items-center text-center bg-white rounded-3xl p-8 shadow-sm border border-[#F5EDE4] hover:shadow-lg transition-shadow duration-300"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#2D5A3D]/10 mb-4 flex-shrink-0 bg-[#F5EDE4]">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.ownerName} and ${testimonial.dogName}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#2D5A3D]/20 to-[#E8722A]/20" />
                )}
              </div>

              {/* Names */}
              <h3 className="text-lg font-bold text-[#2D5A3D] mb-1">{testimonial.ownerName}</h3>
              <p className="text-sm text-gray-500 mb-4">של {testimonial.dogName}</p>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}