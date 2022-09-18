import React, { Component, Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import {
  blogPagination__Request__API,
  readBlogPost__Request__API,
  verifyEmail,
} from "../API/API";
import HelmetData from "../components/common/Helmet";
import PageIntro from "../components/common/PageIntro";
import LatestNewsItems from "../components/FeatureHouse/LatestNewsItems";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";
import BrandLogoData from "../Elements/BrandLogo/BrandLogoData";
import { useNavigate, useParams } from "react-router-dom";
import { getEmail, getPassword, removeSession } from "../Helper/SessionHelper";
import { paramsData } from "../Redux/stateSlice/BlogDataSlicer";
import store from "../Redux/Store/Store";
import ReactPaginate from "react-paginate";

const Blog = () => {
  const params = useParams();
  useEffect(() => {
    blogPagination__Request__API(params.pageNo);
    readBlogPost__Request__API();
  }, []);

  let navigate = useNavigate();
  const handelPageClick = (event) => {
    let pageNo = event.selected;

    blogPagination__Request__API(pageNo + 1).then((res) => {
      if (res === true) {
        store.dispatch(paramsData(pageNo + 1));
        navigate(`/blog/${pageNo + 1}`);
      }
    });
  };

  const BlogData = useSelector((state) => state.BlogData.pagination);
  const TotalData = useSelector((state) => state.BlogData.total);

  // const BlogData = useSelector((state) => state.BlogData.data);
  return (
    <Fragment>
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
              <LatestNewsItems BlogData={BlogData} />

              <div className="text-center mt-40">
                {TotalData > 9 && (
                  <div className="pagination">
                    <ReactPaginate
                      className=""
                      previousLabel="Next"
                      nextLabel="Prev"
                      pageLinkClassName="button"
                      previousLinkClassName="previousLinkClassName"
                      nextLinkClassName="nextLinkClassName"
                      breakLabel=". . ."
                      pageCount={TotalData / 9}
                      initialPage={parseInt(params.pageNo - 1)}
                      activeClassName="active"
                      onPageChange={handelPageClick}
                      type="button"
                    />
                  </div>
                )}
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
    </Fragment>
  );
};

export default Blog;
