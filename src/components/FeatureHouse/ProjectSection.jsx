import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import projectData from "../../Data/ProjectData";

export default class ProjectSection extends Component {
  render() {
    if (window.location.pathname === "/project") {
      var projectDataList = projectData.slice(0, this.props.item);
    } else {
      var projectDataList = projectData.slice(0, 6);
    }
    return (
      <Row>
        {projectDataList.map((value, index) => (
          <Col lg={4} md={6} sm={6}>
            <Link to={"/single-project"}>
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
            </Link>
          </Col>
        ))}
      </Row>
    );
  }
}
