import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
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

const AllProjectComponent = () => {
  useEffect(() => {
    verifyEmail(getEmail(), getPassword()).then((res) => {
      if (res === true) {
        removeSession();
      }
    });
  }, []);
  let navigate = useNavigate();
  const PortfolioData = useSelector((state) => state.PortfolioData.data);
  useEffect(() => {
    readPortfolioPost__Request__API().then((res) => {});
  }, []);

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
                        <td>{index + 1}</td>
                        <td>{value.title.split(" ").slice(0, 5).join(" ")}</td>
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

export default AllProjectComponent;
