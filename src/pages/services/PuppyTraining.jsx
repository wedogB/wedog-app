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

const details = [
  { emoji: "📍", title: "שיעורים בבית הלקוח", desc: "בסביבה האמיתית של הגור" },
  { emoji: "👤", title: "עבודה אישית", desc: "אנחנו עובדים ישירות עם הבעלים והגור" },
  { emoji: "🎯", title: "מותאם אישית", desc: "לפי הגור, הבית והמשפחה" },
];

const syllabus = [
  {
    title: "פסיכולוגיה של הכלב",
    desc: "מבינים איך הגור חושב, מה מניע אותו ואיך הוא לומד",
    num: "01",
  },
  {
    title: "שפת כלבים",
    desc: 'התנהגות רצויה מול לא רצויה — "אחרי לא" לא תמיד אומרים "כן"',
    num: "02",
  },
  {
    title: "גידור וסביבה",
    desc: "למה צריך גידור לגור, הרגלה לכלוב אילוף, הרגלה לצרכים",
    num: "03",
  },
  {
    title: "מעגל אנרגיה",
    desc: "ניהול נכון של לוח זמנים הגור — צעצועים, משחק ונשכנות גורית",
    num: "04",
  },
  {
    title: "חשיפה נכונה",
    desc: "איך עושים חשיפה נכונה לאנשים, כלבים וסביבות חדשות",
    num: "05",
  },
  {
    title: "פקודות בסיס",
    desc: "שב, ארצה, למקום, אלי, עזוב — מלמדים נכון מהשלב הראשון",
    num: "06",
  },
];

const steps = [
  {
    step: "1",
    title: "שיחה קצרה על הגור, הגיל והצרכים",
  },
  {
    step: "2",
    title: "שיעור ראשון בבית: אבחון, הכרות והתחלת עבודה",
  },
  {
    step: "3",
    title: "ממשיכים לפי הקצב של הגור עד שיש בסיס חזק",
  },
];

export default function PuppyTraining() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]" dir="rtl">
      <Navbar variant="solid" />

      {/* 1. HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&q=80"
            alt="חינוך גורים"
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
            חינוך גורים
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6" style={{ letterSpacing: "-1.5px" }}>
            יש גורים שגדלים להיות כלבים עם בעיות —
            <br />
            <span className="text-[#a8d5b5]">ויש גורים שיודעים מי הם.</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-4">
            ההפרש ביניהם הוא הבסיס שנבנה בחודשים הראשונים. בWEDOG אנחנו מלמדים בעלי גורים לבנות שפה משותפת מהיום הראשון — להבין את הפסיכולוגיה של הכלב, שפה כלבית, איך מתמודדים עם בעיות קלאסיות של גורים ואיך בונים בסיס נכון שיכול למנוע בעיות לפני שהן בכלל מתפתחות.
          </p>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            מה שתלמדו אותו עכשיו, יקבע מי הוא יהיה בגיל שנתיים. מתחילים נכון מהיום הראשון.
          </p>
          <motion.a
            href="#contact-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-10 py-4 bg-[#3DBF7B] text-white font-bold text-lg rounded-full shadow-lg shadow-[#3DBF7B]/30 hover:bg-[#2fad6b] transition-colors"
          >
            אני רוצה לשמוע עוד
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
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {details.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-[#FAF8F5] border border-[#e8f5ee]"
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-lg font-bold text-[#2D5A3D] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. סילבוס */}
      <section className="py-20 px-6 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2D5A3D]/10 text-[#2D5A3D] text-xs font-bold tracking-widest uppercase mb-3">
              הסילבוס
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A3D]">מה לומדים?</h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {syllabus.map((item) => (
              <motion.div
                key={item.num}
                variants={fadeUp}
                className="flex items-start gap-5 bg-white rounded-2xl p-7 border border-[#e8f5ee] hover:shadow-md transition-shadow"
              >
                <div className="text-[#3DBF7B] font-black text-2xl leading-none flex-shrink-0 mt-1">
                  {item.num}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2D5A3D] mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. למה עכשיו */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2D5A3D]/10 text-[#2D5A3D] text-xs font-bold tracking-widest uppercase mb-6">
              למה עכשיו?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A3D] mb-6">
              בגיל הזה הכל עוד פתוח
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                בגיל הגור המוח עדיין רך. מה שנבנה עכשיו — הרגלים, גבולות, אמון — יישאר איתו לכל החיים.
              </p>
              <p className="text-gray-500">
                מה שלא נבנה עכשיו יהפוך לבעיה בגיל שנה.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. תהליך העבודה */}
      <section className="py-20 px-6 bg-[#FAF8F5]">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A3D]">איך מתחילים?</h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {steps.map((item) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="flex items-center gap-6 bg-white rounded-2xl p-7 border border-[#e8f5ee] hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-full bg-[#3DBF7B] text-white font-black text-lg flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#2D5A3D]">{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. CTA סופי */}
      <section id="contact-cta" className="py-24 px-6 bg-[#2D5A3D] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#3DBF7B]/20 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3DBF7B]/15 rounded-full -translate-x-1/3 translate-y-1/3" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-10">
            רוצים להתחיל נכון?
          </h2>
          <motion.a
            href="mailto:hello@wedog.co.il"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-10 py-4 bg-[#3DBF7B] text-white font-bold text-lg rounded-full shadow-lg shadow-black/20 hover:bg-[#2fad6b] transition-colors"
          >
            שלחו פרטים ונחזור אליכם
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}