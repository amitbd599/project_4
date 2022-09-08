import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HelmetData from "../components/common/Helmet";
import PageIntro from "../components/common/PageIntro";
import LatestNewsItems from "../components/FeatureHouse/LatestNewsItems";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";
import BrandLogoData from "../Elements/BrandLogo/BrandLogoData";

export default class Blog extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Helmat Data Start*/}
        <HelmetData pageTitle="Blog" />
        {/* Helmat Data End*/}

        {/* Header section start  */}
        <Header logo="dark" />
        {/* Header section End  */}

        {/* Page intro start */}
        <PageIntro title="Blog" />
        {/* Page intro End */}

        {/* Blog items start */}
        <div className="latestNews">
          <div className="wrapper">
            <Container>
              <div className="part_2">
                <LatestNewsItems />

                <div className="text-center mt-30">
                  <div className="pagination">
                    <ul>
                      <li className="active">
                        {" "}
                        <a href="#">1</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">2</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">3</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">4</a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#"> > </a>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
        {/* Blog items End */}

        {/* Brand Logo Start */}
        <div className="brandLogo pt-60">
          <div className="wrapper">
            <Container>
              <Row className="part_1">
                <Col>
                  <div className="wrapperBody">
                    <h1>Top Clinets</h1>
                    <h2>We Worked With This Brand</h2>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nostrum commodi optio neque vel sequi hic, dolor esse ea
                      quos ex.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="part_2">
                <div className="wrapperBody">
                  <div className="iconLogo">
                    <BrandLogoData />
                  </div>
                </div>
              </Row>
            </Container>
          </div>
        </div>
        {/* Brand Logo End */}

        {/* Footer Start */}
        <Footer />
        {/* Footer End */}
      </React.Fragment>
    );
  }
}
