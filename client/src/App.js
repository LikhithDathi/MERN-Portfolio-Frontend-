// src/App.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
