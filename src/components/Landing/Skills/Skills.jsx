import React from 'react'
import MainSkills from '../MainSkills/MainSkills'
import './Skills.scss'
export default function Skills() {
    return (
        <div id="skills-container">
            <div class="profile-img"></div>
            <h1>
                Main Skills
            </h1>
            <div class="description">
                <MainSkills/>
            </div>
            <button>Contact Me</button>
        </div>
    )
}
