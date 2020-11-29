import React from "react"
import {
  Col,
  Container,
  Row,
  ButtonGroup,
  Button,
  Card,
} from "../layout"
// import easterSealsMap from "../img/easterSealsMap.png";
import zoomImage from "../img/zoom.png"

const MembershipInfo = () => {
  return (
    <Container fluid="lg">
      <Row className="py-3">
        <Col md={6} lg={3}>
          <Card>
            <Card.Body>
              <Card.Title>Curious about stamp collecting?</Card.Title>
              <Card.Text>
                <em>We'd love to meet you!</em> We meet every Wednesday from 7-9
                PM with Zoom!.
              </Card.Text>
              <Card.Img src={zoomImage} />
            </Card.Body>
          </Card>
        </Col>
        <Col  >
          <Card>
            <Card.Body>
              <Card.Title>Ready to join?</Card.Title>
              <Card.Text>
                Great! You'll be joining a fellowship of nearly 200 stamp
                collectors, novices and experts alike. So whether you're a
                seasoned or beginner philatelist, you will be in good company.
              </Card.Text>
              <ButtonGroup>
                <Button
                  download="spsNewMemberForm"
                  href="../docs/spsNewMemberForm.pdf"
                  role="button">
                  New Members
                </Button>
                <Button
                  download="spsReturningMemberForm"
                  href="../docs/spsReturningMemberForm.pdf"
                  role="button">
                  Returning Members
                </Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default MembershipInfo
