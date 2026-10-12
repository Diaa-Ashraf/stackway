'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/components/motion/motion-variants';

interface SectionHeaderProps {
  number: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  number,
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}
    >
      <div className={`flex items-center gap-2 mb-3.5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <span className="mono-tag px-2 py-0.5 rounded border border-[var(--line)] bg-[var(--surface)] text-[var(--accent)] font-semibold">
          {number}
        </span>
        <span className="mono-tag text-[var(--muted)] tracking-wider">
          {eyebrow}
        </span>
      </div>

      <h2 className="section-h2 text-[var(--ink)] mb-3">
        {title}
      </h2>

      {subtitle && (
        <p className="text-base md:text-lg text-[var(--muted)] leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
