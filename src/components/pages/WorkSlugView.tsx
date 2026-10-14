'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  getProjectBySlug,
  getAdjacentProjects,
  ProjectShowcaseItem,
} from '@/content/projects-showcase';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { FinalCta } from '@/components/sections/FinalCta';

interface WorkSlugViewProps {
  slug: string;
  lang?: 'en' | 'ar';
}

export function WorkSlugView({ slug, lang = 'en' }: WorkSlugViewProps) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';

  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(slug);
  const title = isAr ? project.titleAr : project.title;
  const category = isAr ? project.category.ar : project.category.en;
  const overview = isAr ? project.overview.ar : project.overview.en;
  const builtItems = isAr ? project.whatWeBuilt.ar : project.whatWeBuilt.en;

  const industry = isAr ? project.specs.industry.ar : project.specs.industry.en;
  const services = isAr ? project.specs.services.ar : project.specs.services.en;
  const runsOn = isAr ? project.specs.runsOn.ar : project.specs.runsOn.en;
  const languages = isAr ? project.specs.languages.ar : project.specs.languages.en;

  return (
    <div className="relative z-10 pt-[calc(var(--spacing-header)+2.5rem)] pb-24 md:pb-32 bg-transparent overflow-hidden">
      {/* 1. Project Hero Section */}
      <section className="relative isolate overflow-hidden pb-12 lg:pb-16 border-b border-[var(--line)]">
        {/* Subtle Tech Grid Mask */}
        <div aria-hidden="true" className="bg-grid mask-radial absolute inset-0 -z-10 opacity-70 pointer-events-none" />

        {/* Ambient Top Glow tinted with project color */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 opacity-40 transition-opacity duration-700"
          style={{
            background: `radial-gradient(ellipse 50% 60% at 50% 0%, ${project.color}35 0%, transparent 70%)`,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid items-center gap-10 lg:grid-cols-12">
          {/* Left Column: Breadcrumb, Eyebrow, H1, Subtitle, Live Link */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 lg:col-span-7 space-y-6"
          >
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
                  <Link href={`${prefix}/work`} className="hover:text-white transition-colors">
                    {isAr ? 'أعمالنا' : 'Work'}
                  </Link>
                </li>
                <li>
                  <span className="text-[var(--line-strong)]">/</span>
                </li>
                <li>
                  <span className="text-white font-medium truncate max-w-[180px] sm:max-w-none" aria-current="page">
                    {title}
                  </span>
                </li>
              </ol>
            </nav>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 font-mono text-xs text-[var(--muted)] pt-2">
              <span className="h-px w-8" style={{ background: project.color }} />
              <span className="tracking-widest uppercase font-semibold">
                {isAr ? 'دراسة حالة تفصيلية' : 'Case study'}
              </span>
              <span className="text-[var(--line-strong)]">•</span>
              <span className="text-white font-mono">{project.number}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-heading tracking-[-0.035em] text-white leading-[1.08]">
              {title}
            </h1>

            {/* Subtitle / Category Tagline */}
            <p className="text-sm sm:text-lg md:text-xl text-[var(--muted)] max-w-2xl leading-relaxed font-sans">
              {category}
            </p>

            {/* Live Platform Link Button */}
            {project.liveUrl && (
              <div className="pt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[var(--line-strong)] bg-[#080d14]/80 text-white font-medium text-xs sm:text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all shadow-lg group/link"
                >
                  <span>{isAr ? 'زيارة المنصة الحية مباشرة' : 'Visit live site'}</span>
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </a>
              </div>
            )}
          </motion.div>

          {/* Right Column: High-tech Gyroscope Blueprint Matrix Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex items-center justify-center select-none"
          >
            <div className="relative mx-auto aspect-square w-full max-w-[18rem] sm:max-w-[28rem] flex items-center justify-center">
              <svg viewBox="0 0 400 400" className="h-full w-full max-w-[28rem]" fill="none" aria-hidden="true">
                <defs>
                  <radialGradient id={`project-core-glow-${slug}`} cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor={project.color} stopOpacity="0.45" />
                    <stop offset="60%" stopColor="var(--accent)" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Core Radial Atmosphere */}
                <circle cx="200" cy="200" r="170" fill={`url(#project-core-glow-${slug})`} opacity="0.6" />

                {/* Rotating Gyroscope Ellipses & Spoke Connections */}
                <g className="origin-center animate-[spin_90s_linear_infinite]" style={{ transformOrigin: '200px 200px' }}>
                  <ellipse cx="200" cy="200" rx="92" ry="57" stroke="var(--line-strong)" strokeWidth="0.8" />
                  <ellipse cx="200" cy="200" rx="140" ry="87" stroke="var(--line-strong)" strokeWidth="0.8" />
                  <ellipse cx="200" cy="200" rx="180" ry="112" stroke="var(--line-strong)" strokeWidth="0.8" />

                  {/* Radiating Precision Laser Lines */}
                  <line x1="292" y1="200" x2="284.41" y2="269.25" stroke={project.color} strokeOpacity="0.3" />
                  <line x1="265.05" y1="240.33" x2="217.26" y2="286.14" stroke={project.color} strokeOpacity="0.3" />
                  <line x1="200" y1="257.04" x2="145.48" y2="279.95" stroke={project.color} strokeOpacity="0.3" />
                  <line x1="134.95" y1="240.33" x2="88.31" y2="252.34" stroke={project.color} strokeOpacity="0.3" />
                  <line x1="108" y1="200" x2="61.07" y2="210.7" stroke={project.color} strokeOpacity="0.3" />
                  <line x1="134.95" y1="159.67" x2="71.05" y2="166.2" stroke={project.color} strokeOpacity="0.3" />
                  <line x1="200" y1="142.96" x2="115.59" y2="130.75" stroke={project.color} strokeOpacity="0.3" />
                  <line x1="265.05" y1="159.67" x2="182.74" y2="113.86" stroke={project.color} strokeOpacity="0.3" />

                  {/* Constellation Vertex Dots */}
                  <circle cx="292" cy="200" r="3" fill={project.color} />
                  <circle cx="265.05" cy="240.33" r="3" fill={project.color} />
                  <circle cx="200" cy="257.04" r="3" fill={project.color} />
                  <circle cx="134.95" cy="240.33" r="3" fill={project.color} />
                  <circle cx="108" cy="200" r="3" fill={project.color} />
                  <circle cx="134.95" cy="159.67" r="3" fill={project.color} />
                  <circle cx="200" cy="142.96" r="3" fill={project.color} />
                  <circle cx="265.05" cy="159.67" r="3" fill={project.color} />
                </g>

                {/* Central Architectural Brand Monogram Emblem */}
                <g className="origin-center" style={{ transformOrigin: '200px 200px' }}>
                  <rect
                    x="165"
                    y="165"
                    width="70"
                    height="70"
                    rx="18"
                    fill="#05060a"
                    stroke={project.color}
                    strokeWidth="1.5"
                    className="shadow-2xl"
                  />
                  <text
                    x="200"
                    y="209"
                    textAnchor="middle"
                    fill={project.color}
                    fontFamily="var(--font-heading)"
                    fontWeight="900"
                    fontSize="32"
                    letterSpacing="-1"
                  >
                    {project.number}
                  </text>
                </g>
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Full-Width Showcase Visual Banner */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-6 pt-12 lg:pt-16"
      >
        <div className="group overflow-hidden rounded-t-2xl border border-[var(--line)] shadow-2xl">
          <div className="relative grid place-items-center overflow-hidden bg-[#080d14] aspect-[21/9] max-sm:aspect-[4/3]">
            {/* Background Grid */}
            <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60 pointer-events-none" />

            {/* Radial Hover Glow Bloom */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-80 transition-opacity duration-700 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at 50% 100%, ${project.color}45 0%, transparent 75%)`,
              }}
            />

            {/* Centered Brand Logo */}
            <div className="relative w-auto max-w-[70%] h-20 sm:h-28 flex items-center justify-center p-4 z-10">
              <Image
                src={project.logo}
                alt={title}
                width={586}
                height={140}
                priority
                className="relative max-h-20 sm:max-h-28 w-auto object-contain brightness-0 invert opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
            </div>
          </div>
        </div>

        {/* 3. Specifications 4-Column Metric Bar */}
        <dl className="grid gap-px overflow-hidden border-x border-b border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4 shadow-xl">
          {/* Industry */}
          <div className="bg-[#05060a]/90 backdrop-blur-md p-4 sm:p-6">
            <dt className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
              {isAr ? 'المجال' : 'Industry'}
            </dt>
            <dd className="mt-2 text-sm sm:text-base font-medium text-white leading-snug">
              {industry || category}
            </dd>
          </div>

          {/* Services */}
          <div className="bg-[#05060a]/90 backdrop-blur-md p-4 sm:p-6">
            <dt className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
              {isAr ? 'الخدمات المشمولة' : 'Services involved'}
            </dt>
            <dd className="mt-2 text-sm sm:text-base font-medium text-white leading-snug">
              {services || (isAr ? 'تطوير البرمجيات والأنظمة' : 'Custom Software & Systems')}
            </dd>
          </div>

          {/* Runs On */}
          <div className="bg-[#05060a]/90 backdrop-blur-md p-4 sm:p-6">
            <dt className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
              {isAr ? 'تعمل على' : 'Runs on'}
            </dt>
            <dd className="mt-2 text-sm sm:text-base font-medium text-white leading-snug">
              {runsOn || 'Cloud Architecture'}
            </dd>
          </div>

          {/* Languages */}
          <div className="bg-[#05060a]/90 backdrop-blur-md p-4 sm:p-6">
            <dt className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
              {isAr ? 'اللغات' : 'Languages'}
            </dt>
            <dd className="mt-2 text-sm sm:text-base font-medium text-white leading-snug">
              {languages || (isAr ? 'العربية والإنجليزية' : 'Arabic & English')}
            </dd>
          </div>
        </dl>
      </motion.section>

      {/* 4. Deep Dive: Overview & What We Built */}
      <motion.section
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 border-b border-[var(--line)]"
      >
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Overview */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] flex items-center gap-2">
              <span className="size-2 rounded-full" style={{ background: project.color }} />
              <span>{isAr ? 'نظرة عامة على المشروع' : 'Overview'}</span>
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl font-normal leading-relaxed text-white text-balance">
              {overview}
            </p>
          </div>

          {/* Right Column: What We Built Numbered List */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
              {isAr ? 'ما قمنا ببنائه وهندسته' : 'What we built'}
            </h2>
            <ul className="border-t border-[var(--line)] divide-y divide-[var(--line)]">
              {builtItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 py-4 text-sm sm:text-base text-[var(--muted)] hover:text-white transition-colors group/item">
                  <span className="font-mono text-xs text-[var(--accent)] pt-1 shrink-0" dir="ltr">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="leading-relaxed group-hover/item:text-white transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* 5. More Work: Adjacent Projects Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 border-b border-[var(--line)]">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)]">
            {isAr ? 'أعمال ومشاريع أخرى' : 'More work'}
          </h2>
          <Link
            href={`${prefix}/work`}
            className="text-xs font-mono text-[var(--accent)] hover:underline inline-flex items-center gap-1.5"
          >
            <span>{isAr ? 'استعراض كافة الأعمال' : 'All projects'}</span>
            <ArrowRight size={13} className="rtl:rotate-180" />
          </Link>
        </div>

        <ul className="grid gap-6 md:grid-cols-2">
          {[prev, next].map((adj, i) => {
            const adjTitle = isAr ? adj.titleAr : adj.title;
            const adjCat = isAr ? adj.category.ar : adj.category.en;
            return (
              <motion.li
                key={adj.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <Link
                  href={`${prefix}/work/${adj.slug}`}
                  className="group block overflow-hidden rounded-xl border border-[var(--line)] bg-[#05060a]/90 hover:border-[var(--line-strong)] transition-all shadow-xl hover:-translate-y-1"
                >
                  {/* Top 16:9 Showcase */}
                  <div className="relative grid place-items-center overflow-hidden bg-[#080d14] aspect-[16/9] border-b border-[var(--line)]">
                    <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60 pointer-events-none" />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse at 50% 100%, ${adj.color}45 0%, transparent 70%)`,
                      }}
                    />
                    <div className="relative w-auto max-w-[70%] h-12 flex items-center justify-center p-2 z-10">
                      <Image
                        src={adj.logo}
                        alt={adjTitle}
                        width={280}
                        height={70}
                        className="relative max-h-12 w-auto object-contain brightness-0 invert opacity-85 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                      />
                    </div>
                  </div>

                  {/* Bottom Info Bar */}
                  <div className="flex items-center justify-between gap-4 p-4 sm:p-6 transition-colors group-hover:bg-[#080d14]">
                    <div>
                      <span className="block text-lg sm:text-xl font-bold font-heading text-white group-hover:text-[var(--accent)] transition-colors">
                        {adjTitle}
                      </span>
                      <span className="block text-xs text-[var(--muted)] font-mono mt-1">
                        {adjCat}
                      </span>
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-all group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180"
                    />
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </section>

      {/* 6. Unified Final CTA Section */}
      <FinalCta lang={lang} />
    </div>
  );
}
