import React from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'

export default function Contact() {
  return (
    <div id="contact" className='contact-form'>

        <Form>
          <Form.Group className="mb-3 form-email" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />


          </Form.Group>

        <Form.Group className="mb-3 form-text" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={8} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>

        </Form>

    </div>
  )
}
