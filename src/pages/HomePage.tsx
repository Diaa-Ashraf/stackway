import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Hero } from '@/components/sections/Hero';
import { ClientsMarquee } from '@/components/sections/ClientsMarquee';
import { WhatWeBuild } from '@/components/sections/WhatWeBuild';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { Process } from '@/components/sections/Process';
import { Technology } from '@/components/sections/Technology';
import { DigitalInfrastructure } from '@/components/sections/DigitalInfrastructure';
import { WhyWebonio } from '@/components/sections/WhyWebonio';
import { Testimonials } from '@/components/sections/Testimonials';
import { InsightsSection } from '@/components/sections/InsightsSection';
import { FinalCta } from '@/components/sections/FinalCta';

interface HomePageProps {
  lang?: 'en' | 'ar';
}

export function HomePage({ lang = 'en' }: HomePageProps) {
  const isAr = lang === 'ar';

  return (
    <MainLayout
      lang={lang}
      title={
        isAr
          ? 'ستاك واي | المنتجات الرقمية والأنظمة البرمجية للشركات'
          : 'Stackway | Digital Products & Real Results'
      }
      description={
        isAr
          ? 'تصميم وتطوير المواقع والمنصات وتطبيقات الجوال، والبرمجيات الخاصة، والاستضافة السحابية المدارة.'
          : 'Websites, mobile apps, e-commerce, custom software, and managed cloud hosting engineered for high-performance businesses.'
      }
    >
      <Hero lang={lang} />
      <ClientsMarquee lang={lang} />
      <div className="section-deferred">
        <WhatWeBuild lang={lang} />
      </div>
      <div className="section-deferred">
        <SelectedWork lang={lang} />
      </div>
      <div className="section-deferred">
        <Process lang={lang} />
      </div>
      <div className="section-deferred">
        <Technology lang={lang} />
      </div>
      <div className="section-deferred">
        <DigitalInfrastructure lang={lang} />
      </div>
      <div className="section-deferred">
        <WhyWebonio lang={lang} />
      </div>
      <div className="section-deferred">
        <Testimonials lang={lang} />
      </div>
      <div className="section-deferred">
        <InsightsSection lang={lang} />
      </div>
      <div className="section-deferred">
        <FinalCta lang={lang} />
      </div>
    </MainLayout>
  );
}

export default HomePage;
