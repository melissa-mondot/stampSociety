import React from "react";
import { Container, Jumbotron } from "../layout";

const Hero = () => {
	return (
		<>
			<Container fluid className="hero-bg">
				<Jumbotron fluid className="transparent-bg mb-0">
					<Container>
						<h1>Lorem ipsum</h1>
						<h2>Lorem ipsum dolor sit.</h2>
						<hr />
						<h3 className="text-right">11th & 12th of Qui, 3029</h3>
					</Container>
					<Container fluid className="text-right">
						<p>
							<small>
								Photo by{" "}
								<a href="https://unsplash.com/@hopelessvulpes?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
									Ali Bakhtiari
								</a>
							</small>
						</p>
					</Container>
				</Jumbotron>
			</Container>
		</>
	);
};

export default Hero;
