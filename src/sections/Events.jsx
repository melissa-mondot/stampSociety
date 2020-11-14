import React from "react";
import { Container } from "../layout";

const Events = () => {
	return (
		<Container fluid className="bg-secondary text-light py-3 px-sm-5">
			<p className="h3">Upcoming Events</p>
			<p className="font-weight-light">
				We have several special events per year in addition to our regular
				meetings. Check back soon!
			</p>
		</Container>
	);
};

export default Events;
