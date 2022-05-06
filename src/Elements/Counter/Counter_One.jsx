import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default class Counter_One extends Component {
  state = { viewCountUp: false };

  onChange = (isVisible) => {
    if (isVisible) {
      this.setState({ viewCountUp: true });
    }
  };
  render() {
    let Data = [
      {
        icon: <FiHeart />,
        countNum: 199,
        countTitle: "Staticfied Customers",
      },

      {
        icon: <FiClock />,
        countNum: 575,
        countTitle: "Days Of Operation",
      },

      {
        icon: <FiCheckCircle />,
        countNum: 49,
        countTitle: "Complete Project",
      },

      {
        icon: <FiAward />,
        countNum: 55,
        countTitle: "Win Awards",
      },
    ];
    return (
      <div>
        <div className="counterValue">
          <VisibilitySensor onChange={this.onChange}></VisibilitySensor>
        </div>
      </div>
    );
  }
}
