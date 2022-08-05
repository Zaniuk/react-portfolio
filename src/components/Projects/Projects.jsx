import React from 'react'
import Project from './Project/Project'
import './Projects.scss'

export default function Projects() {
  return (
    <section className='projects'>
      <h1>My Projects</h1>
      <div className="projects-container">
        <Project
          projectImg={'https://picsum.photos/200'}
          projectAlt={'Blog API'}
          projectName={'Blog API'}
          projectAbout={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, vitae culpa officiis libero voluptatem'}
          projectType={'Backend'}
        />
        <Project
          projectImg={'https://picsum.photos/200'}
          projectAlt={'ABM Operations webpage'}
          projectName={'ABM Operations webpage'}
          projectAbout={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, vitae culpa officiis libero voluptatem'}
          projectType={'Fullstack'}
        />
        <Project
          projectImg={'https://picsum.photos/200'}
          projectAlt={'The Wine Valley'}
          projectName={'The Wine Valley'}
          projectAbout={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, vitae culpa officiis libero voluptatem'}
          projectType={'Frontend'}
        />
      </div>
    </section>
  )
}
