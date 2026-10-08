"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldAlert,
  Biohazard,
  Flame,
  X,
  ArrowUpRight,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import { FLOATING_CARDS, FloatingCardData } from "@/data/amrData";
import ScientificDiagram from "@/components/ScientificDiagram";

export default function FloatingCards() {
  const [selectedCard, setSelectedCard] = useState<FloatingCardData | null>(null);

  // Handle ESC key to dismiss modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCard(null);
      }
    };

    if (selectedCard) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCard]);

  const renderIcon = (name: FloatingCardData["iconName"], className = "w-6 h-6") => {
    switch (name) {
      case "ShieldAlert":
        return <ShieldAlert className={className} />;
      case "Biohazard":
      case "Bug":
        return <Biohazard className={className} />;
      case "Flame":
      case "AlertTriangle":
        return <Flame className={className} />;
      default:
        return <ShieldAlert className={className} />;
    }
  };

  const getBadgeStyle = (color: "teal" | "rose" | "amber") => {
    switch (color) {
      case "teal":
        return "bg-teal-950/70 text-teal-300 border-teal-500/40";
      case "rose":
        return "bg-rose-950/70 text-rose-300 border-rose-500/40";
      case "amber":
        return "bg-amber-950/70 text-amber-300 border-amber-500/40";
    }
  };

  const getGlowHover = (color: "teal" | "rose" | "amber") => {
    switch (color) {
      case "teal":
        return "hover:border-teal-400/80 hover:shadow-glow-teal";
      case "rose":
        return "hover:border-rose-400/80 hover:shadow-glow-rose";
      case "amber":
        return "hover:border-amber-400/80 hover:shadow-glow-amber";
    }
  };

  const getIconWrapper = (color: "teal" | "rose" | "amber") => {
    switch (color) {
      case "teal":
        return "bg-teal-500/10 text-teal-400 border-teal-500/30";
      case "rose":
        return "bg-rose-500/10 text-rose-400 border-rose-500/30";
      case "amber":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30";
    }
  };

  return (
    <section id="key-concepts" className="relative py-16 lg:py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            Interactive Subdivision Hub
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Key Concepts & Scientific Drivers
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Select any card to step into an expanded deep-dive portal featuring
            cellular mechanisms, pathogen anatomy, and clinical drivers.
          </p>
        </div>

        {/* Responsive Grid with Exactly 3 Floating Interactive Glassmorphic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {FLOATING_CARDS.map((card) => (
            <motion.div
              key={card.id}
              layoutId={`card-${card.id}`}
              onClick={() => setSelectedCard(card)}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className={`glass-card rounded-3xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 border border-slate-800/80 relative overflow-hidden group ${getGlowHover(
                card.badgeColor
              )}`}
            >
              {/* Background ambient corner flare */}
              <div
                className={`absolute -top-20 -right-20 w-44 h-44 rounded-full blur-2xl opacity-15 pointer-events-none transition-opacity group-hover:opacity-30 ${
                  card.badgeColor === "teal"
                    ? "bg-teal-500"
                    : card.badgeColor === "rose"
                    ? "bg-rose-500"
                    : "bg-amber-500"
                }`}
              />

              <div>
                {/* Top Row: Category Badge + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border font-semibold ${getBadgeStyle(
                      card.badgeColor
                    )}`}
                  >
                    {card.badge}
                  </span>
                  <div
                    className={`p-3 rounded-2xl border ${getIconWrapper(
                      card.badgeColor
                    )} transition-transform group-hover:scale-110`}
                  >
                    {renderIcon(card.iconName, "w-6 h-6")}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-teal-300 transition-colors mb-2">
                  {card.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs font-mono text-slate-400 mb-4">
                  {card.subtitle}
                </p>

                {/* Card Preview Summary */}
                <p className="text-sm text-slate-300/90 leading-relaxed">
                  &ldquo;{card.previewSummary}&rdquo;
                </p>
              </div>

              {/* Bottom Interactive Trigger Pill */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-teal-400 group-hover:text-teal-300 transition-colors flex items-center gap-1.5">
                  Deep Dive & Diagram
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-teal-500 transition-all">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expandable Modal with Shared Element Transition (layoutId) */}
        <AnimatePresence>
          {selectedCard && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
              {/* Background overlay blur with outside-click dismiss */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setSelectedCard(null)}
                className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
              />

              {/* Expanded Deep-Dive Card Modal */}
              <motion.div
                layoutId={`card-${selectedCard.id}`}
                transition={{ type: "spring", damping: 28, stiffness: 280 }}
                className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900/95 border border-slate-700/80 rounded-3xl shadow-2xl backdrop-blur-2xl z-10 flex flex-col overflow-hidden"
              >
                {/* Header */}
                <div className="p-6 sm:p-8 border-b border-slate-800/80 flex items-start justify-between bg-slate-950/60 sticky top-0 z-20 backdrop-blur-md">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-3.5 rounded-2xl border ${getIconWrapper(
                        selectedCard.badgeColor
                      )}`}
                    >
                      {renderIcon(selectedCard.iconName, "w-7 h-7")}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border font-semibold ${getBadgeStyle(
                            selectedCard.badgeColor
                          )}`}
                        >
                          {selectedCard.badge}
                        </span>
                        <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                          Deep-Dive Briefing
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {selectedCard.title}
                      </h3>
                    </div>
                  </div>

                  {/* Clear 'X' Close Button */}
                  <button
                    onClick={() => setSelectedCard(null)}
                    aria-label="Close dialog (Escape)"
                    className="p-2.5 rounded-2xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Formatted Reading View with Clear Typography */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
                  {/* Overview Callout */}
                  <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/90 text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                    <p>{selectedCard.deepDive.overview}</p>
                  </div>

                  {/* Scientific Illustration / Diagram Section */}
                  <div>
                    <ScientificDiagram type={selectedCard.diagramType} />
                  </div>

                  {/* Deep-Dive Structured Breakdown */}
                  <div className="space-y-6">
                    <h4 className="text-sm font-mono uppercase tracking-wider text-teal-400 font-semibold flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" />
                      Detailed Scientific Breakdown
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedCard.deepDive.sections.map((section, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-2xl bg-slate-950/40 border border-slate-800/70 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                              <h5 className="text-sm font-bold text-white">
                                {section.title}
                              </h5>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                              {section.content}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Clinical Alert if present */}
                  {selectedCard.deepDive.clinicalAlert && (
                    <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/30 flex items-start space-x-3 text-rose-200">
                      <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm">
                        <strong className="text-rose-300 font-semibold">
                          Surveillance Warning:
                        </strong>{" "}
                        {selectedCard.deepDive.clinicalAlert}
                      </div>
                    </div>
                  )}

                  {/* Key Takeaway Callout Box */}
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-950/50 via-slate-900/60 to-emerald-950/40 border border-teal-500/30 flex items-start space-x-3.5">
                    <div className="p-2 rounded-xl bg-teal-500/20 text-teal-300 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-teal-400 font-bold block mb-1">
                        Core Takeaway
                      </span>
                      <p className="text-sm text-slate-200 font-medium leading-relaxed">
                        {selectedCard.deepDive.keyTakeaway}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-4 sm:p-6 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Press <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-300">ESC</kbd> or click outside to dismiss</span>
                  <button
                    onClick={() => setSelectedCard(null)}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-colors font-sans text-xs font-semibold"
                  >
                    Done Reading
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
