import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getMail,
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
const AllMassageComponent = () => {
  useEffect(() => {
    verifyEmail(getEmail(), getPassword()).then((res) => {
      if (res === true) {
        removeSession();
      }
    });
  }, []);
  let navigate = useNavigate();
  const allMassageData = useSelector((state) => state.AllMassageData.data);
  useEffect(() => {
    getMail().then((res) => {});
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
        getMail();
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
                <div className="header__text">
                  <h2>All Massage</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="myTable table-responsive">
                  <table>
                    <tr>
                      <th style={{ width: "5%" }}>No:</th>
                      <th style={{ width: "15%" }}>Date</th>
                      <th style={{ width: "10%" }}>Name</th>{" "}
                      <th style={{ width: "5%" }}>Email</th>
                      <th style={{ width: "40%" }}>Massage</th>
                      <th style={{ width: "5%" }}>Status</th>
                      <th style={{ width: "20%" }}>Action</th>
                    </tr>
                    {allMassageData.map((value, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{value.createdDate}</td>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                        <td>{value.description.slice(0, 45)} ...</td>
                        <td>
                          <strong className="text-success">Open</strong>
                          {/* <strong className="text-warning">Pending</strong> */}
                        </td>
                        <td className="button">
                          <span>
                            <button
                              className="edit"
                              onClick={() => editPost(value._id)}
                            >
                              Open
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

export default AllMassageComponent;
