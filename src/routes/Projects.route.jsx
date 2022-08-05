import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Projects from '../components/Projects/Projects'
import Footer from '../components/Footer/Footer'
export default function ProjectsRoute() {
  return (
    <>
    <Navbar/>
    <div className="container">
      
      <Projects/>
      
    </div>
    <Footer/>
    </>
  )
}
