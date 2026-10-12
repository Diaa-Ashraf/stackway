import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { WorkPageView } from '@/components/pages/WorkPageView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selected Work & Case Studies | Stackway',
  description: 'Recent platforms, web systems, SaaS applications, and e-commerce stores designed, built and launched by Stackway.',
};

export default function WorkPage() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <ScrollProgressBar />
        <Header lang="en" />
        <main id="main-content">
          <WorkPageView lang="en" />
        </main>
        <Footer lang="en" />
      </SmoothScroll>
    </ThemeProvider>
  );
}
