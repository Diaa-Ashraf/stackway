import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { SectionHeader } from '@/components/ui/SectionHeader';
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
        <main id="main-content" className="pt-32 pb-24 md:pt-44 md:pb-32 bg-[var(--bg)] min-h-screen">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeader
              number="00"
              eyebrow="LEGAL & DATA COMPLIANCE"
              title="Privacy Policy"
              subtitle="Last updated: October 2026. How Stackway collects, processes, and isolates enterprise data."
            />

            <div className="p-8 md:p-12 rounded-3xl border border-[var(--line)] bg-[var(--surface)] shadow-sm space-y-8 text-base text-[var(--ink)]/90 leading-relaxed font-sans">
              <div>
                <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-3">1. Principles of Data Collection</h3>
                <p className="text-[var(--muted)] text-sm md:text-base">
                  Stackway LLC respects client confidentiality. We only collect telemetry, contact information, and project scope details strictly necessary to design, engineer, host, and maintain your digital products.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-3">2. Hosting & Cloud Infrastructure Isolation</h3>
                <p className="text-[var(--muted)] text-sm md:text-base">
                  All databases and application files managed on our cloud network are isolated through CloudLinux CageFS virtualization. Client accounts operate in sovereign virtualized environments with zero cross-tenant access.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-3">3. Backups & Retention</h3>
                <p className="text-[var(--muted)] text-sm md:text-base">
                  Automated backups are stored in encrypted remote vaults. Upon contract conclusion or written request, all proprietary client assets and data snapshots are permanently expunged according to enterprise sanitization standards.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-3">4. Contact & Inquiries</h3>
                <p className="text-[var(--muted)] text-sm md:text-base">
                  For privacy queries or compliance verification, contact our data protection team directly at legal@stackway.net.
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
