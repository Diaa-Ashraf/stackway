import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { SectionHeader } from '@/components/ui/SectionHeader';
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
        <main id="main-content" className="pt-32 pb-24 md:pt-44 md:pb-32 bg-[var(--bg)] min-h-screen">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeader
              number="00"
              eyebrow="الامتثال القانوني وحماية البيانات"
              title="سياسة الخصوصية"
              subtitle="آخر تحديث: أكتوبر 2026. كيف تقوم ستاك واي بجمع ومعالجة وحماية بيانات المشروعات والعملاء."
            />

            <div className="p-8 md:p-12 rounded-3xl border border-[var(--line)] bg-[var(--surface)] shadow-sm space-y-8 text-base text-[var(--ink)]/90 leading-relaxed font-sans">
              <div>
                <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-3">1. مبادئ جمع البيانات</h3>
                <p className="text-[var(--muted)] text-sm md:text-base">
                  تلتزم شركة ستاك واي بالسرية التامة لبيانات العملاء. نحن لا نجمع إلا المعلومات الضرورية لتصميم وهندسة وتشغيل وصيانة منتجاتك الرقمية.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-3">2. عزل البنية السحابية والخوادم</h3>
                <p className="text-[var(--muted)] text-sm md:text-base">
                  كافة قواعد البيانات والملفات المستضافة على شبكتنا السحابية معزولة تماماً بتقنية CloudLinux CageFS. تعمل حسابات العملاء في بيئات افتراضية مستقلة تمنع أي وصول غير مصرح به.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-3">3. النسخ الاحتياطي وحفظ البيانات</h3>
                <p className="text-[var(--muted)] text-sm md:text-base">
                  يتم حفظ النسخ الاحتياطية اليومية في خوادم مشفرة خارج موقع العمل. وعند انتهاء التعاقد أو بطلب كتابي، يتم حذف كافة البيانات والنسخ الاحتياطية نهائياً.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-3">4. الاستفسارات والتواصل</h3>
                <p className="text-[var(--muted)] text-sm md:text-base">
                  لأية استفسارات تتعلق بحماية البيانات، يرجى التواصل مع فريقنا القانوني عبر legal@stackway.net.
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
