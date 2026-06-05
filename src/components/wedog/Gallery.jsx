import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-[#FAF8F5]">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt="WEDOG pack"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-auto object-cover aspect-video"
            />
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#2D5A3D] p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#2D5A3D] p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="text-center mt-6 text-sm text-gray-500">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </section>
  );
}