'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { WHY_POINTS, STATS_LIST } from '@/content/site-data';
import { SectionHeader } from '@/components/ui/SectionHeader';

interface WhyWebonioProps {
  lang?: 'en' | 'ar';
}

function StatCounter({
  target,
  label,
}: {
  target: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    if (target.includes('/')) {
      // Like "24/7"
      setDisplayValue(target);
      return;
    }

    const num = parseInt(target, 10);
    if (isNaN(num)) {
      setDisplayValue(target);
      return;
    }

    let start = 0;
    const duration = 1600;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * num);
      setDisplayValue(current.toString());

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setDisplayValue(num.toString());
      }
    };

    requestAnimationFrame(update);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center p-4 sm:p-6 md:p-8 rounded-2xl border border-[var(--line)] bg-[#080d14] shadow-xs hover:border-[var(--accent)]/40 transition-colors duration-300">
      <div className="font-heading font-black text-3xl sm:text-4xl md:text-6xl text-[var(--ink)] mb-2 tracking-tight">
        {displayValue}
        {target !== '24/7' && <span className="text-[var(--accent)]">+</span>}
      </div>
      <div className="text-xs md:text-sm text-[var(--muted)] font-medium max-w-xs mx-auto leading-relaxed">
        {label}
      </div>
    </div>
  );
}

export function WhyWebonio({ lang = 'en' }: WhyWebonioProps) {
  const isAr = lang === 'ar';

  return (
    <section className="py-24 md:py-32 border-b border-[var(--line)] bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="07"
          eyebrow={isAr ? 'القيمة والشراكة' : 'WHY STACKWAY'}
          title={isAr ? 'ما تحصل عليه عند العمل معنا.' : 'What you get when you work with us.'}
          subtitle={
            isAr
              ? 'نهج هندسي رصين يجمع بين جودة الكود البرمجي وصلابة البنية التحتية، لتحقيق نتائج أعمال قابلة للقياس.'
              : 'A disciplined, engineering-first partnership built for lasting scale and zero compromise.'
          }
        />

        {/* 6 Points with hairline reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-20">
          {WHY_POINTS.map((pt, idx) => (
            <motion.div
              key={pt.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="relative pt-6 group"
            >
              {/* Hairline that draws left-to-right */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[var(--accent)] to-[var(--line)] origin-left rtl:origin-right"
              />

              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs font-bold text-[var(--accent)]">
                  {pt.number}
                </span>
                <h3 className="font-heading font-bold text-lg md:text-xl text-[var(--ink)]">
                  {isAr ? pt.title.ar : pt.title.en}
                </h3>
              </div>

              <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed">
                {isAr ? pt.text.ar : pt.text.en}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Row with count-ups */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {STATS_LIST.map((stat, i) => (
            <StatCounter
              key={i}
              target={stat.value}
              label={isAr ? stat.label.ar : stat.label.en}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export const WhyStackway = WhyWebonio;
export type WhyStackwayProps = WhyWebonioProps;
