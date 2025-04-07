import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import TreatmentsSection from './components/HeroSection/TreatmentsSection';
import ContactSection from './components/HeroSection/ContactSection';
import Footer from './components/Footer';
import Hero2 from './components/Hero2/Hero2';


function App() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow">
        <Hero2 />
        {/* <HeroSection />
        <TreatmentsSection />
        <ContactSection /> */}
      </main>
    
    </div>
  );
}

export default App;
