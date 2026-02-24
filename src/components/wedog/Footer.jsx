import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1E3F2B] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              WE<span className="text-[#E8722A]">DOG</span>
            </h3>
            <p className="text-white/60 leading-relaxed text-sm">
              Premium dog walking & training in Tel Aviv. Because your dog deserves the best.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-white/40 mb-5">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-[#E8722A] flex-shrink-0" />
                Tel Aviv, Israel
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone className="w-4 h-4 text-[#E8722A] flex-shrink-0" />
                +972-50-000-0000
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail className="w-4 h-4 text-[#E8722A] flex-shrink-0" />
                hello@wedog.co.il
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Instagram className="w-4 h-4 text-[#E8722A] flex-shrink-0" />
                @wedog.tlv
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-white/40 mb-5">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to={createPageUrl("PrivacyPolicy")}
                  className="text-white/70 text-sm hover:text-[#E8722A] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} WEDOG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}