import React from 'react'

export default function Project({projectName, projectAlt, projectImg, projectAbout, projectType, githubLink}) {
  return (
    <div className="card">
    <div className="card-header">
      <img src={projectImg} alt={projectAlt} />
    </div>
    <div className="card-body">
      <span className="tag tag-pink">{projectType}</span>
      <h4>
        {projectName}
      </h4>
      <p>
        {projectAbout}
      </p>
      <div className="btn-container">
        <a href={githubLink}><button>Github</button></a>
        <button className='project-disabled'>Demo</button>
        <button className='project-disabled'>About</button>
      </div>
    </div>
  </div>
  )
}
