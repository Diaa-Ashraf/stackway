import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ShieldCheck, Lock, HardDrive, Mail } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'سياسة الخصوصية وحماية البيانات | ستاك واي',
  description: 'التزاماتنا الصارمة بشأن حماية البيانات وسرية المشروعات وعزل الحسابات السحابية.',
};

export default function ArabicPrivacyPage() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <ScrollProgressBar />
        <Header lang="ar" />
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
              eyebrow="الامتثال القانوني وحماية البيانات"
              title="سياسة الخصوصية"
              subtitle="آخر تحديث: أكتوبر 2026. كيف تقوم ستاك واي بجمع ومعالجة وحماية بيانات المشروعات والعملاء."
            />

            {/* Quick Metadata Tag Row */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="mono-tag text-[11px] px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)] font-mono">
                ساري المفعول: أكتوبر 2026
              </span>
              <span className="mono-tag text-[11px] px-3 py-1 rounded-full bg-[var(--accent-light)] border border-[var(--accent)]/30 text-[var(--accent)] font-mono">
                النطاق القضائي: وايومنغ، الولايات المتحدة والشرق الأوسط
              </span>
              <span className="mono-tag text-[11px] px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--line)] text-emerald-500 font-mono">
                عزل الخوادم بتقنية CAGEFS: مفعّل
              </span>
            </div>

            <div className="p-8 md:p-12 rounded-3xl border border-[var(--line)] bg-[var(--surface)]/80 backdrop-blur-md shadow-xl space-y-10 text-base text-[var(--ink)]/90 leading-relaxed font-sans">
              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-[var(--surface-alt)] border border-[var(--line)] text-[var(--accent)] shrink-0 mt-1">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-2">1. مبادئ جمع البيانات</h3>
                  <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
                    تلتزم شركة ستاك واي بالسرية التامة لبيانات العملاء. نحن لا نجمع إلا المعلومات الضرورية لتصميم وهندسة وتشغيل وصيانة منتجاتك الرقمية. لا نقوم ببيع أو تأجير أو مشاركة أي بيانات مع أطراف ثالثة لأغراض تجارية إطلاقاً.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-[var(--surface-alt)] border border-[var(--line)] text-[var(--accent)] shrink-0 mt-1">
                  <Lock size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-2">2. عزل البنية السحابية والخوادم</h3>
                  <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
                    كافة قواعد البيانات والملفات المستضافة على شبكتنا السحابية معزولة تماماً بتقنية CloudLinux CageFS. تعمل حسابات العملاء في بيئات افتراضية مستقلة تمنع أي وصول غير مصرح به أو تداخل بين المستأجرين، مع موارد معالجة وذاكرة مستقلة ومحمية.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-[var(--surface-alt)] border border-[var(--line)] text-[var(--accent)] shrink-0 mt-1">
                  <HardDrive size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-2">3. النسخ الاحتياطي وحفظ البيانات</h3>
                  <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
                    يتم حفظ النسخ الاحتياطية الدورية في خوادم مشفرة خارج موقع العمل بمعايير تشفير AES-256. وعند انتهاء التعاقد أو بطلب كتابي، يتم حذف وتطهير كافة البيانات والنسخ الاحتياطية نهائياً من أنظمتنا.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-[var(--surface-alt)] border border-[var(--line)] text-[var(--accent)] shrink-0 mt-1">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-2">4. الاستفسارات والتواصل القانوني</h3>
                  <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
                    لأية استفسارات تتعلق باتفاقيات معالجة البيانات (DPA) أو التحقق من الامتثال، يرجى التواصل مع فريقنا القانوني مباشرة عبر <a href="mailto:legal@stackway.net" className="text-[var(--accent)] hover:underline font-mono">legal@stackway.net</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer lang="ar" />
      </SmoothScroll>
    </ThemeProvider>
  );
}
