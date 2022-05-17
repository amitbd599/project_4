import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SideBar_One extends Component {
  render() {
    return (
      <div className="bgImg-9 sideBar_One">
        <div className="">
          <div className="inner ">
            <img src="/assets/images/singleBlog/telephone.png" alt="" />
            <h3>+99 3625 3265</h3>
            <p>admin@amitjs.com</p>
            <Link className="btn-transparent_opacity" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
