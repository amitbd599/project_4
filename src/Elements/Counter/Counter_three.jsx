import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { FiHeart, FiClock, FiCheckCircle, FiAward } from "react-icons/fi";
import { Col, Row } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
export default class Counter_three extends Component {
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
      <div className="counter_One">
        <Row className="counterValue">
          {Data.map((value, index) => (
            <Col lg={3} md={4} sm={6} className="wrapperCounter" key={index}>
              <ScrollAnimation
                animateIn="animate__fadeInUp"
                delay={100}
                animateOnce={true}
              >
                <div className="inner">
                  <div className="icon">{value.icon}</div>
                  <h2 className="counter">
                    <VisibilitySensor onChange={this.onChange} delayedCall>
                      <CountUp
                        end={this.state.viewCountUp ? value.countNum : 0}
                      />
                    </VisibilitySensor>
                  </h2>
                  <p className="description">{value.countTitle}</p>
                </div>
              </ScrollAnimation>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
