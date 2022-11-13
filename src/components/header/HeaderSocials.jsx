import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/mickey-damapong/' target='_blank' rel="noopener noreferrer"><BsLinkedin /></a>
      <a href='https://github.com/mdamapong' target='_blank' rel="noopener noreferrer"><FaGithub /></a>
      <a href='https://twitter.com/mdamapong' target='_blank' rel="noopener noreferrer"><AiFillTwitterCircle /></a>


    </div>
  )
}

export default HeaderSocials