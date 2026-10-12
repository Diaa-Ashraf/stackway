import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { WorkPageView } from '@/components/pages/WorkPageView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'أعمالنا ومشاريعنا | ستاك واي',
  description: 'منصات ومواقع وتطبيقات سحابية قمنا بتصميمها وتطويرها وإطلاقها لعملائنا في مختلف القطاعات.',
};

export default function ArabicWorkPage() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <ScrollProgressBar />
        <Header lang="ar" />
        <main id="main-content">
          <WorkPageView lang="ar" />
        </main>
        <Footer lang="ar" />
      </SmoothScroll>
    </ThemeProvider>
  );
}
