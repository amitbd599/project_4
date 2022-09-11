import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMinus } from "react-icons/fi";
import { RiArrowRightSLine } from "react-icons/ri";
import NavItem from "../scripts/NavItems";
import dashboard_script from "../scripts/FlagItems";
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
  const removeElement = () => {
    setShow("");
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
  }, []);

  return (
    <div className="MasterLayout">
      <menu
        className={` ${
          active ? "dashboard__layout" : "dashboard__layout active"
        }`}
      >
        <nav>
          <div className="logo__section">
            <img src="/assets/images/logo/LogoLight.png" alt="" />
          </div>
          <div className="title">
            <p>MENU</p>
          </div>
          <ul className="navItem__body">
            {MENU.map((item, index) => (
              <li key={index} className="navItems">
                <Link className="nav__link" to={"/dashboard"}>
                  <span className="nav__items__icon">
                    <span className={`mdi ` + item.icon}></span>
                  </span>
                  {item.navItem}
                  <span className="arrow">
                    <RiArrowRightSLine />
                  </span>
                </Link>
                {/*  */}
                <ul className="dropdown__body">
                  {item.dropDown?.map((item, index) => (
                    <li className="dropdown__navItems">
                      <Link className="dropdown__navLink" to={"/dashboard"}>
                        <span>
                          <FiMinus />
                        </span>{" "}
                        {item.dropDown__link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="title">
            <p>PAGES</p>
          </div>
          <ul className="navItem__body">
            {PAGES.map((item, index) => (
              <li key={index} className="navItems">
                <Link className="nav__link" to={"/dashboard"}>
                  <span className="nav__items__icon">
                    <span className={`mdi ` + item.icon}></span>
                  </span>
                  {item.navItem}
                  <span className="arrow">
                    <RiArrowRightSLine />
                  </span>
                </Link>
                <ul className="dropdown__body">
                  {item.dropDown?.map((item, index) => (
                    <li className="dropdown__navItems">
                      <Link className="dropdown__navLink" to={"/dashboard"}>
                        <span>
                          <FiMinus />
                        </span>{" "}
                        {item.dropDown__link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="title">
            <p>COMPONENTS</p>
          </div>
          <ul className="navItem__body">
            {COMPONENTS.map((item, index) => (
              <li key={index} className="navItems">
                <Link className="nav__link" to={"/dashboard"}>
                  <span className="nav__items__icon">
                    <span className={`mdi ` + item.icon}></span>
                  </span>
                  {item.navItem}
                  <span className="arrow">
                    <RiArrowRightSLine />
                  </span>
                </Link>
                <ul className="dropdown__body">
                  {item.dropDown?.map((item, index) => (
                    <li className="dropdown__navItems">
                      <Link className="dropdown__navLink" to={"/dashboard"}>
                        <span>
                          <FiMinus />
                        </span>{" "}
                        {item.dropDown__link}
                      </Link>
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
                                <img
                                  src="https://res.cloudinary.com/amitjs/image/upload/v1651588627/Client%20Img/Woman%20600%2A600/193321431_775587776678149_1291036863068516247_n-removebg-preview_7_bkfyak.png"
                                  alt=""
                                />
                              </div>
                              <div className="text__file">
                                <span>
                                  <strong>Amit Biswas</strong>
                                </span>
                                <span>Founder</span>
                              </div>
                            </div>
                            <div className="user__profile__dropdown">
                              <div className="profile__dropdown__body">
                                <div className="dropdown__body">
                                  <ul>
                                    <li>
                                      {" "}
                                      <a href="#">
                                        <span class="mdi mdi-account"></span>
                                        <span>Profile</span>
                                      </a>
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#">
                                        <span class="mdi mdi-email"></span>
                                        <span>Inbox</span>
                                      </a>
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#">
                                        <span class="mdi mdi-clipboard-text"></span>
                                        <span>Task</span>
                                      </a>
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#">
                                        <span class="mdi mdi-comment-processing"></span>
                                        <span>Chat</span>
                                      </a>
                                    </li>
                                    <hr />
                                    <li>
                                      {" "}
                                      <a href="#">
                                        <span class="mdi mdi-wrench"></span>
                                        <span>Setting</span>
                                      </a>
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#">
                                        <span class="mdi mdi-cart"></span>
                                        <span>Pricing</span>
                                      </a>
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#">
                                        <span class="mdi mdi-help-circle"></span>
                                        <span>FAQ</span>
                                      </a>
                                    </li>
                                    <li>
                                      {" "}
                                      <a href="#">
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
      <div className="main__container__body">{props.children}</div>
    </div>
  );
};

export default MasterLayout;
