import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education">
      <h2>Education</h2>
      <div className="edu-cards">
        <div className="edu-card">
          <h3>Bachelor's Degree</h3>
          <p>Computer Science - ANNA University</p>
        </div>
        <div className="edu-card">
          <h3>High School</h3>
          <p>INFANT JESUS Higher Secondary School</p>
        </div>
        <div className="edu-card">
          <h3>Certifications</h3>
          <p>React, Node.js, Full Stack Web Development</p>
        </div>
      </div>
    </div>
  );
};

export default Education;