import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { GiFireDash } from "react-icons/gi";
import { FaBlog } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { RiArrowRightSLine } from "react-icons/ri";
import NavItem from "../scripts/NavItems";
const MasterLayout = (props) => {
  const { MENU, PAGES, COMPONENTS } = NavItem();
  useEffect(() => {
    let arrow = document.getElementsByClassName("navItems");
    console.log(arrow);
    for (let i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e) => {
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
      <menu className="dashboard__layout">
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
          {/* <ul className="navItem__body">
            <li className="navItems">
              <Link className="nav__link" to={"/dashboard"}>
                <span className="nav__items__icon">
                  <GiFireDash />
                </span>
                Dashboard
                <span className="arrow">
                  <RiArrowRightSLine />
                </span>
              </Link>
              <ul className="dropdown__body">
                <li className="dropdown__navItems">
                  <Link className="dropdown__navLink" to={"/dashboard"}>
                    <span>
                      <FiMinus />
                    </span>{" "}
                    Analytics
                  </Link>
                </li>
                <li className="dropdown__navItems">
                  <Link className="dropdown__navLink" to={"/dashboard"}>
                    Ecommerce
                  </Link>
                </li>
                <li className="dropdown__navItems">
                  <Link className="dropdown__navLink" to={"/dashboard"}>
                    Projects
                  </Link>
                </li>
                <li className="dropdown__navItems">
                  <Link className="dropdown__navLink" to={"/dashboard"}>
                    NFT
                  </Link>
                </li>
              </ul>
            </li>
            <li className="navItems">
              <Link className="nav__link" to={"/dashboard"}>
                <span className="nav__items__icon">
                  <FaBlog />
                </span>{" "}
                Blog
              </Link>
            </li>
            <li className="navItems">
              <Link className="nav__link" to={"/dashboard"}>
                <span className="nav__items__icon">
                  <GiFireDash />
                </span>
                Dashboard
                <span className="arrow">
                  <RiArrowRightSLine />
                </span>
              </Link>
              <ul className="dropdown__body">
                <li className="dropdown__navItems">
                  <Link className="dropdown__navLink" to={"/dashboard"}>
                    Analytics
                  </Link>
                </li>
                <li className="dropdown__navItems">
                  <Link className="dropdown__navLink" to={"/dashboard"}>
                    Ecommerce
                  </Link>
                </li>
                <li className="dropdown__navItems">
                  <Link className="dropdown__navLink" to={"/dashboard"}>
                    Projects
                  </Link>
                </li>
                <li className="dropdown__navItems">
                  <Link className="dropdown__navLink" to={"/dashboard"}>
                    NFT
                  </Link>
                </li>
              </ul>
            </li>
          </ul> */}
        </nav>
      </menu>
      <div>{props.children}</div>
    </div>
  );
};

export default MasterLayout;
