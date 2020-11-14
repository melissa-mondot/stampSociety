import React from "react";
import { Container, Form, InputGroup } from "../layout";

const Newsletter = () => {
	return (
		<Container fluid className="bg-secondary py-4">
			<div className="text-light text-center">
				<p class="">Want to keep up on our events and news?</p>
				<p class="lead">
					Sign up here for upcoming event info and our semi-monthly newsletter.
				</p>
			</div>
			<Container>
				<Form>
					{/* bring down email and raise on click should be implemented here */}
					<Form.Label className="text-light">Email</Form.Label>
					<InputGroup controlId="contactForm.email">
						<Form.Control
							type="email"
							placerholder="hello@email.com"
							aria-describedby="email"
						></Form.Control>
						<InputGroup.Append>
							<InputGroup.Text id="newsletter-submit">submit</InputGroup.Text>
						</InputGroup.Append>
					</InputGroup>
				</Form>
			</Container>
		</Container>
	);
};

export default Newsletter;
