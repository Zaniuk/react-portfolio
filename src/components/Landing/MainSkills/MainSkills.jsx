import React from 'react'
import SkillItem from './SkillItem'
import './MainSkills.css'
import { SiSequelize, SiPostgresql, SiMongodb, SiExpress, SiSvelte } from "react-icons/si";

import { FaReact, FaNodeJs, FaPython, FaJsSquare, FaFlask } from "react-icons/fa";

export default function MainSkills() {

  return (
    <div className='skills-container' >
      <ul className='skill-list'>
        <SkillItem  icon={<FaJsSquare/>} skill={'JavaScript'} />
        <SkillItem icon={<FaNodeJs/>} skill={'NodeJS'} />
        <SkillItem icon={<SiExpress/>} skill={'ExpressJS'} />
        <SkillItem icon={<SiMongodb/>} skill={'MongoDB'} />
        <SkillItem icon={<FaReact/>} skill={'ReactJS'} />
        <SkillItem icon={<SiSvelte/>} skill={'Svelte'} />
        <SkillItem icon={<SiPostgresql/>} skill={'PostgreSQL'} />
        <SkillItem icon={<SiSequelize/>} skill={'Sequelize'} />
        <SkillItem icon={<FaPython/>} skill={'Python'} />
        <SkillItem icon={<FaFlask/>} skill={'Flask'} />
      </ul>
      <div className="skewed-background"></div>
    </div >
  )
}
