"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Activity,
  AlertCircle,
  Database,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="overview"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge / Pill */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-rose-500/30 text-rose-300 shadow-glow-rose/20 mb-8 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide uppercase">
              Global Public Health Alert • The Silent Pandemic
            </span>
            <span className="text-slate-500 text-xs">•</span>
            <span className="text-xs text-rose-400/90 font-mono">
              WHO Critical Tier
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
          >
            Preserving Antibiotics, Combating the{" "}
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-rose-400 bg-clip-text text-transparent">
              Silent Pandemic
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-slate-300/90 max-w-3xl leading-relaxed mb-10 font-normal"
          >
            Antimicrobial Resistance threatens the foundation of modern
            medicine. When bacteria adapt to survive standard medications,
            routine treatments fail. Explore how it begins, how superbugs form,
            and what we can do to stop it.
          </motion.p>

          {/* Interactive Call-to-Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            {/* Primary button: Explore the Science */}
            <button
              onClick={() => handleScrollTo("#key-concepts")}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 via-emerald-400 to-teal-400 hover:from-teal-400 hover:to-emerald-300 text-slate-950 font-bold text-sm tracking-wide shadow-glow-teal flex items-center justify-center gap-2 group transition-all"
            >
              <span>Explore the Science</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </button>

            {/* Secondary button: Understanding the Data */}
            <button
              onClick={() => handleScrollTo("#global-impact")}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-teal-500/50 text-slate-200 font-semibold text-sm backdrop-blur-md flex items-center justify-center gap-2 transition-all group"
            >
              <Database className="w-4 h-4 text-teal-400" />
              <span>Understanding the Data</span>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Biomedical Live Status Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-14 pt-8 border-t border-slate-800/60 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-left"
          >
            <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/60">
              <span className="text-[10px] font-mono uppercase text-slate-400 block mb-0.5">
                Surveillance Status
              </span>
              <div className="flex items-center space-x-1.5 text-emerald-400 font-semibold text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>GLASS Active 2026</span>
              </div>
            </div>

            <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/60">
              <span className="text-[10px] font-mono uppercase text-slate-400 block mb-0.5">
                Critical Pathogens
              </span>
              <span className="text-xs font-semibold text-rose-300 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                12 Priority Strains
              </span>
            </div>

            <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/60">
              <span className="text-[10px] font-mono uppercase text-slate-400 block mb-0.5">
                Treatment Efficacy
              </span>
              <span className="text-xs font-semibold text-amber-300 flex items-center gap-1">
                <Activity className="w-3.5 h-3.5 text-amber-400" />
                Declining Empiric Rate
              </span>
            </div>

            <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/60">
              <span className="text-[10px] font-mono uppercase text-slate-400 block mb-0.5">
                Global Response
              </span>
              <span className="text-xs font-semibold text-teal-300 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                One Health Initiative
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
