import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { SolutionsPageView } from '@/components/pages/SolutionsPageView';

export function SolutionsPage({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const isAr = lang === 'ar';
  return (
    <MainLayout
      lang={lang}
      title={isAr ? 'حلول الأعمال حسب القطاع | ستاك واي' : 'Industry Solutions & Architecture Blueprints | Stackway'}
      description={
        isAr
          ? 'هياكل برمجية مخصصة لقطاعات التجارة الإلكترونية، ومنصات SaaS، والشركات الاستشارية، وسلاسل الإمداد.'
          : 'Specialized architectures for high-volume E-Commerce, SaaS platforms, professional services, and logistics.'
      }
    >
      <SolutionsPageView lang={lang} />
    </MainLayout>
  );
}

export default SolutionsPage;
