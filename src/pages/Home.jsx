import React from "react";
import Navbar from "@/components/wedog/Navbar";
import Hero from "@/components/wedog/Hero";
import Services from "@/components/wedog/Services";
import AppFeatures from "@/components/wedog/AppFeatures";
import DownloadSection from "@/components/wedog/DownloadSection";
import Footer from "@/components/wedog/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navbar variant="transparent" />
      <Hero />
      <Services />
      <AppFeatures />
      <DownloadSection />
      <Footer />
    </div>
  );
}