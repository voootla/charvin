import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AnimatePresence } from 'framer-motion';
import HomePage from '@/pages/HomePage';
import BrandPage from '@/pages/BrandPage';
import AboutPage from '@/pages/AboutPage';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

function AppContent() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/brand/:brandId" element={<BrandPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <>
      <Helmet>
        <title>Charvin - A Creative Company</title>
        <meta name="description" content="Charvin is a creative company specializing in high-quality café and food experiences, from fresh salads and juices to gourmet coffee and pizza." />
      </Helmet>
      <Router>
        <div className="min-h-screen bg-brand-yellow flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <AppContent />
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </>
  );
}

export default App;