"use client";

import React, { useEffect, useRef } from "react";

interface Microbe {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  length: number;
  angle: number;
  vAngle: number;
  type: "bacillus" | "coccus" | "spirochete" | "particle";
  hue: number;
  alpha: number;
  pulsePhase: number;
  flagellaSegments?: { x: number; y: number }[];
}

export default function MicroscopicBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Mouse coordinates for gentle hydrodynamic disturbance
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 180,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Spawn biological entities
    const microbes: Microbe[] = [];
    const count = Math.min(50, Math.floor((width * height) / 30000));

    for (let i = 0; i < count; i++) {
      const isBacillus = Math.random() > 0.45;
      const isCoccus = !isBacillus && Math.random() > 0.4;
      const isSpiro = !isBacillus && !isCoccus && Math.random() > 0.5;
      const type = isBacillus
        ? "bacillus"
        : isCoccus
        ? "coccus"
        : isSpiro
        ? "spirochete"
        : "particle";

      // Hues: Teal (175), Emerald (160), or Threat Rose/Amber (350 / 38)
      const colorRoll = Math.random();
      const hue =
        colorRoll > 0.75
          ? 348 // Rose
          : colorRoll > 0.55
          ? 38 // Amber
          : colorRoll > 0.25
          ? 174 // Teal
          : 156; // Emerald

      microbes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 5 + 4,
        length: Math.random() * 22 + 14,
        angle: Math.random() * Math.PI * 2,
        vAngle: (Math.random() - 0.5) * 0.008,
        type,
        hue,
        alpha: Math.random() * 0.35 + 0.15,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Additional tiny ambient suspended biomolecules
    const dustParticles = Array.from({ length: 65 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      radius: Math.random() * 1.8 + 0.6,
      alpha: Math.random() * 0.4 + 0.1,
      hue: Math.random() > 0.5 ? 174 : 156,
    }));

    const render = (time: number) => {

      // Darkfield microscope deep slate/dark teal base
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, "#0a252e");
      bgGrad.addColorStop(0.5, "#0b1928");
      bgGrad.addColorStop(1, "#020617");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Microscopic focal light / subtle vignette
      const centerGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        50,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.8
      );
      centerGrad.addColorStop(0, "rgba(6, 182, 212, 0.08)");
      centerGrad.addColorStop(0.5, "rgba(10, 37, 46, 0.45)");
      centerGrad.addColorStop(1, "rgba(2, 6, 23, 0.95)");
      ctx.fillStyle = centerGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw dust / peptides
      for (const d of dustParticles) {
        d.x += d.vx;
        d.y += d.vy;

        if (d.x < -10) d.x = width + 10;
        if (d.x > width + 10) d.x = -10;
        if (d.y < -10) d.y = height + 10;
        if (d.y > height + 10) d.y = -10;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${d.hue}, 85%, 65%, ${d.alpha * 0.5})`;
        ctx.fill();
      }

      // Draw cellular bacteria
      for (const m of microbes) {
        m.pulsePhase += 0.02;
        m.angle += m.vAngle;

        // Hydrodynamic deflection from cursor
        const dx = m.x - mouse.x;
        const dy = m.y - mouse.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius && dist > 0) {
          const force = (1 - dist / mouse.radius) * 0.8;
          m.vx += (dx / dist) * force;
          m.vy += (dy / dist) * force;
        }

        // Apply natural fluid drag
        m.vx *= 0.985;
        m.vy *= 0.985;

        // Brownian motion drift
        m.vx += (Math.random() - 0.5) * 0.02;
        m.vy += (Math.random() - 0.5) * 0.02;

        m.x += m.vx;
        m.y += m.vy;

        // Wrap around viewport edges smoothly
        const padding = 50;
        if (m.x < -padding) m.x = width + padding;
        if (m.x > width + padding) m.x = -padding;
        if (m.y < -padding) m.y = height + padding;
        if (m.y > height + padding) m.y = -padding;

        ctx.save();
        ctx.translate(m.x, m.y);
        ctx.rotate(m.angle);

        const currentAlpha = m.alpha * (0.85 + Math.sin(m.pulsePhase) * 0.15);

        if (m.type === "bacillus") {
          // Rod-shaped bacterium with capsule halo
          const halfLen = m.length / 2;
          const r = m.size;

          // Outer scattering halo
          ctx.beginPath();
          ctx.roundRect(-halfLen - 2, -r - 2, m.length + 4, r * 2 + 4, r + 2);
          ctx.fillStyle = `hsla(${m.hue}, 90%, 55%, ${currentAlpha * 0.15})`;
          ctx.fill();

          // Cell membrane wall
          ctx.beginPath();
          ctx.roundRect(-halfLen, -r, m.length, r * 2, r);
          ctx.strokeStyle = `hsla(${m.hue}, 85%, 65%, ${currentAlpha * 0.8})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Internal cytoplasm gradient
          const cellGrad = ctx.createLinearGradient(-halfLen, 0, halfLen, 0);
          cellGrad.addColorStop(
            0,
            `hsla(${m.hue}, 90%, 60%, ${currentAlpha * 0.25})`
          );
          cellGrad.addColorStop(
            0.5,
            `hsla(${m.hue}, 95%, 75%, ${currentAlpha * 0.45})`
          );
          cellGrad.addColorStop(
            1,
            `hsla(${m.hue}, 90%, 60%, ${currentAlpha * 0.25})`
          );
          ctx.fillStyle = cellGrad;
          ctx.fill();

          // Bacterial Nucleoid strand inside
          ctx.beginPath();
          ctx.moveTo(-halfLen + 6, 0);
          ctx.bezierCurveTo(
            -halfLen / 3,
            Math.sin(m.pulsePhase) * 2,
            halfLen / 3,
            -Math.sin(m.pulsePhase) * 2,
            halfLen - 6,
            0
          );
          ctx.strokeStyle = `hsla(${m.hue}, 100%, 85%, ${currentAlpha * 0.9})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Flagella trailing filament
          ctx.beginPath();
          ctx.moveTo(-halfLen, 0);
          const wave = Math.sin(time * 0.005 + m.pulsePhase) * 6;
          ctx.quadraticCurveTo(
            -halfLen - 15,
            wave,
            -halfLen - 30,
            Math.sin(time * 0.007) * 4
          );
          ctx.strokeStyle = `hsla(${m.hue}, 80%, 60%, ${currentAlpha * 0.3})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        } else if (m.type === "coccus") {
          // Spherical bacterium / diplococcus
          const r = m.size * 1.1;

          // Bioluminescent outer glow
          ctx.beginPath();
          ctx.arc(0, 0, r + 4, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${m.hue}, 90%, 55%, ${currentAlpha * 0.18})`;
          ctx.fill();

          // Cell membrane
          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(${m.hue}, 85%, 70%, ${currentAlpha * 0.85})`;
          ctx.lineWidth = 1.6;
          ctx.stroke();

          // Core
          ctx.beginPath();
          ctx.arc(0, 0, r * 0.65, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${m.hue}, 95%, 75%, ${currentAlpha * 0.5})`;
          ctx.fill();
        } else if (m.type === "spirochete") {
          // Undulating spiral bacterium
          ctx.beginPath();
          const amp = 3;
          const len = m.length * 1.2;
          ctx.moveTo(-len / 2, 0);
          for (let s = -len / 2; s <= len / 2; s += 2) {
            const yOffset = Math.sin(s * 0.25 + time * 0.004) * amp;
            ctx.lineTo(s, yOffset);
          }
          ctx.strokeStyle = `hsla(${m.hue}, 85%, 65%, ${currentAlpha * 0.7})`;
          ctx.lineWidth = 1.4;
          ctx.stroke();
        } else {
          // Small extracellular vesicle / particle
          ctx.beginPath();
          ctx.arc(0, 0, m.size * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${m.hue}, 85%, 70%, ${currentAlpha * 0.4})`;
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Dynamic Darkfield Microscopic Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />

      {/* Subtle organic gradient blooms for biomedical visual richness */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] rounded-full bg-rose-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />

      {/* High-contrast legibility overlay as specifically requested */}
      <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-[2px] pointer-events-none" />
    </div>
  );
}
