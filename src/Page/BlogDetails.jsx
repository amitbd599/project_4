import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HelmetData from "../components/common/Helmet";
import PageIntro from "../components/common/PageIntro";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";
import {
  BsFacebook,
  BsFillArrowRightCircleFill,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
export default class BlogDetails extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Helmat Data Start*/}
        <HelmetData pageTitle="Single Blog" />
        {/* Helmat Data End*/}

        {/* Header section start  */}
        <Header logo="dark" />
        {/* Header section End  */}

        {/* Page intro start */}
        <PageIntro title="Single Blog" />
        {/* Page intro End */}

        {/* Single Blog details start */}
        <div className="singleBlog">
          <div className="wrapper">
            <Container>
              <Row>
                <Col lg={8} className="leftSide">
                  {/* Main details start */}
                  <div className="wrapperBody">
                    <div className="inner">
                      <img
                        className="img-fluid"
                        src="/assets/images/latestNews/news_10.jpg"
                        alt=""
                      />
                      <div className="tagHeader">
                        <span className="headTag">
                          <a className="active" href="#">
                            Web Design
                          </a>{" "}
                        </span>
                        <span className="date">
                          <a href="#">25 March 2022</a>{" "}
                        </span>
                        <span className="comment">
                          <a href="#">Comment (5)</a>{" "}
                        </span>
                      </div>
                      <h2 className="pb-15">
                        Powerful Terminal And Command Line Seeny Tools Modern
                        Designing Better Links For Websites
                      </h2>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque lau dantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernate aut
                        odit aut fugit, sed quia consequuntur magni dolores
                        eosqui ratione voluptatem nesciunt. Neque porro quisquam
                        est, qui dolorem ipsum quia dolor sit amet, consectetur
                        adipise velit sed quia non numquam eius modi tempora
                        incidunt ut labore et dolore magnam aliquam quaerat
                        voluptatem. Ut enim ad minima veniam quis nostrum
                        exercitationem ullam corporis suscipit laboriosam, nisi
                        ut aliquid ex ea commodi consequatur.
                      </p>
                      <img
                        className="img-fluid mt-10 mb-35"
                        src="/assets/images/latestNews/news_11.jpg"
                        alt=""
                      />
                      <h3>
                        Designing Better Links For Websites And Emails Guideline
                        Useful VS Code Extensions For Front-End Developers
                      </h3>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernate
                        odit aut fugit quia coquuntur magni dolores eosqui
                        ratione voluptatem nesciunt eque porro quisquam est qui
                        dolorem epsum quia dolor sit amet, consectetur adipise
                        velit sed quia non numquam
                      </p>
                      <div className="listItems">
                        <ul>
                          <li>
                            {" "}
                            <BsFillArrowRightCircleFill className="icon" />{" "}
                            Digital Creative Agency
                          </li>
                          <li>
                            {" "}
                            <BsFillArrowRightCircleFill className="icon" />{" "}
                            Professional Problem Solutions
                          </li>
                          <li>
                            {" "}
                            <BsFillArrowRightCircleFill className="icon" /> Web
                            Design & Development
                          </li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Neque, omnis quia. Corporis, atque error beatae
                          minus dicta qui ea at exercitationem nisi non, in
                          numquam ipsum deserunt voluptates laborum quidem
                          facere enim quisquam veniam, ex fugit fuga ab rerum
                          quas. Asperiores nobis doloremque dolor assumenda
                          pariatur sed mollitia, quam tempora corporis quae est
                          laborum repellendus. Fugit quae aut consequuntur
                          doloribus ducimus consectetur, maiores molestiae
                          veniam dolorem mollitia aliquid eum fuga unde quia
                          sapiente! Vel, temporibus nam dicta ab explicabo
                          accusamus alias voluptatem maxime sunt amet. Amet
                          perspiciatis repudiandae nesciunt unde tenetur,
                          possimus ea at, mollitia aliquam praesentium, deserunt
                          libero ut!
                        </p>
                      </div>
                      <div className="testimonialItem">
                        <h4>
                          Newly Supported Modern Pseudo-Class Selectors Smashing
                          Podcast Episode Pauloag Conve Seen
                        </h4>
                        <p>William K. Parker</p>
                      </div>
                    </div>

                    <div className="tagFooter">
                      <div className="tagInner">
                        <span>Tags :</span>
                        <ul>
                          <li>
                            <a href="#">Web Design</a>
                          </li>
                          <li>
                            <a href="#">Development</a>
                          </li>
                          <li>
                            <a href="#">UX/UI</a>
                          </li>
                          <li>
                            <a href="#">SEO</a>
                          </li>
                        </ul>
                      </div>
                      <div className="share">
                        <span>Share :</span>
                        <ul>
                          <li>
                            <a href="#">
                              <BsFacebook className="icon" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <BsTwitter className="icon" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <BsLinkedin className="icon" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Main details End */}

                  {/* Top Comment start */}
                  <div className="topComment">
                    <div className="wrapperBody">
                      <div className="inner">
                        <div className="imgSection">
                          <img
                            src="/assets/images/Testimonail/Testimonial-1.png"
                            alt=""
                          />
                        </div>
                        <div className="textSection">
                          <h3>Alex Json</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Accusamus molestias vel voluptate quaerat
                            quidem optio corrupti in quas! Qui vel laborum non
                            asperiores saepe? Distinctio commodi assumenda
                            quibusdam ad qui animi molestias porro pariatur vel
                            aliquid harum eveniet est.
                          </p>
                          <div className="icons">
                            <ul>
                              <li>
                                <a href="#"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Top Comment End */}

                  {/* Commnet Section Start */}
                  <div className="commentSection">
                    <div className="wrapperBody">
                      <div className="inner">
                        <h3>Popular Comments</h3>
                        <div className="commentZoon">
                          <div className="imgSection">
                            <img
                              src="/assets/images/Testimonail/Testimonial-2.png"
                              alt=""
                            />
                          </div>
                          <div className="textSection">
                            <div className="d-flex jSpace aCenter">
                              {" "}
                              <h4 className="name">Marira Alose</h4>
                              <p className="date">20 Jan 2022</p>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Laborum ex ipsum autem quaerat a natus id
                              asperiores atque, rem nobis excepturi dolores aut
                              eos, officiis impedit quibusdam neque iste
                              ratione.
                            </p>

                            <a href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Commnet Section End */}
                </Col>
                <Col lg={4} className="rightSide">
                  <div className="wrapperBody">
                    <div className="inner"></div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        {/* Single Blog details End */}

        {/* Footer Start */}
        <Footer />
        {/* Footer End */}
      </React.Fragment>
    );
  }
}
