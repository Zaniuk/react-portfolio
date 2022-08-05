import React from 'react'
import SkillItem from './SkillItem'
import './MainSkills.css'
export default function MainSkills() {
  
  return (
    <div className='skills-container' >
    <ul className='skill-list'>
      <SkillItem img={'https://i.picsum.photos/id/1023/25/25.jpg?hmac=5WMSLG5AZYwo1D5MIJmtsscTH9r0MWM4QscXZUNsP4o'} altImg={'JavaScript'} skill={'JavaScript'} />
      <SkillItem img={'https://i.picsum.photos/id/1023/25/25.jpg?hmac=5WMSLG5AZYwo1D5MIJmtsscTH9r0MWM4QscXZUNsP4o'} altImg={'NodeJS'} skill={'NodeJS'} />
      <SkillItem img={'https://i.picsum.photos/id/1023/25/25.jpg?hmac=5WMSLG5AZYwo1D5MIJmtsscTH9r0MWM4QscXZUNsP4o'} altImg={'ExpressJS'} skill={'ExpressJS'} />
      <SkillItem img={'https://i.picsum.photos/id/1023/25/25.jpg?hmac=5WMSLG5AZYwo1D5MIJmtsscTH9r0MWM4QscXZUNsP4o'} altImg={'MongoDB'} skill={'MongoDB'} />
      <SkillItem img={'https://i.picsum.photos/id/1023/25/25.jpg?hmac=5WMSLG5AZYwo1D5MIJmtsscTH9r0MWM4QscXZUNsP4o'} altImg={'PostgreSQL'} skill={'PostgreSQL'} />
      <SkillItem img={'https://i.picsum.photos/id/1023/25/25.jpg?hmac=5WMSLG5AZYwo1D5MIJmtsscTH9r0MWM4QscXZUNsP4o'} altImg={'Sequelize'} skill={'Sequelize'} />
      <SkillItem img={'https://i.picsum.photos/id/1023/25/25.jpg?hmac=5WMSLG5AZYwo1D5MIJmtsscTH9r0MWM4QscXZUNsP4o'} altImg={'Python'} skill={'Python'} />
      <SkillItem img={'https://i.picsum.photos/id/1023/25/25.jpg?hmac=5WMSLG5AZYwo1D5MIJmtsscTH9r0MWM4QscXZUNsP4o'} altImg={'Flask'} skill={'Flask'} />
    </ul>
    <div className="skewed-background"></div>
    </div >
  )
}
