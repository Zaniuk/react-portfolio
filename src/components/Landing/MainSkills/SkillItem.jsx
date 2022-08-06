import React from 'react'

export default function SkillItem({skill, icon}) {
  return (
    <li>
      <span className="icon">{icon}</span>
        <span>{skill}</span>
    </li>
  )
}
