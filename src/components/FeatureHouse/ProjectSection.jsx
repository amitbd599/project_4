import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

import projectData from "../../Data/ProjectData";

export default class ProjectSection extends Component {
  render() {
    if (window.location.pathname === "/projects") {
      var projectDataList = projectData.slice(0, this.props.item);
    } else {
      var projectDataList = projectData.slice(0, 6);
    }
    return (
      <Row>
        {projectDataList.map((value, index) => (
          
          <Col md={4}>
            <div className="projectItems">
              <div className="projectTextBody">
                <div className="imgFile">
                  <img className="img-fluid" src={value.img} alt="" />
                </div>
                <div className="textBody">
                  <div className="textItem">
                    <h1>{value.title}</h1>
                    <h2>{value.subTitle}</h2>
                    <p>{value.des}</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    );
  }
}
