"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileCheck,
  Clock,
  ShieldX,
  Sparkles,
  ShieldCheck,
  HeartPulse,
} from "lucide-react";
import { STEWARDSHIP_RULES } from "@/data/amrData";

export default function ActionBanner() {
  const getRuleIcon = (iconName: string) => {
    switch (iconName) {
      case "FileCheck":
        return <FileCheck className="w-5 h-5 text-cyan-400" />;
      case "Clock":
        return <Clock className="w-5 h-5 text-emerald-400" />;
      case "ShieldX":
        return <ShieldX className="w-5 h-5 text-rose-400" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="action" className="relative py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Action Glass Banner */}
        <div className="relative rounded-3xl glass-card border border-cyan-500/30 p-8 sm:p-12 overflow-hidden shadow-2xl">
          {/* Ambient background glows */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10 pb-8 border-b border-slate-800/80">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                Antibiotic Stewardship Framework
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Preserve What Heals Us: <br />
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                  The Four Pillars of Resistance Prevention
                </span>
              </h2>

              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                Antibiotics are a finite global common good. Every single
                unwarranted prescription, discontinued cycle, or self-medicated
                dose accelerates superbug selection. Responsible stewardship is
                everybody’s obligation.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-slate-900/60 border border-slate-800 px-5 py-4 rounded-2xl shrink-0">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Public Health Priority
                </span>
                <span className="text-xs font-bold text-white">
                  WHO Global Action Plan
                </span>
              </div>
            </div>
          </div>

          {/* 4 Stewardship Rule Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {STEWARDSHIP_RULES.map((rule) => (
              <motion.div
                key={rule.id}
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      RULE #{rule.id}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      {getRuleIcon(rule.icon)}
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">
                    {rule.title}
                  </h3>
                  <p className="text-xs text-slate-300/85 leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
