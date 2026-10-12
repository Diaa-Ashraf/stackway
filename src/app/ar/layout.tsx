import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ستاك واي | المنتجات الرقمية والأنظمة البرمجية للشركات',
  description: 'تصميم وتطوير المواقع والمنصات وتطبيقات الجوال، والبرمجيات الخاصة، والاستضافة السحابية المدارة.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div dir="rtl" lang="ar" className="rtl">
      {children}
    </div>
  );
}
