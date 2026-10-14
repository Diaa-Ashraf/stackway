import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { CompanyPageView } from '@/components/pages/CompanyPageView';

export function CompanyPage({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const isAr = lang === 'ar';
  return (
    <MainLayout
      lang={lang}
      title={isAr ? 'عن ستاك واي ومبادئنا الهندسية | ستاك واي' : 'Company & Principles | Stackway'}
      description={
        isAr
          ? 'تعرف على ستاك واي، وقصة الـ 11 عاماً في بناء المنصات والأنظمة السحابية، ومبادئنا في خدمة العملاء.'
          : 'Learn about Stackway, our 11-year history building systems for businesses, engineering values, and infrastructure partners.'
      }
    >
      <CompanyPageView lang={lang} />
    </MainLayout>
  );
}

export default CompanyPage;
