import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getMail,
  MassagePagination__Request__API,
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
import store from "../../Redux/Store/Store";
import { paramsMassage } from "../../Redux/stateSlice/AllMassageSlicer";
import ReactPaginate from "react-paginate";

const AllMassageComponent = () => {
  const params = useParams();
  useEffect(() => {
    getMail();
    MassagePagination__Request__API(params.pageNo);
    verifyEmail(getEmail(), getPassword()).then((res) => {
      if (res === true) {
        removeSession();
      }
    });
  }, []);

  let navigate = useNavigate();
  const MassageData = useSelector(
    (state) => state.AllMassageData.PaginationMassageData
  );
  const TotalData = useSelector(
    (state) => state.AllMassageData.totalMassageData
  );
  const AllMassageData = useSelector(
    (state) => state.AllMassageData.MassageData
  );

  let filter = AllMassageData.filter((d) => d.isOpen === false);

  const handelPageClick = (event) => {
    let pageNo = event.selected;

    MassagePagination__Request__API(pageNo + 1).then((res) => {
      if (res === true) {
        store.dispatch(paramsMassage(pageNo + 1));
        navigate(`/massage/${pageNo + 1}`);
      }
    });
  };

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
        MassagePagination__Request__API(params.pageNo);
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
                      <th style={{ width: "15%" }}>Date</th>
                      <th style={{ width: "20%" }}>Name</th>
                      <th style={{ width: "5%" }}>Email</th>
                      <th style={{ width: "35%" }}>Massage</th>
                      <th style={{ width: "2%" }}>Status</th>
                      <th style={{ width: "20%" }}>Action</th>
                    </tr>
                    {MassageData.map((value, index) => (
                      <tr key={index}>
                        <td>{value.createdDate}</td>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                        <td>
                          {value.description?.split(" ").slice(0, 10).join(" ")}{" "}
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

export default AllMassageComponent;
