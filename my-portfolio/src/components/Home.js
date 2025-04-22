import React from 'react';
import './Home.css';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Internship from './sections/Internship';
import Projects from './sections/Projects';
import Contact from './sections/Contacts';

// const Home = () => {
//   return (
  // <div className="home">
  //     <section id="about"><About /></section>
  //     <section id="education"><Education /></section>
      // <section id="skills"><Skills /></section>
  //     <section id="internship"><Internship /></section>
  //     <section id="projects"><Projects /></section>
      // <section id="contact"><Contact /></section>
  //   </div>
//   );
// };

// export default Home;



// import React from 'react';
// import About from './sections/About';

const Home = () => {
  return (
    <div className="home">
      <section id="about"><About /></section>
      <section id="education"><Education /></section>
      <section id="skills"><Skills /></section>
      <section id="internship"><Internship /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      
     
    </div>
  );
};

export default Home;

