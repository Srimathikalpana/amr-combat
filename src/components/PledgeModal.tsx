"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  HeartHandshake,
  Award,
} from "lucide-react";
import confetti from "canvas-confetti";

interface PledgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  pledgeCount: number;
  onPledgeSigned: (name: string) => void;
}

export default function PledgeModal({
  isOpen,
  onClose,
  pledgeCount,
  onPledgeSigned,
}: PledgeModalProps) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("Citizen / Patient");
  const [isSigned, setIsSigned] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#14b8a6", "#10b981", "#38bdf8", "#f59e0b"],
      });
    } catch {
      // Confetti fallback
    }

    setIsSigned(true);
    onPledgeSigned(name.trim());
  };

  const handleReset = () => {
    setIsSigned(false);
    setName("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-slate-900/90 border border-teal-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl z-10 overflow-hidden"
          >
            {/* Glowing accent border top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-emerald-400 to-teal-500" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSigned ? (
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-teal-400 font-semibold">
                      Public Health Commitment
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      The AMR Stewardship Pledge
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  Join <span className="font-semibold text-teal-400 font-mono">{(pledgeCount).toLocaleString()}</span> healthcare professionals, scientists, and global advocates committed to safeguarding the efficacy of antimicrobial medications.
                </p>

                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 mb-6 space-y-2.5">
                  <div className="flex items-start space-x-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>I will never pressure medical practitioners for antibiotics during viral illnesses.</span>
                  </div>
                  <div className="flex items-start space-x-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>I will always complete prescribed antimicrobial therapy exactly as guided.</span>
                  </div>
                  <div className="flex items-start space-x-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>I will never share or hoard leftover antibiotic prescriptions.</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="pledge-name"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Your Full Name
                    </label>
                    <input
                      id="pledge-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Dr. Jordan Hayes or Alex Rivera"
                      className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="pledge-role"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Affiliation / Role
                    </label>
                    <select
                      id="pledge-role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                    >
                      <option value="Citizen / Patient">Citizen / Patient</option>
                      <option value="Physician / Clinician">Physician / Clinician</option>
                      <option value="Pharmacist">Pharmacist</option>
                      <option value="Microbiologist / Researcher">Microbiologist / Researcher</option>
                      <option value="Nurse / Healthcare Worker">Nurse / Healthcare Worker</option>
                      <option value="Veterinarian / Agriculture">Veterinarian / Agriculture</option>
                      <option value="Public Health Student">Public Health Student</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-teal-500/25 transition-all flex items-center justify-center space-x-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Affirm Stewardship Pledge</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>

                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  Official Stewardship Guardian
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-2">
                  Pledge Confirmed
                </h3>
                <p className="text-sm text-slate-300 mb-6 max-w-sm mx-auto">
                  Thank you, <span className="font-semibold text-white">{name}</span> ({role}). Your commitment strengthens the global wall against antibiotic resistance.
                </p>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-left mb-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <HeartHandshake className="w-5 h-5 text-teal-400 shrink-0" />
                    <span className="text-xs font-semibold text-slate-200">
                      Stewardship Verification ID: #{Math.floor(100000 + Math.random() * 900000)}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Your pledge has been appended to the global AMR defense counter. Champion this standard within your community and clinic.
                  </p>
                </div>

                <button
                  onClick={handleReset}
                  className="w-full py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-semibold text-sm transition-colors"
                >
                  Close & Return to Portal
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
