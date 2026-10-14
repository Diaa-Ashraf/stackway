import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { InsightSlugView } from '@/components/pages/InsightSlugView';
import { INSIGHTS_ARTICLES } from '@/content/site-data';

export function InsightDetailPage({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const { slug } = useParams<{ slug: string }>();
  const isAr = lang === 'ar';

  if (!slug) {
    return <Navigate to={isAr ? '/ar/insights' : '/insights'} replace />;
  }

  const article = INSIGHTS_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to={isAr ? '/ar/insights' : '/insights'} replace />;
  }

  const title = isAr
    ? `${article.title.ar} | مقالات ستاك واي`
    : `${article.title.en} | Stackway Insights`;

  const description = isAr ? article.excerpt.ar : article.excerpt.en;

  return (
    <MainLayout lang={lang} title={title} description={description}>
      <InsightSlugView slug={slug} lang={lang} />
    </MainLayout>
  );
}

export default InsightDetailPage;
