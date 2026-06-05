import React from "react";
import { motion } from "framer-motion";
import { Moon, Camera, Flower2, Home } from "lucide-react";
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

const services = [
  {
    icon: Moon,
    emoji: "🌙",
    title: "ערב לפני",
    desc: "אירוח הכלב אצלנו כדי שתוכלו להתכונן בשקט",
  },
  {
    icon: Camera,
    emoji: "📸",
    title: "צילומים",
    desc: "ליווי מקצועי בצילומי החתן והכלה עם הכלב",
  },
  {
    icon: Flower2,
    emoji: "💐",
    title: "חופה",
    desc: "נוכחות הכלב ברגע הגדול, מסודרת ורגועה",
  },
  {
    icon: Home,
    emoji: "🏠",
    title: "חזרה הביתה",
    desc: "איסוף והחזרה בסוף הערב",
  },
];

const steps = [
  {
    step: "1",
    title: "שיחה קצרה להבנת הצרכים",
    desc: "גיל הכלב, מיקום, לוח זמנים",
  },
  {
    step: "2",
    title: "קבלת הצעת מחיר מותאמת אישית",
    desc: "",
  },
  {
    step: "3",
    title: "אנחנו מטפלים בכל השאר ביום הגדול",
    desc: "",
  },
];

export default function WeddingService() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]" dir="rtl">
      <Navbar variant="solid" />

      {/* 1. HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80"
            alt="חתונה עם כלב"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2D5A3D]/90 via-[#2D5A3D]/85 via-70% to-[#FAF8F5]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white text-xs font-bold tracking-widest uppercase mb-6">
            ליווי חתונות
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6" style={{ letterSpacing: "-2px" }}>
            יום החתונה צריך להיות מושלם —
            <br />
            <span className="text-[#a8d5b5]">גם בשביל הכלב.</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            אנחנו דואגים לכלב מהערב שלפני, דרך הצילומים והחופה, ועד שאתם מגיעים לאסוף אותו הביתה.
          </p>
          <motion.a
            href="#contact-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-10 py-4 bg-[#E8722A] text-white font-bold text-lg rounded-full shadow-lg shadow-[#E8722A]/30 hover:bg-[#d4641f] transition-colors"
          >
            לפרטים ומחירים
          </motion.a>
        </motion.div>
      </section>

      {/* 2. מה כלול */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2D5A3D]/10 text-[#2D5A3D] text-xs font-bold tracking-widest uppercase mb-3">
              מה כלול
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A3D]">
              אתם שמחים. הוא רגוע. הכל מסודר.
            </h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {services.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-[#FAF8F5] rounded-2xl p-8 border border-[#F5EDE4] hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-bold text-[#2D5A3D] mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. למה זה כדאי */}
      <section className="py-20 px-6 bg-[#FAF8F5]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2D5A3D]/10 text-[#2D5A3D] text-xs font-bold tracking-widest uppercase mb-6">
              למה זה כדאי
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A3D] mb-6">
              הכלב חלק מהמשפחה — שיהיה חלק מהיום
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                הרבה זוגות רוצים את הכלב שלהם ביום החתונה אבל לא יודעים איך לנהל את זה לוגיסטית.
              </p>
              <p className="text-gray-500">
                אנחנו דואגים לכל הפרטים — כדי שתהיו שם במאה אחוז ולא תדאגו לשנייה.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. תהליך */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2D5A3D]/10 text-[#2D5A3D] text-xs font-bold tracking-widest uppercase mb-3">
              התהליך
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A3D]">איך זה עובד?</h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {steps.map((item) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="flex items-start gap-6 bg-[#FAF8F5] rounded-2xl p-7 border border-[#F5EDE4]"
              >
                <div className="w-10 h-10 rounded-full bg-[#2D5A3D] text-white font-black text-lg flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2D5A3D] mb-1">{item.title}</h3>
                  {item.desc && <p className="text-gray-600">{item.desc}</p>}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center text-gray-500 mt-8 text-sm leading-relaxed"
          >
            המחיר נקבע לפי גיל הכלב, מיקום האירוע ומשך הנוכחות.
          </motion.p>
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
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
            רוצים שהכלב יהיה חלק מהיום?
          </h2>
          <motion.a
            href="mailto:hello@wedog.co.il"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-10 py-4 bg-[#E8722A] text-white font-bold text-lg rounded-full shadow-lg shadow-black/20 hover:bg-[#d4641f] transition-colors"
          >
            שלחו פרטים ונחזור אליכם
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}