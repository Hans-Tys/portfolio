import React from 'react'

export default function Navbar() {
  return (
    <div className='nav-container'>
      <div className='left-side'>
        <h1>Hans Tys</h1>
        <div className='devider'></div>
        <ul className='nav'>
          <li className='nav-items'><a href="#projects">Projects</a></li>
          <li className='nav-items'><a href="Designs" target="blank">Designs</a></li>
        </ul>
      </div>
      <div>
      <a className='contact' href="#contact">Contact me</a>
      </div>
    </div>
  )
}
