import React from "react"
import { Container, Row, Col, ButtonGroup, Button, Card } from "../layout"
import { esData } from "../docs/easterSealsData"

const EasterSeals = () => {
  return (
    <Container fluid="lg">
      <Container className="py-3 px-lg-5">
        <h1>
          <sup>
            <small>{esData.year} Annual</small>
          </sup>
          <span className="text-nowrap">Easter Seals</span>
        </h1>
        <Row>
          <Col>
            <h3>Benefit Stamp Show</h3>
            <p>{esData.mainDescription}</p>
            <Row className="py-3">
              <Col>
                <ButtonGroup>
                  <Button href="/" disabled aria-disabled="true">
                    Download Drawing Entry
                  </Button>
                  <Button href="mailto:joannebe@pacbell.net">
                    Contact for more info
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Col>
          <Col>
            <Col>
              <Card bg="info" text="light">
                <Card.Header>Event Information</Card.Header>
                <Card.Body>
                  <ul>
                    <li>
                      {esData.info.date1} - {esData.info.time1}
                    </li>
                    <li>
                      {esData.info.date2} - {esData.info.time2}
                    </li>
                    <li>{esData.info.info1}</li>
                    <li>{esData.info.info2}</li>
                    <li>{esData.info.info3}</li>
                    <li>{esData.info.info4}</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header>Meetings</Card.Header>
                <Card.Body>
                  <ul>
                    <p>{esData.meetings.meeting1}</p>
                    <p>{esData.meetings.meeting2}</p>
                    <p>{esData.meetings.meeting3}</p>
                    <p>{esData.meetings.meeting4}</p>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default EasterSeals
