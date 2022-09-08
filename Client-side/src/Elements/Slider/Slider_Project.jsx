import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import projectData from "../../Data/ProjectData";
import sliderSetting from "../../Script/Slider_Script_Data";

export default class Slider_Project extends Component {
  render() {
    const { Slider_Project_setting } = sliderSetting();
    const projectDataFilter = projectData.slice(0, 6);
    return (
      <div className="sliderProjectInner">
        <Slider {...Slider_Project_setting}>
          {projectDataFilter.map((value, index) => (
            <Link to={"/single-project"} key={index}>
              <div className="projectItems slider">
                <div className="projectTextBody">
                  <div className="imgFile">
                    <img className="img-fluid" src={value.img} alt="" />
                  </div>
                  <div className="textBody">
                    <div className="textItem">
                      <h1>{value.title}</h1>
                      <h2>{value.subTitle}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>{" "}
      </div>
    );
  }
}
