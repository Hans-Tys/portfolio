import React from 'react'
import Img from '../clothes.png'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap'

function Projects() {
  return (
    <div className='Projects' id="projects">

      <Container>
        <Row>
          <Col>
            <img src={Img} className="rounded shadow" width="180px" heigth="500px" />
          </Col>
          <Col>
            <img src={Img} className="rounded shadow" width="180px" heigth="500px" />
          </Col>
          <Col>
            <img src={Img} className="rounded shadow" width="180px" heigth="500px" />
          </Col>
          <Col>
            <img src={Img} className="rounded shadow" width="180px" heigth="500px" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Projects
