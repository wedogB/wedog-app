import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Brain, Target, Heart, Baby, ArrowLeft } from "lucide-react";

const services = [
  {
    id: "wedog-pack",
    icon: Users,
    tag: "להקת WEDOG",
    title: "להקת WEDOG",
    description: "יש כלבים שמטיילים פעמיים ביום, ויש כלבים שיוצאים עם הלהקה. 7 ק\"מ ביום — פריקה אמיתית, סוציאליזציה וכלב שחוזר הביתה עייף ומרוצה.",
    tagline: "הכלב שלכם לא צריך עוד טיול. הוא צריך WEDOG💚",
  },
  {
    id: "training",
    icon: Brain,
    tag: "אילוף",
    title: "אילוף ופתרון בעיות התנהגות",
    description: "הכלב שלכם לא סרבן. הוא פשוט לא מבין מה אתם רוצים. אנחנו עובדים עם בעלים וכלבים יחד ליצור שפה משותפת ותקשורת נכונה.",
    tagline: "רוב הבעיות הן לא בעיות של הכלב — הן בעיות של שפה.",
  },
  {
    id: "ali-workshop",
    icon: Target,
    tag: "סדנה",
    title: 'סדנת "אלי"',
    description: 'חודש וקצת — פקודה אחת מושלמת. לכל כלב מכל רמה. עבודה ממוקדת ועמוקה על אחת הפקודות החשובות ביותר.',
    tagline: "פקודה אחת. מושלמת.",
  },
  {
    id: "wedding",
    icon: Heart,
    tag: "חתונות",
    title: "ליווי חתונות",
    description: "יום החתונה צריך להיות מושלם — גם בשביל הכלב. אנחנו דואגים לו מהערב שלפני ועד שאתם חוזרים הביתה.",
    tagline: "תתעסקו רק בלשמוח. אנחנו נטפל בשאר.",
  },
  {
    id: "puppies",
    icon: Baby,
    tag: "גורים",
    title: "חינוך גורים",
    description: "הבסיס שנבנה בחודשים הראשונים קובע הכל. אנחנו מלמדים אתכם לבנות שפה משותפת מהיום הראשון ולמנוע בעיות לפני שהן מתפתחות.",
    tagline: "ילד טוב מתחיל מגור טוב.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-[#F5EDE4] overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 left-0 w-40 h-40 bg-[#3A7550]/4 rounded-full -translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-700" />

              <div className="relative z-10 flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2D5A3D]/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-[#2D5A3D]" />
                  </div>
                  <div>
                    <span className="inline-block text-xs font-semibold text-[#2D5A3D] bg-[#2D5A3D]/8 px-3 py-1 rounded-full mb-1">
                      {service.tag}
                    </span>
                    <h3 className="text-xl font-bold text-[#2D5A3D]">{service.title}</h3>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed text-[15px] mb-3">{service.description}</p>
                <p className="text-[#2D5A3D] font-semibold text-sm italic mb-6">{service.tagline}</p>
              </div>

              <Link
                to={`/service/${service.id}`}
                className="relative z-10 inline-flex items-center gap-2 self-start px-5 py-2.5 bg-[#2D5A3D] text-white text-sm font-semibold rounded-full hover:bg-[#3A7550] transition-colors"
              >
                פרטים נוספים
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}