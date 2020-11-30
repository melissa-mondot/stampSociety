import React, { useState } from "react"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import * as FirestoreService from "../firebase/firestore"

import {
  Navbar,
  Nav,
  Image,
  Button,
  Container,
  Col,
  Form,
  Row,
  Modal,
} from "../layout"
import logo from "../img/sps-logo-darker-bg.png"

const MainFooter = () => {
  const [formData, setFormData] = useState({})
  const [modalShow, setModalShow] = useState(false)
  const handleModalShow = () => setModalShow(true)
  const handleModalClose = () => setModalShow(false)

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createMessage()
    setFormData({
      name: "",
      email: "",
      message: "",
    })
  }

  const createMessage = (e) => {
    const contactName = document.contactForm.contactName.value
    const contactEmail = document.contactForm.contactEmail.value
    const contactMessage = document.contactForm.contactMessage.value

    FirestoreService.createMessage(contactName, contactEmail, contactMessage)
      .then(console.log("Message sent"))
      .catch((err) => console.log(err))
  }
  //   console.log(modalShow)
  return (
    <div className="bg-dark">
      <Modal show={modalShow} onHide={handleModalClose}>
        <Modal.Body>
          Thank you for your message! We will get back to you soon.{" "}
        </Modal.Body>
      </Modal>
      <Container fluid="lg" className="bg-dark static-bottom py-5">
        <Row>
          <Col className="d-flex flex-sm-row flex-md-column">
            <Navbar.Brand as={Link} to="/">
              <Image fluid src={logo} className="pr-lg-5" />
            </Navbar.Brand>

            <Navbar variant="dark">
              <Nav className="flex-column">
                <Nav.Link as={HashLink} to="/sps-leadership?#">
                  Our Members
                </Nav.Link>
                <Nav.Link disabled>Registration</Nav.Link>
                <Nav.Link disabled>Membership</Nav.Link>
                <Nav.Link disabled>By-Laws</Nav.Link>
                <Nav.Link to="https://www.dropbox.com/sh/xqt6rcc6f2tnbb7/AAANC1kH8mdY5Hvy0BY1LMJMa?dl=0">
                  Newsletter Archives
                </Nav.Link>
              </Nav>
            </Navbar>
          </Col>

          <Col xs={12} md={{ span: 6, offset: 3 }} className="mx-auto">
            <Form name="contactForm" onSubmit={handleSubmit} className="pb-3">
              <Form.Group controlId="contactForm.name">
                <Form.Label className="text-light">Name</Form.Label>
                <Form.Control
                  type="text"
                  name="contactName"
                  value={formData.contactName || ""}
                  onChange={updateInput}></Form.Control>
              </Form.Group>{" "}
              <Form.Group controlId="contactForm.email">
                <Form.Label className="text-light">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="hello@email.com"
                  name="contactEmail"
                  value={formData.contactEmail || ""}
                  onChange={updateInput}></Form.Control>
              </Form.Group>
              <Form.Group controlId="contactForm.message">
                <Form.Label className="text-light">Message</Form.Label>
                <Form.Control
                  name="contactMessage"
                  as="textarea"
                  rows="4"
                  value={formData.contactMessage || ""}
                  onChange={updateInput}></Form.Control>
              </Form.Group>
              <Button type="submit" size="lg" onClick={handleModalShow}>
                Send
              </Button>
            </Form>
          </Col>
        </Row>
        <div className="developerInfo mt-5 pt-5">
          <small>
            Designed <span>&</span> Developed by{" "}
            <a href="https://mm-dev-portfolio.firebaseapp.com/">
              Melissa Mondot
            </a>
          </small>
        </div>
      </Container>
    </div>
  )
}

export default MainFooter
