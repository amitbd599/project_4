import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import LatestNewsData from "../../Data/LatestNewsData";
export default class LatestNewsItems extends Component {
  render() {
    if (window.location.pathname === "/latest-news") {
      var LatestNewsDataList = LatestNewsData.slice(0, this.props.item);
    } else {
      var LatestNewsDataList = LatestNewsData.slice(0, 3);
    }
    return (
      <Row>
        {LatestNewsDataList.map((value, index) => (
          <Col md={4} className="wrapperBody">
            <div className="mainBody">
              <div className="imgFile">
                <img src={value.img} alt="" />
              </div>
              <div className="overlay">
                <div className="textFile">
                  <h3>Awesome Experience </h3>
                  <p>
                    voluptate quo saepe nesciunt aperiam impedit rerum!
                    Veritatis saepe nesciunt commodi est jufd ikoil blemp.
                  </p>
                  <a href="#" className="btn-transparent_opacity">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    );
  }
}
