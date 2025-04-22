import React from 'react';
import './Skills.css';

import htmlLogo from "./images/html.png";
import cssLogo from "./images/css.png";
import jsLogo from "./images/javascript.png";
import reactLogo from "./images/react.png";
import nodeLogo from "./images/node.png";

const Skills = () => {
  const skills = [
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'React', logo: reactLogo },
    { name: 'Node.js', logo: nodeLogo },
   
  ];

  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skill-logos">
        {skills.map(skill => (
          <div className="skill-item" key={skill.name}>
            <img src={skill.logo} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;