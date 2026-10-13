import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ShieldCheck, Lock, HardDrive, Mail } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Stackway',
  description: 'Our commitments regarding data privacy, security isolation, and compliance.',
};

export default function PrivacyPage() {
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
              eyebrow="LEGAL & DATA COMPLIANCE"
              title="Privacy Policy"
              subtitle="Last updated: October 2026. How Stackway collects, processes, and isolates enterprise data."
            />

            {/* Quick Metadata Tag Row */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="mono-tag text-[11px] px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)] font-mono">
                EFFECTIVE: OCT 2026
              </span>
              <span className="mono-tag text-[11px] px-3 py-1 rounded-full bg-[var(--accent-light)] border border-[var(--accent)]/30 text-[var(--accent)] font-mono">
                JURISDICTION: US / WYOMING & MENA
              </span>
              <span className="mono-tag text-[11px] px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--line)] text-emerald-500 font-mono">
                CAGEFS CLOUD ISOLATION: ACTIVE
              </span>
            </div>

            <div className="p-8 md:p-12 rounded-3xl border border-[var(--line)] bg-[var(--surface)]/80 backdrop-blur-md shadow-xl space-y-10 text-base text-[var(--ink)]/90 leading-relaxed font-sans">
              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-[var(--surface-alt)] border border-[var(--line)] text-[var(--accent)] shrink-0 mt-1">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-2">1. Principles of Data Collection</h3>
                  <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
                    Stackway LLC respects client confidentiality. We only collect telemetry, contact information, and project scope details strictly necessary to design, engineer, host, and maintain your digital products. We never sell, rent, or monetize client data.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-[var(--surface-alt)] border border-[var(--line)] text-[var(--accent)] shrink-0 mt-1">
                  <Lock size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-2">2. Hosting & Cloud Infrastructure Isolation</h3>
                  <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
                    All databases and application files managed on our cloud network are isolated through CloudLinux CageFS virtualization. Client accounts operate in sovereign virtualized environments with zero cross-tenant access. Each application runs with dedicated CPU, memory, and I/O caps.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-[var(--surface-alt)] border border-[var(--line)] text-[var(--accent)] shrink-0 mt-1">
                  <HardDrive size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-2">3. Backups & Retention</h3>
                  <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
                    Automated backups are stored in encrypted remote vaults with AES-256 standards. Upon contract conclusion or written request, all proprietary client assets and data snapshots are permanently expunged according to enterprise sanitization standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-[var(--surface-alt)] border border-[var(--line)] text-[var(--accent)] shrink-0 mt-1">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-2">4. Contact & Inquiries</h3>
                  <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
                    For privacy queries, data processing agreements (DPA), or compliance verification, contact our data protection team directly at <a href="mailto:legal@stackway.net" className="text-[var(--accent)] hover:underline font-mono">legal@stackway.net</a>.
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
