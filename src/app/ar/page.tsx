import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

import { Hero } from '@/components/sections/Hero';
import { ClientsMarquee } from '@/components/sections/ClientsMarquee';
import { WhatWeBuild } from '@/components/sections/WhatWeBuild';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { Process } from '@/components/sections/Process';
import { Technology } from '@/components/sections/Technology';
import { DigitalInfrastructure } from '@/components/sections/DigitalInfrastructure';
import { WhyWebonio } from '@/components/sections/WhyWebonio';
import { Testimonials } from '@/components/sections/Testimonials';
import { InsightsSection } from '@/components/sections/InsightsSection';
import { FinalCta } from '@/components/sections/FinalCta';

export default function ArabicHomePage() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <ScrollProgressBar />
        <Header lang="ar" />
        <main id="main-content" tabIndex={-1}>
          <Hero lang="ar" />
          <ClientsMarquee lang="ar" />
          <div className="section-deferred">
            <WhatWeBuild lang="ar" />
          </div>
          <div className="section-deferred">
            <SelectedWork lang="ar" />
          </div>
          <div className="section-deferred">
            <Process lang="ar" />
          </div>
          <div className="section-deferred">
            <Technology lang="ar" />
          </div>
          <div className="section-deferred">
            <DigitalInfrastructure lang="ar" />
          </div>
          <div className="section-deferred">
            <WhyWebonio lang="ar" />
          </div>
          <div className="section-deferred">
            <Testimonials lang="ar" />
          </div>
          <div className="section-deferred">
            <InsightsSection lang="ar" />
          </div>
          <div className="section-deferred">
            <FinalCta lang="ar" />
          </div>
        </main>
        <Footer lang="ar" />
      </SmoothScroll>
    </ThemeProvider>
  );
}
