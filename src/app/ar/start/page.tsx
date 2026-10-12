import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { StartProjectView } from '@/components/pages/StartProjectView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ابدأ مشروعك الآن | استمارة المتطلبات الهندسية | ستاك واي',
  description: 'حدد نطاق مشروعك البرمجي، وميزانيتك، والجدول الزمني خلال 3 دقائق للحصول على دراسة فنية وعرض سعر تفصيلي.',
};

export default function ArabicStartPage() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <ScrollProgressBar />
        <Header lang="ar" />
        <main id="main-content">
          <StartProjectView lang="ar" />
        </main>
        <Footer lang="ar" />
      </SmoothScroll>
    </ThemeProvider>
  );
}
