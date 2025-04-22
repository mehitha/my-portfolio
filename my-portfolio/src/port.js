import React from 'react';
import { Link } from 'react-scroll';
import './portfolio.css';

const Portfolio = () => {
  return (
    <div>
      {/* Small Navbar */}
      <nav className="navbar small-navbar">
        <div className="navbar-left">
          <h2 className="navbar-name">Your Name</h2>
          <ul>
            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
            <li><Link to="internship" smooth={true} duration={500}>Internship</Link></li>
            <li><Link to="project" smooth={true} duration={500}>Project</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="section home">
        <img src="your-image.jpg" alt="Profile" className="profile-img" />
        <h1>Your Name</h1>
        <p>Brief Introduction</p>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <h2>Education</h2>
        <p><strong>Degree:</strong> Bachelor of Science in Computer Science</p>
        <p><strong>Institution:</strong> Your University Name</p>
        <p><strong>Year:</strong> 2021-2024</p>
        <p><strong>Details:</strong> Include details about your education, any relevant achievements, courses, and projects.</p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <p>List your skills here...</p>
      </section>

      {/* Internship Section */}
      <section id="internship" className="section">
        <h2>Internship</h2>
        <p>Details about your internship experience...</p>
      </section>

      {/* Project Section */}
      <section id="project" className="section">
        <h2>Projects</h2>
        <p>Details about your projects...</p>
      </section>

      {/* Certificate Section */}
      <section id="certificate" className="section">
        <h2>Certificates</h2>
        <p>Details about your certifications...</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Provide your contact details...</p>
      </section>
    </div>
  );
};

export default Portfolio;
