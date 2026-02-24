import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, ShieldCheck, Camera, BarChart3 } from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "Smart Scheduling",
    description: "Book walks and training sessions in seconds. Set recurring schedules so your dog never misses a day.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description: "Hassle-free, encrypted payments right inside the app. No cash, no fuss — just peace of mind.",
  },
  {
    icon: Camera,
    title: "Social Photo Feed",
    description: "See real-time photos and updates from every walk. Your dog's adventures, captured and shared with you.",
  },
  {
    icon: BarChart3,
    title: "Dog Statistics",
    description: "Track your dog's activity, distance walked, and progress over time with beautiful, easy-to-read insights.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AppFeatures() {
  return (
    <section id="features" className="py-24 px-6 bg-[#F5EDE4]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2D5A3D]/10 text-[#2D5A3D] text-sm font-semibold tracking-wide mb-4">
            EXCLUSIVE PACK MEMBER FEATURES
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#2D5A3D] leading-tight mb-4">
            Everything in One App
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            The WEDOG app puts you in full control of your dog's care — from scheduling to insights, all at your fingertips.
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
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-[#F5EDE4] overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3A7550]/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#2D5A3D]/10 flex items-center justify-center mb-6 group-hover:bg-[#E8722A]/10 transition-colors duration-500">
                  <feature.icon className="w-7 h-7 text-[#2D5A3D] group-hover:text-[#E8722A] transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold text-[#2D5A3D] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}