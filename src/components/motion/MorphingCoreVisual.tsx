'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
  targetX: number;
  targetY: number;
  targetZ: number;
  vx: number;
  vy: number;
  vz: number;
  color: string;
  size: number;
}

interface Edge {
  p1: number;
  p2: number;
}

interface ShapeConfig {
  name: string;
  chips: { label: string; position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }[];
  generate: (count: number) => { points: { x: number; y: number; z: number }[]; edges: Edge[] };
}

export function MorphingCoreVisual() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeShapeIdx, setActiveShapeIdx] = useState(0);

  // 4 Morphing Shape Configurations matching Webonio (Website -> Software -> Cloud -> Security)
  const shapes: ShapeConfig[] = [
    {
      name: 'website',
      chips: [
        { label: '<main>', position: 'top-left' },
        { label: 'GET / 200', position: 'top-right' },
        { label: 'lcp: fast', position: 'bottom-left' },
        { label: 'next.js: 16', position: 'bottom-right' },
      ],
      generate: (count: number) => {
        const pts: { x: number; y: number; z: number }[] = [];
        const edges: Edge[] = [];

        // 1. Browser Window Outer Rectangle
        const w = 180;
        const h = 130;
        const borderPts = 32;

        for (let i = 0; i < borderPts; i++) {
          const t = i / borderPts;
          let x = 0;
          let y = 0;
          if (t < 0.25) {
            x = -w + 8 * w * t;
            y = -h;
          } else if (t < 0.5) {
            x = w;
            y = -h + 8 * h * (t - 0.25);
          } else if (t < 0.75) {
            x = w - 8 * w * (t - 0.5);
            y = h;
          } else {
            x = -w;
            y = h - 8 * h * (t - 0.75);
          }
          pts.push({ x, y, z: (Math.random() - 0.5) * 15 });
          if (i > 0) edges.push({ p1: i - 1, p2: i });
        }
        edges.push({ p1: borderPts - 1, p2: 0 });

        // 2. Title bar separator line
        const barIdx = pts.length;
        pts.push({ x: -w, y: -h + 26, z: 0 });
        pts.push({ x: w, y: -h + 26, z: 0 });
        edges.push({ p1: barIdx, p2: barIdx + 1 });

        // 3. Browser Buttons (3 small dots)
        for (let b = 0; b < 3; b++) {
          pts.push({ x: -w + 18 + b * 12, y: -h + 13, z: 2 });
        }

        // 4. Content Area Layout Blocks & Code Lines
        const linesCount = 8;
        for (let l = 0; l < linesCount; l++) {
          const ly = -h + 46 + l * 20;
          const lineW = 90 + ((l * 37) % 110);
          const startX = -w + 24 + ((l * 17) % 30);
          const pStart = pts.length;
          const segments = 4;
          for (let s = 0; s <= segments; s++) {
            pts.push({
              x: startX + (lineW * s) / segments,
              y: ly + (Math.sin(s * 1.5) * 2),
              z: (Math.random() - 0.5) * 10,
            });
            if (s > 0) edges.push({ p1: pStart + s - 1, p2: pStart + s });
          }
        }

        // 5. Hero Card box inside window
        const cardIdx = pts.length;
        pts.push({ x: 30, y: -h + 46, z: 12 });
        pts.push({ x: w - 24, y: -h + 46, z: 12 });
        pts.push({ x: w - 24, y: h - 24, z: 12 });
        pts.push({ x: 30, y: h - 24, z: 12 });
        edges.push({ p1: cardIdx, p2: cardIdx + 1 });
        edges.push({ p1: cardIdx + 1, p2: cardIdx + 2 });
        edges.push({ p1: cardIdx + 2, p2: cardIdx + 3 });
        edges.push({ p1: cardIdx + 3, p2: cardIdx });

        // Fill remaining with floating telemetry particles
        while (pts.length < count) {
          pts.push({
            x: (Math.random() - 0.5) * (w * 2.2),
            y: (Math.random() - 0.5) * (h * 2.2),
            z: (Math.random() - 0.5) * 40,
          });
        }

        return { points: pts.slice(0, count), edges };
      },
    },
    {
      name: 'software',
      chips: [
        { label: 'crm.sync()', position: 'top-left' },
        { label: 'erp/modules', position: 'top-right' },
        { label: 'ai.assist()', position: 'bottom-left' },
        { label: 'api/v2.active', position: 'bottom-right' },
      ],
      generate: (count: number) => {
        const pts: { x: number; y: number; z: number }[] = [];
        const edges: Edge[] = [];

        // Application window frame with data grid
        const w = 170;
        const h = 135;
        const rows = 9;

        for (let r = 0; r < rows; r++) {
          const ry = -h + 20 + r * 26;
          const rowStart = pts.length;
          const cols = 7;
          for (let c = 0; c < cols; c++) {
            const rx = -w + (c * (w * 2)) / (cols - 1);
            pts.push({
              x: rx,
              y: ry,
              z: Math.sin(r * 0.8 + c * 0.6) * 16,
            });
            if (c > 0) edges.push({ p1: rowStart + c - 1, p2: rowStart + c });
            if (r > 0) {
              const prevRowIdx = rowStart - cols + c;
              if (prevRowIdx >= 0) edges.push({ p1: prevRowIdx, p2: rowStart + c });
            }
          }
        }

        // Server Nodes connected on right
        const nodePositions = [
          { x: 130, y: -70, z: -25 },
          { x: 180, y: -10, z: 20 },
          { x: 120, y: 55, z: -15 },
          { x: 175, y: 95, z: 30 },
          { x: 75, y: 120, z: -10 },
        ];
        const baseNodeIdx = pts.length;
        nodePositions.forEach((np) => pts.push(np));
        edges.push({ p1: baseNodeIdx, p2: baseNodeIdx + 1 });
        edges.push({ p1: baseNodeIdx + 1, p2: baseNodeIdx + 2 });
        edges.push({ p1: baseNodeIdx + 2, p2: baseNodeIdx + 3 });
        edges.push({ p1: baseNodeIdx + 3, p2: baseNodeIdx + 4 });
        edges.push({ p1: baseNodeIdx, p2: baseNodeIdx + 2 });

        while (pts.length < count) {
          pts.push({
            x: (Math.random() - 0.5) * 360,
            y: (Math.random() - 0.5) * 280,
            z: (Math.random() - 0.5) * 50,
          });
        }

        return { points: pts.slice(0, count), edges };
      },
    },
    {
      name: 'cloud',
      chips: [
        { label: 'nvme.io: 7500mb/s', position: 'top-left' },
        { label: 'litespeed: active', position: 'top-right' },
        { label: 'uptime: 99.99%', position: 'bottom-left' },
        { label: 'cagefs: isolated', position: 'bottom-right' },
      ],
      generate: (count: number) => {
        const pts: { x: number; y: number; z: number }[] = [];
        const edges: Edge[] = [];

        // 3 Server Blade Racks in 3D Isometric Perspective
        const rackPositions = [-110, 0, 110];
        rackPositions.forEach((rx) => {
          for (let blade = 0; blade < 4; blade++) {
            const by = -85 + blade * 46;
            const bIdx = pts.length;
            // 3D Box for blade
            pts.push({ x: rx - 40, y: by - 12, z: -20 });
            pts.push({ x: rx + 40, y: by - 12, z: -20 });
            pts.push({ x: rx + 40, y: by + 12, z: 20 });
            pts.push({ x: rx - 40, y: by + 12, z: 20 });
            edges.push({ p1: bIdx, p2: bIdx + 1 });
            edges.push({ p1: bIdx + 1, p2: bIdx + 2 });
            edges.push({ p1: bIdx + 2, p2: bIdx + 3 });
            edges.push({ p1: bIdx + 3, p2: bIdx });

            // LED activity dots
            pts.push({ x: rx - 25, y: by, z: 22 });
            pts.push({ x: rx - 12, y: by, z: 22 });
          }
        });

        // Floating Cloud Orbit Ring above servers
        const ringPts = 24;
        const ringIdx = pts.length;
        for (let i = 0; i < ringPts; i++) {
          const a = (i / ringPts) * Math.PI * 2;
          pts.push({
            x: Math.cos(a) * 160,
            y: -105 + Math.sin(a * 2) * 12,
            z: Math.sin(a) * 60,
          });
          if (i > 0) edges.push({ p1: ringIdx + i - 1, p2: ringIdx + i });
        }
        edges.push({ p1: pts.length - 1, p2: ringIdx });

        while (pts.length < count) {
          pts.push({
            x: (Math.random() - 0.5) * 380,
            y: (Math.random() - 0.5) * 300,
            z: (Math.random() - 0.5) * 50,
          });
        }

        return { points: pts.slice(0, count), edges };
      },
    },
    {
      name: 'security',
      chips: [
        { label: 'ddos.shield // 100%', position: 'top-left' },
        { label: 'ssl/tls: aes-256', position: 'top-right' },
        { label: 'firewall: fortified', position: 'bottom-left' },
        { label: 'waf.rules // 24/7', position: 'bottom-right' },
      ],
      generate: (count: number) => {
        const pts: { x: number; y: number; z: number }[] = [];
        const edges: Edge[] = [];

        // Concentric 3D Hexagonal Shields
        const hexSizes = [150, 105, 65];
        hexSizes.forEach((radius, sIdx) => {
          const hIdx = pts.length;
          for (let i = 0; i < 6; i++) {
            const a = (i / 6) * Math.PI * 2 + (sIdx % 2 === 0 ? 0 : Math.PI / 6);
            pts.push({
              x: Math.cos(a) * radius,
              y: Math.sin(a) * (radius * 1.05),
              z: (sIdx - 1) * 25,
            });
            if (i > 0) edges.push({ p1: hIdx + i - 1, p2: hIdx + i });
          }
          edges.push({ p1: pts.length - 1, p2: hIdx });
        });

        // Inter-ring connector spokes
        for (let i = 0; i < 6; i++) {
          edges.push({ p1: i, p2: 6 + i });
          edges.push({ p1: 6 + i, p2: 12 + i });
        }

        // Center Security Core Core Emblem
        const centerIdx = pts.length;
        pts.push({ x: 0, y: -20, z: 25 });
        pts.push({ x: 20, y: 10, z: 25 });
        pts.push({ x: 0, y: 30, z: 25 });
        pts.push({ x: -20, y: 10, z: 25 });
        edges.push({ p1: centerIdx, p2: centerIdx + 1 });
        edges.push({ p1: centerIdx + 1, p2: centerIdx + 2 });
        edges.push({ p1: centerIdx + 2, p2: centerIdx + 3 });
        edges.push({ p1: centerIdx + 3, p2: centerIdx });

        while (pts.length < count) {
          pts.push({
            x: (Math.random() - 0.5) * 360,
            y: (Math.random() - 0.5) * 300,
            z: (Math.random() - 0.5) * 50,
          });
        }

        return { points: pts.slice(0, count), edges };
      },
    },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const TOTAL_POINTS = 90;

    // Initialize Points with initial website shape
    const initial = shapes[0].generate(TOTAL_POINTS);
    let activeEdges: Edge[] = initial.edges;

    const points: Point3D[] = initial.points.map((p, idx) => ({
      x: (Math.random() - 0.5) * 400,
      y: (Math.random() - 0.5) * 400,
      z: (Math.random() - 0.5) * 80,
      targetX: p.x,
      targetY: p.y,
      targetZ: p.z,
      vx: 0,
      vy: 0,
      vz: 0,
      color: idx % 5 === 0 ? '#8c5cff' : '#34d1d1',
      size: idx % 6 === 0 ? 3.2 : 2.0,
    }));

    // Mouse Interaction for 3D Tilt
    let rotX = 0;
    let rotY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      targetRotY = ((e.clientX - cx) / (window.innerWidth / 2)) * 0.35;
      targetRotX = -((e.clientY - cy) / (window.innerHeight / 2)) * 0.35;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Morph cycle timer (every 5.5 seconds transition to next shape)
    let currentShape = 0;
    const interval = setInterval(() => {
      currentShape = (currentShape + 1) % shapes.length;
      setActiveShapeIdx(currentShape);

      const nextShape = shapes[currentShape].generate(TOTAL_POINTS);
      activeEdges = nextShape.edges;

      nextShape.points.forEach((tgt, idx) => {
        if (points[idx]) {
          points[idx].targetX = tgt.x;
          points[idx].targetY = tgt.y;
          points[idx].targetZ = tgt.z;
        }
      });
    }, 5500);

    let time = 0;
    let isVisible = true;
    let isTabActive = true;
    let width = 500;
    let height = 500;
    let cachedGlowGrad: CanvasGradient | null = null;
    let cachedGlowRadius = 0;

    const updateSize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width || 400;
      height = rect.height || 400;
      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }
      const cx = width / 2;
      const cy = height / 2;
      cachedGlowRadius = Math.min(180, width * 0.4);
      cachedGlowGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, cachedGlowRadius);
      cachedGlowGrad.addColorStop(0, 'rgba(52, 209, 209, 0.16)');
      cachedGlowGrad.addColorStop(0.4, 'rgba(140, 92, 255, 0.08)');
      cachedGlowGrad.addColorStop(1, 'rgba(5, 6, 10, 0)');
    };
    updateSize();

    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisible = entry?.isIntersecting ?? true;
        if (isVisible && isTabActive && !animId) {
          animId = requestAnimationFrame(render);
        }
      },
      { threshold: 0.05 }
    );
    if (containerRef.current) {
      intersectionObserver.observe(containerRef.current);
    }

    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
      if (isTabActive && isVisible && !animId) {
        animId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const render = () => {
      if (!isVisible || !isTabActive) {
        animId = 0;
        return;
      }

      time += 0.02;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Smooth 3D rotation with gentle auto-float
      rotX += (targetRotX + Math.sin(time * 0.5) * 0.04 - rotX) * 0.06;
      rotY += (targetRotY + Math.cos(time * 0.4) * 0.06 - rotY) * 0.06;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Central Atmospheric Radial Glow in cyan and purple (using cached gradient)
      if (cachedGlowGrad) {
        ctx.fillStyle = cachedGlowGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, Math.min(200, width * 0.45), 0, Math.PI * 2);
        ctx.fill();
      }

      // Update particle positions with spring physics towards target
      const projected: { x: number; y: number; scale: number; alpha: number; color: string; size: number }[] = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Harmonic organic vibration
        const wave = Math.sin(time * 1.5 + i * 0.3) * 2.5;

        p.x += (p.targetX + wave - p.x) * 0.07;
        p.y += (p.targetY + wave * 0.5 - p.y) * 0.07;
        p.z += (p.targetZ - p.z) * 0.07;

        // 3D Rotation (Y then X)
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;

        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Perspective projection with responsive scale
        const fov = 420;
        const scale = fov / (fov + z2 + 100);
        const projX = cx + x1 * scale;
        const projY = cy + y2 * scale;
        const alpha = Math.max(0.2, Math.min(1, (z2 + 150) / 200));

        projected.push({
          x: projX,
          y: projY,
          scale,
          alpha,
          color: p.color,
          size: p.size * scale,
        });
      }

      // Draw wireframe connecting lines
      ctx.lineWidth = 1;
      for (let e = 0; e < activeEdges.length; e++) {
        const edge = activeEdges[e];
        const p1 = projected[edge.p1];
        const p2 = projected[edge.p2];

        if (p1 && p2) {
          const lineAlpha = ((p1.alpha + p2.alpha) / 2) * 0.55;
          ctx.strokeStyle = `rgba(52, 209, 209, ${lineAlpha})`;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }

      // Draw vertices / glow dots
      for (let i = 0; i < projected.length; i++) {
        const pt = projected[i];

        // Soft outer halo
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = pt.color === '#8c5cff' ? 'rgba(140, 92, 255, 0.35)' : 'rgba(52, 209, 209, 0.35)';
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, Math.max(1, pt.size), 0, Math.PI * 2);
        ctx.fillStyle = pt.color;
        ctx.fill();
      }

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      clearInterval(interval);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  const currentChips = shapes[activeShapeIdx]?.chips || [];

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-[34rem] flex items-center justify-center select-none"
    >
      {/* Interactive Morphing 3D Canvas */}
      <canvas ref={canvasRef} className="h-full w-full max-w-[34rem] block" />

      {/* Floating Monospace Telemetry Chips matching Webonio */}
      <div className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500">
        {/* Top-Left Chip */}
        <div className="absolute top-[8%] start-[4%] transition-all duration-700 transform">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-[var(--line-strong)] bg-[#05060a]/85 px-3 py-1 font-mono text-xs text-[var(--accent)] backdrop-blur-md shadow-lg shadow-black/50">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            {currentChips.find((c) => c.position === 'top-left')?.label || '<main>'}
          </span>
        </div>

        {/* Top-Right Chip */}
        <div className="absolute top-[18%] end-[4%] transition-all duration-700 transform">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-[var(--line-strong)] bg-[#05060a]/85 px-3 py-1 font-mono text-xs text-[var(--muted)] hover:text-white backdrop-blur-md shadow-lg shadow-black/50">
            {currentChips.find((c) => c.position === 'top-right')?.label || 'GET / 200'}
          </span>
        </div>

        {/* Bottom-Left Chip */}
        <div className="absolute bottom-[10%] start-[8%] transition-all duration-700 transform">
          <span className="inline-flex items-center gap-1.5 rounded-md border border-[var(--line-strong)] bg-[#05060a]/85 px-3 py-1 font-mono text-xs text-[var(--muted)] backdrop-blur-md shadow-lg shadow-black/50">
            {currentChips.find((c) => c.position === 'bottom-left')?.label || 'lcp: fast'}
          </span>
        </div>

        {/* Bottom-Right Live Core Telemetry Status */}
        <div className="absolute bottom-3 end-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-ping" />
          <span className="font-mono text-xs text-[var(--muted)]">
            {currentChips.find((c) => c.position === 'bottom-right')?.label || 'Stackway Core // 99.9%'}
          </span>
        </div>
      </div>
    </div>
  );
}
