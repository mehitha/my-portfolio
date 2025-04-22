import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Design and Developed by MEHITHA</p>
    </footer>
  );
};

export default Footer;