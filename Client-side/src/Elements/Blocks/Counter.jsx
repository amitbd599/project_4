import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HelmetData from "../../components/common/Helmet";
import PageIntro from "../../components/common/PageIntro";
import Header from "../../components/header/Header";
import Counter_One from "../Counter/Counter_One";
import Counter_two from "../Counter/Counter_two";

import Footer from "../../components/Footer/Footer";
import Counter_three from "../Counter/Counter_three";
export default class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Helmat Data Start*/}
        <HelmetData pageTitle="Counter" />
        {/* Helmat Data End*/}

        {/* Header section start */}
        <Header logo="dark" />
        {/* Header section End */}

        {/* Page intro start */}
        <PageIntro title="Counter" />
        {/* Page intro End */}

        {/* Counter info start */}
        <div className="counter__Root">
          <div className="wrapper">
            <div className="wrapperBody">
              {/* part___1 start */}

              <section className="part__1">
                <Container>
                  <Row>
                    <Col>
                      <div className="inner">
                        <div className="counterData">
                          <Counter_One />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>

              {/* part___2 start */}

              <section className="part__2">
                <Container>
                  <Row>
                    <Col>
                      <div className="inner">
                        <div className="counterData">
                          <Counter_two />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>

              {/* part___2 start */}

              <section className="part__1">
                <Container>
                  <Row>
                    <Col>
                      <div className="inner">
                        <div className="counterData">
                          <Counter_three />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
            </div>
          </div>
        </div>
        {/* Counter info End */}
        {/* Footer Start */}
        <Footer />
        {/* Footer End */}
      </React.Fragment>
    );
  }
}
