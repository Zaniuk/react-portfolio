import React from 'react'
import './Navbar.scss'
import { FaBars } from "react-icons/fa";

import NavList from './NavList'
export default function Navbar() {
  return (
    <header>
      <nav>
        <input type="checkbox" id="active" />
        <label htmlFor="active" className="menu-btn">
          <FaBars/>
        </label>
        <div className="wrapper">
          <NavList/>
        </div>
      </nav>
    </header>
  )
}
