import React from "react";
import { Navbar, Nav, Image, Button, Container } from "../layout";
import logo from "../img/sps-logo-darker-bg.png";

const MainNav = () => {
	return (
		<>
			<Container fluid className="bg-secondary">
				<Navbar expand="md" variant="dark" bg="secondary">
					<Navbar.Brand href="#home">
						<Image src={logo} height="70px" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="main-nav" />
					<Navbar.Collapse id="main-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#events">Events</Nav.Link>
							<Nav.Link href="#history">History</Nav.Link>
							<Nav.Link href="#more">More</Nav.Link>
							<Button>Contact Us</Button>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</>
	);
};

export default MainNav;
