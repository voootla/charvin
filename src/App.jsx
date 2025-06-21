
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AnimatePresence } from 'framer-motion';
import HomePage from '@/pages/HomePage';
import MenuPage from '@/pages/MenuPage';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

function AppContent() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <>
      <Helmet>
        <title>Charvin - Premium Healthcare Café Solutions</title>
        <meta name="description" content="Charvin specializes in creating high-quality café experiences tailored for healthcare environments. Operating in renowned hospitals across the region." />
      </Helmet>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
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
