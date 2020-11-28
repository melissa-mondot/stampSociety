import React from "react";
import {
	Col,
	Container,
	Image,
	Row,
	ButtonGroup,
	Button,
	// Card,
} from "../layout";
// import easterSealsMap from "../img/easterSealsMap.png";
import zoomImage from "../img/zoom.png";

const MembershipInfo = () => {
	return (
		<Container className="mx-auto my-3">
			<Row className="d-flex align-items-center">
				<Col sm={8}>
					<p class="h3">Curious about stamp collecting?</p>
					<p>
						<em>We'd love to meet you!</em> We meet every Wednesday from 7-9 PM
						with Zoom!.
					</p>
				</Col>
				<Col xs={4}>
					<Image fluid src={zoomImage} />
				</Col>
				<Col xs={12}>
					<p class="h2">Ready to join?</p>
					<p>
						Great! You'll be joining a fellowship of nearly 200 stamp
						collectors, novices and experts alike. So whether you're a seasoned
						or beginner philatelist, you will be in good company.
					</p>
					<ButtonGroup>
						<Button
							download="spsNewMemberForm"
							href="../docs/spsNewMemberForm.pdf"
							role="button"
						>
							New Members
						</Button>
						<Button
							download="spsReturningMemberForm"
							href="../docs/spsReturningMemberForm.pdf"
							role="button"
						>
							Returning Members
						</Button>
					</ButtonGroup>
					{/* <a href="https://goo.gl/maps/WVBqRsjpko9vxDoT8">
						<Image fluid src={easterSealsMap} />
					</a> */}
				</Col>
			</Row>
		</Container>
	);
};

export default MembershipInfo;
