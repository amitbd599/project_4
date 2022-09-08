import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HelmetData from "../../components/common/Helmet";
import PageIntro from "../../components/common/PageIntro";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import ModalVideo from "react-modal-video";

export default class Video_PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModel = this.openModel.bind(this);
  }

  openModel() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        {/* Helmat Data Start*/}
        <HelmetData pageTitle="Video PopUp" />
        {/* Helmat Data End*/}

        {/* Header section start */}
        <Header logo="dark" />
        {/* Header section End */}

        {/* Page intro start */}
        <PageIntro title="Video Popup" />
        {/* Page intro End */}

        {/* Video PopUp Start*/}
        <div className="video_popUp">
          <div className="wrapper">
            <div className="wrapperBody">
              <Container>
                <Row className="part_1">
                  <Col>
                    <div className="big__popup">
                      <ModalVideo
                        channel="youtube"
                        isOpen={this.state.isOpen}
                        fs="1"
                        videoId="KwaBaV1QXDw"
                        onClose={() => this.setState({ isOpen: false })}
                      />
                      <div className="imgFile">
                        <img
                          onClick={this.openModel}
                          className=" img-fluid"
                          src="/assets/images/video__popup/video__popup_2.png"
                          alt=""
                        />
                        <img
                          onClick={this.openModel}
                          className="icon img-fluid"
                          src="/assets/images/video__popup/icon__Video.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
              <hr />
              <Container>
                <Row className="part_1">
                  <Col lg={6}>
                    <div className="big__popup">
                      <ModalVideo
                        channel="youtube"
                        fs="2"
                        isOpen={this.state.isOpen}
                        videoId="501719570"
                        onClose={() => this.setState({ isOpen: false })}
                      />
                      <div className="imgFile">
                        <img
                          onClick={this.openModel}
                          className=" img-fluid w-100"
                          src="/assets/images/video__popup/video__popup_3.png"
                          alt=""
                        />
                        <img
                          onClick={this.openModel}
                          className="icon img-fluid"
                          src="/assets/images/video__popup/icon__Video.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="big__popup">
                      <ModalVideo
                        channel="youtube"
                        fs="3"
                        isOpen={this.state.isOpen}
                        videoId="C72WkcUZvco"
                        onClose={() => this.setState({ isOpen: false })}
                      />
                      <div className="imgFile">
                        <img
                          onClick={this.openModel}
                          className=" img-fluid"
                          src="/assets/images/video__popup/video__popup_4.png"
                          alt=""
                        />
                        <img
                          onClick={this.openModel}
                          className="icon img-fluid"
                          src="/assets/images/video__popup/icon__Video.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
              <hr />
              <Container>
                <Row className="part_1">
                  <Col lg={4}>
                    <div className="big__popup">
                      <ModalVideo
                        channel="youtube"
                        isOpen={this.state.isOpen}
                        videoId="C72WkcUZvco"
                        onClose={() => this.setState({ isOpen: false })}
                      />
                      <div className="imgFile">
                        <img
                          onClick={this.openModel}
                          className=" img-fluid"
                          src="/assets/images/video__popup/video__popup_5.png"
                          alt=""
                        />
                        <img
                          onClick={this.openModel}
                          className="icon img-fluid"
                          src="/assets/images/video__popup/icon__Video.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="big__popup">
                      <ModalVideo
                        channel="youtube"
                        isOpen={this.state.isOpen}
                        videoId="C72WkcUZvco"
                        onClose={() => this.setState({ isOpen: false })}
                      />
                      <div className="imgFile">
                        <img
                          onClick={this.openModel}
                          className=" img-fluid"
                          src="/assets/images/video__popup/video__popup_6.png"
                          alt=""
                        />
                        <img
                          onClick={this.openModel}
                          className="icon img-fluid"
                          src="/assets/images/video__popup/icon__Video.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <div className="big__popup">
                      <ModalVideo
                        channel="youtube"
                        isOpen={this.state.isOpen}
                        videoId="C72WkcUZvco"
                        onClose={() => this.setState({ isOpen: false })}
                      />
                      <div className="imgFile">
                        <img
                          onClick={this.openModel}
                          className=" img-fluid"
                          src="/assets/images/video__popup/video__popup_7.png"
                          alt=""
                        />
                        <img
                          onClick={this.openModel}
                          className="icon img-fluid"
                          src="/assets/images/video__popup/icon__Video.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
        {/* Video PopUp End*/}

        {/* Footer Start */}
        <Footer />
        {/* Footer End */}
      </React.Fragment>
    );
  }
}
