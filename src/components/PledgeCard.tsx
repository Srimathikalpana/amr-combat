"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  Award,
  Users,
  Shield,
  Send,
} from "lucide-react";
import confetti from "canvas-confetti";

interface PledgeCardProps {
  pledgeCount: number;
  onPledgeCommitted: (name: string, email: string) => void;
}

export default function PledgeCard({
  pledgeCount,
  onPledgeCommitted,
}: PledgeCardProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!isAgreed) {
      setErrorMsg("Please check the pledge agreement checkbox.");
      return;
    }

    try {
      confetti({
        particleCount: 120,
        spread: 75,
        origin: { y: 0.65 },
        colors: ["#06b6d4", "#f59e0b", "#10b981", "#3b82f6"],
      });
    } catch {
      // Fallback
    }

    setIsSubmitted(true);
    onPledgeCommitted(name.trim(), email.trim());
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setIsAgreed(false);
  };

  return (
    <div id="pledge" className="scroll-mt-24">
      <div className="relative rounded-3xl glass-card border border-cyan-500/30 p-7 sm:p-10 shadow-2xl overflow-hidden group">
        {/* Ambient background glow */}
        <div className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold block">
                  Public Health Covenant
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  YOUR PLEDGE. YOUR ACTION.
                </h3>
              </div>
            </div>

            {/* Live Count Pill */}
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-300">
              <Users className="w-3.5 h-3.5 text-cyan-400" />
              <span>
                <strong className="text-white font-bold">
                  {pledgeCount.toLocaleString()}
                </strong>{" "}
                Guardians
              </span>
            </div>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Commit your name to the global registry against antimicrobial
                resistance. Every responsible citizen defends modern medical
                science.
              </p>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs">
                  {errorMsg}
                </div>
              )}

              <div>
                <label
                  htmlFor="pledge-form-name"
                  className="block text-xs font-medium text-slate-300 mb-1"
                >
                  Full Name
                </label>
                <input
                  id="pledge-form-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Maya S. or Dr. K. Nathan"
                  className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="pledge-form-email"
                  className="block text-xs font-medium text-slate-300 mb-1"
                >
                  Email Address
                </label>
                <input
                  id="pledge-form-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
              </div>

              {/* Exact Checkbox Requirement */}
              <div className="pt-2">
                <label className="flex items-start space-x-3 cursor-pointer group/cb">
                  <input
                    type="checkbox"
                    checked={isAgreed}
                    onChange={(e) => setIsAgreed(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-slate-700 text-cyan-500 focus:ring-cyan-400 bg-slate-900"
                  />
                  <span className="text-xs text-slate-300 leading-snug group-hover/cb:text-white transition-colors">
                    I pledge to use antibiotics responsibly and finish complete
                    prescribed courses.
                  </span>
                </label>
              </div>

              {/* Action button: COMMIT TO THE COMBAT with instant confetti */}
              <button
                type="submit"
                className="w-full mt-3 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 via-amber-400 to-cyan-400 hover:from-cyan-300 hover:to-amber-300 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-glow-cyan flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>COMMIT TO THE COMBAT</span>
                <Send className="w-3.5 h-3.5 ml-1" />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-4 space-y-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                <Award className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[11px] font-mono text-emerald-400 uppercase font-bold tracking-wider">
                  Verified Guardian Certificate
                </span>
                <h4 className="text-xl font-bold text-white mt-1">
                  Pledge Registered: {name}
                </h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto mt-1 leading-relaxed">
                  Confirmation sent to <strong className="text-white">{email}</strong>. Thank you for standing as a shield against drug-resistant superbugs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-left text-xs text-slate-300 space-y-1.5">
                <div className="flex items-center space-x-2 text-cyan-400 font-mono text-[11px]">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Stewardship Registry #AMR-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  You are officially counted among {(pledgeCount).toLocaleString()} international guardians.
                </p>
              </div>

              <button
                onClick={handleReset}
                className="text-xs text-cyan-400 hover:underline pt-2"
              >
                Register another guardian pledge
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
