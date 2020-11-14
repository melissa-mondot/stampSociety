import React from "react";
import { Container, Row, Col } from "../layout";
import { leadership } from "../docs/leadership";

const Leadership = () => {
	return (
		<>
			<Container className="font-weight-light mt-4">
				<h3>Sacramento Philatelic Society Officers, {leadership.year}</h3>
				<hr />
				<Row>
					<Col xs={12} md={6}>
						<h4>{leadership.officers.president}</h4>
						<h6>President</h6>
					</Col>
					<Col xs={12} md={6}>
						<h4>{leadership.officers.vicePresident}</h4>
						<h6>Vice President</h6>
					</Col>
					<Col xs={12} md={6}>
						<h4>{leadership.officers.secretary}</h4>
						<h6>Secretary</h6>
					</Col>
					<Col xs={12} md={6}>
						<h4>{leadership.officers.treasurer}</h4>
						<h6>Treasurer</h6>
					</Col>
				</Row>
			</Container>
			<Container className="font-weight-light pt-3">
				<h3>Board of Directors, {leadership.year}</h3>
				<hr />
				<Row>
					<Col xs={12}>
						<h4>{leadership.directors.chairperson}</h4>
						<h6>Chairperson</h6>
					</Col>
					<Col xs={12} className="pt-3">
						<h6>Directors</h6>
						{leadership.directors.chairs.map((director, index) => (
							<h5>{director}</h5>
						))}
					</Col>
				</Row>
			</Container>
			<Container className="font-weight-light mt-4">
				<h3>Committee Chairpersons, {leadership.year}</h3>
				<hr />
				<Row>
					<Col xs={12} md={6}>
						<h4>{leadership.committeeChairs.sacapex}</h4>
						<h6>SACAPEX</h6>
					</Col>
					<Col xs={12} md={6}>
						<h4>{leadership.committeeChairs.easterSeals}</h4>
						<h6>Easter Seals Show</h6>
					</Col>
					<Col xs={12} md={6}>
						<h4>{leadership.committeeChairs.silentBid}</h4>
						<h6>Silent Bid Sales</h6>
					</Col>
					<Col xs={12} md={6}>
						<h4>{leadership.committeeChairs.program}</h4>
						<h6>Program</h6>
					</Col>
					<Col xs={12} md={6}>
						<h4>{leadership.committeeChairs.membership}</h4>
						<h6>Membership</h6>
					</Col>
					<Col xs={12} md={6}>
						<h4>{leadership.committeeChairs.entAndRecep}</h4>
						<h6>Entertainment and Reception</h6>
					</Col>
					<Col xs={12} md={6}>
						<h4>{leadership.committeeChairs.pubEditor}</h4>
						<h6>Publications Editor</h6>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Leadership;
