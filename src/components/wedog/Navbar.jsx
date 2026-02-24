import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ variant = "transparent" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (variant !== "transparent") return;
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);

  const isOpaque = variant === "solid" || scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isOpaque
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to={createPageUrl("Home")} className="text-xl font-bold">
          <span className={isOpaque ? "text-[#2D5A3D]" : "text-white"}>WE</span>
          <span className="text-[#E8722A]">DOG</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href={variant === "solid" ? createPageUrl("Home") + "#features" : "#features"}
            className={`text-sm font-medium transition-colors ${
              isOpaque ? "text-gray-600 hover:text-[#2D5A3D]" : "text-white/80 hover:text-white"
            }`}
          >
            Features
          </a>
          <Link
            to={createPageUrl("PrivacyPolicy")}
            className={`text-sm font-medium transition-colors ${
              isOpaque ? "text-gray-600 hover:text-[#2D5A3D]" : "text-white/80 hover:text-white"
            }`}
          >
            Privacy
          </Link>
          <a
            href="#download"
            className="px-5 py-2 bg-[#E8722A] text-white text-sm font-semibold rounded-full hover:bg-[#d4641f] transition-colors shadow-md shadow-[#E8722A]/20"
          >
            Get the App
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden ${isOpaque ? "text-[#2D5A3D]" : "text-white"}`}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              <a
                href={variant === "solid" ? createPageUrl("Home") + "#features" : "#features"}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 font-medium py-2"
              >
                Features
              </a>
              <Link
                to={createPageUrl("PrivacyPolicy")}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 font-medium py-2"
              >
                Privacy Policy
              </Link>
              <a
                href="#download"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center px-5 py-3 bg-[#E8722A] text-white font-semibold rounded-full"
              >
                Get the App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}