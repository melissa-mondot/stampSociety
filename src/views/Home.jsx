import React from "react";
import {
	Hero,
	EasterSeals,
	Annoucements,
	Newsletter,
	MembershipInfo,
	Events,
	History,
} from "../sections";

const Home = () => {
	return (
		<>
			<Hero />
			<Annoucements />
			<EasterSeals />
			<Newsletter />
			<MembershipInfo />
			<Events />
			<History />
		</>
	);
};

export default Home