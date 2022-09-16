import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getMail,
  single_Massage__Request__API,
  verifyEmail,
} from "../../API/API";
import { SuccessTost } from "../../Helper/FormHelper";
import { DeleteAlertSingleMassage } from "../../Helper/DeleteAlert";
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
  // console.log(allMassageData.length);

  let filter = allMassageData.filter((d) => d.isOpen === false);

  console.log(filter);
  useEffect(() => {
    getMail().then((res) => {});
  }, []);

  const openMassage = (id) => {
    single_Massage__Request__API(id).then((res) => {
      if (res === true) {
        navigate(`/single-massage/${id}`);
      }
    });
  };

  const deleteMassage = (id) => {
    DeleteAlertSingleMassage(id).then((res) => {
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
                  <h2>Unread Massage: {filter.length} </h2>
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
                      <th style={{ width: "15%" }}>Name</th>
                      <th style={{ width: "5%" }}>Email</th>
                      <th style={{ width: "35%" }}>Massage</th>
                      <th style={{ width: "5%" }}>Status</th>
                      <th style={{ width: "20%" }}>Action</th>
                    </tr>
                    {allMassageData.map((value, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{value.createdDate}</td>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                        <td>
                          {value.description.split(" ").slice(0, 10).join(" ")}{" "}
                          ...
                        </td>
                        <td>
                          {value.isOpen === true ? (
                            <strong className="text-success">Open</strong>
                          ) : (
                            <strong className="text-warning">Pending</strong>
                          )}
                        </td>
                        <td className="button">
                          <span>
                            <button
                              className="edit"
                              onClick={() => openMassage(value._id)}
                            >
                              Open
                            </button>
                          </span>
                          <span>
                            <button
                              className="delete"
                              onClick={() => deleteMassage(value._id)}
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
