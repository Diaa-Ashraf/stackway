'use client';

import React from 'react';
import Image from 'next/image';
import { COMPANY_VALUES, STATS_LIST, TECH_ITEMS, WHY_POINTS } from '@/content/site-data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';

interface CompanyPageViewProps {
  lang?: 'en' | 'ar';
}

export function CompanyPageView({ lang = 'en' }: CompanyPageViewProps) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';

  return (
    <div className="pt-28 pb-20 md:pt-40 md:pb-32 bg-[var(--bg)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero */}
        <SectionHeader
          number="05"
          eyebrow={isAr ? 'قصة ورؤية ستاك واي' : 'ABOUT STACKWAY'}
          title={isAr ? '11 عاماً من البناء الهندسي والشراكة.' : 'Eleven years building with clients, not just for them.'}
          subtitle={
            isAr
              ? 'تأسست ستاك واي على مبدأ بسيط: التصميم البصري الخلاب لا قيمة له دون كود برمجي متماسك وبنية تحتية سحابية لا تسقط.'
              : 'Founded on a foundational principle: visual elegance is meaningless without resilient code and bulletproof cloud infrastructure.'
          }
        />

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 sm:mb-20 items-center">
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base md:text-lg text-[var(--muted)] leading-relaxed">
            <p className="text-[var(--ink)] font-medium text-lg sm:text-xl md:text-2xl">
              {isAr
                ? 'نحن لسنا مجرد وكالة رقمية تصمم وتغادر، بل نحن الذراع التقني لشركائنا.'
                : "We are an engineering collective and infrastructure partner for businesses that cannot afford downtime."}
            </p>
            <p>
              {isAr
                ? 'منذ انطلاقنا، شهدنا الكثير من المشاريع التي تعاني من تشتت المسؤولية بين مطور الواجهات، ومبرمج الخوادم، وموفر الاستضافة. عندما يقع خطأ، يبدأ تبادل اللوم. في ستاك واي، ألغينا هذا التشتت: فريق واحد مسؤول عن الكود وعن السيرفر وعن النتائج.'
                : 'Since our inception, we have seen businesses suffer from fragmented accountability between designers, software developers, and third-party hosting resellers. When an outage occurred, everyone blamed someone else. At Stackway, we unified the stack.'}
            </p>
            <p>
              {isAr
                ? 'اليوم، نخدم أكثر من 41 علامة تجارية ومنصة في الشرق الأوسط وأوروبا والولايات المتحدة، وندير أنظمة تعالج ملايين الزيارات والطلبات الرقمية شهرياً.'
                : 'Today, we power over 41 enterprise brands across the MENA region, Europe, and North America, managing systems that process millions of transactions every month.'}
            </p>
          </div>

          <div className="lg:col-span-5 p-5 sm:p-8 md:p-12 rounded-3xl border border-[var(--line)] bg-[#080d14] shadow-xl space-y-6 sm:space-y-8">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#d4af37]/60 shadow-[0_0_15px_rgba(212,175,55,0.3)] shrink-0 bg-black">
                <Image
                  src="/images/stackway-brand-logo.webp"
                  alt="Stackway"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base sm:text-lg text-[var(--ink)]">Stackway LLC</h4>
                <p className="text-[10px] sm:text-xs font-mono text-[var(--muted)]">EST. 2018 // DIGITAL ENGINEERING</p>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 pt-4 border-t border-[var(--line)]">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-[var(--muted)]">{isAr ? 'المقر الرئيسي:' : 'Headquarters:'}</span>
                <span className="font-semibold text-[var(--ink)]">Wyoming, USA & Cairo, EG</span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-[var(--muted)]">{isAr ? 'الاعتماد التقني:' : 'Certifications:'}</span>
                <span className="font-semibold text-[var(--accent)] font-mono">cPanel / CloudLinux / AWS</span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-[var(--muted)]">{isAr ? 'متوسط سرعة الاستجابة:' : 'Average Response:'}</span>
                <span className="font-semibold text-emerald-600 font-mono">&lt; 15 mins</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-16 sm:mb-24">
          {STATS_LIST.map((stat, i) => (
            <div key={i} className="p-4 sm:p-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] text-center shadow-xs">
              <div className="font-heading font-black text-3xl sm:text-4xl md:text-6xl text-[var(--ink)] mb-2">
                {stat.value}{stat.value !== '24/7' && <span className="text-[var(--accent)]">+</span>}
              </div>
              <div className="text-[11px] sm:text-xs md:text-sm text-[var(--muted)] font-medium">
                {isAr ? stat.label.ar : stat.label.en}
              </div>
            </div>
          ))}
        </div>

        {/* Core Principles / Values */}
        <div className="mb-24">
          <div className="mb-12">
            <span className="mono-tag text-xs text-[var(--muted)] tracking-wider">
              // ARCHITECTURAL CODE & VALUES
            </span>
            <h3 className="text-3xl font-bold font-heading text-[var(--ink)] mt-1">
              {isAr ? 'المبادئ والقيم التي تحكم عملنا' : 'The principles we engineer by'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {COMPANY_VALUES.map((val) => (
              <div
                key={val.num}
                className="p-5 sm:p-8 rounded-3xl border border-[var(--line)] bg-[var(--surface)] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xs font-bold text-[var(--accent)] mb-3">
                    {val.num}
                  </div>
                  <h4 className="font-heading font-bold text-lg sm:text-xl text-[var(--ink)] mb-3">
                    {isAr ? val.title.ar : val.title.en}
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                    {isAr ? val.desc.ar : val.desc.en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Partners */}
        <div className="p-5 sm:p-8 md:p-12 rounded-3xl border border-[var(--line)] bg-[var(--surface)] mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <span className="mono-tag text-xs text-[var(--muted)]">
              // INFRASTRUCTURE ALLIANCE
            </span>
            <h3 className="text-2xl font-bold font-heading text-[var(--ink)] mt-1">
              {isAr ? 'شركاء البنية التحتية والمنصات المعتمدة' : 'Official Technology & Cloud Partners'}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {TECH_ITEMS.map((t) => (
              <div
                key={t.number}
                className="p-4 rounded-xl border border-[var(--line)] bg-[var(--bg)] text-center flex flex-col items-center justify-center"
              >
                <div className="font-heading font-bold text-base text-[var(--ink)] mb-1">
                  {t.name}
                </div>
                <div className="text-[10px] font-mono text-[var(--muted)]">
                  {isAr ? t.role.ar : t.role.en}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Start Project CTA */}
        <div className="text-center space-y-4">
          <Button href={`${prefix}/start`} variant="primary" size="lg">
            {isAr ? 'ابدأ العمل معنا اليوم' : 'Build With Us'}
          </Button>
        </div>
      </div>
    </div>
  );
}
