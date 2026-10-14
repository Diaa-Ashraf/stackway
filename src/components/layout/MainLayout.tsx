import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

interface MainLayoutProps {
  children: React.ReactNode;
  lang?: 'en' | 'ar';
  title?: string;
  description?: string;
  mainClassName?: string;
}

export function MainLayout({
  children,
  lang = 'en',
  title = 'Stackway | Digital Products & Real Results',
  description = 'Websites, mobile apps, e-commerce, custom software, and managed cloud hosting engineered for high-performance businesses.',
  mainClassName,
}: MainLayoutProps) {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isAr = lang === 'ar';

  return (
    <>
      <Helmet>
        <html lang={lang} dir={isAr ? 'rtl' : 'ltr'} className={`dark ${isAr ? 'rtl' : ''}`} />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <ThemeProvider>
        <SmoothScroll>
          <div dir={isAr ? 'rtl' : 'ltr'} className={isAr ? 'rtl' : ''}>
            <ScrollProgressBar />
            <Header lang={lang} />
            <main id="main-content" tabIndex={-1} className={mainClassName}>
              {children}
            </main>
            <Footer lang={lang} />
          </div>
        </SmoothScroll>
      </ThemeProvider>
    </>
  );
}

export default MainLayout;
