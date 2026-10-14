'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SOLUTIONS_LIST } from '@/content/site-data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { FinalCta } from '@/components/sections/FinalCta';
import { Check, AlertCircle, Cpu, ArrowUpRight, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/components/motion/motion-variants';

interface SolutionsPageViewProps {
  lang?: 'en' | 'ar';
}

export function SolutionsPageView({ lang = 'en' }: SolutionsPageViewProps) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';

  return (
    <div className="relative isolate overflow-hidden pt-28 pb-0 md:pt-40 bg-[var(--bg)] min-h-screen">
      {/* Subtle Tech Grid Mask & Ambient Top Glow matching HomePage & Work */}
      <div aria-hidden="true" className="bg-grid mask-radial absolute inset-0 -z-10 opacity-70 pointer-events-none" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(0,242,254,0.12),transparent)]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            number="02"
            eyebrow={isAr ? 'حلول الأعمال حسب القطاع' : 'INDUSTRY ARCHITECTURES'}
            title={isAr ? 'حلول برمجية مخصصة لقطاعك التجاري.' : 'Tailored systems built for your industry.'}
            subtitle={
              isAr
                ? 'نهندس ونبني حلولاً تعالج نقاط الاختناق في كل قطاع: من سرعة إتمام الشراء إلى أمان منصات SaaS وإدارة سلاسل الإمداد.'
                : 'Proven blueprints addressing industry-specific bottlenecks: high-scale commerce, multi-tenant isolation, and real-time logistics.'
            }
          />
        </motion.div>

        {/* Solution Cards with Staggered Scroll Reveals */}
        <div className="space-y-8 sm:space-y-12 mb-20 sm:mb-28">
          {SOLUTIONS_LIST.map((sol, index) => (
            <motion.div
              key={sol.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative p-5 sm:p-8 md:p-14 rounded-3xl border border-[#1b253b] bg-[#070b14] hover:border-[var(--accent)] transition-all duration-300 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
            >
              {/* Subtle Ambient Hover Bloom */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 80% 20%, rgba(0, 242, 254, 0.08) 0%, transparent 60%)',
                }}
              />

              {/* Left Column: Solution Identity & Tech */}
              <div className="lg:col-span-5 space-y-5 relative z-10">
                <div className="flex items-center gap-3">
                  <span className="mono-tag text-xs font-bold text-[var(--accent)] px-3 py-1 rounded-full bg-[var(--surface-alt)] border border-[var(--line)]">
                    BLUEPRINT // {sol.number}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{isAr ? 'جاهز للتنفيذ' : 'Production-Ready'}</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white group-hover:text-[var(--accent)] transition-colors">
                  {isAr ? sol.title.ar : sol.title.en}
                </h3>

                <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                  {isAr ? sol.subtitle.ar : sol.subtitle.en}
                </p>

                <div className="pt-2">
                  <span className="mono-tag text-[10px] text-[var(--muted)] block mb-2 tracking-wider">
                    // RECOMMENDED TECH STACK
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {sol.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-lg bg-[#0c1322] border border-[#1b253b] font-mono text-cyan-300 transition-colors group-hover:border-[var(--accent)]/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Button href={`${prefix}/start`} variant="primary" size="md">
                    {isAr ? 'طلب استشارة لهذا القطاع' : 'Consult on this Solution'}
                  </Button>
                  <Button href={`${prefix}/work`} variant="secondary" size="md">
                    {isAr ? 'مشاهدة المشاريع' : 'Related Work'}
                  </Button>
                </div>
              </div>

              {/* Right Column: Challenges vs Engineering Solutions */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 bg-[#04060c] p-5 sm:p-7 md:p-8 rounded-2xl border border-[#141b2b] relative z-10 shadow-inner">
                {/* Common Bottlenecks */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-400 uppercase tracking-wider pb-2 border-b border-[#1b253b]">
                    <AlertCircle size={15} />
                    <span>{isAr ? 'التحديات والاختناقات الشائعة' : 'Industry Bottlenecks'}</span>
                  </div>
                  <ul className="space-y-3">
                    {(isAr ? sol.challenges.ar : sol.challenges.en).map((c, idx) => (
                      <li key={idx} className="text-xs text-[var(--muted)] leading-relaxed flex items-start gap-2.5">
                        <span className="text-red-400 font-bold shrink-0 mt-0.5">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Our Engineering Fix */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider pb-2 border-b border-[#1b253b]">
                    <Check size={15} />
                    <span>{isAr ? 'الحلول الهندسية من ستاك واي' : 'Stackway Engineering Fix'}</span>
                  </div>
                  <ul className="space-y-3">
                    {(isAr ? sol.solutions.ar : sol.solutions.en).map((s, idx) => (
                      <li key={idx} className="text-xs text-[#e2e8f0] font-medium leading-relaxed flex items-start gap-2.5">
                        <span className="text-cyan-400 font-bold shrink-0 mt-0.5">✓</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Global Final CTA matching HomePage */}
      <FinalCta lang={lang} />
    </div>
  );
}

export default SolutionsPageView;
