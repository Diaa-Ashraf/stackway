'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, ArrowUpRight, ChevronDown, Server, Mail, Shield, HardDrive, ArrowRight, Search, Moon, User } from 'lucide-react';
import { MenuOverlay } from './MenuOverlay';
import { SERVICES_LIST } from '@/content/site-data';

interface HeaderProps {
  lang?: 'en' | 'ar';
}

export function Header({ lang = 'en' }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isAr = lang === 'ar' || pathname.startsWith('/ar');
  const prefix = isAr ? '/ar' : '';

  useEffect(() => {
    let prev = false;
    const handleScroll = () => {
      const next = window.scrollY > 30;
      if (next !== prev) {
        prev = next;
        setScrolled(next);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setServicesOpen(false);
  }, [pathname]);

  const currentPathWithoutLang = isAr
    ? pathname.replace(/^\/ar/, '') || '/'
    : pathname;
  const switchLangHref = isAr
    ? currentPathWithoutLang
    : `/ar${currentPathWithoutLang === '/' ? '' : currentPathWithoutLang}`;

  const groups = [
    { key: 'technology', label: isAr ? 'التكنولوجيا' : 'Technology' },
    { key: 'infrastructure', label: isAr ? 'البنية التحتية' : 'Infrastructure' },
    { key: 'growth', label: isAr ? 'النمو الرقمي' : 'Growth' },
    { key: 'brand', label: isAr ? 'الهوية والعلامة' : 'Brand' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#05060a]/90 backdrop-blur-xl py-3 border-b border-[var(--line)] shadow-xl'
            : 'bg-transparent py-4 md:py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3 sm:gap-4">
          {/* Logo with 3D Circular Badge & Modern Geometric Wordmark */}
          <Link
            href={prefix || '/'}
            className="group flex items-center gap-2 sm:gap-3 transition-transform duration-200 hover:scale-[1.02] shrink-0"
            aria-label="Stackway home"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#d4af37]/60 shadow-[0_0_15px_rgba(212,175,55,0.3)] shrink-0 bg-black">
              <Image
                src="/images/stackway-brand-logo.webp"
                alt="Stackway"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col" dir="ltr">
              <span className="font-heading font-black text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-white via-slate-100 to-[#d4af37] bg-clip-text text-transparent select-none leading-none">
                STACKWAY<span className="text-[#d4af37]">.</span>
              </span>
              <span className="hidden sm:block text-[8px] sm:text-[9px] font-mono tracking-[0.2em] text-[#d4af37]/80 uppercase mt-0.5 select-none">
                BUILD • GROW • TOGETHER
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (Matching Webonio Primary Navigation) */}
          <nav aria-label="Primary" className="mx-auto hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Home Link */}
            <Link
              href={prefix || '/'}
              className={`px-3.5 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors ${
                pathname === '/' || pathname === '/ar'
                  ? 'text-white bg-[var(--surface-strong)]'
                  : 'text-[var(--muted)] hover:text-white hover:bg-[var(--surface)]'
              }`}
            >
              {isAr ? 'الرئيسية' : 'Home'}
            </Link>

            {/* Services Dropdown (Mega-Menu) */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
                setServicesOpen(true);
              }}
              onMouseLeave={() => {
                servicesTimeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
              }}
            >
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors cursor-pointer ${
                  servicesOpen || pathname.includes('/services')
                    ? 'text-white bg-[var(--surface-strong)]'
                    : 'text-[var(--muted)] hover:text-white hover:bg-[var(--surface)]'
                }`}
              >
                <span>{isAr ? 'الخدمات' : 'Services'}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Mega-menu Popover Panel */}
              {servicesOpen && (
                <div
                  className="fixed start-1/2 top-[4.5rem] -translate-x-1/2 rtl:translate-x-1/2 z-50 pt-2 w-[min(64rem,calc(100vw-3rem))]"
                  onMouseEnter={() => {
                    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
                  }}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="rounded-2xl border border-[var(--line-strong)] bg-[#080d14]/98 backdrop-blur-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)] overflow-hidden">
                    {/* Header bar inside mega menu */}
                    <div className="flex items-center justify-between border-b border-[var(--line)] px-6 py-3.5 bg-white/[0.02]">
                      <span className="font-mono text-xs tracking-wider uppercase text-[var(--accent)] font-semibold">
                        {isAr ? '// خمسة عشر تخصصاً هندسياً، فريق متكامل' : '// FIFTEEN SERVICES, ONE TEAM.'}
                      </span>
                      <Link
                        href={`${prefix}/services`}
                        onClick={() => setServicesOpen(false)}
                        className="text-xs font-mono text-[var(--muted)] hover:text-white flex items-center gap-1"
                      >
                        <span>{isAr ? 'عرض كافة الخدمات' : 'View all capabilities'}</span>
                        <ArrowUpRight size={12} className="rtl:scale-x-[-1]" />
                      </Link>
                    </div>

                    {/* 4 Columns Grid */}
                    <div className="grid grid-cols-4 gap-4 p-6">
                      {groups.map((group) => {
                        const items = SERVICES_LIST.filter((s) => s.group === group.key);
                        return (
                          <div key={group.key} className="space-y-2.5">
                            <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--muted)]/80 pb-2 border-b border-[var(--line)]/50">
                              {group.label}
                            </h4>
                            <ul className="space-y-1.5">
                              {items.map((svc) => (
                                <li key={svc.id}>
                                  <Link
                                    href={`${prefix}/services/${svc.slug}`}
                                    onClick={() => setServicesOpen(false)}
                                    className="group flex items-center justify-between p-2 rounded-lg hover:bg-[var(--surface-strong)] transition-all"
                                  >
                                    <span className="text-xs font-medium text-[var(--ink)]/90 group-hover:text-[var(--accent)] transition-colors line-clamp-1">
                                      {isAr ? svc.title.ar : svc.title.en}
                                    </span>
                                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/40 text-[var(--muted)] group-hover:text-[var(--accent)] border border-[var(--line)]">
                                      {svc.code}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Link */}
            <Link
              href={`${prefix}/solutions`}
              className={`px-3.5 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors ${
                pathname.includes('/solutions')
                  ? 'text-white bg-[var(--surface-strong)]'
                  : 'text-[var(--muted)] hover:text-white hover:bg-[var(--surface)]'
              }`}
            >
              {isAr ? 'الحلول' : 'Solutions'}
            </Link>

            {/* Work Link */}
            <Link
              href={`${prefix}/work`}
              className={`px-3.5 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors ${
                pathname.includes('/work')
                  ? 'text-white bg-[var(--surface-strong)]'
                  : 'text-[var(--muted)] hover:text-white hover:bg-[var(--surface)]'
              }`}
            >
              {isAr ? 'أعمالنا' : 'Work'}
            </Link>

            {/* Company Link */}
            <Link
              href={`${prefix}/company`}
              className={`px-3.5 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors ${
                pathname.includes('/company')
                  ? 'text-white bg-[var(--surface-strong)]'
                  : 'text-[var(--muted)] hover:text-white hover:bg-[var(--surface)]'
              }`}
            >
              {isAr ? 'الشركة' : 'Company'}
            </Link>

            {/* Insights Link */}
            <Link
              href={`${prefix}/insights`}
              className={`px-3.5 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors ${
                pathname.includes('/insights')
                  ? 'text-white bg-[var(--surface-strong)]'
                  : 'text-[var(--muted)] hover:text-white hover:bg-[var(--surface)]'
              }`}
            >
              {isAr ? 'المقالات' : 'Insights'}
            </Link>
          </nav>

          {/* Right Controls matching Webonio layout */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Search Icon Trigger */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Search services, pages"
              className="p-2 rounded-md text-[var(--muted)] hover:text-white hover:bg-[var(--surface)] transition-colors cursor-pointer"
            >
              <Search size={17} />
            </button>

            {/* Language Switch */}
            <Link
              href={switchLangHref}
              className="px-2.5 py-1.5 rounded-md font-mono text-xs font-semibold text-[var(--muted)] hover:text-white hover:bg-[var(--surface)] transition-colors"
              title={isAr ? 'Switch to English' : 'التحويل إلى العربية'}
            >
              {isAr ? 'EN' : 'AR'}
            </Link>

            {/* Theme / Night indicator */}
            <div
              className="p-2 text-[var(--muted)] select-none hidden sm:block"
              title="Night Mode"
            >
              <Moon size={16} />
            </div>

            {/* Login / Register Outline Button matching Webonio */}
            <a
              href="https://clients.stackway.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-[var(--line-strong)] bg-black/25 text-white hover:border-[var(--accent)]/50 hover:bg-[var(--surface-strong)] text-xs font-semibold tracking-wide backdrop-blur-sm transition-all"
              title={isAr ? 'دخول / تسجيل حساب' : 'Login / Register'}
            >
              <User size={14} className="text-[var(--accent)]" />
              <span>{isAr ? 'تسجيل الدخول' : 'Login / Register'}</span>
            </a>

            {/* Start a Project (Primary Solid Cyan Button matching Webonio) */}
            <Link
              href={`${prefix}/start`}
              className="group hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--accent)] text-[#05060a] text-xs font-bold hover:brightness-110 shadow-[0_4px_20px_-4px_rgba(52,209,209,0.45)] transition-all duration-200"
            >
              <span>{isAr ? 'ابدأ مشروعاً' : 'Start a Project'}</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 rtl:rotate-180"
              />
            </Link>

            {/* Menu Trigger Button */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex items-center gap-1.5 px-3 py-2 rounded-md border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] hover:border-[var(--accent)]/50 transition-all cursor-pointer"
            >
              <Menu size={16} />
              <span className="text-xs font-semibold uppercase tracking-wider hidden md:inline">
                {isAr ? 'القائمة' : 'Menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay */}
      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} lang={lang} />
    </>
  );
}
