import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Roles from './components/Roles';
import Awards from './components/Awards';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const HomePage = () => (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Certifications darkMode={darkMode} />
        <Roles darkMode={darkMode} />
        <Awards darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Interests darkMode={darkMode} />
        <Languages darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </>
  );

  return (
    <div className={`${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound darkMode={darkMode} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;