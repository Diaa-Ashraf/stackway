'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseRadius: number;
  pulsePhase: number;
  isPurple: boolean;
}

interface DustParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

interface CircuitPulse {
  pathIdx: number;
  progress: number;
  speed: number;
  size: number;
  color: string;
  isPurple: boolean;
}

interface CircuitSegment {
  points: { x: number; y: number }[];
  totalLength: number;
  segmentLengths: number[];
}

export function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number = 0;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for subtle parallax
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Pre-rendered offscreen canvas stamps for ultra-fast GPU drawing (avoiding per-frame createRadialGradient)
    let gridCanvas: HTMLCanvasElement | null = null;
    let tealGlowStamp: HTMLCanvasElement | null = null;
    let purpleGlowStamp: HTMLCanvasElement | null = null;

    const createGlowStamp = (color: string, coreColor: string): HTMLCanvasElement => {
      const stamp = document.createElement('canvas');
      const size = 64;
      stamp.width = size;
      stamp.height = size;
      const sCtx = stamp.getContext('2d');
      if (sCtx) {
        const half = size / 2;
        const grad = sCtx.createRadialGradient(half, half, 0, half, half, half);
        grad.addColorStop(0, coreColor);
        grad.addColorStop(0.4, color);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        sCtx.fillStyle = grad;
        sCtx.beginPath();
        sCtx.arc(half, half, half, 0, Math.PI * 2);
        sCtx.fill();
      }
      return stamp;
    };

    const colors = [
      'rgba(52, 209, 209, 0.9)',    // Neon Teal
      'rgba(52, 209, 209, 0.7)',
      'rgba(140, 92, 255, 0.9)',   // Electric Purple
      'rgba(106, 95, 193, 0.8)',
      'rgba(84, 209, 255, 0.9)',    // Cyan/Blue
    ];

    let particles: Particle[] = [];
    let dust: DustParticle[] = [];
    let circuits: CircuitSegment[] = [];
    let pulses: CircuitPulse[] = [];

    const initScene = () => {
      const isMobile = width < 768;

      // 1. Build cached grid dot pattern onto an offscreen canvas
      gridCanvas = document.createElement('canvas');
      gridCanvas.width = width + 40;
      gridCanvas.height = height + 40;
      const gCtx = gridCanvas.getContext('2d');
      if (gCtx) {
        gCtx.fillStyle = 'rgba(255, 255, 255, 0.045)';
        const gridStep = 56;
        for (let x = gridStep / 2; x < gridCanvas.width; x += gridStep) {
          for (let y = gridStep / 2; y < gridCanvas.height; y += gridStep) {
            gCtx.fillRect(x, y, 1, 1);
          }
        }
      }

      // 2. Pre-render glow stamps once
      tealGlowStamp = createGlowStamp('rgba(52, 209, 209, 0.35)', 'rgba(52, 209, 209, 0.95)');
      purpleGlowStamp = createGlowStamp('rgba(140, 92, 255, 0.35)', 'rgba(140, 92, 255, 0.95)');

      // 3. Constellation Nodes (optimized count for 60fps)
      const count = isMobile ? 16 : 32;
      particles = [];
      for (let i = 0; i < count; i++) {
        const radius = Math.random() * 1.8 + 1.2;
        const colIdx = Math.floor(Math.random() * colors.length);
        const col = colors[colIdx];
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius,
          baseRadius: radius,
          color: col,
          pulsePhase: Math.random() * Math.PI * 2,
          isPurple: colIdx === 2 || colIdx === 3,
        });
      }

      // 4. Subtle Ambient Dust Particles
      const dustCount = isMobile ? 18 : 36;
      dust = [];
      for (let i = 0; i < dustCount; i++) {
        dust.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          radius: Math.random() * 1.0 + 0.4,
          alpha: Math.random() * 0.3 + 0.08,
        });
      }

      // 5. Right-angled PCB / Circuit Tracers matching Webonio background
      circuits = [];
      const numCircuits = isMobile ? 6 : 14;

      const architecturalPaths: { x: number; y: number }[][] = [
        [
          { x: width * 0.08, y: 72 },
          { x: width * 0.55, y: 72 },
          { x: width * 0.55, y: 110 },
          { x: width * 0.88, y: 110 },
          { x: width * 0.88, y: 145 },
        ],
        [
          { x: width * 0.95, y: 180 },
          { x: width * 0.72, y: 180 },
          { x: width * 0.72, y: 260 },
          { x: width * 0.62, y: 260 },
        ],
        [
          { x: width * 0.15, y: height * 0.72 },
          { x: width * 0.38, y: height * 0.72 },
          { x: width * 0.38, y: height * 0.84 },
          { x: width * 0.75, y: height * 0.84 },
        ],
      ];

      architecturalPaths.forEach((pts) => {
        const segmentLengths: number[] = [];
        let total = 0;
        for (let i = 1; i < pts.length; i++) {
          const len = Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
          segmentLengths.push(len);
          total += len;
        }
        circuits.push({ points: pts, totalLength: total, segmentLengths });
      });

      for (let c = 0; c < numCircuits; c++) {
        const pts: { x: number; y: number }[] = [];
        let currX = Math.random() * width;
        let currY = Math.random() * height;
        pts.push({ x: currX, y: currY });

        const steps = Math.floor(Math.random() * 3) + 2;
        let horizontal = Math.random() > 0.5;

        for (let s = 0; s < steps; s++) {
          const segLen = (Math.random() * 140 + 70) * (Math.random() > 0.5 ? 1 : -1);
          if (horizontal) {
            currX += segLen;
          } else {
            currY += segLen;
          }
          pts.push({ x: currX, y: currY });
          horizontal = !horizontal;
        }

        const segmentLengths: number[] = [];
        let total = 0;
        for (let i = 1; i < pts.length; i++) {
          const dx = pts[i].x - pts[i - 1].x;
          const dy = pts[i].y - pts[i - 1].y;
          const len = Math.hypot(dx, dy);
          segmentLengths.push(len);
          total += len;
        }

        circuits.push({ points: pts, totalLength: total, segmentLengths });
      }

      // 6. Circuit Pulses
      pulses = [];
      const pulseCount = Math.floor(circuits.length * 1.8);
      for (let i = 0; i < pulseCount; i++) {
        const isPurp = Math.random() < 0.28;
        pulses.push({
          pathIdx: Math.floor(i % circuits.length),
          progress: Math.random(),
          speed: Math.random() * 0.002 + 0.0012,
          size: Math.random() * 1.2 + 2.0,
          color: isPurp ? '#8c5cff' : '#34d1d1',
          isPurple: isPurp,
        });
      }
    };

    initScene();

    let resizeTimer: NodeJS.Timeout | null = null;
    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!canvas) return;
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initScene();
      }, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Track scroll position to pause canvas when user scrolled deeply past hero
    let isVisibleOnScreen = true;
    const handleScroll = () => {
      const scrolledPast = window.scrollY > window.innerHeight * 1.8;
      if (scrolledPast && isVisibleOnScreen) {
        isVisibleOnScreen = false;
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = 0;
        }
      } else if (!scrolledPast && !isVisibleOnScreen) {
        isVisibleOnScreen = true;
        if (!animationFrameId && !document.hidden) {
          animationFrameId = requestAnimationFrame(render);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    let time = 0;

    const render = () => {
      if (!isVisibleOnScreen || document.hidden) {
        animationFrameId = 0;
        return;
      }

      time += 0.015;

      // Smooth mouse parallax lerp
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      const parallaxX = (mouseX / width - 0.5) * 16;
      const parallaxY = (mouseY / height - 0.5) * 16;

      ctx.clearRect(0, 0, width, height);

      // 0. Architectural Precision Matrix Dots (Single DrawImage from Offscreen Canvas!)
      if (gridCanvas) {
        ctx.drawImage(gridCanvas, parallaxX * 0.1 - 20, parallaxY * 0.1 - 20);
      }

      // 1. Draw Circuit Tracer Lines & Terminal Pads
      const p25X = parallaxX * 0.25;
      const p25Y = parallaxY * 0.25;

      for (let c = 0; c < circuits.length; c++) {
        const path = circuits[c];
        const pts = path.points;
        if (pts.length < 2) continue;

        const isPurple = c % 4 === 0;
        ctx.strokeStyle = isPurple ? 'rgba(140, 92, 255, 0.18)' : 'rgba(52, 209, 209, 0.16)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(pts[0].x + p25X, pts[0].y + p25Y);
        for (let i = 1; i < pts.length; i++) {
          ctx.lineTo(pts[i].x + p25X, pts[i].y + p25Y);
        }
        ctx.stroke();

        // Terminal solder ring on ends
        const start = pts[0];
        const end = pts[pts.length - 1];
        const ringColor = isPurple ? 'rgba(140, 92, 255, 0.4)' : 'rgba(52, 209, 209, 0.4)';

        ctx.strokeStyle = ringColor;
        ctx.beginPath();
        ctx.arc(start.x + p25X, start.y + p25Y, 3, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(end.x + p25X, end.y + p25Y, 3, 0, Math.PI * 2);
        ctx.stroke();

        // Center dot
        ctx.fillStyle = ringColor;
        ctx.beginPath();
        ctx.arc(start.x + p25X, start.y + p25Y, 1, 0, Math.PI * 2);
        ctx.arc(end.x + p25X, end.y + p25Y, 1, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw Traveling Circuit Signal Pulses with Cached Glow Stamps
      for (let p = 0; p < pulses.length; p++) {
        const pulse = pulses[p];
        const circuit = circuits[pulse.pathIdx];
        if (!circuit || circuit.totalLength === 0) continue;

        pulse.progress += pulse.speed;
        if (pulse.progress > 1) pulse.progress = 0;

        const targetDist = pulse.progress * circuit.totalLength;
        let accum = 0;
        let posX = circuit.points[0].x;
        let posY = circuit.points[0].y;

        for (let i = 0; i < circuit.segmentLengths.length; i++) {
          const segLen = circuit.segmentLengths[i];
          if (accum + segLen >= targetDist) {
            const segRatio = (targetDist - accum) / segLen;
            const p1 = circuit.points[i];
            const p2 = circuit.points[i + 1];
            posX = p1.x + (p2.x - p1.x) * segRatio;
            posY = p1.y + (p2.y - p1.y) * segRatio;
            break;
          }
          accum += segLen;
        }

        const drawX = posX + p25X;
        const drawY = posY + p25Y;

        // Blazing-fast cached glow stamp
        const stamp = pulse.isPurple ? purpleGlowStamp : tealGlowStamp;
        if (stamp) {
          const glowSize = pulse.size * 6;
          ctx.drawImage(stamp, drawX - glowSize / 2, drawY - glowSize / 2, glowSize, glowSize);
        }

        // Intense White Core Dot
        ctx.beginPath();
        ctx.arc(drawX, drawY, pulse.size * 0.9, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      }

      // 3. Constellation Connecting Lines (Optimized squared distance)
      const p50X = parallaxX * 0.5;
      const p50Y = parallaxY * 0.5;
      const maxDistance = width < 768 ? 85 : 120;
      const maxDistanceSq = maxDistance * maxDistance;
      ctx.lineWidth = 0.75;

      for (let i = 0; i < particles.length; i++) {
        const piX = particles[i].x + p50X;
        const piY = particles[i].y + p50Y;

        for (let j = i + 1; j < particles.length; j++) {
          const dx = piX - (particles[j].x + p50X);
          const dy = piY - (particles[j].y + p50Y);
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistanceSq) {
            const alpha = (1 - Math.sqrt(distSq) / maxDistance) * 0.15;
            ctx.strokeStyle = `rgba(52, 209, 209, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(piX, piY);
            ctx.lineTo(particles[j].x + p50X, particles[j].y + p50Y);
            ctx.stroke();
          }
        }
      }

      // 4. Subtle Dust Particles
      const p20X = parallaxX * 0.2;
      const p20Y = parallaxY * 0.2;
      for (let i = 0; i < dust.length; i++) {
        const d = dust[i];
        d.x += d.vx;
        d.y += d.vy;

        if (d.x < 0) d.x = width;
        if (d.x > width) d.x = 0;
        if (d.y < 0) d.y = height;
        if (d.y > height) d.y = 0;

        ctx.beginPath();
        ctx.arc(d.x + p20X, d.y + p20Y, d.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(156, 163, 175, ${d.alpha})`;
        ctx.fill();
      }

      // 5. Constellation Nodes with Cached Stamps
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const pulse = Math.sin(time + p.pulsePhase) * 0.3 + 1;
        const currentRadius = p.baseRadius * pulse;
        const drawX = p.x + p50X;
        const drawY = p.y + p50Y;

        // Cached Outer Glow
        const stamp = p.isPurple ? purpleGlowStamp : tealGlowStamp;
        if (stamp) {
          const glowSize = currentRadius * 5;
          ctx.drawImage(stamp, drawX - glowSize / 2, drawY - glowSize / 2, glowSize, glowSize);
        }

        // Core Dot
        ctx.beginPath();
        ctx.arc(drawX, drawY, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const handleVisibilityChange = () => {
      if (!document.hidden && isVisibleOnScreen) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (resizeTimer) clearTimeout(resizeTimer);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* Drifting Ambient Orb 1: Purple Glow (Top-Left) */}
      <div
        className="absolute -top-[20vh] -left-[10vw] h-[70vh] w-[60vw] rounded-full bg-[radial-gradient(closest-side,rgba(106,95,193,0.18),transparent)] blur-3xl animate-[drift-a_38s_ease-in-out_infinite]"
        style={{ willChange: 'transform' }}
      />

      {/* Drifting Ambient Orb 2: Teal Signal Glow (Bottom-Right) */}
      <div
        className="absolute -right-[15vw] -bottom-[25vh] h-[75vh] w-[65vw] rounded-full bg-[radial-gradient(closest-side,rgba(52,209,209,0.14),transparent)] blur-3xl animate-[drift-b_46s_ease-in-out_infinite]"
        style={{ willChange: 'transform' }}
      />

      {/* Background Interactive Canvas (PCB circuit tracers + particles + constellations) */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
