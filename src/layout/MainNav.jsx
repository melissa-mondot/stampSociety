import React from "react"
// import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { Navbar, Nav, Image, Button, Container } from "../layout"
import logo from "../img/spsLogo.png"

const MainNav = () => {
  return (
    <>
      <Container fluid className="bg-secondary">
        <Navbar expand="md" variant="dark" bg="secondary">
          <Navbar.Brand as={HashLink} to="/?#top">
            <Image src={logo} height="70px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={HashLink} to="/?#top">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/?#events">
                Events
              </Nav.Link>
              <Nav.Link as={HashLink} to="/?#history">
                History
              </Nav.Link>
              <Nav.Link as={HashLink} to="/?#footer">
                More
              </Nav.Link>
              <Button as={HashLink} to="/?#contactForm">
                Contact Us
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  )
}

export default MainNav
