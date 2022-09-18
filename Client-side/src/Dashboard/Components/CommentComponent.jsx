import React, { useState } from "react";
import { useEffect } from "react";
import {
  CommentPagination__Request__API,
  readCommentPost__Request__API,
  updateCommentPost__Request__API,
  verifyEmail,
} from "../../API/API";
import { useSelector } from "react-redux";
import { SuccessTost } from "../../Helper/FormHelper";
import { DeleteAlertCommentPost } from "../../Helper/DeleteAlert";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getEmail,
  getPassword,
  removeSession,
} from "../../Helper/SessionHelper";
import ReactPaginate from "react-paginate";
import store from "../../Redux/Store/Store";
import { ParamsPaginationCommentData } from "../../Redux/stateSlice/CommentSlicer";
const CommentComponent = () => {
  const params = useParams();
  useEffect(() => {
    readCommentPost__Request__API();
    CommentPagination__Request__API(params.pageNo);
    verifyEmail(getEmail(), getPassword()).then((res) => {
      if (res === true) {
        removeSession();
      }
    });
  }, []);

  const handelApprove = (id, status) => {
    // setApprove(!Approve);
    let newStatus;
    if (status === true) {
      newStatus = false;
    } else {
      newStatus = true;
    }
    updateCommentPost__Request__API(id, newStatus).then((res) => {
      if (res === true) {
        readCommentPost__Request__API();
        CommentPagination__Request__API(params.pageNo);
      }
    });
  };

  const deletePost = (id) => {
    DeleteAlertCommentPost(id).then((res) => {
      if (res === true) {
        SuccessTost("Delete Success!");
        readCommentPost__Request__API();
        CommentPagination__Request__API(params.pageNo);
      }
    });
  };

  const handelPageClick = (event) => {
    let pageNo = event.selected;

    CommentPagination__Request__API(pageNo + 1).then((res) => {
      if (res === true) {
        store.dispatch(ParamsPaginationCommentData(pageNo + 1));
        navigate(`/comment/${pageNo + 1}`);
      }
    });
  };
  let navigate = useNavigate();
  const AllCommentData = useSelector((state) => state.CommentData.AllComment);

  const commentDataPagination = useSelector(
    (state) => state.CommentData.paginationAllComment
  );
  const TotalCommentData = useSelector(
    (state) => state.CommentData.totalCommentData
  );

  return (
    <div className="allPostComponent">
      <div className="wrapper">
        <div className="wrapper__body">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="header__text">
                  <h2>Total Comment: {AllCommentData.length} </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="myTable table-responsive">
                  <table>
                    <tr>
                      <th style={{ width: "15%" }}>Blog Title</th>
                      <th style={{ width: "23%" }}>Comment</th>
                      <th style={{ width: "15%" }}>Name</th>
                      <th style={{ width: "10%" }}>Email</th>
                      <th style={{ width: "5%" }}>Status</th>
                      <th style={{ width: "5%" }}>Date</th>
                      <th style={{ width: "25%" }}>Action</th>
                    </tr>
                    {commentDataPagination.map((value, index) => (
                      <tr key={index}>
                        <td>
                          <button className="blogLink">
                            <Link
                              target="blank"
                              to={`/blog-details/${value.blogId}`}
                            >
                              See Blog
                            </Link>
                          </button>
                        </td>
                        <td>
                          {value.description?.split(" ").slice(0, 10).join(" ")}
                        </td>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                        <td>
                          {value.status === true ? (
                            <span className="text-success font-weight-bold">
                              Approve
                            </span>
                          ) : (
                            <span className="text-warning">pending</span>
                          )}
                        </td>
                        <td>12/12/2022</td>
                        <td className="button">
                          <span>
                            <button
                              className={
                                value.status === false
                                  ? "edit Approve"
                                  : "edit Disapprove"
                              }
                              onClick={() =>
                                handelApprove(value._id, value.status)
                              }
                            >
                              {value.status === false
                                ? "Approve"
                                : "Disapprove"}
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
                  {TotalCommentData > 6 && (
                    <div className="pagination__data">
                      <ReactPaginate
                        className=""
                        previousLabel="Next"
                        nextLabel="Prev"
                        pageLinkClassName="button"
                        previousLinkClassName="previousLinkClassName"
                        nextLinkClassName="nextLinkClassName"
                        breakLabel=". . ."
                        pageCount={TotalCommentData / 6}
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

export default CommentComponent;
