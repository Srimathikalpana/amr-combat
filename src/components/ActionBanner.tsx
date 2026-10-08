"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileCheck,
  Clock,
  ShieldX,
  Sparkles,
  HeartHandshake,
  Users,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { STEWARDSHIP_RULES } from "@/data/amrData";

interface ActionBannerProps {
  onOpenPledge: () => void;
  pledgeCount: number;
}

export default function ActionBanner({
  onOpenPledge,
  pledgeCount,
}: ActionBannerProps) {
  const getRuleIcon = (iconName: string) => {
    switch (iconName) {
      case "FileCheck":
        return <FileCheck className="w-5 h-5 text-teal-400" />;
      case "Clock":
        return <Clock className="w-5 h-5 text-emerald-400" />;
      case "ShieldX":
        return <ShieldX className="w-5 h-5 text-rose-400" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section id="action" className="relative py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Action Glass Banner */}
        <div className="relative rounded-3xl glass-card border border-teal-500/30 p-8 sm:p-12 overflow-hidden shadow-2xl">
          {/* Ambient background glows */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-teal-500/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs font-mono uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                Antibiotic Stewardship Framework
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Preserve What Heals Us: <br />
                <span className="bg-gradient-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent">
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

            {/* Counter + CTA Box */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 lg:min-w-[320px] flex flex-col items-center text-center shadow-xl">
              <div className="flex items-center space-x-2 text-slate-400 text-xs font-mono mb-1">
                <Users className="w-4 h-4 text-teal-400" />
                <span>Global Stewardship Signatures</span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white font-mono my-2 tracking-tight">
                {pledgeCount.toLocaleString()}
              </div>
              <p className="text-[11px] text-slate-400 mb-4">
                Citizens & clinicians who pledged active resistance prevention
              </p>
              <button
                onClick={onOpenPledge}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-glow-teal flex items-center justify-center space-x-2 transition-all group"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Sign the Stewardship Pledge</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* 4 Stewardship Rule Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {STEWARDSHIP_RULES.map((rule) => (
              <motion.div
                key={rule.id}
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-teal-500/40 transition-all flex flex-col justify-between"
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
