import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const services = [
  {
    id: "wedog-pack",
    title: "להקת WEDOG",
    description: "יש כלבים שמטיילים פעמיים ביום,\nויש כלבים שיוצאים עם הלהקה.\nהכלב שלכם לא צריך עוד טיול. הוא צריך WEDOG.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80",
  },
  {
    id: "training",
    title: "אילוף ופתרון בעיות התנהגות",
    description: "הכלב שלכם לא סרבן, הוא פשוט לא מבין מה אתם רוצים.\nנבנה שפה משותפת, תקשורת נכונה, הובלה בריאה.",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
  },
  {
    id: "eli-workshop",
    title: 'סדנת "אלי"',
    description: "חודש וקצת — פקודה אחת מושלמת.\nלכל כלב, מכל רמה.",
    image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=800&q=80",
  },
  {
    id: "weddings",
    title: "ליווי חתונות",
    description: "יום החתונה צריך להיות מושלם — גם בשביל הכלב.\nאתם שמחים, הוא רגוע, הכל מסודר.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  },
  {
    id: "puppy",
    title: "חינוך גורים",
    description: "מה שתלמדו אותו עכשיו, יקבע מי הוא יהיה בגיל שנתיים.\nמתחילים נכון מהיום הראשון.",
    image: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?w=800&q=80",
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className={`group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-[#F5EDE4] overflow-hidden flex flex-col ${
                index === services.length - 1 && services.length % 3 !== 0
                  ? services.length % 3 === 1 ? "lg:col-span-3 lg:max-w-sm lg:mx-auto w-full" : "sm:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              {/* Image */}
              <div className="overflow-hidden h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#2D5A3D] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[15px] whitespace-pre-line flex-1">{service.description}</p>
                <div className="mt-6">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      to={`/service/${service.id}`}
                      className="inline-flex items-center gap-2 text-white font-semibold text-sm bg-[#2D5A3D] rounded-full px-5 py-2.5 hover:bg-[#3A7550] transition-colors duration-300"
                    >
                      קרא עוד
                      <ArrowLeft className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}