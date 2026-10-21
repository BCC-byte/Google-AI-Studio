import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components/organisms/NavBar';
import { Footer } from './components/molecules/Footer';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { Home } from './pages/Home';
import { SmartLivingPage } from './pages/SmartLivingPage';
import { CommercialPage } from './pages/CommercialPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ProductsPage } from './pages/ProductsPage';
import { BrandsIndex } from './pages/BrandsIndex';
import { BrandPage } from './pages/BrandPage';
import { PartnerWithUs } from './pages/PartnerWithUs';
import { About } from './pages/About';
import { ContactPage } from './pages/ContactPage';

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-[#080F14] font-sans selection:bg-[#00D7F0] selection:text-[#080F14]">
        {/* Sticky Global Navigation with Top Bar Contract & Solutions Mega Menu */}
        <NavBar />

        {/* Dynamic Page Routed Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/smart-living" element={<SmartLivingPage />} />
            <Route path="/commercial" element={<CommercialPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/brands" element={<BrandsIndex />} />
            <Route path="/brands/:brandId" element={<BrandPage />} />
            <Route path="/projects" element={<Navigate to="/solutions" replace />} />
            <Route path="/partners" element={<PartnerWithUs />} />
            <Route path="/partner" element={<PartnerWithUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Aliases / Fallbacks */}
            <Route path="/solutions/smart-home" element={<SmartLivingPage />} />
            <Route path="/solutions/residential" element={<SmartLivingPage />} />
            <Route path="/solutions/commercial" element={<CommercialPage />} />
            <Route path="/regional-presence" element={<About />} />
            <Route path="/sustainability" element={<CommercialPage />} />
            <Route path="/simulator" element={<SmartLivingPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
