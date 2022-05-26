import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import HelmetData from "../components/common/Helmet";
import PageIntro from "../components/common/PageIntro";
import ProjectSection from "../components/FeatureHouse/ProjectSection";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";
import Slider_Project from "../Elements/Slider/Slider_Project";

export default class Project extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Helmat Data Start*/}
        <HelmetData pageTitle="Project" />
        {/* Helmat Data End*/}

        {/* Header section start  */}
        <Header logo="dark" />
        {/* Header section End  */}

        {/* Page intro start */}
        <PageIntro title="Project" />
        {/* Page intro End */}

        {/* Project section start */}
        <div className="project_section projectPage ">
          <div className="wrapper">
            <Container>
              <Row className="part_1">
                <Col>
                  <div className="wrapperBody">
                    <h1>All projects</h1>
                    <h2>All Works</h2>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                  </div>
                </Col>
              </Row>
              <div className="part_2">
                <div className="wrapperBody text-center">
                  <ProjectSection />
                  <Link className="small_solid_color mt-30 " to={"#"}>
                    Load More
                  </Link>
                </div>
              </div>
              <div></div>
            </Container>
            {/* Project Slider Start */}
            <div className="sliderProject">
              <Container>
                <Row>
                  <Col>
                    {" "}
                    <div className="wrapperBody">
                      <Slider_Project></Slider_Project>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* Project Slider End */}
          </div>
        </div>
        {/* Project section End */}

        {/* Footer Start */}
        <Footer />
        {/* Footer End */}
      </React.Fragment>
    );
  }
}