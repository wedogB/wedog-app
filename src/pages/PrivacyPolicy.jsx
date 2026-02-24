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
    content: `We collect information you provide directly to us when you create an account, book a service, or communicate with us. This includes:

• **Personal Information:** Name, email address, phone number, and billing address.
• **Pet Information:** Your dog's name, breed, age, health conditions, and behavioral notes.
• **Payment Information:** Payment card details processed securely through our third-party payment processor.
• **Location Data:** GPS data during active walks to provide real-time tracking and walk statistics.
• **Photos & Media:** Photos taken during walks and training sessions shared through the app's social feed.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:

• Provide, maintain, and improve our dog walking and training services.
• Process transactions and send related information including booking confirmations and invoices.
• Send you notifications about your dog's walks, including real-time updates, photos, and GPS tracking.
• Generate activity statistics and progress reports for your dog.
• Communicate with you about services, promotions, and company news.
• Ensure the safety and well-being of all dogs in our care.
• Comply with legal obligations.`,
  },
  {
    title: "3. Information Sharing",
    content: `We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:

• **Service Providers:** We share information with third-party vendors who assist us in operating our app, processing payments, and delivering services.
• **Dog Walkers & Trainers:** Relevant pet and contact information is shared with your assigned WEDOG professional to provide quality care.
• **Legal Requirements:** We may disclose information if required by law, regulation, or legal process.
• **Business Transfers:** In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.`,
  },
  {
    title: "4. Data Security",
    content: `We implement industry-standard security measures to protect your personal information, including:

• SSL/TLS encryption for all data transmitted between your device and our servers.
• Encrypted storage of sensitive data, including payment information.
• Regular security audits and vulnerability assessments.
• Access controls limiting employee access to personal data on a need-to-know basis.

While we strive to protect your information, no method of electronic storage or transmission is 100% secure. We cannot guarantee absolute security.`,
  },
  {
    title: "5. Your Rights & Choices",
    content: `You have the following rights regarding your personal data:

• **Access:** Request a copy of the personal data we hold about you.
• **Correction:** Request correction of inaccurate or incomplete data.
• **Deletion:** Request deletion of your personal data, subject to legal retention requirements.
• **Opt-Out:** Unsubscribe from marketing communications at any time.
• **Data Portability:** Request your data in a structured, machine-readable format.

To exercise any of these rights, please contact us at privacy@wedog.co.il.`,
  },
  {
    title: "6. Cookies & Tracking",
    content: `Our app and website may use cookies and similar tracking technologies to enhance your experience. These include:

• **Essential Cookies:** Required for app functionality, including authentication and session management.
• **Analytics Cookies:** Help us understand how users interact with our app so we can improve our services.
• **Performance Cookies:** Monitor app performance and identify issues.

You can manage cookie preferences through your device or browser settings.`,
  },
  {
    title: "7. Children's Privacy",
    content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we learn that we have collected personal data from a child without parental consent, we will take steps to delete that information promptly.`,
  },
  {
    title: "8. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically for any changes.`,
  },
  {
    title: "9. Contact Us",
    content: `If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:

**WEDOG**
Tel Aviv, Israel
Email: privacy@wedog.co.il
Phone: +972-50-000-0000`,
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
              At WEDOG, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services. By using WEDOG, you agree to the collection and use of information in accordance with this policy.
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