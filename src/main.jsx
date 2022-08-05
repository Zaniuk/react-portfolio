import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import BlogRoute from './routes/Blog.route'
import AboutRoute from './routes/About.route'
import ProjectsRoute from './routes/Projects.route'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.scss'
import NotFoundRoute from './routes/NotFound.route'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/blog' element={<BlogRoute/>}/>
      <Route path='/about' element={<AboutRoute/>}/>
      <Route path='/projects' element={<ProjectsRoute/>}/>
      <Route path='*' element={<NotFoundRoute/>}/>
    </Routes>
  </BrowserRouter>
)
