import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.closeMenuTrigger = this.closeMenuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are Loaded.");
    });
  }

  menuTrigger() {
    document.querySelector(".header-wrapper").classList.add("menu-open");
  }

  closeMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }

  render() {
    var elements = document.querySelectorAll(".dropdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = (function () {
          return function () {
            this.parentElement
              .querySelector(".submenu")
              .classList.toggle("active");
            this.classList.toggle("open");
          };
        })();
      }
    }

    return (
      <header className={`header-area header-static header-fixed`}>
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <a href="/">
                <h2>Logo</h2>
              </a>
            </div>
          </div>
          <div className="header-right">
            <nav className="mainMenuNav d-lg-block">
              <ul className="mainMenu">
                <li className="">
                  <Link to="/digitalCleaningService">Home</Link>
                </li>
                <li className="dropdown">
                  <Link className="navLinks" to="#">
                    Page
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="#">Page</Link>
                    </li>
                    <li>
                      <Link to="#">Page</Link>
                    </li>
                    <li>
                      <Link to="#">Page</Link>
                    </li>
                    <li>
                      <Link to="#">Page</Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link to="#">Group</Link>
                  <ul className="submenu">
                    <li>
                      <Link to="#">Page</Link>
                    </li>
                    <li>
                      <Link to="#">Page</Link>
                    </li>
                    <li>
                      <Link to="#">Page</Link>
                    </li>
                    <li>
                      <Link to="#">Page</Link>
                    </li>
                  </ul>
                </li>
                <li className="">
                  <Link to="/digitalCleaningService">Service</Link>
                </li>
              </ul>
            </nav>

            {/* <div className="myBtn">
              <a href="#" className="btn btn-success">LogIn</a>
            </div> */}

            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20 pl_sm--10">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.closeMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
