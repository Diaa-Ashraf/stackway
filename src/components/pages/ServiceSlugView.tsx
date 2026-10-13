'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { SERVICES_LIST, PROJECTS_LIST, PROCESS_STAGES } from '@/content/site-data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';

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
    <div className="relative isolate overflow-hidden pt-28 pb-20 md:pt-40 md:pb-32 bg-[var(--bg)] min-h-screen">
      {/* Subtle Tech Grid Mask & Ambient Top Glow matching HomePage & Work */}
      <div aria-hidden="true" className="bg-grid mask-radial absolute inset-0 -z-10 opacity-70 pointer-events-none" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(140,92,255,0.15),transparent)]"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <div className="mb-6 sm:mb-8">
          <Link
            href={`${prefix}/services`}
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            <ArrowLeft size={14} className="rtl:rotate-180" />
            <span>{isAr ? 'العودة إلى جميع الخدمات' : 'Back to all capabilities'}</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="p-5 sm:p-8 md:p-14 rounded-3xl border border-[var(--line)] bg-[var(--surface)] shadow-md mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="mono-tag text-xs font-bold text-[var(--accent)] px-3 py-1 rounded-full bg-[var(--accent-light)] border border-[var(--accent)]/20">
              {service.number} // {service.code}
            </span>
            <span className="mono-tag text-xs text-[var(--muted)]">
              {isAr ? service.groupName.ar : service.groupName.en}
            </span>
          </div>

          <h1 className="hero-h1 text-[var(--ink)] mb-4 sm:mb-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
            {isAr ? service.title.ar : service.title.en}
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-[var(--accent)] font-medium max-w-3xl mb-4 sm:mb-6 leading-relaxed">
            {isAr ? service.subtitle.ar : service.subtitle.en}
          </p>

          <p className="text-xs sm:text-base md:text-lg text-[var(--muted)] max-w-3xl leading-relaxed mb-6 sm:mb-8">
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
        </div>

        {/* What's Included / Deliverables */}
        <div className="mb-20">
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
              <div
                key={idx}
                className="p-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] flex items-start gap-4 shadow-xs"
              >
                <div className="w-8 h-8 rounded-full bg-[var(--accent-light)] text-[var(--accent)] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={16} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[var(--ink)] mb-1">
                    {item}
                  </h4>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    {isAr
                      ? 'مبني وفق أعلى المعايير القياسية مع مراجعات أداء واختبارات ضغط معتمدة.'
                      : 'Built according to strict industry specifications, tested for edge cases and performance.'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Strip */}
        <div className="mb-16 sm:mb-20 p-5 sm:p-8 md:p-12 rounded-3xl border border-[var(--line)] bg-[var(--surface)]">
          <div className="mb-8">
            <span className="mono-tag text-xs text-[var(--muted)] tracking-wider">
              // EXECUTION TIMELINE
            </span>
            <h3 className="text-2xl font-bold font-heading text-[var(--ink)] mt-1">
              {isAr ? 'كيف يتم تنفيذ هذا التخصص خطوة بخطوة:' : 'How this capability unfolds:'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {PROCESS_STAGES.map((s) => (
              <div
                key={s.step}
                className="p-4 rounded-xl border border-[var(--line)] bg-[var(--bg)] flex flex-col justify-between"
              >
                <div className="font-mono text-xs font-bold text-[var(--accent)] mb-2">
                  {s.step}
                </div>
                <div className="font-heading font-bold text-sm text-[var(--ink)] mb-1">
                  {isAr ? s.title.ar : s.title.en}
                </div>
                <div className="text-[11px] text-[var(--muted)]">
                  {isAr ? s.output.ar : s.output.en}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Case Studies */}
        <div className="mb-20">
          <SectionHeader
            number="02"
            eyebrow={isAr ? 'مشاريع حية' : 'FEATURED DEPLOYMENTS'}
            title={isAr ? 'أعمال مرتبطة بهذا التخصص' : 'Selected work leveraging this discipline'}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((p) => (
              <Link
                key={p.id}
                href={`${prefix}/work/${p.slug}`}
                className="group rounded-3xl border border-[var(--line)] bg-[var(--surface)] overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative h-64 bg-[var(--surface-alt)]">
                  <Image src={p.image} alt={isAr ? p.title.ar : p.title.en} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <span className="mono-tag text-xs text-[var(--accent)] font-bold mb-2 block">
                    {isAr ? 'مشروع / ' : 'CASE / '}{p.number}
                  </span>
                  <h4 className="text-2xl font-bold font-heading text-[var(--ink)] mb-2">
                    {isAr ? p.title.ar : p.title.en}
                  </h4>
                  <p className="text-xs md:text-sm text-[var(--muted)] line-clamp-2">
                    {isAr ? p.summary.ar : p.summary.en}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Final Service CTA */}
        <div className="p-10 md:p-14 rounded-3xl border border-[var(--line)] bg-[var(--ink)] text-[var(--bg)] text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            {isAr ? `جاهز لإطلاق ${service.title.ar}؟` : `Ready to deploy ${service.title.en}?`}
          </h2>
          <p className="text-base text-[var(--bg)]/70 max-w-xl mx-auto">
            {isAr
              ? 'تواصل معنا الآن وسنقوم بتحليل مشروعك وتقديم عرض فني ومالي مفصل خلال 24 ساعة.'
              : "Let's schedule an engineering discovery call to map requirements and timeline."}
          </p>
          <div className="pt-2">
            <Button href={`${prefix}/start`} variant="accent" size="lg">
              {isAr ? 'ابدأ مشروعك الآن' : 'Start a Project Now'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
