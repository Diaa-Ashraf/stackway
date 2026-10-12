import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { CompanyPageView } from '@/components/pages/CompanyPageView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company & Principles | Stackway',
  description: 'Learn about Stackway, our 11-year history building systems for businesses, engineering values, and infrastructure partners.',
};

export default function CompanyPage() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <ScrollProgressBar />
        <Header lang="en" />
        <main id="main-content">
          <CompanyPageView lang="en" />
        </main>
        <Footer lang="en" />
      </SmoothScroll>
    </ThemeProvider>
  );
}
