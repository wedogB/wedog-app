import React from "react";
import { motion } from "framer-motion";
import { Calendar, PawPrint, MapPin, Wallet, AlertTriangle } from "lucide-react";
import Navbar from "@/components/wedog/Navbar";
import Footer from "@/components/wedog/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const sessions = [
  {
    num: "1",
    title: "בניית בסיס מנטלי",
    items: ["עבודה עם רצועת 6 מטר וחטיפים שווים", "משחק מחבואים"],
    highlight: false,
  },
  {
    num: "2",
    title: "ביסוס הפקודה",
    items: ["שימוש ביצרים הטבעיים של הכלב ושפת גוף של הנוהג", "קריאה ממרחק"],
    highlight: false,
  },
  {
    num: "3",
    title: "גירויים אמיתיים",
    items: ["אכילה מיד זרה", "כלבים בתזוזה", "משחקים וצעצועים", "אוכל על הרצפה"],
    highlight: false,
  },
  {
    num: "4",
    title: "עוזבים רצועות",
    items: ["מחזקים את האמון בין הנוהג לכלב", "עוברים מלמידה לדרישה"],
    highlight: false,
  },
  {
    num: "5",
    title: "מבחן סופי + חגיגה 🎉",
    items: ["מבחן סופי לכלבים", "חלוקת מתנות ודגשים אישיים להמשך"],
    highlight: true,
  },
];

const details = [
  { icon: Calendar, label: "מפגשים", value: "5 שיעורים" },
  { icon: PawPrint, label: "גודל קבוצה", value: "עד 10 כלבים" },
  { icon: MapPin, label: "מיקום", value: "תל אביב" },
  { icon: Wallet, label: "מחיר", value: "1,250₪ לסדנה המלאה" },
  { icon: AlertTriangle, label: "שימו לב", value: "מקומות מוגבלים" },
];

export default function EliWorkshop() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]" dir="rtl">
      <Navbar variant="solid" />

      {/* 1. HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551717743-49959800b1f6?w=1920&q=80"
            alt="סדנת אלי"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E3F2B]/95 via-[#2D5A3D]/80 via-[#2D5A3D]/40 to-[#FAF8F5]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
            חודש וקצת —
            <br />
            <span className="text-[#a8d5b5]">פקודה אחת מושלמת.</span>
          </h1>
          <p className="text-white/80 text-lg mb-2 font-medium">לכל כלב, מכל רמה.</p>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            5 מפגשים, קבוצה קטנה, עבודה אמיתית עם מאלפים מקצועיים.
          </p>
          <motion.a
            href="#contact-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-10 py-4 bg-[#E8722A] text-white font-bold text-lg rounded-full shadow-lg shadow-[#E8722A]/30 hover:bg-[#d4641f] transition-colors"
          >
            אני רוצה להירשם
          </motion.a>
        </motion.div>
      </section>

      {/* 2. פרטי השירות */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
          >
            {details.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="flex items-start gap-4 bg-[#FAF8F5] rounded-xl p-5 border border-[#F5EDE4]"
              >
                <div className="w-10 h-10 rounded-lg bg-[#2D5A3D]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon className="w-5 h-5 text-[#2D5A3D]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#2D5A3D] uppercase tracking-wide mb-1">{item.label}</div>
                  <div className="text-gray-700 text-sm leading-snug">{item.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. הסילבוס */}
      <section className="py-20 px-6 bg-[#FAF8F5]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2D5A3D]/10 text-[#2D5A3D] text-sm font-semibold mb-3">
              הסילבוס
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A3D]">מה עושים בכל מפגש?</h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {sessions.map((session) => (
              <motion.div
                key={session.num}
                variants={fadeUp}
                className={`rounded-2xl p-7 border flex items-start gap-6 ${
                  session.highlight
                    ? "bg-[#2D5A3D] border-[#2D5A3D] shadow-lg"
                    : "bg-white border-[#F5EDE4] shadow-sm"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full font-bold text-xl flex items-center justify-center flex-shrink-0 ${
                    session.highlight ? "bg-white text-[#2D5A3D]" : "bg-[#2D5A3D] text-white"
                  }`}
                >
                  {session.num}
                </div>
                <div>
                  <h3
                    className={`text-lg font-bold mb-3 ${
                      session.highlight ? "text-white" : "text-[#2D5A3D]"
                    }`}
                  >
                    מפגש {session.num} — {session.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {session.items.map((item) => (
                      <li
                        key={item}
                        className={`flex items-start gap-2 text-sm leading-relaxed ${
                          session.highlight ? "text-white/80" : "text-gray-600"
                        }`}
                      >
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${session.highlight ? "bg-[#a8d5b5]" : "bg-[#3DBF7B]"}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. למי זה מתאים */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2D5A3D]/10 text-[#2D5A3D] text-sm font-semibold mb-6">
              מתאים לכולם
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A3D] mb-6">לכל כלב מכל רמה</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              גור שרק הגיע הביתה, כלב שכבר מכיר "אלי" אבל לא באמת — לא משנה מאיפה מתחילים.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mt-4">
              הסדנה בנויה כך שכל כלב יוצא ממנה עם פקודה אחת שעובדת בכל מצב.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. CTA סופי */}
      <section id="contact-cta" className="py-24 px-6 bg-[#2D5A3D] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#3A7550]/30 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3A7550]/20 rounded-full -translate-x-1/3 translate-y-1/3" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            מקומות מוגבלים — עד 10 כלבים בלבד
          </h2>
          <p className="text-white/70 text-2xl font-semibold mb-8">1,250₪</p>
          <motion.a
            href="mailto:hello@wedog.co.il"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-10 py-4 bg-[#E8722A] text-white font-bold text-lg rounded-full shadow-lg shadow-black/20 hover:bg-[#d4641f] transition-colors"
          >
            אני רוצה להירשם
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}