import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import HelmetData from "../components/common/Helmet";
import PageIntro from "../components/common/PageIntro";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";

export default class Error404 extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Helmat Data Start*/}
        <HelmetData pageTitle="About Us" />
        {/* Helmat Data End*/}
        {/* Header section start */}
        <Header logo="dark" />
        {/* Header section End */}

        {/* Error Page section start */}
        <div className="errorSection">
          <div className="wrapper">
            <div className="wrapperBody">
              <Container>
                <Row>
                  <Col>
                    <div className="inner">
                      <div>
                        {" "}
                        <img
                          className="img-fluid"
                          src="/assets/images/errorPage/error.jpg"
                          alt=""
                        />
                      </div>

                      <div className="errorBtn">
                        <Link className="btn-transparent" to={"/"}>
                          BACK TO HOMEPAGE
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
        {/* Error Page section End */}

        {/* Footer Start */}
        <Footer />
        {/* Footer End */}
      </React.Fragment>
    );
  }
}
