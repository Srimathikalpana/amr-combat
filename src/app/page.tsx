"use client";

import React from "react";
import MicroscopicBackground from "@/components/MicroscopicBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import FloatingCards from "@/components/FloatingCards";
import CampaignPosterShowcase from "@/components/CampaignPosterShowcase";
import AMRQuiz from "@/components/AMRQuiz";
import ActionBanner from "@/components/ActionBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
      {/* 1. Ambient Microscopic Looping Visual Layer (Canvas Cellular Simulation + high-contrast overlay) */}
      <MicroscopicBackground />

      {/* Main Interactive Interface Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar />

        <main className="flex-1">
          {/* Hero Section */}
          <Hero />

          {/* Impact Statistics Row (1.27M+, 10M, 100% Preventable) */}
          <StatsBar />

          {/* Core Concepts: 3 Floating Interactive Cards */}
          <FloatingCards />

          {/* Official Campaign Poster Showcase with Lightbox & 6 Directives */}
          <CampaignPosterShowcase />

          {/* Interactive 5-Question AMR Quiz in a full-width, centered container */}
          <section className="relative py-12">
            <AMRQuiz />
          </section>

          {/* Action Guide & 4 Stewardship Pillars */}
          <ActionBanner />
        </main>

        {/* Footer with WHO & AMR surveillance links and GitHub Repository badge */}
        <Footer />
      </div>
    </div>
  );
}
