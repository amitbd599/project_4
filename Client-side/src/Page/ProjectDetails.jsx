import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HelmetData from "../components/common/Helmet";
import PageIntro from "../components/common/PageIntro";
import Header from "../components/header/Header";
import { AiOutlineArrowRight } from "react-icons/ai";
import ProjectSection from "../components/FeatureHouse/ProjectSection";
import Footer from "../components/Footer/Footer";
export default class ProjectDetails extends Component {
  render() {
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
                  <Col lg={8} md={12} sm={12}>
                    <div className="imgSection">
                      <img
                        className="img-fluid"
                        src="/assets/images/project/project_10.jpg"
                        alt=""
                      />
                    </div>
                  </Col>
                  <Col lg={4} md={12} sm={12}>
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
                  </Col>
                </Row>

                <Row className="part_2">
                  <Col lg={4} md={12} sm={12}>
                    <div className="cardItem">
                      <div className="items">
                        <p>Project Type</p>
                        <p>Web Design</p>
                      </div>
                      <div className="items">
                        <p>Client</p>
                        <p>Easy Computers</p>
                      </div>
                      <div className="items">
                        <p>Duration</p>
                        <p>2 Months</p>
                      </div>
                      <div className="items">
                        <p>Task</p>
                        <p>UI/UX Design, Web Design</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={8} md={12} sm={12}>
                    <div className="descriptionSection">
                      <h2>Project Description</h2>

                      <br />
                      <p className="textBig">
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Odiko khono bhulho yeja ytumi opora dhnio
                        najanina konod inbether prodi pzele.
                      </p>
                      <br />
                      <p className="text">
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris tetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqu pteur
                        sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum. Sed ut
                        perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et qexpl
                        abo.
                      </p>
                      <br />
                      <h2>Problems</h2>
                      <br />
                      <p className="text">
                        Goim ad minim veniam, quis nostrud exercitation ullamco
                        laboris tetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqu pteur sint
                        occaecat cupidatat non proident, sunt in culpa qui
                        offictis unde.
                      </p>
                      <br />
                      <h2>Solutions</h2>
                      <br />
                      <div className="points">
                        <ul>
                          <li>
                            {" "}
                            <AiOutlineArrowRight className="icon" /> Full
                            business control
                          </li>
                          <li>
                            {" "}
                            <AiOutlineArrowRight className="icon" /> User
                            dashboard & analytics
                          </li>
                          <li>
                            {" "}
                            <AiOutlineArrowRight className="icon" /> Custom
                            reporting
                          </li>
                          <li>
                            {" "}
                            <AiOutlineArrowRight className="icon" /> Regular
                            update monitoring
                          </li>
                          <li>
                            {" "}
                            <AiOutlineArrowRight className="icon" /> 24/7
                            priority support
                          </li>
                        </ul>
                        <ul>
                          <li>
                            {" "}
                            <AiOutlineArrowRight className="icon" /> Full
                            business control
                          </li>
                          <li>
                            {" "}
                            <AiOutlineArrowRight className="icon" /> User
                            dashboard & analytics
                          </li>
                          <li>
                            {" "}
                            <AiOutlineArrowRight className="icon" /> Custom
                            reporting
                          </li>
                          <li>
                            {" "}
                            <AiOutlineArrowRight className="icon" /> Regular
                            update monitoring
                          </li>
                          <li>
                            {" "}
                            <AiOutlineArrowRight className="icon" /> 24/7
                            priority support
                          </li>
                        </ul>
                      </div>
                      <br />
                      <h2>Process</h2>
                      <br />
                      <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatibus, dolores sapiente distinctio numquam
                        accusamus reiciendis nam nobis eius eum molestiae sint
                        non fugit dolorum ad? Architecto vero doloribus corporis
                        fugiat itaque voluptatibus dicta vel, nam quibusdam
                        illum dolorem iusto et quis asperiores totam fugit
                        eveniet repellat, sunt eaque harum minus?
                      </p>
                      <br />
                      <div className="boxItem">
                        <div className="items">
                          <div className="count">1</div>
                          <h4>Research</h4>
                          <p>
                            Goim ad minim ven iam quis nostrud exer dolorem
                            iusto et quis asperiores totam
                          </p>
                        </div>
                        <div className="items">
                          <div className="count">2</div>
                          <h4>Development</h4>
                          <p>
                            Goim ad minim ven iam quis nostrud exer dolorem
                            iusto et quis asperiores totam
                          </p>
                        </div>
                        <div className="items">
                          <div className="count">3</div>
                          <h4>Deploy</h4>
                          <p>
                            Goim ad minim ven iam quis nostrud exer dolorem
                            iusto et quis asperiores totam
                          </p>
                        </div>
                      </div>
                      <br />
                      <h2>Result</h2>
                      <br />
                      <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatibus, dolores sapiente distinctio numquam
                        accusamus reiciendis nam nobis eius eum molestiae sint.
                      </p>
                    </div>
                  </Col>
                </Row>

                <Row className="part_3">
                  <Col>
                    <h2>You Also Might Like</h2>
                    <br />
                    <ProjectSection />
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
  }
}
