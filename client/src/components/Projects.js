import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Projects.css';
import MedicoPic from '../images/Medico-pic.jpg';
import ToDoPic from '../images/To-DO-pic.jpg';
import CollegeEnquiryPic from '../images/College-Enquiry-pic.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Medico',
      description: 'A healthcare application for doctors and patients to connect virtually with features like appointment scheduling, prescription management, and telemedicine.',
      image: MedicoPic
    },
    {
      title: 'To-Do List',
      description: 'A productivity application with task management, reminders, and progress tracking with cloud synchronization across devices.',
      image: ToDoPic
    },
    {
      title: 'College Enquiry Chatbot',
      description: 'AI-powered chatbot for college information with natural language processing to answer student queries about admissions, courses, and campus life.',
      image: CollegeEnquiryPic
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title" data-aos="fade-up">My Projects</h2>
        <br />
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Here are some of my recent works
        </p>
        <br />
        <br></br>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;