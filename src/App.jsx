import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default App;