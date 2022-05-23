import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick/lib/slider";
import Helmet from "../components/common/Helmet";
import Header from "../components/header/Header";

import sliderList from "../Data/SlideList";
import { SliderSettings } from "../Script/Slider_Script_Data";

const DigitalCleaningService = () => {
  const featureImg = (
    <img src="/public/assets/images/featureHouse/services-women 1.png" alt="" />
  );
  return (
    <Fragment>
      <Helmet pageTitle="Digital Agency" />

      {/* Header Section Start*/}

      <Header logo="dark" />
      {/* Header Section End*/}

      {/* Slider section start  */}

      <div className="sliderBody">
        <div className="sliderWrapper ">
          <Slider {...SliderSettings}>
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
                            <div className="small_solid_color mt-lg-30 mt-sm-15">
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
              <Col md={7}>
                <div className="textBody">
                  <h2 className="title">FUTURE HOUSE</h2>
                  <p className="description">
                    What you look your hopefull house we can be made it for
                    yours. We can be design yours house so dont woory you can
                    hire us. Beautiful and hand made design we can be create.
                  </p>
                </div>
                <div className="itemsBox"></div>
              </Col>
              <Col md={5}>
                <div className="imgSection">
                  <img src={featureImg} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* Feature House End */}
    </Fragment>
  );
};

export default DigitalCleaningService;
