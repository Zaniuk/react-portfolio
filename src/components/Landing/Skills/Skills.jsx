import React from 'react'
import MainSkills from '../MainSkills/MainSkills'
import './Skills.scss'
export default function Skills() {
    return (
        <div id="skills-container">
            <div className="profile-img"></div>
            <h1>
                Main Skills
            </h1>
            <div className="description">
                <MainSkills/>
            </div>
        </div>
    )
}
