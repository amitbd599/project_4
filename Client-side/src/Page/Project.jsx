import React, { Component, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { readPortfolioPost__Request__API } from "../API/API";
import HelmetData from "../components/common/Helmet";
import PageIntro from "../components/common/PageIntro";
import ProjectSection from "../components/FeatureHouse/ProjectSection";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";
import Slider_Project from "../Elements/Slider/Slider_Project";

const Project = () => {
  useEffect(() => {
    readPortfolioPost__Request__API();
  }, []);

  const ProjectData = useSelector((state) => state.PortfolioData.data);
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
                <ProjectSection ProjectData={ProjectData} />
                <Link className="small_solid_color mt-30 " to={"#"}>
                  Load More
                </Link>
                <div className="text-center mt-30">
                  <div className="pagination">
                    <ul>
                      <li className="active">
                        {" "}
                        <a href="#">1</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">2</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">3</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">4</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#"> 5 </a>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
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
                    <Slider_Project />
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
};

export default Project;
