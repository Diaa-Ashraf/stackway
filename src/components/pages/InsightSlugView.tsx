'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';
import { INSIGHTS_ARTICLES, InsightArticle } from '@/content/site-data';
import { ArrowLeft, ArrowUpRight, Share2, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';

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
    <div className="relative isolate overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32 bg-[var(--bg)] min-h-screen">
      {/* Article Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[var(--accent)] origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Subtle Tech Grid Mask & Ambient Top Glow matching HomePage & Work */}
      <div aria-hidden="true" className="bg-grid mask-radial absolute inset-0 -z-10 opacity-70 pointer-events-none" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(140,92,255,0.15),transparent)]"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <div className="mb-6 sm:mb-8">
          <Link
            href={`${prefix}/insights`}
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            <ArrowLeft size={14} className="rtl:rotate-180" />
            <span>{isAr ? 'العودة إلى كافة المقالات' : 'Back to all insights'}</span>
          </Link>
        </div>

        {/* Article Header */}
        <div className="mb-8 sm:mb-12 space-y-4 sm:space-y-6 border-b border-[var(--line)] pb-8 sm:pb-12">
          <div className="flex items-center gap-3">
            <span className="mono-tag text-xs font-bold text-[var(--accent)] px-3 py-1 rounded-full bg-[var(--accent-light)] border border-[var(--accent)]/20">
              {isAr ? article.category.ar : article.category.en}
            </span>
            <div className="flex items-center gap-4 text-xs font-mono text-[var(--muted)]">
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {article.date}
              </span>
            </div>
          </div>

          <h1 className="hero-h1 text-[var(--ink)] text-2xl sm:text-4xl md:text-5xl leading-tight">
            {isAr ? article.title.ar : article.title.en}
          </h1>

          <p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed font-medium">
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
              className="flex items-center gap-1.5 hover:text-[var(--accent)] cursor-pointer"
            >
              <Share2 size={13} />
              <span>{isAr ? 'مشاركة المقال' : 'Share article'}</span>
            </button>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-16 text-[var(--ink)] leading-relaxed space-y-6 font-sans">
          {(isAr ? article.content.ar : article.content.en).split('\n\n').map((paragraph, i) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3
                  key={i}
                  className="font-heading font-bold text-2xl md:text-3xl text-[var(--ink)] mt-8 mb-4 border-s-4 border-[var(--accent)] ps-4"
                >
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('- ')) {
              const items = paragraph.split('\n- ');
              return (
                <ul key={i} className="space-y-2 ps-6 list-disc">
                  {items.map((it, idx) => (
                    <li key={idx} className="text-base text-[var(--ink)]/90">
                      {it.replace(/^- /, '')}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-base md:text-lg leading-relaxed text-[var(--ink)]/90">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Read Next Recommendations */}
        <div className="p-5 sm:p-8 md:p-12 rounded-3xl border border-[var(--line)] bg-[var(--surface)] mb-16">
          <div className="mb-6">
            <span className="mono-tag text-xs text-[var(--muted)]">
              // CONTINUE READING
            </span>
            <h3 className="text-2xl font-bold font-heading text-[var(--ink)] mt-1">
              {isAr ? 'مقالات وأفكار أخرى قد تهمك' : 'Related Engineering Insights'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherArticles.map((oa) => (
              <Link
                key={oa.slug}
                href={`${prefix}/insights/${oa.slug}`}
                className="group p-6 rounded-2xl border border-[var(--line)] bg-[var(--bg)] hover:border-[var(--accent)] transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="mono-tag text-[10px] text-[var(--accent)] font-semibold mb-2 block">
                    {isAr ? oa.category.ar : oa.category.en}
                  </span>
                  <h4 className="font-heading font-bold text-base text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors mb-2">
                    {isAr ? oa.title.ar : oa.title.en}
                  </h4>
                </div>
                <div className="pt-4 text-xs font-mono text-[var(--muted)] flex items-center justify-between">
                  <span>{oa.readTime}</span>
                  <ArrowUpRight size={13} className="rtl:scale-x-[-1]" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Article Bottom CTA */}
        <div className="p-8 md:p-12 rounded-3xl bg-[var(--ink)] text-[var(--bg)] text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-heading font-bold">
            {isAr ? 'هل ترغب في تطبيق هذه المعايير في مشروعك؟' : 'Ready to apply these systems to your business?'}
          </h3>
          <p className="text-sm md:text-base text-[var(--bg)]/70 max-w-lg mx-auto">
            {isAr
              ? 'فريقنا الهندسي مستعد لبناء صفحات هبوط وتطبيقات تحقق أعلى معدلات التحويل.'
              : 'Our team engineers high-converting landing pages, custom platforms, and managed infrastructure.'}
          </p>
          <div className="pt-2">
            <Button href={`${prefix}/start`} variant="accent" size="lg">
              {isAr ? 'ابدأ مشروعاً جديداً' : 'Start a Project'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
