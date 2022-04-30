import React, { Component } from "react";

const data = [
  {
    title: "Upholstery Cleaning",
    img: "https://res.cloudinary.com/amitjs/image/upload/v1651313505/featureImg-2_tqfcra.png",
    des: "Duis autem vel eum  velit esse molestie consequat dolor in hendrerit in vulputate iriure.",
  },
  {
    title: "Carpet Cleaning",
    img: "https://res.cloudinary.com/amitjs/image/upload/v1651313499/featureImg-1_gcdoxg.png",
    des: "Duis autem vel eum  dolor in hendrerit in vulputate velit iriure esse molestie consequat.",
  },
  {
    title: "House Cleaning",
    img: "https://res.cloudinary.com/amitjs/image/upload/v1651313499/featureImg-3_ea0dcd.png",
    des: "Duis autem vel eum  dolor in hendrerit in vulputate velit esse molestie iriure consequat.",
  },
  {
    title: "Apartment Cleaning",
    img: "https://res.cloudinary.com/amitjs/image/upload/v1651313499/featureImg-4_aje1wy.png",
    des: "Duis autem consequat vel eum iriure dolor in hendrerit in vulputate velit esse molestie .",
  },
];
class FeatureHouseService extends Component {
  render() {
    return (
      <div className="items">
        {data.map((value, index) => {
          return (
            <div className="itemBody">
              <div className="leftSide">
                <img src={value.img} alt="" />
              </div>
              <div className="rightSide">
                <h3 className="title">{value.title}</h3>
                <p className="description">{value.des}</p>
              </div>
            </div>
          );
        })}

       
      </div>
    );
  }
}

export default FeatureHouseService;
