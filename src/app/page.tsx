"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MetricsBanner } from "@/components/MetricsBanner";
import { PainPoints } from "@/components/PainPoints";
import { ModulesShowcase } from "@/components/ModulesShowcase";
import { Industries } from "@/components/Industries";
import { RoiCalculator } from "@/components/RoiCalculator";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { DemoModal } from "@/components/DemoModal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function HomePage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const handleOpenDemo = () => {
    setDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setDemoModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenDemo={handleOpenDemo} />
        <MetricsBanner />
        <PainPoints />
        <ModulesShowcase onOpenDemo={handleOpenDemo} />
        <Industries onOpenDemo={handleOpenDemo} />
        <RoiCalculator onOpenDemo={handleOpenDemo} />
        <ComparisonTable onOpenDemo={handleOpenDemo} />
        <Pricing onOpenDemo={handleOpenDemo} />
        <Testimonials />
        <Faq />
        <CtaBanner onOpenDemo={handleOpenDemo} />
      </main>

      {/* Footer */}
      <Footer onOpenDemo={handleOpenDemo} />

      {/* Interactive Modal */}
      <DemoModal isOpen={demoModalOpen} onClose={handleCloseDemo} />

      {/* Floating WhatsApp Quick Chat */}
      <FloatingWhatsApp />
    </div>
  );
}
