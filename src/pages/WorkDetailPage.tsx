import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { WorkSlugView } from '@/components/pages/WorkSlugView';
import { getProjectBySlug } from '@/content/projects-showcase';

export function WorkDetailPage({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const { slug } = useParams<{ slug: string }>();
  const isAr = lang === 'ar';

  if (!slug) {
    return <Navigate to={isAr ? '/ar/work' : '/work'} replace />;
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to={isAr ? '/ar/work' : '/work'} replace />;
  }

  const title = isAr
    ? `${project.titleAr}: ${project.category.ar} | ستاك واي`
    : `${project.title}: ${project.category.en} | Stackway`;

  const description = isAr ? project.overview.ar : project.overview.en;

  return (
    <MainLayout lang={lang} title={title} description={description}>
      <WorkSlugView slug={slug} lang={lang} />
    </MainLayout>
  );
}

export default WorkDetailPage;
