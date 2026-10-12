'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { INSIGHTS_ARTICLES } from '@/content/site-data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ArrowUpRight } from 'lucide-react';
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
    <div className="pt-28 pb-20 md:pt-40 md:pb-32 bg-[var(--bg)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === c.id
                  ? 'bg-[var(--ink)] text-[var(--bg)] shadow-xs'
                  : 'border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--ink)]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <motion.div
          layout
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {filtered.map((article) => (
            <motion.div key={article.slug} layout variants={fadeInUp}>
              <Link
                href={`${prefix}/insights/${article.slug}`}
                className="group flex flex-col justify-between h-full p-5 sm:p-8 rounded-3xl border border-[var(--line)] bg-[var(--surface)] hover:border-[var(--accent)] hover:-translate-y-2 transition-all duration-300 shadow-xs hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="mono-tag text-[10px] px-2.5 py-1 rounded-full bg-[var(--surface-alt)] border border-[var(--line)] text-[var(--accent)] font-semibold">
                      {isAr ? article.category.ar : article.category.en}
                    </span>
                    <span className="text-[11px] font-mono text-[var(--muted)]">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl md:text-2xl text-[var(--ink)] mb-4 leading-snug group-hover:text-[var(--accent)] transition-colors">
                    {isAr ? article.title.ar : article.title.en}
                  </h3>

                  <p className="text-xs md:text-sm text-[var(--muted)] leading-relaxed mb-6">
                    {isAr ? article.excerpt.ar : article.excerpt.en}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between text-xs font-mono text-[var(--ink)] group-hover:text-[var(--accent)]">
                  <span>{isAr ? 'قراءة التحليل كاملاً' : 'Read full essay'}</span>
                  <ArrowUpRight
                    size={14}
                    className="transform transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 rtl:scale-x-[-1]"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
