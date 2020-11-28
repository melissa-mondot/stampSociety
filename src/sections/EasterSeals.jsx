import React from "react"
import { Container, Row, Col } from "../layout"
import { esData } from "../docs/easterSealsData"

const EasterSeals = () => {
  return (
    <Container className="pt-5 mx-auto px-2">
      <h1>
        <sup>
          {/* small function to check month and apply correct year wouldn't be too hard to implement here */}
          <small>{esData.year} Annual</small>
        </sup>
        <span class="text-nowrap">Easter Seals</span>
      </h1>
      <div class="row pb-2 pb-lg-5 mx-0">
        <div class="col-md-5">
          <h3>Benefit Stamp Show</h3>
          <p>{esData.mainDescription}</p>
          <Row>
            <Col>
              <div class="btn-group pt-2">
                <a
                  href="/"
                  class="btn btn-sm btn-info disabled"
                  disabled=""
                  aria-disabled="true">
                  Download Drawing Entry
                </a>
                <a
                  href="mailto:joannebe@pacbell.net"
                  class="btn btn-sm btn-info">
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
            </div>
          </div>
          <div class="offset-md-2 pt-2">
            <div class="card">
              <div class="card-header bg-dark text-light">Meetings</div>
              <div class="card-body">
                <ul>
                  <li>{esData.meetings.meeting1}</li>
                  <li>{esData.meetings.meeting2}</li>
                  <li>{esData.meetings.meeting3}</li>
                  <li>{esData.meetings.meeting4}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default EasterSeals
