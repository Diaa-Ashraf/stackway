'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TECH_ITEMS, TechItem } from '@/content/site-data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { fadeInUp, staggerContainer } from '@/components/motion/motion-variants';

interface TechnologyProps {
  lang?: 'en' | 'ar';
}

function TechCard({ item, lang }: { item: TechItem; lang: 'en' | 'ar' }) {
  const isAr = lang === 'ar';
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -6;
    const rotY = ((x - centerX) / centerX) * 6;

    setRotate({ x: rotX, y: rotY });
    setSpotlight({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setSpotlight({ x: 0, y: 0, opacity: 0 });
  };

  return (
    <motion.div
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="relative p-5 sm:p-8 rounded-2xl border border-[var(--line)] bg-[#080d14] overflow-hidden shadow-xs hover:border-[var(--accent)]/40 hover:shadow-lg hover:shadow-[var(--accent)]/5 transition-colors group cursor-default"
    >
      {/* Soft spotlight gradient */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(400px circle at ${spotlight.x}px ${spotlight.y}px, rgba(52, 209, 209, 0.12), transparent 70%)`,
        }}
      />

      <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-bold text-[var(--accent)] px-2.5 py-1 rounded bg-[#05060a] border border-[var(--line)]">
            {item.number}
          </span>
          <span className="mono-tag text-[10px] text-[var(--muted)]">
            ENTERPRISE_GRADE
          </span>
        </div>

        <div>
          <h3 className="font-heading font-extrabold text-2xl text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors mb-1">
            {item.name}
          </h3>
          <p className="text-xs font-mono font-medium text-[var(--muted)] mb-3">
            {isAr ? item.role.ar : item.role.en}
          </p>
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            {isAr ? item.description.ar : item.description.en}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Technology({ lang = 'en' }: TechnologyProps) {
  const isAr = lang === 'ar';

  return (
    <section className="py-24 md:py-32 border-b border-[var(--line)] bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="05"
          eyebrow={isAr ? 'البنية التقنية المعتمدة' : 'TECHNOLOGY'}
          title={isAr ? 'مبنية على أسس برمجية مجربة عالمياً.' : 'Built on proven infrastructure.'}
          subtitle={
            isAr
              ? 'المنصات والخوادم التي ندير عملياتنا عليها يومياً، تم اختيارها بعناية لتحقيق أقصى استقرار وأمان وتوسع.'
              : 'The platforms we run on every day, chosen for stability, security and scale.'
          }
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TECH_ITEMS.map((item) => (
            <TechCard key={item.number} item={item} lang={lang} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
