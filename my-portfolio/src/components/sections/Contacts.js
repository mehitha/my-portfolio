import React from 'react';
import './Contacts.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <div className="social-links">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;