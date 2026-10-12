import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { HostingPageView } from '@/components/pages/HostingPageView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'خطط الاستضافة السحابية المدارة | ستاك واي',
  description: 'استضافة سحابية مدارة بأقراص NVMe فائقة السرعة وخوادم LiteSpeed وعزل CloudLinux مع نسخ احتياطي يومي مجاني.',
};

export default function ArabicHostingPage() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <ScrollProgressBar />
        <Header lang="ar" />
        <main id="main-content">
          <HostingPageView lang="ar" />
        </main>
        <Footer lang="ar" />
      </SmoothScroll>
    </ThemeProvider>
  );
}
