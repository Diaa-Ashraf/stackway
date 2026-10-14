'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { INSIGHTS_ARTICLES } from '@/content/site-data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FinalCta } from '@/components/sections/FinalCta';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/components/motion/motion-variants';

interface InsightsPageViewProps {
  lang?: 'en' | 'ar';
}

export function InsightsPageView({ lang = 'en' }: InsightsPageViewProps) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: isAr ? 'جميع المقالات (3)' : 'All Insights (3)' },
    { id: 'copywriting', label: isAr ? 'كتابة المحتوى' : 'Copywriting' },
    { id: 'domains', label: isAr ? 'النطاقات والـ DNS' : 'Domains' },
  ];

  const filtered = INSIGHTS_ARTICLES.filter((a) => {
    if (activeCategory === 'all') return true;
    return a.category.en.toLowerCase() === activeCategory;
  });

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
            number="10"
            eyebrow={isAr ? 'الأفكار والملاحظات الهندسية' : 'EDITORIAL PERSPECTIVES'}
            title={isAr ? 'ملاحظات حول بناء وتطوير المنتجات الرقمية.' : 'Notes on building digital products.'}
            subtitle={
              isAr
                ? 'مقالات عملية وأطر عمل مجربة كتبها مهندسونا حول كتابة النصوص الإعلانية، وتطوير الواجهات، وإدارة الخوادم.'
                : 'Actionable essays and proven frameworks written by our practitioners on conversion copy, frontend architecture, and hosting.'
            }
          />
        </motion.div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((c) => {
            const isActive = activeCategory === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'text-black bg-[var(--accent)] font-bold shadow-md shadow-[var(--accent)]/20'
                    : 'border border-[#1b253b] bg-[#070b14] text-[var(--muted)] hover:text-white hover:border-[var(--accent)]/50'
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>

        {/* Articles Grid with Stagger & Ambient Hover Blooms */}
        <motion.div
          layout
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24 sm:mb-32"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((article) => (
              <motion.div
                key={article.slug}
                layout
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
              >
                <Link
                  href={`${prefix}/insights/${article.slug}`}
                  className="group relative flex flex-col justify-between h-full p-6 sm:p-9 rounded-3xl border border-[#1b253b] bg-[#070b14] hover:border-[var(--accent)] hover:-translate-y-2 transition-all duration-300 shadow-2xl overflow-hidden"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at 100% 0%, rgba(0, 242, 254, 0.08) 0%, transparent 60%)',
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <span className="mono-tag text-[10px] px-2.5 py-1 rounded-full bg-[#0c1322] border border-[#1b253b] text-[var(--accent)] font-semibold">
                        {isAr ? article.category.ar : article.category.en}
                      </span>
                      <span className="text-[11px] font-mono text-[var(--muted)] flex items-center gap-1">
                        <Clock size={12} />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-4 leading-snug group-hover:text-[var(--accent)] transition-colors">
                      {isAr ? article.title.ar : article.title.en}
                    </h3>

                    <p className="text-xs md:text-sm text-[var(--muted)] leading-relaxed mb-6">
                      {isAr ? article.excerpt.ar : article.excerpt.en}
                    </p>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-[#141b2b] flex items-center justify-between text-xs font-mono text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
                    <span>{isAr ? 'قراءة المقال كاملاً' : 'Read full perspective'}</span>
                    <ArrowUpRight
                      size={14}
                      className="transform transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 rtl:scale-x-[-1]"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Global Final CTA matching HomePage */}
      <FinalCta lang={lang} />
    </div>
  );
}

export default InsightsPageView;
