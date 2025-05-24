import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/About.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section id="about" className="about-container">
      <div className="about-content">
        <div className="about-text" data-aos="fade-right">
          <h2>About Me</h2>
          <p>
            I'm Likhith Dathi, a growing Full Stack Developer with hands-on experience in the MERN stack. I enjoy building responsive web applications and continuously improving my skills in both frontend and backend development.
          </p>
          <p>
            I focus on writing clean, maintainable code while learning best practices in design and performance. I'm actively expanding my understanding of web architecture and modern development workflows.
          </p>
          <p>
            Outside of projects, I explore new tools, contribute to beginner-friendly open-source repos, and engage with the developer community to learn and grow.
          </p>
        </div>
        
        <div className="about-image" data-aos="fade-left" data-aos-delay="300">
          <img 
            src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Likhith Dathi" 
          />
        </div>
      </div>
    </section>
  );
};

export default About;