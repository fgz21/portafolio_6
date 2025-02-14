import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import Timeline from './components/Timeline';
import ContactSection from './components/ContactSection';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <HeroSection />
      <Timeline />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default App;