import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { StartProjectView } from '@/components/pages/StartProjectView';

export function StartPage({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const isAr = lang === 'ar';
  return (
    <MainLayout
      lang={lang}
      title={
        isAr
          ? 'ابدأ مشروعك الآن | استمارة المتطلبات الهندسية | ستاك واي'
          : 'Start a Project | Stackway Discovery Wizard'
      }
      description={
        isAr
          ? 'حدد نطاق مشروعك البرمجي، وميزانيتك، والجدول الزمني خلال 3 دقائق للحصول على دراسة فنية وعرض سعر تفصيلي.'
          : 'Initiate a discovery inquiry with Stackway engineering. Build your scope, budget, and timeline in 3 minutes.'
      }
    >
      <StartProjectView lang={lang} />
    </MainLayout>
  );
}

export default StartPage;
