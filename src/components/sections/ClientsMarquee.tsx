'use client';

import React from 'react';
import Image from 'next/image';
import { CLIENT_NAMES, CLIENT_NAMES_AR } from '@/content/site-data';

interface ClientsMarqueeProps {
  lang?: 'en' | 'ar';
}

const CLIENT_IMAGE_LOGOS = [
  { name: { en: 'Kunuz Real Estate', ar: 'كنوز العقارية' }, img: '/images/work/kunuz.webp' },
  { name: { en: 'Tower Top EG', ar: 'تاور توب للديكور' }, img: '/images/work/tower-top.svg' },
  { name: { en: 'Team HM System', ar: 'سيستم كابتن حسام منصور' }, img: '/images/work/team-hm.webp' },
  { name: { en: 'Hossam Mansour Official', ar: 'موقع كابتن حسام منصور' }, img: '/images/work/hossam-mansour.webp' },
  { name: { en: 'SSDDS Society', ar: 'الجمعية السعودية للجلدية' }, img: '/images/work/ssdds.svg' },
  { name: { en: 'Al Tawhid Market', ar: 'سوبرماركت التوحيد' }, img: '/images/work/al-tawheed.webp' },
  { name: { en: 'Regalest Store', ar: 'المتجر الملكي ريجاليست' }, img: '/images/work/regalest.webp' },
  { name: { en: 'Al Safa Petroleum', ar: 'شركة الصفا للبترول' }, img: '/images/work/al-safa.svg' },
  { name: { en: 'El Ghandy Center', ar: 'سنتر الأستاذ محمد الغندي' }, img: '/images/work/elgendy.webp' },
  { name: { en: 'Art Bella', ar: 'آرت بيلا للتشطيبات' }, img: '/images/artbella.webp' },
  { name: { en: 'Perfect Pharma', ar: 'بيرفكت فارما' }, img: '/images/perfectpharma.webp' },
  { name: { en: 'Moataz Pharmacy', ar: 'صيدلية المعتز' }, img: '/images/moataz.webp' },
  { name: { en: 'HEY Studio', ar: 'استوديو هاي' }, img: '/images/hey.webp' },
  { name: { en: 'Salumida', ar: 'سلوميدا' }, img: '/images/salumida.webp' },
  { name: { en: 'Al Amrousi', ar: 'مجموعة العمروسي' }, img: '/images/amrousi.webp' },
  { name: { en: 'Ejaku Rent', ar: 'شركة إيجاركو' }, img: '/images/ejaku.webp' },
  { name: { en: 'Evara Luxury', ar: 'إيفارا' }, img: '/images/evara.webp' },
  { name: { en: 'Twsila Express', ar: 'توصيلة إكسبريس' }, img: '/images/twsila.webp' },
  { name: { en: 'Ronk Digital', ar: 'رونق ديجيتال' }, img: '/images/ronk.webp' },
  { name: { en: 'Farm Market', ar: 'سوبرماركت فارم' }, img: '/images/farm.webp' },
];

export function ClientsMarquee({ lang = 'en' }: ClientsMarqueeProps) {
  const isAr = lang === 'ar';
  const row2 = isAr ? CLIENT_NAMES_AR : CLIENT_NAMES;

  return (
    <section className="py-14 md:py-20 border-b border-[var(--line)] bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <span className="mono-tag text-xs text-[var(--accent)] tracking-widest uppercase">
          {isAr ? '// الشركاء والعملاء' : '// TEAMS THAT BUILD WITH STACKWAY'}
        </span>
        <h3 className="text-xl md:text-2xl font-bold font-heading text-white mt-2">
          {isAr
            ? 'شركات رائدة تعتمد على حلولنا البرمجية'
            : 'Trusted by visionary enterprises across the region'}
        </h3>
      </div>

      {/* Marquee Row 1: Brand Logos with Images (dir="ltr" ensures seamless infinite loop without RTL coordinate breakage) */}
      <div dir="ltr" className="relative w-full overflow-hidden mask-gradient-x mb-4">
        <div className="animate-marquee-left pause-hover flex items-center gap-4 py-2">
          {[...CLIENT_IMAGE_LOGOS, ...CLIENT_IMAGE_LOGOS].map((client, idx) => {
            const clientName = isAr ? client.name.ar : client.name.en;
            return (
              <div
                key={`logo-${idx}`}
                dir={isAr ? 'rtl' : 'ltr'}
                className="px-5 py-3 rounded-xl border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] hover:text-white hover:border-[var(--accent)] hover:bg-[var(--surface-strong)] transition-all duration-200 cursor-default flex items-center gap-3 shrink-0 shadow-xs group"
              >
                <div className="relative w-7 h-7 rounded-md overflow-hidden bg-white/5 p-1 flex items-center justify-center shrink-0">
                  <Image
                    src={client.img}
                    alt={clientName}
                    width={24}
                    height={24}
                    sizes="28px"
                    loading="lazy"
                    unoptimized
                    className="max-h-6 w-auto object-contain brightness-90 group-hover:brightness-100 transition-all"
                  />
                </div>
                <span className="font-heading font-semibold text-sm md:text-base tracking-tight whitespace-nowrap">
                  {clientName}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Marquee Row 2: Right-scrolling client name badges */}
      <div dir="ltr" className="relative w-full overflow-hidden mask-gradient-x">
        <div className="animate-marquee-right pause-hover flex items-center gap-4 py-2">
          {[...row2, ...row2].map((client, idx) => (
            <div
              key={`row2-${idx}`}
              dir={isAr ? 'rtl' : 'ltr'}
              className="px-6 py-3.5 rounded-xl border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] hover:text-white hover:border-[var(--accent)] hover:bg-[var(--surface-strong)] transition-all duration-200 cursor-default flex items-center gap-3 shrink-0 shadow-xs group"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--line-strong)] group-hover:bg-[var(--accent)] transition-colors" />
              <span className="font-heading font-semibold text-sm md:text-base tracking-tight whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
