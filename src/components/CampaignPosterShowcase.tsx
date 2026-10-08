"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ZoomIn,
  X,
  Sparkles,
  Syringe,
  HandMetal,
  UserX,
  Stethoscope,
  Pill,
  Share2,
} from "lucide-react";

export default function CampaignPosterShowcase() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen]);

  const campaignDirectives = [
    {
      num: 1,
      tamil: "மருத்துவரின் ஆலோசனையின் பேரில் மட்டுமே பயன்படுத்தவும்!",
      english: "Use antibiotics solely on a qualified doctor's verified prescription.",
      icon: Stethoscope,
      accent: "cyan",
    },
    {
      num: 2,
      tamil: "மருந்துப் படிப்பை முழுமையாக முடிக்கவும்!",
      english: "Complete the full prescribed course even if you start feeling healthier early.",
      icon: Pill,
      accent: "amber",
    },
    {
      num: 3,
      tamil: "எஞ்சிய மருந்துகளை மற்றவர்களுடன் பகிர வேண்டாம்!",
      english: "Never share leftover antibiotic doses with friends, relatives, or save them for later.",
      icon: Share2,
      accent: "rose",
    },
    {
      num: 4,
      tamil: "சோப் மற்றும் நீரால் அடிக்கடி கைகளைக் கழுவவும்!",
      english: "Wash hands frequently with clean water and soap to prevent community infection.",
      icon: HandMetal,
      accent: "emerald",
    },
    {
      num: 5,
      tamil: "தடுப்பூசி போட்டுக்கொள்ளுங்கள்!",
      english: "Stay up to date with immunizations and vaccines to minimize antibiotic dependency.",
      icon: Syringe,
      accent: "blue",
    },
    {
      num: 6,
      tamil: "நோய்வாய்ப்பட்டவர்களிடமிருந்து தள்ளி இருங்கள்!",
      english: "Maintain hygienic distance from sick individuals to break transmission chains.",
      icon: UserX,
      accent: "purple",
    },
  ];

  return (
    <section id="action-guide" className="relative py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4 shadow-glow-cyan/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Bilingual Community Campaign
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            உடை அணிவீர்! (ARMOUR UP!) <br />
            <span className="bg-gradient-to-r from-cyan-400 via-amber-300 to-rose-400 bg-clip-text text-transparent">
              AMR-க்கு எதிரான போராட்டத்தில் இணைவீர்!
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Superbugs are the real monsters (&ldquo;சூப்பர்பக்ஸ் தான் உண்மையான அரக்கர்கள்!&rdquo;).
            Equip yourself with the official 6 community defense guidelines to protect
            generations of antimicrobial efficacy.
          </p>
        </div>

        {/* Main Grid: Poster Illuminated Frame + 6 Directives */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Illuminated Poster Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl glass-card p-3 sm:p-4 border border-cyan-500/40 shadow-glow-cyan/30 group cursor-pointer overflow-hidden max-w-md w-full"
              onClick={() => setLightboxOpen(true)}
            >
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-amber-400 to-rose-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden bg-slate-950">
                {/* Campaign Label Badge */}
                <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 text-[11px] font-mono text-cyan-300 font-bold shadow-lg">
                    Official Awareness Campaign: Armour Up! (உடை அணிவீர்!)
                  </span>
                  <div className="p-2 rounded-xl bg-slate-950/85 text-cyan-300 border border-slate-700/80 group-hover:scale-110 transition-transform">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                {/* Poster Image */}
                <Image
                  src="/amr-campaign-poster.jpg"
                  alt="Official Awareness Campaign: Armour Up! (உடை அணிவீர்!)"
                  width={480}
                  height={720}
                  priority
                  className="w-full h-auto object-contain rounded-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Bottom Click-to-Expand Prompt */}
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex items-center justify-center space-x-2 text-xs font-mono text-slate-300">
                  <ZoomIn className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Click to view full poster lightbox</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 6 Action Directives breakdown */}
          <div className="lg:col-span-7 space-y-3.5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                நீங்கள் எப்படிப் போராடலாம்! • How You Can Fight Back
              </span>
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                6 Shield Directives
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {campaignDirectives.map((d) => {
                const IconComponent = d.icon;
                return (
                  <motion.div
                    key={d.num}
                    whileHover={{ y: -3 }}
                    className="p-4 rounded-2xl glass-card border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-xs font-mono font-bold text-amber-400">
                          {d.num}
                        </span>
                        <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Tamil Directive */}
                      <p className="text-xs font-bold text-white mb-1.5 leading-snug">
                        {d.tamil}
                      </p>

                      {/* English Translation */}
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {d.english}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Poster Lightbox Modal */}
        <AnimatePresence>
          {lightboxOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxOpen(false)}
                className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-3xl max-h-[92vh] w-full bg-slate-900/90 border border-cyan-500/40 rounded-3xl p-3 sm:p-4 shadow-2xl z-10 flex flex-col items-center overflow-hidden"
              >
                {/* Top Bar with Title and Close */}
                <div className="w-full flex items-center justify-between p-3 border-b border-slate-800">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs font-mono text-cyan-300 font-bold uppercase">
                      Official Awareness Campaign: Armour Up! (உடை அணிவீர்!)
                    </span>
                  </div>
                  <button
                    onClick={() => setLightboxOpen(false)}
                    className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-750 transition-colors"
                    aria-label="Close lightbox"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* High-res Image Preview */}
                <div className="overflow-auto p-2 flex items-center justify-center w-full max-h-[80vh]">
                  <Image
                    src="/amr-campaign-poster.jpg"
                    alt="Official Awareness Campaign: Armour Up! (உடை அணிவீர்!)"
                    width={700}
                    height={1050}
                    className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl"
                  />
                </div>

                <div className="w-full text-center py-2 text-[11px] font-mono text-slate-400 border-t border-slate-800">
                  Press ESC or click outside to dismiss preview
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
