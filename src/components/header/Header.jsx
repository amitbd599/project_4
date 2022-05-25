import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { Container } from "react-bootstrap";
import { MdOutlineLanguage } from "react-icons/md";
import imgScript from "../../Script/ImgScript";

export default class Header extends Component {
  constructor(props) {
    super(props);
    // this.addActiveClass = this.addActiveClass.bind(this);
    this.state = { active: false };
    this.toggleClass = this.toggleClass.bind(this);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.closeMenuTrigger = this.closeMenuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are Loaded.");
    });
  }

  toggleClass() {
    this.setState({ active: !this.state.active });
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
    const { logoLight, logoBlack } = imgScript();
    const { logo } = this.props;
    var logoURL;

    if (logo === "dark") {
      logoURL = logoBlack;
    } else if (logo === "light") {
      logoURL = logoLight;
    }
    return (
      <header className={`header-area header-static header-fixed`}>
        <Container>
          <div className="header-wrapper" id="header-wrapper">
            <div className="header-left">
              <div className="logo">
                <Link to={"/"}>
                  <h2>{logoURL}</h2>
                </Link>
              </div>
            </div>
            <div className="header-right">
              <nav className="mainMenuNav d-lg-block">
                <ul className="mainMenu">
                  <li className="">
                    <Link to="/">Home</Link>
                  </li>

                  <li className="dropdown">
                    <Link to="#">Service</Link>
                    <ul className="submenu">
                      <li>
                        <Link to="/service">Service</Link>
                      </li>
                      <li>
                        <Link to="/service-details">Service Details</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="">
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li className="dropdown">
                    <Link className="navLinks" to="#">
                      Page
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/blog-details">Blog Details</Link>
                      </li>
                      <li>
                        <Link to="/project">Project</Link>
                      </li>
                      <li>
                        <Link to="/project-details">Project Details</Link>
                      </li>
                      <li>
                        <Link to="/team">Team</Link>
                      </li>

                      <li>
                        <Link to="/404">404</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link to="#">Blocks</Link>
                    <ul className="submenu">
                      <li>
                        <Link to="/button">Button</Link>
                      </li>
                      <li>
                        <Link to="/video-popup">Video Popup</Link>
                      </li>
                      <li>
                        <Link to="/progressbar">Progress Bar</Link>
                      </li>
                      <li>
                        <Link to="/gallery">Gallery</Link>
                      </li>
                      <li>
                        <Link to="#">Counters</Link>
                      </li>
                      <li>
                        <Link to="#">Client Logo</Link>
                      </li>
                      <li>
                        <Link to="#">Contact Form</Link>
                      </li>
                      <li>
                        <Link to="#">Google Map</Link>
                      </li>
                      <li>
                        <Link to="#">Pricing Table</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    <Link to="/digitalCleaningService">Contact</Link>
                  </li>
                </ul>
              </nav>

              <div className="dataField">
                <span className="lang" onClick={this.toggleClass}>
                  {" "}
                  <MdOutlineLanguage />{" "}
                  {this.state.active ? "English" : "Spanish "}
                </span>
                <span>
                  <a className="small_solid_color" href="#">
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
