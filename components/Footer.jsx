
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 JSM Headphones All rights reserved</p>
      <p className='icons'>
        <a href="https://github.com/Ahmed-Abo-Rafat"><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/ahmed-rafat-a489301a2/"><AiFillLinkedin /></a>
      </p>
    </div>
  )
}

export default Footer
