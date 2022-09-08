import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import team from "../../Data/TeamData";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaSnapchatGhost,
} from "react-icons/fa";
export default class TeamSection extends Component {
  render() {
    return (
      <Row>
        {team.map((value, index) => (
          <Col lg={4} md={6} sm={6} key={index}>
            <div className="textBody">
              <div className="imgFile">
                <img className="img-fluid" src={value.img} alt="" />
              </div>
              <div className="iconSection">
                <div className="iconSectionWrap">
                  <a href="#" className="icon">
                    {" "}
                    <FaFacebookF  />
                  </a>
                  <a href="#" className="icon">
                    {" "}
                    <FaTwitter  />
                  </a>
                  <a href="#" className="icon">
                    {" "}
                    <FaLinkedinIn  />
                  </a>
                  <a href="" className="icon">
                    {" "}
                    <FaSnapchatGhost  />
                  </a>
                </div>
              </div>
              <div className="textSection">
                <div className="text">
                  <h2>{value.name}</h2>
                  <p>{value.title}</p>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    );
  }
}
