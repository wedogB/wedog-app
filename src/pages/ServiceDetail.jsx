import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/wedog/Navbar";
import Footer from "@/components/wedog/Footer";
import { createPageUrl } from "@/utils";

const servicesData = {
  "wedog-pack": {
    title: "להקת WEDOG",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&q=80",
    body: `יש כלבים שמטיילים פעמיים ביום,
ויש כלבים שיוצאים עם הלהקה.
להקת WEDOG היא להקה אמיתית שעונה על הצרכים האמיתיים של הכלב.
הכלב שלכם לא צריך עוד טיול. הוא צריך WEDOG`,
  },
  "training": {
    title: "אילוף ופתרון בעיות התנהגות",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80",
    body: `הכלב שלכם לא סרבן, הוא פשוט לא מבין מה אתם רוצים.
בWEDOG אנחנו לומדים ליצור שפה משותפת, תקשורת נכונה, הובלה בריאה ועבודת צוות הדדית.`,
  },
  "eli-workshop": {
    title: 'סדנת "אלי"',
    image: "https://images.unsplash.com/photo-1601758003122-53c40e686a19?w=1200&q=80",
    body: `חודש וקצת - פקודה אחת מושלמת.
לכל כלב מכל רמה.`,
  },
  "weddings": {
    title: "ליווי חתונות",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
    body: `יום החתונה צריך להיות מושלם - גם בשביל הכלב.
אתם שמחים, הוא רגוע, הכל מסודר.`,
  },
  "puppy": {
    title: "חינוך גורים",
    image: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?w=1200&q=80",
    body: `מה שתלמדו אותו עכשיו, יקבע מי הוא יהיה בגיל שנתיים.
מתחילים נכון מהיום הראשון.`,
  },
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#3A7550] text-sm font-medium mb-8 hover:text-[#2D5A3D] transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            חזרה לדף הבית
          </Link>

          {/* Hero image */}
          <div className="rounded-2xl overflow-hidden mb-10 shadow-md">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#F5EDE4]">
            <h1 className="text-3xl md:text-4xl font-bold text-[#2D5A3D] mb-6">
              {service.title}
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
              {service.body}
            </p>

            <div className="mt-10 pt-8 border-t border-[#F5EDE4]">
              <p className="text-gray-500 mb-4 text-sm">רוצים לשמוע עוד? צרו איתנו קשר</p>
              <a
                href="#contact"
                onClick={() => { window.location.href = "/#contact"; }}
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#2D5A3D] text-white font-semibold rounded-full hover:bg-[#3A7550] transition-colors shadow-md"
              >
                צרו קשר
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}