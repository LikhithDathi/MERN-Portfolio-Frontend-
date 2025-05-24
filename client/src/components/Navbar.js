import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link 
          to="hero" 
          smooth={true} 
          duration={500} 
          className="navbar-logo"
          onClick={() => setMobileMenuOpen(false)}
        >
          Likhith Dathi
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <NavLink to="hero" text="Home" />
          <NavLink to="about" text="About" />
          <NavLink to="projects" text="Projects" />
          <NavLink to="skills" text="Skills" />
          <NavLink to="contact" text="Contact" />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-button ${mobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <NavLink to="hero" text="Home" onClick={toggleMobileMenu} />
          <NavLink to="about" text="About" onClick={toggleMobileMenu} />
          <NavLink to="projects" text="Projects" onClick={toggleMobileMenu} />
          <NavLink to="skills" text="Skills" onClick={toggleMobileMenu} />
          <NavLink to="contact" text="Contact" onClick={toggleMobileMenu} />
        </div>
      </div>
    </nav>
  );
};

// Reusable NavLink component
const NavLink = ({ to, text, onClick }) => (
  <Link 
    to={to} 
    smooth={true} 
    duration={500} 
    className="nav-link"
    activeClass="active"
    spy={true}
    onClick={onClick}
  >
    {text}
  </Link>
);

export default Navbar;