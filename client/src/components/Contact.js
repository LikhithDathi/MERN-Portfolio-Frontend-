import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');
    
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setStatus('');
      }, 5000);
    } catch (error) {
      setStatus('Something went wrong. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header" data-aos="fade-up">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have a project in mind or want to collaborate? Drop me a message!</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card" data-aos="fade-right">
            <div className="card-header">
              <div className="icon-circle">
                <FaPaperPlane className="card-icon" />
              </div>
              <h3>Send Me a Message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group floating">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder=" "
                />
                <label>Your Name</label>
                <span className="input-highlight"></span>
              </div>

              <div className="form-group floating">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder=" "
                />
                <label>Your Email</label>
                <span className="input-highlight"></span>
              </div>

              <div className="form-group floating">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  rows="4"
                  placeholder=" "
                />
                <label>Your Message</label>
                <span className="input-highlight"></span>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span> Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="btn-icon" /> Send Message
                  </>
                )}
              </button>

              {status && (
                <div className={`status-message ${status.includes('successfully') ? 'success' : 'error'}`}>
                  {status}
                </div>
              )}
            </form>
          </div>

          <div className="contact-details" data-aos="fade-left">
            <div className="details-card">
              <h3>Contact Information</h3>
              
              <div className="info-grid">
                <div className="info-item">
                  <div className="info-icon">
                    <FaEnvelope className="icon" />
                  </div>
                  <div className="info-content">
                    <h4>Email</h4>
                    <a href="mailto:likhithdathi@gmail.com">likhithdathi@gmail.com</a>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <FaPhone className="icon" />
                  </div>
                  <div className="info-content">
                    <h4>Phone</h4>
                    <a href="tel:+919390335355">+91 9390335355</a>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">
                    <FaMapMarkerAlt className="icon" />
                  </div>
                  <div className="info-content">
                    <h4>Location</h4>
                    <p>Hyderabad, Telangana</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;