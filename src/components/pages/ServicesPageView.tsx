'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_LIST } from '@/content/site-data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { FinalCta } from '@/components/sections/FinalCta';
import { ArrowUpRight, Sparkles } from 'lucide-react';
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
            number="01"
            eyebrow={isAr ? 'مجالات العمل والخدمات الهندسية' : 'CAPABILITIES & DISCIPLINES'}
            title={isAr ? 'خمس عشرة خدمة متخصصة، تحت سقف واحد.' : 'Fifteen disciplines, one team.'}
            subtitle={
              isAr
                ? 'من كتابة أول سطر كود حتى تشغيل خوادم الاستضافة وإطلاق الحملات، كل ما تحتاجه شركتك للنمو الرقمي.'
                : 'From first commit to managed cloud virtualization and conversion marketing. Engineered with zero compromises.'
            }
          />
        </motion.div>

        {/* Filter Pills with animated active state */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {groups.map((g) => {
            const isActive = activeFilter === g.id;
            return (
              <button
                key={g.id}
                onClick={() => setActiveFilter(g.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'text-black bg-[var(--accent)] shadow-lg shadow-[var(--accent)]/20 font-bold'
                    : 'border border-[#1b253b] bg-[#070b14] text-[var(--muted)] hover:text-white hover:border-[var(--accent)]/50'
                }`}
              >
                {g.label}
              </button>
            );
          })}
        </div>

        {/* 15 Services Grid with Motion Stagger & Ambient Hover Bloom */}
        <motion.div
          layout
          variants={staggerContainer(0.05)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((service) => (
              <motion.div
                key={service.id}
                layout
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
              >
                <Link
                  href={`${prefix}/services/${service.slug}`}
                  className="group relative flex flex-col justify-between h-full p-6 sm:p-8 rounded-3xl border border-[#1b253b] bg-[#070b14] hover:border-[var(--accent)] hover:-translate-y-1.5 transition-all duration-300 shadow-2xl overflow-hidden"
                >
                  {/* Ambient Hover Bloom */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at 80% 0%, rgba(0, 242, 254, 0.09) 0%, transparent 60%)',
                    }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <span className="mono-tag text-xs font-bold text-[var(--accent)] px-2.5 py-1 rounded bg-[#0c1322] border border-[#1b253b]">
                        {service.number} // {service.code}
                      </span>
                      <span className="mono-tag text-[10px] text-[var(--muted)]">
                        {isAr ? service.groupName.ar : service.groupName.en}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-3 group-hover:text-[var(--accent)] transition-colors">
                      {isAr ? service.title.ar : service.title.en}
                    </h3>

                    <p className="text-xs md:text-sm text-[var(--muted)] leading-relaxed mb-6">
                      {isAr ? service.subtitle.ar : service.subtitle.en}
                    </p>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-[#141b2b] flex items-center justify-between text-xs font-mono text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
                    <span>{isAr ? 'عرض نطاق العمل والمخرجات' : 'View capability scope'}</span>
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

export default ServicesPageView;
