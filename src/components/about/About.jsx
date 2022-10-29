import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { TbAward } from 'react-icons/tb'
import { SiJavascript, SiReact, SiCsswizardry, SiJquery, SiPython, SiHtml5, SiNextdotjs, SiGatsby } from 'react-icons/si'
import { CgWebsite } from 'react-icons/cg'
import { AiOutlineCloudServer } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <CgWebsite className='about__icon' />
              <h5>Front-end</h5>
              <small><SiJavascript /> <SiReact /> <SiNextdotjs /> <SiGatsby /> <SiCsswizardry /> <SiJquery /> <SiHtml5 /> </small>
            </article>
            <article className='about__card'>
              <AiOutlineCloudServer className='about__icon' />
              <h5>Back-end</h5>
              <small><SiPython /> </small>
            </article>
            <article className='about__card'>
              <TbAward className='about__icon' />
              <h5>Projects</h5>
              <small>5 Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sequi dignissimos eligendi laborum. Aperiam blanditiis suscipit debitis nihil aspernatur vel, aut animi voluptatem dicta, inventore, eligendi ratione magni ducimus aliquam?
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About