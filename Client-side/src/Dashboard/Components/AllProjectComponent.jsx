import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  PortfolioPagination__Request__API,
  readBlogPost__Request__API,
  readPortfolioPost__Request__API,
  singleBlogPost__Request__API,
  singlePortfolioPost__Request__API,
  verifyEmail,
} from "../../API/API";
import { SuccessTost } from "../../Helper/FormHelper";
import {
  DeleteAlertBlogPost,
  DeleteAlertPortfolio,
} from "../../Helper/DeleteAlert";
import {
  getEmail,
  getPassword,
  removeSession,
} from "../../Helper/SessionHelper";
import store from "../../Redux/Store/Store";
import { paramsData } from "../../Redux/stateSlice/BlogDataSlicer";
import ReactPaginate from "react-paginate";

const AllProjectComponent = () => {
  const params = useParams();
  useEffect(() => {
    PortfolioPagination__Request__API(1);
    verifyEmail(getEmail(), getPassword()).then((res) => {
      if (res === true) {
        removeSession();
      }
    });
  }, []);
  let navigate = useNavigate();
  // const PortfolioData = useSelector((state) => state.PortfolioData.data);
  const PortfolioData = useSelector((state) => state.PortfolioData.pagination);
  const TotalData = useSelector((state) => state.PortfolioData.total);
  console.log(PortfolioData);
  const editPost = (id) => {
    singlePortfolioPost__Request__API(id).then((res) => {
      if (res === true) {
        navigate(`/edit-project/${id}`);
      }
    });
  };

  const deletePost = (id) => {
    DeleteAlertPortfolio(id).then((res) => {
      if (res === true) {
        SuccessTost("Delete Success!");
        readPortfolioPost__Request__API();
        PortfolioPagination__Request__API(1);
      }
    });
  };

  const handelPageClick = (event) => {
    let pageNo = event.selected;

    PortfolioPagination__Request__API(pageNo + 1).then((res) => {
      if (res === true) {
        store.dispatch(paramsData(pageNo + 1));
        navigate(`/all-project/${pageNo + 1}`);
      }
    });
  };
  return (
    <div className="allPostComponent">
      <div className="wrapper">
        <div className="wrapper__body">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="myTable table-responsive">
                  <table>
                    <tr>
                      <th style={{ width: "10%" }}>No:</th>
                      <th style={{ width: "50%" }}>Project Title</th>
                      <th style={{ width: "15%" }}>Img</th>
                      <th style={{ width: "25%" }}>Action</th>
                    </tr>
                    {PortfolioData.map((value, index) => (
                      <tr key={index}>
                        <td>1</td>
                        <td>
                          {value.title.split(" ").slice(0, 10).join(" ")} ...
                        </td>
                        <td>
                          <img src={value.img} alt="" />
                        </td>
                        <td className="button">
                          <span>
                            <button
                              className="edit"
                              onClick={() => editPost(value._id)}
                            >
                              Edit
                            </button>
                          </span>
                          <span>
                            <button className="edit open">
                              <Link
                                to={`/project-details/${value._id}`}
                                target="blank"
                              >
                                Open Post
                              </Link>
                            </button>
                          </span>
                          <span>
                            <button
                              className="delete"
                              onClick={() => deletePost(value._id)}
                            >
                              Delete
                            </button>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </table>
                  {TotalData > 6 && (
                    <div className="pagination__data">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjectComponent;
