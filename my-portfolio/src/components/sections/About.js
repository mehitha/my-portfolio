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



// import React from 'react';
// import './About.css';
// import myPic from './images/mypic.jpeg';

// const About = () => {
//   return (
//     <section className="about">
//       <h2>About Me</h2>
//       <div className="about-container">
//         <div className="about-card">
//           <div className="image-container">
//             <img src={myPic} alt="My Profile" className="profile-image" />
//           </div>
//           <div className="about-text">
//             <p>
//               Hello! I'm MEHITHA, a full-stack developer with a passion for creating dynamic and interactive web applications.
//             </p>
//             <p>
//               I specialize in building responsive, user-friendly interfaces and developing scalable backend solutions using HTML, CSS, JavaScript, React, Node.js, and MySQL.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



import React from "react";
import "./About.css";
// import myPic from './images/mypic.jpeg';
import myPice from './images/myPice.png';// adjust the path as needed


const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h2>Hi There!</h2>
          <h1>I am <span className="highlight">Mehitha</span></h1>
          <p>FULL STACK DEVELOPER</p>
          <button className="contact-btn">Contact Me</button>
          {/* <button className="contact-btn">Download CV</button> */}
          <div className="info-blocks">
            <div>Email<br /><span>angelinmehitha@gmail.com</span></div>
            <div>Phone<br /><span>+91 8072385214</span></div>
            <div>Location<br /><span>Tamilnadu, INDIA</span></div>
          </div>
        </div>
        <div className="hero-image">
        
          <img src={myPice} alt="My Profile" />

        </div>
      </section>

      {/* About Section */}
      {/* <section className="about-section">
        <div className="about-image">
        <img src={myPic} alt="My Profile" />

        </div>
        <div className="about-text">
          <h4 className="section-intro">Who am I?</h4>
          <h2>I’m Mary Smith, a visual UX/UI Designer and Web Developer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="personal-info">
            <p><strong>Name:</strong> Mary Smith</p>
            <p><strong>Age:</strong> 26</p>
            <p><strong>From:</strong> New York, USA</p>
            <p><strong>Email:</strong> contact@example.com</p>
          </div>
          <button className="download-btn">Download CV</button>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="services-section">
        <h2 className="services-title">My Services</h2>
        <div className="services-grid">
          <div className="service-card">Web Development</div>
          <div className="service-card">Video Editor</div>
          <div className="service-card">Poster Designer</div>
          {/* <div className="service-card">Customer Support</div>
          <div className="service-card">Branding</div>
          <div className="service-card">Marketing</div> */}
        </div>
      </section>
    </div>
  );
};

export default About;
