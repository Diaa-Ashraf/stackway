'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import { INSIGHTS_ARTICLES, InsightArticle } from '@/content/site-data';
import { ArrowLeft, ArrowUpRight, Share2, Clock, Calendar, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { FinalCta } from '@/components/sections/FinalCta';

interface InsightSlugViewProps {
  slug: string;
  lang?: 'en' | 'ar';
}

export function InsightSlugView({ slug, lang = 'en' }: InsightSlugViewProps) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';

  const article: InsightArticle | undefined = INSIGHTS_ARTICLES.find((a) => a.slug === slug);
  if (!article) {
    notFound();
  }

  // Reading progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Other articles for recommendations
  const otherArticles = INSIGHTS_ARTICLES.filter((a) => a.slug !== slug);

  return (
    <div className="relative isolate overflow-hidden pt-32 pb-0 md:pt-44 bg-[var(--bg)] min-h-screen">
      {/* Article Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-[var(--accent)] to-purple-500 origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Subtle Tech Grid Mask & Ambient Top Glow matching HomePage & Work */}
      <div aria-hidden="true" className="bg-grid mask-radial absolute inset-0 -z-10 opacity-70 pointer-events-none" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(0,242,254,0.12),transparent)]"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6 sm:mb-8"
        >
          <Link
            href={`${prefix}/insights`}
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            <ArrowLeft size={14} className="rtl:rotate-180" />
            <span>{isAr ? 'العودة إلى كافة المقالات' : 'Back to all insights'}</span>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14 space-y-4 sm:space-y-6 border-b border-[#141b2b] pb-8 sm:pb-12"
        >
          <div className="flex items-center gap-3">
            <span className="mono-tag text-xs font-bold text-[var(--accent)] px-3 py-1 rounded-full bg-[#0c1322] border border-[#1b253b]">
              {isAr ? article.category.ar : article.category.en}
            </span>
            <div className="flex items-center gap-4 text-xs font-mono text-[var(--muted)]">
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {article.date}
              </span>
            </div>
          </div>

          <h1 className="hero-h1 text-white text-3xl sm:text-5xl md:text-6xl font-bold font-heading leading-tight tracking-tight">
            {isAr ? article.title.ar : article.title.en}
          </h1>

          <p className="text-lg md:text-2xl text-cyan-300/90 leading-relaxed font-medium">
            {isAr ? article.excerpt.ar : article.excerpt.en}
          </p>

          <div className="flex items-center justify-between pt-4 text-xs text-[var(--muted)] font-mono">
            <span>BY STACKWAY ARCHITECTURE LABS</span>
            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                  alert(isAr ? 'تم نسخ الرابط' : 'Link copied to clipboard');
                }
              }}
              className="flex items-center gap-1.5 text-gray-300 hover:text-[var(--accent)] cursor-pointer transition-colors"
            >
              <Share2 size={13} />
              <span>{isAr ? 'مشاركة المقال' : 'Share article'}</span>
            </button>
          </div>
        </motion.div>

        {/* Article Body Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none mb-16 text-gray-300 leading-relaxed space-y-6 font-sans"
        >
          {(isAr ? article.content.ar : article.content.en).split('\n\n').map((paragraph, i) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3
                  key={i}
                  className="font-heading font-bold text-2xl md:text-3xl text-white mt-10 mb-4 border-s-4 border-[var(--accent)] ps-4"
                >
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('- ')) {
              const items = paragraph.split('\n- ');
              return (
                <ul key={i} className="space-y-3 ps-6 list-disc text-gray-300">
                  {items.map((it, idx) => (
                    <li key={idx} className="text-base text-gray-300">
                      {it.replace(/^- /, '')}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-base md:text-lg leading-relaxed text-gray-300">
                {paragraph}
              </p>
            );
          })}
        </motion.div>

        {/* Read Next Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-10 rounded-3xl border border-[#1b253b] bg-[#070b14] mb-20 shadow-2xl"
        >
          <div className="mb-6">
            <span className="mono-tag text-xs text-[var(--muted)]">
              // CONTINUE READING
            </span>
            <h3 className="text-2xl font-bold font-heading text-white mt-1">
              {isAr ? 'مقالات وأفكار أخرى قد تهمك' : 'Related Engineering Insights'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherArticles.map((oa) => (
              <Link
                key={oa.slug}
                href={`${prefix}/insights/${oa.slug}`}
                className="group p-6 rounded-2xl border border-[#141b2b] bg-[#04060c] hover:border-[var(--accent)] transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  <span className="mono-tag text-[10px] text-[var(--accent)] font-semibold mb-2 block">
                    {isAr ? oa.category.ar : oa.category.en}
                  </span>
                  <h4 className="font-heading font-bold text-base text-white group-hover:text-[var(--accent)] transition-colors mb-2">
                    {isAr ? oa.title.ar : oa.title.en}
                  </h4>
                </div>
                <div className="pt-4 text-xs font-mono text-[var(--muted)] flex items-center justify-between border-t border-[#141b2b]">
                  <span>{oa.readTime}</span>
                  <ArrowUpRight size={13} className="rtl:scale-x-[-1]" />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Global Final CTA matching HomePage */}
      <FinalCta lang={lang} />
    </div>
  );
}

export default InsightSlugView;
