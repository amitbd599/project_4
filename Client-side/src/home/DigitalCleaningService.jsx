import React, { Fragment, Component, useState } from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick/lib/slider";
import Helmet from "../components/common/Helmet";
import FeatureHouseService from "../components/FeatureHouse/FeatureHouseService";
import PricingTableData from "../components/FeatureHouse/PricingTableData";
import ProjectSection from "../components/FeatureHouse/ProjectSection";
import Header from "../components/header/Header";
import { IoCheckmarkCircle } from "react-icons/io5";

import Testimonial from "../Data/Testimonial";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import sliderList from "../Data/SlideList";
import imgScript from "../Script/ImgScript";
import LatestNewsItems from "../components/FeatureHouse/LatestNewsItems";
import Footer from "../components/Footer/Footer";
import serviceData from "../Data/ServiceData";
import BrandLogoData from "../Elements/BrandLogo/BrandLogoData";
import sliderSetting from "../Script/Slider_Script_Data";
import { useEffect } from "react";
import {
  create_visitor_request_API,
  readBlogPost__Request__API,
  readPortfolioPost__Request__API,
} from "../API/API";
import { Link } from "react-router-dom";

const DigitalCleaningService = () => {
  useEffect(() => {
    readBlogPost__Request__API();
    readPortfolioPost__Request__API();
    create_visitor_request_API();
  }, []);

  const BlogData = useSelector((state) => state.BlogData.data);
  const ProjectData = useSelector((state) => state.PortfolioData.data);
  const { aboutUsImg, featureImg } = imgScript();
  const { serviceData_One } = serviceData();

  const { HeroSlideSetting, TestimonialSliderSetting } = sliderSetting();

  return (
    <Fragment>
      <Helmet pageTitle="Digital Agency" />

      {/* Header Section Start*/}

      <Header logo="dark" />
      {/* Header Section End*/}

      {/* Slider section start  */}

      <div className="sliderBody">
        <div className="sliderWrapper ">
          <Slider {...HeroSlideSetting}>
            {sliderList.map((value, index) => {
              return (
                <div
                  className={` slide relative slide-style-2 fullscreen d-flex align-items-center justify-content-center bgImg ${value.bgImage}`}
                  key={index}
                  data-black-overlay="2"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className={` inner ${value.textPosition}`}>
                          {value.category ? <span>{value.category}</span> : ""}
                          {value.title ? (
                            <h1 className="title text-light mt-lg-30 mt-sm-100">
                              {value.title}
                            </h1>
                          ) : (
                            ""
                          )}
                          {value.description ? (
                            <p className="description text-light ">
                              {value.description}
                            </p>
                          ) : (
                            ""
                          )}
                          {value.buttonText ? (
                            <div className="slide-btn small_solid_color mt-lg-30 mt-sm-15">
                              <a
                                className="btn-default text-light"
                                href={`${value.buttonLink}`}
                              >
                                {value.buttonText}
                              </a>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      {/* Slider section End */}

      {/* Feature House start */}
      <div className="featureHouse">
        <div className="wrapper">
          <Container>
            <Row>
              <Col lg={7} className="leftWrapper">
                <div className="textBody">
                  <h2 className="title">FUTURE INTRO</h2>
                  <p className="description">
                    Seamless integration across all digital media channels with
                    advanced targeting full combined handful. We use the latest
                    technology and we never stop learning and that's why model
                    sentence structures.
                  </p>
                </div>
                <div className="itemsWrapper">
                  <div className="itemsBox">
                    <FeatureHouseService />
                  </div>
                </div>
              </Col>
              <Col lg={5}>
                <div className="imgSection">{featureImg}</div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* Feature House End */}

      {/* Pricing table start */}
      <div className="pricingTable">
        <div className="wrapper">
          <Container>
            <Row className="headerOption">
              <Col>
                <div className="body">
                  <h1>Information technology</h1>
                  <h2>Specialist Disinfection</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </Col>
            </Row>
            <div className="pricingTableData">
              <PricingTableData />
            </div>
          </Container>
        </div>
      </div>
      {/* Pricing table End */}

      {/* Project section start */}
      <div className="project_section">
        <div className="wrapper">
          <Container>
            <Row className="part_1">
              <Col>
                <div className="wrapperBody">
                  <h1>Our complete project</h1>
                  <h2>Our Project</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </Col>
            </Row>
            <div className="part_2">
              <div className="wrapperBody">
                <ProjectSection ProjectData={ProjectData} />
              </div>
            </div>
            <Row>
              <Col></Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* Project section End */}

      {/* Service Option Start*/}

      <div className="serviceOption_One">
        <div className="wrapper">
          <Container>
            <Row>
              <Col className="part_1">
                <div className="wrapperBody">
                  <h1>Our All Service</h1>
                  <h2>Service Details</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="part_2">
              {serviceData_One.map((value, index) => (
                <Col md={4} key={index}>
                  <div className="wrapper">
                    <img className="img-fluid" src={value.icon} alt="" />
                    <h2>{value.title}</h2>
                    <div className="listItems">
                      {value.itemsList.map((value, index) => (
                        <div className="listItem" key={index}>
                          <span className="text">
                            <IoCheckmarkCircle className="mr-10" />
                            {value}
                          </span>
                        </div>
                      ))}
                      {/* <a href="#" className="small_solid_color">
                        Read More
                      </a> */}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
      {/* Service Option End*/}
      {/* Testimonial Start */}
      <div className="testimonial">
        <div className="wrapper">
          <Container>
            <Row>
              <Col md={6} className="leftSide">
                <div className="textBody">
                  <h2>Best Web Development History</h2>
                  <p>
                    My favorite in this programming sector is to fix ‍any
                    Errors. Because in every error there is hope to learn
                    something new. I won't quit until I can fix the error. In
                    this programming life, I have tried to solve all kinds of
                    problems and have succeeded. My policy is to stick with it
                    until the problem is solved.
                  </p>
                  <div className="listItem">
                    <ul>
                      <li>
                        {" "}
                        <IoCheckmarkCircle className="icon" /> Web Development
                      </li>
                      <li>
                        {" "}
                        <IoCheckmarkCircle className="icon" /> Web Design With
                        ReactJs
                      </li>
                      <li>
                        {" "}
                        <IoCheckmarkCircle className="icon" /> MongoDB DataBase
                        Service
                      </li>
                      <li>
                        {" "}
                        <IoCheckmarkCircle className="icon" /> NodeJs Projects
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col md={6} className="rightSide">
                <div className="textBody">
                  <div className="overlay">
                    <Slider {...TestimonialSliderSetting}>
                      {Testimonial.map((value, index) => (
                        <div className="item">
                          <div className="d-flex">
                            <img
                              className="img-fluid mr-20"
                              src={value.img}
                              alt=""
                            />
                            <div>
                              <h3 className="name">{value.name}</h3>
                              <p className="position">{value.position}</p>
                            </div>
                          </div>
                          <div>
                            <p className="des">{value.des}</p>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* Testimonial End */}

      {/* AboutUs section start */}
      <div className="aboutUs">
        <div className="wrapper">
          <Container>
            <Row>
              <Col md={5} className="leftSide">
                <div className="mainBody">
                  <div className="imgFile">{aboutUsImg}</div>
                  <div className="overlay">
                    <div className="textFile">
                      <h3>Awesome Experience </h3>
                      <p>
                        voluptate quo saepe nesciunt aperiam impedit rerum!
                        Veritatis saepe nesciunt commodi est jufd ikoil blemp.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col ms={7} className="rightSide">
                <div className="mainBody">
                  <div className="textFile">
                    <h1>Our Company Details</h1>
                    <h2>About</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Iste temporibus voluptate quo saepe nesciunt aperiam
                      impedit rerum! Veritatis commodi est, earum distinctio eum
                      cum sint at aspernatur culpa aliquam dolorum?
                    </p>
                  </div>
                  <div className="historyData">
                    <Tabs>
                      <TabList className="tabList">
                        <Tab>Our History</Tab>
                        <Tab>Our Mission</Tab>
                        <Tab>Our Vision</Tab>
                        <Tab>Our Support</Tab>
                      </TabList>

                      <TabPanel className="tabPanel_1">
                        <h3>Saepe nesciunt aperiam impedit</h3>
                        <ul>
                          <li>
                            {" "}
                            <IoCheckmarkCircle className="icon" />
                            The Philosophy Of business analytics.
                          </li>
                          <li>
                            {" "}
                            <IoCheckmarkCircle className="icon" />
                            Fast-Track Your business.
                          </li>
                          <li>
                            {" "}
                            <IoCheckmarkCircle className="icon" />
                            Lies And Damn Lies About business.
                          </li>
                          <li>
                            {" "}
                            <IoCheckmarkCircle className="icon" />
                            The Ultimate Deal On business.
                          </li>
                          <li>
                            {" "}
                            <IoCheckmarkCircle className="icon" />
                            Great instant value life.
                          </li>
                        </ul>
                      </TabPanel>
                      <TabPanel className="tabPanel_2">
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Delectus at qui eum quos est amet omnis ea
                          quisquam repellendus corporis numquam mollitia natus
                          sunt consequuntur provident tenetur, id optio iure?
                        </p>
                        <p>
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Delectus at qui eum quos est amet omnis ea
                          quisquam repellendus corporis numquam mollitia natus
                          sunt consequuntur provident tenetur, id optio iure?
                        </p>
                      </TabPanel>
                      <TabPanel className="tabPanel_1">
                        <h3>Information technology</h3>
                        <ul>
                          <li>
                            {" "}
                            <IoCheckmarkCircle className="icon" />
                            The Philosophy Of business analytics.
                          </li>
                          <li>
                            {" "}
                            <IoCheckmarkCircle className="icon" />
                            Fast-Track Your business.
                          </li>
                          <li>
                            {" "}
                            <IoCheckmarkCircle className="icon" />
                            Lies And Damn Lies About business.
                          </li>
                          <li>
                            {" "}
                            <IoCheckmarkCircle className="icon" />
                            The Ultimate Deal On business.
                          </li>
                          <li>
                            {" "}
                            <IoCheckmarkCircle className="icon" />
                            Great instant value life.
                          </li>
                        </ul>
                      </TabPanel>
                      <TabPanel className="tabPanel_4">
                        <p>
                          Aum quos est amet omnis ea quisquam repellendus
                          corporis numquam Lorem ipsum dolor sit, amet
                          consectetur adipisicing elit. Delectus at qui mollitia
                          natus sunt consequuntur provident tenetur, id optio
                          iure?
                        </p>
                        <p>
                          Gepellendus corporis numquam mollitia Lorem ipsum
                          dolor sit, amet consectetur adipisicing elit. Delectus
                          at qui eum quos est amet omnis ea quisquam natus sunt
                          consequuntur provident tenetur, id optio iure?
                        </p>
                      </TabPanel>
                    </Tabs>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* AboutUs section End */}

      {/* Latest News Start */}
      <div className="latestNews">
        <div className="wrapper">
          <Container>
            <Row className="part_1">
              <Col>
                <div className="wrapperBody">
                  <h1>Latest post</h1>
                  <h2>Latest News</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </Col>
            </Row>
            <div className="part_2">
              <LatestNewsItems BlogData={BlogData} />

              <div className="text-center mt-30">
                <Link to={"/blog/1"} className="small_solid_color">
                  View More
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
      {/* Latest News End */}
      {/* Brand Logo Start */}
      <div className="brandLogo mt-100">
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
};

export default DigitalCleaningService;
