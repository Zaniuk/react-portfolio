import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
export default function AboutRoute() {
  return (
    <>
    <Navbar/>
    <section className="container fh">
      
      <About/>
      
    </section>
    <Footer/>
    </>
  )
}
