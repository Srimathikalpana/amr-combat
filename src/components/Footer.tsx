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

          <p className="text-[11px] text-slate-400 max-w-sm text-center sm:text-right">
            Educational disclaimer: Information on this site is intended for
            public health literacy and should not be used as clinical diagnostic
            advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
