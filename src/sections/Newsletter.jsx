import React, { useState } from "react"
import * as FirestoreService from "../firebase/firestore"
import { Container, Form, InputGroup, Button, Modal } from "../layout"

const Newsletter = () => {
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
    createSubRequest()
    setFormData({
      email: "",
    })
    handleModalShow()
  }

  const createSubRequest = (e) => {
    const subscriberEmail = document.newsletterSubscribe.subscriberEmail.value

    FirestoreService.createSubRequest(subscriberEmail)
      .then(console.log("newsletter request sent"))
      .catch((err) => console.log(err))
  }
  console.log(modalShow)

  return (
    <Container fluid className="bg-secondary py-4">
      <div className="text-light text-center">
        <p className="">Want to keep up on our events and news?</p>
        <p className="lead">
          Sign up here for upcoming event info and our semi-monthly newsletter.
        </p>
      </div>
      <Container>
        <Form name="newsletterSubscribe" onSubmit={handleSubmit}>
          {/* bring down email and raise on click should be implemented here */}
          <Form.Group controlId="contactForm.email">
            <Form.Label className="text-light">Email</Form.Label>
            <InputGroup>
              <Form.Control
                required
                type="email"
                name="subscriberEmail"
                placeholder="hello@email.com"
                value={formData.subscriberEmail || ""}
                onChange={updateInput}
                aria-describedby="email"></Form.Control>
              <InputGroup.Append>
                <Button type="submit">subscribe</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form>
      </Container>
    </Container>
  )
}

export default Newsletter
