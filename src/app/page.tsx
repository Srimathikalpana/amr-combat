"use client";

import React, { useState } from "react";
import MicroscopicBackground from "@/components/MicroscopicBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import FloatingCards from "@/components/FloatingCards";
import CampaignPosterShowcase from "@/components/CampaignPosterShowcase";
import AMRQuiz from "@/components/AMRQuiz";
import PledgeCard from "@/components/PledgeCard";
import ActionBanner from "@/components/ActionBanner";
import Footer from "@/components/Footer";
import PledgeModal from "@/components/PledgeModal";

export default function Home() {
  const [isPledgeModalOpen, setIsPledgeModalOpen] = useState(false);
  const [pledgeCount, setPledgeCount] = useState(14892);

  const handlePledgeCommitted = (name?: string, email?: string) => {
    if (name || email) {
      // Registered
    }
    setPledgeCount((prev) => prev + 1);
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
      {/* 1. Ambient Microscopic Looping Visual Layer (Canvas Cellular Simulation + high-contrast overlay) */}
      <MicroscopicBackground />

      {/* Main Interactive Interface Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* A. Navigation Bar */}
        <Navbar onOpenPledge={() => setIsPledgeModalOpen(true)} />

        <main className="flex-1">
          {/* B. Hero Section */}
          <Hero />

          {/* Impact Statistics Row (1.27M+, 10M, 100% Preventable) */}
          <StatsBar />

          {/* C. Core Concepts: 3 Floating Interactive Cards */}
          <FloatingCards />

          {/* Official Campaign Poster Showcase with Lightbox & 6 Directives */}
          <CampaignPosterShowcase />

          {/* D. Interactive 5-Question Quiz & E. Adjacent Public Pledge Portal */}
          <div className="relative py-12">
            <AMRQuiz />

            {/* Adjacent Public Pledge Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
              <PledgeCard
                pledgeCount={pledgeCount}
                onPledgeCommitted={handlePledgeCommitted}
              />
            </div>
          </div>

          {/* Action Guide & 4 Stewardship Pillars */}
          <ActionBanner
            onOpenPledge={() => setIsPledgeModalOpen(true)}
            pledgeCount={pledgeCount}
          />
        </main>

        {/* Footer with WHO & AMR surveillance links */}
        <Footer />
      </div>

      {/* Interactive Modal Backup */}
      <PledgeModal
        isOpen={isPledgeModalOpen}
        onClose={() => setIsPledgeModalOpen(false)}
        pledgeCount={pledgeCount}
        onPledgeSigned={handlePledgeCommitted}
      />
    </div>
  );
}
