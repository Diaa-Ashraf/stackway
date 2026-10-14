import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { HostingPageView } from '@/components/pages/HostingPageView';

export function HostingPage({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const isAr = lang === 'ar';
  return (
    <MainLayout
      lang={lang}
      title={isAr ? 'خطط الاستضافة السحابية المدارة | ستاك واي' : 'Managed Cloud Hosting & Infrastructure Plans | Stackway'}
      description={
        isAr
          ? 'استضافة سحابية مدارة بأقراص NVMe فائقة السرعة وخوادم LiteSpeed وعزل CloudLinux مع نسخ احتياطي يومي مجاني.'
          : 'High-speed NVMe storage, LiteSpeed caching, CloudLinux isolation, and 24/7 technical management for high-conversion sites.'
      }
    >
      <HostingPageView lang={lang} />
    </MainLayout>
  );
}

export default HostingPage;
