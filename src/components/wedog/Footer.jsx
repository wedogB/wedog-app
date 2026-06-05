import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1E3F2B] text-white" dir="rtl">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img
              src="https://media.base44.com/images/public/699db1c3be9861723766da7c/a1a7f4e57_Colorlogo-nobackground.png"
              alt="WEDOG"
              className="h-12 w-auto mb-4"
            />
            <p className="text-white/60 leading-relaxed text-sm">
              טיולי כלבים ואילוף פרמיום בתל אביב. כי הכלב שלך מגיע לטוב ביותר.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-white/40 mb-5">יצירת קשר</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-[#3A7550] flex-shrink-0" />
                מרכז תל אביב
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone className="w-4 h-4 text-[#3A7550] flex-shrink-0" />
                050-000-0000
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail className="w-4 h-4 text-[#3A7550] flex-shrink-0" />
                hello@wedog.co.il
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Instagram className="w-4 h-4 text-[#3A7550] flex-shrink-0" />
                @wedog.tlv
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-white/40 mb-5">קישורים</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/70 text-sm hover:text-white transition-colors">
                  השירותים שלנו
                </a>
              </li>
              <li>
                <a href="#download" className="text-white/70 text-sm hover:text-white transition-colors">
                  הורד את האפליקציה
                </a>
              </li>
              <li>
                <Link
                  to={createPageUrl("PrivacyPolicy")}
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  מדיניות פרטיות
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} WEDOG. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}