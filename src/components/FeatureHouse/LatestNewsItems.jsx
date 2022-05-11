import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import LatestNewsData from "../../Data/LatestNewsData";
export default class LatestNewsItems extends Component {
  render() {
    if (window.location.pathname === "/blog") {
      var LatestNewsDataList = LatestNewsData.slice(0, this.props.item);
    } else {
      var LatestNewsDataList = LatestNewsData.slice(0, 3);
    }
    return (
      <Row>
        {LatestNewsDataList.map((value, index) => (
          <Col sm={6} md={6} lg={4} className="wrapperBody" key={index}>
            <div className="mainBody">
              <div className="imgFile">
                <img className="img-fluid" src={value.img} alt="" />
              </div>
              <div className="overlay">
                <div className="textFile">
                  <h3>{value.title} </h3>
                  <p>{value.des}</p>
                  <Link
                    to={"/blog-details"}
                    className="btn-transparent_opacity"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    );
  }
}
