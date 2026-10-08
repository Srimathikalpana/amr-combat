"use client";

import React from "react";
import {
  ShieldAlert,
  ExternalLink,
  Activity,
  Globe2,
  FileText,
} from "lucide-react";
import { SURVEILLANCE_RESOURCES } from "@/data/amrData";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-xl pt-16 pb-12 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-900 border border-teal-500/40 text-teal-400">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                AMR <span className="text-teal-400">COMBAT</span>
              </span>
            </div>

            <p className="text-sm text-slate-300/85 max-w-md leading-relaxed">
              Dedicated to translating the complex science of Antimicrobial
              Resistance (AMR) into clear, actionable public health literacy.
              Safeguarding antibiotics ensures that childbirth, surgeries, and
              routine bacterial infections remain treatable for generations to
              come.
            </p>

            <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
              <Activity className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
              <span>Surveillance aligned with WHO Global Action Plan</span>
            </div>
          </div>

          {/* Global Surveillance Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold mb-4 flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5 text-teal-400" />
              Surveillance Portals
            </h4>
            <ul className="space-y-2.5">
              {SURVEILLANCE_RESOURCES.map((res) => (
                <li key={res.name}>
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center text-xs text-slate-400 hover:text-teal-300 transition-colors"
                  >
                    <span>{res.name}</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </a>
                  <p className="text-[10px] text-slate-400 line-clamp-1">
                    {res.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Scientific Sources & Credits */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold mb-4 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-teal-400" />
              Evidence & Citations
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <span className="text-slate-300 font-medium block">
                  The Lancet GRAM Report
                </span>
                Global burden of bacterial antimicrobial resistance in 2019.
              </li>
              <li>
                <span className="text-slate-300 font-medium block">
                  O’Neill Review on AMR
                </span>
                Tackling drug-resistant infections globally.
              </li>
              <li>
                <span className="text-slate-300 font-medium block">
                  CDC Antibiotic Threats
                </span>
                Antimicrobial Resistance threats in the United States report.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            © 2026 AMR Combat Initiative. Dedicated to open scientific literacy
            and global antibiotic preservation.
          </p>

          <a
            href="https://github.com/Srimathikalpana/amr-combat.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-850 border border-slate-700/80 hover:border-cyan-500/50 text-slate-300 hover:text-white transition-all text-xs font-mono shadow-sm group"
          >
            <svg
              className="w-4 h-4 fill-current text-slate-300 group-hover:text-cyan-400 transition-colors"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>GitHub Repository • Srimathikalpana/amr-combat</span>
            <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>
      </div>
    </footer>
  );
}
