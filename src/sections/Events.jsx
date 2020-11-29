import React from "react"
import { Container } from "../layout"
import { eventsData } from "../docs/eventsData"

const Events = () => {
  return (
    <Container
      id="events"
      fluid="lg"
      className="bg-secondary text-light py-3 px-sm-5">
      <Container fluid="lg">
        <p className="h3">Upcoming Events</p>
        <p className="font-weight-light">{eventsData.lede}</p>
        <p>{eventsData.event1} </p>
        <p>{eventsData.event2} </p>
        <p>{eventsData.event3} </p>
        <p>{eventsData.event4} </p>
      </Container>
    </Container>
  )
}

export default Events
