'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_LIST, ProjectItem } from '@/content/site-data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Check, ArrowRight, ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';

interface SelectedWorkProps {
  lang?: 'en' | 'ar';
}

// Vector logos and brand accent colors for showcase
const PROJECT_META: Record<string, { logo: string; color: string }> = {
  kunuz: { logo: '/images/work/kunuz.svg', color: '#d4af37' },
  'tower-top': { logo: '/images/work/tower-top.svg', color: '#0ea5e9' },
  'team-hm': { logo: '/images/work/team-hm.svg', color: '#ef4444' },
  'hossam-mansour': { logo: '/images/work/hossam-mansour.svg', color: '#f97316' },
  ssdds: { logo: '/images/work/ssdds.svg', color: '#059669' },
  'al-tawheed-market': { logo: '/images/work/al-tawheed.svg', color: '#10b981' },
  regalest: { logo: '/images/work/regalest.svg', color: '#eab308' },
  'al-safa-petroleum': { logo: '/images/work/al-safa.svg', color: '#3b82f6' },
  elgendy: { logo: '/images/work/elgendy.svg', color: '#8b5cf6' },
  securecheap: { logo: '/images/work/securecheap.svg', color: '#00f2fe' },
  arabybot: { logo: '/images/work/arabybot.svg', color: '#a855f7' },
  elmatajer: { logo: '/images/work/elmatajer.svg', color: '#6366f1' },
};

export function SelectedWork({ lang = 'en' }: SelectedWorkProps) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProject: ProjectItem = PROJECTS_LIST[currentIndex];
  const meta = PROJECT_META[currentProject.slug] || {
    logo: `/images/work/${currentProject.slug}.svg`,
    color: '#00f2fe',
  };

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS_LIST.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS_LIST.length) % PROJECTS_LIST.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="work" className="py-24 md:py-32 border-b border-[var(--line)] bg-transparent relative isolate overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 h-96 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(0,242,254,0.08),transparent)]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <SectionHeader
            number="03"
            eyebrow={isAr ? 'أعمال ومشاريع مختارة' : 'SELECTED WORK'}
            title={isAr ? 'مشاريع حقيقية. نتائج ملموسة.' : 'Real projects. Real results.'}
            subtitle={
              isAr
                ? 'منصات ومواقع وأنظمة رقمية صممناها وبرمجناها وأطلقناها، تعمل اليوم بكامل كفاءتها وتخدم آلاف المستخدمين.'
                : "Recent platforms we've designed, built and launched, live and in use today."
            }
            className="mb-0 md:mb-0"
          />

          <div className="mt-2 md:mt-0 flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="p-2.5 sm:p-3 rounded-full border border-[var(--line)] bg-[var(--surface)] text-white hover:border-[var(--accent)] transition-colors cursor-pointer"
            >
              <ArrowLeft size={16} className="rtl:rotate-180" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next project"
              className="p-2.5 sm:p-3 rounded-full border border-[var(--line)] bg-[var(--surface)] text-white hover:border-[var(--accent)] transition-colors cursor-pointer"
            >
              <ArrowRight size={16} className="rtl:rotate-180" />
            </button>
            <Link
              href={`${prefix}/work`}
              className="ms-2 sm:ms-3 text-xs sm:text-sm font-mono text-[var(--accent)] hover:underline inline-flex items-center gap-1"
            >
              <span>{isAr ? 'جميع المشاريع' : 'All work'}</span>
              <ArrowUpRight size={14} className="rtl:scale-x-[-1]" />
            </Link>
          </div>
        </div>

        {/* 2-Column Webonio-Style Showcase: Left Card, Right Project Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Column A: Active Case Card (Webonio Layout) */}
          <div className="lg:col-span-7 xl:col-span-8 rounded-3xl border border-[#1b253b] bg-[#070b14] p-5 sm:p-7 md:p-9 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            {/* Top Bar: CASE / 03 and Category */}
            <div className="flex items-center justify-between pb-4 border-b border-[#141b2b] text-xs font-mono">
              <span className="text-[var(--muted)] font-semibold uppercase tracking-wider">
                {isAr ? 'مشروع / ' : 'CASE / '}{currentProject.number}
              </span>
              <div className="flex items-center gap-2 text-cyan-400 font-medium uppercase tracking-wider text-[11px] sm:text-xs">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>{isAr ? currentProject.category.ar : currentProject.category.en}</span>
              </div>
            </div>

            {/* Middle Stage: Technical Constellation Stage with Centered Project Logo (NO Screenshots) */}
            <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-2xl bg-[#04060c] border border-[#141b2b] my-6 flex items-center justify-center overflow-hidden">
              {/* Radial Project Hue Glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none transition-all duration-700 opacity-60"
                style={{
                  background: `radial-gradient(ellipse 65% 55% at 50% 50%, ${meta.color}25 0%, transparent 75%)`,
                }}
              />

              {/* Technical Constellation Line Graphic Overlay */}
              <svg
                aria-hidden="true"
                className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
                viewBox="0 0 800 360"
                preserveAspectRatio="none"
                fill="none"
              >
                <defs>
                  <linearGradient id={`const-grad-${currentProject.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#00f2fe" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                {/* Circuit Grid dots */}
                <line x1="0" y1="180" x2="800" y2="180" stroke="#00f2fe" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.3" />
                <line x1="400" y1="0" x2="400" y2="360" stroke="#00f2fe" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.2" />
                {/* Constellation zig-zag line */}
                <polyline
                  points="60,190 200,90 380,240 580,120 740,180"
                  stroke={`url(#const-grad-${currentProject.id})`}
                  strokeWidth="1.8"
                  fill="none"
                />
                {/* Glowing Nodes */}
                <circle cx="60" cy="190" r="4.5" fill="#00f2fe" />
                <circle cx="200" cy="90" r="5" fill="#00f2fe" />
                <circle cx="380" cy="240" r="4.5" fill="#00f2fe" />
                <circle cx="580" cy="120" r="5.5" fill="#00f2fe" />
                <circle cx="740" cy="180" r="4.5" fill="#00f2fe" />
              </svg>

              {/* Center Logo with Animated Transition */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 flex items-center justify-center p-6 max-w-[340px] max-h-[120px] transition-transform duration-500 hover:scale-105"
                >
                  <Image
                    src={meta.logo}
                    alt={isAr ? currentProject.title.ar : currentProject.title.en}
                    width={300}
                    height={85}
                    className="object-contain max-h-[75px] sm:max-h-[95px] w-auto drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)] filter brightness-105"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Content: Title & Summary on Left, What We Built Checklist on Right */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-5 border-t border-[#141b2b]">
              {/* Left Side: Title, Summary, Actions */}
              <div className="md:col-span-7 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                  {isAr ? currentProject.title.ar : currentProject.title.en}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed line-clamp-3">
                  {isAr ? currentProject.summary.ar : currentProject.summary.en}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Button href={`${prefix}/work/${currentProject.slug}`} variant="primary" size="sm">
                    {isAr ? 'تفاصيل المشروع' : 'View case study'}
                  </Button>
                  {currentProject.liveUrl && (
                    <Button
                      href={currentProject.liveUrl}
                      external
                      variant="secondary"
                      size="sm"
                    >
                      <span>{isAr ? 'زيارة الموقع مباشرة' : 'Visit live site'}</span>
                      <ExternalLink size={13} className="ms-1.5 opacity-80" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Right Side: What We Built Checklist */}
              <div className="md:col-span-5 p-4 rounded-xl bg-[#050810] border border-[#141b2b]">
                <span className="mono-tag text-[10px] sm:text-[11px] font-bold text-cyan-400 uppercase tracking-wider block mb-3">
                  // {isAr ? 'ما قمنا ببنائه وهندسته:' : 'WHAT WE BUILT'}
                </span>
                <div className="space-y-2">
                  {(isAr ? currentProject.whatWeBuilt.ar : currentProject.whatWeBuilt.en)
                    .slice(0, 3)
                    .map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[var(--ink)]/90 leading-snug">
                        <Check size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{item}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column B: Project Navigation List Tabs (Webonio Style) */}
          <div className="lg:col-span-5 xl:col-span-4 rounded-3xl border border-[#1b253b] bg-[#070b14] p-2.5 sm:p-3 shadow-xl">
            <div className="p-3 pb-2 border-b border-[#141b2b] mb-2 flex items-center justify-between">
              <span className="mono-tag text-xs font-mono text-[var(--muted)] uppercase tracking-wider">
                {isAr ? '// قائمة المشروعات' : '// ALL CASE STUDIES'}
              </span>
              <span className="font-mono text-xs text-cyan-400">
                {currentIndex + 1} / {PROJECTS_LIST.length}
              </span>
            </div>

            {/* Scrollable Project Items */}
            <div className="space-y-1.5 max-h-[620px] overflow-y-auto pr-1 scrollbar-thin">
              {PROJECTS_LIST.map((proj, idx) => {
                const isActive = idx === currentIndex;
                const pMeta = PROJECT_META[proj.slug] || {
                  logo: `/images/work/${proj.slug}.svg`,
                  color: '#00f2fe',
                };

                return (
                  <button
                    key={proj.id}
                    onClick={() => handleSelect(idx)}
                    className={`w-full text-start p-3 sm:p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer group ${
                      isActive
                        ? 'border-cyan-500/50 bg-[#0c1729] shadow-[0_0_20px_rgba(6,182,212,0.12)]'
                        : 'border-transparent hover:border-[#1b253b] hover:bg-[#0c121e]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Number */}
                      <span className={`font-mono text-xs w-5 shrink-0 ${isActive ? 'text-cyan-400 font-bold' : 'text-[var(--muted)]'}`}>
                        {proj.number}
                      </span>

                      {/* Logo Icon Badge */}
                      <div className="w-10 h-10 rounded-lg bg-[#04060c] border border-[#1b253b] flex items-center justify-center p-1.5 shrink-0 overflow-hidden">
                        <Image
                          src={pMeta.logo}
                          alt={isAr ? proj.title.ar : proj.title.en}
                          width={34}
                          height={34}
                          className="object-contain max-h-7 w-auto filter brightness-100"
                        />
                      </div>

                      {/* Title & Category */}
                      <div className="min-w-0">
                        <div
                          className={`font-semibold text-xs sm:text-sm truncate transition-colors ${
                            isActive ? 'text-white font-bold' : 'text-[var(--ink)] group-hover:text-cyan-300'
                          }`}
                        >
                          {isAr ? proj.title.ar : proj.title.en}
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-[var(--muted)] truncate">
                          {isAr ? proj.category.ar : proj.category.en}
                        </div>
                      </div>
                    </div>

                    {/* Active Arrow Indicator */}
                    <div className="shrink-0 ms-2">
                      {isActive ? (
                        <ArrowRight size={16} className="text-cyan-400 rtl:rotate-180" />
                      ) : (
                        <ArrowRight size={14} className="text-transparent group-hover:text-[var(--muted)] rtl:rotate-180 transition-colors" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
