import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    id: "wedog-pack",
    title: "להקת WEDOG",
    description: "יש כלבים שמטיילים פעמיים ביום,\nויש כלבים שיוצאים עם הלהקה.\nלהקת WEDOG היא להקה אמיתית שעונה על הצרכים האמיתיים של הכלב.\nהכלב שלכם לא צריך עוד טיול. הוא צריך WEDOG",
  },
  {
    id: "training",
    title: "אילוף ופתרון בעיות התנהגות",
    description: "הכלב שלכם לא סרבן, הוא פשוט לא מבין מה אתם רוצים.\nבWEDOG אנחנו לומדים ליצור שפה משותפת, תקשורת נכונה, הובלה בריאה ועבודת צוות הדדית.",
  },
  {
    id: "eli-workshop",
    title: 'סדנת "אלי"',
    description: "חודש וקצת - פקודה אחת מושלמת.\nלכל כלב מכל רמה.",
  },
  {
    id: "weddings",
    title: "ליווי חתונות",
    description: "יום החתונה צריך להיות מושלם - גם בשביל הכלב.\nאתם שמחים, הוא רגוע, הכל מסודר.",
  },
  {
    id: "puppy",
    title: "חינוך גורים",
    description: "מה שתלמדו אותו עכשיו, יקבע מי הוא יהיה בגיל שנתיים.\nמתחילים נכון מהיום הראשון.",
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
              className={`group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-[#F5EDE4] overflow-hidden flex flex-col ${
                index === services.length - 1 && services.length % 2 !== 0 ? "md:col-span-2 md:max-w-lg md:mx-auto w-full" : ""
              }`}
            >
              <div className="absolute top-0 left-0 w-40 h-40 bg-[#3A7550]/4 rounded-full -translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-700" />
              <div className="relative z-10 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#2D5A3D] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[15px] whitespace-pre-line flex-1">{service.description}</p>
                <div className="mt-6">
                  <Link
                    to={`/service/${service.id}`}
                    className="inline-flex items-center gap-2 text-[#2D5A3D] font-semibold text-sm border border-[#2D5A3D] rounded-full px-5 py-2 hover:bg-[#2D5A3D] hover:text-white transition-colors duration-300"
                  >
                    פרטים נוספים
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