'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HOSTING_PLANS } from '@/content/site-data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Check, ArrowUpRight, Zap, Shield, HardDrive, RefreshCw, Server, Headphones } from 'lucide-react';

interface HostingSectionProps {
  lang?: 'en' | 'ar';
}

export function HostingSection({ lang = 'en' }: HostingSectionProps) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';
  const [currency, setCurrency] = useState<'EGP' | 'USD'>('EGP');
  const [activePlanTab, setActivePlanTab] = useState<'shared' | 'cloud' | 'email'>('shared');

  const hostingFeatures = [
    {
      num: '01',
      title: { en: 'NVMe storage', ar: 'تخزين NVMe فائق السرعة' },
      text: { en: 'Solid-state NVMe disks on every plan for instant IOPS.', ar: 'أقراص NVMe فائقة السرعة تضمن سرعة استجابة مذهلة.' },
      icon: HardDrive,
    },
    {
      num: '02',
      title: { en: 'LiteSpeed Web Server', ar: 'خوادم LiteSpeed المسرعة' },
      text: { en: 'LiteSpeed web server delivering up to 300% faster pages.', ar: 'خوادم لايت سبيد الرائدة لتسليم صفحات موقعك بلمح البصر.' },
      icon: Zap,
    },
    {
      num: '03',
      title: { en: 'Free SSL Certificates', ar: 'شهادات أمان SSL مجانية' },
      text: { en: 'Every site encrypted by default with automated renew.', ar: 'تشفير كامل لكافة النطاقات وحماية بيانات زوارك تلقائياً.' },
      icon: Shield,
    },
    {
      num: '04',
      title: { en: 'Daily Backups', ar: 'نسخ احتياطي يومي مستقل' },
      text: { en: 'Your content is backed up every day to remote nodes.', ar: 'حفظ نسخ يومية لموقعك في خوادم سحابية خارجية آمنة.' },
      icon: RefreshCw,
    },
    {
      num: '05',
      title: { en: 'CloudLinux Isolation', ar: 'عزل حسابات CloudLinux' },
      text: { en: 'Each account isolated for unbreachable stability.', ar: 'عزل تام لموارد كل موقع لضمان عدم تأثره بأي حساب آخر.' },
      icon: Server,
    },
    {
      num: '06',
      title: { en: '24/7 Human Support', ar: 'دعم فني بشري متواصل' },
      text: { en: 'Reach real senior engineers any time, day or night.', ar: 'تواصل مع مهندسين متخصصين يفهمون موقعك في أي وقت.' },
      icon: Headphones,
    },
  ];

  return (
    <section id="hosting" className="py-24 md:py-32 border-b border-[var(--line)] bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <SectionHeader
            number="07"
            eyebrow={isAr ? 'الاستضافة السحابية المدارة' : 'MANAGED CLOUD HOSTING'}
            title={
              isAr
                ? 'موقعك يستحق بنية تحتية بُنيت خصيصاً لأجله.'
                : 'Your website deserves infrastructure built for it.'
            }
            subtitle={
              isAr
                ? 'استضافة سحابية مُدارة على أقراص NVMe وتقنيات LiteSpeed و CloudLinux، يديرها نفس الفريق الهندسي الذي يبني موقعك.'
                : 'Managed hosting on NVMe storage, LiteSpeed and CloudLinux, run by the same team that builds your site.'
            }
            className="mb-0 md:mb-0"
          />

          <Link
            href={`${prefix}/hosting`}
            className="mt-4 md:mt-0 text-sm font-mono text-[var(--accent)] hover:underline inline-flex items-center gap-1"
          >
            <span>{isAr ? 'عرض مقارنة الخطط الكاملة' : 'All hosting plans'}</span>
            <ArrowUpRight size={14} className="rtl:scale-x-[-1]" />
          </Link>
        </div>

        {/* 6 Features Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {hostingFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.num}
                className="p-6 rounded-2xl border border-[var(--line)] bg-[#080d14] shadow-xs flex items-start gap-4 hover:border-[var(--accent)]/40 transition-colors"
              >
                <div className="p-3 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-[var(--muted)]">{feat.num}</span>
                    <h4 className="font-heading font-bold text-sm md:text-base text-[var(--ink)]">
                      {isAr ? feat.title.ar : feat.title.en}
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm text-[var(--muted)] leading-relaxed">
                    {isAr ? feat.text.ar : feat.text.en}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Plan Tabs & Currency Toggle Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 p-3 rounded-2xl border border-[var(--line)] bg-[#080d14]">
          {/* Plan-type tabs */}
          <div className="flex items-center justify-center sm:justify-start flex-wrap gap-2">
            {[
              { id: 'shared', label: isAr ? 'استضافة مشتركة' : 'Shared Hosting' },
              { id: 'cloud', label: isAr ? 'استضافة سحابية' : 'Cloud Hosting' },
              { id: 'email', label: isAr ? 'استضافة البريد' : 'Email Hosting' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActivePlanTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activePlanTab === tab.id
                    ? 'bg-[var(--accent)] text-[var(--stackway-black)] font-bold shadow-xs'
                    : 'text-[var(--muted)] hover:text-[var(--ink)]'
                }`}
              >
                {tab.label}
              </button>
            ))}

            {/* Soon Tabs */}
            <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs text-[var(--muted)] opacity-60 cursor-not-allowed">
              <span>{isAr ? 'استضافة الموزعين' : 'Reseller Hosting'}</span>
              <span className="mono-tag text-[9px] px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-400 font-bold">
                {isAr ? 'قريباً' : 'SOON'}
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs text-[var(--muted)] opacity-60 cursor-not-allowed">
              <span>{isAr ? 'خوادم مخصصة' : 'Dedicated Servers'}</span>
              <span className="mono-tag text-[9px] px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-400 font-bold">
                {isAr ? 'قريباً' : 'SOON'}
              </span>
            </div>
          </div>

          {/* Currency Toggle & Billing label */}
          <div className="flex items-center justify-center gap-4 w-full lg:w-auto">
            <span className="text-xs font-mono text-[var(--muted)]">
              {isAr ? 'الفوترة سنوية' : 'Billed yearly'}
            </span>

            <div className="p-1 rounded-full border border-[var(--line)] bg-[#05060a] flex items-center">
              <button
                onClick={() => setCurrency('EGP')}
                className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                  currency === 'EGP'
                    ? 'bg-[var(--accent)] text-[var(--stackway-black)] shadow-xs'
                    : 'text-[var(--muted)] hover:text-[var(--ink)]'
                }`}
              >
                EGP
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                  currency === 'USD'
                    ? 'bg-[var(--accent)] text-[var(--stackway-black)] shadow-xs'
                    : 'text-[var(--muted)] hover:text-[var(--ink)]'
                }`}
              >
                USD
              </button>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {HOSTING_PLANS.map((plan) => {
            const price = currency === 'EGP' ? `${plan.priceEGP.toLocaleString()} EGP` : `$${plan.priceUSD}`;
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 ${
                  isPopular
                    ? 'shimmer-border p-[2px] shadow-2xl ring-2 ring-[var(--accent)]/40 scale-[1.02] bg-[#0c1524]'
                    : 'border border-[var(--line)] bg-[#080d14] p-8 md:p-10 shadow-sm'
                }`}
              >
                <div
                  className={`${
                    isPopular ? 'shimmer-inner rounded-[calc(1.5rem-2px)] p-8 md:p-10' : ''
                  } flex flex-col justify-between h-full`}
                >
                  <div>
                    {/* Header meta */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-heading font-extrabold text-2xl text-[var(--ink)]">
                        {isAr ? plan.name.ar : plan.name.en}
                      </span>
                      {isPopular && (
                        <span className="mono-tag text-[10px] px-3 py-1 rounded-full bg-[var(--accent)] text-white font-bold shadow-xs">
                          {isAr ? 'الأكثر طلباً' : 'MOST CHOSEN'}
                        </span>
                      )}
                    </div>

                    <p className="text-xs md:text-sm text-[var(--muted)] mb-8">
                      {isAr ? plan.tagline.ar : plan.tagline.en}
                    </p>

                    {/* Price Rolling Container */}
                    <div className="mb-8 pb-6 border-b border-[var(--line)]">
                      <div className="flex items-baseline gap-2">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={price}
                            initial={{ opacity: 0, y: -16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 16 }}
                            transition={{ duration: 0.3 }}
                            className="font-heading font-black text-4xl md:text-5xl text-[var(--ink)] tracking-tight"
                          >
                            {price}
                          </motion.span>
                        </AnimatePresence>
                        <span className="text-xs font-mono text-[var(--muted)]">
                          {isAr ? '/ سنوياً' : '/ yr'}
                        </span>
                      </div>
                    </div>

                    {/* Features checklist */}
                    <div className="space-y-3.5 mb-10">
                      <span className="mono-tag text-[11px] text-[var(--muted)] tracking-wider uppercase block">
                        {isAr ? '// المواصفات والمزايا:' : '// INCLUDED SPECIFICATIONS:'}
                      </span>
                      {(isAr ? plan.specs.ar : plan.specs.en).map((spec, i) => (
                        <div key={i} className="flex items-start gap-3 text-xs md:text-sm text-[var(--ink)]">
                          <div className="w-4 h-4 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={11} />
                          </div>
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order Button */}
                  <Button
                    href={`https://clients.stackway.net/cart.php?a=add&pid=${plan.id}`}
                    external
                    variant={isPopular ? 'accent' : 'primary'}
                    size="lg"
                    className="w-full"
                  >
                    {isAr ? 'اشترك الآن وفعل استضافتك' : 'Order now'}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnotes */}
        <div className="p-6 rounded-2xl border border-[var(--line)] bg-[#080d14] text-[11px] text-[var(--muted)] leading-relaxed space-y-1">
          <p>
            {isAr
              ? '• نطاق .com: 971 جنيه مصري / سنوياً، ومجاني للسنة الأولى مع باقة Pro.'
              : '• .com domain: EGP 971/year, free for the first year with Pro.'}
          </p>
          <p>
            {isAr
              ? '• سعر الصرف الاسترشادي: 1 دولار أمريكي = 54 جنيه مصري. الأسعار غير شاملة الضرائب أو رسوم بوابات الدفع.'
              : '• Exchange rate used: 1 USD = 54 EGP. Prices exclude any taxes or payment fees.'}
          </p>
          <p>
            {isAr
              ? '• *حركة المرور غير المحدودة (Bandwidth) تخضع لسياسة الاستخدام العادل القياسية.'
              : '• *Unlimited bandwidth is subject to our fair-use policy.'}
          </p>
        </div>
      </div>
    </section>
  );
}
