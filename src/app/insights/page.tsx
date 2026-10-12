import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { InsightsPageView } from '@/components/pages/InsightsPageView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Engineering Insights & Architecture Notes | Stackway',
  description: 'Notes on building digital products, high-converting copywriting formulas, and infrastructure design.',
};

export default function InsightsPage() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <ScrollProgressBar />
        <Header lang="en" />
        <main id="main-content">
          <InsightsPageView lang="en" />
        </main>
        <Footer lang="en" />
      </SmoothScroll>
    </ThemeProvider>
  );
}
