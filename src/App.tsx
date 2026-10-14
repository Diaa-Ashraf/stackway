import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BackgroundCanvas } from '@/components/layout/BackgroundCanvas';

// Pages
import { HomePage } from '@/pages/HomePage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { WorkPage } from '@/pages/WorkPage';
import { WorkDetailPage } from '@/pages/WorkDetailPage';
import { InsightsPage } from '@/pages/InsightsPage';
import { InsightDetailPage } from '@/pages/InsightDetailPage';
import { SolutionsPage } from '@/pages/SolutionsPage';
import { CompanyPage } from '@/pages/CompanyPage';
import { HostingPage } from '@/pages/HostingPage';
import { StartPage } from '@/pages/StartPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { TermsPage } from '@/pages/TermsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export function App() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--ink)] antialiased selection:bg-[var(--accent)] selection:text-white">
      <BackgroundCanvas />
      <div className="relative z-10">
        <Routes>
          {/* English Routes */}
          <Route path="/" element={<HomePage lang="en" />} />
          <Route path="/services" element={<ServicesPage lang="en" />} />
          <Route path="/services/:slug" element={<ServiceDetailPage lang="en" />} />
          <Route path="/work" element={<WorkPage lang="en" />} />
          <Route path="/work/:slug" element={<WorkDetailPage lang="en" />} />
          <Route path="/insights" element={<InsightsPage lang="en" />} />
          <Route path="/insights/:slug" element={<InsightDetailPage lang="en" />} />
          <Route path="/solutions" element={<SolutionsPage lang="en" />} />
          <Route path="/company" element={<CompanyPage lang="en" />} />
          <Route path="/hosting" element={<HostingPage lang="en" />} />
          <Route path="/start" element={<StartPage lang="en" />} />
          <Route path="/privacy" element={<PrivacyPage lang="en" />} />
          <Route path="/terms" element={<TermsPage lang="en" />} />

          {/* Arabic Routes */}
          <Route path="/ar" element={<HomePage lang="ar" />} />
          <Route path="/ar/services" element={<ServicesPage lang="ar" />} />
          <Route path="/ar/services/:slug" element={<ServiceDetailPage lang="ar" />} />
          <Route path="/ar/work" element={<WorkPage lang="ar" />} />
          <Route path="/ar/work/:slug" element={<WorkDetailPage lang="ar" />} />
          <Route path="/ar/insights" element={<InsightsPage lang="ar" />} />
          <Route path="/ar/insights/:slug" element={<InsightDetailPage lang="ar" />} />
          <Route path="/ar/solutions" element={<SolutionsPage lang="ar" />} />
          <Route path="/ar/company" element={<CompanyPage lang="ar" />} />
          <Route path="/ar/hosting" element={<HostingPage lang="ar" />} />
          <Route path="/ar/start" element={<StartPage lang="ar" />} />
          <Route path="/ar/privacy" element={<PrivacyPage lang="ar" />} />
          <Route path="/ar/terms" element={<TermsPage lang="ar" />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
