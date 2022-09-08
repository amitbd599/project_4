import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HelmetData from "../components/common/Helmet";
import PageIntro from "../components/common/PageIntro";
import TeamSection from "../components/FeatureHouse/TeamSection";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";

export default class Team extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Helmat Data Start*/}
        <HelmetData pageTitle="Team" />
        {/* Helmat Data End*/}

        {/* Header section start  */}
        <Header logo="dark" />
        {/* Header section End  */}

        {/* Page intro start */}
        <PageIntro title="Team" />
        {/* Page intro End */}

        {/* Our team section start*/}
        <div className="teamSection">
          <div className="wrapper">
            <Container>
              <Row className="part_1">
                <Col>
                  <div className="textBody">
                    <h1>Skilled Team</h1>
                    <h2>Our Skilled Team</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Praesentium officiis ipsa aliquam asperiores a error
                      perspiciatis pariatur, voluptatibus possimus?
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="part_2">
                <Col>
                  <div className="wrapperBody">
                    <TeamSection />
                  </div>
                </Col>
              </Row>
            </Container>{" "}
          </div>
        </div>
        {/* Our team section End*/}

        {/* Footer Start */}
        <Footer />
        {/* Footer End */}
      </React.Fragment>
    );
  }
}
