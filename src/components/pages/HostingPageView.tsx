'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HOSTING_PLANS } from '@/content/site-data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { FinalCta } from '@/components/sections/FinalCta';
import { Check, ChevronDown, Shield, Zap, Server, Sparkles } from 'lucide-react';

interface HostingPageViewProps {
  lang?: 'en' | 'ar';
}

export function HostingPageView({ lang = 'en' }: HostingPageViewProps) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';
  const [currency, setCurrency] = useState<'EGP' | 'USD'>('EGP');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const comparisonCategories = [
    {
      title: isAr ? 'الموارد والأداء' : 'Compute & Performance',
      rows: [
        { name: isAr ? 'مساحة تخزين NVMe' : 'NVMe Storage', starter: '15 GB', business: '40 GB', pro: '100 GB' },
        { name: isAr ? 'عدد المواقع المستضافة' : 'Websites Hosted', starter: '1 Site', business: '5 Sites', pro: 'Unlimited' },
        { name: isAr ? 'خادم الويب' : 'Web Server Engine', starter: 'LiteSpeed', business: 'LiteSpeed Turbo', pro: 'LiteSpeed Enterprise' },
        { name: isAr ? 'حد ذاكرة PHP' : 'PHP Memory Limit', starter: '512 MB', business: '1024 MB', pro: '2048 MB' },
        { name: isAr ? 'حركة المرور (Bandwidth)' : 'Monthly Traffic', starter: 'Unmetered*', business: 'Unmetered*', pro: 'Unmetered*' },
      ],
    },
    {
      title: isAr ? 'الأمان والنسخ الاحتياطي' : 'Security & Resilience',
      rows: [
        { name: isAr ? 'شهادات أمان SSL' : 'SSL Certificates', starter: 'Free Standard', business: 'Free Wildcard', pro: 'Free Wildcard + EV' },
        { name: isAr ? 'عزل حسابات CloudLinux' : 'CloudLinux CageFS', starter: 'Yes', business: 'Yes', pro: 'Yes' },
        { name: isAr ? 'النسخ الاحتياطي التلقائي' : 'Automated Backups', starter: 'Daily (7 Days)', business: 'Daily (30 Days)', pro: 'Real-time (60 Days)' },
        { name: isAr ? 'فحص البرمجيات الخبيثة والجدار الناري' : 'Malware Scanner & WAF', starter: 'Basic', business: 'Active Shield', pro: 'Enterprise Hardened' },
      ],
    },
    {
      title: isAr ? 'البريد والدعم الفني' : 'Mail & Support',
      rows: [
        { name: isAr ? 'صناديق البريد الرسمي' : 'Business Mailboxes', starter: '5 Mailboxes', business: 'Unlimited', pro: 'Unlimited' },
        { name: isAr ? 'نقل الموقع مجاناً' : 'Free Website Migration', starter: '1 Site', business: 'Up to 5 Sites', pro: 'Unlimited' },
        { name: isAr ? 'أولوية الدعم الفني' : 'Support Priority', starter: 'Standard 24/7', business: 'Priority 24/7', pro: 'Dedicated Engineer' },
      ],
    },
  ];

  const faqs = [
    {
      q: isAr ? 'ما الذي يميز استضافة ستاك واي عن باقي شركات الاستضافة؟' : 'How is Stackway managed hosting different from traditional web hosts?',
      a: isAr
        ? 'نحن فريق من مهندسي البرمجيات المتخصصين، وليس مجرد موفري مساحات خوادم. نحن نضبط كل سيرفر بما يطابق احتياجات كود موقعك، ونستخدم أقراص NVMe حقيقية وخوادم LiteSpeed، ونتدخل استباقياً لأي مشكلة قبل أن تشعر بها.'
        : 'We are software engineers who build platforms, not a generic reseller. We calibrate PHP limits, opcode caching, LiteSpeed, and MySQL buffers specifically for your application to ensure maximum speed and stability.'
    },
    {
      q: isAr ? 'هل تقومون بنقل موقعي الحالي بدون توقف؟' : 'Do you handle the migration from my existing hosting without downtime?',
      a: isAr
        ? 'نعم، يقوم مهندسونا بنقل كافة ملفات موقعك وقواعد بياناته وبريدك الإلكتروني بالكامل مجاناً وبدون أي انقطاع للخدمة أو فقدان للرسائل.'
        : 'Yes. Our infrastructure team manages the entire migration of files, databases, SSL, and mailboxes free of charge with zero downtime.'
    },
    {
      q: isAr ? 'هل تشمل خطة Pro نطاقاً مجانياً بالفعل؟' : 'Does the Pro plan genuinely include a free domain name?',
      a: isAr
        ? 'نعم، تشمل باقة Pro تسجيل أو تجديد نطاق .com مجاناً للسنة الأولى بالكامل مع حماية خصوصية WHOIS مجانية.'
        : 'Yes, the Pro plan includes a complimentary 1-year registration or renewal for a standard .com domain with privacy protection.'
    },
    {
      q: isAr ? 'ما هي سياسة الاستخدام العادل لحركة المرور؟' : 'What is the fair-use policy regarding unmetered bandwidth?',
      a: isAr
        ? 'حركة المرور غير محدودة لكافة الاستخدامات الطبيعية للمواقع والمتاجر والمنصات. لا نسمح فقط بمواقع التورنت أو تخزين الملفات غير القانونية الضخمة.'
        : 'Unmetered bandwidth accommodates legitimate business traffic for websites, e-commerce, and SaaS. It simply excludes public file torrenting or illegal mass distribution.'
    },
    {
      q: isAr ? 'ماذا يحدث إذا احتجت إلى خادم سحابي مخصص لاحقاً؟' : 'What happens if my business outgrows these plans?',
      a: isAr
        ? 'بنيتنا مصممة للتوسع السلس. نستطيع ترقية حسابك إلى خادم سحابي مخصص (Cloud VPS) أو بيئة AWS خلال دقائق وبدون إعادة بناء موقعك.'
        : 'Our infrastructure is designed for seamless scaling. We can migrate your workloads to isolated Cloud VPS or enterprise AWS clusters in minutes.'
    }
  ];

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
            number="07"
            eyebrow={isAr ? 'خطط واستضافة الخوادم السحابية' : 'INFRASTRUCTURE & PRICING'}
            title={isAr ? 'استضافة سحابية مدارة، فائقة السرعة.' : 'Managed NVMe cloud hosting engineered for speed.'}
            subtitle={
              isAr
                ? 'أقراص NVMe، خوادم LiteSpeed المسرعة، وعزل CloudLinux، مع ضمان تشغيل 99.9% ودعم فني بشري متواصل.'
                : 'Enterprise-grade NVMe solid-state storage, LiteSpeed caching, and proactive patch management.'
            }
          />
        </motion.div>

        {/* Currency Switch Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-10 sm:mb-14 p-4 rounded-2xl border border-[#1b253b] bg-[#070b14] shadow-lg"
        >
          <div className="text-xs sm:text-sm font-medium text-[var(--muted)] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{isAr ? 'الأسعار تشمل الدعم الفني المباشر والنسخ الاحتياطي اليومي' : 'All plans include daily backups & 24/7 technical monitoring'}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[var(--muted)] hidden sm:inline">
              {isAr ? 'العملة:' : 'Currency:'}
            </span>
            <div className="p-1 rounded-full border border-[#1b253b] bg-[#04060c] flex items-center">
              <button
                onClick={() => setCurrency('EGP')}
                className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                  currency === 'EGP' ? 'bg-[var(--accent)] text-black shadow-md font-bold' : 'text-[var(--muted)] hover:text-white'
                }`}
              >
                EGP
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                  currency === 'USD' ? 'bg-[var(--accent)] text-black shadow-md font-bold' : 'text-[var(--muted)] hover:text-white'
                }`}
              >
                USD
              </button>
            </div>
          </div>
        </motion.div>

        {/* 3 Pricing Cards Grid with Motion Reveals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-24 sm:mb-32">
          {HOSTING_PLANS.map((plan, idx) => {
            const price = currency === 'EGP' ? `${plan.priceEGP.toLocaleString()} EGP` : `$${plan.priceUSD}`;
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-3xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 ${
                  isPopular
                    ? 'p-[2px] bg-gradient-to-b from-cyan-400 via-[var(--accent)] to-purple-600 shadow-[0_0_40px_rgba(0,242,254,0.15)] scale-[1.02]'
                    : 'border border-[#1b253b] bg-[#070b14] p-6 sm:p-8 md:p-10 shadow-xl hover:border-[var(--accent)]/50'
                }`}
              >
                <div className={`${isPopular ? 'rounded-[calc(1.5rem-2px)] bg-[#070b14] p-6 sm:p-8 md:p-10' : ''} flex flex-col justify-between h-full`}>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-heading font-extrabold text-2xl text-white">
                        {isAr ? plan.name.ar : plan.name.en}
                      </span>
                      {isPopular && (
                        <span className="mono-tag text-[10px] px-3 py-1 rounded-full bg-[var(--accent)] text-black font-extrabold shadow-md animate-pulse">
                          {isAr ? 'الأكثر طلباً' : 'MOST POPULAR'}
                        </span>
                      )}
                    </div>

                    <p className="text-xs md:text-sm text-[var(--muted)] mb-8">
                      {isAr ? plan.tagline.ar : plan.tagline.en}
                    </p>

                    <div className="mb-8 pb-6 border-b border-[#141b2b]">
                      <div className="flex items-baseline gap-2">
                        <span className="font-heading font-black text-4xl md:text-5xl text-white tracking-tight">
                          {price}
                        </span>
                        <span className="text-xs font-mono text-[var(--muted)]">
                          {isAr ? '/ سنوياً' : '/ yr'}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3.5 mb-10">
                      <span className="mono-tag text-[11px] text-[var(--muted)] tracking-wider uppercase block">
                        {isAr ? '// المواصفات الأساسية:' : '// SPECS:'}
                      </span>
                      {(isAr ? plan.specs.ar : plan.specs.en).map((spec, i) => (
                        <div key={i} className="flex items-start gap-3 text-xs md:text-sm text-gray-200">
                          <div className="w-4 h-4 rounded-full bg-[#0c1322] border border-[#1b253b] text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={11} />
                          </div>
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    href={`https://clients.stackway.net/cart.php?a=add&pid=${plan.id}`}
                    external
                    variant={isPopular ? 'accent' : 'primary'}
                    size="lg"
                    className="w-full text-center justify-center"
                  >
                    {isAr ? 'اشترك الآن وفعل استضافتك' : 'Order Now'}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 sm:mb-32"
        >
          <div className="mb-8">
            <span className="mono-tag text-xs text-[var(--muted)] tracking-wider uppercase">
              // DETAILED COMPARISON MATRIX
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mt-1">
              {isAr ? 'جدول المقارنة التفصيلي بين الخطط' : 'Compare All Hosting Plans Side-by-Side'}
            </h3>
          </div>

          <div className="rounded-3xl border border-[#1b253b] bg-[#070b14] overflow-x-auto shadow-2xl">
            <table className="w-full min-w-[580px] text-start text-xs md:text-sm">
              <thead>
                <tr className="border-b border-[#141b2b] bg-[#04060c]">
                  <th className="p-4 md:p-6 text-start font-heading font-bold text-white w-2/5">
                    {isAr ? 'الميزة / الخاصية' : 'Specification'}
                  </th>
                  <th className="p-4 md:p-6 text-center font-heading font-bold text-gray-300 w-1/5">
                    Starter
                  </th>
                  <th className="p-4 md:p-6 text-center font-heading font-bold text-cyan-400 w-1/5">
                    Business
                  </th>
                  <th className="p-4 md:p-6 text-center font-heading font-bold text-purple-400 w-1/5">
                    Pro
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonCategories.map((cat, idx) => (
                  <React.Fragment key={idx}>
                    <tr className="bg-[#050811] border-b border-[#141b2b]">
                      <td colSpan={4} className="p-3 md:p-4 font-mono font-bold text-xs text-[var(--accent)]">
                        // {cat.title}
                      </td>
                    </tr>
                    {cat.rows.map((r, rIdx) => (
                      <tr key={rIdx} className="border-b border-[#141b2b] hover:bg-[#0c1322]/50 transition-colors">
                        <td className="p-4 md:p-5 font-medium text-gray-200">
                          {r.name}
                        </td>
                        <td className="p-4 md:p-5 text-center text-[var(--muted)] font-mono">
                          {r.starter}
                        </td>
                        <td className="p-4 md:p-5 text-center font-bold text-cyan-400 font-mono">
                          {r.business}
                        </td>
                        <td className="p-4 md:p-5 text-center font-medium text-white font-mono">
                          {r.pro}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="mono-tag text-xs text-[var(--muted)] uppercase">
              // ANSWERS & ARCHITECTURE
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mt-1">
              {isAr ? 'الأسئلة الشائعة حول الاستضافة' : 'Frequently Asked Questions'}
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#1b253b] bg-[#070b14] overflow-hidden shadow-lg transition-colors hover:border-[var(--accent)]/40"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-start p-6 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-heading font-bold text-base md:text-lg text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-[var(--muted)] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[var(--accent)]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 text-sm text-[var(--muted)] leading-relaxed border-t border-[#141b2b] pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Global Final CTA matching HomePage */}
      <FinalCta lang={lang} />
    </div>
  );
}

export default HostingPageView;
