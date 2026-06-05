import React from "react";
import { useParams, Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import Navbar from "@/components/wedog/Navbar";
import Footer from "@/components/wedog/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const servicesData = {
  pack: {
    title: "להקת WEDOG",
    content: [
      "יש כלבים שמטיילים פעמיים ביום,",
      "ויש כלבים שיוצאים עם הלהקה.",
      "",
      'להקת WEDOG יוצאת כל יום לטיול של 7 ק"מ - פריקה אמיתית, סוציאליזציה, קצת אילוף בדרך וכלב שחוזר הביתה עייף ומרוצה.',
      "",
      "הכלב שלכם לא צריך עוד טיול. הוא צריך WEDOG",
    ],
  },
  training: {
    title: "אילוף ופתרון בעיות התנהגות",
    content: [
      "הכלב שלכם לא סרבן. הוא פשוט לא מבין מה אתם רוצים.",
      "",
      "רוב הבעיות שאני רואה הן לא בעיות של הכלב - הן בעיות של שפה.",
      "",
      "בWEDOG אנחנו עובדים עם בעלים וכלבים יחד ליצור שפה משותפת, להבין מה הכלב מנסה להגיד וללמוד איך להגיד לו.",
      "",
      "ככה אנחנו מגיעים לתוצאה של תקשורת נכונה, הובלה בריאה ועבודת צוות הדדית.",
    ],
  },
  ali: {
    title: 'סדנת "אלי"',
    content: [
      "חודש וקצת - פקודה אחת מושלמת.",
      "",
      "לכל כלב מכל רמה.",
    ],
  },
  wedding: {
    title: "ליווי חתונות",
    content: [
      "יום החתונה צריך להיות מושלם - גם בשביל הכלב.",
      "",
      "אנחנו דואגים לכלב מהערב שלפני, דרך הצילומים והחופה, ועד שאתם מגיעים לאסוף אותו הביתה.",
      "",
      "חבילת ליווי חתונות בנויה כך שתוכלו להתעסק רק בלשמוח ולהישאר בראש שקט.",
    ],
  },
  puppies: {
    title: "חינוך גורים",
    content: [
      "יש גורים שגדלים להיות כלבים עם בעיות - ויש גורים שגדלים להיות כלבים שיודעים מי הם.",
      "",
      "ההפרש ביניהם הוא הבסיס שנבנה בחודשים הראשונים.",
      "",
      "בWEDOG אנחנו מלמדים בעלי גורים לבנות שפה משותפת מהיום הראשון - להבין את הפסיכולוגיה של הכלב, שפה כלבית, איך מתמודדים עם בעיות קלאסיות של גורים ואיך בונין בסיס נכון שיכול למנוע בעיות לפני שהן בכלל מתפתחות.",
    ],
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-[#FAF8F5]">
        <Navbar variant="solid" />
        <div className="pt-32 text-center text-gray-500">השירות לא נמצא</div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navbar variant="solid" />

      <div className="pt-24 pb-20 px-6" dir="rtl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#3A7550] text-sm font-medium mb-10 hover:text-[#2D5A3D] transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            חזרה לדף הבית
          </Link>

          {/* Header */}
          <div className="mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2D5A3D]/10 text-[#2D5A3D] text-sm font-semibold mb-4">
              השירותים שלנו
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D5A3D] leading-tight">
              {service.title}
            </h1>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[#F5EDE4]">
            <div className="text-gray-700 text-lg leading-relaxed space-y-2">
              {service.content.map((line, i) =>
                line === "" ? (
                  <div key={i} className="h-2" />
                ) : (
                  <p key={i}>{line}</p>
                )
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#2D5A3D] text-white font-semibold rounded-full text-lg hover:bg-[#3A7550] transition-colors shadow-lg"
            >
              צרו קשר לפרטים
            </a>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}