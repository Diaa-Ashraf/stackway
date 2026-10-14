import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { ServiceSlugView } from '@/components/pages/ServiceSlugView';
import { SERVICES_LIST } from '@/content/site-data';

export function ServiceDetailPage({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const { slug } = useParams<{ slug: string }>();
  const isAr = lang === 'ar';

  if (!slug) {
    return <Navigate to={isAr ? '/ar/services' : '/services'} replace />;
  }

  const service = SERVICES_LIST.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to={isAr ? '/ar/services' : '/services'} replace />;
  }

  const title = isAr
    ? `${service.title.ar} (${service.code}) | ستاك واي`
    : `${service.title.en} (${service.code}) | Stackway`;

  const description = isAr ? service.subtitle.ar : service.subtitle.en;

  return (
    <MainLayout lang={lang} title={title} description={description}>
      <ServiceSlugView slug={slug} lang={lang} />
    </MainLayout>
  );
}

export default ServiceDetailPage;
