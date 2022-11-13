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
          {/* <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div> */}
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            {/* <article className='about__card'>
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
            </article> */}
          </div>

          <p>
            My original education background is in Anthropology. Now I have been pursuing a software engineering career for the past two years by self learning with online resources such as an App Academy Prep course and Harvard CS50. I dedicated over 400 hours attending Fullstacks software engineering course at General Assembly, San Francisco. I've gained a lot of knowledge throughout Bootcamp, but problem solving is the most crucial lesson I've learned. Since I’ve received my certificate, I’ve been eager to find a job in web development. I have a strong commitment to this subject and am a rapid learner. Furthermore,the education in Cultural Anthropology has helped to build strong interpersonal relationships in a group working environment. any of my prior managers would attest to the fact that I am devoted and would contribute significantly to any team I join.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About