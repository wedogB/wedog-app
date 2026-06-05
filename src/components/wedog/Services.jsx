import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const services = [
  {
    slug: "pack",
    title: "להקת WEDOG",
    description:
      "יש כלבים שמטיילים פעמיים ביום,\nויש כלבים שיוצאים עם הלהקה.\nלהקת WEDOG יוצאת כל יום לטיול של 7 ק\"מ - פריקה אמיתית, סוציאליזציה, קצת אילוף בדרך וכלב שחוזר הביתה עייף ומרוצה.\nהכלב שלכם לא צריך עוד טיול. הוא צריך WEDOG",
  },
  {
    slug: "training",
    title: "אילוף ופתרון בעיות התנהגות",
    description:
      "הכלב שלכם לא סרבן. הוא פשוט לא מבין מה אתם רוצים.\nרוב הבעיות שאני רואה הן לא בעיות של הכלב - הן בעיות של שפה.\nבWEDOG אנחנו עובדים עם בעלים וכלבים יחד ליצור שפה משותפת, להבין מה הכלב מנסה להגיד וללמוד איך להגיד לו.\nככה אנחנו מגיעים לתוצאה של תקשורת נכונה, הובלה בריאה ועבודת צוות הדדית.",
  },
  {
    slug: "ali",
    title: 'סדנת "אלי"',
    description:
      "חודש וקצת - פקודה אחת מושלמת.\nלכל כלב מכל רמה.",
  },
  {
    slug: "wedding",
    title: "ליווי חתונות",
    description:
      "יום החתונה צריך להיות מושלם - גם בשביל הכלב. \nאנחנו דואגים לכלב מהערב שלפני, דרך הצילומים והחופה, ועד שאתם מגיעים לאסוף אותו הביתה. חבילת ליווי חתונות בנויה כך שתוכלו להתעסק רק בלשמוח ולהישאר בראש שקט.",
  },
  {
    slug: "puppies",
    title: "חינוך גורים",
    description:
      "יש גורים שגדלים להיות כלבים עם בעיות - ויש גורים שגדלים להיות כלבים שיודעים מי הם.\nההפרש ביניהם הוא הבסיס שנבנה בחודשים הראשונים.\nבWEDOG אנחנו מלמדים בעלי גורים לבנות שפה משותפת מהיום הראשון - להבין את הפסיכולוגיה של הכלב, שפה כלבית, איך מתמודדים עם בעיות קלאסיות של גורים ואיך בונין בסיס נכון שיכול למנוע בעיות לפני שהן בכלל מתפתחות.",
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
              key={service.slug}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-[#F5EDE4] overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 left-0 w-40 h-40 bg-[#3A7550]/4 rounded-full -translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-700" />

              <div className="relative z-10 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#2D5A3D] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[15px] whitespace-pre-line flex-1">
                  {service.description}
                </p>
                <div className="mt-6">
                  <Link
                    to={`/service/${service.slug}`}
                    className="inline-flex items-center gap-2 text-[#2D5A3D] font-semibold text-sm border border-[#2D5A3D] px-5 py-2.5 rounded-full hover:bg-[#2D5A3D] hover:text-white transition-all duration-300"
                  >
                    פרטים נוספים
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}