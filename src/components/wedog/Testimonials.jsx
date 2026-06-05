import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-6 bg-[#FAF8F5]">
      <div className="max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center text-center bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#F5EDE4]"
          >
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#2D5A3D]/10 mb-6 flex-shrink-0 bg-[#F5EDE4]">
              {currentTestimonial.image ? (
                <img
                  src={currentTestimonial.image}
                  alt={`${currentTestimonial.ownerName} and ${currentTestimonial.dogName}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#2D5A3D]/20 to-[#E8722A]/20" />
              )}
            </div>

            {/* Names */}
            <h3 className="text-xl font-bold text-[#2D5A3D] mb-1">{currentTestimonial.ownerName}</h3>
            <p className="text-sm text-gray-500 mb-6">של {currentTestimonial.dogName}</p>

            {/* Testimonial Text */}
            <p className="text-gray-700 text-base leading-relaxed mb-8 min-h-32">
              {currentTestimonial.text}
            </p>

            {/* Navigation and Indicators */}
            <div className="flex items-center justify-center gap-6 w-full">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full hover:bg-[#2D5A3D]/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-[#2D5A3D]" />
              </button>

              {/* Indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-[#2D5A3D] w-8"
                        : "bg-[#2D5A3D]/20 w-2"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-2 rounded-full hover:bg-[#2D5A3D]/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-[#2D5A3D]" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}