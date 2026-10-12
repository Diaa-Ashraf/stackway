'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROCESS_STAGES, ProcessStage } from '@/content/site-data';
import { SectionHeader } from '@/components/ui/SectionHeader';

interface ProcessProps {
  lang?: 'en' | 'ar';
}

export function Process({ lang = 'en' }: ProcessProps) {
  const isAr = lang === 'ar';
  const [activeStage, setActiveStage] = useState(0);

  const stage: ProcessStage = PROCESS_STAGES[activeStage];

  return (
    <section id="process" className="py-24 md:py-32 border-b border-[var(--line)] bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <SectionHeader
            number="04"
            eyebrow={isAr ? 'منهجية ومراحل العمل' : 'PROCESS'}
            title={isAr ? 'من الفكرة حتى الإطلاق والريادة.' : 'From idea to launch.'}
            subtitle={
              isAr
                ? 'ست مراحل واضحة، يديرها فريق هندسي مسؤول. تعرف دائماً أين نحن وما هي الخطوة التالية.'
                : "Six stages, one accountable team. You always know what's happening and what comes next."
            }
            className="mb-0 md:mb-0"
          />

          {/* Dynamic Rolling Counter "01 / 06" */}
          <div className="mt-6 md:mt-0 px-5 py-2.5 rounded-full border border-[var(--line)] bg-[#080d14] flex items-center gap-2 font-mono text-base font-bold shadow-xs">
            <span className="text-[var(--accent)]">
              {stage.step}
            </span>
            <span className="text-[var(--muted)]">/</span>
            <span className="text-[var(--muted)]">06</span>
          </div>
        </div>

        {/* Desktop Split Rail Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-start">
          {/* Left: Interactive Stage Selector & Progress Line */}
          <div className="col-span-5 relative">
            {/* Background vertical track */}
            <div className="absolute top-4 bottom-4 left-6 rtl:left-auto rtl:right-6 w-[2px] bg-[var(--line)] -z-0" />

            <div className="space-y-4 relative z-10">
              {PROCESS_STAGES.map((s, idx) => {
                const isActive = idx === activeStage;
                return (
                  <button
                    key={s.step}
                    onClick={() => setActiveStage(idx)}
                    className={`w-full text-start p-4 rounded-2xl transition-all duration-300 flex items-center gap-5 cursor-pointer ${
                      isActive
                        ? 'bg-[#080d14] border border-[var(--accent)]/40 shadow-lg shadow-[var(--accent)]/5 opacity-100'
                        : 'opacity-40 hover:opacity-80 hover:bg-[#080d14]/50'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm font-bold transition-colors ${
                        isActive
                          ? 'bg-[var(--accent)] text-[var(--stackway-black)] shadow-sm'
                          : 'bg-[#05060a] border border-[var(--line)] text-[var(--muted)]'
                      }`}
                    >
                      {s.step}
                    </div>

                    <div>
                      <h4 className="font-heading font-bold text-base text-[var(--ink)]">
                        {isAr ? s.title.ar : s.title.en}
                      </h4>
                      <p className="text-xs text-[var(--muted)] line-clamp-1">
                        {isAr ? s.output.ar : s.output.en}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Stage Detail Spotlight Card */}
          <div className="col-span-7 sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="p-10 md:p-14 rounded-3xl border border-[var(--line)] bg-[#080d14] shadow-2xl relative overflow-hidden"
              >
                {/* Background Huge Number Motif */}
                <div className="absolute -bottom-10 -right-6 rtl:-left-6 rtl:right-auto text-[180px] font-mono font-black text-white/[0.03] select-none pointer-events-none leading-none">
                  {stage.step}
                </div>

                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)] mono-tag text-xs font-semibold">
                    STAGE // {stage.step} OF 06
                  </div>

                  <h3 className="text-3xl md:text-5xl font-bold font-heading text-[var(--ink)]">
                    {isAr ? stage.title.ar : stage.title.en}
                  </h3>

                  <p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed max-w-xl">
                    {isAr ? stage.description.ar : stage.description.en}
                  </p>

                  {/* Output Chip */}
                  <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                    className="pt-4"
                  >
                    <div className="inline-flex items-center gap-3 p-3.5 rounded-2xl border border-[var(--line)] bg-[#05060a] shadow-xs">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="mono-tag text-xs text-[var(--muted)]">
                        {isAr ? 'المخرجات المعتمدة:' : 'DELIVERABLE OUTPUT:'}
                      </span>
                      <span className="font-heading font-bold text-xs md:text-sm text-[var(--ink)]">
                        {isAr ? stage.output.ar : stage.output.en}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-6">
          {PROCESS_STAGES.map((s) => (
            <div
              key={s.step}
              className="p-6 rounded-2xl border border-[var(--line)] bg-[#080d14] space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="mono-tag text-xs font-bold text-[var(--accent)]">
                  {s.step} / 06
                </span>
                <span className="mono-tag text-[10px] px-2 py-0.5 rounded bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]">
                  {isAr ? s.output.ar : s.output.en}
                </span>
              </div>
              <h4 className="font-heading font-bold text-xl text-[var(--ink)]">
                {isAr ? s.title.ar : s.title.en}
              </h4>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {isAr ? s.description.ar : s.description.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
