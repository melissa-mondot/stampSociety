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
        <span className="text-nowrap">Easter Seals</span>
      </h1>
      <div className="row pb-2 pb-lg-5 mx-0">
        <div className="col-md-5">
          <h3>Benefit Stamp Show</h3>
          <p>{esData.mainDescription}</p>
          <Row>
            <Col>
              <div className="btn-group pt-2">
                <a
                  href="/"
                  className="btn btn-sm btn-info disabled"
                  disabled=""
                  aria-disabled="true">
                  Download Drawing Entry
                </a>
                <a
                  href="mailto:joannebe@pacbell.net"
                  className="btn btn-sm btn-info">
                  Contact for more info
                </a>
              </div>
            </Col>
          </Row>
        </div>
        <div className="col-md-7 pt-2 pt-md-0">
          <div className="card">
            <div className="card-header bg-info text-light">
              Event Information
            </div>
            <div className="card-body">
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
          <div className="offset-md-2 pt-2">
            <div className="card">
              <div className="card-header bg-dark text-light">Meetings</div>
              <div className="card-body">
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
