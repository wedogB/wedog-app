import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, ShieldCheck, Camera, BarChart3 } from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "תזמון חכם",
    description: "הזמינו טיולים ושיעורי אילוף בקלות. הגדירו לוח זמנים קבוע כדי שהכלב שלכם לא יפספס אף יום.",
  },
  {
    icon: ShieldCheck,
    title: "תשלום מאובטח",
    description: "תשלום מוצפן ומאובטח ישירות באפליקציה. ללא מזומן, ללא סיבוכים — רק שקט נפשי.",
  },
  {
    icon: Camera,
    title: "פיד תמונות חברתי",
    description: "ראו תמונות ועדכונים בזמן אמת מכל טיול. ההרפתקאות של הכלב שלכם — מתועדות ומשותפות אתכם.",
  },
  {
    icon: BarChart3,
    title: "סטטיסטיקות הכלב",
    description: "עקבו אחר הפעילות, המרחקים וההתקדמות של הכלב שלכם עם תובנות ברורות ומעוצבות.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AppFeatures() {
  return (
    <section id="app-features" className="py-24 px-6 bg-[#2D5A3D]" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white text-sm font-semibold mb-4">
            חברי הלהקה המיוחדים שלנו
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            הכל באפליקציה אחת
          </h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
            אפליקציית WEDOG נותנת לכם שליטה מלאה על הטיפול בכלב — מזמינה ועד תובנות, הכל בהישג יד.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group relative bg-[#3A7550] rounded-2xl p-8 hover:bg-[#3d7d55] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-y-12 -translate-x-12 group-hover:scale-150 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/75 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}