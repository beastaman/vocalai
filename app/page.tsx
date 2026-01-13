"use client";

import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import WhatIsVoiceAI from "@/components/sections/what-is-voice-ai";
import PainPoints from "@/components/sections/pain-points";
import PerfectWorkflowSection from "@/components/sections/perfect-workflow";
import AutomatedWorkflow from "@/components/sections/automated-features";
import ComparisonTable from "@/components/sections/comparison-table";
import SolutionsGrid from "@/components/sections/solutions-grid";
import FAQSection from "@/components/sections/faq";
import CtaFooterBanner from "@/components/sections/cta-footer-banner";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <WhatIsVoiceAI />
      <PainPoints />
      <PerfectWorkflowSection />
      <AutomatedWorkflow />
      <ComparisonTable />
      <SolutionsGrid />
      <FAQSection />
      <CtaFooterBanner />
      <Footer />
    </main>
  );
}
