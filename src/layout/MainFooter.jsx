import React from "react";
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
					<Col xs={6}>
						<Navbar variant="dark">
							<Nav className="flex-column">
								<Nav.Link href="">Our Members</Nav.Link>
								<Nav.Link href="">Registration</Nav.Link>
								<Nav.Link href="">Membership</Nav.Link>
								<Nav.Link href="">By-Laws</Nav.Link>
							</Nav>
						</Navbar>
					</Col>
					<Col xs={6} className="d-flex">
						<Navbar.Brand href="#home">
							<Image src={logo} height="70px" />
						</Navbar.Brand>
					</Col>

					<Col xs={12}>
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
								<Form.Control type="textarea" rows="4"></Form.Control>
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
