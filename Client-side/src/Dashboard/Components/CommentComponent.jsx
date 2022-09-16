import React, { useState } from "react";
import { useEffect } from "react";
import {
  readCommentPost__Request__API,
  updateCommentPost__Request__API,
} from "../../API/API";
import { useSelector } from "react-redux";
import { SuccessTost } from "../../Helper/FormHelper";
import { DeleteAlertCommentPost } from "../../Helper/DeleteAlert";
import { Link } from "react-router-dom";
const CommentComponent = () => {
  useEffect(() => {
    readCommentPost__Request__API();
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
      }
    });
  };

  const deletePost = (id) => {
    DeleteAlertCommentPost(id).then((res) => {
      if (res === true) {
        SuccessTost("Delete Success!");
        readCommentPost__Request__API();
      }
    });
  };

  const commentData = useSelector((state) => state.CommentData.AllComment);
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
                      <th style={{ width: "2%" }}>No:</th>
                      <th style={{ width: "15%" }}>Blog Title</th>
                      <th style={{ width: "23%" }}>Comment</th>
                      <th style={{ width: "15%" }}>Name</th>
                      <th style={{ width: "10%" }}>Email</th>
                      <th style={{ width: "5%" }}>Status</th>
                      <th style={{ width: "5%" }}>Date</th>
                      <th style={{ width: "25%" }}>Action</th>
                    </tr>
                    {commentData.map((value, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
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
                          {value.description.split(" ").slice(0, 10).join(" ")}
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
                  <div className="pagination">
                    <button>1</button>
                    <button>1</button>
                    <button>1</button>
                    <button>1</button>
                  </div>
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
