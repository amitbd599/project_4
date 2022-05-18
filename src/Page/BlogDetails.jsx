import React, { Component } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
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
import BrandLogoData from "../Elements/BrandLogo/BrandLogoData";
import { Link } from "react-router-dom";
import SideBar_One from "../Elements/Sidebar/SideBar_One";
import RecentNews from "../Elements/Sidebar/RecentNews";
import TagBox from "../Elements/Sidebar/TagBox";
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
          <div className="singleBlog_wrapper">
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
                        <h3 className="headingText">Popular Comments</h3>
                        {/* Comment Zoon */}
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
                        {/* Reply Zoon */}
                        <div className="replyZoon">
                          <div className="imgSection">
                            <img
                              src="/assets/images/Testimonail/Testimonial-1.png"
                              alt=""
                            />
                          </div>
                          <div className="textSection">
                            <div className="d-flex jSpace aCenter">
                              {" "}
                              <h4 className="name">Admin</h4>
                              <p className="date">22 Jan 2022</p>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Laborum ex ipsum autem quaerat a natus id
                              asperiores atque, rem nobis excepturi dolores aut
                              eos, officiis impedit quibusdam neque iste
                              ratione.
                            </p>
                          </div>
                        </div>
                        {/* Comment Zoon */}
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
                              <h4 className="name">Lili Route</h4>
                              <p className="date">29 Jan 2022</p>
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

                      {/* Comment Form Start */}
                      <div className="commentForm">
                        <div className="wrapperBody">
                          <div className="inner">
                            <h3>Leave A Comment</h3>
                            <Form>
                              <Row>
                                <Col lg={6}>
                                  <div className="form_group">
                                    <input
                                      type="text"
                                      class="form_control"
                                      placeholder="Your Full Name"
                                      name="name"
                                      required=""
                                    />
                                  </div>
                                </Col>
                                <Col lg={6}>
                                  <div className="form_group">
                                    <input
                                      type="text"
                                      class="form_control"
                                      placeholder="Your Email Id"
                                      name="name"
                                      required=""
                                    />
                                  </div>
                                </Col>

                                <Col lg={12}>
                                  <div className="form_group">
                                    <textarea
                                      id="w3review"
                                      class="text_control"
                                      rows="8"
                                      cols="50"
                                    ></textarea>
                                  </div>
                                </Col>
                                <Col lg={12}>
                                  <a href="#" className="btn-transparent">
                                    Submit
                                  </a>
                                </Col>
                              </Row>
                            </Form>
                          </div>
                        </div>
                      </div>
                      {/* Comment Form End */}
                    </div>
                  </div>
                  {/* Commnet Section End */}
                </Col>
                <Col lg={4} className="rightSide">
                  <div className="wrapperBody">
                    <div className="inner">
                      <div className="form_group">
                        <input
                          type="text"
                          class="form_control"
                          placeholder="Search here"
                          name="name"
                          required=""
                        />
                      </div>
                      <div className="category">
                        <h3>Category</h3>
                        <ul>
                          <li>
                            <Link to={"#"}>Web Development</Link>
                          </li>
                          <li>
                            <Link to={"#"}>Web Design</Link>
                          </li>
                          <li>
                            <Link to={"#"}>Android Apps</Link>
                          </li>
                          <li>
                            <Link to={"#"}>SEO & SMM</Link>
                          </li>
                        </ul>
                      </div>

                      {/* Side Bar start  */}
                      <SideBar_One></SideBar_One>
                      {/* Side Bar End */}

                      {/* Recent News Start */}

                      <RecentNews></RecentNews>

                      {/* Recent News End */}

                      {/* TagBox Start */}

                      <TagBox></TagBox>

                      {/* TagBox End */}
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        {/* Single Blog details End */}

        {/* News letter Start */}
        <div className="newsLetter">
          <div className="wrapper">
            <Container>
              <Row>
                <Col className="wrapperBody">
                  <div className="inner">
                    {" "}
                    <h2>Subscribe Newsletter & Stay Update</h2>
                    <form action="">
                      <div className="inputGroup pt-30">
                        <input
                          className="email"
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          required=""
                        />
                        <button type="submit" className="myBtn">
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        {/* News letter End */}

        {/* Brand Logo Start */}
        <div className="brandLogo">
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
