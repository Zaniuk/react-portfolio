import React from 'react'
import Presentation from './Presentation/Presentation'
import './Landing.scss'
import Skills from './Skills/Skills'

export default function Landing() {
  return (
  <>
    <section className='fh landing'>
      <Presentation/>
      <Skills/>
    </section>
  </>
  )
}
