"use client";

import React, { useState, useEffect } from "react";
import { ShieldAlert, Activity, Menu, X, Shield } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Key Concepts", href: "#key-concepts" },
    { name: "Quiz", href: "#quiz" },
    { name: "Action Guide", href: "#action-guide" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with glowing pulse emblem */}
          <a
            href="#overview"
            className="flex items-center space-x-3 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/90 border border-cyan-500/40 shadow-glow-cyan group-hover:border-cyan-400 transition-colors">
              <ShieldAlert className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              {/* Glowing Pulse indicator */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500 border-2 border-slate-950"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-white flex items-center space-x-1.5">
                <span>AMR</span>
                <span className="text-cyan-400">COMBAT</span>
              </span>
              <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase -mt-0.5 flex items-center gap-1">
                <Activity className="w-2.5 h-2.5 text-cyan-400 animate-pulse" />
                உடை அணிவீர்! • Armour Up!
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-900/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-800/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Armour Up! Badge with glowing pulse animation */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={() => {
                const target = document.querySelector("#action-guide");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-extrabold text-slate-950 bg-gradient-to-r from-cyan-400 via-amber-300 to-cyan-400 rounded-xl hover:from-cyan-300 hover:to-amber-200 shadow-glow-cyan transition-all group overflow-hidden"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-900"></span>
              </span>
              <span>Armour Up! (உடை அணிவீர்!)</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pb-4">
          <div className="glass-card rounded-2xl p-4 space-y-2 border border-slate-800 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  const target = document.querySelector("#action-guide");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-amber-300 text-slate-950 font-bold text-xs tracking-wide shadow-glow-cyan"
              >
                <Shield className="w-4 h-4" />
                <span>Armour Up! (உடை அணிவீர்!)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
