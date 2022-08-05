import React from 'react'

import { Link } from 'react-router-dom'
export default function NavList() {
    return (
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/blog'}>Blog</Link>

            </li>
            <li>
                <Link to={'/projects'}>Projects</Link>

            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
        </ul>
    )
}
