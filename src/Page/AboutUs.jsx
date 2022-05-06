import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageIntro from "../components/common/PageIntro";
import Header from "../components/header/Header";
import imgScript from "../Script/ImgScript";
import { BsArrowRight } from "react-icons/bs";
import Counter_One from "../Elements/Counter/Counter_One";
export default class AboutUs extends Component {
  render() {
    const { aboutUsImg_2, aboutUsImg_3 } = imgScript();
    return (
      <Fragment>
        {/* Header section start */}
        <Header logo="dark" />
        {/* Header section End */}

        {/* Page intro start */}
        <PageIntro title="About Us" />
        {/* Page intro End */}

        {/* Company Info section start */}
        <div className="companyInfoSection">
          <div className="wrapper">
            <Container>
              <Row>
                <Col md={5} className="leftSide">
                  <div className="wrapperData">{aboutUsImg_2}</div>
                </Col>
                <Col md={7} className="rightSide">
                  <div className="wrapperData">
                    <h2>Best Way Unique Company About.</h2>
                    <div className="text_1">
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Culpa incidunt placeat doloribus, hic pariatur
                        obcaecati ipsa. Nulla cupiditate soluta laudantium?
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Culpa incidunt placeat doloribus, hic pariatur
                        obcaecati ipsa. Nulla cupiditate soluta laudantium?
                      </p>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Culpa incidunt placeat doloribus, hic pariatur
                        obcaecati ipsa. Nulla cupiditate soluta laudantium?
                        <br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Culpa incidunt placeat doloribus, hic pariatur
                        obcaecati ipsa. Nulla cupiditate soluta laudantium?
                      </p>
                    </div>
                    <div className="listData">
                      <h3>Cryptocurrency financial services company</h3>
                      <ul>
                        <li>
                          {" "}
                          <BsArrowRight className="icon" />
                          Blockchain is a system of recording information
                        </li>
                        <li>
                          {" "}
                          <BsArrowRight className="icon" />
                          Involved block cannot be altered retroactively
                        </li>
                        <li>
                          {" "}
                          <BsArrowRight className="icon" />
                          Bitcoin and Ethereum are popular examples of
                          blockchains
                        </li>
                        <li>
                          {" "}
                          <BsArrowRight className="icon" />
                          Potential to drive major changes and create new
                          opportunities
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        {/* Company Info section End */}
        {/* Company Info section start */}
        <div className="companyInfoSection_2">
          <div className="wrapper">
            <Container>
              <Row>
                <Col md={7} className="leftSide">
                  <div className="textBody">
                    <h1>Who we are</h1>
                    <h2>Building software for world changers</h2>
                    <p>
                      Donec metus lorem, vulputate at sapien sit amet, auctor
                      iaculis lorem. In vel hendrerit nisi. Vestibulum eget
                      risus velit. Aliquam tristique libero at dui sodales, et
                      placerat orci lobortis.
                    </p>
                    <p>
                      Maecenas ipsum neque, elementum id dignissim et, imperdiet
                      vitae mauris. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Consequatur et tempore ipsam totam vero
                      ullam vel exercitationem error sit voluptas?
                    </p>
                    <a href="#" className="btn-transparent">
                      Read More
                    </a>
                  </div>
                </Col>
                <Col md={5} className="rightSide">
                  {aboutUsImg_3}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        {/* Company Info section End */}
        {/* Counter Start */}
        <div className="counter">
          <Container>
            <Row>
              <div className="wrapper">
                <div className="textBody">
                  <h1>Experts The UCFT</h1>
                  <h2>Our Company Growth</h2>
                  <p>We have grown strength over the past 20 years.</p>
                </div>
                <div className="counterData">
                  <Counter_One />
                </div>
              </div>
            </Row>
          </Container>
        </div>
        {/* Counter End */}
      </Fragment>
    );
  }
}
