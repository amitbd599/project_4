import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HelmetData from "../components/common/Helmet";
import PageIntro from "../components/common/PageIntro";
import PricingTableData from "../components/FeatureHouse/PricingTableData";
import Header from "../components/header/Header";
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
      </>
    );
  }
}
