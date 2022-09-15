import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
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
const AllPostComponent = () => {
  useEffect(() => {
    verifyEmail(getEmail(), getPassword()).then((res) => {
      if (res === true) {
        removeSession();
      }
    });
  }, []);
  let navigate = useNavigate();
  const BlogData = useSelector((state) => state.BlogData.data);
  useEffect(() => {
    readBlogPost__Request__API().then((res) => {});
  }, []);

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
        readBlogPost__Request__API();
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
                      <th style={{ width: "50%" }}>Blog-Post-Title</th>
                      <th style={{ width: "15%" }}>Img</th>
                      <th style={{ width: "25%" }}>Action</th>
                    </tr>
                    {BlogData.map((value, index) => (
                      <tr key={index}>
                        <td>1</td>
                        <td>{value.title}</td>
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

export default AllPostComponent;
