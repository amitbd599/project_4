import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HelmetData from "../components/common/Helmet";
import PageIntro from "../components/common/PageIntro";
import PricingTableData from "../components/FeatureHouse/PricingTableData";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";
import BrandLogoData from "../Elements/BrandLogo/BrandLogoData";
import ServiceOne from "../Elements/Services/ServiceOne";

export default class Service extends Component {
  render() {
    return (
      <>
        {/* Helmat Data Start*/}
        <HelmetData pageTitle="Service" />
        {/* Helmat Data End*/}
        {/* Header section start  */}
        <Header logo="dark" />
        {/* Header section End  */}
        {/* Page intro start */}
        <PageIntro title="Service" />
        {/* Page intro End */}

        {/* Service Option One Start */}
        <div className="serviceSection_Two">
          <div className="wrapper">
            <Container>
              <Row className="part_1">
                <Col>
                  <div className="wrapperBody">
                    <h1>Our Marketing</h1>
                    <h2>Top Marketing Service</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non aliquam consectetur illo tenetur quia facere numquam
                      laborum voluptates eveniet voluptatum.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="part_2">
                <ServiceOne />
              </Row>
            </Container>
          </div>
        </div>
        {/* Service Option One End */}
        {/* Pricing table start */}
        <div className="pricingTable">
          <div className="wrapper">
            <Container>
              <Row className="headerOption">
                <Col>
                  <div className="body">
                    <h1>Cleaning Plans For Your Needs</h1>
                    <h2>Specialist Disinfection</h2>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                  </div>
                </Col>
              </Row>
              <div className="pricingTableData">
                <PricingTableData />
              </div>
            </Container>
          </div>
        </div>
        {/* Pricing table End */}

        {/* News letter Start */}
        <div className="newsLetter">
          <div className="wrapper">
            <Container>
              <Row>
                <Col className="wrapperBody">
                  <div className="inner">
                    {" "}
                    <h2>Subscribe Newsletter & Stay Update</h2>
                    <form action="">
                      <div className="inputGroup pt-30">
                        <input
                          className="email"
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          required=""
                        />
                        <button type="submit" className="myBtn">
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        {/* News letter End */}
        {/* Brand Logo Start */}
        <div className="brandLogo">
          <div className="wrapper">
            <Container>
              <Row className="part_1">
                <Col>
                  <div className="wrapperBody">
                    <h1>Top Clinets</h1>
                    <h2>We Worked With This Brand</h2>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nostrum commodi optio neque vel sequi hic, dolor esse ea
                      quos ex.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="part_2">
                <div className="wrapperBody">
                  <div className="iconLogo">
                    <BrandLogoData />
                  </div>
                </div>
              </Row>
            </Container>
          </div>
        </div>
        {/* Brand Logo End */}

        {/* Footer Start */}
        <Footer />
        {/* Footer End */}
      </>
    );
  }
}
