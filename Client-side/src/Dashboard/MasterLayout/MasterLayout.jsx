import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMinus } from "react-icons/fi";
import { RiArrowRightSLine } from "react-icons/ri";
import NavItem from "../scripts/NavItems";
import dashboard_script from "../scripts/Dashboard_script";
import DashboardFooter from "../Components/DashboardFooter";
import {
  Get_All_User_API,
  Get_Single_User_API,
  verifyEmail,
} from "../../API/API";
import {
  getEmail,
  getPassword,
  removeSession,
} from "../../Helper/SessionHelper";
import { useSelector } from "react-redux";
const MasterLayout = (props) => {
  const [active, setActive] = useState(true);
  const [show, setShow] = useState("");
  const { flagItem, webApps } = dashboard_script();
  const [flag, setFlag] = useState(flagItem[0]);
  const { MENU, PAGES, COMPONENTS } = NavItem();

  const handelClick = () => {
    setActive(!active);
  };
  const handelFlag = (item) => {
    setFlag(item);
  };
  // ====

  useEffect(() => {
    let arrow = document.getElementsByClassName("navItems");
    for (let i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e) => {
        setShow("");
        let dropdown = e.target.parentElement.children[1];
        let arrow = e.target.children[1];
        let active = e.target;
        dropdown.classList.toggle("show__Dropdown__Menu");
        arrow.classList.toggle("rotate");
        active.classList.toggle("active");
      });
    }
    verifyEmail(getEmail(), getPassword()).then((res) => {
      if (res === true) {
        removeSession();
      }
    });
    Get_Single_User_API(getEmail());
  }, []);

  // useEffect(() => {
  //   verifyEmail(getEmail(), getPassword()).then((res) => {
  //     if (res === true) {
  //       removeSession();
  //     }
  //   });
  //   Get_Single_User_API(getEmail());
  // }, []);

  const userData = useSelector((state) => state.profile.getSingleUserValue);

  const logOut = () => {
    removeSession();
  };

  return (
    <div className="MasterLayout">
      <menu
        className={` ${
          active ? "dashboard__layout" : "dashboard__layout active"
        }`}
      >
        <nav>
          <div className="logo__section">
            <Link to={"/dashboard"}>
              <img src="/assets/images/logo/LogoLight.png" alt="" />
            </Link>
          </div>
          <div className="title">
            <p>MENU</p>
          </div>
          <ul className="navItem__body">
            {MENU.map((item, index) => (
              <li key={index} className="navItems">
                <span className="nav__link">
                  <span className="nav__items__icon">
                    <span className={`mdi ` + item.icon}></span>
                  </span>
                  {item.navItem}
                  <span className="arrow">
                    <RiArrowRightSLine />
                  </span>
                </span>
                {/*  */}
                <ul className="dropdown__body">
                  {item.dropDown?.map((item, index) => (
                    <li className="dropdown__navItems" key={index}>
                      <NavLink
                        activeClassName="active"
                        className="dropdown__navLink"
                        to={`${item.link}`}
                      >
                        <span>
                          <FiMinus />
                        </span>{" "}
                        {item.dropDown__link}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </menu>
      <div className={`${active ? "top__section" : "top__section active"}`}>
        <div className="wrapper">
          <div className="wrapper__body">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <div className="left__section">
                    <div className="toggle__for__navbar">
                      <span
                        className="mdi mdi-format-align-left"
                        onClick={handelClick}
                      ></span>
                    </div>
                    <div className="search__section">
                      <input type="text" placeholder="Search..." />
                      <span className="mdi mdi-magnify"></span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="right__section">
                    <div className="wrapper">
                      <div className="wrapper__body">
                        <div className="inner__left">
                          {/* language Items */}
                          <div
                            className={`${
                              show ? "language" : "language active"
                            }`}
                          >
                            <div className="language__header" tabIndex="0">
                              <div className="img__file">
                                <img src={flag.imgSrc} alt="" />
                              </div>
                            </div>
                            <div className="language__dropdown ">
                              <ul>
                                {flagItem.map((item, index) => (
                                  <li
                                    key={index}
                                    onClick={() => handelFlag(item)}
                                  >
                                    <div className="img__file">
                                      <img src={item.imgSrc} alt="" />
                                    </div>
                                    <div className="name">
                                      <p>{item.name}</p>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          {/* Apps Items */}
                          <div className="apps">
                            <div className="apps__header" tabIndex="0">
                              <div className="img__file">
                                <span class="mdi mdi-widgets"></span>
                              </div>
                            </div>
                            <div className="apps__dropdown">
                              <div className="apps__dropdown__body">
                                <div className="dropdown__header">
                                  <h3>Web Apps</h3>
                                  <div>
                                    <button className="my__btn">
                                      View All Apps
                                    </button>
                                  </div>
                                </div>
                                <div className="dropdown__body">
                                  {webApps.map((item, index) => (
                                    <div className="items" key={index}>
                                      <img
                                        className="img-fluid"
                                        src={item.imgSrc}
                                        alt=""
                                      />
                                      <a href="JavaScript:void(0)">
                                        {item.name}
                                      </a>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Notification  */}
                          <div className="notification">
                            <div className="notification__header" tabIndex="0">
                              <div className="img__file">
                                <span class="mdi mdi-bell-ring"></span>
                              </div>
                            </div>
                            <div className="notification__dropdown">
                              <div className="notification__dropdown__body">
                                <div className="dropdown__header">
                                  <h3>Notifications</h3>
                                  <button className="my__btn">Clear</button>
                                </div>

                                <div className="dropdown__body">
                                  <div className="items">
                                    <a href="JavaScript:void(0)">
                                      <div className="icon__section">
                                        <span class="mdi mdi-comment-multiple-outline messages"></span>
                                      </div>
                                      <div className="text__file">
                                        <span>New Message Received</span>
                                        <span>3 hours ago</span>
                                      </div>{" "}
                                    </a>
                                  </div>
                                  <div className="items">
                                    <a href="JavaScript:void(0)">
                                      <div className="icon__section email">
                                        <span class="mdi mdi-email-outline"></span>
                                      </div>
                                      <div className="text__file">
                                        <span>New Email Received</span>
                                        <span>3 hours ago</span>
                                      </div>
                                    </a>
                                  </div>

                                  <div className="items">
                                    <a href="JavaScript:void(0)">
                                      <div className="icon__section order">
                                        <span class="mdi mdi-email-outline"></span>
                                      </div>
                                      <div className="text__file">
                                        <span>New Order Received</span>
                                        <span>3 hours ago</span>
                                      </div>
                                    </a>
                                  </div>
                                  <div className="items">
                                    <a href="JavaScript:void(0)">
                                      {" "}
                                      <div className="icon__section comment">
                                        <span class="mdi mdi-email-outline"></span>
                                      </div>
                                      <div className="text__file">
                                        <span>New Order Received</span>
                                        <span>3 hours ago</span>
                                      </div>
                                    </a>
                                  </div>
                                  <hr />
                                  <div className="all__notification__btn">
                                    <button className="my__btn">
                                      View All Notifications
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="inner__right">
                          {/* User Profile */}
                          <div className="user__profile">
                            <div className="user__profile__header" tabIndex="0">
                              <div className="img__file">
                                <img src={userData.photo} alt="" />
                              </div>
                              <div className="text__file">
                                <span>
                                  <strong>{userData.name}</strong>
                                </span>
                                <span>{userData.role}</span>
                              </div>
                            </div>
                            <div className="user__profile__dropdown">
                              <div className="profile__dropdown__body">
                                <div className="dropdown__body">
                                  <ul>
                                    <li>
                                      {" "}
                                      <Link to="/all-user">
                                        <span class="mdi mdi-account"></span>
                                        <span>Profile</span>
                                      </Link>
                                    </li>
                                    <li>
                                      {" "}
                                      <Link to="/massage/1">
                                        <span class="mdi mdi-email"></span>
                                        <span>Inbox</span>
                                      </Link>
                                    </li>
                                    <li>
                                      {" "}
                                      <Link to="/create-new">
                                        <span class="mdi mdi-clipboard-text"></span>
                                        <span>Task</span>
                                      </Link>
                                    </li>

                                    <hr />

                                    <li onClick={logOut}>
                                      {" "}
                                      <a href="JavaScript:void(0)">
                                        <span class="mdi mdi-logout-variant"></span>
                                        <span>Logout</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          active ? "main__container__body" : "main__container__body active"
        }`}
      >
        {props.children}
      </div>
      <DashboardFooter />
    </div>
  );
};

export default MasterLayout;
