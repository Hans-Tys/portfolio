import React from 'react'
import Img from '../Hans-Tys.jpg'

function About() {
  return (
    <div className='About' id="about">
      <div className='about-container'>

        <img className='image' src={Img} height="500px"/>

        <div className='about-text-container'>
          <div className="horizontal-devider"></div>
          <p className='about-text'>
            As a developer, I want to show my ideas to the world and help other people realize their ideas too,
            but to do so I have to keep learning new skills so I can make the best products possible.

            In my free time, I enjoy drawing and surfing.
            I love the creative part of both of these hobbies they allow me to show my ideas and feelings in different ways.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
