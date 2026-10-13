import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FileText, Cpu, CheckCircle2, AlertTriangle } from 'lucide-react';
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
        <main id="main-content" className="relative isolate overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32 bg-[var(--bg)] min-h-screen">
          {/* Ambient Tech Grid & Top Glow matching Home & Work */}
          <div aria-hidden="true" className="bg-grid mask-radial absolute inset-0 -z-10 opacity-70 pointer-events-none" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(140,92,255,0.15),transparent)]"
          />

          <div className="max-w-4xl mx-auto px-6">
            <SectionHeader
              number="00"
              eyebrow="LEGAL CONTRACT & SLA"
              title="Terms of Service"
              subtitle="Clear, predictable terms governing software development, cloud hosting, and support agreements."
            />

            {/* Quick Metadata Tag Row */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="mono-tag text-[11px] px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)] font-mono">
                LAST UPDATED: OCT 2026
              </span>
              <span className="mono-tag text-[11px] px-3 py-1 rounded-full bg-[var(--accent-light)] border border-[var(--accent)]/30 text-[var(--accent)] font-mono">
                ENTERPRISE SLA: 99.9% NETWORK UPTIME
              </span>
              <span className="mono-tag text-[11px] px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--line)] text-emerald-500 font-mono">
                100% IP ASSIGNMENT UPON SETTLEMENT
              </span>
            </div>

            <div className="p-8 md:p-12 rounded-3xl border border-[var(--line)] bg-[var(--surface)]/80 backdrop-blur-md shadow-xl space-y-10 text-base text-[var(--ink)]/90 leading-relaxed font-sans">
              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-[var(--surface-alt)] border border-[var(--line)] text-[var(--accent)] shrink-0 mt-1">
                  <FileText size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-2">1. Scope of Work & Milestones</h3>
                  <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
                    All custom software engineering services are executed pursuant to written statement of work (SOW) documents specifying deliverable features, review intervals, and milestone sign-off criteria. Engineering begins only after requirements verification.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-[var(--surface-alt)] border border-[var(--line)] text-[var(--accent)] shrink-0 mt-1">
                  <Cpu size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-2">2. Service Level Agreement (SLA)</h3>
                  <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
                    Stackway guarantees 99.9% network availability for managed cloud hosting services, excluding announced scheduled maintenance windows. In the event of an unscheduled outage exceeding our threshold, proactive service credits are issued automatically.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-[var(--surface-alt)] border border-[var(--line)] text-[var(--accent)] shrink-0 mt-1">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-2">3. Intellectual Property Ownership</h3>
                  <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
                    Upon final payment settlement, all custom application source code, UI designs, brand assets, and database schemas created exclusively for the client are assigned in full to the client without recurring licensing fees.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-[var(--surface-alt)] border border-[var(--line)] text-[var(--accent)] shrink-0 mt-1">
                  <AlertTriangle size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-2">4. Fair Use & Abuse Prevention</h3>
                  <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
                    Cloud accounts may not be utilized for malicious activities, unsolicited bulk mailings (spam), unauthorized cryptocurrency mining, or distribution of copyrighted material without consent. Zero tolerance for security abuse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer lang="en" />
      </SmoothScroll>
    </ThemeProvider>
  );
}
