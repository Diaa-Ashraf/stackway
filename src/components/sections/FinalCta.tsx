'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Mail, ArrowRight, MessageCircle } from 'lucide-react';

interface FinalCtaProps {
  lang?: 'en' | 'ar';
}

export function FinalCta({ lang = 'en' }: FinalCtaProps) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';

  // Magnetic hover effect coordinates
  const buttonRef = useRef<HTMLDivElement>(null);
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.hypot(distX, distY);

    if (distance < 100) {
      setBtnOffset({
        x: (distX / 100) * 16,
        y: (distY / 100) * 16,
      });
    } else {
      setBtnOffset({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setBtnOffset({ x: 0, y: 0 });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-32 md:py-44 relative overflow-hidden bg-transparent border-t border-[var(--line)] text-[#f5f7fa] transition-colors duration-300"
    >
      {/* Huge subtle Brand Mark Watermark in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45vw] font-black font-heading select-none pointer-events-none opacity-[0.02] leading-none text-white">
        S
      </div>

      {/* Dual radial gradient glows - teal and purple */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-[var(--accent)] opacity-15 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[var(--accent-2)] opacity-10 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6 sm:space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-xs font-mono tracking-widest uppercase text-[var(--accent)]"
        >
          <span>// NEXT STEP</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight max-w-4xl mx-auto leading-tight text-white"
        >
          {isAr ? 'لديك فكرة أو مشروع؟ لنقم ببنائه الآن.' : "Have an idea? Let's build it."}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm sm:text-base md:text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed"
        >
          {isAr
            ? 'أخبرنا بما تخطط لبنائه. سنعود إليك بخطة عمل مكتوبة بدقة، وفريق هندسي متكامل، وجدول زمني محدد.'
            : "Tell us what you're building. We'll come back with a clear plan, a team and a timeline."}
        </motion.p>

        {/* Magnetic CTA Button Container */}
        <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
          <div
            ref={buttonRef}
            className="w-full sm:w-auto"
            style={{
              transform: `translate3d(${btnOffset.x}px, ${btnOffset.y}px, 0)`,
              transition: 'transform 0.15s ease-out',
            }}
          >
            <Link
              href={`${prefix}/start`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 rounded-full bg-[var(--accent)] text-[var(--stackway-black)] font-heading font-bold text-sm sm:text-base md:text-lg hover:brightness-110 shadow-2xl shadow-[var(--accent-glow)] transition-all duration-200 text-center"
            >
              <span>{isAr ? 'ابدأ مشروعك الآن' : 'Start a Project'}</span>
              <ArrowRight size={18} className="rtl:rotate-180" />
            </Link>
          </div>

          <a
            href="https://wa.me/201202325201"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 font-heading font-semibold text-xs sm:text-sm md:text-base hover:bg-emerald-500/20 hover:border-emerald-500/60 shadow-lg shadow-emerald-500/10 transition-all duration-200 text-center"
          >
            <MessageCircle size={18} className="text-emerald-400" />
            <span>{isAr ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}</span>
          </a>

          <a
            href="mailto:hello@stackway.net"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-full border border-[var(--line)] bg-[#080d14] text-xs sm:text-sm font-mono text-white/90 hover:border-[var(--accent)]/50 hover:bg-[#0c1524] transition-colors text-center"
          >
            <Mail size={15} className="text-[var(--accent)]" />
            <span>hello@stackway.net</span>
          </a>
        </div>
      </div>
    </section>
  );
}
