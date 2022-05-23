import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HelmetData from "../../components/common/Helmet";
import PageIntro from "../../components/common/PageIntro";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  {
    image: "01",
    bigImage: "/assets/images/gallery/gallery_1.png",
    category: "Web Design",
    title: "Design is a creative part",
  },
  {
    image: "02",
    bigImage: "/assets/images/gallery/gallery_2.png",
    category: "Mobile App",
    title: "The service provide for designer",
  },
  {
    image: "03",
    bigImage: "/assets/images/gallery/gallery_3.png",
    category: "Web Design",
    title: "Mobile App landing Design",
  },
  {
    image: "04",
    bigImage: "/assets/images/gallery/gallery_4.png",
    category: "Mobile App",
    title: "Logo Design creativity",
  },
  {
    image: "05",
    bigImage: "/assets/images/gallery/gallery_5.png",
    category: "Web Design",
    title: "T-shirt design is the part of design",
  },
  {
    image: "06",
    bigImage: "/assets/images/gallery/gallery_6.png",
    category: "Logo Design",
    title: "Getting tickets to the big show",
  },
];
export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <React.Fragment>
        {/* Helmat Data Start*/}
        <HelmetData pageTitle="Gallery" />
        {/* Helmat Data End*/}

        {/* Header section start */}
        <Header logo="dark" />
        {/* Header section End */}

        {/* Page intro start */}
        <PageIntro title="Gallery" />
        {/* Page intro End */}

        {/* Gallery Option */}
        <div className="galleryOption">
          <div className="wrapper">
            <div className="wrapperBody">
              <Container>
                <Row>
                  {images.map((e, index) => (
                    <Col lg={6}>
                      <div className="inner">
                        <div>
                          {isOpen && (
                            <Lightbox
                              mainSrc={images[photoIndex].bigImage}
                              nextSrc={images[(photoIndex + 1) % images.length]}
                              prevSrc={
                                images[
                                  (photoIndex + images.length - 1) %
                                    images.length
                                ]
                              }
                              onCloseRequest={() =>
                                this.setState({ isOpen: false })
                              }
                              onMovePrevRequest={() =>
                                this.setState({
                                  photoIndex:
                                    (photoIndex + images.length - 1) %
                                    images.length,
                                })
                              }
                              onMoveNextRequest={() =>
                                this.setState({
                                  photoIndex: (photoIndex + 1) % images.length,
                                })
                              }
                            />
                          )}

                          <div className="item">
                            <img
                              className="img-fluid"
                              onClick={() =>
                                this.setState({
                                  isOpen: true,
                                  photoIndex: index,
                                })
                              }
                              src={e.bigImage}
                              alt=""
                            />
                            <h5>{e.category}</h5>
                            <h2>{e.title}</h2>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </div>
        </div>

        {/* Footer Start */}
        <Footer />
        {/* Footer End */}
      </React.Fragment>
    );
  }
}
