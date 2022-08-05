import React from 'react'
import './Presentation.scss'
export default function Presentation() {
    return (
        <>
            <div className='presentation-container'>
                <h1>Hi, I'm <span className='accent'>Geronimo Zaniuk</span></h1>
                <h2>Full-stack web developer</h2>
                <p>
                    Natural <span className="accent">challenge-seeker</span>, a <span className="accent">fast-learner</span> and <span className="accent">multidisciplinary</span> person. I'm searching for my first oportunity to work on a software development team.
                </p>
                <button>Contact me</button>
            </div>
            
        </>
    )
}
