'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { MorphingCoreVisual } from '@/components/motion/MorphingCoreVisual';

interface HeroProps {
  lang?: 'en' | 'ar';
}

export function Hero({ lang = 'en' }: HeroProps) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pt-24 lg:pt-28 pb-10 lg:pb-16 border-b border-[var(--line)]"
    >
      {/* Background Subtle Tech Grid */}
      <div
        aria-hidden="true"
        className="bg-grid mask-radial absolute inset-0 -z-10 opacity-30 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid min-h-[calc(78vh-4rem)] items-center gap-8 lg:gap-12 py-4 lg:grid-cols-12">
        {/* Left Column: Typography & CTAs (matching Webonio exactly) */}
        <div className="relative z-10 order-2 lg:order-1 lg:col-span-7 space-y-5 md:space-y-6">
          {/* Eyebrow with Brand Badge + Cyan Dash */}
          <div className="flex items-center gap-2.5 sm:gap-3 text-xs md:text-sm font-mono text-[var(--muted)]">
            <div className="relative w-5 h-5 rounded-full overflow-hidden border border-[#d4af37]/60 shadow-[0_0_10px_rgba(212,175,55,0.35)] shrink-0 bg-black">
              <Image
                src="/images/stackway-brand-logo.webp"
                alt="Stackway"
                fill
                sizes="20px"
                className="object-cover"
                priority
              />
            </div>
            <span className="tracking-widest uppercase font-semibold text-white/90">
              {isAr ? 'ستاك واي // منتجات رقمية. نتائج حقيقية.' : 'STACKWAY // BUILD • GROW • TOGETHER'}
            </span>
          </div>

          {/* Headline matching Webonio */}
          <h1
            id="hero-title"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-black tracking-[-0.035em] leading-[1.08] font-heading"
          >
            <span className="block text-white">
              {isAr ? 'نبني الأنظمة' : 'We build'}
            </span>
            <span className="block text-white">
              {isAr ? 'البرمجية المتكاملة' : 'the systems'}
            </span>
            <span className="block text-[#9ca3af] font-semibold">
              {isAr ? 'التي تدير الشركات أعمالها عليها.' : 'businesses run on.'}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-[var(--muted)] max-w-xl leading-relaxed font-sans">
            {isAr
              ? 'مواقع الويب. تطبيقات الهواتف. المتاجر الإلكترونية. البرمجيات الخاصة. البنية التحتية السحابية. النمو الرقمي.'
              : 'Websites. Mobile apps. E-commerce. Software. Cloud infrastructure. Digital growth.'}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-1">
            <Link
              href={`${prefix}/start`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[var(--accent)] text-[#05060a] font-bold text-xs sm:text-sm hover:brightness-110 shadow-[0_8px_30px_-8px_var(--accent-glow)] transition-all duration-200 group text-center"
            >
              <span>{isAr ? 'ابدأ مشروعاً معنا' : 'Start a Project'}</span>
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180"
              />
            </Link>

            <Link
              href={`${prefix}/work`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-[var(--line-strong)] bg-[var(--surface)] text-white font-semibold text-xs sm:text-sm hover:border-[var(--accent)]/50 hover:bg-[var(--surface-strong)] transition-all duration-200 backdrop-blur-sm text-center"
            >
              <span>{isAr ? 'استكشف أعمالنا' : 'Explore Our Work'}</span>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="pt-6 flex flex-wrap items-center gap-6 border-t border-[var(--line)]/40">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="font-mono text-xs md:text-sm text-[var(--muted)]">
                {isAr ? 'معتمد وموثوق من 41+ شركة ومؤسسة' : 'Trusted by 41 businesses'}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-4 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all text-xs font-mono text-[var(--muted)]">
              <span>Art Bella</span>
              <span>•</span>
              <span>Perfect Pharma</span>
              <span>•</span>
              <span>Evara</span>
              <span>•</span>
              <span>Salumida</span>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic 3D Wireframe Morphing Visual matching Webonio */}
        <div className="order-1 lg:order-2 lg:col-span-5 flex items-center justify-center">
          <MorphingCoreVisual />
        </div>
      </div>
    </section>
  );
}
