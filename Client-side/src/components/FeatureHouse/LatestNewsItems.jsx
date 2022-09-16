import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const LatestNewsItems = ({ BlogData }) => {
  if (window.location.pathname === "/") {
    BlogData = BlogData.slice(0, 3);
  } else {
    BlogData = BlogData;
  }

  return (
    <Row>
      {BlogData.map((value, index) => (
        <Col sm={6} md={6} lg={4} className="wrapperBody" key={index}>
          <div className="mainBody">
            <div className="imgFile">
              <img className="img-fluid" src={value.img} alt="" />
            </div>
            <div className="overlay">
              <div className="textFile">
                <Link to={`/blog-details/${value._id}`}>
                  <h3>{value.title.split(" ").slice(0, 10).join(" ")} ... </h3>
                </Link>

                {/* <Link to={"/blog-details"} className="small_border_color">
                  Read More
                </Link> */}
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default LatestNewsItems;
