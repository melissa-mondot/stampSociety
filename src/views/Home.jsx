import React from "react";
import {
	Hero,
	EasterSeals,
	Announcements,
	Newsletter,
	MembershipInfo,
	Events,
	History,
} from "../sections";

const Home = () => {
	return (
		<>
			<Hero />
			<Announcements />
			<EasterSeals />
			<Newsletter />
			<MembershipInfo />
			<Events />
			<History />
		</>
	);
};

export default Home