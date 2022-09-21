import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const LatestNewsItems = ({ BlogData }) => {
  if (window.location.pathname === "/") {
    BlogData = BlogData.slice(0, 6);
  } else {
    BlogData = BlogData;
  }

  return (
    <Row>
      {BlogData.map((value, index) => (
        <Col sm={6} md={6} lg={4} className="wrapperBody mb-5" key={index}>
          <div className="mainBody">
            <div className="imgFile">
              <img className="img-fluid" src={value.img} alt="" />
            </div>
            <div className="overlay">
              <div className="textFile pt-2">
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
