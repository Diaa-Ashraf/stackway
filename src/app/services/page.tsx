import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { ServicesPageView } from '@/components/pages/ServicesPageView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Capabilities | Stackway',
  description: 'Fifteen core disciplines spanning web development, mobile apps, SaaS engineering, cloud infrastructure, and growth.',
};

export default function ServicesPage() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <ScrollProgressBar />
        <Header lang="en" />
        <main id="main-content">
          <ServicesPageView lang="en" />
        </main>
        <Footer lang="en" />
      </SmoothScroll>
    </ThemeProvider>
  );
}
