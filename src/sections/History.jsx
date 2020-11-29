import React from "react"
import { Container, Figure } from "../layout"

const History = () => {
  return (
    <Container id="history" fluid="lg" className="py-3 px-lg-5">
      <p className="h3">Our Club History</p>
      <p className="lead text-muted">
        History of the Sacramento Philatelic Society
      </p>
      <p className="byline">By Bill Oliver</p>
      <hr />
      <article>
        <p>
          In 1914 Mr. A. W. Spanton placed an advertisement in the Sacramento
          Bee newspaper asking all interested in stamp collecting to meet for
          the purpose of forming a stamp club. Twelve responded with the result
          that the Sacramento Stamp Society was founded, and in 1961 was
          Incorporated as the Sacramento Philatelic Society.
        </p>

        <Figure className="float-left pr-lg-3">
          <Figure.Image
            fluid
            src={
              "https://postalmuseum.si.edu/sites/default/files/npm-1980_2493_5005.jpg"
            }
          />
          <Figure.Caption>
            <em>
              3-cent California Statehood single from{" "}
              <a href="https://postalmuseum.si.edu/exhibition/about-us-stamps-modern-period-1940-present-commemorative-issues-1950-1959-1950-1951-5">
                Smithsonian
              </a>
            </em>
          </Figure.Caption>
        </Figure>

        <p>
          The Sacramento Stamp Society held their meetings at the Y. M. C. A.,
          but the membership grew rapidly and they moved to larger quarters at
          the Chamber of Commerce then to the Travelers Hotel where a meeting
          room was provided by the management.
        </p>
        <p>
          Since that time the Sacramento Philatelic Society has held their
          meetings at churches, schools; and currently meeting at the Easter
          Seal Society Center, 3205 Hurley Way, Sacramento, CA every Wednesday
          evening with the doors opening at 7:00 PM, and the meeting at 8:00 PM.
          Currently there are over 250 members.
        </p>
        <p>
          1941 saw the Council of Northern California Philatelic Societies hold
          their First Annual Exhibit at the Sacramento Hotel with the Sacramento
          Stamp Society as host.
        </p>
        <p>
          The Sacramento Philatelic Society has held many stamp exhibitions, and
          in 1969 began their annual stamp exhibition SACAPEX (Sacramento
          Camellia City Philatelic Exhibition). This was a combined effort by
          the Sacramento Philatelic Society and the Camellia City Stamp Club of
          Sacramento for the first exhibition, but was produced solely by the
          Sacramento Philatelic Society the following years.
        </p>
        <p>
          The name SACAPEX (Sacramento California Philatelic Exhibition) was
          continued and scheduled every two years until 1974 when it became an
          annual event.
        </p>
        <p>
          The Sacramento Philatelic Society in 1957 started their Easter Seal
          Stamp Show as a communality project with all proceeds going to the
          Easter Seal Society. The first year began with a donation to the
          Easter Seal Society of $200.00 and the donations have increased every
          year to about $5,000.00 for the past twelve years, or more.
        </p>
        <p>
          The Sacramento Philatelic Society celebrated their ninetieth
          anniversary in 2004 when the American Philatelic Society held their
          annual Champion of Champions exhibition at Sacramento.
        </p>
        <p>
          The Sacramento Philatelic Society is an active club with many active
          members, and a number of activities by members for members. If you are
          in Sacramento on a Wednesday evening please come and say hello.
          Visitors are always welcome.
        </p>
      </article>
    </Container>
  )
}

export default History
