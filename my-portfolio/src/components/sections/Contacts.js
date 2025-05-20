// import React from 'react';
// import './Contacts.css';

// const Contact = () => {
//   return (
//     <div className="contact">
//       <h2>Contact Me</h2>
//       <div className="social-links">
//         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
//         <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
//         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
//       </div>
//       <form className="contact-form">
//         <input type="text" placeholder="Your Name" required />
//         <input type="email" placeholder="Your Email" required />
//         <textarea placeholder="Your Message" required></textarea>
//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;



import React from 'react';
import './Contacts.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <div className="social-links">
        <a href="https://www.instagram.com/mehitha_jf?igsh=dG94Mnl6dG1mcmlp" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://youtube.com/@iamthechildofjesus6152?si=YNmONrf6u4Nkm3Bs" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href="https://www.linkedin.com/in/mehitha-j-67629b252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      
      {/* WORKING FORM - REPLACE YOUR-EMAIL@GMAIL.COM WITH YOUR ACTUAL EMAIL */}
      <form 
  className="contact-form" 
  action="https://formsubmit.co/angelinmehitha@gmail.com"  // 👈 Replace with YOUR email
  method="POST"
>
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>

  {/* Required hidden fields */}
  {/* <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_template" value="basic" /> */}

  <button type="submit">Send Message</button>
</form>
    </div>
  );
};

export default Contact;