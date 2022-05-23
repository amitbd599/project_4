import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageIntro from "../components/common/PageIntro";
import Header from "../components/header/Header";
import imgScript from "../Script/ImgScript";
import { BsArrowRight } from "react-icons/bs";
import Counter_One from "../Elements/Counter/Counter_One";
import TeamSection from "../components/FeatureHouse/TeamSection";
import Footer from "../components/Footer/Footer";
import TestimonialData from "../components/FeatureHouse/TestimonialData";
import BrandLogoData from "../Elements/BrandLogo/BrandLogoData";
import HelmetData from "../components/common/Helmet";
export default class AboutUs extends Component {
  render() {
    const { aboutUsImg_2, aboutUsImg_3 } = imgScript();
    return (
      <Fragment>
        {/* Helmat Data Start*/}
        <HelmetData pageTitle="About Us" />
        {/* Helmat Data End*/}
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
                <Col lg={5} className="leftSide">
                  <div className="wrapperData">{aboutUsImg_2}</div>
                </Col>
                <Col lg={7} className="rightSide">
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
                <Col lg={7} className="leftSide">
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
                    <a href="#" className="small_solid_color">
                      Read More
                    </a>
                  </div>
                </Col>
                <Col lg={5} className="rightSide">
                  {aboutUsImg_3}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        {/* Company Info section End */}
        {/* Counter Start */}
        <div className="counterSection">
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

        {/* Work station Start */}
        <div className="workStation bgImg-6">
          <div className="wrapper">
            <Container>
              <Row>
                <Col>
                  <div className="data">
                    <h2>Find Your Work Now</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Laudantium molestiae ab, obcaecati tenetur velit
                      blanditiis saepe libero eum perferendis ratione minus!
                      Odit temporibus molestiae vitae, facilis cum delectus
                      maxime obcaecati?
                    </p>
                    <a href="#" className="small_solid_color">
                      GET STARTED
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        {/* Work station End */}

        {/* Our team section start*/}
        <div className="teamSection">
          <div className="wrapper">
            <Container>
              <Row className="part_1">
                <Col>
                  <div className="textBody">
                    <h1>Skilled Team</h1>
                    <h2>Our Skilled Team</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Praesentium officiis ipsa aliquam asperiores a error
                      perspiciatis pariatur, voluptatibus possimus?
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="part_2">
                <Col>
                  <div className="wrapperBody">
                    <TeamSection />
                  </div>
                </Col>
              </Row>
            </Container>{" "}
          </div>
        </div>
        {/* Our team section End*/}

        {/* Testimonial Tab section start */}
        <div className="testimonial_tab">
          <div className="wrapper">
            <Container>
              <TestimonialData />
            </Container>
          </div>
        </div>

        {/* Testimonial Tab section End */}

        {/* Brand Logo Start */}
        <div className="brandLogo">
          <div className="wrapper">
            <Container>
              <Row className="part_1">
                <Col>
                  <div className="wrapperBody">
                    <h1>Top Clinets</h1>
                    <h2>We Worked With This Brand</h2>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nostrum commodi optio neque vel sequi hic, dolor esse ea
                      quos ex.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="part_2">
                <div className="wrapperBody">
                  <div className="iconLogo">
                    <BrandLogoData />
                  </div>
                </div>
              </Row>
            </Container>
          </div>
        </div>
        {/* Brand Logo End */}

        {/* Footer Start */}
        <Footer />
        {/* Footer End */}
      </Fragment>
    );
  }
}
