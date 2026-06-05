import React from "react";
import { motion } from "framer-motion";
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

export default function Training() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]" dir="rtl">
      <Navbar variant="solid" />

      {/* 1. HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&q=80"
            alt="אילוף כלבים"
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
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            הכלב שלכם לא סרבן.
            <br />
            <span className="text-[#a8d5b5]">הוא פשוט לא מבין מה אתם רוצים.</span>
          </h1>
          <p className="text-white/85 text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10">
            רוב הבעיות שאני רואה הן לא בעיות של הכלב — הן בעיות של שפה.
          </p>
          <motion.a
            href="#contact-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-10 py-4 bg-[#E8722A] text-white font-bold text-lg rounded-full shadow-lg shadow-[#E8722A]/30 hover:bg-[#d4641f] transition-colors"
          >
            בואו נדבר
          </motion.a>
        </motion.div>
      </section>

      {/* 2. מה זה בפועל */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2D5A3D]/10 text-[#2D5A3D] text-sm font-semibold mb-6">
              איך זה נראה
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A3D] mb-8">מה זה בפועל</h2>
            <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
              <p>
                אני מגיע אליכם הביתה — עם הכלב, בסביבה האמיתית שלו.
              </p>
              <p className="text-gray-500">
                לא קליניקה, לא מעבדה. החיים האמיתיים שלו.
              </p>
              <p>
                עובדים יחד — אתם, הכלב, ואני — כדי לבנות שפה משותפת, להבין מה הוא מנסה להגיד ולדעת איך להגיד לו בחזרה.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. מה מטפלים */}
      <section className="py-20 px-6 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2D5A3D]/10 text-[#2D5A3D] text-sm font-semibold mb-3">
              תחומי עבודה
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A3D]">מה מטפלים</h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              { title: "בעיות משיכה וסרבנות", desc: "הליכה על רצועה שמרגישה כמו מאבק? נפתור את זה" },
              { title: "עבירה על גירויים", desc: "כלבים, אנשים, רעשים. נבנה שליטה עצמית אמיתית" },
              { title: "בעיות בבית", desc: "קפיצות, נביחות, הרס. מבינים מאיפה זה בא ועוצרים את זה במקור" },
              { title: "גורים", desc: "מתחילים נכון לפני שמפתחים הרגלים רעים" },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#F5EDE4] hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-2 h-8 bg-[#2D5A3D] rounded-full mb-4" />
                <h3 className="text-xl font-bold text-[#2D5A3D] mb-2">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. התוצאה */}
      <section className="py-24 px-6 bg-[#2D5A3D]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 mb-10"
          >
            {["תקשורת נכונה.", "הובלה בריאה.", "עבודת צוות הדדית."].map((line) => (
              <motion.p
                key={line}
                variants={fadeUp}
                className="text-3xl md:text-5xl font-bold text-white"
              >
                {line}
              </motion.p>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-white/70 text-lg leading-relaxed"
          >
            לא כלב שמציית מפחד — כלב שמבין ובוחר לשתף פעולה.
          </motion.p>
        </div>
      </section>

      {/* 5. תהליך העבודה */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2D5A3D]/10 text-[#2D5A3D] text-sm font-semibold mb-3">
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
            {[
              { step: "1", title: "שיחה קצרה להבנת הצרכים", desc: "" },
              { step: "2", title: "שיעור ראשון בבית", desc: "אבחון, עבודה מעשית, כלים ראשונים" },
              { step: "3", title: "ממשיכים לפי הצורך עד שמגיעים לתוצאה", desc: "" },
            ].map((item) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="flex items-start gap-6 bg-[#FAF8F5] rounded-2xl p-7 border border-[#F5EDE4]"
              >
                <div className="w-12 h-12 rounded-full bg-[#2D5A3D] text-white font-bold text-xl flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2D5A3D] mb-1">{item.title}</h3>
                  {item.desc && <p className="text-gray-600">{item.desc}</p>}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. CTA סופי */}
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
            רוצים להתחיל לדבר בשפה שלו?
          </h2>
          <motion.a
            href="mailto:hello@wedog.co.il"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-10 py-4 bg-[#E8722A] text-white font-bold text-lg rounded-full shadow-lg shadow-black/20 hover:bg-[#d4641f] transition-colors"
          >
            השאירו פרטים ונחזור אליכם
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}