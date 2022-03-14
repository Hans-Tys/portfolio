import React from 'react'
import Img from '../clothes.png'
import pokedexImg from '../pokedex.png'


function Projects() {
  return (
    <div className='Projects' id="projects">
      <h2>Projects</h2>


      <div className="Project-card">
        <img src={Img} className='image-card' />
        <div className="project-text">
          <h3>NOVI</h3>
          <p>We are a group of students from Le wagon Brussels coding school #batch748. We have partnered together
            based on the shared interest of clothing and conscious shopping, to bring a product that provides a
            synopsis on major brands out on the market.</p>
          <a className='btn-link' href="http://www.no-vi.shop/feed" target="blank">Try Out</a>
        </div>
      </div>
      <div className="Project-card">
        <img src={pokedexImg} className='image-card' />
        <div className="project-text">
          <h3>Pokedex</h3>
          <p>We are a group of students from Le wagon Brussels coding school #batch748. We have partnered together
            based on the shared interest of clothing and conscious shopping, to bring a product that provides a
            synopsis on major brands out on the market.</p>
            <a className='btn-link' href="pokedex" target="blank">Try Out</a>
        </div>
      </div>

    </div>
  )
}

export default Projects
