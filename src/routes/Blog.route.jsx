import React from 'react'
import Blog from '../components/Blog/Blog'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
export default function BlogRoute() {
  return (
    <>
    <Navbar/>
    <div className="container">
      
      <Blog/>
    </div>
    <Footer/>
    </>
  )
}
