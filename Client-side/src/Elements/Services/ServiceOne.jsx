import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import serviceData from "../../Data/ServiceData";
export default class ServiceOne extends Component {
  render() {
    const { serviceData_Two } = serviceData();
    return (
      <Row className="wrapper">
        {serviceData_Two.map((value, index) => (
          <Col lg={3} md={4} sm={6} className="wrapperBody" key={index}>
            <div className="innerItem">
              <img className="img-fluid" src={value.icon} alt="" />
              <h2>{value.name}</h2>
              <p>{value.des}</p>
            </div>
          </Col>
        ))}
      </Row>
    );
  }
}
