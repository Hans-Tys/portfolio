import React from 'react'
import Img from '../clothes.png'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap'

function Projects() {
  return (
    <div className='Projects' id="projects">

      <Container fluid="md">
        <Row>
          <Col>
            <img src={Img} className="rounded shadow" width="100%" />
          </Col>
          <Col>
            <img src={Img} className="rounded shadow" width="100%"  />
          </Col>
          <Col>
            <img src={Img} className="rounded shadow" width="100%"  />
          </Col>
          <Col>
            <img src={Img} className="rounded shadow" width="100%"  />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Projects
