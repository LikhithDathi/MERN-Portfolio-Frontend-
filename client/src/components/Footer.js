import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-social">
            <a 
              href="https://github.com/LikhithDathi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/likhith-dathi-b30024347/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="likhithdathi@gmail.com" 
              className="social-icon"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="footer-copyright">
            &copy; {currentYear} Likhith Dathi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;