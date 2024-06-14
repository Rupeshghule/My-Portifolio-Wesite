import React, { useRef } from 'react';
import "./contact.css";
import Fb from "../../assets/fbicon.png";
import LinkedIn from "../../assets/linkedinicon.png";
import insta from "../../assets/instaicon.png";
import wp from "../../assets/wpicon.png";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('sendEmail function called');
    emailjs
      .sendForm('service_0rrhke9', 'template_sf0dtgp', form.current,{
        publicKey: 'NoZgMzTT_qPS_94Ce',
      })
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          form.current.reset();
          alert('Email Sent !');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section className='contactPage'>
      <div id='contact'>
        <h1 className='Title'> Contact Me</h1>
        <span className='contactDesc'> Please fill out the form below to discuss any work opportunity.</span>

        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type="text" className='name' placeholder='Your Name' name='from_name' required />
          <input type="email" className='email' placeholder='Your Email' name='from_email' required />
          <textarea name="message" className='msg' placeholder='Your Message' rows={10} required ></textarea>
          <button type='submit' className='submition'>Submit</button>
          <div className="links">
            <a href="https://wa.me/"><img src={wp} alt="WhatsApp" className='link' /></a>
            <a href="https://www.linkedin.com/"><img src={LinkedIn} alt="LinkedIn" className='link' /></a>
            <a href="https://www.facebook.com/"><img src={Fb} alt="Facebook" className='link' /></a>
            <a href="https://www.instagram.com/"><img src={insta} alt="Instagram" className='link' /></a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
