import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { SolutionsPageView } from '@/components/pages/SolutionsPageView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industry Solutions & Architecture Blueprints | Stackway',
  description: 'Specialized architectures for high-volume E-Commerce, SaaS platforms, professional services, and logistics.',
};

export default function SolutionsPage() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <ScrollProgressBar />
        <Header lang="en" />
        <main id="main-content">
          <SolutionsPageView lang="en" />
        </main>
        <Footer lang="en" />
      </SmoothScroll>
    </ThemeProvider>
  );
}
