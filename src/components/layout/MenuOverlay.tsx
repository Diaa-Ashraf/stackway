'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowUpRight } from 'lucide-react';
import { SERVICES_LIST } from '@/content/site-data';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: 'en' | 'ar';
}

export function MenuOverlay({ isOpen, onClose, lang = 'en' }: MenuOverlayProps) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const mainPages = [
    { num: '01', title: isAr ? 'الرئيسية' : 'Home', href: `${prefix || '/'}` },
    { num: '02', title: isAr ? 'الخدمات' : 'Services', href: `${prefix}/services` },
    { num: '03', title: isAr ? 'الحلول' : 'Solutions', href: `${prefix}/solutions` },
    { num: '04', title: isAr ? 'أعمالنا' : 'Work', href: `${prefix}/work` },
    { num: '05', title: isAr ? 'الشركة' : 'Company', href: `${prefix}/company` },
    { num: '06', title: isAr ? 'المقالات' : 'Insights', href: `${prefix}/insights` },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
          animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          exit={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 bg-[#05060a]/98 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto"
        >
          {/* Top Bar inside Overlay */}
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between border-b border-[var(--line)]">
            <Link href={prefix || '/'} onClick={onClose} className="flex items-center gap-3" aria-label="Stackway home">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#d4af37]/60 shadow-[0_0_15px_rgba(212,175,55,0.3)] shrink-0 bg-black">
                <Image
                  src="/images/stackway-brand-logo.webp"
                  alt="Stackway"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col" dir="ltr">
                <span className="font-heading font-black text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-[#d4af37] bg-clip-text text-transparent select-none leading-none">
                  STACKWAY<span className="text-[#d4af37]">.</span>
                </span>
                <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.2em] text-[#d4af37]/80 uppercase mt-0.5 select-none">
                  BUILD • GROW • TOGETHER
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded border border-[var(--line)] text-xs text-[var(--muted)] font-mono">
                <span>press</span>
                <kbd className="px-1.5 py-0.5 bg-[var(--surface)] rounded border border-[var(--line)] font-semibold text-white">
                  esc
                </kbd>
                <span>to close</span>
              </div>

              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-2.5 rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] hover:bg-[var(--line)] transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Main Overlay Content */}
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 flex-grow items-start">
            {/* Left Column: Numbered Main Pages */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4 md:space-y-6">
              <span className="mono-tag text-[var(--muted)] text-xs tracking-widest uppercase">
                {isAr ? '// الصفحات الرئيسية' : '// NAVIGATION'}
              </span>

              <nav className="flex flex-col space-y-2">
                {mainPages.map((page, idx) => {
                  const isHovered = hoveredIndex === idx;
                  const isDimmed = hoveredIndex !== null && !isHovered;

                  return (
                    <motion.div
                      key={page.num}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.05 * idx, ease: [0.22, 1, 0.36, 1] }}
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <Link
                        href={page.href}
                        onClick={onClose}
                        className={`group flex items-baseline gap-4 py-2 transition-all duration-200 ${
                          isDimmed ? 'opacity-35' : 'opacity-100'
                        } ${isHovered ? 'translate-x-3 rtl:-translate-x-3' : ''}`}
                      >
                        <span className="font-mono text-sm md:text-base text-[var(--muted)] group-hover:text-[var(--accent)] font-medium">
                          {page.num}
                        </span>
                        <span className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white group-hover:text-[var(--accent)] transition-colors">
                          {page.title}
                        </span>
                        <ArrowUpRight className="opacity-0 group-hover:opacity-100 text-[var(--accent)] transition-all duration-200 -translate-x-2 group-hover:translate-x-0 rtl:scale-x-[-1]" />
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="pt-4"
                >
                  <Link
                    href={`${prefix}/start`}
                    onClick={onClose}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-[var(--accent)] text-[var(--stackway-black)] font-bold hover:brightness-110 shadow-lg shadow-[var(--accent-glow)] transition-all duration-200"
                  >
                    <span>{isAr ? 'ابدأ مشروعك الآن' : 'Start a Project'}</span>
                    <ArrowRight size={18} className="rtl:rotate-180" />
                  </Link>
                </motion.div>
              </nav>
            </div>

            {/* Right Column: All Services Grid with badges */}
            <div className="lg:col-span-5 p-6 md:p-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)]">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--line)]">
                <span className="mono-tag text-[var(--muted)] text-xs tracking-widest uppercase">
                  {isAr ? '// جميع الخدمات البرمجية' : '// CAPABILITIES'}
                </span>
                <Link
                  href={`${prefix}/services`}
                  onClick={onClose}
                  className="text-xs font-mono text-[var(--accent)] hover:underline flex items-center gap-1"
                >
                  <span>{isAr ? 'عرض الكل' : 'View all'}</span>
                  <ArrowUpRight size={12} className="rtl:scale-x-[-1]" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[460px] overflow-y-auto pe-1">
                {SERVICES_LIST.map((service) => (
                  <Link
                    key={service.id}
                    href={`${prefix}/services/${service.slug}`}
                    onClick={onClose}
                    className="group flex items-center justify-between p-2.5 rounded-lg border border-transparent hover:border-[var(--line)] hover:bg-[var(--surface-strong)] transition-colors"
                  >
                    <span className="text-xs md:text-sm font-medium text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors line-clamp-1">
                      {isAr ? service.title.ar : service.title.en}
                    </span>
                    <span className="mono-tag text-[10px] px-1.5 py-0.5 rounded bg-[var(--surface-alt)] text-[var(--muted)] group-hover:text-[var(--accent)] border border-[var(--line)]">
                      {service.code}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--line)] flex items-center justify-between text-xs text-[var(--muted)]">
                <Link
                  href={`${prefix}/services`}
                  onClick={onClose}
                  className="hover:text-[var(--accent)] transition-colors flex items-center gap-1 font-mono text-xs"
                >
                  <span>{isAr ? 'عرض كافة الخدمات والتخصصات' : 'View all engineering services'}</span>
                  <ArrowRight size={13} className="rtl:rotate-180" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar inside Overlay */}
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-4 sm:py-6 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--muted)] text-center sm:text-start">
            <div>
              © 2026 Stackway LLC. {isAr ? 'جميع الحقوق محفوظة' : 'All rights reserved.'}
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
              <a
                href="https://wa.me/201202325201"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 font-medium"
              >
                {isAr ? 'واتساب: 01202325201' : 'WhatsApp'}
              </a>
              <a href="mailto:hello@stackway.net" className="hover:text-[var(--accent)]">
                hello@stackway.net
              </a>
              <a href="tel:+201111433787" className="hover:text-[var(--accent)]" dir="ltr">
                +20 111 143 3787
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
