'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_LIST } from '@/content/site-data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { ArrowUpRight } from 'lucide-react';

interface WhatWeBuildProps {
  lang?: 'en' | 'ar';
}

export function WhatWeBuild({ lang = 'en' }: WhatWeBuildProps) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';
  const [selectedId, setSelectedId] = useState<string>(SERVICES_LIST[0].id);
  const [userInteracted, setUserInteracted] = useState(false);
  const autoTimerRef = useRef<NodeJS.Timeout | null>(null);

  const selectedService = SERVICES_LIST.find((s) => s.id === selectedId) || SERVICES_LIST[0];

  useEffect(() => {
    if (userInteracted) return;

    autoTimerRef.current = setInterval(() => {
      setSelectedId((prev) => {
        const currentIndex = SERVICES_LIST.findIndex((s) => s.id === prev);
        const nextIndex = (currentIndex + 1) % SERVICES_LIST.length;
        return SERVICES_LIST[nextIndex].id;
      });
    }, 6000);

    return () => {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    };
  }, [userInteracted]);

  const handleSelect = (id: string) => {
    setUserInteracted(true);
    setSelectedId(id);
  };

  const groups = [
    { key: 'technology', label: isAr ? 'التكنولوجيا البرمجية' : 'Technology' },
    { key: 'infrastructure', label: isAr ? 'البنية التحتية والخدمات' : 'Infrastructure & Digital Services' },
    { key: 'growth', label: isAr ? 'النمو والتسويق' : 'Growth' },
    { key: 'brand', label: isAr ? 'الهوية والمحتوى' : 'Brand' },
  ];

  return (
    <section id="services" className="py-24 md:py-32 border-b border-[var(--line)] bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="02"
          eyebrow={isAr ? 'مجالات العمل والخدمات' : 'WHAT WE BUILD'}
          title={isAr ? 'كل ما تحتاجه للبناء والإطلاق والنمو.' : 'Everything you need to build, launch and grow.'}
          subtitle={
            isAr
              ? 'خمس عشرة خدمة متخصصة، تحت إشراف فريق هندسي واحد. اختر التخصص لتكتشف كيف نجسده على أرض الواقع.'
              : 'Fifteen services, one team. Choose a capability to see how it takes shape.'
          }
        />

        {/* Mobile Horizontal Scroll-Snap Chips */}
        <div className="lg:hidden flex overflow-x-auto gap-2 pb-4 mb-6 -mx-4 px-4 sm:-mx-6 sm:px-6 no-scrollbar mask-gradient-x">
          {SERVICES_LIST.map((service) => {
            const isSelected = service.id === selectedId;
            return (
              <button
                key={service.id}
                onClick={() => handleSelect(service.id)}
                className={`shrink-0 px-3.5 sm:px-4 py-2 rounded-lg border text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-[var(--accent)] text-[var(--stackway-black)] font-bold border-[var(--accent)]'
                    : 'bg-[var(--surface)] text-[var(--muted)] border-[var(--line)]'
                }`}
              >
                <span className="font-mono me-1.5 opacity-70">{service.number}</span>
                <span>{isAr ? service.title.ar : service.title.en}</span>
              </button>
            );
          })}
        </div>

        {/* Desktop Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Grouped Vertical Tabs */}
          <div className="hidden lg:block lg:col-span-5 space-y-8 pr-4">
            {groups.map((group) => {
              const servicesInGroup = SERVICES_LIST.filter((s) => s.group === group.key);

              return (
                <div key={group.key} className="space-y-2">
                  <span className="mono-tag text-[11px] text-[var(--muted)] tracking-wider uppercase px-3">
                    // {group.label}
                  </span>
                  <div className="space-y-1">
                    {servicesInGroup.map((service) => {
                      const isSelected = service.id === selectedId;

                      return (
                        <button
                          key={service.id}
                          onClick={() => handleSelect(service.id)}
                          className={`relative w-full text-start px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                            isSelected ? 'text-white' : 'text-[var(--muted)] hover:text-white hover:bg-[var(--surface)]'
                          }`}
                        >
                          {isSelected && (
                            <motion.div
                              layoutId="activeServiceTabPill"
                              className="absolute inset-0 bg-[var(--surface-strong)] border border-[var(--line-strong)] rounded-xl -z-10 shadow-xs"
                              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                          )}

                          <div className="flex items-center gap-3">
                            <span
                              className={`font-mono text-xs font-semibold ${
                                isSelected ? 'text-[var(--accent)]' : 'text-[var(--muted)]'
                              }`}
                            >
                              {service.number}
                            </span>
                            <span className="font-medium text-sm md:text-base">
                              {isAr ? service.title.ar : service.title.en}
                            </span>
                          </div>

                          <span
                            className={`mono-tag text-[10px] px-2 py-0.5 rounded border ${
                              isSelected
                                ? 'bg-[var(--accent-light)] border-[var(--accent)]/30 text-[var(--accent)] font-bold'
                                : 'bg-[var(--surface)] border-[var(--line)] text-[var(--muted)]'
                            }`}
                          >
                            {service.code}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            <div className="pt-4">
              <Link
                href={`${prefix}/services`}
                className="inline-flex items-center gap-2 text-sm font-mono text-[var(--accent)] hover:underline"
              >
                <span>{isAr ? 'عرض كافة الخدمات بتفاصيلها الكاملة' : 'Explore all capabilities & scopes'}</span>
                <ArrowUpRight size={14} className="rtl:scale-x-[-1]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Sticky Detail Panel */}
          <div className="lg:col-span-7 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="p-5 sm:p-8 md:p-12 rounded-3xl border border-[var(--line)] bg-[#080d14] shadow-xl flex flex-col justify-between min-h-[420px] md:min-h-[500px]"
              >
                {/* Top Meta */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="mono-tag text-xs font-bold text-[var(--accent)] px-3 py-1 rounded-full bg-[var(--accent-light)] border border-[var(--accent)]/30">
                      {selectedService.number} / {selectedService.code}
                    </span>
                    <span className="mono-tag text-xs text-[var(--muted)]">
                      {isAr ? selectedService.groupName.ar : selectedService.groupName.en}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-white mb-4">
                    {isAr ? selectedService.title.ar : selectedService.title.en}
                  </h3>

                  <p className="text-base md:text-lg text-[var(--ink)]/90 font-medium mb-3 leading-relaxed">
                    {isAr ? selectedService.subtitle.ar : selectedService.subtitle.en}
                  </p>

                  <p className="text-xs sm:text-sm md:text-base text-[var(--muted)] mb-8 leading-relaxed">
                    {isAr ? selectedService.description.ar : selectedService.description.en}
                  </p>

                  {/* Deliverables Bullet List */}
                  <div className="space-y-2.5 mb-8 sm:mb-10">
                    <span className="mono-tag text-xs text-[var(--muted)] tracking-wider uppercase block mb-1">
                      {isAr ? '// مخرجات التنفيذ' : '// WHAT WE DELIVER'}
                    </span>
                    {(isAr ? selectedService.deliverables.ar : selectedService.deliverables.en).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs md:text-sm text-[var(--ink)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Abstract Visual representation */}
                <div className="my-4 sm:my-6 p-4 sm:p-6 rounded-2xl border border-[var(--line)] bg-[#05060a] overflow-hidden relative">
                  <div className="flex items-center justify-between mb-3 border-b border-[var(--line)] pb-2 text-[10px] font-mono text-[var(--muted)]">
                    <span>SYSTEM_MODULE // {selectedService.code}</span>
                    <span className="text-[var(--accent)]">ONLINE // 99.9%</span>
                  </div>

                  <div className="h-32 flex items-center justify-center">
                    {selectedService.iconType === 'browser' && (
                      <div className="w-full h-full border border-dashed border-[var(--line)] rounded-lg p-3 flex flex-col justify-between bg-[var(--surface)]">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-400" />
                          <div className="w-2 h-2 rounded-full bg-amber-400" />
                          <div className="w-2 h-2 rounded-full bg-emerald-400" />
                          <div className="h-2 w-36 bg-[var(--line)] rounded-full ms-2" />
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="h-12 bg-[var(--accent-light)] border border-[var(--accent)]/30 rounded" />
                          <div className="h-12 bg-[var(--line)]/50 rounded" />
                          <div className="h-12 bg-[var(--line)]/50 rounded" />
                        </div>
                      </div>
                    )}

                    {selectedService.iconType === 'phone' && (
                      <div className="w-36 h-28 border-2 border-[var(--line)] rounded-2xl p-2 flex flex-col justify-between bg-[var(--surface)]">
                        <div className="w-8 h-1 bg-[var(--line)] rounded-full mx-auto" />
                        <div className="space-y-1.5">
                          <div className="h-2 w-full bg-[var(--accent-light)] rounded" />
                          <div className="h-2 w-3/4 bg-[var(--line)] rounded" />
                        </div>
                        <div className="w-4 h-4 rounded-full bg-[var(--accent)] mx-auto" />
                      </div>
                    )}

                    {selectedService.iconType === 'cart' && (
                      <div className="flex items-center gap-4">
                        <div className="p-4 rounded-xl border border-[var(--line)] bg-[var(--surface)] flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[var(--accent)] text-[var(--stackway-black)] flex items-center justify-center font-bold text-xs">
                            SHOP
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white">1-Click Fast Checkout</div>
                            <div className="text-[10px] text-emerald-400 font-mono">Conversion: 4.8%</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedService.iconType === 'nodes' && (
                      <div className="flex items-center gap-4">
                        <div className="px-3 py-1.5 rounded-lg border border-[var(--accent)] bg-[var(--accent-light)] text-xs font-mono text-[var(--accent)]">
                          Core ERP
                        </div>
                        <div className="w-8 h-0.5 bg-[var(--accent)] animate-pulse" />
                        <div className="px-3 py-1.5 rounded-lg border border-[var(--line)] bg-[var(--surface)] text-xs font-mono">
                          API Gateway
                        </div>
                        <div className="w-8 h-0.5 bg-[var(--line)]" />
                        <div className="px-3 py-1.5 rounded-lg border border-[var(--line)] bg-[var(--surface)] text-xs font-mono">
                          Microservices
                        </div>
                      </div>
                    )}

                    {selectedService.iconType !== 'browser' &&
                      selectedService.iconType !== 'phone' &&
                      selectedService.iconType !== 'cart' &&
                      selectedService.iconType !== 'nodes' && (
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] text-xs font-mono">
                            <span className="text-[var(--accent)] font-bold">{selectedService.code}</span> :: ACTIVE PROTOCOL
                          </div>
                        </div>
                      )}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between">
                  <Button
                    href={`${prefix}/services/${selectedService.slug}`}
                    variant="primary"
                    size="md"
                  >
                    {isAr ? `استكشف ${selectedService.title.ar}` : `Explore ${selectedService.title.en}`}
                  </Button>

                  <span className="text-xs font-mono text-[var(--muted)]">
                    EST_TIME // 2-4 WEEKS
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
