import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FileText, Cpu, CheckCircle2, AlertTriangle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'شروط وأحكام الخدمة | ستاك واي',
  description: 'شروط تعاقد واضحة وشفافة تحكم خدمات التطوير البرمجي، والاستضافة السحابية، واتفاقية مستوى الخدمة SLA.',
};

export default function ArabicTermsPage() {
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
              eyebrow="العقود القانونية واتفاقية مستوى الخدمة"
              title="شروط الخدمة"
              subtitle="شروط محددة وواضحة تحكم خدمات تطوير البرمجيات، والاستضافة السحابية، والدعم الفني."
            />

            {/* Quick Metadata Tag Row */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="mono-tag text-[11px] px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)] font-mono">
                آخر تحديث: أكتوبر 2026
              </span>
              <span className="mono-tag text-[11px] px-3 py-1 rounded-full bg-[var(--accent-light)] border border-[var(--accent)]/30 text-[var(--accent)] font-mono">
                ضمان تشغيل الشبكة: 99.9% SLA
              </span>
              <span className="mono-tag text-[11px] px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--line)] text-emerald-500 font-mono">
                ملكية الكود 100% للعميل عند التسليم
              </span>
            </div>

            <div className="p-8 md:p-12 rounded-3xl border border-[var(--line)] bg-[var(--surface)]/80 backdrop-blur-md shadow-xl space-y-10 text-base text-[var(--ink)]/90 leading-relaxed font-sans">
              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-[var(--surface-alt)] border border-[var(--line)] text-[var(--accent)] shrink-0 mt-1">
                  <FileText size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-2">1. نطاق العمل والمراحل</h3>
                  <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
                    يتم تنفيذ كافة الخدمات البرمجية والتصميمية وفق وثائق نطاق عمل مكتوبة تحدد المخرجات، ومراحل المراجعة، ومواعيد التسليم المعتمدة. ولا يبدأ العمل إلا بعد المراجعة والاعتماد المشترك.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-[var(--surface-alt)] border border-[var(--line)] text-[var(--accent)] shrink-0 mt-1">
                  <Cpu size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-2">2. اتفاقية مستوى الخدمة (SLA)</h3>
                  <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
                    تضمن ستاك واي نسبة توفر 99.9% للخوادم السحابية المدارة. وفي حال حدوث أي انقطاع غير معلن يتجاوز المعايير، يتم تعويض العميل برصيد خدمة وفق الاتفاقية فوراً وبشكل تلقائي.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-[var(--surface-alt)] border border-[var(--line)] text-[var(--accent)] shrink-0 mt-1">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-2">3. ملكية الحقوق الفكرية والأكواد</h3>
                  <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
                    بمجرد سداد المستحقات المالية المتفق عليها، تصبح كافة الأكواد المصدرية والتصاميم المطورة خصيصاً للمشروع ملكاً حصرياً للعميل دون أي رسوم تجديد خفية أو قيود تقنية.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 rounded-xl bg-[var(--surface-alt)] border border-[var(--line)] text-[var(--accent)] shrink-0 mt-1">
                  <AlertTriangle size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-2">4. الاستخدام المشروع وحظر الانتهاكات</h3>
                  <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
                    يحظر استخدام الخوادم في أية أنشطة غير قانونية أو إرسال الرسائل المزعجة (Spam) أو تعدين العملات الرقمية أو استضافة محتويات تنتهك حقوق الملكية الفكرية، حفاظاً على أمان واستقرار الشبكة.
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
