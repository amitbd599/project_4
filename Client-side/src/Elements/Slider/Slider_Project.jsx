import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import sliderSetting from "../../Script/Slider_Script_Data";

const Slider_Project = ({ PortfolioData }) => {
  const { Slider_Project_setting } = sliderSetting();
  return (
    <div className="sliderProjectInner">
      <Slider {...Slider_Project_setting}>
        {PortfolioData.map((value, index) => (
          <Link to={`/project-details/${value._id}`} key={index}>
            <div className="projectItems slider">
              <div className="projectTextBody">
                <div className="imgFile">
                  <img className="img-fluid" src={value.img} alt="" />
                </div>
                <div className="textBody">
                  <div className="textItem">
                    <h1>{value.title}</h1>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Slider_Project;
