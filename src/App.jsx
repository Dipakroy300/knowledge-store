import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import BlogItems from './components/BlogItems/BlogItems'
import Blog from './components/Blog/Blog'
import DisplayBlog from './components/DisplayBlog/DisplayBlog'

function App() {
  

  return(
    <div className='App'>
       <Header></Header>
       <BlogItems></BlogItems>
       <Blog></Blog> 
      
    </div>
  )
  
  
}

export default App
