'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SERVICES_LIST } from '@/content/site-data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { ArrowUpRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/components/motion/motion-variants';

interface ServicesPageViewProps {
  lang?: 'en' | 'ar';
}

export function ServicesPageView({ lang = 'en' }: ServicesPageViewProps) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const groups = [
    { id: 'all', label: isAr ? 'جميع الخدمات (15)' : 'All Capabilities (15)' },
    { id: 'technology', label: isAr ? 'التكنولوجيا البرمجية' : 'Technology' },
    { id: 'infrastructure', label: isAr ? 'البنية التحتية والخدمات' : 'Infrastructure' },
    { id: 'growth', label: isAr ? 'النمو والتسويق' : 'Growth' },
    { id: 'brand', label: isAr ? 'الهوية والمحتوى' : 'Brand' },
  ];

  const filtered =
    activeFilter === 'all'
      ? SERVICES_LIST
      : SERVICES_LIST.filter((s) => s.group === activeFilter);

  return (
    <div className="relative isolate overflow-hidden pt-28 pb-20 md:pt-40 md:pb-32 bg-[var(--bg)] min-h-screen">
      {/* Subtle Tech Grid Mask & Ambient Top Glow matching HomePage & Work */}
      <div aria-hidden="true" className="bg-grid mask-radial absolute inset-0 -z-10 opacity-70 pointer-events-none" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(140,92,255,0.15),transparent)]"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="01"
          eyebrow={isAr ? 'مجالات العمل والخدمات الهندسية' : 'CAPABILITIES & DISCIPLINES'}
          title={isAr ? 'خمس عشرة خدمة متخصصة، تحت سقف واحد.' : 'Fifteen disciplines, one team.'}
          subtitle={
            isAr
              ? 'من كتابة أول سطر كود حتى تشغيل خوادم الاستضافة وإطلاق الحملات، كل ما تحتاجه شركتك للنمو الرقمي.'
              : 'From first commit to managed cloud virtualization and conversion marketing. Engineered with zero compromises.'
          }
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {groups.map((g) => (
            <button
              key={g.id}
              onClick={() => setActiveFilter(g.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === g.id
                  ? 'bg-[var(--ink)] text-[var(--bg)] shadow-xs'
                  : 'border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--ink)]'
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        {/* 15 Services Grid */}
        <motion.div
          layout
          variants={staggerContainer(0.06)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((service) => (
            <motion.div key={service.id} layout variants={fadeInUp}>
              <Link
                href={`${prefix}/services/${service.slug}`}
                className="group flex flex-col justify-between h-full p-5 sm:p-8 rounded-3xl border border-[var(--line)] bg-[var(--surface)] hover:border-[var(--accent)] hover:-translate-y-1.5 transition-all duration-200 shadow-xs hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="mono-tag text-xs font-bold text-[var(--accent)] px-2.5 py-1 rounded bg-[var(--surface-alt)] border border-[var(--line)]">
                      {service.number} // {service.code}
                    </span>
                    <span className="mono-tag text-[10px] text-[var(--muted)]">
                      {isAr ? service.groupName.ar : service.groupName.en}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl md:text-2xl text-[var(--ink)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                    {isAr ? service.title.ar : service.title.en}
                  </h3>

                  <p className="text-xs md:text-sm text-[var(--muted)] leading-relaxed mb-6">
                    {isAr ? service.subtitle.ar : service.subtitle.en}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between text-xs font-mono text-[var(--ink)] group-hover:text-[var(--accent)]">
                  <span>{isAr ? 'عرض نطاق العمل والمخرجات' : 'View capability scope'}</span>
                  <ArrowUpRight
                    size={14}
                    className="transform transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 rtl:scale-x-[-1]"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Box */}
        <div className="mt-12 sm:mt-20 p-6 sm:p-10 md:p-12 rounded-3xl border border-[var(--line)] bg-[var(--surface)] text-center space-y-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-[var(--ink)]">
            {isAr ? 'هل تحتاج إلى استشارة لمشروعك؟' : 'Need help determining the right scope?'}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-[var(--muted)] max-w-xl mx-auto">
            {isAr
              ? 'تحدث مباشرة مع مهندسينا لمناقشة المتطلبات وتحديد التقنيات الأنسب لمشروعك.'
              : 'Speak directly with our engineering team to evaluate requirements, tech stacks, and timelines.'}
          </p>
          <div className="pt-2">
            <Button href={`${prefix}/start`} variant="primary" size="lg">
              {isAr ? 'ابدأ محادثة المشروع' : 'Start a Project Inquiry'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
