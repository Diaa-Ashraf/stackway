import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { ArrowLeft, Home } from 'lucide-react';

export function NotFoundPage() {
  const { pathname } = useLocation();
  const isAr = pathname.startsWith('/ar');

  return (
    <MainLayout
      lang={isAr ? 'ar' : 'en'}
      title={isAr ? 'الصفحة غير موجودة | 404' : 'Page Not Found | 404'}
      description={isAr ? 'الصفحة المطلوبة غير موجودة أو تم نقلها.' : 'The requested page could not be found.'}
      mainClassName="min-h-[75vh] flex items-center justify-center relative px-6 py-32"
    >
      <div className="text-center max-w-lg mx-auto space-y-6">
        <span className="font-mono text-sm tracking-widest text-[var(--accent)] uppercase font-semibold">
          // 404 ERROR
        </span>
        <h1 className="text-4xl sm:text-6xl font-heading font-black text-[var(--ink)]">
          {isAr ? 'الصفحة غير موجودة' : 'Page Not Found'}
        </h1>
        <p className="text-[var(--muted)] text-base">
          {isAr
            ? 'عذراً، الصفحة التي تبحث عنها غير متوفرة أو تم تغيير مسارها.'
            : 'The page you are looking for does not exist or has been moved.'}
        </p>
        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            to={isAr ? '/ar' : '/'}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] text-[#05060a] font-bold text-sm hover:brightness-110 transition-all shadow-[0_4px_20px_-4px_rgba(52,209,209,0.45)]"
          >
            <Home size={16} />
            <span>{isAr ? 'العودة للرئيسية' : 'Return Home'}</span>
          </Link>
          <Link
            to={isAr ? '/ar/services' : '/services'}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--line-strong)] bg-black/25 text-white hover:border-[var(--accent)]/50 hover:bg-[var(--surface-strong)] text-sm font-semibold transition-all"
          >
            <span>{isAr ? 'استكشف الخدمات' : 'Explore Services'}</span>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}

export default NotFoundPage;
