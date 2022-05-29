import React, { Component } from "react";

const data = [
  {
    title: "Web Development",
    img: "/assets/images/intro/intro_1.png",
    des: "Duis autem vel eum  velit esse molestie consequat dolor in hendrerit in vulputate iriure.",
  },
  {
    title: "Web Design",
    img: "/assets/images/intro/intro_2.png",
    des: "Duis autem vel eum  dolor in hendrerit in vulputate velit iriure esse molestie consequat.",
  },
  {
    title: "UI/UX Design",
    img: "/assets/images/intro/intro_3.png",
    des: "Duis autem vel eum  dolor in hendrerit in vulputate velit esse molestie iriure consequat.",
  },
  {
    title: "Mobile Application",
    img: "/assets/images/intro/intro_4.png",
    des: "Duis autem consequat vel eum iriure dolor in hendrerit in vulputate velit esse molestie .",
  },
];
class FeatureHouseService extends Component {
  render() {
    return (
      <div className="items">
        {data.map((value, index) => (
          <div className="itemBody" key={index}>
            <div className="leftSide">
              <img src={value.img} alt="" />
            </div>
            <div className="rightSide">
              <h3 className="title">{value.title}</h3>
              <p className="description">{value.des}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default FeatureHouseService;
