import React from 'react'
import './Footer.scss'
import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <a href="https://www.linkedin.com/in/geronimo-zaniuk/"><span className='linkedin'><SiLinkedin/></span>LinkedIn</a>
        <a href="https://github.com/Zaniuk"><span className='github'><SiGithub/></span>GitHub</a>
        <a href="mailto:geronimozaniuk2000@gmail.com"><span className='gmail'><SiGmail/></span>Email</a>
      </div>
    </footer>
  )
}
