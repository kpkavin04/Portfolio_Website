import React from 'react';
import Navbar from './components/Navbar.jsx';
import Profile from './components/Profile.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Certifications from './components/Certifications.jsx';
import TechSkills from './components/Techskills.jsx';
import Experience from './components/Experience.jsx';

function App() {
  return (
    <div className='bg-black min-h-screen'>
      <Navbar />
      <main>
        <Profile />
        <About />
        <Experience />
        <Projects />
        <TechSkills />
        <Certifications />
        <Contact />
      </main>
    </div>
  )
}

export default App
