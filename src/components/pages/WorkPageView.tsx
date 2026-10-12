'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS_SHOWCASE, ProjectShowcaseItem } from '@/content/projects-showcase';

interface WorkPageViewProps {
  lang?: 'en' | 'ar';
}

interface ProjectCardData {
  slug: string;
  title: string;
  titleAr: string;
  tag: string;
  tagAr: string;
  desc: string;
  descAr: string;
  color: string;
  logo: string;
  liveUrl?: string;
}

export function WorkPageView({ lang = 'en' }: WorkPageViewProps) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';

  const projects: ProjectCardData[] = PROJECTS_SHOWCASE.map((proj: ProjectShowcaseItem) => ({
    slug: proj.slug,
    title: proj.title,
    titleAr: proj.titleAr,
    tag: proj.category.en,
    tagAr: proj.category.ar,
    desc: proj.overview.en,
    descAr: proj.overview.ar,
    color: proj.color,
    logo: proj.logo,
    liveUrl: proj.liveUrl,
  }));

  return (
    <div className="relative z-10 pt-[calc(var(--spacing-header)+2.5rem)] pb-24 md:pb-32 bg-transparent overflow-hidden">
      {/* 1. Hero Section matching Webonio exactly */}
      <section className="relative isolate overflow-hidden pb-16 lg:pb-24 border-b border-[var(--line)]">
        {/* Subtle Tech Grid Mask */}
        <div aria-hidden="true" className="bg-grid mask-radial absolute inset-0 -z-10 opacity-70 pointer-events-none" />

        {/* Ambient Top Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(140,92,255,0.12),transparent)]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid items-center gap-10 lg:grid-cols-12">
          {/* Left Column: Breadcrumb, Eyebrow, H1, Subtitle */}
          <div className="relative z-10 lg:col-span-7 space-y-6">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb">
              <ol className="font-mono text-xs flex items-center gap-2 text-[var(--muted)]">
                <li>
                  <Link href={prefix || '/'} className="hover:text-white transition-colors">
                    {isAr ? 'الرئيسية' : 'Home'}
                  </Link>
                </li>
                <li>
                  <span className="text-[var(--line-strong)]">/</span>
                </li>
                <li>
                  <span className="text-white font-medium" aria-current="page">
                    {isAr ? 'أعمالنا' : 'Work'}
                  </span>
                </li>
              </ol>
            </nav>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 font-mono text-xs text-[var(--muted)] pt-4">
              <span className="h-px w-8 bg-[var(--accent)]" />
              <span className="tracking-widest uppercase font-semibold text-[var(--muted)]">
                {isAr ? 'أعمال ومشاريع مختارة' : 'Selected work'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-bold font-heading tracking-[-0.035em] text-white leading-[1.08]">
              {isAr ? 'مشاريع حقيقية. نتائج ملموسة.' : 'Real projects. Real results.'}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-xl text-[var(--muted)] max-w-2xl leading-relaxed font-sans">
              {isAr
                ? 'منصات وأنظمة برمجية أطلقناها لشركات في مجالات الـ SaaS، التجارة، الأغذية، الرياضة، التعليم والخدمات المهنية.'
                : "Platforms we've built across SaaS, retail, food, fitness, education and professional services."}
            </p>
          </div>

          {/* Right Column: High-tech Gyroscope Blueprint Matrix Graphic */}
          <div className="lg:col-span-5 flex items-center justify-center select-none">
            <div className="relative mx-auto aspect-square w-full max-w-[18rem] sm:max-w-[28rem] flex items-center justify-center">
              <svg viewBox="0 0 400 400" className="h-full w-full max-w-[28rem]" fill="none" aria-hidden="true">
                <defs>
                  <radialGradient id="work-core-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.45" />
                    <stop offset="50%" stopColor="var(--accent-2)" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Core Radial Atmosphere */}
                <circle cx="200" cy="200" r="170" fill="url(#work-core-glow)" opacity="0.5" />

                {/* Rotating Gyroscope Ellipses & Spoke Connections */}
                <g className="origin-center animate-[spin_90s_linear_infinite]" style={{ transformOrigin: '200px 200px' }}>
                  <ellipse cx="200" cy="200" rx="92" ry="57" stroke="var(--line-strong)" strokeWidth="0.8" />
                  <ellipse cx="200" cy="200" rx="140" ry="87" stroke="var(--line-strong)" strokeWidth="0.8" />
                  <ellipse cx="200" cy="200" rx="180" ry="112" stroke="var(--line-strong)" strokeWidth="0.8" />

                  {/* Radiating Precision Laser Lines */}
                  <line x1="292" y1="200" x2="284.41" y2="269.25" stroke="var(--accent)" strokeOpacity="0.25" />
                  <line x1="265.05" y1="240.33" x2="217.26" y2="286.14" stroke="var(--accent)" strokeOpacity="0.25" />
                  <line x1="200" y1="257.04" x2="145.48" y2="279.95" stroke="var(--accent)" strokeOpacity="0.25" />
                  <line x1="134.95" y1="240.33" x2="88.31" y2="252.34" stroke="var(--accent)" strokeOpacity="0.25" />
                  <line x1="108" y1="200" x2="61.07" y2="210.7" stroke="var(--accent)" strokeOpacity="0.25" />
                  <line x1="134.95" y1="159.67" x2="71.05" y2="166.2" stroke="var(--accent)" strokeOpacity="0.25" />
                  <line x1="200" y1="142.96" x2="115.59" y2="130.75" stroke="var(--accent)" strokeOpacity="0.25" />
                  <line x1="265.05" y1="159.67" x2="182.74" y2="113.86" stroke="var(--accent)" strokeOpacity="0.25" />
                  <line x1="328.95" y1="233.8" x2="254.52" y2="120.05" stroke="var(--accent)" strokeOpacity="0.25" />
                  <line x1="284.41" y1="269.25" x2="311.69" y2="147.66" stroke="var(--accent)" strokeOpacity="0.25" />

                  {/* Constellation Vertex Dots */}
                  <circle cx="292" cy="200" r="3" fill="var(--accent-2)" />
                  <circle cx="265.05" cy="240.33" r="3" fill="var(--accent)" />
                  <circle cx="200" cy="257.04" r="3" fill="var(--accent)" />
                  <circle cx="134.95" cy="240.33" r="3" fill="var(--accent)" />
                  <circle cx="108" cy="200" r="3" fill="var(--accent)" />
                  <circle cx="134.95" cy="159.67" r="3" fill="var(--accent-2)" />
                  <circle cx="200" cy="142.96" r="3" fill="var(--accent)" />
                  <circle cx="265.05" cy="159.67" r="3" fill="var(--accent)" />

                  <circle cx="328.95" cy="233.8" r="2" fill="var(--accent)" />
                  <circle cx="284.41" cy="269.25" r="2" fill="var(--accent)" />
                  <circle cx="217.26" cy="286.14" r="2" fill="var(--accent-2)" />
                  <circle cx="145.48" cy="279.95" r="2" fill="var(--accent)" />
                  <circle cx="88.31" cy="252.34" r="2" fill="var(--accent)" />
                  <circle cx="61.07" cy="210.7" r="2" fill="var(--accent)" />
                </g>

                {/* Central Stackway Architectural Brand Monogram Emblem */}
                <g className="origin-center" style={{ transformOrigin: '200px 200px' }}>
                  <rect
                    x="165"
                    y="165"
                    width="70"
                    height="70"
                    rx="18"
                    fill="#05060a"
                    stroke="var(--accent)"
                    strokeWidth="1.5"
                    className="shadow-2xl"
                  />
                  <text
                    x="200"
                    y="209"
                    textAnchor="middle"
                    fill="url(#work-core-glow)"
                    fontFamily="var(--font-heading)"
                    fontWeight="900"
                    fontSize="34"
                    letterSpacing="-1"
                  >
                    S
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 12 Projects Grid matching Webonio layout exactly */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24">
        <ul className="grid gap-px overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3 shadow-2xl">
          {projects.map((proj) => {
            const title = isAr ? proj.titleAr : proj.title;
            const tag = isAr ? proj.tagAr : proj.tag;
            const desc = isAr ? proj.descAr : proj.desc;

            return (
              <li key={proj.slug} className="bg-[#05060a]/90 backdrop-blur-md group hover:bg-[#080d14] transition-colors duration-300">
                <Link href={`${prefix}/work/${proj.slug}`} className="group/btn flex h-full flex-col">
                  {/* Top Logo Showcase Block (4:3 aspect ratio) */}
                  <div className="relative grid place-items-center overflow-hidden bg-[#080d14] aspect-[4/3]">
                    {/* Subtle Internal Grid */}
                    <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60 pointer-events-none" />

                    {/* Brand Colored Ambient Hover Bloom */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse at 50% 100%, ${proj.color}45 0%, transparent 70%)`,
                      }}
                    />

                    {/* Centered Brand Logo */}
                    <div className="relative w-auto max-w-[70%] h-14 sm:h-16 flex items-center justify-center p-2 z-10">
                      <Image
                        src={proj.logo}
                        alt={title}
                        width={280}
                        height={80}
                        sizes="(max-width: 640px) 70vw, (max-width: 1024px) 35vw, 25vw"
                        className="relative max-h-14 sm:max-h-16 w-auto object-contain brightness-0 invert opacity-85 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                      />
                    </div>
                  </div>

                  {/* Bottom Details Card */}
                  <div className="flex flex-1 flex-col gap-3 border-t border-[var(--line)] p-4 sm:p-6 transition-colors group-hover:bg-[var(--surface-strong)]">
                    {/* Tag with Colored Status Dot */}
                    <p className="font-mono text-xs flex items-center gap-2 text-[var(--muted)]">
                      <span className="size-2 rounded-full shrink-0 shadow-xs" style={{ background: proj.color }} />
                      <span className="truncate">{tag}</span>
                    </p>

                    {/* Project Title */}
                    <h2 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight group-hover:text-[var(--accent)] transition-colors">
                      {title}
                    </h2>

                    {/* Project Description */}
                    <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed line-clamp-3">
                      {desc}
                    </p>

                    {/* Action Link */}
                    <span className="mt-auto inline-flex items-center gap-2 pt-4 text-xs sm:text-sm font-semibold text-white group-hover:text-[var(--accent)] transition-colors">
                      <span>{isAr ? 'عرض دراسة المشروع' : 'View project'}</span>
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180"
                      />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* 3. Bottom CTA Section matching Webonio */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 text-center">
        <div className="p-6 sm:p-10 md:p-16 rounded-3xl border border-[var(--line)] bg-[#080d14]/80 backdrop-blur-xl relative overflow-hidden">
          {/* Subtle Glow in Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[var(--accent)] opacity-10 blur-3xl pointer-events-none" />

          <p className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest mb-3">
            {isAr ? '// هل تخطط لإطلاق مشروعك القادم؟' : '// READY TO BUILD?'}
          </p>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-heading text-white tracking-tight max-w-2xl mx-auto">
            {isAr ? 'لديك فكرة؟ فلنبنها معاً.' : "Have an idea? Let's build it."}
          </h2>

          <p className="mt-4 text-xs sm:text-base text-[var(--muted)] max-w-xl mx-auto leading-relaxed">
            {isAr
              ? 'تحدث مع فريقنا الهندسي اليوم، ولنبدأ في تحويل فكرتك إلى نظام رقمي متكامل يحقق نتائج أعمال ملموسة.'
              : 'Tell us what you are building. We will assess architecture, timelines, and launch a system engineered for real performance.'}
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href={`${prefix}/start`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[var(--accent)] text-[#05060a] font-bold text-xs sm:text-sm hover:brightness-110 shadow-[0_8px_30px_-8px_var(--accent-glow)] transition-all"
            >
              <span>{isAr ? 'ابدأ مشروعاً معنا' : 'Start a Project'}</span>
              <ArrowRight size={15} className="rtl:rotate-180" />
            </Link>

            <Link
              href={`${prefix}/services`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-[var(--line-strong)] bg-[var(--surface)] text-white font-semibold text-xs sm:text-sm hover:bg-[var(--surface-strong)] transition-all"
            >
              <span>{isAr ? 'استكشف كافة الخدمات' : 'Explore Services'}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
