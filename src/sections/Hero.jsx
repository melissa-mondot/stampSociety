import React from "react"
import { Container, Jumbotron } from "../layout"
import { heroData } from "../docs/heroData"

const Hero = () => {
  return (
    <>
      <Container fluid className="hero-bg">
        <Jumbotron className="transparent-bg mb-0">
          <Container>
            <h1>{heroData.headline}</h1>
            <h2>{heroData.subHeadline}</h2>
            <hr />
            <h3 className="text-right">{heroData.dates}</h3>
          </Container>
          <Container fluid className="text-right">
            <p>
              <small>
                Photo by{" "}
                <a href="https://unsplash.com/@hopelessvulpes?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                  Ali Bakhtiari
                </a>
              </small>
            </p>
          </Container>
        </Jumbotron>
      </Container>
    </>
  )
}

export default Hero
