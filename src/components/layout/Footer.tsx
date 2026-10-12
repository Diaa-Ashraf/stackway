'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES_LIST } from '@/content/site-data';
import { ArrowUpRight, Phone, Mail, MessageCircle } from 'lucide-react';

interface FooterProps {
  lang?: 'en' | 'ar';
}

export function Footer({ lang = 'en' }: FooterProps) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';

  return (
    <footer className="relative overflow-hidden border-t border-[var(--line)] bg-[#05060a]/85 backdrop-blur-md text-[var(--ink)] pt-20 pb-12 transition-colors duration-200">
      {/* Subtle Background Brand Watermark (matching Stackway logo) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 end-[-6rem] w-[32rem] h-[32rem] rounded-full overflow-hidden opacity-[0.045] select-none"
      >
        <Image
          src="/images/stackway-brand-logo.webp"
          alt=""
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Brand Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 sm:pb-16 border-b border-[var(--line)]">
          <div className="lg:col-span-5 space-y-4">
            <Link href={prefix || '/'} className="flex items-center gap-3.5" aria-label="Stackway home">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#d4af37]/60 shadow-[0_0_18px_rgba(212,175,55,0.3)] shrink-0 bg-black">
                <Image
                  src="/images/stackway-brand-logo.webp"
                  alt="Stackway"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col" dir="ltr">
                <span className="font-heading font-black text-2xl sm:text-3xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-[#d4af37] bg-clip-text text-transparent select-none leading-none">
                  STACKWAY<span className="text-[#d4af37]">.</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.22em] text-[#d4af37]/80 uppercase mt-1 select-none">
                  BUILD • GROW • TOGETHER
                </span>
              </div>
            </Link>

            <p className="text-sm font-medium text-[var(--accent)] font-mono">
              {isAr ? '// منتجات رقمية. نتائج حقيقية.' : '// DIGITAL PRODUCTS. REAL RESULTS.'}
            </p>

            <p className="text-sm text-[var(--muted)] max-w-md leading-relaxed">
              {isAr
                ? 'لا نكتفي بتصميم المواقع، بل نبني الأنظمة الرقمية المتكاملة التي تدير الشركات أعمالها عليها بكل كفاءة واستقرار.'
                : "We don't just build websites. We build the systems businesses run on."}
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {/* Services Col */}
            <div className="space-y-3">
              <h4 className="mono-tag text-xs font-semibold text-white tracking-wider">
                {isAr ? '// الخدمات' : '// SERVICES'}
              </h4>
              <ul className="space-y-2 text-xs text-[var(--muted)]">
                {SERVICES_LIST.slice(0, 8).map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`${prefix}/services/${s.slug}`}
                      className="hover:text-[var(--accent)] transition-colors line-clamp-1"
                    >
                      {isAr ? s.title.ar : s.title.en}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={`${prefix}/services`}
                    className="text-[var(--accent)] font-medium hover:underline flex items-center gap-1 pt-1 font-mono text-[11px]"
                  >
                    <span>{isAr ? 'جميع الخدمات (15)' : 'All 15 capabilities'}</span>
                    <ArrowUpRight size={11} className="rtl:scale-x-[-1]" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Col */}
            <div className="space-y-3">
              <h4 className="mono-tag text-xs font-semibold text-white tracking-wider">
                {isAr ? '// الشركة' : '// COMPANY'}
              </h4>
              <ul className="space-y-2.5 text-xs text-[var(--muted)]">
                <li>
                  <Link href={prefix || '/'} className="hover:text-[var(--accent)] transition-colors">
                    {isAr ? 'الرئيسية' : 'Home'}
                  </Link>
                </li>
                <li>
                  <Link href={`${prefix}/company`} className="hover:text-[var(--accent)] transition-colors">
                    {isAr ? 'عن ستاك واي' : 'About Stackway'}
                  </Link>
                </li>
                <li>
                  <Link href={`${prefix}/work`} className="hover:text-[var(--accent)] transition-colors">
                    {isAr ? 'أعمالنا ومشاريعنا' : 'Our Work'}
                  </Link>
                </li>
                <li>
                  <Link href={`${prefix}/#process`} className="hover:text-[var(--accent)] transition-colors">
                    {isAr ? 'مراحل العمل' : 'Process'}
                  </Link>
                </li>
                <li>
                  <Link href={`${prefix}/start`} className="hover:text-[var(--accent)] transition-colors font-medium text-white">
                    {isAr ? 'ابدأ مشروعاً جديداً' : 'Start a Project'}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Col */}
            <div className="space-y-3">
              <h4 className="mono-tag text-xs font-semibold text-white tracking-wider">
                {isAr ? '// المصادر' : '// RESOURCES'}
              </h4>
              <ul className="space-y-2.5 text-xs text-[var(--muted)]">
                <li>
                  <Link href={`${prefix}/insights`} className="hover:text-[var(--accent)] transition-colors">
                    {isAr ? 'المقالات والأفكار' : 'Insights'}
                  </Link>
                </li>
                <li>
                  <Link href={`${prefix}/solutions`} className="hover:text-[var(--accent)] transition-colors">
                    {isAr ? 'حلول الأعمال' : 'Solutions'}
                  </Link>
                </li>
                <li>
                  <a
                    href="https://clients.stackway.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{isAr ? 'بوابة العملاء' : 'Client Portal'}</span>
                    <ArrowUpRight size={11} className="rtl:scale-x-[-1]" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Col */}
            <div className="space-y-3">
              <h4 className="mono-tag text-xs font-semibold text-white tracking-wider">
                {isAr ? '// تواصل معنا' : '// CONTACT'}
              </h4>
              <div className="space-y-2.5 text-xs text-[var(--muted)]">
                <a
                  href="https://wa.me/201202325201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle size={13} className="text-emerald-400" />
                  <span>{isAr ? 'واتساب: 01202325201' : 'WhatsApp: +201202325201'}</span>
                </a>
                <a
                  href="mailto:hello@stackway.net"
                  className="hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
                >
                  <Mail size={13} />
                  <span>hello@stackway.net</span>
                </a>
                <a
                  href="tel:+201111433787"
                  dir="ltr"
                  className="hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
                >
                  <Phone size={13} />
                  <span>+20 111 143 3787</span>
                </a>
                <a
                  href="tel:+13072893064"
                  dir="ltr"
                  className="hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
                >
                  <Phone size={13} />
                  <span>+1 307 289 3064</span>
                </a>

                <div className="pt-2 flex items-center gap-3">
                  <a
                    href="https://facebook.com/stackway"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--accent)] transition-colors inline-flex items-center gap-0.5"
                  >
                    <span>Facebook</span>
                    <ArrowUpRight size={10} className="rtl:scale-x-[-1]" />
                  </a>
                  <a
                    href="https://instagram.com/stackway"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--accent)] transition-colors inline-flex items-center gap-0.5"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight size={10} className="rtl:scale-x-[-1]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)]">
          <div>
            © 2026 Stackway LLC. {isAr ? 'جميع الحقوق محفوظة' : 'All rights reserved.'}
          </div>
          <div className="flex items-center gap-6">
            <Link href={`${prefix}/privacy`} className="hover:text-white transition-colors">
              {isAr ? 'سياسة الخصوصية' : 'Privacy'}
            </Link>
            <Link href={`${prefix}/terms`} className="hover:text-white transition-colors">
              {isAr ? 'شروط الخدمة' : 'Terms'}
            </Link>
            <Link href={isAr ? '/' : '/ar'} className="text-[var(--accent)] font-medium hover:underline">
              {isAr ? 'English' : 'العربية'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
