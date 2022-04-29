import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { Container } from "react-bootstrap";
import { MdOutlineLanguage } from "react-icons/md";

export default class Header extends Component {
  constructor(props) {
    super(props);
    // this.addActiveClass = this.addActiveClass.bind(this);
    this.state = { active: false };
    this.toggleClass= this.toggleClass.bind(this);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.closeMenuTrigger = this.closeMenuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are Loaded.");
    });
  }

  toggleClass() {
    this.setState({active: !this.state.active });
  }
  menuTrigger() {
    document.querySelector(".header-wrapper").classList.add("menu-open");
  }

  closeMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }
  componentDidMount() {
    var elements = document.querySelectorAll(".dropdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }

    this.setState({ data: true });
  }

  componentDidUpdate() {
    console.log(this.data);
  }

  render() {
    const { logo } = this.props;
    var logoURL;

    if (logo === "dark") {
      logoURL = (
        <img src="/assets/images/logo/LogoBlack.png" alt="" srcset="" />
      );
    } else if (logo === "light") {
      logoURL = (
        <img src="/assets/images/logo/LogoLight.png" alt="" srcset="" />
      );
    }
    return (
      <header
        className={`header-area header-static header-fixed`}
      >
        <Container>
          <div className="header-wrapper" id="header-wrapper">
            <div className="header-left">
              <div className="logo">
                <a href="/">
                  <h2>{logoURL}</h2>
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
                  <li className="">
                    <Link to="/digitalCleaningService">About Us</Link>
                  </li>
                  <li className="">
                    <Link to="/digitalCleaningService">Contact</Link>
                  </li>
                </ul>
              </nav>

              <div className="dataField">
                <span className="lang" onClick={this.toggleClass}>
                  {" "}
                  <MdOutlineLanguage /> {this.state.active ? "English" : "Spanish "}
                </span>
                <span>
                  <a className="btn-transparent" href="#">
                    BUY NOW!
                  </a>
                </span>
              </div>

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
        </Container>
      </header>
    );
  }
}
