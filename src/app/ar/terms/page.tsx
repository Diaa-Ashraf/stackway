import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { SectionHeader } from '@/components/ui/SectionHeader';
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
        <main id="main-content" className="pt-32 pb-24 md:pt-44 md:pb-32 bg-[var(--bg)] min-h-screen">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeader
              number="00"
              eyebrow="العقود القانونية واتفاقية مستوى الخدمة"
              title="شروط الخدمة"
              subtitle="شروط محددة وواضحة تحكم خدمات تطوير البرمجيات، والاستضافة السحابية، والدعم الفني."
            />

            <div className="p-8 md:p-12 rounded-3xl border border-[var(--line)] bg-[var(--surface)] shadow-sm space-y-8 text-base text-[var(--ink)]/90 leading-relaxed font-sans">
              <div>
                <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-3">1. نطاق العمل والمراحل</h3>
                <p className="text-[var(--muted)] text-sm md:text-base">
                  يتم تنفيذ كافة الخدمات البرمجية والتصميمية وفق وثائق نطاق عمل مكتوبة تحدد المخرجات، ومراحل المراجعة، ومواعيد التسليم المعتمدة.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-3">2. اتفاقية مستوى الخدمة (SLA)</h3>
                <p className="text-[var(--muted)] text-sm md:text-base">
                  تضمن ستاك واي نسبة توفر 99.9% للخوادم السحابية المدارة. وفي حال حدوث أي انقطاع غير معلن يتجاوز المعايير، يتم تعويض العميل برصيد خدمة وفق الاتفاقية.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-3">3. ملكية الحقوق الفكرية والأكواد</h3>
                <p className="text-[var(--muted)] text-sm md:text-base">
                  بمجرد سداد المستحقات المالية المتفق عليها، تصبح كافة الأكواد المصدرية والتصاميم المطورة خصيصاً للمشروع ملكاً حصرياً للعميل.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-3">4. الاستخدام المشروع وحظر الانتهاكات</h3>
                <p className="text-[var(--muted)] text-sm md:text-base">
                  يحظر استخدام الخوادم في أية أنشطة غير قانونية أو إرسال الرسائل المزعجة (Spam) أو تعدين العملات الرقمية أو استضافة محتويات تنتهك حقوق الملكية الفكرية.
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer lang="ar" />
      </SmoothScroll>
    </ThemeProvider>
  );
}
