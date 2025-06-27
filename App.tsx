import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import TechStackPage from './components/TechStackPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import CustomCursor from './components/CustomCursor';
import { ThemeProvider } from './contexts/ThemeContext';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="App min-h-screen">
        {loading ? (
          <Loader />
        ) : (
          <>
            <CustomCursor />
            <Navbar />
            <main>
              <section id="home">
                <HomePage />
              </section>
              <section id="about" className="py-20">
                <AboutPage />
              </section>
              <section id="tech-stack" className="py-20">
                <TechStackPage />
              </section>
              <section id="projects" className="py-20">
                <ProjectsPage />
              </section>
              <section id="contact" className="py-20">
                <ContactPage />
              </section>
            </main>
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;