import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699db1c3be9861723766da7c/8bf31c57a_212727517_padded_logo.png";

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
      dir="rtl"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isOpaque ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to={createPageUrl("Home")}>
          <img src="https://media.base44.com/images/public/699db1c3be9861723766da7c/a1a7f4e57_Colorlogo-nobackground.png" alt="WEDOG" className="h-8 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href={variant === "solid" ? createPageUrl("Home") + "#services" : "#services"}
            className={`text-sm font-medium transition-colors ${
              isOpaque ? "text-gray-600 hover:text-[#2D5A3D]" : "text-white/80 hover:text-white"
            }`}
          >
            השירותים שלנו
          </a>
          <a
            href={variant === "solid" ? createPageUrl("Home") + "#download" : "#download"}
            className={`text-sm font-medium transition-colors ${
              isOpaque ? "text-gray-600 hover:text-[#2D5A3D]" : "text-white/80 hover:text-white"
            }`}
          >
            האפליקציה
          </a>
          <Link
            to={createPageUrl("PrivacyPolicy")}
            className={`text-sm font-medium transition-colors ${
              isOpaque ? "text-gray-600 hover:text-[#2D5A3D]" : "text-white/80 hover:text-white"
            }`}
          >
            מדיניות פרטיות
          </Link>
          <a
            href="#contact"
            className="px-5 py-2 bg-[#2D5A3D] text-white text-sm font-semibold rounded-full hover:bg-[#3A7550] transition-colors shadow-md"
          >
            צרו קשר
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
            <div className="px-6 py-4 space-y-3 text-right">
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 font-medium py-2"
              >
                השירותים שלנו
              </a>
              <a
                href="#download"
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 font-medium py-2"
              >
                האפליקציה
              </a>
              <Link
                to={createPageUrl("PrivacyPolicy")}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 font-medium py-2"
              >
                מדיניות פרטיות
              </Link>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center px-5 py-3 bg-[#2D5A3D] text-white font-semibold rounded-full"
              >
                צרו קשר
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}