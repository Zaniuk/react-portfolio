import React from 'react'
import Project from './Project/Project'
import './Projects.scss'
import img from '../../assets/istockphoto-1047259374-612x612.jpg'
export default function Projects() {
  return (
    <section className='projects fh'>
      <div className="projects-wrapper">
      <h1><span className="accent">My Projects</span></h1>
      <h6><span>(Demo and About buttons are disabled due to blog under development)</span></h6>
        <div className="projects-container">
          <Project
            projectImg={img}
            projectAlt={'Blog API'}
            projectName={'Blog API'}
            projectAbout={'An implementation of a blog system for my personal page. '}
            projectType={'Backend'}
            githubLink={'https://github.com/Zaniuk/portfolio-backend'}
          />
          <Project
            projectImg={img}
            projectAlt={'ABM Operations webpage'}
            projectName={'ABM Operations webpage'}
            projectAbout={'Made with Node, Express, React and PostgreSQL'}
            projectType={'Fullstack'}
            githubLink={'https://github.com/Zaniuk/AlkemyChallenge'}
          />
          <Project
            projectImg={img}
            projectAlt={'The Wine Valley'}
            projectName={'The Wine Valley'}
            projectAbout={'Static page of a wine catalog made as a team.'}
            projectType={'Frontend'}
            githubLink={'https://github.com/Zaniuk/TiendaVinos'}
          />
        </div>
      </div>
    </section>
  )
}
