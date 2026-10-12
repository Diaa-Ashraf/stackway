'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES_LIST } from '@/content/site-data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { Check, ArrowRight, ArrowLeft, Send, Sparkles } from 'lucide-react';

interface StartProjectViewProps {
  lang?: 'en' | 'ar';
}

export function StartProjectView({ lang = 'en' }: StartProjectViewProps) {
  const isAr = lang === 'ar';
  const prefix = isAr ? '/ar' : '';

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>(['web']);
  const [budget, setBudget] = useState('$5k – $15k');
  const [timeline, setTimeline] = useState('1 – 2 months');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (selectedServices.length === 0) {
        setErrors({ services: isAr ? 'يرجى اختيار خدمة واحدة على الأقل' : 'Please select at least one capability' });
        return;
      }
      setErrors({});
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = isAr ? 'يرجى إدخال اسمك' : 'Name is required';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = isAr ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Valid email is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = isAr ? 'يرجى إدخال رقم الهاتف' : 'Phone number is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const budgetOptions = [
    { label: '$2.5k – $5k', desc: isAr ? 'للمواقع السريعة والمتاجر الصغيرة' : 'Sprint landing pages / starter setups' },
    { label: '$5k – $15k', desc: isAr ? 'للمنصات وتطبيقات الويب المتكاملة' : 'Full custom platform / web applications' },
    { label: '$15k – $35k', desc: isAr ? 'للأنظمة السحابية المعقدة و SaaS' : 'Complex SaaS / multi-tenant architectures' },
    { label: '$35k+', desc: isAr ? 'للتحول الرقمي الشامل والمشاريع الكبرى' : 'Enterprise transformation & bespoke ecosystems' },
  ];

  const timelineOptions = [
    { label: isAr ? 'عاجل (أقل من أسبوعين)' : 'Urgent (< 2 weeks)' },
    { label: isAr ? 'خلال شهر إلى شهرين' : '1 – 2 months' },
    { label: isAr ? 'خلال 3 إلى 6 أشهر' : '3 – 6 months' },
    { label: isAr ? 'مرن حسب الأولويات' : 'Flexible / Ongoing' },
  ];

  return (
    <div className="pt-28 pb-20 md:pt-40 md:pb-32 bg-[var(--bg)] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="01"
          eyebrow={isAr ? 'بدء مشروع جديد' : 'PROJECT DISCOVERY WIZARD'}
          title={isAr ? 'دعنا نضع الخطة الهندسية لمشروعك.' : "Let's engineer your next digital platform."}
          subtitle={
            isAr
              ? 'أجب عن بضع خطوات سريعة، وسيقوم فريقنا بدراسة متطلباتك وتقديم مقترح تفصيلي خلال 24 ساعة.'
              : 'Complete this 3-minute scope builder. Our architecture team will review and respond with an exact plan and timeline.'
          }
        />

        {/* Multi-step Animated Progress Bar */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-between text-xs font-mono text-[var(--muted)] mb-3">
            <span>
              {isAr ? `الخطوة ${currentStep} من 3` : `STEP 0${currentStep} OF 03`}
            </span>
            <span className="text-[var(--accent)] font-bold">
              {currentStep === 1
                ? isAr
                  ? 'اختيار الخدمات'
                  : 'CAPABILITIES'
                : currentStep === 2
                ? isAr
                  ? 'الميزانية والوقت'
                  : 'TIMELINE & BUDGET'
                : isAr
                ? 'التفاصيل والتواصل'
                : 'SPECIFICATIONS & CONTACT'}
            </span>
          </div>

          <div className="h-2 w-full rounded-full bg-[var(--line)] overflow-hidden">
            <motion.div
              className="h-full bg-[var(--accent)]"
              initial={{ width: '33%' }}
              animate={{
                width: currentStep === 1 ? '33%' : currentStep === 2 ? '66%' : '100%',
              }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        {/* Wizard Card Container */}
        <div className="p-5 sm:p-8 md:p-14 rounded-3xl border border-[var(--line)] bg-[var(--surface)] shadow-xl relative overflow-hidden">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/20">
                <Check size={32} />
              </div>

              <h3 className="text-3xl font-heading font-bold text-[var(--ink)]">
                {isAr ? 'تم استلام طلبك بنجاح!' : 'Inquiry Received Successfully!'}
              </h3>

              <p className="text-base text-[var(--muted)] max-w-md mx-auto leading-relaxed">
                {isAr
                  ? `شكراً لك يا ${formData.name}. تم إرسال تفاصيل مشروعك إلى مهندسينا، وسنتواصل معك عبر البريد ${formData.email} خلال 24 ساعة.`
                  : `Thank you, ${formData.name}. Our engineering leads are analyzing your scope. We will contact you at ${formData.email} within 24 hours.`}
              </p>

              <div className="pt-4">
                <Button href={prefix || '/'} variant="secondary" size="md">
                  {isAr ? 'العودة إلى الصفحة الرئيسية' : 'Return to Home'}
                </Button>
              </div>
            </motion.div>
          ) : (
            <div>
              {/* STEP 1: Capabilities Selection */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-[var(--ink)] mb-1">
                      {isAr ? 'ما هي التخصصات التي تحتاجها في مشروعك؟' : 'Which capabilities does your project require?'}
                    </h3>
                    <p className="text-xs md:text-sm text-[var(--muted)]">
                      {isAr ? 'يمكنك اختيار أكثر من تخصص معاً.' : 'Select all disciplines that apply to your scope.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-h-[380px] overflow-y-auto pe-2">
                    {SERVICES_LIST.map((s) => {
                      const isSelected = selectedServices.includes(s.id);
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => toggleService(s.id)}
                          className={`p-3.5 rounded-2xl border text-start transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'border-[var(--accent)] bg-[var(--accent-light)] text-[var(--ink)] ring-1 ring-[var(--accent)]'
                              : 'border-[var(--line)] bg-[var(--bg)] text-[var(--muted)] hover:border-[var(--ink)] hover:text-[var(--ink)]'
                          }`}
                        >
                          <div>
                            <div className="font-mono text-[10px] text-[var(--muted)] mb-0.5">
                              {s.code}
                            </div>
                            <div className="font-heading font-semibold text-xs md:text-sm">
                              {isAr ? s.title.ar : s.title.en}
                            </div>
                          </div>

                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border ${
                              isSelected
                                ? 'bg-[var(--accent)] text-white border-transparent'
                                : 'border-[var(--line)]'
                            }`}
                          >
                            {isSelected && <Check size={12} />}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {errors.services && (
                    <p className="text-xs text-red-500 font-medium">{errors.services}</p>
                  )}

                  <div className="pt-6 border-t border-[var(--line)] flex justify-end">
                    <Button onClick={handleNext} variant="primary" size="lg">
                      {isAr ? 'متابعة الخطوة التالية' : 'Proceed to Timeline'}
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Budget & Timeline */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-[var(--ink)] mb-1">
                      {isAr ? 'ما هي الميزانية التقديرية والجدول الزمني؟' : 'What is your investment range & timeline?'}
                    </h3>
                    <p className="text-xs md:text-sm text-[var(--muted)]">
                      {isAr ? 'يساعدنا هذا في تخصيص الفريق الهندسي الأنسب لاحتياجاتك.' : 'This helps us assemble the optimal squad and development cadence.'}
                    </p>
                  </div>

                  {/* Budget Options */}
                  <div className="space-y-3">
                    <span className="mono-tag text-xs text-[var(--muted)] block">
                      // ESTIMATED INVESTMENT TIER
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {budgetOptions.map((b) => (
                        <button
                          key={b.label}
                          type="button"
                          onClick={() => setBudget(b.label)}
                          className={`p-4 rounded-2xl border text-start transition-all cursor-pointer ${
                            budget === b.label
                              ? 'border-[var(--accent)] bg-[var(--accent-light)] text-[var(--ink)] ring-1 ring-[var(--accent)]'
                              : 'border-[var(--line)] bg-[var(--bg)] text-[var(--muted)] hover:border-[var(--ink)]'
                          }`}
                        >
                          <div className="font-heading font-bold text-base text-[var(--ink)] mb-1">
                            {b.label}
                          </div>
                          <div className="text-xs text-[var(--muted)]">{b.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline Options */}
                  <div className="space-y-3">
                    <span className="mono-tag text-xs text-[var(--muted)] block">
                      // EXPECTED DELIVERY CADENCE
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
                      {timelineOptions.map((t) => (
                        <button
                          key={t.label}
                          type="button"
                          onClick={() => setTimeline(t.label)}
                          className={`p-3 sm:p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                            timeline === t.label
                              ? 'border-[var(--accent)] bg-[var(--accent-light)] text-[var(--ink)] ring-1 ring-[var(--accent)]'
                              : 'border-[var(--line)] bg-[var(--bg)] text-[var(--muted)] hover:border-[var(--ink)]'
                          }`}
                        >
                          <div className="font-medium text-xs text-[var(--ink)]">{t.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[var(--line)] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-4 py-2 text-xs font-mono text-[var(--muted)] hover:text-[var(--ink)] flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft size={14} className="rtl:rotate-180" />
                      <span>{isAr ? 'الرجوع' : 'Back'}</span>
                    </button>

                    <Button onClick={handleNext} variant="primary" size="lg">
                      {isAr ? 'متابعة الخطوة الأخيرة' : 'Proceed to Details'}
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Details & Contact */}
              {currentStep === 3 && (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-[var(--ink)] mb-1">
                      {isAr ? 'تفاصيل المشروع ومعلومات التواصل' : 'Project overview & contact details'}
                    </h3>
                    <p className="text-xs md:text-sm text-[var(--muted)]">
                      {isAr ? 'أين يمكننا إرسال التحليل الهندسي والخطة المبدئية؟' : 'Where should we deliver your engineering roadmap?'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[var(--muted)] mb-1.5">
                        {isAr ? 'الاسم الكامل *' : 'YOUR NAME *'}
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isAr ? 'أحمد محمد' : 'Alexander Wright'}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-[var(--bg)] text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--accent)]"
                      />
                      {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[var(--muted)] mb-1.5">
                        {isAr ? 'البريد الإلكتروني للعمل *' : 'WORK EMAIL *'}
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-[var(--bg)] text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--accent)]"
                      />
                      {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[var(--muted)] mb-1.5">
                        {isAr ? 'رقم الهاتف / واتساب *' : 'PHONE / WHATSAPP *'}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+20 111 000 0000"
                        dir="ltr"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-[var(--bg)] text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--accent)]"
                      />
                      {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[var(--muted)] mb-1.5">
                        {isAr ? 'اسم الشركة أو العلامة التجارية' : 'COMPANY OR BRAND'}
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder={isAr ? 'اسم مؤسستك' : 'Acme Corporation'}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-[var(--bg)] text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[var(--muted)] mb-1.5">
                      {isAr ? 'وصف موجز للمشروع أو التحدي' : 'BRIEF PROJECT NOTES & OBJECTIVES'}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder={
                        isAr
                          ? 'أخبرنا عن فكرتك، الميزات المستهدفة، أو المشكلة التي تريد حلها...'
                          : 'Tell us what you want to build, current bottlenecks, or target deadlines...'
                      }
                      className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-[var(--bg)] text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--accent)] resize-none"
                    />
                  </div>

                  <div className="pt-6 border-t border-[var(--line)] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-4 py-2 text-xs font-mono text-[var(--muted)] hover:text-[var(--ink)] flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft size={14} className="rtl:rotate-180" />
                      <span>{isAr ? 'الرجوع' : 'Back'}</span>
                    </button>

                    <Button type="submit" variant="primary" size="lg">
                      {isAr ? 'إرسال طلب المشروع' : 'Submit Engineering Inquiry'}
                    </Button>
                  </div>
                </motion.form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
