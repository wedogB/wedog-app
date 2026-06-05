import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Timer, Users, Smartphone } from "lucide-react";
import Navbar from "@/components/wedog/Navbar";
import Footer from "@/components/wedog/Footer";
import Gallery from "@/components/wedog/Gallery";
import Testimonials from "@/components/wedog/Testimonials";

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

        <AnimatePresence mode="wait">
          {activeTab === "dog" &&
          <motion.div
            key="dog"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 gap-4">
              {[
            { title: "פריקה פיזית", desc: "7 ק\"מ של הליכה אמיתית עם חברה טובה" },
            { title: "פריקה מנטלית", desc: "הליכה בקבוצה, התעלמות מגירויים, Recall, איפוק, אכילה מהרצפה" },
            { title: "סוציאליזציה", desc: "חבורה קבועה, שחרור בגינה, תקשורת בריאה עם כלבים אחרים" },
            { title: "אילוף בדרך", desc: "כי למה לא להפיק יותר מכל טיול" }].
            map((card) =>
            <div key={card.title} className="bg-white rounded-2xl p-5 shadow-sm border border-[#F5EDE4] hover:shadow-lg transition-shadow duration-300">
                  
                  <h3 className="text-base font-bold text-[#2D5A3D] mb-1">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                </div>
            )}
            </motion.div>
          }
          {activeTab === "owner" &&
          <motion.div
            key="owner"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-[#2D5A3D] rounded-3xl p-10 md:p-14 text-right space-y-8">
              <div>
                <p className="text-white font-bold mb-2 text-base text-right">כלב שחוזר הביתה עייף ומאושר</p>
                <p className="text-white/85 text-base leading-relaxed">בלי שתצטרכו לפרוק לו אנרגיה אחרי יום עבודה ארוך.</p>
              </div>
              <div>
                <p className="text-white font-bold mb-2 text-base">חוסכים לכם הרבה</p>
                <ul className="text-white/85 text-base leading-relaxed space-y-1">
                  <li>בלי טיול בוקר בחושך</li>
                  <li>בלי לחזור בצהריים באמצע יום עבודה</li>
                  <li>בלי לפרוק אנרגיה אחרי שחוזרים מיום עבודה ארוך</li>
                </ul>
              </div>
              <div>
                <p className="text-white font-bold mb-2 text-base">ראש שקט - הוא בידיים טובות</p>
                <p className="text-white/85 text-base leading-relaxed">עדכונים שבועיים, תמונות בלייב ועוד המון מידע באפליקציה.</p>
              </div>
            </motion.div>
          }
        </AnimatePresence>
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
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-center">
            <span className="text-white">יש כלבים שמטיילים פעמיים ביום,</span>
            <br />
            <span className="text-[#7EC897]">ויש כלבים שיוצאים עם הלהקה.</span>
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
          <div className="mb-8 flex gap-2 justify-center">
            <button className="px-6 py-2 bg-[#2D5A3D] text-white rounded-full font-semibold text-sm">
              להקת מרכז תל אביב
            </button>
            <button disabled className="px-6 py-2 bg-gray-200 text-gray-400 rounded-full font-semibold text-sm cursor-not-allowed">
              בקרוב עוד להקות
            </button>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
            { icon: MapPin, text: "קלישר, שינקין, רוטשילד, לבונטין, נווה צדק, קריית ספר", label: "אזור פעילות" },
            { icon: Clock, text: "10:00 - 8:30", label: "איסופים" },
            { icon: Timer, text: "3 - 2 שעות", label: "משך טיול" },
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

      {/* 4. גלריית תמונות */}
      <Gallery images={[
        "https://media.base44.com/images/public/699db1c3be9861723766da7c/036a2cc21_WhatsAppImage2026-06-05at20518PM.jpg",
        "https://media.base44.com/images/public/699db1c3be9861723766da7c/26c37c4c0_WhatsAppImage2026-06-04at23835PM1.jpg",
        "https://media.base44.com/images/public/699db1c3be9861723766da7c/50cb8e6cd_WhatsAppImage2026-06-04at23835PM.jpg",
        "https://media.base44.com/images/public/699db1c3be9861723766da7c/8e6875b87_WhatsAppImage2026-06-04at23834PM.jpg",
        "https://media.base44.com/images/public/699db1c3be9861723766da7c/0f671853e_WhatsAppImage2026-06-05at20518PM2.jpg",
        "https://media.base44.com/images/public/699db1c3be9861723766da7c/c1c7a3564_WhatsAppImage2026-06-05at20518PM1.jpg"
      ]} />

      {/* 5. למה WEDOG */}
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

      {/* 6. תהליך הקבלה */}
      <section className="py-20 px-6 bg-white">
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

      {/* 7. המלצות */}
      <Testimonials testimonials={[
        {
          ownerName: "יעל",
          dogName: "אפה",
          text: "הלהקה עוזרת לי לדאוג ולפתח את הכלב שלי- הוא זוכה ליחס מהמם, לפריקת אנרגיה ואילוף בקבוצה, ולזמן עם כלבים נוספים כדי לרוץ ולעשות שטויות. העובדה שאני יודעת שהכלב שלי לא סתם שוכב בבית לבד אלא יש מישהו שדואג לו בזמן שאני בעבודה עוזרת לי לעבור את הימים האלו ברוגע 🙏🏼",
          image: "https://media.base44.com/images/public/699db1c3be9861723766da7c/5fcf885d6_generated_image.png"
        },
        {
          ownerName: "יעל",
          dogName: "מיילי",
          text: "מיילי יוצאת איתם לטיולים באופן קבוע וחוזרת כל פעם מאושרת, עייפה ומסופקת. מעבר לטיול עצמו, תמיד מרגיש שיש מי שרואה אותה באמת. אם משהו נראה חריג או אם היא לא מרגישה במיטבה, אני מיד מקבלת עדכון. הם דואגים לכל פרט קטן, ואני יודעת שהיא בידיים הכי טובות שיש. מה שמרשים אותי במיוחד הוא שלמרות שיש כל כך הרבה כלבים בלהקה, ברק מכיר כל אחד ואחת באופן אישי. הוא שם לב לפרטים, מבין את הצרכים של כל כלב, ונותן תחושה של יחס אישי ואכפתיות אמיתית. אין הרבה אנשים שהייתי סומכת עליהם בעיניים עצומות עם הכלבה שלי, אבל אתם בהחלט כאלה. ❤️🐶",
          image: "https://media.base44.com/images/public/699db1c3be9861723766da7c/a192d7c57_generated_image.png"
        },
        {
          ownerName: "יהב",
          dogName: "דלי",
          text: "אנחנו שמחים מאוד להמליץ על הלהקה של WEDOG. מאז שהכלבים שלנו התחילו להגיע, הם חוזרים הביתה עייפים, רגועים ומסופקים. מעבר לפריקת האנרגיה, ראינו שיפור משמעותי בהתנהגות שלהם, יותר יכולת לדחות סיפוקים ויותר רוגע גם בבית וגם בטיולים.",
          image: "https://media.base44.com/images/public/699db1c3be9861723766da7c/eadbca0fc_generated_image.png"
        },
        {
          ownerName: "מתן",
          dogName: "רובן",
          text: "תודה לWEDOG! רובן זכה להכיר המון חברים חדשים ולפתח מיומנויות חברתיות בצורה מדהימה. מעבר לכל זה, החוויה שלי מול הצוות תמיד נעימה, מקצועית ומלאת אהבה לכלבים.",
          image: "https://media.base44.com/images/public/699db1c3be9861723766da7c/537db4bc0_generated_image.png"
        },
        {
          ownerName: "רן",
          dogName: "טוני",
          text: "עברתי לא מעט דוג-ווקרים בעיר עד שמצאתי את WEDOG, ואין ספק שמדובר במשהו אחר לגמרי. בזמן שאני בעבודה, הכלב שלי לא רק יוצא לטיול. הוא פורק אנרגיה, משחק עם חברים מהלהקה וגם מתרגל משמעת. לפני WEDOG הייתי חוזר הביתה לכלב עם אנרגיות בלתי נגמרות והרבה פחות משמעת. כבר אחרי החודש הראשון הרגשתי שינוי משמעותי, והיום הוא רגוע יותר, קשוב יותר ומאוזן הרבה יותר. מה שמייחד את WEDOG הוא שהצוות מורכב ממאלפים מקצועיים. הם יודעים להתאים לכל כלב את מה שהוא צריך, וגם עם הכלב שלי, שלא תמיד היה פשוט, הם עשו עבודה מדהימה. בנוסף, אני לא צריך לדאוג לכום, אוספים את הכלב מהבית ומחזירים אותו בסוף הפעילות. הכי חשוב, הם זכו באמון שלי ב-100%, דבר שהיה לי קשה למצוא אצל דוג-ווקרים אחרים. מבחינתי WEDOG זה הרבה יותר מטיול לכלב זו מסגרת חברתית, פעילות, משמעת ושקט נפשי לבעלים. ממליץ בחום.",
          image: "https://media.base44.com/images/public/699db1c3be9861723766da7c/636bf5c6c_generated_image.png"
        }
      ]} />

      {/* 8. CTA סופי */}
      <section id="contact-cta" className="py-24 px-6 bg-[#2D5A3D] relative overflow-hidden mt-20">
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