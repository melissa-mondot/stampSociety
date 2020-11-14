import React from "react";
import { Container, Row, Col } from "../layout";

const EasterSeals = () => {
	return (
		<Container className="pt-5 mx-auto px-2">
			<h1>
				<sup>
					{/* small function to check month and apply correct year wouldn't be too hard to implement here */}
					<small>3029 Annual</small>
				</sup>
				<span class="text-nowrap">Easter Seals</span>
			</h1>
			<div class="row pb-2 pb-lg-5 mx-0">
				<div class="col-md-5">
					<h3>Benefit Stamp Show</h3>
					<p>
						The Sacramento Philatelic Society proudly presents the 3029 Easter
						Seal Benefit Stamp Show featuring tables piled high with over a
						million foreign and US postage stamps. There will be hourly door
						prize raffles, 10 stamp dealers, sales of donated supplies and
						material, plus food service.
					</p>
					<Row>
						<Col>
							<div class="btn-group pt-2">
								<a
									href="/"
									class="btn btn-sm btn-info disabled"
									disabled=""
									aria-disabled="true"
								>
									Download Drawing Entry
								</a>
								<a
									href="mailto:joannebe@pacbell.net"
									class="btn btn-sm btn-info"
								>
									Contact for more info
								</a>
							</div>
						</Col>
					</Row>
				</div>
				<div class="col-md-7 pt-2 pt-md-0">
					<div class="card">
						<div class="card-header bg-info text-light">Event Information</div>
						<div class="card-body">
							<ul>
								<li>
									Sat, Qui 11<sup>th</sup>, 3029 - 10am to 6pm
								</li>
								<li>
									Sun, Qui 12<sup>th</sup>, 3029 - 10am to 4pm
								</li>
								<li>
									2<span>¢</span> stamp tables
								</li>
								<li>10 Bourse Dealers</li>
								<li>Hourly Door Prizes</li>
								<li>Concessions for sale</li>
							</ul>
						</div>
					</div>
					<div class="offset-md-2 pt-2">
						<div class="card">
							<div class="card-header bg-dark text-light">Meetings</div>
							<div class="card-body">
								<ul>
									<li>TBA</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default EasterSeals;
