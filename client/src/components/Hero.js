import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Hero.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content" data-aos="fade-up">
        <h1 className="welcome-text">Welcome to my portfolio</h1>
        <div className="name-title-container">
          <h1 className="hero-title">
            Hi, I'm <span>Likhith Dathi</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;