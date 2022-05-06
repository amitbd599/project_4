import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

const data = [
  {
    title: "Occasional & One Time Cleaning Service.",
    img: "/assets/images/services/service_1.png",
    des: "We have a custom cleaning service designed to help you clean when you need it, whether we clean one time or on regular, your house will always sparkle clean when...",
    discount:"20"
  },
  {
    title: "Recurring & Ongoing Cleaning Service.",
    img: "/assets/images/services/service_2.png",
    des: "We have a custom cleaning service you clean when you need it, whether we clean one time or on regular, your house will always sparkle clean when designed to help...",
    discount:"26"
  },
  {
    title: "Professional Carpet Cleaning Services.",
    img: "/assets/images/services/service_3.png",
    des: "We have a custom cleaning service  to help you clean when you need it, whether we clean one time or on regular, your house will always sparkle clean when designed...",
    discount:"30"
  },
];

export default class PricingTableData extends Component {
  render() {
    return (
      <Row>
        {data.map((value, index) => (
          <Col lg={4} md={6} sm={6} className="pricing_table_body">
            <div className="wrapper">
              <img className="img-fluid" src={value.img} alt="" />
              <h3>{value.title}</h3>
              <p>{value.des}</p>
              <a href="#" className="btn-transparent">
                Read More
              </a>
              <p className="overlay">{value.discount} % OFF</p>
            </div>
          </Col>
        ))}
      </Row>
    );
  }
}
