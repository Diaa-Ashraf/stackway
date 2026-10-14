'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { COMPANY_VALUES, STATS_LIST, TECH_ITEMS } from '@/content/site-data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { FinalCta } from '@/components/sections/FinalCta';
import { fadeInUp, staggerContainer } from '@/components/motion/motion-variants';
import { Shield, Award, Terminal, Cpu, Clock, CheckCircle } from 'lucide-react';

interface CompanyPageViewProps {
  lang?: 'en' | 'ar';
}

export function CompanyPageView({ lang = 'en' }: CompanyPageViewProps) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';

  return (
    <div className="relative isolate overflow-hidden pt-28 pb-0 md:pt-40 bg-[var(--bg)] min-h-screen">
      {/* Subtle Tech Grid Mask & Ambient Top Glow matching HomePage & Work */}
      <div aria-hidden="true" className="bg-grid mask-radial absolute inset-0 -z-10 opacity-70 pointer-events-none" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(0,242,254,0.12),transparent)]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>

        {/* Narrative Grid with Motion Reveals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 sm:mb-28 items-center">
          <motion.div
            initial={{ opacity: 0, x: isAr ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-sm sm:text-base md:text-lg text-[var(--muted)] leading-relaxed"
          >
            <p className="text-white font-medium text-lg sm:text-xl md:text-2xl leading-snug">
              {isAr
                ? 'نحن لسنا مجرد وكالة رقمية تصمم وتغادر، بل نحن الذراع التقني لشركائنا.'
                : 'We are an engineering collective and infrastructure partner for businesses that cannot afford downtime.'}
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-6 sm:p-8 md:p-12 rounded-3xl border border-[#1b253b] bg-[#070b14] shadow-2xl space-y-6 sm:space-y-8 relative overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-24 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none"
            />

            <div className="flex items-center gap-4 relative z-10">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#d4af37]/60 shadow-[0_0_20px_rgba(212,175,55,0.35)] shrink-0 bg-black">
                <Image
                  src="/images/stackway-brand-logo.webp"
                  alt="Stackway"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg sm:text-xl text-white">Stackway LLC</h4>
                <p className="text-[10px] sm:text-xs font-mono text-cyan-400">EST. 2018 // DIGITAL ENGINEERING</p>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#141b2b] relative z-10">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-[var(--muted)]">{isAr ? 'المقر الرئيسي:' : 'Headquarters:'}</span>
                <span className="font-semibold text-white">Wyoming, USA & Cairo, EG</span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-[var(--muted)]">{isAr ? 'الاعتماد التقني:' : 'Certifications:'}</span>
                <span className="font-semibold text-[var(--accent)] font-mono">cPanel / CloudLinux / AWS</span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-[var(--muted)]">{isAr ? 'متوسط سرعة الاستجابة:' : 'Average Response:'}</span>
                <span className="font-semibold text-emerald-400 font-mono">&lt; 15 mins (24/7)</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row with Animated Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20 sm:mb-28">
          {STATS_LIST.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 sm:p-8 rounded-2xl border border-[#1b253b] bg-[#070b14] text-center shadow-lg hover:border-[var(--accent)] transition-all hover:-translate-y-1"
            >
              <div className="font-heading font-black text-3xl sm:text-4xl md:text-6xl text-white mb-2">
                {stat.value}{stat.value !== '24/7' && <span className="text-[var(--accent)]">+</span>}
              </div>
              <div className="text-[11px] sm:text-xs md:text-sm text-[var(--muted)] font-medium">
                {isAr ? stat.label.ar : stat.label.en}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Principles / Values */}
        <div className="mb-20 sm:mb-28">
          <div className="mb-12">
            <span className="mono-tag text-xs text-[var(--muted)] tracking-wider">
              // ARCHITECTURAL CODE & VALUES
            </span>
            <h3 className="text-3xl font-bold font-heading text-white mt-1">
              {isAr ? 'المبادئ والقيم التي تحكم عملنا' : 'The principles we engineer by'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {COMPANY_VALUES.map((val, idx) => (
              <motion.div
                key={val.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative p-6 sm:p-9 rounded-3xl border border-[#1b253b] bg-[#070b14] shadow-xl hover:border-[var(--accent)] transition-all duration-300 overflow-hidden"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 100% 0%, rgba(0, 242, 254, 0.08) 0%, transparent 60%)',
                  }}
                />

                <div className="relative z-10">
                  <div className="font-mono text-xs font-bold text-[var(--accent)] mb-3">
                    {val.num}
                  </div>
                  <h4 className="font-heading font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-[var(--accent)] transition-colors">
                    {isAr ? val.title.ar : val.title.en}
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                    {isAr ? val.desc.ar : val.desc.en}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Partners */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-10 md:p-14 rounded-3xl border border-[#1b253b] bg-[#070b14] shadow-2xl mb-20"
        >
          <div className="text-center mb-10">
            <span className="mono-tag text-xs text-[var(--muted)]">
              // INFRASTRUCTURE ALLIANCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1">
              {isAr ? 'شركاء البنية التحتية والمنصات المعتمدة' : 'Official Technology & Cloud Partners'}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {TECH_ITEMS.map((t) => (
              <div
                key={t.number}
                className="p-5 rounded-2xl border border-[#141b2b] bg-[#04060c] text-center flex flex-col items-center justify-center hover:border-[var(--accent)]/50 transition-colors"
              >
                <div className="font-heading font-bold text-base text-white mb-1">
                  {t.name}
                </div>
                <div className="text-[10px] font-mono text-[var(--muted)]">
                  {isAr ? t.role.ar : t.role.en}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Global Final CTA matching HomePage */}
      <FinalCta lang={lang} />
    </div>
  );
}

export default CompanyPageView;
