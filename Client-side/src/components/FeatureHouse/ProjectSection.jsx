import React, { Component } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { singlePortfolioPost__Request__API } from "../../API/API";

const ProjectSection = ({ ProjectData, id }) => {
  useEffect(() => {}, []);

  const loadData = (id) => {
    singlePortfolioPost__Request__API(id);
  };
  if (window.location.pathname === "/") {
    ProjectData = ProjectData.slice(0, 3);
  } else if (window.location.pathname === `/project-details/${id}`) {
    ProjectData = ProjectData.slice(0, 3);
  } else {
    ProjectData = ProjectData;
  }

  return (
    <Row>
      {ProjectData.map((value, index) => (
        <Col lg={4} md={6} sm={6} key={index}>
          <Link
            to={`/project-details/${value._id}`}
            onClick={() => loadData(value._id)}
          >
            <div className="projectItems">
              <div className="projectTextBody">
                <div className="imgFile">
                  <img className="img-fluid" src={value.img} alt="" />
                </div>
                <div className="textBody">
                  <div className="textItem">
                    <h1>{value.title}</h1>
                    {/* <h2>{value.subTitle}</h2>
                    <p>{value.des}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default ProjectSection;
