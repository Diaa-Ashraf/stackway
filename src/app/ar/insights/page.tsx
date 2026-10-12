import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { InsightsPageView } from '@/components/pages/InsightsPageView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'المقالات والأفكار الهندسية | ستاك واي',
  description: 'ملاحظات وتجارب حول بناء المنتجات الرقمية، وكتابة نصوص صفحات الهبوط المقنعة، واختيار النطاقات والخوادم.',
};

export default function ArabicInsightsPage() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <ScrollProgressBar />
        <Header lang="ar" />
        <main id="main-content">
          <InsightsPageView lang="ar" />
        </main>
        <Footer lang="ar" />
      </SmoothScroll>
    </ThemeProvider>
  );
}
