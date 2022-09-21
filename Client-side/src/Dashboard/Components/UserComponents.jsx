import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Get_All_User_API, verifyEmail } from "../../API/API";
import {
  getEmail,
  getPassword,
  removeSession,
} from "../../Helper/SessionHelper";
const UserComponents = () => {
  useEffect(() => {
    verifyEmail(getEmail(), getPassword()).then((res) => {
      if (res === true) {
        removeSession();
      }
    });
    Get_All_User_API();
  }, []);
  const userData = useSelector((state) => state.profile.getAllUserValue);
  console.log(userData);
  const logOut = () => {
    removeSession();
  };
  return (
    <div className="userComponents">
      <div className="wrapper">
        <div className="wrapper__body">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="user__body" style={{ overflowX: "auto" }}>
                  <table>
                    <tr>
                      <th style={{ width: "25%" }}>Image</th>
                      <th style={{ width: "25%" }}>Email</th>
                      <th style={{ width: "25%" }}>User Name</th>
                      <th style={{ width: "25%" }}>Role</th>
                    </tr>
                    {userData.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <img className="img-fluid" src={item.photo} alt="" />
                        </td>
                        <td>{item.email}</td>
                        <td>{item.name}</td>
                        <td>
                          <span className="my__btn">{item.role}</span>
                        </td>
                      </tr>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserComponents;
