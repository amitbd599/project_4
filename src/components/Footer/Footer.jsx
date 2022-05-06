import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import imgScript from "../../Script/ImgScript";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import { MdEmail, MdPermPhoneMsg } from "react-icons/md";
import { Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    const { logoLight } = imgScript();
    return (
      <section className="footer">
        <Container className="wrapper">
          <Row>
            <Col md={5} className="part_1">
              <div className="wrapperBody">
                <div className="items">
                  <Link to={"/"}> {logoLight}</Link>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vel delectus ab numquam, velit itaque optio alias iure
                    inventore consectetur maiores!
                  </p>

                  <div className="icons">
                    <a href="#">
                      {" "}
                      <FaFacebookSquare className="icon" />
                    </a>
                    <a href="#">
                      <FaTwitterSquare className="icon" />
                    </a>
                    <a href="#">
                      {" "}
                      <FaLinkedin className="icon" />
                    </a>
                    <a href="#">
                      {" "}
                      <FaInstagramSquare className="icon" />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={2} className="part_2">
              <div className="wrapperBody">
                <h3>Important Links</h3>

                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Portfolio</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Our Team</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Gallery</a>
                  </li>
                  <li>
                    <a href="#">Service</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={2} className="part_3">
              <div className="wrapperBody">
                <h3>Company Data</h3>

                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Portfolio</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Our Team</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Gallery</a>
                  </li>
                  <li>
                    <a href="#">Service</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3} className="part_4">
              <div className="wrapperBody">
                <div className="items">
                  <h3>Address & Office</h3>
                  <ul>
                    <li>
                      {" "}
                      <MdEmail  className="icon"/> admin@amitjs.com
                    </li>
                    <li>
                      <MdPermPhoneMsg  className="icon"/>
                      +99 11 88 963-6395
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
