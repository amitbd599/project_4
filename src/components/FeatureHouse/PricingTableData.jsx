import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

export default class PricingTableData extends Component {
  render() {
    return (
      <Row>
        <Col md={4} className="pricing_table_body">
            <div className="wrapper">
                <img src="" alt="" />
                <h3>Occasional & One Time Cleaning Service.</h3>
                <p>We have a custom cleaning service designed to help you clean when you need it, whether we clean one time or on regular, your house will always sparkle clean when...</p>
                <a href="#">Read More</a>
            </div>
        </Col>
      </Row>
    );
  }
}
