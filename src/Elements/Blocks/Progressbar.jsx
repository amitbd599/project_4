import React, { Component } from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import HelmetData from "../../components/common/Helmet";
import PageIntro from "../../components/common/PageIntro";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
export default class Progressbar extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Helmat Data Start*/}
        <HelmetData pageTitle="Progressbar" />
        {/* Helmat Data End*/}

        {/* Header section start */}
        <Header logo="dark" />
        {/* Header section End */}

        {/* Page intro start */}
        <PageIntro title="Progressbar" />
        {/* Page intro End */}
        {/* progressbar Start */}
        <div className="progressbar">
          <div className="wrapper">
            <div className="wrapperBody">
              <Container>
                <Row className="items">
                  <Col lg={3} md={6} xs={6}>
                    <div>
                      <CircularProgressbar
                        styles={buildStyles({
                          textColor: "#333",
                          pathColor: "#FF5700",
                          trailColor: "#D6D6D6",
                        })}
                        value={66}
                        text={`${66}%`}
                        strokeWidth={10}
                      />
                    </div>
                  </Col>
                  <Col lg={3} md={6} xs={6}>
                    <div>
                      <CircularProgressbar
                        styles={buildStyles({
                          textColor: "#333",
                          pathColor: "#FF5700",
                          trailColor: "#D6D6D6",
                        })}
                        value={40}
                        text={`${40}%`}
                        strokeWidth={10}
                      />
                    </div>
                  </Col>
                  <Col lg={3} md={6} xs={6}>
                    <div>
                      <CircularProgressbar
                        styles={buildStyles({
                          textColor: "#333",
                          pathColor: "#FF5700",
                          trailColor: "#D6D6D6",
                        })}
                        value={70}
                        text={`${70}%`}
                        strokeWidth={10}
                      />
                    </div>
                  </Col>
                  <Col lg={3} md={6} xs={6}>
                    <div>
                      <CircularProgressbar
                        styles={buildStyles({
                          textColor: "#333",
                          pathColor: "#FF5700",
                          trailColor: "#D6D6D6",
                        })}
                        value={30}
                        text={`${30}%`}
                        strokeWidth={10}
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="items">
                  <Col lg={3} md={6} xs={6}>
                    <div>
                      <CircularProgressbar
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                          backgroundColor: "#FF5700",
                          textColor: "#fff",
                          pathColor: "#fff",
                          trailColor: "transparent",
                        })}
                        value={66}
                        text={`${66}%`}
                        strokeWidth={10}
                      />
                    </div>
                  </Col>
                  <Col lg={3} md={6} xs={6}>
                    <div>
                      <CircularProgressbar
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                          backgroundColor: "#FF5700",
                          textColor: "#fff",
                          pathColor: "#fff",
                          trailColor: "transparent",
                        })}
                        value={40}
                        text={`${40}%`}
                        strokeWidth={10}
                      />
                    </div>
                  </Col>
                  <Col lg={3} md={6} xs={6}>
                    <div>
                      <CircularProgressbar
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                          backgroundColor: "#FF5700",
                          textColor: "#fff",
                          pathColor: "#fff",
                          trailColor: "transparent",
                        })}
                        value={70}
                        text={`${70}%`}
                        strokeWidth={10}
                      />
                    </div>
                  </Col>
                  <Col lg={3} md={6} xs={6}>
                    <div>
                      <CircularProgressbar
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                          backgroundColor: "#FF5700",
                          textColor: "#fff",
                          pathColor: "#fff",
                          trailColor: "transparent",
                        })}
                        value={30}
                        text={`${30}%`}
                        strokeWidth={10}
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="items">
                  <Col lg={3} md={6} xs={6}>
                    <div>
                      <CircularProgressbar
                        strokeWidth={50}
                        styles={buildStyles({
                          pathColor: "#FF5700",
                          strokeLinecap: "butt",
                        })}
                        value={66}
                      />
                    </div>
                  </Col>
                  <Col lg={3} md={6} xs={6}>
                    <div>
                      <CircularProgressbar
                        strokeWidth={50}
                        styles={buildStyles({
                          pathColor: "#FF5700",
                          strokeLinecap: "butt",
                        })}
                        value={40}
                      />
                    </div>
                  </Col>
                  <Col lg={3} md={6} xs={6}>
                    <div>
                      <CircularProgressbar
                        strokeWidth={50}
                        styles={buildStyles({
                          pathColor: "#FF5700",
                          strokeLinecap: "butt",
                        })}
                        value={70}
                      />
                    </div>
                  </Col>
                  <Col lg={3} md={6} xs={6}>
                    <div>
                      <CircularProgressbar
                        strokeWidth={50}
                        styles={buildStyles({
                          pathColor: "#FF5700",
                          strokeLinecap: "butt",
                        })}
                        value={30}
                      />
                    </div>
                  </Col>
                </Row>

                <Row className="items">
                  <Col lg={6}>
                    <div className="lineProgressbar__1">
                      <ProgressBar
                        className="lineBar"
                        now={40}
                        label={`${40}%`}
                      />
                      <ProgressBar
                        className="lineBar"
                        now={80}
                        label={`${80}%`}
                      />
                      <ProgressBar
                        className="lineBar"
                        now={30}
                        label={`${30}%`}
                      />
                      <ProgressBar
                        className="lineBar"
                        now={50}
                        label={`${50}%`}
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="lineProgressbar__1">
                      <ProgressBar
                        className="lineBar"
                        now={80}
                        label={`${80}%`}
                      />
                      <ProgressBar
                        className="lineBar"
                        now={30}
                        label={`${30}%`}
                      />
                      <ProgressBar
                        className="lineBar"
                        now={50}
                        label={`${50}%`}
                      />
                      <ProgressBar
                        className="lineBar"
                        now={90}
                        label={`${90}%`}
                      />
                    </div>
                  </Col>
                </Row>
                <Row className="items">
                  <Col lg={6}>
                    <div className="lineProgressbar__2">
                      <ProgressBar
                        className="lineBar"
                        now={40}
                        label={`${40}%`}
                      />
                      <ProgressBar
                        className="lineBar"
                        now={80}
                        label={`${80}%`}
                      />
                      <ProgressBar
                        className="lineBar"
                        now={30}
                        label={`${30}%`}
                      />
                      <ProgressBar
                        className="lineBar"
                        now={50}
                        label={`${50}%`}
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="lineProgressbar__2">
                      <ProgressBar
                        className="lineBar"
                        now={80}
                        label={`${80}%`}
                      />
                      <ProgressBar
                        className="lineBar"
                        now={30}
                        label={`${30}%`}
                      />
                      <ProgressBar
                        className="lineBar"
                        now={50}
                        label={`${50}%`}
                      />
                      <ProgressBar
                        className="lineBar"
                        now={90}
                        label={`${90}%`}
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
        {/* progressbar End */}
        {/* Footer Start */}
        <Footer />
        {/* Footer End */}
      </React.Fragment>
    );
  }
}
