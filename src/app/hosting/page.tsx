import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { HostingPageView } from '@/components/pages/HostingPageView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Managed Cloud Hosting & Infrastructure Plans | Stackway',
  description: 'High-speed NVMe storage, LiteSpeed caching, CloudLinux isolation, and 24/7 technical management for high-conversion sites.',
};

export default function HostingPage() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <ScrollProgressBar />
        <Header lang="en" />
        <main id="main-content">
          <HostingPageView lang="en" />
        </main>
        <Footer lang="en" />
      </SmoothScroll>
    </ThemeProvider>
  );
}
