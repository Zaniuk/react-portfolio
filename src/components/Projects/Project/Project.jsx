import React from 'react'

export default function Project({projectName, projectAlt, projectImg, projectAbout, projectType}) {
  return (
    <div class="card">
    <div class="card-header">
      <img src={projectImg} alt={projectAlt} />
    </div>
    <div class="card-body">
      <span class="tag tag-pink">{projectType}</span>
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
