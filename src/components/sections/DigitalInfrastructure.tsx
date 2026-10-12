'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface DigitalInfrastructureProps {
  lang?: 'en' | 'ar';
}

export function DigitalInfrastructure({ lang = 'en' }: DigitalInfrastructureProps) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const systems = [
    {
      num: '01',
      title: isAr ? 'التطبيقات والمنصات' : 'Applications',
      desc: isAr ? 'مواقع ويب، تطبيقات هواتف، وأنظمة داخلية' : 'Web, mobile and internal tools',
      node: isAr ? 'التطبيقات' : 'Applications',
      pos: { left: '50%', top: '12%' },
      x2: 50,
      y2: 12,
      delay: '0s',
      color: 'var(--accent)',
    },
    {
      num: '02',
      title: isAr ? 'واجهات البرمجة (APIs)' : 'APIs',
      desc: isAr ? 'تكامل وربط حي فوري بين كافة الأنظمة' : 'Integrations between every system',
      node: isAr ? 'APIs' : 'APIs',
      pos: { left: '79.71%', top: '26.31%' },
      x2: 79.71,
      y2: 26.31,
      delay: '-0.23s',
      color: 'var(--accent)',
    },
    {
      num: '03',
      title: isAr ? 'المدفوعات والفوترة' : 'Payments',
      desc: isAr ? 'بوابات دفع إلكترونية، اشتراكات، وإتمام طلبات' : 'Gateways, checkout and billing',
      node: isAr ? 'المدفوعات' : 'Payments',
      pos: { left: '87.05%', top: '58.46%' },
      x2: 87.05,
      y2: 58.46,
      delay: '-0.46s',
      color: 'var(--accent-2)',
    },
    {
      num: '04',
      title: isAr ? 'قواعد البيانات والعمليات' : 'Databases',
      desc: isAr ? 'بيانات العملاء، سجل الطلبات، ومزامنة العمليات' : 'Customers, orders and operations',
      node: isAr ? 'قواعد البيانات' : 'Databases',
      pos: { left: '66.49%', top: '84.24%' },
      x2: 66.49,
      y2: 84.24,
      delay: '-0.69s',
      color: 'var(--accent)',
    },
    {
      num: '05',
      title: isAr ? 'التحليلات والتقارير' : 'Analytics',
      desc: isAr ? 'محركات البحث، تتبع الحملات، وتحليلات النمو' : 'Search, campaigns and reporting',
      node: isAr ? 'التحليلات' : 'Analytics',
      pos: { left: '33.51%', top: '84.24%' },
      x2: 33.51,
      y2: 84.24,
      delay: '-0.92s',
      color: 'var(--accent)',
    },
    {
      num: '06',
      title: isAr ? 'الأمان والحماية' : 'Security',
      desc: isAr ? 'شهادات SSL، عزل متقدم، ونسخ احتياطي' : 'SSL, isolation and backups',
      node: isAr ? 'الأمان' : 'Security',
      pos: { left: '12.95%', top: '58.46%' },
      x2: 12.95,
      y2: 58.46,
      delay: '-1.15s',
      color: 'var(--accent-2)',
    },
    {
      num: '07',
      title: isAr ? 'البنية السحابية' : 'Cloud',
      desc: isAr ? 'استضافة مدارة، خوادم NVMe وبنية سحابية موثوقة' : 'Hosting, servers and AWS',
      node: isAr ? 'السحابة' : 'Cloud',
      pos: { left: '20.29%', top: '26.31%' },
      x2: 20.29,
      y2: 26.31,
      delay: '-1.38s',
      color: 'var(--accent)',
    },
  ];

  return (
    <section aria-labelledby="infra-title" className="relative overflow-hidden py-20 md:py-28 border-b border-[var(--line)] bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header matching Webonio exactly */}
        <header className="grid gap-6 lg:grid-cols-12 pb-12">
          <p className="font-mono text-xs flex items-center gap-3 lg:col-span-3 text-[var(--muted)]">
            <span className="text-[var(--accent)] font-bold">06</span>
            <span className="h-px w-8 bg-[var(--line-strong)]" />
            <span className="uppercase tracking-wider">{isAr ? 'البنية التحتية الرقمية' : 'Digital infrastructure'}</span>
          </p>

          <div className="lg:col-span-9">
            <h2 id="infra-title" className="max-w-4xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white leading-tight">
              {isAr ? 'أكثر من مجرد مواقع تقليدية.' : 'More than websites.'}
            </h2>
            <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <p className="max-w-xl text-sm sm:text-base md:text-lg text-[var(--muted)] leading-relaxed">
                {isAr
                  ? 'نبني البنية التحتية المتكاملة خلف الشركات الرقمية: كل طبقة متصلة ومحمية بانسجام تام.'
                  : 'We build the infrastructure behind digital businesses: every layer, connected.'}
              </p>
              <Link
                href={`${prefix}/services`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent)] hover:underline"
              >
                <span>{isAr ? 'استكشف البنية التقنية' : 'Explore architecture'}</span>
                <ArrowUpRight size={14} className="rtl:rotate-[-90deg]" />
              </Link>
            </div>
          </div>
        </header>

        {/* Content Grid: Constellation Radial Orbit Wheel (Left) + 7 System Cards (Right) */}
        <div className="mt-8 grid items-center gap-8 lg:gap-12 lg:grid-cols-12">
          {/* Constellation Radial Wheel (Col 7) */}
          <div className="relative mx-auto aspect-square w-full max-w-[17rem] sm:max-w-[24rem] md:max-w-[32rem] lg:max-w-[38rem] lg:col-span-7 select-none">
            {/* Subtle Tech Grid Background */}
            <div aria-hidden="true" className="bg-grid mask-radial absolute inset-0 opacity-40 pointer-events-none" />

            {/* SVG Constellation Diagram with Animated Packet Flow & Orbit Particles */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden="true">
              {/* Outer Orbit Circle */}
              <circle cx="50" cy="50" r="38" fill="none" stroke="var(--line)" strokeWidth="0.25" />
              {/* Inner Orbit Dashed Circle */}
              <circle
                cx="50"
                cy="50"
                r="24"
                fill="none"
                stroke="var(--line-strong)"
                strokeWidth="0.25"
                strokeDasharray="0.8 1.4"
              />

              {/* Radiating Spoke Lines with Traveling Light Dashes */}
              {systems.map((s, idx) => (
                <g key={`spoke-${idx}`}>
                  {/* Static Baseline */}
                  <line
                    x1="50"
                    y1="50"
                    x2={s.x2}
                    y2={s.y2}
                    stroke="var(--line-strong)"
                    strokeWidth="0.22"
                  />
                  {/* Flowing Laser Packet */}
                  <line
                    x1="50"
                    y1="50"
                    x2={s.x2}
                    y2={s.y2}
                    stroke={s.color}
                    strokeWidth="0.45"
                    strokeDasharray="1.4 18.6"
                    strokeLinecap="round"
                    className="animate-flow"
                    style={{ animationDelay: s.delay }}
                  />
                </g>
              ))}

              {/* Orbiting Satellite Dots */}
              <g className="origin-center animate-orbit">
                <circle cx="74" cy="50" r="0.75" fill="var(--accent)" />
                <circle cx="38" cy="70.78" r="0.75" fill="var(--accent)" />
                <circle cx="38" cy="29.22" r="0.75" fill="var(--accent-2)" />
              </g>
            </svg>

            {/* Center Core Node: Your Business */}
            <div className="absolute start-1/2 top-1/2 grid size-[28%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[var(--accent)]/50 bg-[#05060a]/90 backdrop-blur-md shadow-[0_0_50px_-5px_rgba(52,209,209,0.35)] rtl:translate-x-1/2 z-10 transition-transform duration-300 hover:scale-105">
              <div className="text-center px-2">
                <span className="mx-auto mb-1.5 block size-2.5 rounded-full bg-[var(--accent)] animate-pulse-dot shadow-[0_0_12px_var(--accent)]" />
                <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
                  {isAr ? 'شركتك وأعمالك' : 'Your business'}
                </span>
              </div>
            </div>

            {/* 7 Floating Positioned System Tags matching Webonio layout */}
            {systems.map((sys, idx) => {
              const isHovered = activeNode === idx;
              return (
                <div
                  key={`tag-${idx}`}
                  onMouseEnter={() => setActiveNode(idx)}
                  onMouseLeave={() => setActiveNode(null)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-md border px-1.5 py-0.5 sm:px-3 sm:py-1.5 text-[9px] sm:text-xs font-semibold whitespace-nowrap backdrop-blur-md shadow-lg transition-all duration-200 cursor-pointer z-10 ${
                    isHovered
                      ? 'border-[var(--accent)] bg-[var(--accent)] text-[#05060a] scale-110 shadow-[0_0_20px_rgba(52,209,209,0.5)]'
                      : 'border-[var(--line-strong)] bg-[#080d14]/85 text-white hover:border-[var(--accent)]/70'
                  }`}
                  style={sys.pos}
                >
                  {sys.node}
                </div>
              );
            })}
          </div>

          {/* 7 System Rows Table matching Webonio right column (Col 5) */}
          <ul className="grid gap-px overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 shadow-2xl">
            {systems.map((sys, idx) => {
              const isHovered = activeNode === idx;
              return (
                <li
                  key={`card-${sys.num}`}
                  onMouseEnter={() => setActiveNode(idx)}
                  onMouseLeave={() => setActiveNode(null)}
                  className={`flex items-baseline gap-4 px-5 py-4 transition-colors duration-200 cursor-pointer ${
                    isHovered
                      ? 'bg-[var(--surface-strong)] ring-1 ring-inset ring-[var(--accent)]/40'
                      : 'bg-[#05060a]/80 backdrop-blur-md hover:bg-[var(--surface)]'
                  }`}
                >
                  <span className="font-mono text-xs font-bold text-[var(--accent)] shrink-0" dir="ltr">
                    {sys.num}
                  </span>
                  <div>
                    <span className="block font-bold text-sm text-white group-hover:text-[var(--accent)]">
                      {sys.title}
                    </span>
                    <span className="block text-xs text-[var(--muted)] mt-0.5 leading-snug">
                      {sys.desc}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
