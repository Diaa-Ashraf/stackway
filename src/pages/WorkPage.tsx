import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { WorkPageView } from '@/components/pages/WorkPageView';

export function WorkPage({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const isAr = lang === 'ar';
  return (
    <MainLayout
      lang={lang}
      title={isAr ? 'أعمالنا ومشاريعنا | ستاك واي' : 'Selected Work & Case Studies | Stackway'}
      description={
        isAr
          ? 'منصات ومواقع وتطبيقات سحابية قمنا بتصميمها وتطويرها وإطلاقها لعملائنا في مختلف القطاعات.'
          : 'Recent platforms, web systems, SaaS applications, and e-commerce stores designed, built and launched by Stackway.'
      }
    >
      <WorkPageView lang={lang} />
    </MainLayout>
  );
}

export default WorkPage;
