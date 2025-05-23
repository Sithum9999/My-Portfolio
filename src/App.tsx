import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import AnimatedCursor from './components/ui/AnimatedCursor';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  const { initScrollAnimations } = useScrollAnimation();
  
  useEffect(() => {
    initScrollAnimations();
    
    // Update page title
    document.title = "Sithum Sankalpa - Software Developer|UI UX Designer|Front-end Web Developer";
    
    // Get the title element and update it if it has the data-default attribute
    const titleElement = document.querySelector('title[data-default]');
    if (titleElement) {
      titleElement.textContent = "Sithum Sankalpa | Developer & Designer";
    }
  }, [initScrollAnimations]);

  return (
    <div className="bg-background text-white min-h-screen overflow-hidden">
      <AnimatedCursor />
      <Layout>
        <main className="relative">
          <Hero />
          <About />
          <Projects />
          <Services />
          <Contact />
        </main>
      </Layout>
    </div>
  );
}

export default App;