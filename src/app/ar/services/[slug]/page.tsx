import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { ServiceSlugView } from '@/components/pages/ServiceSlugView';
import { SERVICES_LIST } from '@/content/site-data';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_LIST.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_LIST.find((s) => s.slug === slug);
  if (!service) return { title: 'الخدمة غير موجودة | ستاك واي' };

  return {
    title: `${service.title.ar} (${service.code}) | ستاك واي`,
    description: service.subtitle.ar,
  };
}

export default async function ArabicServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  return (
    <ThemeProvider>
      <SmoothScroll>
        <ScrollProgressBar />
        <Header lang="ar" />
        <main id="main-content">
          <ServiceSlugView slug={slug} lang="ar" />
        </main>
        <Footer lang="ar" />
      </SmoothScroll>
    </ThemeProvider>
  );
}
