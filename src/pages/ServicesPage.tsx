import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { ServicesPageView } from '@/components/pages/ServicesPageView';

export function ServicesPage({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const isAr = lang === 'ar';
  return (
    <MainLayout
      lang={lang}
      title={isAr ? 'الخدمات والتخصصات الهندسية | ستاك واي' : 'Services & Capabilities | Stackway'}
      description={
        isAr
          ? '15 تخصصاً رئيسياً تشمل تطوير الويب، والتطبيقات، والبرمجيات الخاصة، والاستضافة السحابية والنمو الرقمي.'
          : 'Fifteen core disciplines spanning web development, mobile apps, SaaS engineering, cloud infrastructure, and growth.'
      }
    >
      <ServicesPageView lang={lang} />
    </MainLayout>
  );
}

export default ServicesPage;
