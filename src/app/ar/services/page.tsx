import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { ServicesPageView } from '@/components/pages/ServicesPageView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'الخدمات والتخصصات الهندسية | ستاك واي',
  description: '15 تخصصاً رئيسياً تشمل تطوير الويب، والتطبيقات، والبرمجيات الخاصة، والاستضافة السحابية والنمو الرقمي.',
};

export default function ArabicServicesPage() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <ScrollProgressBar />
        <Header lang="ar" />
        <main id="main-content">
          <ServicesPageView lang="ar" />
        </main>
        <Footer lang="ar" />
      </SmoothScroll>
    </ThemeProvider>
  );
}
