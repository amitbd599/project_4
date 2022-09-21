import React, { Component, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PortfolioPagination__Request__API } from "../API/API";
import HelmetData from "../components/common/Helmet";
import PageIntro from "../components/common/PageIntro";
import ProjectSection from "../components/FeatureHouse/ProjectSection";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";
import Slider_Project from "../Elements/Slider/Slider_Project";
import { paramsData } from "../Redux/stateSlice/BlogDataSlicer";
import store from "../Redux/Store/Store";

const Project = () => {
  const params = useParams();
  useEffect(() => {
    PortfolioPagination__Request__API(params.pageNo);
  }, []);

  let navigate = useNavigate();
  const handelPageClick = (event) => {
    let pageNo = event.selected;

    PortfolioPagination__Request__API(pageNo + 1).then((res) => {
      if (res === true) {
        store.dispatch(paramsData(pageNo + 1));
        navigate(`/project/${pageNo + 1}`);
      }
    });
  };

  // const ProjectData = useSelector((state) => state.PortfolioData.data);
  const PortfolioData = useSelector((state) => state.PortfolioData.pagination);
  const TotalData = useSelector((state) => state.PortfolioData.total);
  return (
    <React.Fragment>
      {/* Helmat Data Start*/}
      <HelmetData pageTitle="Project" />
      {/* Helmat Data End*/}

      {/* Header section start  */}
      <Header logo="dark" />
      {/* Header section End  */}

      {/* Page intro start */}
      <PageIntro title="Project" />
      {/* Page intro End */}

      {/* Project section start */}
      <div className="project_section projectPage ">
        <div className="wrapper">
          <Container>
            <Row className="part_1">
              <Col>
                <div className="wrapperBody">
                  <h1>All projects</h1>
                  <h2>All Works</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </Col>
            </Row>
            <div className="part_2">
              <div className="wrapperBody text-center">
                <ProjectSection ProjectData={PortfolioData} />

                <div className="text-center mt-30">
                  {TotalData > 6 && (
                    <div className="pagination">
                      <ReactPaginate
                        className=""
                        previousLabel="Next"
                        nextLabel="Prev"
                        pageLinkClassName="button"
                        previousLinkClassName="previousLinkClassName"
                        nextLinkClassName="nextLinkClassName"
                        breakLabel=". . ."
                        pageCount={TotalData / 6}
                        initialPage={parseInt(params.pageNo - 1)}
                        activeClassName="active"
                        onPageChange={handelPageClick}
                        type="button"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div></div>
          </Container>
          {/* Project Slider Start */}
          <div className="sliderProject">
            <Container>
              <Row>
                <Col>
                  {" "}
                  <div className="wrapperBody">
                    <Slider_Project PortfolioData={PortfolioData} />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          {/* Project Slider End */}
        </div>
      </div>
      {/* Project section End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </React.Fragment>
  );
};

export default Project;
