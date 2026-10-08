"use client";

import React from "react";
import { motion } from "framer-motion";
import { STATS_DATA } from "@/data/amrData";
import {
  TrendingUp,
  Skull,
  ShieldAlert,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

export default function StatsBar() {
  const getIcon = (id: string) => {
    switch (id) {
      case "direct-deaths":
        return <Skull className="w-5 h-5 text-rose-400" />;
      case "projected-2050":
        return <TrendingUp className="w-5 h-5 text-teal-400" />;
      case "preventable":
        return <CheckCircle className="w-5 h-5 text-emerald-400" />;
      default:
        return <ShieldAlert className="w-5 h-5 text-teal-400" />;
    }
  };

  const getGlow = (color: "teal" | "rose" | "emerald") => {
    switch (color) {
      case "rose":
        return "border-rose-500/30 hover:border-rose-400/60 shadow-glow-rose/20";
      case "teal":
        return "border-teal-500/30 hover:border-teal-400/60 shadow-glow-teal/20";
      case "emerald":
        return "border-emerald-500/30 hover:border-emerald-400/60 shadow-glow-emerald/20";
    }
  };

  const getTextGradient = (color: "teal" | "rose" | "emerald") => {
    switch (color) {
      case "rose":
        return "from-rose-400 via-rose-200 to-rose-400";
      case "teal":
        return "from-teal-300 via-cyan-200 to-teal-400";
      case "emerald":
        return "from-emerald-300 via-teal-200 to-emerald-400";
    }
  };

  return (
    <section id="global-impact" className="relative py-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/80 text-[11px] font-mono text-slate-300 uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            Epidemiological Impact Matrix
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            The Human & Global Cost in Numbers
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
            Empirical data verified by the Lancet Comprehensive Study and the
            World Health Organization (WHO) AMR Surveillance.
          </p>
        </div>

        {/* 3-Column High-Impact Metric Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -4 }}
              className={`glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group ${getGlow(
                stat.highlightColor
              )}`}
            >
              {/* Subtle background gradient reflection */}
              <div
                className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none ${
                  stat.highlightColor === "rose"
                    ? "bg-rose-500"
                    : stat.highlightColor === "teal"
                    ? "bg-teal-500"
                    : "bg-emerald-500"
                }`}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Metric 0{idx + 1}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-950/70 border border-slate-800">
                    {getIcon(stat.id)}
                  </div>
                </div>

                {/* Exact Value */}
                <div
                  className={`text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r bg-clip-text text-transparent mb-3 ${getTextGradient(
                    stat.highlightColor
                  )}`}
                >
                  {stat.value}
                </div>

                {/* Subtitle / Category */}
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                  {stat.label}
                </h3>

                {/* Exact Detail Specified */}
                <p className="text-sm text-slate-300/90 leading-relaxed font-normal">
                  {stat.detail}
                </p>
              </div>

              {/* Trend / Context Pill */}
              {stat.trend && (
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="text-[11px] text-slate-400">
                    {stat.trend}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      stat.highlightColor === "rose"
                        ? "bg-rose-950/60 text-rose-300 border border-rose-800/50"
                        : stat.highlightColor === "teal"
                        ? "bg-teal-950/60 text-teal-300 border border-teal-800/50"
                        : "bg-emerald-950/60 text-emerald-300 border border-emerald-800/50"
                    }`}
                  >
                    Verified
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Source citation */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 px-2 font-mono">
          <div className="flex items-center space-x-2">
            <span>Primary Datasets:</span>
            <span className="text-slate-300">
              Lancet Global Burden of AMR & WHO GLASS Report
            </span>
          </div>
          <a
            href="https://www.who.int/initiatives/glass"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-teal-400 hover:text-teal-300 transition-colors"
          >
            <span>Explore GLASS Database</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
