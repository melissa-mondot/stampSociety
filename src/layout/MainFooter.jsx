import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import {
	Navbar,
	Nav,
	Image,
	Button,
	Container,
	Col,
	Form,
	Row,
} from "../layout";
import logo from "../img/sps-logo-darker-bg.png";

const MainFooter = () => {
	return (
		<>
			<Container fluid className="bg-dark static-bottom py-5">
				<Row>
					<Col xs={5} md={2}>
						<Navbar variant="dark">
							<Nav className="flex-column">
								<Nav.Link as={HashLink} to="/sps-leadership?#">
									Our Members
								</Nav.Link>
								<Nav.Link>Registration</Nav.Link>
								<Nav.Link>Membership</Nav.Link>
								<Nav.Link>By-Laws</Nav.Link>
							</Nav>
						</Navbar>
					</Col>
					<Col xs={7} md={4} className="mt-2">
						<Navbar.Brand as={Link} to="/">
							<Image fluid src={logo} />
						</Navbar.Brand>
					</Col>

					<Col className="mx-auto" xs={12} md={{ span: 5, offset: 1 }}>
						<Form className="pb-3">
							<Form.Group controlId="contactForm.name">
								<Form.Label className="text-light">Name</Form.Label>
								<Form.Control type="text"></Form.Control>
							</Form.Group>{" "}
							<Form.Group controlId="contactForm.email">
								<Form.Label className="text-light">Email</Form.Label>
								<Form.Control
									type="email"
									placerholder="hello@email.com"
								></Form.Control>
							</Form.Group>
							<Form.Group controlId="contactForm.message">
								<Form.Label className="text-light">Message</Form.Label>
								<Form.Control as="textarea" rows="4"></Form.Control>
							</Form.Group>
							<Button type="submit" size="lg">
								Send
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>

		</>
	);
};

export default MainFooter;
