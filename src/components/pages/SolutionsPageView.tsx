'use client';

import React from 'react';
import { SOLUTIONS_LIST } from '@/content/site-data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Check, AlertCircle, Cpu } from 'lucide-react';

interface SolutionsPageViewProps {
  lang?: 'en' | 'ar';
}

export function SolutionsPageView({ lang = 'en' }: SolutionsPageViewProps) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';

  return (
    <div className="relative isolate overflow-hidden pt-28 pb-20 md:pt-40 md:pb-32 bg-[var(--bg)] min-h-screen">
      {/* Subtle Tech Grid Mask & Ambient Top Glow matching HomePage & Work */}
      <div aria-hidden="true" className="bg-grid mask-radial absolute inset-0 -z-10 opacity-70 pointer-events-none" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(140,92,255,0.15),transparent)]"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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

        {/* Solution Cards */}
        <div className="space-y-8 sm:space-y-12 mb-16 sm:mb-20">
          {SOLUTIONS_LIST.map((sol) => (
            <div
              key={sol.id}
              className="p-5 sm:p-8 md:p-14 rounded-3xl border border-[var(--line)] bg-[var(--surface)] shadow-md grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
            >
              {/* Left Column: Solution Identity & Tech */}
              <div className="lg:col-span-5 space-y-4">
                <span className="mono-tag text-xs font-bold text-[var(--accent)] px-3 py-1 rounded-full bg-[var(--accent-light)] border border-[var(--accent)]/20">
                  BLUEPRINT // {sol.number}
                </span>

                <h3 className="text-2xl md:text-3xl font-bold font-heading text-[var(--ink)]">
                  {isAr ? sol.title.ar : sol.title.en}
                </h3>

                <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed">
                  {isAr ? sol.subtitle.ar : sol.subtitle.en}
                </p>

                <div className="pt-4">
                  <span className="mono-tag text-[10px] text-[var(--muted)] block mb-2">
                    // RECOMMENDED TECH STACK
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {sol.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded bg-[var(--surface-alt)] border border-[var(--line)] font-mono text-[var(--ink)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button href={`${prefix}/start`} variant="primary" size="md">
                    {isAr ? 'طلب استشارة لهذا القطاع' : 'Consult on this Solution'}
                  </Button>
                </div>
              </div>

              {/* Right Column: Challenges vs Engineering Solutions */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 bg-[var(--bg)] p-4 sm:p-6 md:p-8 rounded-2xl border border-[var(--line)]">
                {/* Common Bottlenecks */}
                <div>
                  <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold text-red-500 uppercase">
                    <AlertCircle size={14} />
                    <span>{isAr ? 'التحديات والاختناقات الشائعة' : 'Industry Bottlenecks'}</span>
                  </div>
                  <ul className="space-y-3">
                    {(isAr ? sol.challenges.ar : sol.challenges.en).map((c, idx) => (
                      <li key={idx} className="text-xs text-[var(--muted)] leading-relaxed flex items-start gap-2">
                        <span className="text-red-400 font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Our Engineering Fix */}
                <div>
                  <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold text-[var(--accent)] uppercase">
                    <Check size={14} />
                    <span>{isAr ? 'الحلول الهندسية التي نقدمها' : 'Stackway Engineering Fix'}</span>
                  </div>
                  <ul className="space-y-3">
                    {(isAr ? sol.solutions.ar : sol.solutions.en).map((s, idx) => (
                      <li key={idx} className="text-xs text-[var(--ink)] font-medium leading-relaxed flex items-start gap-2">
                        <span className="text-[var(--accent)] font-bold">✓</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
