'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_LIST, ProjectItem } from '@/content/site-data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';

interface SelectedWorkProps {
  lang?: 'en' | 'ar';
}

export function SelectedWork({ lang = 'en' }: SelectedWorkProps) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'right' | 'left'>('right');

  const currentProject: ProjectItem = PROJECTS_LIST[currentIndex];

  const handleSelect = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % PROJECTS_LIST.length);
  };

  const handlePrev = () => {
    setDirection('left');
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
    <section id="work" className="py-24 md:py-32 border-b border-[var(--line)] bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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

        {/* Featured Case Card */}
        <div className="mb-8 sm:mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{
                opacity: 0,
                x: direction === 'right' ? 40 : -40,
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: direction === 'right' ? -40 : 40,
              }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-[var(--line)] bg-[#080d14] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Left Column: Project Details */}
              <div className="lg:col-span-6 p-5 sm:p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="mono-tag text-xs font-bold text-[var(--accent)] px-3 py-1 rounded-full bg-[var(--accent-light)] border border-[var(--accent)]/30">
                      {isAr ? 'مشروع / ' : 'CASE / '}{currentProject.number}
                    </span>
                    <span className="mono-tag text-xs text-[var(--muted)]">
                      {isAr ? currentProject.category.ar : currentProject.category.en}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold font-heading text-white mb-3">
                    {isAr ? currentProject.title.ar : currentProject.title.en}
                  </h3>

                  <p className="text-base text-[var(--muted)] mb-6 leading-relaxed">
                    {isAr ? currentProject.summary.ar : currentProject.summary.en}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {(isAr ? currentProject.tags.ar : currentProject.tags.en).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-md bg-[var(--surface)] text-[var(--muted)] border border-[var(--line)] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3 mb-8">
                    <span className="mono-tag text-xs text-white font-semibold uppercase tracking-wider block">
                      {isAr ? '// ما قمنا ببنائه وهندسته:' : '// WHAT WE BUILT:'}
                    </span>
                    {(isAr ? currentProject.whatWeBuilt.ar : currentProject.whatWeBuilt.en).map(
                      (item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-[var(--ink)]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="pt-6 border-t border-[var(--line)] flex flex-wrap items-center gap-4">
                  <Button href={`${prefix}/work/${currentProject.slug}`} variant="primary" size="md">
                    {isAr ? 'تفاصيل المشروع' : 'View project'}
                  </Button>
                  {currentProject.liveUrl && (
                    <Button
                      href={currentProject.liveUrl}
                      external
                      variant="secondary"
                      size="md"
                    >
                      {isAr ? 'زيارة الموقع مباشرة' : 'Visit live site'}
                    </Button>
                  )}
                </div>
              </div>

              {/* Right Column: Visual with slow zoom */}
              <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-[480px] bg-[#05060a] overflow-hidden border-t lg:border-t-0 border-s border-[var(--line)]">
                <motion.div
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={currentProject.image}
                    alt={isAr ? currentProject.title.ar : currentProject.title.en}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d14]/90 via-transparent to-transparent pointer-events-none" />
                </motion.div>

                {currentProject.stats.length > 0 && (
                  <div className="absolute bottom-3 right-3 left-3 sm:bottom-6 sm:right-6 sm:left-6 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#080d14]/90 backdrop-blur-md border border-[var(--line)] shadow-lg flex items-center justify-around text-center">
                    {currentProject.stats.map((stat, i) => (
                      <div key={i} className="px-1.5 sm:px-2">
                        <div className="font-heading font-extrabold text-base sm:text-xl text-[var(--accent)]" dir="ltr">
                          {stat.value}
                        </div>
                        <div className="text-[9px] sm:text-xs text-[var(--muted)] font-mono">
                          {isAr ? stat.label.ar : stat.label.en}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail Rail */}
        <div className="flex overflow-x-auto pb-2 scrollbar-none sm:grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 sm:gap-3">
          {PROJECTS_LIST.map((proj, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={proj.id}
                onClick={() => handleSelect(idx)}
                className={`min-w-[130px] sm:min-w-0 shrink-0 sm:shrink relative text-start p-2.5 sm:p-3 rounded-xl border transition-all duration-200 cursor-pointer hover:-translate-y-1 ${
                  isActive
                    ? 'border-[var(--accent)] bg-[#080d14] shadow-md'
                    : 'border-[var(--line)] bg-[var(--surface)] hover:bg-[#080d14] hover:border-[var(--line-strong)]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeThumbRailLine"
                    className="absolute top-0 left-2 right-2 h-[2px] bg-[var(--accent)] rounded-full"
                  />
                )}
                <div className="font-mono text-[10px] sm:text-[11px] font-bold text-[var(--muted)] mb-1">
                  {proj.number}
                </div>
                <div className="font-medium text-xs text-white line-clamp-1">
                  {isAr ? proj.title.ar : proj.title.en}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
