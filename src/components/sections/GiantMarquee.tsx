'use client';

import React, { useEffect, useState } from 'react';

interface GiantMarqueeProps {
  lang?: 'en' | 'ar';
}

export function GiantMarquee({ lang = 'en' }: GiantMarqueeProps) {
  const isAr = lang === 'ar';
  const phrase = isAr
    ? 'stackway — منتجات رقمية — نتائج حقيقية — '
    : 'stackway — digital products — real results — ';

  const [scrollDir, setScrollDir] = useState<'left' | 'right'>('left');

  useEffect(() => {
    let lastScroll = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll) {
        setScrollDir('left');
      } else if (currentScroll < lastScroll) {
        setScrollDir('right');
      }
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div dir="ltr" className="py-6 md:py-10 overflow-hidden border-b border-[var(--line)] bg-[#05060a] select-none">
      <div
        className={`flex whitespace-nowrap will-change-transform ${
          scrollDir === 'left' ? 'animate-marquee-giant' : 'animate-marquee-right'
        } pause-hover`}
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-[10vw] font-black tracking-tighter uppercase font-heading text-transparent transition-all duration-300"
            style={{
              WebkitTextStroke: '1px rgba(156, 163, 175, 0.25)',
              opacity: 0.35,
            }}
          >
            {phrase}
          </span>
        ))}
      </div>
    </div>
  );
}
