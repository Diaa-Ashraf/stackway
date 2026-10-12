'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { INSIGHTS_ARTICLES } from '@/content/site-data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ArrowUpRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/components/motion/motion-variants';

interface InsightsSectionProps {
  lang?: 'en' | 'ar';
}

export function InsightsSection({ lang = 'en' }: InsightsSectionProps) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';

  return (
    <section id="insights" className="py-24 md:py-32 border-b border-[var(--line)] bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16">
          <SectionHeader
            number="09"
            eyebrow={isAr ? 'الأفكار والمقالات الهندسية' : 'EDITORIAL INSIGHTS'}
            title={isAr ? 'ملاحظات حول بناء المنتجات الرقمية.' : 'Notes on building digital products.'}
            subtitle={
              isAr
                ? 'خبرات عملية وقواعد حاسمة في هندسة الواجهات، وكتابة المحتوى التسويقي، واختيار البنية التحتية.'
                : 'Hard-won perspectives on code, copywriting, architecture and digital distribution.'
            }
            className="mb-0 md:mb-0"
          />

          <Link
            href={`${prefix}/insights`}
            className="mt-3 md:mt-0 text-xs sm:text-sm font-mono text-[var(--accent)] hover:underline inline-flex items-center gap-1"
          >
            <span>{isAr ? 'جميع المقالات والأفكار' : 'All insights'}</span>
            <ArrowUpRight size={14} className="rtl:scale-x-[-1]" />
          </Link>
        </div>

        {/* 3 Article Cards */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {INSIGHTS_ARTICLES.map((article) => (
            <motion.div key={article.slug} variants={fadeInUp}>
              <Link
                href={`${prefix}/insights/${article.slug}`}
                className="group flex flex-col justify-between h-full p-5 sm:p-8 rounded-3xl border border-[var(--line)] bg-[#080d14] hover:bg-[#0c1524] hover:border-[var(--accent)]/50 hover:-translate-y-2 transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-[var(--accent)]/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="mono-tag text-[10px] px-2.5 py-1 rounded-full bg-[#05060a] border border-[var(--line)] text-[var(--muted)] group-hover:border-[var(--accent)]/30 group-hover:text-[var(--accent)]">
                      {isAr ? article.category.ar : article.category.en}
                    </span>
                    <span className="text-[11px] font-mono text-[var(--muted)]">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-[var(--ink)] mb-4 leading-snug group-hover:text-[var(--accent)] transition-colors relative">
                    {isAr ? article.title.ar : article.title.en}
                    {/* Animated Underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[var(--accent)] transition-all duration-300 group-hover:w-full rtl:origin-right" />
                  </h3>

                  <p className="text-xs md:text-sm text-[var(--muted)] leading-relaxed line-clamp-3">
                    {isAr ? article.excerpt.ar : article.excerpt.en}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--line)] flex items-center justify-between text-xs font-mono text-[var(--muted)] group-hover:text-[var(--accent)]">
                  <span>{isAr ? 'قراءة التحليل كاملاً' : 'Read article'}</span>
                  <ArrowUpRight
                    size={14}
                    className="transform transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 rtl:group-hover:-translate-x-1 rtl:scale-x-[-1]"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
