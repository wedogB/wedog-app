import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/wedog/Navbar";
import Footer from "@/components/wedog/Footer";

const servicesData = {
  "wedog-pack": {
    tag: "להקת WEDOG",
    title: "להקת WEDOG",
    emoji: "🐾",
    tagline: "הכלב שלכם לא צריך עוד טיול. הוא צריך WEDOG💚",
    description: `יש כלבים שמטיילים פעמיים ביום, ויש כלבים שיוצאים עם הלהקה.

להקת WEDOG יוצאת כל יום לטיול של 7 ק"מ — פריקה אמיתית, סוציאליזציה, קצת אילוף בדרך וכלב שחוזר הביתה עייף ומרוצה.`,
    bullets: [
      "7 ק\"מ טיול יומי — פריקה פיזית ומנטלית אמיתית",
      "סוציאליזציה עם כלבים אחרים מהלהקה",
      "אילוף שוטף במהלך הטיול",
      "כלב שחוזר הביתה עייף ומרוצה",
      "אפשרות לשתי יציאות ביום",
    ],
    bg: "bg-[#2D5A3D]",
    light: "bg-[#2D5A3D]/10",
    color: "text-[#2D5A3D]",
  },
  "training": {
    tag: "אילוף",
    title: "אילוף ופתרון בעיות התנהגות",
    emoji: "🧠",
    tagline: "הכלב שלכם לא סרבן. הוא פשוט לא מבין מה אתם רוצים.",
    description: `רוב הבעיות שאני רואה הן לא בעיות של הכלב — הן בעיות של שפה.

בWEDOG אנחנו עובדים עם בעלים וכלבים יחד ליצור שפה משותפת, להבין מה הכלב מנסה להגיד וללמוד איך להגיד לו.

ככה אנחנו מגיעים לתוצאה של תקשורת נכונה, הובלה בריאה ועבודת צוות הדדית.`,
    bullets: [
      "עבודה משותפת עם בעלים וכלב",
      "הבנת שפת הכלב ומה הוא מנסה להגיד",
      "פתרון בעיות התנהגות ספציפיות",
      "בניית שפה משותפת ותקשורת נכונה",
      "הובלה בריאה ועבודת צוות הדדית",
    ],
    bg: "bg-[#3A7550]",
    light: "bg-[#3A7550]/10",
    color: "text-[#3A7550]",
  },
  "ali-workshop": {
    tag: "סדנה",
    title: 'סדנת "אלי"',
    emoji: "🎯",
    tagline: "חודש וקצת — פקודה אחת מושלמת.",
    description: `לכל כלב מכל רמה.

סדנת "אלי" מיועדת לכלבים ובעליהם שרוצים לשלוט בפקודת האלי — אחת הפקודות החשובות והחיוניות ביותר לכלב בטיחותי ומאוזן.

תוך חודש וקצת, עובדים על פקודה אחת בצורה עמוקה ומושלמת.`,
    bullets: [
      "מתאימה לכל כלב מכל רמה",
      "עבודה ממוקדת על פקודה אחת",
      "תוצאות אמיתיות תוך חודש וקצת",
      "שיטת עבודה עמוקה ומדויקת",
      "בסיס לכל האילוף הבא",
    ],
    bg: "bg-[#2D5A3D]",
    light: "bg-[#2D5A3D]/10",
    color: "text-[#2D5A3D]",
  },
  "wedding": {
    tag: "ליווי חתונות",
    title: "ליווי חתונות",
    emoji: "💍",
    tagline: "יום החתונה צריך להיות מושלם — גם בשביל הכלב.",
    description: `אנחנו דואגים לכלב מהערב שלפני, דרך הצילומים והחופה, ועד שאתם מגיעים לאסוף אותו הביתה.

חבילת ליווי חתונות בנויה כך שתוכלו להתעסק רק בלשמוח ולהישאר בראש שקט.`,
    bullets: [
      "ליווי מהערב שלפני החתונה",
      "נוכחות בצילומים ובחופה",
      "טיפול מלא לאורך כל היום",
      "ראש שקט לחלוטין לזוג",
      "חבילה מותאמת אישית לכל חתונה",
    ],
    bg: "bg-[#3A7550]",
    light: "bg-[#3A7550]/10",
    color: "text-[#3A7550]",
  },
  "puppies": {
    tag: "גורים",
    title: "חינוך גורים",
    emoji: "🐶",
    tagline: "ההפרש בין כלב עם בעיות לכלב שיודע מי הוא — הוא הבסיס שנבנה בחודשים הראשונים.",
    description: `יש גורים שגדלים להיות כלבים עם בעיות — ויש גורים שגדלים להיות כלבים שיודעים מי הם.

בWEDOG אנחנו מלמדים בעלי גורים לבנות שפה משותפת מהיום הראשון — להבין את הפסיכולוגיה של הכלב, שפה כלבית, איך מתמודדים עם בעיות קלאסיות של גורים ואיך בונים בסיס נכון שיכול למנוע בעיות לפני שהן בכלל מתפתחות.`,
    bullets: [
      "בניית שפה משותפת מהיום הראשון",
      "הבנת פסיכולוגיה כלבית ושפת גוף",
      "טיפול בבעיות קלאסיות של גורים",
      "מניעת בעיות עתידיות מהבסיס",
      "מתאים לכל גזע ולכל גיל גור",
    ],
    bg: "bg-[#2D5A3D]",
    light: "bg-[#2D5A3D]/10",
    color: "text-[#2D5A3D]",
  },
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <p className="text-gray-500 text-lg mb-4">השירות לא נמצא</p>
          <Link to="/" className="text-[#2D5A3D] font-semibold hover:underline">חזרה לדף הבית</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5]" dir="rtl">
      <Navbar variant="solid" />

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back */}
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-[#2D5A3D] text-sm font-medium mb-8 hover:opacity-70 transition-opacity"
          >
            <ArrowRight className="w-4 h-4" />
            חזרה לשירותים
          </Link>

          {/* Hero card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${service.bg} rounded-3xl p-10 mb-8 text-white`}
          >
            <span className="text-4xl mb-4 block">{service.emoji}</span>
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-4">
              {service.tag}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h1>
            <p className="text-white/90 text-lg font-medium italic">{service.tagline}</p>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-[#F5EDE4] mb-6"
          >
            <p className="text-gray-700 leading-relaxed text-[16px] whitespace-pre-line">
              {service.description}
            </p>
          </motion.div>

          {/* Bullets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-[#F5EDE4] mb-8"
          >
            <h2 className={`text-xl font-bold ${service.color} mb-5`}>מה כלול</h2>
            <ul className="space-y-3">
              {service.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <span className={`mt-1 w-5 h-5 rounded-full ${service.light} flex items-center justify-center flex-shrink-0`}>
                    <span className={`w-2 h-2 rounded-full ${service.bg}`} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <a
              href="mailto:hello@wedog.co.il"
              className={`inline-flex items-center gap-2 px-8 py-4 ${service.bg} text-white font-bold rounded-full text-lg shadow-lg hover:opacity-90 transition-opacity`}
            >
              מעוניינים? דברו איתנו
            </a>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}