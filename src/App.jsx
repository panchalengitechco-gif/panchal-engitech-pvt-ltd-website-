import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import WhatsAppButton from './components/common/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ConstructionProcess from './pages/ConstructionProcess';
import Fabrication from './pages/Fabrication';
import InteriorDesign from './pages/InteriorDesign';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Blog from './pages/Blog';
// import Investors from './pages/Investors';

function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ScrollToTop />
        <Header />
        <main style={{ flex: 1, paddingTop: 'var(--header-height)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/construction-process" element={<ConstructionProcess />} />
            <Route path="/fabrication" element={<Fabrication />} />
            <Route path="/interior-design" element={<InteriorDesign />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/blog" element={<Blog />} />
            {/* <Route path="/investors" element={<Investors />} /> */}
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
