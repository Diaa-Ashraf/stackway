'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS, TestimonialItem } from '@/content/site-data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';

interface TestimonialsProps {
  lang?: 'en' | 'ar';
}

export function Testimonials({ lang = 'en' }: TestimonialsProps) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';
  const [activeIdx, setActiveIdx] = useState(0);
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null);

  const activeTestimonial: TestimonialItem = TESTIMONIALS[activeIdx];

  // Auto-rotate every 8s
  useEffect(() => {
    autoRotateRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);

    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    };
  }, []);

  const handleSelect = (idx: number) => {
    if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    setActiveIdx(idx);
  };

  return (
    <section className="py-24 md:py-32 border-b border-[var(--line)] bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="08"
          eyebrow={isAr ? 'شهادات وآراء العملاء' : 'CLIENT VOICES'}
          title={isAr ? 'في كلماتهم وتجاربهم الحقيقية.' : 'In their words.'}
          subtitle={
            isAr
              ? 'شهادات القادة ورواد الأعمال الذين أسندوا إلينا بناء وتطوير منصاتهم الرقمية واستضافتها.'
              : 'What founders and enterprise leaders say after building with our team.'
          }
        />

        {/* Avatar Tabs Bar with active progress ring */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 md:gap-8 mb-10 sm:mb-16">
          {TESTIMONIALS.map((t, idx) => {
            const isActive = idx === activeIdx;

            return (
              <button
                key={t.id}
                onClick={() => handleSelect(idx)}
                className={`flex items-center gap-2.5 sm:gap-3.5 p-2 md:p-3 rounded-2xl border transition-all cursor-pointer ${
                  isActive
                    ? 'border-[var(--accent)] bg-[#080d14] shadow-lg shadow-[var(--accent)]/5'
                    : 'border-transparent bg-transparent hover:bg-[#080d14]/60 text-[var(--muted)]'
                }`}
              >
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[var(--line)] shrink-0">
                  <Image src={t.image} alt={t.name} fill sizes="48px" className="object-cover" />
                  {isActive && (
                    <div className="absolute inset-0 rounded-full border-2 border-[var(--accent)] animate-pulse" />
                  )}
                </div>

                <div className="text-start">
                  <div className="font-heading font-bold text-xs sm:text-sm text-[var(--ink)]">
                    {t.name}
                  </div>
                  <div className="text-[10px] sm:text-xs text-[var(--muted)] font-mono">
                    {t.company}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Featured Testimonial Spotlight Card */}
        <div className="p-5 sm:p-8 md:p-14 rounded-3xl border border-[var(--line)] bg-[#080d14] shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Quote & details */}
          <div className="lg:col-span-8 space-y-6">
            <span className="text-5xl md:text-6xl font-serif text-[var(--accent)] leading-none select-none opacity-40">
              “
            </span>

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={activeTestimonial.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="text-xl md:text-2xl lg:text-3xl font-heading font-medium text-[var(--ink)] leading-relaxed"
              >
                {isAr ? activeTestimonial.quote.ar : activeTestimonial.quote.en}
              </motion.blockquote>
            </AnimatePresence>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--line)]">
              <div>
                <div className="font-heading font-bold text-base text-[var(--ink)]">
                  {activeTestimonial.name}
                </div>
                <div className="text-xs text-[var(--muted)]">
                  {isAr ? activeTestimonial.role.ar : activeTestimonial.role.en} —{' '}
                  <span className="font-semibold text-[var(--ink)]">{activeTestimonial.company}</span>
                </div>
              </div>

              <Button
                href={`${prefix}/work/${activeTestimonial.projectSlug}`}
                variant="secondary"
                size="sm"
              >
                {isAr ? 'مشاهدة تفاصيل المشروع' : 'View project'}
              </Button>
            </div>
          </div>

          {/* Project Screenshot / Visual */}
          <div className="lg:col-span-4 relative h-64 md:h-80 rounded-2xl overflow-hidden border border-[var(--line)] bg-[var(--surface-alt)] shadow-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.image}
                initial={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
                animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                exit={{ opacity: 0, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={activeTestimonial.image}
                  alt={activeTestimonial.company}
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
