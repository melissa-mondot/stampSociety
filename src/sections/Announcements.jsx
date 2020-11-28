import React from "react";
import { Container } from "../layout";
import {announcementsData} from "../docs/announcementsData"

const Announcements = () => {
	return (
		<Container fluid className="bg-primary text-light">
			<p className="pt-2 px-3">Announcements:</p>
	<p className="pb-2 px-5">{announcementsData.announcements}</p>
		</Container>
	);
};

export default Announcements;
