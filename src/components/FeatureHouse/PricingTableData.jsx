import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

const data = [
  {
    post: "Individual",
    title: "Occasional & One Time Cleaning Service.",
    img: "/assets/images/Pricing/price-1.png",
    des: "We have a custom cleaning service designed to help you clean when you need it, whether we clean one time or on regular, your house will always sparkle clean when...",
    price: "20",
  },
  {
    post: "Company",
    title: "Recurring & Ongoing Cleaning Service.",
    img: "/assets/images/Pricing/price-2.png",
    des: "We have a custom cleaning service you clean when you need it, whether we clean one time or on regular, your house will always sparkle clean when designed to help...",
    price: "26",
  },
  {
    post: "Enterprise",
    title: "Professional Carpet Cleaning Services.",
    img: "/assets/images/Pricing/price-3.png",
    des: "We have a custom cleaning service  to help you clean when you need it, whether we clean one time or on regular, your house will always sparkle clean when designed...",
    price: "30",
  },
];

export default class PricingTableData extends Component {
  render() {
    return (
      <Row>
        {data.map((value, index) => (
          <Col lg={4} md={6} sm={6} className="pricing_table_body" key={index}>
            <div className="wrapper">
              <div className="text-center">
                <h2 className="post">{value.post}</h2>
                <img className="img-fluid" src={value.img} alt="" />
                <p className="mt-15">
                  {" "}
                  <span className="price">${value.price}</span>{" "}
                  <span>/ Month</span>
                </p>
              </div>
              <h3 className="title">{value.title}</h3>
              <p className="des">{value.des}</p>
              <a href="#" className="small_solid_color">
                Join Now
              </a>
            </div>
          </Col>
        ))}
      </Row>
    );
  }
}
