import React from 'react';
import './contact.css';
import { HiOutlineMail, } from 'react-icons/hi';
import { AiOutlineLinkedin, AiOutlineWhatsApp } from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rtaqpa6', 'service_rtaqpa6', form.current, 'gKOD6A1kkWb6-1e4D')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>mdamapong@gmail.com</h5>
            <a href="http://mailto:mdamapong@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className='contact__option-icon' />
            <h4>Linkedin</h4>
            <h5>mickey-damapong</h5>
            <a href="https://www.linkedin.com/in/mickey-damapong/">Send a message</a>
          </article>        <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+1(831) 915-4372</h5>
            <a href="http://api.whatsapp.com/send?phone+18319154372">Send a message</a>
          </article>
        </div>


        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>

    </section>
  )
}

export default Contact