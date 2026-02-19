import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LanguageSelectorModal from './components/LanguageSelectorModal';
import './i18n';

function App() {
  return (
    <div className="min-h-screen bg-dark overflow-x-hidden w-full">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <LanguageSelectorModal />
    </div>
  );
}

export default App;
