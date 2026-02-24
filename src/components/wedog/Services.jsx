import React from "react";
import { motion } from "framer-motion";
import { Users, Brain, GraduationCap, Home } from "lucide-react";

const services = [
  {
    icon: Users,
    tag: "טיול להקה",
    title: "טיולי להקה במרכז תל אביב",
    description:
      "טיולים קבוצתיים יומיומיים במרכז תל אביב המשלבים פריקה פיזית ומנטלית מלאה. הכלבים לומדים איפוק, תקשורת בין-כלבית ועבודה עם ויזואליזציה.",
    color: "bg-[#2D5A3D]",
    lightColor: "bg-[#2D5A3D]/8",
    iconColor: "text-[#2D5A3D]",
  },
  {
    icon: GraduationCap,
    tag: "אילוף קבוצתי",
    title: "שיעורי אילוף בקבוצות",
    description:
      "שיעורים בקבוצות קטנות ואינטימיות לבניית מנגנוני תגובה חיוביים ועבודה על פקודות בסיסיות ומתקדמות בסביבה מגרה ומהנה.",
    color: "bg-[#3A7550]",
    lightColor: "bg-[#3A7550]/8",
    iconColor: "text-[#3A7550]",
  },
  {
    icon: Home,
    tag: "אילוף פרטי",
    title: "שיעורי אילוף פרטיים בבית",
    description:
      "אילוף אישי ומותאם בסביבה הטבעית של הכלב — בבית הלקוח. הפתרון הטוב ביותר לטיפול בבעיות התנהגות ספציפיות ולבניית קשר עמוק בין הכלב לבעלים.",
    color: "bg-[#2D5A3D]",
    lightColor: "bg-[#2D5A3D]/8",
    iconColor: "text-[#2D5A3D]",
  },
  {
    icon: Brain,
    tag: "גישה מקצועית",
    title: "פריקה מנטלית ואיפוק",
    description:
      "מעבר לטיול רגיל — אנחנו עובדים על הצד המנטלי של הכלב: ריכוז, וויסות עצמי, ויזואליזציה ותקשורת. כלב מאוזן הוא כלב שמח.",
    color: "bg-[#3A7550]",
    lightColor: "bg-[#3A7550]/8",
    iconColor: "text-[#3A7550]",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#FAF8F5]" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2D5A3D]/10 text-[#2D5A3D] text-sm font-semibold mb-4">
            מה אנחנו מציעים
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2D5A3D] leading-tight mb-4">
            השירותים שלנו
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            כל שירות מתוכנן כדי לתת לכלב שלך את החוויה המלאה ביותר — פיזית, מנטלית וחברתית.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-[#F5EDE4] overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-40 h-40 bg-[#3A7550]/4 rounded-full -translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-xl ${service.lightColor} flex items-center justify-center flex-shrink-0`}>
                    <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                  </div>
                  <div>
                    <span className={`inline-block text-xs font-semibold ${service.iconColor} bg-[#2D5A3D]/8 px-3 py-1 rounded-full mb-2`}>
                      {service.tag}
                    </span>
                    <h3 className="text-xl font-bold text-[#2D5A3D] mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-[15px]">{service.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}