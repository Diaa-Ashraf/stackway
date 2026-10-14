import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { InsightsPageView } from '@/components/pages/InsightsPageView';

export function InsightsPage({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const isAr = lang === 'ar';
  return (
    <MainLayout
      lang={lang}
      title={isAr ? 'المقالات والأفكار الهندسية | ستاك واي' : 'Engineering Insights & Architecture Notes | Stackway'}
      description={
        isAr
          ? 'ملاحظات وتجارب حول بناء المنتجات الرقمية، وكتابة نصوص صفحات الهبوط المقنعة، واختيار النطاقات والخوادم.'
          : 'Notes on building digital products, high-converting copywriting formulas, and infrastructure design.'
      }
    >
      <InsightsPageView lang={lang} />
    </MainLayout>
  );
}

export default InsightsPage;
