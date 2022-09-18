import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  blogPagination__Request__API,
  readBlogPost__Request__API,
  singleBlogPost__Request__API,
  verifyEmail,
} from "../../API/API";
import { SuccessTost } from "../../Helper/FormHelper";
import { DeleteAlertBlogPost } from "../../Helper/DeleteAlert";
import {
  getEmail,
  getPassword,
  removeSession,
} from "../../Helper/SessionHelper";
import store from "../../Redux/Store/Store";
import { paramsData } from "../../Redux/stateSlice/BlogDataSlicer";
const AllPostComponent = () => {
  const params = useParams();
  useEffect(() => {
    blogPagination__Request__API(params.pageNo);
    readBlogPost__Request__API();
    verifyEmail(getEmail(), getPassword()).then((res) => {
      if (res === true) {
        removeSession();
      }
    });
  }, []);
  let navigate = useNavigate();

  const handelPageClick = (event) => {
    let pageNo = event.selected;

    blogPagination__Request__API(pageNo + 1).then((res) => {
      if (res === true) {
        store.dispatch(paramsData(pageNo + 1));
        navigate(`/all-post/${pageNo + 1}`);
      }
    });
  };
  const editPost = (id) => {
    singleBlogPost__Request__API(id).then((res) => {
      if (res === true) {
        navigate(`/edit-post/${id}`);
      }
    });
  };

  const deletePost = (id) => {
    DeleteAlertBlogPost(id).then((res) => {
      if (res === true) {
        SuccessTost("Delete Success!");
        blogPagination__Request__API(params.pageNo);
        readBlogPost__Request__API();
      }
    });
  };

  const BlogData = useSelector((state) => state.BlogData.pagination);
  const TotalData = useSelector((state) => state.BlogData.total);
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
                      <th style={{ width: "50%" }}>Blog-Post-Title</th>
                      <th style={{ width: "15%" }}>Img</th>
                      <th style={{ width: "25%" }}>Action</th>
                    </tr>
                    {BlogData.map((value, index) => (
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
                                to={`/blog-details/${value._id}`}
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

export default AllPostComponent;
