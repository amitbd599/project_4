import React, { Component, useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import HelmetData from "../components/common/Helmet";
import PageIntro from "../components/common/PageIntro";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";
import ReactHtmlParser from "react-html-parser";
import {
  BsFacebook,
  BsFillArrowRightCircleFill,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import BrandLogoData from "../Elements/BrandLogo/BrandLogoData";
import { Link, useParams } from "react-router-dom";
import SideBar_One from "../Elements/Sidebar/SideBar_One";
import RecentNews from "../Elements/Sidebar/RecentNews";
import TagBox from "../Elements/Sidebar/TagBox";
import {
  CommentCreate__Request__API,
  readBlogPost__Request__API,
  singleBlogPost__Request__API,
  singleCommentPost__Request__API,
} from "../API/API";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { SuccessTost } from "../Helper/FormHelper";
const BlogDetails = () => {
  const params = useParams();
  let { nameRef, emailRef, desRef } = useRef();
  useEffect(() => {
    readBlogPost__Request__API();
    singleBlogPost__Request__API(params.id);
    singleCommentPost__Request__API(params.id);
  }, []);

  const loadBlog = (id) => {
    readBlogPost__Request__API();
    singleBlogPost__Request__API(id);
  };

  const SingleBlogData = useSelector((state) => state.SingleBlogData.data);
  const SingleCommentData = useSelector(
    (state) => state.CommentData.singleComment
  );

  const commentFilter = SingleCommentData.filter(
    (item) => item.status === true
  );
  const BlogData = useSelector((state) => state.BlogData.data);
  let SliceBlogData = BlogData.slice(0, 3);

  const createComment = () => {
    let name = nameRef.value;
    let email = emailRef.value;
    let des = desRef.value;
    CommentCreate__Request__API(params.id, name, email, des).then((res) => {
      if (res === true) {
        nameRef.value = "";
        emailRef.value = "";
        desRef.value = "";
        SuccessTost("Your Comment are Pending. Please wait for approve.");
      }
    });
  };

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
                      src={SingleBlogData.img}
                      alt=""
                    />
                    <div className="tagHeader">
                      <span className="headTag">
                        Type: {SingleBlogData.type}
                      </span>
                      <span className="date">{SingleBlogData.createdDate}</span>
                      <span className="comment">
                        Comment {commentFilter.length}
                      </span>
                    </div>
                    <h2 className="pb-15">{SingleBlogData.title}</h2>
                    <br />
                    <div>{ReactHtmlParser(SingleBlogData.description)}</div>
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
                          elit. Accusamus molestias vel voluptate quaerat quidem
                          optio corrupti in quas! Qui vel laborum non asperiores
                          saepe? Distinctio commodi assumenda quibusdam ad qui
                          animi molestias porro pariatur vel aliquid harum
                          eveniet est.
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

                      {commentFilter.map((value, index) => (
                        <div key={index}>
                          {" "}
                          <div className="commentZoon">
                            <div className="imgSection">
                              <img
                                src="https://res.cloudinary.com/amit-js/image/upload/v1663345759/AmitJS.com/profile_img__Data/user_garr8o.png"
                                alt=""
                              />
                            </div>
                            <div className="textSection">
                              <div className="d-flex jSpace aCenter">
                                {" "}
                                <h4 className="name">{value.name}</h4>
                                <p className="date">{value.createdDate}</p>
                              </div>
                              <p className="des">{value.description}</p>

                              {/* <a href="#">Reply</a> */}
                            </div>
                          </div>
                          {/* Reply Zoon */}
                          {/* <div className="replyZoon">
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
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laborum ex ipsum autem quaerat
                                a natus id asperiores atque, rem nobis excepturi
                                dolores aut eos, officiis impedit quibusdam
                                neque iste ratione.
                              </p>
                            </div>
                          </div> */}
                        </div>
                      ))}
                    </div>

                    {/* Comment Form Start */}
                    <div className="commentForm">
                      <div className="wrapperBody">
                        <div className="inner">
                          <h3>Leave A Comment</h3>
                          <div>
                            <Row>
                              <Col lg={6}>
                                <div className="form_group">
                                  <input
                                    type="text"
                                    class="form_control"
                                    placeholder="Your Full Name"
                                    name="name"
                                    required=""
                                    ref={(input) => (nameRef = input)}
                                  />
                                </div>
                              </Col>
                              <Col lg={6}>
                                <div className="form_group">
                                  <input
                                    type="email"
                                    class="form_control"
                                    placeholder="Your Email Id"
                                    name="name"
                                    required=""
                                    ref={(input) => (emailRef = input)}
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
                                    ref={(input) => (desRef = input)}
                                  ></textarea>
                                </div>
                              </Col>
                              <Col lg={12}>
                                <button
                                  className="small_solid_color"
                                  onClick={createComment}
                                >
                                  Submit
                                </button>
                              </Col>
                            </Row>
                          </div>
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

                    <div className="tagBox">
                      <div className="tagBoxInner">
                        <h2>Category</h2>
                        <div className="tagBoxInner_Items">
                          <ul>
                            {SingleBlogData.category?.map((value, index) => (
                              <li key={index}>
                                <a href={"JavaScript:void(0)"}>{value}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Side Bar start  */}
                    <SideBar_One></SideBar_One>
                    {/* Side Bar End */}

                    {/* Recent News Start */}

                    <div className="recentNews">
                      <div className="newsData">
                        <div className="newsData_inner">
                          <h2>Recent News</h2>

                          {SliceBlogData.map((data, index) => (
                            <div className="item" key={index}>
                              <div className="img w-25">
                                <img
                                  className="img-fluid"
                                  src={data.img}
                                  alt=""
                                />
                              </div>
                              <div className="w-75">
                                <Link
                                  onClick={() => loadBlog(data._id)}
                                  className="headingText "
                                  to={`/blog-details/${data._id}`}
                                >
                                  {data.title.split(" ").slice(0, 5).join(" ")}{" "}
                                  ...
                                </Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Recent News End */}
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
};

export default BlogDetails;
