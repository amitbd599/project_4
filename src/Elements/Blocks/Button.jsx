import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HelmetData from "../../components/common/Helmet";
import PageIntro from "../../components/common/PageIntro";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";

export default class Button extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Helmat Data Start*/}
        <HelmetData pageTitle="Button" />
        {/* Helmat Data End*/}
        {/* Header section start */}
        <Header logo="dark" />
        {/* Header section End */}

        {/* Page intro start */}
        <PageIntro title="Button" />
        {/* Page intro End */}

        {/* Button section start */}
        <Container className="pt-100 pb-100 buttonSection">
          {/* Big Button */}
          <Row className="pt-30 pb-30">
            <Col lg={3}>
              <div className="items">
                <a className="big_solid_color" href="#">
                  Big Solid Color
                </a>
              </div>
            </Col>

            <Col lg={3}>
              <div className="items">
                <a className="big_border_color" href="#">
                  Big Solid Color
                </a>
              </div>
            </Col>
            <Col lg={3}>
              <div className="items">
                <a className="big_dark_solid_color" href="#">
                  Big Solid Color
                </a>
              </div>
            </Col>
            <Col lg={3}>
              <div className="items">
                <a className="big_dark_border_color" href="#">
                  Big Solid Color
                </a>
              </div>
            </Col>
          </Row>

          {/* Medium Button  */}

          <Row className="pt-30 pb-30">
            <Col lg={3}>
              <div className="items">
                <a className="medium_solid_color" href="#">
                  Medium Solid Color
                </a>
              </div>
            </Col>

            <Col lg={3}>
              <div className="items">
                <a className="medium_border_color" href="#">
                  Medium Solid Color
                </a>
              </div>
            </Col>
            <Col lg={3}>
              <div className="items">
                <a className="medium_dark_solid_color" href="#">
                  Medium Solid Color
                </a>
              </div>
            </Col>
            <Col lg={3}>
              <div className="items">
                <a className="medium_dark_border_color" href="#">
                  Medium Solid Color
                </a>
              </div>
            </Col>
          </Row>

          {/* Small Button  */}

          <Row className="pt-30 pb-30">
            <Col lg={3}>
              <div className="items">
                <a className="small_solid_color" href="#">
                  Small Solid Color
                </a>
              </div>
            </Col>

            <Col lg={3}>
              <div className="items">
                <a className="small_border_color" href="#">
                  Small Solid Color
                </a>
              </div>
            </Col>
            <Col lg={3}>
              <div className="items">
                <a className="small_dark_solid_color" href="#">
                  Small Solid Color
                </a>
              </div>
            </Col>
            <Col lg={3}>
              <div className="items">
                <a className="small_dark_border_color" href="#">
                  Small Solid Color
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        {/* Button section End */}

        {/* Footer Start */}
        <Footer />
        {/* Footer End */}
      </React.Fragment>
    );
  }
}
