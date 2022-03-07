import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

function Home() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home
