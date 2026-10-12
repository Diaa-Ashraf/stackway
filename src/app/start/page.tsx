import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { StartProjectView } from '@/components/pages/StartProjectView';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Start a Project | Stackway Discovery Wizard',
  description: 'Initiate a discovery inquiry with Stackway engineering. Build your scope, budget, and timeline in 3 minutes.',
};

export default function StartPage() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <ScrollProgressBar />
        <Header lang="en" />
        <main id="main-content">
          <StartProjectView lang="en" />
        </main>
        <Footer lang="en" />
      </SmoothScroll>
    </ThemeProvider>
  );
}
