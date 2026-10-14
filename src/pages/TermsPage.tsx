import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FileText, Cpu, CheckCircle2, AlertTriangle } from 'lucide-react';

export function TermsPage({ lang = 'en' }: { lang?: 'en' | 'ar' }) {
  const isAr = lang === 'ar';

  return (
    <MainLayout
      lang={lang}
      title={
        isAr
          ? 'شروط وأحكام الخدمة | ستاك واي'
          : 'Terms of Service | Stackway'
      }
      description={
        isAr
          ? 'شروط تعاقد واضحة وشفافة تحكم خدمات التطوير البرمجي، والاستضافة السحابية، واتفاقية مستوى الخدمة SLA.'
          : 'Enterprise terms of service, SLA commitments, and engineering deliverables.'
      }
      mainClassName="relative isolate overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32 bg-[var(--bg)] min-h-screen"
    >
      {/* Ambient Tech Grid & Top Glow matching Home & Work */}
      <div aria-hidden="true" className="bg-grid mask-radial absolute inset-0 -z-10 opacity-70 pointer-events-none" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(140,92,255,0.15),transparent)]"
      />

      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          number="00"
          eyebrow={isAr ? 'العقود القانونية واتفاقية مستوى الخدمة' : 'LEGAL CONTRACT & SLA'}
          title={isAr ? 'شروط الخدمة' : 'Terms of Service'}
          subtitle={
            isAr
              ? 'شروط محددة وواضحة تحكم خدمات تطوير البرمجيات، والاستضافة السحابية، والدعم الفني.'
              : 'Clear, predictable terms governing software development, cloud hosting, and support agreements.'
          }
        />

        {/* Quick Metadata Tag Row */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="mono-tag text-[11px] px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)] font-mono">
            {isAr ? 'آخر تحديث: أكتوبر 2026' : 'LAST UPDATED: OCT 2026'}
          </span>
          <span className="mono-tag text-[11px] px-3 py-1 rounded-full bg-[var(--accent-light)] border border-[var(--accent)]/30 text-[var(--accent)] font-mono">
            {isAr ? 'ضمان تشغيل الشبكة: 99.9% SLA' : 'ENTERPRISE SLA: 99.9% NETWORK UPTIME'}
          </span>
          <span className="mono-tag text-[11px] px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--line)] text-emerald-500 font-mono">
            {isAr ? 'ملكية الكود 100% للعميل عند التسليم' : '100% IP ASSIGNMENT UPON SETTLEMENT'}
          </span>
        </div>

        <div className="p-8 md:p-12 rounded-3xl border border-[var(--line)] bg-[var(--surface)]/80 backdrop-blur-md shadow-xl space-y-10 text-base text-[var(--ink)]/90 leading-relaxed font-sans">
          <div className="flex gap-4 items-start">
            <div className="p-2.5 rounded-xl bg-[var(--surface-alt)] border border-[var(--line)] text-[var(--accent)] shrink-0 mt-1">
              <FileText size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-2">
                {isAr ? '1. نطاق العمل والمراحل' : '1. Scope of Work & Milestones'}
              </h3>
              <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
                {isAr
                  ? 'يتم تنفيذ كافة الخدمات البرمجية والتصميمية وفق وثائق نطاق عمل مكتوبة تحدد المخرجات، ومراحل المراجعة، ومواعيد التسليم المعتمدة. ولا يبدأ العمل إلا بعد المراجعة والاعتماد المشترك.'
                  : 'All custom software engineering services are executed pursuant to written statement of work (SOW) documents specifying deliverable features, review intervals, and milestone sign-off criteria. Engineering begins only after requirements verification.'}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-2.5 rounded-xl bg-[var(--surface-alt)] border border-[var(--line)] text-[var(--accent)] shrink-0 mt-1">
              <Cpu size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-2">
                {isAr ? '2. اتفاقية مستوى الخدمة (SLA)' : '2. Service Level Agreement (SLA)'}
              </h3>
              <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
                {isAr
                  ? 'تضمن ستاك واي نسبة توفر 99.9% للخوادم السحابية المدارة. وفي حال حدوث أي انقطاع غير معلن يتجاوز المعايير، يتم تعويض العميل برصيد خدمة وفق الاتفاقية فوراً وبشكل تلقائي.'
                  : 'Stackway guarantees 99.9% network availability for managed cloud hosting services, excluding announced scheduled maintenance windows. In the event of an unscheduled outage exceeding our threshold, proactive service credits are issued automatically.'}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-2.5 rounded-xl bg-[var(--surface-alt)] border border-[var(--line)] text-[var(--accent)] shrink-0 mt-1">
              <CheckCircle2 size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-2">
                {isAr ? '3. ملكية الحقوق الفكرية والأكواد' : '3. Intellectual Property Ownership'}
              </h3>
              <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
                {isAr
                  ? 'بمجرد سداد المستحقات المالية المتفق عليها، تصبح كافة الأكواد المصدرية والتصاميم المطورة خصيصاً للمشروع ملكاً حصرياً للعميل دون أي رسوم تجديد خفية أو قيود تقنية.'
                  : 'Upon final payment settlement, all custom application source code, UI designs, brand assets, and database schemas created exclusively for the client are assigned in full to the client without recurring licensing fees.'}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-2.5 rounded-xl bg-[var(--surface-alt)] border border-[var(--line)] text-[var(--accent)] shrink-0 mt-1">
              <AlertTriangle size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-[var(--ink)] mb-2">
                {isAr ? '4. الاستخدام المشروع وحظر الانتهاكات' : '4. Fair Use & Abuse Prevention'}
              </h3>
              <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
                {isAr
                  ? 'يحظر استخدام الخوادم في أية أنشطة غير قانونية أو إرسال الرسائل المزعجة (Spam) أو تعدين العملات الرقمية أو استضافة محتويات تنتهك حقوق الملكية الفكرية، حفاظاً على أمان واستقرار الشبكة.'
                  : 'Cloud accounts may not be utilized for malicious activities, unsolicited bulk mailings (spam), unauthorized cryptocurrency mining, or distribution of copyrighted material without consent. Zero tolerance for security abuse.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default TermsPage;
