import React from 'react'

export default function SkillItem({skill, img, altImg}) {
  return (
    <li>
        <img src={img} alt={altImg} />
        <span>{skill}</span>
    </li>
  )
}
