import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock, Timer, Users, Smartphone } from "lucide-react";
import Navbar from "@/components/wedog/Navbar";
import Footer from "@/components/wedog/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

function BenefitsTabs() {
  const [activeTab, setActiveTab] = useState("dog");

  return (
    <section className="py-20 px-6 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2D5A3D]/10 text-[#2D5A3D] text-sm font-semibold mb-4">
            מה בתוך הטיול
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A3D] mb-8">מה מקבלים</h2>
          {/* Tabs */}
          <div className="inline-flex rounded-full bg-white border border-[#2D5A3D]/20 p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("dog")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === "dog" ? "bg-[#2D5A3D] text-white shadow" : "text-[#2D5A3D] hover:bg-[#2D5A3D]/10"}`}>
              מה הכלב מקבל
            </button>
            <button
              onClick={() => setActiveTab("owner")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === "owner" ? "bg-[#2D5A3D] text-white shadow" : "text-[#2D5A3D] hover:bg-[#2D5A3D]/10"}`}>
              מה אתם מקבלים
            </button>
          </div>
        </motion.div>

        {activeTab === "dog" &&
        <motion.div
          key="dog"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
          { title: "פריקה פיזית", desc: "7 ק\"מ של הליכה אמיתית עם חברה טובה" },
          { title: "פריקה מנטלית", desc: "הליכה בקבוצה, התעלמות מגירויים, Recall, איפוק, אכילה מהרצפה" },
          { title: "סוציאליזציה", desc: "חבורה קבועה, שחרור בגינה, תקשורת בריאה עם כלבים אחרים" },
          { title: "אילוף בדרך", desc: "כי למה לא להפיק יותר מכל טיול" }].
          map((card) =>
          <div key={card.title} className="bg-white rounded-2xl p-8 shadow-sm border border-[#F5EDE4] hover:shadow-lg transition-shadow duration-300">
                <div className="w-2 h-8 bg-[#2D5A3D] rounded-full mb-4" />
                <h3 className="text-xl font-bold text-[#2D5A3D] mb-2">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </div>
          )}
          </motion.div>
        }

        {activeTab === "owner" &&
        <motion.div
          key="owner"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[#2D5A3D] rounded-3xl p-10 md:p-14 text-right space-y-5">
            <p className="text-white/85 leading-relaxed text-base">כלב שחוזר הביתה עייף ומאושר - בלי שתצטרכו לפרוק לו אנרגיה אחרי יום עבודה ארוך.</p>
            <p className="text-white/85 leading-relaxed text-base">בלי טיול בוקר בחושך. 
בלי לחזור בצהריים באמצע יום עבודה.</p>
            <p className="text-white text-base font-normal">ראש שקט - הוא בידיים טובות. עדכונים שבועיים, תמונות בלייב ועוד המון מידע באפליקציה
          </p>
          </motion.div>}
      </div>
    </section>);
}

export default function WedogPack() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]" dir="rtl">
      <Navbar variant="solid" />

      {/* 1. HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="https://media.base44.com/videos/public/699db1c3be9861723766da7c/204c13c00_WhatsAppVideo2026-06-05at20517PM.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#2D5A3D]/90 via-[#2D5A3D]/85 via-70% to-[#FAF8F5]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-20">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 text-center">
            יש כלבים שמטיילים פעמיים ביום,{" "}
            <span className="text-[#a8d5b5]">ויש כלבים שיוצאים עם הלהקה.</span>
          </h1>
          <div className="text-white/80 text-base leading-relaxed max-w-2xl mx-auto mb-4 space-y-1">
            <div>להקת WEDOG יוצאת כל יום לטיול של 7 ק"מ -</div>
            <div>פריקה אמיתית, סוציאליזציה, קצת אילוף בדרך,</div>
            <div>וכלב שחוזר הביתה עייף ומרוצה.</div>
          </div>
          <div className="text-white font-semibold text-xl mb-10 space-y-1">
            <div>הכלב שלכם לא צריך עוד טיול,</div>
            <div>הוא צריך WEDOG 💚</div>
          </div>
          <motion.a
            href="#contact-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-10 py-4 bg-[#E8722A] text-white font-bold text-lg rounded-full shadow-lg shadow-[#E8722A]/30 hover:bg-[#d4641f] transition-colors">
            תרשמו אותי עכשיו
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
            { icon: MapPin, text: "קלישר, שינקין, רוטשילד, לבונטין, נווה צדק, קריית ספר", label: "אזור פעילות" },
            { icon: Clock, text: "8:30–10:00", label: "איסופים" },
            { icon: Timer, text: "3–2 שעות", label: "משך טיול" },
            { icon: Users, text: "עד 10 כלבים למוליך", label: "גודל קבוצה" },
            { icon: Smartphone, text: "שריון דרך אפליקציה ייחודית", label: "הזמנה" }].
            map((item) =>
            <motion.div key={item.label} variants={fadeUp} className="flex items-start gap-4 bg-[#FAF8F5] rounded-xl p-5 border border-[#F5EDE4]">
                <div className="w-10 h-10 rounded-lg bg-[#2D5A3D]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon className="w-5 h-5 text-[#2D5A3D]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#2D5A3D] uppercase tracking-wide mb-1">{item.label}</div>
                  <div className="text-gray-700 text-sm leading-snug">{item.text}</div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* 3. מה מקבלים - טאבים */}
      <BenefitsTabs />

      {/* 4. למה WEDOG */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A3D] mb-2">למה WEDOG</h2>
            <p className="text-gray-500 text-lg">כי זו לא שירות — זו להקה עם אישיות.</p>
          </motion.div>
          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4">
            {[
            { emoji: "📸", text: "תמונות שבועיות של הכלב שלכם בפעולה" },
            { emoji: "📱", text: "אפליקציה ייחודית לשריון ומעקב" },
            { emoji: "✅", text: "זמינות מלאה — תמיד יודעים מה קורה" },
            { emoji: "🎓", text: "אילוף בתוך הטיול, לא רק פריקה" },
            { emoji: "💚", text: "בנדנות ירוקות לכל חבר בלהקה" }].
            map((item) =>
            <motion.li key={item.text} variants={fadeUp} className="flex items-center gap-4 bg-[#FAF8F5] rounded-xl px-6 py-4 border border-[#F5EDE4]">
                <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                <span className="text-gray-700 font-medium">{item.text}</span>
              </motion.li>
            )}
          </motion.ul>
        </div>
      </section>

      {/* 5. תהליך הקבלה */}
      <section className="py-20 px-6 bg-[#FAF8F5]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A3D]">איך מצטרפים?</h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6">
            {[
            { step: "1", title: "שולחים הודעה ומספרים על הכלב", desc: "" },
            { step: "2", title: "פגישת היכרות", desc: "אני מגיע אליכם עם הכלב שלי, מכיר אתכם ואת הכלב, לוקח אותו לסיבוב ובודק התאמה" },
            { step: "3", title: "הכלב מצטרף ללהקה 💚", desc: "" }].
            map((item) =>
            <motion.div key={item.step} variants={fadeUp} className="flex items-start gap-6 bg-white rounded-2xl p-7 shadow-sm border border-[#F5EDE4]">
                <div className="w-12 h-12 rounded-full bg-[#2D5A3D] text-white font-bold text-xl flex items-center justify-center flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2D5A3D] mb-1">{item.title}</h3>
                  {item.desc && <p className="text-gray-600 leading-relaxed">{item.desc}</p>}
                </div>
              </motion.div>
            )}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center text-gray-500 mt-8 text-sm leading-relaxed">
            זה לא סתם תהליך — זה מה שמבטיח שכל כלב בלהקה מרגיש בטוח ושייך.
          </motion.p>
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
          className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
            רוצים שהכלב שלכם יצטרף ללהקה?
          </h2>
          <motion.a
            href="https://wa.me/972500000000?text=היי%2C%20אשמח%20לקבוע%20פגישת%20היכרות%20ללהקת%20WEDOG%20%F0%9F%90%BE"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-10 py-4 bg-[#E8722A] text-white font-bold text-lg rounded-full shadow-lg shadow-black/20 hover:bg-[#d4641f] transition-colors">
            לקביעת פגישת היכרות
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </div>);

}