import React from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
const Header = (props) => {
  const { logo } = props;
  let logoUrl;
  if (logo === "light") {
    logoUrl = (
      <img
        src="/assets/images/logo/LogoLight.png"
        alt="Digital Cleaning Service"
      />
    );
  } else if (logo === "dark") {
    logoUrl = (
      <img
        src="/assets/images/logo/LogoBlack.png"
        alt="Digital Cleaning Service"
      />
    );
  }
  return (
    <header className={`header_main header_fixed`}>
      <div className="header_wrapper">
        <div className="header_left">
          <Link className="logo" to="/digitalCleaningService">{logoUrl}</Link>
        </div>
        <div className="header_right ">
          <nav className="mainMenuNavBar d-lg-block">
            <ul className="mainMenu">
              <li className="if_dropDown">
                <Link to="/digitalCleaningService">Home</Link>
                <ul className="subMenu">
                  <li>
                    <Link to="/digitalCleaningService">Main Demo</Link>
                  </li>
                  <li>
                    <Link to="/digitalCleaningService">
                      Main Demo Light Mode
                    </Link>
                  </li>
                  <li>
                    <Link to="/digitalCleaningService">
                      Main Demo Dark Mode
                    </Link>
                  </li>
                  <li>
                    <Link to="/digitalCleaningService">
                      Main Demo Portfolio Mode
                    </Link>
                  </li>
                  <li>
                    <Link to="/digitalCleaningService">
                      Main Demo Agency Landing
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="if_dropDown">
                <Link to="#">Service</Link>
                <ul className="subMenu">
                  <li>
                    <Link to="/digitalCleaningService">Service</Link>
                  </li>
                  <li>
                    <Link to="/digitalCleaningService">Service Details</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="header_btn">
            <a href="/digitalCleaningService" target={"blank"}>
              <span className="">Buy Now</span>
            </a>
          </div>

          {/* Start mobile humBerger menu */}
          <div className="humBergerMenu d-block d-lg-none ">
            <span className="menuTriggerBtn">
              <FiMenu />
            </span>
          </div>

          {/* Menu trigger Close */}
          <div className="closeMenu d-lg-none">
            <span>
              <FiX />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
