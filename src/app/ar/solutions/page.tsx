import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { SolutionsPageView } from '@/components/pages/SolutionsPageView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'حلول الأعمال حسب القطاع | ستاك واي',
  description: 'هياكل برمجية مخصصة لقطاعات التجارة الإلكترونية، ومنصات SaaS، والشركات الاستشارية، وسلاسل الإمداد.',
};

export default function ArabicSolutionsPage() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <ScrollProgressBar />
        <Header lang="ar" />
        <main id="main-content">
          <SolutionsPageView lang="ar" />
        </main>
        <Footer lang="ar" />
      </SmoothScroll>
    </ThemeProvider>
  );
}
