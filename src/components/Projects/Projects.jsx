import React from 'react'
import Project from './Project/Project'
import './Projects.scss'

export default function Projects() {
  return (
    <section className='projects fh'>
      <div className="projects-wrapper">
      <h1><span className="accent">My Projects</span></h1>
      <h6><span>(Demo and About buttons are disabled due to blog under development)</span></h6>
        <div className="projects-container">
          <Project
            projectImg={'https://picsum.photos/200'}
            projectAlt={'Blog API'}
            projectName={'Blog API'}
            projectAbout={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, vitae culpa officiis libero voluptatem'}
            projectType={'Backend'}
            githubLink={'https://github.com/Zaniuk/portfolio-backend'}
          />
          <Project
            projectImg={'https://picsum.photos/200'}
            projectAlt={'ABM Operations webpage'}
            projectName={'ABM Operations webpage'}
            projectAbout={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, vitae culpa officiis libero voluptatem'}
            projectType={'Fullstack'}
            githubLink={'https://github.com/Zaniuk/AlkemyChallenge'}
          />
          <Project
            projectImg={'https://picsum.photos/200'}
            projectAlt={'The Wine Valley'}
            projectName={'The Wine Valley'}
            projectAbout={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, vitae culpa officiis libero voluptatem'}
            projectType={'Frontend'}
            githubLink={'https://github.com/Zaniuk/TiendaVinos'}
          />
        </div>
      </div>
    </section>
  )
}
