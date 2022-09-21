import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HelmetData from "../components/common/Helmet";
import PageIntro from "../components/common/PageIntro";
import Header from "../components/header/Header";
import { AiOutlineArrowRight } from "react-icons/ai";
import ProjectSection from "../components/FeatureHouse/ProjectSection";
import Footer from "../components/Footer/Footer";
import ReactHtmlParser from "react-html-parser";
import { useEffect } from "react";
import {
  readPortfolioPost__Request__API,
  singlePortfolioPost__Request__API,
} from "../API/API";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const ProjectDetails = () => {
  const params = useParams();
  useEffect(() => {
    singlePortfolioPost__Request__API(params.id);
    readPortfolioPost__Request__API();
  }, []);
  const ProjectData = useSelector((state) => state.PortfolioData.data);
  const SingleProjectData = useSelector(
    (state) => state.SinglePortfolioData.data
  );
  console.log(SingleProjectData);
  return (
    <React.Fragment>
      {/* Helmat Data Start*/}
      <HelmetData pageTitle="Project Details" />
      {/* Helmat Data End*/}

      {/* Header section start  */}
      <Header logo="dark" />
      {/* Header section End  */}

      {/* Page intro start */}
      <PageIntro title="Project Details" />
      {/* Page intro End */}

      {/* Project Details start */}
      <div className="portfolioDetails">
        <div className="wrapper">
          <div className="wrapperBody">
            <Container>
              <Row className="part_1">
                <Col>
                  <div className="imgSection">
                    <img
                      className="img-fluid"
                      src={SingleProjectData.img}
                      alt=""
                    />
                  </div>
                </Col>
                {/* <Col lg={4} md={12} sm={12}>
                  <div className="imgSection">
                    <img
                      className="img-fluid mb-25"
                      src="/assets/images/project/project_11.jpg"
                      alt=""
                    />
                    <img
                      className="img-fluid"
                      src="/assets/images/project/project_12.jpg"
                      alt=""
                    />
                  </div>
                </Col> */}
              </Row>

              <Row className="part_2">
                <Col lg={4} md={12} sm={12}>
                  <div className="cardItem">
                    <div className="items">
                      <p>Project Type</p>
                      <p>{SingleProjectData.type}</p>
                    </div>
                    <div className="items">
                      <p>Client</p>
                      <p>{SingleProjectData.client}</p>
                    </div>
                    <div className="items">
                      <p>Duration</p>
                      <p>{SingleProjectData.duration}</p>
                    </div>
                    <div className="items">
                      <p>Task</p>
                      <p>{SingleProjectData.task}</p>
                    </div>
                  </div>
                </Col>
                <Col lg={8} md={12} sm={12}>
                  <div className="descriptionSection">
                    <h2>Project Description</h2>

                    <br />
                    <div>{ReactHtmlParser(SingleProjectData.description)}</div>
                  </div>
                </Col>
              </Row>

              <Row className="part_3">
                <Col>
                  <h2>You Also Might Like</h2>
                  <br />
                  <ProjectSection ProjectData={ProjectData} id={params.id} />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      {/* Project Details End */}

      {/* Footer start */}
      <Footer></Footer>
      {/* Footer End */}
    </React.Fragment>
  );
};
export default ProjectDetails;
