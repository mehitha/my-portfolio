// // File: src/components/sections/About.js
// import React from 'react';
// import './About.css';
// import myPic from './images/mypic.jpeg';

// const About = () => {
//   return (
//     <section className="about">
//      <div className="image-container">
//                 <img src={myPic} alt="My Profile" className="profile-image" />
//             </div>
//       <div className="about-text">
//         <h2>About Me</h2>
//         <p>
//           Hello! I'm [Your Name], a full-stack developer with a passion for creating dynamic and interactive web applications. I specialize in building responsive, user-friendly interfaces and developing scalable backend solutions. I'm always eager to learn and grow in the tech world.
//         </p>
//         <p>
//           My skills range from front-end technologies like HTML, CSS, and JavaScript to back-end development with Node.js and MySQL. I believe in continuous learning and aim to leverage modern tools and frameworks to solve real-world problems.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default About;



import React from 'react';
import './About.css';
import myPic from './images/mypic.jpeg';

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-card">
          <div className="image-container">
            <img src={myPic} alt="My Profile" className="profile-image" />
          </div>
          <div className="about-text">
            <p>
              Hello! I'm MEHITHA, a full-stack developer with a passion for creating dynamic and interactive web applications.
            </p>
            <p>
              I specialize in building responsive, user-friendly interfaces and developing scalable backend solutions using HTML, CSS, JavaScript, React, Node.js, and MySQL.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
