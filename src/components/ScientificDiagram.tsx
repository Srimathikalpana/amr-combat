"use client";

import React from "react";
import { ShieldAlert, ShieldX, Zap, Dna } from "lucide-react";

interface ScientificDiagramProps {
  type: "mechanism" | "pathogen" | "transmission";
}

export default function ScientificDiagram({ type }: ScientificDiagramProps) {
  if (type === "mechanism") {
    return (
      <div className="w-full rounded-2xl bg-slate-950/70 border border-slate-800/80 p-5 overflow-hidden">
        <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-mono tracking-wider text-teal-400 uppercase font-semibold">
              Biochemical Schematic • Target Site Modification & Degradation
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
            FIG. 01 • MOLECULAR INACTIVATION
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Sensitive Pathogen Case */}
          <div className="rounded-xl bg-slate-900/50 border border-teal-500/20 p-4 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-teal-300">
                Susceptible Pathogen
              </span>
              <span className="text-[10px] text-teal-400/80 font-mono bg-teal-950/60 px-2 py-0.5 rounded border border-teal-800/40">
                Successful Treatment
              </span>
            </div>

            <div className="h-44 relative flex items-center justify-center bg-slate-950/50 rounded-lg border border-slate-800/50">
              <svg className="w-full h-full" viewBox="0 0 240 140" fill="none">
                {/* Bacterial Membrane */}
                <rect
                  x="20"
                  y="50"
                  width="200"
                  height="70"
                  rx="12"
                  stroke="#14b8a6"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  fill="#0d2924"
                  fillOpacity="0.4"
                />
                <text
                  x="120"
                  y="92"
                  textAnchor="middle"
                  fill="#5eead4"
                  fontSize="10"
                  fontFamily="monospace"
                >
                  Bacterial Cytoplasm
                </text>

                {/* Target receptor */}
                <circle cx="120" cy="50" r="12" fill="#0f766e" stroke="#2dd4bf" strokeWidth="2" />
                <path d="M114 50h12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

                {/* Antibiotic Molecule docking */}
                <g className="animate-bounce">
                  <polygon points="120,26 126,38 114,38" fill="#38bdf8" />
                  <circle cx="120" cy="24" r="5" fill="#38bdf8" />
                </g>
                <text
                  x="120"
                  y="16"
                  textAnchor="middle"
                  fill="#7dd3fc"
                  fontSize="9"
                  fontFamily="sans-serif"
                  fontWeight="600"
                >
                  Antibiotic Binds & Disrupts
                </text>
              </svg>
            </div>

            <p className="text-xs text-slate-300 mt-3 leading-relaxed">
              Active antibiotic molecule successfully docks to vulnerable bacterial wall receptor, neutralizing cell replication.
            </p>
          </div>

          {/* Resistant Pathogen Case */}
          <div className="rounded-xl bg-slate-900/50 border border-rose-500/20 p-4 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-rose-300">
                Resistant Superbug
              </span>
              <span className="text-[10px] text-rose-400/80 font-mono bg-rose-950/60 px-2 py-0.5 rounded border border-rose-800/40">
                Medication Neutralized
              </span>
            </div>

            <div className="h-44 relative flex items-center justify-center bg-slate-950/50 rounded-lg border border-slate-800/50">
              <svg className="w-full h-full" viewBox="0 0 240 140" fill="none">
                {/* Fortified Cell Wall */}
                <rect
                  x="20"
                  y="50"
                  width="200"
                  height="70"
                  rx="12"
                  stroke="#f43f5e"
                  strokeWidth="3"
                  fill="#360c16"
                  fillOpacity="0.4"
                />
                <text
                  x="120"
                  y="92"
                  textAnchor="middle"
                  fill="#fda4af"
                  fontSize="10"
                  fontFamily="monospace"
                >
                  Mutated Superbug Core
                </text>

                {/* Neutralizing Enzyme Cloud (e.g. Beta-Lactamase) */}
                <circle cx="120" cy="48" r="18" fill="#881337" fillOpacity="0.8" stroke="#fb7185" strokeWidth="1.5" />
                <path d="M112 48l8-8 8 8-8 8z" fill="#f43f5e" />

                {/* Deflected / Degraded Antibiotic */}
                <g>
                  <circle cx="85" cy="22" r="4" fill="#64748b" stroke="#94a3b8" />
                  <path d="M82 25L70 38" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="2 2" />
                  <circle cx="155" cy="22" r="4" fill="#64748b" stroke="#94a3b8" />
                  <path d="M158 25L170 38" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="2 2" />
                </g>
                <text
                  x="120"
                  y="16"
                  textAnchor="middle"
                  fill="#f43f5e"
                  fontSize="9"
                  fontFamily="sans-serif"
                  fontWeight="600"
                >
                  Enzymatic Hydrolysis (Degraded)
                </text>
              </svg>
            </div>

            <p className="text-xs text-slate-300 mt-3 leading-relaxed">
              Enzymes (e.g., beta-lactamases) destroy antibiotic chemical bonds or mutate surface proteins, rendering treatment obsolete.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "pathogen") {
    return (
      <div className="w-full rounded-2xl bg-slate-950/70 border border-slate-800/80 p-5 overflow-hidden">
        <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-xs font-mono tracking-wider text-rose-400 uppercase font-semibold">
              Anatomy of Resistance • Four Defense Mechanisms
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
            FIG. 02 • MULTIDRUG RESISTANT BACTERIUM
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="flex items-start gap-3 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 hover:border-rose-500/40 transition-colors">
            <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 shrink-0 mt-0.5">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-200">1. Efflux Pumps</h4>
              <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                Transmembrane protein channels actively pump antimicrobial agents out of the cell before they reach their targets.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 hover:border-rose-500/40 transition-colors">
            <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 shrink-0 mt-0.5">
              <ShieldX className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-200">2. Target Modification</h4>
              <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                Mutations in ribosomes or penicillin-binding proteins alter shape so antibiotics can no longer latch onto their substrate.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 hover:border-rose-500/40 transition-colors">
            <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 shrink-0 mt-0.5">
              <Dna className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-200">3. Horizontal Gene Transfer</h4>
              <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                Bacteria trade resistance genes via plasmids through conjugation, spreading immunity across different bacterial species.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 hover:border-rose-500/40 transition-colors">
            <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400 shrink-0 mt-0.5">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-200">4. Biofilm Secretion</h4>
              <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                Dense extracellular slime matrices shield colonies against immune cells and block drug penetration by up to 1,000x.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // transmission
  return (
    <div className="w-full rounded-2xl bg-slate-950/70 border border-slate-800/80 p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-4 border-b border-slate-800/80 pb-3">
        <div className="flex items-center space-x-2">
          <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-mono tracking-wider text-amber-400 uppercase font-semibold">
            One Health Evolutionary Cycle • Selection Pressure Loop
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
          FIG. 03 • TRANSMISSION CASCADE
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5 relative">
        {[
          {
            step: "01",
            title: "Microbial Diversity",
            desc: "A vast colony of bacteria exists with naturally diverse genetics. A few possess rare resistant mutations.",
            badge: "Natural Baseline",
          },
          {
            step: "02",
            title: "Misuse Pressure",
            desc: "Antibiotics are taken for viral colds or halted early. Harmless flora is wiped out; resistant cells survive.",
            badge: "Selective Shock",
          },
          {
            step: "03",
            title: "Unchecked Growth",
            desc: "With competitors dead and nutrients abundant, resistant survivors rapidly multiply and pass on resistance plasmids.",
            badge: "Proliferation",
          },
          {
            step: "04",
            title: "Ecological Spread",
            desc: "Resistant superbugs spread through hospitals, agricultural wastewater, food chains, and community contact.",
            badge: "Global Threat",
          },
        ].map((item) => (
          <div
            key={item.step}
            className="rounded-xl bg-slate-900/60 border border-slate-800 p-3.5 relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-amber-400">
                  {item.step}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                  {item.badge}
                </span>
              </div>
              <h5 className="text-xs font-semibold text-slate-100 mb-1">
                {item.title}
              </h5>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
