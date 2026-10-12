import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Stackway',
  description: 'Enterprise terms of service, SLA commitments, and engineering deliverables.',
};

export default function TermsPage() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <ScrollProgressBar />
        <Header lang="en" />
        <main id="main-content" className="pt-32 pb-24 md:pt-44 md:pb-32 bg-[var(--bg)] min-h-screen">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeader
              number="00"
              eyebrow="LEGAL CONTRACT & SLA"
              title="Terms of Service"
              subtitle="Clear, predictable terms governing software development, cloud hosting, and support agreements."
            />

            <div className="p-8 md:p-12 rounded-3xl border border-[var(--line)] bg-[var(--surface)] shadow-sm space-y-8 text-base text-[var(--ink)]/90 leading-relaxed font-sans">
              <div>
                <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-3">1. Scope of Work & Milestones</h3>
                <p className="text-[var(--muted)] text-sm md:text-base">
                  All custom software engineering services are executed pursuant to written statement of work documents specifying deliverable features, review intervals, and sign-off criteria.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-3">2. Service Level Agreement (SLA)</h3>
                <p className="text-[var(--muted)] text-sm md:text-base">
                  Stackway guarantees 99.9% network availability for managed cloud hosting services, excluding announced scheduled maintenance windows. In the event of an unscheduled outage exceeding our threshold, service credits are issued.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-3">3. Intellectual Property Ownership</h3>
                <p className="text-[var(--muted)] text-sm md:text-base">
                  Upon final payment settlement, all custom application source code, UI designs, and brand assets created exclusively for the client are assigned in full to the client.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-3">4. Fair Use & Abuse Prevention</h3>
                <p className="text-[var(--muted)] text-sm md:text-base">
                  Hosting accounts may not be utilized for malicious activity, spam transmission, cryptocurrency mining, or distribution of unauthorized copyright material.
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer lang="en" />
      </SmoothScroll>
    </ThemeProvider>
  );
}
