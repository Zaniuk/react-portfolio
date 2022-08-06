import React from 'react'

export default function Project({projectName, projectAlt, projectImg, projectAbout, projectType}) {
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
        <button>Demo</button>
        <button>Github</button>
        <button>About</button>
      </div>
    </div>
  </div>
  )
}
