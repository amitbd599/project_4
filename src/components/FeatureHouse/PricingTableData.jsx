import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const data = [
  {
    post: "Individual",
    title: "Web developers create and maintain websites.",
    img: "/assets/images/Pricing/price-1.png",
    des: "We have a custom cleaning service designed to help you clean when you need it, whether we clean one time or on regular, your house will always sparkle clean when...",
    price: "20",
  },
  {
    post: "Company",
    title: "Understand the key concepts of visual design.",
    img: "/assets/images/Pricing/price-2.png",
    des: "We have a custom cleaning service you clean when you need it, whether we clean one time or on regular, your house will always sparkle clean when designed to help...",
    price: "26",
  },
  {
    post: "Enterprise",
    title:
      "The most stressful tech and IT job on the list was for Web developer.",
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
              <Link to={"/service-details"} className="small_solid_color">
                Join Now
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    );
  }
}
