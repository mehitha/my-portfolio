// import React from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">MyPortfolio</div>
//       <ul className="nav-links">
//         <li><a href="#about">About</a></li>
//         <li><a href="#education">Education</a></li>
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#internship">Internship</a></li>
//         <li><a href="#projects">Projects</a></li>
//         <li><a href="#contact">Contact Me</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon (3 horizontal lines) */}
      </div>
      {/* Navbar Links */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#internship">Internship</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
