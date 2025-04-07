import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import TreatmentsSection from './components/HeroSection/TreatmentsSection';
import ContactSection from './components/HeroSection/ContactSection';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar /> 
      <main className="flex-grow">
        <HeroSection />
        <TreatmentsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
