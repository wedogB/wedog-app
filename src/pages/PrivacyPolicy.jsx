import React from "react";
import Navbar from "@/components/wedog/Navbar";
import Footer from "@/components/wedog/Footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const sections = [
  {
    title: "1. Information We Collect",
    content: `To provide you with scheduling, payment, and community features, we may collect the following types of information:

• **Personal Information:** Your name, email address, phone number, and physical address.
• **Dog Profile Information:** Information about your dog(s), including their name, breed, age, behavioral statistics, and their friendships within the pack.
• **Media and Content:** Photos or videos uploaded to the app's social feed showing the dogs during their walks and activities.
• **Payment Information:** Transaction details related to your walk bookings. Please note: All payment processing is handled securely by third-party payment providers. We do not directly store your full credit card details on our servers.
• **Usage Data:** Information on how you interact with the app, such as login times and feature usage.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the collected data strictly to operate the app and provide our services:

• To schedule, manage, and coordinate dog walks and daycare services.
• To process payments for services securely.
• To foster our private pack community by sharing photos, stats, and updates about your dog's day with you and other verified pack members.
• To communicate with you regarding schedule changes, updates, or customer support.`,
  },
  {
    title: "3. Data Sharing and Disclosure",
    content: `The WEDOG app is a closed community. We do not sell, rent, or trade your personal information to outside third parties. We may only share information in the following situations:

• **Within the Pack:** Photos, dog statistics, and dog names are shared within the app's feed so pack members can enjoy the community aspect of our service.
• **Service Providers:** We may share necessary data with trusted third-party services that help us operate the app (such as cloud hosting and secure payment processors), under strict confidentiality agreements.
• **Legal Requirements:** If required by law, we may disclose information to comply with legal processes or protect the rights and safety of WEDOG, our users, or others.`,
  },
  {
    title: "4. Data Security",
    content: `We implement reasonable and standard security measures to protect your personal information and your dog's data from unauthorized access, alteration, or disclosure. However, please be aware that no method of electronic storage or transmission over the internet is 100% secure.`,
  },
  {
    title: "5. Your Rights and Choices",
    content: `As a user of the WEDOG app, you have the right to:

• Access the personal data we hold about you.
• Update or correct your profile and your dog's profile.
• Request the deletion of your account and personal data.
• Opt-out of certain communications (though critical service updates regarding your scheduled walks will still be sent).

To exercise any of these rights, please contact us using the information below.`,
  },
  {
    title: "6. Changes to This Privacy Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our app's features or legal requirements. We will notify you of any significant changes by posting the new policy within the app and updating the "Effective Date."`,
  },
  {
    title: "7. Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact us at:

**Email:** barak.rozenbaum@gmail.com
**Address:** Tel Aviv, Israel`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
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
            to={createPageUrl("Home")}
            className="inline-flex items-center gap-2 text-[#3A7550] text-sm font-medium mb-8 hover:text-[#2D5A3D] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D5A3D] mb-3">
              Privacy Policy
            </h1>
            <p className="text-gray-500 text-sm">
              Last Updated: February 24, 2026
            </p>
          </div>

          {/* Intro */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#F5EDE4] mb-8">
            <p className="text-gray-700 leading-relaxed">
              Welcome to the WEDOG app ("we," "our," or "us"). We respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application, specifically designed for our dog pack members.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#F5EDE4]"
              >
                <h2 className="text-xl font-bold text-[#2D5A3D] mb-4">
                  {section.title}
                </h2>
                <div className="text-gray-600 leading-relaxed whitespace-pre-line text-[15px]">
                  {section.content.split("**").map((part, i) =>
                    i % 2 === 1 ? (
                      <strong key={i} className="text-gray-800 font-semibold">{part}</strong>
                    ) : (
                      <span key={i}>{part}</span>
                    )
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}