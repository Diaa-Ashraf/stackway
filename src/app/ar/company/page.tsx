import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { CompanyPageView } from '@/components/pages/CompanyPageView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'عن ستاك واي ومبادئنا الهندسية | ستاك واي',
  description: 'تعرف على ستاك واي، وقصة الـ 11 عاماً في بناء المنصات والأنظمة السحابية، ومبادئنا في خدمة العملاء.',
};

export default function ArabicCompanyPage() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <ScrollProgressBar />
        <Header lang="ar" />
        <main id="main-content">
          <CompanyPageView lang="ar" />
        </main>
        <Footer lang="ar" />
      </SmoothScroll>
    </ThemeProvider>
  );
}
