'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { SERVICES_LIST, PROJECTS_LIST, PROCESS_STAGES } from '@/content/site-data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { FinalCta } from '@/components/sections/FinalCta';
import { ArrowLeft, ArrowUpRight, Check, Sparkles, Terminal } from 'lucide-react';

interface ServiceSlugViewProps {
  slug: string;
  lang?: 'en' | 'ar';
}

export function ServiceSlugView({ slug, lang = 'en' }: ServiceSlugViewProps) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';

  const service = SERVICES_LIST.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  // Related work projects matching tags or first 2 projects
  const relatedProjects = PROJECTS_LIST.slice(0, 2);

  return (
    <div className="relative isolate overflow-hidden pt-28 pb-0 md:pt-40 bg-[var(--bg)] min-h-screen">
      {/* Subtle Tech Grid Mask & Ambient Top Glow matching HomePage & Work */}
      <div aria-hidden="true" className="bg-grid mask-radial absolute inset-0 -z-10 opacity-70 pointer-events-none" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(0,242,254,0.12),transparent)]"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6 sm:mb-8"
        >
          <Link
            href={`${prefix}/services`}
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            <ArrowLeft size={14} className="rtl:rotate-180" />
            <span>{isAr ? 'العودة إلى جميع الخدمات' : 'Back to all capabilities'}</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative p-6 sm:p-10 md:p-14 rounded-3xl border border-[#1b253b] bg-[#070b14] shadow-2xl mb-14 sm:mb-20 overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_100%_0%,rgba(0,242,254,0.08),transparent_60%)] pointer-events-none"
          />

          <div className="flex items-center gap-3 mb-6">
            <span className="mono-tag text-xs font-bold text-[var(--accent)] px-3 py-1 rounded-full bg-[#0c1322] border border-[#1b253b]">
              {service.number} // {service.code}
            </span>
            <span className="mono-tag text-xs text-[var(--muted)]">
              {isAr ? service.groupName.ar : service.groupName.en}
            </span>
          </div>

          <h1 className="hero-h1 text-white mb-4 sm:mb-6 text-3xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight leading-[1.1]">
            {isAr ? service.title.ar : service.title.en}
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-[var(--accent)] font-medium max-w-3xl mb-4 sm:mb-6 leading-relaxed">
            {isAr ? service.subtitle.ar : service.subtitle.en}
          </p>

          <p className="text-xs sm:text-base md:text-lg text-[var(--muted)] max-w-3xl leading-relaxed mb-8 sm:mb-10 font-sans">
            {isAr ? service.description.ar : service.description.en}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-2">
            <Button href={`${prefix}/start`} variant="primary" size="lg" className="w-full sm:w-auto text-center justify-center">
              {isAr ? `ابدأ مشروعك في ${service.title.ar}` : `Initiate ${service.title.en}`}
            </Button>
            <Button href={`${prefix}/work`} variant="secondary" size="lg" className="w-full sm:w-auto text-center justify-center">
              {isAr ? 'مشاهدة مشاريع مشابهة' : 'View Case Studies'}
            </Button>
          </div>
        </motion.div>

        {/* What's Included / Deliverables */}
        <div className="mb-20 sm:mb-28">
          <SectionHeader
            number="01"
            eyebrow={isAr ? 'نطاق العمل والتسليم' : "WHAT'S INCLUDED"}
            title={isAr ? 'مخرجات العمل المشمولة بدقة.' : 'Technical Scope & Deliverables'}
            subtitle={
              isAr
                ? 'لا وعود عامة مبهمة. هذه هي العناصر الهندسية المحددة التي نقوم بتسليمها في كل مشروع.'
                : 'Exact engineering deliverables, production assets, and warranties included.'
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(isAr ? service.deliverables.ar : service.deliverables.en).map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group p-6 sm:p-7 rounded-2xl border border-[#1b253b] bg-[#070b14] hover:border-[var(--accent)]/60 transition-all duration-300 flex items-start gap-4 shadow-lg"
              >
                <div className="w-9 h-9 rounded-xl bg-[#0c1322] border border-[#1b253b] text-[var(--accent)] flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[var(--accent)] transition-colors">
                  <Check size={18} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base sm:text-lg text-white mb-1.5 group-hover:text-[var(--accent)] transition-colors">
                    {item}
                  </h4>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    {isAr
                      ? 'مبني وفق أعلى المعايير القياسية مع مراجعات أداء واختبارات ضغط معتمدة.'
                      : 'Built according to strict industry specifications, tested for edge cases and performance.'}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 sm:mb-28 p-6 sm:p-10 md:p-12 rounded-3xl border border-[#1b253b] bg-[#070b14] shadow-2xl"
        >
          <div className="mb-8">
            <span className="mono-tag text-xs text-[var(--muted)] tracking-wider">
              // EXECUTION TIMELINE
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1">
              {isAr ? 'كيف يتم تنفيذ هذا التخصص خطوة بخطوة:' : 'How this capability unfolds:'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {PROCESS_STAGES.map((s) => (
              <div
                key={s.step}
                className="p-5 rounded-2xl border border-[#141b2b] bg-[#04060c] flex flex-col justify-between hover:border-[var(--accent)]/40 transition-colors"
              >
                <div className="font-mono text-xs font-bold text-[var(--accent)] mb-2">
                  {s.step}
                </div>
                <div className="font-heading font-bold text-sm text-white mb-1">
                  {isAr ? s.title.ar : s.title.en}
                </div>
                <div className="text-[11px] text-[var(--muted)]">
                  {isAr ? s.output.ar : s.output.en}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Related Case Studies */}
        <div className="mb-20 sm:mb-28">
          <SectionHeader
            number="02"
            eyebrow={isAr ? 'مشاريع حية' : 'FEATURED DEPLOYMENTS'}
            title={isAr ? 'أعمال مرتبطة بهذا التخصص' : 'Selected work leveraging this discipline'}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  href={`${prefix}/work/${p.slug}`}
                  className="group rounded-3xl border border-[#1b253b] bg-[#070b14] hover:border-[var(--accent)] overflow-hidden shadow-2xl transition-all block"
                >
                  <div className="relative h-64 bg-[#04060c] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={isAr ? p.title.ar : p.title.en}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-7 sm:p-8">
                    <span className="mono-tag text-xs text-[var(--accent)] font-bold mb-2 block">
                      {isAr ? 'مشروع / ' : 'CASE / '}{p.number}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold font-heading text-white mb-2 group-hover:text-[var(--accent)] transition-colors">
                      {isAr ? p.title.ar : p.title.en}
                    </h4>
                    <p className="text-xs sm:text-sm text-[var(--muted)] line-clamp-2">
                      {isAr ? p.summary.ar : p.summary.en}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Final CTA matching HomePage */}
      <FinalCta lang={lang} />
    </div>
  );
}

export default ServiceSlugView;
