import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Testimonial from "../../Data/Testimonial";
export default class TestimonialData extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Tabs>
            <Row>
              {" "}
              <Col lg={5}>
                <TabList>
                  {Testimonial.map((value, index) => (
                    <Tab key={index}>
                      <img src={value.img} alt="" />
                    </Tab>
                  ))}
                </TabList>
              </Col>
              <Col lg={7}>
                {Testimonial.map((value, index) => (
                  <TabPanel>
                    <h4>{value.des}</h4>

                    <p className="name">{value.name} </p>
                    <p className="position">{value.position}</p>
                  </TabPanel>
                ))}
              </Col>
            </Row>
          </Tabs>
        </Col>
      </Row>
    );
  }
}
