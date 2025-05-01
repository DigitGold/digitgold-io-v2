import React, { useEffect } from 'react';

import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import TrustSection from '../components/TrustSection';
import Transformation from '../components/Transformation';
import Roadmap from '../components/Roadmap';
import CTA from '../components/CTA';
import LeadCaptureModal from '../components/LeadCaptureModal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundNodules from '../components/BackgroundNodules';

const Landing: React.FC = () => {
  useEffect(() => {
    // Update document title
    document.title = 'DigitGold | L\'or du futur, frappé sur la blockchain';
    
    // Exit intent detection for lead capture
    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        const modal = document.getElementById('lead-capture-modal');
        if (modal && modal.classList.contains('hidden')) {
          modal.classList.remove('hidden');
        }
      }
    };
    
    // Attach event listener
    document.addEventListener('mouseleave', handleExitIntent);
    
    // Cleanup
    return () => {
      document.removeEventListener('mouseleave', handleExitIntent);
    };
  }, []);
  
  return (
    <div className="relative">
      <BackgroundNodules />
      <Navbar />
      <main>
        <Hero />
        <Timeline />
        <TrustSection />
        <Transformation />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
      <LeadCaptureModal />
    </div>
  );
};

export default Landing;