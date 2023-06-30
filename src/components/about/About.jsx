import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
// import { TbAward } from 'react-icons/tb'
// import { SiJavascript, SiReact, SiCsswizardry, SiJquery, SiPython, SiHtml5, SiNextdotjs, SiGatsby } from 'react-icons/si'
// import { CgWebsite } from 'react-icons/cg'
// import { AiOutlineCloudServer } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='*' />
          </div>
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
            I entered the software engineering career field through self-learning using online resources like the App Academy Prep course and Harvard CS50. Additionally, I dedicated over 400 hours to attending the Fullstacks software engineering course at General Assembly in San Francisco. With my certificate in hand, I am eager to secure a web development job, demonstrating my strong commitment and rapid learning abilities. I am also currently attending college to gain more knowledge in Computer Science at City College of San Francisco. With an original educational background in Anthropology, specifically Cultural Anthropology, I have honed strong interpersonal skills in group work environments. With my relentless pursuit of knowledge, adaptability, and dedication, I am well-suited for any job and ready to make meaningful contributions to your team.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About