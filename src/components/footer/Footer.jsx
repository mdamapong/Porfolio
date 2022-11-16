import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs'
import { AiFillTwitterCircle, AiOutlineInstagram } from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      {/* <a href="#" className='footer_logo'>MICKEY</a> */}
      <ul className='permalinks'>
        {/* <li><a href="#">Home</a></li> */}
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirence</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>


      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/mickey-damapong/"><BsLinkedin /></a>
        <a href="https://twitter.com/mdamapong"><AiFillTwitterCircle /></a>
        <a href="https://www.instagram.com/mickey.d___/"><AiOutlineInstagram /></a>
      </div>


    </footer>)
}

export default Footer