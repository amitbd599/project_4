import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick/lib/slider";
import Helmet from "../components/common/Helmet";
import Header from "../components/header/Header";

import sliderList from "../Data/SlideList";
import { SliderSettings } from "../Script/Slider_Script_Data";

const DigitalCleaningService = () => {
  console.log(sliderList);
  const img = <img src="/assets/images/logo/LogoBlack.png" alt="" />;
  return (
    <Fragment>
      <Helmet pageTitle="Digital Agency" />

      {/* Header Section */}

      <Header logo="dark" />

      {/* Slider section start here */}

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
                            <div className="btn-transparent mt-lg-30 mt-sm-15">
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

      {/* --- */}

      <div>
        <h2>Hello</h2>
      </div>
      <div>
        <h2>Hello</h2>
      </div>
      <div>
        <h2>Hello</h2>
      </div>
      <div>
        <h2>Hello</h2>
      </div>
      <div>
        <h2>Hello</h2>
      </div>
      <div>
        <h2>Hello</h2>
      </div>
      <div>
        <h2>Hello</h2>
      </div>
      <div>
        <h2>Hello</h2>
      </div>
      <div>
        <h2>Hello</h2>
      </div>
    </Fragment>
  );
};

export default DigitalCleaningService;
