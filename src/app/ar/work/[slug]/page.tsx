import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { WorkSlugView } from '@/components/pages/WorkSlugView';
import { PROJECTS_SHOWCASE, getProjectBySlug } from '@/content/projects-showcase';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS_SHOWCASE.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'المشروع غير موجود | ستاك واي' };

  return {
    title: `${project.titleAr}: ${project.category.ar} | ستاك واي`,
    description: project.overview.ar,
  };
}

export default async function ArabicWorkDetailPage({ params }: Props) {
  const { slug } = await params;
  return (
    <ThemeProvider>
      <SmoothScroll>
        <ScrollProgressBar />
        <Header lang="ar" />
        <main id="main-content">
          <WorkSlugView slug={slug} lang="ar" />
        </main>
        <Footer lang="ar" />
      </SmoothScroll>
    </ThemeProvider>
  );
}
