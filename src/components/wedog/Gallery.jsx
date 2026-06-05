import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

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

  const handleDragEnd = (event, info) => {
    const swipeThreshold = 50;
    const swipeVelocity = info.velocity.x;
    const swipeDistance = info.offset.x;

    if (swipeDistance > swipeThreshold || swipeVelocity > 500) {
      goToNext();
    } else if (swipeDistance < -swipeThreshold || swipeVelocity < -500) {
      goToPrevious();
    }
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden bg-[#FAF8F5]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt="WEDOG pack"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              drag="x"
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="w-full h-auto object-cover aspect-video cursor-grab active:cursor-grabbing"
            />
          </AnimatePresence>

          {/* Navigation Buttons - Hidden by default, show on hover */}
          {isHovering && (
            <>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={goToPrevious}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#2D5A3D] p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={goToNext}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#2D5A3D] p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Next image"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
            </>
          )}

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
      </div>
    </section>
  );
}